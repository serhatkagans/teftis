// Sunucu API testleri: geçici bir veritabanı ve kayıt klasörüyle gerçek HTTP istekleri atar.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'teftis-test-'));
process.env.DB_PATH = path.join(tmpDir, 'test.db');
process.env.LOG_DIR = path.join(tmpDir, 'logs');
process.env.BACKUP_DIR = path.join(tmpDir, 'backups');
process.env.JWT_SECRET = 'x'.repeat(48);
delete process.env.ALLOW_REGISTRATION;
delete process.env.CORS_ORIGIN;

const { app, initDatabase, flushDatabase, backupDatabase } = require('../index');

let server;
let baseUrl;

before(async () => {
    await initDatabase();
    server = app.listen(0);
    await new Promise(resolve => server.once('listening', resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(() => {
    server.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
});

async function api(method, url, { token, body, raw } = {}) {
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    if (body !== undefined || raw !== undefined) headers['Content-Type'] = 'application/json';
    const response = await fetch(baseUrl + url, {
        method,
        headers,
        body: raw !== undefined ? raw : (body !== undefined ? JSON.stringify(body) : undefined)
    });
    const text = await response.text();
    let data = text;
    try { data = JSON.parse(text); } catch (e) { /* metin yanıt */ }
    return { status: response.status, data };
}

async function register(username) {
    const res = await api('POST', '/api/auth/register', { body: { username, password: 'gizli-sifre', name: `${username} Ad` } });
    assert.equal(res.status, 201, JSON.stringify(res.data));
    return res.data.token;
}

async function createDocument(token, formData, extra = {}) {
    const res = await api('POST', '/api/documents', {
        token,
        body: { template_code: '1.1', template_name: 'Şikayetçi İfade Tutanağı', category: 'İfade Tutanakları', form_data: formData, ...extra }
    });
    assert.equal(res.status, 201, JSON.stringify(res.data));
    return res.data.id;
}

function readLogLines(kind) {
    const dir = process.env.LOG_DIR;
    return fs.readdirSync(dir)
        .filter(f => f.startsWith(`${kind}-`))
        .flatMap(f => fs.readFileSync(path.join(dir, f), 'utf8').trim().split('\n'))
        .filter(Boolean)
        .map(line => JSON.parse(line));
}

let tokenA;
let tokenB;

test('ilk kullanıcı kayıt olabilir, sonrakiler ALLOW_REGISTRATION olmadan olamaz', async () => {
    tokenA = await register('ayse');

    const blocked = await api('POST', '/api/auth/register', { body: { username: 'mehmet', password: 'gizli-sifre', name: 'Mehmet' } });
    assert.equal(blocked.status, 403);

    process.env.ALLOW_REGISTRATION = 'true';
    try {
        tokenB = await register('mehmet');
    } finally {
        delete process.env.ALLOW_REGISTRATION;
    }
});

test('giriş: doğru şifre token verir, yanlış şifre 401 döner', async () => {
    const ok = await api('POST', '/api/auth/login', { body: { username: 'ayse', password: 'gizli-sifre' } });
    assert.equal(ok.status, 200);
    assert.ok(ok.data.token);
    assert.equal(ok.data.user.username, 'ayse');

    const wrong = await api('POST', '/api/auth/login', { body: { username: 'ayse', password: 'yanlis' } });
    assert.equal(wrong.status, 401);

    const unknown = await api('POST', '/api/auth/login', { body: { username: 'yok', password: 'yanlis' } });
    assert.equal(unknown.status, 401);
});

test('10 başarısız denemeden sonra giriş geçici olarak engellenir', async () => {
    for (let i = 0; i < 10; i++) {
        await api('POST', '/api/auth/login', { body: { username: 'kilitli', password: 'yanlis' } });
    }
    const res = await api('POST', '/api/auth/login', { body: { username: 'kilitli', password: 'yanlis' } });
    assert.equal(res.status, 429);
});

test('belge uç noktaları token ister; geçersiz token 401 döner', async () => {
    assert.equal((await api('GET', '/api/documents')).status, 401);
    assert.equal((await api('GET', '/api/documents', { token: 'bozuk.token.degeri' })).status, 401);
    assert.equal((await api('POST', '/api/pdf', { body: { html: '<p>x</p>' } })).status, 401);
});

test('belge oluşturma, okuma, güncelleme ve silme', async () => {
    const id = await createDocument(tokenA, { sorusturma_konusu: 'Ali Veli', tarih: '2026-10-01', telefon: '555' });

    const got = await api('GET', `/api/documents/${id}`, { token: tokenA });
    assert.equal(got.status, 200);
    assert.equal(got.data.form_data.sorusturma_konusu, 'Ali Veli');
    assert.equal(got.data.telefon, '555');

    const updated = await api('PUT', `/api/documents/${id}`, { token: tokenA, body: { form_data: { sorusturma_konusu: 'Ali Yılmaz' } } });
    assert.equal(updated.status, 200);

    const after = await api('GET', `/api/documents/${id}`, { token: tokenA });
    assert.equal(after.data.sorusturma_konusu, 'Ali Yılmaz');
    // Formdan silinen alan aranabilir sütunda da boşalmalı
    assert.equal(after.data.telefon, null);
    assert.equal(after.data.tarih, null);

    assert.equal((await api('DELETE', `/api/documents/${id}`, { token: tokenA })).status, 200);
    assert.equal((await api('GET', `/api/documents/${id}`, { token: tokenA })).status, 404);
});

test('şablon kodu olmadan belge oluşturulamaz', async () => {
    const res = await api('POST', '/api/documents', { token: tokenA, body: { form_data: {} } });
    assert.equal(res.status, 400);
});

test('kullanıcı başkasının belgesini göremez, değiştiremez, silemez', async () => {
    const id = await createDocument(tokenA, { ad_soyad: 'Gizli Kişi' });

    assert.equal((await api('GET', `/api/documents/${id}`, { token: tokenB })).status, 404);
    assert.equal((await api('PUT', `/api/documents/${id}`, { token: tokenB, body: { form_data: { ad_soyad: 'x' } } })).status, 404);
    assert.equal((await api('DELETE', `/api/documents/${id}`, { token: tokenB })).status, 404);
    assert.equal((await api('GET', `/api/documents/${id}/history`, { token: tokenB })).status, 404);

    const listB = await api('GET', '/api/documents?page=1', { token: tokenB });
    assert.ok(listB.data.items.every(doc => doc.id !== id));
});

test('sayfalama: toplam, sayfa sayısı ve sayfa içerikleri doğru', async () => {
    const token = tokenB;
    for (let i = 1; i <= 25; i++) {
        await createDocument(token, { ad_soyad: `Kişi ${i}` });
    }

    const p1 = await api('GET', '/api/documents?page=1&limit=10', { token });
    assert.equal(p1.status, 200);
    assert.equal(p1.data.total, 25);
    assert.equal(p1.data.pages, 3);
    assert.equal(p1.data.items.length, 10);

    const p3 = await api('GET', '/api/documents?page=3&limit=10', { token });
    assert.equal(p3.data.items.length, 5);

    // Sayfalar çakışmamalı ve tüm belgeleri kapsamalı
    const p2 = await api('GET', '/api/documents?page=2&limit=10', { token });
    const ids = new Set([...p1.data.items, ...p2.data.items, ...p3.data.items].map(d => d.id));
    assert.equal(ids.size, 25);

    const beyond = await api('GET', '/api/documents?page=9&limit=10', { token });
    assert.equal(beyond.data.items.length, 0);
    assert.equal(beyond.data.total, 25);

    const capped = await api('GET', '/api/documents?page=1&limit=100000', { token });
    assert.equal(capped.data.limit, 100);

    const defaults = await api('GET', '/api/documents?page=abc', { token });
    assert.equal(defaults.data.page, 1);
    assert.equal(defaults.data.limit, 20);

    // page verilmezse eski davranış: tüm liste dizi olarak
    const all = await api('GET', '/api/documents', { token });
    assert.ok(Array.isArray(all.data));
    assert.equal(all.data.length, 25);
});

test('arama Türkçe büyük/küçük harfte çalışır ve joker karakterleri harfiyen arar', async () => {
    await createDocument(tokenA, { sorusturma_konusu: 'ŞAHİN IŞIK' });
    await createDocument(tokenA, { sorusturma_konusu: '%100 Yüzde' });

    const lower = await api('GET', `/api/documents?page=1&search=${encodeURIComponent('şahin ışık')}`, { token: tokenA });
    assert.equal(lower.data.total, 1);
    assert.equal(lower.data.items[0].sorusturma_konusu, 'ŞAHİN IŞIK');

    const percent = await api('GET', `/api/documents?page=1&search=${encodeURIComponent('%')}`, { token: tokenA });
    assert.equal(percent.data.total, 1);

    const byTemplate = await api('GET', `/api/documents?page=1&search=${encodeURIComponent('tutanağı')}`, { token: tokenA });
    assert.ok(byTemplate.data.total >= 2);

    const legacy = await api('GET', `/api/documents/search/${encodeURIComponent('şahin')}`, { token: tokenA });
    assert.equal(legacy.data.length, 1);
});

test('kategori filtresi uygulanır', async () => {
    await createDocument(tokenA, { ad_soyad: 'Bilirkişi' }, { template_code: '5.1', template_name: 'Bilirkişi', category: 'Bilirkişi' });
    const res = await api('GET', `/api/documents?page=1&category=${encodeURIComponent('Bilirkişi')}`, { token: tokenA });
    assert.equal(res.data.total, 1);
    assert.equal(res.data.items[0].template_code, '5.1');
});

test('işlem geçmişi: oluşturma, görüntüleme, güncelleme kayda geçer', async () => {
    const id = await createDocument(tokenA, { ad_soyad: 'Geçmiş Testi' });
    await api('GET', `/api/documents/${id}`, { token: tokenA });
    await api('PUT', `/api/documents/${id}`, { token: tokenA, body: { form_data: { ad_soyad: 'Yeni' } } });

    const res = await api('GET', `/api/documents/${id}/history`, { token: tokenA });
    assert.equal(res.status, 200);
    // En yeni kayıt önce gelir
    assert.deepEqual(res.data.map(e => e.action), ['document.update', 'document.view', 'document.create']);
    assert.ok(res.data.every(e => e.username === 'ayse'));
});

test('giriş denemeleri ve çıkış kayıt tablosuna yazılır, veritabanı diske kaydedilir', async () => {
    const login = await api('POST', '/api/auth/login', { body: { username: 'ayse', password: 'gizli-sifre' } });
    await api('POST', '/api/auth/login', { body: { username: 'ayse', password: 'yanlis' } });
    await api('POST', '/api/auth/logout', { token: login.data.token });
    flushDatabase();

    const initSqlJs = require('sql.js');
    const SQL = await initSqlJs();
    const copy = new SQL.Database(fs.readFileSync(process.env.DB_PATH));
    const actions = copy.exec("SELECT action, username, details FROM audit_log WHERE action LIKE 'auth.%' ORDER BY id")[0].values;
    copy.close();

    const names = actions.map(row => row[0]);
    assert.ok(names.includes('auth.register'));
    assert.ok(names.includes('auth.login'));
    assert.ok(names.includes('auth.login_failed'));
    assert.ok(names.includes('auth.login_blocked'));
    assert.ok(names.includes('auth.logout'));
    // Şifre hiçbir kayda yazılmamalı
    assert.ok(actions.every(row => !String(row[2] || '').includes('yanlis')));
});

test('erişim kaydı her API isteğini yazar, arama metnini yazmaz', async () => {
    await api('GET', `/api/documents/search/${encodeURIComponent('12345678901')}`, { token: tokenA });
    const lines = readLogLines('access');
    assert.ok(lines.length > 0);
    const entry = lines.find(l => l.path === '/api/documents/search/***');
    assert.ok(entry, 'arama isteği maskelenmiş olarak kaydedilmeli');
    assert.equal(entry.user, 'ayse');
    assert.equal(entry.status, 200);
    assert.ok(lines.every(l => !JSON.stringify(l).includes('12345678901')));
});

test('bozuk JSON 400 döner ve hata kaydına yazılır', async () => {
    const res = await api('POST', '/api/documents', { token: tokenA, raw: '{bozuk' });
    assert.equal(res.status, 400);
    assert.equal(res.data.error, 'Geçersiz JSON');
    const errors = readLogLines('error');
    assert.ok(errors.some(e => e.status === 400 && e.path === '/api/documents'));
});

test('bilinmeyen API adresi JSON 404 döner', async () => {
    const res = await api('GET', '/api/olmayan', { token: tokenA });
    assert.equal(res.status, 404);
    assert.equal(res.data.error, 'Bulunamadı');
});

test('PDF uç noktası html alanı olmadan 400 döner', async () => {
    const res = await api('POST', '/api/pdf', { token: tokenA, body: {} });
    assert.equal(res.status, 400);
});

test('yalnızca public/ klasörü sunulur; sunucu ve proje dosyalarına erişilemez', async () => {
    const index = await fetch(`${baseUrl}/`);
    assert.equal(index.status, 200);
    assert.match(await index.text(), /Teftiş Kurulu Başkanlığı/);
    assert.equal((await fetch(`${baseUrl}/app.js`)).status, 200);

    for (const url of ['/server/index.js', '/%73erver/index.js', '/package.json', '/.gitignore',
        '/README.md', '/12.1._Disiplin_Sorusturmasi.docx', '/server/.jwt_secret', '/test.db', '/../server/index.js']) {
        const res = await fetch(baseUrl + url);
        assert.equal(res.status, 404, url);
    }
});

test('günlük yedek oluşturulur ve eski yedekler silinir', () => {
    const dir = process.env.BACKUP_DIR;
    fs.mkdirSync(dir, { recursive: true });
    const old = path.join(dir, 'teftis-2020-01-01.db');
    fs.writeFileSync(old, 'eski');

    const now = new Date('2026-10-07T12:00:00Z');
    const first = backupDatabase(now);
    assert.equal(first.created, true);
    assert.ok(fs.existsSync(path.join(dir, 'teftis-2026-10-07.db')));
    assert.ok(!fs.existsSync(old));

    // Aynı gün ikinci kez yedek alınmaz
    assert.equal(backupDatabase(now).created, false);
});
