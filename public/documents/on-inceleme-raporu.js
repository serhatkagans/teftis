/* =====================================================
   Belgeler: Ön İnceleme Raporu
   ===================================================== */

// 14.1 Ön İnceleme Raporu Kapağı
defineDocument('14.1', 'on_inceleme_raporu_kapagi', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);
    const olurTarih = formatDateDots(data.olur_tarih);
    const ekSureTarih = data.ek_sure_tarih ? formatDateDots(data.ek_sure_tarih) : '';
    const bakanlikOlurTarih = formatDateDots(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDateDots(data.gorev_emri_tarih);
    const baslangicTarihi = formatDateDots(data.baslangic_tarihi);
    const bitisTarihi = formatDateDots(data.bitis_tarihi);
    const fiilTarihi = data.fiil_tarihi ? formatDateDots(data.fiil_tarihi) : '';

    const mufettis1 = data.mufettis1_ad_soyad ?
        `${data.mufettis1_unvan || 'Bakanlık Müfettişi'} ${data.mufettis1_ad_soyad}` :
        `Bakanlık Başmüfettişi ….. …..`;

    const mufettis2 = data.mufettis2_ad_soyad ?
        `<br>${data.mufettis2_unvan || 'Bakanlık Müfettişi'} ${data.mufettis2_ad_soyad}` :
        `<br>Bakanlık Müfettişi ….. …..`;

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 0;', `
        <table style="width: 100%; height: 100%; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 12mm; background-color: #0066CC; border-right: 3px solid #000; vertical-align: middle; text-align: center; position: relative;">
                    <div style="position: absolute; top: 50%; left: 50%; white-space: nowrap; font-weight: bold; font-size: 11pt; color: #fff; transform: translateX(-50%) translateY(-50%) rotate(-90deg);">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="padding: 10px 15px; vertical-align: top;">
                    <div style="text-align: center; margin-bottom: 8px;">
                        <div style="font-weight: bold; color: #c00; text-decoration: underline; font-size: 9pt;">ÖZEL</div>
                        <div style="font-weight: bold; font-size: 10pt;">T.C.</div>
                        <div style="font-weight: bold; font-size: 10pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div style="font-weight: bold; font-size: 10pt;">Teftiş Kurulu</div>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 9pt;">
                        <div>
                            <div>Sayı : ${data.sayi || '…./.., ...'}</div>
                            <div>Konu : ${data.konu || '….. ….. …..'}</div>
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
                            <td style="border: 1px solid #000; padding: 4px;">${olurTarih} – ${data.olur_sayi || '…..'}<br>${ekSureTarih || data.ek_sure_sayi ? `${ekSureTarih || 'gg.aa.yyyy'} – ${data.ek_sure_sayi || '…..'}` : ''}</td>
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
                            <td style="border: 1px solid #000; padding: 4px;">${fiilTarihi}</td>
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
                                <td style="border: 1px solid #000; padding: 4px; min-height: 40px; white-space: pre-wrap; vertical-align: top;">${data.hakkinda_adi_soyadi || ''}</td>
                                <td style="border: 1px solid #000; padding: 4px; min-height: 40px; white-space: pre-wrap; vertical-align: top;">${data.hakkinda_gorevi || ''}</td>
                                <td style="border: 1px solid #000; padding: 4px; min-height: 40px; white-space: pre-wrap; vertical-align: top;">${data.hakkinda_isnat_edilen_fiil || ''}</td>
                                <td style="border: 1px solid #000; padding: 4px; min-height: 40px; white-space: pre-wrap; vertical-align: top;">${data.hakkinda_getirilen_teklif || ''}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="text-align: right; margin-top: 8px; font-size: 8pt; color: #666;">14.1</div>
                </td>
            </tr>
        </table>
    `);
});

// 14.2 Ön İnceleme Raporu
defineDocument('14.2', 'on_inceleme_raporu', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);
    const bakanlikOlurTarih = formatDateDots(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDateDots(data.gorev_emri_tarih);
    const baslangicTarihi = formatDateDots(data.baslangic_tarihi);
    const bitisTarihi = formatDateDots(data.bitis_tarihi);
    const ogrenmeTarihi = formatDateDots(data.ogrenme_tarihi);
    const fiilTarihi = formatDateDots(data.fiil_tarihi);

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.6; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; font-weight: bold; color: #c00; margin-bottom: 10px;">ÖZEL</div>
        
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 25px;">
            <tr>
                <td style="width: 80px;">Sayı</td>
                <td style="width: 15px;">:</td>
                <td>${data.sayi || '…./.., ...'}</td>
                <td style="text-align: right;">${tarih}</td>
            </tr>
            <tr>
                <td>Konu</td>
                <td>:</td>
                <td colspan="2">${data.konu || '….. ….. Hakkında Ön İnceleme'}</td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin: 30px 0; text-decoration: underline;">
            ÖN İNCELEME RAPORU
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">I. GİRİŞ:</div>
            <p style="text-align: justify; margin: 5px 0;">
                Bakanlık Makamının ${bakanlikOlurTarih} tarihli ve ${data.bakanlik_olur_sayi || '…..'} sayılı Oluru,<br>
                Teftiş Kurulu Başkanlığının ${gorevEmriTarih} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı görev emri,<br>
                Ön inceleme çalışmasının başlama tarihi: ${baslangicTarihi}, bitirilme tarihi: ${bitisTarihi},<br>
                Ön inceleme çalışmasının yürütüldüğü yer: ${data.inceleme_yeri || '…..'}
            </p>
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">II. İHBARCI/ŞİKÂYETÇİ:</div>
            ${data.ihbarci_adi_soyadi && data.ihbarci_adi_soyadi.toLowerCase() !== 'kamu hukuku' ? `
            <table style="width: 100%; font-size: 12pt; margin-bottom: 10px;">
                <tr><td style="width: 250px;">Adı ve Soyadı</td><td style="width: 15px;">:</td><td>${data.ihbarci_adi_soyadi || '…..'}</td></tr>
                <tr><td>T.C. Kimlik Numarası</td><td>:</td><td>${data.ihbarci_tc || '…..'}</td></tr>
                <tr><td>Görevi/İşi</td><td>:</td><td>${data.ihbarci_gorevi || '…..'}</td></tr>
                <tr><td>Görev/İş Adresi ve Telefonu</td><td>:</td><td>${data.ihbarci_gorev_adresi || '…..'}</td></tr>
                <tr><td>İkametgâh Adresi ve Telefonu</td><td>:</td><td>${data.ihbarci_ikamet_adresi || '…..'}</td></tr>
            </table>
            ` : `<p style="margin: 5px 0;">Kamu Hukuku</p>`}
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">III. YETKİLİ MERCİİN ÖĞRENME TARİHİ:</div>
            <p style="text-align: justify; margin: 5px 0;">
                ${ogrenmeTarihi}
                ${data.ogrenme_aciklama ? `<br>${data.ogrenme_aciklama}` : ''}
            </p>
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">IV. FİİL YERİ VE TARİHİ:</div>
            <p style="text-align: justify; margin: 5px 0;">
                Yer: ${data.fiil_yeri || '…..'}<br>
                Tarih: ${fiilTarihi}
            </p>
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">V. HAKKINDA ÖN İNCELEME YAPILANLAR:</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.hakkinda_bilgiler || '…..'}</div>
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">VI. ÖN İNCELEMENİN KONUSU:</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.inceleme_konusu || '…..'}</div>
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">VII. YAPILAN ÖN İNCELEME ÇALIŞMALARI:</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.yapilan_calismalar || '…..'}</div>
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">VIII. BİLGİ, BELGE VE İFADELERİN DEĞERLENDİRİLMESİ:</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.degerlendirme || '…..'}</div>
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 12pt;">IX. SONUÇ, KANAAT VE TEKLİF:</div>
            <div style="white-space: pre-wrap; text-align: justify;">${data.sonuc_kanaat || '…..'}</div>
            <div style="text-align: right; margin-top: 15px;">${tarih}</div>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 50px 0 30px 0;">
            <div style="text-align: center; min-width: 150px;">
                <div style="margin-bottom: 30px;">İmza</div>
                <div>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 150px;">
                <div style="margin-bottom: 30px;">İmza</div>
                <div>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 30px; font-size: 11pt;">
            <strong>Ek:</strong> Dizi Pusulasına Bağlı İşlemli Dosya (${data.ek_sayfa || '…'} Sayfa/${data.ek_adet || '…'} Adet)
        </div>
    `);
});
