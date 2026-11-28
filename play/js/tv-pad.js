// ============================================================================
// Marinext 2100 - Zero-Warning Phone & Tablet Companion Controller (TV Host + App Client)
// Pure-JS ISO QR Generator + WebRTC LAN P2P DataChannel + Firebase RTDB Fallback
// ============================================================================
(function (window, document) {
    "use strict";

    const RTDB_PAD_BASE = "https://marinext-2100-default-rtdb.europe-west1.firebasedatabase.app/tv_pad_sessions";
    const KUMANDA_BASE_URL = "https://cgstudiohome.com/kumanda/";

    // ------------------------------------------------------------------------
    // Minimal ISO-18004 Pure-JS QR Code Encoder (Byte Mode, ECC-L Versions 1..5)
    // Guaranteed single Reed-Solomon block per version -> fast, compact, offline
    // ------------------------------------------------------------------------
    const QR_SPECS = {
        1: { size: 21, total: 26, data: 19, ec: 7, maxBytes: 17, align: [], rem: 0 },
        2: { size: 25, total: 44, data: 34, ec: 10, maxBytes: 32, align: [6, 18], rem: 7 },
        3: { size: 29, total: 70, data: 55, ec: 15, maxBytes: 53, align: [6, 22], rem: 7 },
        4: { size: 33, total: 100, data: 80, ec: 20, maxBytes: 78, align: [6, 26], rem: 7 },
        5: { size: 37, total: 134, data: 108, ec: 26, maxBytes: 106, align: [6, 30], rem: 7 }
    };

    const GF_EXP = new Uint8Array(512);
    const GF_LOG = new Uint8Array(256);
    (function initGalois() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
            GF_EXP[i] = x;
            GF_LOG[x] = i;
            x <<= 1;
            if (x & 0x100) x ^= 0x11d;
        }
        for (let i = 255; i < 512; i++) GF_EXP[i] = GF_EXP[i - 255];
    })();

    function gfMul(a, b) {
        if (a === 0 || b === 0) return 0;
        return GF_EXP[GF_LOG[a] + GF_LOG[b]];
    }

    function rsComputeEcc(dataBytes, ecCount) {
        let gen = [1];
        for (let i = 0; i < ecCount; i++) {
            const root = GF_EXP[i];
            const next = new Array(gen.length + 1).fill(0);
            for (let j = 0; j < gen.length; j++) {
                next[j] ^= gen[j];
                next[j + 1] ^= gfMul(gen[j], root);
            }
            gen = next;
        }
        const rem = new Array(ecCount).fill(0);
        for (let i = 0; i < dataBytes.length; i++) {
            const factor = dataBytes[i] ^ rem[0];
            rem.shift();
            rem.push(0);
            for (let j = 0; j < ecCount; j++) {
                rem[j] ^= gfMul(gen[j + 1], factor);
            }
        }
        return rem;
    }

    function computeQrFormatBits(mask) {
        // ECC Level L = 01 (binary)
        const data = (1 << 3) | (mask & 7);
        let rem = data;
        for (let i = 0; i < 10; i++) {
            rem = (rem << 1) ^ (((rem >> 9) & 1) * 0x537);
        }
        const bits = ((data << 10) | rem) ^ 0x5412;
        return bits;
    }

    function applyMaskBit(mask, r, c) {
        switch (mask) {
            case 0: return ((r + c) & 1) === 0;
            case 1: return (r & 1) === 0;
            case 2: return (c % 3) === 0;
            case 3: return ((r + c) % 3) === 0;
            case 4: return (((r >> 1) + Math.floor(c / 3)) & 1) === 0;
            case 5: return ((r * c) % 2 + (r * c) % 3) === 0;
            case 6: return ((((r * c) % 2) + ((r * c) % 3)) % 2) === 0;
            case 7: return ((((r + c) % 2) + ((r * c) % 3)) % 2) === 0;
            default: return false;
        }
    }

    function scoreQrMatrix(mat, size) {
        let penalty = 0;
        for (let r = 0; r < size; r++) {
            let run = 1;
            for (let c = 1; c < size; c++) {
                if (mat[r][c] === mat[r][c - 1]) {
                    run++;
                    if (run === 5) penalty += 3;
                    else if (run > 5) penalty++;
                } else {
                    run = 1;
                }
            }
        }
        for (let c = 0; c < size; c++) {
            let run = 1;
            for (let r = 1; r < size; r++) {
                if (mat[r][c] === mat[r - 1][c]) {
                    run++;
                    if (run === 5) penalty += 3;
                    else if (run > 5) penalty++;
                } else {
                    run = 1;
                }
            }
        }
        for (let r = 0; r < size - 1; r++) {
            for (let c = 0; c < size - 1; c++) {
                const v = mat[r][c];
                if (v === mat[r][c + 1] && v === mat[r + 1][c] && v === mat[r + 1][c + 1]) {
                    penalty += 3;
                }
            }
        }
        let dark = 0;
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (mat[r][c]) dark++;
            }
        }
        const pct = Math.abs(Math.floor((dark * 100) / (size * size)) - 50);
        penalty += Math.floor(pct / 5) * 10;
        return penalty;
    }

    function encodeQrMatrix(text) {
        const bytes = typeof TextEncoder !== "undefined"
            ? Array.from(new TextEncoder().encode(text))
            : Array.from(text, (ch) => ch.charCodeAt(0) & 0xff);

        let ver = 0;
        for (let v = 1; v <= 5; v++) {
            if (bytes.length <= QR_SPECS[v].maxBytes) {
                ver = v;
                break;
            }
        }
        if (!ver) return null;

        const spec = QR_SPECS[ver];
        const bits = [];
        const pushBits = (val, len) => {
            for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1);
        };

        // Byte mode (0100) + 8-bit length
        pushBits(4, 4);
        pushBits(bytes.length, 8);
        for (let i = 0; i < bytes.length; i++) pushBits(bytes[i], 8);

        const maxDataBits = spec.data * 8;
        const termLen = Math.min(4, maxDataBits - bits.length);
        for (let i = 0; i < termLen; i++) bits.push(0);
        while (bits.length % 8 !== 0) bits.push(0);

        const codewords = [];
        for (let i = 0; i < bits.length; i += 8) {
            let b = 0;
            for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
            codewords.push(b);
        }
        let padToggle = 0;
        while (codewords.length < spec.data) {
            codewords.push(padToggle === 0 ? 0xec : 0x11);
            padToggle ^= 1;
        }

        const ecc = rsComputeEcc(codewords, spec.ec);
        const allBytes = codewords.concat(ecc);
        const streamBits = [];
        for (let i = 0; i < allBytes.length; i++) {
            for (let b = 7; b >= 0; b--) streamBits.push((allBytes[i] >>> b) & 1);
        }
        for (let i = 0; i < spec.rem; i++) streamBits.push(0);

        const N = spec.size;
        const base = Array.from({ length: N }, () => new Array(N).fill(0));
        const isFunc = Array.from({ length: N }, () => new Array(N).fill(false));

        const setFunc = (r, c, dark) => {
            if (r < 0 || c < 0 || r >= N || c >= N) return;
            base[r][c] = dark ? 1 : 0;
            isFunc[r][c] = true;
        };

        const placeFinder = (top, left) => {
            for (let dr = -1; dr <= 7; dr++) {
                for (let dc = -1; dc <= 7; dc++) {
                    const r = top + dr;
                    const c = left + dc;
                    if (r < 0 || c < 0 || r >= N || c >= N) continue;
                    const inSep = dr === -1 || dr === 7 || dc === -1 || dc === 7;
                    const onBorder = dr === 0 || dr === 6 || dc === 0 || dc === 6;
                    const inCenter = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
                    setFunc(r, c, !inSep && (onBorder || inCenter));
                }
            }
        };

        placeFinder(0, 0);
        placeFinder(0, N - 7);
        placeFinder(N - 7, 0);

        // Alignment patterns
        const ap = spec.align;
        for (let i = 0; i < ap.length; i++) {
            for (let j = 0; j < ap.length; j++) {
                const ar = ap[i];
                const ac = ap[j];
                if (isFunc[ar][ac]) continue;
                for (let dr = -2; dr <= 2; dr++) {
                    for (let dc = -2; dc <= 2; dc++) {
                        const dist = Math.max(Math.abs(dr), Math.abs(dc));
                        setFunc(ar + dr, ac + dc, dist === 0 || dist === 2);
                    }
                }
            }
        }

        // Timing patterns
        for (let i = 8; i < N - 8; i++) {
            if (!isFunc[6][i]) setFunc(6, i, (i & 1) === 0);
            if (!isFunc[i][6]) setFunc(i, 6, (i & 1) === 0);
        }

        // Dark module & reserve format cells
        setFunc(N - 8, 8, true);
        for (let i = 0; i <= 8; i++) {
            if (!isFunc[8][i]) setFunc(8, i, false);
            if (!isFunc[i][8]) setFunc(i, 8, false);
        }
        for (let i = 0; i < 8; i++) {
            setFunc(8, N - 1 - i, false);
            if (i < 7) setFunc(N - 1 - i, 8, false);
        }

        // Zigzag placement
        let bitIdx = 0;
        let up = true;
        for (let rightCol = N - 1; rightCol >= 1; rightCol -= 2) {
            if (rightCol === 6) rightCol = 5;
            for (let step = 0; step < N; step++) {
                const r = up ? (N - 1 - step) : step;
                for (let dx = 0; dx < 2; dx++) {
                    const c = rightCol - dx;
                    if (!isFunc[r][c]) {
                        base[r][c] = bitIdx < streamBits.length ? streamBits[bitIdx] : 0;
                        bitIdx++;
                    }
                }
            }
            up = !up;
        }

        let bestMask = 0;
        let bestPenalty = Infinity;
        let bestMat = null;

        for (let mask = 0; mask < 8; mask++) {
            const mat = base.map((row, r) => row.map((v, c) => (isFunc[r][c] ? v : (applyMaskBit(mask, r, c) ? (v ^ 1) : v))));
            const fmt = computeQrFormatBits(mask);
            for (let i = 0; i < 15; i++) {
                const bit = (fmt >>> i) & 1;
                if (i < 6) mat[i][8] = bit;
                else if (i < 8) mat[i + 1][8] = bit;
                else mat[N - 15 + i][8] = bit;

                if (i < 8) mat[8][N - i - 1] = bit;
                else if (i < 9) mat[8][15 - i] = bit;
                else mat[8][14 - i] = bit;
            }
            mat[N - 8][8] = 1;
            const p = scoreQrMatrix(mat, N);
            if (p < bestPenalty) {
                bestPenalty = p;
                bestMask = mask;
                bestMat = mat;
            }
        }
        return bestMat;
    }

    function renderQrSvg(text, sizePx = 196) {
        const mat = encodeQrMatrix(text);
        if (!mat) return "";
        const n = mat.length;
        const quiet = 2;
        const total = n + quiet * 2;
        let pathD = "";
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (mat[r][c]) {
                    pathD += `M${c + quiet},${r + quiet}h1v1h-1z`;
                }
            }
        }
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" width="${sizePx}" height="${sizePx}" shape-rendering="crispEdges" role="img" aria-label="QR Code"><rect width="${total}" height="${total}" rx="2" fill="#ffffff"/><path d="${pathD}" fill="#050711"/></svg>`;
    }

    // ------------------------------------------------------------------------
    // Localized Strings Helper
    // ------------------------------------------------------------------------
    function txt(key, vars) {
        const lang = (window.game && window.game.lang) || "tr";
        if (window.getMarinextBillingText) {
            const res = window.getMarinextBillingText(lang, key, vars);
            if (res) return res;
        }
        const fallback = {
            tvPadStatusWaiting: "📱 Bağlantı bekleniyor... Kodu telefona gir veya QR'ı okut.",
            tvPadStatusHandshake: "🔄 Telefon algılandı, doğrudan LAN P2P kuruluyor...",
            tvPadStatusConnectedP2P: "🟢 Bağlı (LAN P2P • {ms} ms)",
            tvPadStatusConnectedRelay: "🟡 Bağlı (Bulut Yedek • {ms} ms)",
            tvPadConnectedToast: "📱 Telefon Oyun Kolu Bağlandı ({mode})!",
            tvPadDisconnectedToast: "📱 Telefon kumandası ayrıldı.",
            mobilePadStatusEnterCode: "TV ekranındaki 4 haneli kodu gir ve bağlan.",
            mobilePadStatusConnecting: "🔄 TV'ye bağlanılıyor...",
            mobilePadStatusConnected: "🟢 TV'ye Bağlı ({transport} • {ms} ms)",
            mobilePadStatusError: "⚠️ Bu kodla aktif TV oturumu bulunamadı. TV ekranını kontrol et."
        };
        let out = fallback[key] || key;
        if (vars && typeof vars === "object") {
            Object.keys(vars).forEach((k) => {
                out = out.replace(new RegExp("\\{" + k + "\\}", "g"), String(vars[k]));
            });
        }
        return out;
    }

    // ------------------------------------------------------------------------
    // TV Host Session Manager (Runs inside Android TV / Web TV)
    // ------------------------------------------------------------------------
    const MarinextTvPad = {
        renderQrSvg,
        hostCode: "",
        hostState: "idle", // "idle" | "waiting" | "handshake" | "connected"
        hostTransport: "",
        hostLatencyMs: 0,
        hostPadName: "",
        hostSourceKind: "phone_pad",
        _hostPc: null,
        _hostPollTimer: null,
        _hostRelayTimer: null,
        _hostOfferReady: false,
        _hostAnswerApplied: false,
        _hostAnswerAt: 0,
        _hostAppliedPadIceCount: 0,
        _hostLastEventId: 0,
        _hostLastRelaySeq: 0,
        _hostChannels: [],
        _hostHeartbeatTimer: null,

        openHostModal() {
            const modal = document.getElementById("screen-tv-pad");
            if (!modal) return;
            modal.classList.remove("hidden");
            if (!this.hostCode || this.hostState === "idle") {
                this.startHostSession();
            } else {
                this.renderHostModalUI();
            }
            if (window.MarinextTV && typeof window.MarinextTV.scheduleFocusSync === "function") {
                window.MarinextTV.scheduleFocusSync(60);
            }
        },

        closeHostModal() {
            const modal = document.getElementById("screen-tv-pad");
            if (modal) modal.classList.add("hidden");
            if (window.MarinextTV && typeof window.MarinextTV.scheduleFocusSync === "function") {
                window.MarinextTV.scheduleFocusSync(60);
            }
        },

        async stopHostSession(deleteRemote = true) {
            const prevCode = this.hostCode;
            const prevName = this.hostPadName;
            const prevTransport = this.hostTransport;
            const wasConnected = this.hostState === "connected";

            if (this._hostPollTimer) { clearInterval(this._hostPollTimer); this._hostPollTimer = null; }
            if (this._hostRelayTimer) { clearInterval(this._hostRelayTimer); this._hostRelayTimer = null; }
            if (this._hostHeartbeatTimer) { clearInterval(this._hostHeartbeatTimer); this._hostHeartbeatTimer = null; }
            this._hostChannels.forEach((ch) => { try { ch.close(); } catch (e) {} });
            this._hostChannels = [];
            if (this._hostPc) { try { this._hostPc.close(); } catch (e) {} this._hostPc = null; }

            this.hostCode = "";
            this.hostState = "idle";
            this.hostTransport = "";
            this.hostLatencyMs = 0;
            this.hostPadName = "";
            this._hostAnswerApplied = false;
            this._hostAppliedPadIceCount = 0;
            this._hostLastEventId = 0;
            this._hostLastRelaySeq = 0;

            if (window.MarinextTV && typeof window.MarinextTV.setPhonePadConnected === "function") {
                window.MarinextTV.setPhonePadConnected(false, prevName, prevTransport, this.hostSourceKind);
            }
            if (wasConnected && window.MarinextAnalytics && typeof window.MarinextAnalytics.logEvent === "function") {
                window.MarinextAnalytics.logEvent("tv_pad_disconnected", {
                    gamepad_name: prevName || "Phone Gamepad",
                    pad_transport: prevTransport || "webrtc_lan",
                    tv_input_mode: this.hostSourceKind || "phone_pad"
                });
            }
            if (deleteRemote && prevCode) {
                try { fetch(`${RTDB_PAD_BASE}/${prevCode}.json`, { method: "DELETE", keepalive: true }).catch(() => {}); } catch (e) {}
            }
            this.renderHostModalUI();
        },

        async generateUniqueCode() {
            for (let attempt = 0; attempt < 6; attempt++) {
                const candidate = String(1000 + Math.floor(Math.random() * 9000));
                try {
                    const res = await fetch(`${RTDB_PAD_BASE}/${candidate}.json`, { cache: "no-store" });
                    if (res.ok) {
                        const existing = await res.json();
                        if (!existing || !existing.updatedAt || (Date.now() - Number(existing.updatedAt)) > 600000) {
                            return candidate;
                        }
                    } else {
                        return candidate;
                    }
                } catch (e) {
                    return candidate;
                }
            }
            return String(1000 + Math.floor(Math.random() * 9000));
        },

        async startHostSession() {
            await this.stopHostSession(true);
            const code = await this.generateUniqueCode();
            this.hostCode = code;
            this.hostState = "waiting";
            this.hostTransport = "";
            this.hostPadName = "";
            this._hostOfferReady = false;
            this._hostAnswerApplied = false;
            this._hostAppliedPadIceCount = 0;
            this._hostLastEventId = 0;
            this._hostLastRelaySeq = 0;
            this.renderHostModalUI();

            if (window.MarinextAnalytics && typeof window.MarinextAnalytics.logEvent === "function") {
                window.MarinextAnalytics.logEvent("tv_pad_session_started", {
                    device_form_factor: window.MarinextTV ? window.MarinextTV.getFormFactor() : "android_tv"
                });
            }

            const localCandidates = [];
            let offerPayload = "";
            const hasRtc = typeof RTCPeerConnection === "function";

            if (hasRtc) {
                try {
                    const pc = new RTCPeerConnection({
                        iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
                    });
                    this._hostPc = pc;
                    const pushCandidate = (cand) => {
                        if (!cand) return;
                        localCandidates.push(cand.toJSON ? cand.toJSON() : cand);
                        if (this._hostOfferReady && this.hostCode === code) {
                            fetch(`${RTDB_PAD_BASE}/${code}.json`, {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    tvIce: JSON.stringify(localCandidates).slice(0, 15500),
                                    updatedAt: Date.now()
                                })
                            }).catch(() => {});
                        }
                    };
                    pc.onicecandidate = (ev) => {
                        if (ev.candidate) pushCandidate(ev.candidate);
                    };

                    const chPad = pc.createDataChannel("pad", { ordered: false, maxRetransmits: 0 });
                    const chCmd = pc.createDataChannel("cmd", { ordered: true });
                    this.bindHostDataChannel(chPad);
                    this.bindHostDataChannel(chCmd);
                    pc.ondatachannel = (ev) => {
                        if (ev && ev.channel) this.bindHostDataChannel(ev.channel);
                    };

                    const offer = await pc.createOffer();
                    await pc.setLocalDescription(offer);
                    await new Promise((resolve) => {
                        if (pc.iceGatheringState === "complete") return resolve();
                        const timer = setTimeout(resolve, 900);
                        const onState = () => {
                            if (pc.iceGatheringState === "complete") {
                                clearTimeout(timer);
                                pc.removeEventListener("icegatheringstatechange", onState);
                                resolve();
                            }
                        };
                        pc.addEventListener("icegatheringstatechange", onState);
                    });
                    offerPayload = JSON.stringify(pc.localDescription);
                } catch (e) {
                    offerPayload = "";
                }
            }

            this._hostOfferReady = true;
            try {
                await fetch(`${RTDB_PAD_BASE}/${code}.json`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        offer: offerPayload || "relay-only",
                        tvIce: JSON.stringify(localCandidates).slice(0, 15500),
                        state: "waiting",
                        updatedAt: Date.now()
                    })
                });
            } catch (e) {}

            this._hostPollTimer = setInterval(() => this.pollHostSignaling(code), 550);
            this._hostHeartbeatTimer = setInterval(() => this.sendHostContext(), 1200);
        },

        bindHostDataChannel(ch) {
            if (!ch || this._hostChannels.includes(ch)) return;
            this._hostChannels.push(ch);
            ch.onopen = () => {
                if (this.hostState !== "connected" || this.hostTransport !== "webrtc_lan") {
                    this.activateConnectedPad("webrtc_lan", this.hostPadName || "Phone Gamepad", this.hostSourceKind);
                }
                this.sendHostContext();
            };
            ch.onmessage = (ev) => {
                try {
                    const msg = JSON.parse(ev.data);
                    this.handleIncomingPadPayload(msg, (msg && msg.t === "e") ? null : ch);
                } catch (e) {}
            };
            ch.onclose = () => {
                const anyOpen = this._hostChannels.some((c) => c.readyState === "open");
                if (!anyOpen && this.hostState === "connected" && this.hostTransport === "webrtc_lan") {
                    this.stopHostSession(true);
                }
            };
        },

        sendHostContext() {
            const game = window.game;
            const payload = JSON.stringify({
                t: "ctx",
                mode: (window.MarinextTV && window.MarinextTV.isGameplayActive()) ? "playing" : "menu",
                fire: Boolean(game && game.player && game.player.hasFire),
                dash: Boolean(game && typeof game.isAbilityUnlocked === "function" && game.isAbilityUnlocked("dash")),
                slam: Boolean(game && typeof game.isAbilityUnlocked === "function" && game.isAbilityUnlocked("slam")),
                slow: Boolean(game && typeof game.isAbilityUnlocked === "function" && game.isAbilityUnlocked("timeSlow"))
            });
            for (const ch of this._hostChannels) {
                if (ch && ch.readyState === "open") {
                    try { ch.send(payload); } catch (e) {}
                }
            }
        },

        async pollHostSignaling(code) {
            if (this.hostCode !== code) return;
            try {
                const res = await fetch(`${RTDB_PAD_BASE}/${code}.json`, { cache: "no-store" });
                if (!res.ok) return;
                const data = await res.json();
                if (!data) return;

                if (data.padName) {
                    this.hostPadName = String(data.padName).slice(0, 64);
                    this.hostSourceKind = this.hostPadName.includes("App") ? "app_pad" : "phone_pad";
                }

                if (data.answer && !this._hostAnswerApplied) {
                    this._hostAnswerApplied = true;
                    this._hostAnswerAt = Date.now();
                    this.hostState = "handshake";
                    this.renderHostModalUI();
                    if (this._hostPc && data.answer !== "relay-only") {
                        try {
                            await this._hostPc.setRemoteDescription(new RTCSessionDescription(JSON.parse(data.answer)));
                        } catch (e) {}
                    }
                }

                if (data.padIce && this._hostPc && this._hostAnswerApplied) {
                    try {
                        const list = JSON.parse(data.padIce);
                        if (Array.isArray(list)) {
                            while (this._hostAppliedPadIceCount < list.length) {
                                const c = list[this._hostAppliedPadIceCount++];
                                if (c) await this._hostPc.addIceCandidate(new RTCIceCandidate(c));
                            }
                        }
                    } catch (e) {}
                }

                if (this._hostAnswerApplied && this.hostTransport !== "webrtc_lan") {
                    if (data.state === "relay" || (Date.now() - this._hostAnswerAt) > 4200) {
                        if (this.hostState !== "connected") {
                            this.activateConnectedPad("firebase_relay", this.hostPadName || "Phone Gamepad", this.hostSourceKind);
                        }
                    }
                }
            } catch (e) {}
        },

        activateConnectedPad(transport, padName, sourceKind) {
            this.hostState = "connected";
            this.hostTransport = transport;
            this.hostPadName = padName || "Phone Gamepad";
            this.hostSourceKind = sourceKind || (this.hostPadName.includes("App") ? "app_pad" : "phone_pad");

            if (transport === "webrtc_lan" && this._hostPollTimer) {
                clearInterval(this._hostPollTimer);
                this._hostPollTimer = null;
            }
            if (transport === "firebase_relay" && !this._hostRelayTimer) {
                if (this._hostPollTimer) {
                    clearInterval(this._hostPollTimer);
                    this._hostPollTimer = null;
                }
                const code = this.hostCode;
                this._hostRelayTimer = setInterval(() => this.pollHostRelay(code), 85);
            }

            if (window.MarinextTV && typeof window.MarinextTV.setPhonePadConnected === "function") {
                window.MarinextTV.setPhonePadConnected(true, this.hostPadName, transport, this.hostSourceKind);
            }
            if (window.MarinextAnalytics && typeof window.MarinextAnalytics.logEvent === "function") {
                window.MarinextAnalytics.logEvent("tv_pad_connected", {
                    gamepad_name: this.hostPadName,
                    pad_transport: transport,
                    tv_input_mode: this.hostSourceKind,
                    pad_latency_ms: Math.max(1, Math.round(this.hostLatencyMs || (transport === "webrtc_lan" ? 12 : 45))),
                    device_form_factor: window.MarinextTV ? window.MarinextTV.getFormFactor() : "android_tv"
                });
            }
            this.renderHostModalUI();
            if (window.game && typeof window.game.showQuickToast === "function") {
                const modeLbl = transport === "webrtc_lan" ? "LAN P2P" : "Cloud Relay";
                window.game.showQuickToast(txt("tvPadConnectedToast", { mode: modeLbl }), "#06d6a0", 3600);
            }
            setTimeout(() => {
                if (this.hostState === "connected") {
                    this.closeHostModal();
                }
            }, 1100);
        },

        async pollHostRelay(code) {
            if (this.hostCode !== code || this.hostState !== "connected" || this.hostTransport !== "firebase_relay") return;
            try {
                const res = await fetch(`${RTDB_PAD_BASE}/${code}/relay.json`, { cache: "no-store" });
                if (!res.ok) return;
                const raw = await res.json();
                if (!raw || typeof raw !== "string") return;
                const msg = JSON.parse(raw);
                if (msg && msg.seq && msg.seq === this._hostLastRelaySeq) return;
                if (msg && msg.seq) this._hostLastRelaySeq = msg.seq;
                this.handleIncomingPadPayload(msg, null);
            } catch (e) {}
        },

        handleIncomingPadPayload(msg, replyCh) {
            if (!msg || typeof msg !== "object") return;
            if (msg.t === "ping") {
                if (replyCh && replyCh.readyState === "open") {
                    try { replyCh.send(JSON.stringify({ t: "pong", ts: msg.ts })); } catch (e) {}
                }
                return;
            }
            if (msg.t === "rtt") {
                this.hostLatencyMs = Math.max(1, Math.round(Number(msg.ms) || 0));
                this.renderHostModalUI();
                return;
            }
            if (msg.t === "bye") {
                this.stopHostSession(true);
                return;
            }
            const tv = window.MarinextTV;
            const game = window.game;
            if (!tv) return;

            if (typeof msg.l !== "undefined" || typeof msg.r !== "undefined" || typeof msg.j !== "undefined") {
                tv.setPhonePadState({
                    left: Boolean(msg.l),
                    right: Boolean(msg.r),
                    jump: Boolean(msg.j)
                });
            }

            if (msg.ev && msg.eid && msg.eid !== this._hostLastEventId) {
                this._hostLastEventId = msg.eid;
                const isPlaying = tv.isGameplayActive();
                const ev = msg.ev;
                if (ev === "pause") {
                    if (game) {
                        if (isPlaying) game.pauseGame();
                        else if (game.state === "paused") game.resumeGame();
                        tv.scheduleFocusSync(60);
                    }
                    return;
                }
                if (ev === "back") {
                    tv.triggerBack();
                    return;
                }
                if (!isPlaying) {
                    if (ev === "nav_up" || ev === "jump") tv.moveFocus("up");
                    else if (ev === "nav_down" || ev === "slam") tv.moveFocus("down");
                    else if (ev === "nav_left") tv.moveFocus("left");
                    else if (ev === "nav_right") tv.moveFocus("right");
                    else if (ev === "ok" || ev === "fire") tv.activateFocused();
                    return;
                }
                if (game) {
                    if (ev === "jump") game.input.jumpPressed = true;
                    else if (ev === "fire" && game.player && game.player.hasFire) game.input.firePressed = true;
                    else if (ev === "dash") {
                        if (game.player && typeof game.isAbilityUnlocked === "function" && game.isAbilityUnlocked("dash")) {
                            game.player.tryDash(game);
                        } else if (game.player && game.player.hasFire) {
                            game.input.firePressed = true;
                        }
                    } else if (ev === "slam" && game.player && typeof game.player.tryGroundSlam === "function") {
                        game.player.tryGroundSlam(game);
                    } else if (ev === "slow" && typeof game.activateTimeSlow === "function") {
                        game.activateTimeSlow();
                    }
                }
            }
        },

        renderHostModalUI() {
            const codeEl = document.getElementById("tv-pad-pin-code");
            const qrWrap = document.getElementById("tv-pad-qr-box");
            const urlEl = document.getElementById("tv-pad-url-text");
            const statusEl = document.getElementById("tv-pad-status-pill");
            const btnDisconnect = document.getElementById("btn-tv-pad-disconnect");

            if (codeEl) codeEl.textContent = this.hostCode || "----";
            if (urlEl) urlEl.textContent = `${KUMANDA_BASE_URL}?code=${this.hostCode || "0000"}`;
            if (qrWrap && this.hostCode && qrWrap.dataset.qrCode !== this.hostCode) {
                qrWrap.dataset.qrCode = this.hostCode;
                qrWrap.innerHTML = renderQrSvg(`${KUMANDA_BASE_URL}?code=${this.hostCode}`, 184);
            }
            if (statusEl) {
                if (this.hostState === "connected") {
                    const ms = this.hostLatencyMs || (this.hostTransport === "webrtc_lan" ? 10 : 45);
                    statusEl.textContent = this.hostTransport === "webrtc_lan"
                        ? txt("tvPadStatusConnectedP2P", { ms })
                        : txt("tvPadStatusConnectedRelay", { ms });
                    statusEl.className = "tv-pad-status status-online";
                } else if (this.hostState === "handshake") {
                    statusEl.textContent = txt("tvPadStatusHandshake");
                    statusEl.className = "tv-pad-status status-handshake";
                } else {
                    statusEl.textContent = txt("tvPadStatusWaiting");
                    statusEl.className = "tv-pad-status status-waiting";
                }
            }
            if (btnDisconnect) {
                btnDisconnect.classList.toggle("hidden", this.hostState !== "connected");
            }
        },

        // --------------------------------------------------------------------
        // Mobile In-App Companion Controller Client (Runs inside Mobile App)
        // --------------------------------------------------------------------
        clientCode: "",
        clientState: "idle", // "idle" | "connecting" | "connected"
        clientTransport: "",
        clientLatencyMs: 0,
        _clientPc: null,
        _clientPadCh: null,
        _clientCmdCh: null,
        _clientTimer: null,
        _clientPingTimer: null,
        _clientHeld: { l: 0, r: 0, j: 0 },
        _clientSeq: 0,
        _clientEventId: 0,
        _clientTouchMap: new Map(),

        openMobileControllerModal() {
            const modal = document.getElementById("screen-mobile-pad");
            if (!modal) return;
            this.initMobilePadControls();
            modal.classList.remove("hidden");
            this.renderMobileClientUI();
        },

        closeMobileControllerModal() {
            this.disconnectMobileClient();
            const modal = document.getElementById("screen-mobile-pad");
            if (modal) modal.classList.add("hidden");
        },

        disconnectMobileClient() {
            if (this._clientTimer) { clearInterval(this._clientTimer); this._clientTimer = null; }
            if (this._clientPingTimer) { clearInterval(this._clientPingTimer); this._clientPingTimer = null; }
            if (this._clientCmdCh && this._clientCmdCh.readyState === "open") {
                try { this._clientCmdCh.send(JSON.stringify({ t: "bye" })); } catch (e) {}
            }
            if (this._clientPadCh) { try { this._clientPadCh.close(); } catch (e) {} this._clientPadCh = null; }
            if (this._clientCmdCh) { try { this._clientCmdCh.close(); } catch (e) {} this._clientCmdCh = null; }
            if (this._clientPc) { try { this._clientPc.close(); } catch (e) {} this._clientPc = null; }
            this.clientState = "idle";
            this.clientTransport = "";
            this.clientLatencyMs = 0;
            this._clientHeld = { l: 0, r: 0, j: 0 };
            this._clientTouchMap.clear();
            this.renderMobileClientUI();
        },

        async connectMobileClient(codeRaw) {
            const code = String(codeRaw || "").replace(/\D/g, "").slice(0, 4);
            if (code.length !== 4) {
                this.setMobileStatus(txt("mobilePadStatusError"));
                return;
            }
            this.disconnectMobileClient();
            this.clientCode = code;
            this.clientState = "connecting";
            this.renderMobileClientUI();
            this.setMobileStatus(txt("mobilePadStatusConnecting"));

            try {
                const res = await fetch(`${RTDB_PAD_BASE}/${code}.json`, { cache: "no-store" });
                if (!res.ok) throw new Error("fetch_fail");
                const session = await res.json();
                if (!session || !session.offer) throw new Error("not_found");

                const hasRtc = typeof RTCPeerConnection === "function" && session.offer !== "relay-only";
                let connectedDone = false;

                const finishConnected = (transport) => {
                    if (connectedDone && this.clientTransport === "webrtc_lan") return;
                    connectedDone = true;
                    this.clientState = "connected";
                    this.clientTransport = transport;
                    this.renderMobileClientUI();
                    if (!this._clientPingTimer) {
                        this._clientPingTimer = setInterval(() => {
                            if (this._clientCmdCh && this._clientCmdCh.readyState === "open") {
                                try { this._clientCmdCh.send(JSON.stringify({ t: "ping", ts: Date.now() })); } catch (e) {}
                            }
                        }, 1500);
                    }
                };

                if (hasRtc) {
                    const pc = new RTCPeerConnection({
                        iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
                    });
                    this._clientPc = pc;
                    const localCand = [];
                    pc.onicecandidate = (ev) => {
                        if (ev.candidate) {
                            localCand.push(ev.candidate.toJSON ? ev.candidate.toJSON() : ev.candidate);
                            fetch(`${RTDB_PAD_BASE}/${code}.json`, {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    padIce: JSON.stringify(localCand).slice(0, 15500),
                                    updatedAt: Date.now()
                                })
                            }).catch(() => {});
                        }
                    };

                    const wireCh = (ch) => {
                        if (!ch) return;
                        if (ch.label === "pad") this._clientPadCh = ch;
                        else this._clientCmdCh = ch;
                        ch.onopen = () => finishConnected("webrtc_lan");
                        ch.onmessage = (ev) => {
                            try {
                                const msg = JSON.parse(ev.data);
                                if (msg.t === "pong" && msg.ts) {
                                    const ms = Math.max(1, Date.now() - Number(msg.ts));
                                    this.clientLatencyMs = ms;
                                    this.setMobileStatus(txt("mobilePadStatusConnected", { transport: "LAN P2P", ms }));
                                    if (this._clientCmdCh && this._clientCmdCh.readyState === "open") {
                                        this._clientCmdCh.send(JSON.stringify({ t: "rtt", ms }));
                                    }
                                }
                            } catch (e) {}
                        };
                    };
                    pc.ondatachannel = (ev) => wireCh(ev.channel);

                    await pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(session.offer)));
                    if (session.tvIce) {
                        try {
                            const tvIce = JSON.parse(session.tvIce);
                            if (Array.isArray(tvIce)) {
                                for (const c of tvIce) await pc.addIceCandidate(new RTCIceCandidate(c));
                            }
                        } catch (e) {}
                    }
                    const answer = await pc.createAnswer();
                    await pc.setLocalDescription(answer);
                    await fetch(`${RTDB_PAD_BASE}/${code}.json`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            answer: JSON.stringify(pc.localDescription),
                            padName: "Marinext Mobile App",
                            state: "handshake",
                            updatedAt: Date.now()
                        })
                    });

                    setTimeout(() => {
                        if (!connectedDone && this.clientState === "connecting") {
                            fetch(`${RTDB_PAD_BASE}/${code}.json`, {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ state: "relay", updatedAt: Date.now() })
                            }).catch(() => {});
                            this.clientLatencyMs = 45;
                            finishConnected("firebase_relay");
                        }
                    }, 4000);
                } else {
                    await fetch(`${RTDB_PAD_BASE}/${code}.json`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            answer: "relay-only",
                            padName: "Marinext Mobile App",
                            state: "relay",
                            updatedAt: Date.now()
                        })
                    });
                    this.clientLatencyMs = 45;
                    finishConnected("firebase_relay");
                }
            } catch (e) {
                this.clientState = "idle";
                this.renderMobileClientUI();
                this.setMobileStatus(txt("mobilePadStatusError"));
            }
        },

        sendMobilePadState(evAction) {
            if (this.clientState !== "connected") return;
            const payloadObj = {
                t: evAction ? "e" : "s",
                l: this._clientHeld.l,
                r: this._clientHeld.r,
                j: this._clientHeld.j,
                seq: ++this._clientSeq
            };
            if (evAction) {
                payloadObj.ev = evAction;
                payloadObj.eid = ++this._clientEventId;
            }
            const json = JSON.stringify(payloadObj);
            if (this.clientTransport === "webrtc_lan") {
                const targetCh = evAction ? (this._clientCmdCh || this._clientPadCh) : (this._clientPadCh || this._clientCmdCh);
                if (targetCh && targetCh.readyState === "open") {
                    try { targetCh.send(json); } catch (e) {}
                }
            } else if (this.clientCode) {
                fetch(`${RTDB_PAD_BASE}/${this.clientCode}.json`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ relay: json, updatedAt: Date.now() })
                }).catch(() => {});
            }
        },

        setMobileStatus(message) {
            const el = document.getElementById("mobile-pad-status");
            if (el) el.textContent = message;
            const deckEl = document.getElementById("mobile-pad-status-deck");
            if (deckEl) deckEl.textContent = message;
        },

        renderMobileClientUI() {
            const setupBox = document.getElementById("mobile-pad-setup");
            const deckBox = document.getElementById("mobile-pad-deck");
            const active = this.clientState === "connected";
            if (setupBox) setupBox.classList.toggle("hidden", active);
            if (deckBox) deckBox.classList.toggle("hidden", !active);
            if (active) {
                const trLbl = this.clientTransport === "webrtc_lan" ? "LAN P2P" : "Cloud Relay";
                this.setMobileStatus(txt("mobilePadStatusConnected", { transport: trLbl, ms: this.clientLatencyMs || 12 }));
            }
        },

        initMobilePadControls() {
            if (this._mobileControlsBound) return;
            this._mobileControlsBound = true;

            const syncHeldFromTouches = () => {
                let l = 0, r = 0, j = 0;
                for (const role of this._clientTouchMap.values()) {
                    if (role === "left") l = 1;
                    else if (role === "right") r = 1;
                    else if (role === "jump") j = 1;
                }
                const lEl = document.getElementById("mpad-left");
                const rEl = document.getElementById("mpad-right");
                const jEl = document.getElementById("mpad-jump");
                if (lEl) lEl.classList.toggle("pressed", Boolean(l));
                if (rEl) rEl.classList.toggle("pressed", Boolean(r));
                if (jEl) jEl.classList.toggle("pressed", Boolean(j));

                const jumpEdge = (j && !this._clientHeld.j);
                const changed = l !== this._clientHeld.l || r !== this._clientHeld.r || j !== this._clientHeld.j;
                this._clientHeld.l = l;
                this._clientHeld.r = r;
                this._clientHeld.j = j;
                if (jumpEdge) this.sendMobilePadState("jump");
                else if (changed) this.sendMobilePadState(null);
            };

            const bindHold = (id, role, edgeAction) => {
                const btn = document.getElementById(id);
                if (!btn) return;
                btn.addEventListener("touchstart", (e) => {
                    if (e.cancelable) e.preventDefault();
                    if (navigator.vibrate) try { navigator.vibrate(10); } catch (er) {}
                    if (role) {
                        for (let i = 0; i < e.changedTouches.length; i++) {
                            this._clientTouchMap.set(e.changedTouches[i].identifier, role);
                        }
                        syncHeldFromTouches();
                    } else if (edgeAction) {
                        btn.classList.add("pressed");
                        this.sendMobilePadState(edgeAction);
                    }
                }, { passive: false });
                btn.addEventListener("touchend", () => {
                    if (!role) btn.classList.remove("pressed");
                }, { passive: true });
                btn.addEventListener("mousedown", (e) => {
                    if (e.button !== 0) return;
                    btn.classList.add("pressed");
                    if (role === "left") { this._clientHeld.l = 1; this.sendMobilePadState(null); }
                    else if (role === "right") { this._clientHeld.r = 1; this.sendMobilePadState(null); }
                    else if (role === "jump") { this._clientHeld.j = 1; this.sendMobilePadState("jump"); }
                    else if (edgeAction) this.sendMobilePadState(edgeAction);
                });
                btn.addEventListener("mouseup", () => {
                    btn.classList.remove("pressed");
                    if (role === "left") { this._clientHeld.l = 0; this.sendMobilePadState(null); }
                    else if (role === "right") { this._clientHeld.r = 0; this.sendMobilePadState(null); }
                    else if (role === "jump") { this._clientHeld.j = 0; this.sendMobilePadState(null); }
                });
            };

            bindHold("mpad-left", "left", null);
            bindHold("mpad-right", "right", null);
            bindHold("mpad-jump", "jump", "jump");
            bindHold("mpad-fire", null, "fire");
            bindHold("mpad-dash", null, "dash");
            bindHold("mpad-slam", null, "slam");
            bindHold("mpad-slow", null, "slow");
            bindHold("mpad-pause", null, "pause");
            bindHold("mpad-nav-up", null, "nav_up");
            bindHold("mpad-nav-down", null, "nav_down");
            bindHold("mpad-nav-left", null, "nav_left");
            bindHold("mpad-nav-right", null, "nav_right");
            bindHold("mpad-nav-ok", null, "ok");
            bindHold("mpad-nav-back", null, "back");

            window.addEventListener("touchmove", (e) => {
                if (this._clientTouchMap.size === 0) return;
                const lEl = document.getElementById("mpad-left");
                const rEl = document.getElementById("mpad-right");
                const lr = lEl ? lEl.getBoundingClientRect() : null;
                const rr = rEl ? rEl.getBoundingClientRect() : null;
                for (let i = 0; i < e.changedTouches.length; i++) {
                    const t = e.changedTouches[i];
                    const cur = this._clientTouchMap.get(t.identifier);
                    if (cur === "left" || cur === "right") {
                        if (lr && t.clientX >= lr.left - 12 && t.clientX <= lr.right + 8 && t.clientY >= lr.top - 24 && t.clientY <= lr.bottom + 24) {
                            this._clientTouchMap.set(t.identifier, "left");
                        } else if (rr && t.clientX >= rr.left - 8 && t.clientX <= rr.right + 12 && t.clientY >= rr.top - 24 && t.clientY <= rr.bottom + 24) {
                            this._clientTouchMap.set(t.identifier, "right");
                        }
                    }
                }
                syncHeldFromTouches();
            }, { passive: true });

            const onEnd = (e) => {
                if (this._clientTouchMap.size === 0) return;
                for (let i = 0; i < e.changedTouches.length; i++) {
                    this._clientTouchMap.delete(e.changedTouches[i].identifier);
                }
                if (e.touches) {
                    const alive = new Set();
                    for (let i = 0; i < e.touches.length; i++) alive.add(e.touches[i].identifier);
                    for (const key of Array.from(this._clientTouchMap.keys())) {
                        if (!alive.has(key)) this._clientTouchMap.delete(key);
                    }
                }
                syncHeldFromTouches();
            };
            window.addEventListener("touchend", onEnd, { passive: true });
            window.addEventListener("touchcancel", onEnd, { passive: true });
        }
    };

    window.MarinextTvPad = MarinextTvPad;
    window.addEventListener("beforeunload", () => {
        if (MarinextTvPad.hostCode) MarinextTvPad.stopHostSession(true);
    });
})(window, document);
