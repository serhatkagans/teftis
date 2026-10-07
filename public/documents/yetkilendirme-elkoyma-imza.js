/* =====================================================
   Belgeler: Yetkilendirme, Elkoyma ve İmza/Yazı Örneği Tespiti
   ===================================================== */

// 8.1 İnceleme ve Soruşturmalarda Gerektiğinde Grup Adına İfade Alma (Yetkilendirme) Kararı
defineDocument('8.1', 'yetkilendirme_karari', function (data) {
    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    // Build ifade alınacak kişiler listesi
    let kisilerText = `${data.kurum_adi || '….. Lisesi'} (önceki/eski) ${data.ifade1_unvan || 'öğretmeni'} <strong>${data.ifade1_ad_soyad || '….. …..'}</strong>`;
    if (data.ifade2_ad_soyad) {
        kisilerText += ` ve <strong>${data.ifade2_ad_soyad}</strong>`;
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> İfade alma</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; font-size: 12pt; margin: 15px 0 12px 0;">
            YETKİLENDİRME KARARI
        </div>

        <div style="font-size: 10pt; line-height: 1.4;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 8px;">
                Teftiş Kurulu Başkanlığının ${formatDateDots(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı görevlendirme emirleri ekinde yer alan Bakanlık Makamının ${formatDateDots(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru gereğince ${data.kurum_adi || '….. Lisesi'} ${data.sorusturulan_unvan || 'Müdürü'} <strong>${data.sorusturulan_ad_soyad || '….. …..'}</strong> ve diğer görevliler hakkında Müfettişliğimizce yürütülen ${calismaTuru} çalışmasında, çalışma kapsamındaki konularda/iddialarda bilgisi ve/veya ilgisi bulunan bazı görevlilerin yeni görev yerlerine atanmaları dolayısıyla konu/olay mahalli dışında bulundukları anlaşılmıştır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 8px;">
                ${calismaTuru.charAt(0).toUpperCase() + calismaTuru.slice(1)} çalışmalarının kısa sürede tamamlanabilmesi için; ${calismaTuru} kapsamındaki konular/iddialar bağlamında, ekli esaslarda belirtilen konumları dolayısıyla ifadelerinin alınması gerekli görülen ${kisilerText}'nın ifadelerinin yeni görev yerlerinde, ${calismaTuru} grubumuzca tespit edilen ve bu karar ekinde yer alan esaslar dâhilinde, belirlenen grup üyesi tarafından alınması kararlaştırılmıştır.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 30px 0 15px 0; flex-wrap: wrap; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            ${data.mufettis3_ad_soyad ? `
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis3_ad_soyad}</strong></div>
                <div>(${data.mufettis3_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 15px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong> İfade Alma Esasları (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            8.1
        </div>
    `);
});

// 8.2 İfade Alma Esasları
defineDocument('8.2', 'ifade_alma_esaslari', function (data) {
    // Build table rows
    let tableRows = '';
    for (let i = 1; i <= 3; i++) {
        const adSoyad = data[`kisi${i}_ad_soyad`];
        if (adSoyad) {
            tableRows += `
                <tr>
                    <td style="border: 1px solid #000; padding: 3px; text-align: center;">${i}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${adSoyad}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${data[`kisi${i}_unvan`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${data[`kisi${i}_gorev_yeri`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${data[`kisi${i}_konum`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${data[`kisi${i}_konu_no`] || ''}</td>
                </tr>
            `;
        }
    }
    if (!tableRows) {
        tableRows = `
            <tr><td style="border: 1px solid #000; padding: 3px; text-align: center;">1</td><td style="border: 1px solid #000; padding: 3px;" colspan="5"></td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px; text-align: center;">2</td><td style="border: 1px solid #000; padding: 3px;" colspan="5"></td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px; text-align: center;">3</td><td style="border: 1px solid #000; padding: 3px;" colspan="5"></td></tr>
        `;
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="font-weight: bold; color: #c00; text-align: center; margin-bottom: 5px; font-size: 9pt;">ÖZEL</div>
        <div style="text-align: center; font-weight: bold; font-size: 11pt; margin-bottom: 12px;">
            İFADE ALMA ESASLARI
        </div>

        <div style="font-size: 9pt; line-height: 1.3; text-align: justify;">
            <p style="margin-bottom: 6px;">
                <strong>1.</strong> Bu Esaslar, ${formatDateDots(data.karar_tarih)} tarihli ve ${data.karar_sayi || '…..'} sayılı Yetkilendirme Kararı ekidir.
            </p>

            <p style="margin-bottom: 6px;">
                <strong>2.</strong> İfadesi alınacak görevlilerin adı ve soyadı, görevi/unvanı, görev yeri ve ifade konumu (muhbir, müşteki, tanık, …) ile hangi konularda/iddialarda ifadesinin alınacağı aşağıdaki tabloda belirtilmektedir.
            </p>

            <table style="width: 100%; border-collapse: collapse; font-size: 8pt; margin: 8px 0;">
                <thead>
                    <tr style="background-color: #f0f0f0;">
                        <th style="border: 1px solid #000; padding: 3px; text-align: center;">Sıra No</th>
                        <th style="border: 1px solid #000; padding: 3px;">Adı ve Soyadı</th>
                        <th style="border: 1px solid #000; padding: 3px;">Görevi/Unvanı</th>
                        <th style="border: 1px solid #000; padding: 3px;">Görev Yeri</th>
                        <th style="border: 1px solid #000; padding: 3px;">İfade Konumu</th>
                        <th style="border: 1px solid #000; padding: 3px;">Konu/İddia No</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>

            <p style="margin-bottom: 6px;">
                <strong>3.</strong> İfadesi alınacak görevlilere/kişilere; inceleme/soruşturma çalışmaları sırasında grubumuzca elde edilen veriler göz önünde bulundurularak, konular/iddialar bağlamında, konumlarının gerektirdiği sorular usulünce sorulacak, verdiği cevaplar ilgili ifade tutanağına aynen yazılacaktır.
            </p>

            <p style="margin-bottom: 6px;">
                <strong>4.</strong> İfadesi alınacakların yaptığı açıklamalar sonrasında ortaya çıkabilecek yeni durumlar ile ilgili olarak gerektiğinde ilgililere grubumuz adına ek sorular sorularak cevapları alınacaktır.
            </p>

            <p style="margin-bottom: 6px;">
                <strong>5.</strong> Yukarıdaki tabloda belirtilen (${data.grup1_siralar || '..., …, …'}) sıra no.lu kişilerin/görevlilerin ifadeleri, gurup üyesi <strong>${data.grup1_uye || '….. …..'}</strong> tarafından; (${data.grup2_siralar || '..., …, …'}) sıra no.lu kişilerin/görevlilerin ifadeleri ise gurup üyesi <strong>${data.grup2_uye || '….. …..'}</strong> tarafından alınacaktır.
            </p>

            <p style="margin-bottom: 6px;">
                <strong>6.</strong> İfadelerin alınması sırasında, gerektiren bir durum oluştuğunda, heyetimiz başkanı ve üyeleri arasında telefonla görüşme yapılabilecektir.
            </p>

            <p style="margin-bottom: 8px;">
                ${formatDateDots(data.karar_tarih)} tarihli ve ${data.karar_sayi || '…..'} sayılı Yetkilendirme Kararı eki, (6) maddeden oluşan bu Esaslar grubumuzca tespit edilerek karar altına alınmıştır.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 20px 0 10px 0; flex-wrap: wrap; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 120px; margin: 3px;">
                <div style="margin-bottom: 30px; font-size: 8pt;">İmza</div>
                <div style="font-size: 9pt;"><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 8pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 8pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 120px; margin: 3px;">
                <div style="margin-bottom: 30px; font-size: 8pt;">İmza</div>
                <div style="font-size: 9pt;"><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 8pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 8pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            ${data.mufettis3_ad_soyad ? `
            <div style="text-align: center; min-width: 120px; margin: 3px;">
                <div style="margin-bottom: 30px; font-size: 8pt;">İmza</div>
                <div style="font-size: 9pt;"><strong>${data.mufettis3_ad_soyad}</strong></div>
                <div style="font-size: 8pt;">(${data.mufettis3_kod || 'KOD'})</div>
                <div style="font-size: 8pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 10px; font-size: 7pt; text-align: right; color: #666;">
            8.2
        </div>
    `);
});

// 9.1 Soruşturmaya Konu Olan Eşyaya Elkoyma Tutanağı
defineDocument('9.1', 'elkoyma_tutanagi', function (data) {
    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px;">
            ELKOYMA TUTANAĞI
        </div>

        <div style="font-size: 10pt; line-height: 1.4; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                Teftiş Kurulu Başkanlığının ${formatDateDots(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı emirleri ekinde yer alan Bakanlık Makamının ${formatDateDots(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru gereği Müfettişliğimizce yürütülmekte olan ${calismaTuru} nedeniyle, hakkında soruşturma yapılan <strong>${data.sorusturulan_ad_soyad || '….. …..'}</strong>'ın (T.C. Kimlik No: ${data.sorusturulan_tc || '…..'}) olayda kullandığı iddia edilen <strong>${data.esya_marka || '…..'}</strong> (marka) <strong>${data.esya_model || '…..'}</strong> (model) <strong>${data.esya_seri_no || '…..'}</strong>'lu (seri no, no vb.) <strong>${data.esya_tanim || '…..'}</strong>'a (olayda kullanılan mal, eşya vb.) araştırma sonucu geri verilmek üzere geçici olarak el konularak zapt edilmiş olup, işbu El Koyma Tutanağı tarafımızca tanzim edilerek imza altına alınmıştır. ${formatDateDots(data.tarih)} - Saat: ${formatTimeDots(data.saat)}
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0; flex-wrap: wrap; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mal_sahibi_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(El Konulan Malın/Eşyanın Sahibi)</div>
            </div>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            9.1
        </div>
    `);
});

// 10.1 İmza ve/veya Yazı Tespiti İçin Kriminal Daire Başkanlığına Yazılacak Yazı
defineDocument('10.1', 'imza_yazi_tespiti', function (data) {
    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 9pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 10pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 10pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 10pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 10pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> İmza/Yazı Tespiti</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="font-weight: bold; font-size: 10pt; margin-bottom: 12px;">
            EMNİYET GENEL MÜDÜRLÜĞÜNE<br>
            <span style="font-weight: normal;">(Kriminal Daire Başkanlığı)</span>
        </div>

        <div style="font-size: 10pt; margin-bottom: 12px;">
            <strong>İlgi    :</strong> a) Bakanlık Makamının ${formatDateDots(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru.<br>
            <span style="margin-left: 40px;">b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı görevlendirme emri.</span>
        </div>

        <div style="font-size: 10pt; line-height: 1.4;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülmekte olan ${calismaTuru}de; <strong>${data.kisi_ad_soyad || '….. …..'}</strong>'ın (T.C. Kimlik No: ${data.kisi_tc || '…..'}) ${calismaTuru} konusu belge üzerinde yer alan imzanın kendisine ait olmadığını beyan etmesi üzerine adı geçen kişiden imza ve yazı örnekleri alınmış olup söz konusu imzanın Başkanlığınızca incelenerek sonucun Teftiş Kurulu Başkanlığına gönderilmesi hususunda gereğini arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: center; margin: 30px 0 15px 0; gap: 50px; page-break-inside: avoid;">
            <div style="text-align: center;">
                <div style="margin-bottom: 30px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center;">
                <div style="margin-bottom: 30px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 15px; font-size: 9pt; border-top: 1px solid #999; padding-top: 8px;">
            <strong>Ek:</strong> İmza ve/veya Yazı Örneği (${data.ek_sayfa || '…'} Sayfa)<br>
            <span style="margin-left: 20px;">Tespit Tutanağı</span>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            10.1
        </div>
    `);
});

// 10.2 İmza Tetkiki veya Yazı Yazdırılması Tespit Tutanağı
defineDocument('10.2', 'imza_yazi_tespit_tutanagi', function (data) {
    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px;">
            İMZA/YAZI TESPİT TUTANAĞI
        </div>

        <div style="font-size: 10pt; line-height: 1.4; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                Müfettişliğimizce yürütülmekte olan ${calismaTuru}de suç unsuru olarak belirtilen belgelerin, <strong>${data.kisi_ad_soyad || '….. …..'}</strong> tarafından yazıldığı/imzalandığı öne sürüldüğünden yazı/imza incelemesinde değerlendirilmek üzere iddianın muhatabı <strong>${data.muhatap_ad_soyad || '….. …..'}</strong>'ya, aşağıdaki metin kendi el yazısıyla yazdırıldı/imzalatıldı. (Buraya, belirli bir metin okumak suretiyle; oturarak ve ayakta olmak üzere sağ veya sol el yazısıyla okunan metin kişiye yazdırılır. Şayet imza tetkiki yapılacaksa muhatabın imza örnekleri oturarak ve ayakta en az 3'er defa alınır. İmza tetkikinde, suç unsuru olarak belirtilen belgelerin tarihlerine yakın tarihlerde kişinin ıslak imza attığı suç unsuru bulunmayan diğer belgelerden de istifade edilebilir.)
            </p>
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                İşbu yazı yazdırılması/imza tetkiki, huzurumuzda icra edilmiş olup tutanağın doğruluğu tarafımızdan müştereken tasdik edildi. Bu tutanak <strong>${data.kurum_adi || '….. İlkokulu/Ortaokulu/Lisesi/Müdürlüğü'}</strong>nde ${formatDateDots(data.tarih)} tarihinde ve saat ${formatTimeDots(data.saat)}'de/da Müfettişliğimize tahsis edilen odada düzenlenmiştir.
            </p>
        </div>

        <div style="display: flex; justify-content: center; margin: 40px 0 20px 0; gap: 30px; flex-wrap: wrap; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 120px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 120px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            <div style="text-align: center; min-width: 120px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.tanik_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">Yer Tanığı/Okul Müdürü</div>
            </div>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            10.2
        </div>
    `);
});

// 10.2.1 İmza ve/veya Yazı Örneği Tespit Tutanağı
defineDocument('10.2.1', 'imza_yazi_ornegi_formu', function (data) {
    if (!data) data = {};

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.2; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px;">
            İMZA ÖRNEKLERİ
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td style="width: 50%; vertical-align: top; padding-right: 8px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 8px;">AYAKTA SOL ELLE</td></tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr><td colspan="3" style="height: 30px; border: none;"></td></tr>
                        <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 8px;">OTURARAK SOL ELLE</td></tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                    </table>
                </td>
                <td style="width: 50%; vertical-align: top; padding-left: 8px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 8px;">AYAKTA SAĞ ELLE</td></tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr><td colspan="3" style="height: 30px; border: none;"></td></tr>
                        <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 8px;">OTURARAK SAĞ ELLE</td></tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin: 30px 0 12px 0; text-decoration: underline;">
            YAZI ÖRNEĞİ
        </div>

        <div style="border: 1px solid #000; padding: 10px; min-height: 320px;">
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="height: 22px;"></div>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            10.2.1
        </div>
    `);
});
