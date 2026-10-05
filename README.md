# Teftiş Kurulu Başkanlığı — İnceleme ve Soruşturma Modülü

Belge şablonlarından tutanak/yazı üreten web uygulaması. Arayüz statik dosyalar (`index.html`, `app.js`, ...),
arka uç `server/index.js` (Express + SQLite/sql.js). PDF'ler sunucuda headless Chrome ile üretilir (`/api/pdf`).

## Gereksinimler
- Node.js 18+
- Google Chrome / Chromium / Edge (PDF üretimi için)

## Kurulum ve çalıştırma
```bash
npm install
cd server && npm install && cd ..
cp server/.env.example server/.env   # değerleri düzenleyin
PORT=4000 npm start
```
Tarayıcıda: http://localhost:4000

Windows PowerShell'de: `$env:PORT=4000; npm start`

Veritabanı (`server/teftis.db`) ilk çalıştırmada otomatik oluşturulur.

## Linux sunucuda
```bash
sudo apt install -y chromium   # veya google-chrome-stable
```
Chrome otomatik bulunamazsa `server/.env` içinde `CHROME_PATH` ayarlayın.
Sürekli çalışması için `pm2 start server/index.js --name teftis` kullanılabilir.
