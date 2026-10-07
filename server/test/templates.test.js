// Ön yüz şablon testleri: public/ betiklerini jsdom içinde yükler, her şablonun
// önizleme ve PDF içeriğini zararlı girdiyle üretip HTML kaçışını denetler.
const { test, before } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const PUBLIC_DIR = path.join(__dirname, '..', '..', 'public');
const SCRIPTS = ['themes.js', 'auth-service.js', 'data-service.js', 'templates_data.js', 'app.js', 'template121_patch.js', 'router.js'];

// Kullanıcının forma yazabileceği tehlikeli metin
const PAYLOAD = '<img src=x onerror="window.__xss=1"><script>window.__xss=1</script>"\'&';

let win;
let t;

before(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><main id="mainContent"></main></body></html>', {
        runScripts: 'outside-only',
        url: 'http://localhost/'
    });
    win = dom.window;
    win.fetch = () => Promise.reject(new Error('testte ağ yok'));

    // Tüm betikler tek parça çalıştırılır ki const tanımları birbirini görsün
    const source = SCRIPTS.map(file => fs.readFileSync(path.join(PUBLIC_DIR, file), 'utf8')).join('\n;\n')
        + '\n;window.__t = { TEMPLATES, PDF_TEMPLATES, TEMPLATE_LIBRARY, state, escapeHtml, escapeFormData };';
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
        .filter(code => !t.PDF_TEMPLATES[code]);
    assert.equal(missing.join(', '), '');
});

test('her şablonun PDF içeriği zararlı girdiyle hatasız üretilir ve kaçışlanır', () => {
    const codes = Object.keys(t.PDF_TEMPLATES);
    assert.ok(codes.length >= 50, `beklenenden az şablon: ${codes.length}`);

    const failures = [];
    for (const code of codes) {
        const template = t.TEMPLATES[code] || { sections: [] };
        try {
            const element = t.PDF_TEMPLATES[code].build(t.escapeFormData(buildFormData(template)));
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
    for (const code of Object.keys(t.PDF_TEMPLATES)) {
        try {
            t.PDF_TEMPLATES[code].build({});
        } catch (error) {
            failures.push(`${code}: ${error.message}`);
        }
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
