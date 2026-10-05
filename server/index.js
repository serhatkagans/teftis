/**
 * Teftiş Kurulu Başkanlığı İnceleme ve Soruşturma Modülü - Backend Server (SQLite with sql.js)
 * Hibrit Yaklaşım: Ortak alanlar sütun + form_data JSON
 * Auth: JWT + bcrypt
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const initSqlJs = require('sql.js');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = loadJwtSecret();
const JWT_EXPIRES_IN = '40m';
// Yeni hesap açma varsayılan olarak kapalıdır. Kullanıcı eklemek için
// ALLOW_REGISTRATION=true verilir; hiç kullanıcı yoksa ilk hesap açılabilir.
const ALLOW_REGISTRATION = process.env.ALLOW_REGISTRATION === 'true';

// JWT anahtarı .env'de yoksa rastgele üretilip server/.jwt_secret dosyasında
// saklanır (yeniden başlatmada oturumlar düşmesin). Koddaki sabit bir anahtar
// herkesçe bilinir ve sahte oturum üretmeye izin verir.
function loadJwtSecret() {
    if (process.env.JWT_SECRET && process.env.JWT_SECRET.length >= 32) {
        return process.env.JWT_SECRET;
    }
    if (process.env.JWT_SECRET) {
        console.warn('⚠️  JWT_SECRET en az 32 karakter olmalı; server/.jwt_secret kullanılıyor');
    }
    const secretPath = path.join(__dirname, '.jwt_secret');
    if (fs.existsSync(secretPath)) {
        return fs.readFileSync(secretPath, 'utf8').trim();
    }
    const secret = crypto.randomBytes(48).toString('hex');
    fs.writeFileSync(secretPath, secret, { mode: 0o600 });
    console.log('🔑 Yeni JWT anahtarı üretildi:', secretPath);
    return secret;
}

// Nginx gibi yerel bir ters vekil arkasında gerçek istemci IP'si (deneme sınırı için)
app.set('trust proxy', 'loopback');

// Middleware
// Arayüz aynı adresten sunulduğu için CORS gerekmez; başka bir kaynaktan
// erişilecekse CORS_ORIGIN=https://ornek.gov.tr,https://... ile izin verilir.
if (process.env.CORS_ORIGIN) {
    app.use(cors({ origin: process.env.CORS_ORIGIN.split(',').map(o => o.trim()) }));
}
app.use(express.json({ limit: '10mb' }));

// Sunucu kodu, veritabanı ve bağımlılıklar dışarıya açılmasın
app.use((req, res, next) => {
    if (/^\/(server|node_modules|\.git|\.claude)(\/|$)/i.test(req.path) || /\.(py|db|sql|md)$/i.test(req.path)) {
        return res.status(404).end();
    }
    next();
});

// Serve static files from parent directory
app.use(express.static(path.join(__dirname, '..')));

// Database
let db;
const dbPath = path.join(__dirname, 'teftis.db');

async function initDatabase() {
    const SQL = await initSqlJs();

    // Load existing database or create new one
    if (fs.existsSync(dbPath)) {
        const fileBuffer = fs.readFileSync(dbPath);
        db = new SQL.Database(fileBuffer);
        console.log('✅ SQLite database loaded:', dbPath);
    } else {
        db = new SQL.Database();
        console.log('✅ SQLite database created:', dbPath);
    }

    // Initialize tables with common searchable columns
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            username TEXT UNIQUE,
            password TEXT,
            meb_id TEXT UNIQUE,
            email TEXT UNIQUE,
            name TEXT,
            role TEXT DEFAULT 'mufettis',
            auth_provider TEXT DEFAULT 'local',
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS documents (
            id TEXT PRIMARY KEY,
            user_id TEXT,
            template_code TEXT NOT NULL,
            template_name TEXT NOT NULL,
            category TEXT,
            
            -- Ortak aranabilir alanlar (tüm şablonlarda geçerli)
            sorusturma_konusu TEXT,
            ad_soyad TEXT,
            tc_kimlik TEXT,
            tarih TEXT,
            saat TEXT,
            yer TEXT,
            kurum_adi TEXT,
            konum TEXT,
            
            -- Şikayetçi/Tanık bilgileri
            sikayetci_adi TEXT,
            sikayetci_tc TEXT,
            tanik_adi TEXT,
            
            -- Müfettiş bilgileri
            muhakkik_adi TEXT,
            muhakkik_unvan TEXT,
            mufettis1_ad_soyad TEXT,
            mufettis2_ad_soyad TEXT,
            
            -- Diğer yaygın alanlar
            ikametgah_adresi TEXT,
            telefon TEXT,
            
            -- Tüm form verileri (tam veri - hiçbir şey kaybolmaz)
            form_data TEXT NOT NULL,
            
            pdf_url TEXT,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        );

        -- Indexes for fast searching
        CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);
        CREATE INDEX IF NOT EXISTS idx_documents_template_code ON documents(template_code);
        CREATE INDEX IF NOT EXISTS idx_documents_sorusturma_konusu ON documents(sorusturma_konusu);
        CREATE INDEX IF NOT EXISTS idx_documents_ad_soyad ON documents(ad_soyad);
        CREATE INDEX IF NOT EXISTS idx_documents_tc_kimlik ON documents(tc_kimlik);
        CREATE INDEX IF NOT EXISTS idx_documents_tarih ON documents(tarih);
        CREATE INDEX IF NOT EXISTS idx_documents_sikayetci_adi ON documents(sikayetci_adi);
    `);

    // Insert test user if not exists
    const testUser = db.exec("SELECT id FROM users WHERE id = '00000000-0000-0000-0000-000000000001'");
    if (testUser.length === 0) {
        db.run("INSERT INTO users (id, email, name, role) VALUES ('00000000-0000-0000-0000-000000000001', 'test@meb.gov.tr', 'Test Müfettiş', 'mufettis')");
    }

    saveDatabase();
    console.log('✅ Database tables initialized with searchable columns');
}

function saveDatabase() {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(dbPath, buffer);
}

// Helper: Extract common fields from form_data
function extractCommonFields(formData) {
    return {
        sorusturma_konusu: formData.sorusturma_konusu || null,
        ad_soyad: formData.ad_soyad || null,
        tc_kimlik: formData.tc_kimlik_uyruk || formData.tc_kimlik || null,
        tarih: formData.tarih || null,
        saat: formData.saat || null,
        yer: formData.yer || null,
        kurum_adi: formData.kurum_adi || null,
        konum: formData.konum || null,
        sikayetci_adi: formData.sikayetci_adi || null,
        sikayetci_tc: formData.sikayetci_tc || null,
        tanik_adi: formData.tanik_adi || null,
        muhakkik_adi: formData.muhakkik_adi || null,
        muhakkik_unvan: formData.muhakkik_unvan || null,
        mufettis1_ad_soyad: formData.mufettis1_ad_soyad || null,
        mufettis2_ad_soyad: formData.mufettis2_ad_soyad || null,
        ikametgah_adresi: formData.ikametgah_adresi || null,
        telefon: formData.telefon || null
    };
}

// =====================================================
// Auth Middleware
// =====================================================

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token gerekli' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Geçersiz token' });
        }
        req.user = user;
        next();
    });
}

// Parametreli sorgu yardımcıları (SQL enjeksiyonuna karşı)
function queryRows(sql, params = []) {
    const result = db.exec(sql, params);
    if (result.length === 0) return [];
    const { columns, values } = result[0];
    return values.map(row => {
        const obj = {};
        columns.forEach((col, i) => { obj[col] = row[i]; });
        return obj;
    });
}

function toDocument(row) {
    row.form_data = JSON.parse(row.form_data || '{}');
    return row;
}

// Belge yalnızca sahibine aitse döner
function findOwnDocument(id, userId) {
    return queryRows('SELECT * FROM documents WHERE id = ? AND user_id = ?', [id, userId])[0] || null;
}

// Optional auth - sets req.user if token exists, but doesn't require it
function optionalAuth(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (!err) {
                req.user = user;
            }
        });
    }
    next();
}

// =====================================================
// Auth API Routes
// =====================================================

// Başarısız giriş/kayıt denemelerini IP + kullanıcı adı bazında sınırla
// (kaba kuvvet ile şifre denemesine karşı)
const AUTH_MAX_FAILURES = 10;
const AUTH_WINDOW_MS = 15 * 60 * 1000;
const authFailures = new Map();

function authLimitKey(req) {
    const username = String((req.body && req.body.username) || '').toLowerCase();
    return `${req.ip}|${username}`;
}

function isAuthLimited(req) {
    const entry = authFailures.get(authLimitKey(req));
    if (!entry) return false;
    if (Date.now() - entry.first > AUTH_WINDOW_MS) {
        authFailures.delete(authLimitKey(req));
        return false;
    }
    return entry.count >= AUTH_MAX_FAILURES;
}

function recordAuthFailure(req) {
    const key = authLimitKey(req);
    const entry = authFailures.get(key);
    if (!entry || Date.now() - entry.first > AUTH_WINDOW_MS) {
        authFailures.set(key, { count: 1, first: Date.now() });
    } else {
        entry.count++;
    }
}

// Süresi geçen kayıtları ara ara temizle
setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of authFailures) {
        if (now - entry.first > AUTH_WINDOW_MS) authFailures.delete(key);
    }
}, AUTH_WINDOW_MS).unref();

const TOO_MANY_ATTEMPTS = { error: 'Çok fazla başarısız deneme. Lütfen 15 dakika sonra tekrar deneyin.' };

// Register new user
app.post('/api/auth/register', async (req, res) => {
    try {
        if (isAuthLimited(req)) {
            return res.status(429).json(TOO_MANY_ATTEMPTS);
        }

        // İlk hesap her zaman açılabilir; sonrası yalnızca ALLOW_REGISTRATION=true iken
        const hasUsers = queryRows('SELECT id FROM users WHERE password IS NOT NULL LIMIT 1').length > 0;
        if (hasUsers && !ALLOW_REGISTRATION) {
            return res.status(403).json({ error: 'Yeni hesap açma kapalı. Hesap için sistem yöneticinize başvurun.' });
        }

        const { username, password, name, email } = req.body;

        if (!username || !password || !name) {
            return res.status(400).json({ error: 'Kullanıcı adı, şifre ve isim gerekli' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Şifre en az 6 karakter olmalı' });
        }

        // Check if username exists
        if (queryRows('SELECT id FROM users WHERE username = ?', [username]).length > 0) {
            recordAuthFailure(req);
            return res.status(400).json({ error: 'Bu kullanıcı adı zaten kullanılıyor' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const id = uuidv4();
        const now = new Date().toISOString();

        db.run(`
            INSERT INTO users (id, username, password, name, email, role, auth_provider, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, 'mufettis', 'local', ?, ?)
        `, [id, username, hashedPassword, name, email || null, now, now]);

        saveDatabase();

        // Generate token
        const token = jwt.sign({ id, username, name, role: 'mufettis' }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        console.log('✅ User registered:', username);
        res.status(201).json({
            message: 'Kayıt başarılı',
            token,
            user: { id, username, name, role: 'mufettis' }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Kullanıcı adı ve şifre gerekli' });
        }

        if (isAuthLimited(req)) {
            return res.status(429).json(TOO_MANY_ATTEMPTS);
        }

        // Find user
        const user = queryRows('SELECT * FROM users WHERE username = ?', [username])[0];
        if (!user || !user.password) {
            recordAuthFailure(req);
            return res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            recordAuthFailure(req);
            return res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
        }

        // Generate token
        const token = jwt.sign(
            { id: user.id, username: user.username, name: user.name, role: user.role },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        console.log('✅ User logged in:', username);
        res.json({
            message: 'Giriş başarılı',
            token,
            user: { id: user.id, username: user.username, name: user.name, role: user.role }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Extend session (Add 10 minutes to remaining time)
app.post('/api/auth/extend', authenticateToken, (req, res) => {
    try {
        const user = req.user;

        // Get current token expiration
        const currentExp = user.exp * 1000; // Convert to milliseconds
        const now = Date.now();
        const remainingMs = Math.max(0, currentExp - now);

        // Add 10 minutes (600000 ms) to remaining time
        const newRemainingMs = remainingMs + (10 * 60 * 1000);
        const newExpSeconds = Math.floor((now + newRemainingMs) / 1000);

        // Generate new token with calculated expiration
        const token = jwt.sign(
            { id: user.id, username: user.username, name: user.name, role: user.role },
            JWT_SECRET,
            { expiresIn: Math.floor(newRemainingMs / 1000) } // seconds
        );

        console.log('🔄 Session extended for:', user.username, '- Added 10 minutes, new remaining:', Math.floor(newRemainingMs / 60000), 'min');
        res.json({
            message: 'Oturum 10 dakika uzatıldı',
            token,
            user: { id: user.id, username: user.username, name: user.name, role: user.role }
        });
    } catch (error) {
        console.error('Extend error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Get current user

// Get current user
app.get('/api/auth/me', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});

// Logout (client-side - just return success)
app.post('/api/auth/logout', (req, res) => {
    res.json({ message: 'Çıkış başarılı' });
});

// =====================================================
// API Routes
// =====================================================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Tüm belge rotaları giriş gerektirir; her kullanıcı yalnızca kendi belgelerini görür.
const SEARCHABLE_COLUMNS = ['sorusturma_konusu', 'ad_soyad', 'tc_kimlik', 'tarih', 'saat', 'yer', 'kurum_adi', 'konum',
    'sikayetci_adi', 'sikayetci_tc', 'tanik_adi', 'muhakkik_adi', 'muhakkik_unvan',
    'mufettis1_ad_soyad', 'mufettis2_ad_soyad', 'ikametgah_adresi', 'telefon'];

// Get all documents
app.get('/api/documents', authenticateToken, (req, res) => {
    try {
        const { search, template_code, category } = req.query;

        let query = 'SELECT * FROM documents WHERE user_id = ?';
        const params = [req.user.id];

        if (search) {
            query += ` AND (sorusturma_konusu LIKE ? OR ad_soyad LIKE ? OR sikayetci_adi LIKE ? OR tc_kimlik LIKE ?)`;
            params.push(...Array(4).fill(`%${search}%`));
        }

        if (template_code) {
            query += ' AND template_code = ?';
            params.push(template_code);
        }

        if (category) {
            query += ' AND category = ?';
            params.push(category);
        }

        query += ' ORDER BY created_at DESC';

        res.json(queryRows(query, params).map(toDocument));
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Search documents
app.get('/api/documents/search/:query', authenticateToken, (req, res) => {
    try {
        const like = `%${req.params.query.toLowerCase()}%`;
        const documents = queryRows(`
            SELECT * FROM documents
            WHERE user_id = ?
              AND (sorusturma_konusu LIKE ? OR ad_soyad LIKE ? OR sikayetci_adi LIKE ?
                   OR tc_kimlik LIKE ? OR tanik_adi LIKE ?)
            ORDER BY created_at DESC
        `, [req.user.id, ...Array(5).fill(like)]);

        res.json(documents.map(toDocument));
    } catch (error) {
        console.error('Error searching documents:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Get document by ID
app.get('/api/documents/:id', authenticateToken, (req, res) => {
    try {
        const doc = findOwnDocument(req.params.id, req.user.id);
        if (!doc) {
            return res.status(404).json({ error: 'Document not found' });
        }
        res.json(toDocument(doc));
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Create new document
app.post('/api/documents', authenticateToken, (req, res) => {
    try {
        const { template_code, template_name, category, form_data } = req.body;

        const id = uuidv4();
        const now = new Date().toISOString();
        const common = extractCommonFields(form_data || {});

        const columns = ['id', 'user_id', 'template_code', 'template_name', 'category',
            ...SEARCHABLE_COLUMNS, 'form_data', 'created_at', 'updated_at'];
        const values = [id, req.user.id, template_code, template_name, category || '',
            ...SEARCHABLE_COLUMNS.map(col => common[col] || null),
            JSON.stringify(form_data || {}), now, now];

        db.run(`INSERT INTO documents (${columns.join(', ')}) VALUES (${columns.map(() => '?').join(', ')})`, values);

        saveDatabase();
        console.log('✅ Document saved:', id, '- Person:', common.sorusturma_konusu || common.ad_soyad || common.sikayetci_adi);
        res.status(201).json({ id });
    } catch (error) {
        console.error('Error creating document:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Update document
app.put('/api/documents/:id', authenticateToken, (req, res) => {
    try {
        const { id } = req.params;
        const { form_data } = req.body;

        if (!findOwnDocument(id, req.user.id)) {
            return res.status(404).json({ error: 'Document not found' });
        }

        const updateParts = ['updated_at = ?'];
        const params = [new Date().toISOString()];

        if (form_data) {
            updateParts.push('form_data = ?');
            params.push(JSON.stringify(form_data));

            // Update common columns if form_data changed
            const common = extractCommonFields(form_data);
            for (const col of ['sorusturma_konusu', 'ad_soyad', 'tc_kimlik', 'tarih', 'sikayetci_adi']) {
                if (common[col]) {
                    updateParts.push(`${col} = ?`);
                    params.push(common[col]);
                }
            }
        }

        db.run(`UPDATE documents SET ${updateParts.join(', ')} WHERE id = ? AND user_id = ?`, [...params, id, req.user.id]);

        saveDatabase();
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Delete document
app.delete('/api/documents/:id', authenticateToken, (req, res) => {
    try {
        const { id } = req.params;

        if (!findOwnDocument(id, req.user.id)) {
            return res.status(404).json({ error: 'Document not found' });
        }

        db.run('DELETE FROM documents WHERE id = ? AND user_id = ?', [id, req.user.id]);

        saveDatabase();
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// =====================================================
// PDF Generation (Chrome yazdırma motoru ile)
// =====================================================
// html2pdf.js'in görüntü-dilimleme yaklaşımındaki sayfa sonu sorunlarını kökten
// çözmek için PDF, sunucuda headless Chrome'un gerçek yazdırma motoruyla
// üretilir: metin seçilebilir, satırlar/bloklar doğru bölünür, dosya küçük olur.

const puppeteer = require('puppeteer-core');

function findChromePath() {
    if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
        return process.env.CHROME_PATH;
    }
    const candidates = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        '/usr/bin/google-chrome',
        '/usr/bin/google-chrome-stable',
        '/usr/bin/chromium',
        '/usr/bin/chromium-browser',
        '/snap/bin/chromium'
    ];
    return candidates.find(p => fs.existsSync(p)) || null;
}

let pdfBrowserPromise = null;
function getPdfBrowser() {
    if (!pdfBrowserPromise) {
        const chromePath = findChromePath();
        if (!chromePath) {
            return Promise.reject(new Error('Chrome/Edge bulunamadı. CHROME_PATH ortam değişkenini ayarlayın.'));
        }
        pdfBrowserPromise = puppeteer.launch({
            executablePath: chromePath,
            headless: 'new',
            args: ['--no-first-run', '--disable-extensions',
                ...(process.platform === 'linux' ? ['--no-sandbox', '--disable-dev-shm-usage'] : [])]
        });
        // Çökerse bir sonraki istekte yeniden başlatılabilsin
        pdfBrowserPromise.then(browser => {
            browser.on('disconnected', () => { pdfBrowserPromise = null; });
        }).catch(() => { pdfBrowserPromise = null; });
    }
    return pdfBrowserPromise;
}

// Aynı anda en fazla bu kadar PDF üretilir; fazlası sırada bekler
const PDF_MAX_CONCURRENT = 2;
const PDF_MAX_QUEUE = 20;
let pdfActive = 0;
const pdfQueue = [];

function acquirePdfSlot() {
    if (pdfActive < PDF_MAX_CONCURRENT) {
        pdfActive++;
        return Promise.resolve();
    }
    if (pdfQueue.length >= PDF_MAX_QUEUE) {
        return Promise.reject(Object.assign(new Error('Sunucu meşgul, lütfen tekrar deneyin'), { status: 503 }));
    }
    return new Promise(resolve => pdfQueue.push(resolve));
}

function releasePdfSlot() {
    const next = pdfQueue.shift();
    if (next) next();
    else pdfActive--;
}

app.post('/api/pdf', authenticateToken, async (req, res) => {
    const { html } = req.body || {};
    if (!html || typeof html !== 'string') {
        return res.status(400).json({ error: 'html alanı gerekli' });
    }

    try {
        await acquirePdfSlot();
    } catch (error) {
        return res.status(error.status || 503).json({ error: error.message });
    }

    let page;
    try {
        const browser = await getPdfBrowser();
        page = await browser.newPage();

        // Gelen HTML kullanıcı girdisidir: içinde betik çalışmasın ve sayfa
        // sunucunun iç ağına/dosyalarına istek atamasın (SSRF). Yalnızca
        // gömülü (data:) kaynaklara izin verilir.
        await page.setJavaScriptEnabled(false);
        await page.setRequestInterception(true);
        page.on('request', request => {
            const url = request.url();
            if (url.startsWith('data:') || url === 'about:blank') request.continue();
            else request.abort('blockedbyclient');
        });

        const fullHtml = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
    html, body { margin: 0; padding: 0; }
    body {
        font-family: "Times New Roman", Times, serif;
        color: #000;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    /* Boşluksuz uzun diziler (linkler vb.) sayfadan taşmasın */
    body * { overflow-wrap: anywhere; }
    /* Sayfa sonlarında tek kalan satırları önle */
    p, div { orphans: 2; widows: 2; }
</style>
</head>
<body>${html}</body>
</html>`;

        await page.setContent(fullHtml, { waitUntil: 'networkidle0', timeout: 30000 });
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' }
        });

        res.setHeader('Content-Type', 'application/pdf');
        res.send(Buffer.from(pdf));
    } catch (error) {
        console.error('PDF generation error:', error);
        res.status(500).json({ error: 'PDF üretilemedi' });
    } finally {
        if (page) {
            try { await page.close(); } catch (e) { /* yoksay */ }
        }
        releasePdfSlot();
    }
});

// =====================================================
// Start Server
// =====================================================

initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📋 API available at http://localhost:${PORT}/api`);
        console.log(`🔍 Search API: http://localhost:${PORT}/api/documents/search/{query}`);
    });
}).catch(err => {
    console.error('Failed to initialize database:', err);
    process.exit(1);
});
