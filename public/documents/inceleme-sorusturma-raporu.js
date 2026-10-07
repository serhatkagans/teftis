/* =====================================================
   Belgeler: İnceleme-Soruşturma Raporu
   ===================================================== */

// 13.1 İnceleme-Soruşturma Rapor Kapağı
defineDocument('13.1', 'inceleme_sorusturma_kapagi', function (data) {
    if (!data) data = {};

    const tarih = data.tarih ? formatDateDots(data.tarih) : 'gg.aa.yyyy';
    const makamOluruTarih = data.makam_oluru_tarih ? formatDateDots(data.makam_oluru_tarih) : 'gg.aa.yyyy';
    const gorevEmriTarih = data.gorev_emri_tarih ? formatDateDots(data.gorev_emri_tarih) : 'gg.aa.yyyy';
    const baslamaTarihi = data.baslama_tarihi ? formatDateDots(data.baslama_tarihi) : '';
    const bitisTarihi = data.bitis_tarihi ? formatDateDots(data.bitis_tarihi) : '';

    const mufettis1Unvan = data.mufettis1_unvan || 'Bakanlık Başmüfettişi';
    const mufettis2Unvan = data.mufettis2_unvan || 'Bakanlık Müfettişi';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.3; color: #000; background: #fff; width: 190mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 5mm;', `
        <table style="width: 100%; height: 257mm; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 12mm; background-color: #0066CC; border-right: 3px solid #000; vertical-align: middle; text-align: center; position: relative;">
                    <div style="position: absolute; top: 50%; left: 50%; white-space: nowrap; font-weight: bold; font-size: 11pt; color: #fff; transform: translateX(-50%) translateY(-50%) rotate(-90deg);">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="vertical-align: top; padding: 15px 20px;">
                    <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 12px; font-size: 12pt;">ÖZEL</div>

                    <div style="text-align: center; margin-bottom: 15px;">
                        <div style="font-size: 11pt;">T.C.</div>
                        <div style="font-weight: bold; font-size: 12pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div style="font-size: 11pt;">Teftiş Kurulu</div>
                    </div>

                    <table style="width: 100%; margin-bottom: 15px; font-size: 10pt;">
                        <tr>
                            <td style="vertical-align: top;">
                                <div>Sayı : ${data.sayi || '…./.., ...'}</div>
                                <div>Konu : ${data.konu || '….. ….. …..'}</div>
                            </td>
                            <td style="text-align: right; vertical-align: top;">${tarih}</td>
                        </tr>
                    </table>

                    <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 15px; font-size: 14pt;">
                        İNCELEME/SORUŞTURMA RAPORU
                    </div>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 12px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; width: 45%; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam</td>
                            <td style="border: 1px solid #000; padding: 6px;">${data.olur_veren_makam || 'Bakanlık Makamı'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">Makam Olurunun Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 6px;">${makamOluruTarih} - ${data.makam_oluru_sayi || '…..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">Görev Emrini Veren Makam</td>
                            <td style="border: 1px solid #000; padding: 6px;">${data.gorev_emri_veren || 'Teftiş Kurulu Başkanlığı'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">Görev Emrinin Tarihi ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 6px;">${gorevEmriTarih} - ${data.gorev_emri_sayi || '…..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">İnceleme/Soruşturma Çalışmalarını<br>Yürüten Bakanlık Müfettişleri</td>
                            <td style="border: 1px solid #000; padding: 6px;">
                                <div>${mufettis1Unvan} ${data.mufettis1_ad_soyad || '….. …..'}</div>
                                ${data.mufettis2_ad_soyad ? `<div>${mufettis2Unvan} ${data.mufettis2_ad_soyad}</div>` : ''}
                            </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold; vertical-align: top;">İnceleme/Soruşturmanın Konusu</td>
                            <td style="border: 1px solid #000; padding: 6px; min-height: 50px;">
                                ${data.konu_detay || `Bakanlık Makamının ${makamOluruTarih} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı olurunda yer alan "….. ….. ….. ….." hususları`}
                            </td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; width: 45%; font-weight: bold;">Fiil ve Hâlin İşlendiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 6px;">${data.fiil_tarihi || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">Fiil ve Hâlin İşlendiğinin Öğrenildiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 6px;">${data.ogrenilme_tarihi || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">İnceleme/Soruşturmanın Yapıldığı Yer</td>
                            <td style="border: 1px solid #000; padding: 6px;">${data.yapildigi_yer || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">İnceleme/Soruşturmanın Başlama Tarihi</td>
                            <td style="border: 1px solid #000; padding: 6px;">${baslamaTarihi}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">İnceleme/Soruşturmanın Bitirilme Tarihi</td>
                            <td style="border: 1px solid #000; padding: 6px;">${bitisTarihi}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold; vertical-align: top; height: 120px;">Hakkında<br>İnceleme/Soruşturma<br>Yapılanlar<br><u>ve</u> Getirilen<br>Teklifler</td>
                            <td style="border: 1px solid #000; padding: 6px; vertical-align: top;">
                                <div style="white-space: pre-wrap;">${data.hakkinda_sorusturma || ''}</div>
                                <div style="margin-top: 8px; border-top: 1px solid #ccc; padding-top: 4px;">Mali Tekliflerin Toplam Tutarı: ${data.mali_teklif_tutari || '…..TL.-'}</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">Başka Rapor Düzenlenmiş ise Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 6px;">${data.baska_rapor || 'Düzenlenmemiştir.'}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">13.1</div>
                </td>
            </tr>
        </table>
    `);
});

// 13.2 İnceleme-Soruşturma Raporu
defineDocument('13.2', 'inceleme_sorusturma_raporu', function (data) {
    if (!data) data = {};

    const tarih = data.tarih ? formatDateDots(data.tarih) : 'gg.aa.yyyy';
    const ilgiATarih = data.ilgi_a_tarih ? formatDateDots(data.ilgi_a_tarih) : 'gg.aa.yyyy';
    const ilgiBTarih = data.ilgi_b_tarih ? formatDateDots(data.ilgi_b_tarih) : 'gg.aa.yyyy';
    const calismaBaslangic = data.calisma_baslangic ? formatDateDots(data.calisma_baslangic) : 'gg.aa.yyyy';
    const calismaBitis = data.calisma_bitis ? formatDateDots(data.calisma_bitis) : 'gg.aa.yyyy';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 0;', `
        <div style="text-align: center; margin-bottom: 12px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt; text-decoration: underline;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 10pt;">
            <div>
                <div><strong>Sayı</strong> : ${data.sayi || '…./…,...'}</div>
                <div><strong>Konu</strong> : ${data.konu || '….. ….. Lisesi Yöneticileri'}</div>
            </div>
            <div style="text-align: right;">${tarih}</div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            MİLLÎ EĞİTİM BAKANLIĞINA
        </div>

        <div style="margin-bottom: 15px; font-size: 10pt;">
            <div style="display: flex;">
                <div style="min-width: 60px; font-weight: bold;">İlgi    :</div>
                <div>
                    <div>a) Bakanlık Makamının ${ilgiATarih} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı inceleme/soruşturma Oluru.</div>
                    <div style="padding-left: 0.4cm;">b) Teftiş Kurulu Başkanlığının ${ilgiBTarih} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                </div>
            </div>
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <p style="text-indent: 0.8cm; margin-bottom: 8px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince ${data.hakkinda_kisiler || '….. ….. Lisesi Müdürü ….. ….., ….. öğretmeni ….. ….. ve memur ….. ….. '} hakkında yürütülen inceleme/soruşturma çalışmaları, ${calismaBaslangic} - ${calismaBitis} tarihleri arasında yapılmış olup; tespit edilen hususlar aşağıda açıklanmıştır.
            </p>
        </div>

        <div style="font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 8px;">1. İNCELEME/SORUŞTURMANIN KONUSU:</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.konusu_aciklama || ''}</div>
        </div>

        <div style="font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 8px;">2. YAPILAN İNCELEME/SORUŞTURMA (Yöntem ve Süreç Akışı):</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.yontem_surec || ''}</div>
        </div>

        <div style="font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 8px;">3. BİLGİ-BELGE VE İFADELERİN DEĞERLENDİRİLMESİ:</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.degerlendirme || ''}</div>
        </div>

        <div style="font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 8px;">4. SONUÇ–KANAAT VE TEKLİF:</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.sonuc_kanaat_teklif || ''}</div>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 30px 0 20px 0;">
            <div style="text-align: center; min-width: 150px;">
                <div style="margin-bottom: 30px; font-size: 9pt;">İmza</div>
                <div>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 150px;">
                <div style="margin-bottom: 30px; font-size: 9pt;">İmza</div>
                <div>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
        </div>

        ${data.ekler ? `
        <div style="margin-top: 20px; font-size: 10pt;">
            <div style="font-weight: bold;">Ek:</div>
            <div>${data.ekler}</div>
        </div>
        ` : ''}

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">13.2</div>
    `);
});
