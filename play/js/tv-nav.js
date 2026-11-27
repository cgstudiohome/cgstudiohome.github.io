// ============================================================================
// Marinext 2100 - Android TV D-Pad Focus Engine, Native Bridge & Gamepad API
// Google Play TV App Quality & Mi Box Android 9 (API 28+) Compatible
// ============================================================================
(function (window, document) {
    "use strict";

    const FOCUS_SELECTOR = [
        "button:not([disabled]):not(.hidden)",
        "a[href]:not(.hidden)",
        'input:not([type="hidden"]):not([type="file"]):not([disabled])',
        "textarea:not([disabled])",
        "select:not([disabled])",
        ".map-node",
        ".lang-option-card",
        ".avatar-option-card",
        "#map-goldcoin-pill",
        "#map-emerald-pill",
        "#map-crystal-pill",
        ".rate-star-icon"
    ].join(", ");

    const MarinextTV = {
        isTvMode: false,
        inputMode: "touch", // "touch" | "keyboard" | "tv_remote" | "gamepad"
        focusedEl: null,
        _initialized: false,
        _activeContainerId: "",
        _exitArmTime: 0,
        _lastGamepadConnLogged: "",
        _remoteMomentumDir: 0, // -1 left, 1 right, 0 none
        _remoteMomentumUntil: 0,
        _remoteDirAtUp: 0,
        _remoteDirDownAt: 0,
        _inputIgnoreUntil: 0,
        _lastReportedGameplay: null,

        // Native Android Key/Axis state (for Mi Box remotes & Android gamepads)
        _nativeKeys: Object.create(null),
        _nativeAxisX: 0,
        _nativeAxisY: 0,

        // HTML5 Gamepad previous edge state
        _gpPrev: {
            jump: false,
            fire: false,
            dash: false,
            slam: false,
            slow: false,
            pause: false,
            menuDir: "",
            menuDirNextAt: 0,
            menuConfirm: false,
            menuBack: false
        },
        _nativeRepeatTimer: Object.create(null),
        _rafId: 0,
        _probeTimer: 0,
        _hasHtml5Gamepad: false,
        _focusSyncTimer: 0,

        detectTvEnvironment() {
            try {
                if (window.MarinextCloudBridge && typeof window.MarinextCloudBridge.isAndroidTv === "function") {
                    if (window.MarinextCloudBridge.isAndroidTv()) return true;
                }
            } catch (e) {}

            try {
                if (window.location && window.location.search) {
                    const params = new URLSearchParams(window.location.search);
                    if (params.get("tv") === "1" || params.get("tv") === "true") return true;
                }
            } catch (e) {}

            try {
                if (localStorage.getItem("marinext_force_tv_mode") === "1") return true;
            } catch (e) {}

            try {
                const ua = (navigator && navigator.userAgent) || "";
                // Match genuine Android TV / Fire TV / Shield / MiBox devices without matching normal Android phones
                if (/Android/i.test(ua) && !/\bMobile\b/i.test(ua)) {
                    if (/(TV|MiBOX|AFT|BRAVIA|SHIELD|GoogleTV|Android TV|SMART-TV|ADT-|Chromecast)/i.test(ua)) {
                        return true;
                    }
                }
            } catch (e) {}

            return false;
        },

        init() {
            if (this._initialized) return;
            this._initialized = true;

            this.isTvMode = this.detectTvEnvironment();
            if (this.isTvMode) {
                this.inputMode = "tv_remote";
                const applyTvBodyClass = () => {
                    if (document.body) {
                        document.body.classList.add("tv-mode");
                    }
                };
                applyTvBodyClass();
                if (!document.body) {
                    document.addEventListener("DOMContentLoaded", applyTvBodyClass);
                }
            } else {
                const hasTouch = ("ontouchstart" in window) || ((navigator && navigator.maxTouchPoints) > 0);
                this.inputMode = hasTouch ? "touch" : "keyboard";
            }

            this.setupInputListeners();
            this.setupFocusObserver();
            this.startPollLoop();

            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", () => this.scheduleFocusSync(120));
            } else {
                this.scheduleFocusSync(120);
            }
        },

        getFormFactor() {
            if (this.isTvMode) return "android_tv";
            if (window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform()) {
                return "mobile";
            }
            return "web";
        },

        setInputMode(mode) {
            if (!mode || this.inputMode === mode) return;
            this.inputMode = mode;
            if (document.body) {
                document.body.classList.toggle("tv-gamepad-active", mode === "gamepad");
            }
            if (window.game && typeof window.game.syncAnalyticsUserProperties === "function") {
                window.game.syncAnalyticsUserProperties();
            }
        },

        playNavTick() {
            try {
                if (!window.sfx || window.sfx.sfxMuted || !window.sfx.ctx) return;
                const ctx = window.sfx.ctx;
                if (ctx.state === "suspended") return;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(560, ctx.currentTime);
                gain.gain.setValueAtTime(0.035, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + 0.045);
            } catch (e) {}
        },

        isVisibleElement(el) {
            if (!el || !el.isConnected) return false;
            if (el.disabled || el.getAttribute("aria-hidden") === "true") return false;
            if (el.classList && (el.classList.contains("hidden") || el.classList.contains("tv-hide-ad-btn"))) return false;
            let cur = el;
            while (cur && cur !== document.body) {
                if (cur.classList && cur.classList.contains("hidden")) return false;
                const st = window.getComputedStyle(cur);
                if (!st || st.display === "none" || st.visibility === "hidden" || parseFloat(st.opacity) === 0) return false;
                cur = cur.parentElement;
            }
            const rect = el.getBoundingClientRect();
            return rect.width >= 4 && rect.height >= 4;
        },

        getActiveScreenContainer() {
            const screens = document.querySelectorAll(".overlay-screen");
            let bestEl = null;
            let bestZ = -Infinity;
            for (let i = 0; i < screens.length; i++) {
                const s = screens[i];
                if (s.classList.contains("hidden")) continue;
                const st = window.getComputedStyle(s);
                if (!st || st.display === "none" || st.visibility === "hidden") continue;
                const r = s.getBoundingClientRect();
                if (r.width < 10 || r.height < 10) continue;
                // Wait while startup splash is visible
                if (s.id === "screen-splash-intro" && parseFloat(st.opacity) > 0.05) {
                    return null;
                }
                const z = parseInt(st.zIndex, 10);
                const effZ = isNaN(z) ? 40 : z;
                if (effZ >= bestZ) {
                    bestZ = effZ;
                    bestEl = s;
                }
            }
            return bestEl;
        },

        getFocusableElements(container) {
            if (!container) return [];
            const raw = container.querySelectorAll(FOCUS_SELECTOR);
            const list = [];
            for (let i = 0; i < raw.length; i++) {
                const el = raw[i];
                if (this.isVisibleElement(el)) {
                    list.push(el);
                }
            }
            return list;
        },

        pickDefaultFocus(container, list) {
            if (!list || list.length === 0) return null;
            const cid = container ? container.id : "";
            const preferredSelectors = {
                "screen-map": ["#btn-play-level", ".map-node.selected", "#btn-open-shop"],
                "screen-modal": ["#btn-next-level:not(.hidden)", "#btn-resume:not(.hidden)", "#btn-retry-modal:not(.hidden)", "#btn-restart-level:not(.hidden)", "#btn-to-map"],
                "screen-vip-store": ["#vip-plans-grid .vip-plan-cta:not([disabled])", "#btn-vip-restore", "#btn-close-vip-x"],
                "screen-first-consent": ["#btn-accept-first-consent"],
                "screen-whats-new": ["#btn-whats-new-ok", "#btn-close-whats-new-x"],
                "screen-tutorial": ["#btn-tutorial-next", "#btn-tutorial-start", "#btn-close-tutorial-x"],
                "screen-settings": ["#btn-settings-sfx", "#btn-close-settings"],
                "screen-character": ["#char-items-container button:not([disabled])", "#btn-close-character"],
                "screen-customize": ["#cust-items-container button:not([disabled])", "#btn-close-customize"],
                "screen-shop": ["#shop-items-container button:not([disabled])", "#btn-close-shop"],
                "screen-troll": [".troll-node.unlocked", "#troll-nodes-container .map-node", "#btn-close-troll"],
                "screen-leaderboard": [".lb-tab-btn.active", ".lb-tab-btn", "#btn-close-leaderboard-x"],
                "screen-insufficient-balance": ["#btn-insuff-vip:not(.hidden)", "#btn-insuff-watch-ad:not(.hidden)", "#btn-insuff-cancel"],
                "screen-rate-app": ["#btn-action-rate-now", "#btn-action-rate-feedback", "#btn-action-rate-later", "#btn-close-rate-x"],
                "screen-update": ["#btn-do-update", "#btn-later-update", "#btn-close-update-x"]
            };

            const prefs = preferredSelectors[cid] || [];
            for (let i = 0; i < prefs.length; i++) {
                const candidate = container.querySelector(prefs[i]);
                if (candidate && list.indexOf(candidate) !== -1) {
                    return candidate;
                }
            }
            return list[0];
        },

        clearFocus() {
            if (this.focusedEl && this.focusedEl.classList) {
                this.focusedEl.classList.remove("tv-focused");
            }
            this.focusedEl = null;
        },

        setFocus(el, shouldScroll) {
            if (!el) return;
            if (this.focusedEl && this.focusedEl !== el && this.focusedEl.classList) {
                this.focusedEl.classList.remove("tv-focused");
            }
            this.focusedEl = el;
            el.classList.add("tv-focused");
            if (shouldScroll !== false && typeof el.scrollIntoView === "function") {
                try {
                    el.scrollIntoView({ behavior: this.isTvMode ? "auto" : "smooth", block: "nearest", inline: "nearest" });
                } catch (e) {
                    try { el.scrollIntoView(false); } catch (e2) {}
                }
            }
        },

        syncGameplayBridgeFlag(active) {
            const flag = Boolean(active);
            if (this._lastReportedGameplay === flag) return;
            this._lastReportedGameplay = flag;
            try {
                if (window.MarinextCloudBridge && typeof window.MarinextCloudBridge.setGameplayActive === "function") {
                    window.MarinextCloudBridge.setGameplayActive(flag);
                }
            } catch (e) {}
        },

        isGameplayActive() {
            return Boolean(window.game && window.game.state === "playing" && !this.getActiveScreenContainer());
        },

        clearRuntimeInputs(graceMs) {
            this._nativeKeys = Object.create(null);
            this._nativeAxisX = 0;
            this._nativeAxisY = 0;
            this._remoteMomentumDir = 0;
            this._remoteMomentumUntil = 0;
            this._remoteDirAtUp = 0;
            this._remoteDirDownAt = 0;
            this._inputIgnoreUntil = Date.now() + (Number(graceMs) || 240);
            if (window.game && typeof window.game.setExternalControllerHeld === "function") {
                window.game.setExternalControllerHeld(false, false, false);
            }
        },

        syncFocusToActiveScreen(forceReset) {
            const gamePlaying = this.isGameplayActive();
            this.syncGameplayBridgeFlag(gamePlaying);
            const container = this.getActiveScreenContainer();

            if (!container || gamePlaying) {
                if (gamePlaying) this.clearFocus();
                return;
            }

            if (!this.isTvMode && this.inputMode !== "gamepad" && this.inputMode !== "tv_remote") {
                return;
            }

            const cid = container.id || "";
            const list = this.getFocusableElements(container);
            if (list.length === 0) {
                this.clearFocus();
                return;
            }

            const stillValid = !forceReset && this.focusedEl && cid === this._activeContainerId && list.indexOf(this.focusedEl) !== -1;
            this._activeContainerId = cid;
            if (!stillValid) {
                const def = this.pickDefaultFocus(container, list);
                this.setFocus(def, true);
            }
        },

        scheduleFocusSync(delayMs) {
            if (this._focusSyncTimer) clearTimeout(this._focusSyncTimer);
            this._focusSyncTimer = setTimeout(() => {
                this._focusSyncTimer = 0;
                this.syncFocusToActiveScreen(false);
            }, delayMs || 50);
        },

        findNextFocus(dir) {
            const container = this.getActiveScreenContainer();
            if (!container) return null;
            const list = this.getFocusableElements(container);
            if (list.length === 0) return null;

            if (!this.focusedEl || list.indexOf(this.focusedEl) === -1) {
                return this.pickDefaultFocus(container, list);
            }

            const curRect = this.focusedEl.getBoundingClientRect();
            const cx = curRect.left + curRect.width / 2;
            const cy = curRect.top + curRect.height / 2;

            let bestEl = null;
            let bestScore = Infinity;

            for (let i = 0; i < list.length; i++) {
                const el = list[i];
                if (el === this.focusedEl) continue;
                const r = el.getBoundingClientRect();
                const tx = r.left + r.width / 2;
                const ty = r.top + r.height / 2;
                const dx = tx - cx;
                const dy = ty - cy;

                let primary = 0;
                let secondary = 0;
                let aligns = false;

                if (dir === "left") {
                    if (dx >= -6) continue;
                    primary = -dx;
                    secondary = Math.abs(dy);
                    aligns = r.bottom > curRect.top && r.top < curRect.bottom;
                } else if (dir === "right") {
                    if (dx <= 6) continue;
                    primary = dx;
                    secondary = Math.abs(dy);
                    aligns = r.bottom > curRect.top && r.top < curRect.bottom;
                } else if (dir === "up") {
                    if (dy >= -6) continue;
                    primary = -dy;
                    secondary = Math.abs(dx);
                    aligns = r.right > curRect.left && r.left < curRect.right;
                } else if (dir === "down") {
                    if (dy <= 6) continue;
                    primary = dy;
                    secondary = Math.abs(dx);
                    aligns = r.right > curRect.left && r.left < curRect.right;
                } else {
                    continue;
                }

                // Strongly favor candidates overlapping on the perpendicular band
                const weight = aligns ? 0.85 : 3.2;
                const score = primary + secondary * weight + (aligns ? 0 : 120);
                if (score < bestScore) {
                    bestScore = score;
                    bestEl = el;
                }
            }

            // If no element found in direction, try scrolling the modal container vertically
            if (!bestEl && (dir === "down" || dir === "up")) {
                const scroller = this.focusedEl.closest(".modal-card, .vip-modal-card, .troll-modal-card, .map-container, .world-map-grid, .shop-grid") || container;
                if (scroller && scroller.scrollHeight > scroller.clientHeight + 8) {
                    scroller.scrollBy({ top: dir === "down" ? 160 : -160, behavior: this.isTvMode ? "auto" : "smooth" });
                }
            }

            return bestEl;
        },

        moveFocus(dir) {
            this.syncFocusToActiveScreen(false);
            const next = this.findNextFocus(dir);
            if (next) {
                this.setFocus(next, true);
                this.playNavTick();
            }
        },

        activateFocused() {
            this.syncFocusToActiveScreen(false);
            const el = this.focusedEl;
            if (!el || !this.isVisibleElement(el)) return;

            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                try {
                    if (window.MarinextCloudBridge && typeof window.MarinextCloudBridge.setTextInputActive === "function") {
                        window.MarinextCloudBridge.setTextInputActive(true);
                    }
                    el.focus();
                    el.click();
                } catch (e) {}
                return;
            }

            this.playNavTick();
            try {
                el.click();
            } catch (e) {}
            this.scheduleFocusSync(80);
        },

        triggerBack() {
            const active = document.activeElement;
            if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) {
                try {
                    active.blur();
                    if (window.MarinextCloudBridge && typeof window.MarinextCloudBridge.setTextInputActive === "function") {
                        window.MarinextCloudBridge.setTextInputActive(false);
                    }
                } catch (e) {}
                this.scheduleFocusSync(60);
                return true;
            }

            if (window.game && typeof window.game.handleBackAction === "function") {
                const handled = window.game.handleBackAction();
                if (handled) {
                    this.scheduleFocusSync(90);
                    return true;
                }
            }

            // On Android TV main map, allow double-Back exit
            if (this.isTvMode) {
                const container = this.getActiveScreenContainer();
                if (container && container.id === "screen-map") {
                    const now = Date.now();
                    if (now - this._exitArmTime < 2600) {
                        if (window.MarinextCloudBridge && typeof window.MarinextCloudBridge.requestExitApp === "function") {
                            window.MarinextCloudBridge.requestExitApp();
                            return true;
                        }
                    } else {
                        this._exitArmTime = now;
                        const bt = (window.getMarinextBillingText && window.game)
                            ? window.getMarinextBillingText(window.game.lang, "tvExitPressAgain")
                            : "";
                        if (window.game && typeof window.game.showQuickToast === "function") {
                            window.game.showQuickToast(bt || "📺 Çıkmak için Geri tuşuna tekrar basın", "#38bdf8", 2400);
                        }
                        return true;
                    }
                }
            }
            return false;
        },

        syncTextInputFlag() {
            const active = document.activeElement;
            const isEditing = Boolean(active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA") && active.type !== "file");
            try {
                if (window.MarinextCloudBridge && typeof window.MarinextCloudBridge.setTextInputActive === "function") {
                    window.MarinextCloudBridge.setTextInputActive(isEditing);
                }
            } catch (e) {}
        },

        setupFocusObserver() {
            const onDomChange = () => {
                if (this.isGameplayActive()) {
                    this.syncGameplayBridgeFlag(true);
                    this.clearFocus();
                    return;
                }
                this.syncGameplayBridgeFlag(false);
                this.scheduleFocusSync(35);
            };
            const attachObserver = () => {
                if (!document.body || typeof MutationObserver !== "function") return;
                const obs = new MutationObserver(onDomChange);
                obs.observe(document.body, {
                    subtree: true,
                    childList: true,
                    attributes: true,
                    attributeFilter: ["class", "style", "disabled"]
                });
            };
            if (document.body) {
                attachObserver();
            } else {
                document.addEventListener("DOMContentLoaded", attachObserver);
            }

            document.addEventListener("focusin", () => this.syncTextInputFlag(), true);
            document.addEventListener("focusout", () => {
                setTimeout(() => this.syncTextInputFlag(), 30);
            }, true);
        },

        handleNativeKey(keyName, isDown, isRepeat, sourceType) {
            if (!keyName) return;
            if (sourceType === "gamepad") {
                this.setInputMode("gamepad");
            } else if (this.isTvMode && sourceType === "tv_remote" && this.inputMode !== "gamepad") {
                this.setInputMode("tv_remote");
            }

            const game = window.game;
            const isPlaying = this.isGameplayActive();
            this.syncGameplayBridgeFlag(isPlaying);

            if (isPlaying && Date.now() < this._inputIgnoreUntil) {
                if (!isDown) {
                    delete this._nativeKeys[keyName];
                }
                return;
            }

            if (isDown) {
                this._nativeKeys[keyName] = true;
            } else {
                delete this._nativeKeys[keyName];
            }

            // Handle TV Remote smart jump momentum only when Left/Right was intentionally held (>= 140ms) right before jumping
            if (this.inputMode === "tv_remote" && isPlaying) {
                if (isDown && !isRepeat && (keyName === "DPAD_LEFT" || keyName === "DPAD_RIGHT")) {
                    this._remoteDirDownAt = Date.now();
                    this._remoteMomentumDir = 0;
                }
                if (!isDown && (keyName === "DPAD_LEFT" || keyName === "DPAD_RIGHT")) {
                    const heldMs = Date.now() - (this._remoteDirDownAt || 0);
                    if (heldMs >= 140) {
                        this._remoteDirAtUp = keyName === "DPAD_LEFT" ? -1 : 1;
                        this._remoteMomentumUntil = Date.now() + 220;
                    } else {
                        this._remoteDirAtUp = 0;
                        this._remoteMomentumDir = 0;
                    }
                }
            }

            // Pause toggle in gameplay
            if (isDown && !isRepeat) {
                if (keyName === "BUTTON_START" || keyName === "MEDIA_PLAY_PAUSE" || keyName === "MENU") {
                    if (game) {
                        if (isPlaying) game.pauseGame();
                        else if (game.state === "paused") game.resumeGame();
                        this.scheduleFocusSync(60);
                    }
                    return;
                }
                if (keyName === "BACK" || keyName === "ESCAPE" || keyName === "BUTTON_B") {
                    if (!isPlaying || keyName === "BACK" || keyName === "ESCAPE") {
                        this.triggerBack();
                        return;
                    }
                }
            }

            if (!isPlaying) {
                // Menu D-Pad navigation via Native Key
                if (!isDown) return;
                let navDir = "";
                if (keyName === "DPAD_UP") navDir = "up";
                else if (keyName === "DPAD_DOWN") navDir = "down";
                else if (keyName === "DPAD_LEFT") navDir = "left";
                else if (keyName === "DPAD_RIGHT") navDir = "right";

                if (navDir) {
                    const now = Date.now();
                    const last = this._nativeRepeatTimer[navDir] || 0;
                    if (!isRepeat || now - last >= 110) {
                        this._nativeRepeatTimer[navDir] = now;
                        this.moveFocus(navDir);
                    }
                    return;
                }
                if (!isRepeat && (keyName === "DPAD_CENTER" || keyName === "ENTER" || keyName === "BUTTON_A")) {
                    this.activateFocused();
                }
                return;
            }

            // Gameplay instant edge-triggered actions from Native Keys
            if (isDown && !isRepeat && game) {
                this.ensurePollActive();
                if (keyName === "DPAD_UP" || keyName === "BUTTON_A") {
                    game.input.jumpPressed = true;
                    if (this.inputMode === "tv_remote" && !this._nativeKeys.DPAD_LEFT && !this._nativeKeys.DPAD_RIGHT) {
                        if (Date.now() <= this._remoteMomentumUntil && this._remoteDirAtUp !== 0) {
                            this._remoteMomentumDir = this._remoteDirAtUp;
                            this._remoteMomentumUntil = Date.now() + 240;
                        }
                    }
                }
                if (this.inputMode === "tv_remote" && (keyName === "DPAD_CENTER" || keyName === "ENTER")) {
                    if (game.player && game.player.hasFire) {
                        game.input.firePressed = true;
                    } else if (game.player && typeof game.isAbilityUnlocked === "function" && game.isAbilityUnlocked("dash")) {
                        game.player.tryDash(game);
                    }
                }
                if (keyName === "BUTTON_X") {
                    if (game.player && game.player.hasFire) game.input.firePressed = true;
                }
                if (keyName === "BUTTON_B" || keyName === "BUTTON_R1" || keyName === "BUTTON_R2") {
                    if (game.player && typeof game.isAbilityUnlocked === "function" && game.isAbilityUnlocked("dash")) {
                        game.player.tryDash(game);
                    } else if (game.player && game.player.hasFire) {
                        game.input.firePressed = true;
                    }
                }
                if (keyName === "DPAD_DOWN" || keyName === "BUTTON_L1" || keyName === "BUTTON_L2") {
                    if (game.player && typeof game.player.tryGroundSlam === "function") {
                        game.player.tryGroundSlam(game);
                    }
                }
                if (keyName === "BUTTON_Y") {
                    if (typeof game.activateTimeSlow === "function") {
                        game.activateTimeSlow();
                    }
                }
            }
        },

        handleNativeAxis(dirX, dirY) {
            this._nativeAxisX = dirX || 0;
            this._nativeAxisY = dirY || 0;
            if (this._nativeAxisX !== 0 || this._nativeAxisY !== 0) {
                this.setInputMode("gamepad");
                this.ensurePollActive();
            }
        },

        setupInputListeners() {
            window.onMarinextNativeKey = (keyName, isDown, isRepeat, sourceType) => {
                this.handleNativeKey(keyName, Boolean(isDown), Boolean(isRepeat), sourceType || "tv_remote");
            };
            window.onMarinextNativeAxis = (ax, ay) => {
                this.handleNativeAxis(Number(ax) || 0, Number(ay) || 0);
            };

            window.addEventListener("gamepadconnected", (e) => {
                this._hasHtml5Gamepad = true;
                this.setInputMode("gamepad");
                const gpId = (e && e.gamepad && e.gamepad.id) ? String(e.gamepad.id).slice(0, 64) : "gamepad";
                if (this._lastGamepadConnLogged !== gpId) {
                    this._lastGamepadConnLogged = gpId;
                    if (window.MarinextAnalytics && typeof window.MarinextAnalytics.logEvent === "function") {
                        window.MarinextAnalytics.logEvent("tv_gamepad_connected", {
                            gamepad_name: gpId,
                            device_form_factor: this.getFormFactor()
                        });
                    }
                }
                this.ensurePollActive();
                this.scheduleFocusSync(50);
            });

            window.addEventListener("gamepaddisconnected", () => {
                this._hasHtml5Gamepad = this.hasConnectedHtml5Gamepad();
            });

            // Browser / Desktop keyboard menu D-Pad support (especially for ?tv=1 testing & TV USB keyboards)
            window.addEventListener("keydown", (e) => {
                const active = document.activeElement;
                if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) {
                    if (e.code === "Escape") {
                        e.preventDefault();
                        this.triggerBack();
                    }
                    return;
                }

                const game = window.game;
                const isPlaying = this.isGameplayActive();
                if (isPlaying) {
                    if (this.isTvMode && !e.repeat && (e.code === "Enter" || e.code === "NumpadEnter") && game) {
                        if (game.player && game.player.hasFire) {
                            game.input.firePressed = true;
                        } else if (game.player && typeof game.isAbilityUnlocked === "function" && game.isAbilityUnlocked("dash")) {
                            game.player.tryDash(game);
                        }
                    }
                    return;
                }

                // Menu navigation in TV mode (or anytime gamepad/keyboard navigates overlays on TV)
                if (!this.isTvMode) return;

                if (e.code === "ArrowUp") {
                    e.preventDefault();
                    e.stopPropagation();
                    this.moveFocus("up");
                } else if (e.code === "ArrowDown") {
                    e.preventDefault();
                    e.stopPropagation();
                    this.moveFocus("down");
                } else if (e.code === "ArrowLeft") {
                    e.preventDefault();
                    e.stopPropagation();
                    this.moveFocus("left");
                } else if (e.code === "ArrowRight") {
                    e.preventDefault();
                    e.stopPropagation();
                    this.moveFocus("right");
                } else if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space") {
                    e.preventDefault();
                    e.stopPropagation();
                    this.activateFocused();
                } else if (e.code === "Escape" || e.code === "Backspace") {
                    e.preventDefault();
                    e.stopPropagation();
                    this.triggerBack();
                }
            }, true);
        },

        readHtml5GamepadState() {
            if (!navigator || typeof navigator.getGamepads !== "function") return null;
            let pads;
            try {
                pads = navigator.getGamepads();
            } catch (e) {
                return null;
            }
            if (!pads) return null;

            for (let i = 0; i < pads.length; i++) {
                const gp = pads[i];
                if (!gp || !gp.connected) continue;
                const ax = gp.axes && gp.axes.length > 0 ? gp.axes[0] : 0;
                const ay = gp.axes && gp.axes.length > 1 ? gp.axes[1] : 0;
                const btn = (idx) => Boolean(gp.buttons && gp.buttons[idx] && (gp.buttons[idx].pressed || gp.buttons[idx].value > 0.45));

                const left = ax < -0.3 || btn(14);
                const right = ax > 0.3 || btn(15);
                const up = ay < -0.35 || btn(12);
                const down = ay > 0.45 || btn(13);

                return {
                    left,
                    right,
                    up,
                    down,
                    jump: btn(0) || (up && !this.isMenuActive()),
                    fire: btn(2),
                    dash: btn(1) || btn(5) || btn(7),
                    slam: btn(4) || down,
                    slow: btn(3),
                    pause: btn(9),
                    confirm: btn(0),
                    back: btn(1),
                    hasAny: left || right || up || down || btn(0) || btn(1) || btn(2) || btn(3) || btn(4) || btn(5) || btn(7) || btn(9)
                };
            }
            return null;
        },

        isMenuActive() {
            return !this.isGameplayActive();
        },

        pollFrame() {
            const game = window.game;
            if (!game) return;

            const gp = this.readHtml5GamepadState();
            if (gp && gp.hasAny) {
                this.setInputMode("gamepad");
            }

            const isPlaying = this.isGameplayActive();
            this.syncGameplayBridgeFlag(isPlaying);
            const now = Date.now();

            if (!isPlaying) {
                // Menu navigation from HTML5 Gamepad OR Native Joystick Axes
                let dir = "";
                if (gp) {
                    if (gp.up) dir = "up";
                    else if (gp.down) dir = "down";
                    else if (gp.left) dir = "left";
                    else if (gp.right) dir = "right";
                }
                if (!dir) {
                    if (this._nativeAxisY < 0) dir = "up";
                    else if (this._nativeAxisY > 0) dir = "down";
                    else if (this._nativeAxisX < 0) dir = "left";
                    else if (this._nativeAxisX > 0) dir = "right";
                }

                if (dir) {
                    if (dir !== this._gpPrev.menuDir) {
                        this._gpPrev.menuDir = dir;
                        this._gpPrev.menuDirNextAt = now + 320;
                        this.moveFocus(dir);
                    } else if (now >= this._gpPrev.menuDirNextAt) {
                        this._gpPrev.menuDirNextAt = now + 135;
                        this.moveFocus(dir);
                    }
                } else {
                    this._gpPrev.menuDir = "";
                }

                const confirmNow = Boolean(gp && gp.confirm);
                if (confirmNow && !this._gpPrev.menuConfirm) {
                    this.activateFocused();
                }
                this._gpPrev.menuConfirm = confirmNow;

                const backNow = Boolean(gp && gp.back);
                if (backNow && !this._gpPrev.menuBack) {
                    this.triggerBack();
                }
                this._gpPrev.menuBack = backNow;

                const pauseNow = Boolean(gp && gp.pause);
                if (pauseNow && !this._gpPrev.pause && game.state === "paused") {
                    game.resumeGame();
                    this.scheduleFocusSync(80);
                }
                this._gpPrev.pause = pauseNow;

                if (typeof game.setExternalControllerHeld === "function") {
                    game.setExternalControllerHeld(false, false, false);
                }
                return;
            }

            // Gameplay continuous input merge (Native Keys + Native Axes + HTML5 Gamepad + Remote Momentum)
            if (now < this._inputIgnoreUntil) {
                if (typeof game.setExternalControllerHeld === "function") {
                    game.setExternalControllerHeld(false, false, false);
                }
                return;
            }
            let heldLeft = Boolean(this._nativeKeys.DPAD_LEFT || this._nativeAxisX < 0 || (gp && gp.left));
            let heldRight = Boolean(this._nativeKeys.DPAD_RIGHT || this._nativeAxisX > 0 || (gp && gp.right));
            let heldJump = Boolean(
                this._nativeKeys.DPAD_UP ||
                this._nativeKeys.BUTTON_A ||
                (gp && gp.jump)
            );

            if (this.inputMode === "tv_remote" && !heldLeft && !heldRight && this._remoteMomentumDir !== 0) {
                if (now <= this._remoteMomentumUntil && heldJump) {
                    if (this._remoteMomentumDir < 0) heldLeft = true;
                    else heldRight = true;
                } else {
                    this._remoteMomentumDir = 0;
                }
            }

            if (typeof game.setExternalControllerHeld === "function") {
                game.setExternalControllerHeld(heldLeft, heldRight, heldJump);
            }

            if (gp) {
                if (gp.jump && !this._gpPrev.jump) {
                    game.input.jumpPressed = true;
                }
                if (gp.fire && !this._gpPrev.fire && game.player && game.player.hasFire) {
                    game.input.firePressed = true;
                }
                if (gp.dash && !this._gpPrev.dash) {
                    if (game.player && typeof game.isAbilityUnlocked === "function" && game.isAbilityUnlocked("dash")) {
                        game.player.tryDash(game);
                    } else if (game.player && game.player.hasFire) {
                        game.input.firePressed = true;
                    }
                }
                if (gp.slam && !this._gpPrev.slam && game.player && typeof game.player.tryGroundSlam === "function") {
                    game.player.tryGroundSlam(game);
                }
                if (gp.slow && !this._gpPrev.slow && typeof game.activateTimeSlow === "function") {
                    game.activateTimeSlow();
                }
                if (gp.pause && !this._gpPrev.pause) {
                    game.pauseGame();
                    this.scheduleFocusSync(80);
                }

                this._gpPrev.jump = gp.jump;
                this._gpPrev.fire = gp.fire;
                this._gpPrev.dash = gp.dash;
                this._gpPrev.slam = gp.slam;
                this._gpPrev.slow = gp.slow;
                this._gpPrev.pause = gp.pause;
            }
        },

        hasConnectedHtml5Gamepad() {
            if (!navigator || typeof navigator.getGamepads !== "function") return false;
            try {
                const pads = navigator.getGamepads();
                if (!pads) return false;
                for (let i = 0; i < pads.length; i++) {
                    if (pads[i] && pads[i].connected) return true;
                }
            } catch (e) {}
            return false;
        },

        shouldPollRaf() {
            const isPlaying = this.isGameplayActive();
            return Boolean(this._hasHtml5Gamepad || this._nativeAxisX !== 0 || this._nativeAxisY !== 0 || isPlaying);
        },

        ensurePollActive() {
            if (this._rafId) return;
            const step = () => {
                this.pollFrame();
                if (this.shouldPollRaf()) {
                    this._rafId = window.requestAnimationFrame(step);
                } else {
                    this._rafId = 0;
                }
            };
            this._rafId = window.requestAnimationFrame(step);
        },

        startPollLoop() {
            this._hasHtml5Gamepad = this.hasConnectedHtml5Gamepad();
            if (this.shouldPollRaf()) {
                this.ensurePollActive();
            }
            if (!this._probeTimer) {
                this._probeTimer = window.setInterval(() => {
                    this._hasHtml5Gamepad = this.hasConnectedHtml5Gamepad();
                    if (this.shouldPollRaf()) {
                        this.ensurePollActive();
                    }
                }, 1500);
            }
        }
    };

    window.MarinextTV = MarinextTV;
    MarinextTV.init();
})(window, document);
