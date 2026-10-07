/**
 * Teftiş Kurulu Başkanlığı İnceleme ve Soruşturma Modülü - Backend Server (SQLite with sql.js)
 * Hibrit Yaklaşım: Ortak alanlar sütun + form_data JSON
 * Auth: JWT + bcrypt
 */

// Önce server/.env, sonra çalışma klasöründeki .env okunur (var olan değerler ezilmez)
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { createLogger, serializeError } = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = loadJwtSecret();
// Oturum süresi; "uzat" ile de bu süreden fazlasına çıkılamaz
const SESSION_MAX_MS = 40 * 60 * 1000;
const SESSION_EXTEND_MS = 10 * 60 * 1000;
const JWT_EXPIRES_IN = SESSION_MAX_MS / 1000;

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'teftis.db');
const BACKUP_DIR = process.env.BACKUP_DIR || path.join(__dirname, 'backups');
const BACKUP_KEEP_DAYS = parseInt(process.env.BACKUP_KEEP_DAYS, 10) || 14;
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const logger = createLogger(process.env.LOG_DIR || path.join(__dirname, 'logs'), {
    retentionDays: parseInt(process.env.LOG_RETENTION_DAYS, 10) || 90
});

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

// Yeni hesap açma varsayılan olarak kapalıdır. Kullanıcı eklemek için
// ALLOW_REGISTRATION=true verilir; hiç kullanıcı yoksa ilk hesap açılabilir.
function registrationAllowed() {
    return process.env.ALLOW_REGISTRATION === 'true';
}

// Nginx gibi yerel bir ters vekil arkasında gerçek istemci IP'si (deneme sınırı için)
app.set('trust proxy', 'loopback');

// =====================================================
// Erişim ve hata kaydı
// =====================================================

// Arama metni kişi adı / TC içerebilir; kayda yazılmaz
function loggablePath(req) {
    return req.originalUrl.split('?')[0].replace(/^(\/api\/documents\/search\/).+$/, '$1***');
}

function logError(req, error, status = 500) {
    console.error(`${req ? `${req.method} ${loggablePath(req)}` : 'process'}:`, error);
    logger.error({
        status,
        method: req ? req.method : null,
        path: req ? loggablePath(req) : null,
        ip: req ? req.ip : null,
        user: req && req.user ? req.user.username : null,
        error: serializeError(error)
    });
}

app.use('/api', (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        logger.access({
            ip: req.ip,
            user: req.user ? req.user.username : null,
            method: req.method,
            path: loggablePath(req),
            status: res.statusCode,
            ms: Date.now() - start
        });
    });
    next();
});

// Güvenlik başlıkları. CSP satır içi betiği yasaklar (olaylar public/actions.js
// ile bağlanır); satır içi stil, belge şablonlarında yaygın olduğu için serbesttir.
const CONTENT_SECURITY_POLICY = [
    "default-src 'self'",
    "script-src 'self' https://cdnjs.cloudflare.com https://unpkg.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
].join('; ');

app.disable('x-powered-by');
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', CONTENT_SECURITY_POLICY);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    // HTTPS üzerinden gelindiyse tarayıcı bir yıl boyunca yalnızca HTTPS kullansın
    if (req.secure) res.setHeader('Strict-Transport-Security', 'max-age=31536000');
    next();
});

// Middleware
// Arayüz aynı adresten sunulduğu için CORS gerekmez; başka bir kaynaktan
// erişilecekse CORS_ORIGIN=https://ornek.gov.tr,https://... ile izin verilir.
if (process.env.CORS_ORIGIN) {
    app.use(cors({ origin: process.env.CORS_ORIGIN.split(',').map(o => o.trim()) }));
}
app.use(express.json({ limit: '10mb' }));

// Yalnızca arayüz dosyaları (public/) sunulur; sunucu kodu, veritabanı ve
// proje klasöründeki diğer dosyalar dışarıdan erişilemez.
app.use(express.static(PUBLIC_DIR));

// =====================================================
// Database
// =====================================================

let db;

async function initDatabase() {
    const SQL = await initSqlJs();

    // Load existing database or create new one
    if (fs.existsSync(DB_PATH)) {
        db = new SQL.Database(fs.readFileSync(DB_PATH));
        console.log('✅ SQLite database loaded:', DB_PATH);
    } else {
        db = new SQL.Database();
        console.log('✅ SQLite database created:', DB_PATH);
    }

    registerSqlFunctions();

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

        -- Kim, ne zaman, hangi belge üzerinde ne yaptı
        CREATE TABLE IF NOT EXISTS audit_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at TEXT NOT NULL,
            user_id TEXT,
            username TEXT,
            action TEXT NOT NULL,
            document_id TEXT,
            ip TEXT,
            details TEXT
        );

        -- Indexes for fast searching
        CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);
        CREATE INDEX IF NOT EXISTS idx_documents_template_code ON documents(template_code);
        CREATE INDEX IF NOT EXISTS idx_documents_sorusturma_konusu ON documents(sorusturma_konusu);
        CREATE INDEX IF NOT EXISTS idx_documents_ad_soyad ON documents(ad_soyad);
        CREATE INDEX IF NOT EXISTS idx_documents_tc_kimlik ON documents(tc_kimlik);
        CREATE INDEX IF NOT EXISTS idx_documents_tarih ON documents(tarih);
        CREATE INDEX IF NOT EXISTS idx_documents_sikayetci_adi ON documents(sikayetci_adi);
        CREATE INDEX IF NOT EXISTS idx_audit_document ON audit_log(document_id, created_at);
        CREATE INDEX IF NOT EXISTS idx_audit_user ON audit_log(user_id, created_at);
    `);

    // Insert test user if not exists
    const testUser = db.exec("SELECT id FROM users WHERE id = '00000000-0000-0000-0000-000000000001'");
    if (testUser.length === 0) {
        db.run("INSERT INTO users (id, email, name, role) VALUES ('00000000-0000-0000-0000-000000000001', 'test@meb.gov.tr', 'Test Müfettiş', 'mufettis')");
    }

    saveDatabase();
    console.log('✅ Database tables initialized with searchable columns');
}

// SQLite LIKE yalnızca İngilizce harflerde büyük/küçük ayırmaz;
// Türkçe aramada (Ş/ş, İ/i, I/ı) iki taraf da bununla küçültülür.
function registerSqlFunctions() {
    db.create_function('tr_lower', value => (value == null ? null : String(value).toLocaleLowerCase('tr-TR')));
}

// sql.js export() bağlantıyı yeniden açar ve eklenen fonksiyonları düşürür
function exportDatabase() {
    const data = Buffer.from(db.export());
    registerSqlFunctions();
    return data;
}

// Veritabanı önce geçici dosyaya yazılıp sonra yerine taşınır: yazma yarıda
// kesilirse (çökme, disk dolması) eski dosya sağlam kalır.
function writeFileAtomic(filePath, data) {
    const tmpPath = `${filePath}.${process.pid}.tmp`;
    const fd = fs.openSync(tmpPath, 'w');
    try {
        fs.writeSync(fd, data);
        fs.fsyncSync(fd);
    } finally {
        fs.closeSync(fd);
    }
    fs.renameSync(tmpPath, filePath);
}

let saveTimer = null;

function saveDatabase() {
    if (saveTimer) {
        clearTimeout(saveTimer);
        saveTimer = null;
    }
    writeFileAtomic(DB_PATH, exportDatabase());
}

// Yalnızca kayıt (audit) satırı eklenen istekler için: art arda gelen
// yazmalar tek seferde diske aktarılır
function scheduleSave() {
    if (saveTimer) return;
    saveTimer = setTimeout(() => {
        saveTimer = null;
        try {
            saveDatabase();
        } catch (error) {
            logError(null, error);
        }
    }, 1000);
    saveTimer.unref();
}

function flushDatabase() {
    if (saveTimer && db) saveDatabase();
}

// Günde bir yedek: backups/teftis-YYYY-MM-DD.db; BACKUP_KEEP_DAYS günden eskiler silinir
function backupDatabase(now = new Date()) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    const day = now.toISOString().slice(0, 10);
    const target = path.join(BACKUP_DIR, `teftis-${day}.db`);
    let created = false;
    if (!fs.existsSync(target)) {
        writeFileAtomic(target, exportDatabase());
        created = true;
        console.log('💾 Veritabanı yedeklendi:', target);
    }

    const cutoff = new Date(now.getTime() - BACKUP_KEEP_DAYS * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    for (const file of fs.readdirSync(BACKUP_DIR)) {
        const match = file.match(/^teftis-(\d{4}-\d{2}-\d{2})\.db$/);
        if (match && match[1] < cutoff) {
            fs.unlinkSync(path.join(BACKUP_DIR, file));
        }
    }
    return { file: target, created };
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

// Bir işlemi kayıt tablosuna yazar. Kaydın kendisi hata verirse istek bozulmaz.
function audit(req, action, { documentId = null, details = null, user = req.user } = {}) {
    try {
        db.run(`INSERT INTO audit_log (created_at, user_id, username, action, document_id, ip, details)
                VALUES (?, ?, ?, ?, ?, ?, ?)`, [
            new Date().toISOString(),
            user ? user.id : null,
            user ? user.username : null,
            action,
            documentId,
            req.ip || null,
            details ? JSON.stringify(details) : null
        ]);
        scheduleSave();
    } catch (error) {
        logError(req, error);
    }
}

// =====================================================
// Auth Middleware
// =====================================================

function readToken(req) {
    const authHeader = req.headers['authorization'];
    return authHeader && authHeader.split(' ')[1];
}

function authenticateToken(req, res, next) {
    const token = readToken(req);

    if (!token) {
        return res.status(401).json({ error: 'Token gerekli' });
    }

    try {
        req.user = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        // Süresi dolmuş/geçersiz oturum: istemci yeniden giriş yapmalı (401)
        return res.status(401).json({ error: 'Oturum geçersiz veya süresi dolmuş' });
    }
    next();
}

// Token varsa ve geçerliyse req.user'ı doldurur, yoksa isteği engellemez
function optionalAuth(req, res, next) {
    const token = readToken(req);
    if (token) {
        try { req.user = jwt.verify(token, JWT_SECRET); } catch (err) { /* yoksay */ }
    }
    next();
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

// Kullanıcı aramasını LIKE desenine çevirir (% ve _ joker olarak değil harfiyen aranır)
function likePattern(text) {
    const escaped = String(text).toLocaleLowerCase('tr-TR').replace(/[\\%_]/g, ch => `\\${ch}`);
    return `%${escaped}%`;
}

function searchClause(columns) {
    return `(${columns.map(col => `tr_lower(${col}) LIKE ? ESCAPE '\\'`).join(' OR ')})`;
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
        if (hasUsers && !registrationAllowed()) {
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
        const id = crypto.randomUUID();
        const now = new Date().toISOString();

        db.run(`
            INSERT INTO users (id, username, password, name, email, role, auth_provider, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, 'mufettis', 'local', ?, ?)
        `, [id, username, hashedPassword, name, email || null, now, now]);

        const user = { id, username, name, role: 'mufettis' };
        audit(req, 'auth.register', { user });
        saveDatabase();

        // Generate token
        const token = jwt.sign(user, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        console.log('✅ User registered:', username);
        res.status(201).json({ message: 'Kayıt başarılı', token, user });
    } catch (error) {
        logError(req, error);
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
            audit(req, 'auth.login_blocked', { details: { username: String(username) } });
            return res.status(429).json(TOO_MANY_ATTEMPTS);
        }

        // Find user
        const user = queryRows('SELECT * FROM users WHERE username = ?', [username])[0];
        const validPassword = user && user.password ? await bcrypt.compare(password, user.password) : false;
        if (!validPassword) {
            recordAuthFailure(req);
            audit(req, 'auth.login_failed', { details: { username: String(username) } });
            return res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
        }

        const sessionUser = { id: user.id, username: user.username, name: user.name, role: user.role };
        const token = jwt.sign(sessionUser, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        audit(req, 'auth.login', { user: sessionUser });
        console.log('✅ User logged in:', username);
        res.json({ message: 'Giriş başarılı', token, user: sessionUser });
    } catch (error) {
        logError(req, error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Oturumu uzat: kalan süreye 10 dakika eklenir, ancak toplam en fazla 40 dakika olur
app.post('/api/auth/extend', authenticateToken, (req, res) => {
    try {
        const user = req.user;

        // Get current token expiration
        const currentExp = user.exp * 1000; // Convert to milliseconds
        const now = Date.now();
        const remainingMs = Math.max(0, currentExp - now);

        const newRemainingMs = Math.min(remainingMs + SESSION_EXTEND_MS, SESSION_MAX_MS);
        const capped = newRemainingMs === SESSION_MAX_MS;

        // Generate new token with calculated expiration
        const token = jwt.sign(
            { id: user.id, username: user.username, name: user.name, role: user.role },
            JWT_SECRET,
            { expiresIn: Math.floor(newRemainingMs / 1000) } // seconds
        );

        audit(req, 'auth.extend');
        res.json({
            message: capped
                ? 'Oturum süresi en fazla 40 dakika olabilir; süre 40 dakikaya ayarlandı'
                : 'Oturum 10 dakika uzatıldı',
            token,
            user: { id: user.id, username: user.username, name: user.name, role: user.role }
        });
    } catch (error) {
        logError(req, error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Get current user
app.get('/api/auth/me', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});

// Logout (token istemcide silinir; burada yalnızca kayda geçer)
app.post('/api/auth/logout', optionalAuth, (req, res) => {
    if (req.user) audit(req, 'auth.logout');
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

const LIST_SEARCH_COLUMNS = ['sorusturma_konusu', 'ad_soyad', 'sikayetci_adi', 'tanik_adi', 'tc_kimlik',
    'template_name', 'template_code'];

const DEFAULT_PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 100;

// Get all documents
// ?page=N verilirse { items, total, page, limit, pages } döner; verilmezse tüm liste (dizi).
app.get('/api/documents', authenticateToken, (req, res) => {
    try {
        const { search, template_code, category } = req.query;

        let where = 'WHERE user_id = ?';
        const params = [req.user.id];

        if (search) {
            where += ` AND ${searchClause(LIST_SEARCH_COLUMNS)}`;
            params.push(...Array(LIST_SEARCH_COLUMNS.length).fill(likePattern(search)));
        }

        if (template_code) {
            where += ' AND template_code = ?';
            params.push(template_code);
        }

        if (category) {
            where += ' AND category = ?';
            params.push(category);
        }

        const orderBy = 'ORDER BY created_at DESC, id';

        if (req.query.page === undefined) {
            return res.json(queryRows(`SELECT * FROM documents ${where} ${orderBy}`, params).map(toDocument));
        }

        const page = Math.max(1, parseInt(req.query.page, 10) || 1);
        const limit = Math.min(MAX_PAGE_SIZE, Math.max(1, parseInt(req.query.limit, 10) || DEFAULT_PAGE_SIZE));
        const total = queryRows(`SELECT COUNT(*) AS total FROM documents ${where}`, params)[0].total;
        const items = queryRows(`SELECT * FROM documents ${where} ${orderBy} LIMIT ? OFFSET ?`,
            [...params, limit, (page - 1) * limit]).map(toDocument);

        res.json({ items, total, page, limit, pages: Math.max(1, Math.ceil(total / limit)) });
    } catch (error) {
        logError(req, error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Search documents
app.get('/api/documents/search/:query', authenticateToken, (req, res) => {
    try {
        const columns = ['sorusturma_konusu', 'ad_soyad', 'sikayetci_adi', 'tc_kimlik', 'tanik_adi'];
        const documents = queryRows(`
            SELECT * FROM documents
            WHERE user_id = ? AND ${searchClause(columns)}
            ORDER BY created_at DESC
        `, [req.user.id, ...Array(columns.length).fill(likePattern(req.params.query))]);

        res.json(documents.map(toDocument));
    } catch (error) {
        logError(req, error);
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
        audit(req, 'document.view', { documentId: doc.id });
        res.json(toDocument(doc));
    } catch (error) {
        logError(req, error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Belgenin işlem geçmişi (yalnızca sahibi görebilir)
app.get('/api/documents/:id/history', authenticateToken, (req, res) => {
    try {
        if (!findOwnDocument(req.params.id, req.user.id)) {
            return res.status(404).json({ error: 'Document not found' });
        }
        const rows = queryRows(`
            SELECT created_at, username, action, ip FROM audit_log
            WHERE document_id = ?
            ORDER BY id DESC
            LIMIT 200
        `, [req.params.id]);
        res.json(rows);
    } catch (error) {
        logError(req, error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Create new document
app.post('/api/documents', authenticateToken, (req, res) => {
    try {
        const { template_code, template_name, category, form_data } = req.body;

        if (!template_code || !template_name) {
            return res.status(400).json({ error: 'template_code ve template_name gerekli' });
        }

        const id = crypto.randomUUID();
        const now = new Date().toISOString();
        const common = extractCommonFields(form_data || {});

        const columns = ['id', 'user_id', 'template_code', 'template_name', 'category',
            ...SEARCHABLE_COLUMNS, 'form_data', 'created_at', 'updated_at'];
        const values = [id, req.user.id, template_code, template_name, category || '',
            ...SEARCHABLE_COLUMNS.map(col => common[col] || null),
            JSON.stringify(form_data || {}), now, now];

        db.run(`INSERT INTO documents (${columns.join(', ')}) VALUES (${columns.map(() => '?').join(', ')})`, values);

        audit(req, 'document.create', { documentId: id, details: { template_code } });
        saveDatabase();
        res.status(201).json({ id });
    } catch (error) {
        logError(req, error);
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

            // Aranabilir sütunlar form verisiyle birlikte güncellenir; silinen alan sütunda da boşalır
            const common = extractCommonFields(form_data);
            for (const col of SEARCHABLE_COLUMNS) {
                updateParts.push(`${col} = ?`);
                params.push(common[col] || null);
            }
        }

        db.run(`UPDATE documents SET ${updateParts.join(', ')} WHERE id = ? AND user_id = ?`, [...params, id, req.user.id]);

        audit(req, 'document.update', { documentId: id });
        saveDatabase();
        res.json({ success: true });
    } catch (error) {
        logError(req, error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Delete document
app.delete('/api/documents/:id', authenticateToken, (req, res) => {
    try {
        const { id } = req.params;

        const doc = findOwnDocument(id, req.user.id);
        if (!doc) {
            return res.status(404).json({ error: 'Document not found' });
        }

        db.run('DELETE FROM documents WHERE id = ? AND user_id = ?', [id, req.user.id]);

        audit(req, 'document.delete', { documentId: id, details: { template_code: doc.template_code } });
        saveDatabase();
        res.json({ success: true });
    } catch (error) {
        logError(req, error);
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

async function closePdfBrowser() {
    if (!pdfBrowserPromise) return;
    try {
        const browser = await pdfBrowserPromise;
        await browser.close();
    } catch (e) { /* yoksay */ }
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

        audit(req, 'pdf.generate', { details: { bytes: pdf.length } });
        res.setHeader('Content-Type', 'application/pdf');
        res.send(Buffer.from(pdf));
    } catch (error) {
        logError(req, error);
        res.status(500).json({ error: 'PDF üretilemedi' });
    } finally {
        if (page) {
            try { await page.close(); } catch (e) { /* yoksay */ }
        }
        releasePdfSlot();
    }
});

// Bilinmeyen API adresleri HTML yerine JSON 404 döner
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'Bulunamadı' });
});

// Yakalanmamış hatalar (bozuk JSON gövdesi, çok büyük istek vb.)
app.use((err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    logError(req, err, status);
    if (res.headersSent) return next(err);
    let message = 'Sunucu hatası';
    if (err.type === 'entity.parse.failed') message = 'Geçersiz JSON';
    else if (err.type === 'entity.too.large') message = 'İstek çok büyük';
    else if (status < 500) message = 'Geçersiz istek';
    res.status(status).json({ error: message });
});

// =====================================================
// Start Server
// =====================================================

async function start() {
    await initDatabase();
    logger.prune();

    const runBackup = () => {
        try { backupDatabase(); } catch (error) { logError(null, error); }
    };
    runBackup();
    setInterval(() => { runBackup(); logger.prune(); }, 60 * 60 * 1000).unref();

    process.on('unhandledRejection', reason => logError(null, reason instanceof Error ? reason : new Error(String(reason))));
    process.on('uncaughtException', error => {
        logError(null, error);
        try { flushDatabase(); } catch (e) { /* yoksay */ }
        process.exit(1);
    });

    const shutdown = async () => {
        try { flushDatabase(); } catch (error) { logError(null, error); }
        await closePdfBrowser();
        process.exit(0);
    };
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);

    return app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

if (require.main === module) {
    start().catch(err => {
        console.error('Failed to initialize database:', err);
        process.exit(1);
    });
}

module.exports = { app, initDatabase, saveDatabase, flushDatabase, backupDatabase, logger };
