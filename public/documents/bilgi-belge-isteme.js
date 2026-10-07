/* =====================================================
   Belgeler: Bilgi ve Belge İsteme Yazıları
   ===================================================== */

// 4.1 Bilgi ve/veya Belge İsteme Yazısı (Varyant 1)
defineDocument('4.1', 'bilgi_belge_isteme', function (data) {
    const okulTamAd = `${data.okul_adi || '…..'} ${data.okul_turu || 'Mesleki ve Teknik Anadolu Lisesi'}`;
    const donemYillar = `${data.donem_baslangic || '….'} - ${data.donem_bitis || '….'}`;
    const islemTipi = data.islem_tipi || 'incelenmesi';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.8; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-word; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; margin-bottom: 10px; font-weight: bold;">ÖZEL</div>
        
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 20px;">
            <tr>
                <td style="width: 80px;">Sayı</td>
                <td style="width: 15px;">:</td>
                <td>${data.sayi || '…./…,…'}</td>
                <td style="text-align: right;">${formatDateDots(data.tarih)}</td>
            </tr>
            <tr>
                <td>Konu</td>
                <td>:</td>
                <td colspan="2">Bilgi/Belge İsteme</td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin: 30px 0;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="margin-bottom: 20px;">
            <table style="width: 100%;">
                <tr>
                    <td style="vertical-align: top; width: 50px; font-weight: bold;">İlgi :</td>
                    <td>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 20px;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince <strong>${okulTamAd}</strong> Döner Sermaye İşletmesinin <strong>${donemYillar}</strong> yıllarına ait hesaplarının <strong>${islemTipi}</strong> sırasında, anılan döner sermaye işletmesinin söz konusu dönemdeki evrakının Sayıştay Başkanlığına gönderildiği anlaşılmıştır.
        </p>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 20px;">
            İnceleme/Soruşturmanın/ön incelemenin zamanında ve sağlıklı bir şekilde sonuçlandırılabilmesi için <strong>${okulTamAd}</strong> Döner Sermaye işletmesinin <strong>${donemYillar}</strong> yıllarına ilişkin evrakının Sayıştay Başkanlığından temin edilmesi gerekmektedir.
        </p>

        <p style="text-align: justify; margin-bottom: 40px;">
            Arz ederim.
        </p>

        <div style="text-align: right; margin-top: 60px;">
            <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px;">İmza</div>
                <div><strong>${data.mufettis_ad_soyad || 'Adı SOYADI'}</div>
                <div>(${data.mufettis_kod || 'KOD'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>
    `);
});

// 4.2 Bilgi ve/veya Belge İsteme Yazısı (Varyant 2)
defineDocument('4.2', 'bilgi_belge_isteme_varyant2', function (data) {
    const okulTamAd = `${data.okul_adi || '….. …..'} ${data.okul_turu || 'Mesleki ve Teknik Anadolu Lisesi'}`;
    const vergiDairesiTam = `${data.vergi_dairesi || '….. …..'} Vergi Dairesi`;
    const yonelimTam = `${(data.yonelim_yeri || '…..').toUpperCase()} ${data.yonelim_makami || 'VALİLİĞİNE'}`;

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; margin-bottom: 10px; font-weight: bold;">ÖZEL</div>
        
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 15px;">
            <tr>
                <td style="width: 80px;">Sayı</td>
                <td style="width: 15px;">:</td>
                <td>${data.sayi || '…./…,…'}</td>
                <td style="text-align: right;">${formatDateDots(data.tarih)}</td>
            </tr>
            <tr>
                <td>Konu</td>
                <td>:</td>
                <td colspan="2">Bilgi ve Belge İsteme</td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin: 30px 0;">
            <strong>${yonelimTam}</strong>
        </div>

        <div style="margin-bottom: 20px;">
            <table style="width: 100%;">
                <tr>
                    <td style="vertical-align: top; width: 50px; font-weight: bold;">İlgi :</td>
                    <td>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 15px;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen <strong>${data.islem_tipi || 'inceleme'}</strong> çalışmaları kapsamında; <strong>${okulTamAd}</strong> Döner Sermaye İşletmesi faaliyetleri dolayısıyla fazla çalışma yaptırılan personele <strong>${formatDateDots(data.tarih_baslangic)}-${formatDateDots(data.tarih_bitis)}</strong> tarihleri arasında yapılan ödemelerden alınan gelir ve damga vergisi kesintilerin <strong>${vergiDairesiTam} Müdürlüğüne</strong> yatırılıp yatırılmadığı bilgisine ihtiyaç duyulmuştur.
        </p>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 25px;">
            Bu itibarla; <strong>${okulTamAd} Müdürlüğünce</strong>, <strong>${formatDateDots(data.tarih_baslangic)}-${formatDateDots(data.tarih_bitis)}</strong> tarihleri arasında yatırılan gelir ve damga vergileri tutarlarının, ilgili tahakkuk fişi, vergi makbuzu fotokopileri ile birlikte bir cetvel hâlinde Müfettişliğimizin aşağıdaki adresine bildirilmesi hususunda gereğini rica ederim.
        </p>

        <div style="text-align: right; margin-top: 40px; margin-bottom: 25px;">
            <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px;">İmza</div>
                <div><strong>${data.mufettis_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis_kod || 'KOD'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 25px; margin-bottom: 20px;">
            <div style="font-weight: bold; margin-bottom: 5px;">ADRES:</div>
            <div>${data.adres || '….. ….. ….. ….. ….. ….. ….. ….. ….. …..<br>….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</div>
        </div>

        <div style="border-top: 1px solid #000; padding-top: 10px; margin-top: 20px; font-size: 10pt; font-style: italic;">
            <div style="font-weight: bold; margin-bottom: 5px;">Açıklama:</div>
            <div>Bilgi veya belge istemi Muhakkik/Ön İncelemeci tarafından yapıldığında, yazının başlık kısmına görevli oldukları kurumun adı, yazının yazıldığı kısma ise görevlendiren/olur veren makamın/yetkili merciin adı, ilgi kısmına kendisine verilen olur ve görev emirleri yazılmalıdır.</div>
        </div>
    `);
});

// 4.3 Bilgi ve/veya Belge İsteme Yazısı (Varyant 3)
defineDocument('4.3', 'dosya_bilgi_belge_isteme', function (data) {
    const mahkemeTam = `${data.mahkeme_adi || '….. …..'} MAHKEMESİNE`;
    const islemTipiAciklama = data.islem_tipi === '4483 sayılı Kanun kapsamında ön inceleme'
        ? '(4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine göre yürütülmekte bulunan ön inceleme çalışmaları kapsamında)'
        : '';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; margin-bottom: 10px; font-weight: bold;">ÖZEL</div>
        
        <div style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 15px;">
            <tr>
                <td style="width: 80px;">Sayı</td>
                <td style="width: 15px;">:</td>
                <td>${data.sayi || '…./…,…'}</td>
                <td style="text-align: right;">${formatDateDots(data.tarih)}</td>
            </tr>
            <tr>
                <td>Konu</td>
                <td>:</td>
                <td colspan="2">Dosya Hakkında Bilgi/Belge İsteme</td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin: 20px 0;">
            ${mahkemeTam}
        </div>

        <div style="margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="vertical-align: top; width: 50px; font-weight: bold;">İlgi :</td>
                    <td>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 20px;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen <strong>${data.islem_tipi || 'disiplin soruşturması'}</strong> kapsamında ${islemTipiAciklama} <strong>${data.kisi_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No.: <strong>${data.kisi_tc || '…..'}</strong>) hakkında <strong>${data.suclar || '….. ….. suçlarından/hususlarından'}</strong> dolayı Mahkemenizce <strong>${data.esas_no || '…..'} Esas No'lu</strong> dosya üzerinden yürütülen dava ve işler hakkında bilgiye ihtiyaç duyulmuştur.
        </p>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 40px;">
            Sözü edilen dosyanın (bilgi ve belgelerin) onaylı bir örneğinin tarafımıza verilmesi hususunda gereğini arz ederiz.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; text-align: center; margin-top: 60px;">
            <div>
                <div style="margin-bottom: 20px;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
            <div>
                <div style="margin-bottom: 20px;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>
    `);
});

// 4.4 Bilgi ve/veya Belge İsteme Yazısı (Varyant 4)
defineDocument('4.4', 'bassavcilik_bilgi_belge_isteme', function (data) {
    const bassavcilikTam = `${(data.bassavcilik_yeri || '….').toUpperCase()} CUMHURİYET BAŞSAVCILIĞINA`;
    const islemTipiAciklama = data.islem_tipi === '4483 sayılı Kanun kapsamında ön inceleme'
        ? '(4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine göre yürütülmekte bulunan ön inceleme çalışmaları kapsamında)'
        : '';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word; margin: 0 auto;', `
        <div style="text-align: center; margin-bottom: 10px; font-weight: bold;">ÖZEL</div>
        
        <div style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <table style="width: 100%; font-size: 12pt; margin-bottom: 15px;">
            <tr>
                <td style="width: 80px;">Sayı</td>
                <td style="width: 15px;">:</td>
                <td>${data.sayi || '…./…,…'}</td>
                <td style="text-align: right;">${formatDateDots(data.tarih)}</td>
            </tr>
            <tr>
                <td>Konu</td>
                <td>:</td>
                <td colspan="2">Dosya Hakkında Bilgi/Belge İsteme</td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; margin: 20px 0;">
            <strong>${bassavcilikTam}</strong>
        </div>

        <div style="margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="vertical-align: top; width: 50px; font-weight: bold;">İlgi :</td>
                    <td>
                        <div>a) Bakanlık Makamının ${formatDateDots(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDateDots(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 40px;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen <strong>${data.islem_tipi || 'disiplin soruşturması'}</strong> kapsamında ${islemTipiAciklama} <strong>${data.kisi_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No.: <strong>${data.kisi_tc || '…..'}</strong>) hakkında <strong>${data.suclar || '….. ….. ….. suçlarından/hususlarından'}</strong> dolayı Başsavcılığınızca yürütülen soruşturma bulunup bulunmadığı, bulunması halinde adı geçen ile ilgili bilgi ve belgelerin (dosyanın) onaylı bir örneğini tarafımıza verilmesi hususunda gereğini arz ederiz.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; text-align: center; margin-top: 60px;">
            <div>
                <div style="margin-bottom: 20px;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
            <div>
                <div style="margin-bottom: 20px;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>
    `);
});
