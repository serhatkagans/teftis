/* =====================================================
   Teftiş Kurulu Başkanlığı İnceleme ve Soruşturma Modülü - Form ve Önizleme
   Alan tanımları: template-fields.js · Belge üreticileri: documents/
   ===================================================== */

// State Management
const state = {
    currentTemplate: '1.1',
    qaItems: [],
    qaCounter: 0,
    writtenQuestions: [],
    writtenQuestionsCounter: 0
};

// DOM Elements
const elements = {
    form: null,
    qaContainer: null,
    clearFormBtn: null,
    generatePdfBtn: null,
    previewContent: null,
    loadingOverlay: null,
    templateSelect: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    // Sayfalar router.js ile çiziliyor; ilk yüklemede form henüz yoksa kurulacak bir şey yok
    if (!elements.form || !elements.clearFormBtn) return;
    initializeEventListeners();
    loadTemplate(state.currentTemplate);
});

function initializeElements() {
    elements.form = document.getElementById('documentForm');
    elements.clearFormBtn = document.getElementById('clearFormBtn');
    elements.generatePdfBtn = document.getElementById('generatePdfBtn');
    elements.previewContent = document.getElementById('previewContent');
    elements.loadingOverlay = document.getElementById('loadingOverlay');
    elements.templateSelect = document.getElementById('templateSelect');
}

function initializeEventListeners() {
    elements.clearFormBtn.addEventListener('click', clearForm);
    elements.generatePdfBtn.addEventListener('click', generatePDF);
    elements.templateSelect.addEventListener('change', (e) => {
        if (confirm('Template değiştirilecek. Mevcut form verileri silinecek. Devam etmek istiyor musunuz?')) {
            loadTemplate(e.target.value);
        } else {
            e.target.value = state.currentTemplate;
        }
    });
}

// =====================================================
// Template Loading
// =====================================================

function loadTemplate(templateId) {
    state.currentTemplate = templateId;
    state.qaItems = [];
    state.qaCounter = 0;

    const template = TEMPLATES[templateId];
    if (!template) {
        console.error('Template not found:', templateId);
        return;
    }

    // Build form HTML
    let formHtml = '';

    template.sections.forEach(section => {
        formHtml += `
            <div class="form-section">
                <h3 class="section-title">
                    <span class="section-icon">${section.icon}</span>
                    ${section.title}
                </h3>
        `;

        if (section.isQA) {
            formHtml += `
                <div id="qaContainer" class="qa-container"></div>
                <button type="button" class="btn btn-add" id="addQaBtn">
                    <span>➕</span> Yeni Soru Ekle
                </button>
            `;
        } else if (section.isWrittenQuestions) {
            formHtml += `
                <div id="writtenQuestionsContainer" class="qa-container"></div>
                <button type="button" class="btn btn-add" id="addWqBtn">
                    <span>➕</span> Yeni Soru Ekle
                </button>
            `;
        } else if (section.isDiziPusulasi) {
            formHtml += `
                <div id="diziEkContainer" class="qa-container"></div>
                <button type="button" class="btn btn-add" id="addDiziEkBtn">
                    <span>➕</span> Yeni Ek Ekle
                </button>
            `;
        } else if (section.fields) {
            formHtml += '<div class="form-grid">';
            section.fields.forEach(field => {
                formHtml += createFieldHtml(field);
            });
            formHtml += '</div>';
        }

        formHtml += '</div>';
    });

    elements.form.innerHTML = formHtml;

    // Re-initialize Q&A container (only if template has Q&A section)
    elements.qaContainer = document.getElementById('qaContainer');
    const addQaBtn = document.getElementById('addQaBtn');
    if (addQaBtn && elements.qaContainer) {
        addQaBtn.addEventListener('click', addQaItem);
        // Add first Q&A item only for templates with Q&A (except 1.1 which has fixed Soru 1)
        if (state.currentTemplate !== '1.1') {
            addQaItem();
        }
    }

    // Initialize Written Questions container (only if template has Written Questions section)
    const wqContainer = document.getElementById('writtenQuestionsContainer');
    const addWqBtn = document.getElementById('addWqBtn');
    if (addWqBtn && wqContainer) {
        state.writtenQuestions = [];
        state.writtenQuestionsCounter = 0;
        addWqBtn.addEventListener('click', addWrittenQuestion);
        // Add first question
        addWrittenQuestion();
    }

    // Initialize Dizi Pusulası Ek container (only if template has Dizi Pusulası section)
    const diziEkContainer = document.getElementById('diziEkContainer');
    const addDiziEkBtn = document.getElementById('addDiziEkBtn');
    if (addDiziEkBtn && diziEkContainer) {
        diziEkItems = [];
        diziEkCounter = 0;
        addDiziEkBtn.addEventListener('click', addDiziEkItem);
        renderDiziEkItems();
    }

    // Add form input listeners
    elements.form.addEventListener('input', debounce(updatePreview, 150));

    updatePreview();
}

function createFieldHtml(field) {
    const required = field.required ? '<span class="required">*</span>' : '';
    const fullWidth = field.fullWidth ? 'full-width' : '';
    const pattern = field.pattern ? `pattern="${field.pattern}"` : '';
    const maxlength = field.maxlength ? `maxlength="${field.maxlength}"` : '';
    const placeholder = field.placeholder ? `placeholder="${field.placeholder}"` : '';
    const rows = field.rows || 2;
    const requiredAttr = field.required ? 'required' : '';
    const defaultValue = field.value || field.defaultValue || '';

    let inputHtml = '';

    if (field.type === 'textarea') {
        inputHtml = `<textarea id="${field.id}" name="${field.id}" rows="${rows}" ${placeholder} ${requiredAttr}>${defaultValue}</textarea>`;
    } else if (field.type === 'select' && field.options) {
        const optionsHtml = field.options.map(opt =>
            `<option value="${opt}">${opt}</option>`
        ).join('');
        inputHtml = `<select id="${field.id}" name="${field.id}" ${requiredAttr}>
            <option value="">Seçiniz...</option>
            ${optionsHtml}
        </select>`;
    } else if (field.type === 'checkboxlist' && field.options) {
        const checkboxHtml = field.options.map((opt, idx) => {
            // Header seçenekleri farklı stil
            if (opt.isHeader || opt.value.endsWith('_header')) {
                return `<div class="checkbox-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 12px; margin: 12px 0 6px 0; border-radius: 6px; font-weight: 600; font-size: 0.85em; letter-spacing: 0.5px;">
                    ${opt.label}
                </div>`;
            }
            return `<div class="checkbox-item" style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; padding: 8px; border-radius: 4px; cursor: pointer;" ${uiAction('click', 'toggleCheckboxOption', '$el', field.id, '$event')}>
                <input type="checkbox" id="${field.id}_${idx}" name="${field.id}" value="${opt.value}" data-template="${opt.template ? opt.template.replace(/"/g, '&quot;').replace(/\n/g, '\\n') : ''}" style="margin-top: 2px; cursor: pointer; width: 18px; height: 18px;">
                <label for="${field.id}_${idx}" style="cursor: pointer; font-size: 0.9em; line-height: 1.4;">${opt.label}</label>
            </div>`;
        }).join('');
        inputHtml = `<div class="checkbox-list" style="border: 1px solid #ddd; padding: 10px; border-radius: 6px; max-height: 400px; overflow-y: auto;">${checkboxHtml}</div>`;
    } else if (field.type === 'custom' && typeof field.customRender === 'function') {
        // Custom render fonksiyonu ile özel alan oluştur
        inputHtml = field.customRender();
    } else {
        inputHtml = `<input type="${field.type}" id="${field.id}" name="${field.id}" ${pattern} ${maxlength} ${placeholder} ${requiredAttr} value="${defaultValue}">`;
    }

    return `
        <div class="form-group ${fullWidth}">
            <label for="${field.id}">${field.label} ${required}</label>
            ${inputHtml}
        </div>
    `;
}

// =====================================================
// Q&A Management
// =====================================================

function addQaItem() {
    state.qaCounter++;
    const qaId = state.qaCounter;

    const qaItem = document.createElement('div');
    qaItem.className = 'qa-item';
    qaItem.dataset.qaId = qaId;

    qaItem.innerHTML = `
        <div class="qa-item-header">
            <span class="qa-number">Soru ${qaId}</span>
            <button type="button" class="qa-remove-btn" ${uiAction('click', 'removeQaItem', qaId)} title="Sil">
                ✕
            </button>
        </div>
        <div class="qa-fields">
            <div class="form-group">
                <label>Soru <span class="required">*</span></label>
                <textarea name="soru_${qaId}" class="qa-soru" rows="2" 
                    placeholder="Soruyu yazın..." required></textarea>
            </div>
            <div class="form-group">
                <label>Cevap <span class="required">*</span></label>
                <textarea name="cevap_${qaId}" class="qa-cevap" rows="3" 
                    placeholder="Cevabı yazın..." required></textarea>
            </div>
        </div>
    `;

    elements.qaContainer.appendChild(qaItem);
    state.qaItems.push(qaId);

    qaItem.querySelectorAll('textarea').forEach(ta => {
        ta.addEventListener('input', debounce(updatePreview, 150));
    });

    updateQaNumbers();
    updatePreview();
}

function removeQaItem(qaId) {
    // For template 1.1, all dynamic Q&A items can be removed (Soru 1 is fixed)
    // For other templates, at least one Q&A item must remain
    if (state.currentTemplate !== '1.1' && state.qaItems.length <= 1) {
        alert('En az bir soru/cevap çifti olmalıdır.');
        return;
    }

    const qaItem = document.querySelector(`.qa-item[data-qa-id="${qaId}"]`);
    if (qaItem) {
        qaItem.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            qaItem.remove();
            state.qaItems = state.qaItems.filter(id => id !== qaId);
            updateQaNumbers();
            updatePreview();
        }, 300);
    }
}

function updateQaNumbers() {
    const qaItems = elements.qaContainer.querySelectorAll('.qa-item');
    qaItems.forEach((item, index) => {
        const numberSpan = item.querySelector('.qa-number');
        numberSpan.textContent = `Soru ${index + 1}`;
    });
}

// =====================================================
// Written Questions Management (For Template 1.4.1)
// =====================================================

function addWrittenQuestion() {
    state.writtenQuestionsCounter++;
    const wqId = state.writtenQuestionsCounter;

    const wqItem = document.createElement('div');
    wqItem.className = 'qa-item'; // Reuse qa-item styles
    wqItem.dataset.wqId = wqId;

    wqItem.innerHTML = `
        <div class="qa-item-header">
            <span class="qa-number">Soru ${wqId}</span>
            <button type="button" class="qa-remove-btn" ${uiAction('click', 'removeWrittenQuestion', wqId)} title="Sil">
                ✕
            </button>
        </div>
        <div class="qa-fields">
            <div class="form-group full-width">
                <label>Soru Metni <span class="required">*</span></label>
                <textarea name="written_question_${wqId}" class="written-question-input" rows="2" 
                    placeholder="Soru metnini yazın..." required></textarea>
            </div>
            <div class="form-group full-width">
                <label>Cevap (İsteğe bağlı - boş bırakılırsa el yazısı için yer kalır)</label>
                <textarea name="written_answer_${wqId}" class="written-answer-input" rows="3" 
                    placeholder="Cevabı yazın veya boş bırakın..."></textarea>
            </div>
        </div>
    `;

    const container = document.getElementById('writtenQuestionsContainer');
    if (container) {
        container.appendChild(wqItem);
        state.writtenQuestions.push(wqId);

        wqItem.querySelectorAll('textarea').forEach(ta => {
            ta.addEventListener('input', debounce(updatePreview, 150));
        });

        updateWrittenQuestionNumbers();
        updatePreview();
    }
}

function removeWrittenQuestion(wqId) {
    if (state.writtenQuestions.length <= 1) {
        alert('En az bir soru olmalıdır.');
        return;
    }

    const wqItem = document.querySelector(`.qa-item[data-wq-id="${wqId}"]`);
    if (wqItem) {
        wqItem.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            wqItem.remove();
            state.writtenQuestions = state.writtenQuestions.filter(id => id !== wqId);
            updateWrittenQuestionNumbers();
            updatePreview();
        }, 300);
    }
}

function updateWrittenQuestionNumbers() {
    const container = document.getElementById('writtenQuestionsContainer');
    if (!container) return;

    const items = container.querySelectorAll('.qa-item');
    items.forEach((item, index) => {
        const numberSpan = item.querySelector('.qa-number');
        numberSpan.textContent = `Soru ${index + 1}`;
    });
}

// =====================================================
// Form Data Collection
// =====================================================

// Form verileri şablonlarda doğrudan HTML'e yazılır. Kullanıcının girdiği
// "<", "&" gibi karakterler HTML olarak yorumlanmasın (betik çalıştırılamasın)
// diye önizleme ve PDF'ten önce tüm metin değerleri kaçışlanır. Kaydetme ve
// Word üretimi ham veriyi kullanmaya devam eder.
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeFormData(value) {
    if (typeof value === 'string') return escapeHtml(value);
    if (Array.isArray(value)) return value.map(escapeFormData);
    if (value && typeof value === 'object') {
        const out = {};
        Object.keys(value).forEach(key => { out[key] = escapeFormData(value[key]); });
        return out;
    }
    return value;
}

function collectFormData() {
    const formData = new FormData(elements.form);
    const data = {};

    // Collect all form fields
    for (const [key, value] of formData.entries()) {
        if (!key.startsWith('soru_') && !key.startsWith('cevap_') && !key.startsWith('written_question_')) {
            data[key] = value;
        }
    }

    // Collect Q&A pairs (only if qaContainer exists)
    data.soru_cevap = [];
    if (elements.qaContainer) {
        const qaItems = elements.qaContainer.querySelectorAll('.qa-item');
        qaItems.forEach((item, index) => {
            const soru = item.querySelector('.qa-soru').value || '';
            const cevap = item.querySelector('.qa-cevap').value || '';
            data.soru_cevap.push({ index: index + 1, soru, cevap });
        });
    }

    // Collect Written Questions and Answers (only if writtenQuestionsContainer exists)
    data.written_questions = [];
    if (document.getElementById('writtenQuestionsContainer')) {
        const items = document.querySelectorAll('#writtenQuestionsContainer .qa-item');
        items.forEach((item, index) => {
            const question = item.querySelector('.written-question-input').value || '';
            const answerInput = item.querySelector('.written-answer-input');
            const answer = answerInput ? answerInput.value || '' : '';
            data.written_questions.push({ index: index + 1, question, answer });
        });
    }

    // Collect Dizi Pusulası Ek Listesi (only if diziEkContainer exists)
    if (document.getElementById('diziEkContainer')) {
        data.ek_listesi = getDiziEkData();
    }

    return data;
}

// =====================================================
// Preview Rendering
// =====================================================

// Önizleme, PDF ile aynı belge üreticisini kullanır (documents/core.js)
function updatePreview() {
    renderPaginatedPreview(elements.previewContent, renderDocumentHtml(state.currentTemplate, collectFormData()));
}

// =====================================================
// A4 Sayfalı Önizleme
// =====================================================

// Önizleme, PDF ile aynı ölçülerde (A4, 15 mm kenar boşluğu) ayrı sayfalar
// halinde gösterilir. İçerik tek bir akışta kalır; sayfa sınırına denk gelen
// bloklar boşluk eklenerek sonraki sayfaya itilir, uzun paragraflar ise satır
// sınırından ikiye bölünür.
const A4_PAGE_W = 210;   // mm
const A4_PAGE_H = 297;   // mm
const A4_MARGIN = 15;    // mm (sunucu PDF kenar boşluğuyla aynı)
const A4_GAP = 10;       // mm, önizlemede sayfalar arası boşluk
const A4_STRIDE = A4_PAGE_H + A4_GAP;
const A4_USABLE_H = A4_PAGE_H - 2 * A4_MARGIN;
const A4_BLOCK_TAGS = new Set(['TABLE', 'IMG', 'SVG', 'CANVAS', 'HR', 'UL', 'OL']);

function renderPaginatedPreview(root, html) {
    if (!root) return;
    root.classList.add('a4-preview');
    root._previewHtml = html;
    root.innerHTML = '<div class="a4-sheets"></div><div class="a4-flow"></div>';
    root.querySelector('.a4-flow').innerHTML = html;

    fitPreviewZoom(root);
    paginatePreview(root);

    // Görseller (logo vb.) sonradan yüklenirse yerleşim değişir; yeniden sayfala
    root.querySelectorAll('.a4-flow img').forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', () => {
                if (root._previewHtml === html) renderPaginatedPreview(root, html);
            }, { once: true });
        }
    });
}

// Önizleme panelinden geniş olan A4 sayfasını panele sığacak şekilde küçültür
function fitPreviewZoom(root) {
    root.style.zoom = '';
    const container = root.parentElement;
    if (!container) return;
    const cs = getComputedStyle(container);
    const available = container.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const pageWidthPx = A4_PAGE_W * 96 / 25.4;
    if (available > 0 && available < pageWidthPx) {
        root.style.zoom = String(available / pageWidthPx);
    }
}

function previewHasBox(cs) {
    const hasBorder = ['Top', 'Right', 'Bottom', 'Left'].some(side =>
        cs['border' + side + 'Style'] !== 'none' && parseFloat(cs['border' + side + 'Width']) > 0);
    const bg = cs.backgroundColor;
    const hasBg = bg && bg !== 'transparent' && !/rgba\(.*,\s*0\)$/.test(bg);
    return hasBorder || hasBg;
}

function previewHasDirectText(el) {
    return Array.from(el.childNodes).some(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '');
}

// Sayfa sınırında ayrı ayrı yerleştirilebilecek en küçük blokları toplar
function collectPreviewBlocks(container, mmPx, out) {
    Array.from(container.children).forEach(child => {
        const cs = getComputedStyle(child);
        if (cs.display === 'none' || cs.position === 'absolute' || cs.position === 'fixed') return;

        const isPlainBlock = cs.display === 'block' || cs.display === 'list-item';
        const atomic =
            A4_BLOCK_TAGS.has(child.tagName.toUpperCase()) ||
            !isPlainBlock ||
            child.children.length === 0 ||
            pdfIsInlineOnly(child) ||
            previewHasDirectText(child) ||
            // Çerçeveli/arka planlı kutular sayfaya sığıyorsa bölünmesin
            (previewHasBox(cs) && child.getBoundingClientRect().height / mmPx <= A4_USABLE_H);

        if (atomic) out.push(child);
        else collectPreviewBlocks(child, mmPx, out);
    });
    return out;
}

// Satır içi içerikli bir bloğu, alt sınırı (px) aşan ilk satırdan böler.
// Bölünme olursa yeni (devam) elemanı döndürür.
function splitPreviewBlockAt(el, limitPx) {
    const positions = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.textContent;
        for (let i = 0; i < text.length; i++) {
            if (!/\s/.test(text[i])) positions.push([node, i]);
        }
    }
    if (positions.length < 2) return null;

    const range = document.createRange();
    const bottomOf = ([node, i]) => {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        return range.getBoundingClientRect().bottom;
    };

    // Taşan ilk karakteri ikili arama ile bul (satırlar yukarıdan aşağı sıralı)
    let lo = 0, hi = positions.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (bottomOf(positions[mid]) > limitPx) hi = mid;
        else lo = mid + 1;
    }
    if (lo === 0 || lo >= positions.length) return null;

    const [node, offset] = positions[lo];
    range.setStart(node, offset);
    range.setEnd(el, el.childNodes.length);
    const rest = range.extractContents();

    const cont = el.cloneNode(false);
    cont.removeAttribute('id');
    cont.appendChild(rest);
    cont.style.textIndent = '0';
    cont.style.marginTop = '0';
    el.style.marginBottom = '0';
    el.style.paddingBottom = '0';
    cont.style.paddingTop = '0';
    // İki yana yaslı paragrafın bölünen son satırı da yaslı kalsın
    if (getComputedStyle(el).textAlign === 'justify') el.style.textAlignLast = 'justify';
    el.after(cont);
    return cont;
}

// Bloğun üst kenarını hedef konuma (mm, akışa göre) itecek boşluk ekler
function pushPreviewBlockTo(el, targetMm, originPx, mmPx) {
    const spacer = document.createElement('div');
    spacer.className = 'a4-spacer';
    el.parentNode.insertBefore(spacer, el);
    // Kenar boşluğu (margin) birleşmeleri nedeniyle iki adımda ölçerek ayarla
    let height = 0;
    for (let i = 0; i < 2; i++) {
        const top = (el.getBoundingClientRect().top - originPx) / mmPx;
        height = Math.max(0, height + (targetMm - top));
        spacer.style.height = height + 'mm';
    }
}

function paginatePreview(root) {
    const flow = root.querySelector('.a4-flow');
    const sheets = root.querySelector('.a4-sheets');
    if (!flow || !sheets) return;

    const probe = document.createElement('div');
    probe.style.cssText = 'position:absolute; visibility:hidden; height:100mm; width:1px;';
    flow.appendChild(probe);
    const mmPx = probe.getBoundingClientRect().height / 100;
    probe.remove();
    if (!mmPx) return; // görünmez panel; ölçüm yapılamaz

    const originPx = flow.getBoundingClientRect().top;
    const toMm = px => (px - originPx) / mmPx;
    const blocks = collectPreviewBlocks(flow, mmPx, []);
    const EPS = 0.3;

    for (let i = 0; i < blocks.length; i++) {
        const el = blocks[i];
        if (el.getBoundingClientRect().height === 0) continue;

        let top = toMm(el.getBoundingClientRect().top);
        const page = Math.floor(top / A4_STRIDE);
        const usableStart = page * A4_STRIDE + A4_MARGIN;
        const usableEnd = page * A4_STRIDE + A4_PAGE_H - A4_MARGIN;

        // Blok alt kenar boşluğunda / sayfalar arasında başlıyorsa sonraki sayfaya
        if (top >= usableEnd - EPS) {
            pushPreviewBlockTo(el, (page + 1) * A4_STRIDE + A4_MARGIN, originPx, mmPx);
            continue;
        }
        // Üst kenar boşluğunda başlıyorsa yazı alanının başına indir
        if (top < usableStart - EPS) {
            pushPreviewBlockTo(el, usableStart, originPx, mmPx);
            top = toMm(el.getBoundingClientRect().top);
        }
        const bottom = toMm(el.getBoundingClientRect().bottom);
        if (bottom <= usableEnd + EPS) continue;

        // Sayfa sınırını aşıyor: önce satır sınırından bölmeyi dene
        const cs = getComputedStyle(el);
        const splittable = (cs.display === 'block' || cs.display === 'list-item') &&
            !A4_BLOCK_TAGS.has(el.tagName.toUpperCase()) && pdfIsInlineOnly(el);
        if (splittable) {
            const cont = splitPreviewBlockAt(el, originPx + usableEnd * mmPx);
            if (cont) {
                blocks.splice(i + 1, 0, cont);
                continue;
            }
        }

        // Bölünemiyorsa ve tek sayfaya sığıyorsa bütün olarak sonraki sayfaya taşı
        if (bottom - top <= A4_USABLE_H && top > usableStart + EPS) {
            pushPreviewBlockTo(el, (page + 1) * A4_STRIDE + A4_MARGIN, originPx, mmPx);
        }
    }

    // Sayfa arka planlarını çiz
    const lastBottom = toMm(flow.getBoundingClientRect().bottom) - A4_MARGIN;
    const pageCount = Math.max(1, Math.floor(Math.max(0, lastBottom - EPS) / A4_STRIDE) + 1);
    const totalH = pageCount * A4_STRIDE - A4_GAP;
    flow.style.minHeight = totalH + 'mm';
    root.style.height = (pageCount * A4_STRIDE) + 'mm'; // son sayfa numarası için alt boşluk dahil
    let sheetsHtml = '';
    for (let p = 0; p < pageCount; p++) {
        sheetsHtml += `<div class="a4-sheet" style="top:${p * A4_STRIDE}mm"><span class="a4-page-no">${p + 1} / ${pageCount}</span></div>`;
    }
    sheets.innerHTML = sheetsHtml;
}

// Pencere boyutu değişince önizlemeleri yeniden ölçekle ve sayfala
let previewResizeTimer = null;
window.addEventListener('resize', () => {
    clearTimeout(previewResizeTimer);
    previewResizeTimer = setTimeout(() => {
        document.querySelectorAll('.a4-preview').forEach(root => {
            if (root._previewHtml !== undefined) renderPaginatedPreview(root, root._previewHtml);
        });
    }, 150);
});

// =====================================================
// PDF Generation
// =====================================================

// html2pdf içeriği tek bir görüntü olarak dilimlediği için sayfa sınırına denk
// gelen satırlar ortadan kesiliyor. Bu fonksiyonlar, PDF içeriğini basımdan önce
// satır bazında "bölünemez" (page-break-inside: avoid) bloklara çevirerek
// ikinci sayfaya taşan belgelerdeki kaymaları önler.
const PDF_INLINE_TAGS = new Set(['STRONG', 'B', 'EM', 'I', 'U', 'S', 'SPAN', 'SMALL', 'SUP', 'SUB', 'A']);

function pdfIsInlineOnly(el) {
    return Array.from(el.children).every(c => PDF_INLINE_TAGS.has(c.tagName) || c.tagName === 'BR');
}

// Bir metin bloğunu satır sonlarından (<br> ve pre-wrap içindeki \n) ayırıp
// her satırı kendi bölünemez div'ine koyar.
function pdfSplitIntoLineBlocks(el, splitOnNewlines) {
    const groups = [[]];
    const current = () => groups[groups.length - 1];

    Array.from(el.childNodes).forEach(node => {
        if (node.nodeName === 'BR') {
            groups.push([]);
            return;
        }
        const isText = node.nodeType === Node.TEXT_NODE;
        const isPlainInline = node.nodeType === Node.ELEMENT_NODE && node.children.length === 0;
        if (splitOnNewlines && (isText || isPlainInline) && node.textContent.includes('\n')) {
            node.textContent.split('\n').forEach((part, i) => {
                if (i > 0) groups.push([]);
                if (part.trim() === '') return;
                if (isText) {
                    current().push(document.createTextNode(part));
                } else {
                    const clone = node.cloneNode(false);
                    clone.textContent = part;
                    current().push(clone);
                }
            });
            return;
        }
        current().push(node);
    });

    const isEmptyGroup = g => g.length === 0 ||
        g.every(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim() === '');

    // Baştaki/sondaki boş satırları at (şablon kaynağındaki girinti boşlukları)
    while (groups.length && isEmptyGroup(groups[0])) groups.shift();
    while (groups.length && isEmptyGroup(groups[groups.length - 1])) groups.pop();

    el.style.whiteSpace = 'normal';
    el.innerHTML = '';
    groups.forEach(g => {
        const line = document.createElement('div');
        line.style.pageBreakInside = 'avoid';
        if (isEmptyGroup(g)) {
            line.innerHTML = '&nbsp;';
        } else {
            g.forEach(n => line.appendChild(n));
        }
        el.appendChild(line);
    });
}

function optimizePdfPageBreaks(root) {
    if (!root || typeof root.querySelectorAll !== 'function') return;

    // 0) Boşluksuz uzun diziler (ör. yapıştırılan linkler) satıra sığmayınca
    //    sayfadan yana taşıp kesiliyordu. CSS ile kelime içinden kırmak
    //    (overflow-wrap) çözüm değil: html2canvas bu şekilde kırılan satırları
    //    boş boyuyor. Bunun yerine uzun dizilere görünmez kırılma noktası
    //    (zero-width space) ekle; hem tarayıcı hem html2canvas aynı yerden kırar.
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const textNode = walker.currentNode;
        if (/\S{21,}/.test(textNode.textContent)) {
            textNode.textContent = textNode.textContent.replace(/\S{20}(?=\S)/g, '$&\u200B');
        }
    }

    // 1) Düz metin blokları: satır bazında bölünemez hale getir
    root.querySelectorAll('div, p, li').forEach(el => {
        if (el.closest('table')) return; // tablo hücrelerine dokunma (kapak sayfaları)
        if (el.style.pageBreakInside) return;
        if (!pdfIsInlineOnly(el)) return;

        const isPreWrap = (el.style.whiteSpace || '').indexOf('pre') === 0;
        const hasBr = !!el.querySelector(':scope > br');
        const hasNewline = isPreWrap && el.textContent.includes('\n');

        // text-indent'li paragrafları bölmek girintiyi her satıra taşır; bütün olarak koru
        if ((hasBr || hasNewline) && !el.style.textIndent) {
            pdfSplitIntoLineBlocks(el, isPreWrap);
        } else {
            el.style.pageBreakInside = 'avoid';
        }
    });

    // 2) İmza blokları gibi yatay (flex) gruplar sayfa sınırında bölünmesin
    pdfProtectFlexBlocks(root);
}

// İmza blokları gibi flex grupların sayfa sınırında bölünmesini engeller.
// Hem tarayıcı içi (html2pdf) hem sunucu (Chrome yazdırma) yolunda kullanılır.
function pdfProtectFlexBlocks(root) {
    root.querySelectorAll('*').forEach(el => {
        if (el.closest('table')) return;
        if (el.style.display === 'flex' && !el.style.pageBreakInside) {
            el.style.pageBreakInside = 'avoid';
        }
    });
}

// PDF'i sunucuda Chrome'un gerçek yazdırma motoruyla üretir (kesin sayfalama,
// seçilebilir metin, küçük dosya). Başarısız olursa false döner ve çağıran
// tarayıcı içi yönteme (html2pdf) geri düşer.
async function generatePDFOnServer(contentEl, filename) {
    try {
        pdfProtectFlexBlocks(contentEl);
        const response = await fetch('api/pdf', {
            method: 'POST',
            headers: Object.assign({ 'Content-Type': 'application/json' }, AuthService.getAuthHeaders()),
            body: JSON.stringify({ html: contentEl.outerHTML })
        });
        if (!response.ok) {
            console.warn('Sunucu PDF üretimi başarısız (HTTP ' + response.status + '), tarayıcı yöntemine geçiliyor');
            return false;
        }
        const blob = await response.blob();
        saveAs(blob, filename);
        return true;
    } catch (error) {
        console.warn('Sunucu PDF üretimine ulaşılamadı, tarayıcı yöntemine geçiliyor:', error);
        return false;
    }
}

// PDF içeriğini indirir: önce sunucuda Chrome yazdırma motoruyla üretir,
// ulaşılamazsa tarayıcı içi html2pdf yöntemine geri düşer.
async function downloadPDF(pdfContent, filename) {
    const serverOk = await generatePDFOnServer(pdfContent, filename);

    if (!serverOk) {
        // Sayfa sınırında satırların ortadan kesilmesini önle
        optimizePdfPageBreaks(pdfContent);

        const opt = {
            margin: [15, 15, 15, 15],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'] }
        };

        await html2pdf().set(opt).from(pdfContent).save();
    }
}

async function generatePDF() {
    // Auth kontrolü - giriş yapmamış kullanıcılar PDF üretemez
    if (!AuthService || !AuthService.isLoggedIn()) {
        showToast('PDF üretmek için giriş yapmalısınız', 'error');
        window.location.hash = '#/login';
        return;
    }

    if (!elements.form.checkValidity()) {
        elements.form.reportValidity();
        return;
    }

    elements.loadingOverlay.classList.remove('hidden');

    try {
        const data = collectFormData();
        const pdfContent = buildDocumentElement(state.currentTemplate, data);

        if (!pdfContent) {
            throw new Error(`Şablon için PDF içeriği oluşturulamadı: ${state.currentTemplate}`);
        }

        const filename = documentFileName(state.currentTemplate, data);
        if (window.showToast) showToast('PDF oluşturuluyor...', 'info');

        await downloadPDF(pdfContent, filename);

    } catch (error) {
        console.error('PDF generation error:', error);
        alert('PDF oluşturulurken bir hata oluştu: ' + error.message);
    } finally {
        elements.loadingOverlay.classList.add('hidden');
    }
}

// =====================================================
// Utility Functions
// =====================================================

// Hazır madde kutucuklarının hangi metin alanını doldurduğu
const CHECKBOX_TARGET_FIELDS = {
    'tespit_secenekleri': 'tespit_hususlar',
    'iddia_secenekleri': 'tespit_hususlar',
    'konu_secenekleri': 'konusu_aciklama',
    'yontem_secenekleri': 'yontem_surec',
    'degerlendirme_secenekleri': 'degerlendirme',
    'sonuc_secenekleri': 'sonuc_kanaat_teklif'
};

// Hazır madde seçilince ilgili metin alanını seçili maddelerle yeniden doldurur
function toggleCheckboxOption(element, fieldId, event) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    if (!checkbox) return;

    // Tıklanan öğe kutucuğun kendisi değilse (satıra tıklandıysa) durumu çevir
    // Etikete tıklanınca tarayıcı tıklamayı kutucuğa da iletir; ikinci kez çevirmemek için
    // etiketten gelen tıklama yok sayılır, iş kutucuğun kendi tıklamasında yapılır
    if (event && event.target !== checkbox && event.target.closest('label')) return;

    if (event && event.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
    }

    // Başlık satırları seçilemez
    if (checkbox.value.startsWith('header_')) {
        checkbox.checked = false;
        return;
    }

    const targetTextareaId = CHECKBOX_TARGET_FIELDS[fieldId] || fieldId.replace('_secenekleri', '_hususlar');
    const textarea = document.getElementById(targetTextareaId);
    if (!textarea) {
        console.warn('Textarea bulunamadı:', fieldId, '->', targetTextareaId);
        return;
    }

    const templates = [];
    document.querySelectorAll(`input[name="${fieldId}"]:checked`).forEach(cb => {
        if (!cb.value.startsWith('header_') && cb.dataset.template) {
            // Şablondaki \n dizilerini gerçek satır sonuna çevir
            templates.push(cb.dataset.template.replace(/\n/g, '\n').replace(/&quot;/g, '"'));
        }
    });

    if (templates.length > 0) {
        const combinedText = templates.join('\n');
        if (fieldId === 'tespit_secenekleri' || fieldId === 'iddia_secenekleri') {
            textarea.value = combinedText + '\nhususları ortaya çıkmıştır.';
        } else if (fieldId === 'konu_secenekleri') {
            textarea.value = 'İlgi (a)\'da kayıtlı Makam Olurunda yer alan;\n' + combinedText + '\niddiaları inceleme/soruşturmanın konusunu oluşturmaktadır (Ek: …/…).';
        } else if (fieldId === 'sonuc_secenekleri') {
            textarea.value = 'Raporun önceki bölümlerinde açıklandığı üzere İlgi (a)\'da kayıtlı Makam Olurunda yer alan:\n\n' + combinedText + '\n\nuygun olacağı,\nyönündeki kanaatimizi arz ederiz.';
        } else {
            textarea.value = combinedText;
        }
    } else {
        textarea.value = '';
    }

    updatePreview();
}

function clearForm() {
    if (!confirm('Tüm form verileri silinecek. Emin misiniz?')) return;

    loadTemplate(state.currentTemplate);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =====================================================
// Document Save/Load Functions
// =====================================================

// Current editing document ID (null if new)
let editingDocumentId = null;

/**
 * Save or update document
 */
async function saveDocument() {
    // Auth kontrolü - giriş yapmamış kullanıcılar kaydedemez
    if (!AuthService || !AuthService.isLoggedIn()) {
        showToast('Veri kaydetmek için giriş yapmalısınız', 'error');
        window.location.hash = '#/login';
        return;
    }

    const saveBtn = document.getElementById('saveDocumentBtn');
    if (!saveBtn) return;

    // Get document ID from button data attribute
    const documentId = saveBtn.dataset.documentId || null;
    const isUpdate = !!documentId;

    // Validate required fields
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;
    let firstInvalid = null;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
            if (!firstInvalid) firstInvalid = field;
        } else {
            field.classList.remove('error');
        }
    });

    if (!isValid) {
        showToast('Lütfen zorunlu alanları doldurun', 'error');
        firstInvalid?.focus();
        return;
    }

    // Show loading state
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<span class="spinner"></span> Kaydediliyor...';

    try {
        const formData = collectFormData();
        const template = TEMPLATES[state.currentTemplate];

        const documentData = {
            template_code: state.currentTemplate,
            template_name: template.name,
            category: template.category,
            person_name: DataService._extractPersonName(formData),
            event_date: DataService._extractEventDate(formData),
            form_data: formData
        };

        let result;

        if (isUpdate) {
            // Update existing document
            result = await DataService.update(documentId, documentData);
            if (result.success) {
                clearCurrentDraft();
                showToast('Belge güncellendi', 'success');
                // Navigate to document detail
                navigateTo(`documents/${documentId}`);
            } else {
                throw new Error(result.error || 'Güncelleme başarısız');
            }
        } else {
            // Create new document
            result = await DataService.save(documentData);
            if (result.id) {
                clearCurrentDraft();
                showToast('Belge kaydedildi', 'success');
                // Navigate to document detail
                navigateTo(`documents/${result.id}`);
            } else {
                throw new Error('Kayıt başarısız');
            }
        }
    } catch (error) {
        console.error('Save error:', error);
        showToast('Kayıt sırasında hata oluştu: ' + error.message, 'error');

        // Reset button
        saveBtn.disabled = false;
        saveBtn.innerHTML = documentId
            ? '<span>🔄</span> Güncelle'
            : '<span>💾</span> Kaydet';
    }
}

// =====================================================
// Taslak (otomatik kayıt)
// =====================================================

// Kaydedilmemiş form verileri tarayıcıda kullanıcı + şablon + belge bazında
// saklanır; oturum süresi dolduğunda veya sayfa kapandığında iş kaybolmaz.
// Şablon yeniden açılınca taslağı geri yükleme seçeneği sunulur.
const DRAFT_PREFIX = 'teftis_draft:';
const DRAFT_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 günden eski taslaklar silinir
const draftState = { key: null, baseline: null, timer: null, interval: null };

function draftKeyFor(templateCode, documentId) {
    const user = typeof AuthService !== 'undefined' ? AuthService.getCurrentUser() : null;
    if (!user || !user.id) return null;
    return `${DRAFT_PREFIX}${user.id}:${templateCode}:${documentId || 'yeni'}`;
}

function readDraft(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function removeDraft(key) {
    try { localStorage.removeItem(key); } catch (e) { /* yoksay */ }
}

function purgeOldDrafts() {
    try {
        const now = Date.now();
        Object.keys(localStorage).forEach(key => {
            if (!key.startsWith(DRAFT_PREFIX)) return;
            const draft = readDraft(key);
            if (!draft || !draft.savedAt || now - new Date(draft.savedAt).getTime() > DRAFT_MAX_AGE_MS) {
                removeDraft(key);
            }
        });
    } catch (e) { /* yoksay */ }
}

function currentFormSnapshot() {
    if (!elements.form || !elements.form.isConnected) return null;
    return JSON.stringify(collectFormData());
}

function isFormDirty() {
    if (!draftState.key) return false;
    const snapshot = currentFormSnapshot();
    return snapshot !== null && snapshot !== draftState.baseline;
}

function saveDraftNow() {
    if (!draftState.key) return;
    const snapshot = currentFormSnapshot();
    if (snapshot === null) {
        stopDraftTracking();
        return;
    }
    if (snapshot === draftState.baseline) return;
    try {
        localStorage.setItem(draftState.key, JSON.stringify({
            savedAt: new Date().toISOString(),
            data: JSON.parse(snapshot)
        }));
    } catch (e) {
        console.warn('Taslak kaydedilemedi:', e);
    }
}

function scheduleDraftSave() {
    clearTimeout(draftState.timer);
    draftState.timer = setTimeout(saveDraftNow, 1000);
}

function stopDraftTracking() {
    clearTimeout(draftState.timer);
    clearInterval(draftState.interval);
    draftState.key = null;
    draftState.baseline = null;
}

// Kayıt başarılı olunca taslağı sil
function clearCurrentDraft() {
    if (draftState.key) removeDraft(draftState.key);
    stopDraftTracking();
}

function showDraftBanner(draft) {
    const form = elements.form;
    if (!form || !form.parentNode) return;
    const old = document.getElementById('draftBanner');
    if (old) old.remove();

    const savedAt = new Date(draft.savedAt).toLocaleString('tr-TR', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    const banner = document.createElement('div');
    banner.id = 'draftBanner';
    banner.className = 'draft-banner';
    banner.innerHTML = `
        <span>📝 Bu form için kaydedilmemiş bir taslak bulundu (${escapeHtml(savedAt)}).</span>
        <span class="draft-banner-actions">
            <button type="button" class="btn btn-sm btn-primary" data-action="restore">Geri yükle</button>
            <button type="button" class="btn btn-sm btn-secondary" data-action="discard">Sil</button>
        </span>`;
    banner.addEventListener('click', e => {
        const action = e.target.closest('button')?.dataset.action;
        if (!action) return;
        if (action === 'restore') {
            fillFormWithData(draft.data);
            setTimeout(updatePreview, 50);
            showToast('Taslak geri yüklendi', 'success');
        } else {
            removeDraft(draftState.key);
        }
        banner.remove();
    });
    form.parentNode.insertBefore(banner, form);
}

// Şablon formu yüklendikten (ve düzenleme modunda veriler doldurulduktan) sonra çağrılır
function startDraftTracking(templateCode, documentId) {
    stopDraftTracking();
    purgeOldDrafts();
    const key = draftKeyFor(templateCode, documentId);
    if (!key || !elements.form) return;

    draftState.key = key;
    draftState.baseline = currentFormSnapshot();

    const draft = readDraft(key);
    if (draft && draft.data && JSON.stringify(draft.data) !== draftState.baseline) {
        showDraftBanner(draft);
    }

    const form = elements.form;
    form.addEventListener('input', scheduleDraftSave);
    form.addEventListener('change', scheduleDraftSave);
    // Soru ekleme/silme gibi input olayı üretmeyen değişiklikler için
    draftState.interval = setInterval(saveDraftNow, 5000);
}

// Oturum kapanmadan / sayfadan çıkmadan önce taslağı kaydet ve izlemeyi bırak
function flushDraftAndStop() {
    saveDraftNow();
    stopDraftTracking();
}

function handleLogout() {
    flushDraftAndStop();
    AuthService.logout();
}

// Başka sayfaya geçerken (router DOM'u değiştirmeden önce) son durumu kaydet
window.addEventListener('hashchange', saveDraftNow);

window.addEventListener('beforeunload', e => {
    if (isFormDirty()) {
        saveDraftNow();
        e.preventDefault();
        e.returnValue = '';
    }
});

/**
 * Load document for editing
 */
async function loadDocumentForEdit(documentId) {
    const document = await DataService.getById(documentId);

    if (!document) {
        showToast('Belge bulunamadı', 'error');
        return null;
    }

    return document;
}

/**
 * Fill form with saved data
 */
function fillFormWithData(formData) {
    if (!formData) return;

    Object.entries(formData).forEach(([fieldId, value]) => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.value = value;
            field.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });

    // Handle Q&A items if present
    const qaData = formData.soru_cevap || formData.qa_items;
    if (qaData && Array.isArray(qaData)) {
        // Clear existing Q&A items
        state.qaItems = [];
        const qaContainer = document.getElementById('qaContainer');
        if (qaContainer) {
            qaContainer.innerHTML = '';

            // Add saved Q&A items
            qaData.forEach((item) => {
                addQaItem();
                const lastId = state.qaItems[state.qaItems.length - 1];
                if (lastId) {
                    const questionField = document.querySelector(`textarea[name="soru_${lastId}"]`);
                    const answerField = document.querySelector(`textarea[name="cevap_${lastId}"]`);

                    // Support both property names just in case
                    const questionText = item.soru || item.question || '';
                    const answerText = item.cevap || item.answer || '';

                    if (questionField) questionField.value = questionText;
                    if (answerField) answerField.value = answerText;
                }
            });
        }
    }

    // Handle Written Questions if present
    if (formData.written_questions && Array.isArray(formData.written_questions)) {
        state.writtenQuestions = [];
        const wqContainer = document.getElementById('writtenQuestionsContainer');
        if (wqContainer) {
            wqContainer.innerHTML = '';

            // Add saved items
            formData.written_questions.forEach(item => {
                addWrittenQuestion();
                const lastId = state.writtenQuestions[state.writtenQuestions.length - 1];
                if (lastId) {
                    const field = document.querySelector(`textarea[name="written_question_${lastId}"]`);
                    if (field) field.value = item.question || '';
                }
            });
        }
    }

    updatePreview();
}

// =====================================================
// Toast Notification
// =====================================================

function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${escapeHtml(message)}</span>
    `;

    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add fadeOut animation and toast styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut { 
        from { opacity: 1; transform: translateY(0); } 
        to { opacity: 0; transform: translateY(-10px); } 
    }
    
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        background: var(--bg-card, #1e1e35);
        border: 1px solid var(--border-color, #3a3a5c);
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .toast.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .toast-success { border-left: 4px solid #10b981; }
    .toast-error { border-left: 4px solid #ef4444; }
    .toast-warning { border-left: 4px solid #f59e0b; }
    .toast-info { border-left: 4px solid #6366f1; }
    
    .toast-icon { font-size: 1.2rem; }
    .toast-message { color: var(--text-primary, #fff); font-size: 0.9rem; }
    
    .btn-success {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        border: none;
    }
    
    .btn-success:hover {
        background: linear-gradient(135deg, #059669 0%, #047857 100%);
    }
    
    .spinner {
        display: inline-block;
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    input.error, textarea.error, select.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
`;
document.head.appendChild(style);

// Dizi Pusulası için ek satırı ekleme fonksiyonu
let diziEkItems = [];
let diziEkCounter = 0;

function addDiziEkItem() {
    diziEkCounter++;
    const newItem = {
        id: diziEkCounter,
        parca_sayisi: '',
        aciklama: ''
    };
    diziEkItems.push(newItem);
    renderDiziEkItems();
    triggerPreviewUpdate();
}

function removeDiziEkItem(id) {
    diziEkItems = diziEkItems.filter(item => item.id !== id);
    renderDiziEkItems();
    triggerPreviewUpdate();
}

function updateDiziEkItem(id, field, value) {
    const item = diziEkItems.find(i => i.id === id);
    if (item) {
        item[field] = value;
        triggerPreviewUpdate();
    }
}

function renderDiziEkItems() {
    const container = document.getElementById('diziEkContainer');
    if (!container) return;

    if (diziEkItems.length === 0) {
        container.innerHTML = '<p style="color: #666; font-style: italic;">Henüz ek eklenmedi. Aşağıdaki butona tıklayarak ek ekleyebilirsiniz.</p>';
        return;
    }

    container.innerHTML = diziEkItems.map((item, idx) => `
        <div class="dizi-ek-item" style="display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px; padding: 12px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef;">
            <div style="display: flex; flex-direction: column; align-items: center; min-width: 50px;">
                <span style="font-weight: bold; color: #495057;">${idx + 1}.</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; width: 80px;">
                <label style="font-size: 11px; color: #6c757d;">Parça Sayısı</label>
                <input type="number" value="${escapeHtml(item.parca_sayisi ?? '')}" ${uiAction('input', 'updateDiziEkItem', item.id, 'parca_sayisi', '$value')} placeholder="1" style="width: 60px; padding: 8px; border: 1px solid #ced4da; border-radius: 4px; text-align: center;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
                <label style="font-size: 11px; color: #6c757d;">Ekin Kime ve Neye Ait Olduğu</label>
                <textarea ${uiAction('input', 'updateDiziEkItem', item.id, 'aciklama', '$value')} placeholder="Örn: Teftiş Kurulu Başkanlığının gg.aa.yyyy tarihli ve ..... sayılı görev emri" style="width: 100%; padding: 8px; border: 1px solid #ced4da; border-radius: 4px; resize: vertical; min-height: 40px; font-family: inherit;">${escapeHtml(item.aciklama || '')}</textarea>
            </div>
            <button type="button" ${uiAction('click', 'removeDiziEkItem', item.id)} style="padding: 8px 12px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; align-self: center;" title="Bu eki sil">🗑️</button>
        </div>
    `).join('');
}

function getDiziEkData() {
    return diziEkItems.map((item, idx) => ({
        parca_sayisi: item.parca_sayisi,
        aciklama: item.aciklama
    }));
}
