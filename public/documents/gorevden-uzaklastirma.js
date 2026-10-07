/* =====================================================
   Belgeler: Görevden Uzaklaştırma
   ===================================================== */

// 6.1 Soruşturma ve Görevden Uzaklaştırma Tedbiri Alma Oluru
defineDocument('6.1', 'gorevden_uzaklastirma_oluru', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…../…..'}</div>
                <div><strong>Konu :</strong> ${data.personel_ad_soyad || '….. …..'}’ın Görevden Uzaklaştırılması</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            BAKANLIK MAKAMINA
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        ${data.ilgi_mahkeme || '….. ….. Ağır Ceza Mahkemesinin'} ${formatDateDots(data.ilgi_tarih)} tarihli ve ${data.ilgi_sayi || '...../..... Esas'} sayılı yazısı ve ekleri.
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                ${data.ilgi_mahkeme || '….. ….. Ağır Ceza Mahkemesinin'} İlgi’de kayıtlı yazısı ve eklerinde <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No.: <strong>${data.personel_tc || '…..'}</strong>) hakkında <strong>${data.suc_adi || 'nitelikli dolandırıcılık'}</strong> suçundan kovuşturma yapıldığı belirtilmekte olup adı geçen kişinin görev başında kalmasında sakınca olduğu değerlendirilmektedir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Makamlarınca uygun görüldüğü takdirde <strong>${data.personel_kurum || '….. …. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}’nın</strong> (T.C. Kimlik No.: <strong>${data.personel_tc || '…..'}</strong>) 657 sayılı Devlet Memurları Kanunu’nun 137 nci maddesi gereğince görevden uzaklaştırılmasını ve adı geçen personel hakkında yukarıda belirtilen hususta inceleme, gerektiğinde soruşturma yapılmasını Olurlarına arz ederim.
            </p>
        </div>

        <div style="margin-top: 30px; margin-bottom: 40px; text-align: right; page-break-inside: avoid;">
             <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px; font-size: 10pt;">İmza</div>
                <div style="font-weight: bold;">${data.baskan_ad_soyad || 'Adı SOYADI'}</div>
                <div>Teftiş Kurulu Başkanı</div>
            </div>
        </div>

        <div style="margin-top: 20px; text-align: left; margin-left: 100px; page-break-inside: avoid;">
            <div style="font-weight: bold; margin-bottom: 15px;">OLUR</div>
            <div style="margin-bottom: 30px;">&nbsp;</div>
            <div style="font-weight: bold;">${data.bakan_ad_soyad || 'Adı SOYADI'}</div>
            <div>Bakan</div>
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama || '….. …..'} (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.1
        </div>
    `);
});

// 6.2 Görevden Uzaklaştırma Tedbirinin Kaldırılması Oluru
defineDocument('6.2', 'gorevden_uzaklastirma_kaldirma_oluru', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…../…..'}</div>
                <div><strong>Konu :</strong> ${data.personel_ad_soyad || '….. …..'}’ın Görevden Uzaklaştırırma</div>
                <div style="margin-left: 56px;">Tedbirinin Kaldırılması</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            BAKANLIK MAKAMINA
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı görevden uzaklaştırma ve inceleme soruşturma Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) Bakanlık Müfettişleri ${data.ilgi_c_mufettisler || '….. ….. ile ….. ……'} tarafından düzenlenen ${formatDateDots(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı inceleme raporu/yazı.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince yürütülen inceleme sonucunda Bakanlık Müfettişleri tarafından düzenlenen ilgi (c)’de kayıtlı raporda/yazıda <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}’nın</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) görevinin başında kalmasındaki sakıncanın ortadan kalktığı belirtilerek ilgi (a)’da kayıtlı Makam Oluru ile alınan görevden uzaklaştırma tedbirinin kaldırılması teklif edilmektedir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Makamlarınca uygun görüldüğü takdirde <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) hakkında ilgi (a)’da kayıtlı Makam Oluru ile alınan görevden uzaklaştırma tedbirinin 657 sayılı Devlet Memurları Kanunu’nun 142 nci maddesi gereğince kaldırılmasını Olurlarına arz ederim.
            </p>
        </div>

        <div style="margin-top: 30px; margin-bottom: 40px; text-align: right; page-break-inside: avoid;">
             <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px; font-size: 10pt;">İmza</div>
                <div style="font-weight: bold;">${data.baskan_ad_soyad || 'Adı SOYADI'}</div>
                <div>Teftiş Kurulu Başkanı</div>
            </div>
        </div>

        <div style="margin-top: 20px; text-align: left; margin-left: 100px; page-break-inside: avoid;">
            <div style="font-weight: bold; margin-bottom: 15px;">OLUR</div>
            <div style="margin-bottom: 30px;">&nbsp;</div>
            <div style="font-weight: bold;">${data.bakan_ad_soyad || 'Adı SOYADI'}</div>
            <div>Bakan</div>
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama || '….. …..'} (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.2
        </div>
    `);
});

// 6.3 Bakanlık Müfettişlerince Görevden Uzaklaştırma Tedbiri Alma
defineDocument('6.3', 'gorevden_uzaklastirma_tedbiri', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;', `
        <div style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px; font-size: 11pt;">
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: left; margin: 20px 0; font-size: 11pt;">
            <div style="margin-bottom: 5px;">Sayın ${data.personel_ad_soyad || '….. …..'}</div>
            <div>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'} ${data.personel_unvan || 'Saymanı'}</div>
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 70px; font-weight: bold;">İlgi     :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.makam_oluru_tarihi)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.gorevlendirme_tarihi)} tarihli ve ${data.gorevlendirme_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen inceleme/soruşturma sürecinde <strong>${data.sorusturma_nedeni || '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</strong> nedeniyle görevinizin başında kalmanızda sakınca olduğu görülmüştür/anlaşılmıştır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Bu itibarla; inceleme/soruşturma sürecinin sağlıklı yürütülebilmesi amacıyla 657 sayılı Devlet Memurları Kanunu'nun 138 inci maddesinin (b) fıkrasına istinaden ve 137 nci maddesi gereğince Müfettişliğimizce hakkınızda görevden uzaklaştırma tedbiri alınmıştır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Bilgilerinizi rica ederiz.
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

        ${data.ek_aciklama ? `
        <div style="margin-top: 25px; font-size: 10pt; border-top: 1px solid #999; padding-top: 12px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama} (${data.ek_sayfa || '1'} Sayfa)
        </div>
        ` : ''}

        <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            6.3
        </div>
    `);
});

// 6.4 Bakanlık Müfettişlerince Alınan Görevden Uzaklaştırma Tedbirinin Kaldırılması Teklifi
defineDocument('6.4', 'gorevden_uzaklastirma_kaldirma_teklifi', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;', `
        <div style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı:</strong> ${data.sayi || '…../….,…'}</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: left; margin: 20px 0; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Teftiş Kurulu Başkanlığına</strong></div>
            <div><strong>ANKARA</strong></div>
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 70px; font-weight: bold;">İlgi     :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div style="padding-left: 0.3cm;">c) Müfettişliğimizin ${formatDateDots(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı görevden uzaklaştırma yazısı.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen inceleme/soruşturma sürecinde <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}</strong> hakkında İlgi (c)'de kayıtlı görevden uzaklaştırma tedbirinin kaldırılmasının uygun olacağı değerlendirilmiştir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Olurlarınıza arz ederiz.
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

        ${data.ek_aciklama ? `
        <div style="margin-top: 25px; font-size: 10pt; border-top: 1px solid #999; padding-top: 12px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama} (${data.ek_sayfa || '1'} Sayfa)
        </div>
        ` : ''}

        <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            6.4
        </div>
    `);
});

// 6.5 Bakanlık Müfettişlerince Alınan Görevden Uzaklaştırma Tedbirinin Kaldırılması Oluru
defineDocument('6.5', 'gorevden_uzaklastirma_kaldirma_oluru', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…../…..'}</div>
                <div><strong>Konu :</strong> ${data.personel_ad_soyad || '….. …..'}'ın Görevden Uzaklaştırma</div>
                <div style="margin-left: 56px;">Tedbirinin Kaldırılması</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            BAKANLIK MAKAMINA
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) Bakanlık Müfettişlerince düzenlenen ${formatDateDots(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı görevden uzaklaştırma yazısı.</div>
                        <div>d) Bakanlık Müfettişlerince düzenlenen ${formatDateDots(data.ilgi_d_tarih)} tarihli ve ${data.ilgi_d_sayi || '…..'} sayılı yazı.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince yürütülen inceleme/soruşturmada <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) hakkında, görevinin başında kalmasında sakınca görülerek soruşturma sürecinin sağlıklı yürütülebilmesi amacıyla 657 sayılı Devlet Memurları Kanunu'nun 138 inci maddesinin (b) fıkrasına istinaden ve 137 nci maddesi gereğince, Bakanlık Müfettişleri tarafından İlgi (c)'de kayıtlı yazıyla görevden uzaklaştırma tedbiri alınmıştır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Bakanlık Müfettişleri tarafından düzenlenen ilgi (d)'de kayıtlı yazıda; inceleme/soruşturma çalışmalarında gerekli ifadelerin alınması ve toplanması gereken belgelerin toplanması nedeniyle <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}'nın</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) görevinin başında kalmasındaki sakıncanın ortadan kalktığı belirtilerek adı geçen kişi hakkında ilgi (c)'de kayıtlı yazı ile alınan görevden uzaklaştırma tedbirinin kaldırılması talep edilmektedir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Makamlarınca uygun görüldüğü takdirde <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) hakkında ilgi (c)'de kayıtlı yazı ile alınan görevden uzaklaştırma tedbirinin 657 sayılı Devlet Memurları Kanunu'nun 144 üncü maddesi gereğince kaldırılmasını Olurlarına arz ederim.
            </p>
        </div>

        <div style="margin-top: 30px; margin-bottom: 40px; text-align: right; page-break-inside: avoid;">
             <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px; font-size: 10pt;">İmza</div>
                <div style="font-weight: bold;">${data.baskan_ad_soyad || 'Adı SOYADI'}</div>
                <div>Teftiş Kurulu Başkanı</div>
            </div>
        </div>

        <div style="margin-top: 20px; text-align: left; margin-left: 100px; page-break-inside: avoid;">
            <div style="font-weight: bold; margin-bottom: 15px;">OLUR</div>
            <div style="margin-bottom: 30px;">&nbsp;</div>
            <div style="font-weight: bold;">${data.bakan_ad_soyad || 'Adı SOYADI'}</div>
            <div>Bakan</div>
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama || '….. …..'} (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.5
        </div>
    `);
});

// 6.6 Görevden Uzaklaştırmanın Bakanlığa Bildirilmesi ile İlgili Yazı
defineDocument('6.6', 'gorevden_uzaklastirma_bildirimi', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> ${data.personel_ad_soyad || '….. …..'}'ın Görevden Uzaklaştırılması</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            MİLLÎ EĞİTİM BAKANLIĞINA<br>
            <span style="font-size: 10pt; font-weight: normal;">(Teftiş Kurulu Başkanlığı)</span>
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) ${formatDateDots(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
                        <div>d) ${data.ilgi_d_valilik || '….. Valiliğine/Kaymakamlığına'} yazılan ${formatDateDots(data.ilgi_d_tarih)} tarihli ve ${data.ilgi_d_sayi || '…./…,…'} sayılı bilgilendirme yazımız.</div>
                        <div>e) ${data.ilgi_e_kurum || '….. ….. Lisesine'} yazılan ${formatDateDots(data.ilgi_e_tarih)} tarihli ve ${data.ilgi_e_sayi || '…./…,…'} sayılı bilgilendirme yazımız.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen inceleme/soruşturmada, <strong>${data.personel_kurum || '….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Döner Sermaye İşletmesi Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın</strong> işletmeye ait <strong>${data.zimmet_tutari || '….. ….. TL'}</strong>'yi zimmetine geçirdiği tespit edilmiştir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Adı geçenin belirlenen eylemi kamu hizmetlerinin gerektirdiği hâller dışında bir durum olup, konusu suç oluşturmaktadır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Bu nedenle; <strong>${data.personel_unvan || 'Sayman'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) görevi başında kalmasında sakınca görülmüş, soruşturma sürecinin sağlıklı yürütülebilmesi amacıyla; 657 sayılı Devlet Memurları Kanunu'nun 138 inci maddesinin (b) fıkrasına istinaden ve 137 nci maddesi gereğince, adı geçen kişi hakkında İlgi (c)'de kayıtlı yazımızla görevden uzaklaştırılma tedbiri alınmıştır. Durumdan ilgili birim/kurum yöneticisi ve ilgili mülki amir İlgi (d), (e)'de kayıtlı yazımızla bilgilendirilmiştir. Ayrıca; adı geçen hakkında 3628 sayılı Kanun hükümlerine göre işlem yapılabilmesi için <strong>${data.suc_duyurusu_yer || '….. Cumhuriyet Başsavcılığına'}</strong> "suç duyurusu" yapılacaktır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İnceleme/soruşturma çalışmasıyla ilgili rapor düzenlenecek olup Makam'a bilahare sunulacaktır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong> İlgi (c) ve (d) Yazı (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.6
        </div>
    `);
});

// 6.7 Görevden Uzaklaştırmanın İlgili Mülki Amire Bildirilmesi ile İlgili Yazı
defineDocument('6.7', 'gorevden_uzaklastirma_mulki_amir', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> ${data.personel_ad_soyad || '….. …..'}'ın Görevden Uzaklaştırılması</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            ${data.valilik_adi || '….. VALİLİĞİNE/KAYMAKAMLIĞINA'}
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
                        <div>c) ${formatDateDots(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce <strong>${data.personel_kurum || '….. Mesleki ve Teknik Anadolu Lisesinde'}</strong> yürütülen inceleme/soruşturmada, <strong>${data.personel_unvan || 'Döner Sermaye İşletmesi Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın</strong> işletmeye ait <strong>${data.zimmet_tutari || '….. TL'}</strong>'yi zimmetine geçirdiği tespit edilmiştir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Adı geçenin belirlenen eylemi, kamu hizmetlerinin gerektirdiği hâller dışında bir durum olup konusu suç oluşturmaktadır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Bu nedenle; <strong>${data.personel_unvan || 'Sayman'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) görevi başında kalmasında sakınca görülmüş ve inceleme/soruşturma sürecinin sağlıklı yürütülebilmesi amacıyla; 657 sayılı Devlet Memurları Kanunu'nun 138 inci maddesinin (b) fıkrasına istinaden ve 137 nci maddesi gereğince, adı geçen kişi hakkında İlgi (c)'de kayıtlı yazımızla görevden uzaklaştırma tedbiri alınmıştır. Ayrıca; <strong>${data.personel_ad_soyad || '….. …..'}</strong> hakkında 3628 sayılı Kanun hükümlerine göre işlem yapılabilmesi için <strong>${data.suc_duyurusu_yer || '….. Cumhuriyet Başsavcılığına'}</strong> suç duyurusu yapılacaktır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İnceleme/soruşturma çalışmasıyla ilgili düzenlenecek rapor Bakanlık Makamına bilahare sunulacaktır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Bilgilerinizi rica ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong> İlgi (c) Yazı Örneği (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.7
        </div>
    `);
});

// 6.8 Görevden Uzaklaştırmanın Birime/Kuruma Bildirilmesi ile İlgili Yazı
defineDocument('6.8', 'gorevden_uzaklastirma_kurum', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> ${data.personel_ad_soyad || '….. …..'}'ın Görevden Uzaklaştırılması</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            ${data.kurum_adi || '….. ….. MESLEK ve TEKNİK ANADOLU LİSESİ MÜDÜRLÜĞÜNE'}
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) ${formatDateDots(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce okulunuzda yürütülen inceleme/soruşturmada <strong>${data.personel_unvan || 'Döner Sermaye İşletmesi Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın</strong> işletmeye ait <strong>${data.zimmet_tutari || '….. TL'}</strong>'yi zimmetine geçirdiği tespit edilmiştir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Adı geçenin belirlenen eylemi, kamu hizmetlerinin gerektirdiği hâller dışında bir durum olup, konusu suç oluşturmaktadır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Bu nedenle; <strong>${data.personel_unvan || 'Sayman'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) görevi başında kalmasında sakınca görülmüş ve inceleme/soruşturma sürecinin sağlıklı yürütülebilmesi amacıyla; 657 sayılı Devlet Memurları Kanunu'nun 138 inci maddesinin (b) fıkrasına istinaden ve 137 nci maddesi gereğince İlgi (c)'de kayıtlı yazımızla adı geçen hakkında görevinden uzaklaştırma tedbiri alınmıştır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Bilgilerini ve gereğini rica ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.8
        </div>
    `);
});

// 6.9 Görevden Uzaklaştırma Yazısının Tebliğ ve Tebellüğ Belgesi
defineDocument('6.9', 'gorevden_uzaklastirma_teblig', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 40px;">
            TEBLİĞ VE TEBELLÜĞ BELGESİ
        </div>

        <div style="font-size: 11pt; line-height: 2; text-align: justify; text-indent: 1cm; margin-bottom: 40px;">
            Bakanlık Müfettişlerince adıma gönderilen <strong>${formatDateDots(data.yazi_tarih)}</strong> tarihli ve <strong>${data.yazi_sayi || '…..'}</strong> sayılı kapalı zarf içindeki "görevden uzaklaştırma" durumuna ilişkin <strong>${formatDateDots(data.gorevden_uzaklastirma_tarih)}</strong> tarihli ve <strong>${data.gorevden_uzaklastirma_sayi || '…..'}</strong> sayılı yazıyı teslim alarak tebellüğ ettim. <strong>${formatDateDots(data.tebellug_tarih)} - Saat: ${formatTimeDots(data.tebellug_saat)}</strong>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 60px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 180px;">
                <div style="font-weight: bold; margin-bottom: 10px;">Tebliğ eden</div>
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.teblig_eden_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>${data.teblig_eden_gorev || 'Görevi/Unvanı'}</div>
            </div>
            <div style="text-align: center; min-width: 180px;">
                <div style="font-weight: bold; margin-bottom: 10px;">Tebellüğ alan</div>
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.tebellug_alan_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>${data.tebellug_alan_gorev || '….. Meslek ve Teknik Anadolu Lisesi Döner Sermaye İşletmesi Saymanı'}</div>
            </div>
        </div>

        <div style="margin-top: 40px; font-size: 9pt; text-align: right; color: #666;">
            6.9
        </div>
    `);
});
