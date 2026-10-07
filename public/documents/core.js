/* =====================================================
   Belge çekirdeği
   Her şablon kodu için tek bir belge üreticisi kaydedilir (defineDocument).
   Form önizlemesi, kayıtlı belge görünümü ve PDF aynı üreticiyi kullanır;
   böylece önizlemede görülen ile indirilen PDF birebir aynıdır.
   ===================================================== */

const DOCUMENTS = {};

// build(data): kaçışlanmış form verisini alır, belge kökü olan bir <div> döndürür
function defineDocument(code, pdfName, build) {
    if (DOCUMENTS[code]) throw new Error(`Belge iki kez tanımlandı: ${code}`);
    DOCUMENTS[code] = { pdfName, build };
}

// Belgelerde "..._formatted" adıyla kullanılan gg.aa.yyyy biçimli tarih alanları
const FORMATTED_DATE_FIELDS = ['tarih', 'sikayetci_dogum_tarihi', 'tanik_dogum_tarihi', 'davet_tarihi', 'randevu_tarihi', 'ifade_tarihi'];

function withFormattedDates(data) {
    const result = { ...data };
    for (const field of FORMATTED_DATE_FIELDS) {
        result[field + '_formatted'] = data[field] ? formatDateDots(data[field]) : '';
    }
    return result;
}

// Ham form verisinden belge kökünü üretir; şablonun belgesi yoksa null döner
function buildDocumentElement(code, formData) {
    const doc = DOCUMENTS[code];
    if (!doc) return null;
    return doc.build(escapeFormData(withFormattedDates(formData || {})));
}

// Önizleme için belgenin HTML'i (PDF'e gönderilenle aynı işaretleme)
function renderDocumentHtml(code, formData) {
    const element = buildDocumentElement(code, formData);
    return element ? element.outerHTML : '';
}

function documentFileName(code, formData) {
    const doc = DOCUMENTS[code];
    return `${doc ? doc.pdfName : 'belge'}_${(formData && formData.tarih) || 'tarihsiz'}.pdf`;
}

function createDocumentElement(cssText, html) {
    const element = document.createElement('div');
    element.style.cssText = cssText;
    element.innerHTML = html;
    return element;
}

// ---- Biçimlendiriciler ----

// 2026-10-07 → 07.10.2026
function formatDateDots(dateStr) {
    if (!dateStr) return 'gg.aa.yyyy';
    return new Date(dateStr).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// 2026-10-07 → 7 Ekim 2026
function formatDateLong(dateStr) {
    if (!dateStr) return '...';
    return new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}

// 2026-10-07 → Çarşamba
function formatDayName(dateStr) {
    if (!dateStr) return '...';
    return new Date(dateStr).toLocaleDateString('tr-TR', { weekday: 'long' });
}

// 10:30 → 10.30
function formatTimeDots(timeStr) {
    if (!timeStr) return 'ss.dd';
    return timeStr.replace(':', '.');
}
