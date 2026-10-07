/* =====================================================
   Belgeler: Çağrı Kâğıtları ve İhbar/Şikâyet Tespit Tutanağı
   ===================================================== */

// 2.1 Disiplin Soruşturmasında Tanığın Yazılı Olarak Davet Edilmesi – Çağrı Kâğıdı
defineDocument('2.1', 'cagri_kagidi_tanik', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.6; color: #000; background: #fff; width: 170mm;', `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>
        
        <table style="width: 100%; margin-bottom: 30px; font-size: 11pt;">
            <tr>
                <td style="vertical-align: top;">
                    <div><strong>Sayı:</strong> ${data.sayi || '…../….,…'}</div>
                    <div><strong>Konu:</strong> ${data.konu || 'Tanıklığınız'}</div>
                </td>
                <td style="text-align: right; vertical-align: top;">
                    ${data.tarih_formatted || '__/__/____'}
                </td>
            </tr>
        </table>
        
        <div style="margin-bottom: 30px; font-size: 11pt;">
            <div><strong>Sayın ${data.muhatap_ad_soyad || '________'}</strong></div>
            <div>${data.adres_satir1 || '________'}</div>
            <div>${data.adres_satir2 || ''}</div>
        </div>
        
        <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px; font-size: 11pt; line-height: 1.8;">
            Müfettişliğimizce yürütülmekte olan inceleme/soruşturma çalışmaları kapsamında 
            yer alan bazı konularda/iddialarda 'Tanık' konumunda olduğunuz öğrenilmiş/anlaşılmış 
            olup 'Tanık' olarak bilginize başvurma ihtiyacı duyulmuştur.
        </p>
        
        <p style="text-align: justify; text-indent: 1cm; margin-bottom: 30px; font-size: 11pt; line-height: 1.8;">
            Tanık olarak bilginize başvurmak üzere <strong>${data.davet_tarihi_formatted || '__/__/____'}</strong> 
            tarihine rastlayan <strong>${data.davet_gunu || '________'}</strong> günü saat 
            <strong>${data.davet_saat || '__:__'}</strong>'da/de <strong>${data.davet_yeri || '________'}</strong> 
            Müfettişliğimiz çalışma odasında bulunmanızı rica ederim.
        </p>
        
        <div style="text-align: right; margin: 50px 0;">
            <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 60px;">İmza</div>
                <div><strong>${data.mufettis_ad_soyad || '________'}</strong></div>
                <div>${data.mufettis_kod || '(___)'}</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>
        
        <div style="margin-top: 60px; padding-top: 15px; border-top: 1px solid #333; font-size: 9pt;">
            <div style="font-weight: bold; margin-bottom: 10px;">Açıklama:</div>
            <div style="margin-left: 15px;">
                <p style="margin-bottom: 8px;">1) Tanığın yazılı olarak çağrılmasında ikametgâh adresi esastır. Tanığın iş adresi de yazılabilir.</p>
                <p>2) Çağrı kâğıdı, Muhakkik tarafından yazıldığında; Sayı kısmına Muhakkikin inceleme/soruşturma onay numarası ve tarih kısmına da çağrı kâğıdının yazıldığı tarih konur.</p>
            </div>
        </div>
        
        <div style="margin-top: 15px; font-size: 9pt; text-align: center; color: #666; border-top: 1px solid #ccc; padding-top: 10px;">
            Bu belge resmi soruşturma dosyasının ayrılmaz bir parçasıdır. (Belge No: 2.1)
        </div>
    `);
});

// 2.2 Ön İncelemede Tanığın Yazılı Olarak Davet Edilmesi-Çağrı Kâğıdı
defineDocument('2.2', 'cagri_kagidi_on_inceleme_tanik', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>
        
        <table style="width: 100%; margin-bottom: 30px; font-size: 12pt;">
            <tr>
                <td style="vertical-align: top;">
                    <div><strong>Sayı:</strong> ${data.sayi || '…../….,…'}</div>
                    <div><strong>Konu:</strong> ${data.konu || 'Tanıklığınız'}</div>
                </td>
                <td style="text-align: right; vertical-align: top;">
                    ${data.tarih_formatted || '__/__/____'}
                </td>
            </tr>
        </table>
        
        <div style="margin-bottom: 30px; font-size: 12pt;">
             <div><strong>Sayın ${data.muhatap_ad_soyad || '________'}</strong></div>
            <div>${data.muhatap_adres || '________'}</div>
        </div>
        
        <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
            Müfettişliğimizce yürütülmekte olan “Ön İnceleme” çalışmaları kapsamında yer alan bazı konularda/iddialarda “Tanık” olarak/konumunda olduğunuz öğrenilmiş/anlaşılmış olup “Tanık” olarak/konumunda bilginize başvurma ihtiyacı duyulmuştur. 
        </p>
        
        <p style="text-align: justify; text-indent: 1cm; margin-bottom: 30px;">
            Tanık olarak bilginize başvurmak üzere <strong>${data.randevu_tarihi_formatted || '__/__/____'}</strong> tarihine rastlayan <strong>${data.randevu_tarihi ? formatDayName(data.randevu_tarihi) : '________'}</strong> günü saat <strong>${data.randevu_saati || '__:__'}</strong>'da/de <strong>${data.yer || '________'}</strong> Müfettişliğimiz çalışma odasına gelmeniz gerekmektedir. Gelmediğiniz takdirde 5271 sayılı Ceza Muhakemesi Kanunu’nun 44 üncü maddesinde belirtilen usulle (zorla) getirileceğinizin bilinmesini rica ederim.
        </p>
        
        <div style="text-align: right; margin: 60px 0;">
            <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 50px;">İmza</div>
                <div><strong>${data.muhakkik_adi || '________'}</strong></div>
                <div>(${data.muhakkik_kod || 'KOD'})</div>
                <div>${data.muhakkik_unvan || 'Bakanlık Müfettişi'}</div>
            </div>
        </div>
        
        <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #333; font-size: 10pt;">
            <div style="font-weight: bold; margin-bottom: 5px;">Açıklama:</div>
            <div style="margin-left: 15px;">
                 <p style="margin-bottom:5px;">1- Tanığın yazılı olarak çağrılmasında ikametgâh adresi esastır. Ancak, tanık bir kurumda / kuruluşta çalışıyorsa, gerektiğinde görev/iş adresine yazılmak suretiyle de çağrılabilir.</p>
                 <p>2- Çağrı kâğıdı, Muhakkik/Ön İncelemeci tarafından yazıldığında, yazanın başlık kısmına görevli bulunduğu kurumun/birimin adı yazılmalıdır.</p>
            </div>
        </div>
    `);
});

// 2.3 Disiplin Soruşturması ve Ön İncelemede Çağrı Kâğıdının Tebliğ-Tebellüğ Tutanağı
defineDocument('2.3', 'teblig_tebellug_tutanagi', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;', `
        <div class="letter-header" style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 2px;">TEBLİĞ-TEBELLÜĞ TUTANAĞI</h1>
        </div>
        
        <div class="letter-body" style="text-align: justify; margin-bottom: 20px; font-size: 11pt; line-height: 1.6;">
            <p style="text-indent: 0;">
                Bakanlık Müfettişlerince adıma gönderilen ve "tanık" olarak çağrılmamla ilgili olan 
                <strong>${formatDateLong(data.cagri_tarihi) || '...'}</strong> tarihli ve 
                <strong>${data.cagri_sayisi || '...'}</strong> sayılı kapalı zarf içinde çağrı kâğıdını teslim aldım. 
                <strong>${formatDateLong(data.teslim_tarihi) || '...'}</strong> - Saat: <strong>${data.teslim_saati || '...'}</strong>
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-between; margin-top: 50px; font-size: 11pt;">
            <div style="text-align: center; width: 45%;">
                <strong>Teslim Eden</strong><br>
                İmza<br><br><br>
                <strong>${data.teslim_eden_ad || '...'}</strong><br>
                ${data.teslim_eden_unvan || '...'}
            </div>
            <div style="text-align: center; width: 45%;">
                <strong>Teslim Alan</strong><br>
                İmza<br><br><br>
                <strong>${data.teslim_alan_ad || '...'}</strong><br>
                ${data.teslim_alan_unvan || '...'}
            </div>
        </div>
        
        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: center; color: #666; border-top: 1px solid #ccc; padding-top: 10px;">
             Bu belge resmi soruşturma dosyasının ayrılmaz bir parçasıdır. (Belge No: 2.3)
        </div>
    `);
});

// 2.4 Ön İncelemede, Çağrı Kâğıdına Rağmen Gelmeyen Tanıkla İlgili Yetkili Mercie Yazılan Yazı
defineDocument('2.4', 'zorla_getirme_yazisi', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; font-weight: bold; margin-bottom: 30px;">
            <div style="color: red; margin-bottom: 5px;">ÖZEL</div>
            <div>T.C.</div>
            <div>MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div>Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; margin-bottom: 30px; font-size: 12pt;">
            <tr>
                 <td style="vertical-align: top;">
                    <div><strong>Sayı:</strong> ${data.sayi || '…../…,…'}</div>
                    <div><strong>Konu:</strong> Tanığın Zorla Getirilmesi</div>
                </td>
                <td style="text-align: right; vertical-align: top;">
                    ${formatDateLong(data.tarih)}
                </td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin: 40px 0;">
            ${(data.yonelim_yeri || '.....').toUpperCase()} ${(data.yonelim_makami || 'VALİLİĞİNE')}
        </div>

        <div style="margin-bottom: 20px; font-size: 12pt;">
            <table style="width: 100%;">
                <tr>
                    <td style="vertical-align: top; width: 50px; font-weight: bold;">İlgi :</td>
                    <td>
                        <div>a) Bakanlık Makamının ${formatDateLong(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '...'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateLong(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '...'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 20px; font-size: 12pt;">
            İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen ön incelemede, aşağıda isim ve adresi belirtilen <strong>${data.tanik_ad_soyad || '..... .....'}</strong> "tanık" sıfatıyla ifadesine başvurulmak için kendisine gönderilen davetiyede belirtilen gün ve saatte çağrımıza icabet etmediğinden; adı geçenin, 5271 sayılı Ceza Muhakemesi Kanunu’nun 44 üncü maddesinde belirtilen usulle, <strong>${formatDateLong(data.randevu_tarihi)}</strong> tarihine tesadüf eden <strong>${formatDayName(data.randevu_tarihi)}</strong> günü saat <strong>${data.randevu_saati || '...'}</strong>'da/de <strong>${data.randevu_yeri || '.....'}</strong> Müfettişliğimiz çalışma odasında hazır bulundurulmasının sağlanması hususunda ilgililere emirlerinizi rica ederim.
        </p>

        <div style="text-align: right; margin-top: 60px;">
            <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px;">İmza</div>
                <div><strong>${data.mufettis_ad_soyad || '..... .....'}</strong></div>
                <div>(${data.mufettis_kod || '...'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 40px; font-size: 11pt;">
            <strong>Ek:</strong><br>
            1- Çağrı Yazısı (${data.ek_cagri_sayfa || '...'} Sayfa)<br>
            2- Tebliğ-Tebellüğ Tutanağı (${data.ek_teblig_sayfa || '...'} Sayfa)
        </div>

        <div style="margin-top: 30px; font-size: 11pt; border-top: 1px solid #000; padding-top: 10px;">
            <div style="font-weight: bold; text-decoration: underline; margin-bottom: 5px;">TANIKLA İLGİLİ BİLGİLER:</div>
            <table style="width: 100%;">
                <tr>
                    <td style="width: 200px;">Adı ve Soyadı</td>
                    <td>: ${data.tanik_ad_soyad || '...'}</td>
                </tr>
                <tr>
                    <td>T.C Kimlik Numarası</td>
                    <td>: ${data.tanik_tc || '...'}</td>
                </tr>
                <tr>
                    <td>Görevi /İş Adresi ve Tel.</td>
                    <td>: ${data.tanik_gorev_adres || '...'}</td>
                </tr>
                <tr>
                    <td>İkamet Adresi ve Tel.</td>
                    <td>: ${data.tanik_ikamet_adres || '...'}</td>
                </tr>
            </table>
        </div>
        
        <div style="margin-top: 20px; font-size: 9pt; border-top: 2px solid #000; padding-top: 5px;">
             <strong>Açıklama:</strong><br>
             1. Çağrı kâğıdı, Muhakkik/Ön İncelemeci tarafından yazıldığında;<br>
             &nbsp;&nbsp;&nbsp;a) Yazının başlık kısmına görevli bulunduğu kurumun/birimin adı yazılmalıdır.<br>
             &nbsp;&nbsp;&nbsp;b) Yazının ilgi kısmına kendini görevlendiren makamın/yetkili merciin oluru ve görevlendirme emri yazılmalıdır.
        </div>
    `);
});

// 3.1 İhbar ve Şikâyetlerle İlgili Tutanak
defineDocument('3.1', 'ihbar_sikayet_tespit', function (data) {
    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;', `
         <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 1px;">İHBAR/ŞİKÂYET TESPİT TUTANAĞI</h1>
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
            <tr><td style="padding: 2px 0;">İhbar/Şikâyet Tarih ve Saati</td><td style="text-align: center;">:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

         <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-bottom: 15px;">
             Yukarıda açık kimliği ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına kendiliğinden gelip; bir konuda ihbar/şikâyette bulunacağını söyleyerek, kendisinin dinlenmesini ve sunacağı belgelerin alınmasını talep etti. Adı geçene, ihbar ve şikâyet konusunda izlemesi gereken prosedür, usul ve esaslar anlatıldı. Buna rağmen, adı geçen; "<strong>${data.konu || '….. …..'}</strong>" konusunda "<strong>${data.ilgili_gorevli || '….. …..'}</strong>" görevlisi ile ilgili olarak; "<strong>${data.ihbar_aciklama || '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</strong>" şeklinde ihbarda/şikâyette bulundu. Ayrıca; ihbar/şikâyet konusu ile ilgili olarak bu tutanak ekindeki belgeleri de (<strong>${data.sunulan_belgeler || '….. ….. …..'}</strong>) Müfettişliğimize sundu. Bu konuda ilgili ve yetkili mercilere bir başvurusu olup olmadığı konusunda da "<strong>${data.diger_basvuru || '….. ….. …..'}</strong>" açıklamalarını yaptı.
        </p>

        <p style="text-align: justify; font-size: 12pt; line-height: 1.5; margin-top: 15px;">
            Durumu tespit eden bu tutanak, tarafımızdan müştereken tanzim edilip okundu. Muhbirin/şikâyetçinin, yazılanların doğru ve söylediklerinin aynısı olduğunu bildirmesi üzerine bu tutanak birlikte imza altına alındı. ${data.tarih_formatted || 'gg.aa.yyyy'} -  Saat: ${data.saat || 'ss.dd'}
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
                    <div style="font-size: 11pt;">Bilgi Veren (Muhbir/Şikâyetçi)</div>
                </td>
            </tr>
        </table>
    `);
});
