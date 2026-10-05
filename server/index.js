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

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'teftis-app-secret-key-2024';
const JWT_EXPIRES_IN = '40m';

// Middleware
app.use(cors());
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

// Register new user
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, password, name, email } = req.body;

        if (!username || !password || !name) {
            return res.status(400).json({ error: 'Kullanıcı adı, şifre ve isim gerekli' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Şifre en az 6 karakter olmalı' });
        }

        // Check if username exists
        const existing = db.exec(`SELECT id FROM users WHERE username = '${username}'`);
        if (existing.length > 0 && existing[0].values.length > 0) {
            return res.status(400).json({ error: 'Bu kullanıcı adı zaten kullanılıyor' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const id = uuidv4();
        const now = new Date().toISOString();

        db.run(`
            INSERT INTO users (id, username, password, name, email, role, auth_provider, created_at, updated_at)
            VALUES ('${id}', '${username}', '${hashedPassword}', '${name}', ${email ? `'${email}'` : 'NULL'}, 'mufettis', 'local', '${now}', '${now}')
        `);

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
        res.status(500).json({ error: error.message });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Kullanıcı adı ve şifre gerekli' });
        }

        // Find user
        const result = db.exec(`SELECT * FROM users WHERE username = '${username}'`);
        if (result.length === 0 || result[0].values.length === 0) {
            return res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
        }

        const columns = result[0].columns;
        const row = result[0].values[0];
        const user = {};
        columns.forEach((col, i) => {
            user[col] = row[i];
        });

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
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
        res.status(500).json({ error: error.message });
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
        res.status(500).json({ error: error.message });
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

// Get all documents
app.get('/api/documents', (req, res) => {
    try {
        const { search, template_code, category, user_id } = req.query;

        let query = 'SELECT * FROM documents WHERE 1=1';

        // Filter by user_id if provided
        if (user_id) {
            query += ` AND user_id = '${user_id}'`;
        }

        if (search) {
            query += ` AND (sorusturma_konusu LIKE '%${search}%' 
                        OR ad_soyad LIKE '%${search}%' 
                        OR sikayetci_adi LIKE '%${search}%'
                        OR tc_kimlik LIKE '%${search}%')`;
        }

        if (template_code) {
            query += ` AND template_code = '${template_code}'`;
        }

        if (category) {
            query += ` AND category = '${category}'`;
        }

        query += ' ORDER BY created_at DESC';

        const result = db.exec(query);

        if (result.length === 0) {
            return res.json([]);
        }

        const columns = result[0].columns;
        const documents = result[0].values.map(row => {
            const doc = {};
            columns.forEach((col, i) => {
                doc[col] = row[i];
            });
            doc.form_data = JSON.parse(doc.form_data || '{}');
            return doc;
        });

        res.json(documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ error: error.message });
    }
});

// Get document by ID
app.get('/api/documents/:id', (req, res) => {
    try {
        const { id } = req.params;
        const result = db.exec(`SELECT * FROM documents WHERE id = '${id}'`);

        if (result.length === 0 || result[0].values.length === 0) {
            return res.status(404).json({ error: 'Document not found' });
        }

        const columns = result[0].columns;
        const row = result[0].values[0];
        const doc = {};
        columns.forEach((col, i) => {
            doc[col] = row[i];
        });
        doc.form_data = JSON.parse(doc.form_data || '{}');

        res.json(doc);
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ error: error.message });
    }
});

// Create new document
app.post('/api/documents', (req, res) => {
    try {
        const {
            template_code,
            template_name,
            category,
            person_name,
            event_date,
            form_data,
            user_id
        } = req.body;

        const id = uuidv4();
        const now = new Date().toISOString();
        const formDataStr = JSON.stringify(form_data).replace(/'/g, "''");

        // Extract common fields for searchable columns
        const common = extractCommonFields(form_data);

        db.run(`
            INSERT INTO documents 
            (id, user_id, template_code, template_name, category,
             sorusturma_konusu, ad_soyad, tc_kimlik, tarih, saat, yer, kurum_adi, konum,
             sikayetci_adi, sikayetci_tc, tanik_adi, muhakkik_adi, muhakkik_unvan,
             mufettis1_ad_soyad, mufettis2_ad_soyad, ikametgah_adresi, telefon,
             form_data, created_at, updated_at)
            VALUES (
                '${id}', 
                ${user_id ? `'${user_id}'` : 'NULL'}, 
                '${template_code}', 
                '${template_name}', 
                '${category || ''}',
                ${common.sorusturma_konusu ? `'${common.sorusturma_konusu}'` : 'NULL'},
                ${common.ad_soyad ? `'${common.ad_soyad}'` : 'NULL'},
                ${common.tc_kimlik ? `'${common.tc_kimlik}'` : 'NULL'},
                ${common.tarih ? `'${common.tarih}'` : 'NULL'},
                ${common.saat ? `'${common.saat}'` : 'NULL'},
                ${common.yer ? `'${common.yer}'` : 'NULL'},
                ${common.kurum_adi ? `'${common.kurum_adi}'` : 'NULL'},
                ${common.konum ? `'${common.konum}'` : 'NULL'},
                ${common.sikayetci_adi ? `'${common.sikayetci_adi}'` : 'NULL'},
                ${common.sikayetci_tc ? `'${common.sikayetci_tc}'` : 'NULL'},
                ${common.tanik_adi ? `'${common.tanik_adi}'` : 'NULL'},
                ${common.muhakkik_adi ? `'${common.muhakkik_adi}'` : 'NULL'},
                ${common.muhakkik_unvan ? `'${common.muhakkik_unvan}'` : 'NULL'},
                ${common.mufettis1_ad_soyad ? `'${common.mufettis1_ad_soyad}'` : 'NULL'},
                ${common.mufettis2_ad_soyad ? `'${common.mufettis2_ad_soyad}'` : 'NULL'},
                ${common.ikametgah_adresi ? `'${common.ikametgah_adresi}'` : 'NULL'},
                ${common.telefon ? `'${common.telefon}'` : 'NULL'},
                '${formDataStr}',
                '${now}', 
                '${now}'
            )
        `);

        saveDatabase();
        console.log('✅ Document saved:', id, '- Person:', common.sorusturma_konusu || common.ad_soyad || common.sikayetci_adi);
        res.status(201).json({ id });
    } catch (error) {
        console.error('Error creating document:', error);
        res.status(500).json({ error: error.message });
    }
});

// Update document
app.put('/api/documents/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { form_data, person_name } = req.body;
        const now = new Date().toISOString();

        // Check if document exists
        const check = db.exec(`SELECT id FROM documents WHERE id = '${id}'`);
        if (check.length === 0 || check[0].values.length === 0) {
            return res.status(404).json({ error: 'Document not found' });
        }

        const formDataStr = form_data ? JSON.stringify(form_data).replace(/'/g, "''") : null;
        const common = form_data ? extractCommonFields(form_data) : {};

        let updateParts = [`updated_at = '${now}'`];
        if (formDataStr) updateParts.push(`form_data = '${formDataStr}'`);

        // Update common columns if form_data changed
        if (form_data) {
            if (common.sorusturma_konusu) updateParts.push(`sorusturma_konusu = '${common.sorusturma_konusu}'`);
            if (common.ad_soyad) updateParts.push(`ad_soyad = '${common.ad_soyad}'`);
            if (common.tc_kimlik) updateParts.push(`tc_kimlik = '${common.tc_kimlik}'`);
            if (common.tarih) updateParts.push(`tarih = '${common.tarih}'`);
            if (common.sikayetci_adi) updateParts.push(`sikayetci_adi = '${common.sikayetci_adi}'`);
        }

        db.run(`UPDATE documents SET ${updateParts.join(', ')} WHERE id = '${id}'`);

        saveDatabase();
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ error: error.message });
    }
});

// Delete document
app.delete('/api/documents/:id', (req, res) => {
    try {
        const { id } = req.params;

        const check = db.exec(`SELECT id FROM documents WHERE id = '${id}'`);
        if (check.length === 0 || check[0].values.length === 0) {
            return res.status(404).json({ error: 'Document not found' });
        }

        db.run(`DELETE FROM documents WHERE id = '${id}'`);

        saveDatabase();
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).json({ error: error.message });
    }
});

// Search documents
app.get('/api/documents/search/:query', (req, res) => {
    try {
        const { query } = req.params;
        const search = query.toLowerCase();

        const result = db.exec(`
            SELECT * FROM documents 
            WHERE sorusturma_konusu LIKE '%${search}%' 
               OR ad_soyad LIKE '%${search}%' 
               OR sikayetci_adi LIKE '%${search}%'
               OR tc_kimlik LIKE '%${search}%'
               OR tanik_adi LIKE '%${search}%'
            ORDER BY created_at DESC
        `);

        if (result.length === 0) {
            return res.json([]);
        }

        const columns = result[0].columns;
        const documents = result[0].values.map(row => {
            const doc = {};
            columns.forEach((col, i) => {
                doc[col] = row[i];
            });
            doc.form_data = JSON.parse(doc.form_data || '{}');
            return doc;
        });

        res.json(documents);
    } catch (error) {
        console.error('Error searching documents:', error);
        res.status(500).json({ error: error.message });
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

app.post('/api/pdf', authenticateToken, async (req, res) => {
    const { html } = req.body || {};
    if (!html || typeof html !== 'string') {
        return res.status(400).json({ error: 'html alanı gerekli' });
    }

    let page;
    try {
        const browser = await getPdfBrowser();
        page = await browser.newPage();

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
        res.status(500).json({ error: 'PDF üretilemedi: ' + error.message });
    } finally {
        if (page) {
            try { await page.close(); } catch (e) { /* yoksay */ }
        }
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
