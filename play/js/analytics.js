// ============================================================================
// Marinext 2100 - Akıllı Oyun İçi Analitik & Uzaktan Yapılandırma (Remote Config)
// Firebase / GA4 Uyumlu Yaşam Boyu Değer (LTV), Elde Tutma (Retention) ve Reklam İzleme Motoru
// ============================================================================

(function(window) {
    'use strict';

    const STORAGE_KEY_EVENTS = 'marinext2100_analytics_events';
    const STORAGE_KEY_STATS = 'marinext2100_analytics_stats';
    const REMOTE_CONFIG_URL = 'https://cgstudiohome.github.io/marinext2100/version.json';
    const FALLBACK_CONFIG_URL = 'https://cevatturk.github.io/marinext2100/version.json';
    const DEFAULT_GA4_MEASUREMENT_ID = 'G-3EVKLV8SM8';
    const DEFAULT_GA4_API_SECRET = 'NpIfsFNeROWOFrpLWGiqMg';

    // 1. Akıllı Oyun İçi Analitik Motoru
    const MarinextAnalytics = {
        sessionId: 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        sessionStartTime: Date.now(),
        stats: null,

        init() {
            this.loadStats();
            this.trackSessionStart();
            window.addEventListener('beforeunload', () => this.trackSessionEnd());
            console.log('[MarinextAnalytics] Başlatıldı. Oturum ID:', this.sessionId);
        },

        loadStats() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY_STATS);
                if (raw) {
                    this.stats = JSON.parse(raw);
                }
            } catch (e) {}

            if (!this.stats) {
                this.stats = {
                    firstInstallTime: Date.now(),
                    totalSessions: 0,
                    totalPlaytimeSec: 0,
                    levelsStarted: 0,
                    levelsCompleted: 0,
                    levelsFailed: 0,
                    rewardedAdsWatched: 0,
                    interstitialAdsShown: 0,
                    daysActive: [new Date().toISOString().slice(0, 10)]
                };
            }
        },

        saveStats() {
            try {
                localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(this.stats));
            } catch (e) {}
        },

        trackSessionStart() {
            this.stats.totalSessions = (this.stats.totalSessions || 0) + 1;
            const todayStr = new Date().toISOString().slice(0, 10);
            if (!this.stats.daysActive.includes(todayStr)) {
                this.stats.daysActive.push(todayStr);
            }
            this.saveStats();

            const installAgeDays = Math.floor((Date.now() - (this.stats.firstInstallTime || Date.now())) / (1000 * 60 * 60 * 24));

            this.logEvent('session_start', {
                session_id: this.sessionId,
                session_number: this.stats.totalSessions,
                install_age_days: installAgeDays,
                retention_day: this.stats.daysActive.length,
                screen_width: window.innerWidth,
                screen_height: window.innerHeight,
                pixel_ratio: window.devicePixelRatio || 1
            });
        },

        trackSessionEnd() {
            const sessionDurationSec = Math.round((Date.now() - this.sessionStartTime) / 1000);
            this.stats.totalPlaytimeSec = (this.stats.totalPlaytimeSec || 0) + sessionDurationSec;
            this.saveStats();

            this.logEvent('session_end', {
                session_id: this.sessionId,
                duration_sec: sessionDurationSec,
                total_playtime_sec: this.stats.totalPlaytimeSec
            });
        },

        logEvent(eventName, params = {}) {
            const eventPayload = {
                event: eventName,
                timestamp: Date.now(),
                iso_time: new Date().toISOString(),
                params: {
                    ...params,
                    session_id: this.sessionId
                }
            };

            // 1. Yerel Olay Günlüğüne Ekle (Son 150 olay)
            try {
                let events = [];
                const rawEvents = localStorage.getItem(STORAGE_KEY_EVENTS);
                if (rawEvents) events = JSON.parse(rawEvents);
                events.push(eventPayload);
                if (events.length > 150) events = events.slice(-150);
                localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(events));
            } catch (e) {}

            // 2. İstatistik Sayaçlarını Güncelle
            if (eventName === 'level_start') {
                this.stats.levelsStarted = (this.stats.levelsStarted || 0) + 1;
                this.saveStats();
            } else if (eventName === 'level_complete') {
                this.stats.levelsCompleted = (this.stats.levelsCompleted || 0) + 1;
                this.saveStats();
            } else if (eventName === 'level_fail') {
                this.stats.levelsFailed = (this.stats.levelsFailed || 0) + 1;
                this.saveStats();
            } else if (eventName === 'ad_rewarded_watched') {
                this.stats.rewardedAdsWatched = (this.stats.rewardedAdsWatched || 0) + 1;
                this.saveStats();
            } else if (eventName === 'ad_interstitial_shown') {
                this.stats.interstitialAdsShown = (this.stats.interstitialAdsShown || 0) + 1;
                this.saveStats();
            }

            // 3. Özel DOM Olayı Fırlat
            try {
                window.dispatchEvent(new CustomEvent('marinext:analytics', { detail: eventPayload }));
            } catch (e) {}

            // 4. Google Analytics 4 (GA4) / Firebase Measurement Protocol Otomatik İletimi
            // (Remote Config üzerinden dinamik beslenir, varsayılan olarak canlı Marinext 2100 GA4 mülkü devrededir)
            const rc = window.MarinextRemoteConfig && window.MarinextRemoteConfig.config;
            const measurementId = (rc && rc.ga4MeasurementId) || DEFAULT_GA4_MEASUREMENT_ID;
            const apiSecret = (rc && rc.ga4ApiSecret) || DEFAULT_GA4_API_SECRET;

            if (measurementId && apiSecret) {
                try {
                    // GA4 Measurement Protocol ayrılmış isim koruması (session_start -> app_session_start)
                    const ga4EventName = eventName === 'session_start' ? 'app_session_start' :
                                         (eventName === 'session_end' ? 'app_session_end' : eventName);
                    const ga4Url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;
                    fetch(ga4Url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            client_id: this.sessionId,
                            events: [{
                                name: ga4EventName,
                                params: {
                                    ...params,
                                    session_id: this.sessionId,
                                    engagement_time_msec: 100
                                }
                            }]
                        })
                    }).catch(() => {});
                } catch (e) {}
            }

            // Geliştirici konsoluna logla
            if (localStorage.getItem('marinext_dev_mode') === '1') {
                console.log(`[Analytics] 📊 ${eventName}`, params);
            }
        },

        getSummary() {
            return {
                ...this.stats,
                currentSessionSec: Math.round((Date.now() - this.sessionStartTime) / 1000)
            };
        }
    };

    // 2. Akıllı Uzaktan Yapılandırma (Remote Config) Motoru
    const MarinextRemoteConfig = {
        config: {
            interstitialEveryNLevels: 3,
            minSecondsBetweenInterstitials: 180,
            skipInterstitialAfterRewardedSeconds: 120,
            doubleCrystalsEvent: false,
            bannerAnnouncement: ""
        },
        lastFetchTime: 0,

        async fetchConfig() {
            const urls = [
                `${REMOTE_CONFIG_URL}?t=${Date.now()}`,
                `${FALLBACK_CONFIG_URL}?t=${Date.now()}`
            ];
            for (const url of urls) {
                try {
                    const res = await fetch(url, { cache: 'no-store' });
                    if (!res.ok) continue;
                    const data = await res.json();
                    if (data && data.remoteConfig) {
                        this.config = { ...this.config, ...data.remoteConfig };
                        console.log('[RemoteConfig] ✅ Canlı parametreler güncellendi:', this.config);
                        
                        // Reklam ayarlarını canlı olarak güncelle
                        if (window.ADMOB_CONFIG) {
                            if (typeof this.config.interstitialEveryNLevels === 'number') {
                                window.ADMOB_CONFIG.interstitialEveryNLevels = this.config.interstitialEveryNLevels;
                            }
                            if (typeof this.config.minSecondsBetweenInterstitials === 'number') {
                                window.ADMOB_CONFIG.minSecondsBetweenInterstitials = this.config.minSecondsBetweenInterstitials;
                            }
                            if (typeof this.config.skipInterstitialAfterRewardedSeconds === 'number') {
                                window.ADMOB_CONFIG.skipInterstitialAfterRewardedSeconds = this.config.skipInterstitialAfterRewardedSeconds;
                            }
                        }

                        // Remote Config olayını tetikle
                        window.dispatchEvent(new CustomEvent('marinext:remoteconfig_updated', { detail: this.config }));
                        return this.config;
                    }
                } catch (e) {
                    // sonraki adresi dene
                }
            }
            console.warn('[RemoteConfig] Uzaktan yapılandırma alınamadı, varsayılanlar devrede.');
            return this.config;
        }
    };

    window.MarinextAnalytics = MarinextAnalytics;
    window.MarinextRemoteConfig = MarinextRemoteConfig;

    // Otomatik Başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            MarinextAnalytics.init();
            MarinextRemoteConfig.fetchConfig();
        });
    } else {
        MarinextAnalytics.init();
        MarinextRemoteConfig.fetchConfig();
    }
})(window);
