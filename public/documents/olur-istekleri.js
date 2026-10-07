/* =====================================================
   Belgeler: Olur İstekleri
   ===================================================== */

// 12.1 Disiplin Soruşturması Olur İstek Yazısı (Denetim esnasında)
defineDocument('12.1', 'olur_istek_denetim', function (data) {
    if (!data) data = {};

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; margin-bottom: 12px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 10pt;">
            <div>
                <div><strong>Sayı  :</strong> ${data.sayi || '…./…, …'}</div>
                <div><strong>Konu:</strong> ${data.konu || 'Olur İsteği'}</div>
            </div>
            <div style="text-align: right;">${formatDateDots(data.tarih)}</div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="margin-bottom: 15px; font-size: 10pt;">
            <div style="display: flex;">
                <div style="min-width: 60px; font-weight: bold;">İlgi    :</div>
                <div>Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_tarih)} tarihli ve ${data.ilgi_sayi || '…..'} sayılı turne emirleri.</div>
            </div>
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 12px;">
            <p style="text-indent: 1cm; margin: 0;">
                İlgi'de kayıtlı emir gereğince ${data.denetim_il || '…..'}/${data.denetim_ilce || '…..'} ${data.okul_adi || '….. ….. Lisesi/İlkokulu/Ortaokulu'}'nda yapılan genel denetim çalışmaları sürecinde;
            </p>
        </div>

        <div style="font-size: 10pt; line-height: 1.5; margin-bottom: 12px; white-space: pre-wrap;">
${data.tespit_hususlar || '[Tespit edilen hususlar]'}
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <p style="margin-top: 8px;">hususları ortaya çıkmıştır.</p>
            <p style="text-indent: 1cm; margin-top: 12px;">
                Yukarıda belirtilen hususlarla ilgili olarak ${data.olur_istenen_kisiler || '[Olur istenen kişiler]'} hakkında disiplin soruşturması yapılabilmesi için Makamdan gerekli olurun alınmasını tensiplerine arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 35px 0 25px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px; font-size: 10pt;">
                <div style="margin-bottom: 35px;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || 'KOD'}</strong>)</div>
                <div>Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 160px; font-size: 10pt;">
                <div style="margin-bottom: 35px;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis2_kod || 'KOD'}</strong>)</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">
            12.1
        </div>
    `);
});

// 12.2 Disiplin Soruşturması Olur İstek Yazısı (İnceleme esnasında)
defineDocument('12.2', 'olur_istek_inceleme', function (data) {
    if (!data) data = {};

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; margin-bottom: 12px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 10pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> ${data.konu || 'Olur İsteği'}</div>
            </div>
            <div style="text-align: right;">${formatDateDots(data.tarih)}</div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="margin-bottom: 15px; font-size: 10pt;">
            <div style="display: flex;">
                <div style="min-width: 60px; font-weight: bold;">İlgi    :</div>
                <div>
                    <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                    <div style="padding-left: 0.5cm;">b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                </div>
            </div>
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 12px;">
            <p style="text-indent: 1cm; margin: 0;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince yürütülen inceleme/soruşturma çalışmaları sürecinde;
            </p>
        </div>

        <div style="font-size: 10pt; line-height: 1.5; margin-bottom: 12px; white-space: pre-wrap;">
${data.tespit_hususlar || '[Tespit edilen hususlar]'}
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <p style="text-indent: 1cm;">hususları ortaya çıkmıştır.</p>
            <p style="text-indent: 1cm; margin-top: 12px;">
                Yukarıda belirtilen hususlarla ilgili olarak ${data.olur_istenen_kisiler || '[Olur istenen kişiler]'} hakkında disiplin soruşturması yapılabilmesi için Makamdan gerekli olurun alınmasını tensiplerine arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 35px 0 20px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px; font-size: 10pt;">
                <div style="margin-bottom: 35px;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || 'KOD'}</strong>)</div>
                <div>Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 160px; font-size: 10pt;">
                <div style="margin-bottom: 35px;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis2_kod || 'KOD'}</strong>)</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 15px; padding: 8px; border: 1px solid #999; background: #f5f5f5; font-size: 8pt;">
            <strong>Açıklama:</strong> Disiplin yönünden alınan olurlarda yer alan hususlardan, 4483, 3628, 5816 sayılı ve diğer ceza hükümlü kanunlar kapsamına giren eylemlerle ilgili olarak, usulünce görevli ve yetkili mercilere gerekli duyuruların yapılması gerektiği göz önünde bulundurulmalıdır.
        </div>

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">
            12.2
        </div>
    `);
});
