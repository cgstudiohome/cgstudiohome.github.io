// ============================================================================
// Marinext 2100 — Act II Wave 1: ÖTE EVREN (Dünya 11–15 / Bölüm 101–150)
// Tamamen yeni 5 dünya fiziği, 6 senaryo modu, 8 yeni düşman, 5 yeni boss ve gizli sandıklar!
// ============================================================================
(function (window) {
    'use strict';

    const T = typeof TILE_SIZE !== 'undefined' ? TILE_SIZE : 48;

    const ACT2_WORLD_THEMES = [
        {
            worldNum: 11,
            id: 'atlantis',
            icon: '🌊',
            title: 'Dünya 11: Biyolüminesans Atlantis',
            badge: 'BÖLGE 11: ATLANTİS',
            themeColor: '#00f5d4',
            underwater: true,
            defaultSurface: 'normal',
            hazardType: 'electric',
            bossName: 'MEKA-LEVİATHAN (BOSS 21)',
            bossShort: 'Meka-Leviathan ☠',
            bossHp: 62,
            bossType: 21,
            relicChestId: 'chest_w11_atlantis',
            relicRewardName: 'Atlantis Derin Deniz Miğferi',
            relicCosmeticId: 'helmet_crown'
        },
        {
            worldNum: 12,
            id: 'bioforest',
            icon: '🌿',
            title: 'Dünya 12: Dev Biyo-Orman & Spor Vadisi',
            badge: 'BÖLGE 12: BİYO-ORMAN',
            themeColor: '#70e000',
            underwater: false,
            defaultSurface: 'normal',
            hazardType: 'acid',
            bossName: 'DEV SPOR KRALİÇESİ (BOSS 22)',
            bossShort: 'Spor Kraliçesi ☠',
            bossHp: 68,
            bossType: 22,
            relicChestId: 'chest_w12_bioforest',
            relicRewardName: 'Biyo-Plazma Kalkan Aurası',
            relicCosmeticId: 'aura_emerald'
        },
        {
            worldNum: 13,
            id: 'clockwork',
            icon: '⚙️',
            title: 'Dünya 13: Steampunk Saat Kulesi',
            badge: 'BÖLGE 13: SAAT KULESİ',
            themeColor: '#f59e0b',
            underwater: false,
            defaultSurface: 'boost',
            hazardType: 'lava',
            bossName: 'KRONOS SAAT USTASI (BOSS 23)',
            bossShort: 'Saat Ustası ☠',
            bossHp: 74,
            bossType: 23,
            relicChestId: 'chest_w13_clockwork',
            relicRewardName: 'Kronos Dişli Kanatları',
            relicCosmeticId: 'gear_wings'
        },
        {
            worldNum: 14,
            id: 'acidrefinery',
            icon: '☢️',
            title: 'Dünya 14: Toksik Asit Rafinerisi',
            badge: 'BÖLGE 14: ASİT RAFİNERİSİ',
            themeColor: '#aacc00',
            underwater: false,
            defaultSurface: 'normal',
            hazardType: 'acid',
            bossName: 'ÜÇ BAŞLI ASİT HİDRASI (BOSS 24)',
            bossShort: 'Asit Hidrası ☠',
            bossHp: 80,
            bossType: 24,
            relicChestId: 'chest_w14_acid',
            relicRewardName: 'Altın Plazma Zırhı',
            relicCosmeticId: 'skin_gold'
        },
        {
            worldNum: 15,
            id: 'mirror',
            icon: '🪞',
            title: 'Dünya 15: Ayna Katedrali (Ters Boyut)',
            badge: 'BÖLGE 15: AYNA KATEDRALİ',
            themeColor: '#e879f9',
            underwater: false,
            defaultSurface: 'ice',
            hazardType: 'electric',
            bossName: 'KARANLIK İKİZ (BOSS 25)',
            bossShort: 'Karanlık İkiz ☠',
            bossHp: 88,
            bossType: 25,
            relicChestId: 'chest_w15_mirror',
            relicRewardName: 'Ayna Boyut Pelerini',
            relicCosmeticId: 'cape_rainbow'
        }
    ];

    const SCENARIO_PATTERN = [
        'standard_act2',   // x01: Dünya mekaniği + gizli sandık tanıtımı
        'key_vault',       // x02: 3 Mühür Anahtarı Avı
        'escape_chase',    // x03: Sol taraftan gelen ölümcül enerji duvarından kaçış
        'spotlight_dark',  // x04: Karanlık fener modunda gerilim
        'rhythm_phase',    // x05: Her zıplamada değişen Kırmızı/Mavi faz blokları + mini arena
        'vertical_ascent', // x06: Alttan yükselen tehlikeye karşı dikey kule tırmanışı
        'escape_chase',    // x07: Hızlandırılmış kovalamaca & tuzak parkuru
        'key_vault',       // x08: Faz blokları ve lazerlerle korunan 3 Mühür
        'gauntlet_act2',   // x09: Dünya içi tüm mekaniklerin final sınavı
        'boss_act2'        // x10: Çok fazlı özel Dünya Boss savaşı
    ];

    const WORLD_LEVEL_NAMES = [
        // World 11 (101-110)
        ['Mercan Yarığı', 'Üçlü Deniz Mührü', 'Akıntıdan Kaçış', 'Fener Resifi', 'Faz Batığı', 'Okyanus Kulesi', 'Torpido Geçidi', 'Karanlık Çukur', 'Derin Hisar', 'Meka-Leviathan ☠'],
        // World 12 (111-120)
        ['Spor Girişi', 'Kök Labirenti', 'Zehirli Sisten Kaçış', 'Gece Ormanı', 'Mantar Ritim', 'Dev Gövde Tırmanışı', 'Asma Köprü Koşusu', 'Üçlü Kozalak', 'Orman Kalbi', 'Spor Kraliçesi ☠'],
        // World 13 (111+10 = 121-130)
        ['Dişli Avlusu', 'Zemberek Mühürleri', 'Çark Kovalamacası', 'Karanlık Sarkaç', 'Saat Ritim Odası', 'Zil Kulesi Yükselişi', 'Buhar Hattı Kaçışı', 'Üçlü Çark Kilidi', 'Kule Tepesi', 'Kronos Saat Ustası ☠'],
        // World 14 (131-140)
        ['Asit Kanalı', 'Vana Mührü', 'Yükselen Asit Kaçışı', 'Buhar Körlüğü', 'Toksik Faz Yolu', 'Rafineri Bacası', 'Reaktör Çöküşü', 'Kalkan Mühürleri', 'Çekirdek Geçidi', 'Asit Hidrası ☠'],
        // World 15 (141-150)
        ['Ayna Eşiği', 'Ters Mühür', 'Boyut Yırtığı Kaçışı', 'Gölge Katedrali', 'Kırık Prizma', 'Ters Yerçekimi Kulesi', 'Kristal Yankı', 'İkiz Labirenti', 'Boyut Eşiği', 'Karanlık İkiz ☠']
    ];

    const SCENARIO_DESCS = {
        standard_act2: 'Yeni dünya fiziğini keşfet, gizli dünya sandığını bul ve boyut geçidine ulaş!',
        key_vault: 'Çıkış portalı kilitli! Tüm Enerji Mühürlerini (🔑) toplayarak boyut kapısını aç.',
        escape_chase: 'Lazer Yokedici Duvar arkandan hızla yaklaşıyor! Hiç durmadan koş, zıpla ve Dash kullan!',
        spotlight_dark: 'Zifiri karanlık sektör! Yalnızca kahraman ışığın ve parlayan tehlikeler görünür.',
        rhythm_phase: 'Her zıplamada Kırmızı/Mavi Faz Blokları yer değiştirir! Ritimle ilerle ve mini muhafızları geç.',
        vertical_ascent: 'Aşağıdan ölümcül enerji yükseliyor! Teraslardan yukarı tırmanıp zirvedeki portala kaç.',
        gauntlet_act2: 'Dünyanın tüm canlıları ve tuzakları devrede! Zemin Darbesi veya Dash ile gizli odayı keşfet.',
        boss_act2: 'Çok fazlı Öte Evren Boss Arenası! Özel dünya mekaniğini kullanarak Boss’un fazlarını kır.'
    };

    const ACT2_LEVEL_INFO = [];
    for (let idx = 0; idx < 50; idx++) {
        const wIdx = Math.floor(idx / 10);
        const subIdx = idx % 10;
        const wTheme = ACT2_WORLD_THEMES[wIdx];
        const displayNum = 101 + idx;
        const scenarioType = SCENARIO_PATTERN[subIdx];
        const shortName = WORLD_LEVEL_NAMES[wIdx][subIdx];
        const isBoss = subIdx === 9;
        ACT2_LEVEL_INFO.push({
            id: idx,
            act2Index: idx,
            displayNumber: displayNum,
            isAct2: true,
            worldId: wTheme.worldNum,
            worldTheme: wTheme.id,
            world: isBoss ? `BÖLGE ${wTheme.worldNum}: BOSS ${21 + wIdx}` : wTheme.badge,
            shortName,
            name: `Bölüm ${displayNum}: ${shortName}`,
            desc: `${wTheme.icon} ${SCENARIO_DESCS[scenarioType] || ''}`,
            themeColor: wTheme.themeColor,
            scenarioType,
            underwater: Boolean(wTheme.underwater),
            darkMode: scenarioType === 'spotlight_dark',
            isBossLevel: isBoss
        });
    }

    function createAct2LevelData(act2Idx) {
        const idx = Math.max(0, Math.min(49, Number(act2Idx) || 0));
        const info = ACT2_LEVEL_INFO[idx];
        const wIdx = Math.floor(idx / 10);
        const subIdx = idx % 10;
        const wTheme = ACT2_WORLD_THEMES[wIdx];
        const scenario = info.scenarioType;
        const diffRatio = idx / 49; // 0.0 -> 1.0

        const solids = [];
        const mysteryBlocks = [];
        const hazards = [];
        const coins = [];
        const enemies = [];
        const movingPlatforms = [];
        const crumblePlatforms = [];
        const saws = [];
        const stalactites = [];
        const checkpoints = [];
        const teleporters = [];
        const gravityZones = [];
        const reverseGravityZones = [];
        const jumpPads = [];
        const windZones = [];
        const laserGates = [];
        const phaseBlocks = [];
        const crackedBlocks = [];
        const relicChests = [];
        const sealKeys = [];
        const bubbleStations = [];
        const sporeClouds = [];
        const shieldPads = [];
        const signs = [];
        let portal = { x: 3200, y: 12 * T - 86 };
        let bossConfig = null;
        let chaseWall = null;
        let risingHazard = null;

        const addGround = (gx, gy, gw, gh = 4, type = 'ground', surfaceType = wTheme.defaultSurface) => {
            solids.push({ x: gx * T, y: gy * T, w: gw * T, h: gh * T, type, surfaceType });
        };
        const addPlatform = (gx, gy, gw, surfaceType = wTheme.defaultSurface) => {
            solids.push({ x: gx * T, y: gy * T, w: gw * T, h: 0.85 * T, type: 'platform', surfaceType });
        };
        const addMoving = (gx1, gy1, gx2, gy2, gw = 3.2, speed = 1.45) => {
            movingPlatforms.push({
                x: gx1 * T, y: gy1 * T, startX: gx1 * T, startY: gy1 * T,
                endX: gx2 * T, endY: gy2 * T, w: gw * T, h: 22, speed
            });
        };
        const addCrumble = (gx, gy, gw = 2.6) => {
            crumblePlatforms.push({ x: gx * T, y: gy * T, w: gw * T, h: 22 });
        };
        const addJumpPad = (gx, gy, boostVy = -25.2, isMushroom = (wIdx === 1)) => {
            jumpPads.push({ x: gx * T, y: gy * T - 22, w: 58, h: 22, boostVy, anim: 0, isMushroom });
        };
        const addSaw = (gx1, gy1, gx2 = gx1, gy2 = gy1, speed = 1.6, r = 22) => {
            saws.push({ x: gx1 * T, y: gy1 * T, r, startX: gx1 * T, startY: gy1 * T, endX: gx2 * T, endY: gy2 * T, speed });
        };
        const addLaser = (gx, gy, gh = 3.6, period = 130, onDuration = 60, phase = 0) => {
            laserGates.push({ x: gx * T + 14, y: gy * T, w: 18, h: gh * T, period, onDuration, phase });
        };
        const addEnemy = (gx, gy, type, minGx, maxGx, extra = {}) => {
            enemies.push({
                x: gx * T, y: (gy - 1) * T, type,
                minX: minGx * T, maxX: maxGx * T,
                ...extra
            });
        };
        const addHazard = (gx, gy, gw, gh = 3, type = wTheme.hazardType) => {
            hazards.push({ x: gx * T, y: gy * T, w: gw * T, h: gh * T, type });
        };
        const addPhase = (gx, gy, gw, group = 0) => {
            phaseBlocks.push({ x: gx * T, y: gy * T, w: gw * T, h: 0.78 * T, phaseGroup: group });
        };
        const addWindZone = (gx, gy, gw, gh, fx = 0, fy = -0.7, fanSide = 'bottom') => {
            windZones.push({ x: gx * T, y: gy * T, w: gw * T, h: gh * T, forceX: fx, forceY: fy, fanSide });
        };

        // Pick world-authentic enemy roster
        const worldEnemyPools = [
            ['drone', 'stalker', 'splitter', 'sniper'],      // World 11 Atlantis
            ['hopper', 'shieldbearer', 'splitter', 'drone'], // World 12 Bio-Forest
            ['sniper', 'wraith', 'gravity_orb', 'drone'],    // World 13 Clockwork
            ['shieldbearer', 'hopper', 'drone', 'splitter'], // World 14 Acid Refinery
            ['wraith', 'gravity_orb', 'sniper', 'stalker']   // World 15 Mirror Cathedral
        ];
        const enemyPool = worldEnemyPools[wIdx];
        const pickEnemy = (offset) => enemyPool[(idx + offset) % enemyPool.length];

        // Starting safe platform
        addGround(0, 12, 13, 5, 'ground', 'normal');
        signs.push({ x: 180, y: 12 * T - 56, text: `${info.name} • ${SCENARIO_DESCS[scenario]}` });
        mysteryBlocks.push({ x: 6.5 * T, y: 8.5 * T, content: idx % 2 === 0 ? 'fire' : 'shield' });
        mysteryBlocks.push({ x: 8.2 * T, y: 8.5 * T, content: 'speed' });

        if (scenario === 'boss_act2') {
            // =================================================================
            // ACT II BOSS ARENAS (110, 120, 130, 140, 150)
            // =================================================================
            const arenaW = 56 + wIdx * 2;
            addGround(13, 12, arenaW - 13, 5, 'ground', wIdx === 4 ? 'ice' : 'normal');
            addGround(0, 0, 1.8, 12, 'wall', 'normal');
            addGround(arenaW - 1.8, 0, 1.8, 12, 'wall', 'normal');
            checkpoints.push({ x: 11.5 * T, y: 12 * T - 64 });

            // Tactical arena structures per world boss
            addJumpPad(15.5, 12, -25.4, wIdx === 1);
            addJumpPad(arenaW - 7.0, 12, -25.4, wIdx === 1);
            addPlatform(18, 8.5, 5.2);
            addPlatform(27.5, 5.8, 6.2);
            addPlatform(arenaW - 14.5, 8.5, 5.2);

            if (wIdx === 0) {
                bubbleStations.push({ x: 22 * T, y: 11.1 * T, r: 22 });
                bubbleStations.push({ x: 40 * T, y: 11.1 * T, r: 22 });
                addSaw(24, 11.8, 34, 11.8, 1.5, 20);
            } else if (wIdx === 1) {
                sporeClouds.push({ x: 24 * T, y: 9.2 * T, w: 6 * T, h: 2.8 * T, period: 220, activeLen: 100, phase: 0 });
                sporeClouds.push({ x: 37 * T, y: 9.2 * T, w: 6 * T, h: 2.8 * T, period: 220, activeLen: 100, phase: 110 });
            } else if (wIdx === 2) {
                addMoving(22, 9.2, 22, 5.2, 3.2, 1.6);
                addMoving(arenaW - 17, 5.2, arenaW - 17, 9.2, 3.2, 1.6);
                addSaw(26, 11.8, 38, 11.8, 1.8, 22);
            } else if (wIdx === 3) {
                shieldPads.push({ x: 19.5 * T, y: 8.5 * T - 14, w: 46, h: 14 });
                shieldPads.push({ x: (arenaW - 13) * T, y: 8.5 * T - 14, w: 46, h: 14 });
                addLaser(25, 8.4, 3.6, 150, 55, 0);
                addLaser(arenaW - 19, 8.4, 3.6, 150, 55, 75);
            } else if (wIdx === 4) {
                // Mirror Cathedral: Ceiling slab + reverse gravity pocket + phase bridges!
                addGround(16, 1.4, arenaW - 22, 1.2, 'ground', 'normal');
                reverseGravityZones.push({ x: 26 * T, y: 2.6 * T, w: 12 * T, h: 4.5 * T });
                addPhase(20, 7.2, 4.0, 0);
                addPhase(arenaW - 17, 7.2, 4.0, 1);
            }

            mysteryBlocks.push({ x: 29.5 * T, y: 2.8 * T, content: 'fire' });
            mysteryBlocks.push({ x: 31.5 * T, y: 2.8 * T, content: 'shield' });
            coins.push({ x: 30.5 * T, y: 4.9 * T, type: 'emerald' });

            bossConfig = {
                name: wTheme.bossName,
                hp: wTheme.bossHp,
                x: (arenaW - 15) * T,
                y: 12 * T - 110,
                minX: 15 * T,
                maxX: (arenaW - 4.5) * T,
                variant: wTheme.bossType,
                bossType: wTheme.bossType,
                isWorldLord: true,
                worldIdx: wIdx
            };
            portal = { x: (arenaW - 5.5) * T, y: 12 * T - 86, lockedUntilBossDead: true };

        } else if (scenario === 'escape_chase') {
            // =================================================================
            // ESCAPE CHASE: Advancing Lethal Laser Wall from Left
            // =================================================================
            const chaseSpeed = 2.05 + diffRatio * 0.75 + (subIdx >= 6 ? 0.35 : 0);
            chaseWall = {
                x: -4.5 * T,
                speed: chaseSpeed,
                startX: -4.5 * T,
                color: wTheme.themeColor
            };
            let curX = 13;
            for (let seg = 0; seg < 6; seg++) {
                if (seg === 3) {
                    addGround(curX, 11.2, 10, 6);
                    checkpoints.push({ x: (curX + 2.5) * T, y: 11.2 * T - 64 });
                    mysteryBlocks.push({ x: (curX + 5.5) * T, y: 7.8 * T, content: 'speed' });
                    curX += 10;
                    continue;
                }
                const pitW = 14 + (seg % 2) * 2;
                addHazard(curX, 13.6, pitW, 3.4);
                addGround(curX, 14.3, pitW, 2.7);
                addPlatform(curX + 1.0, 10.6 - (seg % 2), 4.6, 'boost');
                if (seg % 2 === 0) {
                    addJumpPad(curX + 4.8, 10.6, -24.5, wIdx === 1);
                } else {
                    addCrumble(curX + 6.4, 9.2, 2.8);
                }
                addPlatform(curX + 9.2, 9.8, 4.4);
                addEnemy(curX + 11.2, 9.8, pickEnemy(seg), curX + 9.5, curX + 13.2);
                if (seg === 4 && wIdx >= 2) {
                    addLaser(curX + 11.5, 6.2, 3.6, 118, 46, seg * 25);
                } else {
                    addSaw(curX + 8.0, 5.2, curX + 8.0, 10.2, 1.75 + diffRatio * 0.3, 21);
                }
                curX += pitW;
            }
            addGround(curX, 10.5, 11, 6.5);
            portal = { x: (curX + 7.5) * T, y: 10.5 * T - 86 };

        } else if (scenario === 'vertical_ascent') {
            // =================================================================
            // VERTICAL ASCENT: Rising Hazard Floor + Terraced Climbing Tower
            // =================================================================
            addGround(0, 0, 1.8, 12, 'wall', 'normal');
            risingHazard = {
                y: 16.5 * T,
                baseY: 16.5 * T,
                minY: 5.8 * T,
                speed: 0.24 + diffRatio * 0.14,
                type: wTheme.hazardType
            };
            let curX = 13;
            let curY = 11.2;
            for (let tier = 0; tier < 7; tier++) {
                if (tier === 3) {
                    addGround(curX, curY, 9, 8);
                    checkpoints.push({ x: (curX + 2) * T, y: curY * T - 64 });
                    mysteryBlocks.push({ x: (curX + 5) * T, y: (curY - 3.3) * T, content: 'shield' });
                    curX += 9;
                    curY = Math.max(4.4, curY - 1.3);
                    continue;
                }
                const nextY = Math.max(3.6, curY - 1.25);
                addGround(curX, curY, 9.5, 9);
                addJumpPad(curX + 7.2, curY, -23.8, wIdx === 1);
                if (tier % 2 === 1 && wIdx === 4) {
                    addPhase(curX + 2.2, nextY + 0.6, 3.4, tier % 2);
                } else {
                    addPlatform(curX + 2.2, nextY + 0.8, 4.2);
                }
                addEnemy(curX + 4.5, curY, pickEnemy(tier), curX + 1.2, curX + 6.8);
                if (tier >= 2) {
                    addSaw(curX + 8.5, nextY - 2.0, curX + 8.5, curY - 0.5, 1.5, 20);
                }
                curX += 10.5;
                curY = nextY;
            }
            addGround(curX, curY, 12, 11);
            portal = { x: (curX + 8.5) * T, y: curY * T - 86 };

        } else {
            // =================================================================
            // STANDARD ACT II / KEY VAULT / SPOTLIGHT DARK / RHYTHM PHASE / GAUNTLET
            // =================================================================
            let curX = 13;
            const totalSectors = 6;
            const targetKeys =
                wIdx === 0 ? (scenario === 'key_vault' ? 3 : (scenario === 'gauntlet_act2' ? 2 : 0))
                : wIdx === 1 ? (scenario === 'key_vault' ? 3 : ((scenario === 'spotlight_dark' || scenario === 'gauntlet_act2') ? 2 : 0))
                : wIdx === 2 ? ((scenario === 'key_vault' || scenario === 'gauntlet_act2') ? 3 : ((scenario === 'spotlight_dark' || scenario === 'rhythm_phase') ? 2 : 0))
                : wIdx === 3 ? (scenario === 'key_vault' ? 4 : ((scenario === 'gauntlet_act2' || scenario === 'standard_act2' || scenario === 'spotlight_dark' || scenario === 'rhythm_phase') ? 3 : 0))
                : ((scenario === 'key_vault' || scenario === 'gauntlet_act2') ? 4 : ((scenario === 'standard_act2' || scenario === 'spotlight_dark' || scenario === 'rhythm_phase') ? 3 : 0));
            const hasKeys = targetKeys > 0;
            const shouldHaveRelic = subIdx === 0 || subIdx === 8 || (wIdx >= 2 && subIdx === 4);
            const hasPhase = scenario === 'rhythm_phase' || scenario === 'gauntlet_act2' || wIdx === 4;

            for (let sIdx = 0; sIdx < totalSectors; sIdx++) {
                const mode = (sIdx + idx) % 5;

                // World 11 Underwater Bubbles or World 12 Spore Clouds or World 14 Shield Pads
                if (wIdx === 0 && sIdx % 2 === 0) {
                    bubbleStations.push({ x: (curX + 5) * T, y: 10.2 * T, r: 22 });
                }
                if (wIdx === 1 && sIdx % 2 === 1) {
                    sporeClouds.push({ x: (curX + 6) * T, y: 6.2 * T, w: 5.5 * T, h: 3.4 * T, period: 210, activeLen: 95, phase: sIdx * 40 });
                }

                if (mode === 0) {
                    // Dual Upper/Lower Branch + Optional Seal Key or Relic Chest
                    const secW = 19;
                    addGround(curX, 12, secW, 5);
                    addPlatform(curX + 3.5, 7.6, 5.5);
                    addPlatform(curX + 10.5, 5.4, 5.8);
                    addJumpPad(curX + 1.8, 12, -25.0, wIdx === 1);
                    addEnemy(curX + 9.0, 12, pickEnemy(sIdx), curX + 3.0, curX + secW - 2.0);
                    addEnemy(curX + 13.0, 5.4, pickEnemy(sIdx + 1), curX + 11.0, curX + 15.8);

                    if (targetKeys > 0 && sealKeys.length < targetKeys) {
                        sealKeys.push({ x: (curX + 13.4) * T, y: 4.3 * T, id: `key_${idx}_${sealKeys.length}`, collected: false });
                    }
                    // World Relic Chest hidden on first standard / mid rhythm / gauntlet levels
                    if (shouldHaveRelic && relicChests.length === 0 && sIdx === 2) {
                        if (subIdx === 8 && wIdx >= 2) {
                            // Vault under cracked block for Ground Slam discovery!
                            addGround(curX + 10.0, 8.6, 2.5, 0.8, 'platform');
                            crackedBlocks.push({ x: (curX + 13.2) * T, y: 11.2 * T, w: 2.2 * T, h: 0.8 * T, broken: false });
                            relicChests.push({
                                x: (curX + 14.0) * T, y: 4.4 * T,
                                chestId: wTheme.relicChestId,
                                rewardName: wTheme.relicRewardName,
                                cosmeticId: wTheme.relicCosmeticId,
                                opened: false
                            });
                        } else {
                            relicChests.push({
                                x: (curX + 13.5) * T, y: 4.4 * T,
                                chestId: wTheme.relicChestId,
                                rewardName: wTheme.relicRewardName,
                                cosmeticId: wTheme.relicCosmeticId,
                                opened: false
                            });
                        }
                    }
                    curX += secW;
                } else if (mode === 1) {
                    // Phase Blocks / Jump-Toggle Rhythm Pit
                    const secW = 20;
                    addHazard(curX, 13.5, secW, 3.5);
                    addGround(curX, 14.2, secW, 2.8);
                    for (let p = 0; p < 4; p++) {
                        if (hasPhase) {
                            addPhase(curX + 1.2 + p * 4.5, 10.2 - (p % 2) * 1.4, 3.2, p % 2);
                        } else {
                            addCrumble(curX + 1.2 + p * 4.5, 10.2 - (p % 2) * 1.3, 2.8);
                        }
                        if (p === 2) {
                            addSaw(curX + 1.2 + p * 4.5 + 1.5, 4.5, curX + 1.2 + p * 4.5 + 1.5, 10.5, 1.65, 20);
                        }
                    }
                    if (targetKeys > 0 && sealKeys.length < targetKeys) {
                        sealKeys.push({ x: (curX + 11.4) * T, y: 7.5 * T, id: `key_${idx}_${sealKeys.length}`, collected: false });
                    }
                    curX += secW;
                } else if (mode === 2) {
                    // Reverse Gravity or Wind/Gear Elevated Crossing
                    const secW = 21;
                    if (wIdx === 4) {
                        // Mirror World Reverse Gravity Walk Under Safe Ceiling!
                        addGround(curX, 12, 5, 5);
                        addGround(curX + 3, 1.4, secW - 6, 1.2, 'ground', 'ice'); // Ceiling track
                        addHazard(curX + 5, 13.5, secW - 10, 3.5);
                        addGround(curX + 5, 14.2, secW - 10, 2.8);
                        reverseGravityZones.push({ x: (curX + 4.5) * T, y: 2.6 * T, w: (secW - 9) * T, h: 10.0 * T });
                        addSaw(curX + 10.5, 2.8, curX + 10.5, 5.2, 1.45, 19);
                        addGround(curX + secW - 5, 11.5, 5, 5.5);
                        if (targetKeys > 0 && sealKeys.length < targetKeys) {
                            sealKeys.push({ x: (curX + 10.5) * T, y: 3.8 * T, id: `key_${idx}_${sealKeys.length}`, collected: false });
                        }
                    } else {
                        addHazard(curX, 13.5, secW, 3.5);
                        addGround(curX, 14.2, secW, 2.8);
                        addWindZone(curX + 1.5, 2.8, 4.5, 10.4, 0.2, -0.74, 'bottom');
                        addPlatform(curX + 7.0, 6.8, 6.2);
                        addEnemy(curX + 10.0, 6.8, pickEnemy(sIdx + 2), curX + 7.4, curX + 12.8);
                        addMoving(curX + 14.2, 7.6, curX + 18.8, 9.8, 3.2, 1.5);
                        if (targetKeys > 0 && sealKeys.length < targetKeys) {
                            sealKeys.push({ x: (curX + 10.0) * T, y: 5.5 * T, id: `key_${idx}_${sealKeys.length}`, collected: false });
                        }
                    }
                    curX += secW;
                } else if (mode === 3) {
                    // Laser & Cracked Floor / Shield Bastion
                    const secW = 20;
                    addGround(curX, 11.5, secW, 5.5);
                    addGround(curX + 2.0, 6.6, secW - 4.0, 0.9, 'wall', 'normal');
                    addLaser(curX + 5.5, 7.5, 4.0, 128, 56, 0);
                    addLaser(curX + 13.5, 7.5, 4.0, 128, 56, 60);
                    if (wIdx === 3) {
                        shieldPads.push({ x: (curX + 9.2) * T, y: 11.5 * T - 14, w: 48, h: 14 });
                    }
                    addEnemy(curX + 9.5, 11.5, pickEnemy(sIdx), curX + 6.5, curX + 12.8);
                    addJumpPad(curX + 0.8, 11.5, -24.8, wIdx === 1);
                    addEnemy(curX + 10.0, 6.6, 'sniper', curX + 4.0, curX + secW - 4.0);
                    if (wIdx >= 2) {
                        crackedBlocks.push({ x: (curX + 16.2) * T, y: 6.6 * T, w: 1.8 * T, h: 0.9 * T, broken: false });
                    }
                    if (targetKeys > 0 && sealKeys.length < targetKeys) {
                        sealKeys.push({ x: (curX + 11.0) * T, y: 5.4 * T, id: `key_${idx}_${sealKeys.length}`, collected: false });
                    }
                    curX += secW;
                } else {
                    // Teleporter & Wall-Climb Chimney
                    const secW = 19;
                    addGround(curX, 12, 9, 5);
                    addGround(curX + 7.5, 2.5, 1.8, 9.5, 'wall', 'normal');
                    teleporters.push({
                        x1: (curX + 5.8) * T, y1: 12 * T - 56,
                        x2: (curX + 11.2) * T, y2: 6.8 * T - 56,
                        color: wTheme.themeColor
                    });
                    addHazard(curX + 9, 13.5, secW - 9, 3.5);
                    addGround(curX + 9, 14.2, secW - 9, 2.8);
                    addPlatform(curX + 10.2, 6.8, 6.8);
                    addEnemy(curX + 14.0, 6.8, pickEnemy(sIdx + 1), curX + 11.5, curX + 16.5);
                    if (targetKeys > 0 && sealKeys.length < targetKeys) {
                        sealKeys.push({ x: (curX + 14.5) * T, y: 5.5 * T, id: `key_${idx}_${sealKeys.length}`, collected: false });
                    }
                    curX += secW;
                }

                // Checkpoint Bastion at midpoint + sub-boss arena for subIdx === 4
                if (sIdx === 2) {
                    addGround(curX, 11, 13, 6);
                    checkpoints.push({ x: (curX + 2.2) * T, y: 11 * T - 64 });
                    mysteryBlocks.push({ x: (curX + 5.2) * T, y: 7.5 * T, content: sIdx % 2 === 0 ? 'shield' : 'fire' });
                    if (scenario === 'rhythm_phase') {
                        addEnemy(curX + 8.5, 11, 'shieldbearer', curX + 4.5, curX + 11.8, { maxHp: 4, hp: 4 });
                    }
                    curX += 13;
                }
            }

            // Helper: find a safe walkable surface spot for fallback Seal Keys or Relic Chests
            const stageSpanPx = Math.max(1200, curX * T);
            const isSpotSafeAboveSolid = (candX, spotY, minSpacing) => {
                if (candX < 13.5 * T || candX > (curX - 2) * T || spotY < 1.8 * T) return false;
                for (const s of solids) {
                    if (s.type === 'wall' && candX >= s.x - 28 && candX <= s.x + s.w + 28 && spotY >= s.y - 24 && spotY <= s.y + s.h + 24) {
                        return false;
                    }
                }
                for (const hz of hazards) {
                    if (candX >= hz.x - 20 && candX <= hz.x + hz.w + 20 && spotY >= hz.y - 90) return false;
                }
                for (const lg of laserGates) {
                    if (candX >= lg.x - 36 && candX <= lg.x + lg.w + 36) return false;
                }
                for (const sw of saws) {
                    const sx1 = Math.min(sw.startX, sw.endX) - (sw.r || 22) - 20;
                    const sx2 = Math.max(sw.startX, sw.endX) + (sw.r || 22) + 20;
                    const sy1 = Math.min(sw.startY, sw.endY) - (sw.r || 22) - 20;
                    const sy2 = Math.max(sw.startY, sw.endY) + (sw.r || 22) + 20;
                    if (candX >= sx1 && candX <= sx2 && spotY >= sy1 && spotY <= sy2) return false;
                }
                for (const mb of mysteryBlocks) {
                    if (Math.abs(candX - (mb.x + T / 2)) < 48 && Math.abs(spotY - (mb.y + T / 2)) < 58) return false;
                }
                for (const sk of sealKeys) {
                    if (Math.hypot(candX - sk.x, spotY - sk.y) < minSpacing) return false;
                }
                for (const rc of relicChests) {
                    if (Math.hypot(candX - rc.x, spotY - rc.y) < 3.5 * T) return false;
                }
                return true;
            };

            const findSafeWalkableSpot = (targetX, yAboveSurface, minSpacing) => {
                const walkables = solids
                    .filter((s) => s.type !== 'wall' && s.y >= 4.0 * T && s.y <= 12.2 * T && s.w >= 2.2 * T && s.x < (curX - 1.5) * T)
                    .sort((a, b) => Math.abs((a.x + a.w / 2) - targetX) - Math.abs((b.x + b.w / 2) - targetX));
                for (const s of walkables) {
                    const left = Math.max(13.8 * T, s.x + 1.1 * T);
                    const right = Math.min((curX - 2.2) * T, s.x + s.w - 1.1 * T);
                    if (left > right) continue;
                    const candY = Math.round(s.y - yAboveSurface);
                    const clampedStart = Math.max(left, Math.min(right, targetX));
                    const offsets = [0, -1.2 * T, 1.2 * T, -2.5 * T, 2.5 * T];
                    for (const off of offsets) {
                        const candX = Math.round(Math.max(left, Math.min(right, clampedStart + off)));
                        if (isSpotSafeAboveSolid(candX, candY, minSpacing)) {
                            return { x: candX, y: candY };
                        }
                    }
                }
                return null;
            };

            // Guarantee all targetKeys Seal Keys exist safely across walkable terrain
            if (hasKeys) {
                const startLen = sealKeys.length;
                for (let k = startLen; k < targetKeys; k++) {
                    const slotIdx = k - startLen;
                    const needed = Math.max(1, targetKeys - startLen);
                    const frac = 0.22 + ((slotIdx + 0.5) / needed) * 0.62;
                    const spot = findSafeWalkableSpot(stageSpanPx * frac, 1.45 * T, 4.5 * T)
                        || findSafeWalkableSpot(stageSpanPx * (0.28 + k * 0.14), 1.45 * T, 2.5 * T);
                    if (spot) {
                        sealKeys.push({ x: spot.x, y: spot.y, id: `key_${idx}_${sealKeys.length}`, collected: false });
                    }
                }
            }

            // World Relic Chest fallback on x01, x09, and World 13–15 x05 if mode=0 wasn't reached
            if (shouldHaveRelic && relicChests.length === 0) {
                const spot = findSafeWalkableSpot(stageSpanPx * 0.60, 0.72 * T, 2.5 * T)
                    || findSafeWalkableSpot(stageSpanPx * 0.48, 0.72 * T, 1.8 * T);
                if (spot) {
                    relicChests.push({
                        x: spot.x, y: spot.y,
                        chestId: wTheme.relicChestId,
                        rewardName: wTheme.relicRewardName,
                        cosmeticId: wTheme.relicCosmeticId,
                        opened: false
                    });
                }
            }

            addGround(curX, 10.5, 14, 6.5);
            addEnemy(curX + 5.5, 10.5, pickEnemy(3), curX + 2.0, curX + 9.5);
            portal = {
                x: (curX + 10.8) * T,
                y: 10.5 * T - 86,
                requiredKeys: sealKeys.length
            };
        }

        if (typeof normalizeLevelCollectibles === 'function') {
            normalizeLevelCollectibles(
                coins, mysteryBlocks, solids, crumblePlatforms, portal,
                Boolean(info.isBossLevel), hazards, teleporters, checkpoints, saws
            );
        }

        // Optional underground sub-chamber ONLY on calm exploration/standard Act II stages
        const allowSub = !info.isBossLevel && scenario !== 'escape_chase' && scenario !== 'vertical_ascent' && (subIdx === 0 || subIdx === 8);
        const subChamber = (allowSub && typeof attachSubPlatformChamberToLevel === 'function')
            ? attachSubPlatformChamberToLevel({
                levelIndex: 80 + idx % 20,
                isTrollMode: false,
                isBossLevel: false,
                solids, mysteryBlocks, hazards, coins, enemies,
                movingPlatforms, crumblePlatforms, saws, stalactites,
                gravityZones, jumpPads, windZones, laserGates,
                checkpoints, teleporters, portal
            })
            : null;

        // Atlantis (World 11) Cavern Reef Roof + Hanging Coral Arches to stop overhead sky-flying
        if (wIdx === 0 && !info.isBossLevel && scenario !== 'vertical_ascent') {
            const maxLevelGx = Math.ceil((portal.x + 3 * T) / T);
            addGround(8, 0.15, Math.max(20, maxLevelGx - 8), 1.1, 'wall', 'normal');

            const archW = 2.5 * T;
            const archY = 1.25 * T;
            const archH = 2.0 * T;
            const placedArches = [];
            const fracs = [0.30, 0.45, 0.60, 0.72, 0.80];
            for (const f of fracs) {
                if (placedArches.length >= 3) break;
                const ax = Math.round((portal.x * f) / T) * T;
                if (ax < 13 * T || ax + archW > portal.x - 5 * T) continue;
                if (placedArches.some((px) => Math.abs(ax - px) < 10 * T)) continue;

                const boxL = ax - 1.5 * T;
                const boxR = ax + archW + 1.5 * T;
                const hasClearFloorBelow = solids.some(
                    (s) => s.type !== 'wall' && s.y >= 9.5 * T && s.y <= 12.5 * T && s.x <= ax && s.x + s.w >= ax + archW
                );
                if (!hasClearFloorBelow) continue;

                const blockedBySolid = solids.some(
                    (s) => s.y > 1.2 * T && s.x < boxR && s.x + s.w > boxL && s.y < 6.2 * T
                );
                const blockedByHighObj =
                    phaseBlocks.some((p) => p.x < boxR && p.x + p.w > boxL && p.y < 6.2 * T) ||
                    crumblePlatforms.some((p) => p.x < boxR && p.x + p.w > boxL && p.y < 6.2 * T) ||
                    movingPlatforms.some((p) => Math.min(p.startX, p.endX) < boxR && Math.max(p.startX, p.endX) + p.w > boxL && Math.min(p.startY, p.endY) < 6.2 * T) ||
                    mysteryBlocks.some((m) => m.x < boxR && m.x + T > boxL && m.y < 6.2 * T) ||
                    windZones.some((w) => w.x < boxR && w.x + w.w > boxL) ||
                    laserGates.some((l) => l.x < boxR && l.x + l.w > boxL) ||
                    saws.some((sw) => Math.min(sw.startX, sw.endX) - 24 < boxR && Math.max(sw.startX, sw.endX) + 24 > boxL && Math.min(sw.startY, sw.endY) < 6.2 * T) ||
                    sealKeys.some((k) => k.x >= boxL && k.x <= boxR && k.y < 6.2 * T) ||
                    relicChests.some((r) => r.x >= boxL && r.x <= boxR && r.y < 6.2 * T) ||
                    teleporters.some((tp) => (tp.x1 >= boxL && tp.x1 <= boxR) || (tp.x2 >= boxL && tp.x2 <= boxR)) ||
                    bubbleStations.some((b) => b.x >= boxL && b.x <= boxR && b.y < 6.2 * T) ||
                    coins.some((c) => c.x >= boxL && c.x <= boxR && c.y < 190);
                const blockedBySub = Boolean(
                    subChamber &&
                    ((subChamber.pipeIn && subChamber.pipeIn.x < boxR && subChamber.pipeIn.x + subChamber.pipeIn.w > boxL) ||
                     (subChamber.pipeReturn && subChamber.pipeReturn.x < boxR && subChamber.pipeReturn.x + subChamber.pipeReturn.w > boxL))
                );
                if (blockedBySolid || blockedByHighObj || blockedBySub) continue;

                solids.push({ x: ax, y: archY, w: archW, h: archH, type: 'wall', surfaceType: 'normal' });
                placedArches.push(ax);
            }
        }

        return {
            info,
            solids,
            mysteryBlocks,
            hazards,
            coins,
            enemies,
            movingPlatforms,
            crumblePlatforms,
            saws,
            stalactites,
            checkpoints,
            teleporters,
            gravityZones,
            reverseGravityZones,
            jumpPads,
            windZones,
            laserGates,
            phaseBlocks,
            crackedBlocks,
            relicChests,
            sealKeys,
            bubbleStations,
            sporeClouds,
            shieldPads,
            chaseWall,
            risingHazard,
            darkMode: Boolean(info.darkMode),
            underwater: Boolean(info.underwater),
            worldTheme: wTheme.id,
            worldIdx: wIdx,
            signs,
            subChamber,
            portal,
            bossConfig
        };
    }

    window.ACT2_WORLD_THEMES = ACT2_WORLD_THEMES;
    window.ACT2_LEVEL_INFO = ACT2_LEVEL_INFO;
    window.createAct2LevelData = createAct2LevelData;
})(window);
