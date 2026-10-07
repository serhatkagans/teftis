/* =====================================================
   Belgeler: Naip Görevlendirme ve İstinabe Talimatı
   ===================================================== */

// 7.1 Tanık İçin Naip Tayin Yazısı
defineDocument('7.1', 'naip_tayin_tanik', function (data) {
    // Build tanık text
    let tanikText = '';
    if (data.tanik1_ad_soyad) {
        tanikText = `${data.kurum_adi || '….. Lisesi'} ${data.tanik1_unvan || 'Müdür Yardımcısı'} <strong>${data.tanik1_ad_soyad}</strong>'ın`;
        if (data.tanik2_ad_soyad) {
            tanikText += ` ve aynı okul öğretmenlerinden <strong>${data.tanik2_ad_soyad}</strong>'in`;
        }
    } else {
        tanikText = `${data.kurum_adi || '….. Lisesi'} Müdür Yardımcısı <strong>….. …..</strong>'ın ve aynı okul öğretmenlerinden <strong>….. …..</strong>'in`;
    }

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
                <div><strong>Konu :</strong> Naip Olarak Görevlendirilme</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="margin: 20px 0; font-size: 11pt;">
            <div><strong>Sayın ${data.naip_ad_soyad || '….. …..'}</strong></div>
            <div>${data.naip_unvan || '….. Müdürü/Bakanlık Müfettişi'}</div>
            <div style="margin-left: 3cm;">${data.naip_adres || '….. ….. ….. …..'}</div>
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülmekte olan inceleme/soruşturma nedeniyle; ${tanikText} "tanık" sıfatı ile ifadelerinin alınmasına ihtiyaç duyulduğundan; Ceza Muhakemesi Kanunu'nun 180 inci maddesi hükmü uyarınca "naip" olarak tayin edilmiş bulunuyorsunuz.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Tanık <strong>${data.tanik1_ad_soyad || '….. …..'}</strong>'a${data.tanik2_ad_soyad ? ` ve <strong>${data.tanik2_ad_soyad}</strong>'e` : ''} Ceza Muhakemesi Kanunu'nun 55 inci maddesinde belirtildiği şekilde "yemin" verdirildikten sonra, ekli istinabe talimatında belirtilen esaslar dahilinde ifadelerinin alınmasını, ifade tutanaklarının ivedilikle aşağıdaki adresimize gönderilmesini rica ederiz.
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
            <strong>Ek:</strong> İstinabe Talimatı (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 15px; font-size: 10pt;">
            <strong>Adres:</strong> Millî Eğitim Bakanlığı, Teftiş Kurulu Başkanlığı<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Kat B Blok Bakanlıklar/ANKARA
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            7.1
        </div>
    `);
});

// 7.2 Tanık İçin İstinabe Talimatı
defineDocument('7.2', 'istinabe_talimati_tanik', function (data) {
    // Build tanık text
    let tanikText = `${data.kurum_adi || '….. Lisesi'} ${data.tanik1_unvan || 'Müdür Yardımcısı'} <strong>${data.tanik1_ad_soyad || '….. …..'}</strong>'ın`;
    if (data.tanik2_ad_soyad) {
        tanikText += ` ve aynı okul öğretmenlerinden <strong>${data.tanik2_ad_soyad}</strong>'ın`;
    }

    // Build questions
    let sorularHtml = '';
    if (data.soru1) {
        sorularHtml += `<strong>Soru 1-</strong> "${data.soru1}";<br>`;
    }
    if (data.soru2) {
        sorularHtml += `<strong>Soru 2-</strong> "${data.soru2}";<br>`;
    }
    if (data.soru3) {
        sorularHtml += `<strong>Soru 3-</strong> "${data.soru3}"; `;
    }
    if (!sorularHtml) {
        sorularHtml = `<strong>Soru 1-</strong> "….. ….. ….. ….."; iddiaları ileri sürülmektedir.`;
    } else {
        sorularHtml += 'iddiaları ileri sürülmektedir.';
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px;">
            İSTİNABE TALİMATI
        </div>

        <div style="font-size: 10pt; line-height: 1.4; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 8px;">
                ${tanikText} ifadelerinin alınması ile ilgili istinabe talimatı:
            </p>

            <p style="margin-bottom: 8px;">
                <strong>1.</strong> Tanıklar ifade odasına ayrı ayrı çağrılacaklardır. Tanığın kimliğinin tespit edilmesini müteakip, tanıklığa mani bir hâlinin olmadığı anlaşıldıktan ve tanıklık edeceği konu kendisine anlatıldıktan sonra, usulüne uygun yemin verdirilir ve bu hususlar ifade tutanağına aynen aktarılır. Daha sonra aşağıdaki sorular aynen sorulacaktır. Tanığın vereceği cevaplar her sorunun bittiği yerden başlanmak üzere aynen yazılacaktır. İfade tutanaklarının usulüne uygun şekilde düzenlenmesine özen gösterilecektir.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>2.</strong> Tanıklara aşağıdaki (${data.soru3 ? '3' : data.soru2 ? '2' : '1'}) soru sorulacaktır.<br>
                ${sorularHtml}
            </p>

            <p style="margin-bottom: 8px;">
                <strong>3.</strong> Yukarıdaki sorular aynı sıra dâhilinde her iki tanığa da ayrı ayrı olmak üzere aynen yöneltilecek ve tanığın konularla ilgili olarak söyleyecekleri aynı sıra dâhilinde "cevap" olarak yazıldıktan sonra 'dedi.' diye yazılarak, ifadesi kendisine okunacak ve okumasına fırsat verilecek.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>4.</strong> İfade Tutanağının altına ise;<br>
                "İfadesi kendisine okundu, okumasına fırsat verildi. Yazılanların söylediklerinin aynı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı." şeklinde bağlanarak, tarih atılacak ve tutanağın alt kısmı tanıkla birlikte imzalanacaktır.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>5.</strong> Ayrıca, ifade tutanağının en alt kısmına "naip" olarak; "<strong>${data.tanik1_ad_soyad || '….. …..'}</strong>'ın ifadesi, Bakanlık Müfettişleri <strong>${data.mufettis1_ad_soyad || '….. …..'}</strong>${data.mufettis2_ad_soyad ? ` ve <strong>${data.mufettis2_ad_soyad}</strong>` : ''}'ın istinabe talimatına uygun olarak ${formatDateDots(data.ifade_tarih)} tarihinde tarafımdan alınmıştır" yazılarak, ad, soyad ve unvan belirtilerek imza atılacaktır.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>6.</strong> İfade tutanakları, ikişer nüsha olarak hazırlanarak, Müfettişliğimiz adresine usulünce gönderilecektir.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 30px 0 15px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 150px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 150px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            7.2
        </div>
    `);
});

// 7.3 İtham/Şikâyet Edilen (Sorumlu Görülen) İçin Naip Tayin Yazısı
defineDocument('7.3', 'naip_tayin_itham', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="text-align: right; font-weight: bold; color: #c00; font-size: 11pt; margin-bottom: 5px;">İVEDİ</div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> Naip Olarak Görevlendirilme</div>
            </div>
            <div style="text-align: right;">
                ${formatDateDots(data.tarih)}
            </div>
        </div>

        <div style="margin: 20px 0; font-size: 11pt;">
            <div><strong>Sayın ${data.naip_ad_soyad || '….. …..'}</strong></div>
            <div>${data.naip_unvan || '….. Müdürü/Bakanlık Maarif Müfettişi'}</div>
            <div style="margin-left: 3cm;">${data.naip_adres || '….. …..'}</div>
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülmekte olan inceleme/soruşturma nedeniyle; ${data.kurum_adi || '….. Lisesi'} ${data.itham_unvan || 'Öğretmeni'} <strong>${data.itham_ad_soyad || '….. …..'}</strong>'nin "itham/şikâyet edilen" sıfatı ile ifadesinin alınmasına ihtiyaç duyulduğundan; Ceza Muhakemesi Kanunu'nun 180 inci maddesi hükmü uyarınca "naip" olarak tayin edilmiş bulunuyorsunuz.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İtham/şikâyet edilen <strong>${data.itham_ad_soyad || '….. …..'}</strong>'nin, ekli istinabe talimatında belirtilen esaslar dâhilinde ifadesinin alınmasını ve ifade tutanaklarının ivedilikle aşağıdaki adresimize gönderilmesini rica ederiz.
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
            <strong>Ek:</strong> İstinabe Talimatı (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 15px; font-size: 10pt;">
            <strong>Adres:</strong> Millî Eğitim Bakanlığı, Teftiş Kurulu Başkanlığı<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Kat B Blok Bakanlıklar/ANKARA
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            7.3
        </div>
    `);
});

// 7.4 İtham/Şikâyet Edilen (Sorumlu Görülen) İçin İstinabe Talimatı
defineDocument('7.4', 'istinabe_talimati_itham', function (data) {
    // Build questions
    let sorularHtml = '';
    if (data.soru1) {
        sorularHtml += `<strong>Soru 1-</strong> "${data.soru1}";<br>`;
    }
    if (data.soru2) {
        sorularHtml += `<strong>Soru 2-</strong> "${data.soru2}";<br>`;
    }
    if (data.soru3) {
        sorularHtml += `<strong>Soru 3-</strong> "${data.soru3}" `;
    }
    if (!sorularHtml) {
        sorularHtml = `<strong>Soru 1-</strong> "….. ….. ….. ….."; iddiaları ileri sürülmektedir.`;
    } else {
        sorularHtml += 'iddiaları ileri sürülmektedir.';
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px;">
            İSTİNABE TALİMATI
        </div>

        <div style="font-size: 10pt; line-height: 1.4; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 8px;">
                ${data.kurum_adi || '….. Lisesi'} ${data.itham_unvan || 'Öğretmeni'} <strong>${data.itham_ad_soyad || '….. …..'}</strong>'nin ifadesinin alınması ile ilgili istinabe talimatı:
            </p>

            <p style="margin-bottom: 8px;">
                <strong>1.</strong> Adı geçenin kimliğinin tespit edilmesini müteakip, hakkındaki iddialar kendisine anlatılıp, aşağıdaki sorular aynen sorulacak, vereceği cevaplar her sorunun bittiği yerden başlanmak üzere aynen yazılarak, ifade tutanağı usulüne uygun şekilde düzenlenecektir.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>2.</strong> Adı geçene sorulacak sorular;<br>
                ${sorularHtml}
            </p>

            <p style="margin-bottom: 8px;">
                <strong>3.</strong> Yukarıdaki sorular aynı sıra dâhilinde adı geçene aynen yöneltilecek ve konularla ilgili olarak söyleyecekleri bittikten sonra "dedi" diye yazılarak, ifadesi kendisine okunacak, okumasına fırsat verilecektir.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>4.</strong> İfade Tutanağının altına ise;<br>
                "İfadesi kendisine okundu, okumasına fırsat verildi. Yazılanların söylediklerinin aynı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı." şeklinde bağlanarak, tarih atılacak ve tutanağın alt kısmı ifadesi alınanla birlikte imzalanacaktır.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>5.</strong> Ayrıca, ifade tutanağının en alt kısmına "naip" olarak; "<strong>${data.itham_ad_soyad || '….. …..'}</strong>'ın ifadesi, Bakanlık Müfettişleri <strong>${data.mufettis1_ad_soyad || '….. …..'}</strong>${data.mufettis2_ad_soyad ? ` ile <strong>${data.mufettis2_ad_soyad}</strong>` : ''}'ın istinabe talimatına uygun olarak ${formatDateDots(data.ifade_tarih)} tarihinde tarafımdan alınmıştır" yazılarak ad, soyad ve unvan belirtilerek imza atılacaktır.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>6.</strong> İfade tutanağı, iki nüsha olarak hazırlanarak Müfettişliğimiz adresine usulünce gönderilecektir.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 30px 0 15px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 150px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 150px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            7.4
        </div>
    `);
});
