// ============================================================================
// 🌍 MARINEXT 2100 — FULL MULTI-LANGUAGE UI & CATALOG LOCALIZATION ENGINE
// Supports: TR, EN, RU, IT, ES, FR, KO, ZH, JA
// ============================================================================
(function () {
    const UI_EXT = {
        tr: {
            coinLabel: "Coin:",
            btnLeaderboard: "🏆 LİDERLİK",
            btnFeedback: "💬 GERİ BİLDİRİM",
            worldAll: "🌍 Tümü (1-100)",
            worldTabPrefix: "Dünya",
            worldRegions10: [
                "BÖLGE 1: KRİSTAL MAĞARALAR",
                "BÖLGE 2: SİBER MAGMA",
                "BÖLGE 3: KUANTUM BOŞLUK",
                "BÖLGE 4: KOZMİK HİÇLİK",
                "BÖLGE 5: BUZUL FIRTINASI",
                "BÖLGE 6: BİYO-LABORATUVAR",
                "BÖLGE 7: GÖKYÜZÜ TERSANESİ",
                "BÖLGE 8: ANTİK TAPINAK",
                "BÖLGE 9: KARANLIK MADDE",
                "BÖLGE 10: İMPARATORLUK TAHTI"
            ],
            // Character Studio
            charSub: "Bölümlerde topladığın <strong>Coin (✪)</strong> ile gerçekçi tarihi ve modern kıyafetleri aç! Kıyafeti giydirince karakterin <strong>yüz tipi, bıyığı/sakalı ve duruşu</strong> da gerçekle birebir değişir!",
            btnAdChestChar: "🎬 Reklam İzle (+50 ✪ Coin)",
            btnAdChestCust: "🎬 Reklam İzle (+10 ❖ Zümrüt & +50 ✪ Coin)",
            charTabAll: "🌟 Tüm Karakterler",
            charTabOwned: "✅ Satın Alınanlar",
            charTabLocked: "🔒 Satın Alınabilir",
            charEmptyLocked: "🎉 Tebrikler! Oyundaki tüm karakterlerin tamamını satın aldın!",
            charEmptyOther: "Henüz bu filtrede karakter bulunmuyor.",
            charActiveBadge: "👑 AKTİF KARAKTER",
            charOwnedBadge: "✓ SATIN ALINDI",
            charActiveBtn: "👑 AKTİF KARAKTER (SEÇİLİ)",
            charSelectBtn: "✓ KARAKTERİ SEÇ VE GİYDİR",
            charBuyBtn: "🪙 SATIN AL ({cost} ✪ Coin)",
            charAdBuyBtn: "🎬 COİN AL / AÇ ({cost} ✪ Coin)",
            // Customize & Shop
            shopOwnedBadge: "✓ SATIN ALINDI",
            shopActiveBtn: "✓ AKTİF GÜÇLENDİRME",
            shopBuyBtn: "SATIN AL ({cost} ◆ Kristal)",
            shopAdBuyBtn: "🎬 KRİSTAL AL / AÇ ({cost} ◆)",
            custEquippedBadge: "👑 KUŞANILDI",
            custOwnedBadge: "✓ AÇIK / SAHİPSİN",
            custEquippedBtn: "✓ KUŞANILDI (AKTİF)",
            custEquipBtn: "KUŞAN & AKTİF ET",
            custUnlockBtn: "AÇ ({cost} ❖ Zümrüt)",
            custAdUnlockBtn: "🎬 ZÜMRÜT AL / AÇ ({cost} ❖)",
            milestoneUnlocked: "🏆 Bölüm {lvl} Başarı Hediyesi (Açıldı ✓)",
            milestoneLocked: "🏆 Bölüm {lvl} Hediyesi veya {cost} ❖ Zümrüt",
            totalPowerSummary: "⚡ Toplam Güç: {hp}♥ Can • +%{spd} Hız • x{mult} Skor{glide}",
            glideTag: " • 🪽 Süzülme",
            // Leaderboard
            lbTitle: "ŞAMPİYONLAR LİDERLİK TABLOSU",
            lbSubtitle: "4 profesyonel kategoride sıralamanı yükselt, lig ödüllerini topla ve Google Play Games küresel listesinde zirveye çık!",
            lbPlayGamesBtn: "Play Games Resmi Tablosu",
            lbAchievementsBtn: "🏆 Başarılar",
            lbScopeFriends: "👥 Arkadaşlar",
            lbCatScore: "🏆 Skor Krallığı",
            lbCatProgress: "⚔️ 100 Bölüm & Boss",
            lbCatEmerald: "❖ Zümrüt & Hazine",
            lbCatSpeedrun: "⚡ Hız Rekoru (Speedrun)",
            lbScopeGlobal: "🌍 Küresel (Tüm Zamanlar)",
            lbScopeWeekly: "🔥 Haftalık Sezon",
            lbScopeTr: "🇹🇷 Bölgesel İlk 25",
            lbYouBadge: "SEN",
            lbYourRankLabel: "SENİN DERECEN",
            lbEmptyPodiumTitle: "BOŞ KÜRSÜ",
            lbEmptyPodiumSub: "Yeni Şampiyon Bekleniyor",
            lbEmptyPodiumHint: "Oynamaya başla ve yerleş!",
            lbHeroPrefix: "Kahraman:",
            lbLiveInfoBanner: "🎮 <strong>Canlı Çok-Oyunculu Sıralama:</strong> Bölüm, kayıt noktası (checkpoint) ve puan geçildikçe tüm gerçek oyuncuların skorları anlık olarak bulut tablosuna ve Google Play Games'e senkronize edilir.",
            lbSyncConnected: "● {scope} • Canlı Çok-Oyunculu Sıralama ({count} Oyuncu) • Play Games Bağlı ({name})",
            lbSyncCloud: "● {scope} • Canlı Çok-Oyunculu Sıralama ({count} Oyuncu • Anlık Bulut Senkronu Aktif)",
            lbMetricProgress: "Bölüm {prog}/100 • {bosses} Boss",
            lbMetricEmerald: "{val} ❖ Hazine Puanı",
            lbMetricNoSpeed: "⏱️ Henüz Rekor Yok",
            lbMetricSpeed: "⚡ {sec} sn",
            lbMetricScore: "{val} Puan",
            lbLeagueImperial: "👑 İMPARATORLUK ŞAMPİYONU (#1)",
            lbLeagueGrandmaster: "💎 BÜYÜK ÜSTAT LİGİ (İLK 3)",
            lbLeagueDiamond: "💠 ELMAS LİG (İLK 7)",
            lbLeagueGold: "🥇 ALTIN LİG (İLK 12)",
            lbLeagueSilver: "🥈 GÜMÜŞ LİG",
            lbTargetIneligible: "🎯 Lig ödülünü açmak için en az 1 bölüm tamamla veya 1.000 puana ulaş!",
            lbTargetSpeed: "Hedef #{rank} ({name}): {diff} sn daha hızlı bitir!",
            lbTargetScore: "Hedef #{rank} ({name}): +{diff} fark kaldı!",
            lbTargetTop: "👑 Zirvedesin! Aktif sıralamada 1. sıradasın!",
            lbRewardClaimed: "✓ Lig Ödülü Alındı",
            lbRewardLocked: "🔒 Ödül İçin 1 Bölüm Bitir",
            lbRewardClaimBtn: "🎁 Ödül Al (+{coins}✪ +{emeralds}❖)",
            // Profile & Cloud
            btnPickAvatar: "🖼️ Fotoğraf Seç / Değiştir (30)",
            profileNamePlaceholder: "Karakter ismini yaz...",
            profileCloudTitle: "🎮 GOOGLE PLAY GAMES & GOOGLE DRIVE BULUT KAYIT",
            cloudBadgeConnected: "🎮 Play Games & GDrive: BAĞLI{name}",
            cloudBadgeActive: "☁️ Google Drive Yedek: AKTİF",
            cloudSyncStatusLine: "Son Kayıt: {time} • Bölüm: {lvl}/100 (Trol: {troll}/15) • Coin: {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 Play Games Senkronize Et",
            btnCloudExport: "☁️ Drive'a Yedek Kaydet",
            btnCloudImport: "📂 Yedekten Yükle",
            profileLevelWord: "Seviye",
            attrHpArmor: "❤️ MAKSİMUM CAN & ZIRH",
            attrSpeedJump: "⚡ HIZ & ZIPLAMA YETENEĞİ",
            attrHelmetGear: "⚔️ MİĞFER & SIRT SİLAHI",
            attrVisorAura: "✨ VİZÖR & AURA EFEKTİ",
            attrSpecialPowers: "🔥 AKTİF ÖZEL GÜÇLER",
            attrProgressWealth: "🏆 İLERLEME & SERVET",
            attrRunLabel: "Koşu",
            attrJumpLabel: "Zıplama",
            attrDoubleTripleJump: "Çift/Üçlü Zıplama",
            attrWallJump: "Duvar Zıplaması",
            attrStartShield: "🛡 Başlangıç Kalkanı",
            attrStartFire: "🔥 Plazma Ateşi",
            attrMagnet: "🧲 Zümrüt Mıknatısı",
            avatarPickerSub: "Profilinde ve Liderlik Tablosunda görünecek kahraman amblemini seç:",
            btnConfirmAvatar: "SEÇİMİ ONAYLA ✓",
            // Settings & Modals
            fps120: "120 FPS (ULTRA AKICI) ⚡",
            fps60: "60 FPS (DENGELİ) ⚙️",
            fps30: "30 FPS (GÜÇ TASARRUFU) 🔋",
            btnSettingsFeedback: "💬 Uygulama Hakkında Geri Bildirim & Hata Bildir",
            btnSettingsCloud: "🎮 Google Play Games & Google Drive Bulut Kayıt",
            btnSettingsPrivacy: "🛡️ Gizlilik Politikası / Privacy Policy",
            btnSettingsConsent: "🔒 Reklam & Gizlilik Tercihleri (GDPR / UMP)",
            channelPrefix: "Dağıtım:",
            channelInternal: "🧪 DAHİLİ TEST",
            channelAlpha: "🎯 KAPALI TEST",
            channelProduction: "🌐 GENEL MAĞAZA",
            channelToastInternal: "🧪 Dahili Test kanalı aktif! En son geliştirici sürümleri anında kontrol edilir.",
            channelToastAlpha: "🎯 Kapalı Test kanalı aktif!",
            channelToastProduction: "🌐 Genel Mağaza kanalı aktif!",
            // Ad Consent Modal
            adConsentPersonalized: "AÇIK ✓ (KİŞİSELLEŞTİRİLMİŞ)",
            adConsentStandard: "KAPALI ✕ (STANDART / KİŞİSEL OLMAYAN)",
            adConsentTitle: "🔒 Reklam & Gizlilik Tercihleri (GDPR / UMP)",
            adConsentSub: "Google AdMob reklam kişiselleştirme, sıklık sınırı ve veri işleme tercihlerinizi buradan yönetebilirsiniz.",
            adPersonalizedLabel: "🎯 Kişiselleştirilmiş Reklamlar (İlgi Alanı)",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 Akıllı & Kullanıcı Dostu Reklam Kuralımız:</strong><br>• Oyun sırasında asla tam ekran zorunlu reklam çıkmaz.<br>• Bölüm sonu geçiş reklamları en fazla <strong>3 bölüm zaferinde 1 kez</strong> gösterilir.<br>• Ödüllü videolar tamamen <strong>isteğe bağlıdır</strong>.",
            adGdprHtml: "<strong>🇪🇺 AB / AEA & Birleşik Krallık (GDPR / Google UMP):</strong> Google Resmi UMP İzin Formunu aşağıdaki butonla istediğiniz zaman yeniden açıp güncelleyebilirsiniz.",
            btnOpenUmpForm: "📋 Google UMP İzin Formunu Denetle",
            btnSaveConsent: "TERCİHLERİ KAYDET ✓",
            // Feedback Modal
            fbTitle: "💬 Geri Bildirim & Geliştirici Konsol Bildirimi",
            fbSub: "Oyun hakkındaki öneri, hata bildirimi veya bölüm yorumlarınızı buradan gönderebilirsiniz. Gönderdiğiniz bildirimler doğrudan geliştirici ekibimize iletilir!",
            fbStarLabel: "⭐ OYUN PUANINIZ:",
            fbCatLabel: "📌 BİLDİRİM KONUSU:",
            fbCat1: "💡 Öneri & Fikir",
            fbCat2: "🐞 Hata / Bug",
            fbCat3: "🗺️ Bölüm & Zorluk",
            fbCat4: "⚡ Performans / FPS",
            fbMsgLabel: "✍️ MESAJINIZ (Bölüm no, cihaz veya önerinizi yazın):",
            fbMsgPlaceholder: "Örn: 24. bölümdeki lazer kapıları çok eğlenceli olmuş, yeni karakterler harika...",
            btnSubmitPlayConsole: "📲 KAYDET & GOOGLE PLAY GERİ BİLDİRİMİ GÖNDER ▶",
            btnSubmitDirect: "📨 Geliştiriciye Doğrudan Rapor İlet",
            btnCloseFeedback: "KAPAT ✕",
            // Insufficient Balance Modal
            insuffEmeraldTitle: "ANTİK ZÜMRÜT (❖) BAKİYESİ YETERSİZ!",
            insuffEmeraldDesc: "<strong>{item}</strong> özelliğini açmak için <strong>{missing} ❖ Antik Zümrüt</strong> eksik.<br>Kısa bir ödüllü video izleyerek anında <strong>+10 ❖ Zümrüt + 25 ✪ Coin</strong> hediye alabilirsin!",
            insuffEmeraldBtn: "🎬 Reklam İzle & +10 ❖ Zümrüt Hediye Al",
            insuffCrystalTitle: "MAVİ KRİSTAL (◆) BAKİYESİ YETERSİZ!",
            insuffCrystalDesc: "<strong>{item}</strong> güçlendirmesini açmak için <strong>{missing} ◆ Kristal</strong> eksik.<br>Kısa bir ödüllü video izleyerek anında <strong>+80 ◆ Kristal + 5 ❖ Zümrüt</strong> hediye alabilirsin!",
            insuffCrystalBtn: "🎬 Reklam İzle & +80 ◆ Kristal Hediye Al",
            insuffGoldTitle: "ALTIN COİN (✪) BAKİYESİ YETERSİZ!",
            insuffGoldDesc: "<strong>{item}</strong> karakterini açmak için <strong>{missing} ✪ Coin</strong> eksik.<br>Kısa bir ödüllü video izleyerek anında <strong>+50 ✪ Altın Coin Hediye</strong> alabilirsin!",
            insuffGoldBtn: "🎬 Reklam İzle & +50 ✪ Coin Hediye Al",
            btnCancel: "Vazgeç",
            // Pause / Victory / Game Over Ad buttons & Update Modal
            btnReviveAd: "🎬 Reklam İzle & Kaldığın Yerden Canlan (+3 ♥)",
            btnDoubleAd: "🎬 Reklam İzle & Bölüm Ödüllerini 2'ye Katla (2x ✪❖◆)",
            updateTitle: "YENİ GÜNCELLEME MEVCUT!",
            updateDesc: "<strong>Marinext 2100</strong> oyununun yeni sürümü yayınlandı! En yeni özellikler ve iyileştirmeler için hemen güncelleyin.",
            btnDoUpdate: "📲 GOOGLE PLAY'DEN GÜNCELLE ▶",
            btnLaterUpdate: "Daha Sonra Hatırlat",
            updateLinkChangelog: "📋 Tüm Sürüm Notlarını & Yenilikleri İncele ↗",
            langAutoTitle: "📱 Otomatik — Telefon / Cihaz Dili ({native})",
            langAutoSub: "Cihazınızın diline göre otomatik değişir • Algılanan: {badge}",
            splashBadge: "⚡ 120 FPS ULTRA AKICI SİBER-PLATFORM MOTORU",
            splashSub: "100 Kampanya Bölümü • 10 Aksiyon Dünyası • 15 Tarihi & Siber Kahraman",
            splashStatus: "Dünyalar ve Kahramanlar Yükleniyor...",
            settingsGroupAudio: "🔊 SES, PERFORMANS & SİSTEM",
            settingsGroupSupport: "📋 REHBER, İLERLEME & DESTEK",
            btnSettingsTutorial: "📖 Başlangıç Kılavuzu & Rehberi İncele",
            btnSettingsRate: "⭐ Oyunu Puanla & Değerlendir (Google Play)",
            btnTestAd: "🎬 REKLAM TESTİ",
            crystalLabel: "Kristal:",
            btnTutorialSkip: "⏩ Rehberi Atla",
            btnReviveAd1: "🎬 Reklam İzle & Canlan (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 Reklam İzle & Son Şans Canlan (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ Hiper Hız (120 FPS)",
            profileSpeedStd: "⚡ Standart Hız",
            profileHeartsWord: "Can",
            profileStageWord: "Bölüm",
            adRewardEmeraldTitle: "🎁 Zümrüt & Coin Ödülü",
            adRewardEmeraldDesc: "+10 ❖ Antik Zümrüt ve +50 ✪ Coin hesabına eklendi!",
            adRewardCrystalTitle: "🎁 Mavi Kristal Ödülü",
            adRewardCrystalDesc: "+80 ◆ Mavi Kristal ve +5 ❖ Zümrüt hesabına eklendi!",
            adRewardGoldTitle: "🎁 Altın Coin Ödülü",
            adRewardGoldDesc: "+50 ✪ Altın Coin hesabına eklendi!",
            adLoadingBtn: "⏳ Reklam Yükleniyor, Lütfen Bekleyin...",
            adOpeningBtn: "📺 Reklam Açılıyor...",
            adSkippedNotice: "ℹ️ Ödülü kazanmak için video sonuna kadar izlenmelidir.",
            adUnavailableAlert: "Şu anda uygun video reklam yüklenemedi veya internet bağlantınız kapalı. Lütfen birkaç saniye sonra tekrar deneyin.",
            adOverlayBadge: "ÖDÜLLÜ VİDEO",
            adOverlayPlaying: "⏳ Hazırlanıyor... ({sec})",
            adOverlayReady: "🎁 Ödülü Al ve Kapat",
            adOverlayClaimBtn: "🎁 Ödülü Al ve Kapat",
            adReviveTitle: "❤️ Kaldığın Yerden 3 Can + Kalkanla Canlan",
            adReviveDesc: "Reklam sonunda 3 Tam Can (♥♥♥) ve Aether Kalkanı (🛡) ile kaldığın yerden devam edeceksin!",
            adDoubleTitle: "⭐ Bölüm Zafer Ödüllerini 2'ye Katla",
            adDoubleDesc: "Bu bölümde topladığın tüm Coin, Zümrüt ve Kristalleri anında 2 ile çarp!",
            adChestTitle: "🎁 Hazine Sandığı & Bonus Ödül",
            adChestDesc: "Sandığı açarak anında ekstra Zümrüt ve Coin kazan!",
            rateModalTitle: "Marinext 2100'ü Beğendiniz mi?",
            rateModalDesc: "Oyun deneyiminizi daha da güzelleştirmek için geliştirici ekibimize Google Play'de 5 yıldız vererek destek olabilirsiniz!",
            btnRateNow: "⭐ 5 YILDIZ VER & PUANLA ▶",
            btnRateFeedback: "💬 Öneri / Hata Bildir",
            btnRateLater: "Daha Sonra ✕"
        },
        en: {
            coinLabel: "Coin:",
            btnLeaderboard: "🏆 LEADERBOARD",
            btnFeedback: "💬 FEEDBACK",
            worldAll: "🌍 All (1-100)",
            worldTabPrefix: "World",
            worldRegions10: [
                "ZONE 1: CRYSTAL CAVERNS",
                "ZONE 2: CYBER MAGMA",
                "ZONE 3: QUANTUM VOID",
                "ZONE 4: COSMIC ABYSS",
                "ZONE 5: GLACIAL STORM",
                "ZONE 6: BIO-LABORATORY",
                "ZONE 7: SKY SHIPYARD",
                "ZONE 8: ANCIENT TEMPLE",
                "ZONE 9: DARK MATTER",
                "ZONE 10: IMPERIAL THRONE"
            ],
            charSub: "Unlock realistic historical and cyber outfits using <strong>Coins (✪)</strong> collected in levels! Equipping an outfit also changes your hero's <strong>face, beard/mustache, and stance</strong>!",
            btnAdChestChar: "🎬 Watch Ad (+50 ✪ Coin)",
            btnAdChestCust: "🎬 Watch Ad (+10 ❖ Emerald & +50 ✪ Coin)",
            charTabAll: "🌟 All Heroes",
            charTabOwned: "✅ Owned",
            charTabLocked: "🔒 Available to Unlock",
            charEmptyLocked: "🎉 Congratulations! You have unlocked all characters in the game!",
            charEmptyOther: "No characters found in this filter.",
            charActiveBadge: "👑 ACTIVE HERO",
            charOwnedBadge: "✓ OWNED",
            charActiveBtn: "👑 ACTIVE HERO (SELECTED)",
            charSelectBtn: "✓ SELECT & EQUIP HERO",
            charBuyBtn: "🪙 UNLOCK ({cost} ✪ Coin)",
            charAdBuyBtn: "🎬 GET COINS / UNLOCK ({cost} ✪)",
            shopOwnedBadge: "✓ OWNED",
            shopActiveBtn: "✓ ACTIVE UPGRADE",
            shopBuyBtn: "BUY ({cost} ◆ Crystal)",
            shopAdBuyBtn: "🎬 GET CRYSTALS / UNLOCK ({cost} ◆)",
            custEquippedBadge: "👑 EQUIPPED",
            custOwnedBadge: "✓ OWNED",
            custEquippedBtn: "✓ EQUIPPED (ACTIVE)",
            custEquipBtn: "EQUIP & ACTIVATE",
            custUnlockBtn: "UNLOCK ({cost} ❖ Emerald)",
            custAdUnlockBtn: "🎬 GET EMERALDS / UNLOCK ({cost} ❖)",
            milestoneUnlocked: "🏆 Level {lvl} Milestone Reward (Unlocked ✓)",
            milestoneLocked: "🏆 Level {lvl} Reward or {cost} ❖ Emerald",
            totalPowerSummary: "⚡ Total Power: {hp}♥ Lives • +{spd}% Speed • x{mult} Score{glide}",
            glideTag: " • 🪽 Glide",
            lbTitle: "CHAMPIONS LEADERBOARD",
            lbSubtitle: "Climb the ranks across 4 pro categories, claim league rewards, and reach the top on Google Play Games!",
            lbPlayGamesBtn: "Official Play Games",
            lbAchievementsBtn: "🏆 Achievements",
            lbScopeFriends: "👥 Friends",
            lbCatScore: "🏆 High Score",
            lbCatProgress: "⚔️ 100 Levels & Boss",
            lbCatEmerald: "❖ Emerald & Treasure",
            lbCatSpeedrun: "⚡ Best Speedrun",
            lbScopeGlobal: "🌍 Global (All-Time)",
            lbScopeWeekly: "🔥 Weekly Season",
            lbScopeTr: "🇹🇷 Regional Top 25",
            lbYouBadge: "YOU",
            lbYourRankLabel: "YOUR SCORE",
            lbEmptyPodiumTitle: "OPEN PODIUM",
            lbEmptyPodiumSub: "Awaiting New Champion",
            lbEmptyPodiumHint: "Play now to claim this spot!",
            lbHeroPrefix: "Hero:",
            lbLiveInfoBanner: "🎮 <strong>Live Multiplayer Leaderboard:</strong> Every level clear, checkpoint, and score gain is automatically synced to the live cloud leaderboard and Google Play Games.",
            lbSyncConnected: "● {scope} • Live Multiplayer Ranking ({count} Players) • Play Games Connected ({name})",
            lbSyncCloud: "● {scope} • Live Multiplayer Ranking ({count} Players • Cloud Sync Active)",
            lbMetricProgress: "Level {prog}/100 • {bosses} Bosses",
            lbMetricEmerald: "{val} ❖ Treasure Pts",
            lbMetricNoSpeed: "⏱️ No Record Yet",
            lbMetricSpeed: "⚡ {sec} s",
            lbMetricScore: "{val} Pts",
            lbLeagueImperial: "👑 IMPERIAL CHAMPION (#1)",
            lbLeagueGrandmaster: "💎 GRANDMASTER LEAGUE (TOP 3)",
            lbLeagueDiamond: "💠 DIAMOND LEAGUE (TOP 7)",
            lbLeagueGold: "🥇 GOLD LEAGUE (TOP 12)",
            lbLeagueSilver: "🥈 SILVER LEAGUE",
            lbTargetIneligible: "🎯 Clear at least 1 level or reach 1,000 pts to unlock league rewards!",
            lbTargetSpeed: "Next Rank #{rank} ({name}): Finish {diff}s faster!",
            lbTargetScore: "Next Rank #{rank} ({name}): +{diff} pts needed!",
            lbTargetTop: "👑 You are #1 at the top of the leaderboard!",
            lbRewardClaimed: "✓ League Reward Claimed",
            lbRewardLocked: "🔒 Clear 1 Level to Claim",
            lbRewardClaimBtn: "🎁 Claim (+{coins}✪ +{emeralds}❖)",
            btnPickAvatar: "🖼️ Choose Avatar (30)",
            profileNamePlaceholder: "Enter hero name...",
            profileCloudTitle: "🎮 GOOGLE PLAY GAMES & GOOGLE DRIVE CLOUD SAVE",
            cloudBadgeConnected: "🎮 Play Games & GDrive: CONNECTED{name}",
            cloudBadgeActive: "☁️ Google Drive Backup: ACTIVE",
            cloudSyncStatusLine: "Last Sync: {time} • Level: {lvl}/100 (Troll: {troll}/15) • Coin: {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 Sync Play Games",
            btnCloudExport: "☁️ Save Backup to Drive",
            btnCloudImport: "📂 Load Backup",
            profileLevelWord: "Level",
            attrHpArmor: "❤️ MAX HEALTH & ARMOR",
            attrSpeedJump: "⚡ SPEED & JUMP ABILITY",
            attrHelmetGear: "⚔️ HELMET & BACK GEAR",
            attrVisorAura: "✨ VISOR & AURA EFFECT",
            attrSpecialPowers: "🔥 ACTIVE SPECIAL POWERS",
            attrProgressWealth: "🏆 PROGRESS & TREASURY",
            attrRunLabel: "Run",
            attrJumpLabel: "Jump",
            attrDoubleTripleJump: "Double/Triple Jump",
            attrWallJump: "Wall Jump",
            attrStartShield: "🛡 Starter Shield",
            attrStartFire: "🔥 Plasma Fire",
            attrMagnet: "🧲 Emerald Magnet",
            avatarPickerSub: "Select your hero emblem for your profile and the Leaderboard:",
            btnConfirmAvatar: "CONFIRM SELECTION ✓",
            fps120: "120 FPS (ULTRA SMOOTH) ⚡",
            fps60: "60 FPS (BALANCED) ⚙️",
            fps30: "30 FPS (BATTERY SAVER) 🔋",
            btnSettingsFeedback: "💬 Send Feedback & Bug Report",
            btnSettingsCloud: "🎮 Google Play Games & Google Drive Cloud Save",
            btnSettingsPrivacy: "🛡️ Privacy Policy",
            btnSettingsConsent: "🔒 Ad & Privacy Preferences (GDPR / UMP)",
            channelPrefix: "Channel:",
            channelInternal: "🧪 INTERNAL TEST",
            channelAlpha: "🎯 CLOSED TEST",
            channelProduction: "🌐 PRODUCTION",
            channelToastInternal: "🧪 Internal Test track active! Latest developer builds checked instantly.",
            channelToastAlpha: "🎯 Closed Test (Alpha) track active!",
            channelToastProduction: "🌐 Production track active!",
            adConsentPersonalized: "ENABLED ✓ (PERSONALIZED)",
            adConsentStandard: "DISABLED ✕ (STANDARD / NON-PERSONALIZED)",
            adConsentTitle: "🔒 Ad & Privacy Preferences (GDPR / UMP)",
            adConsentSub: "Manage your Google AdMob ad personalization, frequency cap, and data processing preferences.",
            adPersonalizedLabel: "🎯 Personalized Ads (Interest-Based)",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 Our Player-Friendly Ad Policy:</strong><br>• Never interrupts active gameplay.<br>• Interstitial ads appear at most <strong>once every 3 level victories</strong>.<br>• Rewarded videos are <strong>100% optional</strong>.",
            adGdprHtml: "<strong>🇪🇺 EU / EEA & UK (GDPR / Google UMP):</strong> You can review and update your official Google UMP Consent Form at any time below.",
            btnOpenUmpForm: "📋 Review Google UMP Consent Form",
            btnSaveConsent: "SAVE PREFERENCES ✓",
            fbTitle: "💬 Player Feedback & Bug Report",
            fbSub: "Share your suggestions, bug reports, or level feedback directly with our development team!",
            fbStarLabel: "⭐ YOUR RATING:",
            fbCatLabel: "📌 TOPIC:",
            fbCat1: "💡 Suggestion & Idea",
            fbCat2: "🐞 Bug Report",
            fbCat3: "🗺️ Level & Difficulty",
            fbCat4: "⚡ Performance / FPS",
            fbMsgLabel: "✍️ YOUR MESSAGE (Level number, device, or suggestion):",
            fbMsgPlaceholder: "E.g. The laser gates in Level 24 are super fun, love the new characters...",
            btnSubmitPlayConsole: "📲 SAVE & SEND GOOGLE PLAY FEEDBACK ▶",
            btnSubmitDirect: "📨 Send Direct Report to Developer",
            btnCloseFeedback: "CLOSE ✕",
            insuffEmeraldTitle: "NOT ENOUGH ANCIENT EMERALDS (❖)!",
            insuffEmeraldDesc: "You need <strong>{missing} ❖ more Ancient Emeralds</strong> to unlock <strong>{item}</strong>.<br>Watch a short rewarded video to get <strong>+10 ❖ Emeralds + 25 ✪ Coins</strong> instantly!",
            insuffEmeraldBtn: "🎬 Watch Ad & Get +10 ❖ Emeralds",
            insuffCrystalTitle: "NOT ENOUGH BLUE CRYSTALS (◆)!",
            insuffCrystalDesc: "You need <strong>{missing} ◆ more Crystals</strong> to unlock <strong>{item}</strong>.<br>Watch a short rewarded video to get <strong>+80 ◆ Crystals + 5 ❖ Emeralds</strong> instantly!",
            insuffCrystalBtn: "🎬 Watch Ad & Get +80 ◆ Crystals",
            insuffGoldTitle: "NOT ENOUGH GOLD COINS (✪)!",
            insuffGoldDesc: "You need <strong>{missing} ✪ more Coins</strong> to unlock <strong>{item}</strong>.<br>Watch a short rewarded video to get <strong>+50 ✪ Gold Coins</strong> instantly!",
            insuffGoldBtn: "🎬 Watch Ad & Get +50 ✪ Coins",
            btnCancel: "Cancel",
            btnReviveAd: "🎬 Watch Ad & Revive On The Spot (+3 ♥)",
            btnDoubleAd: "🎬 Watch Ad & Double Level Rewards (2x ✪❖◆)",
            updateTitle: "NEW UPDATE AVAILABLE!",
            updateDesc: "A new version of <strong>Marinext 2100</strong> is live! Update now for the latest features and improvements.",
            btnDoUpdate: "📲 UPDATE ON GOOGLE PLAY ▶",
            btnLaterUpdate: "Remind Me Later",
            updateLinkChangelog: "📋 View Full Release Notes & What's New ↗",
            langAutoTitle: "📱 Automatic — Device Language ({native})",
            langAutoSub: "Automatically matches your device language • Detected: {badge}",
            splashBadge: "⚡ 120 FPS ULTRA-SMOOTH CYBER-PLATFORM ENGINE",
            splashSub: "100 Campaign Levels • 10 Action Worlds • 15 Historical & Cyber Heroes",
            splashStatus: "Loading Worlds and Heroes...",
            settingsGroupAudio: "🔊 AUDIO, PERFORMANCE & SYSTEM",
            settingsGroupSupport: "📋 GUIDE, PROGRESS & SUPPORT",
            btnSettingsTutorial: "📖 View Beginner Guide & Controls",
            btnSettingsRate: "⭐ Rate & Review Game on Google Play",
            btnTestAd: "🎬 TEST AD",
            crystalLabel: "Crystal:",
            btnTutorialSkip: "⏩ Skip Guide",
            btnReviveAd1: "🎬 Watch Ad & Revive (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 Watch Ad & Last Chance Revive (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ Hyper Speed (120 FPS)",
            profileSpeedStd: "⚡ Standard Speed",
            profileHeartsWord: "Hearts",
            profileStageWord: "Level",
            adRewardEmeraldTitle: "🎁 Emerald & Coin Reward",
            adRewardEmeraldDesc: "+10 ❖ Ancient Emeralds and +50 ✪ Coins added to your wallet!",
            adRewardCrystalTitle: "🎁 Blue Crystal Reward",
            adRewardCrystalDesc: "+80 ◆ Blue Crystals and +5 ❖ Emeralds added to your wallet!",
            adRewardGoldTitle: "🎁 Gold Coin Reward",
            adRewardGoldDesc: "+50 ✪ Gold Coins added to your wallet!",
            adLoadingBtn: "⏳ Loading Ad, Please Wait...",
            adOpeningBtn: "📺 Opening Ad...",
            adSkippedNotice: "ℹ️ Please watch the full video to receive your reward.",
            adUnavailableAlert: "No video ad is currently available or internet connection is offline. Please try again in a few seconds.",
            adOverlayBadge: "REWARDED VIDEO",
            adOverlayPlaying: "⏳ Preparing... ({sec})",
            adOverlayReady: "🎁 Claim Reward & Close",
            adOverlayClaimBtn: "🎁 Claim Reward & Close",
            adReviveTitle: "❤️ Revive with 3 Hearts + Shield",
            adReviveDesc: "Continue right where you died with 3 Full Hearts (♥♥♥) and Aether Shield (🛡)!",
            adDoubleTitle: "⭐ Double Level Victory Rewards",
            adDoubleDesc: "Instantly multiply all Coins, Emeralds, and Crystals from this level by 2!",
            adChestTitle: "🎁 Treasure Chest Bonus Reward",
            adChestDesc: "Open the chest to receive instant bonus Emeralds and Coins!",
            rateModalTitle: "Enjoying Marinext 2100?",
            rateModalDesc: "To help us make your gaming experience even better, please support our indie developer team with a 5-star rating on Google Play!",
            btnRateNow: "⭐ RATE 5 STARS NOW ▶",
            btnRateFeedback: "💬 Feedback / Report Issue",
            btnRateLater: "Maybe Later ✕"
        },
        ru: {
            coinLabel: "Монеты:",
            btnLeaderboard: "🏆 РЕЙТИНГ",
            btnFeedback: "💬 ОТЗЫВ",
            worldAll: "🌍 Все (1-100)",
            worldTabPrefix: "Мир",
            worldRegions10: [
                "ЗОНА 1: КРИСТАЛЬНЫЕ ПЕЩЕРЫ",
                "ЗОНА 2: КИБЕР-МАГМА",
                "ЗОНА 3: КВАНТОВАЯ ПУСТОТА",
                "ЗОНА 4: КОСМИЧЕСКАЯ БЕЗДНА",
                "ЗОНА 5: ЛЕДЯНОЙ ШТОРМ",
                "ЗОНА 6: БИО-ЛАБОРАТОРИЯ",
                "ЗОНА 7: НЕБЕСНАЯ ВЕРФЬ",
                "ЗОНА 8: ДРЕВНИЙ ХРАМ",
                "ЗОНА 9: ТЕМНАЯ МАТЕРИЯ",
                "ЗОНА 10: ИМПЕРСКИЙ ТРОН"
            ],
            charSub: "Открывай исторические и кибер-костюмы за <strong>Монеты (✪)</strong>! При смене костюма меняются <strong>черты лица, борода/усы и стойка героя</strong>!",
            btnAdChestChar: "🎬 Реклама (+50 ✪ Монет)",
            btnAdChestCust: "🎬 Реклама (+10 ❖ Изумрудов и +50 ✪)",
            charTabAll: "🌟 Все Герои",
            charTabOwned: "✅ Купленные",
            charTabLocked: "🔒 Доступные",
            charEmptyLocked: "🎉 Поздравляем! Вы открыли всех персонажей в игре!",
            charEmptyOther: "В этой категории пока нет персонажей.",
            charActiveBadge: "👑 АКТИВЕН",
            charOwnedBadge: "✓ КУПЛЕНО",
            charActiveBtn: "👑 АКТИВНЫЙ ГЕРОЙ",
            charSelectBtn: "✓ ВЫБРАТЬ И НАДЕТЬ",
            charBuyBtn: "🪙 КУПИТЬ ({cost} ✪ Монет)",
            charAdBuyBtn: "🎬 ПОЛУЧИТЬ МОНЕТЫ ({cost} ✪)",
            shopOwnedBadge: "✓ КУПЛЕНО",
            shopActiveBtn: "✓ АКТИВНО",
            shopBuyBtn: "КУПИТЬ ({cost} ◆ Кристаллов)",
            shopAdBuyBtn: "🎬 ПОЛУЧИТЬ КРИСТАЛЛЫ ({cost} ◆)",
            custEquippedBadge: "👑 НАДЕТО",
            custOwnedBadge: "✓ ОТКРЫТО",
            custEquippedBtn: "✓ НАДЕТО (АКТИВНО)",
            custEquipBtn: "НАДЕТЬ",
            custUnlockBtn: "ОТКРЫТЬ ({cost} ❖ Изумрудов)",
            custAdUnlockBtn: "🎬 ПОЛУЧИТЬ ИЗУМРУДЫ ({cost} ❖)",
            milestoneUnlocked: "🏆 Награда за уровень {lvl} (Открыто ✓)",
            milestoneLocked: "🏆 Награда ур. {lvl} или {cost} ❖ Изумрудов",
            totalPowerSummary: "⚡ Мощь: {hp}♥ Жизни • +{spd}% Скорость • x{mult} Счёт{glide}",
            glideTag: " • 🪽 Планирование",
            lbTitle: "ТАБЛИЦА ЛИДЕРОВ ЧЕМПИОНОВ",
            lbSubtitle: "Повышай рейтинг в 4 категориях, получай награды лиг и побеждай в Google Play Games!",
            lbPlayGamesBtn: "Таблица Play Games",
            lbAchievementsBtn: "🏆 Достижения",
            lbScopeFriends: "👥 Друзья",
            lbCatScore: "🏆 Рекорд Счёта",
            lbCatProgress: "⚔️ 100 Уровней и Боссы",
            lbCatEmerald: "❖ Изумруды и Казна",
            lbCatSpeedrun: "⚡ Скоростной Рекорд",
            lbScopeGlobal: "🌍 Мировой (Все время)",
            lbScopeWeekly: "🔥 Недельный Сезон",
            lbScopeTr: "🇹🇷 Региональный Топ 25",
            lbYouBadge: "ВЫ",
            lbYourRankLabel: "ВАШ РЕЗУЛЬТАТ",
            lbEmptyPodiumTitle: "СВОБОДНО",
            lbEmptyPodiumSub: "Ждем нового чемпиона",
            lbEmptyPodiumHint: "Начни играть и займи место!",
            lbHeroPrefix: "Герой:",
            lbLiveInfoBanner: "🎮 <strong>Живой Мультиплеерный Рейтинг:</strong> Все рекорды, уровни и чекпоинты мгновенно синхронизируются с облаком и Google Play Games.",
            lbSyncConnected: "● {scope} • Живой Рейтинг ({count} Игроков) • Play Games ({name})",
            lbSyncCloud: "● {scope} • Живой Рейтинг ({count} Игроков • Облако активно)",
            lbMetricProgress: "Уровень {prog}/100 • {bosses} Боссов",
            lbMetricEmerald: "{val} ❖ Очков Сокровищ",
            lbMetricNoSpeed: "⏱️ Нет рекорда",
            lbMetricSpeed: "⚡ {sec} сек",
            lbMetricScore: "{val} Очков",
            lbLeagueImperial: "👑 ИМПЕРСКИЙ ЧЕМПИОН (#1)",
            lbLeagueGrandmaster: "💎 ГРОССМЕЙСТЕР (ТОП 3)",
            lbLeagueDiamond: "💠 АЛМАЗНАЯ ЛИГА (ТОП 7)",
            lbLeagueGold: "🥇 ЗОЛОТАЯ ЛИГА (ТОП 12)",
            lbLeagueSilver: "🥈 СЕРЕБРЯНАЯ ЛИГА",
            lbTargetIneligible: "🎯 Пройдите 1 уровень или наберите 1000 очков для награды лиги!",
            lbTargetSpeed: "До #{rank} ({name}): быстрее на {diff} сек!",
            lbTargetScore: "До #{rank} ({name}): ещё +{diff} очков!",
            lbTargetTop: "👑 Вы на 1-м месте в рейтинге!",
            lbRewardClaimed: "✓ Награда Получена",
            lbRewardLocked: "🔒 Пройдите 1 Уровень",
            lbRewardClaimBtn: "🎁 Награда (+{coins}✪ +{emeralds}❖)",
            btnPickAvatar: "🖼️ Выбрать Аватар (30)",
            profileNamePlaceholder: "Введите имя героя...",
            profileCloudTitle: "🎮 ОБЛАЧНОЕ СОХРАНЕНИЕ PLAY GAMES И GOOGLE DRIVE",
            cloudBadgeConnected: "🎮 Play Games и GDrive: ПОДКЛЮЧЕНО{name}",
            cloudBadgeActive: "☁️ Облако Google Drive: АКТИВНО",
            cloudSyncStatusLine: "Сохранено: {time} • Уровень: {lvl}/100 (Тролль: {troll}/15) • Монеты: {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 Синхр. Play Games",
            btnCloudExport: "☁️ Сохранить на Drive",
            btnCloudImport: "📂 Загрузить копию",
            profileLevelWord: "Уровень",
            attrHpArmor: "❤️ ЗДОРОВЬЕ И БРОНЯ",
            attrSpeedJump: "⚡ СКОРОСТЬ И ПРЫЖОК",
            attrHelmetGear: "⚔️ ШЛЕМ И ОРУЖИЕ",
            attrVisorAura: "✨ ВИЗОР И АУРА",
            attrSpecialPowers: "🔥 ОСОБЫЕ СИЛЫ",
            attrProgressWealth: "🏆 ПРОГРЕСС И КАЗНА",
            attrRunLabel: "Бег",
            attrJumpLabel: "Прыжок",
            attrDoubleTripleJump: "Двойной/Тройной прыжок",
            attrWallJump: "Прыжок от стены",
            attrStartShield: "🛡 Стартовый Щит",
            attrStartFire: "🔥 Огненный Шар",
            attrMagnet: "🧲 Магнит Изумрудов",
            avatarPickerSub: "Выберите эмблему героя для профиля и таблицы лидеров:",
            btnConfirmAvatar: "ПОДТВЕРДИТЬ ВЫБОР ✓",
            fps120: "120 FPS (УЛЬТРА ПЛАВНО) ⚡",
            fps60: "60 FPS (БАЛАНС) ⚙️",
            fps30: "30 FPS (ЭКОНОМИЯ БАТАРЕИ) 🔋",
            btnSettingsFeedback: "💬 Отправить отзыв и сообщить об ошибке",
            btnSettingsCloud: "🎮 Облачное сохранение Play Games и Google Drive",
            btnSettingsPrivacy: "🛡️ Политика конфиденциальности",
            btnSettingsConsent: "🔒 Настройки рекламы и конфиденциальности (GDPR)",
            channelPrefix: "Канал:",
            channelInternal: "🧪 ВНУТРЕННИЙ ТЕСТ",
            channelAlpha: "🎯 ЗАКРЫТЫЙ ТЕСТ",
            channelProduction: "🌐 ОБЩИЙ РЕЛИЗ",
            channelToastInternal: "🧪 Внутренний тест активен! Сборки проверяются немедленно.",
            channelToastAlpha: "🎯 Закрытый тест активен!",
            channelToastProduction: "🌐 Общий канал релиза активен!",
            adConsentPersonalized: "ВКЛЮЧЕНО ✓ (ПЕРСОНАЛИЗИРОВАННАЯ)",
            adConsentStandard: "ВЫКЛЮЧЕНО ✕ (СТАНДАРТНАЯ)",
            adConsentTitle: "🔒 Настройки рекламы и конфиденциальности (GDPR / UMP)",
            adConsentSub: "Управляйте персонализацией рекламы Google AdMob и обработкой данных.",
            adPersonalizedLabel: "🎯 Персонализированная реклама",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 Честные правила рекламы:</strong><br>• Реклама никогда не прерывает игровой процесс.<br>• Межстраничная реклама — не чаще чем раз в <strong>3 пройденных уровня</strong>.<br>• Бонусные видео — <strong>полностью по желанию</strong>.",
            adGdprHtml: "<strong>🇪🇺 ЕС / ЕЭЗ и Великобритания (GDPR / UMP):</strong> Вы можете изменить согласие Google UMP в любой момент.",
            btnOpenUmpForm: "📋 Открыть форму согласия Google UMP",
            btnSaveConsent: "СОХРАНИТЬ НАСТРОЙКИ ✓",
            fbTitle: "💬 Обратная связь и отчет об ошибке",
            fbSub: "Отправьте ваши идеи, отзывы об уровнях или отчеты об ошибках команде разработчиков!",
            fbStarLabel: "⭐ ВАША ОЦЕНКА:",
            fbCatLabel: "📌 ТЕМА:",
            fbCat1: "💡 Идея и Предложение",
            fbCat2: "🐞 Ошибка / Баг",
            fbCat3: "🗺️ Уровни и Сложность",
            fbCat4: "⚡ Производительность / FPS",
            fbMsgLabel: "✍️ ВАШЕ СООБЩЕНИЕ:",
            fbMsgPlaceholder: "Например: Лазерные ворота на 24 уровне супер, новые герои отличные...",
            btnSubmitPlayConsole: "📲 СОХРАНИТЬ И ОТПРАВИТЬ В GOOGLE PLAY ▶",
            btnSubmitDirect: "📨 Отправить напрямую разработчику",
            btnCloseFeedback: "ЗАКРЫТЬ ✕",
            insuffEmeraldTitle: "НЕДОСТАТОЧНО ДРЕВНИХ ИЗУМРУДОВ (❖)!",
            insuffEmeraldDesc: "Для открытия <strong>{item}</strong> не хватает <strong>{missing} ❖ Изумрудов</strong>.<br>Посмотрите короткое видео и получите <strong>+10 ❖ Изумрудов + 25 ✪ Монет</strong>!",
            insuffEmeraldBtn: "🎬 Смотреть видео (+10 ❖ Изумрудов)",
            insuffCrystalTitle: "НЕДОСТАТОЧНО СИНИХ КРИСТАЛЛОВ (◆)!",
            insuffCrystalDesc: "Для открытия <strong>{item}</strong> не хватает <strong>{missing} ◆ Кристаллов</strong>.<br>Посмотрите короткое видео и получите <strong>+80 ◆ Кристаллов + 5 ❖ Изумрудов</strong>!",
            insuffCrystalBtn: "🎬 Смотреть видео (+80 ◆ Кристаллов)",
            insuffGoldTitle: "НЕДОСТАТОЧНО ЗОЛОТЫХ МОНЕТ (✪)!",
            insuffGoldDesc: "Для открытия <strong>{item}</strong> не хватает <strong>{missing} ✪ Монет</strong>.<br>Посмотрите короткое видео и получите <strong>+50 ✪ Золотых Монет</strong>!",
            insuffGoldBtn: "🎬 Смотреть видео (+50 ✪ Монет)",
            btnCancel: "Отмена",
            btnReviveAd: "🎬 Смотреть рекламу и воскреснуть на месте (+3 ♥)",
            btnDoubleAd: "🎬 Смотреть рекламу и удвоить награду (2x ✪❖◆)",
            updateTitle: "ДОСТУПНО ОБНОВЛЕНИЕ!",
            updateDesc: "Вышла новая версия <strong>Marinext 2100</strong>! Обновите игру в Google Play.",
            btnDoUpdate: "📲 ОБНОВИТЬ В GOOGLE PLAY ▶",
            btnLaterUpdate: "Напомнить позже",
            updateLinkChangelog: "📋 Полный список изменений и новинки ↗",
            langAutoTitle: "📱 Автоматически — Язык устройства ({native})",
            langAutoSub: "Автоматически выбирает язык телефона • Определен: {badge}",
            splashBadge: "⚡ 120 FPS УЛЬТРА-ПЛАВНЫЙ КИБЕР-ПЛАТФОРМЕР",
            splashSub: "100 Уровней Кампании • 10 Миров • 15 Исторических и Кибер-Героев",
            splashStatus: "Загрузка миров и героев...",
            settingsGroupAudio: "🔊 ЗВУК, ПРОИЗВОДИТЕЛЬНОСТЬ И СИСТЕМА",
            settingsGroupSupport: "📋 РУКОВОДСТВО, ПРОГРЕСС И ПОДДЕРЖКА",
            btnSettingsTutorial: "📖 Руководство и управление",
            btnSettingsRate: "⭐ Оценить игру в Google Play",
            btnTestAd: "🎬 ТЕСТ РЕКЛАМЫ",
            crystalLabel: "Кристалл:",
            btnTutorialSkip: "⏩ Пропустить",
            btnReviveAd1: "🎬 Возродиться за рекламу (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 Возродиться — последний шанс (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ Гипер-скорость (120 FPS)",
            profileSpeedStd: "⚡ Стандартная скорость",
            profileHeartsWord: "Жизни",
            profileStageWord: "Уровень",
            adRewardEmeraldTitle: "🎁 Награда: Изумруды и Монеты",
            adRewardEmeraldDesc: "+10 ❖ Изумрудов и +50 ✪ Монет добавлено в ваш кошелек!",
            adRewardCrystalTitle: "🎁 Награда: Синие Кристаллы",
            adRewardCrystalDesc: "+80 ◆ Кристаллов и +5 ❖ Изумрудов добавлено в ваш кошелек!",
            adRewardGoldTitle: "🎁 Награда: Золотые Монеты",
            adRewardGoldDesc: "+50 ✪ Монет добавлено в ваш кошелек!",
            adLoadingBtn: "⏳ Загрузка рекламы...",
            adOpeningBtn: "📺 Открытие рекламы...",
            adSkippedNotice: "ℹ️ Пожалуйста, досмотрите видео до конца, чтобы получить награду.",
            adUnavailableAlert: "Видеореклама сейчас недоступна или нет интернет-соединения. Попробуйте через пару секунд.",
            adOverlayBadge: "ВИДЕО С НАГРАДОЙ",
            adOverlayPlaying: "⏳ Подготовка... ({sec})",
            adOverlayReady: "🎁 Забрать награду и закрыть",
            adOverlayClaimBtn: "🎁 Забрать награду и закрыть",
            adReviveTitle: "❤️ Возрождение: 3 Сердца + Щит",
            adReviveDesc: "Продолжайте игру с 3 полными сердцами (♥♥♥) и эфирным щитом (🛡)!",
            adDoubleTitle: "⭐ Удвоить награды за победу",
            adDoubleDesc: "Удвойте все монеты, изумруды и кристаллы, собранные на этом уровне!",
            adChestTitle: "🎁 Сундук с сокровищами",
            adChestDesc: "Откройте сундук и получите бонусные изумруды и монеты!",
            rateModalTitle: "Вам нравится Marinext 2100?",
            rateModalDesc: "Чтобы помочь нам сделать игру еще лучше, поддержите нашу команду инди-разработчиков оценкой 5 звезд в Google Play!",
            btnRateNow: "⭐ ОЦЕНИТЬ НА 5 ЗВЕЗД ▶",
            btnRateFeedback: "💬 Отзыв / Сообщить об ошибке",
            btnRateLater: "Позже ✕"
        },
        it: {
            coinLabel: "Monete:",
            btnLeaderboard: "🏆 CLASSIFICA",
            btnFeedback: "💬 FEEDBACK",
            worldAll: "🌍 Tutti (1-100)",
            worldTabPrefix: "Mondo",
            worldRegions10: [
                "ZONA 1: GROTTE DI CRISTALLO",
                "ZONA 2: CYBER MAGMA",
                "ZONA 3: VUOTO QUANTICO",
                "ZONA 4: ABISSO COSMICO",
                "ZONA 5: TEMPESTA GLACIALE",
                "ZONA 6: BIO-LABORATORIO",
                "ZONA 7: CANTIERE CELESTE",
                "ZONA 8: TEMPIO ANTICO",
                "ZONA 9: MATERIA OSCURA",
                "ZONA 10: TRONO IMPERIALE"
            ],
            charSub: "Sblocca costumi storici e cyber con le <strong>Monete (✪)</strong>! Ogni costume cambia anche <strong>il volto, la barba/baffi e la postura dell'eroe</strong>!",
            btnAdChestChar: "🎬 Guarda Video (+50 ✪ Monete)",
            btnAdChestCust: "🎬 Guarda Video (+10 ❖ Smeraldi & +50 ✪)",
            charTabAll: "🌟 Tutti gli Eroi",
            charTabOwned: "✅ Sbloccati",
            charTabLocked: "🔒 Da Sbloccare",
            charEmptyLocked: "🎉 Complimenti! Hai sbloccato tutti i personaggi del gioco!",
            charEmptyOther: "Nessun personaggio in questo filtro.",
            charActiveBadge: "👑 EROE ATTIVO",
            charOwnedBadge: "✓ SBLOCCATO",
            charActiveBtn: "👑 EROE ATTIVO (SELEZIONATO)",
            charSelectBtn: "✓ SELEZIONA ED EQUIPAGGIA",
            charBuyBtn: "🪙 SBLOCCA ({cost} ✪ Monete)",
            charAdBuyBtn: "🎬 OTTIENI MONETE ({cost} ✪)",
            shopOwnedBadge: "✓ SBLOCCATO",
            shopActiveBtn: "✓ POTENZIAMENTO ATTIVO",
            shopBuyBtn: "ACQUISTA ({cost} ◆ Cristalli)",
            shopAdBuyBtn: "🎬 OTTIENI CRISTALLI ({cost} ◆)",
            custEquippedBadge: "👑 INDOSSATO",
            custOwnedBadge: "✓ SBLOCCATO",
            custEquippedBtn: "✓ INDOSSATO (ATTIVO)",
            custEquipBtn: "INDOSSA E ATTIVA",
            custUnlockBtn: "SBLOCCA ({cost} ❖ Smeraldi)",
            custAdUnlockBtn: "🎬 OTTIENI SMERALDI ({cost} ❖)",
            milestoneUnlocked: "🏆 Premio Livello {lvl} (Sbloccato ✓)",
            milestoneLocked: "🏆 Premio Liv. {lvl} o {cost} ❖ Smeraldi",
            totalPowerSummary: "⚡ Potenza: {hp}♥ Vite • +{spd}% Velocità • x{mult} Punti{glide}",
            glideTag: " • 🪽 Planata",
            lbTitle: "CLASSIFICA DEI CAMPIONI",
            lbSubtitle: "Scala la classifica in 4 categorie, riscatta i premi di lega e domina su Google Play Games!",
            lbPlayGamesBtn: "Classifica Play Games",
            lbAchievementsBtn: "🏆 Obiettivi",
            lbScopeFriends: "👥 Amici",
            lbCatScore: "🏆 Punteggio",
            lbCatProgress: "⚔️ 100 Livelli & Boss",
            lbCatEmerald: "❖ Smeraldi & Tesoro",
            lbCatSpeedrun: "⚡ Record Velocità",
            lbScopeGlobal: "🌍 Globale (Sempre)",
            lbScopeWeekly: "🔥 Stagione Settimanale",
            lbScopeTr: "🇹🇷 Top 25 Regionale",
            lbYouBadge: "TU",
            lbYourRankLabel: "IL TUO PUNTEGGIO",
            lbEmptyPodiumTitle: "PODIO LIBERO",
            lbEmptyPodiumSub: "In attesa di un campione",
            lbEmptyPodiumHint: "Gioca ora e conquista il posto!",
            lbHeroPrefix: "Eroe:",
            lbLiveInfoBanner: "🎮 <strong>Classifica Multiplayer Live:</strong> Ogni livello, checkpoint e punteggio viene sincronizzato in tempo reale con il cloud e Google Play Games.",
            lbSyncConnected: "● {scope} • Classifica Live ({count} Giocatori) • Play Games ({name})",
            lbSyncCloud: "● {scope} • Classifica Live ({count} Giocatori • Cloud Attivo)",
            lbMetricProgress: "Livello {prog}/100 • {bosses} Boss",
            lbMetricEmerald: "{val} ❖ Punti Tesoro",
            lbMetricNoSpeed: "⏱️ Nessun Record",
            lbMetricSpeed: "⚡ {sec} s",
            lbMetricScore: "{val} Punti",
            lbLeagueImperial: "👑 CAMPIONE IMPERIALE (#1)",
            lbLeagueGrandmaster: "💎 LEGA GRAN MAESTRO (TOP 3)",
            lbLeagueDiamond: "💠 LEGA DIAMANTE (TOP 7)",
            lbLeagueGold: "🥇 LEGA ORO (TOP 12)",
            lbLeagueSilver: "🥈 LEGA ARGENTO",
            lbTargetIneligible: "🎯 Completa almeno 1 livello o raggiungi 1.000 punti per il premio di lega!",
            lbTargetSpeed: "Obiettivo #{rank} ({name}): {diff}s più veloce!",
            lbTargetScore: "Obiettivo #{rank} ({name}): +{diff} punti!",
            lbTargetTop: "👑 Sei al 1° posto assoluto!",
            lbRewardClaimed: "✓ Premio Riscattato",
            lbRewardLocked: "🔒 Completa 1 Livello",
            lbRewardClaimBtn: "🎁 Riscatta (+{coins}✪ +{emeralds}❖)",
            btnPickAvatar: "🖼️ Scegli Avatar (30)",
            profileNamePlaceholder: "Scrivi il nome dell'eroe...",
            profileCloudTitle: "🎮 SALVATAGGIO CLOUD PLAY GAMES & GOOGLE DRIVE",
            cloudBadgeConnected: "🎮 Play Games & GDrive: CONNESSO{name}",
            cloudBadgeActive: "☁️ Backup Google Drive: ATTIVO",
            cloudSyncStatusLine: "Ultimo salvataggio: {time} • Livello: {lvl}/100 (Troll: {troll}/15) • Monete: {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 Sincronizza Play Games",
            btnCloudExport: "☁️ Salva su Drive",
            btnCloudImport: "📂 Carica Backup",
            profileLevelWord: "Livello",
            attrHpArmor: "❤️ VITA MASSIMA E ARMATURA",
            attrSpeedJump: "⚡ VELOCITÀ E SALTO",
            attrHelmetGear: "⚔️ ELMO E ARMA",
            attrVisorAura: "✨ VISIERA E AURA",
            attrSpecialPowers: "🔥 POTERI SPECIALI ATTIVI",
            attrProgressWealth: "🏆 PROGRESSO E TESORO",
            attrRunLabel: "Corsa",
            attrJumpLabel: "Salto",
            attrDoubleTripleJump: "Doppio/Triplo Salto",
            attrWallJump: "Salto a Parete",
            attrStartShield: "🛡 Scudo Iniziale",
            attrStartFire: "🔥 Fuoco al Plasma",
            attrMagnet: "🧲 Magnete Smeraldi",
            avatarPickerSub: "Scegli l'emblema per il tuo profilo e la Classifica:",
            btnConfirmAvatar: "CONFERMA SELEZIONE ✓",
            fps120: "120 FPS (ULTRA FLUIDO) ⚡",
            fps60: "60 FPS (BILANCIATO) ⚙️",
            fps30: "30 FPS (RISPARMIO ENERGIA) 🔋",
            btnSettingsFeedback: "💬 Invia Feedback e Segnala Problemi",
            btnSettingsCloud: "🎮 Salvataggio Cloud Play Games & Google Drive",
            btnSettingsPrivacy: "🛡️ Informativa sulla Privacy",
            btnSettingsConsent: "🔒 Preferenze Annunci e Privacy (GDPR / UMP)",
            channelPrefix: "Canale:",
            channelInternal: "🧪 TEST INTERNO",
            channelAlpha: "🎯 TEST CHIUSO",
            channelProduction: "🌐 PRODUZIONE",
            channelToastInternal: "🧪 Test interno attivo! Versioni sviluppatore verificate all'istante.",
            channelToastAlpha: "🎯 Test chiuso attivo!",
            channelToastProduction: "🌐 Canale di produzione attivo!",
            adConsentPersonalized: "ATTIVO ✓ (PERSONALIZZATO)",
            adConsentStandard: "DISATTIVO ✕ (STANDARD)",
            adConsentTitle: "🔒 Preferenze Annunci e Privacy (GDPR / UMP)",
            adConsentSub: "Gestisci la personalizzazione degli annunci Google AdMob e le preferenze sui dati.",
            adPersonalizedLabel: "🎯 Annunci Personalizzati",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 Regola Annunci Amichevole:</strong><br>• Nessun annuncio interrompe il gioco attivo.<br>• Annunci di fine livello al massimo <strong>ogni 3 vittorie</strong>.<br>• I video con premio sono <strong>100% facoltativi</strong>.",
            adGdprHtml: "<strong>🇪🇺 UE / SEE e Regno Unito (GDPR / UMP):</strong> Puoi aggiornare il modulo di consenso Google UMP in qualsiasi momento.",
            btnOpenUmpForm: "📋 Modulo di Consenso Google UMP",
            btnSaveConsent: "SALVA PREFERENZE ✓",
            fbTitle: "💬 Feedback e Segnalazione Bug",
            fbSub: "Invia suggerimenti, commenti sui livelli o segnalazioni direttamente al team di sviluppo!",
            fbStarLabel: "⭐ LA TUA VALUTAZIONE:",
            fbCatLabel: "📌 ARGOMENTO:",
            fbCat1: "💡 Idea e Suggerimento",
            fbCat2: "🐞 Segnalazione Bug",
            fbCat3: "🗺️ Livelli e Difficoltà",
            fbCat4: "⚡ Prestazioni / FPS",
            fbMsgLabel: "✍️ IL TUO MESSAGGIO:",
            fbMsgPlaceholder: "Es: Le porte laser nel livello 24 sono divertentissime...",
            btnSubmitPlayConsole: "📲 SALVA E INVIA FEEDBACK GOOGLE PLAY ▶",
            btnSubmitDirect: "📨 Invia Rapporto Diretto allo Sviluppatore",
            btnCloseFeedback: "CHIUDI ✕",
            insuffEmeraldTitle: "SMERALDI ANTICHI (❖) INSUFFICIENTI!",
            insuffEmeraldDesc: "Ti mancano <strong>{missing} ❖ Smeraldi</strong> per sbloccare <strong>{item}</strong>.<br>Guarda un breve video per ricevere subito <strong>+10 ❖ Smeraldi + 25 ✪ Monete</strong>!",
            insuffEmeraldBtn: "🎬 Guarda Video (+10 ❖ Smeraldi)",
            insuffCrystalTitle: "CRISTALLI BLU (◆) INSUFFICIENTI!",
            insuffCrystalDesc: "Ti mancano <strong>{missing} ◆ Cristalli</strong> per sbloccare <strong>{item}</strong>.<br>Guarda un breve video per ricevere subito <strong>+80 ◆ Cristalli + 5 ❖ Smeraldi</strong>!",
            insuffCrystalBtn: "🎬 Guarda Video (+80 ◆ Cristalli)",
            insuffGoldTitle: "MONETE D'ORO (✪) INSUFFICIENTI!",
            insuffGoldDesc: "Ti mancano <strong>{missing} ✪ Monete</strong> per sbloccare <strong>{item}</strong>.<br>Guarda un breve video per ricevere subito <strong>+50 ✪ Monete d'Oro</strong>!",
            insuffGoldBtn: "🎬 Guarda Video (+50 ✪ Monete)",
            btnCancel: "Annulla",
            btnReviveAd: "🎬 Guarda Video e Risorgi Subito (+3 ♥)",
            btnDoubleAd: "🎬 Guarda Video e Raddoppia i Premi (2x ✪❖◆)",
            updateTitle: "NUOVO AGGIORNAMENTO DISPONIBILE!",
            updateDesc: "È disponibile una nuova versione di <strong>Marinext 2100</strong>! Aggiorna subito da Google Play.",
            btnDoUpdate: "📲 AGGIORNA SU GOOGLE PLAY ▶",
            btnLaterUpdate: "Ricordamelo più tardi",
            updateLinkChangelog: "📋 Note di rilascio complete e novità ↗",
            langAutoTitle: "📱 Automatico — Lingua del Dispositivo ({native})",
            langAutoSub: "Si adatta automaticamente alla lingua del telefono • Rilevata: {badge}",
            splashBadge: "⚡ MOTORE CYBER-PLATFORM ULTRA FLUIDO A 120 FPS",
            splashSub: "100 Livelli Campagna • 10 Mondi d'Azione • 15 Eroi Storici e Cyber",
            splashStatus: "Caricamento mondi ed eroi...",
            settingsGroupAudio: "🔊 AUDIO, PRESTAZIONI E SISTEMA",
            settingsGroupSupport: "📋 GUIDA, PROGRESSI E SUPPORTO",
            btnSettingsTutorial: "📖 Guida per principianti e comandi",
            btnSettingsRate: "⭐ Valuta il gioco su Google Play",
            btnTestAd: "🎬 TEST PUBBLICITÀ",
            crystalLabel: "Cristallo:",
            btnTutorialSkip: "⏩ Salta Guida",
            btnReviveAd1: "🎬 Guarda Pubblicità & Rivivi (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 Guarda Pubblicità & Ultima Possibilità (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ Velocità Iper (120 FPS)",
            profileSpeedStd: "⚡ Velocità Standard",
            profileHeartsWord: "Cuori",
            profileStageWord: "Livello",
            adRewardEmeraldTitle: "🎁 Premio Smeraldi & Monete",
            adRewardEmeraldDesc: "+10 ❖ Smeraldi Antichi e +50 ✪ Monete aggiunti al tuo portafoglio!",
            adRewardCrystalTitle: "🎁 Premio Cristalli Blu",
            adRewardCrystalDesc: "+80 ◆ Cristalli Blu e +5 ❖ Smeraldi aggiunti al tuo portafoglio!",
            adRewardGoldTitle: "🎁 Premio Monete d'Oro",
            adRewardGoldDesc: "+50 ✪ Monete d'Oro aggiunte al tuo portafoglio!",
            adLoadingBtn: "⏳ Caricamento pubblicità...",
            adOpeningBtn: "📺 Apertura pubblicità...",
            adSkippedNotice: "ℹ️ Guarda il video fino alla fine per ricevere la ricompensa.",
            adUnavailableAlert: "Pubblicità non disponibile al momento o connessione assente. Riprova tra poco.",
            adOverlayBadge: "VIDEO PREMIATO",
            adOverlayPlaying: "⏳ Preparazione... ({sec})",
            adOverlayReady: "🎁 Riscatta Premio e Chiudi",
            adOverlayClaimBtn: "🎁 Riscatta Premio e Chiudi",
            adReviveTitle: "❤️ Rivivi con 3 Cuori + Scudo",
            adReviveDesc: "Continua subito con 3 Cuori Pieni (♥♥♥) e Scudo dell'Etere (🛡)!",
            adDoubleTitle: "⭐ Raddoppia Premi della Vittoria",
            adDoubleDesc: "Moltiplica per 2 tutte le monete, gli smeraldi e i cristalli raccolti!",
            adChestTitle: "🎁 Baule dei Tesori",
            adChestDesc: "Apri il baule per ricevere smeraldi e monete bonus!",
            rateModalTitle: "Ti piace Marinext 2100?",
            rateModalDesc: "Per aiutarci a migliorare la tua esperienza di gioco, sostieni il nostro team indie con una recensione a 5 stelle su Google Play!",
            btnRateNow: "⭐ VOTA 5 STELLE ORA ▶",
            btnRateFeedback: "💬 Suggerimenti / Segnala errore",
            btnRateLater: "Più tardi ✕"
        },
        es: {
            coinLabel: "Monedas:",
            btnLeaderboard: "🏆 CLASIFICACIÓN",
            btnFeedback: "💬 OPINIÓN",
            worldAll: "🌍 Todos (1-100)",
            worldTabPrefix: "Mundo",
            worldRegions10: [
                "ZONA 1: CAVERNAS DE CRISTAL",
                "ZONA 2: CIBER MAGMA",
                "ZONA 3: VACÍO CUÁNTICO",
                "ZONA 4: ABISMO CÓSMICO",
                "ZONA 5: TORMENTA GLACIAL",
                "ZONA 6: BIO-LABORATORIO",
                "ZONA 7: ASTILLERO CELESTE",
                "ZONA 8: TEMPLO ANTIGUO",
                "ZONA 9: MATERIA OSCURA",
                "ZONA 10: TRONO IMPERIAL"
            ],
            charSub: "¡Desbloquea trajes históricos y cibernéticos con las <strong>Monedas (✪)</strong>! ¡Al equipar un traje también cambian <strong>el rostro, la barba/bigote y la postura del héroe</strong>!",
            btnAdChestChar: "🎬 Ver Video (+50 ✪ Monedas)",
            btnAdChestCust: "🎬 Ver Video (+10 ❖ Esmeraldas y +50 ✪)",
            charTabAll: "🌟 Todos los Héroes",
            charTabOwned: "✅ Desbloqueados",
            charTabLocked: "🔒 Por Desbloquear",
            charEmptyLocked: "🎉 ¡Felicidades! ¡Has desbloqueado todos los personajes del juego!",
            charEmptyOther: "No hay personajes en este filtro.",
            charActiveBadge: "👑 HÉROE ACTIVO",
            charOwnedBadge: "✓ DESBLOQUEADO",
            charActiveBtn: "👑 HÉROE ACTIVO (SELECCIONADO)",
            charSelectBtn: "✓ SELECCIONAR Y EQUIPAR",
            charBuyBtn: "🪙 DESBLOQUEAR ({cost} ✪ Monedas)",
            charAdBuyBtn: "🎬 OBTENER MONEDAS ({cost} ✪)",
            shopOwnedBadge: "✓ COMPRADO",
            shopActiveBtn: "✓ MEJORA ACTIVA",
            shopBuyBtn: "COMPRAR ({cost} ◆ Cristales)",
            shopAdBuyBtn: "🎬 OBTENER CRISTALES ({cost} ◆)",
            custEquippedBadge: "👑 EQUIPADO",
            custOwnedBadge: "✓ DESBLOQUEADO",
            custEquippedBtn: "✓ EQUIPADO (ACTIVO)",
            custEquipBtn: "EQUIPAR Y ACTIVAR",
            custUnlockBtn: "DESBLOQUEAR ({cost} ❖ Esmeraldas)",
            custAdUnlockBtn: "🎬 OBTENER ESMERALDAS ({cost} ❖)",
            milestoneUnlocked: "🏆 Recompensa Nivel {lvl} (Desbloqueado ✓)",
            milestoneLocked: "🏆 Premio Niv. {lvl} o {cost} ❖ Esmeraldas",
            totalPowerSummary: "⚡ Poder Total: {hp}♥ Vidas • +{spd}% Velocidad • x{mult} Puntos{glide}",
            glideTag: " • 🪽 Planeo",
            lbTitle: "TABLA DE LÍDERES DE CAMPEONES",
            lbSubtitle: "¡Sube de rango en 4 categorías, reclama premios de liga y llega a la cima en Google Play Games!",
            lbPlayGamesBtn: "Tabla Oficial Play Games",
            lbAchievementsBtn: "🏆 Logros",
            lbScopeFriends: "👥 Amigos",
            lbCatScore: "🏆 Puntuación",
            lbCatProgress: "⚔️ 100 Niveles y Jefes",
            lbCatEmerald: "❖ Esmeraldas y Tesoro",
            lbCatSpeedrun: "⚡ Récord Velocidad",
            lbScopeGlobal: "🌍 Global (Histórico)",
            lbScopeWeekly: "🔥 Temporada Semanal",
            lbScopeTr: "🇹🇷 Top 25 Regional",
            lbYouBadge: "TÚ",
            lbYourRankLabel: "TU MARCA",
            lbEmptyPodiumTitle: "PODIO LIBRE",
            lbEmptyPodiumSub: "Esperando Nuevo Campeón",
            lbEmptyPodiumHint: "¡Juega ahora y ocupa este puesto!",
            lbHeroPrefix: "Héroe:",
            lbLiveInfoBanner: "🎮 <strong>Clasificación Multijugador en Vivo:</strong> Cada nivel, punto de control y puntuación se sincroniza al instante con la nube y Google Play Games.",
            lbSyncConnected: "● {scope} • Clasificación en Vivo ({count} Jugadores) • Play Games ({name})",
            lbSyncCloud: "● {scope} • Clasificación en Vivo ({count} Jugadores • Nube Activa)",
            lbMetricProgress: "Nivel {prog}/100 • {bosses} Jefes",
            lbMetricEmerald: "{val} ❖ Pts de Tesoro",
            lbMetricNoSpeed: "⏱️ Sin Récord",
            lbMetricSpeed: "⚡ {sec} s",
            lbMetricScore: "{val} Puntos",
            lbLeagueImperial: "👑 CAMPEÓN IMPERIAL (#1)",
            lbLeagueGrandmaster: "💎 LIGA GRAN MAESTRO (TOP 3)",
            lbLeagueDiamond: "💠 LIGA DIAMANTE (TOP 7)",
            lbLeagueGold: "🥇 LIGA ORO (TOP 12)",
            lbLeagueSilver: "🥈 LIGA PLATA",
            lbTargetIneligible: "🎯 ¡Completa 1 nivel o alcanza 1.000 pts para reclamar premios de liga!",
            lbTargetSpeed: "Meta #{rank} ({name}): ¡{diff}s más rápido!",
            lbTargetScore: "Meta #{rank} ({name}): ¡+{diff} puntos!",
            lbTargetTop: "👑 ¡Estás en el puesto #1 de la clasificación!",
            lbRewardClaimed: "✓ Premio Reclamado",
            lbRewardLocked: "🔒 Completa 1 Nivel",
            lbRewardClaimBtn: "🎁 Reclamar (+{coins}✪ +{emeralds}❖)",
            btnPickAvatar: "🖼️ Elegir Avatar (30)",
            profileNamePlaceholder: "Escribe el nombre del héroe...",
            profileCloudTitle: "🎮 GUARDADO EN LA NUBE PLAY GAMES Y GOOGLE DRIVE",
            cloudBadgeConnected: "🎮 Play Games y GDrive: CONECTADO{name}",
            cloudBadgeActive: "☁️ Respaldo Google Drive: ACTIVO",
            cloudSyncStatusLine: "Último guardado: {time} • Nivel: {lvl}/100 (Trol: {troll}/15) • Monedas: {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 Sincronizar Play Games",
            btnCloudExport: "☁️ Guardar en Drive",
            btnCloudImport: "📂 Cargar Respaldo",
            profileLevelWord: "Nivel",
            attrHpArmor: "❤️ VIDA MÁXIMA Y ARMADURA",
            attrSpeedJump: "⚡ VELOCIDAD Y SALTO",
            attrHelmetGear: "⚔️ CASCO Y ARMA",
            attrVisorAura: "✨ VISOR Y AURA",
            attrSpecialPowers: "🔥 PODERES ESPECIALES ACTIVOS",
            attrProgressWealth: "🏆 PROGRESO Y TESORO",
            attrRunLabel: "Carrera",
            attrJumpLabel: "Salto",
            attrDoubleTripleJump: "Doble/Triple Salto",
            attrWallJump: "Salto en Pared",
            attrStartShield: "🛡 Escudo Inicial",
            attrStartFire: "🔥 Fuego de Plasma",
            attrMagnet: "🧲 Imán de Esmeraldas",
            avatarPickerSub: "Selecciona el emblema para tu perfil y la Clasificación:",
            btnConfirmAvatar: "CONFIRMAR SELECCIÓN ✓",
            fps120: "120 FPS (ULTRA FLUIDO) ⚡",
            fps60: "60 FPS (EQUILIBRADO) ⚙️",
            fps30: "30 FPS (AHORRO DE BATERÍA) 🔋",
            btnSettingsFeedback: "💬 Enviar Comentarios y Reportar Errores",
            btnSettingsCloud: "🎮 Guardado en la Nube Play Games y Google Drive",
            btnSettingsPrivacy: "🛡️ Política de Privacidad",
            btnSettingsConsent: "🔒 Preferencias de Anuncios y Privacidad (GDPR)",
            channelPrefix: "Canal:",
            channelInternal: "🧪 TEST INTERNO",
            channelAlpha: "🎯 TEST CERRADO",
            channelProduction: "🌐 PRODUCCIÓN",
            channelToastInternal: "🧪 ¡Prueba interna activa! Las compilaciones se revisan al instante.",
            channelToastAlpha: "🎯 ¡Prueba cerrada activa!",
            channelToastProduction: "🌐 ¡Canal de producción activo!",
            adConsentPersonalized: "ACTIVADO ✓ (PERSONALIZADO)",
            adConsentStandard: "DESACTIVADO ✕ (ESTÁNDAR)",
            adConsentTitle: "🔒 Preferencias de Anuncios y Privacidad (GDPR / UMP)",
            adConsentSub: "Administra la personalización de anuncios de Google AdMob y tus preferencias de datos.",
            adPersonalizedLabel: "🎯 Anuncios Personalizados",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 Política de Anuncios Amigable:</strong><br>• Nunca interrumpe el juego activo.<br>• Anuncios entre niveles máximo <strong>cada 3 victorias</strong>.<br>• Los videos con recompensa son <strong>100% opcionales</strong>.",
            adGdprHtml: "<strong>🇪🇺 UE / EEE y Reino Unido (GDPR / UMP):</strong> Puedes revisar el formulario oficial de Google UMP en cualquier momento.",
            btnOpenUmpForm: "📋 Revisar Formulario Google UMP",
            btnSaveConsent: "GUARDAR PREFERENCIAS ✓",
            fbTitle: "💬 Comentarios y Reporte de Errores",
            fbSub: "¡Envía tus sugerencias, comentarios de niveles o reportes de errores directamente al equipo!",
            fbStarLabel: "⭐ TU CALIFICACIÓN:",
            fbCatLabel: "📌 TEMA:",
            fbCat1: "💡 Sugerencia e Idea",
            fbCat2: "🐞 Error / Bug",
            fbCat3: "🗺️ Nivel y Dificultad",
            fbCat4: "⚡ Rendimiento / FPS",
            fbMsgLabel: "✍️ TU MENSAJE:",
            fbMsgPlaceholder: "Ej: Las puertas láser del nivel 24 son geniales...",
            btnSubmitPlayConsole: "📲 GUARDAR Y ENVIAR A GOOGLE PLAY ▶",
            btnSubmitDirect: "📨 Enviar Reporte Directo al Desarrollador",
            btnCloseFeedback: "CERRAR ✕",
            insuffEmeraldTitle: "¡ESMERALDAS ANTIGUAS (❖) INSUFICIENTES!",
            insuffEmeraldDesc: "Te faltan <strong>{missing} ❖ Esmeraldas</strong> para desbloquear <strong>{item}</strong>.<br>¡Mira un video corto para obtener <strong>+10 ❖ Esmeraldas + 25 ✪ Monedas</strong> al instante!",
            insuffEmeraldBtn: "🎬 Ver Video (+10 ❖ Esmeraldas)",
            insuffCrystalTitle: "¡CRISTALES AZULES (◆) INSUFICIENTES!",
            insuffCrystalDesc: "Te faltan <strong>{missing} ◆ Cristales</strong> para desbloquear <strong>{item}</strong>.<br>¡Mira un video corto para obtener <strong>+80 ◆ Cristales + 5 ❖ Esmeraldas</strong> al instante!",
            insuffCrystalBtn: "🎬 Ver Video (+80 ◆ Cristales)",
            insuffGoldTitle: "¡MONEDAS DE ORO (✪) INSUFICIENTES!",
            insuffGoldDesc: "Te faltan <strong>{missing} ✪ Monedas</strong> para desbloquear <strong>{item}</strong>.<br>¡Mira un video corto para obtener <strong>+50 ✪ Monedas de Oro</strong> al instante!",
            insuffGoldBtn: "🎬 Ver Video (+50 ✪ Monedas)",
            btnCancel: "Cancelar",
            btnReviveAd: "🎬 Ver Video y Revivir en el Lugar (+3 ♥)",
            btnDoubleAd: "🎬 Ver Video y Duplicar Recompensas (2x ✪❖◆)",
            updateTitle: "¡NUEVA ACTUALIZACIÓN DISPONIBLE!",
            updateDesc: "¡Ya está disponible una nueva versión de <strong>Marinext 2100</strong>! Actualiza ahora en Google Play.",
            btnDoUpdate: "📲 ACTUALIZAR EN GOOGLE PLAY ▶",
            btnLaterUpdate: "Recordar más tarde",
            updateLinkChangelog: "📋 Ver notas de la versión completas ↗",
            langAutoTitle: "📱 Automático — Idioma del Dispositivo ({native})",
            langAutoSub: "Cambia automáticamente según el idioma de tu teléfono • Detectado: {badge}",
            splashBadge: "⚡ MOTOR CIBER-PLATAFORMA ULTRA FLUIDO A 120 FPS",
            splashSub: "100 Niveles de Campaña • 10 Mundos de Acción • 15 Héroes Históricos y Ciber",
            splashStatus: "Cargando mundos y héroes...",
            settingsGroupAudio: "🔊 AUDIO, RENDIMIENTO Y SISTEMA",
            settingsGroupSupport: "📋 GUÍA, PROGRESO Y SOPORTE",
            btnSettingsTutorial: "📖 Guía de inicio y controles",
            btnSettingsRate: "⭐ Calificar en Google Play",
            btnTestAd: "🎬 PROBAR ANUNCIO",
            crystalLabel: "Cristal:",
            btnTutorialSkip: "⏩ Saltar Guía",
            btnReviveAd1: "🎬 Ver Anuncio y Revivir (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 Ver Anuncio y Última Oportunidad (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ Hipervelocidad (120 FPS)",
            profileSpeedStd: "⚡ Velocidad Estándar",
            profileHeartsWord: "Corazones",
            profileStageWord: "Nivel",
            adRewardEmeraldTitle: "🎁 Recompensa de Esmeraldas y Monedas",
            adRewardEmeraldDesc: "¡+10 ❖ Esmeraldas Antiguas y +50 ✪ Monedas añadidas!",
            adRewardCrystalTitle: "🎁 Recompensa de Cristales Azules",
            adRewardCrystalDesc: "¡+80 ◆ Cristales Azules y +5 ❖ Esmeraldas añadidas!",
            adRewardGoldTitle: "🎁 Recompensa de Monedas de Oro",
            adRewardGoldDesc: "¡+50 ✪ Monedas de Oro añadidas!",
            adLoadingBtn: "⏳ Cargando anuncio...",
            adOpeningBtn: "📺 Abriendo anuncio...",
            adSkippedNotice: "ℹ️ Mira el video completo para recibir tu recompensa.",
            adUnavailableAlert: "No hay anuncios disponibles en este momento o no hay conexión a internet. Inténtalo de nuevo.",
            adOverlayBadge: "VÍDEO BONIFICADO",
            adOverlayPlaying: "⏳ Preparando... ({sec})",
            adOverlayReady: "🎁 Reclamar Recompensa y Cerrar",
            adOverlayClaimBtn: "🎁 Reclamar Recompensa y Cerrar",
            adReviveTitle: "❤️ Revivir con 3 Corazones + Escudo",
            adReviveDesc: "¡Continúa exactamente donde caíste con 3 Corazones (♥♥♥) y Escudo de Éter (🛡)!",
            adDoubleTitle: "⭐ Duplicar Recompensas de Victoria",
            adDoubleDesc: "¡Duplica al instante todas las monedas, esmeraldas y cristales ganados!",
            adChestTitle: "🎁 Cofre del Tesoro",
            adChestDesc: "¡Abre el cofre para recibir esmeraldas y monedas adicionales!",
            rateModalTitle: "¿Te gusta Marinext 2100?",
            rateModalDesc: "¡Para ayudarnos a mejorar tu experiencia de juego, apoya a nuestro equipo indie con una calificación de 5 estrellas en Google Play!",
            btnRateNow: "⭐ CALIFICAR CON 5 ESTRELLAS ▶",
            btnRateFeedback: "💬 Sugerencia / Reportar error",
            btnRateLater: "Más tarde ✕"
        },
        fr: {
            coinLabel: "Pièces :",
            btnLeaderboard: "🏆 CLASSEMENT",
            btnFeedback: "💬 AVIS",
            worldAll: "🌍 Tous (1-100)",
            worldTabPrefix: "Monde",
            worldRegions10: [
                "ZONE 1 : GROTTES DE CRISTAL",
                "ZONE 2 : CYBER MAGMA",
                "ZONE 3 : VIDE QUANTIQUE",
                "ZONE 4 : ABÎME COSMIQUE",
                "ZONE 5 : TEMPÊTE GLACIALE",
                "ZONE 6 : BIO-LABORATOIRE",
                "ZONE 7 : CHANTIER CÉLESTE",
                "ZONE 8 : TEMPLE ANCIEN",
                "ZONE 9 : MATIÈRE NOIRE",
                "ZONE 10 : TRÔNE IMPÉRIAL"
            ],
            charSub: "Débloque des tenues historiques et cyber avec les <strong>Pièces (✪)</strong> ! Chaque tenue change aussi <strong>le visage, la barbe/moustache et la posture du héros</strong> !",
            btnAdChestChar: "🎬 Voir Vidéo (+50 ✪ Pièces)",
            btnAdChestCust: "🎬 Voir Vidéo (+10 ❖ Émeraudes & +50 ✪)",
            charTabAll: "🌟 Tous les Héros",
            charTabOwned: "✅ Débloqués",
            charTabLocked: "🔒 À Débloquer",
            charEmptyLocked: "🎉 Félicitations ! Tu as débloqué tous les personnages du jeu !",
            charEmptyOther: "Aucun personnage dans ce filtre.",
            charActiveBadge: "👑 HÉROS ACTIF",
            charOwnedBadge: "✓ DÉBLOQUÉ",
            charActiveBtn: "👑 HÉROS ACTIF (SÉLECTIONNÉ)",
            charSelectBtn: "✓ SÉLECTIONNER ET ÉQUIPER",
            charBuyBtn: "🪙 DÉBLOQUER ({cost} ✪ Pièces)",
            charAdBuyBtn: "🎬 OBTENIR PIÈCES ({cost} ✪)",
            shopOwnedBadge: "✓ ACHETÉ",
            shopActiveBtn: "✓ AMÉLIORATION ACTIVE",
            shopBuyBtn: "ACHETER ({cost} ◆ Cristaux)",
            shopAdBuyBtn: "🎬 OBTENIR CRISTAUX ({cost} ◆)",
            custEquippedBadge: "👑 ÉQUIPÉ",
            custOwnedBadge: "✓ DÉBLOQUÉ",
            custEquippedBtn: "✓ ÉQUIPÉ (ACTIF)",
            custEquipBtn: "ÉQUIPER ET ACTIVER",
            custUnlockBtn: "DÉBLOQUER ({cost} ❖ Émeraudes)",
            custAdUnlockBtn: "🎬 OBTENIR ÉMERAUDES ({cost} ❖)",
            milestoneUnlocked: "🏆 Récompense Niveau {lvl} (Débloqué ✓)",
            milestoneLocked: "🏆 Récompense Niv. {lvl} ou {cost} ❖ Émeraudes",
            totalPowerSummary: "⚡ Puissance : {hp}♥ Vies • +{spd}% Vitesse • x{mult} Score{glide}",
            glideTag: " • 🪽 Planer",
            lbTitle: "CLASSEMENT DES CHAMPIONS",
            lbSubtitle: "Grimpe dans 4 catégories, récupère tes récompenses de ligue et domine sur Google Play Games !",
            lbPlayGamesBtn: "Classement Play Games",
            lbAchievementsBtn: "🏆 Succès",
            lbScopeFriends: "👥 Amis",
            lbCatScore: "🏆 Meilleur Score",
            lbCatProgress: "⚔️ 100 Niveaux & Boss",
            lbCatEmerald: "❖ Émeraudes & Trésor",
            lbCatSpeedrun: "⚡ Record de Vitesse",
            lbScopeGlobal: "🌍 Mondial (Toujours)",
            lbScopeWeekly: "🔥 Saison Hebdo",
            lbScopeTr: "🇹🇷 Top 25 Régional",
            lbYouBadge: "TOI",
            lbYourRankLabel: "TON RECORD",
            lbEmptyPodiumTitle: "PODIUM LIBRE",
            lbEmptyPodiumSub: "En attente d'un champion",
            lbEmptyPodiumHint: "Joue maintenant pour prendre la place !",
            lbHeroPrefix: "Héros :",
            lbLiveInfoBanner: "🎮 <strong>Classement Multijoueur en Direct :</strong> Chaque niveau, checkpoint et score est synchronisé instantanément avec le cloud et Google Play Games.",
            lbSyncConnected: "● {scope} • Classement en Direct ({count} Joueurs) • Play Games ({name})",
            lbSyncCloud: "● {scope} • Classement en Direct ({count} Joueurs • Cloud Actif)",
            lbMetricProgress: "Niveau {prog}/100 • {bosses} Boss",
            lbMetricEmerald: "{val} ❖ Pts Trésor",
            lbMetricNoSpeed: "⏱️ Aucun Record",
            lbMetricSpeed: "⚡ {sec} s",
            lbMetricScore: "{val} Pts",
            lbLeagueImperial: "👑 CHAMPION IMPÉRIAL (#1)",
            lbLeagueGrandmaster: "💎 LIGUE GRAND MAÎTRE (TOP 3)",
            lbLeagueDiamond: "💠 LIGUE DIAMANT (TOP 7)",
            lbLeagueGold: "🥇 LIGUE OR (TOP 12)",
            lbLeagueSilver: "🥈 LIGUE ARGENT",
            lbTargetIneligible: "🎯 Termine au moins 1 niveau ou atteins 1 000 pts pour les récompenses !",
            lbTargetSpeed: "Objectif #{rank} ({name}) : {diff}s plus vite !",
            lbTargetScore: "Objectif #{rank} ({name}) : +{diff} pts !",
            lbTargetTop: "👑 Tu es #1 au sommet du classement !",
            lbRewardClaimed: "✓ Récompense Reçue",
            lbRewardLocked: "🔒 Termine 1 Niveau",
            lbRewardClaimBtn: "🎁 Réclamer (+{coins}✪ +{emeralds}❖)",
            btnPickAvatar: "🖼️ Choisir Avatar (30)",
            profileNamePlaceholder: "Écris le nom du héros...",
            profileCloudTitle: "🎮 SAUVEGARDE CLOUD PLAY GAMES & GOOGLE DRIVE",
            cloudBadgeConnected: "🎮 Play Games & GDrive : CONNECTÉ{name}",
            cloudBadgeActive: "☁️ Sauvegarde Google Drive : ACTIVE",
            cloudSyncStatusLine: "Dernière sauv. : {time} • Niveau : {lvl}/100 (Troll : {troll}/15) • Pièces : {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 Sync Play Games",
            btnCloudExport: "☁️ Sauver sur Drive",
            btnCloudImport: "📂 Charger Sauvegarde",
            profileLevelWord: "Niveau",
            attrHpArmor: "❤️ VIE MAX ET ARMURE",
            attrSpeedJump: "⚡ VITESSE ET SAUT",
            attrHelmetGear: "⚔️ CASQUE ET ARME",
            attrVisorAura: "✨ VISIÈRE ET AURA",
            attrSpecialPowers: "🔥 POUVOIRS SPÉCIAUX ACTIFS",
            attrProgressWealth: "🏆 PROGRESSION ET TRÉSOR",
            attrRunLabel: "Course",
            attrJumpLabel: "Saut",
            attrDoubleTripleJump: "Double/Triple Saut",
            attrWallJump: "Saut Mural",
            attrStartShield: "🛡 Bouclier Initial",
            attrStartFire: "🔥 Feu Plasma",
            attrMagnet: "🧲 Aimant Émeraudes",
            avatarPickerSub: "Choisis ton emblème pour ton profil et le Classement :",
            btnConfirmAvatar: "CONFIRMER LE CHOIX ✓",
            fps120: "120 FPS (ULTRA FLUIDE) ⚡",
            fps60: "60 FPS (ÉQUILIBRÉ) ⚙️",
            fps30: "30 FPS (ÉCONOMIE D'ÉNERGIE) 🔋",
            btnSettingsFeedback: "💬 Envoyer un Avis ou Signaler un Bug",
            btnSettingsCloud: "🎮 Sauvegarde Cloud Play Games & Google Drive",
            btnSettingsPrivacy: "🛡️ Politique de Confidentialité",
            btnSettingsConsent: "🔒 Préférences Publicitaires et Confidentialité (RGPD)",
            channelPrefix: "Canal :",
            channelInternal: "🧪 TEST INTERNE",
            channelAlpha: "🎯 TEST FERMÉ",
            channelProduction: "🌐 PRODUCTION",
            channelToastInternal: "🧪 Test interne actif ! Vérification instantanée des versions.",
            channelToastAlpha: "🎯 Test fermé actif !",
            channelToastProduction: "🌐 Canal de production actif !",
            adConsentPersonalized: "ACTIVÉ ✓ (PERSONNALISÉ)",
            adConsentStandard: "DÉSACTIVÉ ✕ (STANDARD)",
            adConsentTitle: "🔒 Préférences Publicitaires et Confidentialité (RGPD / UMP)",
            adConsentSub: "Gère la personnalisation des annonces Google AdMob et tes préférences de données.",
            adPersonalizedLabel: "🎯 Publicités Personnalisées",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 Charte Publicitaire Respectueuse :</strong><br>• Aucune pub n'interrompt une partie en cours.<br>• Pubs de fin de niveau au maximum <strong>1 fois toutes les 3 victoires</strong>.<br>• Les vidéos bonus sont <strong>100% facultatives</strong>.",
            adGdprHtml: "<strong>🇪🇺 UE / EEE & Royaume-Uni (RGPD / UMP) :</strong> Tu peux rouvrir le formulaire officiel Google UMP à tout moment ci-dessous.",
            btnOpenUmpForm: "📋 Formulaire de Consentement Google UMP",
            btnSaveConsent: "ENREGISTRER ✓",
            fbTitle: "💬 Avis et Signalement de Bug",
            fbSub: "Envoie tes suggestions, avis sur les niveaux ou rapports de bug directement à l'équipe !",
            fbStarLabel: "⭐ TA NOTE :",
            fbCatLabel: "📌 SUJET :",
            fbCat1: "💡 Idée & Suggestion",
            fbCat2: "🐞 Bug / Problème",
            fbCat3: "🗺️ Niveau & Difficulté",
            fbCat4: "⚡ Performance / FPS",
            fbMsgLabel: "✍️ TON MESSAGE :",
            fbMsgPlaceholder: "Ex : Les portes laser du niveau 24 sont super fun...",
            btnSubmitPlayConsole: "📲 ENREGISTRER ET ENVOYER SUR GOOGLE PLAY ▶",
            btnSubmitDirect: "📨 Envoyer Directement au Développeur",
            btnCloseFeedback: "FERMER ✕",
            insuffEmeraldTitle: "ÉMERAUDES ANCIENNES (❖) INSUFFISANTES !",
            insuffEmeraldDesc: "Il te manque <strong>{missing} ❖ Émeraudes</strong> pour débloquer <strong>{item}</strong>.<br>Regarde une courte vidéo pour recevoir <strong>+10 ❖ Émeraudes + 25 ✪ Pièces</strong> immédiatement !",
            insuffEmeraldBtn: "🎬 Voir Vidéo (+10 ❖ Émeraudes)",
            insuffCrystalTitle: "CRISTAUX BLEUS (◆) INSUFFISANTS !",
            insuffCrystalDesc: "Il te manque <strong>{missing} ◆ Cristaux</strong> pour débloquer <strong>{item}</strong>.<br>Regarde une courte vidéo pour recevoir <strong>+80 ◆ Cristaux + 5 ❖ Émeraudes</strong> immédiatement !",
            insuffCrystalBtn: "🎬 Voir Vidéo (+80 ◆ Cristaux)",
            insuffGoldTitle: "PIÈCES D'OR (✪) INSUFFISANTES !",
            insuffGoldDesc: "Il te manque <strong>{missing} ✪ Pièces</strong> pour débloquer <strong>{item}</strong>.<br>Regarde une courte vidéo pour recevoir <strong>+50 ✪ Pièces d'Or</strong> immédiatement !",
            insuffGoldBtn: "🎬 Voir Vidéo (+50 ✪ Pièces)",
            btnCancel: "Annuler",
            btnReviveAd: "🎬 Voir Vidéo & Ressusciter sur Place (+3 ♥)",
            btnDoubleAd: "🎬 Voir Vidéo & Doubler les Récompenses (2x ✪❖◆)",
            updateTitle: "NOUVELLE MISE À JOUR DISPONIBLE !",
            updateDesc: "Une nouvelle version de <strong>Marinext 2100</strong> est disponible ! Mets à jour maintenant sur Google Play.",
            btnDoUpdate: "📲 METTRE À JOUR SUR GOOGLE PLAY ▶",
            btnLaterUpdate: "Plus tard",
            updateLinkChangelog: "📋 Consulter les notes de mise à jour ↗",
            langAutoTitle: "📱 Automatique — Langue de l'Appareil ({native})",
            langAutoSub: "S'adapte automatiquement à la langue du téléphone • Détectée : {badge}",
            splashBadge: "⚡ MOTEUR CYBER-PLATEFORME ULTRA FLUIDE 120 FPS",
            splashSub: "100 Niveaux de Campagne • 10 Mondes d'Action • 15 Héros Historiques & Cyber",
            splashStatus: "Chargement des mondes et des héros...",
            settingsGroupAudio: "🔊 AUDIO, PERFORMANCES ET SYSTÈME",
            settingsGroupSupport: "📋 GUIDE, PROGRESSION ET SUPPORT",
            btnSettingsTutorial: "📖 Guide du débutant et commandes",
            btnSettingsRate: "⭐ Noter le jeu sur Google Play",
            btnTestAd: "🎬 TEST PUBLICITAIRE",
            crystalLabel: "Cristal :",
            btnTutorialSkip: "⏩ Passer le guide",
            btnReviveAd1: "🎬 Regarder Pub & Revivre (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 Regarder Pub & Dernière Chance (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ Hyper Vitesse (120 FPS)",
            profileSpeedStd: "⚡ Vitesse Standard",
            profileHeartsWord: "Cœurs",
            profileStageWord: "Niveau",
            adRewardEmeraldTitle: "🎁 Récompense Émeraudes & Pièces",
            adRewardEmeraldDesc: "+10 ❖ Émeraudes Anciennes et +50 ✪ Pièces ajoutées !",
            adRewardCrystalTitle: "🎁 Récompense Cristaux Bleus",
            adRewardCrystalDesc: "+80 ◆ Cristaux Bleus et +5 ❖ Émeraudes ajoutés !",
            adRewardGoldTitle: "🎁 Récompense Pièces d'Or",
            adRewardGoldDesc: "+50 ✪ Pièces d'Or ajoutées !",
            adLoadingBtn: "⏳ Chargement de la pub...",
            adOpeningBtn: "📺 Ouverture de la pub...",
            adSkippedNotice: "ℹ️ Regardez la vidéo jusqu'au bout pour recevoir la récompense.",
            adUnavailableAlert: "Aucune vidéo publicitaire disponible ou connexion internet absente. Réessayez dans un instant.",
            adOverlayBadge: "VIDÉO RÉCOMPENSÉE",
            adOverlayPlaying: "⏳ Préparation... ({sec})",
            adOverlayReady: "🎁 Récupérer Récompense & Fermer",
            adOverlayClaimBtn: "🎁 Récupérer Récompense & Fermer",
            adReviveTitle: "❤️ Revivre avec 3 Cœurs + Bouclier",
            adReviveDesc: "Repartez instantanément avec 3 Cœurs Pleins (♥♥♥) et Bouclier d'Éther (🛡) !",
            adDoubleTitle: "⭐ Doubler Récompenses de Victoire",
            adDoubleDesc: "Multipliez par 2 toutes les pièces, émeraudes et cristaux obtenus !",
            adChestTitle: "🎁 Coffre au Trésor",
            adChestDesc: "Ouvrez le coffre pour recevoir des émeraudes et des pièces en bonus !",
            rateModalTitle: "Vous aimez Marinext 2100 ?",
            rateModalDesc: "Pour nous aider à perfectionner le jeu, soutenez notre équipe indépendante avec une note de 5 étoiles sur Google Play !",
            btnRateNow: "⭐ NOTER 5 ÉTOILES MAINTENANT ▶",
            btnRateFeedback: "💬 Avis / Signaler un problème",
            btnRateLater: "Plus tard ✕"
        },
        ko: {
            coinLabel: "코인:",
            btnLeaderboard: "🏆 랭킹",
            btnFeedback: "💬 피드백",
            worldAll: "🌍 전체 (1-100)",
            worldTabPrefix: "월드",
            worldRegions10: [
                "지역 1: 수정 동굴",
                "지역 2: 사이버 마그마",
                "지역 3: 양자 공허",
                "지역 4: 우주 심연",
                "지역 5: 빙하 폭풍",
                "지역 6: 바이오 연구소",
                "지역 7: 천공 조선소",
                "지역 8: 고대 신전",
                "지역 9: 암흑 물질",
                "지역 10: 제국의 왕좌"
            ],
            charSub: "스테이지에서 모은 <strong>코인(✪)</strong>으로 역사와 사이버 의상을 해금하세요! 의상을 장착하면 캐릭터의 <strong>얼굴형, 수염, 자세</strong>도 함께 변합니다!",
            btnAdChestChar: "🎬 광고 보기 (+50 ✪ 코인)",
            btnAdChestCust: "🎬 광고 보기 (+10 ❖ 에메랄드 & +50 ✪)",
            charTabAll: "🌟 전체 캐릭터",
            charTabOwned: "✅ 보유 중",
            charTabLocked: "🔒 해금 가능",
            charEmptyLocked: "🎉 축하합니다! 모든 캐릭터를 해금했습니다!",
            charEmptyOther: "해당 필터에 캐릭터가 없습니다.",
            charActiveBadge: "👑 장착 중",
            charOwnedBadge: "✓ 보유 중",
            charActiveBtn: "👑 현재 장착 캐릭터",
            charSelectBtn: "✓ 캐릭터 선택 및 장착",
            charBuyBtn: "🪙 구매하기 ({cost} ✪ 코인)",
            charAdBuyBtn: "🎬 코인 획득 / 해금 ({cost} ✪)",
            shopOwnedBadge: "✓ 구매 완료",
            shopActiveBtn: "✓ 활성화됨",
            shopBuyBtn: "구매 ({cost} ◆ 크리스탈)",
            shopAdBuyBtn: "🎬 크리스탈 획득 ({cost} ◆)",
            custEquippedBadge: "👑 장착됨",
            custOwnedBadge: "✓ 보유 중",
            custEquippedBtn: "✓ 장착 중 (활성)",
            custEquipBtn: "장착 및 활성화",
            custUnlockBtn: "해금 ({cost} ❖ 에메랄드)",
            custAdUnlockBtn: "🎬 에메랄드 획득 ({cost} ❖)",
            milestoneUnlocked: "🏆 스테이지 {lvl} 달성 보상 (해금됨 ✓)",
            milestoneLocked: "🏆 스테이지 {lvl} 보상 또는 {cost} ❖ 에메랄드",
            totalPowerSummary: "⚡ 총 전투력: 생명 {hp}♥ • 속도 +{spd}% • 점수 x{mult}{glide}",
            glideTag: " • 🪽 활강",
            lbTitle: "챔피언 리더보드",
            lbSubtitle: "4개 공식 부문에서 순위를 올리고 리그 보상을 획득하며 Google Play Games 정상을 차지하세요!",
            lbPlayGamesBtn: "Play Games 공식 랭킹",
            lbAchievementsBtn: "🏆 업적",
            lbScopeFriends: "👥 친구 랭킹",
            lbCatScore: "🏆 최고 점수",
            lbCatProgress: "⚔️ 100 스테이지 & 보스",
            lbCatEmerald: "❖ 에메랄드 & 보물",
            lbCatSpeedrun: "⚡ 최단 시간 기록",
            lbScopeGlobal: "🌍 글로벌 (전체)",
            lbScopeWeekly: "🔥 주간 시즌",
            lbScopeTr: "🇹🇷 지역 TOP 25",
            lbYouBadge: "나",
            lbYourRankLabel: "내 기록",
            lbEmptyPodiumTitle: "빈 단상",
            lbEmptyPodiumSub: "새로운 챔피언 대기 중",
            lbEmptyPodiumHint: "지금 플레이하여 자리를 차지하세요!",
            lbHeroPrefix: "영웅:",
            lbLiveInfoBanner: "🎮 <strong>실시간 멀티플레이어 랭킹:</strong> 스테이지 클리어, 체크포인트, 점수 획득 시 실시간으로 클라우드 및 Google Play Games와 동기화됩니다.",
            lbSyncConnected: "● {scope} • 실시간 랭킹 ({count}명) • Play Games 연결됨 ({name})",
            lbSyncCloud: "● {scope} • 실시간 랭킹 ({count}명 • 클라우드 동기화 활성)",
            lbMetricProgress: "스테이지 {prog}/100 • 보스 {bosses}",
            lbMetricEmerald: "{val} ❖ 보물 점수",
            lbMetricNoSpeed: "⏱️ 기록 없음",
            lbMetricSpeed: "⚡ {sec}초",
            lbMetricScore: "{val}점",
            lbLeagueImperial: "👑 임페리얼 챔피언 (#1)",
            lbLeagueGrandmaster: "💎 그랜드마스터 리그 (TOP 3)",
            lbLeagueDiamond: "💠 다이아몬드 리그 (TOP 7)",
            lbLeagueGold: "🥇 골드 리그 (TOP 12)",
            lbLeagueSilver: "🥈 실버 리그",
            lbTargetIneligible: "🎯 리그 보상을 받으려면 최소 1개 스테이지를 클리어하거나 1,000점을 달성하세요!",
            lbTargetSpeed: "목표 #{rank} ({name}): {diff}초 단축 필요!",
            lbTargetScore: "목표 #{rank} ({name}): +{diff}점 필요!",
            lbTargetTop: "👑 현재 랭킹 1위입니다!",
            lbRewardClaimed: "✓ 보상 수령 완료",
            lbRewardLocked: "🔒 1스테이지 클리어 필요",
            lbRewardClaimBtn: "🎁 보상 받기 (+{coins}✪ +{emeralds}❖)",
            btnPickAvatar: "🖼️ 아바타 선택 (30)",
            profileNamePlaceholder: "캐릭터 이름 입력...",
            profileCloudTitle: "🎮 GOOGLE PLAY GAMES & GOOGLE DRIVE 클라우드 저장",
            cloudBadgeConnected: "🎮 Play Games & GDrive: 연결됨{name}",
            cloudBadgeActive: "☁️ Google Drive 백업: 활성",
            cloudSyncStatusLine: "최근 저장: {time} • 스테이지: {lvl}/100 (트롤: {troll}/15) • 코인: {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 Play Games 동기화",
            btnCloudExport: "☁️ Drive 백업 저장",
            btnCloudImport: "📂 백업 불러오기",
            profileLevelWord: "레벨",
            attrHpArmor: "❤️ 최대 생명력 & 장갑",
            attrSpeedJump: "⚡ 이동 속도 & 점프",
            attrHelmetGear: "⚔️ 투구 & 등 무기",
            attrVisorAura: "✨ 바이저 & 오라 효과",
            attrSpecialPowers: "🔥 활성 특수 능력",
            attrProgressWealth: "🏆 진행도 & 보물",
            attrRunLabel: "달리기",
            attrJumpLabel: "점프",
            attrDoubleTripleJump: "2단/3단 점프",
            attrWallJump: "벽 점프",
            attrStartShield: "🛡 시작 보호막",
            attrStartFire: "🔥 플라즈마 파이어",
            attrMagnet: "🧲 에메랄드 자석",
            avatarPickerSub: "프로필과 리더보드에 표시될 영웅 엠블럼을 선택하세요:",
            btnConfirmAvatar: "선택 완료 ✓",
            fps120: "120 FPS (초고속 부드러움) ⚡",
            fps60: "60 FPS (균형 모드) ⚙️",
            fps30: "30 FPS (배터리 절약) 🔋",
            btnSettingsFeedback: "💬 피드백 및 버그 제보",
            btnSettingsCloud: "🎮 Google Play Games & Google Drive 클라우드",
            btnSettingsPrivacy: "🛡️ 개인정보 처리방침",
            btnSettingsConsent: "🔒 광고 및 개인정보 설정 (GDPR / UMP)",
            channelPrefix: "배포 채널:",
            channelInternal: "🧪 내부 테스트",
            channelAlpha: "🎯 비공개 테스트",
            channelProduction: "🌐 정식 출시",
            channelToastInternal: "🧪 내부 테스트 채널 활성화! 최신 개발 빌드를 즉시 확인합니다.",
            channelToastAlpha: "🎯 비공개 테스트 채널 활성화!",
            channelToastProduction: "🌐 정식 출시 채널 활성화!",
            adConsentPersonalized: "켜짐 ✓ (맞춤형 광고)",
            adConsentStandard: "꺼짐 ✕ (표준 / 일반 광고)",
            adConsentTitle: "🔒 광고 및 개인정보 설정 (GDPR / UMP)",
            adConsentSub: "Google AdMob 맞춤형 광고 및 데이터 처리 설정을 관리합니다.",
            adPersonalizedLabel: "🎯 맞춤형 광고",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 사용자 친화적 광고 정책:</strong><br>• 게임 플레이 도중 강제 광고가 나오지 않습니다.<br>• 스테이지 종료 광고는 최대 <strong>3회 클리어당 1번</strong>만 표시됩니다.<br>• 보상형 비디오는 <strong>100% 선택 사항</strong>입니다.",
            adGdprHtml: "<strong>🇪🇺 EU / EEA & 영국 (GDPR / UMP):</strong> 아래 버튼으로 언제든 Google UMP 동의 양식을 확인할 수 있습니다.",
            btnOpenUmpForm: "📋 Google UMP 동의 양식 확인",
            btnSaveConsent: "설정 저장 ✓",
            fbTitle: "💬 피드백 및 버그 제보",
            fbSub: "게임에 대한 제안, 버그 제보 또는 스테이지 의견을 개발팀에 직접 보내주세요!",
            fbStarLabel: "⭐ 게임 평점:",
            fbCatLabel: "📌 주제:",
            fbCat1: "💡 제안 & 아이디어",
            fbCat2: "🐞 버그 제보",
            fbCat3: "🗺️ 스테이지 & 난이도",
            fbCat4: "⚡ 성능 / FPS",
            fbMsgLabel: "✍️ 메시지:",
            fbMsgPlaceholder: "예: 24스테이지 레이저 게이트가 정말 재미있어요...",
            btnSubmitPlayConsole: "📲 저장 및 GOOGLE PLAY 피드백 보내기 ▶",
            btnSubmitDirect: "📨 개발자에게 직접 보고서 전송",
            btnCloseFeedback: "닫기 ✕",
            insuffEmeraldTitle: "고대 에메랄드(❖)가 부족합니다!",
            insuffEmeraldDesc: "<strong>{item}</strong> 해금에 <strong>{missing} ❖ 에메랄드</strong>가 더 필요합니다.<br>짧은 광고를 시청하고 즉시 <strong>+10 ❖ 에메랄드 + 25 ✪ 코인</strong>을 받으세요!",
            insuffEmeraldBtn: "🎬 광고 보고 +10 ❖ 에메랄드 받기",
            insuffCrystalTitle: "블루 크리스탈(◆)이 부족합니다!",
            insuffCrystalDesc: "<strong>{item}</strong> 해금에 <strong>{missing} ◆ 크리스탈</strong>이 더 필요합니다.<br>짧은 광고를 시청하고 즉시 <strong>+80 ◆ 크리스탈 + 5 ❖ 에메랄드</strong>를 받으세요!",
            insuffCrystalBtn: "🎬 광고 보고 +80 ◆ 크리스탈 받기",
            insuffGoldTitle: "골드 코인(✪)이 부족합니다!",
            insuffGoldDesc: "<strong>{item}</strong> 해금에 <strong>{missing} ✪ 코인</strong>이 더 필요합니다.<br>짧은 광고를 시청하고 즉시 <strong>+50 ✪ 골드 코인</strong>을 받으세요!",
            insuffGoldBtn: "🎬 광고 보고 +50 ✪ 코인 받기",
            btnCancel: "취소",
            btnReviveAd: "🎬 광고 보고 그 자리에서 부활 (+3 ♥)",
            btnDoubleAd: "🎬 광고 보고 스테이지 보상 2배 받기 (2x ✪❖◆)",
            updateTitle: "새로운 업데이트 출시!",
            updateDesc: "<strong>Marinext 2100</strong> 최신 버전이 출시되었습니다! 지금 Google Play에서 업데이트하세요.",
            btnDoUpdate: "📲 GOOGLE PLAY에서 업데이트 ▶",
            btnLaterUpdate: "나중에 알림",
            updateLinkChangelog: "📋 전체 업데이트 내역 및 패치노트 확인 ↗",
            langAutoTitle: "📱 자동 — 기기 언어 ({native})",
            langAutoSub: "스마트폰 언어에 맞춰 자동 변경됩니다 • 감지됨: {badge}",
            splashBadge: "⚡ 120 FPS 초고속 사이버 플랫폼 엔진",
            splashSub: "100 캠페인 스테이지 • 10 액션 월드 • 15 역사 & 사이버 영웅",
            splashStatus: "월드와 영웅을 불러오는 중...",
            settingsGroupAudio: "🔊 오디오, 성능 및 시스템",
            settingsGroupSupport: "📋 가이드, 진행도 및 지원",
            btnSettingsTutorial: "📖 초보자 가이드 및 조작법 보기",
            btnSettingsRate: "⭐ Google Play에서 게임 평가하기",
            btnTestAd: "🎬 광고 테스트",
            crystalLabel: "크리스탈:",
            btnTutorialSkip: "⏩ 가이드 건너뛰기",
            btnReviveAd1: "🎬 광고 시청 후 부활 (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 광고 시청 후 마지막 부활 (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ 하이퍼 스피드 (120 FPS)",
            profileSpeedStd: "⚡ 표준 속도",
            profileHeartsWord: "생명",
            profileStageWord: "스테이지",
            adRewardEmeraldTitle: "🎁 에메랄드 & 코인 보상",
            adRewardEmeraldDesc: "+10 ❖ 고대 에메랄드 및 +50 ✪ 코인이 지급되었습니다!",
            adRewardCrystalTitle: "🎁 블루 크리스탈 보상",
            adRewardCrystalDesc: "+80 ◆ 크리스탈 및 +5 ❖ 에메랄드가 지급되었습니다!",
            adRewardGoldTitle: "🎁 골드 코인 보상",
            adRewardGoldDesc: "+50 ✪ 골드 코인이 지급되었습니다!",
            adLoadingBtn: "⏳ 광고 불러오는 중...",
            adOpeningBtn: "📺 광고 시작 중...",
            adSkippedNotice: "ℹ️ 보상을 받으려면 동영상을 끝까지 시청해야 합니다.",
            adUnavailableAlert: "현재 재생 가능한 동영상 광고가 없거나 인터넷이 오프라인입니다. 잠시 후 다시 시도해 주세요.",
            adOverlayBadge: "보상형 동영상",
            adOverlayPlaying: "⏳ 준비 중... ({sec})",
            adOverlayReady: "🎁 보상 받기 및 닫기",
            adOverlayClaimBtn: "🎁 보상 받기 및 닫기",
            adReviveTitle: "❤️ 3개 하트 + 쉴드로 부활",
            adReviveDesc: "광고 시청 후 3개의 완전한 하트(♥♥♥)와 에테르 보호막(🛡)을 갖고 바로 이어합니다!",
            adDoubleTitle: "⭐ 승리 보상 2배 부스트",
            adDoubleDesc: "이번 스테이지에서 획득한 모든 코인, 에메랄드, 크리스탈을 2배로 증가시킵니다!",
            adChestTitle: "🎁 보물 상자 보너스 보상",
            adChestDesc: "상자를 열어 에메랄드와 코인을 즉시 획득하세요!",
            rateModalTitle: "Marinext 2100이 마음에 드시나요?",
            rateModalDesc: "더욱 멋진 게임을 만들어갈 수 있도록 Google Play에서 별 5개 평점으로 인디 개발팀을 응원해 주세요!",
            btnRateNow: "⭐ 별 5개 평점 남기기 ▶",
            btnRateFeedback: "💬 의견 / 버그 제보",
            btnRateLater: "나중에 하기 ✕"
        },
        zh: {
            coinLabel: "金币:",
            btnLeaderboard: "🏆 排行榜",
            btnFeedback: "💬 反馈",
            worldAll: "🌍 全部 (1-100)",
            worldTabPrefix: "世界",
            worldRegions10: [
                "区域 1: 水晶洞穴",
                "区域 2: 赛博熔岩",
                "区域 3: 量子虚空",
                "区域 4: 宇宙深渊",
                "区域 5: 冰川风暴",
                "区域 6: 生物实验室",
                "区域 7: 天空船厂",
                "区域 8: 远古神庙",
                "区域 9: 暗物质区",
                "区域 10: 帝国王座"
            ],
            charSub: "使用关卡中收集的<strong>金币 (✪)</strong>解锁历史与赛博服装！穿上服装后角色的<strong>脸型、胡须与姿态</strong>也会同步改变！",
            btnAdChestChar: "🎬 观看视频 (+50 ✪ 金币)",
            btnAdChestCust: "🎬 观看视频 (+10 ❖ 翡翠 & +50 ✪)",
            charTabAll: "🌟 全部角色",
            charTabOwned: "✅ 已拥有",
            charTabLocked: "🔒 可解锁",
            charEmptyLocked: "🎉 恭喜！你已解锁游戏中的全部角色！",
            charEmptyOther: "该分类下暂无角色。",
            charActiveBadge: "👑 当前使用",
            charOwnedBadge: "✓ 已拥有",
            charActiveBtn: "👑 当前出战角色",
            charSelectBtn: "✓ 选择并穿戴",
            charBuyBtn: "🪙 解锁 ({cost} ✪ 金币)",
            charAdBuyBtn: "🎬 获取金币 / 解锁 ({cost} ✪)",
            shopOwnedBadge: "✓ 已购买",
            shopActiveBtn: "✓ 已激活强化",
            shopBuyBtn: "购买 ({cost} ◆ 水晶)",
            shopAdBuyBtn: "🎬 获取水晶 ({cost} ◆)",
            custEquippedBadge: "👑 已装备",
            custOwnedBadge: "✓ 已拥有",
            custEquippedBtn: "✓ 已装备 (生效中)",
            custEquipBtn: "装备并激活",
            custUnlockBtn: "解锁 ({cost} ❖ 翡翠)",
            custAdUnlockBtn: "🎬 获取翡翠 ({cost} ❖)",
            milestoneUnlocked: "🏆 第 {lvl} 关达成奖励 (已解锁 ✓)",
            milestoneLocked: "🏆 第 {lvl} 关奖励 或 {cost} ❖ 翡翠",
            totalPowerSummary: "⚡ 总战力: {hp}♥ 生命 • +{spd}% 速度 • x{mult} 分数{glide}",
            glideTag: " • 🪽 滑翔",
            lbTitle: "冠军排行榜",
            lbSubtitle: "在4大专业榜单提升排名，领取联赛奖励，登顶 Google Play Games 全球榜！",
            lbPlayGamesBtn: "Play Games 官方榜",
            lbAchievementsBtn: "🏆 成就",
            lbScopeFriends: "👥 好友排行",
            lbCatScore: "🏆 最高分数",
            lbCatProgress: "⚔️ 100关卡与首领",
            lbCatEmerald: "❖ 翡翠与宝藏",
            lbCatSpeedrun: "⚡ 极速通关记录",
            lbScopeGlobal: "🌍 全球总榜",
            lbScopeWeekly: "🔥 本周赛季",
            lbScopeTr: "🇹🇷 地区前 25",
            lbYouBadge: "你",
            lbYourRankLabel: "你的成绩",
            lbEmptyPodiumTitle: "虚位以待",
            lbEmptyPodiumSub: "等待新冠军诞生",
            lbEmptyPodiumHint: "立即开始游戏占领席位！",
            lbHeroPrefix: "英雄:",
            lbLiveInfoBanner: "🎮 <strong>实时多人排行榜：</strong> 每当通关、激活存档点或获得分数，所有真实玩家数据将实时同步至云端与 Google Play Games。",
            lbSyncConnected: "● {scope} • 实时多人排行 ({count} 名玩家) • 已连接 Play Games ({name})",
            lbSyncCloud: "● {scope} • 实时多人排行 ({count} 名玩家 • 云同步已启用)",
            lbMetricProgress: "关卡 {prog}/100 • {bosses} 首领",
            lbMetricEmerald: "{val} ❖ 宝藏积分",
            lbMetricNoSpeed: "⏱️ 暂无记录",
            lbMetricSpeed: "⚡ {sec} 秒",
            lbMetricScore: "{val} 分",
            lbLeagueImperial: "👑 帝国冠军 (#1)",
            lbLeagueGrandmaster: "💎 宗师联赛 (前 3)",
            lbLeagueDiamond: "💠 钻石联赛 (前 7)",
            lbLeagueGold: "🥇 黄金联赛 (前 12)",
            lbLeagueSilver: "🥈 白银联赛",
            lbTargetIneligible: "🎯 至少通关1关或达到1,000分即可解锁联赛奖励！",
            lbTargetSpeed: "距离 #{rank} ({name}): 需快 {diff} 秒！",
            lbTargetScore: "距离 #{rank} ({name}): 还差 +{diff} 分！",
            lbTargetTop: "👑 你目前已登顶排行榜第 1 名！",
            lbRewardClaimed: "✓ 已领取奖励",
            lbRewardLocked: "🔒 通关 1 关解锁",
            lbRewardClaimBtn: "🎁 领取 (+{coins}✪ +{emeralds}❖)",
            btnPickAvatar: "🖼️ 选择头像 (30)",
            profileNamePlaceholder: "输入角色名称...",
            profileCloudTitle: "🎮 GOOGLE PLAY GAMES 与 GOOGLE DRIVE 云存档",
            cloudBadgeConnected: "🎮 Play Games 与 GDrive: 已连接{name}",
            cloudBadgeActive: "☁️ Google Drive 备份: 已激活",
            cloudSyncStatusLine: "上次保存: {time} • 关卡: {lvl}/100 (整蛊: {troll}/15) • 金币: {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 同步 Play Games",
            btnCloudExport: "☁️ 保存备份到 Drive",
            btnCloudImport: "📂 导入备份",
            profileLevelWord: "等级",
            attrHpArmor: "❤️ 最大生命与装甲",
            attrSpeedJump: "⚡ 速度与跳跃能力",
            attrHelmetGear: "⚔️ 头盔与背部武器",
            attrVisorAura: "✨ 面罩与光环特效",
            attrSpecialPowers: "🔥 已激活特殊能力",
            attrProgressWealth: "🏆 进度与财富",
            attrRunLabel: "奔跑",
            attrJumpLabel: "跳跃",
            attrDoubleTripleJump: "二段/三段跳",
            attrWallJump: "蹬墙跳",
            attrStartShield: "🛡 开局护盾",
            attrStartFire: "🔥 等离子火球",
            attrMagnet: "🧲 翡翠磁铁",
            avatarPickerSub: "选择在个人资料和排行榜中显示的英雄徽章：",
            btnConfirmAvatar: "确认选择 ✓",
            fps120: "120 FPS (极致流畅) ⚡",
            fps60: "60 FPS (均衡模式) ⚙️",
            fps30: "30 FPS (省电模式) 🔋",
            btnSettingsFeedback: "💬 提交反馈与问题报告",
            btnSettingsCloud: "🎮 Google Play Games 与 Google Drive 云存档",
            btnSettingsPrivacy: "🛡️ 隐私政策 / Privacy Policy",
            btnSettingsConsent: "🔒 广告与隐私偏好 (GDPR / UMP)",
            channelPrefix: "分发渠道:",
            channelInternal: "🧪 内部测试",
            channelAlpha: "🎯 封闭测试",
            channelProduction: "🌐 正式发布",
            channelToastInternal: "🧪 内部测试渠道已激活！即时检查最新开发版本。",
            channelToastAlpha: "🎯 封闭测试渠道已激活！",
            channelToastProduction: "🌐 正式发布渠道已激活！",
            adConsentPersonalized: "开启 ✓ (个性化广告)",
            adConsentStandard: "关闭 ✕ (标准 / 非个性化)",
            adConsentTitle: "🔒 广告与隐私偏好 (GDPR / UMP)",
            adConsentSub: "在此管理 Google AdMob 个性化广告和数据处理偏好。",
            adPersonalizedLabel: "🎯 个性化广告",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 友好广告规则：</strong><br>• 绝不在游戏进行中弹出强制广告。<br>• 关卡结算插屏广告最多每 <strong>通关3次出现1次</strong>。<br>• 激励视频广告 <strong>100% 自愿观看</strong>。",
            adGdprHtml: "<strong>🇪🇺 欧盟 / 欧洲经济区及英国 (GDPR / UMP)：</strong> 您可以随时通过下方按钮重新打开 Google UMP 授权表单。",
            btnOpenUmpForm: "📋 查看 Google UMP 授权表单",
            btnSaveConsent: "保存偏好 ✓",
            fbTitle: "💬 玩家反馈与错误报告",
            fbSub: "将您的建议、关卡评价或问题直接发送给开发团队！",
            fbStarLabel: "⭐ 游戏评分:",
            fbCatLabel: "📌 反馈主题:",
            fbCat1: "💡 建议与想法",
            fbCat2: "🐞 错误 / Bug",
            fbCat3: "🗺️ 关卡与难度",
            fbCat4: "⚡ 性能 / FPS",
            fbMsgLabel: "✍️ 您的留言:",
            fbMsgPlaceholder: "例如：第24关的激光门非常有趣，新角色很棒...",
            btnSubmitPlayConsole: "📲 保存并发送 GOOGLE PLAY 反馈 ▶",
            btnSubmitDirect: "📨 直接发送给开发者",
            btnCloseFeedback: "关闭 ✕",
            insuffEmeraldTitle: "远古翡翠 (❖) 余额不足！",
            insuffEmeraldDesc: "解锁 <strong>{item}</strong> 还差 <strong>{missing} ❖ 远古翡翠</strong>。<br>观看简短激励视频即可立即获得 <strong>+10 ❖ 翡翠 + 25 ✪ 金币</strong>！",
            insuffEmeraldBtn: "🎬 观看视频领取 +10 ❖ 翡翠",
            insuffCrystalTitle: "蓝色水晶 (◆) 余额不足！",
            insuffCrystalDesc: "解锁 <strong>{item}</strong> 还差 <strong>{missing} ◆ 水晶</strong>。<br>观看简短激励视频即可立即获得 <strong>+80 ◆ 水晶 + 5 ❖ 翡翠</strong>！",
            insuffCrystalBtn: "🎬 观看视频领取 +80 ◆ 水晶",
            insuffGoldTitle: "金币 (✪) 余额不足！",
            insuffGoldDesc: "解锁 <strong>{item}</strong> 还差 <strong>{missing} ✪ 金币</strong>。<br>观看简短激励视频即可立即获得 <strong>+50 ✪ 金币</strong>！",
            insuffGoldBtn: "🎬 观看视频领取 +50 ✪ 金币",
            btnCancel: "取消",
            btnReviveAd: "🎬 观看视频并原地满血复活 (+3 ♥)",
            btnDoubleAd: "🎬 观看视频双倍领取本关奖励 (2x ✪❖◆)",
            updateTitle: "发现新版本更新！",
            updateDesc: "<strong>Marinext 2100</strong> 新版本已发布！立即前往 Google Play 更新体验最新内容。",
            btnDoUpdate: "📲 前往 GOOGLE PLAY 更新 ▶",
            btnLaterUpdate: "稍后提醒",
            updateLinkChangelog: "📋 查看完整更新日志与新特性 ↗",
            langAutoTitle: "📱 自动 — 跟随设备语言 ({native})",
            langAutoSub: "根据您的手机语言自动切换 • 已识别: {badge}",
            splashBadge: "⚡ 120 FPS 极致流畅赛博平台引擎",
            splashSub: "100个战役关卡 • 10大动作世界 • 15位历史与赛博英雄",
            splashStatus: "正在加载世界与英雄...",
            settingsGroupAudio: "🔊 音频、性能与系统",
            settingsGroupSupport: "📋 指南、进度与支持",
            btnSettingsTutorial: "📖 查看新手指南与按键操作",
            btnSettingsRate: "⭐ 在 Google Play 评价游戏",
            btnTestAd: "🎬 广告测试",
            crystalLabel: "水晶:",
            btnTutorialSkip: "⏩ 跳过指引",
            btnReviveAd1: "🎬 看广告原地复活 (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 看广告最后复活机会 (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ 极速狂飙 (120 FPS)",
            profileSpeedStd: "⚡ 标准速度",
            profileHeartsWord: "生命",
            profileStageWord: "关卡",
            adRewardEmeraldTitle: "🎁 绿宝石与金币奖励",
            adRewardEmeraldDesc: "+10 ❖ 远古绿宝石和 +50 ✪ 金币已存入您的账户！",
            adRewardCrystalTitle: "🎁 蓝水晶奖励",
            adRewardCrystalDesc: "+80 ◆ 蓝水晶和 +5 ❖ 绿宝石已存入您的账户！",
            adRewardGoldTitle: "🎁 金币奖励",
            adRewardGoldDesc: "+50 ✪ 金币已存入您的账户！",
            adLoadingBtn: "⏳ 广告加载中，请稍候...",
            adOpeningBtn: "📺 正在打开广告...",
            adSkippedNotice: "ℹ️ 请观看完整视频以获得奖励。",
            adUnavailableAlert: "当前无可用视频广告或网络未连接，请稍后再试。",
            adOverlayBadge: "激励视频广告",
            adOverlayPlaying: "⏳ 正在准备... ({sec})",
            adOverlayReady: "🎁 领取奖励并关闭",
            adOverlayClaimBtn: "🎁 领取奖励并关闭",
            adReviveTitle: "❤️ 满血3心 + 能量护盾复活",
            adReviveDesc: "看视频后立即以 3 颗完整生命心 (♥♥♥) 及以太护盾 (🛡) 在原地继续战斗！",
            adDoubleTitle: "⭐ 通关战利品翻倍 (2倍)",
            adDoubleDesc: "本关收集的所有金币、绿宝石和水晶立即全部翻倍！",
            adChestTitle: "🎁 宝箱额外奖励",
            adChestDesc: "开启宝箱立即获得额外绿宝石和金币！",
            rateModalTitle: "喜欢 Marinext 2100 吗？",
            rateModalDesc: "为了帮助我们为您带来更出色的游戏体验，请在 Google Play 上为独立开发团队留下 5 星好评支持！",
            btnRateNow: "⭐ 点亮 5 星好评 ▶",
            btnRateFeedback: "💬 意见反馈 / 报告问题",
            btnRateLater: "以后再说 ✕"
        },
        ja: {
            coinLabel: "コイン:",
            btnLeaderboard: "🏆 ランキング",
            btnFeedback: "💬 フィードバック",
            worldAll: "🌍 全て (1-100)",
            worldTabPrefix: "ワールド",
            worldRegions10: [
                "エリア1: クリスタル洞窟",
                "エリア2: サイバーマグマ",
                "エリア3: 量子ヴォイド",
                "エリア4: コズミック深淵",
                "エリア5: ブリザード氷河",
                "エリア6: バイオ研究所",
                "エリア7: 天空ドック",
                "エリア8: 古代神殿",
                "エリア9: ダークマター",
                "エリア10: 帝国の玉座"
            ],
            charSub: "ステージで集めた<strong>コイン(✪)</strong>で歴史＆サイバー衣装を解放！衣装を着せるとキャラクターの<strong>顔立ち・髭・ポーズ</strong>もリアルに変化します！",
            btnAdChestChar: "🎬 動画を見る (+50 ✪ コイン)",
            btnAdChestCust: "🎬 動画を見る (+10 ❖ エメラルド & +50 ✪)",
            charTabAll: "🌟 全キャラ",
            charTabOwned: "✅ 所持済み",
            charTabLocked: "🔒 未解放",
            charEmptyLocked: "🎉 おめでとうございます！全キャラクターをコンプリートしました！",
            charEmptyOther: "このフィルターにはキャラクターがいません。",
            charActiveBadge: "👑 使用中",
            charOwnedBadge: "✓ 購入済み",
            charActiveBtn: "👑 使用中のキャラクター",
            charSelectBtn: "✓ 選択して装備する",
            charBuyBtn: "🪙 解放する ({cost} ✪ コイン)",
            charAdBuyBtn: "🎬 コイン獲得 / 解放 ({cost} ✪)",
            shopOwnedBadge: "✓ 購入済み",
            shopActiveBtn: "✓ 有効な強化",
            shopBuyBtn: "購入 ({cost} ◆ クリスタル)",
            shopAdBuyBtn: "🎬 クリスタル獲得 ({cost} ◆)",
            custEquippedBadge: "👑 装備中",
            custOwnedBadge: "✓ 所持済み",
            custEquippedBtn: "✓ 装備中 (有効)",
            custEquipBtn: "装備して有効化",
            custUnlockBtn: "解放 ({cost} ❖ エメラルド)",
            custAdUnlockBtn: "🎬 エメラルド獲得 ({cost} ❖)",
            milestoneUnlocked: "🏆 ステージ{lvl}達成報酬 (解放済み ✓)",
            milestoneLocked: "🏆 ステージ{lvl}報酬 または {cost} ❖ エメラルド",
            totalPowerSummary: "⚡ 総合力: ライフ{hp}♥ • 速度+{spd}% • スコアx{mult}{glide}",
            glideTag: " • 🪽 グライド",
            lbTitle: "チャンピオン・リーダーボード",
            lbSubtitle: "4つの公式部門でランクを上げ、リーグ報酬を獲得して Google Play Games の頂点を目指そう！",
            lbPlayGamesBtn: "Play Games 公式表",
            lbAchievementsBtn: "🏆 実績",
            lbScopeFriends: "👥 フレンド",
            lbCatScore: "🏆 ハイスコア",
            lbCatProgress: "⚔️ 100ステージ＆ボス",
            lbCatEmerald: "❖ エメラルド＆財宝",
            lbCatSpeedrun: "⚡ 最速タイム記録",
            lbScopeGlobal: "🌍 世界ランキング",
            lbScopeWeekly: "🔥 週間シーズン",
            lbScopeTr: "🇹🇷 地域トップ25",
            lbYouBadge: "あなた",
            lbYourRankLabel: "あなたの記録",
            lbEmptyPodiumTitle: "空席",
            lbEmptyPodiumSub: "新チャンピオン募集中",
            lbEmptyPodiumHint: "今すぐプレイしてランクインしよう！",
            lbHeroPrefix: "ヒーロー:",
            lbLiveInfoBanner: "🎮 <strong>リアルタイム・マルチランキング：</strong> ステージクリア、チェックポイント、スコア獲得時にクラウドと Google Play Games へ自動同期されます。",
            lbSyncConnected: "● {scope} • ライブランキング ({count}人) • Play Games 接続中 ({name})",
            lbSyncCloud: "● {scope} • ライブランキング ({count}人 • クラウド同期有効)",
            lbMetricProgress: "ステージ {prog}/100 • ボス {bosses}",
            lbMetricEmerald: "{val} ❖ トレジャーPt",
            lbMetricNoSpeed: "⏱️ 記録なし",
            lbMetricSpeed: "⚡ {sec}秒",
            lbMetricScore: "{val} Pt",
            lbLeagueImperial: "👑 インペリアル王者 (#1)",
            lbLeagueGrandmaster: "💎 グランドマスター (TOP 3)",
            lbLeagueDiamond: "💠 ダイヤモンド (TOP 7)",
            lbLeagueGold: "🥇 ゴールドリーグ (TOP 12)",
            lbLeagueSilver: "🥈 シルバーリーグ",
            lbTargetIneligible: "🎯 1ステージクリアまたは1,000Pt達成でリーグ報酬が解放されます！",
            lbTargetSpeed: "次の順位 #{rank} ({name}): あと{diff}秒短縮！",
            lbTargetScore: "次の順位 #{rank} ({name}): あと+{diff} Pt！",
            lbTargetTop: "👑 ランキング第1位の頂点に立っています！",
            lbRewardClaimed: "✓ 報酬受取済み",
            lbRewardLocked: "🔒 1ステージクリアで解放",
            lbRewardClaimBtn: "🎁 報酬受取 (+{coins}✪ +{emeralds}❖)",
            btnPickAvatar: "🖼️ アバター選択 (30)",
            profileNamePlaceholder: "キャラ名を入力...",
            profileCloudTitle: "🎮 GOOGLE PLAY GAMES & GOOGLE DRIVE クラウド保存",
            cloudBadgeConnected: "🎮 Play Games & GDrive: 接続済み{name}",
            cloudBadgeActive: "☁️ Google Drive バックアップ: 有効",
            cloudSyncStatusLine: "最終保存: {time} • ステージ: {lvl}/100 (トロール: {troll}/15) • コイン: {coins} ✪{extra}",
            btnCloudSyncNow: "🎮 Play Games 同期",
            btnCloudExport: "☁️ Driveへ保存",
            btnCloudImport: "📂 バックアップ読込",
            profileLevelWord: "Lv.",
            attrHpArmor: "❤️ 最大ライフ＆アーマー",
            attrSpeedJump: "⚡ スピード＆ジャンプ",
            attrHelmetGear: "⚔️ 兜＆背中装備",
            attrVisorAura: "✨ バイザー＆オーラ",
            attrSpecialPowers: "🔥 特殊スキル",
            attrProgressWealth: "🏆 進行度＆財宝",
            attrRunLabel: "移動",
            attrJumpLabel: "ジャンプ",
            attrDoubleTripleJump: "2段/3段ジャンプ",
            attrWallJump: "壁ジャンプ",
            attrStartShield: "🛡 初期シールド",
            attrStartFire: "🔥 プラズマファイア",
            attrMagnet: "🧲 エメラルド磁石",
            avatarPickerSub: "プロフィールとランキングに表示するエンブレムを選択：",
            btnConfirmAvatar: "選択を確定 ✓",
            fps120: "120 FPS (超なめらか) ⚡",
            fps60: "60 FPS (バランス) ⚙️",
            fps30: "30 FPS (省エネモード) 🔋",
            btnSettingsFeedback: "💬 フィードバック＆バグ報告",
            btnSettingsCloud: "🎮 Google Play Games & Google Drive クラウド保存",
            btnSettingsPrivacy: "🛡️ プライバシーポリシー",
            btnSettingsConsent: "🔒 広告とプライバシー設定 (GDPR / UMP)",
            channelPrefix: "配信チャンネル:",
            channelInternal: "🧪 内部テスト",
            channelAlpha: "🎯 クローズド",
            channelProduction: "🌐 本番リリース",
            channelToastInternal: "🧪 内部テストチャンネル有効！最新の開発ビルドを即座に確認します。",
            channelToastAlpha: "🎯 クローズドテストチャンネル有効！",
            channelToastProduction: "🌐 本番リリースチャンネル有効！",
            adConsentPersonalized: "有効 ✓ (パーソナライズ)",
            adConsentStandard: "無効 ✕ (標準 / 一般広告)",
            adConsentTitle: "🔒 広告とプライバシー設定 (GDPR / UMP)",
            adConsentSub: "Google AdMob パーソナライズド広告とデータ設定を管理します。",
            adPersonalizedLabel: "🎯 パーソナライズド広告",
            adRulesHtml: "<strong style='color:#00f2fe;'>📺 プレイヤー重視の広告ルール：</strong><br>• プレイ中に強制広告で中断されることはありません。<br>• ステージ間広告は最大でも<strong>3ステージクリアごとに1回</strong>のみ。<br>• リワード動画は<strong>100%任意</strong>です。",
            adGdprHtml: "<strong>🇪🇺 EU / EEA & 英国 (GDPR / UMP)：</strong> 下のボタンからいつでも Google UMP 同意フォームを確認・変更できます。",
            btnOpenUmpForm: "📋 Google UMP 同意フォームを確認",
            btnSaveConsent: "設定を保存 ✓",
            fbTitle: "💬 フィードバック＆バグ報告",
            fbSub: "ご意見、ステージの感想、不具合報告を開発チームへ直接送信できます！",
            fbStarLabel: "⭐ ゲームの評価:",
            fbCatLabel: "📌 カテゴリ:",
            fbCat1: "💡 アイデア＆提案",
            fbCat2: "🐞 バグ報告",
            fbCat3: "🗺️ ステージ＆難易度",
            fbCat4: "⚡ パフォーマンス / FPS",
            fbMsgLabel: "✍️ メッセージ:",
            fbMsgPlaceholder: "例：ステージ24のレーザーゲートが楽しい！新キャラも最高...",
            btnSubmitPlayConsole: "📲 保存して GOOGLE PLAY フィードバックを送信 ▶",
            btnSubmitDirect: "📨 開発者へ直接レポートを送信",
            btnCloseFeedback: "閉じる ✕",
            insuffEmeraldTitle: "古代エメラルド (❖) が足りません！",
            insuffEmeraldDesc: "<strong>{item}</strong> の解放にあと <strong>{missing} ❖ エメラルド</strong> 必要です。<br>短い動画を見ると即座に <strong>+10 ❖ エメラルド + 25 ✪ コイン</strong> を獲得できます！",
            insuffEmeraldBtn: "🎬 動画を見て +10 ❖ エメラルド獲得",
            insuffCrystalTitle: "ブルークリスタル (◆) が足りません！",
            insuffCrystalDesc: "<strong>{item}</strong> の解放にあと <strong>{missing} ◆ クリスタル</strong> 必要です。<br>短い動画を見ると即座に <strong>+80 ◆ クリスタル + 5 ❖ エメラルド</strong> を獲得できます！",
            insuffCrystalBtn: "🎬 動画を見て +80 ◆ クリスタル獲得",
            insuffGoldTitle: "ゴールドコイン (✪) が足りません！",
            insuffGoldDesc: "<strong>{item}</strong> の解放にあと <strong>{missing} ✪ コイン</strong> 必要です。<br>短い動画を見ると即座に <strong>+50 ✪ ゴールドコイン</strong> を獲得できます！",
            insuffGoldBtn: "🎬 動画を見て +50 ✪ コイン獲得",
            btnCancel: "キャンセル",
            btnReviveAd: "🎬 動画を見てその場で復活 (+3 ♥)",
            btnDoubleAd: "🎬 動画を見てステージ報酬を2倍にする (2x ✪❖◆)",
            updateTitle: "新しいアップデートがあります！",
            updateDesc: "<strong>Marinext 2100</strong> の最新バージョンが公開されました！Google Play で今すぐ更新しましょう。",
            btnDoUpdate: "📲 GOOGLE PLAY で更新 ▶",
            btnLaterUpdate: "あとで通知",
            updateLinkChangelog: "📋 すべての更新履歴と新機能を確認 ↗",
            langAutoTitle: "📱 自動 — 端末の言語 ({native})",
            langAutoSub: "スマートフォンの言語に合わせて自動設定されます • 検出: {badge}",
            splashBadge: "⚡ 120 FPS 超なめらかサイバーアクションエンジン",
            splashSub: "全100ステージ • 10ワールド • 15人の歴史＆サイバーヒーロー",
            splashStatus: "ワールドとヒーローを読み込み中...",
            settingsGroupAudio: "🔊 音声・パフォーマンス・システム",
            settingsGroupSupport: "📋 ガイド・進行状況・サポート",
            btnSettingsTutorial: "📖 初心者操作ガイドを見る",
            btnSettingsRate: "⭐ Google Play でゲームを評価",
            btnTestAd: "🎬 広告テスト",
            crystalLabel: "クリスタル:",
            btnTutorialSkip: "⏩ スキップ",
            btnReviveAd1: "🎬 広告を見て復活 (1/2) (+3 ♥ + 🛡)",
            btnReviveAd2: "🎬 広告を見てラストチャンス復活 (2/2) (+3 ♥ + 🛡)",
            profileSpeedHyper: "⚡ ハイパースピード (120 FPS)",
            profileSpeedStd: "⚡ 標準スピード",
            profileHeartsWord: "ライフ",
            profileStageWord: "ステージ",
            adRewardEmeraldTitle: "🎁 エメラルド＆コイン報酬",
            adRewardEmeraldDesc: "+10 ❖ 古代エメラルドと +50 ✪ コインを獲得しました！",
            adRewardCrystalTitle: "🎁 ブルークリスタル報酬",
            adRewardCrystalDesc: "+80 ◆ クリスタルと +5 ❖ エメラルドを獲得しました！",
            adRewardGoldTitle: "🎁 ゴールドコイン報酬",
            adRewardGoldDesc: "+50 ✪ ゴールドコインを獲得しました！",
            adLoadingBtn: "⏳ 広告を読み込み中...",
            adOpeningBtn: "📺 広告を再生中...",
            adSkippedNotice: "ℹ️ 報酬を獲得するには、動画を最後まで視聴してください。",
            adUnavailableAlert: "現在利用可能な動画広告がないか、インターネットに接続されていません。少し待ってからお試しください。",
            adOverlayBadge: "リワード動画",
            adOverlayPlaying: "⏳ 準備中... ({sec})",
            adOverlayReady: "🎁 報酬を受け取って閉じる",
            adOverlayClaimBtn: "🎁 報酬を受け取って閉じる",
            adReviveTitle: "❤️ ハート3個＋シールドで復活",
            adReviveDesc: "動画終了後、全快ハート3個(♥♥♥)とエーテルシールド(🛡)を装備して即座に復活します！",
            adDoubleTitle: "⭐ ステージ勝利報酬を2倍に増量",
            adDoubleDesc: "このステージで集めたすべてのコイン、エメラルド、クリスタルが2倍になります！",
            adChestTitle: "🎁 宝箱ボーナス報酬",
            adChestDesc: "宝箱を開けてボーナスエメラルドとコインを獲得しよう！",
            rateModalTitle: "Marinext 2100 をお楽しみいただけていますか？",
            rateModalDesc: "より快適なゲーム体験をお届けできるよう、Google Play で 5 つ星の高評価をつけてインディー開発チームを応援してください！",
            btnRateNow: "⭐ 5 つ星で評価する ▶",
            btnRateFeedback: "💬 ご意見 / 不具合報告",
            btnRateLater: "後で ✕"
        }
    };

    // Translations for all 15 Characters in HERO_CHARACTERS_CATALOG
    const HERO_TRANSLATIONS = {
        en: {
            default: { title: "Cyber Shadow Knight (Default)", faceDesc: "Face: Neon Laser Visor Cyber Mask", perkDesc: "⚡ Balanced Agility: +5% Run Speed & Standard Cyber Armor", desc: "Standard future-era armored cyber knight outfit." },
            soldier_1950: { title: "1950s Veteran Soldier", faceDesc: "Face: 1950s Thick Mustache & Strong Jaw Veteran", perkDesc: "🛡️ Veteran Grit: +30% Longer Invulnerability After Damage", desc: "1950s khaki wool uniform, leather cross-strap, netted M1 steel helmet, and wooden rifle." },
            soldier_modern: { title: "Modern Special Forces", faceDesc: "Face: Camo Face Paint & Tactical Beard Commando", perkDesc: "🔥 Tactical Commando: +20% Faster Fireball Recharge & +8% Speed", desc: "Modern digital camo, MOLLE tactical vest, radio antenna, and quad-NVG ballistic helmet." },
            rich_tycoon: { title: "Billionaire Tycoon", faceDesc: "Face: Golden Monocle & Fine Mustache Tycoon", perkDesc: "🪙 Gold Magnet: +45% Extra Coin Chance & +25% Score Multiplier", desc: "Tailored double-breasted tuxedo, crimson silk tie, gold pocket watch chain, cane, and top hat." },
            ottoman_pasha: { title: "Ottoman Pasha", faceDesc: "Face: Grand Curled Mustache & Pasha Beard", perkDesc: "🛡️ Pasha Shield: Start Every Level with Shield & +20% Score", desc: "Gold-embroidered ceremonial tunic, fringed gold epaulets, Ottoman medal, saber, and burgundy fez." },
            royal_king: { title: "Royal King", faceDesc: "Face: Majestic Royal Beard & Blue-Eyed Monarch", perkDesc: "👑 Royal Treasury: +1 Extra Heart (♥) & +35% Treasure/Score Multiplier", desc: "Ermine-trimmed crimson royal mantle, gold-embroidered purple tunic, scepter, and jeweled crown." },
            yavuz_sultan_selim: { title: "Sultan Selim I (Yavuz)", faceDesc: "Face: Sharp Jaw, Long Drooping Mustache & Pearl Earring", perkDesc: "🔥 Imperial Might: +1 Heart (♥), Start with Plasma Fire & +12% Speed", desc: "Historical portrait accurate: Sable-furred crimson Imperial Kaftan and plumed Tac-i Selimi turban!" },
            fatih_sultan_mehmet: { title: "Mehmed the Conqueror", faceDesc: "Face: Aquiline Nose, Young Sultan Beard & Curled Mustache", perkDesc: "👑 Conqueror: +1 Heart (♥), Starter Shield + Fire & +40% Score", desc: "Conqueror of Constantinople: Gold-embroidered crimson-navy Kaftan, Imperial Turban, and Sword!" },
            janissary_aga: { title: "Janissary Commander", faceDesc: "Face: Long Handlebar Mustache & Sharp Gaze", perkDesc: "⚔️ Yataghan Agility: +14% Run Speed & +6% High Jump Power", desc: "Gold-plumed white felt Janissary Bork cap, crimson coat, and razor-sharp Ottoman Yataghan sword!" },
            mete_han: { title: "Modu Chanyu (Steppe Khagan)", faceDesc: "Face: Steppe Warrior Mustache & Eagle Eyes", perkDesc: "🏹 Steppe Wind: Triple Jump (3x Jump), +15% Speed & Fast Fire", desc: "Wolf-fur steppe armor, dual eagle-feathered golden helmet, quiver, and whistling composite bow!" },
            cyber_shogun: { title: "Cyber Shogun Samurai", faceDesc: "Face: Crimson-Black Menpo War Mask & Laser Eyes", perkDesc: "⚡ Plasma Reflex: Sharp Air Control, +12% Speed & Starter Shield", desc: "Golden-horned Kabuto samurai helmet, neon O-Yoroi armor, and glowing plasma katana!" },
            cosmic_astronaut: { title: "Cosmic Astronaut (EVA-2100)", faceDesc: "Face: Gold-Reflective Full Sphere Space Visor", perkDesc: "🌌 Zero-G Glide: Slow Mid-Air Glide & +8% Jump Power", desc: "Pressurized white deep-space EVA suit, life-support backpack, and golden solar visor!" },
            ice_valkyrie: { title: "Northern Ice Valkyrie", faceDesc: "Face: Platinum Braided Hair & Ice-Blue Eyes", perkDesc: "🪽 Valkyrie Wings: Mid-Air Glide, Starter Shield & +12% Speed", desc: "Winged silver Valkyrie helm, crystal frost cape, Nordic armor, and freezing ice spear!" },
            golden_pharaoh: { title: "Golden Pharaoh (Sun King)", faceDesc: "Face: Kohl-Lined Eyes & Golden Pharaoh Beard", perkDesc: "☀️ Sun Treasury: Auto Emerald/Crystal Magnet & +50% Coin Chance", desc: "Cobra-crested blue-and-gold Nemes headdress, broad golden collar armor, and glowing Sun Staff!" },
            spartan_gladiator: { title: "Spartan Commander (Leonidas)", faceDesc: "Face: Battle Beard & Strong Spartan Jaw", perkDesc: "🛡️ Spartan Shield: +1 Extra Heart (♥) & Extended Post-Hit Protection", desc: "Crimson horsehair-crested bronze Corinthian helmet, red Spartan cape, round shield, and spear!" },
            vip_quantum_emperor: { title: "Golden Quantum Emperor", faceDesc: "Face: Holographic Quantum Visor & Imperial Gold Armor", perkDesc: "👑 VIP Emperor: Super Treasure Magnet (+110px), Starter Shield & +50% Coins/Score", desc: "Floating 3-spire holographic crown, obsidian-gold quantum armor, and Quantum Scepter!" },
            vip_cyber_phoenix: { title: "Cyber Phoenix Knight", faceDesc: "Face: Ember-Lit Eyes & Crimson Phoenix Beak Guard", perkDesc: "🔥 Phoenix Reborn: 1x Auto-Revive Per Stage + Glide + Triple Jump + Rapid Fire", desc: "Born from flames! Automatically revives once per stage with shield & firestorm when defeated!" }
        },
        ru: {
            default: { title: "Кибер-Рыцарь Тени", faceDesc: "Лицо: Неоновая маска с лазерным визором", perkDesc: "⚡ Ловкость: +5% к скорости и кибер-броня", desc: "Стандартный бронированный костюм кибер-рыцаря будущего." },
            soldier_1950: { title: "Солдат 1950-х", faceDesc: "Лицо: Густые усы и волевой подбородок ветерана", perkDesc: "🛡️ Стойкость: +30% к неуязвимости после урона", desc: "Полевая форма 1950-х, стальная каска M1 с сеткой и винтовка." },
            soldier_modern: { title: "Современный Спецназ", faceDesc: "Лицо: Камуфляжный грим и тактическая борода", perkDesc: "🔥 Коммандос: +20% к перезарядке огня и +8% к скорости", desc: "Цифровой камуфляж, жилет MOLLE, рация и шлем с ПНВ." },
            rich_tycoon: { title: "Магнат-Миллиардер", faceDesc: "Лицо: Золотой монокль и тонкие усы", perkDesc: "🪙 Магнит Золота: +45% шанс монет и +25% к счёту", desc: "Смокинг, галстук, золотая цепочка часов, трость и цилиндр." },
            ottoman_pasha: { title: "Османский Паша", faceDesc: "Лицо: Пышные закрученные усы и борода паши", perkDesc: "🛡️ Щит Паши: Старт уровня со щитом и +20% к счёту", desc: "Парадный мундир с золотым шитьем, эполеты, сабля и феска." },
            royal_king: { title: "Королевский Монарх", faceDesc: "Лицо: Густая королевская борода и голубые глаза", perkDesc: "👑 Казна Короля: +1 Жизнь (♥) и +35% к сокровищам/счёту", desc: "Королевская мантия с горностаем, скипетр и золотая корона." },
            yavuz_sultan_selim: { title: "Султан Селим I Явуз", faceDesc: "Лицо: Длинные усы и жемчужная серьга", perkDesc: "🔥 Мощь Султана: +1♥, старт с огнём и +12% к скорости", desc: "Алый султанский кафтан с собольим мехом и тюрбан Тадж-и Селими!" },
            fatih_sultan_mehmet: { title: "Султан Мехмед Завоеватель", faceDesc: "Лицо: Орлиный нос и борода молодого султана", perkDesc: "👑 Завоеватель: +1♥, щит + огонь на старте и +40% к счёту", desc: "Имперский кафтан с золотым шитьем, белый тюрбан и меч Завоевателя!" },
            janissary_aga: { title: "Ага Янычар", faceDesc: "Лицо: Длинные усы и острый взгляд янычара", perkDesc: "⚔️ Ятаган: +14% к скорости бега и +6% к высоте прыжка", desc: "Белый войлочный бёрк с золотым султаном, алый кафтан и острый ятаган!" },
            mete_han: { title: "Мете-хан (Степной Каган)", faceDesc: "Лицо: Усы степного воина и соколиный взгляд", perkDesc: "🏹 Ветер Степи: Тройной прыжок (3x), +15% скорость", desc: "Доспех с волчьим мехом, золотой шлем с орлиными перьями и свистящий лук!" },
            cyber_shogun: { title: "Кибер-Сёгун Самурай", faceDesc: "Лицо: Боевая маска Мэнпо и лазерные глаза", perkDesc: "⚡ Рефлекс: Контроль в воздухе, +12% скорость и щит", desc: "Рогатый шлем Кабуто, неоновый доспех О-Ёрой и плазменная катана!" },
            cosmic_astronaut: { title: "Космонавт (EVA-2100)", faceDesc: "Лицо: Золотой зеркальный скафандр", perkDesc: "🌌 Невесомость: Плавное планирование в воздухе и +8% прыжок", desc: "Белый космический скафандр EVA, ранец жизнеобеспечения и золотой визор!" },
            ice_valkyrie: { title: "Северная Ледяная Валькирия", faceDesc: "Лицо: Платиновые косы и ледяные глаза", perkDesc: "🪽 Крылья Валькирии: Планирование, щит и +12% скорость", desc: "Крылатый шлем Валькирии, ледяной плащ и морозное копьё!" },
            golden_pharaoh: { title: "Золотой Фараон (Царь Солнца)", faceDesc: "Лицо: Подведенные глаза и золотая борода фараона", perkDesc: "☀️ Сокровище Солнца: Авто-магнит и +50% шанс монет", desc: "Головной убор Немес с коброй, золотой воротник и Посох Солнца!" },
            spartan_gladiator: { title: "Спартанский Полководец (Леонид)", faceDesc: "Лицо: Боевая борода спартанца", perkDesc: "🛡️ Щит Спарты: +1 Жизнь (♥) и долгая защита после удара", desc: "Бронзовый коринфский шлем с красным гребнем, плащ, щит и копьё!" },
            vip_quantum_emperor: { title: "Золотой Квантовый Император", faceDesc: "Лицо: Квантовый визор и золотые пластины", perkDesc: "👑 VIP Император: Магнит +110px, щит на старте и +50% монет/очков", desc: "Парящая квантовая корона, обсидианово-золотая броня и Императорский скипетр!" },
            vip_cyber_phoenix: { title: "Кибер-Рыцарь Феникс", faceDesc: "Лицо: Огненные глаза и алый шлем феникса", perkDesc: "🔥 Возрождение Феникса: 1 авто-воскрешение за уровень + полёт + 3x прыжок", desc: "Легендарный VIP-воин с крыльями пламени: воскресает с щитом раз за уровень!" }
        },
        ko: {
            vip_quantum_emperor: { title: "황금 양자 황제", faceDesc: "얼굴: 홀로그램 퀀텀 바이저 & 황금 아머", perkDesc: "👑 VIP 황제: 슈퍼 보물 자석(+110px), 시작 쉴드 & 코인/점수 +50%", desc: "부유하는 3봉 황금 홀로그램 왕관과 옵시디언 골드 퀀텀 아머, 양자 홀!" },
            vip_cyber_phoenix: { title: "사이버 피닉스 나이트", faceDesc: "얼굴: 불꽃 눈빛 & 진홍 피닉스 투구", perkDesc: "🔥 불사조 부활: 스테이지당 1회 자동 부활 + 활강 + 3단 점프 + 고속 화염", desc: "패배해도 스테이지마다 1회 쉴드와 화염으로 자동 부활하는 VIP 전설 기사!" }
        },
        ja: {
            vip_quantum_emperor: { title: "黄金クォンタム皇帝", faceDesc: "顔: ホログラム量子バイザー＆黄金装甲", perkDesc: "👑 VIP皇帝: 超トレジャー磁石(+110px)、初期シールド＆コイン/スコア+50%", desc: "浮遊する3尖黄金クラウンと黒金クォンタム装甲、軌道量子セプター装備！" },
            vip_cyber_phoenix: { title: "サイバーフェニックス騎士", faceDesc: "顔: 熾火の瞳＆真紅の不死鳥兜", perkDesc: "🔥 不死鳥復活: ステージ毎1回自動蘇生＋滑空＋3段ジャンプ＋高速炎弾", desc: "倒れてもステージ毎に1度シールド付きで炎から自動復活するVIP伝説騎士！" }
        },
        zh: {
            vip_quantum_emperor: { title: "黄金量子皇帝", faceDesc: "外观: 全息量子护目镜与黑金帝皇战甲", perkDesc: "👑 VIP 帝皇: 超级吸宝磁铁(+110px)、开局护盾 & 金币/得分 +50%", desc: "悬浮三尖全息皇冠、黑金量子战甲与环绕量子权杖！" },
            vip_cyber_phoenix: { title: "赛博凤凰骑士", faceDesc: "外观: 炽焰双眸与绯红凤凰战盔", perkDesc: "🔥 凤凰涅槃: 每关1次自动复活 + 滑翔 + 三段跳 + 极速火球", desc: "VIP 专属烈焰战骑，每关战败时可携带护盾原地浴火重生 1 次！" }
        },
        it: {
            vip_quantum_emperor: { title: "Imperatore Quantico d'Oro", faceDesc: "Volto: Visore Olografico Quantico & Piastre d'Oro", perkDesc: "👑 Imperatore VIP: Super Magnete (+110px), Scudo iniziale & +50% Monete/Punti", desc: "Corona olografica a 3 punte fluttuante, armatura nero-oro e Scettro Quantico!" },
            vip_cyber_phoenix: { title: "Cavaliere Fenice Cyber", faceDesc: "Volto: Occhi Ardenti & Elmo Becco Fenice", perkDesc: "🔥 Rinascita Fenice: 1 Auto-Rinascita a livello + Planata + Triplo Salto", desc: "Leggendario cavaliere VIP: rinasce automaticamente dalle ceneri con scudo una volta per livello!" }
        },
        es: {
            vip_quantum_emperor: { title: "Emperador Cuántico Dorado", faceDesc: "Rostro: Visor Holográfico Cuántico y Placas Doradas", perkDesc: "👑 Emperador VIP: Súper Imán (+110px), Escudo inicial y +50% Monedas/Puntos", desc: "¡Corona holográfica flotante de 3 puntas, armadura negro-oro y Cetro Cuántico!" },
            vip_cyber_phoenix: { title: "Caballero Fénix Cíber", faceDesc: "Rostro: Ojos de Fuego y Yelmo Pico de Fénix", perkDesc: "🔥 Renacer Fénix: 1 Auto-Reanimación por nivel + Planeo + Triple Salto", desc: "¡Caballero VIP legendario que revive automáticamente de las cenizas con escudo una vez por nivel!" }
        },
        fr: {
            vip_quantum_emperor: { title: "Empereur Quantique d'Or", faceDesc: "Visage : Visière Quantique Holographique & Plaques d'Or", perkDesc: "👑 Empereur VIP : Super Aimant (+110px), Bouclier & +50% Pièces/Score", desc: "Couronne holographique flottante à 3 pointes, armure or-obsidienne et Sceptre Quantique !" },
            vip_cyber_phoenix: { title: "Chevalier Phénix Cyber", faceDesc: "Visage : Yeux Embrasés & Heaume Bec de Phénix", perkDesc: "🔥 Renaissance Phénix : 1 Auto-Réanimation / niveau + Vol Plané + Triple Saut", desc: "Chevalier VIP légendaire : renaît automatiquement de ses cendres avec bouclier 1 fois par niveau !" }
        }
    };

    // Translations for SHOP_CATALOG (8 permanent upgrades)
    const SHOP_TRANSLATIONS = {
        en: {
            heart1: { title: "Titanium Armor & +1 Extra Heart", perkDesc: "❤️ +1 Max Heart & +25 Frames Invulnerability", desc: "Increases maximum health by +1 heart (♥) and extends post-damage protection!" },
            heart2: { title: "Quantum Air Control & Jump", perkDesc: "🚀 +6% Higher Jump & +35% Air Control", desc: "Provides +35% sharper mid-air maneuvering and +6% higher jump boost!" },
            heart3: { title: "Crystal, Coin & Score Multiplier", perkDesc: "💎 +35% Score Multiplier & +35% Extra Coin Chance", desc: "Grants +35% bonus score and extra Coin chance from every collected gem!" },
            startShield: { title: "Starter Aether Shield", perkDesc: "🛡 Start Every Level with a Protective Shield", desc: "Automatically start every level protected by an Aether energy shield!" },
            startFire: { title: "Starter Plasma Fire", perkDesc: "🔥 Start Every Level with Fireball Power", desc: "Start every level with Plasma Fireball ranged attack already active!" },
            speedBoots: { title: "Hyper-Speed Boots", perkDesc: "👢 +18% Permanent Run Speed Boost", desc: "Run 18% faster permanently across all campaign and troll levels!" },
            emeraldMagnet: { title: "Ancient Emerald & Crystal Magnet", perkDesc: "🧲 Wide-Area Treasure Magnet (Ignores Fake Traps)", desc: "Automatically pulls nearby real Crystals, Coins, and Ancient Emeralds to you!" },
            tripleJump: { title: "Triple Jump Module", perkDesc: "🚀 Jump 3 Times in Mid-Air (Triple Jump)", desc: "Unlocks the ability to jump 3 times in a row while airborne!" }
        },
        ru: {
            heart1: { title: "Титановая Броня и +1 Жизнь", perkDesc: "❤️ +1 Макс. Жизнь и +25 кадров защиты", desc: "Увеличивает здоровье на +1 сердце (♥) и продлевает неуязвимость!" },
            heart2: { title: "Квантовый Контроль и Прыжок", perkDesc: "🚀 +6% Высота прыжка и +35% маневр в воздухе", desc: "Обеспечивает точное управление в воздухе и усиливает прыжок!" },
            heart3: { title: "Множитель Кристаллов и Счёта", perkDesc: "💎 +35% к Счёту и +35% шанс бонусных Монет", desc: "Дает +35% бонусных очков и шанс дополнительных монет!" },
            startShield: { title: "Стартовый Эфирный Щит", perkDesc: "🛡 Начинай каждый уровень с защитным щитом", desc: "Автоматический энергетический щит в начале каждого уровня!" },
            startFire: { title: "Стартовый Плазменный Огонь", perkDesc: "🔥 Начинай каждый уровень с Огненным Шаром", desc: "Сразу даёт способность метать огненные шары со старта уровня!" },
            speedBoots: { title: "Гипер-Скоростные Ботинки", perkDesc: "👢 +18% к постоянной скорости бега", desc: "Позволяет бегать на 18% быстрее на всех уровнях!" },
            emeraldMagnet: { title: "Магнит Изумрудов и Кристаллов", perkDesc: "🧲 Притягивает настоящие сокровища (кроме ловушек)", desc: "Автоматически притягивает ближайшие кристаллы, монеты и изумруды!" },
            tripleJump: { title: "Модуль Тройного Прыжка", perkDesc: "🚀 3 прыжка подряд в воздухе (Triple Jump)", desc: "Позволяет прыгать 3 раза подряд в воздухе вместо двух!" }
        }
    };

    const KEY_ALIASES = {
        charEmptyFilter: "charEmptyOther",
        charGetCoinBtn: "charAdBuyBtn",
        charEquippedBtn: "charActiveBtn",
        charEquipBtn: "charSelectBtn",
        charEquippedBadge: "charActiveBadge",
        shopGetCrystalBtn: "shopAdBuyBtn",
        shopActiveUpgrade: "shopActiveBtn",
        custGetEmeraldBtn: "custAdUnlockBtn",
        custMilestoneUnlocked: "milestoneUnlocked",
        custMilestoneLocked: "milestoneLocked",
        custGlideSuffix: "glideTag",
        custTotalPower: "totalPowerSummary",
        insuffCancelBtn: "btnCancel",
        lbMetricNoRecord: "lbMetricNoSpeed",
        lbMetricSec: "lbMetricSpeed",
        lbMetricPoints: "lbMetricScore",
        lbSyncActive: "lbSyncCloud",
        lbEmptyPodium: "lbEmptyPodiumTitle",
        lbWaitingChampion: "lbEmptyPodiumSub",
        lbStartAndClaim: "lbEmptyPodiumHint",
        lbHeroLabel: "lbHeroPrefix",
        lbLiveBanner: "lbLiveInfoBanner",
        lbTargetLocked: "lbTargetIneligible",
        lbTargetDiff: "lbTargetScore",
        lbTargetTop1: "lbTargetTop",
        profileStatHpArmor: "attrHpArmor",
        profileStatSpeedJump: "attrSpeedJump",
        profileStatHelmetGear: "attrHelmetGear",
        profileStatVisorAura: "attrVisorAura",
        profileStatPowers: "attrSpecialPowers",
        profileStatProgress: "attrProgressWealth",
        powerDoubleJump: "attrDoubleTripleJump",
        powerWallJump: "attrWallJump",
        powerShield: "attrStartShield",
        powerFire: "attrStartFire",
        powerMagnet: "attrMagnet",
        profileRunWord: "attrRunLabel",
        profileJumpWord: "attrJumpLabel"
    };

    function getUiDict(lang) {
        return UI_EXT[lang] || UI_EXT.en || UI_EXT.tr;
    }

    function formatTemplate(str, vars) {
        if (!str) return "";
        const normVars = vars ? { ...vars } : {};
        if (normVars.score !== undefined && normVars.mult === undefined) normVars.mult = normVars.score;
        if (normVars.mult !== undefined && normVars.score === undefined) normVars.score = normVars.mult;
        if (normVars.sec !== undefined && normVars.diff === undefined) normVars.diff = normVars.sec;
        if (normVars.diff !== undefined && normVars.sec === undefined) normVars.sec = normVars.diff;
        return String(str).replace(/\{(\w+)\}/g, (_, k) => (normVars[k] !== undefined ? normVars[k] : ""));
    }

    window.getMarinextUiText = function (lang, key, vars) {
        const dict = getUiDict(lang);
        if (key === "charFilterAll" || key === "charFilterOwned" || key === "charFilterLocked") {
            const baseKey = key === "charFilterAll" ? "charTabAll" : (key === "charFilterOwned" ? "charTabOwned" : "charTabLocked");
            const baseTxt = dict[baseKey] || UI_EXT.en[baseKey] || UI_EXT.tr[baseKey];
            const cnt = vars && vars.count !== undefined ? ` (${vars.count})` : "";
            return `${baseTxt}${cnt}`;
        }
        const resolvedKey = KEY_ALIASES[key] || key;
        let raw = dict[resolvedKey] !== undefined
            ? dict[resolvedKey]
            : (UI_EXT.en[resolvedKey] !== undefined ? UI_EXT.en[resolvedKey] : UI_EXT.tr[resolvedKey]);
        if (resolvedKey === "cloudSyncStatusLine" && typeof raw === "string") {
            raw = raw.replace("/15", "/50");
        }
        return vars ? formatTemplate(raw, vars) : raw;
    };

    window.getLocalizedHeroItem = function (item, lang) {
        if (!item || lang === "tr") return item;
        const tr = (HERO_TRANSLATIONS[lang] && HERO_TRANSLATIONS[lang][item.id]) || (HERO_TRANSLATIONS.en && HERO_TRANSLATIONS.en[item.id]);
        if (!tr) return item;
        return {
            ...item,
            title: tr.title || item.title,
            faceDesc: tr.faceDesc || item.faceDesc,
            perkDesc: tr.perkDesc || item.perkDesc,
            desc: tr.desc || item.desc
        };
    };

    window.getLocalizedShopItem = function (item, lang) {
        if (!item || lang === "tr") return item;
        const map = SHOP_TRANSLATIONS[lang] || SHOP_TRANSLATIONS.en;
        const tr = map && map[item.id];
        if (!tr) return item;
        return {
            ...item,
            title: tr.title || item.title,
            perkDesc: tr.perkDesc || item.perkDesc,
            desc: tr.desc || item.desc
        };
    };

    const CUST_ITEM_EN = {
        helmet_crest: ["Knight Crest", "Classic aerodynamic cyber knight helmet."],
        helmet_horns: ["Samurai Horns", "Curved neon horns for shadow warriors."],
        helmet_viking: ["Nordic Viking Horns", "Wide bone battle horns of the North."],
        helmet_ronin: ["Shadow Ronin Hat", "Wide-brimmed neon bamboo assassin hat."],
        helmet_wolf: ["Cyber Wolf Helm", "Sharp-eared mechanical alpha wolf helmet."],
        helmet_spartan: ["Spartan Commander Crest", "Thick crimson-plumed gladiator crest."],
        helmet_antennas: ["Cyber Mecha Antennas", "Dual mecha antennas with glowing energy orbs."],
        helmet_crown: ["Imperial Crown", "Glowing pure gold and ruby royal crown."],
        helmet_wizard: ["Dark Mage Hat", "Mystic wizard hat with a golden buckle."],
        helmet_skull: ["Phantom Skull Mask", "Bone-armored death knight skull helm."],
        helmet_halo: ["Cyber Archangel Halo", "Sacred energy ring floating above the helm."],
        helmet_flames: ["Hellfire Crown", "Living plasma flames engulfing the head!"],
        gear_katana: ["Plasma Katana", "Sharp energy blade carried on the back."],
        gear_dual: ["Dual Laser Daggers", "Cross-mounted twin assassin blades."],
        gear_bow: ["Neon Hunter Bow", "Energy-stringed cyber archer bow."],
        gear_axe: ["Giant Battle Axe", "Double-bitted executioner axe that shatters armor."],
        gear_greatsword: ["Titan Greatsword", "Colossal rune-etched knight greatsword."],
        gear_scythe: ["Reaper Scythe", "Giant crescent scythe radiating dark energy."],
        gear_shuriken: ["Spinning Giant Shuriken", "Continuously spinning giant energy ninja star!"],
        gear_jetpack: ["Twin-Turbine Jetpack", "Rocket pack firing blue-orange plasma thrusters!"],
        gear_spider: ["Mechanical Spider Arms", "4 articulated bio-mechanical claw legs!"],
        gear_wings: ["Cyber Energy Wings", "Plasma wings that flap while running and jumping."],
        gear_dragon: ["Crimson Dragon Wings", "Massive clawed dark dragon wings."],
        gear_angel: ["Sacred Archangel Wings", "Glorious wings of gold and pure white feathers."],
        skin_cyan: ["Shadow Blue", "Classic neon blue cavern knight armor."],
        skin_crimson: ["Crimson Baron", "Crimson neon and dark ruby armor plating."],
        skin_emerald: ["Emerald Assassin", "Ancient emerald-glowing forest guardian armor."],
        skin_arctic: ["Glacial Knight", "Pure white and ice-blue crystal armor."],
        skin_toxic: ["Radioactive Bio-Armor", "Phosphorescent acid-green cyber-symbiote armor."],
        skin_sakura: ["Sakura Samurai", "Cherry-blossom pink and burgundy samurai armor."],
        skin_stealth: ["Night Ghost (Stealth)", "Matte carbon-black and silver covert ops armor."],
        skin_violet: ["Void Guardian", "Deep purple neon energy armor."],
        skin_magma: ["Magma Titan", "Molten lava-orange and volcanic rock armor."],
        skin_galaxy: ["Cosmic Galaxy", "Stardust pink and deep-space indigo armor."],
        skin_gold: ["Golden Sovereign", "Legendary 24-karat gold-plated emperor armor."],
        skin_rainbow: ["RGB Rainbow (Live Color)", "Legendary RGB armor that shifts colors every second!"],
        visor_slit: ["Classic Knight Visor", "Sharp horizontal laser visor slit."],
        visor_cyclops: ["Cyclops Laser Lens", "Single glowing targeting lens in the center."],
        visor_dual: ["Dual Hunter Eyes", "Fierce twin eyes glowing in the dark."],
        visor_x: ["X-Assassin Visor", "Cross-slashed neon X mark."],
        visor_shades: ["Cyber Sunglasses", "Sleek reflective cyberpunk shades."],
        visor_robo: ["Digital Matrix Grid", "4-dot tactical robotic sensor display."],
        visor_heart: ["Neon Heart Visor", "Glowing pink heart-shaped visor."],
        visor_sharingan: ["Crimson Mystic Eye", "Hypnotic crimson ring eye."],
        visor_flame: ["Blazing Eyes", "Fierce fire trails bursting from the visor."],
        visor_void: ["Triple Void Gaze", "Dark energy gaze opening a third eye on the brow."],
        aura_none: ["No Aura", "Clean look without extra particle effects."],
        aura_stars: ["Stardust Sparkle", "Golden star crystals orbiting the hero."],
        aura_sakura: ["Sakura Petal Storm", "Swirling pink cherry blossom petals."],
        aura_dark: ["Dark Shadow Mist", "Mysterious purple-black shadow mist rising from the feet."],
        aura_emerald: ["Ancient Emerald Rain", "Mini emerald crystals floating around the hero."],
        aura_fire: ["Super Flame Aura", "Rising waves of plasma fire surrounding the hero!"],
        aura_lightning: ["Lightning & Tesla Field", "High-voltage lightning bolts crackling around the armor!"],
        aura_souls: ["Mystic Soul Orbs", "3 protective spirit orbs orbiting your hero."],
        aura_cyber: ["Hologram Cyber Rings", "Dual-layer neon energy rings scanning the hero."],
        aura_rainbow: ["Cosmic Rainbow Aura", "Color-shifting triple prism energy ring!"],
        cape_pink: ["Neon Pink Cape", "Classic high-contrast neon pink cape."],
        cape_gold: ["Golden Flame Cape", "Shining royal gold cape."],
        cape_emerald: ["Emerald Green Cape", "Bioluminescent emerald cape."],
        cape_cyan: ["Ice Cyan Cape", "Cold plasma cyan cape."],
        cape_purple: ["Purple Storm Cape", "Dark-energy violet cape."],
        cape_orange: ["Volcanic Orange Cape", "Molten lava orange cape."],
        cape_crimson: ["Blood Crimson Cape", "Noble knight crimson cape."],
        cape_white: ["Pure White Light Cape", "Radiant snow-white cape glowing in the dark."],
        cape_toxic: ["Neon Acid Cape", "Bright lime-green cyber cape."],
        cape_rainbow: ["Rainbow Spectrum Cape", "Legendary RGB cape that shifts colors as it waves!"],
        gear_vip_phoenix_wings: ["VIP Phoenix Flame Wings", "Blazing ember phoenix wings exclusive to VIP Pass (Glide + Jump Boost)."],
        aura_vip_goldstars: ["VIP Imperial Goldstar Aura", "Orbiting 4-point star crystals & golden-cyan quantum ring."],
        cape_vip_imperial: ["VIP Imperial Purple Cape", "Royal violet-gold trimmed quantum cape with maximum air control!"]
    };

    const VIP_CUST_I18N = {
        ru: {
            gear_vip_phoenix_wings: ["VIP Огненные Крылья Феникса", "Пылающие крылья для VIP Pass: плавное планирование и высокий прыжок."],
            aura_vip_goldstars: ["VIP Золотая Императорская Аура", "Кольцо квантового золота и вращающиеся звёздные кристаллы."],
            cape_vip_imperial: ["VIP Императорский Плащ", "Пурпурно-золотой плащ с максимальным контролем в воздухе!"]
        },
        ko: {
            gear_vip_phoenix_wings: ["VIP 피닉스 불꽃 날개", "VIP 패스 전용 불타는 피닉스 날개 (활강 + 점프 강화)."],
            aura_vip_goldstars: ["VIP 황금 황제 오라", "회전하는 4각 별 크리스탈과 황금-청록 양자 링."],
            cape_vip_imperial: ["VIP 황실 보라 망토", "황금 테두리가 빛나는 보라빛 퀀텀 망토!"]
        },
        ja: {
            gear_vip_phoenix_wings: ["VIP 不死鳥の炎翼", "VIPパス限定の灼熱フェニックス翼（滑空＋ジャンプ強化）。"],
            aura_vip_goldstars: ["VIP 黄金皇帝オーラ", "周回する星結晶と黄金・青磁の量子リング。"],
            cape_vip_imperial: ["VIP 皇帝インペリアルマント", "金縁が輝く高貴な紫の量子マント＆最高峰エア制御！"]
        },
        zh: {
            gear_vip_phoenix_wings: ["VIP 凤凰烈焰之翼", "VIP 专属灼热凤凰羽翼（滑翔 + 跳跃增强）。"],
            aura_vip_goldstars: ["VIP 黄金帝皇光环", "环绕星芒水晶与金青色量子光环。"],
            cape_vip_imperial: ["VIP 帝皇紫金披风", "金边高贵紫量子披风，提供顶级空中机动！"]
        },
        it: {
            gear_vip_phoenix_wings: ["Ali di Fiamma Fenice VIP", "Ali infuocate esclusive VIP Pass (Planata + Salto Extra)."],
            aura_vip_goldstars: ["Aura Imperiale Stelle d'Oro VIP", "Cristalli stellari orbitanti e anello quantico oro-ciano."],
            cape_vip_imperial: ["Mantello Imperiale Viola VIP", "Mantello viola-oro VIP con massimo controllo aereo!"]
        },
        es: {
            gear_vip_phoenix_wings: ["Alas de Llama Fénix VIP", "Alas ardientes exclusivas Pase VIP (Planeo + Salto)."],
            aura_vip_goldstars: ["Aura Imperial Estrellas Doradas VIP", "Cristales estelares y anillo cuántico dorado-cian."],
            cape_vip_imperial: ["Capa Imperial Púrpura VIP", "¡Capa violeta y oro con máximo control aéreo!"]
        },
        fr: {
            gear_vip_phoenix_wings: ["Ailes Flamme Phénix VIP", "Ailes ardentes exclusives Pass VIP (Vol plané + Saut)."],
            aura_vip_goldstars: ["Aura Impériale Étoiles d'Or VIP", "Cristaux stellaires orbitaux et anneau quantique or-cyan."],
            cape_vip_imperial: ["Cape Impériale Pourpre VIP", "Cape royale pourpre et or avec contrôle aérien maximal !"]
        }
    };

    window.getLocalizedCustomizeItem = function (item, lang) {
        if (!item || lang === "tr") return item;
        const vipPair = VIP_CUST_I18N[lang] && VIP_CUST_I18N[lang][item.id];
        const pair = vipPair || CUST_ITEM_EN[item.id];
        if (!pair) return item;
        return {
            ...item,
            title: pair[0] || item.title,
            desc: pair[1] || item.desc
        };
    };

    window.getLocalizedPerkDesc = function (item, perkObj, lang) {
        if (!perkObj || lang === "tr") return perkObj ? perkObj.desc : "";
        if (!item) return "⚡ Standard Cyber Gear";
        const tier = item.vipOnly ? 6 : Math.max(1, Number(item.cost) || 1);
        if (item.category === "helmet") {
            const inv = 6 + tier * 3;
            const spd = Math.round((0.08 + tier * 0.03) * 18);
            return `🛡️ Armor Protection: +${inv} Invuln Frames & +${spd}% Speed`;
        }
        if (item.category === "backGear") {
            const isWingOrJet = ["jetpack", "wings", "dragon_wings", "angel_wings", "vip_phoenix_wings"].includes(item.value);
            if (isWingOrJet) {
                return `🪽 Mid-Air Glide & +${4 + tier}% Jump Power`;
            }
            const cdRed = Math.min(6, 1 + Math.floor(tier * 0.8));
            return `⚔️ Attack Speed: -${cdRed * 4}% Fire Cooldown & +${tier * 5}% Score`;
        }
        if (item.category === "skin") {
            const extraHp = tier >= 5 ? 1 : 0;
            const inv = 8 + tier * 3;
            return extraHp > 0
                ? `❤️ Legendary Armor: +1 Max Heart (♥) & +${inv} Protection`
                : `🛡️ Cyber Plating: +${inv} Protection & +${tier * 4}% Score`;
        }
        if (item.category === "visor") {
            const magBonus = 20 + tier * 12;
            return `👁️ Targeting Visor: +${magBonus}px Magnet Range & +${tier * 6}% Coin Chance`;
        }
        if (item.category === "aura") {
            if (item.cost === 0 && !item.vipOnly) return "⭕ Clean Look (No Extra Aura)";
            const scMult = Math.round(tier * 6);
            return `✨ Energy Aura: +${scMult}% Score Multiplier & +${tier * 12}px Magnet`;
        }
        if (item.category === "cape") {
            const airBonus = Math.round((0.12 + tier * 0.04) * 100);
            const jmp = Math.round((0.02 + tier * 0.008) * 100);
            return `🧣 Aerodynamic Cape: +${airBonus}% Air Control & +${jmp}% Jump`;
        }
        return perkObj.desc;
    };

    const AVATAR_TITLES_EN = {
        av_1: "Shadow Ninja", av_2: "Cyber Knight", av_3: "Crimson Samurai", av_4: "Alpha Cyber Wolf",
        av_5: "Golden Emperor", av_6: "Emerald Dragon", av_7: "Void Mage", av_8: "Phantom Skull",
        av_9: "Mecha Commander", av_10: "Hellfire Knight", av_11: "Glacial Guardian", av_12: "Lightning Lord",
        av_13: "Storm Eagle", av_14: "Lionheart", av_15: "White Tiger", av_16: "Night Fox",
        av_17: "Cyber Spider", av_18: "Neon Scorpion", av_19: "Night Hunter", av_20: "Deep Shark",
        av_21: "Mystic Owl", av_22: "Venom Cobra", av_23: "Cosmic Legend", av_24: "Galaxy Explorer",
        av_25: "Dark Count", av_26: "Aether Spirit", av_27: "Space Pirate", av_28: "Titan Guardian",
        av_29: "Crystal King", av_30: "RGB Legend"
    };

    window.getLocalizedAvatarTitle = function (av, lang) {
        if (!av) return "";
        if (lang === "tr") return av.title;
        return AVATAR_TITLES_EN[av.id] || av.title;
    };

    // Full multi-language level short names (Levels 41..100) and Troll (1..50) for all supported languages
    const LEVEL_NAMES_41_100 = {
        "tr": [
                "Buzul Vadisi",
                "Rüzgar Kanyonu",
                "Lazer Buzulu",
                "Kristal Çığ",
                "Buzul Kralı ☠",
                "Donmuş Tersane",
                "Tipi Koridoru",
                "Ayna Uçurum",
                "Kutup Kulesi",
                "Kutup Titanı ☠",
                "Biyo-Sektör",
                "Plazma Sera",
                "Lazer Reaktör",
                "Genetik Köprü",
                "Biyo-Mutant ☠",
                "Rüzgar Türbini",
                "Siber Asansör",
                "Kuantum Deney",
                "Karanlık Reaktör",
                "Omega Sürü ☠",
                "Bulut Limanı",
                "Stratosfer",
                "Gök Lazerleri",
                "Buz Bulutları",
                "Fırtına Amirali ☠",
                "Turbo Pist",
                "İkiz Kuleler",
                "Hava İskelesi",
                "Yörünge Halkası",
                "Gök İmparatoru ☠",
                "Sfenks Geçidi",
                "Rüzgar Obeliski",
                "Güneş Lazerleri",
                "Buzul Piramit",
                "Firavun Muhafızı ☠",
                "Altın Koridor",
                "Gökyüzü Tapınağı",
                "Labirent Mahzen",
                "Yıldız Sunağı",
                "Antik Yıkıcı ☠",
                "Nebula Sıçrayışı",
                "Kuasar Akımı",
                "Pulsar Kafesi",
                "Komet Buzulu",
                "Nebula Celladı ☠",
                "Işık Hızı",
                "Nötron Kulesi",
                "Solucan Ağı",
                "Olay Ufku",
                "Karadelik Lordu ☠",
                "Taht Girişi",
                "İmparatorluk Akımı",
                "Kraliyet Lazeri",
                "Elmas Köprü",
                "Taht Muhafızı ☠",
                "Kızıl Koridor",
                "Gökyüzü Sarayı",
                "Son Labirent",
                "Kıyamet Eşiği",
                "Evren Hükümdarı 👑"
        ],
        "en": [
                "Glacial Valley",
                "Wind Canyon",
                "Laser Glacier",
                "Crystal Avalanche",
                "Glacier King ☠",
                "Frozen Shipyard",
                "Blizzard Pass",
                "Mirror Abyss",
                "Polar Tower",
                "Polar Titan ☠",
                "Bio-Sector",
                "Plasma Greenhouse",
                "Laser Reactor",
                "Genetic Bridge",
                "Bio-Mutant ☠",
                "Wind Turbine",
                "Cyber Elevator",
                "Quantum Lab",
                "Dark Reactor",
                "Omega Swarm ☠",
                "Cloud Harbor",
                "Stratosphere",
                "Sky Lasers",
                "Ice Clouds",
                "Storm Admiral ☠",
                "Turbo Runway",
                "Twin Towers",
                "Sky Pier",
                "Orbital Ring",
                "Sky Emperor ☠",
                "Sphinx Pass",
                "Wind Obelisk",
                "Solar Lasers",
                "Glacial Pyramid",
                "Pharaoh Guard ☠",
                "Golden Corridor",
                "Sky Temple",
                "Labyrinth Vault",
                "Star Altar",
                "Ancient Destroyer ☠",
                "Nebula Leap",
                "Quasar Stream",
                "Pulsar Cage",
                "Comet Glacier",
                "Nebula Executioner ☠",
                "Light Speed",
                "Neutron Tower",
                "Wormhole Web",
                "Event Horizon",
                "Blackhole Lord ☠",
                "Throne Gate",
                "Imperial Current",
                "Royal Laser",
                "Diamond Bridge",
                "Throne Guard ☠",
                "Crimson Hall",
                "Sky Palace",
                "Final Maze",
                "Doomsday Brink",
                "Universe Sovereign 👑"
        ],
        "ko": [
                "빙하 계곡",
                "바람 협곡",
                "레이저 빙하",
                "크리스탈 눈사태",
                "빙하 국왕 ☠",
                "얼어붙은 조선소",
                "눈보라 회랑",
                "거울 심연",
                "극지 타워",
                "극지 타이탄 ☠",
                "바이오 구역",
                "플라즈마 온실",
                "레이저 원자로",
                "유전자 브리지",
                "바이오 돌연변이 ☠",
                "풍력 터빈",
                "사이버 엘리베이터",
                "양자 실험실",
                "암흑 반응로",
                "오메가 군단 ☠",
                "구름 항구",
                "성층권",
                "천공 레이저",
                "얼음 구름",
                "폭풍 제독 ☠",
                "터보 활주로",
                "쌍둥이 타워",
                "하늘 선착장",
                "궤도 링",
                "천공 황제 ☠",
                "스핑크스 통로",
                "바람 오벨리스크",
                "태양 레이저",
                "빙하 피라미드",
                "파라오 근위병 ☠",
                "황금 회랑",
                "하늘 신전",
                "미궁 금고",
                "별의 제단",
                "고대 파괴자 ☠",
                "성운 도약",
                "퀘이사 제트",
                "펄서 감옥",
                "혜성 빙하",
                "성운 처형자 ☠",
                "광속 돌파",
                "중성자 타워",
                "웜홀 네트워크",
                "사건의 지평선",
                "블랙홀 군주 ☠",
                "왕좌 입구",
                "제국 해류",
                "황실 레이저",
                "다이아몬드 브리지",
                "왕좌 근위병 ☠",
                "진홍의 전당",
                "천공 궁전",
                "최후의 미궁",
                "파멸의 문턱",
                "우주 지배자 👑"
        ],
        "ja": [
                "氷河の谷",
                "風の峡谷",
                "レーザー氷河",
                "雪崩の氷晶",
                "氷河の王 ☠",
                "凍てつく造船所",
                "吹雪の回廊",
                "鏡の深淵",
                "極地の塔",
                "極地タイタン ☠",
                "バイオセクター",
                "温室プラズマ",
                "レーザー反応炉",
                "遺伝子の橋",
                "バイオミュータント ☠",
                "風力タービン",
                "サイバー昇降機",
                "量子実験室",
                "暗黒反応炉",
                "オメガ群集 ☠",
                "雲海ハーバー",
                "成層圏",
                "天空レーザー",
                "氷雲回廊",
                "嵐の提督 ☠",
                "ターボ滑走路",
                "ツインタワー",
                "天空ピア",
                "軌道リング",
                "天空皇帝 ☠",
                "スフィンクス街道",
                "風のオベリスク",
                "太陽レーザー",
                "氷河ピラミッド",
                "ファラオ親衛隊 ☠",
                "黄金回廊",
                "天空神殿",
                "迷宮の宝物庫",
                "星の祭壇",
                "古代破壊者 ☠",
                "星雲跳躍",
                "クエーサー流",
                "パルサーケージ",
                "彗星氷河",
                "星雲の処刑人 ☠",
                "光速突破",
                "中性子タワー",
                "ワームホール網",
                "事象の地平線",
                "ブラックホール卿 ☠",
                "王座の門",
                "帝国潮流",
                "ロイヤルレーザー",
                "ダイヤモンドブリッジ",
                "王座の守護者 ☠",
                "紅蓮の広間",
                "天空宮殿",
                "最終迷宮",
                "破滅の瀬戸際",
                "全宇宙の覇者 👑"
        ],
        "zh": [
                "冰川峡谷",
                "狂风深谷",
                "激光冰原",
                "水晶雪崩",
                "冰川领主 ☠",
                "冰封船厂",
                "暴雪通道",
                "镜面深渊",
                "极地高塔",
                "极地泰坦 ☠",
                "生物园区",
                "等离子温室",
                "激光反应堆",
                "基因巨桥",
                "生化变异体 ☠",
                "风力涡轮",
                "赛博升降机",
                "量子实验室",
                "暗物质反应堆",
                "欧米茄虫群 ☠",
                "云海空港",
                "平流层",
                "天穹激光",
                "寒冰云层",
                "风暴提督 ☠",
                "涡轮跑道",
                "双子巨塔",
                "浮空码头",
                "轨道星环",
                "苍穹主宰 ☠",
                "斯芬克斯通路",
                "疾风方尖碑",
                "太阳激光",
                "冰川金字塔",
                "法老禁卫 ☠",
                "黄金回廊",
                "凌霄神殿",
                "迷宫宝库",
                "群星祭坛",
                "远古湮灭者 ☠",
                "星云跃迁",
                "类星体风暴",
                "脉冲星囚笼",
                "彗星冰原",
                "星云刽子手 ☠",
                "超光速航行",
                "中子高塔",
                "虫洞网络",
                "事件视界",
                "黑洞君王 ☠",
                "王座入口",
                "帝国星流",
                "皇家激光",
                "钻石巨桥",
                "王座守卫 ☠",
                "猩红圣殿",
                "天空皇宫",
                "终极迷宫",
                "末日边缘",
                "全宇宙至尊 👑"
        ],
        "ru": [
                "Ледниковая Долина",
                "Каньон Ветров",
                "Лазерный Ледник",
                "Кристальная Лавина",
                "Ледяной Король ☠",
                "Замерзшая Верфь",
                "Вьюжный Перевал",
                "Зеркальная Бездна",
                "Полярная Башня",
                "Полярный Титан ☠",
                "Био-Сектор",
                "Плазменная Теплица",
                "Лазерный Реактор",
                "Генетический Мост",
                "Био-Мутант ☠",
                "Ветряная Турбина",
                "Кибер-Лифт",
                "Квантовая Лаборатория",
                "Темный Реактор",
                "Рой Омега ☠",
                "Облачная Гавань",
                "Стратосфера",
                "Небесные Лазеры",
                "Ледяные Облака",
                "Адмирал Бури ☠",
                "Турбо-Взлетная Полоса",
                "Башни-Близнецы",
                "Небесный Пирс",
                "Орбитальное Кольцо",
                "Небесный Император ☠",
                "Проход Сфинкса",
                "Обелиск Ветра",
                "Солнечные Лазеры",
                "Ледяная Пирамида",
                "Страж Фараона ☠",
                "Золотой Коридор",
                "Небесный Храм",
                "Лабиринтное Хранилище",
                "Звездный Алтарь",
                "Древний Разрушитель ☠",
                "Прыжок Небулы",
                "Поток Квазара",
                "Клетка Пульсара",
                "Кометный Ледник",
                "Палач Небулы ☠",
                "Скорость Света",
                "Нейтронная Башня",
                "Паутина Червоточин",
                "Горизонт Событий",
                "Повелитель Черных Дыр ☠",
                "Врата Трона",
                "Имперское Течение",
                "Королевский Лазер",
                "Алмазный Мост",
                "Страж Трона ☠",
                "Алый Чертог",
                "Небесный Дворец",
                "Финальный Лабиринт",
                "Грань Судного Дня",
                "Владыка Вселенной 👑"
        ],
        "it": [
                "Valle Glaciale",
                "Canyon del Vento",
                "Ghiacciaio Laser",
                "Valanga di Cristallo",
                "Re dei Ghiacci ☠",
                "Cantiere Congelato",
                "Passo della Tormenta",
                "Abisso a Specchio",
                "Torre Polare",
                "Titano Polare ☠",
                "Bio-Settore",
                "Serra al Plasma",
                "Reattore Laser",
                "Ponte Genetico",
                "Bio-Mutante ☠",
                "Turbina Eolica",
                "Ascensore Cyber",
                "Laboratorio Quantico",
                "Reattore Oscuro",
                "Sciame Omega ☠",
                "Porto tra le Nuvole",
                "Stratosfera",
                "Laser Celesti",
                "Nubi di Ghiaccio",
                "Ammiraglio della Tempesta ☠",
                "Pista Turbo",
                "Torri Gemelle",
                "Molo Celeste",
                "Anello Orbitale",
                "Imperatore Celeste ☠",
                "Passo della Sfinge",
                "Obelisco del Vento",
                "Laser Solari",
                "Piramide Glaciale",
                "Guardia del Faraone ☠",
                "Corridoio Dorato",
                "Tempio Celeste",
                "Cripta del Labirinto",
                "Altare delle Stelle",
                "Distruttore Antico ☠",
                "Balzo della Nebulosa",
                "Flusso di Quasar",
                "Gabbia di Pulsar",
                "Ghiacciaio della Cometa",
                "Boia della Nebulosa ☠",
                "Velocità della Luce",
                "Torre dei Neutroni",
                "Rete di Wormhole",
                "Orizzonte degli Eventi",
                "Signore del Buco Nero ☠",
                "Porta del Trono",
                "Corrente Imperiale",
                "Laser Reale",
                "Ponte di Diamante",
                "Guardia del Trono ☠",
                "Sala Cremisi",
                "Palazzo Celeste",
                "Labirinto Finale",
                "Soglia del Giudizio",
                "Sovrano dell'Universo 👑"
        ],
        "es": [
                "Valle Glacial",
                "Cañón del Viento",
                "Glaciar Láser",
                "Avalancha de Cristal",
                "Rey del Glaciar ☠",
                "Astillero Helado",
                "Paso de la Ventisca",
                "Abismo de Espejos",
                "Torre Polar",
                "Titán Polar ☠",
                "Bio-Sector",
                "Invernadero de Plasma",
                "Reactor Láser",
                "Puente Genético",
                "Bio-Mutante ☠",
                "Turbina de Viento",
                "Ascensor Cyber",
                "Laboratorio Cuántico",
                "Reactor Oscuro",
                "Enjambre Omega ☠",
                "Puerto de Nubes",
                "Estratosfera",
                "Láseres Celestiales",
                "Nubes de Hielo",
                "Almirante de la Tormenta ☠",
                "Pista Turbo",
                "Torres Gemelas",
                "Muelle Celeste",
                "Anillo Orbital",
                "Emperador Celeste ☠",
                "Paso de la Esfinge",
                "Obelisco del Viento",
                "Láseres Solares",
                "Pirámide Glacial",
                "Guardia del Faraón ☠",
                "Corredor Dorado",
                "Templo Celeste",
                "Bóveda del Laberinto",
                "Altar Estelar",
                "Destructor Antiguo ☠",
                "Salto de Nebulosa",
                "Flujo de Quásar",
                "Jaula de Púlsar",
                "Glaciar Cometa",
                "Verdugo de Nebulosa ☠",
                "Velocidad Luz",
                "Torre de Neutrones",
                "Red de Agujeros de Gusano",
                "Horizonte de Sucesos",
                "Señor del Agujero Negro ☠",
                "Puerta del Trono",
                "Corriente Imperial",
                "Láser Real",
                "Puente de Diamante",
                "Guardia del Trono ☠",
                "Sala Carmesí",
                "Palacio Celeste",
                "Laberinto Final",
                "Umbral del Juicio",
                "Soberano del Universo 👑"
        ],
        "fr": [
                "Vallée Glaciaire",
                "Canyon du Vent",
                "Glacier Laser",
                "Avalanche de Cristal",
                "Roi du Glacier ☠",
                "Chantier Gelé",
                "Col du Blizzard",
                "Abîme Miroir",
                "Tour Polaire",
                "Titan Polaire ☠",
                "Bio-Secteur",
                "Serre à Plasma",
                "Réacteur Laser",
                "Pont Génétique",
                "Bio-Mutant ☠",
                "Turbine Éolienne",
                "Cyber Ascenseur",
                "Laboratoire Quantique",
                "Réacteur Obscur",
                "Essaim Oméga ☠",
                "Port des Nuages",
                "Stratosphère",
                "Lasers Célestes",
                "Nuages de Glace",
                "Amiral de la Tempête ☠",
                "Piste Turbo",
                "Tours Jumelles",
                "Jetée Céleste",
                "Anneau Orbital",
                "Empereur Céleste ☠",
                "Passage du Sphinx",
                "Obélisque du Vent",
                "Lasers Solaires",
                "Pyramide Glaciaire",
                "Garde du Pharaon ☠",
                "Couloir Doré",
                "Temple Céleste",
                "Crypte du Labyrinthe",
                "Autel des Étoiles",
                "Destructeur Ancien ☠",
                "Saut de Nébuleuse",
                "Flux de Quasar",
                "Cage de Pulsar",
                "Glacier Comète",
                "Bourreau de Nébuleuse ☠",
                "Vitesse Lumière",
                "Tour à Neutrons",
                "Toile de Trou de Ver",
                "Horizon des Événements",
                "Seigneur du Trou Noir ☠",
                "Porte du Trône",
                "Courant Impérial",
                "Laser Royal",
                "Pont de Diamant",
                "Garde du Trône ☠",
                "Hall Cramoisi",
                "Palais Céleste",
                "Labyrinthe Final",
                "Seuil de l'Apocalypse",
                "Souverain de l'Univers 👑"
        ]
};

    const TROLL_NAMES_50 = {
        "tr": [
                "Sahte Başlangıç",
                "Uranyum Sürprizi",
                "Kaçan Portal",
                "Tuzak Köprü",
                "Trol Dev ☠",
                "Yay Şakası",
                "Başa Dön!",
                "Gök Pususu",
                "Üçlü İhanet",
                "Nükleer Cellat ☠",
                "Sahte Bayrak",
                "Ters Rüzgar",
                "Atom Yağmuru",
                "Çifte Pusu",
                "Kaos Golemi ☠",
                "Serap Köprüsü",
                "İnatçı Çıkış",
                "Zümrüt Mayın Tarlası",
                "Trol Fırtınası",
                "Siber Soytarı ☠",
                "Sabır Kulesi",
                "Lazer Şakası",
                "Sahte İkizler",
                "Bomba Koridoru",
                "Testere Lordu ☠",
                "Uçan Tuzak",
                "Üçlü Kaçış",
                "Hava İndirmesi",
                "Aldatıcı Viyadük",
                "Gölge Trol ☠",
                "Öfke Patlaması",
                "Radyoaktif Çöküş",
                "Trol Kasırgası",
                "Zümrüt İhaneti",
                "Magma Trolü ☠",
                "Dörtlü Tuzak",
                "Hayalet Zemin",
                "Nükleer Fırtına",
                "Son Saniye Şakası",
                "Plazma Tiranı ☠",
                "Kabus Kapısı",
                "Beşli İhanet",
                "Gökyüzü Ordusu",
                "Sahte Cennet",
                "Hiçlik Trolü ☠",
                "Kaos Senfonisi",
                "3x Kaçan Portal",
                "Atom Cehennemi",
                "Final Eşiği",
                "Trol İmparator 👑"
        ],
        "en": [
                "Fake Start",
                "Uranium Surprise",
                "Running Portal",
                "Trap Bridge",
                "Troll Giant ☠",
                "Prank Springs",
                "Back to Start!",
                "Sky Ambush",
                "Triple Betrayal",
                "Nuclear Boss ☠",
                "Fake Flag",
                "Reverse Wind",
                "Atom Rain",
                "Double Ambush",
                "Chaos Golem ☠",
                "Mirage Bridge",
                "Stubborn Exit",
                "Emerald Minefield",
                "Troll Gale",
                "Cyber Jester ☠",
                "Patience Tower",
                "Laser Prank",
                "Fake Twins",
                "Bomb Corridor",
                "Saw Lord ☠",
                "Flying Trap",
                "Triple Escape",
                "Air Drop",
                "Fakeout Viaduct",
                "Shadow Troll ☠",
                "Rage Quit",
                "Radioactive Collapse",
                "Troll Hurricane",
                "Emerald Betrayal",
                "Magma Troll ☠",
                "Quad Trap",
                "Phantom Floor",
                "Nuclear Storm",
                "Last Second Prank",
                "Plasma Tyrant ☠",
                "Nightmare Gate",
                "Fivefold Betrayal",
                "Sky Army",
                "Fake Paradise",
                "Void Troll ☠",
                "Chaos Symphony",
                "3x Dodging Portal",
                "Atomic Hell",
                "Brink of Finale",
                "Troll Emperor 👑"
        ],
        "ko": [
                "가짜 시작",
                "우라늄 깜짝상자",
                "도망치는 포탈",
                "함정 다리",
                "트롤 거인 ☠",
                "장난 스프링",
                "처음으로!",
                "하늘 기습",
                "삼중 배신",
                "핵 처형자 ☠",
                "가짜 깃발",
                "역풍 돌풍",
                "원자 폭우",
                "이중 기습",
                "혼돈의 골렘 ☠",
                "신기루 다리",
                "완고한 출구",
                "에메랄드 지뢰밭",
                "트롤 강풍",
                "사이버 광대 ☠",
                "인내심의 탑",
                "레이저 장난",
                "가짜 쌍둥이",
                "폭탄 복도",
                "톱날 군주 ☠",
                "날아오는 함정",
                "삼중 탈출",
                "공중 투하",
                "속임수 육교",
                "그림자 트롤 ☠",
                "분노의 탈주",
                "방사능 붕괴",
                "트롤 허리케인",
                "에메랄드 배신",
                "마그마 트롤 ☠",
                "4단 함정",
                "유령 바닥",
                "원자 폭풍",
                "마지막 1초 장난",
                "플라즈마 폭군 ☠",
                "악몽의 관문",
                "오중 배신",
                "하늘 군단",
                "가짜 낙원",
                "공허의 트롤 ☠",
                "혼돈의 교향곡",
                "3연속 회피 포탈",
                "원자 지옥",
                "피날레의 문턱",
                "트롤 황제 👑"
        ],
        "ja": [
                "偽のスタート",
                "ウランサプライズ",
                "逃走ポータル",
                "罠の橋",
                "トロール巨人 ☠",
                "ドッキリバネ",
                "最初に戻る！",
                "空からの奇襲",
                "三重の裏切り",
                "核の処刑人 ☠",
                "偽フラッグ",
                "逆風の突風",
                "アトムレイン",
                "二重の奇襲",
                "混沌のゴーレム ☠",
                "蜃気楼の橋",
                "頑固な出口",
                "エメラルド地雷原",
                "トロール疾風",
                "サイバー道化師 ☠",
                "忍耐の塔",
                "レーザードッキリ",
                "偽りの双子",
                "爆弾回廊",
                "回転鋸の覇者 ☠",
                "飛来する罠",
                "三重脱出",
                "エアドロップ",
                "欺きの高架橋",
                "シャドートロール ☠",
                "怒りの即抜け",
                "放射能崩壊",
                "トロールハリケーン",
                "エメラルドの裏切り",
                "マグマトロール ☠",
                "四重の罠",
                "亡霊の床",
                "アトミックストーム",
                "ラスト1秒の罠",
                "プラズマ暴君 ☠",
                "悪夢の門",
                "五重の裏切り",
                "天空軍団",
                "偽りの楽園",
                "虚空のトロール ☠",
                "混沌の交響曲",
                "3回逃げるポータル",
                "アトミックヘル",
                "フィナーレの瀬戸際",
                "トロール皇帝 👑"
        ],
        "zh": [
                "虚假开局",
                "铀弹惊喜",
                "逃跑传送门",
                "陷阱桥梁",
                "巨魔泰坦 ☠",
                "恶作剧弹簧",
                "重回起点！",
                "天降突袭",
                "三重背叛",
                "核爆处决者 ☠",
                "假关卡旗",
                "逆向强风",
                "原子暴雨",
                "双重伏击",
                "混沌魔像 ☠",
                "海市蜃楼桥",
                "固执出口",
                "翡翠地雷阵",
                "巨魔狂风",
                "赛博小丑 ☠",
                "耐力高塔",
                "激光恶作剧",
                "虚假双子",
                "炸弹走廊",
                "电锯领主 ☠",
                "飞来陷阱",
                "三重逃脱",
                "空降埋伏",
                "欺诈高架桥",
                "暗影巨魔 ☠",
                "怒退游戏",
                "辐射崩塌",
                "巨魔飓风",
                "翡翠背叛",
                "熔岩巨魔 ☠",
                "四重陷阱",
                "幽灵地面",
                "原子风暴",
                "最后一秒恶作剧",
                "等离子暴君 ☠",
                "噩梦之门",
                "五重背叛",
                "天空大军",
                "虚假天堂",
                "虚空巨魔 ☠",
                "混沌交响曲",
                "3次瞬移逃避门",
                "原子炼狱",
                "终局门槛",
                "巨魔皇帝 👑"
        ],
        "ru": [
                "Ложный Старт",
                "Урановый Сюрприз",
                "Убегающий Портал",
                "Мост-Ловушка",
                "Тролль-Гигант ☠",
                "Пружина-Пранк",
                "Назад на Старт!",
                "Засада с Неба",
                "Тройное Предательство",
                "Ядерный Палач ☠",
                "Фальшивый Флаг",
                "Встречный Ветер",
                "Атомный Дождь",
                "Двойная Засада",
                "Голем Хаоса ☠",
                "Мост-Мираж",
                "Упрямый Выход",
                "Минное Поле Изумрудов",
                "Тролль-Буря",
                "Кибер-Шут ☠",
                "Башня Терпения",
                "Лазерный Пранк",
                "Фальшивые Близнецы",
                "Коридор Бомб",
                "Повелитель Пил ☠",
                "Летающая Ловушка",
                "Тройной Побег",
                "Воздушный Десант",
                "Коварный Виадук",
                "Теневой Тролль ☠",
                "Ярость и Выход",
                "Радиационный Обвал",
                "Тролль-Ураган",
                "Изумрудное Предательство",
                "Магма-Тролль ☠",
                "Четверная Ловушка",
                "Призрачный Пол",
                "Ядерный Шторм",
                "Пранк Последней Секунды",
                "Плазменный Тиран ☠",
                "Врата Кошмара",
                "Пятикратное Предательство",
                "Небесная Армия",
                "Фальшивый Рай",
                "Тролль Пустоты ☠",
                "Симфония Хаоса",
                "3x Убегающий Портал",
                "Атомный Ад",
                "Порог Финала",
                "Тролль-Император 👑"
        ],
        "it": [
                "Falsa Partenza",
                "Sorpresa all'Uranio",
                "Portale in Fuga",
                "Ponte Trappola",
                "Troll Gigante ☠",
                "Molla a Sorpresa",
                "Torna all'Inizio!",
                "Imboscata dal Cielo",
                "Triplo Tradimento",
                "Boia Nucleare ☠",
                "Falsa Bandiera",
                "Vento Contrario",
                "Pioggia Atomica",
                "Doppia Imboscata",
                "Golem del Caos ☠",
                "Ponte Miraggio",
                "Uscita Ostinata",
                "Campo Minato di Smeraldi",
                "Tempesta Troll",
                "Giullare Cyber ☠",
                "Torre della Pazienza",
                "Scherzo Laser",
                "Gemelli Falsi",
                "Corridoio delle Bombe",
                "Signore della Sega ☠",
                "Trappola Volante",
                "Fuga Tripla",
                "Lancio Aereo",
                "Viadotto Ingannatore",
                "Troll Ombra ☠",
                "Rage Quit",
                "Crollo Radioattivo",
                "Uragano Troll",
                "Tradimento dello Smeraldo",
                "Troll di Magma ☠",
                "Trappola Quadrupla",
                "Pavimento Fantasma",
                "Tempesta Nucleare",
                "Scherzo all'Ultimo Secondo",
                "Tiranno al Plasma ☠",
                "Porta dell'Incubo",
                "Quintuplo Tradimento",
                "Esercito Celeste",
                "Falso Paradiso",
                "Troll del Vuoto ☠",
                "Sinfonia del Caos",
                "Portale che Schiva 3x",
                "Inferno Atomico",
                "Soglia del Finale",
                "Imperatore Troll 👑"
        ],
        "es": [
                "Falso Comienzo",
                "Sorpresa de Uranio",
                "Portal que Huye",
                "Puente Trampa",
                "Troll Gigante ☠",
                "Muelle de Broma",
                "¡Vuelve al Inicio!",
                "Emboscada Celestial",
                "Triple Traición",
                "Verdugo Nuclear ☠",
                "Bandera Falsa",
                "Viento En Contra",
                "Lluvia Atómica",
                "Doble Emboscada",
                "Gólem del Caos ☠",
                "Puente Espejismo",
                "Salida Obstinada",
                "Campo Minado de Esmeraldas",
                "Vendaval Troll",
                "Bufón Cyber ☠",
                "Torre de la Paciencia",
                "Broma Láser",
                "Gemelos Falsos",
                "Corredor de Bombas",
                "Señor de la Sierra ☠",
                "Trampa Voladora",
                "Triple Escape",
                "Lanzamiento Aéreo",
                "Viaducto Tramposo",
                "Troll Sombra ☠",
                "Ataque de Rabia",
                "Colapso Radiactivo",
                "Huracán Troll",
                "Traición de la Esmeralda",
                "Troll de Magma ☠",
                "Trampa Cuádruple",
                "Suelo Fantasma",
                "Tormenta Nuclear",
                "Broma de Último Segundo",
                "Tirano de Plasma ☠",
                "Puerta de Pesadilla",
                "Quíntuple Traición",
                "Ejército Celeste",
                "Falso Paraíso",
                "Troll del Vacío ☠",
                "Sinfonía del Caos",
                "Portal que Esquiva 3x",
                "Infierno Atómico",
                "Umbral del Final",
                "Emperador Troll 👑"
        ],
        "fr": [
                "Faux Départ",
                "Surprise à l'Uranium",
                "Portail en Fuite",
                "Pont Piégé",
                "Troll Géant ☠",
                "Ressort Farceur",
                "Retour au Départ !",
                "Embuscade Aérienne",
                "Triple Trahison",
                "Bourreau Nucléaire ☠",
                "Faux Drapeau",
                "Vent Contraire",
                "Pluie Atomique",
                "Double Embuscade",
                "Golem du Chaos ☠",
                "Pont Mirage",
                "Sortie Têtue",
                "Champ de Mines d'Émeraudes",
                "Bourrasque Troll",
                "Bouffon Cyber ☠",
                "Tour de la Patience",
                "Farce Laser",
                "Faux Jumeaux",
                "Couloir de Bombes",
                "Seigneur de la Scie ☠",
                "Piège Volant",
                "Triple Évasion",
                "Largage Aérien",
                "Viaduc Trompeur",
                "Troll de l'Ombre ☠",
                "Crise de Nerfs",
                "Effondrement Radioactif",
                "Ouragan Troll",
                "Trahison de l'Émeraude",
                "Troll de Magma ☠",
                "Quadruple Piège",
                "Sol Fantôme",
                "Tempête Nucléaire",
                "Farce de Dernière Seconde",
                "Tyran Plasma ☠",
                "Porte du Cauchemar",
                "Quintuple Trahison",
                "Armée Céleste",
                "Faux Paradis",
                "Troll du Vide ☠",
                "Symphonie du Chaos",
                "Portail qui Esquive 3x",
                "Enfer Atomique",
                "Seuil de la Fin",
                "Empereur Troll 👑"
        ]
};


    // Full 9-Language Privacy Policy & Onboarding Consent Catalog
window.MARINEXT_TUTORIAL_DATA = {
    "tr": {
        "modalTitle": "Başlangıç Rehberi & Temel Kontroller",
        "skipBtn": "Rehberi Atla ✕",
        "prevBtn": "◀ Geri",
        "nextBtn": "İleri ▶",
        "finishBtn": "ANLADIM, OYUNA BAŞLA! 🚀",
        "stepWord": "Adım",
        "rateModalTitle": "Marinext 2100'ü Beğendiniz mi?",
        "rateModalDesc": "Oyun deneyiminizi daha da güzelleştirmek için geliştirici ekibimize Google Play'de 5 yıldız vererek destek olabilirsiniz!",
        "rateActionNow": "⭐ 5 YILDIZ VER & PUANLA ▶",
        "rateActionFeedback": "💬 Öneri / Hata Bildir",
        "rateActionLater": "Daha Sonra ✕",
        "btnSettingsRate": "⭐ Oyunu Puanla & Değerlendir (Google Play)",
        "btnSettingsTutorial": "📖 Başlangıç Kılavuzu & Rehberi İncele",
        "steps": [
            {
                "badge": "Haraket ve Koşma",
                "icon": "🏃‍♂️",
                "title": "Sol ve Sağ Hareket Tuşları",
                "desc": "Ekranın sol altındaki <strong>◀ Sol</strong> ve <strong>▶ Sağ</strong> dokunmatik butonlarıyla kahramanınızı yönlendirebilirsiniz. Klavye ile oynuyorsanız <strong>A / D</strong> tuşlarını da kullanabilirsiniz."
            },
            {
                "badge": "Zıplama & Duvar Sıçraması",
                "icon": "🧗‍♂️",
                "title": "Yüksek Zıplama & Duvardan Sekme",
                "desc": "Ekranın sağ altındaki <strong>▲ Zıpla</strong> tuşuna basarak tuzakların üzerinden atlayın. Dik duvarlara tırmanmak için <em>duvara değer değmez tekrar zıplayın</em> (Duvardan Sekme / Wall Jump)!"
            },
            {
                "badge": "Gizemli Bloklar & Yetenekler",
                "icon": "📦",
                "title": "[?] Bloklarından Güç Kazanın",
                "desc": "Sarı renkli <strong>[?]</strong> bloklarına alttan kafanızla vurarak <strong>🔥 Ateş Topu</strong>, <strong>🛡️ Koruma Kalkanı</strong> ve <strong>⚡ Hız İksiri</strong> kazanın. Ateş topuyla düşmanları uzaktan yok edin!"
            },
            {
                "badge": "Asansörler & Yeraltı Görevleri",
                "icon": "🛗",
                "title": "Hareketli Asansörler ile Yeraltına İnin",
                "desc": "Bölümlerdeki <strong>🛗 hareketli asansör kabinine</strong> bindiğinizde gizli yeraltı sektörlerine inersiniz. Yeraltındaki <strong>★ Görev Yıldızlarını</strong> toplayarak devasa bonus puan ve coin kazanın!"
            }
        ]
    },
    "en": {
        "modalTitle": "Beginner Guide & Basic Controls",
        "skipBtn": "Skip Guide ✕",
        "prevBtn": "◀ Back",
        "nextBtn": "Next ▶",
        "finishBtn": "GOT IT, LET'S PLAY! 🚀",
        "stepWord": "Step",
        "rateModalTitle": "Enjoying Marinext 2100?",
        "rateModalDesc": "Support our indie development team by rating us 5 stars on Google Play! Your feedback helps us build more epic levels!",
        "rateActionNow": "⭐ RATE 5 STARS ON PLAY STORE ▶",
        "rateActionFeedback": "💬 Send Feedback / Bug Report",
        "rateActionLater": "Maybe Later ✕",
        "btnSettingsRate": "⭐ Rate & Review on Google Play",
        "btnSettingsTutorial": "📖 Beginner Walkthrough & Guide",
        "steps": [
            {
                "badge": "Movement & Running",
                "icon": "🏃‍♂️",
                "title": "Left & Right Movement Controls",
                "desc": "Steer your hero using the on-screen <strong>◀ Left</strong> and <strong>▶ Right</strong> directional buttons. On keyboard, you can also use <strong>A / D</strong> keys."
            },
            {
                "badge": "Jump & Wall Bounce",
                "icon": "🧗‍♂️",
                "title": "High Jumps & Wall Bouncing",
                "desc": "Tap the <strong>▲ Jump</strong> button to leap over hazards. When touching sheer walls, tap jump again immediately to perform a <em>Wall Jump</em>!"
            },
            {
                "badge": "Mystery Blocks & Power-ups",
                "icon": "📦",
                "title": "Hit [?] Blocks from Below",
                "desc": "Hit yellow <strong>[?]</strong> blocks with your head from underneath to unleash <strong>🔥 Fireballs</strong>, <strong>🛡️ Energy Shields</strong>, and <strong>⚡ Speed Boosts</strong>!"
            },
            {
                "badge": "Elevators & Underground Missions",
                "icon": "🛗",
                "title": "Ride Cyber Elevators Underground",
                "desc": "Step onto <strong>🛗 moving elevator cabins</strong> to descend into hidden underground sub-chambers. Collect all <strong>★ Mission Stars</strong> to earn huge bonus coins & crystals!"
            }
        ]
    },
    "ko": {
        "modalTitle": "초보자 가이드 & 기본 조작법",
        "skipBtn": "가이드 건너뛰기 ✕",
        "prevBtn": "◀ 이전",
        "nextBtn": "다음 ▶",
        "finishBtn": "확인 완료, 게임 시작! 🚀",
        "stepWord": "단계",
        "rateModalTitle": "Marinext 2100을 재미있게 즐기고 계신가요?",
        "rateModalDesc": "Google Play에서 별점 5점을 주시면 인디 개발팀에 큰 힘이 됩니다! 여러분의 리뷰는 더 멋진 스테이지를 만드는 원동력입니다.",
        "rateActionNow": "⭐ Google Play 별점 5점 평가하기 ▶",
        "rateActionFeedback": "💬 의견 / 버그 제보",
        "rateActionLater": "나중에 하기 ✕",
        "btnSettingsRate": "⭐ Google Play에서 게임 평가하기",
        "btnSettingsTutorial": "📖 초보자 튜토리얼 & 가이드 다시보기",
        "steps": [
            {
                "badge": "이동 및 달리기",
                "icon": "🏃‍♂️",
                "title": "좌우 이동 컨트롤",
                "desc": "화면 왼쪽 아래의 <strong>◀ 왼쪽</strong> 및 <strong>▶ 오른쪽</strong> 버튼으로 영웅을 조작하세요. 키보드 플레이 시 <strong>A / D</strong> 키도 사용할 수 있습니다."
            },
            {
                "badge": "점프 & 벽 타기",
                "icon": "🧗‍♂️",
                "title": "높은 점프 & 벽 점프 기술",
                "desc": "화면 오른쪽 아래의 <strong>▲ 점프</strong> 버튼을 눌러 함정을 뛰어넘으세요. 벽에 닿았을 때 점프를 다시 누르면 <em>벽 차기 점프(Wall Jump)</em>가 발동합니다!"
            },
            {
                "badge": "미스터리 블록 & 파워업",
                "icon": "📦",
                "title": "[?] 블록을 아래에서 타격하세요",
                "desc": "노란색 <strong>[?]</strong> 블록을 아래에서 머리로 쳐서 <strong>🔥 파이어볼</strong>, <strong>🛡️ 보호막</strong>, <strong>⚡ 속도 부스트</strong>를 획득하세요!"
            },
            {
                "badge": "엘리베이터 & 지하 미션",
                "icon": "🛗",
                "title": "사이버 엘리베이터를 타고 지하로 이동",
                "desc": "스테이지 곳곳의 <strong>🛗 움직이는 엘리베이터</strong>에 탑승하면 숨겨진 지하 서브 챔버로 진입합니다. 지하의 <strong>★ 미션 스타</strong>를 모아 보너스 코인을 획득하세요!"
            }
        ]
    },
    "ja": {
        "modalTitle": "初心者ガイド＆基本操作チュートリアル",
        "skipBtn": "スキップ ✕",
        "prevBtn": "◀ 戻る",
        "nextBtn": "次へ ▶",
        "finishBtn": "理解した、プレイ開始！ 🚀",
        "stepWord": "ステップ",
        "rateModalTitle": "Marinext 2100 を楽しんでいただけましたか？",
        "rateModalDesc": "Google Play で ★5 評価をいただけると開発チームの大きな励みになります！より素晴らしいステージ作りにご協力ください。",
        "rateActionNow": "⭐ Google Play で ★5 評価する ▶",
        "rateActionFeedback": "💬 ご意見・バグ報告",
        "rateActionLater": "後で ✕",
        "btnSettingsRate": "⭐ Google Play で評価＆レビュー",
        "btnSettingsTutorial": "📖 初心者操作ガイドを確認",
        "steps": [
            {
                "badge": "移動とダッシュ",
                "icon": "🏃‍♂️",
                "title": "左右の移動操作",
                "desc": "画面左下の <strong>◀ 左</strong> と <strong>▶ 右</strong> ボタンでキャラクターを走らせます。キーボードでは <strong>A / D</strong> キーも使えます。"
            },
            {
                "badge": "ジャンプ＆壁キック",
                "icon": "🧗‍♂️",
                "title": "大ジャンプと壁蹴りアクション",
                "desc": "画面右下の <strong>▲ ジャンプ</strong> でトラップを飛び越えます。壁に触れた瞬間に再度ジャンプを押すと<em>壁キック（Wall Jump）</em>が可能です！"
            },
            {
                "badge": "ハテナブロック＆パワーアップ",
                "icon": "📦",
                "title": "[?] ブロックを下から叩こう",
                "desc": "黄色の <strong>[?]</strong> ブロックを下から頭突きすると、<strong>🔥 火の玉</strong>、<strong>🛡️ シールド</strong>、<strong>⚡ スピードアップ</strong>が出現します！"
            },
            {
                "badge": "エレベーター＆地下ミッション",
                "icon": "🛗",
                "title": "動くエレベーターで地下エリアへ潜入",
                "desc": "ステージ内の<strong>🛗 移動エレベーター</strong>に乗ると地下秘密チャンバーへ移動します。<strong>★ ミッションスター</strong>を全て集めてボーナス報酬をゲットしよう！"
            }
        ]
    },
    "zh": {
        "modalTitle": "新手入门指南与基础操作",
        "skipBtn": "跳过指引 ✕",
        "prevBtn": "◀ 上一步",
        "nextBtn": "下一步 ▶",
        "finishBtn": "明白了，开始冒险！ 🚀",
        "stepWord": "步骤",
        "rateModalTitle": "喜欢 Marinext 2100 吗？",
        "rateModalDesc": "欢迎在 Google Play 上为我们点亮 5 星好评！您的支持是我们持续打造史诗关卡的最大动力！",
        "rateActionNow": "⭐ 在 Play 商店给予 5 星好评 ▶",
        "rateActionFeedback": "💬 建议或反馈",
        "rateActionLater": "以后再说 ✕",
        "btnSettingsRate": "⭐ 在 Google Play 评价游戏",
        "btnSettingsTutorial": "📖 查看新手玩法指引",
        "steps": [
            {
                "badge": "移动与奔跑",
                "icon": "🏃‍♂️",
                "title": "左右方向控制",
                "desc": "使用屏幕左下方的 <strong>◀ 左</strong> 与 <strong>▶ 右</strong> 按键操控英雄。使用键盘时也可按 <strong>A / D</strong> 键移动。"
            },
            {
                "badge": "跳跃与蹬墙跳",
                "icon": "🧗‍♂️",
                "title": "强力跳跃与蹬墙反弹",
                "desc": "点击右下方的 <strong>▲ 跳跃</strong> 键跃过险境。碰到垂直墙壁时立刻再次按跳跃，即可施展<em>蹬墙跳 (Wall Jump)</em>！"
            },
            {
                "badge": "神秘问号砖块",
                "icon": "📦",
                "title": "从下方顶开 [?] 砖块",
                "desc": "用头部顶开黄色 <strong>[?]</strong> 问号砖块，获取 <strong>🔥 火球魔法</strong>、<strong>🛡️ 能量护盾</strong> 及 <strong>⚡ 疾跑加速</strong>！"
            },
            {
                "badge": "升降电梯与地下关卡",
                "icon": "🛗",
                "title": "乘坐移动电梯进入地下隐藏密室",
                "desc": "站上关卡中的<strong>🛗 动态电梯</strong>即可下潜进入地下深处。收集地下<strong>★ 任务星</strong>赢取海量金币与翡翠！"
            }
        ]
    },
    "ru": {
        "modalTitle": "Руководство для новичков и управление",
        "skipBtn": "Пропустить ✕",
        "prevBtn": "◀ Назад",
        "nextBtn": "Вперед ▶",
        "finishBtn": "ПОНЯТНО, В БОЙ! 🚀",
        "stepWord": "Шаг",
        "rateModalTitle": "Вам нравится Marinext 2100?",
        "rateModalDesc": "Поддержите нашу инди-команду, поставив 5 звёзд в Google Play! Ваши отзывы вдохновляют нас на создание новых уровней!",
        "rateActionNow": "⭐ ПОСТАВИТЬ 5 ЗВЁЗД В PLAY STORE ▶",
        "rateActionFeedback": "💬 Отправить отзыв / Ошибку",
        "rateActionLater": "Позже ✕",
        "btnSettingsRate": "⭐ Оценить игру в Google Play",
        "btnSettingsTutorial": "📖 Обучение и руководство новичка",
        "steps": [
            {
                "badge": "Движение и бег",
                "icon": "🏃‍♂️",
                "title": "Кнопки движения влево и вправо",
                "desc": "Управляйте героем с помощью кнопок <strong>◀ Влево</strong> и <strong>▶ Вправо</strong> внизу экрана. На клавиатуре используйте клавиши <strong>A / D</strong>."
            },
            {
                "badge": "Прыжок и отскок от стены",
                "icon": "🧗‍♂️",
                "title": "Высокие прыжки и Wall Jump",
                "desc": "Нажимайте <strong>▲ Прыжок</strong> для преодоления препятствий. Коснувшись стены, сразу нажмите прыжок повторно, чтобы совершить <em>отскок от стены (Wall Jump)</em>!"
            },
            {
                "badge": "Блоки с вопросом [?]",
                "icon": "📦",
                "title": "Выбивайте бонусы головой",
                "desc": "Бейте снизу по жёлтым блокам <strong>[?]</strong>, чтобы получить <strong>🔥 Огненные шары</strong>, <strong>🛡️ Защитный щит</strong> и <strong>⚡ Ускорение</strong>!"
            },
            {
                "badge": "Лифты и подземные миссии",
                "icon": "🛗",
                "title": "Спускайтесь на кибер-лифтах",
                "desc": "Встаньте в <strong>🛗 движущуюся кабину лифта</strong>, чтобы спуститься в подземный сектор. Соберите все <strong>★ Звезды миссии</strong> для супер-награды!"
            }
        ]
    },
    "it": {
        "modalTitle": "Guida per Principianti e Comandi",
        "skipBtn": "Salta Guida ✕",
        "prevBtn": "◀ Indietro",
        "nextBtn": "Avanti ▶",
        "finishBtn": "HO CAPITO, GIOCHIAMO! 🚀",
        "stepWord": "Passo",
        "rateModalTitle": "Ti piace Marinext 2100?",
        "rateModalDesc": "Sostieni il nostro team indie votandoci con 5 stelle su Google Play! Il tuo supporto ci aiuta a creare livelli sempre più epici!",
        "rateActionNow": "⭐ VOTA 5 STELLE SU PLAY STORE ▶",
        "rateActionFeedback": "💬 Segnala un problema",
        "rateActionLater": "Più tardi ✕",
        "btnSettingsRate": "⭐ Valuta il Gioco su Google Play",
        "btnSettingsTutorial": "📖 Guida e Comandi di Base",
        "steps": [
            {
                "badge": "Movimento e Corsa",
                "icon": "🏃‍♂️",
                "title": "Comandi di Movimento",
                "desc": "Usa i tasti a schermo <strong>◀ Sinistra</strong> e <strong>▶ Destra</strong> per muoverti. Da tastiera puoi usare anche <strong>A / D</strong>."
            },
            {
                "badge": "Salto e Rimbalzo a Parete",
                "icon": "🧗‍♂️",
                "title": "Grandi Salti e Wall Jump",
                "desc": "Premi <strong>▲ Salta</strong> per superare le trappole. Quando tocchi un muro, salta di nuovo per eseguire un <em>Wall Jump</em>!"
            },
            {
                "badge": "Blocchi Misteriosi [?]",
                "icon": "📦",
                "title": "Colpisci i blocchi dal basso",
                "desc": "Colpisci i blocchi gialli <strong>[?]</strong> con la testa per ottenere <strong>🔥 Palle di fuoco</strong>, <strong>🛡️ Scudi</strong> e <strong>⚡ Super velocità</strong>!"
            },
            {
                "badge": "Ascensori e Zone Segrete",
                "icon": "🛗",
                "title": "Scendi nei sotterranei con l'ascensore",
                "desc": "Entra nella <strong>🛗 cabina ascensore</strong> per scendere nei settori sotterranei. Raccogli le <strong>★ Stelle Missione</strong> per ricchi premi!"
            }
        ]
    },
    "es": {
        "modalTitle": "Guía para Principiantes y Controles",
        "skipBtn": "Saltar Guía ✕",
        "prevBtn": "◀ Atrás",
        "nextBtn": "Siguiente ▶",
        "finishBtn": "¡ENTENDIDO, A JUGAR! 🚀",
        "stepWord": "Paso",
        "rateModalTitle": "¿Te está gustando Marinext 2100?",
        "rateModalDesc": "¡Apoya a nuestro equipo independiente calificándonos con 5 estrellas en Google Play! Tus reseñas nos inspiran a crear más niveles épicos.",
        "rateActionNow": "⭐ CALIFICAR CON 5 ESTRELLAS ▶",
        "rateActionFeedback": "💬 Enviar Sugerencia / Error",
        "rateActionLater": "Más tarde ✕",
        "btnSettingsRate": "⭐ Calificar en Google Play",
        "btnSettingsTutorial": "📖 Ver Guía de Inicio y Controles",
        "steps": [
            {
                "badge": "Movimiento y Carrera",
                "icon": "🏃‍♂️",
                "title": "Botones de Movimiento",
                "desc": "Controla a tu personaje con los botones táctiles <strong>◀ Izquierda</strong> y <strong>▶ Derecha</strong>. Con teclado también puedes usar <strong>A / D</strong>."
            },
            {
                "badge": "Salto y Rebote en Paredes",
                "icon": "🧗‍♂️",
                "title": "Saltos Altos y Wall Jump",
                "desc": "Toca <strong>▲ Salto</strong> para superar peligros. ¡Al tocar una pared vertical, presiona salto nuevamente para hacer un <em>Wall Jump</em>!"
            },
            {
                "badge": "Bloques Sorpresa [?]",
                "icon": "📦",
                "title": "Golpea bloques desde abajo",
                "desc": "Golpea los bloques amarillos <strong>[?]</strong> para obtener <strong>🔥 Bolas de fuego</strong>, <strong>🛡️ Escudos protectores</strong> y <strong>⚡ Impulso de velocidad</strong>."
            },
            {
                "badge": "Ascensores y Misiones Subterráneas",
                "icon": "🛗",
                "title": "Baja a las cámaras ocultas en ascensor",
                "desc": "Sube a las <strong>🛗 cabinas móviles de ascensor</strong> para bajar al sector subterráneo. ¡Recoge las <strong>★ Estrellas de Misión</strong> para ganar monedas extra!"
            }
        ]
    },
    "fr": {
        "modalTitle": "Guide du Débutant et Commandes",
        "skipBtn": "Passer ✕",
        "prevBtn": "◀ Retour",
        "nextBtn": "Suivant ▶",
        "finishBtn": "COMPRIS, C'EST PARTI ! 🚀",
        "stepWord": "Étape",
        "rateModalTitle": "Vous aimez Marinext 2100 ?",
        "rateModalDesc": "Soutenez notre équipe de développement indépendante en nous donnant 5 étoiles sur Google Play ! Vos avis nous aident énormément.",
        "rateActionNow": "⭐ NOTER 5 ÉTOILES SUR PLAY STORE ▶",
        "rateActionFeedback": "💬 Envoyer un commentaire",
        "rateActionLater": "Plus tard ✕",
        "btnSettingsRate": "⭐ Noter sur Google Play",
        "btnSettingsTutorial": "📖 Guide Débutant & Commandes",
        "steps": [
            {
                "badge": "Déplacement et Course",
                "icon": "🏃‍♂️",
                "title": "Commandes de Direction",
                "desc": "Déplacez votre héros avec les boutons tactiles <strong>◀ Gauche</strong> et <strong>▶ Droite</strong>. Sur clavier, utilisez <strong>A / D</strong>."
            },
            {
                "badge": "Saut et Rebond Mural",
                "icon": "🧗‍♂️",
                "title": "Sauts et Wall Jump",
                "desc": "Appuyez sur <strong>▲ Saut</strong> pour franchir les obstacles. En touchant un mur vertical, sautez à nouveau pour effectuer un <em>Wall Jump</em> !"
            },
            {
                "badge": "Blocs Mystères [?]",
                "icon": "📦",
                "title": "Frappez les blocs par en dessous",
                "desc": "Frappez les blocs jaunes <strong>[?]</strong> par le bas pour libérer des <strong>🔥 Boules de feu</strong>, <strong>🛡️ Boucliers</strong> et <strong>⚡ Boosts de vitesse</strong> !"
            },
            {
                "badge": "Ascenseurs et Zones Secrètes",
                "icon": "🛗",
                "title": "Descendez dans les chambres secrètes",
                "desc": "Montez dans la <strong>🛗 cabine d'ascenseur mobile</strong> pour explorer les sous-sols secrets. Récupérez toutes les <strong>★ Étoiles de Mission</strong> pour remporter le jackpot !"
            }
        ]
    }
};

    window.MARINEXT_PRIVACY_SUMMARIES = {
        "tr": {
                "title": "🛡️ Marinext 2100 — Gizlilik Politikası",
                "meta": "Geliştirici: <strong>CG Studio Home</strong> | Paket: <code>com.cgstudiohome.marinext2100</code> | İletişim: <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇹🇷 Veri Toplama &amp; Saklama:</strong> <strong>Marinext 2100</strong> kişisel kimlik verilerinizi (isim, telefon, rehber, konum) toplamaz. Oyun ilerlemeniz, kazandığınız paralar ve açtığınız bölümler yerel cihaz hafızanızda saklanır. Dilerseniz <strong>Google Play Games Services</strong> ile ilerlemenizi kendi <strong>Google Drive</strong> alanınıza güvenle yedekleyebilir ve cihaz değiştirseniz bile kaldığınız yerden devam edebilirsiniz. Verilerinizi dilediğiniz zaman <em>Ayarlar &gt; Tüm Oyun İlerlemesini Sıfırla</em> seçeneğiyle silebilirsiniz."
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 Reklam &amp; Üçüncü Taraf SDK'lar (Google AdMob):</strong> Oyunumuzu ücretsiz sunmak amacıyla <strong>Google AdMob</strong> kullanılmaktadır. Google AdMob; sıklık sınırı (frequency capping), reklam performansı ve sahtekarlık önleme amacıyla cihazınızın Reklam Kimliğini (AAID) ve yaklaşık IP tabanlı bölge bilgisini işleyebilir. Oyun içinde asla zorunlu tam ekran reklam çıkmaz; tüm ödüllü videolar tamamen isteğe bağlıdır."
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 Çocuk Güvenliği &amp; GDPR / KVKK:</strong> Oyunumuz 13 yaşından küçük çocuklardan bilerek veri toplamaz. Avrupa Ekonomik Alanı (AB/AEA) veya Birleşik Krallık'ta iseniz <em>Ayarlar &gt; Reklam &amp; Gizlilik Tercihleri</em> üzerinden Google UMP rıza formuna her zaman erişebilirsiniz."
                        }
                ],
                "webLabel": "Resmi Web Gizlilik Politikası:",
                "contactLabel": "İletişim / Contact:",
                "openWebBtn": "🌐 Web Tarayıcıda Aç",
                "closeBtn": "OKUDUM VE KAPAT ✓"
        },
        "en": {
                "title": "🛡️ Marinext 2100 — Privacy Policy",
                "meta": "Developer: <strong>CG Studio Home</strong> | Package: <code>com.cgstudiohome.marinext2100</code> | Contact: <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇬🇧 Data Collection &amp; Storage:</strong> <strong>Marinext 2100</strong> does not collect personal identifiers (name, phone, contacts, location). Game progress, coins, and levels are saved locally on your device. You can optionally link <strong>Google Play Games Services</strong> to back up your progress to your personal <strong>Google Drive</strong> across devices. You can erase all data at any time via <em>Settings &gt; Reset All Game Progress</em>."
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 Advertising &amp; Third Parties (Google AdMob):</strong> We use <strong>Google AdMob</strong> to keep the game free to play. AdMob may process your device's Google Advertising ID (AAID) and coarse IP location for frequency capping and fraud prevention. Active gameplay is never interrupted by forced fullscreen ads; rewarded videos are 100% optional."
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 Children's Privacy &amp; GDPR:</strong> We do not knowingly collect personal information from children under 13. EEA & UK users can manage Google UMP consent preferences at any time in <em>Settings &gt; Ad &amp; Privacy Preferences</em>."
                        }
                ],
                "webLabel": "Official Web Privacy Policy:",
                "contactLabel": "Contact / Support:",
                "openWebBtn": "🌐 Open in Web Browser",
                "closeBtn": "I HAVE READ & CLOSE ✓"
        },
        "ko": {
                "title": "🛡️ Marinext 2100 — 개인정보 처리방침",
                "meta": "개발사: <strong>CG Studio Home</strong> | 패키지: <code>com.cgstudiohome.marinext2100</code> | 문의: <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇰🇷 데이터 수집 및 저장:</strong> <strong>Marinext 2100</strong>은 이름, 전화번호, 연락처, 정밀 위치 등 개인 식별 정보를 일체 수집하지 않습니다. 모든 게임 진행 상황은 기기 내부에 저장되며, 원하실 경우 <strong>Google Play Games Services</strong>를 통해 개인 <strong>Google Drive</strong>에 클라우드 백업할 수 있습니다. <em>설정 &gt; 모든 게임 진행 상황 초기화</em>를 통해 언제든지 모든 데이터를 삭제할 수 있습니다."
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 광고 및 타사 SDK (Google AdMob):</strong> 본 게임은 무료 제공을 위해 <strong>Google AdMob</strong>을 사용합니다. AdMob은 광고 빈도 제한 및 부정 방지를 위해 Google 광고 ID(AAID)와 대략적인 위치 정보를 처리할 수 있습니다. 플레이 중 강제 전면 광고는 절대 노출되지 않으며, 보상형 광고는 100% 선택 사항입니다."
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 어린이 보호 및 규정 준수:</strong> 만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다. <em>설정 &gt; 광고 및 개인정보 설정</em>에서 언제든지 광고 및 동의 상태를 검토하실 수 있습니다."
                        }
                ],
                "webLabel": "공식 웹 개인정보 처리방침:",
                "contactLabel": "개발자 문의:",
                "openWebBtn": "🌐 웹 브라우저에서 열기",
                "closeBtn": "확인 및 닫기 ✓"
        },
        "ja": {
                "title": "🛡️ Marinext 2100 — プライバシーポリシー",
                "meta": "開発者: <strong>CG Studio Home</strong> | パッケージ: <code>com.cgstudiohome.marinext2100</code> | 連絡先: <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇯🇵 データの収集と保存:</strong> <strong>Marinext 2100</strong>はお客様の氏名、電話番号、位置情報などの個人情報を収集しません。進行状況は端末内に安全に保存され、必要に応じて<strong>Google Play Games Services</strong>を通じてご自身の<strong>Google Drive</strong>にクラウド保存できます。いつでも<em>設定 &gt; 全進行状況をリセット</em>から削除可能です。"
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 広告とサードパーティ (Google AdMob):</strong> 無料プレイ提供のため<strong>Google AdMob</strong>を使用しています。広告ID(AAID)やおよその地域情報が広告配信や不正防止に用いられます。プレイ中の強制全画面広告は一切なく、リワード広告は完全任意です。"
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 子どものプライバシー保護:</strong> 13歳未満の子どもから個人情報を収集することはありません。<em>設定 &gt; 広告とプライバシー設定</em>からいつでも設定を変更できます。"
                        }
                ],
                "webLabel": "公式ウェブプライバシーポリシー:",
                "contactLabel": "お問い合わせ:",
                "openWebBtn": "🌐 ブラウザで開く",
                "closeBtn": "確認して閉じる ✓"
        },
        "zh": {
                "title": "🛡️ Marinext 2100 — 隐私政策",
                "meta": "开发者: <strong>CG Studio Home</strong> | 应用包名: <code>com.cgstudiohome.marinext2100</code> | 联系邮箱: <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇨🇳 数据收集与存储：</strong> <strong>Marinext 2100</strong> 不会收集任何个人身份信息（如姓名、电话、通讯录或精确位置）。游戏进度保存在本地设备中，您还可通过 <strong>Google Play Games Services</strong> 将存档备份至个人的 <strong>Google 云端硬盘</strong>。您可随时通过<em>设置 &gt; 重置所有游戏进度</em>清除所有数据。"
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 广告与第三方 SDK (Google AdMob)：</strong> 本游戏使用 <strong>Google AdMob</strong> 提供免费游戏服务。AdMob 可能会出于频次上限与反作弊目的处理设备的 Google 广告 ID (AAID) 及大致网络位置。游戏中绝无强制全屏插屏广告，激励视频完全自愿观看。"
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 儿童隐私保障：</strong> 我们不会故意收集 14 周岁以下儿童的个人信息。可在<em>设置 &gt; 广告与隐私偏好</em>中随时管理您的设置。"
                        }
                ],
                "webLabel": "官方网页版隐私政策：",
                "contactLabel": "联系与支持：",
                "openWebBtn": "🌐 在浏览器中打开",
                "closeBtn": "已阅并关闭 ✓"
        },
        "ru": {
                "title": "🛡️ Marinext 2100 — Политика конфиденциальности",
                "meta": "Разработчик: <strong>CG Studio Home</strong> | Пакет: <code>com.cgstudiohome.marinext2100</code> | Контакт: <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇷🇺 Сбор и хранение данных:</strong> <strong>Marinext 2100</strong> не собирает персональные данные (имя, телефон, контакты, точное местоположение). Весь прогресс хранится на устройстве и может синхронизироваться с вашим личным <strong>Google Drive</strong> через <strong>Google Play Games Services</strong>. Вы можете полностью сбросить данные в любое время в <em>Настройки &gt; Сбросить весь прогресс</em>."
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 Реклама (Google AdMob):</strong> Мы используем <strong>Google AdMob</strong>, чтобы игра оставалась бесплатной. AdMob может обрабатывать рекламный идентификатор (AAID) и приблизительное местоположение для ограничения частоты показа и предотвращения мошенничества. Принудительной рекламы во время игры нет."
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 Защита детей и GDPR:</strong> Мы не собираем информацию о детях до 13 лет. Пользователи могут управлять согласием в меню <em>Настройки &gt; Настройки рекламы и конфиденциальности</em>."
                        }
                ],
                "webLabel": "Официальная веб-политика конфиденциальности:",
                "contactLabel": "Контакты:",
                "openWebBtn": "🌐 Открыть в браузере",
                "closeBtn": "ПРОЧИТАНО И ЗАКРЫТЬ ✓"
        },
        "it": {
                "title": "🛡️ Marinext 2100 — Informativa sulla Privacy",
                "meta": "Sviluppatore: <strong>CG Studio Home</strong> | Pacchetto: <code>com.cgstudiohome.marinext2100</code> | Contatto: <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇮🇹 Raccolta e Conservazione Dati:</strong> <strong>Marinext 2100</strong> non raccoglie dati personali (nome, telefono, contatti, posizione). I progressi sono salvati sul dispositivo e facoltativamente sincronizzati con il tuo <strong>Google Drive</strong> tramite <strong>Google Play Games Services</strong>. Puoi cancellare tutti i dati in qualsiasi momento da <em>Impostazioni &gt; Ripristina tutti i progressi</em>."
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 Annunci e Terze Parti (Google AdMob):</strong> Utilizziamo <strong>Google AdMob</strong> per mantenere il gioco gratuito. Può trattare l'Advertising ID (AAID) e la posizione approssimativa per prevenire frodi. Non ci sono mai annunci forzati a tutto schermo durante il gameplay."
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 Privacy dei Minori e RGPD:</strong> Non raccogliamo consapevolmente dati da minori di 13 anni. Puoi gestire il consenso in qualsiasi momento in <em>Impostazioni &gt; Preferenze Annunci e Privacy</em>."
                        }
                ],
                "webLabel": "Informativa sulla privacy ufficiale online:",
                "contactLabel": "Contatto:",
                "openWebBtn": "🌐 Apri nel browser",
                "closeBtn": "LETTO E CHIUDI ✓"
        },
        "es": {
                "title": "🛡️ Marinext 2100 — Política de Privacidad",
                "meta": "Desarrollador: <strong>CG Studio Home</strong> | Paquete: <code>com.cgstudiohome.marinext2100</code> | Contacto: <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇪🇸 Recopilación y Almacenamiento:</strong> <strong>Marinext 2100</strong> no recopila identificadores personales (nombre, teléfono, contactos o ubicación). El progreso se almacena localmente y, opcionalmente, se sincroniza con su cuenta de <strong>Google Drive</strong> a través de <strong>Google Play Games Services</strong>. Puede borrar todo su progreso en <em>Ajustes &gt; Restablecer todo el progreso</em>."
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 Publicidad y Terceros (Google AdMob):</strong> Usamos <strong>Google AdMob</strong> para ofrecer el juego gratis. AdMob puede procesar el ID de publicidad (AAID) y la ubicación aproximada para limitar la frecuencia y prevenir fraudes. Nunca hay anuncios a pantalla completa obligatorios durante el juego."
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 Privacidad de Menores y RGPD:</strong> No recopilamos intencionalmente datos de menores de 13 años. Puede revisar su consentimiento en <em>Ajustes &gt; Preferencias de Anuncios y Privacidad</em>."
                        }
                ],
                "webLabel": "Política de privacidad oficial en la web:",
                "contactLabel": "Contacto:",
                "openWebBtn": "🌐 Abrir en navegador",
                "closeBtn": "LEÍDO Y CERRAR ✓"
        },
        "fr": {
                "title": "🛡️ Marinext 2100 — Politique de Confidentialité",
                "meta": "Développeur : <strong>CG Studio Home</strong> | Package : <code>com.cgstudiohome.marinext2100</code> | Contact : <code>info@erpdanisman.com</code>",
                "boxes": [
                        {
                                "border": "#00f2fe",
                                "bg": "rgba(0, 242, 254, 0.08)",
                                "html": "<strong>🇫🇷 Collecte et Stockage des Données :</strong> <strong>Marinext 2100</strong> ne collecte aucune coordonnée personnelle (nom, téléphone, carnet d'adresses, position précise). Votre progression est stockée localement sur l'appareil et peut être synchronisée avec votre <strong>Google Drive</strong> via <strong>Google Play Games Services</strong>. Vous pouvez réinitialiser toutes les données dans <em>Paramètres &gt; Réinitialiser toute la progression</em>."
                        },
                        {
                                "border": "#ffd166",
                                "bg": "rgba(255, 209, 102, 0.08)",
                                "html": "<strong>📺 Publicité (Google AdMob) :</strong> Nous utilisons <strong>Google AdMob</strong> pour maintenir le jeu gratuit. AdMob peut traiter l'identifiant publicitaire (AAID) et la localisation approximative pour limiter la fréquence d'affichage et éviter la fraude. Aucune publicité forcée pendant le jeu."
                        },
                        {
                                "border": "#06d6a0",
                                "bg": "rgba(6, 214, 160, 0.08)",
                                "html": "<strong>👶 Confidentialité des Enfants et RGPD :</strong> Nous ne collectons pas de données auprès d'enfants de moins de 13 ans. Gérez votre consentement dans <em>Paramètres &gt; Préférences Publicitaires et Confidentialité</em>."
                        }
                ],
                "webLabel": "Politique de confidentialité officielle en ligne :",
                "contactLabel": "Contact :",
                "openWebBtn": "🌐 Ouvrir dans le navigateur",
                "closeBtn": "LU ET FERMER ✓"
        }
};
    window.MARINEXT_FIRST_CONSENT_TEXTS = {
        "tr": {
                "title": "Marinext 2100'e Hoş Geldiniz!",
                "sub": "Gizlilik Politikası ve Kullanım Koşulları Bildirimi",
                "card1Title": "🔒 Veri & Gizlilik Güvencesi:",
                "card1Text": "Oyun deneyiminizi sağlamak, ilerlemenizi cihazınızda ve isteğe bağlı Google Drive bulutunda saklamak ve isteğe bağlı ödüllü reklam sunmak için Google Play Servisleri ile AdMob SDK'sı kullanılmaktadır. Kişisel kimliğiniz veya telefon numaranız asla toplanmaz.",
                "card2Text": "Oyuna devam ederek <strong>Gizlilik Politikamızı</strong> ve <strong>Kullanım Şartlarımızı</strong> kabul etmiş olursunuz. Bu tercihlerinizi dilediğiniz zaman <em>Ayarlar &gt; Reklam &amp; Gizlilik Tercihleri</em> ekranından güncelleyebilirsiniz.",
                "acceptBtn": "KABUL EDİYORUM VE BAŞLA ▶",
                "readBtn": "📖 Gizlilik Politikasını İncele"
        },
        "en": {
                "title": "Welcome to Marinext 2100!",
                "sub": "Privacy Policy & Terms of Service Notice",
                "card1Title": "🔒 Data & Privacy Guarantee:",
                "card1Text": "We use Google Play Services and AdMob SDK to save game progress locally and optionally on Google Drive, and to serve optional rewarded video ads. No personal phone numbers, contacts, or real names are collected.",
                "card2Text": "By continuing, you acknowledge our <strong>Privacy Policy</strong> and <strong>Terms of Service</strong>. You may update your ad and consent preferences at any time in <em>Settings &gt; Ad &amp; Privacy Preferences</em>.",
                "acceptBtn": "ACCEPT & START PLAYING ▶",
                "readBtn": "📖 Review Privacy Policy"
        },
        "ko": {
                "title": "Marinext 2100에 오신 것을 환영합니다!",
                "sub": "개인정보 처리방침 및 이용 약관 안내",
                "card1Title": "🔒 데이터 및 개인정보 보호 보증:",
                "card1Text": "게임 진행 상황 저장(기기 및 선택적 Google Drive 동기화)과 선택적 보상형 광고 제공을 위해 Google Play 서비스 및 AdMob SDK를 사용합니다. 개인 식별 정보는 일체 수집되지 않습니다.",
                "card2Text": "게임을 계속 진행하시면 <strong>개인정보 처리방침</strong>과 <strong>이용 약관</strong>에 동의하는 것으로 간주됩니다. <em>설정 &gt; 광고 및 개인정보 설정</em>에서 언제든지 변경할 수 있습니다.",
                "acceptBtn": "동의하고 게임 시작하기 ▶",
                "readBtn": "📖 개인정보 처리방침 검토"
        },
        "ja": {
                "title": "Marinext 2100へようこそ！",
                "sub": "プライバシーポリシーおよび利用規約のご案内",
                "card1Title": "🔒 データとプライバシーの保証:",
                "card1Text": "進行状況の保存(端末およびGoogle Drive)と任意のリワード広告提供のため、Google Play開発者サービスおよびAdMob SDKを利用しています。個人情報は一切収集されません。",
                "card2Text": "ゲームを開始することにより、<strong>プライバシーポリシー</strong>および<strong>利用規約</strong>に同意したものとみなされます。<em>設定 &gt; 広告とプライバシー設定</em>からいつでも変更可能です。",
                "acceptBtn": "同意してゲームを開始 ▶",
                "readBtn": "📖 プライバシーポリシーを確認"
        },
        "zh": {
                "title": "欢迎来到 Marinext 2100！",
                "sub": "隐私政策与服务条款告知",
                "card1Title": "🔒 数据与隐私保护声明：",
                "card1Text": "为了保存游戏进度（本地及可选的 Google 云端硬盘同步）并提供可选的激励视频广告，本游戏使用了 Google Play 服务及 AdMob SDK。绝不收集个人联系方式或真实身份。",
                "card2Text": "继续游戏即表示您已知悉并同意我们的<strong>隐私政策</strong>与<strong>服务条款</strong>。您可以随时在<em>设置 &gt; 广告与隐私偏好</em>中更改相关设置。",
                "acceptBtn": "同意并开始游戏 ▶",
                "readBtn": "📖 查看隐私政策"
        },
        "ru": {
                "title": "Добро пожаловать в Marinext 2100!",
                "sub": "Политика конфиденциальности и условия использования",
                "card1Title": "🔒 Гарантия конфиденциальности:",
                "card1Text": "Для сохранения прогресса на устройстве и Google Drive, а также показа добровольной рекламы используются сервисы Google Play и AdMob. Номера телефонов и личные данные не собираются.",
                "card2Text": "Продолжая игру, вы принимаете нашу <strong>Политику конфиденциальности</strong> и <strong>Условия</strong>. Вы можете изменить настройки в меню <em>Настройки &gt; Настройки рекламы</em>.",
                "acceptBtn": "ПРИНЯТЬ И НАЧАТЬ ИГРУ ▶",
                "readBtn": "📖 Читать политику"
        },
        "it": {
                "title": "Benvenuto in Marinext 2100!",
                "sub": "Informativa sulla Privacy e Condizioni di Servizio",
                "card1Title": "🔒 Garanzia di Privacy e Dati:",
                "card1Text": "Utilizziamo i servizi Google Play e AdMob per salvare i progressi localmente e su Google Drive, e offrire annunci con premio facoltativi. Non raccogliamo dati personali o contatti.",
                "card2Text": "Continuando, accetti la nostra <strong>Informativa sulla Privacy</strong>. Puoi aggiornare le tue preferenze in qualsiasi momento in <em>Impostazioni &gt; Preferenze Annunci</em>.",
                "acceptBtn": "ACCETTA E INIZIA A GIOCARE ▶",
                "readBtn": "📖 Leggi l'Informativa"
        },
        "es": {
                "title": "¡Bienvenido a Marinext 2100!",
                "sub": "Aviso de Política de Privacidad y Términos de Servicio",
                "card1Title": "🔒 Garantía de Datos y Privacidad:",
                "card1Text": "Usamos los servicios de Google Play y AdMob para guardar el progreso localmente y en Google Drive, y mostrar videos de recompensa opcionales. No se recopilan datos personales.",
                "card2Text": "Al continuar, aceptas nuestra <strong>Política de Privacidad</strong>. Puedes actualizar tus opciones en <em>Ajustes &gt; Preferencias de Anuncios y Privacidad</em>.",
                "acceptBtn": "ACEPTAR Y EMPEZAR A JUGAR ▶",
                "readBtn": "📖 Revisar Política"
        },
        "fr": {
                "title": "Bienvenue sur Marinext 2100 !",
                "sub": "Politique de Confidentialité et Conditions d'Utilisation",
                "card1Title": "🔒 Garantie de Confidentialité :",
                "card1Text": "Nous utilisons Google Play et AdMob pour sauvegarder votre partie localement et sur Google Drive, et afficher des vidéos récompensées facultatives. Aucune coordonnée personnelle n'est collectée.",
                "card2Text": "En continuant, vous acceptez notre <strong>Politique de Confidentialité</strong>. Vous pouvez modifier vos choix à tout moment dans <em>Paramètres &gt; Préférences Publicitaires</em>.",
                "acceptBtn": "ACCEPTER ET JOUER ▶",
                "readBtn": "📖 Consulter la Politique"
        }
};

    window.ensureFullLangDict = function (langDictObj) {
        if (!langDictObj) return;
        Object.keys(langDictObj).forEach((code) => {
            const d = langDictObj[code];
            const ext = getUiDict(code);
            if (ext && Array.isArray(ext.worldRegions10)) {
                d.worldRegions = ext.worldRegions10;
            }
            const lvlTable = LEVEL_NAMES_41_100[code] || LEVEL_NAMES_41_100.en;
            if (Array.isArray(d.levelShortNames) && d.levelShortNames.length < 100) {
                for (let i = d.levelShortNames.length; i < 100; i++) {
                    d.levelShortNames[i] = lvlTable[i - 40] || `Stage ${i + 1}`;
                }
            }
            const trollTable = TROLL_NAMES_50[code] || TROLL_NAMES_50.en;
            if (Array.isArray(d.trollShortNames)) {
                for (let i = 0; i < 50; i++) {
                    if (!d.trollShortNames[i] || i >= 15) {
                        d.trollShortNames[i] = trollTable[i] || `Troll ${i + 1}`;
                    }
                }
            }
            if (typeof d.trollModalPill === "string") d.trollModalPill = d.trollModalPill.replace("15", "50");
            if (typeof d.trollModalTitle === "string") d.trollModalTitle = d.trollModalTitle.replace("15", "50");
            if (typeof d.btnUnlockAllTroll === "string") d.btnUnlockAllTroll = d.btnUnlockAllTroll.replace("15", "50");
        });
    };

    window.applyMarinextExtendedUI = function (game) {
        if (!game) return;
        const lang = game.lang || "tr";
        const t = (key, vars) => window.getMarinextUiText(lang, key, vars);
        const setTxt = (id, txt) => {
            const el = document.getElementById(id);
            if (el && txt !== undefined) el.textContent = txt;
        };
        const setHtml = (id, html) => {
            const el = document.getElementById(id);
            if (el && html !== undefined) el.innerHTML = html;
        };

        // Top Bar & HUD Labels
        setTxt("map-goldcoin-label", t("coinLabel"));
        setTxt("hud-goldcoin-label", t("coinLabel"));
        setTxt("char-coin-label", t("coinLabel"));
        setTxt("btn-map-leaderboard", t("btnLeaderboard"));
        setTxt("btn-map-feedback", t("btnFeedback"));

        // Character Studio
        setHtml("char-modal-sub", t("charSub"));
        setTxt("btn-ad-chest-char", t("btnAdChestChar"));
        setTxt("btn-ad-chest-cust", t("btnAdChestCust"));

        // Leaderboard Static Labels
        setTxt("lb-modal-title", t("lbTitle"));
        setTxt("lb-modal-subtitle", t("lbSubtitle"));
        setTxt("lb-playgames-btn-text", t("lbPlayGamesBtn"));
        setTxt("lb-achievements-btn-text", t("lbAchievementsBtn"));

        const lbCatMap = {
            score: t("lbCatScore"),
            progress: t("lbCatProgress"),
            emerald: t("lbCatEmerald"),
            speedrun: t("lbCatSpeedrun")
        };
        document.querySelectorAll("#lb-category-tabs .lb-cat-tab").forEach((btn) => {
            const c = btn.getAttribute("data-lb-cat");
            if (c && lbCatMap[c]) btn.textContent = lbCatMap[c];
        });

        const lbScopeMap = {
            global: t("lbScopeGlobal"),
            weekly: t("lbScopeWeekly"),
            tr: t("lbScopeTr"),
            friends: t("lbScopeFriends")
        };
        document.querySelectorAll("#lb-scope-pills .lb-scope-pill").forEach((btn) => {
            const s = btn.getAttribute("data-lb-scope");
            if (s && lbScopeMap[s]) btn.textContent = lbScopeMap[s];
        });

        // Profile & Avatar Picker
        setTxt("btn-open-avatar-picker", t("btnPickAvatar"));
        const nameInput = document.getElementById("profile-name-input");
        if (nameInput) nameInput.placeholder = t("profileNamePlaceholder");
        setTxt("profile-cloud-title", t("profileCloudTitle"));
        setTxt("btn-cloud-sync-now", t("btnCloudSyncNow"));
        setTxt("btn-cloud-export-drive", t("btnCloudExport"));
        setTxt("btn-cloud-import-drive", t("btnCloudImport"));
        setTxt("btn-close-avatar-picker", t("btnConfirmAvatar"));
        const pickerCard = document.querySelector("#screen-avatar-picker p");
        if (pickerCard) pickerCard.textContent = t("avatarPickerSub");

        // Settings Extra Buttons
        setTxt("btn-settings-feedback", t("btnSettingsFeedback"));
        setTxt("btn-settings-cloud-sync", t("btnSettingsCloud"));
        setTxt("btn-open-privacy", t("btnSettingsPrivacy"));
        setTxt("btn-privacy-consent", t("btnSettingsConsent"));
        setTxt("settings-channel-prefix", t("channelPrefix"));
        setTxt("settings-group-audio", t("settingsGroupAudio"));
        setTxt("settings-group-support", t("settingsGroupSupport"));
        setTxt("btn-settings-tutorial", t("btnSettingsTutorial"));
        setTxt("btn-settings-rate-app", t("btnSettingsRate"));
        setTxt("btn-test-ad", t("btnTestAd"));
        setTxt("hud-coin-label", t("crystalLabel"));
        setTxt("btn-tutorial-skip", t("btnTutorialSkip"));

        // Ad Consent Modal
        const adConsentScreen = document.getElementById("screen-ad-consent");
        if (adConsentScreen) {
            const h2 = adConsentScreen.querySelector("h2");
            if (h2) h2.textContent = t("adConsentTitle");
            const subP = adConsentScreen.querySelector("p");
            if (subP) subP.textContent = t("adConsentSub");
            const persSpan = adConsentScreen.querySelector("#btn-toggle-personalized-ads span");
            if (persSpan) persSpan.textContent = t("adPersonalizedLabel");
            setTxt("btn-open-google-ump-form", t("btnOpenUmpForm"));
            setTxt("btn-close-ad-consent", t("btnSaveConsent"));
        }

        // Feedback Modal
        const fbScreen = document.getElementById("screen-feedback");
        if (fbScreen) {
            const h2 = fbScreen.querySelector("h2");
            if (h2) h2.textContent = t("fbTitle");
            const subP = fbScreen.querySelector("p");
            if (subP) subP.textContent = t("fbSub");
            const labels = fbScreen.querySelectorAll("label");
            if (labels[0]) labels[0].textContent = t("fbStarLabel");
            if (labels[1]) labels[1].textContent = t("fbCatLabel");
            if (labels[2]) labels[2].textContent = t("fbMsgLabel");
            const chips = fbScreen.querySelectorAll(".feedback-cat-chip");
            if (chips[0]) chips[0].textContent = t("fbCat1");
            if (chips[1]) chips[1].textContent = t("fbCat2");
            if (chips[2]) chips[2].textContent = t("fbCat3");
            if (chips[3]) chips[3].textContent = t("fbCat4");
            const msgIn = document.getElementById("feedback-message-input");
            if (msgIn) msgIn.placeholder = t("fbMsgPlaceholder");
            setTxt("btn-submit-feedback-playconsole", t("btnSubmitPlayConsole"));
            setTxt("btn-submit-feedback-direct", t("btnSubmitDirect"));
            setTxt("btn-close-feedback", t("btnCloseFeedback"));
        }

        // Pause / GameOver / Victory Ad Buttons & Update Modal
        setTxt("btn-ad-revive", t("btnReviveAd"));
        setTxt("btn-ad-double", t("btnDoubleAd"));
        setTxt("btn-insuff-cancel", t("btnCancel"));
        setTxt("update-modal-title", t("updateTitle"));
        setHtml("update-modal-desc", t("updateDesc"));
        setTxt("btn-do-update", t("btnDoUpdate"));
        setTxt("btn-later-update", t("btnLaterUpdate"));
        setTxt("link-update-changelog", t("updateLinkChangelog"));

        // Splash Screen
        const splashBadge = document.querySelector("#screen-splash-intro .splash-badge-pill");
        if (splashBadge) splashBadge.textContent = t("splashBadge");
        const splashSub = document.querySelector("#screen-splash-intro .splash-sub-text");
        if (splashSub) splashSub.textContent = t("splashSub");
        setTxt("splash-status-label", t("splashStatus"));

        // Leaderboard Footer Static Badges ("SEN" & "SENİN DERECEN")
        const lbFooter = document.getElementById("lb-player-footer");
        if (lbFooter) {
            const nameParent = document.getElementById("lb-my-name") ? document.getElementById("lb-my-name").parentElement : null;
            if (nameParent) {
                const spans = nameParent.querySelectorAll("span");
                if (spans[1]) spans[1].textContent = t("lbYouBadge");
            }
            const scoreVal = document.getElementById("lb-my-score-val");
            if (scoreVal && scoreVal.previousElementSibling) {
                scoreVal.previousElementSibling.textContent = t("lbYourRankLabel") || t("lbYouBadge");
            }
        }

        // Ad Consent Rules & GDPR Box
        if (adConsentScreen) {
            const boxes = adConsentScreen.querySelectorAll("div > div");
            boxes.forEach((box) => {
                if (box.innerHTML && (box.innerHTML.includes("📺") || box.innerHTML.includes("AdMob") || box.innerHTML.includes("3x") || box.innerHTML.includes("2x"))) {
                    if (box.style && box.style.borderLeft && box.style.borderLeft.includes("ffd166")) {
                        box.innerHTML = window.translateMarinextGameText("GDPR_UMP_BOX_HTML", lang);
                    } else if (box.style && box.style.borderRadius === "10px") {
                        box.innerHTML = window.translateMarinextGameText("AD_RULES_BOX_HTML", lang);
                    }
                }
            });
        }

        // Privacy Modal Header & Buttons
        const privScreen = document.getElementById("screen-privacy");
        if (privScreen) {
            const openWebLink = privScreen.querySelector("a.secondary-btn");
            if (openWebLink) openWebLink.textContent = window.translateMarinextGameText("🌐 Web Tarayıcıda Aç", lang);
            setTxt("btn-close-privacy", window.translateMarinextGameText("OKUDUM VE KAPAT ✓", lang));
        }

        // Close X Button Tooltips
        const closeHint = window.translateMarinextGameText("Kapat (ESC)", lang);
        document.querySelectorAll(".modal-close-x").forEach((btn) => {
            btn.setAttribute("title", closeHint);
        });
    };

    // ============================================================================
    // 🌍 COMPLETE IN-GAME FLOATING TEXT, BOSS STATUS & CANVAS LABEL TRANSLATOR
    // Ensures 0% Turkish bleed-through when any non-Turkish language is active!
    // ============================================================================
    const DEFAULT_PLAYER_NAMES = {
        tr: "Gölge Şövalye",
        en: "Shadow Knight",
        ru: "Рыцарь Теней",
        it: "Cavaliere d'Ombra",
        es: "Caballero Sombra",
        fr: "Chevalier d'Ombre",
        ko: "그림자 기사",
        zh: "暗影骑士",
        ja: "シャドウナイト"
    };

    window.isDefaultPlayerName = function (name) {
        if (!name) return true;
        const trimmed = String(name).trim();
        return Object.values(DEFAULT_PLAYER_NAMES).includes(trimmed);
    };

    window.getLocalizedDefaultPlayerName = function (lang) {
        return DEFAULT_PLAYER_NAMES[lang] || DEFAULT_PLAYER_NAMES.en;
    };

    const INGAME_TEXT_TABLE = {
        // 1. BOSS SHIELD & VULNERABLE FLOATING TEXTS
        "🛡 KALKANLI! YORULMASINI BEKLE!": {
            en: "🛡 SHIELDED! WAIT UNTIL TIRED!",
            ru: "🛡 ПОД ЩИТОМ! ЖДИТЕ УСТАЛОСТИ!",
            it: "🛡 SCUDATO! ASPETTA CHE SI STANCHI!",
            es: "🛡 ¡CON ESCUDO! ¡ESPERA A QUE SE CANSE!",
            fr: "🛡 BOUCLIER ACTIF ! ATTENDEZ QU'IL FATIGUE !",
            ko: "🛡 방어막 활성! 지칠 때까지 기다리세요!",
            zh: "🛡 护盾激活！等待首领力竭！",
            ja: "🛡 シールド中！疲れるのを待て！"
        },
        "🎯 KALKAN KAPANDI! KAFASINA ZIPLA!": {
            en: "🎯 SHIELD DOWN! JUMP ON ITS HEAD!",
            ru: "🎯 ЩИТ УПАЛ! ПРЫГАЙ НА ГОЛОВУ!",
            it: "🎯 SCUDO GIÙ! SALTA SULLA TESTA!",
            es: "🎯 ¡ESCUDO CAÍDO! ¡SALTA EN SU CABEZA!",
            fr: "🎯 BOUCLIER BAISSÉ ! SAUTEZ SUR SA TÊTE !",
            ko: "🎯 방어막 해제! 머리 위로 점프하세요!",
            zh: "🎯 护盾解除！踩击首领头部！",
            ja: "🎯 シールド解除！頭を踏みつけろ！"
        },
        "🎯 KALKAN KAPANDI! ŞİMDİ VUR!": {
            en: "🎯 SHIELD DOWN! ATTACK NOW!",
            ru: "🎯 ЩИТ СНЯТ! АТАКУЙ СЕЙЧАС!",
            it: "🎯 SCUDO GIÙ! COLPISCI ORA!",
            es: "🎯 ¡ESCUDO CAÍDO! ¡ATACA AHORA!",
            fr: "🎯 BOUCLIER BAISSÉ ! FRAPPEZ MAINTENANT !",
            ko: "🎯 방어막 해제! 지금 공격하세요!",
            zh: "🎯 护盾解除！立即攻击！",
            ja: "🎯 シールド解除！今すぐ攻撃！"
        },
        "🛡 SAVUNMA & HAZIRLIK": {
            en: "🛡 DEFENSE & PREPARATION",
            ru: "🛡 ЗАЩИТА И ПОДГОТОВКА",
            it: "🛡 DIFESA E PREPARAZIONE",
            es: "🛡 DEFENSA Y PREPARACIÓN",
            fr: "🛡 DÉFENSE ET PRÉPARATION",
            ko: "🛡 방어 및 공격 준비",
            zh: "🛡 防御与蓄力准备",
            ja: "🛡 防御＆攻撃準備"
        },
        "⚠️ ZIPLAMA & ŞOK DALGASI GELİYOR!": {
            en: "⚠️ JUMP & SHOCKWAVE INCOMING!",
            ru: "⚠️ ПРЫЖОК И УДАРНАЯ ВОЛНА!",
            it: "⚠️ SALTO E ONDA D'URTO IN ARRIVO!",
            es: "⚠️ ¡SALTO Y ONDA DE CHOQUE!",
            fr: "⚠️ SAUT ET ONDE DE CHOC IMMINENTS !",
            ko: "⚠️ 점프 & 충격파 공격 주의!",
            zh: "⚠️ 跳跃与冲击波来袭！",
            ja: "⚠️ ジャンプ＆衝撃波が来るぞ！"
        },
        "💥 ŞOK DALGASI SALDIRISI!": {
            en: "💥 SHOCKWAVE ATTACK!",
            ru: "💥 АТАКА УДАРНОЙ ВОЛНОЙ!",
            it: "💥 ATTACCO ONDA D'URTO!",
            es: "💥 ¡ATAQUE DE ONDA DE CHOQUE!",
            fr: "💥 ATTAQUE ONDE DE CHOC !",
            ko: "💥 충격파 공격!",
            zh: "💥 冲击波攻击！",
            ja: "💥 衝撃波アタック！"
        },
        "⚠️ ATILMA SALDIRISINA HAZIRLANIYOR!": {
            en: "⚠️ PREPARING DASH ATTACK!",
            ru: "⚠️ ГОТОВИТСЯ К РЫВКУ!",
            it: "⚠️ PREPARA L'ATTACCO IN CARICA!",
            es: "⚠️ ¡PREPARANDO EMBESTIDA!",
            fr: "⚠️ PRÉPARE UNE CHARGE RAPIDE !",
            ko: "⚠️ 돌진 공격 준비 중!",
            zh: "⚠️ 正在准备冲刺攻击！",
            ja: "⚠️ 突進攻撃を準備中！"
        },
        "⚡ YILDIRIM ATILMASI!": {
            en: "⚡ LIGHTNING DASH!",
            ru: "⚡ МОЛНИЕНОСНЫЙ РЫВОК!",
            it: "⚡ CARICA FULMINEA!",
            es: "⚡ ¡EMBESTIDA RELÁMPAGO!",
            fr: "⚡ CHARGE ÉCLAIR !",
            ko: "⚡ 번개 돌진!",
            zh: "⚡ 闪电冲刺！",
            ja: "⚡ ライトニングダッシュ！"
        },
        "⚔️ İKİNCİ İAİDO ATILMASI!": {
            en: "⚔️ SECOND IAIDO DASH!",
            ru: "⚔️ ВТОРОЙ РЫВОК ИАЙДО!",
            it: "⚔️ SECONDO SCATTO IAIDO!",
            es: "⚔️ ¡SEGUNDA EMBESTIDA IAIDO!",
            fr: "⚔️ DEUXIÈME CHARGE IAIDO !",
            ko: "⚔️ 2차 발도술 돌진!",
            zh: "⚔️ 二段拔刀冲刺！",
            ja: "⚔️ 二段居合ダッシュ！"
        },
        "🛡 KALKAN YENİLENDİ!": {
            en: "🛡 SHIELD RESTORED!",
            ru: "🛡 ЩИТ ВОССТАНОВЛЕН!",
            it: "🛡 SCUDO RIPRISTINATO!",
            es: "🛡 ¡ESCUDO RESTAURADO!",
            fr: "🛡 BOUCLIER RESTAURÉ !",
            ko: "🛡 방어막 재생성!",
            zh: "🛡 护盾已恢复！",
            ja: "🛡 シールド復活！"
        },
        "🛡 KALKAN YENİLENDİ! DİKKAT!": {
            en: "🛡 SHIELD RESTORED! WATCH OUT!",
            ru: "🛡 ЩИТ ВОССТАНОВЛЕН! ОСТОРОЖНО!",
            it: "🛡 SCUDO RIPRISTINATO! ATTENZIONE!",
            es: "🛡 ¡ESCUDO RESTAURADO! ¡CUIDADO!",
            fr: "🛡 BOUCLIER RESTAURÉ ! ATTENTION !",
            ko: "🛡 방어막 재생성! 주의하세요!",
            zh: "🛡 护盾已恢复！当心！",
            ja: "🛡 シールド復活！気をつけろ！"
        },
        "💥 SÜPER EZMELİ VURUŞ! (-3 CAN)": {
            en: "💥 SUPER CRUSH STOMP! (-3 HP)",
            ru: "💥 СУПЕР-УДАР СВЕРХУ! (-3 ОЗ)",
            it: "💥 SUPER SCHIACCIATA! (-3 PV)",
            es: "💥 ¡SÚPER PISOTÓN! (-3 PV)",
            fr: "💥 SUPER ÉCRASEMENT ! (-3 PV)",
            ko: "💥 슈퍼 크러시 스톰프! (-3 체력)",
            zh: "💥 超级重踏暴击！(-3 生命)",
            ja: "💥 スーパースタンプ撃破！(-3 HP)"
        },
        "🎁 BOSS HEDİYESİ: +20 ❖ ZÜMRÜT, +10 ◆ KRİSTAL, +15 🪙 COİN!": {
            en: "🎁 BOSS REWARD: +20 ❖ EMERALDS, +10 ◆ CRYSTALS, +15 🪙 COINS!",
            ru: "🎁 НАГРАДА БОССА: +20 ❖ ИЗУМРУДОВ, +10 ◆ КРИСТАЛЛОВ, +15 🪙 МОНЕТ!",
            it: "🎁 PREMIO BOSS: +20 ❖ SMERALDI, +10 ◆ CRISTALLI, +15 🪙 COIN!",
            es: "🎁 ¡BOTÍN DE JEFE: +20 ❖ ESMERALDAS, +10 ◆ CRISTALES, +15 🪙 MONEDAS!",
            fr: "🎁 BUTIN DU BOSS : +20 ❖ ÉMERAUDES, +10 ◆ CRISTAUX, +15 🪙 PIÈCES !",
            ko: "🎁 보스 보상: +20 ❖ 에메랄드, +10 ◆ 크리스탈, +15 🪙 코인!",
            zh: "🎁 首领奖励：+20 ❖ 翡翠, +10 ◆ 水晶, +15 🪙 金币！",
            ja: "🎁 ボス報酬：+20 ❖ エメラルド、+10 ◆ クリスタル、+15 🪙 コイン！"
        },

        // 2. 12 BOSS SPECIAL ATTACK NAMES
        "💎 KRİSTAL SARKIT YAĞMURU!": {
            en: "💎 CRYSTAL STALACTITE RAIN!",
            ru: "💎 ДОЖДЬ КРИСТАЛЬНЫХ СТАЛАКТИТОВ!",
            it: "💎 PIOGGIA DI STALATTITI DI CRISTALLO!",
            es: "💎 ¡LLUVIA DE ESTALACTITAS DE CRISTAL!",
            fr: "💎 PLUIE DE STALACTITES DE CRISTAL !",
            ko: "💎 크리스탈 종유석 폭우!",
            zh: "💎 水晶钟乳石暴雨！",
            ja: "💎 クリスタル鍾乳石の雨！"
        },
        "🩸 GÖLGE ADIMI & İNFAZ TIRPANI!": {
            en: "🩸 SHADOW STEP & EXECUTION SCYTHE!",
            ru: "🩸 ТЕНЕВОЙ ШАГ И КОСА ПАЛАЧА!",
            it: "🩸 PASSO D'OMBRA E FALCE DEL BOIA!",
            es: "🩸 ¡PASO SOMBRÍO Y GUADAÑA!",
            fr: "🩸 PAS D'OMBRE ET FAUX D'EXÉCUTION !",
            ko: "🩸 그림자 보법 & 처형의 낫!",
            zh: "🩸 暗影瞬步与处决镰刀！",
            ja: "🩸 影歩＆処刑の大鎌！"
        },
        "👑 HİÇLİK SÜTUNLARI & ÜÇLÜ KÜRE!": {
            en: "👑 VOID PILLARS & TRIPLE ORB!",
            ru: "👑 КОЛОННЫ ПУСТОТЫ И ТРОЙНАЯ СФЕРА!",
            it: "👑 PILASTRI DEL VUOTO E TRIPLA SFERA!",
            es: "👑 ¡PILARES DEL VACÍO Y TRIPLE ORBE!",
            fr: "👑 PILIERS DU VIDE ET TRIPLE ORBE !",
            ko: "👑 공허의 기둥 & 삼중 구체!",
            zh: "👑 虚空之柱与三重法球！",
            ja: "👑 虚空の柱＆トリプルオーブ！"
        },
        "🌋 VOLKANİK METEOR YAĞMURU!": {
            en: "🌋 VOLCANIC METEOR SHOWER!",
            ru: "🌋 ВУЛКАНИЧЕСКИЙ МЕТЕОРИТНЫЙ ДОЖДЬ!",
            it: "🌋 PIOGGIA DI METEORE VULCANICHE!",
            es: "🌋 ¡LLUVIA DE METEOROS VOLCÁNICOS!",
            fr: "🌋 PLUIE DE MÉTÉORES VOLCANIQUES !",
            ko: "🌋 화산 메테오 샤워!",
            zh: "🌋 火山流星雨！",
            ja: "🌋 ボルケーノメテオシャワー！"
        },
        "🤖 KUANTUM IŞINLANMA & FÜZE BARAJI!": {
            en: "🤖 QUANTUM BLINK & MISSILE BARRAGE!",
            ru: "🤖 КВАНТОВЫЙ СКАЧОК И ЗАЛП РАКЕТ!",
            it: "🤖 TELETRASPORTO QUANTICO E MISSILI!",
            es: "🤖 ¡SALTO CUÁNTICO Y SALVA DE MISILES!",
            fr: "🤖 SAUT QUANTIQUE ET SALVE DE MISSILES !",
            ko: "🤖 양자 순간이동 & 미사일 폭격!",
            zh: "🤖 量子瞬移与导弹齐射！",
            ja: "🤖 量子テレポート＆ミサイル弾幕！"
        },
        "🐉 EJDERHA UÇUŞU & ALEV NEFESİ!": {
            en: "🐉 DRAGON FLIGHT & FLAME BREATH!",
            ru: "🐉 ПОЛЕТ ДРАКОНА И ОГНЕННОЕ ДЫХАНИЕ!",
            it: "🐉 VOLO DEL DRAGO E RESPIRO DI FUOCO!",
            es: "🐉 ¡VUELO DE DRAGÓN Y ALIENTO DE FUEGO!",
            fr: "🐉 VOL DU DRAGON ET SOUFFLE DE FEU !",
            ko: "🐉 드래곤 비행 & 화염 브레스!",
            zh: "🐉 巨龙飞翔与烈焰吐息！",
            ja: "🐉 ドラゴン飛行＆フレイムブレス！"
        },
        "❄️ KUTUP TİPİSİ İTİŞİ & BUZ MIZRAĞI!": {
            en: "❄️ ARCTIC BLIZZARD & ICE LANCE!",
            ru: "❄️ АРКТИЧЕСКАЯ МЕТЕЛЬ И ЛЕДЯНОЕ КОПЬЕ!",
            it: "❄️ TORMENTA ARTICA E LANCIA DI GHIACCIO!",
            es: "❄️ ¡VENTISCA ÁRTICA Y LANZA DE HIELO!",
            fr: "❄️ BLIZZARD ARCTIQUE ET LANCE DE GLACE !",
            ko: "❄️ 극지 눈보라 & 얼음 창!",
            zh: "❄️ 极地暴风雪与寒冰长枪！",
            ja: "❄️ 極寒ブリザード＆アイスランス！"
        },
        "☀️ GÜNEŞ DİSKİ LAZER SÜTUNLARI!": {
            en: "☀️ SOLAR DISK LASER PILLARS!",
            ru: "☀️ ЛАЗЕРНЫЕ КОЛОННЫ СОЛНЕЧНОГО ДИСКА!",
            it: "☀️ PILASTRI LASER DEL DISCO SOLARE!",
            es: "☀️ ¡PILARES LÁSER DEL DISCO SOLAR!",
            fr: "☀️ PILIERS LASER DU DISQUE SOLAIRE !",
            ko: "☀️ 태양 원반 레이저 기둥!",
            zh: "☀️ 太阳圆盘激光柱！",
            ja: "☀️ 太陽円盤レーザーピラー！"
        },
        "🌩️ GÖKYÜZÜ YILDIRIM SÜTUNLARI!": {
            en: "🌩️ SKY LIGHTNING COLUMNS!",
            ru: "🌩️ НЕБЕСНЫЕ ГРОЗОВЫЕ КОЛОННЫ!",
            it: "🌩️ COLONNE DI FULMINI CELESTI!",
            es: "🌩️ ¡COLUMNAS DE RAYOS CELESTIALES!",
            fr: "🌩️ COLONNES DE FOUDRE CÉLESTE !",
            ko: "🌩️ 천공의 낙뢰 기둥!",
            zh: "🌩️ 天空雷霆光柱！",
            ja: "🌩️ 天空の稲妻ピラー！"
        },
        "⚔️ İAİDO İKİLİ KESİŞ & SHURIKEN!": {
            en: "⚔️ IAIDO DOUBLE SLASH & SHURIKEN!",
            ru: "⚔️ ДВОЙНОЙ РАЗРЕЗ ИАЙДО И СЮРИКЕНЫ!",
            it: "⚔️ DOPPIO FENDENTE IAIDO E SHURIKEN!",
            es: "⚔️ ¡DOBLE CORTE IAIDO Y SHURIKEN!",
            fr: "⚔️ DOUBLE ENTAILLLE IAIDO ET SHURIKEN !",
            ko: "⚔️ 발도술 이중 베기 & 수리검!",
            zh: "⚔️ 居合二连斩与手里剑！",
            ja: "⚔️ 居合二連斬り＆手裏剣！"
        },
        "💣 KUŞATMA HAVAN TOPU BOMBARDIMANI!": {
            en: "💣 SIEGE MORTAR BOMBARDMENT!",
            ru: "💣 ОСАДНЫЙ МИНОМЕТНЫЙ ОБСТРЕЛ!",
            it: "💣 BOMBARDAMENTO DI MORTAI D'ASSEDIO!",
            es: "💣 ¡BOMBARDEO DE MORTEROS DE ASEDIO!",
            fr: "💣 BOMBARDEMENT DE MORTIERS DE SIÈGE !",
            ko: "💣 공성 박격포 집중 포격!",
            zh: "💣 攻城迫击炮轰炸！",
            ja: "💣 攻城迫撃砲ボンバード！"
        },
        "🌌 KOZMİK KIYAMET: IŞINLANMA & YILDIRIM!": {
            en: "🌌 COSMIC APOCALYPSE: TELEPORT & LIGHTNING!",
            ru: "🌌 КОСМИЧЕСКИЙ АПОКАЛИПСИС: ТЕЛЕПОРТ И ГРОМ!",
            it: "🌌 APOCALISSE COSMICA: TELETRASPORTO E FULMINI!",
            es: "🌌 ¡APOCALIPSIS CÓSMICO: TELETRANSPORTE Y RAYOS!",
            fr: "🌌 APOCALYPSE COSMIQUE : TÉLÉPORTATION ET FOUDRE !",
            ko: "🌌 코스믹 아포칼립스: 순간이동 & 낙뢰!",
            zh: "🌌 宇宙末日：瞬移与雷霆！",
            ja: "🌌 コズミック・アポカリプス：転移＆雷撃！"
        },

        // 3. PLAYER POWER-UPS, MOVEMENT & WORLD FLOATING TEXTS
        "AETHER KALKANI AKTİF!": {
            en: "AETHER SHIELD ACTIVE!",
            ru: "ЭФИРНЫЙ ЩИТ АКТИВЕН!",
            it: "SCUDO AETHER ATTIVO!",
            es: "¡ESCUDO AETHER ACTIVO!",
            fr: "BOUCLIER AETHER ACTIF !",
            ko: "아이테르 방어막 활성!",
            zh: "以太护盾已激活！",
            ja: "エーテルシールド発動！"
        },
        "PLAZMA KILICI & ATEŞ TOPU! (X / 🔥)": {
            en: "PLASMA SWORD & FIREBALL! (X / 🔥)",
            ru: "ПЛАЗМЕННЫЙ МЕЧ И ОГНЕННЫЙ ШАР! (X / 🔥)",
            it: "SPADA AL PLASMA E PALLA DI FUOCO! (X / 🔥)",
            es: "¡ESPADA DE PLASMA Y BOLA DE FUEGO! (X / 🔥)",
            fr: "ÉPÉE PLASMA ET BOULE DE FEU ! (X / 🔥)",
            ko: "플라즈마 소드 & 파이어볼! (X / 🔥)",
            zh: "等离子剑与火球！(X / 🔥)",
            ja: "プラズマブレード＆ファイアボール！(X / 🔥)"
        },
        "NEON HIZLANMA!": {
            en: "NEON SPEED BOOST!",
            ru: "НЕОНОВОЕ УСКОРЕНИЕ!",
            it: "TURBO NEON!",
            es: "¡IMPULSO DE VELOCIDAD NEÓN!",
            fr: "TURBO NÉON !",
            ko: "네온 스피드 부스트!",
            zh: "霓虹极速冲刺！",
            ja: "ネオンスピードブースト！"
        },
        "Kalkan Kırıldı!": {
            en: "Shield Broken!",
            ru: "Щит разбит!",
            it: "Scudo infranto!",
            es: "¡Escudo roto!",
            fr: "Bouclier brisé !",
            ko: "방어막 파괴!",
            zh: "护盾破碎！",
            ja: "シールド破壊！"
        },
        "Duvar Tırmanışı!": {
            en: "Wall Climb!",
            ru: "Подъем по стене!",
            it: "Arrampicata!",
            es: "¡Escalada en pared!",
            fr: "Escalade murale !",
            ko: "벽 등반!",
            zh: "蹬墙攀爬！",
            ja: "ウォールクライム！"
        },
        "Duvar Zıplaması!": {
            en: "Wall Jump!",
            ru: "Прыжок от стены!",
            it: "Salto a parete!",
            es: "¡Salto en pared!",
            fr: "Saut mural !",
            ko: "벽 점프!",
            zh: "蹬墙跳！",
            ja: "ウォールジャンプ！"
        },
        "🚩 KAYIT NOKTASINDAN DOĞDUN!": {
            en: "🚩 RESPAWNED AT CHECKPOINT!",
            ru: "🚩 ВОЗРОЖДЕНИЕ НА ЧЕКПОИНТЕ!",
            it: "🚩 RINATO AL CHECKPOINT!",
            es: "🚩 ¡REAPARECISTE EN EL PUNTO DE CONTROL!",
            fr: "🚩 RÉAPPARITION AU POINT DE CONTRÔLE !",
            ko: "🚩 체크포인트에서 부활!",
            zh: "🚩 已在存档点复活！",
            ja: "🚩 チェックポイントから復活！"
        },
        "🚩 KAYIT NOKTASI AKTİF! (PLAY GAMES SENKRONİZE ✓)": {
            en: "🚩 CHECKPOINT ACTIVE! (PLAY GAMES SYNCED ✓)",
            ru: "🚩 ЧЕКПОИНТ АКТИВЕН! (PLAY GAMES СИНХР. ✓)",
            it: "🚩 CHECKPOINT ATTIVO! (PLAY GAMES SINCR. ✓)",
            es: "🚩 ¡PUNTO DE CONTROL ACTIVO! (PLAY GAMES ✓)",
            fr: "🚩 POINT DE CONTRÔLE ACTIF ! (PLAY GAMES ✓)",
            ko: "🚩 체크포인트 활성! (Play Games 동기화 ✓)",
            zh: "🚩 存档点已激活！(Play Games 已同步 ✓)",
            ja: "🚩 チェックポイント起動！(Play Games 同期 ✓)"
        },
        "☢️ DİKKAT! GÖKTEN URANYUM BOMBASI YAĞIYOR! (-3 ♥)": {
            en: "☢️ WARNING! URANIUM BOMBS RAINING! (-3 ♥)",
            ru: "☢️ ВНИМАНИЕ! ДОЖДЬ УРАНОВЫХ БОМБ! (-3 ♥)",
            it: "☢️ ATTENZIONE! PIOGGIA DI BOMBE ALL'URANIO! (-3 ♥)",
            es: "☢️ ¡PELIGRO! ¡LLUEVEN BOMBAS DE URANIO! (-3 ♥)",
            fr: "☢️ DANGER ! PLUIE DE BOMBES À L'URANIUM ! (-3 ♥)",
            ko: "☢️ 경고! 하늘에서 우라늄 폭탄 투하! (-3 ♥)",
            zh: "☢️ 警告！天降铀核弹雨！(-3 ♥)",
            ja: "☢️ 警告！空からウラン爆弾の雨！(-3 ♥)"
        },
        "☢️ URANYUM BOMBASI PATLADI! (-3 ♥)": {
            en: "☢️ URANIUM BOMB EXPLODED! (-3 ♥)",
            ru: "☢️ ВЗРЫВ УРАНОВОЙ БОМБЫ! (-3 ♥)",
            it: "☢️ BOMBA ALL'URANIO ESPLOSA! (-3 ♥)",
            es: "☢️ ¡EXPLOTÓ LA BOMBA DE URANIO! (-3 ♥)",
            fr: "☢️ BOMBE À L'URANIUM EXPLOSÉE ! (-3 ♥)",
            ko: "☢️ 우라늄 폭탄 폭발! (-3 ♥)",
            zh: "☢️ 铀核弹爆炸！(-3 ♥)",
            ja: "☢️ ウラン爆弾が爆発！(-3 ♥)"
        },
        "+5 KRİSTAL!": {
            en: "+5 CRYSTALS!",
            ru: "+5 КРИСТАЛЛОВ!",
            it: "+5 CRISTALLI!",
            es: "¡+5 CRISTALES!",
            fr: "+5 CRISTAUX !",
            ko: "+5 크리스탈!",
            zh: "+5 水晶！",
            ja: "+5 クリスタル！"
        },
        "🚀 SÜPER TRAMBOLİN! YÜKSEK FIRLATMA!": {
            en: "🚀 SUPER TRAMPOLINE! HIGH LAUNCH!",
            ru: "🚀 СУПЕР-БАТУТ! ВЫСОКИЙ ПРЫЖОК!",
            it: "🚀 SUPER TRAMPOLINO! LANCIO ALTO!",
            es: "🚀 ¡SÚPER TRAMPOLÍN! ¡GRAN SALTO!",
            fr: "🚀 SUPER TRAMPOLINE ! SAUT GÉANT !",
            ko: "🚀 슈퍼 트램펄린! 고공 점프!",
            zh: "🚀 超级蹦床！高空弹射！",
            ja: "🚀 スーパートランポリン！大ジャンプ！"
        },
        "🌀 RÜZGAR FANI SAĞA İTİYOR! >>>": {
            en: "🌀 WIND TURBINE PUSHING RIGHT! >>>",
            ru: "🌀 ВЕТЕР ДУЕТ ВПРАВО! >>>",
            it: "🌀 VENTO SPINGE A DESTRA! >>>",
            es: "🌀 ¡VIENTO EMPUJA A LA DERECHA! >>>",
            fr: "🌀 LE VENT POUSSE À DROITE ! >>>",
            ko: "🌀 바람 팬이 오른쪽으로 밉니다! >>>",
            zh: "🌀 强风向右推动！>>>",
            ja: "🌀 強風が右へ押し出す！>>>"
        },
        "<<< 🌀 RÜZGAR FANI SOLA İTİYOR!": {
            en: "<<< 🌀 WIND TURBINE PUSHING LEFT!",
            ru: "<<< 🌀 ВЕТЕР ДУЕТ ВЛЕВО!",
            it: "<<< 🌀 VENTO SPINGE A SINISTRA!",
            es: "<<< 🌀 ¡VIENTO EMPUJA A LA IZQUIERDA!",
            fr: "<<< 🌀 LE VENT POUSSE À GAUCHE !",
            ko: "<<< 🌀 바람 팬이 왼쪽으로 밉니다!",
            zh: "<<< 🌀 强风向左推动！",
            ja: "<<< 🌀 強風が左へ押し出す！"
        },
        "🌀 RÜZGAR FANI YUKARI İTİYOR! ▲▲": {
            en: "🌀 WIND UPDRAFT PUSHING UP! ▲▲",
            ru: "🌀 ВОСХОДЯЩИЙ ПОТОК ВВЕРХ! ▲▲",
            it: "🌀 CORRENTE ASCENDENTE! ▲▲",
            es: "🌀 ¡CORRIENTE DE VIENTO HACIA ARRIBA! ▲▲",
            fr: "🌀 COURANT ASCENDANT ! ▲▲",
            ko: "🌀 상승 기류가 위로 밀어올립니다! ▲▲",
            zh: "🌀 上升气流向上推动！▲▲",
            ja: "🌀 上昇気流で押し上げ！▲▲"
        },
        "⚡ LAZER KAPISI!": {
            en: "⚡ LASER GATE!",
            ru: "⚡ ЛАЗЕРНЫЕ ВРАТА!",
            it: "⚡ BARRIERA LASER!",
            es: "⚡ ¡PUERTA LÁSER!",
            fr: "⚡ BARRIÈRE LASER !",
            ko: "⚡ 레이저 게이트!",
            zh: "⚡ 激光门！",
            ja: "⚡ レーザーゲート！"
        },
        "😡 TROL TUZAĞI! YER BİR ANDA ÇÖKTÜ (-3 ♥)!": {
            en: "😡 TROLL TRAP! FLOOR COLLAPSED (-3 ♥)!",
            ru: "😡 ТРОЛЛЬ-ЛОВУШКА! ПОЛ РУХНУЛ (-3 ♥)!",
            it: "😡 TRAPPOLA TROLL! PAVIMENTO CROLLATO (-3 ♥)!",
            es: "😡 ¡TRAMPA TROLL! ¡EL SUELO CEDIÓ (-3 ♥)!",
            fr: "😡 PIÈGE TROLL ! LE SOL S'EST EFFONDRÉ (-3 ♥) !",
            ko: "😡 트롤 함정! 바닥이 갑자기 무너졌습니다 (-3 ♥)!",
            zh: "😡 巨魔陷阱！地面瞬间坍塌 (-3 ♥)！",
            ja: "😡 トロール罠！床が突然崩れた (-3 ♥)！"
        },
        "🙃 SÜRPRİZ TROL YAYI! HAVAYA UÇTUN!": {
            en: "🙃 SURPRISE TROLL SPRING!",
            ru: "🙃 СЮРПРИЗ! ТРОЛЛЬ-ПРУЖИНА!",
            it: "🙃 MOLLA TROLL A SORPRESA!",
            es: "🙃 ¡RESORTE TROLL SORPRESA!",
            fr: "🙃 RESSORT TROLL SURPRISE !",
            ko: "🙃 깜짝 트롤 스프링 발동!",
            zh: "🙃 惊喜巨魔弹簧！弹飞啦！",
            ja: "🙃 サプライズ・トロールバネ！"
        },
        "😈 GÖKTEN SÜRPRİZ TROL PUSUSU!": {
            en: "😈 SKY TROLL AMBUSH!",
            ru: "😈 НЕБЕСНАЯ ТРОЛЛЬ-ЗАСАДА!",
            it: "😈 IMBOSCATA TROLL DAL CIELO!",
            es: "😈 ¡EMBOSCADA TROLL DEL CIELO!",
            fr: "😈 EMBUSCADE TROLL DU CIEL !",
            ko: "😈 하늘에서 기습 트롤 매복!",
            zh: "😈 天降巨魔伏击！",
            ja: "😈 空からトロール奇襲！"
        },
        "🤡 SAHTE KAYIT BAYRAĞI! GERÇEĞİ İLERİDE!": {
            en: "🤡 FAKE CHECKPOINT! REAL ONE AHEAD!",
            ru: "🤡 ФАЛЬШИВЫЙ ЧЕКПОИНТ! НАСТОЯЩИЙ ВПЕРЕДИ!",
            it: "🤡 FALSO CHECKPOINT! QUELLO VERO È AVANTI!",
            es: "🤡 ¡PUNTO DE CONTROL FALSO! ¡EL REAL ESTÁ ADELANTE!",
            fr: "🤡 FAUX POINT DE CONTRÔLE ! LE VRAI EST PLUS LOIN !",
            ko: "🤡 가짜 체크포인트! 진짜는 앞에 있습니다!",
            zh: "🤡 假存档旗！真正的在前面！",
            ja: "🤡 偽チェックポイント！本物は先だ！"
        },
        "🤡 HAHAHA! TROL PORTAL KAÇTI! YAKALA!": {
            en: "🤡 HAHAHA! TROLL PORTAL DODGED! CATCH IT!",
            ru: "🤡 ХА-ХА! ПОРТАЛ УБЕЖАЛ! ДОГОНЯЙ!",
            it: "🤡 AHAHAH! IL PORTALE È SCAPPATO! PRENDILO!",
            es: "🤡 ¡JAJAJA! ¡EL PORTAL ESCAPÓ! ¡ATRÁPALO!",
            fr: "🤡 HAHAHA ! LE PORTAIL A FUI ! ATTRAPEZ-LE !",
            ko: "🤡 하하하! 트롤 포탈이 도망쳤습니다! 잡으세요!",
            zh: "🤡 哈哈哈！巨魔传送门溜走了！快追！",
            ja: "🤡 ハハハ！ポータルが逃げたぞ！捕まえろ！"
        },
        "🌀 IŞINLANDIN!": {
            en: "🌀 TELEPORTED!",
            ru: "🌀 ТЕЛЕПОРТАЦИЯ!",
            it: "🌀 TELETRASPORTATO!",
            es: "🌀 ¡TELETRANSPORTADO!",
            fr: "🌀 TÉLÉPORTÉ !",
            ko: "🌀 순간이동!",
            zh: "🌀 已传送！",
            ja: "🌀 テレポート！"
        },
        "⚡ YÜKSEK VOLTAJ ELEKTRİK!": {
            en: "⚡ HIGH-VOLTAGE ELECTRIC SHOCK!",
            ru: "⚡ ВЫСОКОВОЛЬТНЫЙ РАЗРЯД!",
            it: "⚡ ALTA TENSIONE ELETTRICA!",
            es: "⚡ ¡DESCARGA DE ALTO VOLTAJE!",
            fr: "⚡ HAUTE TENSION ÉLECTRIQUE !",
            ko: "⚡ 고전압 감전 주의!",
            zh: "⚡ 高压电击！",
            ja: "⚡ 高圧電流ショック！"
        },
        "🔥 KIZGIN LAV!": {
            en: "🔥 MOLTEN LAVA!",
            ru: "🔥 РАСКАЛЕННАЯ ЛАВА!",
            it: "🔥 LAVA INCANDESCENTE!",
            es: "🔥 ¡LAVA ARDIENTE!",
            fr: "🔥 LAVE EN FUSION !",
            ko: "🔥 뜨거운 용암!",
            zh: "🔥 炽热熔岩！",
            ja: "🔥 灼熱の溶岩！"
        },
        "😡 SAHTE ZÜMRÜT! EN BAŞA IŞINLANDIN!": {
            en: "😡 FAKE EMERALD! TELEPORTED TO START!",
            ru: "😡 ФАЛЬШИВЫЙ ИЗУМРУД! ТЕЛЕПОРТ В НАЧАЛО!",
            it: "😡 SMERALDO FALSO! TORNATO ALL'INIZIO!",
            es: "😡 ¡ESMERALDA FALSA! ¡DEVUELTO AL INICIO!",
            fr: "😡 FAUSSE ÉMERAUDE ! RETOUR AU DÉPART !",
            ko: "😡 가짜 에메랄드! 처음 위치로 이동!",
            zh: "😡 假翡翠！被传回起点啦！",
            ja: "😡 偽エメラルド！スタート地点へ強制送還！"
        },
        "EZİLDİ! +150": {
            en: "CRUSHED! +150",
            ru: "РАЗДАВЛЕН! +150",
            it: "SCHIACCIATO! +150",
            es: "¡APLASTADO! +150",
            fr: "ÉCRASÉ ! +150",
            ko: "처치! +150",
            zh: "踩扁！+150",
            ja: "撃破！+150"
        },
        "ZIRH KIRILDI!": {
            en: "ARMOR SHATTERED!",
            ru: "БРОНЯ ПРОБИТА!",
            it: "ARMATURA ROTTA!",
            es: "¡ARMADURA ROTA!",
            fr: "ARMURE BRISÉE !",
            ko: "장갑 파괴!",
            zh: "护甲击碎！",
            ja: "アーマー破壊！"
        },

        // 4. CANVAS LABELS & LEVEL 1 TUTORIAL SIGNS
        "🌀 RÜZGAR FANI İTİYOR >>>": {
            en: "🌀 WIND TURBINE >>>",
            ru: "🌀 ПОТОК ВЕТРА >>>",
            it: "🌀 TURBINA VENTO >>>",
            es: "🌀 TURBINA DE VIENTO >>>",
            fr: "🌀 TURBINE À VENT >>>",
            ko: "🌀 강풍 터빈 >>>",
            zh: "🌀 强风涡轮 >>>",
            ja: "🌀 強風ファン >>>"
        },
        "<<< 🌀 RÜZGAR FANI İTİYOR": {
            en: "<<< 🌀 WIND TURBINE",
            ru: "<<< 🌀 ПОТОК ВЕТРА",
            it: "<<< 🌀 TURBINA VENTO",
            es: "<<< 🌀 TURBINA DE VIENTO",
            fr: "<<< 🌀 TURBINE À VENT",
            ko: "<<< 🌀 강풍 터빈",
            zh: "<<< 🌀 强风涡轮",
            ja: "<<< 🌀 強風ファン"
        },
        "▲▲ SAĞA & YUKARI RÜZGAR İTİŞİ >>>": {
            en: "▲▲ UP & RIGHT WIND STREAM >>>",
            ru: "▲▲ ВЕТЕР ВВЕРХ И ВПРАВО >>>",
            it: "▲▲ VENTO SU E DESTRA >>>",
            es: "▲▲ VIENTO ARRIBA Y DERECHA >>>",
            fr: "▲▲ VENT HAUT ET DROITE >>>",
            ko: "▲▲ 우상향 상승 기류 >>>",
            zh: "▲▲ 右上强风气流 >>>",
            ja: "▲▲ 右上気流ブースト >>>"
        },
        "<<< SOLA & YUKARI RÜZGAR İTİŞİ ▲▲": {
            en: "<<< UP & LEFT WIND STREAM ▲▲",
            ru: "<<< ВЕТЕР ВВЕРХ И ВЛЕВО ▲▲",
            it: "<<< VENTO SU E SINISTRA ▲▲",
            es: "<<< VIENTO ARRIBA E IZQUIERDA ▲▲",
            fr: "<<< VENT HAUT ET GAUCHE ▲▲",
            ko: "<<< 좌상향 상승 기류 ▲▲",
            zh: "<<< 左上强风气流 ▲▲",
            ja: "<<< 左上気流ブースト ▲▲"
        },
        "▲ ▲ ▲ YUKARI RÜZGAR İTİŞİ ▲ ▲ ▲": {
            en: "▲ ▲ ▲ WIND UPDRAFT ▲ ▲ ▲",
            ru: "▲ ▲ ▲ ВОСХОДЯЩИЙ ПОТОК ▲ ▲ ▲",
            it: "▲ ▲ ▲ CORRENTE ASCENDENTE ▲ ▲ ▲",
            es: "▲ ▲ ▲ CORRIENTE ASCENDENTE ▲ ▲ ▲",
            fr: "▲ ▲ ▲ COURANT ASCENDANT ▲ ▲ ▲",
            ko: "▲ ▲ ▲ 상승 기류 ▲ ▲ ▲",
            zh: "▲ ▲ ▲ 上升气流 ▲ ▲ ▲",
            ja: "▲ ▲ ▲ 上昇気流 ▲ ▲ ▲"
        },
        "🌀 DEV RÜZGAR FANI": {
            en: "🌀 GIANT WIND TURBINE",
            ru: "🌀 ГИГАНТСКАЯ ТУРБИНА",
            it: "🌀 TURBINA GIGANTE",
            es: "🌀 TURBINA GIGANTE",
            fr: "🌀 TURBINE GÉANTE",
            ko: "🌀 대형 바람 터빈",
            zh: "🌀 巨型风力涡轮",
            ja: "🌀 巨大ウィンドファン"
        },
        "▲ SÜPER ▲": {
            en: "▲ SUPER ▲",
            ru: "▲ СУПЕР ▲",
            it: "▲ SUPER ▲",
            es: "▲ SÚPER ▲",
            fr: "▲ SUPER ▲",
            ko: "▲ 슈퍼 ▲",
            zh: "▲ 超级 ▲",
            ja: "▲ スーパー ▲"
        },
        "🙃 TROL YAY": {
            en: "🙃 TROLL SPRING",
            ru: "🙃 ТРОЛЛЬ",
            it: "🙃 MOLLA TROLL",
            es: "🙃 TROLL",
            fr: "🙃 RESSORT TROLL",
            ko: "🙃 트롤 스프링",
            zh: "🙃 巨魔弹簧",
            ja: "🙃 トロールバネ"
        },
        "[?] Bloklarına Alttan Vur -> Ateş Topu & Kalkan!": {
            en: "Hit [?] Blocks from Below -> Fireball & Shield!",
            ru: "Бей блоки [?] снизу -> Огненный шар и Щит!",
            it: "Colpisci i blocchi [?] dal basso -> Fuoco e Scudo!",
            es: "¡Golpea bloques [?] desde abajo -> Fuego y Escudo!",
            fr: "Frappez les blocs [?] par-dessous -> Feu et Bouclier !",
            ko: "[?] 블록을 아래에서 타격 -> 파이어볼 & 방어막!",
            zh: "从下方顶击 [?] 方块 -> 获取火球与护盾！",
            ja: "[?] ブロックを下から叩け -> ファイア＆シールド！"
        },
        "Duvara Zıpla -> Duvardan Sek! (Wall Jump)": {
            en: "Jump at Wall -> Wall Jump to Climb!",
            ru: "Прыгни на стену -> Оттолкнись (Прыжок от стены)!",
            it: "Salta sul muro -> Rimbalza (Salto a parete)!",
            es: "¡Salta hacia el muro -> Rebota (Salto en pared)!",
            fr: "Sautez contre le mur -> Rebondissez (Wall Jump) !",
            ko: "벽을 향해 점프 -> 벽 차기로 등반! (Wall Jump)",
            zh: "跳向墙壁 -> 连续蹬墙跳跃攀爬！(Wall Jump)",
            ja: "壁にジャンプ -> 壁蹴りで登れ！(Wall Jump)"
        },

        // 5. UI MODALS, CLOUD, FEEDBACK, UMP & LEADERBOARD STATUS MESSAGES
        "Kapat (ESC)": {
            en: "Close (ESC)",
            ru: "Закрыть (ESC)",
            it: "Chiudi (ESC)",
            es: "Cerrar (ESC)",
            fr: "Fermer (ESC)",
            ko: "닫기 (ESC)",
            zh: "关闭 (ESC)",
            ja: "閉じる (ESC)"
        },
        "🌐 Web Tarayıcıda Aç": {
            en: "🌐 Open in Web Browser",
            ru: "🌐 Открыть в браузере",
            it: "🌐 Apri nel browser",
            es: "🌐 Abrir en el navegador",
            fr: "🌐 Ouvrir dans le navigateur",
            ko: "🌐 웹 브라우저에서 열기",
            zh: "🌐 在浏览器中打开",
            ja: "🌐 ブラウザで開く"
        },
        "OKUDUM VE KAPAT ✓": {
            en: "READ & CLOSE ✓",
            ru: "ПРОЧИТАНО И ЗАКРЫТЬ ✓",
            it: "LETTO E CHIUDI ✓",
            es: "LEÍDO Y CERRAR ✓",
            fr: "LU ET FERMER ✓",
            ko: "확인 및 닫기 ✓",
            zh: "已阅并关闭 ✓",
            ja: "確認して閉じる ✓"
        },
        "AD_RULES_BOX_HTML": {
            tr: `<strong style="color:#00f2fe;">📺 Akıllı &amp; Kullanıcı Dostu Reklam Kuralımız:</strong><br>• Oyun sırasında asla tam ekran zorunlu reklam çıkmaz.<br>• Bölüm sonu geçiş reklamları en fazla <strong>3 bölüm zaferinde 1 kez</strong> (en az 3 dakika arayla) gösterilir.<br>• Ödüllü videolar (Canlanma, 2x Ödül, Hazine Sandığı) tamamen <strong>isteğe bağlıdır</strong>.`,
            en: `<strong style="color:#00f2fe;">📺 Smart &amp; Player-Friendly Ad Policy:</strong><br>• Never interrupts active gameplay with forced fullscreen ads.<br>• End-of-stage interstitials appear at most <strong>once every 3 victories</strong>.<br>• Rewarded videos (Revive, 2x Bonus, Treasure Chest) are <strong>100% optional</strong>.`,
            ru: `<strong style="color:#00f2fe;">📺 Умная политика рекламы:</strong><br>• Никакой принудительной рекламы во время игры.<br>• Межстраничная реклама — не чаще <strong>1 раза за 3 победы</strong>.<br>• Видео с наградой (Возрождение, 2x Бонус, Сундук) — <strong>полностью по желанию</strong>.`,
            it: `<strong style="color:#00f2fe;">📺 Regola annunci amichevole:</strong><br>• Nessun annuncio forzato durante il gioco.<br>• Annunci di fine livello al massimo <strong>1 volta ogni 3 vittorie</strong>.<br>• I video con premio (Rinasci, Bonus 2x, Baule) sono <strong>100% facoltativi</strong>.`,
            es: `<strong style="color:#00f2fe;">📺 Política de anuncios amigable:</strong><br>• Nunca hay anuncios forzados durante la partida.<br>• Anuncios entre niveles máximo <strong>1 vez cada 3 victorias</strong>.<br>• Los videos con recompensa (Revivir, Bono 2x, Cofre) son <strong>100% opcionales</strong>.`,
            fr: `<strong style="color:#00f2fe;">📺 Règle publicitaire respectueuse :</strong><br>• Aucune publicité forcée pendant la partie.<br>• Publicités de fin de niveau au maximum <strong>1 fois toutes les 3 victoires</strong>.<br>• Les vidéos récompensées (Revivre, Bonus 2x, Coffre) sont <strong>100% facultatives</strong>.`,
            ko: `<strong style="color:#00f2fe;">📺 스마트 &amp; 사용자 친화적 광고 정책:</strong><br>• 게임 플레이 도중 강제 전면 광고가 절대 나오지 않습니다.<br>• 스테이지 완료 광고는 최대 <strong>3회 승리당 1회</strong>만 표시됩니다.<br>• 보상형 비디오(부활, 2배 보상, 보물 상자)는 <strong>100% 선택 사항</strong>입니다.`,
            zh: `<strong style="color:#00f2fe;">📺 智能友好的广告规则：</strong><br>• 游戏进行中绝不弹出强制全屏广告。<br>• 过关插屏广告最多每 <strong>3 次胜利显示 1 次</strong>。<br>• 激励视频（复活、双倍奖励、宝箱）完全<strong>自愿观看</strong>。`,
            ja: `<strong style="color:#00f2fe;">📺 プレイヤーに優しい広告ポリシー：</strong><br>• プレイ中に強制的な全画面広告は一切表示されません。<br>• ステージクリア後の広告は最大<strong>3回勝利につき1回</strong>のみです。<br>• リワード動画（復活・2倍ボーナス・宝箱）は<strong>100%任意</strong>です。`
        },
        "GDPR_UMP_BOX_HTML": {
            tr: `<strong>🇪🇺 AB / AEA &amp; Birleşik Krallık (GDPR / Google UMP):</strong> Avrupa Ekonomik Alanı'nda bulunuyorsanız Google Resmi UMP İzin Formunu aşağıdaki butonla istediğiniz zaman yeniden açıp güncelleyebilirsiniz.`,
            en: `<strong>🇪🇺 EU / EEA &amp; UK (GDPR / Google UMP):</strong> If you are in the European Economic Area or UK, you can reopen and update the official Google UMP Consent Form anytime below.`,
            ru: `<strong>🇪🇺 ЕС / ЕЭЗ и Великобритания (GDPR / Google UMP):</strong> Вы можете в любое время открыть и обновить официальную форму согласия Google UMP кнопкой ниже.`,
            it: `<strong>🇪🇺 UE / SEE e Regno Unito (GDPR / Google UMP):</strong> Puoi riaprire e aggiornare il modulo di consenso ufficiale Google UMP in qualsiasi momento qui sotto.`,
            es: `<strong>🇪🇺 UE / EEE y Reino Unido (GDPR / Google UMP):</strong> Puedes reabrir y actualizar el formulario oficial de consentimiento Google UMP en cualquier momento abajo.`,
            fr: `<strong>🇪🇺 UE / EEE et Royaume-Uni (GDPR / Google UMP) :</strong> Vous pouvez rouvrir et mettre à jour le formulaire officiel Google UMP à tout moment ci-dessous.`,
            ko: `<strong>🇪🇺 EU / EEA 및 영국 (GDPR / Google UMP):</strong> 유럽 경제 지역에 거주하는 경우 아래 버튼으로 공식 Google UMP 동의 양식을 언제든지 다시 열 수 있습니다.`,
            zh: `<strong>🇪🇺 欧盟 / 欧洲经济区及英国 (GDPR / Google UMP)：</strong> 您可以随时通过下方按钮重新打开并更新 Google UMP 官方同意表单。`,
            ja: `<strong>🇪🇺 EU / EEA 及び英国 (GDPR / Google UMP)：</strong> 下のボタンからいつでも公式 Google UMP 同意フォームを再表示・更新できます。`
        },
        "Play Games & Google Drive senkronize ediliyor...": {
            en: "Syncing Play Games & Google Drive...",
            ru: "Синхронизация Play Games и Google Drive...",
            it: "Sincronizzazione Play Games e Google Drive...",
            es: "Sincronizando Play Games y Google Drive...",
            fr: "Synchronisation Play Games et Google Drive...",
            ko: "Play Games 및 Google 드라이브 동기화 중...",
            zh: "正在同步 Play Games 与 Google 云端硬盘...",
            ja: "Play Games と Google ドライブを同期中..."
        },
        "Cihaz & Tarayıcı Bulut Kaydı Güncellendi ✓": {
            en: "Device & Cloud Backup Updated ✓",
            ru: "Облачное сохранение обновлено ✓",
            it: "Salvataggio cloud aggiornato ✓",
            es: "Guardado en la nube actualizado ✓",
            fr: "Sauvegarde cloud mise à jour ✓",
            ko: "기기 및 클라우드 백업 업데이트 완료 ✓",
            zh: "设备与云端备份已更新 ✓",
            ja: "デバイス＆クラウドバックアップ更新完了 ✓"
        },
        "Google Drive paylaşım ekranı açıldı ✓": {
            en: "Google Drive share sheet opened ✓",
            ru: "Окно отправки Google Drive открыто ✓",
            it: "Condivisione Google Drive aperta ✓",
            es: "Pantalla de Google Drive abierta ✓",
            fr: "Partage Google Drive ouvert ✓",
            ko: "Google 드라이브 공유 화면 열림 ✓",
            zh: "已打开 Google 云端硬盘分享界面 ✓",
            ja: "Google ドライブ共有画面を開きました ✓"
        },
        "Yedek dosyası indirildi (Google Drive'a yükleyebilirsiniz) ✓": {
            en: "Backup downloaded (you can upload to Google Drive) ✓",
            ru: "Резервная копия скачана ✓",
            it: "File di backup scaricato ✓",
            es: "Archivo de respaldo descargado ✓",
            fr: "Fichier de sauvegarde téléchargé ✓",
            ko: "백업 파일 다운로드 완료 ✓",
            zh: "备份文件已下载 ✓",
            ja: "バックアップファイルをダウンロードしました ✓"
        },
        "Google UMP (GDPR) Rıza Formu başarıyla güncellendi ✓": {
            en: "Google UMP (GDPR) Consent Form updated ✓",
            ru: "Форма согласия Google UMP (GDPR) обновлена ✓",
            it: "Modulo di consenso Google UMP (GDPR) aggiornato ✓",
            es: "Formulario Google UMP (GDPR) actualizado ✓",
            fr: "Formulaire Google UMP (GDPR) mis à jour ✓",
            ko: "Google UMP(GDPR) 동의 양식이 업데이트되었습니다 ✓",
            zh: "Google UMP (GDPR) 同意表单已更新 ✓",
            ja: "Google UMP (GDPR) 同意フォームを更新しました ✓"
        },
        "Bölgenizde (AB/AET dışı) ek Google UMP formu zorunlu değildir • Yukarıdaki butonla reklam tercihinizi doğrudan değiştirebilirsiniz ✓": {
            en: "Additional Google UMP form is not required in your region • You can toggle ad preferences directly above ✓",
            ru: "В вашем регионе дополнительная форма UMP не требуется • Используйте переключатель выше ✓",
            it: "Il modulo UMP aggiuntivo non è richiesto nella tua regione • Usa il pulsante sopra ✓",
            es: "El formulario UMP adicional no es obligatorio en tu región • Usa el botón de arriba ✓",
            fr: "Le formulaire UMP supplémentaire n'est pas requis dans votre région • Utilisez le bouton ci-dessus ✓",
            ko: "현재 지역에서는 추가 UMP 양식이 필요하지 않습니다 • 위 버튼으로 직접 설정하세요 ✓",
            zh: "您所在地区无需额外 UMP 表单 • 可直接通过上方按钮切换广告偏好 ✓",
            ja: "お住まいの地域では追加のUMPフォームは不要です • 上のボタンで直接変更できます ✓"
        },
        "✅ Mesajınız kopyalandı ve Google Play Console Test Geri Bildirimi ekranı açılıyor...": {
            en: "✅ Message copied & opening Google Play Console Feedback...",
            ru: "✅ Сообщение скопировано, открывается отзыв Google Play...",
            it: "✅ Messaggio copiato, apertura feedback Google Play...",
            es: "✅ Mensaje copiado y abriendo comentarios de Google Play...",
            fr: "✅ Message copié et ouverture des commentaires Google Play...",
            ko: "✅ 메시지가 복사되었으며 Google Play 피드백 화면이 열립니다...",
            zh: "✅ 消息已复制，正在打开 Google Play 反馈界面...",
            ja: "✅ メッセージをコピーしました。Google Play フィードバックを開いています..."
        },
        "✅ Geri bildiriminiz geliştirici ekibe iletildi! Teşekkür ederiz.": {
            en: "✅ Your feedback has been sent to the developer team! Thank you.",
            ru: "✅ Ваш отзыв отправлен разработчикам! Спасибо.",
            it: "✅ Il tuo feedback è stato inviato al team! Grazie.",
            es: "✅ ¡Tu comentario fue enviado al equipo desarrollador! Gracias.",
            fr: "✅ Votre avis a été envoyé à l'équipe ! Merci.",
            ko: "✅ 피드백이 개발팀에 전달되었습니다! 감사합니다.",
            zh: "✅ 您的反馈已发送至开发团队！非常感谢。",
            ja: "✅ フィードバックを開発チームに送信しました！ありがとうございます。"
        },
        "✅ Geri bildirim raporu hazırlandı! Teşekkür ederiz.": {
            en: "✅ Feedback report prepared! Thank you.",
            ru: "✅ Отчет подготовлен! Спасибо.",
            it: "✅ Rapporto di feedback pronto! Grazie.",
            es: "✅ ¡Informe de comentarios listo! Gracias.",
            fr: "✅ Rapport de commentaires préparé ! Merci.",
            ko: "✅ 피드백 보고서가 준비되었습니다! 감사합니다.",
            zh: "✅ 反馈报告已准备就绪！谢谢。",
            ja: "✅ フィードバックレポートを作成しました！ありがとうございます。"
        },
        "🎯 Lig ödülünü alabilmek için önce en az 1 bölümü zaferle tamamlamalısın!": {
            en: "🎯 Complete at least 1 stage to claim your League Reward!",
            ru: "🎯 Пройдите хотя бы 1 уровень, чтобы получить награду лиги!",
            it: "🎯 Completa almeno 1 livello per riscattare il premio di lega!",
            es: "🎯 ¡Completa al menos 1 nivel para reclamar el premio de liga!",
            fr: "🎯 Terminez au moins 1 niveau pour réclamer la récompense de ligue !",
            ko: "🎯 리그 보상을 받으려면 먼저 최소 1개 스테이지를 클리어하세요!",
            zh: "🎯 请先至少通关 1 个关卡以领取联赛奖励！",
            ja: "🎯 リーグ報酬を受け取るには、まず1ステージ以上クリアしてください！"
        },
        "ℹ️ Bu lig kademesinin ödülünü zaten aldın! Sıralamanı yükselterek yeni lig ödülünü açabilirsin.": {
            en: "ℹ️ You already claimed this league tier! Rank up to unlock the next reward.",
            ru: "ℹ️ Награда этой лиги уже получена! Повысьте ранг для новой награды.",
            it: "ℹ️ Hai già riscattato questo premio! Sali di grado per il prossimo.",
            es: "ℹ️ ¡Ya reclamaste este premio de liga! Sube de rango para el siguiente.",
            fr: "ℹ️ Récompense déjà réclamée ! Montez en grade pour la suivante.",
            ko: "ℹ️ 이미 이 리그 등급 보상을 받았습니다! 순위를 올려 다음 보상을 잠금 해제하세요.",
            zh: "ℹ️ 您已领取过该联赛段位奖励！提升排名可解锁更高奖励。",
            ja: "ℹ️ このリーグ報酬は受取済みです！ランクを上げて次の報酬を解放しよう。"
        },
        "🎮 Google Play Games Resmi Sıralama Tablosu açılıyor ve skorlarınız senkronize ediliyor...": {
            en: "🎮 Opening official Google Play Games Leaderboard & syncing scores...",
            ru: "🎮 Открытие официальной таблицы Google Play Games и синхронизация...",
            it: "🎮 Apertura classifica ufficiale Google Play Games e sincronizzazione...",
            es: "🎮 Abriendo clasificación oficial de Google Play Games y sincronizando...",
            fr: "🎮 Ouverture du classement officiel Google Play Games et synchronisation...",
            ko: "🎮 Google Play Games 공식 리더보드 열기 및 점수 동기화 중...",
            zh: "🎮 正在打开 Google Play Games 官方排行榜并同步分数...",
            ja: "🎮 Google Play Games 公式ランキングを開いてスコアを同期中..."
        },
        "ℹ️ Google Play Games resmi penceresi Android cihazlarda Play Games uygulaması üzerinden açılır. Skorunuz canlı tabloda güncellendi!": {
            en: "ℹ️ Official Google Play Games view opens via the Play Games app on Android. Your live score is updated!",
            ru: "ℹ️ Официальное окно открывается через приложение Play Games на Android. Ваш счет обновлен!",
            it: "ℹ️ La vista ufficiale Google Play Games si apre nell'app su Android. Punteggio aggiornato!",
            es: "ℹ️ La tabla oficial se abre con la app Play Games en Android. ¡Tu puntuación fue actualizada!",
            fr: "ℹ️ Le classement officiel s'ouvre via l'application Play Games sur Android. Score mis à jour !",
            ko: "ℹ️ 공식 리더보드는 Android의 Play Games 앱에서 열립니다. 실시간 점수가 업데이트되었습니다!",
            zh: "ℹ️ 官方排行榜在 Android 设备上通过 Play Games 应用打开。您的实时分数已更新！",
            ja: "ℹ️ 公式ランキングはAndroidのPlay Gamesアプリで開きます。ライブスコアを更新しました！"
        },
        "BÖLÜM ARASI MOLA": {
            en: "STAGE BREAK",
            ru: "ПЕРЕРЫВ МЕЖДУ УРОВНЯМИ",
            it: "PAUSA TRA LIVELLI",
            es: "PAUSA ENTRE NIVELES",
            fr: "PAUSE ENTRE NIVEAUX",
            ko: "스테이지 휴식 시간",
            zh: "关卡间歇休息",
            ja: "ステージ間ブレイク"
        },
        "Bölüm Sonu Kısa Mola": {
            en: "Short Stage Break",
            ru: "Короткая пауза",
            it: "Breve pausa",
            es: "Breve pausa de nivel",
            fr: "Courte pause",
            ko: "짧은 스테이지 휴식",
            zh: "短暂过关休息",
            ja: "ショートブレイク"
        },
        "Kullanıcı dostu mod: Sadece 3 bölüm kazanıldığında 1 kez gösterilir!": {
            en: "Player-friendly mode: Shown at most once every 3 stage victories!",
            ru: "Дружелюбный режим: показывается не чаще 1 раза за 3 победы!",
            it: "Modalità amichevole: mostrato al massimo 1 volta ogni 3 vittorie!",
            es: "¡Modo amigable: se muestra máximo 1 vez cada 3 victorias!",
            fr: "Mode respectueux : affiché au maximum 1 fois toutes les 3 victoires !",
            ko: "사용자 친화 모드: 3개 스테이지 승리마다 최대 1회만 표시됩니다!",
            zh: "友好模式：每取得 3 次胜利最多仅显示 1 次！",
            ja: "フレンドリーモード：3ステージ勝利ごとに最大1回のみ表示されます！"
        },

        // 6. UNDERGROUND SUB-PLATFORM CHAMBERS & MOVING ELEVATOR CABINS (Hareketli Asansör Kabini & Alt Platform Görev Sahneleri)
        "🛗 ALT BÖLÜM ASANSÖRÜ ▼": {
            en: "🛗 SUB-STAGE ELEVATOR ▼",
            ru: "🛗 ЛИФТ ПОДЗЕМНОЙ МИССИИ ▼",
            it: "🛗 ASCENSORE SOTTERRANEO ▼",
            es: "🛗 ASCENSOR SUBTERRÁNEO ▼",
            fr: "🛗 ASCENSEUR SOUTERRAIN ▼",
            ko: "🛗 지하 미션 엘리베이터 ▼",
            zh: "🛗 地下任务电梯 ▼",
            ja: "🛗 地下ミッションエレベーター ▼"
        },
        "🛗 ÇIKIŞ ASANSÖRÜ ▲": {
            en: "🛗 RETURN ELEVATOR ▲",
            ru: "🛗 ЛИФТ ВЫХОДА ▲",
            it: "🛗 ASCENSORE D'USCITA ▲",
            es: "🛗 ASCENSOR DE SALIDA ▲",
            fr: "🛗 ASCENSEUR DE SORTIE ▲",
            ko: "🛗 복귀 엘리베이터 ▲",
            zh: "🛗 返回主关电梯 ▲",
            ja: "🛗 地上復帰エレベーター ▲"
        },
        "🛗 İNİŞ ASANSÖRÜ": {
            en: "🛗 ARRIVAL ELEVATOR",
            ru: "🛗 ЛИФТ ПРИБЫТИЯ",
            it: "🛗 ASCENSORE D'ARRIVO",
            es: "🛗 ASCENSOR DE LLEGADA",
            fr: "🛗 ASCENSEUR D'ARRIVÉE",
            ko: "🛗 도착 엘리베이터",
            zh: "🛗 抵达电梯",
            ja: "🛗 到着エレベーター"
        },
        "🛗 ASANSÖR KABİNİ ALT BÖLÜME İNİYOR... ▼": {
            en: "🛗 ELEVATOR DESCENDING TO SUB-STAGE... ▼",
            ru: "🛗 ЛИФТ СПУСКАЕТСЯ В ПОДЗЕМЕЛЬЕ... ▼",
            it: "🛗 ASCENSORE IN DISCESA NEL SOTTOSUOLO... ▼",
            es: "🛗 ASCENSOR BAJANDO AL NIVEL SUBTERRÁNEO... ▼",
            fr: "🛗 DESCENTE DE L'ASCENSEUR EN COURS... ▼",
            ko: "🛗 엘리베이터가 지하 스테이지로 내려갑니다... ▼",
            zh: "🛗 电梯轿厢正在下降至地下关卡... ▼",
            ja: "🛗 エレベーターが地下ステージへ降下中... ▼"
        },
        "🛗 ÇIKIŞ ASANSÖRÜ ANA BÖLÜME ÇIKIYOR... ▲": {
            en: "🛗 ELEVATOR ASCENDING TO MAIN STAGE... ▲",
            ru: "🛗 ЛИФТ ПОДНИМАЕТСЯ НАВЕРХ... ▲",
            it: "🛗 ASCENSORE IN SALITA VERSO LA SUPERFICIE... ▲",
            es: "🛗 ASCENSOR SUBIENDO AL NIVEL PRINCIPAL... ▲",
            fr: "🛗 REMONTÉE DE L'ASCENSEUR VERS LA SURFACE... ▲",
            ko: "🛗 엘리베이터가 메인 스테이지로 올라갑니다... ▲",
            zh: "🛗 电梯轿厢正在上升返回主关卡... ▲",
            ja: "🛗 エレベーターがメインステージへ上昇中... ▲"
        },
        "🛗 ▲ ANA BÖLÜME ÇIK ▲": {
            en: "🛗 ▲ ASCEND TO MAIN STAGE ▲",
            ru: "🛗 ▲ ПОДНЯТЬСЯ НАВЕРХ ▲",
            it: "🛗 ▲ SALI AL LIVELLO ▲",
            es: "🛗 ▲ SUBIR AL NIVEL PRINCIPAL ▲",
            fr: "🛗 ▲ REMONTER AU NIVEAU ▲",
            ko: "🛗 ▲ 메인 스테이지로 상승 ▲",
            zh: "🛗 ▲ 乘电梯返回主关卡 ▲",
            ja: "🛗 ▲ エレベーターで地上へ ▲"
        },
        "🎯 GÖREVİ BİTİR & ASANSÖRE BİN": {
            en: "🎯 FINISH MISSION & BOARD ELEVATOR",
            ru: "🎯 ЗАВЕРШИ МИССИЮ И ВОЙДИ В ЛИФТ",
            it: "🎯 COMPLETA E PRENDI L'ASCENSORE",
            es: "🎯 COMPLETA Y SUBE AL ASCENSOR",
            fr: "🎯 TERMINEZ ET PRENEZ L'ASCENSEUR",
            ko: "🎯 미션 완료 후 엘리베이터 탑승",
            zh: "🎯 完成任务后乘坐电梯",
            ja: "🎯 ミッション完了でエレベーターへ"
        },
        "🟢 ALT PLATFORM GÖREVİ TAMAMLANDI ✓ • SAĞDAKİ ASANSÖRLE ANA BÖLÜME ÇIK ▲": {
            en: "🟢 SUB-MISSION COMPLETE ✓ • TAKE THE RIGHT ELEVATOR UP TO MAIN STAGE ▲",
            ru: "🟢 МИССИЯ ВЫПОЛНЕНА ✓ • ПОДНИМИСЬ НА ПРАВОМ ЛИФТЕ НАВЕРХ ▲",
            it: "🟢 MISSIONE COMPLETATA ✓ • PRENDI L'ASCENSORE A DESTRA PER SALIRE ▲",
            es: "🟢 MISIÓN COMPLETADA ✓ • TOMA EL ASCENSOR DERECHO PARA SUBIR ▲",
            fr: "🟢 MISSION TERMINÉE ✓ • PRENEZ L'ASCENSEUR À DROITE POUR REMONTER ▲",
            ko: "🟢 지하 미션 완료 ✓ • 오른쪽 엘리베이터를 타고 메인 스테이지로 올라가세요 ▲",
            zh: "🟢 地下任务已完成 ✓ • 乘坐右侧电梯返回主关卡 ▲",
            ja: "🟢 地下ミッション完了 ✓ • 右のエレベーターでメインステージへ戻ろう ▲"
        },
        "🟢 ALT GÖREV BORUSU ▼": {
            en: "🟢 SUB-MISSION PIPE ▼",
            ru: "🟢 ТРУБА ПОДЗЕМНОЙ МИССИИ ▼",
            it: "🟢 TUBO MISSIONE SEGRETA ▼",
            es: "🟢 TUBERÍA DE SUB-MISIÓN ▼",
            fr: "🟢 TUYAU DE SOUS-MISSION ▼",
            ko: "🟢 지하 미션 파이프 ▼",
            zh: "🟢 地下任务管道 ▼",
            ja: "🟢 地下ミッション土管 ▼"
        },
        "✓ ALT GÖREV TAMAMLANDI": {
            en: "✓ SUB-MISSION CLEARED",
            ru: "✓ МИССИЯ ВЫПОЛНЕНА",
            it: "✓ MISSIONE COMPLETATA",
            es: "✓ SUB-MISIÓN COMPLETADA",
            fr: "✓ SOUS-MISSION TERMINÉE",
            ko: "✓ 지하 미션 완료",
            zh: "✓ 地下任务已完成",
            ja: "✓ 地下ミッション完了"
        },
        "🟢 ÇIKIŞ BORUSU": {
            en: "🟢 RETURN PIPE",
            ru: "🟢 ТРУБА ВЫХОДА",
            it: "🟢 TUBO D'USCITA",
            es: "🟢 TUBERÍA DE SALIDA",
            fr: "🟢 TUYAU DE SORTIE",
            ko: "🟢 복귀 파이프",
            zh: "🟢 返回管道",
            ja: "🟢 出口土管"
        },
        "▲ ANA BÖLÜME ÇIK ▲": {
            en: "▲ EXIT TO MAIN STAGE ▲",
            ru: "▲ НАВЕРХ В ОСНОВНОЙ МИР ▲",
            it: "▲ TORNA AL LIVELLO ▲",
            es: "▲ SUBIR AL NIVEL PRINCIPAL ▲",
            fr: "▲ RETOUR AU NIVEAU ▲",
            ko: "▲ 메인 스테이지로 복귀 ▲",
            zh: "▲ 返回主关卡 ▲",
            ja: "▲ メインステージへ戻る ▲"
        },
        "🎯 GÖREVİ BİTİR & ÇIK": {
            en: "🎯 FINISH MISSION & EXIT",
            ru: "🎯 ЗАВЕРШИ МИССИЮ И ВЫЙДИ",
            it: "🎯 COMPLETA E ESCI",
            es: "🎯 COMPLETA Y SAL",
            fr: "🎯 TERMINEZ ET SORTEZ",
            ko: "🎯 미션 완료 후 탈출",
            zh: "🎯 完成任务后离开",
            ja: "🎯 ミッション完了で脱出"
        },
        "🟢 ALT PLATFORM GÖREV SAHNESİ! GÖREVİ TAMAMLA & ÇIK!": {
            en: "🟢 UNDERGROUND MISSION STAGE! COMPLETE TASK & EXIT!",
            ru: "🟢 ПОДЗЕМНАЯ МИССИЯ! ВЫПОЛНИ ЗАДАНИЕ И ВЫЙДИ!",
            it: "🟢 LIVELLO SOTTERRANEO! COMPLETA LA MISSIONE ED ESCI!",
            es: "🟢 ¡ESCENARIO SUBTERRÁNEO! ¡COMPLETA LA MISIÓN Y SAL!",
            fr: "🟢 ZONE SOUTERRAINE ! ACCOMPLISSEZ LA MISSION ET SORTEZ !",
            ko: "🟢 지하 플랫폼 미션 스테이지! 임무를 완수하고 탈출하세요!",
            zh: "🟢 地下平台任务关卡！完成任务并从右侧管道返回！",
            ja: "🟢 地下プラットフォーム任務！ミッションを達成して脱出しよう！"
        },
        "🎉 ALT BÖLÜM GÖREVİ TAMAMLANDI! (+20✪ +3❖ +25◆ +🛡 +🔥 +♥)": {
            en: "🎉 SUB-MISSION COMPLETE! (+20✪ +3❖ +25◆ +🛡 +🔥 +♥)",
            ru: "🎉 ПОДЗЕМНАЯ МИССИЯ ВЫПОЛНЕНА! (+20✪ +3❖ +25◆ +🛡 +🔥 +♥)",
            it: "🎉 MISSIONE SOTTERRANEA COMPLETATA! (+20✪ +3❖ +25◆ +🛡 +🔥 +♥)",
            es: "🎉 ¡MISIÓN SUBTERRÁNEA COMPLETADA! (+20✪ +3❖ +25◆ +🛡 +🔥 +♥)",
            fr: "🎉 MISSION SOUTERRAINE TERMINÉE ! (+20✪ +3❖ +25◆ +🛡 +🔥 +♥)",
            ko: "🎉 지하 미션 완료! (+20✪ +3❖ +25◆ +🛡 +🔥 +♥)",
            zh: "🎉 地下关卡任务完成！(+20✪ +3❖ +25◆ +🛡 +🔥 +♥)",
            ja: "🎉 地下ミッション達成！(+20✪ +3❖ +25◆ +🛡 +🔥 +♥)"
        },
        "🎉 ALT BÖLÜM GÖREVİ TAMAMLANDI! (+15 ✪, +2 ❖, +🛡)": {
            en: "🎉 SUB-MISSION COMPLETE! (+15 ✪, +2 ❖, +🛡)",
            ru: "🎉 ПОДЗЕМНАЯ МИССИЯ ВЫПОЛНЕНА! (+15 ✪, +2 ❖, +🛡)",
            it: "🎉 MISSIONE SOTTERRANEA COMPLETATA! (+15 ✪, +2 ❖, +🛡)",
            es: "🎉 ¡MISIÓN SUBTERRÁNEA COMPLETADA! (+15 ✪, +2 ❖, +🛡)",
            fr: "🎉 MISSION SOUTERRAINE TERMINÉE ! (+15 ✪, +2 ❖, +🛡)",
            ko: "🎉 지하 미션 완료! (+15 ✪, +2 ❖, +🛡)",
            zh: "🎉 地下关卡任务完成！(+15 ✪, +2 ❖, +🛡)",
            ja: "🎉 地下ミッション達成！(+15 ✪, +2 ❖, +🛡)"
        },
        "🚀 ANA BÖLÜME ÇIKTIN! DEVAM ET!": {
            en: "🚀 BACK ON MAIN STAGE! KEEP GOING!",
            ru: "🚀 ВОЗВРАЩЕНИЕ НАВЕРХ! ВПЕРЕД!",
            it: "🚀 TORNATO IN SUPERFICIE! CONTINUA!",
            es: "🚀 ¡DE VUELTA AL NIVEL PRINCIPAL! ¡SIGUE!",
            fr: "🚀 DE RETOUR EN SURFACE ! CONTINUEZ !",
            ko: "🚀 메인 스테이지 복귀! 계속 전진하세요!",
            zh: "🚀 已返回主关卡！继续前进！",
            ja: "🚀 メインステージに復帰！進もう！"
        },
        "🎯 ÖNCE ALT BÖLÜM GÖREVİNİ TAMAMLA!": {
            en: "🎯 COMPLETE THE UNDERGROUND MISSION FIRST!",
            ru: "🎯 СНАЧАЛА ВЫПОЛНИ ПОДЗЕМНУЮ МИССИЮ!",
            it: "🎯 COMPLETA PRIMA LA MISSIONE SOTTERRANEA!",
            es: "🎯 ¡PRIMERO COMPLETA LA MISIÓN SUBTERRÁNEA!",
            fr: "🎯 TERMINEZ D'ABORD LA MISSION SOUTERRAINE !",
            ko: "🎯 먼저 지하 미션 목표를 달성하세요!",
            zh: "🎯 请先完成地下任务目标！",
            ja: "🎯 先に地下ミッションを達成しよう！"
        },
        "🟢 ALT PLATFORM GÖREVİ TAMAMLANDI ✓ • SAĞDAKİ YEŞİL BORUDAN ANA BÖLÜME ÇIK ▲": {
            en: "🟢 SUB-MISSION COMPLETE ✓ • ENTER RIGHT GREEN PIPE TO RETURN UP ▲",
            ru: "🟢 МИССИЯ ВЫПОЛНЕНА ✓ • ВОЙДИ В ПРАВУЮ ТРУБУ ДЛЯ ВЫХОДА НАВЕРХ ▲",
            it: "🟢 MISSIONE COMPLETATA ✓ • USA IL TUBO VERDE A DESTRA PER SALIRE ▲",
            es: "🟢 MISIÓN COMPLETADA ✓ • ENTRA A LA TUBERÍA VERDE DERECHA PARA SUBIR ▲",
            fr: "🟢 MISSION TERMINÉE ✓ • PRENEZ LE TUYAU VERT À DROITE POUR REMONTER ▲",
            ko: "🟢 지하 미션 완료 ✓ • 오른쪽 초록 파이프로 들어가 메인 스테이지로 복귀하세요 ▲",
            zh: "🟢 地下任务已完成 ✓ • 进入右侧绿色管道返回主关卡 ▲",
            ja: "🟢 地下ミッション完了 ✓ • 右の緑の土管からメインステージへ戻ろう ▲"
        }
    };

    window.translateMarinextGameText = function (rawText, langOverride) {
        if (rawText === undefined || rawText === null) return "";
        const str = String(rawText);
        const lang = langOverride || (window.game && window.game.lang) || "tr";
        if (lang === "tr") {
            if (INGAME_TEXT_TABLE[str] && INGAME_TEXT_TABLE[str].tr) {
                return INGAME_TEXT_TABLE[str].tr;
            }
            return str;
        }

        const direct = INGAME_TEXT_TABLE[str];
        if (direct) {
            return direct[lang] || direct.en || str;
        }

        // Dynamic Pattern 1: "⚠️ ŞOK DALGASI (2 KALDI)!"
        const slamMatch = str.match(/^⚠️ ŞOK DALGASI \((\d+) KALDI\)!$/);
        if (slamMatch) {
            const n = slamMatch[1];
            const map = {
                en: `⚠️ SHOCKWAVE (${n} LEFT)!`,
                ru: `⚠️ УДАРНАЯ ВОЛНА (ОСТАЛОСЬ ${n})!`,
                it: `⚠️ ONDA D'URTO (${n} RIMASTI)!`,
                es: `⚠️ ¡ONDA DE CHOQUE (QUEDAN ${n})!`,
                fr: `⚠️ ONDE DE CHOC (${n} RESTANTS) !`,
                ko: `⚠️ 충격파 (${n}회 남음)!`,
                zh: `⚠️ 冲击波 (剩余 ${n} 次)！`,
                ja: `⚠️ 衝撃波 (残り ${n} 回)！`
            };
            return map[lang] || map.en;
        }

        // Dynamic Pattern 2: "${bossName} YENİLDİ! +2500"
        const bossDefeatMatch = str.match(/^(.+) YENİLDİ! \+2500$/);
        if (bossDefeatMatch) {
            const bName = bossDefeatMatch[1];
            const map = {
                en: `${bName} DEFEATED! +2500`,
                ru: `${bName} ПОВЕРЖЕН! +2500`,
                it: `${bName} SCONFITTO! +2500`,
                es: `¡${bName} DERROTADO! +2500`,
                fr: `${bName} VAINCU ! +2500`,
                ko: `${bName} 격파! +2500`,
                zh: `${bName} 已被击败！+2500`,
                ja: `${bName} 撃破！+2500`
            };
            return map[lang] || map.en;
        }

        // Dynamic Pattern 3: "❖ ANTİK ZÜMRÜT (1/3)!"
        const emMatch = str.match(/^❖ ANTİK ZÜMRÜT \((\d+)\/(\d+)\)!$/);
        if (emMatch) {
            const c = emMatch[1];
            const tot = emMatch[2];
            const map = {
                en: `❖ ANCIENT EMERALD (${c}/${tot})!`,
                ru: `❖ ДРЕВНИЙ ИЗУМРУД (${c}/${tot})!`,
                it: `❖ SMERALDO ANTICO (${c}/${tot})!`,
                es: `¡❖ ESMERALDA ANTIGUA (${c}/${tot})!`,
                fr: `❖ ÉMERAUDE ANCIENNE (${c}/${tot}) !`,
                ko: `❖ 고대 에메랄드 (${c}/${tot})!`,
                zh: `❖ 远古翡翠 (${c}/${tot})！`,
                ja: `❖ 古代エメラルド (${c}/${tot})！`
            };
            return map[lang] || map.en;
        }

        // Dynamic Pattern 4: "+2 ✪ COİN!"
        const coinMatch = str.match(/^\+(\d+) ✪ COİN!$/);
        if (coinMatch) {
            const c = coinMatch[1];
            const map = {
                en: `+${c} ✪ COINS!`,
                ru: `+${c} ✪ МОНЕТ!`,
                it: `+${c} ✪ COIN!`,
                es: `¡+${c} ✪ MONEDAS!`,
                fr: `+${c} ✪ PIÈCES !`,
                ko: `+${c} ✪ 코인!`,
                zh: `+${c} ✪ 金币！`,
                ja: `+${c} ✪ コイン！`
            };
            return map[lang] || map.en;
        }

        // Dynamic Pattern 5: "${sourceLabel} senkronize edildi ✓"
        const syncMatch = str.match(/^(.+) senkronize edildi ✓$/);
        if (syncMatch) {
            const src = syncMatch[1];
            const map = {
                en: `${src} synced ✓`,
                ru: `${src} синхронизировано ✓`,
                it: `${src} sincronizzato ✓`,
                es: `${src} sincronizado ✓`,
                fr: `${src} synchronisé ✓`,
                ko: `${src} 동기화 완료 ✓`,
                zh: `${src} 已同步 ✓`,
                ja: `${src} 同期完了 ✓`
            };
            return map[lang] || map.en;
        }

        // Dynamic Pattern 6: "★ ALT GÖREV (1/4) • +3✪ +5◆!"
        const subStarMatch = str.match(/^★ ALT GÖREV \((\d+)\/(\d+)\)(?: • \+3✪ \+5◆)?!$/);
        if (subStarMatch) {
            const cur = subStarMatch[1];
            const goal = subStarMatch[2];
            const map = {
                en: `★ SUB-MISSION (${cur}/${goal}) • +3✪ +5◆!`,
                ru: `★ ПОДЗЕМНАЯ МИССИЯ (${cur}/${goal}) • +3✪ +5◆!`,
                it: `★ MISSIONE SOTTERRANEA (${cur}/${goal}) • +3✪ +5◆!`,
                es: `¡★ SUB-MISIÓN (${cur}/${goal}) • +3✪ +5◆!`,
                fr: `★ SOUS-MISSION (${cur}/${goal}) • +3✪ +5◆ !`,
                ko: `★ 지하 미션 (${cur}/${goal}) • +3✪ +5◆!`,
                zh: `★ 地下任务 (${cur}/${goal}) • +3✪ +5◆！`,
                ja: `★ 地下ミッション (${cur}/${goal}) • +3✪ +5◆！`
            };
            return map[lang] || map.en;
        }

        // Dynamic Pattern 7: "🟢 ALT PLATFORM GÖREV SAHNESİ • 🎯 HEDEF: 1/4 ★ • ÇIKIŞ: SAĞ ASANSÖR ▲"
        const subBannerMatch = str.match(/^🟢 ALT PLATFORM GÖREV SAHNESİ • 🎯 HEDEF: (\d+)\/(\d+) ★ • ÇIKIŞ: SAĞ (?:ASANSÖR|BORU) ▲$/);
        if (subBannerMatch) {
            const cur = subBannerMatch[1];
            const goal = subBannerMatch[2];
            const map = {
                en: `🟢 UNDERGROUND MISSION STAGE • 🎯 GOAL: ${cur}/${goal} ★ • EXIT: RIGHT ELEVATOR ▲`,
                ru: `🟢 ПОДЗЕМНАЯ СЦЕНА • 🎯 ЦЕЛЬ: ${cur}/${goal} ★ • ВЫХОД: ПРАВЫЙ ЛИФТ ▲`,
                it: `🟢 LIVELLO SOTTERRANEO • 🎯 OBIETTIVO: ${cur}/${goal} ★ • USCITA: ASCENSORE DESTRO ▲`,
                es: `🟢 ESCENARIO SUBTERRÁNEO • 🎯 META: ${cur}/${goal} ★ • SALIDA: ASCENSOR DERECHO ▲`,
                fr: `🟢 ZONE SOUTERRAINE • 🎯 OBJECTIF : ${cur}/${goal} ★ • SORTIE : ASCENSEUR DROIT ▲`,
                ko: `🟢 지하 미션 스테이지 • 🎯 목표: ${cur}/${goal} ★ • 출구: 오른쪽 엘리베이터 ▲`,
                zh: `🟢 地下平台任务场景 • 🎯 目标: ${cur}/${goal} ★ • 出口: 右侧电梯 ▲`,
                ja: `🟢 地下ミッションエリア • 🎯 目標: ${cur}/${goal} ★ • 出口: 右のエレベーター ▲`
            };
            return map[lang] || map.en;
        }

        return str;
    };
})();


// Full 9-Language "What's New in v1.4.7" (Sürüm Yenilikleri) Catalog
window.MARINEXT_WHATS_NEW_DATA = {
    "tr": {
        "title": "👑 v1.4.7 VIP Efsane Kahramanlar & Atölye Efektleri",
        "subtitle": "Altın Kuantum İmparator, küllerinden doğan Siber Anka Şövalyesi ve 3 VIP Prestij Efekti Marinext 2100'e katıldı!",
        "btnOk": "🎮 HARİKA, OYUNA BAŞLA!",
        "btnWeb": "🌐 Tüm Sürüm Notlarını & Geçmişi İncele ↗",
        "items": [
            {
                "icon": "👑",
                "title": "2 Yeni VIP Efsane Kahraman",
                "desc": "Altın Kuantum İmparator (+110px dev mıknatıs & +%50 Coin/Skor) ve bölüm başı 1x Anka Otomatik Dirilişi + 3x zıplama gücüne sahip Siber Anka Şövalyesi!"
            },
            {
                "icon": "⚡",
                "title": "3 Zirve Kahramanda VIP Erken Erişim",
                "desc": "Fatih Sultan Mehmet, Yavuz Sultan Selim ve Altın Firavun herkes için Altın Coin ile kalıcı açılabilir; VIP Pass sahipleri ise 0 Coin ile anında kuşanır!"
            },
            {
                "icon": "✨",
                "title": "3 VIP Prestij Atölye Efekti",
                "desc": "VIP Anka Alev Kanatları, VIP Altın İmparator Aurası ve mor-altın VIP İmparatorluk Pelerini Karakter Atölyesi'nde seni bekliyor!"
            },
            {
                "icon": "💎",
                "title": "100% Adil Ücretsiz Denge Korundu",
                "desc": "Oyundaki tüm 14 ücretsiz kahraman, 8 güçlendirme, 100 ana bölüm ve 50 Trol etabı hiçbir baskı veya ödeme duvarı olmadan açık kalmaya devam eder."
            },
            {
                "icon": "☁️",
                "title": "Google Play Senkronizasyon & 120 FPS",
                "desc": "VIP haklarınız ve Ömür Boyu Reklamsız paketiniz Google Play ile korunur; 120 FPS ve 9 dilde kesintisiz oynanış sunar."
            }
        ]
    },
    "en": {
        "title": "👑 v1.4.7 VIP Legendary Heroes & Workshop FX",
        "subtitle": "Meet Golden Quantum Emperor, Phoenix-reborn Cyber Knight, VIP Peak Hero Early Access & 3 Prestige Effects!",
        "btnOk": "🎮 AWESOME, START PLAYING!",
        "btnWeb": "🌐 View Full Release Notes & Changelog ↗",
        "items": [
            {
                "icon": "👑",
                "title": "2 New VIP-Exclusive Legendary Heroes",
                "desc": "Golden Quantum Emperor (+110px magnet & +50% Coins/Score) and Cyber Phoenix Knight with 1x per-stage Phoenix Auto-Revive, Glide & Triple Jump!"
            },
            {
                "icon": "⚡",
                "title": "3 Peak Heroes VIP Early Access",
                "desc": "Sultan Mehmed II, Sultan Selim I & Golden Pharaoh remain permanently unlockable with Gold Coins, or instantly playable at 0 Coins with VIP Pass!"
            },
            {
                "icon": "✨",
                "title": "3 VIP Workshop Prestige Cosmetics",
                "desc": "VIP Phoenix Flame Wings, VIP Imperial Goldstar Aura & Purple-Gold Imperial Cape now glow live on the Workshop pedestal!"
            },
            {
                "icon": "💎",
                "title": "100% Fair Free Balance Guaranteed",
                "desc": "All 14 earnable heroes, 8 permanent upgrades, 100 campaign stages, and 50 Troll levels stay 100% free with zero paywalls."
            },
            {
                "icon": "☁️",
                "title": "Google Play Cloud Sync & 120 FPS",
                "desc": "Your VIP Pass & Lifetime perks stay protected across devices via Google Play at silky-smooth 120 FPS across all 9 languages."
            }
        ]
    },
    "ru": {
        "title": "👑 v1.4.7 VIP-Герои Легенды и Эффекты Мастерской",
        "subtitle": "Встречайте Золотого Квантового Императора, Рыцаря-Феникса с авто-воскрешением и 3 VIP-эффекта!",
        "btnOk": "🎮 ОТЛИЧНО, ИГРАТЬ!",
        "btnWeb": "🌐 Полный список изменений ↗",
        "items": [
            {
                "icon": "👑",
                "title": "2 новых VIP-героя Легенды",
                "desc": "Квантовый Император (магнит +110px и +50% к счёту) и Кибер-Рыцарь Феникс с автоматическим возрождением раз за уровень!"
            },
            {
                "icon": "⚡",
                "title": "Ранний VIP-доступ к 3 вершинам",
                "desc": "Султан Мехмед, Султан Селим и Золотой Фараон открываются за монеты бесплатно или доступны сразу за 0 монет с VIP Pass!"
            },
            {
                "icon": "✨",
                "title": "3 престижных VIP-эффекта Мастерской",
                "desc": "Огненные крылья Феникса, Золотая императорская аура и Пурпурно-золотой плащ уже доступны для предпросмотра и игры."
            },
            {
                "icon": "💎",
                "title": "Честный баланс для всех игроков",
                "desc": "Все 14 основных героев, 100 уровней кампании и 50 тролл-этапов по-прежнему полностью бесплатны."
            },
            {
                "icon": "☁️",
                "title": "120 FPS и защита Google Play",
                "desc": "Покупки и подписки надёжно синхронизируются с Google Play на всех ваших устройствах."
            }
        ]
    },
    "it": {
        "title": "👑 v1.4.7 Eroi Leggendari VIP & Effetti Officina",
        "subtitle": "Scopri l'Imperatore Quantico d'Oro, il Cavaliere Fenice con Auto-Rinascita, Accesso Anticipato ed effetti VIP!",
        "btnOk": "🎮 FANTASTICO, GIOCA ORA!",
        "btnWeb": "🌐 Note di Rilascio Complete ↗",
        "items": [
            {
                "icon": "👑",
                "title": "2 Nuovi Eroi Leggendari VIP",
                "desc": "Imperatore Quantico d'Oro (+110px magnete & +50% Monete/Punti) e Cavaliere Fenice con 1 Auto-Rinascita a livello e Triplo Salto!"
            },
            {
                "icon": "⚡",
                "title": "Accesso Anticipato VIP a 3 Eroi Top",
                "desc": "Sblocca con Monete d'Oro gratis o prova subito a 0 Monete Maometto II, Selim I e il Faraone d'Oro con VIP Pass attivo!"
            },
            {
                "icon": "✨",
                "title": "3 Effetti Esclusivi Officina VIP",
                "desc": "Ali di Fiamma Fenice VIP, Aura Stelle d'Oro Imperiale e Mantello Imperiale Viola-Oro ti aspettano nell'Officina."
            },
            {
                "icon": "💎",
                "title": "Equilibrio 100% Giusto e Gratuito",
                "desc": "Tutti i 14 eroi base, 8 potenziamenti, 100 livelli campagna e 50 Troll restano sempre giocabili gratuitamente."
            },
            {
                "icon": "☁️",
                "title": "120 FPS & Sincronizzazione Play",
                "desc": "I tuoi vantaggi VIP e A vita restano al sicuro sul tuo account Google Play in 9 lingue a 120 FPS."
            }
        ]
    },
    "es": {
        "title": "👑 v1.4.7 Héroes VIP Legendarios y Efectos de Taller",
        "subtitle": "¡Conoce al Emperador Cuántico Dorado, al Caballero Fénix con Auto-Reanimación y 3 cosméticos de prestigio VIP!",
        "btnOk": "🎮 ¡GENIAL, A JUGAR!",
        "btnWeb": "🌐 Notas de la Versión Completas ↗",
        "items": [
            {
                "icon": "👑",
                "title": "2 Nuevos Héroes VIP Legendarios",
                "desc": "¡Emperador Cuántico (+110px imán y +50% Monedas/Puntos) y Caballero Fénix con 1 Auto-Reanimación por nivel, Planeo y Triple Salto!"
            },
            {
                "icon": "⚡",
                "title": "Acceso Anticipado VIP a 3 Héroes Top",
                "desc": "Mehmed II, Selim I y Faraón Dorado siguen desbloqueables con Monedas gratis o listos a 0 Monedas con tu Pase VIP."
            },
            {
                "icon": "✨",
                "title": "3 Cosméticos VIP de Prestigio",
                "desc": "Alas de Llama Fénix VIP, Aura Estrellas Doradas y Capa Imperial Púrpura-Oro ya brillan en el Taller."
            },
            {
                "icon": "💎",
                "title": "Equilibrio Justo Garantizado",
                "desc": "Todos los 14 héroes gratuitos, 8 mejoras, 100 niveles de campaña y 50 niveles Troll permanecen 100% libres de barreras."
            },
            {
                "icon": "☁️",
                "title": "120 FPS y Protección Google Play",
                "desc": "Tu Pase VIP y acceso Vitalicio se sincronizan automáticamente en todos tus dispositivos Android."
            }
        ]
    },
    "fr": {
        "title": "👑 v1.4.7 Héros Légendaires VIP & Effets Atelier",
        "subtitle": "Découvrez l'Empereur Quantique d'Or, le Chevalier Phénix avec Auto-Réanimation, l'Accès Anticipé & 3 effets VIP !",
        "btnOk": "🎮 SUPER, JOUER !",
        "btnWeb": "🌐 Notes de Version Complètes ↗",
        "items": [
            {
                "icon": "👑",
                "title": "2 Nouveaux Héros Légendaires VIP",
                "desc": "Empereur Quantique (+110px aimant & +50% Pièces/Score) et Chevalier Phénix avec 1 Auto-Réanimation par niveau et Triple Saut !"
            },
            {
                "icon": "⚡",
                "title": "Accès Anticipé VIP sur 3 Héros Top",
                "desc": "Mehmed II, Sélim Ier et Pharaon d'Or restent déblocables en Pièces d'Or ou accessibles à 0 Pièce avec le Pass VIP !"
            },
            {
                "icon": "✨",
                "title": "3 Effets Atelier de Prestige VIP",
                "desc": "Ailes Flamme Phénix VIP, Aura Étoiles d'Or Impériale et Cape Impériale Pourpre-Or disponibles dès maintenant."
            },
            {
                "icon": "💎",
                "title": "Équilibre 100% Équitable Garanti",
                "desc": "Les 14 héros gratuits, 8 améliorations, 100 niveaux d'aventure et 50 niveaux Troll restent intégralement jouables gratuitement."
            },
            {
                "icon": "☁️",
                "title": "120 FPS & Synchronisation Google Play",
                "desc": "Vos avantages VIP et Sans Pub à vie suivent votre compte Google Play sur tous vos appareils."
            }
        ]
    },
    "ko": {
        "title": "👑 v1.4.7 VIP 전설 영웅 & 공방 프레스티지 효과",
        "subtitle": "황금 양자 황제, 불사조 자동 부활을 지닌 사이버 피닉스 기사, 3영웅 조기 체험 & VIP 전용 효과가 추가되었습니다!",
        "btnOk": "🎮 확인, 게임 시작!",
        "btnWeb": "🌐 전체 패치 노트 및 업데이트 내역 보기 ↗",
        "items": [
            {
                "icon": "👑",
                "title": "신규 VIP 전설 영웅 2종 출시",
                "desc": "황금 양자 황제(+110px 슈퍼 자석 & 코인/점수 +50%) 및 스테이지당 1회 자동 부활 + 3단 점프 능력을 지닌 사이버 피닉스 기사!"
            },
            {
                "icon": "⚡",
                "title": "최고 영웅 3종 VIP 조기 체험",
                "desc": "메흐메트 2세, 셀림 1세, 황금 파라오는 무료 골드 코인으로 영구 해금 가능하며 VIP 패스 활성 시 0 코인으로 즉시 장착 가능!"
            },
            {
                "icon": "✨",
                "title": "VIP 전용 공방 이펙트 3종",
                "desc": "VIP 피닉스 불꽃 날개, VIP 황금 황제 오라, VIP 황실 보라 망토를 커스터마이징 공방에서 바로 미리보고 장착하세요!"
            },
            {
                "icon": "💎",
                "title": "변함없는 공정한 무료 플레이",
                "desc": "기존 14명의 영웅, 8개 업그레이드, 100개 캠페인 & 50개 트롤 스테이지는 모두 100% 무료 플레이가 유지됩니다."
            },
            {
                "icon": "☁️",
                "title": "120 FPS & Google Play 계정 연동",
                "desc": "VIP 패스와 평생 광고 제거 권한은 Google Play 계정으로 안전하게 보호되며 언제든 복원할 수 있습니다."
            }
        ]
    },
    "zh": {
        "title": "👑 v1.4.7 VIP 传奇英雄 & 工坊尊享特效上线",
        "subtitle": "黄金量子皇帝、自带浴火自动重生的赛博凤凰骑士、3位巅峰英雄抢先体验及3款VIP特效现已加入！",
        "btnOk": "🎮 太棒了，开始游戏！",
        "btnWeb": "🌐 查看完整更新日志与版本历史 ↗",
        "items": [
            {
                "icon": "👑",
                "title": "2 位全新 VIP 专属传奇英雄",
                "desc": "黄金量子皇帝（+110px超级磁铁与+50%金币得分）以及每关1次自动复活+滑翔+三段跳的赛博凤凰骑士！"
            },
            {
                "icon": "⚡",
                "title": "3 位巅峰英雄 VIP 抢先体验",
                "desc": "穆罕默德二世、塞利姆一世与黄金法老继续支持免费金币永久解锁，开通 VIP 通行证更能直接 0 金币畅玩！"
            },
            {
                "icon": "✨",
                "title": "3 款 VIP 尊享工坊特效",
                "desc": "VIP 凤凰烈焰之翼、VIP 黄金帝皇光环与金边紫帝皇披风震撼登场，支持全息底座实时预览！"
            },
            {
                "icon": "💎",
                "title": "100% 公平免费体验承诺",
                "desc": "全部 14 位可免费获取英雄、8 项永久升级、100 个主线关卡与 50 个恶搞关卡无任何强制付费门槛。"
            },
            {
                "icon": "☁️",
                "title": "120 FPS 极致丝滑 & Play 云端保护",
                "desc": "VIP 与永久权益通过 Google Play 自动跨设备保护，9 国语言 120 FPS 流畅运行。"
            }
        ]
    },
    "ja": {
        "title": "👑 v1.4.7 VIP伝説ヒーロー＆工房プレミアム効果",
        "subtitle": "黄金クォンタム皇帝、自動復活を持つサイバーフェニックス騎士、最高峰3体の早期アクセス＆VIP限定エフェクト登場！",
        "btnOk": "🎮 了解、ゲームを始める！",
        "btnWeb": "🌐 全てのリリースノートと更新履歴を見る ↗",
        "items": [
            {
                "icon": "👑",
                "title": "新VIP限定伝説ヒーロー2体追加",
                "desc": "黄金クォンタム皇帝（+110px超磁石＆+50%報酬）と、ステージ毎1回自動復活＋滑空＋3段ジャンプのサイバーフェニックス騎士！"
            },
            {
                "icon": "⚡",
                "title": "最高峰ヒーロー3体 VIP早期アクセス",
                "desc": "メフメト2世・セリム1世・黄金ファラオは従来通りコインで永久解放できるほか、VIPパス有効中は0コインで即体験可能！"
            },
            {
                "icon": "✨",
                "title": "VIP専用工房エフェクト3種",
                "desc": "VIP不死鳥の炎翼、VIP黄金皇帝オーラ、VIP皇帝インペリアルマントが工房に登場！"
            },
            {
                "icon": "💎",
                "title": "100%公正な無料バランスを維持",
                "desc": "14体の通常ヒーロー、8種の強化、100ステージ＋50トロールステージはすべて完全無料のまま楽しめます。"
            },
            {
                "icon": "☁️",
                "title": "120 FPS 超滑らか＆Google Play保護",
                "desc": "VIP・永久パックはGoogle Playアカウントで保護され、機種変更後もワンタップで復元できます。"
            }
        ]
    }
};
