/* =====================================================
   Belgeler: Dizi Pusulası
   ===================================================== */

// 16.1 Dizi Pusulası
defineDocument('16.1', 'dizi_pusulasi', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);

    // Helper function for displaying data with fallback
    const v = (val, fallback = '….. …..') => `<strong>${val || fallback}</strong>`;

    // Ek listesi oluşturma
    let ekListesiHtml = '';
    if (data.ek_listesi && data.ek_listesi.length > 0) {
        data.ek_listesi.forEach((ek, idx) => {
            ekListesiHtml += `
                <tr>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center;">${idx + 1}</td>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center;">${ek.parca_sayisi || ''}</td>
                    <td style="border: 1px solid #000; padding: 4px; font-size: 9pt;">${ek.aciklama || ''}</td>
                </tr>
            `;
        });
    } else {
        // Örnek satırlar
        for (let i = 1; i <= 12; i++) {
            ekListesiHtml += `
                <tr>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center;">${i}</td>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center;">…</td>
                    <td style="border: 1px solid #000; padding: 4px; font-size: 9pt;">….. ….. …..</td>
                </tr>
            `;
        }
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10px;', `
        <div style="text-align: center; margin-bottom: 15px;">
            <p style="font-weight: bold; font-size: 10pt;">
                ${v(data.kurum_adi, '….. ….. LİSESİ')} ${v(data.ilgililer, 'MÜDÜRÜ ….. ….., ÖĞRETMEN ….. ….. ve MEMUR ….. …..')} HAKKINDA DÜZENLENEN ${v(data.rapor_turu, 'İNCELEME/SORUŞTURMA RAPORU')}NA AİT DİZİ PUSULASIDIR
            </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 9pt;">
            <thead>
                <tr>
                    <th style="border: 1px solid #000; padding: 6px; text-align: center; width: 50px;">Sıra<br>No</th>
                    <th style="border: 1px solid #000; padding: 6px; text-align: center; width: 60px;">Parça<br>Sayısı</th>
                    <th style="border: 1px solid #000; padding: 6px;">Ekin Kime ve Neye Ait Olduğu</th>
                </tr>
            </thead>
            <tbody>
                ${ekListesiHtml}
                <tr>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">${data.toplam_ek || '…'}</td>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">${data.toplam_sayfa || '…'}</td>
                    <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">-TOPLAM-</td>
                </tr>
            </tbody>
        </table>

        <p style="text-align: center; margin-bottom: 20px; font-size: 9pt;">
            <strong>(${data.toplam_ek || '…'})</strong> ${data.toplam_yazi || '….. ek, ….. sayfadan (parçadan)'} ibarettir. <strong>${tarih}</strong>
        </p>

        <table style="width: 100%; margin-top: 25px;">
            <tr>
                <td style="text-align: center; width: 50%;">
                    <div>İmza</div>
                    <div style="margin-top: 20px;">${v(data.mufettis1_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="text-align: center; width: 50%;">
                    <div>İmza</div>
                    <div style="margin-top: 20px;">${v(data.mufettis2_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
            </tr>
        </table>

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">16.1</div>
    `);
});
