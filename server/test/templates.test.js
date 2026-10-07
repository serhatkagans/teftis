// Ön yüz şablon testleri: public/ betiklerini jsdom içinde yükler, her şablonun
// önizleme ve PDF içeriğini zararlı girdiyle üretip HTML kaçışını denetler.
const { test, before } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const PUBLIC_DIR = path.join(__dirname, '..', '..', 'public');
// Betikler index.html'deki sırayla yüklenir; yeni dosya eklenince test listesi ayrıca güncellenmez
const SCRIPTS = [...fs.readFileSync(path.join(PUBLIC_DIR, 'index.html'), 'utf8').matchAll(/<script src="([^"?:]+)(?:\?[^"]*)?"><\/script>/g)]
    .map(match => match[1]);

// Kullanıcının forma yazabileceği tehlikeli metin
const PAYLOAD = '<img src=x onerror="window.__xss=1"><script>window.__xss=1</script>"\'&';

let win;
let t;

before(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="breadcrumbContainer"><nav id="breadcrumb"></nav></div><main id="mainContent"></main></body></html>', {
        runScripts: 'outside-only',
        url: 'http://localhost/'
    });
    win = dom.window;
    win.fetch = () => Promise.reject(new Error('testte ağ yok'));

    // Tüm betikler tek parça çalıştırılır ki const tanımları birbirini görsün
    const source = SCRIPTS.map(file => fs.readFileSync(path.join(PUBLIC_DIR, file), 'utf8')).join('\n;\n')
        + '\n;window.__t = { TEMPLATES, DOCUMENTS, TEMPLATE_LIBRARY, state, escapeHtml, escapeFormData, buildDocumentElement, uiAction, UI_ACTIONS, DataService,'
        + '    setCurrentRoute: route => { currentRoute = route; }, setDiziEkItems: items => { diziEkItems = items; } };';
    win.eval(source);
    t = win.__t;
});

function sampleValue(field) {
    switch (field.type) {
        case 'date': return '2026-10-07';
        case 'time': return '10:30';
        case 'number': return '3';
        case 'select': {
            const first = (field.options || [])[0];
            return first && typeof first === 'object' ? first.value : (first || PAYLOAD);
        }
        case 'checkboxlist': return [PAYLOAD];
        default: return PAYLOAD;
    }
}

// Şablonun tüm alanlarını zararlı girdiyle doldurur
function buildFormData(template) {
    const data = {
        soru_cevap: [{ index: 1, soru: PAYLOAD, cevap: PAYLOAD }, { index: 2, soru: PAYLOAD, cevap: PAYLOAD }],
        written_questions: [{ index: 1, question: PAYLOAD, answer: PAYLOAD }],
        qa_items: [{ question: PAYLOAD, answer: PAYLOAD }],
        ek_listesi: [{ sira: '1', aciklama: PAYLOAD, sayfa: '2' }]
    };
    for (const section of template.sections || []) {
        for (const field of section.fields || []) {
            if (field.id) data[field.id] = sampleValue(field);
        }
    }
    return data;
}

function assertNoInjectedMarkup(html, label) {
    const holder = win.document.createElement('div');
    holder.innerHTML = html;
    assert.equal(holder.querySelectorAll('script').length, 0, `${label}: <script> etiketi kaçışlanmamış`);
    assert.equal(holder.querySelectorAll('[onerror]').length, 0, `${label}: onerror özniteliği kaçışlanmamış`);
}

test('escapeHtml HTML özel karakterlerini kaçışlar', () => {
    assert.equal(t.escapeHtml('<a href="x">\'&\'</a>'), '&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;');
    // jsdom nesneleri ayrı bir realm'de; içerik JSON üzerinden karşılaştırılır
    assert.equal(JSON.stringify(t.escapeFormData({ a: '<b>', n: 5, list: ['<i>'], nested: { x: '&' } })),
        JSON.stringify({ a: '&lt;b&gt;', n: 5, list: ['&lt;i&gt;'], nested: { x: '&amp;' } }));
});

test('kütüphanedeki her etkin şablonun PDF üreticisi var', () => {
    const missing = t.TEMPLATE_LIBRARY
        .filter(entry => entry.implemented && t.TEMPLATES[entry.code])
        .map(entry => entry.code)
        .filter(code => !t.DOCUMENTS[code]);
    assert.equal(missing.join(', '), '');
});

test('her şablonun PDF içeriği zararlı girdiyle hatasız üretilir ve kaçışlanır', () => {
    const codes = Object.keys(t.DOCUMENTS);
    assert.ok(codes.length >= 50, `beklenenden az şablon: ${codes.length}`);

    const failures = [];
    for (const code of codes) {
        const template = t.TEMPLATES[code] || { sections: [] };
        try {
            const element = t.buildDocumentElement(code, buildFormData(template));
            assert.ok(element && element.outerHTML, 'PDF içeriği boş');
            assert.ok(element.textContent.trim().length > 0, 'PDF içeriğinde metin yok');
            assertNoInjectedMarkup(element.outerHTML, `PDF ${code}`);
        } catch (error) {
            failures.push(`${code}: ${error.message}`);
        }
    }
    assert.equal(failures.join(' | '), '');
    assert.equal(win.__xss, undefined);
});

test('her şablonun PDF içeriği boş formla da hatasız üretilir', () => {
    const failures = [];
    for (const code of Object.keys(t.DOCUMENTS)) {
        try {
            t.buildDocumentElement(code, {});
        } catch (error) {
            failures.push(`${code}: ${error.message}`);
        }
    }
    assert.equal(failures.join(' | '), '');
});

test('her belge yalnızca bir kez tanımlanır ve her form şablonunun belgesi vardır', () => {
    const withoutDocument = Object.keys(t.TEMPLATES).filter(code => !t.DOCUMENTS[code]);
    const withoutForm = Object.keys(t.DOCUMENTS).filter(code => !t.TEMPLATES[code]);
    assert.equal(withoutDocument.join(', '), '', 'belgesi olmayan form şablonları');
    assert.equal(withoutForm.join(', '), '', 'formu olmayan belgeler');
});

// Formda olup belgede kullanılmayan alanlar. Seçenek kutucukları (…_secenekleri)
// metin alanlarını doldurur; onlar zaten bu listeye girmez.
const UNUSED_FIELDS_ALLOWED = {
    '2.1': ['kurum_bilgisi'],
    '6.4': ['personel_tc', 'uzaklastirma_nedeni'],
    '7.1': ['tanik2_unvan'],
    '7.2': ['tanik2_unvan'],
    '8.1': ['ifade2_unvan'],
    '15.4': ['sanik_gorevi']
};

test('formdaki her metin alanı belgeye yansır', () => {
    const failures = [];
    for (const [code, template] of Object.entries(t.TEMPLATES)) {
        const fields = (template.sections || []).flatMap(section => section.fields || [])
            .filter(field => field.id && ['text', 'textarea', 'tel', 'number'].includes(field.type));
        const data = {};
        fields.forEach((field, index) => { data[field.id] = `ALAN${index}X`; });
        const text = t.buildDocumentElement(code, data).textContent;
        const allowed = UNUSED_FIELDS_ALLOWED[code] || [];
        const missing = fields.filter((field, index) => !text.includes(`ALAN${index}X`) && !allowed.includes(field.id));
        if (missing.length) failures.push(`${code}: ${missing.map(field => field.id).join(', ')}`);
    }
    assert.equal(failures.join(' | '), '');
});

test('her şablonun önizlemesi zararlı girdiyle hatasız üretilir ve kaçışlanır', () => {
    const failures = [];
    const realCollect = win.collectFormData;
    const realRender = win.renderPaginatedPreview;
    let rendered = null;
    win.renderPaginatedPreview = (root, html) => { rendered = html; };

    try {
        for (const code of Object.keys(t.TEMPLATES)) {
            const data = buildFormData(t.TEMPLATES[code]);
            win.collectFormData = () => data;
            t.state.currentTemplate = code;
            rendered = null;
            try {
                win.updatePreview();
                assert.ok(rendered && rendered.length > 0, 'önizleme boş');
                assertNoInjectedMarkup(rendered, `Önizleme ${code}`);
                // Önizleme, indirilen PDF'in işaretlemesiyle birebir aynı olmalı
                assert.equal(rendered, t.buildDocumentElement(code, data).outerHTML, 'önizleme PDF ile aynı değil');
            } catch (error) {
                failures.push(`${code}: ${error.message}`);
            }
        }
    } finally {
        win.collectFormData = realCollect;
        win.renderPaginatedPreview = realRender;
    }
    assert.equal(failures.join(' | '), '');
});

test('uiAction kaçışlanmış ve izin listeli işlem özniteliği yazar', () => {
    const value = `x');window.__xss=1;//"<b>`;
    const holder = win.document.createElement('div');
    holder.innerHTML = `<button ${t.uiAction('click', 'deleteDocument', value)}></button>`;
    const button = holder.querySelector('button');
    assert.equal(button.getAttribute('data-click'), 'deleteDocument');
    assert.equal(JSON.parse(button.dataset.args)[0], value);
    assert.throws(() => t.uiAction('click', 'eval', 'x'), /İzin listesinde/);
});

test('izin listesindeki her arayüz işlemi tanımlı bir fonksiyon', () => {
    const missing = [...t.UI_ACTIONS].filter(name => typeof win[name] !== 'function');
    assert.equal(missing.join(', '), '');
});

test('tek dinleyici en yakın işlemi çalıştırır, izinsiz işlemi çalıştırmaz', () => {
    const calls = [];
    const realNavigate = win.navigateTo;
    const realDelete = win.deleteDocument;
    win.navigateTo = target => calls.push(`navigateTo:${target}`);
    win.deleteDocument = id => calls.push(`deleteDocument:${id}`);
    const row = win.document.createElement('div');
    try {
        row.innerHTML = `<div ${t.uiAction('click', 'navigateTo', 'documents/1')}>`
            + `<button ${t.uiAction('click', 'deleteDocument', '1')}>Sil</button><span>satır</span></div>`;
        win.document.body.appendChild(row);
        row.querySelector('button').click(); // yalnızca silme, satır açılmaz
        row.querySelector('span').click();
        row.innerHTML = '<button data-click="eval" data-args="[&quot;window.__xss=1&quot;]">x</button>';
        row.querySelector('button').click();
    } finally {
        row.remove();
        win.navigateTo = realNavigate;
        win.deleteDocument = realDelete;
    }
    assert.equal(calls.join(' | '), 'deleteDocument:1 | navigateTo:documents/1');
    assert.equal(win.__xss, undefined);
});

test('adresten gelen kategori adı sayfaya ve breadcrumb\'a kaçışlanarak yazılır', () => {
    win.renderCategoryPage(PAYLOAD);
    t.setCurrentRoute({ view: 'category', category: PAYLOAD });
    win.updateBreadcrumb();
    assertNoInjectedMarkup(win.document.getElementById('mainContent').innerHTML, 'Kategori sayfası');
    const breadcrumb = win.document.getElementById('breadcrumb');
    assertNoInjectedMarkup(breadcrumb.innerHTML, 'Breadcrumb');
    assert.ok(breadcrumb.textContent.includes(PAYLOAD));
    assert.equal(win.__xss, undefined);
});

test('bildirim ve dizi pusulası ek listesi kullanıcı metnini kaçışlar', () => {
    win.showToast(PAYLOAD, 'error');
    const toast = win.document.querySelector('.toast');
    assertNoInjectedMarkup(toast.innerHTML, 'Bildirim');
    assert.ok(toast.textContent.includes(PAYLOAD));

    const container = win.document.createElement('div');
    container.id = 'diziEkContainer';
    win.document.body.appendChild(container);
    t.setDiziEkItems([{ id: 1, parca_sayisi: PAYLOAD, aciklama: '</textarea>' + PAYLOAD }]);
    win.renderDiziEkItems();
    assertNoInjectedMarkup(container.innerHTML, 'Dizi ek listesi');
    assert.equal(container.querySelector('textarea').value, '</textarea>' + PAYLOAD);
    container.remove();
    assert.equal(win.__xss, undefined);
});

test('belge listesi sunucudan gelen değerleri ve kimlikleri güvenle yazar', async () => {
    const dataService = t.DataService;
    const realGetPage = dataService.getPage;
    const evilId = `x');window.__xss=1;//`;
    dataService.getPage = async () => ({
        items: [{ id: evilId, template_code: PAYLOAD, template_name: PAYLOAD, category: PAYLOAD, person_name: PAYLOAD, created_at: '2026-10-07T10:00:00Z' }],
        total: 1, page: 1, limit: 20, pages: 1
    });
    try {
        await win.renderDocumentsListPage();
        const results = win.document.getElementById('documentsResults');
        assertNoInjectedMarkup(results.innerHTML, 'Belge listesi');
        // Kimlik, işlem özniteliğine olduğu gibi (veri olarak) taşınmalı
        const row = results.querySelector('tbody tr');
        assert.equal(row.getAttribute('data-click'), 'navigateTo');
        assert.equal(JSON.parse(row.dataset.args)[0], 'documents/' + encodeURIComponent(evilId));
        const deleteButton = row.querySelector('.btn-danger');
        assert.equal(deleteButton.getAttribute('data-click'), 'deleteDocument');
        assert.equal(JSON.parse(deleteButton.dataset.args)[0], evilId);
    } finally {
        dataService.getPage = realGetPage;
    }
});

test('oturum token gövdesi Türkçe karakterli adlarla da çözülür (base64url + UTF-8)', () => {
    const jwt = require('jsonwebtoken');
    // Gövdesinde base64url'e özgü - veya _ karakteri çıkan bir ad bul
    let token;
    for (let i = 0; i < 200 && !token; i++) {
        const candidate = jwt.sign({ id: 'u1', name: `${'a'.repeat(i)} Müfettiş Şükrü Işık` }, 'test-anahtari', { expiresIn: '40m' });
        if (/[-_]/.test(candidate.split('.')[1])) token = candidate;
    }
    assert.ok(token, 'base64url karakterli token üretilemedi');

    const payload = win.AuthService._decodePayload(token);
    assert.ok(payload.name.endsWith('Müfettiş Şükrü Işık'));

    win.localStorage.setItem('auth_token', token);
    win.localStorage.setItem('auth_user', JSON.stringify({ id: 'u1' }));
    assert.equal(win.AuthService.isLoggedIn(), true);
    assert.ok(win.AuthService.getRemainingTime() > 30 * 60 * 1000);
    win.localStorage.clear();
});
