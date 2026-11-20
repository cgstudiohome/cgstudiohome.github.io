// 10-Level Progressive Difficulty Campaign (No Bats, Clear Scaling 1 -> 10)
const TILE_SIZE = 48;

const LEVEL_INFO = [
    {
        id: 0,
        world: "ZORLUK: ★☆☆☆☆ (KOLAY)",
        shortName: "Kristal Mağara",
        name: "Bölüm 1: Kristal Mağaralar",
        desc: "Başlangıç seviyesi: Geniş platformlarda hızlı zıplama, duvardan sekme ve [?] bloklarından Ateş Topu/Kalkan alma eğitimi.",
        themeColor: "#00f2fe",
        isBossLevel: false
    },
    {
        id: 1,
        world: "ZORLUK: ★★☆☆☆ (NORMAL)",
        shortName: "Sarkıt Geçidi",
        name: "Bölüm 2: Sarkıt Geçidi",
        desc: "İlk sınav: Tavandan düşen kristal sarkıtlar, çöken köprüler ve hızlı hareket eden Neon Akrepler devreye giriyor!",
        themeColor: "#00f2fe",
        isBossLevel: false
    },
    {
        id: 2,
        world: "ZORLUK: ★★☆☆☆ (BOSS 1)",
        shortName: "Kristal Dev ☠",
        name: "Bölüm 3: Kristal Dev (Boss 1)",
        desc: "İlk Boss Savaşı (10 Can): Kristal Dev'in zıplayıp yere vurduğunda çıkardığı şok dalgalarından kaç ve kafasındaki çekirdeği ez!",
        themeColor: "#ff2a85",
        isBossLevel: true
    },
    {
        id: 3,
        world: "ZORLUK: ★★★☆☆ (ORTA)",
        shortName: "Testere Koridoru",
        name: "Bölüm 4: Testere Koridorları",
        desc: "Zorluk artıyor! Dönen neon testereler, daralan platformlar ve 2 vuruşta yıkılan Zırhlı Golemler seni bekliyor.",
        themeColor: "#b537f2",
        isBossLevel: false
    },
    {
        id: 4,
        world: "ZORLUK: ★★★☆☆ (ORTA-ZOR)",
        shortName: "Solucan Deliği",
        name: "Bölüm 5: Solucan Deliği Labirenti",
        desc: "Işınlanma portallarını (🌀) kullan! İlk kez uzaktan plazma mermisi atan Karanlık Nöbetçilerle karşılaşacaksın.",
        themeColor: "#b537f2",
        isBossLevel: false
    },
    {
        id: 5,
        world: "ZORLUK: ★★★★☆ (BOSS 2)",
        shortName: "Zindan Celladı ☠",
        name: "Bölüm 6: Zindan Celladı (Boss 2)",
        desc: "İkinci Boss Savaşı (15 Can): Çok daha hızlı! Arenadaki dönen testereden kaçarken Cellat'ın çiftli plazma atışlarına dikkat et.",
        themeColor: "#ff2a85",
        isBossLevel: true
    },
    {
        id: 6,
        world: "ZORLUK: ★★★★☆ (ZOR)",
        shortName: "Sıfır Yerçekimi",
        name: "Bölüm 7: Sıfır Yerçekimi Anomalisi",
        desc: "Geniş lav uçurumları, hızlı ikili testereler, ateş eden Nöbetçiler ve düşük yerçekimi alanları!",
        themeColor: "#06d6a0",
        isBossLevel: false
    },
    {
        id: 7,
        world: "ZORLUK: ★★★★★ (ÇOK ZOR)",
        shortName: "Çöken Uçurum",
        name: "Bölüm 8: Çöken Uçurum",
        desc: "Yüksek hız şart! Bastıktan çok kısa süre sonra yıkılan köprüler, yoğun sarkıt yağmuru ve testere tuzakları.",
        themeColor: "#06d6a0",
        isBossLevel: false
    },
    {
        id: 8,
        world: "ZORLUK: ★★★★★ (UZMAN)",
        shortName: "Karanlık Kule",
        name: "Bölüm 9: Karanlık Kule Tırmanışı",
        desc: "Çift testereli duvar zıplama bacaları, 3 cana sahip Elit Golemler ve Karanlık Nöbetçi ordusu.",
        themeColor: "#ffd166",
        isBossLevel: false
    },
    {
        id: 9,
        world: "ZORLUK: ★★★★★ (BOSS 3)",
        shortName: "İmparator ☠",
        name: "Bölüm 10: Karanlık İmparator (Boss 3)",
        desc: "1. Sezon Sonu Savaşı (18 Can): Çift yönlü plazma mermileri ve ikili testereli arenada Karanlık İmparator'u yen!",
        themeColor: "#ff2a85",
        isBossLevel: true
    }
];

const EXTRA_30_LEVELS = [
    { id: 10, world: "BÖLGE 2: SİBER MAGMA", shortName: "Lav Vadisi", name: "Bölüm 11: Kızıl Lav Vadisi", desc: "Siber Magma bölgesine hoş geldin! Geniş lav nehirleri üzerinde hareketli platformlar ve hızlı akrepler.", themeColor: "#ff5400", isBossLevel: false },
    { id: 11, world: "BÖLGE 2: SİBER MAGMA", shortName: "Kızıl Köprü", name: "Bölüm 12: Kızıl Çöken Köprüler", desc: "Lavların üzerindeki çürük taş köprülerden hiç durmadan koşarak geç ve antik zümrütleri topla!", themeColor: "#ff5400", isBossLevel: false },
    { id: 12, world: "BÖLGE 2: SİBER MAGMA", shortName: "Ateş Bacası", name: "Bölüm 13: Ateş Bacası Tırmanışı", desc: "Yüksek duvar zıplama kuleleri, dönen neon testereler ve zırhlı magma golemleri.", themeColor: "#ff5400", isBossLevel: false },
    { id: 13, world: "BÖLGE 2: SİBER MAGMA", shortName: "Plazma Hattı", name: "Bölüm 14: Plazma Üretim Hattı", desc: "Işınlanma portalları ve uzaktan ateş açan Karanlık Nöbetçilerle dolu fabrika koridoru.", themeColor: "#ff5400", isBossLevel: false },
    { id: 14, world: "BÖLGE 2: BOSS 4", shortName: "Magma Titanı ☠", name: "Bölüm 15: Magma Titanı (Boss 4)", desc: "Boss Savaşı (18 Can): Lav çukurlarının koruduğu arenada Magma Titanı'nın şok dalgalarından kaç!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 15, world: "BÖLGE 2: SİBER MAGMA", shortName: "Obsidyen Mağara", name: "Bölüm 16: Obsidyen Sarkıtlar", desc: "Tavandan düşen keskin obsidyen sarkıtlar ve dar platformlarda devriye gezen elit golemler.", themeColor: "#ff6d00", isBossLevel: false },
    { id: 16, world: "BÖLGE 2: SİBER MAGMA", shortName: "Manyetik Alan", name: "Bölüm 17: Manyetik Anomali", desc: "Düşük yerçekimi alanlarını kullanarak devasa testere tuzaklarının üzerinden süzül!", themeColor: "#ff6d00", isBossLevel: false },
    { id: 17, world: "BÖLGE 2: SİBER MAGMA", shortName: "Kızıl Labirent", name: "Bölüm 18: Kızıl Portal Labirenti", desc: "Solucan delikleriyle birbirine bağlanan yüksek platformlar ve yoğun düşman savunması.", themeColor: "#ff6d00", isBossLevel: false },
    { id: 18, world: "BÖLGE 2: SİBER MAGMA", shortName: "Cehennem Geçidi", name: "Bölüm 19: Cehennem Testere Geçidi", desc: "Arka arkaya dizilmiş hareketli testereler, çöken taşlar ve keskin nişancı nöbetçiler.", themeColor: "#ff6d00", isBossLevel: false },
    { id: 19, world: "BÖLGE 2: BOSS 5", shortName: "Kızıl Lord ☠", name: "Bölüm 20: Kızıl Magma Lordu (Boss 5)", desc: "2. Sezon Boss Savaşı (20 Can): Hızlı plazma mermileri ve testereli arenada Kızıl Lord ile yüzleş!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 20, world: "BÖLGE 3: KUANTUM BOŞLUK", shortName: "Siber Sektör", name: "Bölüm 21: Kuantum Siber Sektör", desc: "Kuantum Boşluk bölgesine giriş! Neon platformlar, hızlı akrepler ve ışınlanma kapıları.", themeColor: "#00f2fe", isBossLevel: false },
    { id: 21, world: "BÖLGE 3: KUANTUM BOŞLUK", shortName: "Zaman Kırığı", name: "Bölüm 22: Zaman Kırığı Koridoru", desc: "Sıfır yerçekimi alanları ve çöken kuantum köprüleri bir arada!", themeColor: "#00f2fe", isBossLevel: false },
    { id: 22, world: "BÖLGE 3: KUANTUM BOŞLUK", shortName: "Lazer Kulesi", name: "Bölüm 23: Lazer & Testere Kulesi", desc: "Dikey duvarlardan sekerek testerelerin arasından yüksel ve zümrütleri topla.", themeColor: "#00f2fe", isBossLevel: false },
    { id: 23, world: "BÖLGE 3: KUANTUM BOŞLUK", shortName: "Nöbetçi Üssü", name: "Bölüm 24: Karanlık Nöbetçi Üssü", desc: "Her platformda mevzilenmiş plazma nöbetçileri ve zırhlı golemler seni bekliyor.", themeColor: "#00f2fe", isBossLevel: false },
    { id: 24, world: "BÖLGE 3: BOSS 6", shortName: "Hiper-Meka ☠", name: "Bölüm 25: Hiper-Meka Muhafız (Boss 6)", desc: "Boss Savaşı (22 Can): Kuantum portalları kullanarak Hiper-Meka'nın saldırılarından sıyrıl!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 25, world: "BÖLGE 3: KUANTUM BOŞLUK", shortName: "Yıldız Tozu", name: "Bölüm 26: Yıldız Tozu Uçurumu", desc: "Uzun düşük yerçekimi uçurumları, havada dönen testereler ve sarkıt tuzakları.", themeColor: "#7209b7", isBossLevel: false },
    { id: 26, world: "BÖLGE 3: KUANTUM BOŞLUK", shortName: "Karanlık Maden", name: "Bölüm 27: Antik Zümrüt Madeni", desc: "Bol zümrütlü ama çok tehlikeli! Çöken köprüler ve hızlı akrep sürüleri.", themeColor: "#7209b7", isBossLevel: false },
    { id: 27, world: "BÖLGE 3: KUANTUM BOŞLUK", shortName: "Siber Fırtına", name: "Bölüm 28: Siber Fırtına Viyadüğü", desc: "Yüksek hızlı hareketli platformlar ve çiftli testere engelleri.", themeColor: "#7209b7", isBossLevel: false },
    { id: 28, world: "BÖLGE 3: KUANTUM BOŞLUK", shortName: "Kuantum Çekirdek", name: "Bölüm 29: Kuantum Çekirdek Yolu", desc: "Boss öncesi son sınav: Portallar, duvar zıplama bacaları ve elit muhafızlar.", themeColor: "#7209b7", isBossLevel: false },
    { id: 29, world: "BÖLGE 3: BOSS 7", shortName: "Hiperiyon ☠", name: "Bölüm 30: Kuantum Kralı Hiperiyon (Boss 7)", desc: "3. Sezon Boss Savaşı (24 Can): Sıfır yerçekimi alanlı arenada Hiperiyon'u alt et!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 30, world: "BÖLGE 4: KOZMİK HİÇLİK", shortName: "Hiçlik Kapısı", name: "Bölüm 31: Kozmik Hiçlik Kapısı", desc: "Son sezon başlıyor! Kozmik uçurumlar, hızlı testereler ve karanlık ordular.", themeColor: "#06d6a0", isBossLevel: false },
    { id: 31, world: "BÖLGE 4: KOZMİK HİÇLİK", shortName: "Kabus Köprüsü", name: "Bölüm 32: Kabus Köprüleri", desc: "Bastığın anda titreyen uzun çöken köprü dizileri ve sarkıt yağmuru.", themeColor: "#06d6a0", isBossLevel: false },
    { id: 32, world: "BÖLGE 4: KOZMİK HİÇLİK", shortName: "Gölge Kalesi", name: "Bölüm 33: Gölge Kalesi Surları", desc: "Devasa kule duvarları, dikey testereler ve üçlü zıplama gerektiren geçitler.", themeColor: "#06d6a0", isBossLevel: false },
    { id: 33, world: "BÖLGE 4: KOZMİK HİÇLİK", shortName: "Kaos Portalları", name: "Bölüm 34: Kaos Portalları", desc: "Doğru zamanda ışınlan, nöbetçi ateşlerinden kaç ve antik zümrütleri topla.", themeColor: "#06d6a0", isBossLevel: false },
    { id: 34, world: "BÖLGE 4: BOSS 8", shortName: "Kaos Ejderi ☠", name: "Bölüm 35: Kozmik Kaos Ejderi (Boss 8)", desc: "Boss Savaşı (26 Can): Çift testereli arenada Kaos Ejderi'nin plazma fırtınasına karşı koy!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 35, world: "BÖLGE 4: KOZMİK HİÇLİK", shortName: "Sonsuzluk Yolu", name: "Bölüm 36: Sonsuzluk Koridoru", desc: "Düşük yerçekimi, çöken taşlar ve keskin testerelerin birleştiği uzman parkuru.", themeColor: "#ffd166", isBossLevel: false },
    { id: 36, world: "BÖLGE 4: KOZMİK HİÇLİK", shortName: "Elit Muhafızlar", name: "Bölüm 37: Elit Muhafız Alayı", desc: "Ateş topu ve kalkanını hazır tut! En yoğun Golem ve Nöbetçi savunması.", themeColor: "#ffd166", isBossLevel: false },
    { id: 37, world: "BÖLGE 4: KOZMİK HİÇLİK", shortName: "Kıyamet Kulesi", name: "Bölüm 38: Kıyamet Kulesi", desc: "Yüksek duvar zıplama bacaları, ışınlanma kapıları ve sarkıt tuzakları.", themeColor: "#ffd166", isBossLevel: false },
    { id: 38, world: "BÖLGE 4: KOZMİK HİÇLİK", shortName: "Taht Koridoru", name: "Bölüm 39: Karanlık Taht Koridoru", desc: "Karanlık tahta giden geçit! Tüm yeteneklerini kullanarak portal kapısına ulaş.", themeColor: "#ffd166", isBossLevel: false },
    { id: 39, world: "BÖLGE 4: BOSS 9", shortName: "Hiçlik İmparatoru ☠", name: "Bölüm 40: Kozmik Hiçlik İmparatoru (Boss 9)", desc: "4. Bölge Sonu Boss Savaşı (26 Can): Kozmik Hiçlik İmparatoru'nu yen ve Buzul Kalesi kapısını aç!", themeColor: "#ff2a85", isBossLevel: true },

    // =========================================================================
    // BÖLGE 5 (BÖLÜM 41-50): BUZUL VALKÜR KALESİ (🧊 Kaygan Buz Zeminler & 💨 Fırtına Rüzgarı)
    // =========================================================================
    { id: 40, world: "BÖLGE 5: BUZUL KALESİ", shortName: "Donmuş Vadi", name: "Bölüm 41: Donmuş Kristal Vadi", desc: "Yeni Mekanik! 🧊 Kaygan buz platformlarda hızını kontrol et ve 🚀 Trambolinlerle uçurumları aş!", themeColor: "#48cae4", isBossLevel: false },
    { id: 41, world: "BÖLGE 5: BUZUL KALESİ", shortName: "Buz Sarkıtları", name: "Bölüm 42: Kutup Sarkıt Geçidi", desc: "Buz zemin üzerinde kayarken tavandan düşen dev buz sarkıtlarına ve testerelere dikkat et!", themeColor: "#48cae4", isBossLevel: false },
    { id: 42, world: "BÖLGE 5: BUZUL KALESİ", shortName: "Kuzey Rüzgarı", name: "Bölüm 43: Kuzey Rüzgarı Kanyonu", desc: "Yeni Mekanik! 💨 Dikey hava akımlarına (Updraft) girerek gökyüzündeki buz adalarına süzül!", themeColor: "#90e0ef", isBossLevel: false },
    { id: 43, world: "BÖLGE 5: BUZUL KALESİ", shortName: "Ayna Köprüler", name: "Bölüm 44: Kırılan Buz Köprüleri", desc: "Buz zeminlerden hız al, çöken köprülerde hiç durmadan trambolinlere zıpla!", themeColor: "#90e0ef", isBossLevel: false },
    { id: 44, world: "BÖLGE 5: BOSS 10", shortName: "Buzul Devi ☠", name: "Bölüm 45: Kuzeyin Buzul Devi (Boss 10)", desc: "Boss Savaşı (28 Can): Kaygan buz zeminli ve trambolinli arenada Buzul Devi'ni ez!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 45, world: "BÖLGE 5: BUZUL KALESİ", shortName: "Tipi Kulesi", name: "Bölüm 46: Dondurucu Tipi Kulesi", desc: "Dikey hava akımları ve duvar zıplama bacalarıyla Buzul Kulesi'nin zirvesine tırman!", themeColor: "#48cae4", isBossLevel: false },
    { id: 46, world: "BÖLGE 5: BUZUL KALESİ", shortName: "Buz Lazerleri", name: "Bölüm 47: Kutup Lazer Üssü", desc: "Yeni Mekanik! ⚡ Zamanlamalı Lazer Kapılarının sönmesini bekle ve buz zeminde kayarak geç!", themeColor: "#48cae4", isBossLevel: false },
    { id: 47, world: "BÖLGE 5: BUZUL KALESİ", shortName: "Kutup Portalları", name: "Bölüm 48: Aurora Portal Labirenti", desc: "Kuzey ışıkları altında solucan delikleri ve zırhlı buzul golemleriyle dolu labirent.", themeColor: "#90e0ef", isBossLevel: false },
    { id: 48, world: "BÖLGE 5: BUZUL KALESİ", shortName: "Valkür Surları", name: "Bölüm 49: Buzul Valkür Surları", desc: "Buz konveyörleri, rüzgar akımları ve keskin nişancı nöbetçilerle korunan kale surları!", themeColor: "#90e0ef", isBossLevel: false },
    { id: 49, world: "BÖLGE 5: BOSS 11", shortName: "Buz Kralı ☠", name: "Bölüm 50: Ebedi Buz Kralı Frost (Boss 11)", desc: "50. Bölüm Yarı-Final Savaşı (30 Can): Rüzgar akımlı buz arenasında Kral Frost'u devir!", themeColor: "#ff2a85", isBossLevel: true },

    // =========================================================================
    // BÖLGE 6 (BÖLÜM 51-60): ANTİK ZÜMRÜT TAPINAĞI & FİRAVUN PİRAMİDİ (⚡ Lazer Kapıları & Tuzaklar)
    // =========================================================================
    { id: 50, world: "BÖLGE 6: ANTİK TAPINAK", shortName: "Zümrüt Vaha", name: "Bölüm 51: Kayıp Zümrüt Vahası", desc: "Antik Tapınak bölgesine hoş geldin! 🚀 Trambolinler ve ⏩ Hız bantlarıyla tapınak avlusunu geç.", themeColor: "#06d6a0", isBossLevel: false },
    { id: 51, world: "BÖLGE 6: ANTİK TAPINAK", shortName: "Piramit Koridoru", name: "Bölüm 52: Piramit Lazer Koridoru", desc: "Antik güvenlik sistemi devrede! ⚡ Zamanlamalı Lazer Kapılarından ritim tutarak geç.", themeColor: "#ffd166", isBossLevel: false },
    { id: 52, world: "BÖLGE 6: ANTİK TAPINAK", shortName: "Kum Fırtınası", name: "Bölüm 53: Kum Fırtınası Uçurumu", desc: "💨 Yükselen sıcak hava akımlarını kullanarak devasa testere çukurlarının üstünden uç!", themeColor: "#ffd166", isBossLevel: false },
    { id: 53, world: "BÖLGE 6: ANTİK TAPINAK", shortName: "Hazine Odası", name: "Bölüm 54: Firavun'un Hazine Odası", desc: "Çok katlı tapınak odalarında 🌀 portalları ve trambolinleri kullanarak zümrütleri topla.", themeColor: "#06d6a0", isBossLevel: false },
    { id: 54, world: "BÖLGE 6: BOSS 12", shortName: "Altın Sfenks ☠", name: "Bölüm 55: Mekanik Altın Sfenks (Boss 12)", desc: "Boss Savaşı (32 Can): Lazer kapılı ve trambolinli piramit arenasında Sfenks'i mağlup et!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 55, world: "BÖLGE 6: ANTİK TAPINAK", shortName: "Akrep Mahzeni", name: "Bölüm 56: Zehirli Akrep Mahzeni", desc: "Hızlı neon akrepler, çöken tapınak taşları ve tavandan inen sarkıt tuzakları!", themeColor: "#06d6a0", isBossLevel: false },
    { id: 56, world: "BÖLGE 6: ANTİK TAPINAK", shortName: "Güneş Kulesi", name: "Bölüm 57: Ra'nın Güneş Kulesi", desc: "Dikey hava akımları ve zıplama pedleriyle Güneş Kulesi'nin en üst katına yüksel!", themeColor: "#ffd166", isBossLevel: false },
    { id: 57, world: "BÖLGE 6: ANTİK TAPINAK", shortName: "Lanetli Geçit", name: "Bölüm 58: Lanetli Hız Koridoru", desc: "⏩ Turbo hız konveyörleri üzerinde koşarken lazer kapılarından ve testerelerden sıyrıl!", themeColor: "#ffd166", isBossLevel: false },
    { id: 58, world: "BÖLGE 6: ANTİK TAPINAK", shortName: "Kutsal Mihrap", name: "Bölüm 59: Kutsal Zümrüt Mihrabı", desc: "Tapınak muhafızı Golem ve Nöbetçi ordusunu ateş toplarınla yararak ilerle!", themeColor: "#06d6a0", isBossLevel: false },
    { id: 59, world: "BÖLGE 6: BOSS 13", shortName: "Firavun ☠", name: "Bölüm 60: Ölümsüz Siber Firavun (Boss 13)", desc: "6. Bölge Boss Savaşı (34 Can): Çift lazerli ve rüzgar akımlı arenada Siber Firavun'u yen!", themeColor: "#ff2a85", isBossLevel: true },

    // =========================================================================
    // BÖLGE 7 (BÖLÜM 61-70): GÖKYÜZÜ FIRTINA ADALARI (🚀 Trambolinler & 💨 Hava Akımları)
    // =========================================================================
    { id: 60, world: "BÖLGE 7: GÖKYÜZÜ ADALARI", shortName: "Bulut Limanı", name: "Bölüm 61: Bulut Üstü Siber Liman", desc: "Gökyüzü Adaları! Adadan adaya 🚀 yüksek güçlü trambolinlerle uçarak geç!", themeColor: "#00f2fe", isBossLevel: false },
    { id: 61, world: "BÖLGE 7: GÖKYÜZÜ ADALARI", shortName: "Rüzgar Tüneli", name: "Bölüm 62: Stratosfer Rüzgar Tüneli", desc: "💨 Devasa hava akımları seni bulutların üzerine taşıyacak, havadaki testerelere dikkat!", themeColor: "#38bdf8", isBossLevel: false },
    { id: 62, world: "BÖLGE 7: GÖKYÜZÜ ADALARI", shortName: "Şimşek Köprüsü", name: "Bölüm 63: Şimşekli Gökyüzü Köprüsü", desc: "Yüksek voltaj elektrik çukurları üzerinde ⏩ turbo hız bantları ve çöken platformlar!", themeColor: "#38bdf8", isBossLevel: false },
    { id: 63, world: "BÖLGE 7: GÖKYÜZÜ ADALARI", shortName: "Uçan Kuleler", name: "Bölüm 64: Uçan Kuleler Parkuru", desc: "Gökyüzünde asılı duran dikey duvarlardan sekerek ve lazer kapılarını aşarak ilerle!", themeColor: "#00f2fe", isBossLevel: false },
    { id: 64, world: "BÖLGE 7: BOSS 14", shortName: "Fırtına Kartalı ☠", name: "Bölüm 65: Meka Fırtına Hükümdarı (Boss 14)", desc: "Boss Savaşı (36 Can): Hava akımlı ve düşük yerçekimli gökyüzü arenasında zafer kazan!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 65, world: "BÖLGE 7: GÖKYÜZÜ ADALARI", shortName: "Jet Konveyör", name: "Bölüm 66: Jet Hızı Platformları", desc: "⏩ Turbo hız konveyörleri ve 🚀 trambolinlerin birleştiği baş döndürücü hava parkuru!", themeColor: "#38bdf8", isBossLevel: false },
    { id: 66, world: "BÖLGE 7: GÖKYÜZÜ ADALARI", shortName: "Gökkuşağı Yolu", name: "Bölüm 67: Prizma Gökyüzü Yolu", desc: "Kaygan buz bulutları, solucan delikleri ve elit gökyüzü nöbetçileri bir arada!", themeColor: "#00f2fe", isBossLevel: false },
    { id: 67, world: "BÖLGE 7: GÖKYÜZÜ ADALARI", shortName: "Kasırga Gözü", name: "Bölüm 68: Kasırganın Gözü", desc: "Arka arkaya dizilmiş 💨 fırtına akımları ve ⚡ zamanlamalı lazer bariyerleri!", themeColor: "#38bdf8", isBossLevel: false },
    { id: 68, world: "BÖLGE 7: GÖKYÜZÜ ADALARI", shortName: "Gökyüzü Hisarı", name: "Bölüm 69: Bulut Hisarı Savunması", desc: "Gökyüzü İmparatoru öncesi son kale! Golem ve Nöbetçi hatlarını trambolinlerle aş.", themeColor: "#00f2fe", isBossLevel: false },
    { id: 69, world: "BÖLGE 7: BOSS 15", shortName: "Gök Titanı ☠", name: "Bölüm 70: Stratosfer Gök Titanı (Boss 15)", desc: "7. Bölge Boss Savaşı (38 Can): Çift trambolinli gökyüzü arenasında Gök Titanı'nı devir!", themeColor: "#ff2a85", isBossLevel: true },

    // =========================================================================
    // BÖLGE 8 (BÖLÜM 71-80): SİBER SAMURAY & SHOGUN KALESİ (⏩ Hız Bantları & ⚡ Lazer Kuleleri)
    // =========================================================================
    { id: 70, world: "BÖLGE 8: SAMURAY KALESİ", shortName: "Sakura Kapısı", name: "Bölüm 71: Neon Sakura Kapısı", desc: "Siber Samuray Kalesi'ne giriş! ⏩ Hız konveyörleri ve dönen katana testereleri seni bekliyor.", themeColor: "#ff2a85", isBossLevel: false },
    { id: 71, world: "BÖLGE 8: SAMURAY KALESİ", shortName: "Ninja Çatıları", name: "Bölüm 72: Gece Ninja Çatıları", desc: "Kale çatılarında 🚀 trambolinlerle zıpla ve tavandan inen tuzaklardan kaç!", themeColor: "#f72585", isBossLevel: false },
    { id: 72, world: "BÖLGE 8: SAMURAY KALESİ", shortName: "Lazer Dojo", name: "Bölüm 73: Lazer Korumalı Dojo", desc: "⚡ Çoklu Lazer Kapılarıyla korunan Samuray Dojo'sunda kusursuz zamanlamayla ilerle!", themeColor: "#f72585", isBossLevel: false },
    { id: 73, world: "BÖLGE 8: SAMURAY KALESİ", shortName: "Bambu Kule", name: "Bölüm 74: Siber Bambu Kulesi", desc: "Dikey duvar zıplama bacaları, 💨 rüzgar akımları ve hızlı akrep suikastçılar!", themeColor: "#ff2a85", isBossLevel: false },
    { id: 74, world: "BÖLGE 8: BOSS 16", shortName: "Kızıl Ronin ☠", name: "Bölüm 75: Gölge Komutan Kızıl Ronin (Boss 16)", desc: "Boss Savaşı (40 Can): Hız bantlı ve lazerli Dojo arenasında Kızıl Ronin ile düello!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 75, world: "BÖLGE 8: SAMURAY KALESİ", shortName: "Buzlu Bahçe", name: "Bölüm 76: Donmuş Zen Bahçesi", desc: "🧊 Kaygan buz zeminler ve çöken köprüler üzerinde yüksek hızlı samuray sınavı!", themeColor: "#f72585", isBossLevel: false },
    { id: 76, world: "BÖLGE 8: SAMURAY KALESİ", shortName: "Katana Geçidi", name: "Bölüm 77: Dönen Katana Koridoru", desc: "Dar koridorlarda hareketli testereler, ⚡ lazer kapıları ve zırhlı samuray golemleri!", themeColor: "#ff2a85", isBossLevel: false },
    { id: 77, world: "BÖLGE 8: SAMURAY KALESİ", shortName: "Portal Kalesi", name: "Bölüm 78: Shogun Portal Labirenti", desc: "🌀 Solucan delikleri ve 🚀 trambolinlerle birbirine bağlanan 3 katlı kale odaları.", themeColor: "#f72585", isBossLevel: false },
    { id: 78, world: "BÖLGE 8: SAMURAY KALESİ", shortName: "Shogun Muhafızı", name: "Bölüm 79: Shogun'un Elit Muhafızları", desc: "Ateş topu ve kalkanını kuşan! Shogun'un taht odası önündeki en güçlü savunma hattı.", themeColor: "#ff2a85", isBossLevel: false },
    { id: 79, world: "BÖLGE 8: BOSS 17", shortName: "Siber Shogun ☠", name: "Bölüm 80: İmparator Siber Shogun (Boss 17)", desc: "8. Bölge Boss Savaşı (42 Can): Lazer ve testereli taht odasında Siber Shogun'u alt et!", themeColor: "#ff2a85", isBossLevel: true },

    // =========================================================================
    // BÖLGE 9 (BÖLÜM 81-90): TARİHİ KAHRAMANLAR & FETİH BURÇLARI (Surlar, Toplar & Kuleler)
    // =========================================================================
    { id: 80, world: "BÖLGE 9: FETİH BURÇLARI", shortName: "Anadolu Hisarı", name: "Bölüm 81: Kızıl Surlar ve Hendekler", desc: "Tarihi Fetih Burçları! Lav hendeklerini 🚀 mancınık trambolinleriyle aş ve surlara çık!", themeColor: "#f59e0b", isBossLevel: false },
    { id: 81, world: "BÖLGE 9: FETİH BURÇLARI", shortName: "Şahi Koridoru", name: "Bölüm 82: Ateş ve Barut Koridoru", desc: "⏩ Hız bantları üzerinde koşarken ateş püskürten nöbetçilerden ve testerelerden kaç!", themeColor: "#d97706", isBossLevel: false },
    { id: 82, world: "BÖLGE 9: FETİH BURÇLARI", shortName: "Bozkır Rüzgarı", name: "Bölüm 83: Ötüken Bozkır Rüzgarı", desc: "💨 Güçlü bozkır rüzgar akımlarıyla yüksek kulelerin üzerinden uçarak zümrütleri topla!", themeColor: "#f59e0b", isBossLevel: false },
    { id: 83, world: "BÖLGE 9: FETİH BURÇLARI", shortName: "Demir Kapılar", name: "Bölüm 84: Zırhlı Kale Kapıları", desc: "⚡ Zamanlamalı enerji kapıları ve dikey burç duvarlarından tırmanarak iç kaleye gir!", themeColor: "#d97706", isBossLevel: false },
    { id: 84, world: "BÖLGE 9: BOSS 18", shortName: "Kale Muhafızı ☠", name: "Bölüm 85: Zırhlı Kale Komutanı (Boss 18)", desc: "Boss Savaşı (44 Can): Trambolinli ve testereli kale avlusunda Zırhlı Komutan'ı yen!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 85, world: "BÖLGE 9: FETİH BURÇLARI", shortName: "Haliç Zinciri", name: "Bölüm 86: Zincirli Boğaz Köprüleri", desc: "Çöken köprüler, 🧊 kaygan zeminler ve elektrikli hendekler üzerinden nefes kesen geçiş!", themeColor: "#f59e0b", isBossLevel: false },
    { id: 86, world: "BÖLGE 9: FETİH BURÇLARI", shortName: "Sancak Kulesi", name: "Bölüm 87: Ulubatlı Sancak Kulesi", desc: "Yüksek duvar zıplama kuleleri ve 💨 hava akımlarıyla sancağı en tepeye taşı!", themeColor: "#d97706", isBossLevel: false },
    { id: 87, world: "BÖLGE 9: FETİH BURÇLARI", shortName: "Yeraltı Tüneli", name: "Bölüm 88: Surlar Altı Lağım Tüneli", desc: "Tavandan düşen sarkıtlar, ⚡ lazer tuzakları ve karanlık mahzen golemleri!", themeColor: "#f59e0b", isBossLevel: false },
    { id: 88, world: "BÖLGE 9: FETİH BURÇLARI", shortName: "Zafer Meydanı", name: "Bölüm 89: Büyük Zafer Meydanı", desc: "Bölge finali öncesi son sınav! Portallar, hız bantları ve elit muhafız ordusu.", themeColor: "#d97706", isBossLevel: false },
    { id: 89, world: "BÖLGE 9: BOSS 19", shortName: "Demir الدوق ☠", name: "Bölüm 90: İmparatorluk Demir Titanı (Boss 19)", desc: "9. Bölge Boss Savaşı (46 Can): Büyük sur arenasında Demir Titan'ı dize getir!", themeColor: "#ff2a85", isBossLevel: true },

    // =========================================================================
    // BÖLGE 10 (BÖLÜM 91-100): GALAKTİK OMEGA ÇEKİRDEĞİ (BÜYÜK 100. BÖLÜM FİNALİ)
    // =========================================================================
    { id: 90, world: "BÖLGE 10: OMEGA GALAKSİ", shortName: "Yıldız Üssü", name: "Bölüm 91: Yörünge Yıldız Üssü", desc: "Son Sezon (91-100)! 🌌 Düşük yerçekimi, 🚀 trambolinler ve ⚡ lazer kapıları bir arada!", themeColor: "#c77dff", isBossLevel: false },
    { id: 91, world: "BÖLGE 10: OMEGA GALAKSİ", shortName: "Süpernova", name: "Bölüm 92: Süpernova Hız Tüneli", desc: "⏩ Turbo hız konveyörleri ve 🧊 kriyo-buz platformlarla süpernova ateşinden kaç!", themeColor: "#7209b7", isBossLevel: false },
    { id: 92, world: "BÖLGE 10: OMEGA GALAKSİ", shortName: "Pulsar Akımı", name: "Bölüm 93: Pulsar Rüzgar Akımları", desc: "💨 Kozmik plazma akımlarıyla uzay boşluğundaki dev testerelerin üzerinden süzül!", themeColor: "#c77dff", isBossLevel: false },
    { id: 93, world: "BÖLGE 10: OMEGA GALAKSİ", shortName: "Kuantum Ağı", name: "Bölüm 94: Kuantum Lazer Izgarası", desc: "Peş peşe açılıp kapanan ⚡ yüksek voltajlı lazer kapıları ve ışınlanma portalları!", themeColor: "#7209b7", isBossLevel: false },
    { id: 94, world: "BÖLGE 10: BOSS 20", shortName: "Omega Muhafız ☠", name: "Bölüm 95: Galaktik Omega Muhafızı (Boss 20)", desc: "Boss Savaşı (48 Can): Sıfır yerçekimli ve lazer kapılı uzay arenasında Omega Muhafız!", themeColor: "#ff2a85", isBossLevel: true },
    { id: 95, world: "BÖLGE 10: OMEGA GALAKSİ", shortName: "Karadelik Yolu", name: "Bölüm 96: Karadelik Ufuk Çizgisi", desc: "Çöken kuantum köprüleri, 💨 dikey hava akımları ve yoğun sarkıt yağmuru!", themeColor: "#c77dff", isBossLevel: false },
    { id: 96, world: "BÖLGE 10: OMEGA GALAKSİ", shortName: "Kozmik Kule", name: "Bölüm 97: Sonsuzluk Kulesi Tırmanışı", desc: "Trambolinler, duvar zıplama bacaları ve hareketli testerelerle dolu uzay kulesi!", themeColor: "#7209b7", isBossLevel: false },
    { id: 97, world: "BÖLGE 10: OMEGA GALAKSİ", shortName: "İmparatorluk Yolu", name: "Bölüm 98: Kozmik İmparatorluk Yolu", desc: "Buz, Hız bandı, Lazer kapısı, Rüzgar akımı ve Trambolin mekaniklerinin hepsi tek bölümde!", themeColor: "#ffd166", isBossLevel: false },
    { id: 98, world: "BÖLGE 10: OMEGA GALAKSİ", shortName: "Son Sığınak", name: "Bölüm 99: 100. Bölüm Öncesi Son Sınav", desc: "100. Bölüm Büyük Finalinden önceki son geçit! Tüm güçlendirmeleri al ve kapıya ulaş.", themeColor: "#ffd166", isBossLevel: false },
    { id: 99, world: "FİNAL: BÖLÜM 100", shortName: "Evren Hükümdarı 👑", name: "Bölüm 100: Evren Hükümdarı Kozmik İmparator (100. Bölüm Büyük Final)", desc: "100. BÖLÜM BÜYÜK FİNAL (55 Can): Tüm galaksinin hakimi Evren Hükümdarı'nı yen ve Marinext 2100 Efsanesi ol!", themeColor: "#ff2a85", isBossLevel: true }
];

LEVEL_INFO.push(...EXTRA_30_LEVELS);

function normalizeLevelCollectibles(
    coins,
    mysteryBlocks,
    solids,
    crumblePlatforms,
    portal,
    isBossLevel,
    hazards = [],
    teleporters = [],
    checkpoints = [],
    saws = []
) {
    const lengthRatio = Math.max(1, (portal ? portal.x : 3200) / (68 * TILE_SIZE));
    const targetEmeralds = isBossLevel ? 6 : Math.min(26, Math.round(12 + (lengthRatio - 1) * 7));
    const targetCrystals = isBossLevel ? 10 : Math.min(68, Math.round(25 + (lengthRatio - 1) * 20));
    const targetGoldCoins = isBossLevel ? 10 : Math.min(42, Math.round(16 + (lengthRatio - 1) * 12));

    // Convert any coin-dispensing mystery blocks to power-ups so crystal count is strictly controlled
    const powerCycle = ['shield', 'fire', 'speed'];
    mysteryBlocks.forEach((mb, idx) => {
        if (mb.content === 'coins') {
            mb.content = powerCycle[idx % powerCycle.length];
        }
    });

    // Only use true walkable surfaces (exclude walls, troll trap floors, and bottom floors under lava pits!)
    const walkableSurfaces = [
        ...solids.filter((s) => s.type !== 'wall' && !s.isTrollTrapFloor && s.y <= 12.5 * TILE_SIZE && s.w >= 64),
        ...crumblePlatforms.filter((c) => c.y <= 12.5 * TILE_SIZE && c.w >= 64)
    ].sort((a, b) => a.x - b.x || a.y - b.y);

    const minX = 220;
    const maxX = Math.max(700, (portal ? portal.x : 2200) - 85);

    // Helper: check if a candidate collectible point (px, py) collides with ANY wall, solid, mystery box, portal, teleporter, saw, or lava
    const isPointSafeAndClear = (px, py) => {
        if (px < minX || px > maxX) return false;
        if (py < 70 || py > 12.2 * TILE_SIZE) return false;

        // Avoid player spawn zone & exit portal
        if (portal && Math.abs(px - (portal.x + 28)) < 68 && Math.abs(py - (portal.y + 42)) < 95) {
            return false;
        }

        // Avoid all solids (especially vertical 'wall' barriers, platforms, ceilings, and ground blocks)
        for (const s of solids) {
            if (px >= s.x - 24 && px <= s.x + s.w + 24 && py >= s.y - 22 && py <= s.y + s.h + 22) {
                return false;
            }
        }

        // Avoid [?] Mystery Blocks (leave generous room around & below them so jumping hits the block cleanly)
        for (const mb of mysteryBlocks) {
            const mbCx = mb.x + TILE_SIZE / 2;
            const mbCy = mb.y + TILE_SIZE / 2;
            if (Math.abs(px - mbCx) < 44 && Math.abs(py - mbCy) < 56) {
                return false;
            }
        }

        // Avoid Wormhole Teleporters
        for (const tp of teleporters) {
            if (Math.hypot(px - (tp.x1 + 22), py - (tp.y1 + 28)) < 50) return false;
            if (Math.hypot(px - (tp.x2 + 22), py - (tp.y2 + 28)) < 50) return false;
        }

        // Avoid Checkpoints
        for (const cp of checkpoints) {
            if (Math.abs(px - (cp.x + 18)) < 36 && Math.abs(py - (cp.y + 32)) < 52) return false;
        }

        // Avoid Lava hazards
        for (const hz of hazards) {
            if (px >= hz.x - 16 && px <= hz.x + hz.w + 16 && py >= hz.y - 36) {
                return false;
            }
        }

        // Avoid stationary or ground-sweeping Saws
        for (const sw of saws) {
            const minSx = Math.min(sw.startX, sw.endX) - (sw.r + 12);
            const maxSx = Math.max(sw.startX, sw.endX) + (sw.r + 12);
            const minSy = Math.min(sw.startY, sw.endY) - (sw.r + 12);
            const maxSy = Math.max(sw.startY, sw.endY) + (sw.r + 12);
            if (px >= minSx && px <= maxSx && py >= minSy && py <= maxSy) {
                return false;
            }
        }

        return true;
    };

    // Build a dense, ordered list of clean walkable candidate positions along all walkable platforms & ground
    const candidateSlots = [];
    for (const s of walkableSurfaces) {
        const startX = Math.max(minX, s.x + 28);
        const endX = Math.min(maxX, s.x + s.w - 28);
        for (let x = startX; x <= endX; x += 32) {
            // Check if a wall or higher platform sits directly on top of this surface at x
            const blockedDirectlyAbove = solids.some(
                (other) =>
                    other !== s &&
                    x >= other.x - 20 &&
                    x <= other.x + other.w + 20 &&
                    other.y < s.y &&
                    other.y + other.h >= s.y - 78
            );
            if (blockedDirectlyAbove) continue;

            const lowY = Math.round(s.y - 34);
            const highY = Math.round(s.y - 68);
            const lowSafe = isPointSafeAndClear(x, lowY);
            const highSafe = isPointSafeAndClear(x, highY);
            if (lowSafe || highSafe) {
                candidateSlots.push({
                    x: Math.round(x),
                    lowY: lowSafe ? lowY : highY,
                    highY: highSafe ? highY : lowY,
                    surfaceY: s.y
                });
            }
        }
    }

    // Deduplicate candidate slots that are at almost the same X (prefer higher platform so items guide the player along platforms)
    candidateSlots.sort((a, b) => a.x - b.x || a.surfaceY - b.surfaceY);
    const uniqueSlots = [];
    for (const slot of candidateSlots) {
        const existing = uniqueSlots.find((u) => Math.abs(u.x - slot.x) < 26);
        if (!existing) {
            uniqueSlots.push(slot);
        }
    }

    const trollFakeEmeralds = coins.filter((c) => c.type === 'emerald' && c.isTrollTeleport);
    const placedItems = [...trollFakeEmeralds];

    const isTooCloseToPlaced = (px, py, minDist) => {
        return placedItems.some((item) => Math.hypot(item.x - px, item.y - py) < minDist);
    };

    const pickDistributedSlots = (count, itemType, minDistFromOthers, useArcPattern = false) => {
        const result = [];
        if (uniqueSlots.length === 0) return result;

        for (let i = 0; i < count; i++) {
            const idealIdx = Math.min(
                uniqueSlots.length - 1,
                Math.floor(((i + 0.5) / count) * uniqueSlots.length)
            );

            let chosen = null;
            for (let offset = 0; offset < uniqueSlots.length; offset++) {
                const tryIndices = [idealIdx + offset, idealIdx - offset];
                for (const idx of tryIndices) {
                    if (idx < 0 || idx >= uniqueSlots.length) continue;
                    const slot = uniqueSlots[idx];
                    const py = useArcPattern && (i % 3 === 1) ? slot.highY : slot.lowY;
                    if (!isTooCloseToPlaced(slot.x, py, minDistFromOthers)) {
                        chosen = { x: slot.x, y: py, type: itemType, isTrollTeleport: false };
                        break;
                    }
                }
                if (chosen) break;
            }

            // Fallback if level is very compact (e.g. Boss arena): relax minimum distance slightly
            if (!chosen) {
                for (let offset = 0; offset < uniqueSlots.length; offset++) {
                    const idx = (idealIdx + offset) % uniqueSlots.length;
                    const slot = uniqueSlots[idx];
                    const py = (i % 2 === 1) ? slot.highY : slot.lowY;
                    if (!isTooCloseToPlaced(slot.x, py, 20)) {
                        chosen = { x: slot.x, y: py, type: itemType, isTrollTeleport: false };
                        break;
                    }
                }
            }

            if (chosen) {
                result.push(chosen);
                placedItems.push(chosen);
            }
        }
        return result;
    };

    // 1. Place Ancient Emeralds (❖) cleanly on safe walkable surfaces
    const realEmeralds = pickDistributedSlots(targetEmeralds, 'emerald', 48, false);

    // 2. Place Gold Coins (🪙) cleanly along platforms & jump arcs without overlapping Emeralds
    const goldCoins = pickDistributedSlots(targetGoldCoins, 'gold_coin', 34, true);

    // 3. Place Blue Crystals (◆) cleanly in neat rows/arcs along the remaining safe slots
    const crystals = pickDistributedSlots(targetCrystals, 'coin', 26, true);

    coins.length = 0;
    coins.push(...realEmeralds, ...trollFakeEmeralds, ...crystals, ...goldCoins);
}

function createLevelData(levelIndex) {
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
    const jumpPads = [];
    const windZones = [];
    const laserGates = [];
    const signs = [];
    let portal = { x: 3200, y: 400 };
    let bossConfig = null;

    const addGround = (gx, gy, gw, gh = 4, type = 'ground', surfaceType = 'normal') => {
        solids.push({
            x: gx * TILE_SIZE,
            y: gy * TILE_SIZE,
            w: gw * TILE_SIZE,
            h: gh * TILE_SIZE,
            type,
            surfaceType
        });
    };

    const addMovingPlatform = (startGx, startGy, endGx, endGy, gw = 3.2, speed = 1.2) => {
        movingPlatforms.push({
            x: startGx * TILE_SIZE,
            y: startGy * TILE_SIZE,
            startX: startGx * TILE_SIZE,
            startY: startGy * TILE_SIZE,
            endX: endGx * TILE_SIZE,
            endY: endGy * TILE_SIZE,
            w: gw * TILE_SIZE,
            h: 22,
            speed
        });
    };

    const addJumpPad = (gx, gy, boostVy = -25.8) => {
        jumpPads.push({
            x: gx * TILE_SIZE,
            y: gy * TILE_SIZE - 22,
            w: 58,
            h: 22,
            boostVy: Math.min(boostVy, -24.8),
            anim: 0
        });
    };

    const addWindZone = (gx, gy, gw, gh, forceX = 0.22, forceY = -0.74, fanSide = null) => {
        const resolvedFanSide = fanSide || (Math.abs(forceX) >= 0.28 && Math.abs(forceY) < 0.25 ? (forceX > 0 ? 'left' : 'right') : 'bottom');
        windZones.push({
            x: gx * TILE_SIZE,
            y: gy * TILE_SIZE,
            w: gw * TILE_SIZE,
            h: gh * TILE_SIZE,
            forceX,
            forceY,
            fanSide: resolvedFanSide
        });
    };

    const addLaserGate = (gx, gy, gh = 3.5, period = 150, onDuration = 75, phase = 0) => {
        laserGates.push({
            x: gx * TILE_SIZE + 14,
            y: gy * TILE_SIZE,
            w: 18,
            h: gh * TILE_SIZE,
            period,
            onDuration,
            phase
        });
    };

    const addCrumble = (gx, gy, gw = 2.5) => {
        crumblePlatforms.push({
            x: gx * TILE_SIZE,
            y: gy * TILE_SIZE,
            w: gw * TILE_SIZE,
            h: 22
        });
    };

    const addSaw = (gx, gy, endGx = null, endGy = null, speed = 1.4, r = 24) => {
        const sx = gx * TILE_SIZE;
        const sy = gy * TILE_SIZE;
        saws.push({
            x: sx,
            y: sy,
            r,
            startX: sx,
            endX: endGx !== null ? endGx * TILE_SIZE : sx,
            startY: sy,
            endY: endGy !== null ? endGy * TILE_SIZE : sy,
            speed
        });
    };

    const addCoinArc = (startX, y, count, spacing = 44, arcHeight = 35) => {
        for (let i = 0; i < count; i++) {
            const t = count > 1 ? i / (count - 1) : 0.5;
            const offsetY = Math.sin(t * Math.PI) * arcHeight;
            coins.push({
                x: startX + i * spacing,
                y: y - offsetY,
                type: 'coin'
            });
        }
    };

    switch (levelIndex) {
        case 0: {
            // BÖLÜM 1 (KOLAY): Geniş platformlar, lav yok, sadece 2 yavaş Slime, kolay öğrenme
            addGround(0, 12, 22, 5);
            signs.push({ x: 200, y: 12 * TILE_SIZE - 55, text: "Bölüm 1 (Kolay): A/D Koş | W/Boşluk Hızlı Zıpla" });
            signs.push({ x: 560, y: 12 * TILE_SIZE - 55, text: "[?] Bloklarına Alttan Vur -> Ateş Topu & Kalkan!" });

            mysteryBlocks.push({ x: 9 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            mysteryBlocks.push({ x: 10 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'coins' });
            mysteryBlocks.push({ x: 11 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
            addCoinArc(280, 10.5 * TILE_SIZE, 5);
            enemies.push({ x: 700, y: 11 * TILE_SIZE, type: 'slime', minX: 540, maxX: 880 });

            addGround(23, 11, 16, 6);
            addCoinArc(25 * TILE_SIZE, 9.5 * TILE_SIZE, 6);
            enemies.push({ x: 29 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'slime', minX: 25 * TILE_SIZE, maxX: 34 * TILE_SIZE });

            addGround(28, 8, 5, 1, 'platform');
            addJumpPad(26.2, 11, -25.8);
            mysteryBlocks.push({ x: 30 * TILE_SIZE, y: 5 * TILE_SIZE, content: 'speed' });
            coins.push({ x: 30 * TILE_SIZE + 24, y: 7.1 * TILE_SIZE, type: 'emerald' });

            // Checkpoint 1 + Easy Wall Jump
            addGround(40, 12, 26, 5);
            checkpoints.push({ x: 41.5 * TILE_SIZE, y: 12 * TILE_SIZE - 64 });
            signs.push({ x: 44.5 * TILE_SIZE, y: 12 * TILE_SIZE - 55, text: "Duvara Zıpla -> Duvardan Sek! (Wall Jump)" });

            addGround(47, 5, 2, 7, 'wall');
            addGround(52, 4, 2, 6, 'wall');
            for (let i = 0; i < 4; i++) {
                coins.push({ x: 50.5 * TILE_SIZE, y: (9 - i * 1.2) * TILE_SIZE, type: 'coin' });
            }
            coins.push({ x: 45 * TILE_SIZE, y: 11.1 * TILE_SIZE, type: 'emerald' });

            coins.push({ x: 60 * TILE_SIZE, y: 11.1 * TILE_SIZE, type: 'emerald' });

            // Act 3 (Progressive Easy Extension): Second Checkpoint + Sky Steps + Bonus Balcony
            checkpoints.push({ x: 62.5 * TILE_SIZE, y: 12 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 64.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            addGround(67, 10.2, 4.5, 0.8, 'platform');
            addGround(73, 8.6, 5.0, 0.8, 'platform');
            addCoinArc(67.5 * TILE_SIZE, 8.8 * TILE_SIZE, 6);
            coins.push({ x: 75.5 * TILE_SIZE, y: 7.6 * TILE_SIZE, type: 'emerald' });

            addGround(78, 12, 11, 5);
            enemies.push({ x: 81 * TILE_SIZE, y: 11 * TILE_SIZE, type: 'slime', minX: 78.5 * TILE_SIZE, maxX: 84 * TILE_SIZE });
            portal = { x: 86 * TILE_SIZE, y: 12 * TILE_SIZE - 86 };
            break;
        }

        case 1: {
            // BÖLÜM 2 (NORMAL): İlk lav çukuru, çöken köprüler, düşen sarkıtlar ve Neon Akrep (crawler)
            addGround(0, 12, 15, 5);
            signs.push({ x: 250, y: 12 * TILE_SIZE - 55, text: "Bölüm 2: Çöken Köprüler, Sarkıtlar ve Hızlı Akrepler!" });
            mysteryBlocks.push({ x: 8 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
            mysteryBlocks.push({ x: 10 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });

            addGround(12, 1, 24, 1.5, 'wall');
            stalactites.push({ x: 14 * TILE_SIZE, y: 2.5 * TILE_SIZE });
            stalactites.push({ x: 22 * TILE_SIZE, y: 2.5 * TILE_SIZE });
            stalactites.push({ x: 31 * TILE_SIZE, y: 2.5 * TILE_SIZE });

            hazards.push({ x: 15 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 13 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(15, 14, 13, 3);
            addCrumble(16.5, 11, 2.8);
            addCrumble(20.5, 9.8, 2.8);
            addCrumble(24.5, 11, 2.8);
            addCoinArc(17 * TILE_SIZE, 9.2 * TILE_SIZE, 6, 50);

            addGround(28, 11, 15, 6);
            checkpoints.push({ x: 29.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
            enemies.push({ x: 34 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'slime', minX: 31 * TILE_SIZE, maxX: 38 * TILE_SIZE });
            enemies.push({ x: 39 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'crawler', minX: 35 * TILE_SIZE, maxX: 42 * TILE_SIZE });
            mysteryBlocks.push({ x: 36 * TILE_SIZE, y: 7.5 * TILE_SIZE, content: 'speed' });

            hazards.push({ x: 43 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 12 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(43, 14, 12, 3);
            addCrumble(44.5, 10.5, 2.5);
            addCrumble(49.5, 9.2, 2.5);
            coins.push({ x: 50.5 * TILE_SIZE, y: 8.3 * TILE_SIZE, type: 'emerald' });

            addGround(55, 10, 14, 7);
            checkpoints.push({ x: 56.5 * TILE_SIZE, y: 10 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 59 * TILE_SIZE, y: 6.5 * TILE_SIZE, content: 'shield' });
            enemies.push({ x: 61 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'crawler', minX: 57 * TILE_SIZE, maxX: 65 * TILE_SIZE });
            enemies.push({ x: 65 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 61 * TILE_SIZE, maxX: 68 * TILE_SIZE });

            // Act 3: Moving Lift Canyon + Upper Emerald Balcony
            hazards.push({ x: 69 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 14 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(69, 14, 14, 3);
            addMovingPlatform(70.5, 9.5, 76.5, 7.5, 3.4, 1.25);
            addGround(78, 7.2, 4.5, 0.8, 'platform');
            coins.push({ x: 80.2 * TILE_SIZE, y: 6.2 * TILE_SIZE, type: 'emerald' });

            addGround(83, 10, 13, 7);
            enemies.push({ x: 87 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'crawler', minX: 84 * TILE_SIZE, maxX: 91 * TILE_SIZE });
            portal = { x: 93 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };
            break;
        }

        case 2: {
            // BÖLÜM 3 (BOSS 1 - KRİSTAL DEV): 10 Can + Kristal Sarkıt Yağmuru
            addGround(0, 12, 46, 5);
            addGround(0, 0, 2, 12, 'wall');
            addGround(44, 0, 2, 12, 'wall');

            signs.push({ x: 240, y: 12 * TILE_SIZE - 55, text: "BOSS 1: Kristal Dev! Tavan Kristallerinden Kaç ve Kafasına Zıpla!" });
            mysteryBlocks.push({ x: 7 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
            mysteryBlocks.push({ x: 9 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            checkpoints.push({ x: 12 * TILE_SIZE, y: 12 * TILE_SIZE - 64 });

            addJumpPad(15.5, 12, -24.8);
            addGround(17, 9, 4.5, 0.7, 'platform');
            addGround(25.5, 6.8, 5.5, 0.7, 'platform');
            addGround(34.5, 9, 4.5, 0.7, 'platform');
            addJumpPad(40.5, 12, -24.8);
            coins.push({ x: 19 * TILE_SIZE, y: 8.1 * TILE_SIZE, type: 'emerald' });

            bossConfig = {
                name: "KRİSTAL DEV (BOSS 1)",
                hp: 10,
                x: 32 * TILE_SIZE,
                y: 12 * TILE_SIZE - 110,
                minX: 15 * TILE_SIZE,
                maxX: 42 * TILE_SIZE,
                variant: 1,
                bossType: 1
            };
            portal = { x: 28 * TILE_SIZE, y: 12 * TILE_SIZE - 86, lockedUntilBossDead: true };
            break;
        }

        case 3: {
            // BÖLÜM 4 (ORTA): Dönen Testereler + Zırhlı Golemler + Hızlı Akrepler
            addGround(0, 12, 16, 5);
            signs.push({ x: 240, y: 12 * TILE_SIZE - 55, text: "Bölüm 4 (Orta): Dönen Testereler ve Zırhlı Golemler!" });
            mysteryBlocks.push({ x: 7 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            mysteryBlocks.push({ x: 9 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'speed' });

            addSaw(11, 11.8, 15, 11.8, 1.4, 24);

            hazards.push({ x: 16 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 16 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(16, 14, 16, 3);
            addGround(18, 10, 4, 0.8, 'platform');
            addSaw(18.5, 9.8, 21.5, 9.8, 1.3, 20);
            addGround(25, 8.5, 4, 0.8, 'platform');
            addCoinArc(18.5 * TILE_SIZE, 7.8 * TILE_SIZE, 6, 48);

            addGround(32, 11, 14, 6);
            checkpoints.push({ x: 33.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
            enemies.push({ x: 37 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 35 * TILE_SIZE, maxX: 42 * TILE_SIZE });
            enemies.push({ x: 41 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'crawler', minX: 36 * TILE_SIZE, maxX: 45 * TILE_SIZE });
            mysteryBlocks.push({ x: 39 * TILE_SIZE, y: 7.5 * TILE_SIZE, content: 'shield' });

            addGround(48, 3, 2, 9, 'wall');
            addGround(53, 2, 2, 10, 'wall');
            addSaw(51.5, 9.5, 51.5, 4.5, 1.3, 20);
            for (let i = 0; i < 5; i++) {
                coins.push({ x: 51.5 * TILE_SIZE, y: (10 - i * 1.3) * TILE_SIZE, type: 'coin' });
            }
            coins.push({ x: 46.8 * TILE_SIZE, y: 11.1 * TILE_SIZE, type: 'emerald' });

            addGround(46, 12, 26, 5);
            addSaw(56, 11.8, 62, 11.8, 1.5, 26);
            enemies.push({ x: 64 * TILE_SIZE, y: 11 * TILE_SIZE, type: 'golem', minX: 62 * TILE_SIZE, maxX: 69 * TILE_SIZE });
            checkpoints.push({ x: 70 * TILE_SIZE, y: 12 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 71 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });

            // Act 3: Jump Pad Sky Islands + Saw Gauntlet
            addJumpPad(70.8, 12, -25.2);
            hazards.push({ x: 72 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 16 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(72, 14, 16, 3);
            addGround(74, 7.5, 5.0, 0.8, 'platform');
            addMovingPlatform(80, 7.5, 85, 6.2, 3.2, 1.3);
            coins.push({ x: 76.5 * TILE_SIZE, y: 6.5 * TILE_SIZE, type: 'emerald' });

            addGround(88, 11, 14, 6);
            enemies.push({ x: 92 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 89 * TILE_SIZE, maxX: 97 * TILE_SIZE });
            enemies.push({ x: 95 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'crawler', minX: 90 * TILE_SIZE, maxX: 98 * TILE_SIZE });
            portal = { x: 99 * TILE_SIZE, y: 11 * TILE_SIZE - 86 };
            break;
        }

        case 4: {
            // BÖLÜM 5 (ORTA-ZOR): Solucan Deliği + Ateş Eden Karanlık Nöbetçiler (Sentinel)
            addGround(0, 12, 16, 5);
            signs.push({ x: 260, y: 12 * TILE_SIZE - 55, text: "Bölüm 5: 🌀 Solucan Deliğine Gir ve Nöbetçileri Atlat!" });
            mysteryBlocks.push({ x: 7 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            mysteryBlocks.push({ x: 9 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });

            // Barrier wall + Wormhole #1 (Teleports player cleanly past the barrier onto the mid-screen platform)
            addGround(15, 4, 2, 8, 'wall');
            teleporters.push({
                x1: 13 * TILE_SIZE, y1: 12 * TILE_SIZE - 56,
                x2: 18.5 * TILE_SIZE, y2: 8.5 * TILE_SIZE - 56,
                color: "#00f2fe"
            });

            // Continuous lower lava + ground so the screen is never empty below!
            hazards.push({ x: 16 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 17 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(16, 14, 17, 3);

            // Mid-screen main platform after Wormhole #1 (comfortable height y = 8.5)
            addGround(17, 8.5, 16, 1.2, 'platform');
            addCoinArc(20.5 * TILE_SIZE, 7.2 * TILE_SIZE, 6);
            enemies.push({ x: 24 * TILE_SIZE, y: 7.5 * TILE_SIZE, type: 'sentinel', minX: 20 * TILE_SIZE, maxX: 28 * TILE_SIZE });
            enemies.push({ x: 29 * TILE_SIZE, y: 7.5 * TILE_SIZE, type: 'crawler', minX: 22 * TILE_SIZE, maxX: 32 * TILE_SIZE });
            coins.push({ x: 31 * TILE_SIZE, y: 7.6 * TILE_SIZE, type: 'emerald' });

            // Mid-level checkpoint bastion
            addGround(33, 11, 16, 6);
            checkpoints.push({ x: 34.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 37.5 * TILE_SIZE, y: 7.5 * TILE_SIZE, content: 'speed' });
            addSaw(39, 10.8, 44.5, 10.8, 1.4, 22);
            enemies.push({ x: 43 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'sentinel', minX: 39 * TILE_SIZE, maxX: 46.5 * TILE_SIZE });

            // Barrier wall + Wormhole #2 over lava canyon
            addGround(48, 4, 1.5, 7, 'wall');
            hazards.push({ x: 49 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 14 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(49, 14, 14, 3);
            teleporters.push({
                x1: 46.5 * TILE_SIZE, y1: 11 * TILE_SIZE - 56,
                x2: 51.5 * TILE_SIZE, y2: 8.5 * TILE_SIZE - 56,
                color: "#b537f2"
            });
            addGround(50.5, 8.5, 6.5, 1.0, 'platform');
            addCrumble(58.5, 9.2, 3.2);
            coins.push({ x: 55 * TILE_SIZE, y: 7.6 * TILE_SIZE, type: 'emerald' });
            coins.push({ x: 60 * TILE_SIZE, y: 8.3 * TILE_SIZE, type: 'emerald' });

            // Checkpoint 2 + Act 3: Wind Turbine & Laser Bastion
            addGround(63, 10, 14, 7);
            checkpoints.push({ x: 64.5 * TILE_SIZE, y: 10 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 67 * TILE_SIZE, y: 6.5 * TILE_SIZE, content: 'shield' });
            enemies.push({ x: 70 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 65 * TILE_SIZE, maxX: 75 * TILE_SIZE });

            hazards.push({ x: 77 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 16 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(77, 14, 16, 3);
            addWindZone(78.5, 3, 5.5, 10.5, 0.24, -0.74, 'bottom');
            addGround(84.5, 6.5, 6.5, 0.9, 'platform');
            enemies.push({ x: 87.5 * TILE_SIZE, y: 5.5 * TILE_SIZE, type: 'sentinel', minX: 85 * TILE_SIZE, maxX: 90.5 * TILE_SIZE });

            addGround(93, 10, 15, 7);
            enemies.push({ x: 98 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'sentinel', minX: 94 * TILE_SIZE, maxX: 103 * TILE_SIZE });
            portal = { x: 105 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };
            break;
        }

        case 5: {
            // BÖLÜM 6 (BOSS 2 - ZİNDAN CELLADI): 15 Can + Gölge Işınlanması & Çapraz Tırpan
            addGround(0, 12, 48, 5);
            addGround(0, 0, 2, 12, 'wall');
            addGround(46, 0, 2, 12, 'wall');

            signs.push({ x: 240, y: 12 * TILE_SIZE - 55, text: "BOSS 2: Zindan Celladı! Gölge Adımı ve Tırpan Dalgasına Dikkat!" });
            mysteryBlocks.push({ x: 6 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
            mysteryBlocks.push({ x: 8 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            mysteryBlocks.push({ x: 10 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'speed' });
            checkpoints.push({ x: 12 * TILE_SIZE, y: 12 * TILE_SIZE - 64 });

            addJumpPad(15.5, 12, -24.8);
            addGround(17.5, 8.8, 4.2, 0.7, 'platform');
            addGround(26.5, 6.5, 5.2, 0.7, 'platform');
            addGround(36, 8.8, 4.2, 0.7, 'platform');
            addJumpPad(42.5, 12, -24.8);
            addSaw(25, 11.8, 33, 11.8, 1.5, 22);

            teleporters.push({
                x1: 14.5 * TILE_SIZE, y1: 12 * TILE_SIZE - 56,
                x2: 28.5 * TILE_SIZE, y2: 6.5 * TILE_SIZE - 56,
                color: "#00f2fe"
            });

            bossConfig = {
                name: "ZİNDAN CELLADI (BOSS 2)",
                hp: 15,
                x: 35 * TILE_SIZE,
                y: 12 * TILE_SIZE - 110,
                minX: 15 * TILE_SIZE,
                maxX: 44 * TILE_SIZE,
                variant: 2,
                bossType: 2
            };
            portal = { x: 29 * TILE_SIZE, y: 12 * TILE_SIZE - 86, lockedUntilBossDead: true };
            break;
        }

        case 6: {
            // BÖLÜM 7 (ZOR): Sıfır Yerçekimi + Çoklu Hızlı Testereler + Elit Golem & Nöbetçiler
            addGround(0, 12, 14, 5);
            signs.push({ x: 240, y: 12 * TILE_SIZE - 55, text: "Bölüm 7 (Zor): Düşük Yerçekimi ve Çoklu Testereler!" });
            mysteryBlocks.push({ x: 7 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            mysteryBlocks.push({ x: 9 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });

            gravityZones.push({ x: 13 * TILE_SIZE, y: 1 * TILE_SIZE, w: 20 * TILE_SIZE, h: 12 * TILE_SIZE });
            hazards.push({ x: 14 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 18 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(14, 14, 18, 3);

            addGround(18, 9.5, 2.6, 0.8, 'platform');
            addSaw(22, 4, 22, 10.5, 1.5, 24);
            addGround(25.5, 6.5, 2.6, 0.8, 'platform');
            addSaw(29.5, 3.5, 29.5, 10, 1.6, 24);
            addCoinArc(16 * TILE_SIZE, 6 * TILE_SIZE, 8, 52, 60);
            coins.push({ x: 19.3 * TILE_SIZE, y: 8.6 * TILE_SIZE, type: 'emerald' });

            addGround(32, 11, 14, 6);
            checkpoints.push({ x: 33.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
            enemies.push({ x: 37 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 35 * TILE_SIZE, maxX: 43 * TILE_SIZE });
            enemies.push({ x: 41 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'sentinel', minX: 36 * TILE_SIZE, maxX: 45 * TILE_SIZE });
            mysteryBlocks.push({ x: 38 * TILE_SIZE, y: 7.5 * TILE_SIZE, content: 'speed' });

            gravityZones.push({ x: 46 * TILE_SIZE, y: 1 * TILE_SIZE, w: 22 * TILE_SIZE, h: 12 * TILE_SIZE });
            hazards.push({ x: 46 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 22 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(46, 14, 22, 3);

            addCrumble(49.5, 9.5, 2.2);
            addSaw(54, 4.5, 54, 11, 1.6, 26);
            addCrumble(58, 7.5, 2.2);
            addSaw(62.5, 3.5, 62.5, 10.5, 1.7, 26);
            coins.push({ x: 59 * TILE_SIZE, y: 6.6 * TILE_SIZE, type: 'emerald' });

            // Checkpoint 2 + Act 3: High-Altitude Elevator & Dual Balcony
            addGround(68, 10, 13, 7);
            checkpoints.push({ x: 69.5 * TILE_SIZE, y: 10 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 72 * TILE_SIZE, y: 6.5 * TILE_SIZE, content: 'fire' });
            enemies.push({ x: 75 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 70 * TILE_SIZE, maxX: 79 * TILE_SIZE });

            hazards.push({ x: 81 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 18 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(81, 14, 18, 3);
            addMovingPlatform(82.5, 9.5, 88.5, 6.2, 3.5, 1.35);
            addGround(90.5, 6.0, 6.5, 0.9, 'platform');
            enemies.push({ x: 93.5 * TILE_SIZE, y: 5.0 * TILE_SIZE, type: 'sentinel', minX: 91 * TILE_SIZE, maxX: 96.5 * TILE_SIZE });

            addGround(99, 10, 15, 7);
            enemies.push({ x: 104 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 100 * TILE_SIZE, maxX: 109 * TILE_SIZE });
            enemies.push({ x: 107 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'crawler', minX: 101 * TILE_SIZE, maxX: 110 * TILE_SIZE });
            portal = { x: 111 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };
            break;
        }

        case 7: {
            // BÖLÜM 8 (ÇOK ZOR): Hızla Çöken Köprüler + Yoğun Sarkıt Yağmuru + Testereler
            addGround(0, 12, 12, 5);
            signs.push({ x: 240, y: 12 * TILE_SIZE - 55, text: "Bölüm 8 (Çok Zor): Köprüler Çok Hızlı Çöker, Hiç Durma!" });
            mysteryBlocks.push({ x: 6 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'speed' });
            mysteryBlocks.push({ x: 8 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });

            hazards.push({ x: 12 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 26 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(12, 14, 26, 3);
            addGround(13, 1, 24, 1.2, 'wall');

            for (let i = 0; i < 6; i++) {
                addCrumble(13.2 + i * 4.2, 10.5 - (i % 2) * 1.4, 2.0);
                stalactites.push({ x: (14.2 + i * 4.2) * TILE_SIZE, y: 2.2 * TILE_SIZE });
                coins.push({ x: (14.2 + i * 4.2) * TILE_SIZE, y: (8.5 - (i % 2) * 1.4) * TILE_SIZE, type: 'coin' });
            }

            addGround(38, 11, 13, 6);
            checkpoints.push({ x: 39.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 42 * TILE_SIZE, y: 7.5 * TILE_SIZE, content: 'fire' });
            enemies.push({ x: 44 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'crawler', minX: 40 * TILE_SIZE, maxX: 49 * TILE_SIZE });
            enemies.push({ x: 47 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'sentinel', minX: 42 * TILE_SIZE, maxX: 50 * TILE_SIZE });

            teleporters.push({
                x1: 49.5 * TILE_SIZE, y1: 11 * TILE_SIZE - 56,
                x2: 54 * TILE_SIZE, y2: 9 * TILE_SIZE - 56,
                color: "#06d6a0"
            });

            gravityZones.push({ x: 52 * TILE_SIZE, y: 1 * TILE_SIZE, w: 20 * TILE_SIZE, h: 12 * TILE_SIZE });
            hazards.push({ x: 51 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 21 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(51, 14, 21, 3);
            addGround(52, 9, 4.5, 0.8, 'platform');
            addCrumble(58, 8, 2.4);
            addSaw(62, 3.5, 62, 10.5, 1.7, 26);
            addCrumble(65, 6.5, 2.4);
            addSaw(69, 3.5, 69, 10.5, 1.8, 26);
            coins.push({ x: 66 * TILE_SIZE, y: 5.6 * TILE_SIZE, type: 'emerald' });

            // Checkpoint 2 + Act 3: Laser & Jump Pad Fortress
            addGround(72, 10, 13, 7);
            checkpoints.push({ x: 73.5 * TILE_SIZE, y: 10 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 76 * TILE_SIZE, y: 6.5 * TILE_SIZE, content: 'shield' });
            enemies.push({ x: 79 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 74 * TILE_SIZE, maxX: 83 * TILE_SIZE });
            addJumpPad(83.5, 10, -25.2);

            hazards.push({ x: 85 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 19 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(85, 14, 19, 3);
            addGround(87, 6.2, 7.5, 0.9, 'platform');
            addLaserGate(91, 2.7, 3.5, 140, 62, 0);
            addCrumble(96, 7.5, 2.6);
            addCrumble(100, 8.8, 2.6);

            addGround(104, 10, 16, 7);
            enemies.push({ x: 109 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 105 * TILE_SIZE, maxX: 114 * TILE_SIZE });
            enemies.push({ x: 113 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'sentinel', minX: 107 * TILE_SIZE, maxX: 116 * TILE_SIZE });
            portal = { x: 117 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };
            break;
        }

        case 8: {
            // BÖLÜM 9 (UZMAN): Çift Testereli Kule + Elit Ordular
            addGround(0, 12, 20, 5);
            signs.push({ x: 240, y: 12 * TILE_SIZE - 55, text: "Bölüm 9 (Uzman): Karanlık Kule Tırmanışı!" });
            mysteryBlocks.push({ x: 6 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            mysteryBlocks.push({ x: 8 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
            mysteryBlocks.push({ x: 10 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'speed' });

            // Wall Jump + Dual Saws
            addGround(14, 3, 2, 9, 'wall');
            addGround(19, 2, 2, 10, 'wall');
            addSaw(17.5, 10.5, 17.5, 6.5, 1.5, 20);
            addSaw(17.5, 6.0, 17.5, 2.5, 1.5, 20);
            coins.push({ x: 23 * TILE_SIZE, y: 6.1 * TILE_SIZE, type: 'emerald' });

            hazards.push({ x: 20 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 16 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(20, 14, 16, 3);
            addGround(21, 7, 14, 1, 'platform');
            enemies.push({ x: 25 * TILE_SIZE, y: 6 * TILE_SIZE, type: 'golem', minX: 22 * TILE_SIZE, maxX: 32 * TILE_SIZE });
            enemies.push({ x: 30 * TILE_SIZE, y: 6 * TILE_SIZE, type: 'sentinel', minX: 24 * TILE_SIZE, maxX: 34 * TILE_SIZE });
            addSaw(26, 6.8, 33, 6.8, 1.6, 22);

            addGround(36, 11, 14, 6);
            checkpoints.push({ x: 37.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
            teleporters.push({
                x1: 45.5 * TILE_SIZE, y1: 11 * TILE_SIZE - 56,
                x2: 51 * TILE_SIZE, y2: 11 * TILE_SIZE - 56,
                color: "#ffd166"
            });
            addGround(48, 2, 2, 10, 'wall');

            addGround(50, 11, 28, 6);
            gravityZones.push({ x: 54 * TILE_SIZE, y: 2 * TILE_SIZE, w: 16 * TILE_SIZE, h: 9 * TILE_SIZE });
            addSaw(55, 10.8, 63, 10.8, 1.8, 26);
            addSaw(63, 10.8, 70, 10.8, 1.8, 26);
            addSaw(62, 5, 62, 9.5, 1.6, 24);
            enemies.push({ x: 71 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 68 * TILE_SIZE, maxX: 76 * TILE_SIZE });
            coins.push({ x: 53 * TILE_SIZE, y: 10.1 * TILE_SIZE, type: 'emerald' });

            // Checkpoint 2 + Act 3: Wind Updraft Canyon & Elite Citadel
            checkpoints.push({ x: 75.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
            mysteryBlocks.push({ x: 76.5 * TILE_SIZE, y: 7.5 * TILE_SIZE, content: 'fire' });
            hazards.push({ x: 78 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 22 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
            addGround(78, 14, 22, 3);
            addWindZone(79.5, 2.5, 5.5, 11.0, 0.25, -0.76, 'bottom');
            addGround(86, 5.8, 7.0, 0.9, 'platform');
            enemies.push({ x: 89 * TILE_SIZE, y: 4.8 * TILE_SIZE, type: 'sentinel', minX: 86.5 * TILE_SIZE, maxX: 92.5 * TILE_SIZE });
            addMovingPlatform(94, 6.5, 98.5, 8.8, 3.2, 1.4);

            addGround(100, 10, 18, 7);
            addLaserGate(104, 6.5, 3.5, 135, 65, 0);
            enemies.push({ x: 108 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 105 * TILE_SIZE, maxX: 114 * TILE_SIZE });
            enemies.push({ x: 112 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'sentinel', minX: 106 * TILE_SIZE, maxX: 115 * TILE_SIZE });
            portal = { x: 115 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };
            break;
        }

        case 9: {
            // BÖLÜM 10 (BOSS 3 - KARANLIK İMPARATOR): 18 Can + Hiçlik Sütunları & 3'lü Küre
            addGround(0, 12, 50, 5);
            addGround(0, 0, 2, 12, 'wall');
            addGround(48, 0, 2, 12, 'wall');

            signs.push({ x: 250, y: 12 * TILE_SIZE - 55, text: "BÖLÜM 10 BOSS SAVAŞI (18 CAN): KARANLIK İMPARATOR!" });
            mysteryBlocks.push({ x: 6 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
            mysteryBlocks.push({ x: 8 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
            mysteryBlocks.push({ x: 10 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'speed' });
            checkpoints.push({ x: 12.5 * TILE_SIZE, y: 12 * TILE_SIZE - 64 });

            gravityZones.push({ x: 24 * TILE_SIZE, y: 2 * TILE_SIZE, w: 12 * TILE_SIZE, h: 10 * TILE_SIZE });

            addJumpPad(15.8, 12, -24.8);
            addGround(17.5, 8.8, 4.5, 0.7, 'platform');
            addGround(27, 6.0, 5.5, 0.7, 'platform');
            addGround(37.5, 8.8, 4.5, 0.7, 'platform');
            addJumpPad(44.2, 12, -24.8);

            addSaw(20, 11.8, 26, 11.8, 1.5, 20);
            addSaw(33, 11.8, 39, 11.8, 1.5, 20);

            teleporters.push({
                x1: 14.5 * TILE_SIZE, y1: 12 * TILE_SIZE - 56,
                x2: 45.5 * TILE_SIZE, y2: 12 * TILE_SIZE - 56,
                color: "#ff2a85"
            });

            coins.push({ x: 19.5 * TILE_SIZE, y: 7.9 * TILE_SIZE, type: 'emerald' });

            bossConfig = {
                name: "KARANLIK İMPARATOR (BOSS 3)",
                hp: 18,
                x: 36 * TILE_SIZE,
                y: 12 * TILE_SIZE - 110,
                minX: 15 * TILE_SIZE,
                maxX: 45 * TILE_SIZE,
                variant: 3,
                bossType: 3,
                isWorldLord: true
            };
            portal = { x: 29.5 * TILE_SIZE, y: 12 * TILE_SIZE - 86, lockedUntilBossDead: true };
            break;
        }

        default: {
            const info = LEVEL_INFO[levelIndex] || LEVEL_INFO[0];
            const worldIdx = Math.floor(levelIndex / 10); // 0..9 (10 Worlds)
            const subIdx = levelIndex % 10;               // 0..9 within World

            if (info.isBossLevel) {
                // BOSS ARENAS (Levels 15, 20, 25, ..., 100) — Unique Boss Archetypes (4..12) & Progressive Arenas!
                const bossHp = levelIndex === 99 ? 55 : (18 + Math.floor((levelIndex - 10) * 0.38));
                const arenaStyle = Math.floor(levelIndex / 5) % 4;
                const mainSurface = (worldIdx === 4) ? 'ice' : ((worldIdx === 7 && arenaStyle === 2) ? 'boost' : 'normal');
                const bossType = Math.min(12, worldIdx + 3); // World 1->4 (Magma), World 2->5 (Mecha), ..., World 9->12 (Cosmic Emperor)
                const isWorldLord = (subIdx === 9);
                const arenaWidthTiles = 54 + Math.min(8, worldIdx);

                addGround(0, 12, arenaWidthTiles, 5, 'ground', mainSurface);
                addGround(0, 0, 2, 12, 'wall');
                addGround(arenaWidthTiles - 2, 0, 2, 12, 'wall');

                signs.push({ x: 250, y: 12 * TILE_SIZE - 55, text: `${info.name} (${bossHp} CAN) — Özel Yetenekli Boss Arenası!` });
                mysteryBlocks.push({ x: 6 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
                mysteryBlocks.push({ x: 8 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
                mysteryBlocks.push({ x: 10 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'speed' });
                checkpoints.push({ x: 12.5 * TILE_SIZE, y: 12 * TILE_SIZE - 64 });

                // Interactive Boss Arena Elements (Jump Pads, High Escape Balconies, Wind Updrafts, Low-Gravity, Saws, Teleporters)
                addJumpPad(16.2, 12, -25.2);
                addJumpPad(arenaWidthTiles - 7.5, 12, -25.2);

                // High tactical escape balconies for dodging Sky Lightning, Meteors, Blizzard & Solar Beams
                addGround(20, 4.8, 4.2, 0.7, 'platform');
                addGround(arenaWidthTiles - 16, 4.8, 4.2, 0.7, 'platform');
                mysteryBlocks.push({ x: 21.5 * TILE_SIZE, y: 1.8 * TILE_SIZE, content: 'shield' });

                if (arenaStyle === 0) {
                    addGround(18, 8.6, 4.8, 0.7, 'platform', mainSurface);
                    addGround(29, 6.2, 6.0, 0.7, 'platform');
                    addGround(arenaWidthTiles - 13, 8.6, 4.8, 0.7, 'platform', mainSurface);
                    addSaw(21, 11.8, 29, 11.8, 1.45, 20);
                    addSaw(35, 11.8, 43, 11.8, 1.45, 20);
                } else if (arenaStyle === 1) {
                    addWindZone(27, 4, 8, 8, 0, -0.62, 'bottom');
                    addGround(18, 8.2, 5.2, 0.7, 'platform');
                    addGround(arenaWidthTiles - 14, 8.2, 5.2, 0.7, 'platform');
                    addSaw(22, 11.8, 39, 11.8, 1.6, 22);
                } else if (arenaStyle === 2) {
                    gravityZones.push({ x: 22 * TILE_SIZE, y: 2 * TILE_SIZE, w: 18 * TILE_SIZE, h: 10 * TILE_SIZE });
                    addGround(18, 8.8, 4.8, 0.7, 'platform');
                    addGround(29, 5.8, 5.5, 0.7, 'platform');
                    addGround(arenaWidthTiles - 14, 8.8, 4.8, 0.7, 'platform');
                    addLaserGate(24, 8.5, 3.5, 160, 68, 0);
                    addLaserGate(38, 8.5, 3.5, 160, 68, 80);
                } else {
                    addMovingPlatform(19, 8.5, 26.5, 8.5, 3.8, 1.35);
                    addMovingPlatform(35, 8.5, 42.5, 8.5, 3.8, 1.35);
                    addGround(29, 5.8, 5.5, 0.7, 'platform');
                    addSaw(24, 11.8, 37, 11.8, 1.55, 21);
                }

                teleporters.push({
                    x1: 14.5 * TILE_SIZE, y1: 12 * TILE_SIZE - 56,
                    x2: (arenaWidthTiles - 5.5) * TILE_SIZE, y2: 12 * TILE_SIZE - 56,
                    color: info.themeColor || "#ff2a85"
                });

                coins.push({ x: 20 * TILE_SIZE, y: 7.5 * TILE_SIZE, type: 'emerald' });
                coins.push({ x: 31.5 * TILE_SIZE, y: 4.9 * TILE_SIZE, type: 'emerald' });
                coins.push({ x: (arenaWidthTiles - 11.5) * TILE_SIZE, y: 7.5 * TILE_SIZE, type: 'emerald' });

                bossConfig = {
                    name: info.name.toUpperCase(),
                    hp: bossHp,
                    x: (arenaWidthTiles - 14) * TILE_SIZE,
                    y: 12 * TILE_SIZE - 110,
                    minX: 15 * TILE_SIZE,
                    maxX: (arenaWidthTiles - 5) * TILE_SIZE,
                    variant: ((levelIndex % 3) + 1),
                    bossType,
                    isWorldLord,
                    levelIndex
                };
                portal = { x: Math.floor(arenaWidthTiles * 0.58) * TILE_SIZE, y: 12 * TILE_SIZE - 86, lockedUntilBossDead: true };
            } else {
                // ============================================================================
                // 8 DISTINCT SURPRISING LEVEL ARCHETYPES FOR LEVELS 11..99
                // Every level within a 10-level World uses a different structural archetype!
                // ============================================================================
                const nonBossSlot = [0, 1, 2, 3, 0, 4, 5, 6, 7, 0][subIdx];
                const archetype = (nonBossSlot + worldIdx) % 8;
                const worldSurface = worldIdx === 4 ? 'ice' : ((worldIdx === 6 || worldIdx === 7) ? 'boost' : 'normal');

                // Common Start Zone with Power-Up Mystery Boxes & Level Introduction Sign
                addGround(0, 12, 13, 5, 'ground', worldIdx === 4 ? 'ice' : 'normal');
                signs.push({ x: 250, y: 12 * TILE_SIZE - 55, text: `${info.name} — ${info.desc.slice(0, 68)}...` });
                mysteryBlocks.push({ x: 5.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
                mysteryBlocks.push({ x: 7.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
                mysteryBlocks.push({ x: 9.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'speed' });

                if (archetype === 0) {
                    // ARCHETYPE 0: 🚀 TRAMBOLİN GÖKYÜZÜ ADALARI (High-Altitude Jump Pad Islands)
                    addJumpPad(11.5, 12, -20.5);
                    hazards.push({ x: 13 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 24 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(13, 14, 24, 3);

                    addGround(15, 7.2, 5.5, 0.9, 'platform', worldSurface);
                    enemies.push({ x: 17 * TILE_SIZE, y: 6.2 * TILE_SIZE, type: 'crawler', minX: 15.2 * TILE_SIZE, maxX: 20 * TILE_SIZE });
                    addJumpPad(19.5, 7.2, -19.5);

                    addGround(23, 4.2, 6.0, 0.9, 'platform');
                    coins.push({ x: 26 * TILE_SIZE, y: 3.2 * TILE_SIZE, type: 'emerald' });
                    addSaw(26, 3.8, 26, 9.5, 1.5, 22);
                    addJumpPad(28.0, 4.2, -18.5);

                    addGround(31, 8.2, 5.5, 0.9, 'platform', worldSurface);
                    enemies.push({ x: 33 * TILE_SIZE, y: 7.2 * TILE_SIZE, type: 'sentinel', minX: 31.5 * TILE_SIZE, maxX: 36 * TILE_SIZE });

                    // Mid Checkpoint Bastion
                    addGround(37, 11, 13, 6);
                    checkpoints.push({ x: 38.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
                    enemies.push({ x: 43 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 40 * TILE_SIZE, maxX: 48 * TILE_SIZE });
                    addJumpPad(48.5, 11, -20.5);

                    // Second Sky-Island Chain with Moving Platforms & Jump Pads
                    hazards.push({ x: 50 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 24 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(50, 14, 24, 3);
                    addGround(52, 6.5, 5.0, 0.9, 'platform');
                    addMovingPlatform(58.5, 6.5, 64.5, 4.5, 3.5, 1.35);
                    addGround(66.5, 5.5, 6.0, 0.9, 'platform', worldSurface);
                    enemies.push({ x: 69 * TILE_SIZE, y: 4.5 * TILE_SIZE, type: 'sentinel', minX: 67 * TILE_SIZE, maxX: 72 * TILE_SIZE });

                    addGround(74, 10, 14, 7);
                    enemies.push({ x: 78 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 75 * TILE_SIZE, maxX: 83 * TILE_SIZE });
                    portal = { x: 85 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };

                } else if (archetype === 1) {
                    // ARCHETYPE 1: 💨 FIRTINA RÜZGAR TÜNELİ & SÜZÜLÜŞ VADİSİ (Updraft & Directional Wind Turbine Fans)
                    hazards.push({ x: 13 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 22 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(13, 14, 22, 3);

                    addWindZone(14.5, 3, 5.5, 10.5, 0.24, -0.74, 'bottom');
                    addGround(20.5, 6.2, 5.5, 0.9, 'platform');
                    enemies.push({ x: 22.5 * TILE_SIZE, y: 5.2 * TILE_SIZE, type: 'sentinel', minX: 21 * TILE_SIZE, maxX: 25.5 * TILE_SIZE });
                    addSaw(27, 4.0, 27, 11.0, 1.55, 24);

                    addWindZone(28.5, 2.5, 5.5, 11.0, 0.26, -0.76, 'bottom');
                    addGround(35, 11, 14, 6, 'ground', worldSurface);
                    // Horizontal Wind Turbine Fan pushing the player across the checkpoint bridge!
                    addWindZone(37.5, 6.5, 8.5, 4.5, 0.42, -0.08, 'left');
                    checkpoints.push({ x: 36.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
                    enemies.push({ x: 41 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 38 * TILE_SIZE, maxX: 47 * TILE_SIZE });
                    enemies.push({ x: 45 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'crawler', minX: 39 * TILE_SIZE, maxX: 48 * TILE_SIZE });

                    // Second Wind Canyon with Laser Gate & High Platforms
                    hazards.push({ x: 49 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 23 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(49, 14, 23, 3);
                    addWindZone(50.5, 2, 6.0, 11.5, 0.26, -0.76, 'bottom');
                    addGround(57, 5.5, 7.5, 0.9, 'platform', worldSurface);
                    addLaserGate(60.5, 2.0, 3.5, 140, 65, 0);
                    enemies.push({ x: 62 * TILE_SIZE, y: 4.5 * TILE_SIZE, type: 'sentinel', minX: 58 * TILE_SIZE, maxX: 64 * TILE_SIZE });
                    addCrumble(66, 7.5, 2.8);
                    addCrumble(69.5, 8.8, 2.5);

                    addGround(72, 10, 15, 7);
                    enemies.push({ x: 76 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 73 * TILE_SIZE, maxX: 82 * TILE_SIZE });
                    portal = { x: 84 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };

                } else if (archetype === 2) {
                    // ARCHETYPE 2: ⚡ ZAMANLAMALI LAZER KALESİ & GÜVENLİK KORİDORU (Timed Laser Vault)
                    addGround(13, 12, 22, 5, 'ground', worldSurface);
                    addGround(15, 7.5, 18, 1.0, 'wall'); // Ceiling over laser corridor

                    addLaserGate(17, 8.5, 3.5, 140, 65, 0);
                    enemies.push({ x: 20 * TILE_SIZE, y: 11 * TILE_SIZE, type: 'crawler', minX: 18 * TILE_SIZE, maxX: 23 * TILE_SIZE });
                    addLaserGate(24, 8.5, 3.5, 140, 65, 45);
                    enemies.push({ x: 27 * TILE_SIZE, y: 11 * TILE_SIZE, type: 'golem', minX: 25 * TILE_SIZE, maxX: 30 * TILE_SIZE });
                    addLaserGate(31, 8.5, 3.5, 140, 65, 90);

                    // Upper bonus path over the ceiling via Jump Pad!
                    addJumpPad(13.8, 12, -19.5);
                    coins.push({ x: 24 * TILE_SIZE, y: 6.4 * TILE_SIZE, type: 'emerald' });

                    // Checkpoint + Portal Elevator
                    addGround(35, 11, 13, 6);
                    checkpoints.push({ x: 36.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
                    teleporters.push({
                        x1: 45.5 * TILE_SIZE, y1: 11 * TILE_SIZE - 56,
                        x2: 50.5 * TILE_SIZE, y2: 7.5 * TILE_SIZE - 56,
                        color: info.themeColor || "#00f2fe"
                    });
                    addGround(47.5, 2, 2, 10, 'wall');

                    // Second Section: High Security Bridges + Lasers
                    hazards.push({ x: 49.5 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 22 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(49.5, 14, 22, 3);
                    addGround(49.5, 7.5, 8.5, 0.9, 'platform');
                    addLaserGate(54, 4.0, 3.5, 130, 60, 20);
                    enemies.push({ x: 56 * TILE_SIZE, y: 6.5 * TILE_SIZE, type: 'sentinel', minX: 51 * TILE_SIZE, maxX: 57.5 * TILE_SIZE });

                    addMovingPlatform(59, 8.5, 65, 8.5, 3.5, 1.4);
                    addSaw(62, 5.0, 62, 11.0, 1.6, 22);
                    addCrumble(66.5, 9.2, 3.0);

                    addGround(71.5, 10, 15, 7, 'ground', worldSurface);
                    addLaserGate(75, 6.5, 3.5, 135, 65, 0);
                    enemies.push({ x: 78 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 76 * TILE_SIZE, maxX: 83 * TILE_SIZE });
                    portal = { x: 84 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };

                } else if (archetype === 3) {
                    // ARCHETYPE 3: 🧊 KAYGAN BUZ KANYONU & ÇÖKEN KÖPRÜLER (Slippery Ice & Crumble Run)
                    addGround(13, 11.5, 10, 5.5, 'ground', 'ice');
                    enemies.push({ x: 17 * TILE_SIZE, y: 10.5 * TILE_SIZE, type: 'crawler', minX: 14 * TILE_SIZE, maxX: 22 * TILE_SIZE });
                    addSaw(19, 11.3, 22.5, 11.3, 1.45, 20);

                    hazards.push({ x: 23 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 16 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(23, 14, 16, 3);
                    addGround(24, 1, 14, 1.2, 'wall');
                    for (let i = 0; i < 3; i++) {
                        addCrumble(24.5 + i * 4.5, 10.2 - (i % 2) * 1.2, 2.5);
                        stalactites.push({ x: (25.5 + i * 4.5) * TILE_SIZE, y: 2.2 * TILE_SIZE });
                    }

                    addGround(39, 11, 14, 6, 'ground', 'ice');
                    checkpoints.push({ x: 40.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
                    enemies.push({ x: 45 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 42 * TILE_SIZE, maxX: 51 * TILE_SIZE });
                    addJumpPad(51.5, 11, -19.5);

                    // Ice Platforms in the Sky
                    hazards.push({ x: 53 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 20 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(53, 14, 20, 3);
                    addGround(54.5, 6.8, 6.5, 0.9, 'platform', 'ice');
                    enemies.push({ x: 57 * TILE_SIZE, y: 5.8 * TILE_SIZE, type: 'sentinel', minX: 55 * TILE_SIZE, maxX: 60.5 * TILE_SIZE });
                    addSaw(62.5, 4.5, 62.5, 10.5, 1.6, 24);
                    addGround(64.5, 7.8, 6.5, 0.9, 'platform', 'ice');
                    enemies.push({ x: 67 * TILE_SIZE, y: 6.8 * TILE_SIZE, type: 'crawler', minX: 65 * TILE_SIZE, maxX: 70.5 * TILE_SIZE });

                    addGround(73, 10, 14, 7, 'ground', 'ice');
                    enemies.push({ x: 77 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 74 * TILE_SIZE, maxX: 82 * TILE_SIZE });
                    portal = { x: 84 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };

                } else if (archetype === 4) {
                    // ARCHETYPE 4: ⏩ TURBO HIZ KONVEYÖRLERİ & TESTERE PİSTİ (High-Speed Boost Track)
                    addGround(13, 12, 14, 5, 'ground', 'boost');
                    addSaw(17, 11.8, 22, 11.8, 1.65, 22);
                    enemies.push({ x: 24 * TILE_SIZE, y: 11 * TILE_SIZE, type: 'crawler', minX: 21 * TILE_SIZE, maxX: 26.5 * TILE_SIZE });
                    addJumpPad(25.8, 12, -19.5);

                    hazards.push({ x: 27 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 14 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(27, 14, 14, 3);
                    addGround(29, 7.2, 9.5, 0.9, 'platform', 'boost');
                    addLaserGate(34, 3.7, 3.5, 130, 60, 0);
                    enemies.push({ x: 36 * TILE_SIZE, y: 6.2 * TILE_SIZE, type: 'sentinel', minX: 31 * TILE_SIZE, maxX: 38 * TILE_SIZE });

                    addGround(41, 11, 13, 6);
                    checkpoints.push({ x: 42.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
                    enemies.push({ x: 47 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 44 * TILE_SIZE, maxX: 52 * TILE_SIZE });

                    // Second Turbo Track Over Lava
                    hazards.push({ x: 54 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 20 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(54, 14, 20, 3);
                    addGround(55, 9.5, 7.5, 0.9, 'platform', 'boost');
                    addJumpPad(61.5, 9.5, -18.5);
                    addSaw(64, 4.5, 64, 10.5, 1.7, 24);
                    addGround(66, 6.8, 6.5, 0.9, 'platform', 'boost');

                    addGround(74, 10, 14, 7, 'ground', 'boost');
                    enemies.push({ x: 78 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 75 * TILE_SIZE, maxX: 83 * TILE_SIZE });
                    enemies.push({ x: 81 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'sentinel', minX: 76 * TILE_SIZE, maxX: 84 * TILE_SIZE });
                    portal = { x: 85 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };

                } else if (archetype === 5) {
                    // ARCHETYPE 5: 🧗 DİKEY KULELER & ÇİFT KATLI ASANSÖR KALELERİ (Vertical Tower & Moving Lifts)
                    addGround(13, 12, 16, 5);
                    // Twin Wall-Jump Chimneys + Wind Updraft Assist
                    addGround(15, 3.5, 2, 8.5, 'wall');
                    addGround(20, 2.5, 2, 7.5, 'wall');
                    addWindZone(17, 3.5, 3, 8.5, 0, -0.48);
                    addSaw(18.5, 9.5, 18.5, 4.5, 1.4, 19);

                    // High Fortress Roof
                    addGround(22, 4.5, 13, 1.0, 'platform', worldSurface);
                    enemies.push({ x: 26 * TILE_SIZE, y: 3.5 * TILE_SIZE, type: 'golem', minX: 23 * TILE_SIZE, maxX: 33 * TILE_SIZE });
                    enemies.push({ x: 31 * TILE_SIZE, y: 3.5 * TILE_SIZE, type: 'sentinel', minX: 25 * TILE_SIZE, maxX: 34 * TILE_SIZE });
                    coins.push({ x: 28 * TILE_SIZE, y: 3.4 * TILE_SIZE, type: 'emerald' });

                    // Lower Path Under Roof
                    hazards.push({ x: 29 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 9 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(29, 14, 9, 3);

                    // Checkpoint Bastion
                    addGround(38, 11, 13, 6);
                    checkpoints.push({ x: 39.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
                    enemies.push({ x: 44 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'crawler', minX: 41 * TILE_SIZE, maxX: 49 * TILE_SIZE });

                    // Moving Elevator Section
                    hazards.push({ x: 51 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 21 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(51, 14, 21, 3);
                    addMovingPlatform(52.5, 10.5, 52.5, 5.5, 3.4, 1.4);
                    addGround(57.5, 5.5, 6.5, 0.9, 'platform');
                    addLaserGate(60.5, 2.0, 3.5, 135, 65, 30);
                    addMovingPlatform(65.5, 5.5, 70.5, 9.5, 3.4, 1.4);

                    addGround(72, 10, 15, 7);
                    enemies.push({ x: 76 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 73 * TILE_SIZE, maxX: 81 * TILE_SIZE });
                    enemies.push({ x: 80 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'sentinel', minX: 75 * TILE_SIZE, maxX: 83 * TILE_SIZE });
                    portal = { x: 84 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };

                } else if (archetype === 6) {
                    // ARCHETYPE 6: 🌀 ÇOK KATLI PORTAL LABİRENTİ (Multi-Deck Wormhole Maze)
                    addGround(13, 12, 14, 5);
                    addGround(15, 6.2, 13, 0.9, 'platform', worldSurface); // Upper deck 1
                    addGround(26, 2, 2, 10, 'wall'); // Barrier wall

                    teleporters.push({
                        x1: 23.5 * TILE_SIZE, y1: 12 * TILE_SIZE - 56,
                        x2: 16.5 * TILE_SIZE, y2: 6.2 * TILE_SIZE - 56,
                        color: "#00f2fe"
                    });
                    enemies.push({ x: 21 * TILE_SIZE, y: 5.2 * TILE_SIZE, type: 'sentinel', minX: 18 * TILE_SIZE, maxX: 25 * TILE_SIZE });
                    addJumpPad(24.5, 6.2, -18.5);

                    // Bridge over barrier wall
                    addGround(28, 4.5, 9, 0.9, 'platform');
                    addLaserGate(32.5, 1.0, 3.5, 135, 60, 0);
                    coins.push({ x: 34 * TILE_SIZE, y: 3.4 * TILE_SIZE, type: 'emerald' });

                    // Checkpoint Bastion
                    addGround(37, 11, 14, 6);
                    checkpoints.push({ x: 38.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
                    enemies.push({ x: 43 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 40 * TILE_SIZE, maxX: 49 * TILE_SIZE });

                    // Second Wormhole Puzzle + Low Gravity
                    addGround(50, 3, 2, 8, 'wall');
                    teleporters.push({
                        x1: 48 * TILE_SIZE, y1: 11 * TILE_SIZE - 56,
                        x2: 53.5 * TILE_SIZE, y2: 8.5 * TILE_SIZE - 56,
                        color: "#ff2a85"
                    });
                    gravityZones.push({ x: 52 * TILE_SIZE, y: 1 * TILE_SIZE, w: 19 * TILE_SIZE, h: 12 * TILE_SIZE });
                    hazards.push({ x: 52 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 19 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(52, 14, 19, 3);
                    addGround(52.5, 8.5, 6.5, 0.9, 'platform', worldSurface);
                    addSaw(61.5, 4.5, 61.5, 10.5, 1.6, 24);
                    addGround(64, 7.0, 5.5, 0.9, 'platform');

                    addGround(71, 10, 15, 7);
                    enemies.push({ x: 75 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 72 * TILE_SIZE, maxX: 80 * TILE_SIZE });
                    enemies.push({ x: 79 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'sentinel', minX: 74 * TILE_SIZE, maxX: 83 * TILE_SIZE });
                    portal = { x: 83.5 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };

                } else {
                    // ARCHETYPE 7: 🌌 SIFIR YERÇEKİMİ UZAY İSTASYONU & KOMBO MEKANİKLER (Space Anomaly Combo)
                    gravityZones.push({ x: 13 * TILE_SIZE, y: 1 * TILE_SIZE, w: 23 * TILE_SIZE, h: 12 * TILE_SIZE });
                    hazards.push({ x: 13 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 23 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(13, 14, 23, 3);

                    addJumpPad(11.8, 12, -17.5);
                    addGround(16, 8.8, 4.5, 0.9, 'platform', 'boost');
                    addSaw(22, 4.0, 22, 10.5, 1.55, 24);
                    addMovingPlatform(24, 7.5, 29, 5.5, 3.5, 1.35);
                    addGround(31, 6.5, 4.5, 0.9, 'platform', 'ice');

                    addGround(36, 11, 14, 6);
                    checkpoints.push({ x: 37.5 * TILE_SIZE, y: 11 * TILE_SIZE - 64 });
                    addLaserGate(41, 7.5, 3.5, 140, 65, 0);
                    enemies.push({ x: 44 * TILE_SIZE, y: 10 * TILE_SIZE, type: 'golem', minX: 42 * TILE_SIZE, maxX: 49 * TILE_SIZE });

                    // Second Section: Wind + Saws + Crumble Gauntlet
                    hazards.push({ x: 50 * TILE_SIZE, y: 13.5 * TILE_SIZE, w: 22 * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                    addGround(50, 14, 22, 3);
                    addWindZone(51.5, 2.5, 5.5, 11.0, 0.08, -0.68);
                    addGround(58, 6.2, 6.0, 0.9, 'platform', 'boost');
                    enemies.push({ x: 60.5 * TILE_SIZE, y: 5.2 * TILE_SIZE, type: 'sentinel', minX: 58.5 * TILE_SIZE, maxX: 63.5 * TILE_SIZE });
                    addCrumble(65.5, 8.0, 2.6);
                    addCrumble(69.0, 9.2, 2.6);

                    addGround(72, 10, 15, 7);
                    enemies.push({ x: 76 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'golem', minX: 73 * TILE_SIZE, maxX: 81 * TILE_SIZE });
                    enemies.push({ x: 80 * TILE_SIZE, y: 9 * TILE_SIZE, type: 'crawler', minX: 74 * TILE_SIZE, maxX: 83 * TILE_SIZE });
                    portal = { x: 84 * TILE_SIZE, y: 10 * TILE_SIZE - 86 };
                }

                // ============================================================================
                // PROGRESSIVE MULTI-ACT EXTENSION GENERATOR (LEVELS 11..99)
                // Levels grow progressively longer and richer in detail from World 2 to World 10!
                // ============================================================================
                const diffRatio = Math.max(0, Math.min(1, (levelIndex - 10) / 88));
                const extraActs = 1 + (levelIndex >= 32 ? 1 : 0) + (levelIndex >= 64 ? 1 : 0);
                const powerRotation = ['shield', 'fire', 'speed'];
                let curX = 86;

                // Convert the end of Act 2 into Checkpoint #2 Bastion
                addGround(83, 10, 5, 7, 'ground', worldSurface);
                checkpoints.push({ x: 84.2 * TILE_SIZE, y: 10 * TILE_SIZE - 64 });
                mysteryBlocks.push({
                    x: 85.8 * TILE_SIZE,
                    y: 6.5 * TILE_SIZE,
                    content: powerRotation[levelIndex % 3]
                });

                for (let actIdx = 0; actIdx < extraActs; actIdx++) {
                    const modType = (levelIndex + actIdx * 3) % 6;
                    const stretch = Math.floor(worldIdx * 0.6) + (subIdx >= 5 ? 2 : 0);
                    const sawSpeed = 1.45 + diffRatio * 0.45;
                    const laserPeriod = Math.round(150 - diffRatio * 25);
                    const laserOn = Math.round(62 + diffRatio * 12);

                    if (modType === 0) {
                        // MODULE 0: Split-Level Lava Canyon + High Secret Balcony + Moving Lift
                        const canyonW = 20 + stretch;
                        addJumpPad(curX - 0.8, 10, -25.4);
                        hazards.push({ x: curX * TILE_SIZE, y: 13.5 * TILE_SIZE, w: canyonW * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                        addGround(curX, 14, canyonW, 3);

                        // Lower main route: Moving platform + crumble bridge
                        addMovingPlatform(curX + 1.5, 9.8, curX + 7.5, 8.5, 3.5, 1.3 + diffRatio * 0.25);
                        addCrumble(curX + 9.5, 9.2, 2.6);
                        addGround(curX + 13.5, 8.6, canyonW - 14.5, 0.9, 'platform', worldSurface);
                        enemies.push({
                            x: (curX + 15.5) * TILE_SIZE,
                            y: 7.6 * TILE_SIZE,
                            type: 'crawler',
                            minX: (curX + 14) * TILE_SIZE,
                            maxX: (curX + canyonW - 2) * TILE_SIZE
                        });

                        // Upper bonus balcony route
                        addGround(curX + 3.0, 5.0, 7.5, 0.8, 'platform');
                        coins.push({ x: (curX + 6.5) * TILE_SIZE, y: 4.0 * TILE_SIZE, type: 'emerald' });
                        addCoinArc((curX + 3.8) * TILE_SIZE, 3.8 * TILE_SIZE, 5, 44, 28);
                        if (diffRatio > 0.35) {
                            addSaw(curX + 11.5, 4.2, curX + 11.5, 9.8, sawSpeed, 22);
                        }
                        curX += canyonW;
                    } else if (modType === 1) {
                        // MODULE 1: Wind Turbine Gorge & Sky Islands
                        const gorgeW = 21 + stretch;
                        hazards.push({ x: curX * TILE_SIZE, y: 13.5 * TILE_SIZE, w: gorgeW * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                        addGround(curX, 14, gorgeW, 3);

                        addWindZone(curX + 1.2, 2.5, 5.5, 11.0, 0.24, -0.76, 'bottom');
                        addGround(curX + 7.2, 6.0, 6.2, 0.9, 'platform', worldSurface);
                        enemies.push({
                            x: (curX + 9.8) * TILE_SIZE,
                            y: 5.0 * TILE_SIZE,
                            type: 'sentinel',
                            minX: (curX + 7.6) * TILE_SIZE,
                            maxX: (curX + 12.8) * TILE_SIZE
                        });
                        addSaw(curX + 14.2, 3.8, curX + 14.2, 10.5, sawSpeed, 23);

                        addWindZone(curX + 15.2, 3.0, 5.0, 10.5, 0.22, -0.74, 'bottom');
                        coins.push({ x: (curX + 17.5) * TILE_SIZE, y: 4.5 * TILE_SIZE, type: 'emerald' });
                        curX += gorgeW;
                    } else if (modType === 2) {
                        // MODULE 2: Timed Laser Fortress Corridor + Upper Roof Bypass
                        const fortW = 20 + stretch;
                        addGround(curX, 11, fortW, 6, 'ground', worldSurface);
                        addGround(curX + 2.5, 6.5, fortW - 5, 0.9, 'wall'); // Mid ceiling / upper deck floor

                        addLaserGate(curX + 4.5, 7.4, 3.6, laserPeriod, laserOn, 0);
                        enemies.push({
                            x: (curX + 8.0) * TILE_SIZE,
                            y: 10 * TILE_SIZE,
                            type: 'golem',
                            minX: (curX + 5.5) * TILE_SIZE,
                            maxX: (curX + 11.5) * TILE_SIZE
                        });
                        addLaserGate(curX + 12.5, 7.4, 3.6, laserPeriod, laserOn, 55);
                        if (fortW >= 22) {
                            addLaserGate(curX + 17.5, 7.4, 3.6, laserPeriod, laserOn, 105);
                        }

                        // Upper roof route via Jump Pad
                        addJumpPad(curX + 0.8, 11, -25.2);
                        enemies.push({
                            x: (curX + 10.5) * TILE_SIZE,
                            y: 5.5 * TILE_SIZE,
                            type: 'sentinel',
                            minX: (curX + 4.0) * TILE_SIZE,
                            maxX: (curX + fortW - 4.0) * TILE_SIZE
                        });
                        coins.push({ x: (curX + 11.0) * TILE_SIZE, y: 5.4 * TILE_SIZE, type: 'emerald' });
                        curX += fortW;
                    } else if (modType === 3) {
                        // MODULE 3: Stalactite Crumble Cavern + Vertical Elevator Tower
                        const cavW = 21 + stretch;
                        hazards.push({ x: curX * TILE_SIZE, y: 13.5 * TILE_SIZE, w: cavW * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                        addGround(curX, 14, cavW, 3);
                        addGround(curX + 1, 1.0, 13, 1.2, 'wall');

                        for (let k = 0; k < 3; k++) {
                            addCrumble(curX + 1.5 + k * 4.2, 9.8 - (k % 2) * 1.1, 2.5);
                            stalactites.push({ x: (curX + 2.5 + k * 4.2) * TILE_SIZE, y: 2.2 * TILE_SIZE });
                        }
                        addMovingPlatform(curX + 14.2, 10.2, curX + 14.2, 5.8, 3.4, 1.35 + diffRatio * 0.2);
                        addGround(curX + 18.0, 6.2, cavW - 18.5, 0.9, 'platform', worldSurface);
                        coins.push({ x: (curX + 19.5) * TILE_SIZE, y: 5.2 * TILE_SIZE, type: 'emerald' });
                        curX += cavW;
                    } else if (modType === 4) {
                        // MODULE 4: Zero-Gravity Space Anomaly & Turbo Boost Ramp
                        const spaceW = 21 + stretch;
                        gravityZones.push({ x: curX * TILE_SIZE, y: 1 * TILE_SIZE, w: spaceW * TILE_SIZE, h: 12 * TILE_SIZE });
                        hazards.push({ x: curX * TILE_SIZE, y: 13.5 * TILE_SIZE, w: spaceW * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                        addGround(curX, 14, spaceW, 3);

                        addGround(curX + 1.5, 9.2, 5.0, 0.9, 'platform', 'boost');
                        addSaw(curX + 8.0, 3.8, curX + 8.0, 10.5, sawSpeed, 24);
                        addGround(curX + 10.0, 6.5, 5.2, 0.9, 'platform', worldSurface);
                        enemies.push({
                            x: (curX + 12.2) * TILE_SIZE,
                            y: 5.5 * TILE_SIZE,
                            type: 'sentinel',
                            minX: (curX + 10.4) * TILE_SIZE,
                            maxX: (curX + 14.8) * TILE_SIZE
                        });
                        addSaw(curX + 16.5, 4.0, curX + 16.5, 10.8, sawSpeed, 24);
                        addCrumble(curX + 18.2, 8.2, 2.6);
                        coins.push({ x: (curX + 12.6) * TILE_SIZE, y: 5.4 * TILE_SIZE, type: 'emerald' });
                        curX += spaceW;
                    } else {
                        // MODULE 5: Wormhole Teleporter Puzzle & Twin Wall-Jump Chimney
                        const puzW = 20 + stretch;
                        addGround(curX, 11, 10, 6, 'ground', worldSurface);
                        addGround(curX + 8.5, 2.5, 1.8, 8.5, 'wall');
                        teleporters.push({
                            x1: (curX + 6.5) * TILE_SIZE,
                            y1: 11 * TILE_SIZE - 56,
                            x2: (curX + 12.0) * TILE_SIZE,
                            y2: 6.2 * TILE_SIZE - 56,
                            color: info.themeColor || "#00f2fe"
                        });

                        hazards.push({ x: (curX + 10) * TILE_SIZE, y: 13.5 * TILE_SIZE, w: (puzW - 10) * TILE_SIZE, h: 3 * TILE_SIZE, type: 'lava' });
                        addGround(curX + 10, 14, puzW - 10, 3);
                        addGround(curX + 11.0, 6.2, 6.5, 0.9, 'platform', worldSurface);
                        enemies.push({
                            x: (curX + 14.0) * TILE_SIZE,
                            y: 5.2 * TILE_SIZE,
                            type: 'golem',
                            minX: (curX + 11.5) * TILE_SIZE,
                            maxX: (curX + 17.0) * TILE_SIZE
                        });
                        addCrumble(curX + 18.2, 7.8, 2.6);
                        coins.push({ x: (curX + 14.5) * TILE_SIZE, y: 5.1 * TILE_SIZE, type: 'emerald' });
                        curX += puzW;
                    }

                    // Intermediate Checkpoint Bastion between extra acts
                    if (actIdx < extraActs - 1) {
                        addGround(curX, 10.5, 12, 6.5, 'ground', worldSurface);
                        checkpoints.push({ x: (curX + 2.0) * TILE_SIZE, y: 10.5 * TILE_SIZE - 64 });
                        mysteryBlocks.push({
                            x: (curX + 4.5) * TILE_SIZE,
                            y: 7.0 * TILE_SIZE,
                            content: powerRotation[(levelIndex + actIdx + 1) % 3]
                        });
                        enemies.push({
                            x: (curX + 7.5) * TILE_SIZE,
                            y: 9.5 * TILE_SIZE,
                            type: actIdx % 2 === 0 ? 'golem' : 'crawler',
                            minX: (curX + 5.0) * TILE_SIZE,
                            maxX: (curX + 11.0) * TILE_SIZE
                        });
                        curX += 12;
                    }
                }

                // Grand Finale Bastion & Exit Portal
                addGround(curX, 10, 15, 7, 'ground', worldSurface);
                enemies.push({
                    x: (curX + 4.5) * TILE_SIZE,
                    y: 9 * TILE_SIZE,
                    type: 'golem',
                    minX: (curX + 1.5) * TILE_SIZE,
                    maxX: (curX + 9.5) * TILE_SIZE
                });
                enemies.push({
                    x: (curX + 8.5) * TILE_SIZE,
                    y: 9 * TILE_SIZE,
                    type: 'sentinel',
                    minX: (curX + 3.5) * TILE_SIZE,
                    maxX: (curX + 11.5) * TILE_SIZE
                });
                portal = { x: (curX + 12.5) * TILE_SIZE, y: 10 * TILE_SIZE - 86 };
            }
            break;
        }
    }

    const info = LEVEL_INFO[levelIndex];
    normalizeLevelCollectibles(
        coins,
        mysteryBlocks,
        solids,
        crumblePlatforms,
        portal,
        Boolean(info && info.isBossLevel),
        hazards,
        teleporters,
        checkpoints,
        saws
    );

    const subChamber = attachSubPlatformChamberToLevel({
        levelIndex,
        isTrollMode: false,
        isBossLevel: Boolean(info && info.isBossLevel),
        solids,
        mysteryBlocks,
        hazards,
        coins,
        enemies,
        movingPlatforms,
        crumblePlatforms,
        saws,
        stalactites,
        gravityZones,
        jumpPads,
        windZones,
        laserGates,
        checkpoints,
        teleporters,
        portal
    });

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
        jumpPads,
        windZones,
        laserGates,
        signs,
        subChamber,
        portal,
        bossConfig
    };
}

// ============================================================================
// 🛗 CYBER-ELEVATOR CABIN & UNDERGROUND SUB-PLATFORM CHAMBERS GENERATOR
// Bölümlerin zorluk seviyesine göre (Kolay, Orta, Zor, Uzman/Trol) ana sahneden
// hareketli asansör kabiniyle inilen, özel görevli alt platform sahneleri ve çıkış asansörü!
// ============================================================================
function attachSubPlatformChamberToLevel(ctx) {
    const {
        levelIndex,
        isTrollMode,
        isBossLevel,
        solids,
        mysteryBlocks,
        hazards,
        coins,
        enemies,
        movingPlatforms,
        crumblePlatforms,
        saws,
        stalactites,
        gravityZones,
        jumpPads,
        windZones,
        laserGates,
        checkpoints,
        teleporters,
        trollSpringTraps,
        portal
    } = ctx;

    if (isBossLevel) return null;

    // 1. Find an unobstructed, 100% reachable main-level ground span for the Elevator Cabins (pipeIn & pipeReturn)
    const mainSolids = solids.filter((s) => !s.isSubChamberSolid);
    const candidateGrounds = mainSolids.filter((s) =>
        s.type === "ground" &&
        !s.isTrollTrapFloor &&
        s.y <= 13.2 * TILE_SIZE &&
        s.w >= 6.5 * TILE_SIZE &&
        s.x + s.w <= (portal ? portal.x - 100 : 99999) &&
        !(hazards || []).some((h) => h.y <= s.y + 8 && h.x < s.x + s.w - 16 && h.x + h.w > s.x + 16)
    );

    if (candidateGrounds.length === 0) return null;

    const stationSpanW = 148; // 62px pipeIn + 24px gap + 62px pipeReturn
    let bestPlacement = null;

    if (!isTrollMode && levelIndex === 0) {
        // Level 1: Place right on the starting ground segment at tile 13.5 so players see the Elevator Cabin immediately!
        bestPlacement = { g: candidateGrounds[0], x: 13.5 * TILE_SIZE, score: 0 };
    } else {
        for (const g of candidateGrounds) {
            const minX = Math.max(g.x + 36, 10.2 * TILE_SIZE);
            const maxX = g.x + g.w - stationSpanW - 32;
            for (let x = minX; x <= maxX; x += 24) {
                const spanL = x - 20;
                const spanR = x + stationSpanW + 20;
                const gY = g.y;

                // Must NOT be under any wall, low ceiling, or overhead platform!
                const hasWallOrCeil = mainSolids.some((s) =>
                    s !== g &&
                    !(s.type === "ground" && Math.abs(s.y - gY) < 4) &&
                    s.x < spanR &&
                    s.x + s.w > spanL &&
                    s.y < gY &&
                    s.y + s.h > 0
                );
                if (hasWallOrCeil) continue;

                // Must NOT overlap mystery blocks, checkpoints, teleporters, jump pads, laser gates, stalactites, or spring traps
                const hasMbox = (mysteryBlocks || []).some((m) => m.x < spanR && m.x + 48 > spanL && m.y > gY - 220 && m.y < gY + 10);
                if (hasMbox) continue;

                const hasCp = (checkpoints || []).some((c) => c.x > spanL - 28 && c.x < spanR + 28);
                if (hasCp) continue;

                const hasTp = (teleporters || []).some((t) =>
                    (t.x1 > spanL - 36 && t.x1 < spanR + 36) ||
                    (t.x2 > spanL - 36 && t.x2 < spanR + 36)
                );
                if (hasTp) continue;

                const hasJp = (jumpPads || []).some((j) => j.x < spanR && j.x + (j.w || 58) > spanL);
                if (hasJp) continue;

                const hasLg = (laserGates || []).some((l) => l.x < spanR && l.x + (l.w || 20) > spanL);
                if (hasLg) continue;

                const hasStal = (stalactites || []).some((st) => st.x > spanL - 16 && st.x < spanR + 16);
                if (hasStal) continue;

                const hasSpring = (trollSpringTraps || []).some((sp) => sp.x < spanR && sp.x + (sp.w || 54) > spanL);
                if (hasSpring) continue;

                const hasSaw = (saws || []).some((s) => {
                    const sx1 = Math.min(s.startX ?? s.x, s.endX ?? s.x) - (s.r || 22) - 18;
                    const sx2 = Math.max(s.startX ?? s.x, s.endX ?? s.x) + (s.r || 22) + 18;
                    const sy1 = Math.min(s.startY ?? s.y, s.endY ?? s.y) - (s.r || 22);
                    const sy2 = Math.max(s.startY ?? s.y, s.endY ?? s.y) + (s.r || 22);
                    return sx1 < spanR && sx2 > spanL && sy2 > gY - 150 && sy1 < gY + 20;
                });
                if (hasSaw) continue;

                const distScore = (x >= 12 * TILE_SIZE && x <= 55 * TILE_SIZE)
                    ? (x - 12 * TILE_SIZE) * 0.01
                    : Math.abs(x - 30 * TILE_SIZE) + 1000;
                if (!bestPlacement || distScore < bestPlacement.score) {
                    bestPlacement = { g, x, score: distScore };
                }
            }
        }
    }

    let chosenGround = bestPlacement ? bestPlacement.g : candidateGrounds[0];
    let pipeInX = bestPlacement ? bestPlacement.x : (chosenGround.x + 64);
    const pipeReturnX = pipeInX + 86;
    const mainGroundY = chosenGround.y;

    // Sanitize enemy patrol ranges on chosenGround so no enemy camps inside the Elevator Boarding Deck
    const safeBoardL = pipeInX - 28;
    const safeBoardR = pipeReturnX + 62 + 28;
    for (const en of (enemies || [])) {
        if (en.isSubMissionEnemy) continue;
        if (Math.abs(en.y - (mainGroundY - 48)) < 85 && en.maxX > safeBoardL && en.minX < safeBoardR) {
            const rightRoom = (chosenGround.x + chosenGround.w - 36) - (safeBoardR + 12);
            const leftRoom = (safeBoardL - 12) - (chosenGround.x + 36);
            if (rightRoom >= leftRoom && rightRoom >= 80) {
                en.minX = Math.max(en.minX, safeBoardR + 12);
                en.maxX = Math.max(en.minX + 72, en.maxX);
                en.x = Math.max(en.minX + 8, Math.min(en.maxX - 8, en.x));
            } else if (leftRoom >= 80) {
                en.maxX = Math.min(en.maxX, safeBoardL - 12);
                en.minX = Math.min(en.maxX - 72, en.minX);
                en.x = Math.max(en.minX + 8, Math.min(en.maxX - 8, en.x));
            } else {
                en.minX = safeBoardR + 24;
                en.maxX = safeBoardR + 140;
                en.x = safeBoardR + 64;
            }
        }
    }

    // Lift any main-level coins that happen to sit inside pipeIn or pipeReturn
    for (const c of coins) {
        if (c.x >= pipeInX - 18 && c.x <= pipeReturnX + 80 && c.y > mainGroundY - 96 && c.y <= mainGroundY) {
            c.y = mainGroundY - 104;
        }
    }

    // 2. Determine Sub-Chamber Difficulty Tier (1 = Easy, 2 = Medium, 3 = Hard, 4 = Expert)
    let diffTier = 1;
    if (isTrollMode) {
        diffTier = levelIndex < 10 ? 2 : (levelIndex < 25 ? 3 : 4);
    } else {
        diffTier = levelIndex < 12 ? 1 : (levelIndex < 35 ? 2 : (levelIndex < 65 ? 3 : 4));
    }

    // 3. Select Unique Underground Biome Theme & Extended 3-Sector Multi-Room Geometry
    const SUB_BIOME_THEMES = [
        { id: "crystal", border: "#00f2fe", grid: "rgba(0, 242, 254, 0.15)", bg0: "#030b18", bg1: "#071d36", bg2: "#040f1e", hazard: "electric", surface: "normal" },
        { id: "magma",   border: "#ff5400", grid: "rgba(255, 84, 0, 0.16)",  bg0: "#180503", bg1: "#2e0b06", bg2: "#1a0604", hazard: "lava",     surface: "normal" },
        { id: "bio",     border: "#70e000", grid: "rgba(112, 224, 0, 0.15)", bg0: "#041608", bg1: "#0a2912", bg2: "#05180a", hazard: "acid",     surface: "normal" },
        { id: "cyber",   border: "#ff2a85", grid: "rgba(255, 42, 133, 0.15)",bg0: "#160418", bg1: "#29082e", bg2: "#18051c", hazard: "electric", surface: "boost"  },
        { id: "cryo",    border: "#90e0ef", grid: "rgba(144, 224, 239, 0.17)",bg0: "#041322", bg1: "#0a2640", bg2: "#051628", hazard: "electric", surface: "ice"    },
        { id: "zerog",   border: "#b537f2", grid: "rgba(181, 55, 242, 0.16)",bg0: "#0d0420", bg1: "#1b093b", bg2: "#0f0524", hazard: "lava",     surface: "normal" },
        { id: "temple",  border: "#ffd166", grid: "rgba(255, 209, 102, 0.16)",bg0: "#171103", bg1: "#2b2007", bg2: "#1a1304", hazard: "lava",     surface: "normal" },
        { id: "turbine", border: "#10b981", grid: "rgba(16, 185, 129, 0.15)", bg0: "#031414", bg1: "#062828", bg2: "#041818", hazard: "acid",     surface: "boost"  }
    ];
    const themeIdx = (levelIndex * 3 + (isTrollMode ? 5 : 0)) % SUB_BIOME_THEMES.length;
    const subTheme = SUB_BIOME_THEMES[themeIdx];

    // Align cx so (cx + 1.8) * TILE_SIZE === pipeInX (100% vertical elevator shaft!)
    // Extended length: 54 to 58 tiles (2592px - 2784px, 2x longer with 3 distinct sectors!)
    const cx = Math.max(2, (pipeInX / TILE_SIZE) - 1.8);
    const cy = 22;
    const secW = 13.0;
    const bastW = 3.6;
    const leftDeckW = 5.8;
    const rightDeckW = 5.8;
    const cw = 1.0 + leftDeckW + secW * 3 + bastW * 2 + rightDeckW + 1.0; // 56.8 tiles (2726px)
    const ch = 11.5;

    const addSubSolid = (gx, gy, gw, gh, type = "ground", surfaceType = "normal") => {
        solids.push({
            x: (cx + gx) * TILE_SIZE,
            y: (cy + gy) * TILE_SIZE,
            w: gw * TILE_SIZE,
            h: gh * TILE_SIZE,
            type,
            surfaceType,
            isSubChamberSolid: true
        });
    };

    const addSubStar = (gx, gy) => {
        coins.push({
            x: (cx + gx) * TILE_SIZE,
            y: (cy + gy) * TILE_SIZE,
            type: "sub_star",
            isSubMissionOrb: true,
            isTrollTeleport: false
        });
    };

    const addSubGold = (gx, gy) => {
        coins.push({
            x: (cx + gx) * TILE_SIZE,
            y: (cy + gy) * TILE_SIZE,
            type: "gold_coin",
            isTrollTeleport: false
        });
    };

    const addSubEnemy = (gx, gy, type, minGx, maxGx, speedMult = 1.0) => {
        enemies.push({
            x: (cx + gx) * TILE_SIZE,
            y: (cy + gy) * TILE_SIZE,
            type,
            minX: (cx + minGx) * TILE_SIZE,
            maxX: (cx + maxGx) * TILE_SIZE,
            speedMult,
            isSubMissionEnemy: true
        });
    };

    const addSubPitHazard = (gx, gw, kindOverride) => {
        const hKind = kindOverride || subTheme.hazard || "lava";
        hazards.push({
            x: (cx + gx) * TILE_SIZE,
            y: (cy + 10.2) * TILE_SIZE,
            w: gw * TILE_SIZE,
            h: 1.5 * TILE_SIZE,
            type: hKind === "acid" ? "acid" : "lava",
            hazardKind: hKind
        });
        addSubSolid(gx, 10.8, gw, 1.0, "ground");
    };

    // Subterranean Vault Ceiling & Outer Side Walls
    addSubSolid(0, 0, cw, 0.9, "wall");
    addSubSolid(0, 0, 1.1, ch, "wall");
    addSubSolid(cw - 1.1, 0, 1.1, ch, "wall");

    // Left Arrival Deck & Right Exit Elevator Deck
    const sec0Start = 1.0 + leftDeckW;                         // 6.8
    const bast1Start = sec0Start + secW;                       // 19.8
    const sec1Start = bast1Start + bastW;                      // 23.4
    const bast2Start = sec1Start + secW;                       // 36.4
    const sec2Start = bast2Start + bastW;                      // 40.0
    const rightDeckStart = sec2Start + secW;                   // 53.0

    addSubSolid(1.0, 9.2, leftDeckW, 2.3, "ground");
    addSubSolid(bast1Start, 9.2, bastW, 2.3, "ground");
    addSubSolid(bast2Start, 9.2, bastW, 2.3, "ground");
    addSubSolid(rightDeckStart, 9.2, rightDeckW, 2.3, "ground");

    // Mid-Chamber Bastion 1 & Bastion 2 Power-Up Mystery Boxes & Bonus Stars
    const powerCycle = ["shield", "fire", "speed", "coins"];
    mysteryBlocks.push({
        x: (cx + bast1Start + 1.3) * TILE_SIZE,
        y: (cy + 5.8) * TILE_SIZE,
        content: powerCycle[(levelIndex + 1) % powerCycle.length]
    });
    addSubStar(bast1Start + 1.8, 7.9);
    addSubGold(bast1Start + 0.8, 8.1);
    addSubGold(bast1Start + 2.7, 8.1);

    mysteryBlocks.push({
        x: (cx + bast2Start + 1.3) * TILE_SIZE,
        y: (cy + 5.8) * TILE_SIZE,
        content: powerCycle[(levelIndex + 2) % powerCycle.length]
    });
    addSubStar(bast2Start + 1.8, 7.9);
    addSubGold(bast2Start + 0.8, 8.1);
    addSubGold(bast2Start + 2.7, 8.1);

    // 4. Build 3 Distinct Procedural Challenge Sectors (8 Unique Sector Mechanics!)
    // Consecutive levels NEVER share the same 3-sector sequence!
    const sectorStarts = [sec0Start, sec1Start, sec2Start];
    const poolByTier = diffTier === 1
        ? [0, 1, 2, 4, 6, 7]
        : [0, 1, 2, 3, 4, 5, 6, 7];

    for (let sec = 0; sec < 3; sec++) {
        const sx = sectorStarts[sec];
        const sw = secW;
        const seed = levelIndex * 7 + sec * 13 + (isTrollMode ? 31 : 0);
        const mechIdx = (levelIndex * 2 + sec * 3 + (isTrollMode ? 1 : 0)) % poolByTier.length;
        const sectorType = poolByTier[mechIdx];
        const altSurface = (seed % 3 === 0) ? subTheme.surface : "normal";
        const yVar = ((seed % 3) - 1) * 0.35; // -0.35, 0, +0.35 vertical variation

        if (sectorType === 0) {
            // SECTOR TYPE 0: Basamaklı Teraslar & Muhafız Koridoru (Stepped Terraces & Guardian Run)
            addSubSolid(sx, 9.2, sw, 2.3, "ground", altSurface);
            const p1Y = 6.5 + yVar;
            const p2Y = 4.6 - yVar * 0.5;
            const p3Y = 6.3 - yVar;
            addSubSolid(sx + 0.8, p1Y, 3.4, 0.8, "platform", altSurface);
            addSubSolid(sx + 4.8, p2Y, 3.6, 0.8, "platform", "normal");
            addSubSolid(sx + 9.0, p3Y, 3.2, 0.8, "platform", altSurface);

            const enType = diffTier === 1 ? "slime" : (seed % 2 === 0 ? "crawler" : "sentinel");
            addSubEnemy(sx + 6.5, 8.2, enType, sx + 1.2, sx + sw - 1.2, 0.95 + diffTier * 0.06);

            addSubStar(sx + 2.5, p1Y - 1.1);
            addSubStar(sx + 6.6, p2Y - 1.1);
            addSubGold(sx + 4.2, 8.1);
            addSubGold(sx + 8.8, 8.1);
            addSubGold(sx + 10.6, p3Y - 1.1);
        } else if (sectorType === 1) {
            // SECTOR TYPE 1: Süper Trambolin & Yüksek Köprü Hendekleri (Super Trampoline & Sky Bridges)
            addSubPitHazard(sx, sw);
            jumpPads.push({
                x: (cx + sx - 1.1) * TILE_SIZE,
                y: (cy + 9.2) * TILE_SIZE - 22,
                w: 58,
                h: 22,
                boostVy: -24.5,
                anim: 0
            });
            const b1Y = 6.4 + yVar;
            const b2Y = 4.6 - yVar * 0.5;
            const b3Y = 6.6 - yVar;
            addSubSolid(sx + 1.4, b1Y, 3.4, 0.85, "platform", altSurface);
            addSubSolid(sx + 5.4, b2Y, 3.6, 0.85, "platform", "normal");
            addSubSolid(sx + 9.5, b3Y, 2.8, 0.85, "platform", altSurface);

            addSubEnemy(sx + 7.0, b2Y - 1.0, diffTier === 1 ? "slime" : "crawler", sx + 5.6, sx + 8.7, 1.0);
            addSubStar(sx + 3.1, b1Y - 1.2);
            addSubStar(sx + 7.2, b2Y - 1.2);
            addSubGold(sx + 0.5, 5.8);
            addSubGold(sx + 10.9, b3Y - 1.2);
        } else if (sectorType === 2) {
            // SECTOR TYPE 2: Hareketli Siber Asansör Köprüleri (Synchronized Moving Cyber-Lifts)
            addSubPitHazard(sx, sw);
            movingPlatforms.push({
                x: (cx + sx + 0.8) * TILE_SIZE,
                y: (cy + 7.6) * TILE_SIZE,
                startX: (cx + sx + 0.8) * TILE_SIZE,
                startY: (cy + 7.6) * TILE_SIZE,
                endX: (cx + sx + 4.4) * TILE_SIZE,
                endY: (cy + 5.8 + yVar) * TILE_SIZE,
                w: 3.1 * TILE_SIZE,
                h: 22,
                speed: 1.25 + diffTier * 0.08
            });
            addSubSolid(sx + 5.2, 5.6 + yVar, 2.8, 0.85, "platform", altSurface);
            movingPlatforms.push({
                x: (cx + sx + 8.4) * TILE_SIZE,
                y: (cy + 6.0) * TILE_SIZE,
                startX: (cx + sx + 8.4) * TILE_SIZE,
                startY: (cy + 5.8 - yVar) * TILE_SIZE,
                endX: (cx + sx + 10.2) * TILE_SIZE,
                endY: (cy + 7.8) * TILE_SIZE,
                w: 3.0 * TILE_SIZE,
                h: 22,
                speed: 1.3 + diffTier * 0.08
            });

            addSubStar(sx + 3.2, 5.2);
            addSubStar(sx + 6.6, 4.4 + yVar);
            addSubGold(sx + 6.0, 4.4 + yVar);
            addSubGold(sx + 9.8, 5.0);
        } else if (sectorType === 3) {
            // SECTOR TYPE 3: Çöken Taş Köprüler & Sarkıt Geçidi (Crumble Bridges & Falling Stalactites)
            addSubPitHazard(sx, sw);
            for (let cIdx = 0; cIdx < 3; cIdx++) {
                const cGx = sx + 0.9 + cIdx * 4.0;
                const cGy = 7.6 - (cIdx % 2) * 1.3 + yVar * 0.5;
                crumblePlatforms.push({
                    x: (cx + cGx) * TILE_SIZE,
                    y: (cy + cGy) * TILE_SIZE,
                    w: 2.7 * TILE_SIZE,
                    h: 22
                });
                if (diffTier >= 2 && stalactites) {
                    stalactites.push({
                        x: (cx + cGx + 1.1) * TILE_SIZE,
                        y: (cy + 1.0) * TILE_SIZE,
                        isSubChamberStalactite: true
                    });
                }
            }
            addSubStar(sx + 2.2, 6.2);
            addSubStar(sx + 6.2, 4.9);
            addSubGold(sx + 10.2, 6.2);
        } else if (sectorType === 4) {
            // SECTOR TYPE 4: Dikey Rüzgar Türbini & Gökyüzü Balkonu (Updraft Wind Fan & High Catwalk)
            addSubPitHazard(sx, sw);
            addSubSolid(sx + 0.6, 7.6, 2.8, 0.85, "platform", "normal");
            windZones.push({
                x: (cx + sx + 3.6) * TILE_SIZE,
                y: (cy + 2.0) * TILE_SIZE,
                w: 4.2 * TILE_SIZE,
                h: 8.2 * TILE_SIZE,
                forceX: 0.16,
                forceY: -0.74,
                fanSide: "bottom"
            });
            const catY = 4.8 + yVar * 0.5;
            addSubSolid(sx + 7.8, catY, 4.6, 0.85, "platform", altSurface);
            addSubEnemy(sx + 10.0, catY - 1.0, diffTier <= 2 ? "sentinel" : "golem", sx + 8.0, sx + 12.0, 1.05);

            addSubStar(sx + 5.6, 4.2);
            addSubStar(sx + 9.8, catY - 1.2);
            addSubGold(sx + 2.0, 6.4);
            addSubGold(sx + 11.2, catY - 1.2);
        } else if (sectorType === 5) {
            // SECTOR TYPE 5: Zamanlamalı Lazer Güvenlik Kalesi (Timed Laser Security Corridor)
            addSubSolid(sx, 9.2, sw, 2.3, "ground", altSurface);
            addSubSolid(sx + 2.2, 5.4, sw - 4.4, 0.85, "platform", "normal");
            laserGates.push({
                x: (cx + sx + 4.2) * TILE_SIZE,
                y: (cy + 5.4) * TILE_SIZE,
                w: 18,
                h: 3.8 * TILE_SIZE,
                period: Math.max(105, 145 - diffTier * 8),
                onDuration: 50,
                phase: sec * 35
            });
            laserGates.push({
                x: (cx + sx + 8.8) * TILE_SIZE,
                y: (cy + 1.2) * TILE_SIZE,
                w: 18,
                h: 4.2 * TILE_SIZE,
                period: Math.max(105, 145 - diffTier * 8),
                onDuration: 50,
                phase: sec * 35 + 60
            });
            addSubEnemy(sx + 6.5, 8.2, "golem", sx + 4.8, sx + 11.5, 1.05);

            addSubStar(sx + 6.4, 4.2);
            addSubStar(sx + 10.4, 8.0);
            addSubGold(sx + 2.4, 8.0);
            addSubGold(sx + 7.6, 4.2);
        } else if (sectorType === 6) {
            // SECTOR TYPE 6: Düşük Yerçekimi Uzay Anomalisi (Low-Gravity Star Field & Saw)
            addSubPitHazard(sx, sw, "electric");
            if (gravityZones) {
                gravityZones.push({
                    x: (cx + sx) * TILE_SIZE,
                    y: (cy + 1.2) * TILE_SIZE,
                    w: sw * TILE_SIZE,
                    h: 8.6 * TILE_SIZE
                });
            }
            addSubSolid(sx + 1.2, 7.0 + yVar, 3.2, 0.85, "platform", "normal");
            addSubSolid(sx + 5.6, 4.8 - yVar, 3.2, 0.85, "platform", altSurface);
            addSubSolid(sx + 9.6, 6.8 + yVar, 2.6, 0.85, "platform", "normal");

            if (diffTier >= 2) {
                const sawWorldX = (cx + sx + 5.0) * TILE_SIZE;
                saws.push({
                    x: sawWorldX,
                    y: (cy + 4.5) * TILE_SIZE,
                    r: 21,
                    startX: sawWorldX,
                    endX: sawWorldX,
                    startY: (cy + 2.4) * TILE_SIZE,
                    endY: (cy + 8.0) * TILE_SIZE,
                    speed: 1.35
                });
            }
            addSubStar(sx + 2.8, 5.6);
            addSubStar(sx + 7.2, 3.4);
            addSubGold(sx + 10.8, 5.4);
        } else {
            // SECTOR TYPE 7: Solucan Deliği Portal & Çift Katlı Mahzen (Wormhole Teleporter Vault)
            addSubSolid(sx, 9.2, sw, 2.3, "ground", "normal");
            addSubSolid(sx + 5.8, 4.4, 1.4, 4.8, "wall");
            addSubSolid(sx + 1.5, 4.4, 9.8, 0.85, "platform", altSurface);
            if (teleporters) {
                teleporters.push({
                    x1: (cx + sx + 3.6) * TILE_SIZE,
                    y1: (cy + 9.2) * TILE_SIZE - 56,
                    x2: (cx + sx + 2.6) * TILE_SIZE,
                    y2: (cy + 4.4) * TILE_SIZE - 56,
                    color: subTheme.border
                });
            }
            addSubEnemy(sx + 9.2, 8.2, diffTier === 1 ? "slime" : "sentinel", sx + 7.4, sx + sw - 1.0, 1.0);
            addSubStar(sx + 6.5, 3.2);
            addSubStar(sx + 9.2, 3.2);
            addSubGold(sx + 8.2, 8.0);
            addSubGold(sx + 10.6, 8.0);
        }

        // Troll Mode Exclusive Surprise inside Underground Sub-Chamber Sectors!
        if (isTrollMode && sec === 1 && trollSpringTraps) {
            trollSpringTraps.push({
                x: (cx + bast1Start + 2.2) * TILE_SIZE,
                y: (cy + 9.2) * TILE_SIZE - 12,
                w: 52,
                h: 18,
                boostVy: -20.5,
                boostVx: 4.2,
                triggeredCount: 0
            });
        }
    }

    const missionType = subTheme.id;
    const goal = diffTier <= 2 ? 5 : 6;

    const arrivalX = (cx + 1.8) * TILE_SIZE;
    const arrivalY = (cy + 9.2) * TILE_SIZE - 72;
    const outX = (cx + rightDeckStart + 1.8) * TILE_SIZE;
    const outY = (cy + 9.2) * TILE_SIZE - 72;

    return {
        x: cx * TILE_SIZE,
        y: cy * TILE_SIZE,
        w: cw * TILE_SIZE,
        h: ch * TILE_SIZE,
        diffTier,
        missionType,
        themeId: subTheme.id,
        themeBorder: subTheme.border,
        themeGrid: subTheme.grid,
        themeBg0: subTheme.bg0,
        themeBg1: subTheme.bg1,
        themeBg2: subTheme.bg2,
        goal,
        progress: 0,
        completed: false,
        visited: false,
        cooldown: 0,
        exitHoldTimer: 0,
        rideState: "idle",
        rideProgress: 0,
        cabinX: pipeInX,
        cabinY: mainGroundY - 72,
        prevCabinX: pipeInX,
        prevCabinY: mainGroundY - 72,
        doorOpen: 1,
        pipeIn: {
            x: pipeInX,
            y: mainGroundY - 72,
            w: 62,
            h: 72
        },
        pipeReturn: {
            x: pipeReturnX,
            y: mainGroundY - 72,
            w: 62,
            h: 72
        },
        pipeArrival: {
            x: arrivalX,
            y: arrivalY,
            w: 62,
            h: 72
        },
        pipeOut: {
            x: outX,
            y: outY,
            w: 62,
            h: 72
        },
        spawnX: arrivalX + 70,
        spawnY: (cy + 9.2) * TILE_SIZE - 54,
        exitToMainX: pipeReturnX + 68,
        exitToMainY: mainGroundY - 54
    };
}

window.TILE_SIZE = TILE_SIZE;
window.LEVEL_INFO = LEVEL_INFO;
window.createLevelData = createLevelData;

// ============================================================================
// 😡 50-LEVEL TROLL MODE CAMPAIGN (TROL MODU - 50 SÜRPRİZLİ BÖLÜM)
// Kolaydan zora doğru kademeli zorlaşan, ilerledikçe şaşırtıcı sürprizleri artan 50 Trol Bölümü!
// ============================================================================
const TROLL_LEVEL_RAW = [
    // KADEME 1 (1-10): KOLAY / ISINMA TROLÜ
    ["Sahte Başlangıç", "Trol Bölüm 1: Masum Görünen Yol", "Isınma Trolü! Bazı zeminler basınca çöker (-3♥) ve ortadaki [?] kutusu Uranyum Bombası yağdırır! Üst güvenli platformları kullan.", "#ff2a85"],
    ["Uranyum Sürprizi", "Trol Bölüm 2: Uranyum Kutusu Tuzağı", "Üç [?] kutusundan ikisi güç verir, biri Uranyum yağdırır! İlerideki parlayan sahte zümrüte dokunursan en başa ışınlanırsın!", "#ff5400"],
    ["Kaçan Portal", "Trol Bölüm 3: Kaçan Bitiş Portalı", "Sürpriz! Bitiş portalına yaklaştığında portal bir kez kahkaha atıp ileri kaçar! Onu yakalamaya hazır ol.", "#06d6a0"],
    ["Çöken Köprü", "Trol Bölüm 4: Hain Taş Köprü", "Köprünün ortasındaki tuzak taşlar aniden çöker! Gizli trol yayına basarsan havaya fırlarsın.", "#ffd166"],
    ["Trol Muhafız ☠", "Trol Bölüm 5: Trol Kralı Muhafız (Boss 1)", "1. Trol Boss Savaşı! Arenanın ortasındaki çöken zemine ve sahte zümrüte düşmeden Boss'u ez!", "#ff2a85"],
    ["Şaka Yayları", "Trol Bölüm 6: Gizli Sıçrama Yayları", "Yerdeki gizli trol yayları seni hiç beklemediğin anda gökyüzüne fırlatır! Havada kontrolü kaybetme.", "#38b000"],
    ["Başa Sar!", "Trol Bölüm 7: Başa Saran Zümrüt", "Gerçek zümrütler üst platformda, en başa ışınlayan sahte zümrütler ise tam ayağının altında!", "#b537f2"],
    ["Gökten Pusu", "Trol Bölüm 8: Gökten Düşen Sürpriz", "Sakin görünen koridorda yürürken bir anda gökten trol düşmanları paraşütle önüne düşer!", "#00f2fe"],
    ["Üçlü Şaka", "Trol Bölüm 9: Üçlü Şaka Koridoru", "Çöken zemin, Uranyum kutusu ve kaçan portal aynı bölümde! Adımlarını dikkatli at.", "#ff5400"],
    ["Nükleer Cellat ☠", "Trol Bölüm 10: Nükleer Cellat (Boss 2)", "2. Trol Boss Savaşı! Boss zıplarken gökten sürpriz pusu düşmanları ve uranyum tuzakları seni bekliyor!", "#ff2a85"],

    // KADEME 2 (11-20): ORTA / ŞAŞIRTMACALI TROL
    ["Sahte Bayrak", "Trol Bölüm 11: Sahte Kayıt Bayrağı!", "Yeni Sürpriz! İlk gördüğün kayıt bayrağı (Checkpoint) sahtedir ve konfeti patlatıp seni zıplatır! Gerçek bayrak ileridedir.", "#ffd166"],
    ["Ters Rüzgar", "Trol Bölüm 12: Şakacı Trol Rüzgarı", "Uçurumun üzerinden zıplarken aniden esen ters trol rüzgarı seni geriye doğru savurmaya çalışır!", "#00f2fe"],
    ["Atom Yağmuru", "Trol Bölüm 13: Radyoaktif Bulutlar", "Yanlış [?] kutularına kafa atarsan gökten peş peşe Uranyum Bombaları yağar!", "#38b000"],
    ["Çifte Pusu", "Trol Bölüm 14: İkili Gök Pususu", "Altınların yanına yaklaştığın anda yukarıdan 2 sürpriz muhafız birden iner!", "#b537f2"],
    ["Kaos Golemi ☠", "Trol Bölüm 15: Kaos Trol Golemi (Boss 3)", "3. Trol Boss Savaşı! Arenadaki gizli fırlatma yaylarını kullanarak Boss'un kafasına bin!", "#ff2a85"],
    ["Serap Köprüsü", "Trol Bölüm 16: İkiz Tuzak Köprüsü", "Peş peşe iki çöken zemin ve ortada sahte kayıt bayrağı! Üstteki hareketli platformu yakala.", "#ff5400"],
    ["Kaçak Çıkış", "Trol Bölüm 17: İnatçı Bitiş Portalı", "Bu bölümde bitiş portalı senden 2 kez üst üste kaçar! Sabrını koru ve peşinden koş.", "#06d6a0"],
    ["Zümrüt Mayını", "Trol Bölüm 18: Zümrüt Mayın Tarlası", "Yerdeki parlayan sahte zümrütlerin arasından zıplayarak geç, mıknatısın sadece gerçekleri çeker!", "#ffd166"],
    ["Fırtına Koridoru", "Trol Bölüm 19: Savuran Trol Fırtınası", "Zıpladığın anda devreye giren rüzgar akımlarına ve gökten düşen pusulara dikkat et!", "#00f2fe"],
    ["Siber Soytarı ☠", "Trol Bölüm 20: Siber Trol Soytarısı (Boss 4)", "4. Trol Boss Savaşı! Arenadaki sahte kutulara kanmadan Siber Soytarı'yı alt et!", "#ff2a85"],

    // KADEME 3 (21-30): ZOR / KAOS TROLÜ
    ["Sabır Kulesi", "Trol Bölüm 21: Sabır Testi Kulesi", "Zorlu Kademe Başladı! Çöken basamaklar, gizli yaylar ve gökten inen nöbetçiler bir arada!", "#b537f2"],
    ["Lazer Şakası", "Trol Bölüm 22: Sürpriz Lazer Geçidi", "Lazer kapılarının hemen önündeki gizli trol yayları seni havaya fırlatmak için pusuda!", "#ff0055"],
    ["Sahte İkizler", "Trol Bölüm 23: Sahte Bayrak Labirenti", "Sahte kayıt bayrağını geçip gerçek kayıt noktasına ulaş, sahte zümrütlere sakın değme!", "#06d6a0"],
    ["Bomba Koridoru", "Trol Bölüm 24: Uranyum ve Testere", "Dönen testerelerin üzerindeki [?] kutularından hangisi gerçek kalkan, hangisi Uranyum?", "#38b000"],
    ["Testere Lordu ☠", "Trol Bölüm 25: Trol Testere Lordu (Boss 5)", "5. Trol Boss Savaşı! Yarı yolu geçtin! Boss arenasında hem testereler hem çöken zeminler var!", "#ff2a85"],
    ["Uçan Tuzak", "Trol Bölüm 26: Hızlanan Platformlar", "Üzerine bastığında seni şaşırtan platformlar ve ani rüzgar koridorları!", "#00f2fe"],
    ["Üçlü Kaçış", "Trol Bölüm 27: Yakalanmaz Portal", "Portal tam bitti derken tekrar kaçar! Kaçtığı yoldaki çöken zemine basmadan üzerinden atla.", "#ffd166"],
    ["Hava İndirmesi", "Trol Bölüm 28: Trol Hava İndirmesi", "Köprüye adım attığın anda gökten 3 kişilik trol devriyesi iner! Ateş topunu hazır tut.", "#ff5400"],
    ["Ters Köşe", "Trol Bölüm 29: Ters Köşe Viyadüğü", "Gizli geri fırlatma yayları ve başa ışınlayan zümrütlerle dolu zeka testi!", "#b537f2"],
    ["Gölge Trolü ☠", "Trol Bölüm 30: Gölge Trol Komutanı (Boss 6)", "6. Trol Boss Savaşı! Gökyüzünden pusu indiren Gölge Trol Komutanı'nı yen!", "#ff2a85"],

    // KADEME 4 (31-40): UZMAN / SİNİR KRİZİ TROLÜ
    ["Sinir Krizi", "Trol Bölüm 31: Sinir Krizi Başlangıcı", "Uzman Trol Kademesi! Her adımda yeni bir şaşırtmaca: Sahte bayrak, pusu, rüzgar ve çöken taşlar!", "#ff2a85"],
    ["Radyoaktif Köprü", "Trol Bölüm 32: Radyoaktif Çöküş", "Uranyum kutuları ve çöken köprüler iç içe! Üstteki dar güvenlik platformlarını kaçırma.", "#38b000"],
    ["Kasırga Şakası", "Trol Bölüm 33: Trol Kasırgası", "Havada yön değiştiren rüzgar şakaları ve lazer kapılarıyla dolu yüksek gerilim hattı!", "#00f2fe"],
    ["Zümrüt İhaneti", "Trol Bölüm 34: Büyük Zümrüt İhaneti", "Gerçek ve sahte zümrütler şaşırtmalı dizildi! Yanlış adım seni başlangıç noktasına uçurur.", "#06d6a0"],
    ["Magma Trolü ☠", "Trol Bölüm 35: Magma Trol Titanı (Boss 7)", "7. Trol Boss Savaşı! Kızgın arena zeminindeki tuzaklara düşmeden Magma Titanı'nı devir!", "#ff2a85"],
    ["Dörtlü Kapan", "Trol Bölüm 36: Dörtlü Sürpriz Kapanı", "Çöken yer + Gizli Yay + Gök Pususu + Sahte Bayrak! Dördü birden aynı vadide!", "#ffd166"],
    ["Hayalet Zemin", "Trol Bölüm 37: Hain Boşluklar", "Uzun koridorda peş peşe 4 farklı tuzak zemin! Hangi taşın sağlam olduğunu dikkatle takip et.", "#b537f2"],
    ["Nükleer Fırtına", "Trol Bölüm 38: Nükleer Rüzgar Fırtınası", "Ters rüzgar eserken yanlış kutuya vurursan Uranyum yağmuru altında kalırsın!", "#38b000"],
    ["Son Saniye", "Trol Bölüm 39: Son Saniye Şakası", "Portalın önünde hem sahte zümrüt hem çöken zemin var, üstelik portal 2 kez kaçıyor!", "#ff5400"],
    ["Plazma Trolü ☠", "Trol Bölüm 40: Plazma Trol Tiranı (Boss 8)", "8. Trol Boss Savaşı! Elektrikli ve tuzaklı arenada Plazma Tiranı ile yüzleş!", "#ff2a85"],

    // KADEME 5 (41-50): EFSANEVİ / TROL KABUSU
    ["Kabus Kapısı", "Trol Bölüm 41: Trol Kabusuna Giriş", "Son 10 Bölüm! Efsanevi Trol Kabusu kademesinde sürprizlerin sayısı maksimuma çıkıyor!", "#ff0055"],
    ["Beşli İhanet", "Trol Bölüm 42: Beşli İhanet Hattı", "Adım attığın her bölgede ayrı bir trol sürprizi! Reflekslerini ve hafızanı birleştir.", "#b537f2"],
    ["Gökyüzü Ordusu", "Trol Bölüm 43: Gökten Yağan Ordu", "Üç ayrı pusu noktasında gökten inen trol muhafızları ve hızla dönen testereler!", "#00f2fe"],
    ["Sahte Cennet", "Trol Bölüm 44: Sahte Hazine Cenneti", "Her yer zümrüt ve kutu dolu ama yarısı en başa ışınlar, yarısı Uranyum yağdırır!", "#06d6a0"],
    ["Hiçlik Trolü ☠", "Trol Bölüm 45: Hiçlik Trol Gardiyanı (Boss 9)", "9. Trol Boss Savaşı! Büyük final öncesi en tehlikeli Trol Gardiyanı!", "#ff2a85"],
    ["Kaos Senfonisi", "Trol Bölüm 46: Tam Kaos Senfonisi", "Gizli yaylar, ters rüzgarlar, sahte bayraklar ve çöken zeminlerin en çılgın birleşimi!", "#ffd166"],
    ["Üç Kez Kaçar!", "Trol Bölüm 47: Üç Kez Kaçan Portal!", "Bu bölümde bitiş portalı senden tam 3 KEZ kaçar! Her kaçışta yeni bir sürpriz açılır.", "#ff5400"],
    ["Atomik Cehennem", "Trol Bölüm 48: Atomik Trol Cehennemi", "Lazerler, testereler, uranyum kutuları ve çöken köprülerle dolu usta işi parkur!", "#38b000"],
    ["Finale Ramak", "Trol Bölüm 49: 50. Bölüme Son Adım", "Büyük Trol Finali öncesi son sınav! 3 kez kaçan portalı yakala ve efsaneye adını yazdır!", "#00f2fe"],
    ["Trol İmparatoru 👑", "Trol Bölüm 50: Trol İmparatoru Omega (BÜYÜK FİNAL)", "50. TROL BÖLÜMÜ BÜYÜK FİNALİ! Tüm trol sürprizlerinin efendisi Trol İmparatoru Omega'yı yen ve Trol Tacını kazan!", "#ff2a85"]
];

const TROLL_LEVEL_INFO = TROLL_LEVEL_RAW.map((row, idx) => {
    const lvlNum = idx + 1;
    const isBoss = lvlNum % 5 === 0;
    const tierNum = Math.floor(idx / 10) + 1;
    const tierNames = ["ISINMA", "TUZAKLI", "KAOS", "SİNİR KRİZİ", "TROL KABUSU"];
    return {
        id: idx,
        world: lvlNum === 50 ? `👑 TROL FİNAL 50/50` : `😡 TROL ${lvlNum}/50 • ${tierNames[tierNum - 1]}`,
        shortName: row[0],
        name: row[1],
        desc: row[2],
        themeColor: row[3],
        tier: tierNum,
        isBossLevel: isBoss,
        isTroll: true
    };
});

function createTrollLevelData(trollIndex) {
    const idx = Math.max(0, Math.min(49, Number(trollIndex) || 0));
    const lvlNum = idx + 1;
    const tier = Math.floor(idx / 10) + 1; // 1 (Easy) .. 5 (Nightmare)
    const info = TROLL_LEVEL_INFO[idx] || TROLL_LEVEL_INFO[0];

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
    const signs = [];
    const jumpPads = [];
    const windZones = [];
    const laserGates = [];
    const trollSpringTraps = [];
    const trollAmbushZones = [];
    let portal = { x: 3200, y: 400, trollDodgeCount: 0, trollDodgesRemaining: 0 };
    let bossConfig = null;

    const addGround = (gx, gy, gw, gh = 4, type = 'ground', isTrollTrapFloor = false) => {
        solids.push({
            x: gx * TILE_SIZE,
            y: gy * TILE_SIZE,
            w: gw * TILE_SIZE,
            h: gh * TILE_SIZE,
            type,
            isTrollTrapFloor,
            trollCollapsed: false
        });
    };

    const addSaw = (gx, gy, endGx = null, endGy = null, speed = 2.2, r = 22) => {
        const sx = gx * TILE_SIZE;
        const sy = gy * TILE_SIZE;
        saws.push({
            x: sx,
            y: sy,
            r,
            startX: sx,
            endX: endGx !== null ? endGx * TILE_SIZE : sx,
            startY: sy,
            endY: endGy !== null ? endGy * TILE_SIZE : sy,
            speed
        });
    };

    if (info.isBossLevel) {
        // ====================================================================
        // 👑 TROLL BOSS LEVELS (5, 10, 15, 20, 25, 30, 35, 40, 45, 50)
        // Escalates HP, Arena Traps, Spring Launches, Sky Ambushes & Dodging Portal!
        // ====================================================================
        const bossOrder = Math.floor(lvlNum / 5); // 1..10
        const bossHp = 10 + bossOrder * 3; // 13 HP on Level 5 -> 40 HP on Level 50

        // Arena Floor with 1 or 2 Collapsing Trap Sections!
        addGround(0, 12, 19, 5, 'ground', false);
        addGround(19, 12, 4.2, 5, 'ground', true); // TRAP FLOOR #1
        if (tier >= 3) {
            addGround(23.2, 12, 10, 5, 'ground', false);
            addGround(33.2, 12, 3.8, 5, 'ground', true); // TRAP FLOOR #2 in higher boss arenas!
            addGround(37.0, 12, 15, 5, 'ground', false);
        } else {
            addGround(23.2, 12, 28.8, 5, 'ground', false);
        }

        addGround(0, 0, 2, 12, 'wall');
        addGround(50, 0, 2, 12, 'wall');

        signs.push({
            x: 240,
            y: 12 * TILE_SIZE - 55,
            text: `😡 ${info.name}: Çöken Zeminlere (-3♥), Uranyum Kutusuna (☢️), Sahte Zümrüte ve Sürpriz Pusulara Dikkat!`
        });

        // Mystery Boxes: Safe powerups + Uranium Trap Box
        mysteryBlocks.push({ x: 5.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'shield' });
        mysteryBlocks.push({ x: 7.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'troll_uranium' });
        mysteryBlocks.push({ x: 9.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'fire' });
        if (tier >= 2) {
            mysteryBlocks.push({ x: 11.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: 'speed' });
        }

        // Real Checkpoint before Arena
        checkpoints.push({ x: 13 * TILE_SIZE, y: 12 * TILE_SIZE - 64, isTrollFakeCheckpoint: false });

        // Safe Upper Platforms for Boss Stomping & Avoiding Trap Floors
        addGround(16.5, 8.8, 5, 0.7, 'platform', false);
        addGround(23.5, 6.8, 5.5, 0.7, 'platform', false);
        addGround(31.5, 8.8, 5, 0.7, 'platform', false);
        addGround(39.5, 7.2, 4.5, 0.7, 'platform', false);

        // Hidden Troll Spring Trap in Boss Arena (helps or surprises player mid-fight!)
        trollSpringTraps.push({
            x: 27.5 * TILE_SIZE,
            y: 12 * TILE_SIZE - 12,
            w: 56,
            h: 18,
            boostVy: -22.5,
            boostVx: -3.5,
            triggeredCount: 0
        });

        // Sky Ambush in Boss Arena on Tier >= 2
        if (tier >= 2) {
            trollAmbushZones.push({
                triggerX: 25 * TILE_SIZE,
                triggered: false,
                count: Math.min(2, tier - 1),
                enemyType: tier >= 4 ? 'sentinel' : 'crawler',
                spawnY: 2.5 * TILE_SIZE,
                groundY: 11 * TILE_SIZE
            });
        }

        // Real Emeralds on upper platforms + 1 Fake Teleport Emerald bait
        coins.push({ x: 18.8 * TILE_SIZE, y: 8.8 * TILE_SIZE - 34, type: 'emerald', isTrollTeleport: false });
        coins.push({ x: 26.2 * TILE_SIZE, y: 6.8 * TILE_SIZE - 34, type: 'emerald', isTrollTeleport: false });
        coins.push({ x: 34.0 * TILE_SIZE, y: 8.8 * TILE_SIZE - 34, type: 'emerald', isTrollTeleport: true }); // FAKE EMERALD BAIT!
        coins.push({ x: 41.5 * TILE_SIZE, y: 7.2 * TILE_SIZE - 34, type: 'emerald', isTrollTeleport: false });

        bossConfig = {
            name: info.name.toUpperCase(),
            hp: bossHp,
            x: 36 * TILE_SIZE,
            y: 12 * TILE_SIZE - 110,
            minX: 15 * TILE_SIZE,
            maxX: 46 * TILE_SIZE,
            variant: ((bossOrder - 1) % 3) + 1,
            bossType: ((bossOrder - 1) % 12) + 1,
            isWorldLord: true
        };
        const bossPortalDodges = tier >= 4 ? 2 : 1;
        portal = {
            x: 28 * TILE_SIZE,
            y: 12 * TILE_SIZE - 86,
            lockedUntilBossDead: true,
            trollDodgeCount: bossPortalDodges,
            trollDodgesRemaining: bossPortalDodges
        };
    } else {
        // ====================================================================
        // 🤡 REGULAR TROLL LEVELS (1..50, Escalating Easy -> Hard -> Nightmare)
        // Each level builds a progressively longer multi-stage gauntlet of surprises!
        // ====================================================================
        const numSegments = 3 + Math.floor(idx / 10); // 3 segments in Tier 1 -> 7 segments in Tier 5!

        // Start Safe Zone + Opening Mystery Trio
        addGround(0, 12, 13, 5, 'ground', false);
        addGround(0, 0, 1.5, 12, 'wall', false);

        signs.push({
            x: 220,
            y: 12 * TILE_SIZE - 55,
            text: `😡 ${info.name} (Kademe ${tier}/5): İlerledikçe Sürprizler Artar! Çöken Zemin, Uranyum [?], Sahte ❖, Pusu ve Kaçan Portal!`
        });

        // Opening [?] Boxes: which one is Uranium rotates by idx so player must stay alert!
        const uraniumSlot = idx % 3;
        const safePower1 = idx % 2 === 0 ? 'fire' : 'shield';
        const safePower2 = idx % 2 === 0 ? 'shield' : 'speed';
        mysteryBlocks.push({ x: 5.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: uraniumSlot === 0 ? 'troll_uranium' : safePower1 });
        mysteryBlocks.push({ x: 7.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: uraniumSlot === 1 ? 'troll_uranium' : 'fire' });
        mysteryBlocks.push({ x: 9.5 * TILE_SIZE, y: 8.5 * TILE_SIZE, content: uraniumSlot === 2 ? 'troll_uranium' : safePower2 });

        let curX = 13;
        let curY = 12;

        for (let seg = 0; seg < numSegments; seg++) {
            const segSeed = idx * 7 + seg * 13;
            const groundY = 11.5 - ((seg + idx) % 2) * 0.5;
            curY = groundY;

            // 1. Collapsing Trap Floor with Safe Upper Bypass Platform
            const trapWidth = Math.min(4.8, 3.4 + tier * 0.25);
            addGround(curX, groundY, trapWidth, 5.5, 'ground', true); // COLLAPSING TRAP FLOOR!
            // Safe upper platform over the collapsing floor
            const upperY = groundY - 3.3;
            addGround(curX - 0.5, upperY, trapWidth + 1.4, 0.8, 'platform', false);
            // Real emerald on the upper safe route!
            coins.push({
                x: (curX + trapWidth * 0.5) * TILE_SIZE,
                y: upperY * TILE_SIZE - 34,
                type: 'emerald',
                isTrollTeleport: false
            });
            curX += trapWidth;

            // 2. Main Segment Corridor (Segment 0 includes a dedicated 4.4-tile open-sky Elevator Plaza!)
            const segOffset = seg === 0 ? 4.4 : 0;
            const segLen = 14 + (seg % 2) * 3 + segOffset;
            addGround(curX, groundY, segLen, 5.5, 'ground', false);

            // Surprise A: Fake Teleport-to-Start Emerald vs Real Emerald
            if (seg % 2 === 0 || tier >= 3) {
                const baitX = curX + segOffset + 3.2;
                coins.push({
                    x: baitX * TILE_SIZE,
                    y: groundY * TILE_SIZE - 34,
                    type: 'emerald',
                    isTrollTeleport: true // TELEPORTS BACK TO START!
                });
                // High safe platform with a real emerald above the bait
                addGround(baitX - 1.2, groundY - 3.6, 3.5, 0.75, 'platform', false);
                coins.push({
                    x: (baitX + 0.4) * TILE_SIZE,
                    y: (groundY - 3.6) * TILE_SIZE - 34,
                    type: 'emerald',
                    isTrollTeleport: false
                });
            }

            // Surprise B: Hidden Troll Spring Launch Trap (Levels 4+)
            if (lvlNum >= 4 && (seg + idx) % 2 === 0) {
                const springX = (curX + segOffset + 6.5) * TILE_SIZE;
                trollSpringTraps.push({
                    x: springX,
                    y: groundY * TILE_SIZE - 12,
                    w: 54,
                    h: 18,
                    boostVy: -21.5 - (tier * 0.8),
                    boostVx: (seg % 2 === 0 ? -4.2 : 4.5),
                    triggeredCount: 0
                });
            }

            // Surprise C: Sky-Drop Ambush Enemies (Levels 6+)
            if (lvlNum >= 6 && (seg === 1 || seg === 3 || tier >= 3)) {
                const ambushX = (curX + segOffset + 8.5) * TILE_SIZE;
                const ambushCount = tier <= 2 ? 1 : (tier <= 4 ? 2 : 3);
                const types = ['crawler', 'golem', 'sentinel'];
                trollAmbushZones.push({
                    triggerX: ambushX,
                    triggered: false,
                    count: ambushCount,
                    enemyType: types[(idx + seg) % types.length],
                    spawnY: (groundY - 7.5) * TILE_SIZE,
                    groundY: (groundY - 1) * TILE_SIZE
                });
            }

            // Surprise D: Extra Uranium vs Power-Up [?] Choice in Mid-Segments
            if (seg % 2 === 1) {
                const mbX = curX + segOffset + 5.5;
                const firstIsUranium = (segSeed % 2 === 0);
                mysteryBlocks.push({
                    x: mbX * TILE_SIZE,
                    y: (groundY - 3.4) * TILE_SIZE,
                    content: firstIsUranium ? 'troll_uranium' : 'shield'
                });
                mysteryBlocks.push({
                    x: (mbX + 2.2) * TILE_SIZE,
                    y: (groundY - 3.4) * TILE_SIZE,
                    content: firstIsUranium ? 'speed' : 'troll_uranium'
                });
            }

            // Surprise E: Sudden Troll Wind Gust while jumping (Levels 11+)
            if (lvlNum >= 11 && seg === Math.floor(numSegments / 2)) {
                windZones.push({
                    x: (curX + segOffset + 7.5) * TILE_SIZE,
                    y: (groundY - 5.5) * TILE_SIZE,
                    w: 3.5 * TILE_SIZE,
                    h: 5.2 * TILE_SIZE,
                    forceX: (idx % 2 === 0 ? -0.52 : 0.55),
                    forceY: -0.45,
                    isTrollWind: true
                });
            }

            // Saws & Patrol Enemies scaling with Tier
            const sawSpeed = 1.25 + tier * 0.25 + (seg * 0.1);
            addSaw(curX + segOffset + 9.5, groundY - 0.2, curX + segLen - 2.0, groundY - 0.2, sawSpeed, 22);

            const enType = seg % 3 === 0 ? 'crawler' : (seg % 3 === 1 ? 'golem' : 'sentinel');
            enemies.push({
                x: (curX + segLen - 3.5) * TILE_SIZE,
                y: (groundY - 1) * TILE_SIZE,
                type: enType,
                minX: (curX + segOffset + 4) * TILE_SIZE,
                maxX: (curX + segLen - 1.5) * TILE_SIZE
            });

            // Laser Gates on Tier 3+ (Levels 21+)
            if (tier >= 3 && seg % 2 === 1) {
                laserGates.push({
                    x: (curX + segLen - 1.8) * TILE_SIZE,
                    y: (groundY - 3.8) * TILE_SIZE,
                    w: 18,
                    h: 3.8 * TILE_SIZE,
                    period: Math.max(76, 120 - tier * 8),
                    onDuration: 42,
                    phase: seg * 30
                });
            }

            curX += segLen;

            // Checkpoints: Fake Decoy Checkpoint vs Real Checkpoint!
            if (seg === 1) {
                if (lvlNum >= 11) {
                    // Fake Checkpoint first, then Real Checkpoint 3.5 tiles later!
                    checkpoints.push({
                        x: (curX - 3.8) * TILE_SIZE,
                        y: groundY * TILE_SIZE - 64,
                        isTrollFakeCheckpoint: true
                    });
                }
                checkpoints.push({
                    x: (curX - 1.2) * TILE_SIZE,
                    y: groundY * TILE_SIZE - 64,
                    isTrollFakeCheckpoint: false
                });
            } else if (seg === 3) {
                checkpoints.push({
                    x: (curX - 1.2) * TILE_SIZE,
                    y: groundY * TILE_SIZE - 64,
                    isTrollFakeCheckpoint: false
                });
            }
        }

        // Final Runway — Extra long so the Running/Dodging Troll Portal has room to jump forward 1-3 times!
        const dodges = lvlNum <= 2 ? 0 : (tier <= 2 ? 1 : (tier <= 4 ? 2 : 3));
        const runwayTiles = 12 + dodges * 5;
        addGround(curX, curY, runwayTiles, 5.5, 'ground', false);

        // One last sneaky collapsing tile or fake emerald before the portal on higher levels
        if (lvlNum >= 8) {
            coins.push({
                x: (curX + 2.2) * TILE_SIZE,
                y: curY * TILE_SIZE - 34,
                type: 'emerald',
                isTrollTeleport: true
            });
        }

        portal = {
            x: (curX + 4.5) * TILE_SIZE,
            y: curY * TILE_SIZE - 86,
            trollDodgeCount: dodges,
            trollDodgesRemaining: dodges
        };
    }

    normalizeLevelCollectibles(
        coins,
        mysteryBlocks,
        solids,
        crumblePlatforms,
        portal,
        Boolean(info && info.isBossLevel),
        hazards,
        teleporters,
        checkpoints,
        saws
    );

    const subChamber = attachSubPlatformChamberToLevel({
        levelIndex: trollIndex,
        isTrollMode: true,
        isBossLevel: Boolean(info && info.isBossLevel),
        solids,
        mysteryBlocks,
        hazards,
        coins,
        enemies,
        movingPlatforms,
        crumblePlatforms,
        saws,
        stalactites,
        gravityZones,
        jumpPads,
        windZones,
        laserGates,
        checkpoints,
        teleporters,
        trollSpringTraps,
        portal
    });

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
        signs,
        jumpPads,
        windZones,
        laserGates,
        trollSpringTraps,
        trollAmbushZones,
        subChamber,
        portal,
        bossConfig
    };
}

window.TROLL_LEVEL_INFO = TROLL_LEVEL_INFO;
window.createTrollLevelData = createTrollLevelData;
