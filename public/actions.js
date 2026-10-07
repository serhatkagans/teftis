/* =====================================================
   Arayüz olayları
   Satır içi işleyiciler (onclick="...") yerine öğelere veri öznitelikleri yazılır,
   tek bir dinleyici bunları çalıştırır. Böylece İçerik Güvenlik Politikası (CSP)
   satır içi betiği tamamen yasaklayabilir:

       <button ${uiAction('click', 'navigateTo', 'documents')}>

   Bağımsız değişkenlerde "$el" öğenin kendisi, "$value" öğenin değeri,
   "$event" olay nesnesi yerine geçer. Yalnızca UI_ACTIONS listesindeki global
   fonksiyonlar çağrılabilir; sayfaya enjekte edilen bir öznitelik başka bir
   fonksiyonu tetikleyemez.
   ===================================================== */

const UI_ACTIONS = new Set([
    // Gezinme ve oturum
    'navigateTo', 'goBack', 'toggleUserMenu', 'handleLogout', 'switchAuthTab', 'handleAuthSubmit',
    // Şablon kütüphanesi
    'handleSearch', 'clearSearch', 'handleCategoryFilter', 'setViewMode', 'toggleCategory',
    // Kayıtlı belgeler
    'downloadDocumentPdf', 'deleteDocument', 'handleDocumentsSearch', 'handleDocumentsCategory',
    'loadDocumentsPage', 'goToDocumentsPage',
    // Form
    'toggleCheckboxOption', 'removeQaItem', 'removeWrittenQuestion', 'updateDiziEkItem', 'removeDiziEkItem',
    // Tema
    'toggleThemeDropdown', 'selectTheme'
]);

const UI_EVENTS = ['click', 'input', 'change', 'submit'];

// Şablon dizgeleri için öznitelik üretir: data-click="fn" data-args="[...]"
function uiAction(eventType, name, ...args) {
    if (!UI_EVENTS.includes(eventType)) throw new Error(`Desteklenmeyen olay: ${eventType}`);
    if (!UI_ACTIONS.has(name)) throw new Error(`İzin listesinde olmayan işlem: ${name}`);
    const argsAttr = args.length ? ` data-args="${escapeHtml(JSON.stringify(args))}"` : '';
    return `data-${eventType}="${name}"${argsAttr}`;
}

function resolveUiArgs(element, event) {
    let args = [];
    try {
        args = JSON.parse(element.dataset.args || '[]');
    } catch (error) {
        console.warn('Geçersiz data-args:', element);
    }
    return args.map(arg => {
        if (arg === '$el') return element;
        if (arg === '$value') return element.value;
        if (arg === '$event') return event;
        return arg;
    });
}

function runUiAction(event) {
    const attr = `data-${event.type}`;
    // İç içe öğelerde yalnızca en yakın işlem çalışır (satırdaki silme düğmesi satırı açmaz)
    const element = event.target.closest && event.target.closest(`[${attr}]`);
    if (!element) return;

    const name = element.getAttribute(attr);
    if (!UI_ACTIONS.has(name) || typeof window[name] !== 'function') {
        console.warn('Bilinmeyen arayüz işlemi:', name);
        return;
    }
    // href="#" bağlantıları sayfanın başına zıplamasın
    if (event.type === 'click' && element.tagName === 'A') event.preventDefault();

    window[name](...resolveUiArgs(element, event));
}

UI_EVENTS.forEach(type => document.addEventListener(type, runUiAction));

function goBack() {
    history.back();
}
