/* =====================================================
   Belgeler: Suç Duyurusu ve Tevdi Raporu
   ===================================================== */

// 15.1 Cumhuriyet Başsavcılığına Suç Duyurusu Yazısı/Raporu Kapağı
defineDocument('15.1', 'suc_duyurusu_kapagi', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);
    const olurTarih = formatDateDots(data.olur_tarih);
    const gorevTarih = formatDateDots(data.gorev_tarih);
    const baslangicTarihi = formatDateDots(data.baslangic_tarihi);
    const bitisTarihi = formatDateDots(data.bitis_tarihi);
    const sucTarihi = formatDateDots(data.suc_tarihi);

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.4; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;', `
        <table style="width: 100%; height: 100%; min-height: 700px; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 35px; background-color: #0066CC; border-right: 3px solid #000; vertical-align: middle;">
                    <div style="writing-mode: vertical-rl; transform: rotate(180deg); text-align: center; font-weight: bold; font-size: 11pt; color: #fff; white-space: nowrap; padding: 10px 5px;">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="vertical-align: top; padding: 15px;">
                    <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 10px; font-size: 12pt;">ÖZEL</div>

                    <div style="text-align: center; margin-bottom: 15px;">
                        <div>T.C.</div>
                        <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div>Teftiş Kurulu</div>
                    </div>

                    <table style="width: 100%; margin-bottom: 15px;">
                        <tr>
                            <td>Sayı : ${data.sayi || '…./.., ...'}</td>
                            <td style="text-align: right;">${tarih}</td>
                        </tr>
                        <tr>
                            <td colspan="2">Konu : ${data.konu || '….. ….. ….. …..'}</td>
                        </tr>
                    </table>

                    <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 15px; font-size: 12pt;">
                        CUMHURİYET BAŞSAVCILIĞINA SUÇ DUYURUSU
                    </div>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 10px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; width: 45%; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam<br>Makam Olurunun Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.olur_makam || 'Bakanlık Makamı'}<br>${olurTarih} - ${data.olur_sayi || '…..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Görev Emrini Veren Makam<br>Görevlendirme Emrinin Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.gorev_makam || 'Teftiş Kurulu Başkanlığı'}<br>${gorevTarih} - ${data.gorev_sayi || '…..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturma Talep Eden Merci<br>İnceleme/Soruşturma Olurunu Alan Birim</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.talep_merci || ''}<br>${data.olur_alan_birim || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İhbarcı veya Şikâyetçinin Adı-Soyadı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.ihbarci_sikayetci || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturma Çalışmasını Yürüten<br>Bakanlık Müfettişleri</td>
                            <td style="border: 1px solid #000; padding: 5px; white-space: pre-wrap;">${data.mufettisler || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturmanın Yapıldığı Yer</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.inceleme_yeri || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturmanın Başladığı Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${baslangicTarihi}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturmanın Bitirildiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${bitisTarihi}</td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 10px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; width: 45%; font-weight: bold;">Suç Duyurusunun Konusu</td>
                            <td style="border: 1px solid #000; padding: 5px; white-space: pre-wrap;">${data.suc_duyurusu_konusu || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçla İlgili Kanun Maddesi</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.suc_kanun_maddesi || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçun İşlendiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${sucTarihi}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçun İşlendiği Yer</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.suc_yeri || ''}</td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 10px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; width: 45%; font-weight: bold; vertical-align: top;">Hakkında Duyuru Yapılanların<br>Adı ve Soyadı, Kimlik Numarası<br>Görevi/İşi ve Adresi</td>
                            <td style="border: 1px solid #000; padding: 5px; vertical-align: top; white-space: pre-wrap;">${data.duyuru_yapilanlar || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Bu Konuda Başka Rapor Düzenlenmiş ise<br>Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.baska_rapor || ''}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">15.1</div>
                </td>
            </tr>
        </table>
    `);
});

// 15.2 Cumhuriyet Başsavcılığına Suç Duyurusu Yazısı/Raporu
defineDocument('15.2', 'suc_duyurusu_raporu', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);
    const bakanlikOlurTarih = formatDateDots(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDateDots(data.gorev_emri_tarih);
    const baslangicTarihi = formatDateDots(data.baslangic_tarihi);
    const bitisTarihi = formatDateDots(data.bitis_tarihi);
    const sucOgrenmeTarihi = formatDateDots(data.suc_ogrenme_tarihi);
    const sucTarihi = formatDateDots(data.suc_tarihi);
    const encumenTarih1 = formatDateDots(data.encumen_karar_tarih1);
    const encumenTarih2 = formatDateDots(data.encumen_karar_tarih2);
    const valilikOlurTarih = formatDateDots(data.valilik_olur_tarih);
    const zimmetYaziTarih = formatDateDots(data.zimmet_yazi_tarih);

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    // Helper for displaying data with fallback (bold)
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10px;', `
        <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 8px;">ÖZEL</div>
        
        <div style="text-align: center; margin-bottom: 10px;">
            <div>T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div>Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; margin-bottom: 12px;">
            <tr>
                <td>Sayı : ${v(data.sayi, '…./.., ...')}</td>
                <td style="text-align: right;">${tarih}</td>
            </tr>
            <tr>
                <td colspan="2">Konu: ${v(data.konu, 'Suç Duyurusu')}</td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin-bottom: 12px;">
            ${v(data.bassavcilik, '….. CUMHURİYET BAŞSAVCILIĞINA')}
        </div>

        <div style="margin-bottom: 8px; font-size: 9pt;">
            <div><strong>İlgi :</strong> a) Bakanlık Makamının ${bakanlikOlurTarih} tarihli ve ${v(data.bakanlik_olur_sayi)} sayılı Oluru.</div>
            <div style="margin-left: 30px;">b) Teftiş Kurulu Başkanlığının ${gorevEmriTarih} tarihli ve ${v(data.gorev_emri_sayi)} sayılı görevlendirme emri.</div>
        </div>

        <p style="text-indent: 25px; text-align: justify; margin-bottom: 8px; font-size: 9pt;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce ${baslangicTarihi}-${bitisTarihi} tarihleri arasında yürütülen ${calismaTuru} çalışmaları sonucunda suç teşkil eden fiil/eylemlerde bulunduğu değerlendirilen kişi/kişilerle ilgili hususlar aşağıda açıklanmıştır.
        </p>

        <p style="font-weight: bold; margin-bottom: 4px; font-size: 9pt;">SUÇ DUYURUSUNUN KONUSU:</p>
        <p style="text-align: justify; margin-bottom: 8px; font-size: 9pt;">${v(data.suc_duyurusu_konusu, '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..')}</p>

        <p style="font-weight: bold; margin-bottom: 4px; font-size: 9pt;">HAKKINDA SUÇ DUYURUSU YAPILANLAR:</p>
        <table style="margin-bottom: 8px; width: 100%; font-size: 9pt;">
            <tr>
                <td style="width: 160px;">Adı ve Soyadı</td>
                <td>: ${v(data.sanik_adi_soyadi)}</td>
            </tr>
            <tr>
                <td>T.C. Kimlik Numarası</td>
                <td>: ${v(data.sanik_tc)}</td>
            </tr>
            <tr>
                <td style="vertical-align: top;">Görevi/İşi ve Adresi</td>
                <td>: ${v(data.sanik_gorevi)}</td>
            </tr>
        </table>

        <p style="margin-bottom: 4px; font-size: 9pt;"><strong>SUÇU ÖĞRENME TARİHİ:</strong> ${sucOgrenmeTarihi}</p>

        <p style="margin-bottom: 8px; font-size: 9pt;"><strong>SUÇ YERİ VE TARİHİ:</strong> ${v(data.suc_yeri)} ${sucTarihi}</p>

        <p style="font-weight: bold; margin-bottom: 4px; font-size: 9pt;">AÇIKLAMA, TAHLİL VE SONUÇ:</p>
        <p style="font-size: 8pt; font-style: italic; margin-bottom: 6px;">(Açıklama: Bu bölüme Suç Duyurusuna Konu Fiil/Olaylar ve Hukuki Deliller, Gerekçeler, Sonuç yazılacaktır.)</p>
        
        <div style="text-align: justify; margin-bottom: 8px; text-indent: 25px; font-size: 9pt;">
            ${v(data.il_adi)} Merkez ${v(data.merkez_okul_turu, 'İlköğretim')} okullarının kışlık yakacak ihtiyacının karşılanması ve ${v(data.komur_kaynagi, 'Şırnak')}'tan tahsis edilen (${v(data.ilk_komur_miktari, '…')}) ton kömürün nakli işinin ${v(data.il_adi)} İl Daimi Encümeninin ${encumenTarih1} tarihli ve ${v(data.encumen_karar_sayi1)} sayılı kararı ile ${v(data.kanun_no, '4734')} sayılı Kanunu'nun ${v(data.kanun_madde, '…')} maddesi uyarınca ${v(data.ilk_tasima_bedeli)} TL karşılığında taşımanın teklif eden ${v(data.yuklenici_adi)}'e verildiği ve tahakkuk edecek istihkaklarının da ${v(data.mali_yil, '….')} malî yılı bütçesinden ve ilköğretim kurumları yakacak alımları ve giderleri tertibinden ödenmesinin kararlaştırıldığı (Ek: ${v(data.ek_no_1, '…/…')}) yine; ${v(data.il_adi)} İl Daimi Encümeninin ${encumenTarih2} tarihli ve ${v(data.encumen_karar_sayi2)} sayılı kararı ile İl ilköğretim okullarının kışlık yakacak ihtiyacının karşılanmasıyla ilgili olarak, TKİ'den satın alınan (${v(data.ikinci_komur_miktari, '…')}) ton ${v(data.komur_kaynagi, 'Şırnak')} kömürünün naklinin de ${v(data.ikinci_tasima_bedeli)} TL bedelle nakletme teklifinde bulunan aynı şahsa verilmesinin karar altına alındığı (Ek: ${v(data.ek_no_2, '…')}); bahse konu karar ve anlaşmalar gereği yüklenici firma tarafından kömür nakliyesi ve tesellüm işlerine başlandığı mevcut kayıtların incelenmesinden anlaşılmıştır.
        </div>

        <div style="text-align: justify; margin-bottom: 8px; text-indent: 25px; font-size: 9pt;">
            Hâl böyleyken, ${v(data.okul_adi, '….. ….. İlkokulu')}na (${v(data.kamyon_sayisi, '6')}) kamyon içerisinde götürülen, (${v(data.planlanan_miktar, '…')}) ton olarak teslimi amaçlanan kömürün miktarından (Ek: ${v(data.ek_no_planlanan, '…')}) okul idaresince şüphelenilmesi üzerine, bir komisyon huzurunda tartılmasının sağlandığı ve teslim alınan kömürün teslim alınması gerekenden (${v(data.eksik_miktar, '…')}) ton eksik olduğunun belirlendiği (Ek: ${v(data.ek_no_eksik, '…')}); konunun İl Millî Eğitim Müdürlüğüne intikal ettirildiği (Ek: ${v(data.ek_no_intikal, '...')}); buna bağlı olarak ${v(data.il_adi)} Valiliğinin ${valilikOlurTarih} tarihli ve ${v(data.valilik_olur_sayi)} sayılı olurları ile soruşturmayı yürütmek üzere Eğitim Müfettişleri ${v(data.onceki_mufettis1)} ile ${v(data.onceki_mufettis2)}'nın görevlendirildiği anlaşılmış (Ek: ${v(data.ek_no_gorevlendirme, '…')}) ve dosya Müfettişliğimizce devralınmıştır. Gerek önceki Müfettişlerce alınan gerekse tarafımızdan alınan ve ekte sunulan ifade ve belgelerden (Ek: ${v(data.ek_no_ifade_belge, '…/...')}) anlaşılacağı üzere;
        </div>

        <div style="text-align: justify; margin-bottom: 8px; margin-left: 25px; font-size: 9pt;">
            a) Yüklenici ${v(data.yuklenici_adi)}'ın nakliye esnasında, şoförlere verdiği talimatla, dolu olarak tartılan kamyonlardaki kömürlerin bir kısmının ${v(data.bosaltma_yeri, '…...')} yanındaki boş alana dökülmesini sağlamış, böylece okullara götürülmesi gerekenden eksik kömür götürüldüğü hâlde tam gösterilmiş ve eylemin tam bir plan dahilinde gerçekleştirildiği anlaşılmıştır. Şöyle ki; ${v(data.okul_adi, '….. İlkokulu')}na götürülen (${v(data.kamyon_sayisi, '6')}) kamyonun durumun fark edilebileceği düşüncesiyle, tartıldıktan sonra ve okula götürülmeden önce kamyonların sadece birisinin üzerinden değil, hepsinin üzerinden bir miktar kömürün önceden belirlenen alana boşaltılması gerçekleştirilmiştir.
        </div>

        <div style="text-align: justify; margin-bottom: 8px; font-size: 9pt;">
            İfadelerine başvurulan, gerek adı verilen okula gerekse diğer okullara kömür götüren şoförler, bu işi yüklenici ${v(data.yuklenici_adi)}'in kendilerine verdiği talimat üzerine yaptıklarını beyan etmişlerdir (Ek: ${v(data.ek_no_sofor_ifade, '…/…')});
        </div>

        <div style="text-align: justify; margin-bottom: 8px; margin-left: 25px; font-size: 9pt;">
            b) Bu duruma göre kantar fişlerine nazaran yapılan teslimatın birçok okul için gerçek miktarı yansıtmadığı sonucuna varılmakta ve ${v(data.okul_adi, '….. İlkokulu')}ndaki durum bunun en çarpıcı örneğini oluşturmaktadır.
        </div>

        <div style="text-align: justify; margin-bottom: 8px; margin-left: 25px; font-size: 9pt;">
            c) Fiil gerçekleştirilirken, okulların tartı imkânlarının olmayışından yararlanılmış, neticede söz konusu okullara, bir miktarı başka mahalde boşaltılmış eksik kömür tam gibi teslim edilmek suretiyle Devlet zarara uğratılmış; yüklenici, taahhüdüne hile karıştırmış ve bu şekilde yasalara aykırı olarak haksız kazanç sağlamıştır.
        </div>

        <div style="text-align: justify; margin-bottom: 8px; text-indent: 25px; font-size: 9pt;">
            Mevcut belgeler ve ifadelerine başvurulan şoförlerin beyanları bu durumu açıkça ortaya koymaktadır.
        </div>

        <div style="text-align: justify; margin-bottom: 8px; text-indent: 25px; font-size: 9pt;">
            Sonuç olarak; ${v(data.ogretim_yili, '…./….')} öğretim yılında ilköğretim okullarında kullanılmak üzere tahsisi yapılan kömürün dağıtım ve teslimatında sorumluluğu görülen Bakanlığımız mensupları hakkında Müfettişliğimizce soruşturma yürütülmekte olup; ${v(data.il_adi)} Millî Eğitim Müdürlüğü Mutemedi ${v(data.mutemed_adi)}'ın (T.C. Kimlik No.: ${v(data.mutemed_tc)}); Valilikçe Cumhuriyet Savcılığına yazılan yazıda adı geçenin zimmet suçunu işlediği kanaatine varıldığını ve TCK'nın ${v(data.tck_madde, '247')} nci maddesi gereğince işlem yapılmasının uygun olacağını belirten ${zimmetYaziTarih} tarihli ve ${v(data.zimmet_yazi_sayi)} sayılı yazılarına istinaden tutuklanmış bulunmaktadır.
        </div>

        <div style="text-align: justify; margin-bottom: 8px; text-indent: 25px; font-size: 9pt;">
            Bununla beraber, yukarıda açıklandığı üzere okullara teslim edilmeden önce tartılan ve kamyonlara yüklenen kömürlerin bir kısmını başka yerlere boşalttırarak, taahhüdüne hile karıştırmak suretiyle, haksız kazanç sağlayan, Devleti zarara uğratan ${v(data.yuklenici_baba_adi)} oğlu ${v(data.yuklenici_dogum_yili)} doğumlu ve ${v(data.yuklenici_adresi, '….. ….. ….. …..')} adresinde oturan yüklenici ${v(data.yuklenici_adi)} (T.C. Kimlik No.: ${v(data.yuklenici_tc)}) hakkında da "${data.teklif_edilen_suc || 'taahhüt ettiği kömür miktarında hile yapmak suretiyle Devleti zarara uğratmak ve haksız kazanç sağlamak'}" fiilinden dolayı "${data.yasal_dayanak || 'genel hükümler'}" çerçevesinde yasal işlem yapılması gereği ortaya çıkmaktadır.
        </div>

        <p style="text-indent: 25px; margin-bottom: 12px; font-size: 9pt;">Durum, gereğinin takdir ve ifası için tevdi olunur. ${tarih}</p>

        <table style="width: 100%; margin-top: 20px;">
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

        <div style="margin-top: 15px; font-size: 9pt;">
            <strong>Ek:</strong> Dizi Pusulasına Bağlı İşlemli Dosya (${data.ek_sayfa || '…'} Sayfa/${data.ek_adet || '…'} Adet)
        </div>

        <div style="margin-top: 20px; font-size: 8pt; text-align: right; color: #666;">15.2</div>
    `);
});

// 15.3 Diğer Bakanlık Mensupları Suç Duyurusu Yazısı/Raporu Kapağı
defineDocument('15.3', 'diger_bakanlik_suc_duyurusu_kapagi', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);
    const olurTarih = formatDateDots(data.olur_tarih);
    const gorevTarih = formatDateDots(data.gorev_tarih);
    const baslangicTarihi = formatDateDots(data.baslangic_tarihi);
    const bitisTarihi = formatDateDots(data.bitis_tarihi);
    const sucTarihi = formatDateDots(data.suc_tarihi);

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.4; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;', `
        <table style="width: 100%; height: 100%; min-height: 700px; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 35px; background-color: #0066CC; border-right: 3px solid #000; vertical-align: middle;">
                    <div style="writing-mode: vertical-rl; transform: rotate(180deg); text-align: center; font-weight: bold; font-size: 11pt; color: #fff; white-space: nowrap; padding: 10px 5px;">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="vertical-align: top; padding: 15px;">
                    <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 10px; font-size: 12pt;">ÖZEL</div>

                    <div style="text-align: center; margin-bottom: 15px;">
                        <div>T.C.</div>
                        <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div>Teftiş Kurulu</div>
                    </div>

                    <table style="width: 100%; margin-bottom: 15px;">
                        <tr>
                            <td>Sayı : ${data.sayi || '…./.., ...'}</td>
                            <td style="text-align: right;">${tarih}</td>
                        </tr>
                        <tr>
                            <td colspan="2">Konu : ${data.konu || '….. ….. …..'}</td>
                        </tr>
                    </table>

                    <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 15px; font-size: 12pt;">
                        DİĞER BAKANLIK MENSUPLARI HAKKINDA SUÇ DUYURUSU
                    </div>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 10px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; width: 45%; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam<br>Makam Olurunun Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.olur_makam || 'Bakanlık Makamı'}<br>${olurTarih} - ${data.olur_sayi || '…..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Görev Emrini Veren Makam<br>Görevlendirme Emrinin Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.gorev_makam || 'Teftiş Kurulu Başkanlığı'}<br>${gorevTarih} - ${data.gorev_sayi || '…..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturma Talep Eden Merci<br>İnceleme/Soruşturma Olurunu Alan Birim</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.talep_merci || ''}<br>${data.olur_alan_birim || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İhbarcı veya Şikâyetçinin Adı, Soyadı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.ihbarci_sikayetci || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturma Çalışmasını Yürüten<br>Bakanlık Müfettişleri</td>
                            <td style="border: 1px solid #000; padding: 5px; white-space: pre-wrap;">${data.mufettisler || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturmanın Yapıldığı Yer</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.inceleme_yeri || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturmanın Başladığı Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${baslangicTarihi}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturmanın Bitirildiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${bitisTarihi}</td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 10px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; width: 45%; font-weight: bold;">Suç Duyurusunun Konusu</td>
                            <td style="border: 1px solid #000; padding: 5px; white-space: pre-wrap;">${data.suc_duyurusu_konusu || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçla İlgili Kanun Maddesi</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.suc_kanun_maddesi || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçun İşlendiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${sucTarihi}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçun İşlendiği Yer</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.suc_yeri || ''}</td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 10px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; width: 45%; font-weight: bold; vertical-align: top;">Hakkında Duyuru Yapılanların<br>Adı ve Soyadı, Kimlik Numarası<br>Görevi/İşi ve Adresi</td>
                            <td style="border: 1px solid #000; padding: 5px; vertical-align: top; white-space: pre-wrap;">${data.duyuru_yapilanlar || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Bu Konuda Başka Rapor Düzenlenmiş ise<br>Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.baska_rapor || ''}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">15.3</div>
                </td>
            </tr>
        </table>
    `);
});

// 15.4 Diğer Bakanlık Mensupları ile İlgili Suç Duyurusu Yazısı/Raporu
defineDocument('15.4', 'diger_bakanlik_suc_duyurusu_raporu', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);
    const bakanlikOlurTarih = formatDateDots(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDateDots(data.gorev_emri_tarih);
    const baslangicTarihi = formatDateDots(data.baslangic_tarihi);
    const bitisTarihi = formatDateDots(data.bitis_tarihi);

    // Helper function for displaying data with fallback - bold for user values
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10px;', `
        <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 10px;">ÖZEL</div>
        
        <div style="text-align: center; margin-bottom: 10px;">
            <div>T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div>Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; margin-bottom: 15px;">
            <tr>
                <td>Sayı : ${v(data.sayi, '…./.., ...')}</td>
                <td style="text-align: right;">${v(tarih)}</td>
            </tr>
            <tr>
                <td colspan="2">Konu: ${v(data.konu, 'Suç Duyurusu')}</td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin-bottom: 15px;">
            ${v(data.bakanlik, '….. ….. BAKANLIĞINA')}
        </div>

        <div style="margin-bottom: 10px; font-size: 10pt;">
            <div><strong>İlgi :</strong> a) Bakanlık Makamının ${v(bakanlikOlurTarih)} tarihli ve ${v(data.bakanlik_olur_sayi)} sayılı Oluru.</div>
            <div style="margin-left: 35px;">b) Teftiş Kurulu Başkanlığının ${v(gorevEmriTarih)} tarihli ve ${v(data.gorev_emri_sayi)} sayılı görevlendirme emri.</div>
        </div>

        <p style="text-indent: 35px; text-align: justify; margin-bottom: 10px; font-size: 10pt;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce ${v(baslangicTarihi)}-${v(bitisTarihi)} tarihleri arasında ${v(data.kurum_adi, '….. ….. İlkokulu')}nun ${v(data.inceleme_konusu, 'ilgili konularda')} yürütülen inceleme/soruşturma çalışmalarında;
        </p>

        <p style="text-indent: 35px; text-align: justify; margin-bottom: 10px; font-size: 10pt;">
            ${v(data.okul1_adi, '….. ….. İlkokulu')}'na tahsis edilen kömürlerin tartılarının yapılmasını ve kamyonlardaki kömürlerle ilgili kantar fişlerinin düzenlenmesini müteakip, müteahhit ${v(data.muteahhit_adi, '….. …..')} ve Millî Eğitim Müdürlüğü memurlarından ${v(data.memur_adi, '….. …..')}'in anlaşmaları sonucu, kömür yüklü kamyonların, ${v(data.meydan_yeri, '….. yanındaki meydana')} sevk edilmek suretiyle, kamyonların üzerinden bir miktar kömürün boşaltıldığı, buna rağmen kömürlerden hiç alınmamışçasına okullara tesellümünün sağlandığı, söz konusu meydana boşaltılan kömürlerin de bilahare pazarlandığı belirlenmiştir.
        </p>

        <p style="text-indent: 35px; text-align: justify; margin-bottom: 10px; font-size: 10pt;">
            ${v(data.okul2_adi, '….. Okulunun')} yanındaki alana boşaltılan bahse konu kömürlerden bir miktarının da ${v(data.traktor1_surucu, '….. …..')} yönetimindeki ${v(data.traktor1_plaka, '.. … ….')} plakalı, ${v(data.traktor2_surucu, '….. …..')} yönetimindeki ${v(data.traktor2_plaka, '.. … ….')} plakalı traktörlerle ${v(data.hedef_okul, '….. ….. İlkokuluna')} götürüldüğü; gerek traktörler dolu iken gerekse boşken tartılarının yapılmamasına rağmen götürülen iki traktör kömürle ilgili olarak ${v(data.kantar_fis_no, '(…)')} numaralı kantar tartı fişlerinin ${v(data.belediye_adi, '….. Belediyesi')} kantar memuru ${v(data.kantar_memuru_adi, '….. …..')} tarafından kesilmesinin müteahhit ${v(data.muteahhit_adi, '….. …..')} tarafından sağlandığı, bu iki tartı fişi ile iki traktöre ${v(data.fis_tonaj, '(...)')} ton kömürün yüklenerek adı geçen okula götürüldüğü belirtilmesine karşılık okula ${v(data.eksik_tonaj, 'iki buçuk ton')} eksik kömür götürüldüğü anlaşılmıştır.
        </p>

        <p style="text-indent: 35px; text-align: justify; margin-bottom: 10px; font-size: 10pt;">
            Müfettişliğimizce, ${v(data.belediye_baskanligi, '….. Belediye Başkanlığı')} ile yapılan yazışma sonucunda, anılan kantar tartı fişlerinin kantar memuru ${v(data.kantar_memuru_adi, '….. …..')} tarafından düzenlenmiş olduğu bildirilmiştir.
        </p>

        <p style="text-indent: 35px; text-align: justify; margin-bottom: 10px; font-size: 10pt;">
            Belirtilen nedenlerle; ${v(data.sucun_tanimi, '"….. ….. …..  suçunu işleyen"')} ${v(data.sanik_kurumu, '….. ….. Başkanlığı')} memurlarından ${v(data.sanik_adi_soyadi)} hakkında gerekli soruşturmanın yapılabilmesi için ${v(data.tevdi_bakanlik, '….. Bakanlığına')} suç duyurusunda bulunulmasının yerinde olacağı hususundaki kanaatimizi arz ederiz.
        </p>

        <table style="width: 100%; margin-top: 30px;">
            <tr>
                <td style="text-align: center; width: 50%;">
                    <div>İmza</div>
                    <div style="margin-top: 25px;">${v(data.mufettis1_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="text-align: center; width: 50%;">
                    <div>İmza</div>
                    <div style="margin-top: 25px;">${v(data.mufettis2_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
            </tr>
        </table>

        <div style="margin-top: 20px; font-size: 9pt;">
            <strong>Ek:</strong> Dizi Pusulasına Bağlı İşlemli Dosya (${data.ek_sayfa || '…'} Sayfa/${data.ek_adet || '…'} Adet)
        </div>

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">15.4</div>
    `);
});

// 15.5 4483 sayılı Kanuna Göre Yetkili Mercie Tevdi Yazısı/Raporu Kapağı
defineDocument('15.5', 'tevdi_raporu_kapagi', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);
    const olurTarih = formatDateDots(data.olur_tarih);
    const gorevTarih = formatDateDots(data.gorev_tarih);
    const fiilBaslangic = formatDateDots(data.fiil_baslangic_tarihi);
    const fiilBitis = formatDateDots(data.fiil_bitis_tarihi);
    const sucTarihi = formatDateDots(data.suc_tarihi);

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff;', `
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 45px; background: linear-gradient(180deg, #1e3a5f 0%, #2c5282 100%); vertical-align: top; padding: 10px 5px;">
                    <div style="color: white; writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); font-size: 10pt; font-weight: bold; letter-spacing: 2px; text-align: center; height: 100%;">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="vertical-align: top; padding: 15px;">
                    <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 10px; font-size: 12pt;">ÖZEL</div>

                    <div style="text-align: center; margin-bottom: 15px;">
                        <div>T.C.</div>
                        <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div>Teftiş Kurulu</div>
                    </div>

                    <table style="width: 100%; margin-bottom: 15px;">
                        <tr>
                            <td>Sayı : ${data.sayi || '…./.., ...'}</td>
                            <td style="text-align: right;">${tarih}</td>
                        </tr>
                        <tr>
                            <td colspan="2">Konu: ${data.konu || '….. ….. …..'}</td>
                        </tr>
                    </table>

                    <h3 style="text-align: center; margin: 15px 0; font-size: 11pt; text-decoration: underline;">TEVDİ RAPORU</h3>

                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold; width: 50%;">Tevdi Yazısının/Suç Duyurusunun Sunulduğu<br>Yetkili Merciin Unvanı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.yetkili_merci || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam,<br>Makam Olurunun Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.olur_makam || 'Bakanlık Makamı'}<br>${olurTarih} - ${data.olur_sayi || '…..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Görev Emrini Veren Makam<br>Görevlendirme Emrinin Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.gorev_makam || 'Teftiş Kurulu Başkanlığı'}<br>${gorevTarih} - ${data.gorev_sayi || '…..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturma Çalışmasını<br>Yürüten Bakanlık Müfettişleri</td>
                            <td style="border: 1px solid #000; padding: 5px; white-space: pre-line;">${data.mufettisler || 'Bakanlık Başmüfettişi ….. …..\nBakanlık Müfettişi ….. …..'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İşlenen Fiilin Konusu</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.fiil_konusu || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Fiilin Yapıldığı Yer</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.fiil_yeri || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Fiilin Başladığı Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${fiilBaslangic}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Fiilin Bitirildiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${fiilBitis}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Tevdi Yazısı/Suç Duyurusunun Konusu</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.suc_duyurusu_konusu || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçla İlgili Kanun Maddesi</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.suc_kanun_maddesi || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçun İşlendiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 5px;">${sucTarihi}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçun İşlendiği Yer</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.suc_yeri || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Hakkında Duyuru Yapılanların<br>Adı ve Soyadı, Kimlik Numarası<br>Görevi/İşi ve Adresi</td>
                            <td style="border: 1px solid #000; padding: 5px; white-space: pre-line;">${data.duyuru_yapilanlar || ''}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Bu Konuda Başka Rapor Düzenlenmiş ise<br>Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 5px;">${data.baska_rapor || ''}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">15.5</div>
                </td>
            </tr>
        </table>
    `);
});

// 15.6 4483 sayılı Kanuna Göre Yetkili Mercie Yapılacak Tevdi Yazısı/Raporu
defineDocument('15.6', 'tevdi_yazisi_raporu', function (data) {
    if (!data) data = {};

    const tarih = formatDateDots(data.tarih);
    const sucTarihi = formatDateDots(data.suc_tarihi);

    // Helper function for displaying data with fallback
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.4; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10px;', `
        <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 10px;">ÖZEL</div>
        
        <div style="text-align: center; margin-bottom: 10px;">
            <div>T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div>Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; margin-bottom: 12px;">
            <tr>
                <td>Sayı : ${v(data.sayi, '…./..,…')}</td>
                <td style="text-align: right;">${v(tarih)}</td>
            </tr>
            <tr>
                <td colspan="2">Konu : ${v(data.konu, 'Tevdi Yazısı')}</td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin-bottom: 15px;">
            ${v(data.yetkili_merci, '(TEVDİ YAZISININ SUNULDUĞU YETKİLİ MERCİİN UNVANI)')}
        </div>

        <p style="font-weight: bold; margin-bottom: 6px; font-size: 10pt;">I. GİRİŞ:</p>
        <p style="text-align: justify; margin-bottom: 10px; text-indent: 25px; font-size: 9pt;">
            ${v(data.gorev_emirleri, '…./.., ... tarihli ve ….. sayılı')} görev emri gereğince ${v(data.calisma_kurumu, '….. ….. …..')} kurumunda/kuruluşunda ${v(data.calisma_tarihleri, '….. - …..')} tarihleri arasında yürütülen denetim/inceleme/soruşturma çalışmaları kapsamında;
        </p>
        <p style="text-align: justify; margin-bottom: 8px; text-indent: 25px; font-size: 9pt;">
            ${v(data.calisma_seyri, 'Çalışmalar sürecinde yapılan incelemeler sonucunda tespit edilen hususlar değerlendirilmiştir.')}
        </p>
        ${data.duzenlenen_raporlar ? `<p style="text-align: justify; margin-bottom: 6px; text-indent: 25px; font-size: 9pt;">Düzenlenen raporlar: ${v(data.duzenlenen_raporlar)}</p>` : ''}
        ${data.baska_mercilere_duyurular ? `<p style="text-align: justify; margin-bottom: 6px; text-indent: 25px; font-size: 9pt;">Başka mercilere yapılan duyurular: ${v(data.baska_mercilere_duyurular)}</p>` : ''}
        <p style="text-align: justify; margin-bottom: 10px; text-indent: 25px; font-size: 9pt;">
            ${v(data.fiil_duyurusu_gerekcesi, 'Yukarıda açıklanan süreç kapsamında elde edilen bilgi ve belgeler ışığında fiil duyurusunda bulunulması gerektiği sonucuna ulaşılmıştır.')}
        </p>

        <p style="font-weight: bold; margin-bottom: 6px; font-size: 10pt;">II. FİİL DUYURUSUNUN KONUSU:</p>
        <table style="margin-bottom: 10px; width: 100%; font-size: 9pt;">
            <tr>
                <td style="width: 150px;"><strong>Suçun Konusu</strong></td>
                <td>: ${v(data.suc_konusu, '….. ….. …..')}</td>
            </tr>
            <tr>
                <td style="vertical-align: top;"><strong>Fail</strong></td>
                <td>: ${v(data.suc_faili, '….. …..')}</td>
            </tr>
            <tr>
                <td><strong>Suçun İşlendiği Yer</strong></td>
                <td>: ${v(data.suc_yeri)}</td>
            </tr>
            <tr>
                <td><strong>Suçun İşlendiği Tarih</strong></td>
                <td>: ${v(sucTarihi)}</td>
            </tr>
            ${data.muhbir_sikayetci ? `
            <tr>
                <td style="vertical-align: top;"><strong>Muhbir/Müşteki</strong></td>
                <td>: ${v(data.muhbir_sikayetci)}</td>
            </tr>
            ` : ''}
        </table>

        <p style="font-weight: bold; margin-bottom: 6px; font-size: 10pt;">III. FİİL DUYURUSU ÖNCESİ SÜREÇTE YAPILAN ÇALIŞMALAR:</p>
        <p style="text-align: justify; margin-bottom: 6px; text-indent: 25px; font-size: 9pt;">
            ${v(data.yurutulen_calismalar, 'Denetim, inceleme-soruşturma sürecinde yürütülen çalışmalar ….. ….. ….. …..')}
        </p>
        <p style="text-align: justify; margin-bottom: 6px; text-indent: 25px; font-size: 9pt;">
            Disiplin hukuku yönünden yapılan işlemler: ${v(data.disiplin_islemleri, '….. ….. ….. …..')}
        </p>
        <p style="text-align: justify; margin-bottom: 6px; text-indent: 25px; font-size: 9pt;">
            Elde edilen delil ve emareler: ${v(data.delil_ve_emareler, '….. ….. ….. …..')}
        </p>
        <p style="text-align: justify; margin-bottom: 6px; text-indent: 25px; font-size: 9pt;">
            ${v(data.on_irdeleme, 'Elde edilen bilgi ve belgeler ilgili mevzuat dahilinde irdelenerek değerlendirilmiştir.')}
        </p>
        <p style="text-align: justify; margin-bottom: 10px; text-indent: 25px; font-size: 9pt;">
            ${v(data.gorev_kanaat, 'Yukarıda açıklanan hususlar dikkate alınarak fiil duyurusu yapılması sonucuna ulaşılmıştır.')}
        </p>

        <p style="font-weight: bold; margin-bottom: 6px; font-size: 10pt;">IV. SONUÇ VE TEKLİF:</p>
        <p style="text-align: justify; margin-bottom: 6px; text-indent: 25px; font-size: 9pt;">
            ${v(data.sonuc_gorus, 'Önceki bölümde yapılan açıklamalar sonucunda oluşan görüş ve kanaat ile ulaşılan sonuç belirtilerek;')}
        </p>
        <p style="text-align: justify; margin-bottom: 12px; text-indent: 25px; font-size: 9pt;">
            ${v(data.on_inceleme_teklifi, '4483 sayılı Kanuna göre "ön inceleme" yaptırılması gerektiği teklif olunur.')}
        </p>

        <table style="width: 100%; margin-top: 25px;">
            <tr>
                <td style="text-align: center; width: 50%;">
                    <div>İmza</div>
                    <div style="margin-top: 20px;">${v(data.mufettis1_ad_soyad, 'Adı-SOYADI')}</div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="text-align: center; width: 50%;">
                    <div>İmza</div>
                    <div style="margin-top: 20px;">${v(data.mufettis2_ad_soyad, 'Adı-SOYADI')}</div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
            </tr>
        </table>

        <div style="margin-top: 15px; font-size: 9pt;">
            <strong>Ek:</strong> Dizi Pusulasına Bağlı İşlemli Dosya (${data.ek_sayfa || '…'} Sayfa/${data.ek_adet || '…'} Adet)
        </div>

        <div style="margin-top: 12px; font-size: 8pt; border-top: 1px solid #ccc; padding-top: 8px;">
            <strong>Açıklamalar:</strong><br>
            <span style="font-style: italic;">(*) Hakkında "ön inceleme" yapılması gerektiği ifade edilen görevlilerin (disiplin yönünden alınan ifadeleri hariç) 4483 sayılı Kanuna göre ifadelerinin alınmasına dikkat edilmelidir.</span>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">15.6</div>
    `);
});
