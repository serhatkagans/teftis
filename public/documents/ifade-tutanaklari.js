/* =====================================================
   Belgeler: İfade Tutanakları
   ===================================================== */

function renderQAPdf(questions) {
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        return '';
    }

    return questions.map((q, index) =>
        `<strong>Soru ${index + 1}.</strong> <strong>${q.soru || '….. ….. iddiasıyla ilgili olarak sorulduğunda; (sorulacak soru açık olarak yazılacak)'}</strong><br>
         <strong>Cevap ${index + 1}.</strong> <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong>`
    ).join('<br><br>');
}

// 1.1 Şikâyetçi İfade Tutanağı
defineDocument('1.1', 'sikayetci_ifade_tutanagi', function (data) {
    const dilekceTarihFormatted = formatDateDots(data.dilekce_tarih);

    // Build Q&A section - Soru 2+ with last one ending with " dedi."
    let qaHtml = '';
    if (data.soru_cevap && data.soru_cevap.length > 0) {
        data.soru_cevap.forEach((item, idx) => {
            const isLast = idx === data.soru_cevap.length - 1;
            const ending = isLast ? '" dedi.' : '';
            qaHtml += `<br><strong>Soru ${idx + 2}.</strong> <strong>${item.soru || '..... .....'}</strong><br><strong>Cevap ${idx + 2}.</strong> <strong>${item.cevap || '..... .....'}</strong>${ending}`;
        });
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold;">İFADE TUTANAĞI</h1>
        </div>
        
        <div style="font-size: 11pt; margin-bottom: 15px;">
            <div><strong>Adı ve Soyadı</strong> : <strong>${data.sikayetci_adi || ''}</strong></div>
            <div><strong>T.C. Kimlik No/Uyruğu</strong> : <strong>${data.sikayetci_tc || ''}</strong></div>
            <div><strong>Ana ve Baba Adı</strong> : <strong>${data.sikayetci_ana_baba || ''}</strong></div>
            <div><strong>Doğum Yeri ve Tarihi</strong> : <strong>${data.sikayetci_dogum_yeri_tarihi || ''}</strong></div>
            <div><strong>Görevi/İşi/Mesleği</strong> : <strong>${data.sikayetci_gorev_meslek || ''}</strong></div>
            <div><strong>Görev/İşyeri Adresi</strong> : <strong>${data.sikayetci_is_adresi || ''}</strong></div>
            <div><strong>İkametgâh Adresi</strong> : <strong>${data.sikayetci_ikamet_adresi || ''}</strong></div>
            <div><strong>Telefon (Cep-Ev-İş yeri)</strong> : <strong>${data.sikayetci_telefon || ''}</strong></div>
            <div><strong>İfadenin Tarih ve Saati</strong> : <strong>${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</strong></div>
        </div>
        
        <div style="text-align: justify; margin: 15px 0; font-size: 11pt; line-height: 1.6;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.sikayetci_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '..... .....'}</strong> Müfettişliğimiz çalışma odasına "şikâyetçi" konumunda davet edildi. İfade vermesine engel bir durumu olmadığını beyan etmesi üzerine; <strong>${data.dilekce_makam || '..... .....'}</strong> hitaben yazılan <strong>${dilekceTarihFormatted}</strong> tarihli, <strong>${data.dilekce_imza_sahibi || '..... .....'}</strong> isim ve imzalı şikâyet dilekçesi ile dilekçe ekleri kendisine gösterilerek soruldu:
        </div>
        
        <div style="text-align: justify; margin: 15px 0; font-size: 11pt; line-height: 1.8;">
            <strong>Soru 1.</strong> "<strong>${dilekceTarihFormatted}</strong> tarihli <strong>${data.dilekce_makam || '..... .....'}</strong>'a hitaben yazılan şikâyet dilekçesindeki, isim ve imza size mi aittir?
            <br><strong>Cevap 1.</strong> <strong>${data.dilekce_cevap || 'Bana gösterdiğiniz ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... .....'}</strong>${qaHtml}
        </div>
        
        <div style="text-align: justify; margin: 15px 0 40px 0; font-size: 11pt; line-height: 1.6;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, başka diyeceğinin bulunmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine bu ifade tutanağı birlikte imzalandı. <strong>${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</strong>
        </div>
        
        <div style="margin-top: 40px; page-break-inside: avoid;">
            <table style="width: 100%; text-align: center;">
                <tr>
                    <td style="width: 33%; vertical-align: top;">
                        <div>İmza</div>
                        <br><br><br>
                        <div><strong>${data.muhakkik1_adi || 'Adı SOYADI'}</strong></div>
                        <div>(${data.muhakkik1_kod || 'KOD'})</div>
                        <div>${data.muhakkik1_unvan || 'Bakanlık Müfettişi'}</div>
                    </td>
                    <td style="width: 33%; vertical-align: top;">
                        <div>İmza</div>
                        <br><br><br>
                        <div><strong>${data.muhakkik2_adi || 'Adı SOYADI'}</strong></div>
                        <div>(${data.muhakkik2_kod || 'KOD'})</div>
                        <div>${data.muhakkik2_unvan || 'Bakanlık Müfettişi'}</div>
                    </td>
                    <td style="width: 33%; vertical-align: top;">
                        <div>İmza</div>
                        <br><br><br>
                        <div><strong>${data.sikayetci_adi || 'Adı SOYADI'}</strong></div>
                        <div>İfade Sahibi</div>
                        <div>(Şikâyetçi)</div>
                    </td>
                </tr>
            </table>
        </div>
    `);
});

// 1.2 / 1.3: Tanık İfade Tutanağı (Yeminsiz) / Tanık İfade Tutanağı (Yeminli)
function createPDFContent12(data, isYeminli = false) {
    const docNo = isYeminli ? '1.3 (Yeminli)' : '1.2 (Yeminsiz)';

    // Kurum bilgisi (1.3 için kurum_adi + kurum_turu, 1.2 için sadece kurum_adi)
    const kurumBilgisi = isYeminli
        ? `${data.kurum_adi || '..... .....'} ${data.kurum_turu || 'İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki'}`
        : `${data.kurum_adi || '..... .....'}`;

    const introParagraph = isYeminli
        ? `Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.tanik_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${kurumBilgisi}</strong> Müfettişliğimiz çalışma odasına "tanık" konumunda davet edildi. Tanıklığa mani bir hâlinin olmadığını beyan etmesi üzerine ve usulüne uygun olarak yemin verdirildikten sonra, konu kendisine anlatılarak soruldu:`
        : `Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.tanik_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${kurumBilgisi}</strong> Müfettişliğimiz çalışma odasına "tanık" konumunda davet edildi. Tanıklığa mani bir hâlinin olmadığını beyan etmesi üzerine konu kendisine anlatılarak soruldu:`;

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">İFADE TUTANAĞI</h1>
        </div>
        
        <div style="margin-bottom: 20px; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Adı ve Soyadı:</strong> ${data.tanik_adi || ''}</div>
            <div style="margin-bottom: 5px;"><strong>T.C. Kimlik No/Uyruğu:</strong> ${data.tanik_tc || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Ana ve Baba Adı:</strong> ${data.tanik_ana_baba || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Doğum Yeri ve Tarihi:</strong> ${data.tanik_dogum_yeri_tarihi || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Görevi/İşi/Mesleği:</strong> ${data.tanik_gorev_meslek || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Görev/İşyeri Adresi:</strong> ${data.tanik_is_adresi || ''}</div>
            <div style="margin-bottom: 5px;"><strong>İkametgâh Adresi:</strong> ${data.tanik_ikamet_adresi || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Telefon (Cep-Ev-İş yeri):</strong> ${data.tanik_telefon || ''}</div>
            <div style="margin-bottom: 5px;"><strong>İfadenin Tarih ve Saati:</strong> ${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</div>
        </div>
        
        <div style="text-align: justify; text-indent: 1cm; margin: 15px 0; font-size: 11pt;">
            ${introParagraph}
        </div>
        
        <div style="margin-bottom: 15px;">
            ${(data.soru_cevap || []).map(item => `
                <div style="margin-bottom: 15px; page-break-inside: avoid;">
                    <div style="font-weight: bold; margin-bottom: 5px;">SORU ${item.index}: ${item.soru || '.....'}</div>
                    <div style="margin-left: 20px; text-align: justify;"><strong>CEVAP:</strong> ${item.cevap || '.....'}</div>
                </div>
            `).join('')}
        </div>
        
        ${data.ek_beyan ? `<div style="margin-top: 20px; padding: 10px; border: 1px solid #000;"><strong>EK BEYAN:</strong> ${data.ek_beyan}</div>` : ''}
        
        <div style="text-align: justify; text-indent: 1cm; margin: 20px 0 30px 0; font-size: 11pt;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, başka diyeceğinin bulunmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine bu ifade tutanağı birlikte imzalandı. ${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}
        </div>
        
        <div style="margin-top: 40px; page-break-inside: avoid;">
            <table style="width: 100%; text-align: center; margin-top: 30px;">
                <tr>
                    <td style="padding-top: 50px; border-top: 1px solid #000; width: 33%; vertical-align: top;">
                        <div style="font-weight: bold; font-size: 10pt;">İmza</div>
                        <br><br>
                        <div><strong>${data.muhakkik1_adi || '..... .....'}</strong></div>
                        <div>(${data.muhakkik1_kod || '.....'})</div>
                        <div style="font-size: 10pt;">${data.muhakkik1_unvan || 'Bakanlık Müfettişi'}</div>
                    </td>
                    <td style="padding-top: 50px; border-top: 1px solid #000; width: 33%; vertical-align: top;">
                        <div style="font-weight: bold; font-size: 10pt;">İmza</div>
                        <br><br>
                        <div><strong>${data.muhakkik2_adi || '..... .....'}</strong></div>
                        <div>(${data.muhakkik2_kod || '.....'})</div>
                        <div style="font-size: 10pt;">${data.muhakkik2_unvan || 'Bakanlık Müfettişi'}</div>
                    </td>
                    <td style="padding-top: 50px; border-top: 1px solid #000; width: 33%; vertical-align: top;">
                        <div style="font-weight: bold; font-size: 10pt;">İmza</div>
                        <br><br>
                        <div><strong>${data.tanik_adi || '..... .....'}</strong></div>
                        <div style="font-size: 10pt;">İfade Sahibi</div>
                        <div style="font-size: 10pt;">(Tanık)</div>
                    </td>
                </tr>
            </table>
        </div>
        
        <div style="margin-top: 25px; font-size: 9pt; text-align: center; color: #666; border-top: 1px solid #ccc; padding-top: 10px;">Bu belge resmi soruşturma dosyasının ayrılmaz bir parçasıdır.</div>
    `);
}

defineDocument('1.2', 'tanik_ifade_tutanagi_yeminsiz', data => createPDFContent12(data, false));

defineDocument('1.3', 'tanik_ifade_tutanagi_yeminli', data => createPDFContent12(data, true));

// 1.4.1 Yazılı İfade Tutanağı
defineDocument('1.4.1', 'yazili_ifade_tutanagi', function (data) {
    // Kurum bilgisi
    const kurumBilgisi = `${data.kurum_adi || '..... .....'} ${data.kurum_turu || 'İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki'}`;

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">İFADE TUTANAĞI</h1>
        </div>

        <div style="margin-bottom: 20px; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Adı ve Soyadı:</strong> ${data.tanik_adi || ''}</div>
            <div style="margin-bottom: 5px;"><strong>T.C. Kimlik No/Uyruğu:</strong> ${data.tanik_tc || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Ana ve Baba Adı:</strong> ${data.tanik_ana_baba || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Doğum Yeri ve Tarihi:</strong> ${data.tanik_dogum_yeri_tarihi || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Görevi/İşi/Mesleği:</strong> ${data.tanik_gorev_meslek || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Görev/İşyeri Adresi:</strong> ${data.tanik_is_adresi || ''}</div>
            <div style="margin-bottom: 5px;"><strong>İkametgâh Adresi:</strong> ${data.tanik_ikamet_adresi || ''}</div>
            <div style="margin-bottom: 5px;"><strong>Telefon (Cep-Ev-İş yeri):</strong> ${data.tanik_telefon || ''}</div>
            <div style="margin-bottom: 5px;"><strong>İfadenin Tarih ve Saati:</strong> ${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</div>
        </div>

        <div style="text-align: justify; margin: 15px 0; font-size: 11pt; line-height: 1.5;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.tanik_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${kurumBilgisi}</strong> Müfettişliğimiz çalışma odasına "${data.konum || '.....'}" konumunda davet edildi. Bazı iddialar / konular ile ilgili olarak aşağıda yazılı soruların sorulacağı ve yapacağı açıklamalarının belirtilen yerden başlayarak tarafınca yazılmak suretiyle, yazılı ifadesinin alınacağı belirtildi.
        </div>

        <div style="margin-bottom: 15px;">
            ${data.written_questions ? data.written_questions.map((q, i) => `
                <div style="margin-bottom: 10px; page-break-inside: avoid;">
                    <strong>Soru ${i + 1}.</strong> ${q.question || '.....'}
                </div>
            `).join('') : ''}
        </div>

        <div style="text-align: justify; margin: 15px 0; font-size: 11pt;">
            Bu iddialar/konular ile ilgili bildiklerinizi, duyduklarınızı varsa gördüklerinizi aşağıda yazarak açıklamanızı rica ederiz. ${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}
        </div>

        <div style="margin-top: 30px; margin-bottom: 20px; page-break-inside: avoid;">
            <table style="width: 100%; text-align: center;">
                <tr>
                    <td style="width: 50%; vertical-align: top;">
                        <div style="font-weight: bold; font-size: 10pt;">İmza</div>
                        <br><br>
                        <div><strong>${data.muhakkik1_adi || '..... .....'}</strong></div>
                        <div>(${data.muhakkik1_kod || '.....'})</div>
                        <div style="font-size: 10pt;">${data.muhakkik1_unvan || 'Bakanlık Müfettişi'}</div>
                    </td>
                    <td style="width: 50%; vertical-align: top;">
                        <div style="font-weight: bold; font-size: 10pt;">İmza</div>
                        <br><br>
                        <div><strong>${data.muhakkik2_adi || '..... .....'}</strong></div>
                        <div>(${data.muhakkik2_kod || '.....'})</div>
                        <div style="font-size: 10pt;">${data.muhakkik2_unvan || 'Bakanlık Müfettişi'}</div>
                    </td>
                </tr>
            </table>
        </div>

        <div style="border-top: 2px dashed #000; margin: 20px 0; padding-top: 10px;">
            <div style="font-size: 10pt; font-style: italic;">
                <strong>Açıklama:</strong> Cevaplarınızı, aşağıda işaret edilen yerden başlayıp soru sırasını gözeterek yazınız. Cevaplarınıza ara vermeden devam ediniz. Arka sayfaya yazmayınız. Gerektiğinde ikinci, üçüncü kâğıt kullanabilirsiniz. Birden fazla kâğıt kullandığınızda her kâğıdı imzalamayı unutmayınız.
            </div>
        </div>

        <div style="margin-top: 20px;">
            <div style="font-weight: bold; margin-bottom: 10px;">CEVAPLARIM:</div>
             ${data.written_questions ? data.written_questions.map((q, i) => `
                <div style="margin-bottom: 30px; page-break-inside: avoid;">
                    <strong>Cevap ${i + 1}.</strong> ${q.answer || '.......................................................................................................................................................................................................................................................'}
                </div>
            `).join('') : ''}
        </div>

        <div style="margin-top: 50px; page-break-inside: avoid;">
             <table style="width: 100%; text-align: right;">
                <tr>
                    <td>
                        <div style="display: inline-block; text-align: center; width: 200px;">
                            <div style="font-weight: bold; font-size: 10pt;">İMZA</div>
                            <br><br>
                            <div><strong>${data.tanik_adi || '..... .....'}</strong></div>
                            <div style="font-size: 10pt;">İfade Sahibi</div>
                            <div style="font-size: 10pt;">(${data.konum || '.....'})</div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    `);
});

// 1.4.2 Yazılı İfade Tutanağı (Öğrenci İçin)
defineDocument('1.4.2', 'yazili_ifade_tutanagi_ogrenci', function (data) {
    // Build questions inline format
    const questionsList = (data.written_questions || []).map(q =>
        `Soru ${q.index}. ${q.question || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}`
    );

    let questionsText = '';
    if (questionsList.length > 0) {
        questionsText = questionsList.join(' ….. olmadığı; \n') + ' gelmediği; iddiaları/konuları mevcuttur.';
    }

    // Build answer lines
    const answersHtml = (data.written_questions || []).map(q =>
        `Cevap ${q.index}. ${q.answer || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}\n`
    ).join('');

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 2px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 11pt; margin-bottom: 18px; border-collapse: collapse;">
            <tr><td style="width: 200px; padding: 2px 0;">Öğrencinin Adı ve Soyadı</td><td style="width: 15px; text-align: center;">:</td><td>${data.ogrenci_ad_soyad || ''}</td></tr>
            <tr><td style="padding: 2px 0;">T.C. Kimlik No/Uyruğu</td><td style="text-align: center;">:</td><td>${data.tc_kimlik_uyruk || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Öğrenci Numarası</td><td style="text-align: center;">:</td><td>${data.ogrenci_numarasi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Sınıfı</td><td style="text-align: center;">:</td><td>${data.sinifi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Okulu</td><td style="text-align: center;">:</td><td>${data.okulu || ''}</td></tr>
            <tr><td style="padding: 2px 0;">İfadenin Tarih ve Saati</td><td style="text-align: center;">:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

        <p style="text-align: justify; margin-bottom: 15px; font-size: 11pt; line-height: 1.5; white-space: pre-line;">
Yukarıda açık kimlik ve diğer bilgileri yer alan ${data.ogrenci_ad_soyad || '….. …..'} (${data.konum || '…..'}); belirtilen tarih ve saatte ${data.kurum_adi || '….. …..'} İlkokulundaki/Ortaokulundaki/Lisesindeki Müfettişliğimiz çalışma odasına "${data.konum || '…..'}" konumunda davet edildi. Öğrenciye, müfettişliğimiz odasında hazır bulunan ${data.rehber_ogretmen || 'okul rehber öğretmeni/müfettişliğimizin talebi üzerine Valiliğince/Müdürlüğünce görevlendirilen rehber öğretmen'} eşliğinde, ${data.sorusturma_konusu ? data.sorusturma_konusu + ' hakkındaki' : 'bazı'} iddialar/konular ile ilgili olarak aşağıda yazılı soruların sorulacağı ve yapacağı açıklamalarının belirtilen yerden başlayarak tarafınca yazılmak suretiyle, yazılı ifadesinin alınacağı belirtildi. Sorulan sorulara cevap verebileceğini beyan etmesi üzerine soruldu: ${questionsText}
        </p>

        <p style="text-align: justify; margin-bottom: 25px; font-size: 11pt;">
            Bu iddialar/konular ile ilgili bildiklerinizi, duyduklarınızı varsa gördüklerinizi aşağıda yazarak açıklamanızı rica ederiz. <strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong>
        </p>

        <table style="width: 100%; text-align: center; font-size: 10pt; margin-bottom: 25px;">
            <tr>
                <td style="width: 50%; vertical-align: top;">
                    <div style="margin-bottom: 40px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 50%; vertical-align: top;">
                    <div style="margin-bottom: 40px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
            </tr>
        </table>

        <div style="text-align: center; margin: 20px 0; font-size: 11pt; letter-spacing: 2px;">============================================== ============ ======</div>

        <p style="text-align: justify; font-size: 10pt; line-height: 1.4; margin-bottom: 12px;">
            <strong>Açıklama:</strong> Cevaplarınızı, aşağıda işaret edilen yerden başlayıp soru sırasını gözeterek yazınız. Cevaplarınıza ara vermeden devam ediniz. Arka sayfaya yazmayınız. Gerektiğinde ikinci, üçüncü kâğıt kullanabilirsiniz. Birden fazla kâğıt kullandığınızda her kâğıdı imzalamayı unutmayınız.
        </p>

        <div style="font-weight: bold; margin-bottom: 10px; font-size: 11pt;">Cevaplarım:</div>
        <div style="font-size: 10pt; line-height: 1.6; white-space: pre-line;">${answersHtml}</div>

        <div style="text-align: right; margin-top: 100px; font-size: 12pt; font-weight: bold;">İMZA</div>
    `);
});

// 1.5 İtham (Şikâyet) Edilene Ait İfade Tutanağı
defineDocument('1.5', 'itham_ifade_tutanagi', function (data) {
    const questionsList = (data.soru_cevap || []).map((q, index) =>
        `<strong>Soru ${index + 1}.</strong> <strong>${q.soru || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong> iddiasıyla ilgili olarak sorulduğunda;<br>
         <strong>Cevap ${index + 1}.</strong> <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong>`
    );

    let questionsHtml = '';
    if (questionsList.length > 0) {
        questionsHtml = questionsList.join('<br><br>');
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
         <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 1px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 20px; border-collapse: collapse;">
            <tr><td style="width: 220px; padding: 2px 0;">Adı ve Soyadı</td><td style="width: 15px; text-align: center;">:</td><td><strong>${data.ad_soyad || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">T.C. Kimlik No/Uyruğu</td><td style="text-align: center;">:</td><td><strong>${data.tc_kimlik || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Ana ve Baba Adı</td><td style="text-align: center;">:</td><td><strong>${data.ana_baba_adi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Doğum Yeri ve Tarihi</td><td style="text-align: center;">:</td><td><strong>${data.dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Görevi/İşi/Mesleği</td><td style="text-align: center;">:</td><td><strong>${data.gorevi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Görev/İşyeri Adresi</td><td style="text-align: center;">:</td><td><strong>${data.is_adresi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">İkametgâh Adresi</td><td style="text-align: center;">:</td><td><strong>${data.ikametgah_adresi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Telefon (Cep-Ev-İşyeri)</td><td style="text-align: center;">:</td><td><strong>${data.telefon || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">İfadenin Tarih ve Saati</td><td style="text-align: center;">:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

         <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-bottom: 15px;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına “<strong>${data.konum || 'itham/şikâyet edilen'}</strong>” konumunda davet edildi. Davet edilmesine esas konu kendisine anlatılarak bu konuda açıklamalarının istenileceği ve açıklama yapmasına engel bir durumu olup olmadığı, açıklama yapmak isteyip istemediği sorulduğunda; açıklama yapmasına engel bir durumunun olmadığı ve özgür iradesi ile açıklama yapmak istediğini belirtmesi üzerine; iddialar/konular ile ilgili olarak soruldu:
        </p>
        
        <div style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-bottom: 15px;">
            ${questionsHtml} ” dedi.
        </div>

        <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-top: 15px;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. ${data.tarih_formatted || 'gg.aa.yyyy'} -  Saat: ${data.saat || 'ss.dd'}
        </p>

        <table style="width: 100%; text-align: center; font-size: 12pt; margin-top: 50px; border-collapse: collapse;">
            <tr style="vertical-align: top;">
                <td style="width: 33%; padding: 0 10px;">
                    <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%; padding: 0 10px;">
                     <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 33%; padding: 0 10px;">
                     <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div>İfade Sahibi</div>
                    <div>(İtham/Şikâyet Edilen)</div>
                </td>
            </tr>
        </table>
    `);
});

// 1.6.1 Müdafi Talebi Olmadığında Düzenlenecek İfade Tutanağı
defineDocument('1.6.1', 'on_inceleme_ifade_mudafisiz', function (data) {
    const questionsList = (data.soru_cevap || []).map((q, index) =>
        `<strong>Soru ${index + 1}.</strong> <strong>${q.soru || '….. ….. iddiasıyla ilgili olarak sorulduğunda; (sorulacak soru açık olarak yazılacak)'}</strong><br>
         <strong>Cevap ${index + 1}.</strong> <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong>`
    );

    let questionsHtml = '';
    if (questionsList.length > 0) {
        questionsHtml = questionsList.join('<br><br>');
    }

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
         <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 1px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 20px; border-collapse: collapse;">
            <tr><td style="width: 220px; padding: 2px 0;">Adı ve Soyadı</td><td style="width: 15px; text-align: center;">:</td><td><strong>${data.ad_soyad || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">T.C. Kimlik No/Uyruğu</td><td style="text-align: center;">:</td><td><strong>${data.tc_kimlik || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Ana ve Baba Adı</td><td style="text-align: center;">:</td><td><strong>${data.ana_baba_adi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Doğum Yeri ve Tarihi</td><td style="text-align: center;">:</td><td><strong>${data.dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Görevi/İşi/Mesleği</td><td style="text-align: center;">:</td><td><strong>${data.gorevi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Görev/İşyeri Adresi</td><td style="text-align: center;">:</td><td><strong>${data.is_adresi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">İkametgâh Adresi</td><td style="text-align: center;">:</td><td><strong>${data.ikametgah_adresi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Telefon (Cep-Ev-İşyeri)</td><td style="text-align: center;">:</td><td><strong>${data.telefon || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">İfadenin Tarih ve Saati</td><td style="text-align: center;">:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

         <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-bottom: 15px;">
             Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına “<strong>${data.konum || 'hakkında ön inceleme yapılan'}</strong>” konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar anlatılarak müdafi seçme hakkının bulunduğu ve onun hukuki yardımından yararlanabileceği, müdafinin ifade esnasında hazır bulunabileceği bildirildi. Müdafi seçecek durumda olmadığı ve bir müdafi yardımından faydalanmak istediği takdirde, kendisine Baro tarafından bir müdafi görevlendirilebileceği belirtildi. Yüklenen fiiller/iddialar hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylendi. Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatıldı ve aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanındı. Açıklamaları anladığını ve kendisine yüklenen fiillerle/iddialarla ilgili olarak yöneltilen sorulara özgür iradesiyle kendisinin cevap vereceğini, müdafi talebinin bulunmadığını belirtmesi üzerine soruldu:
        </p>
        
        <div style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-bottom: 15px;">
            ${questionsHtml} ” dedi.
        </div>

        <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-top: 15px;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. ${data.tarih_formatted || 'gg.aa.yyyy'} -  Saat: ${data.saat || 'ss.dd'}
        </p>

        <table style="width: 100%; text-align: center; font-size: 12pt; margin-top: 50px; border-collapse: collapse;">
            <tr style="vertical-align: top;">
                <td style="width: 33%; padding: 0 10px;">
                    <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%; padding: 0 10px;">
                     <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 33%; padding: 0 10px;">
                     <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 11pt;">(Hakkında Ön İnceleme Yapılan)</div>
                     <div>İfade Sahibi</div>
                </td>
            </tr>
        </table>
    `);
});

// 1.6.2 Müdafi Seçebilecek Durumda Olduğunun Beyan Edilerek Müdafi Kullanılacağı Açıklandığında Düzenlenecek İfade Tutanağı
defineDocument('1.6.2', 'on_inceleme_mudafi_istegi', function (data) {
    const dayName = data.randevu_tarihi ? formatDayName(data.randevu_tarihi) : '…..';
    const formattedAppointmentDate = formatDateDots(data.randevu_tarihi);

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
         <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 1px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 20px; border-collapse: collapse;">
            <tr><td style="width: 220px; padding: 2px 0;">Adı ve Soyadı</td><td style="width: 15px; text-align: center;">:</td><td><strong>${data.ad_soyad || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">T.C. Kimlik No/Uyruğu</td><td style="text-align: center;">:</td><td><strong>${data.tc_kimlik || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Ana ve Baba Adı</td><td style="text-align: center;">:</td><td><strong>${data.ana_baba_adi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Doğum Yeri ve Tarihi</td><td style="text-align: center;">:</td><td><strong>${data.dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Görevi/İşi/Mesleği</td><td style="text-align: center;">:</td><td><strong>${data.gorevi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Görev/İşyeri Adresi</td><td style="text-align: center;">:</td><td><strong>${data.is_adresi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">İkametgâh Adresi</td><td style="text-align: center;">:</td><td><strong>${data.ikametgah_adresi || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">Telefon (Cep-Ev-İşyeri)</td><td style="text-align: center;">:</td><td><strong>${data.telefon || ''}</strong></td></tr>
            <tr><td style="padding: 2px 0;">İfadenin Tarih ve Saati</td><td style="text-align: center;">:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

         <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-bottom: 15px;">
             Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına "<strong>${data.konum || 'hakkında ön inceleme yapılan'}</strong>" konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar anlatılarak, müdafi seçme hakkının bulunduğu ve onun hukuki yardımından yararlanabileceği, müdafinin ifade esnasında hazır bulunabileceği bildirildi. Müdafi seçecek durumda olmadığı ve bir müdafi yardımından faydalanmak istediği takdirde, kendisine Baro tarafından bir müdafi görevlendirilebileceği belirtildi. Yüklenen fiiller/iddialar hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylendi. Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatıldı ve aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanındı. Açıklamaları anladığını ve kendisine yüklenen fiillerle/iddialarla ilgili olarak yöneltilen sorulara müdafi ile birlikte cevap vereceğini belirtti. Bunun üzerine, kendisine müdafi seçmesi ve getirmesi için <strong>(${data.verilen_sure_gun || '…'}) günlük</strong> süre verildi. <strong>${formattedAppointmentDate}</strong> tarihine rastlayan <strong>${dayName}</strong> günü saat <strong>${data.randevu_saati || 'ss.dd'}'da/de</strong> yukarıda belirtilen müfettişlik adresinde müdafi ile birlikte hazır bulunması istenildi. Belirtilen gün ve saatte bulunmadığı takdirde, "açıklamada bulunmama hakkını" kullandığının anlaşılacağı söylendi. Bu hususları da anladığını ve kabul ettiğini beyan etti.
        </p>

        <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-top: 15px;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yukarıda talebinin aynen yazıldığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. ${data.tarih_formatted || 'gg.aa.yyyy'} -  Saat: ${data.saat || 'ss.dd'}
        </p>

        <table style="width: 100%; text-align: center; font-size: 12pt; margin-top: 50px; border-collapse: collapse;">
            <tr style="vertical-align: top;">
                <td style="width: 33%; padding: 0 10px;">
                    <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%; padding: 0 10px;">
                     <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 33%; padding: 0 10px;">
                     <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 11pt;">(Hakkında Ön İnceleme Yapılan)</div>
                     <div>İfade Sahibi</div>
                </td>
            </tr>
        </table>
    `);
});

// 1.6.3 Müdafi Seçebilecek Durumda Olmadığının Beyan Edilerek Müdafi Görevlendirilmesi İstenildiğinde Düzenlenecek İfade Tutanağı
defineDocument('1.6.3', 'on_inceleme_mudafi_atama_istegi', function (data) {
    const dayName = data.randevu_tarihi ? formatDayName(data.randevu_tarihi) : '…..';
    const formattedAppointmentDate = formatDateDots(data.randevu_tarihi);

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
         <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 1px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 20px; border-collapse: collapse;">
            <tr><td style="width: 220px; padding: 2px 0;">Adı ve Soyadı</td><td style="width: 15px; text-align: center;">:</td><td>${data.ad_soyad || ''}</td></tr>
            <tr><td style="padding: 2px 0;">T.C. Kimlik No/Uyruğu</td><td style="text-align: center;">:</td><td>${data.tc_kimlik || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Ana ve Baba Adı</td><td style="text-align: center;">:</td><td>${data.ana_baba_adi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Doğum Yeri ve Tarihi</td><td style="text-align: center;">:</td><td>${data.dogum_yeri_tarihi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Görevi/İşi/Mesleği</td><td style="text-align: center;">:</td><td>${data.gorevi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Görev/İşyeri Adresi</td><td style="text-align: center;">:</td><td>${data.is_adresi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">İkametgâh Adresi</td><td style="text-align: center;">:</td><td>${data.ikametgah_adresi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Telefon (Cep-Ev-İşyeri)</td><td style="text-align: center;">:</td><td>${data.telefon || ''}</td></tr>
            <tr><td style="padding: 2px 0;">İfadenin Tarih ve Saati</td><td style="text-align: center;">:</td><td>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</td></tr>
        </table>

         <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-bottom: 15px;">
             Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına “<strong>${data.konum || 'hakkında ön inceleme yapılan'}</strong>” konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar anlatılarak, müdafi seçme hakkının bulunduğu ve onun hukuki yardımından yararlanabileceği, müdafinin ifade esnasında hazır bulunabileceği bildirildi. Müdafi seçecek durumda olmadığı ve bir müdafi yardımından faydalanmak istediği takdirde, kendisine baro tarafından bir müdafi görevlendirilebileceği belirtildi. Yüklenen fiiller/iddialar hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylendi. Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatıldı ve aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanındı. Açıklamaları anladığını ve kendisine yüklenen fiillerle/iddialarla ilgili olarak yöneltilen sorulara bir müdafinin hukuki yardımından yararlanmak suretiyle cevap vermek istediğini, ancak müdafi seçecek durumda olmadığını beyan etmesi üzerine; Müfettişliğimizce, kendisine baro tarafından bir müdafi görevlendirilmesi için yazılı girişimde bulunulacağı belirtilerek, birlikte belirlenen <strong>${formattedAppointmentDate}</strong> tarihine tesadüf eden <strong>${dayName}</strong> günü saat <strong>${data.randevu_saati || 'ss.dd'}’da/de</strong> veya Baro ile yapılan görüşmede belirlenen gün ve saatte, ifadesine başvurulacağı kararlaştırıldı. Belirlenen veya bildirilen gün ve saatte, yukarıda belirtilen müfettişlik adresinde hazır bulunması istenildi. Belirtilen gün ve saatte bulunmadığı takdirde, “açıklamada bulunmama hakkını” kullandığının anlaşılacağı söylendi. Bu hususları da anladığını ve kabul ettiğini beyan etti.
        </p>

        <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-top: 15px;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yukarıda talebinin aynen yazıldığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. ${data.tarih_formatted || 'gg.aa.yyyy'} -  Saat: ${data.saat || 'ss.dd'}
        </p>

        <table style="width: 100%; text-align: center; font-size: 12pt; margin-top: 15px; border-collapse: collapse;">
            <tr style="vertical-align: top;">
                <td style="width: 33%; padding: 0 10px;">
                    <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%; padding: 0 10px;">
                     <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 33%; padding: 0 10px;">
                     <div style="margin-bottom: 20px;">İmza</div>
                    <div style="font-weight: bold;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 11pt;">(Hakkında Ön İnceleme Yapılan)</div>
                     <div>İfade Sahibi</div>
                </td>
            </tr>
        </table>
    `);
});

// 1.6.4 Müdafi Seçemeyeceğini Beyan Üzerine Baro Başkanlığına Yazı Örneği
defineDocument('1.6.4', 'on_inceleme_baro_yazisi', function (data) {
    const formattedDate = formatDateDots(data.tarih);

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
        <div style="text-align: center; margin-bottom: 30px;">
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
                <td style="width: 50%; vertical-align: top;">
                    <div><strong>Sayı:</strong> ${data.sayi || '…../…,…'}</div>
                    <div><strong>Konu:</strong> ${data.konu || 'Müdafi Talebi'}</div>
                </td>
                <td style="width: 50%; text-align: right; vertical-align: top;">
                    <div>${formattedDate}</div>
                </td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin-bottom: 30px;">
            ${data.baro_adi ? data.baro_adi.toLocaleUpperCase('tr-TR') : '…..'} BAROSU BAŞKANLIĞINA
        </div>

         <p style="text-align: justify; font-size: 12pt; margin-bottom: 15px; text-indent: 1.25cm;">
            Müfettişliğimizce, 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun kapsamında yürütülmekte olan ön inceleme sırasında, ifadesine başvurulmak üzere çağrılan <strong>${data.ifade_sahibi_ad_soyad || '….. …..'}</strong>, ekteki tutanakta da görüleceği üzere, müdafi seçecek durumda olmadığını ve bir müdafinin hukuki yardımından faydalanmak istediğini beyan etmiş bulunmaktadır.
        </p>

        <p style="text-align: justify; font-size: 12pt; margin-bottom: 40px; text-indent: 1.25cm;">
            Bu nedenle; Ceza Muhakemesi Kanunu’nun 149, 150, 156 ncı maddeleri gereğince, aşağıda bilgileri yer alan kişiye hukuki yardımda bulunacak bir müdafinin Başkanlığınızca belirlenerek, aşağıda belirtilen yer, gün ve saatte yapılacak ifade alımında hazır bulundurulmasının sağlanmasını rica ederiz.
        </p>

        <table style="width: 100%; text-align: center; font-size: 12pt; margin-bottom: 40px;">
            <tr>
                <td style="width: 50%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 50%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
            </tr>
        </table>

         <div style="margin-bottom: 20px; font-size: 12pt;">
            <div><strong>Ek:</strong> İfade Tutanağı (${data.ek_sayfa || '…'} Sayfa)</div>
        </div>

        <div style="font-size: 11pt; border-top: 1px solid #000; padding-top: 10px;">
            <div style="font-weight: bold; margin-bottom: 5px; text-decoration: underline;">İfadesi Alınacak Kişinin Bilgileri:</div>
            <div style="margin-left: 10px;">
                <div><strong>1. İfadesi alınacak kişi ile ilgili bilgiler:</strong></div>
                <div style="margin-left: 20px;">Adı Soyadı: ${data.ifade_sahibi_ad_soyad || '….. …..'}</div>
                <div style="margin-left: 20px;">T.C. Kimlik No: ${data.tc_kimlik || '….. …..'}</div>
                <div style="margin-left: 20px;">Adresi ve Telefonu: ${data.ifade_sahibi_adres_tel || '….. …..'}</div>
                <div style="margin-top: 10px;"><strong>2. İfadenin alınacağı yer, gün ve saat:</strong></div>
                <div style="margin-left: 20px;">İfade Yeri: ${data.ifade_yeri || '….. …..'}</div>
                <div style="margin-left: 20px;">İfade Tarihi: ${formatDateDots(data.ifade_tarihi)}, ${data.ifade_tarihi ? formatDayName(data.ifade_tarihi) : '…..'} günü, saat ${data.ifade_saati || 'ss.dd'}</div>
            </div>
        </div>
    `);
});

// 1.6.5 Müdafi Seçme Hakkı Kullanıldığında Düzenlenecek İfade Tutanağı
defineDocument('1.6.5', 'on_inceleme_ifade_mudafili', function (data) {
    const questionsPdf = renderQAPdf(data.soru_cevap);

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
         <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 1px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12pt;">
            <tr>
                <td style="font-weight: bold; padding: 3px; width: 35%;">Adı ve Soyadı</td>
                <td style="padding: 3px; width: 2%;">:</td>
                <td style="padding: 3px;">${data.ad_soyad || ''}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px;">T.C. Kimlik No/Uyruğu</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;">${data.tc_kimlik || ''}</td>
            </tr>
             <tr>
                <td style="font-weight: bold; padding: 3px;">Ana ve Baba Adı</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;">${data.ana_baba_adi || ''}</td>
            </tr>
             <tr>
                <td style="font-weight: bold; padding: 3px;">Doğum Yeri ve Tarihi</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;">${data.dogum_yeri_tarihi || ''}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px;">Görevi/İşi/Mesleği</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;">${data.gorevi || ''}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px; vertical-align: top;">Görev/İşyeri Adresi</td>
                <td style="padding: 3px; vertical-align: top;">:</td>
                <td style="padding: 3px;">${data.is_adresi || ''}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px; vertical-align: top;">İkametgâh Adresi</td>
                <td style="padding: 3px; vertical-align: top;">:</td>
                <td style="padding: 3px;">${data.ikametgah_adresi || ''}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px;">Telefon (Cep-Ev-İşyeri)</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;">${data.telefon || ''}</td>
            </tr>
              <tr>
                <td style="font-weight: bold; padding: 3px;">Müdafi/Avukat Adı Soyadı</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;">${data.mudafi_ad_soyad || ''}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px;">İfadenin Tarih ve Saati</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;">${formatDateDots(data.tarih)} - Saat: ${data.saat || 'ss.dd'}</td>
            </tr>
        </table>

         <div style="margin-bottom: 20px; text-align: justify; text-indent: 1.25cm; font-size: 12pt;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '…..'} İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki Müfettişliğimiz çalışma odasına</strong> “hakkında ön inceleme yapılan” konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar açıklanarak, müdafinin hukuki yardımından yararlanmak suretiyle ve özgür iradesiyle kendisinin cevap vereceğini belirtmesi üzerine sorulduğunda:
        </div>

        <div style="margin-bottom: 20px;">
            ${questionsPdf}
        </div>

         <div style="margin-top: 30px; text-align: justify; text-indent: 1.25cm; font-size: 12pt;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. ${formatDateDots(data.tarih)} - Saat: ${data.saat || 'ss.dd'}
        </div>

        <table style="width: 100%; text-align: center; font-size: 11pt; margin-top: 40px;">
            <tr>
                <td style="width: 25%; vertical-align: top;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 25%; vertical-align: top;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 25%; vertical-align: top;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 10pt;">(Hakkında Ön İnceleme Yapılan)</div>
                     <div>İfade Sahibi</div>
                </td>
                <td style="width: 25%; vertical-align: top;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mudafi_ad_soyad || 'Adı SOYADI'}</div>
                    <div>Müdafi/Avukat</div>
                </td>
            </tr>
        </table>
    `);
});
