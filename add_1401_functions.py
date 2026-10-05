# -*- coding: utf-8 -*-
# Script to add renderTemplate1401 and createPDFContent1401 functions for Template 14.1

with open(r'c:\Users\HP\Desktop\teftiş\app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Check if functions already exist
if 'function renderTemplate1401' in content:
    print("renderTemplate1401 already exists, skipping...")
else:
    # Find insertion point - after createPDFContent132
    insertion_marker = "function createPDFContent132"
    idx = content.find(insertion_marker)
    
    if idx == -1:
        print("ERROR: createPDFContent132 not found")
    else:
        # Find the end of createPDFContent132 function
        # We'll insert before the next function
        next_func = content.find("\nfunction ", idx + 10)
        if next_func > idx:
            # New render and PDF functions for Template 14.1
            new_functions = '''

// =====================================================
// Template 14.1 - Ön İnceleme Raporu Kapağı
// =====================================================

function renderTemplate1401(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const ekSureTarih = data.ek_sure_tarih ? formatDate(data.ek_sure_tarih) : '';
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);

    const mufettis1 = data.mufettis1_ad_soyad ? 
        `${data.mufettis1_unvan || 'Bakanlık Müfettişi'} <strong>${data.mufettis1_ad_soyad}</strong>` : 
        `Bakanlık Başmüfettişi <strong>….. …..</strong>`;
    
    const mufettis2 = data.mufettis2_ad_soyad ? 
        `<br>${data.mufettis2_unvan || 'Bakanlık Müfettişi'} <strong>${data.mufettis2_ad_soyad}</strong>` : 
        `<br>Bakanlık Müfettişi <strong>….. …..</strong>`;

    return `
        <div style="display: flex; min-height: 100%;">
            <div style="width: 30px; background: linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; writing-mode: vertical-rl; text-orientation: mixed; color: white; font-weight: bold; font-size: 14pt; letter-spacing: 3px; padding: 20px 5px;">
                Teftiş Kurulu Başkanlığı
            </div>
            
            <div style="flex: 1; padding: 15px 20px; font-family: 'Times New Roman', serif;">
                <div style="text-align: center; margin-bottom: 10px;">
                    <div style="font-weight: bold; color: #c00; text-decoration: underline; font-size: 10pt;">ÖZEL</div>
                    <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
                    <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                    <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
                </div>

                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 10pt;">
                    <div>
                        <div><u>Sayı</u> : <strong>${data.sayi || '…./.., ...'}</strong></div>
                        <div><u>Konu</u> : <strong>${data.konu || '….. ….. …..'}</strong></div>
                    </div>
                    <div style="text-align: right;"><strong>${tarih}</strong></div>
                </div>

                <div style="text-align: center; font-weight: bold; font-size: 13pt; margin: 15px 0; border: 2px solid #000; padding: 8px;">
                    ÖN İNCELEME RAPORU
                </div>

                <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; width: 50%; background: #f5f5f5;"><strong>Ön İnceleme Olurunu Veren Merci</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${data.olur_veren_merci || 'Bakanlık Makamı'}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İnceleme Olurunun Tarih ve Sayısı</strong><br><span style="font-size: 9pt;">(Ek Süre Olurunun Tarih ve Sayısı)</span></td>
                        <td style="border: 1px solid #000; padding: 6px;">
                            <strong>${olurTarih} – ${data.olur_sayi || '…..'}</strong>
                            ${ekSureTarih ? `<br><strong>${ekSureTarih} – ${data.ek_sure_sayi || '…..'}</strong>` : ''}
                        </td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Bakanlık Olurunun Tarih ve Sayısı</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${bakanlikOlurTarih} – ${data.bakanlik_olur_sayi || '…..'}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Görev Emrini Veren Makam</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${data.gorev_emri_makam || 'Teftiş Kurulu Başkanlığı'}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Görev Emrinin Tarihi ve Sayısı</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${gorevEmriTarih} – ${data.gorev_emri_sayi || '…..'}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İncelemeyi Yapanın<br>Adı-Soyadı ve Unvanı</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;">${mufettis1}${mufettis2}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Fiilin İşlendiği Tarih</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${data.fiil_tarihi || ''}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İncelemenin Yapıldığı Yer</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${data.inceleme_yeri || ''}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>İhbarcının/Şikâyetçinin Adı ve Soyadı<br><span style="font-size: 9pt;">(Yoksa Kamu Hukuku)</span></strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${data.ihbarci_sikayetci || ''}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İncelemenin Başladığı Tarih</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${baslangicTarihi}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İncelemenin Bitirildiği Tarih</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${bitisTarihi}</strong></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Bu Konuda Başka Rapor<br>Düzenlenmişse Tarihi ve Sayısı</strong></td>
                        <td style="border: 1px solid #000; padding: 6px;"><strong>${data.baska_rapor || ''}</strong></td>
                    </tr>
                </table>

                <div style="margin-bottom: 10px;">
                    <div style="border: 1px solid #000; padding: 6px; font-size: 10pt;">
                        <strong>Ön İncelemenin Konusu:</strong> <strong>${data.inceleme_konusu || '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</strong>
                    </div>
                </div>

                <div style="border: 1px solid #000; font-size: 10pt;">
                    <div style="padding: 6px; background: #f5f5f5; border-bottom: 1px solid #000;"><strong>Haklarında Ön İnceleme Yapılanlarla İlgili Açıklamalar:</strong></div>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="background: #eee;">
                            <td style="border: 1px solid #000; padding: 6px; width: 25%; text-align: center;"><strong>Adı Soyadı</strong></td>
                            <td style="border: 1px solid #000; padding: 6px; width: 25%; text-align: center;"><strong>Görevi</strong></td>
                            <td style="border: 1px solid #000; padding: 6px; width: 25%; text-align: center;"><strong>İsnat Edilen Fiil</strong></td>
                            <td style="border: 1px solid #000; padding: 6px; width: 25%; text-align: center;"><strong>Getirilen Teklif</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; min-height: 60px; white-space: pre-wrap;" colspan="4"><strong>${data.hakkinda_inceleme_yapilanlar || ''}</strong></td>
                        </tr>
                    </table>
                </div>

                <div style="text-align: right; margin-top: 10px; font-size: 9pt; color: #666;">14.1</div>
            </div>
        </div>
    `;
}

function createPDFContent1401(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 0;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const ekSureTarih = data.ek_sure_tarih ? formatDate(data.ek_sure_tarih) : '';
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);

    const mufettis1 = data.mufettis1_ad_soyad ? 
        `${data.mufettis1_unvan || 'Bakanlık Müfettişi'} ${data.mufettis1_ad_soyad}` : 
        `Bakanlık Başmüfettişi ….. …..`;
    
    const mufettis2 = data.mufettis2_ad_soyad ? 
        `<br>${data.mufettis2_unvan || 'Bakanlık Müfettişi'} ${data.mufettis2_ad_soyad}` : 
        `<br>Bakanlık Müfettişi ….. …..`;

    container.innerHTML = `
        <div style="display: flex; min-height: 100%;">
            <div style="width: 25px; background: linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; writing-mode: vertical-rl; text-orientation: mixed; color: white; font-weight: bold; font-size: 11pt; letter-spacing: 2px; padding: 15px 3px;">
                Teftiş Kurulu Başkanlığı
            </div>
            
            <div style="flex: 1; padding: 10px 15px;">
                <div style="text-align: center; margin-bottom: 8px;">
                    <div style="font-weight: bold; color: #c00; text-decoration: underline; font-size: 9pt;">ÖZEL</div>
                    <div style="font-weight: bold; font-size: 10pt;">T.C.</div>
                    <div style="font-weight: bold; font-size: 10pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                    <div style="font-weight: bold; font-size: 10pt;">Teftiş Kurulu</div>
                </div>

                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 9pt;">
                    <div>
                        <div><u>Sayı</u> : ${data.sayi || '…./.., ...'}</div>
                        <div><u>Konu</u> : ${data.konu || '….. ….. …..'}</div>
                    </div>
                    <div style="text-align: right;">${tarih}</div>
                </div>

                <div style="text-align: center; font-weight: bold; font-size: 11pt; margin: 10px 0; border: 2px solid #000; padding: 6px;">
                    ÖN İNCELEME RAPORU
                </div>

                <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 10px;">
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px; width: 50%;"><strong>Ön İnceleme Olurunu Veren Merci</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${data.olur_veren_merci || 'Bakanlık Makamı'}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Ön İnceleme Olurunun Tarih ve Sayısı</strong><br><span style="font-size: 8pt;">(Ek Süre Olurunun Tarih ve Sayısı)</span></td>
                        <td style="border: 1px solid #000; padding: 4px;">${olurTarih} – ${data.olur_sayi || '…..'}<br>${ekSureTarih ? `${ekSureTarih} – ${data.ek_sure_sayi || '…..'}` : ''}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Bakanlık Olurunun Tarih ve Sayısı</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${bakanlikOlurTarih} – ${data.bakanlik_olur_sayi || '…..'}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Görev Emrini Veren Makam</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${data.gorev_emri_makam || 'Teftiş Kurulu Başkanlığı'}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Görev Emrinin Tarihi ve Sayısı</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${gorevEmriTarih} – ${data.gorev_emri_sayi || '…..'}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Ön İncelemeyi Yapanın Adı-Soyadı ve Unvanı</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${mufettis1}${mufettis2}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Fiilin İşlendiği Tarih</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${data.fiil_tarihi || ''}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Ön İncelemenin Yapıldığı Yer</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${data.inceleme_yeri || ''}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>İhbarcının/Şikâyetçinin Adı ve Soyadı</strong><br><span style="font-size: 8pt;">(Yoksa Kamu Hukuku)</span></td>
                        <td style="border: 1px solid #000; padding: 4px;">${data.ihbarci_sikayetci || ''}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Ön İncelemenin Başladığı Tarih</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${baslangicTarihi}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Ön İncelemenin Bitirildiği Tarih</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${bitisTarihi}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 4px;"><strong>Bu Konuda Başka Rapor Düzenlenmişse Tarihi ve Sayısı</strong></td>
                        <td style="border: 1px solid #000; padding: 4px;">${data.baska_rapor || ''}</td>
                    </tr>
                </table>

                <div style="border: 1px solid #000; padding: 4px; font-size: 9pt; margin-bottom: 8px;">
                    <strong>Ön İncelemenin Konusu:</strong> ${data.inceleme_konusu || '….. ….. ….. ….. ….. …..'}
                </div>

                <div style="border: 1px solid #000; font-size: 9pt;">
                    <div style="padding: 4px; border-bottom: 1px solid #000;"><strong>Haklarında Ön İnceleme Yapılanlarla İlgili Açıklamalar:</strong></div>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 4px; width: 25%; text-align: center;"><strong>Adı Soyadı</strong></td>
                            <td style="border: 1px solid #000; padding: 4px; width: 25%; text-align: center;"><strong>Görevi</strong></td>
                            <td style="border: 1px solid #000; padding: 4px; width: 25%; text-align: center;"><strong>İsnat Edilen Fiil</strong></td>
                            <td style="border: 1px solid #000; padding: 4px; width: 25%; text-align: center;"><strong>Getirilen Teklif</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 4px; min-height: 40px; white-space: pre-wrap;" colspan="4">${data.hakkinda_inceleme_yapilanlar || ''}</td>
                        </tr>
                    </table>
                </div>

                <div style="text-align: right; margin-top: 8px; font-size: 8pt; color: #666;">14.1</div>
            </div>
        </div>
    `;
    return container;
}

'''
            # Insert before the next function
            content = content[:next_func] + new_functions + content[next_func:]
            
            with open(r'c:\Users\HP\Desktop\teftiş\app.js', 'w', encoding='utf-8') as f:
                f.write(content)
            
            print("SUCCESS: renderTemplate1401 and createPDFContent1401 functions added!")
        else:
            print("ERROR: Could not find next function")
