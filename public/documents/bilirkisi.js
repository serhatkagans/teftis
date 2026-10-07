/* =====================================================
   Belgeler: Bilirkişi
   ===================================================== */

// 5.1 Bilirkişi Görevlendirme Konusunda İlgili Kuruluşa Yazılan Yazı
defineDocument('5.1', 'bilirkisi_gorevlendirme', function (data) {
    // Bilirkişi ekler listesi
    const ekler = [];
    if (data.ek1_bilirkisi) {
        ekler.push(`1- ${data.ek1_bilirkisi}'ın Görevlendirme Yazısı (${data.ek1_sayfa || '1 Sayfa'})`);
    }
    if (data.ek2_bilirkisi) {
        ekler.push(`2- ${data.ek2_bilirkisi}'ın Görevlendirme Yazısı (${data.ek2_sayfa || '1 Sayfa'})`);
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;', `
        <div style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> ${data.konu || 'Bilirkişi Görevlendirmesi'}</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0 15px 0; font-size: 11pt;">
            <strong>${(data.mudur_adi || '….. ….. …..').toUpperCase()}</strong> MÜDÜRLÜĞÜNE
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 40px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.makam_oluru_tarihi)} tarihli ve ${data.makam_oluru_sayi || '…..'}  sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.gorevlendirme_tarihi)} tarihli ve ${data.gorevlendirme_sayi || '….'} sayılı görevlendirme emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer Alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülmekte olan inceleme/soruşturmada, <strong>${data.okul_adi || '….. ….. ….. Okulu'}</strong> <strong>${data.bilirkisi1_brans || '…..'}  branşı</strong> öğretmenlerinden <strong>${data.bilirkisi1_ad_soyad || '….. …..'}</strong>${data.bilirkisi2_ad_soyad ? ` ve <strong>${data.bilirkisi2_brans || '…..'}  branşı</strong> öğretmenlerinden <strong>${data.bilirkisi2_ad_soyad}</strong>` : ''} bilirkişi olarak görevlendirilmişlerdir.
            </p>
            <p style="text-align: justify; text-indent: 0; margin-bottom: 15px;">
                Ekteki görevlendirme yazılarının adı geçenlere tebliğ edilerek tebliğ/tebellüğ evrakının Müfettişliğimize verilmesini rica ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(${data.mufettis1_kod || '…..'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || '…..'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        ${ekler.length > 0 ? `
        <div style="margin-top: 25px; font-size: 10pt; border-top: 1px solid #999; padding-top: 12px;">
            <strong>Ek:</strong><br>
            ${ekler.map(ek => `${ek}<br>`).join('')}
        </div>
        ` : ''}

        <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            5.1
        </div>
    `);
});

// 5.2 Bilirkişi Görevlendirme Yazısı
defineDocument('5.2', 'bilirkisi_gorevlendirme_yazisi', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;', `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 30px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.konu || 'Görevlendirme'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatDateDots(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: left; margin: 30px 0; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Sayın ${data.bilirkisi_ad_soyad || '….. …..'}</strong></div>
            <div><strong>${data.bilirkisi_gorev || '….. ….. Lisesi ….. Öğretmeni'}</strong></div>
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Müfettişliğimizce yürütülmekte olan inceleme/soruşturmada, <strong>${data.ders_adi || '…..'}</strong> dersine ait sınav kâğıtlarının değerlendirilmesinde “bilirkişi” görüşünün alınması gerekli görülmektedir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Bu itibarla; <strong>${data.ders_adi || '…..'}</strong> dersine ait sınav kâğıtlarının değerlendirilmesi konusunda, Ceza Muhakemesi Kanunu’nun 63-66 ncı maddeleri gereğince “bilirkişi” olarak görevlendirildiniz.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Bu nedenle <strong>${formatDateDots(data.randevu_tarihi)}</strong> <strong>${data.randevu_gunu || '…..'}</strong> günü, saat <strong>${data.randevu_saati || 'ss.dd'}</strong>’de/da <strong>${data.randevu_yeri || '….. Lisesindeki ….. odasında'}</strong> hazır bulunmanızı rica ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(<strong>${data.mufettis2_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            5.2
        </div>
    `);
});

// 5.3 Bilirkişi Ücret Ödeme Yazısı
defineDocument('5.3', 'bilirkisi_ucret_odeme', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;', `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.konu || 'Bilirkişi Ücreti'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatDateDots(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 30px 0; font-size: 11pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince <strong>${data.sorusturulan_kurum || '….. ….. Lisesi'}</strong>nde yürütülen soruşturmada bilirkişi olarak görevlendirilen <strong>${data.bilirkisi_kurum || '….. Lisesi'}</strong> Öğretmenleri <strong>${data.bilirkisi_ad_soyad || '….. …..'}’a</strong>, bilirkişi ücreti olarak takdir edilen miktarı gösterir “Bilirkişi Ücreti Tespit Kararı” ilişikte sunulmuştur.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Takdir olunan ücretin, Ceza Muhakemesi Kanunu’nun 72 nci maddesi uyarınca ilgililere ödenmesinin sağlanmasını tensiplerinize arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 30px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(<strong>${data.mufettis2_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 25px; font-size: 10pt; border-top: 1px solid #999; padding-top: 12px;">
            <strong>Ek:</strong><br>
            Bilirkişi Ücreti Tespit Kararı (${data.ek_sayfa || '1'} Sayfa)
        </div>

        <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            5.3
        </div>
    `);
});
