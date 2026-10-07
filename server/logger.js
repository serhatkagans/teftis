/**
 * Dosya tabanlı erişim ve hata kayıtları.
 * Her gün için ayrı dosya (access-YYYY-MM-DD.log, error-YYYY-MM-DD.log),
 * her satır bir JSON kaydı. Eski dosyalar saklama süresi dolunca silinir.
 */

const fs = require('fs');
const path = require('path');

const LOG_FILE_PATTERN = /^(access|error)-(\d{4}-\d{2}-\d{2})\.log$/;

function createLogger(dir, { retentionDays = 90 } = {}) {
    // Klasör açılamazsa (izin vb.) sunucu çökmesin; kayıtlar yalnızca konsola düşer
    try {
        fs.mkdirSync(dir, { recursive: true });
    } catch (e) {
        console.error('Kayıt klasörü oluşturulamadı:', dir, e.message);
    }

    function write(kind, entry) {
        const now = new Date();
        const line = JSON.stringify({ time: now.toISOString(), ...entry }) + '\n';
        try {
            fs.appendFileSync(path.join(dir, `${kind}-${now.toISOString().slice(0, 10)}.log`), line);
        } catch (e) {
            console.error('Kayıt dosyasına yazılamadı:', e.message);
        }
    }

    function prune(now = new Date()) {
        const cutoff = new Date(now.getTime() - retentionDays * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
        if (!fs.existsSync(dir)) return;
        for (const file of fs.readdirSync(dir)) {
            const match = file.match(LOG_FILE_PATTERN);
            if (match && match[2] < cutoff) {
                try { fs.unlinkSync(path.join(dir, file)); } catch (e) { /* yoksay */ }
            }
        }
    }

    return {
        dir,
        access: entry => write('access', entry),
        error: entry => write('error', entry),
        prune
    };
}

// Hata nesnesini kayda uygun düz nesneye çevirir
function serializeError(error) {
    if (!error) return null;
    return { message: error.message || String(error), stack: error.stack || null };
}

module.exports = { createLogger, serializeError };
