/**
 * Şablon Kütüphanesi - Seed Data
 * Tüm şablonların listesi
 */

// Şablon türleri ve thumbnail bilgileri
const TEMPLATE_TYPES = {
    ifade: {
        label: "İFADE TUTANAĞI",
        subtitle: "Form ile oluşturulur",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            <path d="M15 3v5a2 2 0 002 2h4"/>
            <path d="M12 3v4"/>
        </svg>`,
        color: "#6366f1"
    },
    cagri: {
        label: "ÇAĞRI KÂĞIDI",
        subtitle: "Davet yazısı",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>`,
        color: "#8b5cf6"
    },
    yazi: {
        label: "RESMÎ YAZI",
        subtitle: "Yazışma belgesi",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z"/>
            <path d="M9 9h3m-3 4h6"/>
        </svg>`,
        color: "#10b981"
    },
    rapor: {
        label: "RAPOR",
        subtitle: "İnceleme/Soruşturma",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>`,
        color: "#f59e0b"
    },
    tutanak: {
        label: "TUTANAK",
        subtitle: "Resmi kayıt",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
            <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            <path d="M9 12h6m-6 4h6"/>
        </svg>`,
        color: "#ef4444"
    },
    diger: {
        label: "BELGE",
        subtitle: "Genel şablon",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>`,
        color: "#6b7280"
    }
};

const TEMPLATE_LIBRARY = [
    // Kategori: İfade Tutanakları
    { code: "1.1", name: "Şikayetçi İfade Tutanağı", category: "İfade Tutanakları", type: "ifade", order: 1, implemented: true },
    { code: "1.2", name: "Tanık İfade Tutanağı (Yeminsiz)", category: "İfade Tutanakları", type: "ifade", order: 2, implemented: true },
    { code: "1.3", name: "Tanık İfade Tutanağı (Yeminli)", category: "İfade Tutanakları", type: "ifade", order: 3, implemented: true },
    { code: "1.4.1", name: "Yazılı İfade Tutanağı", category: "İfade Tutanakları", type: "ifade", order: 4, implemented: true },
    { code: "1.4.2", name: "Yazılı İfade Tutanağı (Öğrenci İçin)", category: "İfade Tutanakları", type: "ifade", order: 5, implemented: true },
    { code: "1.5", name: "İtham (Şikâyet) Edilene Ait İfade Tutanağı", category: "İfade Tutanakları", type: "ifade", order: 6, implemented: true },
    { code: "1.6", name: "Hakkında Ön İnceleme Yapılana Ait İfade Tutanakları", category: "İfade Tutanakları", type: "ifade", order: 7, implemented: false },
    { code: "1.6.1", name: "Müdafi Talebi Olmadığında Düzenlenecek İfade Tutanağı", category: "İfade Tutanakları", type: "ifade", order: 8, implemented: true },
    { code: "1.6.2", name: "Müdafi Seçebilecek Durumda Olduğunun Beyan Edilerek Müdafi Kullanılacağı Açıklandığında Düzenlenecek İfade Tutanağı", category: "İfade Tutanakları", type: "ifade", order: 9, implemented: true },

    { code: "1.6.3", name: "Müdafi Seçebilecek Durumda Olmadığının Beyan Edilerek Müdafi Görevlendirilmesi İstenildiğinde Düzenlenecek İfade Tutanağı", category: "İfade Tutanakları", type: "ifade", order: 10, implemented: true },
    { code: "1.6.4", name: "Müdafi Seçemeyeceğini Beyan Üzerine Baro Başkanlığına Yazı Örneği", category: "İfade Tutanakları", type: "yazi", order: 11, implemented: true },
    { code: "1.6.5", name: "Müdafi Seçme Hakkı Kullanıldığında Düzenlenecek İfade Tutanağı", category: "İfade Tutanakları", type: "ifade", order: 12, implemented: true },

    // Kategori: Çağrı Kâğıtları
    { code: "2.1", name: "Disiplin Soruşturmasında Tanığın Yazılı Olarak Davet Edilmesi-Çağrı Kâğıdı", category: "Çağrı Kâğıtları", type: "cagri", order: 1, implemented: true },
    { code: "2.2", name: "Ön İncelemede Tanığın Yazılı Olarak Davet Edilmesi-Çağrı Kâğıdı", category: "Çağrı Kâğıtları", type: "cagri", order: 2, implemented: true },
    { code: "2.3", name: "Disiplin Soruşturması ve Ön İncelemede Çağrı Kâğıdının Tebliğ-Tebellüğ Tutanağı", category: "Çağrı Kâğıtları", type: "tutanak", order: 3, implemented: true },
    { code: "2.4", name: "Ön İncelemede, Çağrı Kâğıdına Rağmen Gelmeyen Tanıkla İlgili Yetkili Mercie Yazılan Yazı", category: "Çağrı Kâğıtları", type: "yazi", order: 4, implemented: true },

    // Kategori: İhbar ve Şikâyetlerle İlgili Tutanak
    { code: "3.1", name: "İhbar ve Şikâyetlerle İlgili Tutanak", category: "İhbar ve Şikâyetlerle İlgili Tutanak", type: "tutanak", order: 1, implemented: true },

    // Kategori: Bilgi ve Belge İsteme Yazıları
    { code: "4.1", name: "Bilgi ve/veya Belge İsteme Yazısı (Varyant 1)", category: "Bilgi ve Belge İsteme Yazıları", type: "yazi", order: 1, implemented: true },
    { code: "4.2", name: "Bilgi ve/veya Belge İsteme Yazısı (Varyant 2)", category: "Bilgi ve Belge İsteme Yazıları", type: "yazi", order: 2, implemented: true },
    { code: "4.3", name: "Bilgi ve/veya Belge İsteme Yazısı (Varyant 3)", category: "Bilgi ve Belge İsteme Yazıları", type: "yazi", order: 3, implemented: true },
    { code: "4.4", name: "Bilgi ve/veya Belge İsteme Yazısı (Varyant 4)", category: "Bilgi ve Belge İsteme Yazıları", type: "yazi", order: 4, implemented: true },

    // Kategori: Bilirkişi
    { code: "5.1", name: "Bilirkişi Görevlendirme Konusunda İlgili Kuruluşa Yazılan Yazı", category: "Bilirkişi", type: "yazi", order: 1, implemented: true },
    { code: "5.2", name: "Bilirkişi Görevlendirme Yazısı", category: "Bilirkişi", type: "yazi", order: 2, implemented: true },
    { code: "5.3", name: "Bilirkişi Ücret Ödeme Yazısı", category: "Bilirkişi", type: "yazi", order: 3, implemented: true },

    // Kategori: Görevden Uzaklaştırma
    { code: "6.1", name: "Soruşturma ve Görevden Uzaklaştırma Tedbiri Alma Oluru", category: "Görevden Uzaklaştırma", type: "yazi", order: 1, implemented: true },
    { code: "6.2", name: "Görevden Uzaklaştırma Tedbirinin Kaldırılması Oluru", category: "Görevden Uzaklaştırma", type: "yazi", order: 2, implemented: true },
    { code: "6.3", name: "Bakanlık Müfettişlerince Görevden Uzaklaştırma Tedbiri Alma", category: "Görevden Uzaklaştırma", type: "yazi", order: 3, implemented: true },
    { code: "6.4", name: "Bakanlık Müfettişlerince Alınan Görevden Uzaklaştırma Tedbirinin Kaldırılması Teklifi", category: "Görevden Uzaklaştırma", type: "yazi", order: 4, implemented: true },
    { code: "6.5", name: "Bakanlık Müfettişlerince Alınan Görevden Uzaklaştırma Tedbirinin Kaldırılması Oluru", category: "Görevden Uzaklaştırma", type: "yazi", order: 5, implemented: true },
    { code: "6.6", name: "Görevden Uzaklaştırmanın Bakanlığa Bildirilmesi ile İlgili Yazı", category: "Görevden Uzaklaştırma", type: "yazi", order: 6, implemented: true },
    { code: "6.7", name: "Görevden Uzaklaştırmanın İlgili Mülki Amire Bildirilmesi ile İlgili Yazı", category: "Görevden Uzaklaştırma", type: "yazi", order: 7, implemented: true },
    { code: "6.8", name: "Görevden Uzaklaştırmanın Birime/Kuruma Bildirilmesi ile İlgili Yazı", category: "Görevden Uzaklaştırma", type: "yazi", order: 8, implemented: true },
    { code: "6.9", name: "Görevden Uzaklaştırma Yazısının Tebliğ ve Tebellüğ Belgesi", category: "Görevden Uzaklaştırma", type: "tutanak", order: 9, implemented: true },

    // Kategori: Naip Görevlendirme ve İstinabe Talimatı
    { code: "7.1", name: "Tanık İçin Naip Tayin Yazısı", category: "Naip Görevlendirme ve İstinabe Talimatı", type: "yazi", order: 1, implemented: true },
    { code: "7.2", name: "Tanık İçin İstinabe Talimatı", category: "Naip Görevlendirme ve İstinabe Talimatı", type: "yazi", order: 2, implemented: true },
    { code: "7.3", name: "İtham/Şikâyet Edilen (Sorumlu Görülen) İçin Naip Tayin Yazısı", category: "Naip Görevlendirme ve İstinabe Talimatı", type: "yazi", order: 3, implemented: true },
    { code: "7.4", name: "İtham/Şikâyet Edilen (Sorumlu Görülen) İçin İstinabe Talimatı", category: "Naip Görevlendirme ve İstinabe Talimatı", type: "yazi", order: 4, implemented: true },

    // Kategori: Yetkilendirme
    { code: "8.1", name: "İnceleme ve Soruşturmalarda Gerektiğinde Grup Adına İfade Alma (Yetkilendirme) Kararı", category: "Yetkilendirme", type: "yazi", order: 1, implemented: true },
    { code: "8.2", name: "İfade Alma Esasları", category: "Yetkilendirme", type: "diger", order: 2, implemented: true },

    // Kategori: Elkoyma Tutanağı
    { code: "9.1", name: "Soruşturmaya Konu Olan Eşyaya Elkoyma Tutanağı", category: "Elkoyma Tutanağı", type: "tutanak", order: 1, implemented: true },

    // Kategori: İmza/Yazı Örneği Tespiti
    { code: "10.1", name: "İmza ve/veya Yazı Tespiti İçin Kriminal Daire Başkanlığına Yazılacak Yazı", category: "İmza/Yazı Örneği Tespiti", type: "yazi", order: 1, implemented: true },
    { code: "10.2", name: "İmza Tetkiki veya Yazı Yazdırılması Tespit Tutanağı", category: "İmza/Yazı Örneği Tespiti", type: "tutanak", order: 2, implemented: true },
    { code: "10.2.1", name: "İmza ve/veya Yazı Örneği Tespit Tutanağı", category: "İmza/Yazı Örneği Tespiti", type: "tutanak", order: 3, implemented: true },

    // Kategori: Ön Rapor
    { code: "11.1", name: "Ön Rapor Kapağı", category: "Ön Rapor", type: "rapor", order: 1, implemented: true },
    { code: "11.2", name: "Ön Rapor", category: "Ön Rapor", type: "rapor", order: 2, implemented: true },

    // Kategori: Olur İstekleri
    { code: "12.1", name: "Disiplin Soruşturması Olur İstek Yazısı (Denetim esnasında)", category: "Olur İstekleri", type: "yazi", order: 1, implemented: true },
    { code: "12.2", name: "Disiplin Soruşturması Olur İstek Yazısı (İnceleme esnasında)", category: "Olur İstekleri", type: "yazi", order: 2, implemented: true },

    // Kategori: İnceleme-Soruşturma Raporu
    { code: "13.1", name: "İnceleme-Soruşturma Rapor Kapağı", category: "İnceleme-Soruşturma Raporu", type: "rapor", order: 1, implemented: true },
    { code: "13.2", name: "İnceleme-Soruşturma Raporu", category: "İnceleme-Soruşturma Raporu", type: "rapor", order: 2, implemented: true },

    // Kategori: Ön İnceleme Raporu
    { code: "14.1", name: "Ön İnceleme Raporu Kapağı", category: "Ön İnceleme Raporu", type: "rapor", order: 1, implemented: true },
    { code: "14.2", name: "Ön İnceleme Raporu", category: "Ön İnceleme Raporu", type: "rapor", order: 2, implemented: true },

    // Kategori: Suç Duyurusu-Tevdi Raporu
    { code: "15.1", name: "Cumhuriyet Başsavcılığına Suç Duyurusu Yazısı/Raporu Kapağı", category: "Suç Duyurusu-Tevdi Raporu", type: "rapor", order: 1, implemented: true },
    { code: "15.2", name: "Cumhuriyet Başsavcılığına Suç Duyurusu Yazısı/Raporu", category: "Suç Duyurusu-Tevdi Raporu", type: "rapor", order: 2, implemented: true },
    { code: "15.3", name: "Diğer Bakanlık Mensupları Suç Duyurusu Yazısı/Raporu Kapağı", category: "Suç Duyurusu-Tevdi Raporu", type: "rapor", order: 3, implemented: true },
    { code: "15.4", name: "Diğer Bakanlık Mensupları ile İlgili Suç Duyurusu Yazısı/Raporu", category: "Suç Duyurusu-Tevdi Raporu", type: "rapor", order: 4, implemented: true },
    { code: "15.5", name: "4483 sayılı Kanuna Göre Yetkili Mercie Tevdi Yazısı/Raporu Kapağı", category: "Suç Duyurusu-Tevdi Raporu", type: "rapor", order: 5, implemented: true },
    { code: "15.6", name: "4483 sayılı Kanuna Göre Yetkili Mercie Yapılacak Tevdi Yazısı/Raporu", category: "Suç Duyurusu-Tevdi Raporu", type: "rapor", order: 6, implemented: true },

    // Kategori: Dizi Pusulası
    { code: "16.1", name: "Dizi Pusulası", category: "Dizi Pusulası", type: "diger", order: 1, implemented: true }
];

// Kategori sıralaması
const CATEGORY_ORDER = [
    "İfade Tutanakları",
    "Çağrı Kâğıtları",
    "İhbar ve Şikâyetlerle İlgili Tutanak",
    "Bilgi ve Belge İsteme Yazıları",
    "Bilirkişi",
    "Görevden Uzaklaştırma",
    "Naip Görevlendirme ve İstinabe Talimatı",
    "Yetkilendirme",
    "Elkoyma Tutanağı",
    "İmza/Yazı Örneği Tespiti",
    "Ön Rapor",
    "Olur İstekleri",
    "İnceleme-Soruşturma Raporu",
    "Ön İnceleme Raporu",
    "Suç Duyurusu-Tevdi Raporu",
    "Dizi Pusulası"
];

// Kategori ikonları
const CATEGORY_ICONS = {
    "İfade Tutanakları": "📝",
    "Çağrı Kâğıtları": "📩",
    "İhbar ve Şikâyetlerle İlgili Tutanak": "📢",
    "Bilgi ve Belge İsteme Yazıları": "📋",
    "Bilirkişi": "🔍",
    "Görevden Uzaklaştırma": "⚠️",
    "Naip Görevlendirme ve İstinabe Talimatı": "📮",
    "Yetkilendirme": "🔐",
    "Elkoyma Tutanağı": "📦",
    "İmza/Yazı Örneği Tespiti": "✍️",
    "Ön Rapor": "📄",
    "Olur İstekleri": "✅",
    "İnceleme-Soruşturma Raporu": "📊",
    "Ön İnceleme Raporu": "📑",
    "Suç Duyurusu-Tevdi Raporu": "⚖️",
    "Dizi Pusulası": "📎"
};

// Yardımcı fonksiyonlar
function getCategories() {
    return CATEGORY_ORDER;
}

function getTemplatesByCategory(category) {
    return TEMPLATE_LIBRARY
        .filter(t => t.category === category)
        .sort((a, b) => a.order - b.order);
}

function getTemplateByCode(code) {
    return TEMPLATE_LIBRARY.find(t => t.code === code);
}

function getTemplateType(type) {
    return TEMPLATE_TYPES[type] || TEMPLATE_TYPES.diger;
}

function searchTemplates(query) {
    const q = query.toLowerCase().trim();
    if (!q) return TEMPLATE_LIBRARY;

    return TEMPLATE_LIBRARY.filter(t =>
        t.code.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q)
    );
}

function filterByCategory(templates, category) {
    if (!category || category === 'all') return templates;
    return templates.filter(t => t.category === category);
}

function groupByCategory(templates) {
    const grouped = {};
    CATEGORY_ORDER.forEach(cat => {
        const items = templates.filter(t => t.category === cat);
        if (items.length > 0) {
            grouped[cat] = items.sort((a, b) => a.order - b.order);
        }
    });
    return grouped;
}
