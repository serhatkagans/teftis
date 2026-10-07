/* =====================================================
   Belgeler: Ön Rapor
   ===================================================== */

// 11.1 Ön Rapor Kapağı
defineDocument('11.1', 'on_rapor_kapagi', function (data) {
    if (!data) data = {};

    const tarih = data.tarih ? formatDateDots(data.tarih) : 'gg.aa.yyyy';
    const makamOluruTarih = data.makam_oluru_tarih ? formatDateDots(data.makam_oluru_tarih) : 'gg.aa.yyyy';
    const gorevEmriTarih = data.gorev_emri_tarih ? formatDateDots(data.gorev_emri_tarih) : 'gg.aa.yyyy';
    const baslamaTarihi = data.baslama_tarihi ? formatDateDots(data.baslama_tarihi) : '';

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
                        ÖN RAPOR
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
                            <td style="border: 1px solid #000; padding: 6px; min-height: 60px;">
                                ${data.konu_detay || `Bakanlık Makamının ${makamOluruTarih} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı olurunda yer olan "….. ….. ….." hususları`}
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
                    </table>

                    <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">11.1</div>
                </td>
            </tr>
        </table>
    `);
});

// 11.2 Ön Rapor
defineDocument('11.2', 'on_rapor', function (data) {
    if (!data) data = {};

    const tarih = data.tarih ? formatDateDots(data.tarih) : 'gg.aa.yyyy';
    const mufettis1Unvan = data.mufettis1_unvan || 'Bakanlık Başmüfettişi';
    const mufettis2Unvan = data.mufettis2_unvan || 'Bakanlık Müfettişi';

    return createDocumentElement('font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;', `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px; text-decoration: underline;">
            ÖN RAPOR
        </div>

        <div style="text-align: right; margin-bottom: 15px; font-size: 10pt;">
            <strong>Rapor No:</strong> ${data.rapor_no || '…../…..'}<br>
            <strong>Tarih:</strong> ${tarih}
        </div>

        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 8px; border-bottom: 1px solid #000; padding-bottom: 3px;">
                I. GİRİŞ
            </div>
            <div style="text-align: justify; line-height: 1.5; font-size: 10pt;">
                ${data.giris || '[Giriş bölümü]'}
            </div>
        </div>

        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 8px; border-bottom: 1px solid #000; padding-bottom: 3px;">
                II. TESPİTLER
            </div>
            <div style="text-align: justify; line-height: 1.5; font-size: 10pt; white-space: pre-wrap;">
                ${data.tespitler || '[Tespitler]'}
            </div>
        </div>

        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 8px; border-bottom: 1px solid #000; padding-bottom: 3px;">
                III. DEĞERLENDİRME
            </div>
            <div style="text-align: justify; line-height: 1.5; font-size: 10pt; white-space: pre-wrap;">
                ${data.degerlendirme || '[Değerlendirme]'}
            </div>
        </div>

        <div style="margin-bottom: 25px;">
            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 8px; border-bottom: 1px solid #000; padding-bottom: 3px;">
                IV. SONUÇ VE KANAAT
            </div>
            <div style="text-align: justify; line-height: 1.5; font-size: 10pt; white-space: pre-wrap;">
                ${data.sonuc || '[Sonuç ve kanaat]'}
            </div>
        </div>

        <div style="display: flex; justify-content: center; gap: 60px; margin-top: 30px;">
            <div style="text-align: center; font-size: 10pt;">
                <div>${mufettis1Unvan}</div>
                <div style="margin-top: 5px;">${data.mufettis1_ad_soyad || '….. …..'}</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; font-size: 10pt;">
                <div>${mufettis2Unvan}</div>
                <div style="margin-top: 5px;">${data.mufettis2_ad_soyad}</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">
            11.2
        </div>
    `);
});

// =====================================================
// 11.1 Ön Rapor Kapağı için Word (.docx) dışa aktarımı
// =====================================================
async function generateWord111() {
    // Auth kontrolü
    if (!AuthService || !AuthService.isLoggedIn()) {
        showToast('Word belgesi oluşturmak için giriş yapmalısınız', 'error');
        window.location.hash = '#/login';
        return;
    }

    if (!elements.form.checkValidity()) {
        elements.form.reportValidity();
        return;
    }

    elements.loadingOverlay.classList.remove('hidden');
    const loadingText = elements.loadingOverlay.querySelector('p');
    if (loadingText) loadingText.textContent = 'Word belgesi oluşturuluyor...';

    try {
        const data = collectFormData();

        const formatLongDate = (dateStr) => {
            if (!dateStr) return 'gg.aa.yyyy';
            const date = new Date(dateStr);
            return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        };

        const tarih = data.tarih ? formatLongDate(data.tarih) : 'gg.aa.yyyy';
        const makamOluruTarih = data.makam_oluru_tarih ? formatLongDate(data.makam_oluru_tarih) : 'gg.aa.yyyy';
        const gorevEmriTarih = data.gorev_emri_tarih ? formatLongDate(data.gorev_emri_tarih) : 'gg.aa.yyyy';
        const baslamaTarihi = data.baslama_tarihi ? formatLongDate(data.baslama_tarihi) : '';

        const mufettis1Unvan = data.mufettis1_unvan || 'Bakanlık Başmüfettişi';
        const mufettis2Unvan = data.mufettis2_unvan || 'Bakanlık Müfettişi';

        const { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun, WidthType, AlignmentType, VerticalAlign, BorderStyle, TextDirection, ShadingType, HeightRule } = docx;

        // Create the document - Full page layout with blue strip on left
        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 400,
                            right: 400,
                            bottom: 400,
                            left: 400,
                        },
                    },
                },
                children: [
                    // Main full-page table with blue strip on left
                    new Table({
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                            insideVertical: { style: BorderStyle.NONE },
                            insideHorizontal: { style: BorderStyle.NONE },
                        },
                        rows: [
                            new TableRow({
                                height: { value: 13200, rule: HeightRule.EXACT },
                                children: [
                                    // Left blue column - full height with vertical text
                                    new TableCell({
                                        width: { size: 500, type: WidthType.DXA },
                                        shading: { fill: "0066CC", type: ShadingType.SOLID, color: "0066CC" },
                                        verticalAlign: VerticalAlign.CENTER,
                                        textDirection: TextDirection.BOTTOM_TO_TOP_LEFT_TO_RIGHT,
                                        borders: {
                                            top: { style: BorderStyle.NONE },
                                            bottom: { style: BorderStyle.NONE },
                                            left: { style: BorderStyle.NONE },
                                            right: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
                                        },
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: "Teftiş Kurulu Başkanlığı",
                                                        bold: true,
                                                        color: "FFFFFF",
                                                        size: 22,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    // Right content area
                                    new TableCell({
                                        borders: {
                                            top: { style: BorderStyle.NONE },
                                            bottom: { style: BorderStyle.NONE },
                                            left: { style: BorderStyle.NONE },
                                            right: { style: BorderStyle.NONE },
                                        },
                                        margins: {
                                            top: 300,
                                            bottom: 200,
                                            left: 300,
                                            right: 300,
                                        },
                                        children: [
                                            // ÖZEL Header
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: "ÖZEL",
                                                        bold: true,
                                                        underline: {},
                                                        size: 24,
                                                    }),
                                                ],
                                                spacing: { after: 150 },
                                            }),
                                            // T.C. Header
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [new TextRun({ text: "T.C.", size: 22 })],
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [new TextRun({ text: "MİLLÎ EĞİTİM BAKANLIĞI", bold: true, size: 24 })],
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [new TextRun({ text: "Teftiş Kurulu", size: 22 })],
                                                spacing: { after: 250 },
                                            }),
                                            // Sayı/Konu and Date Table
                                            new Table({
                                                width: { size: 100, type: WidthType.PERCENTAGE },
                                                borders: {
                                                    top: { style: BorderStyle.NONE },
                                                    bottom: { style: BorderStyle.NONE },
                                                    left: { style: BorderStyle.NONE },
                                                    right: { style: BorderStyle.NONE },
                                                    insideHorizontal: { style: BorderStyle.NONE },
                                                    insideVertical: { style: BorderStyle.NONE },
                                                },
                                                rows: [
                                                    new TableRow({
                                                        children: [
                                                            new TableCell({
                                                                width: { size: 70, type: WidthType.PERCENTAGE },
                                                                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                                                                children: [
                                                                    new Paragraph({ children: [new TextRun({ text: `Sayı : ${data.sayi || '…./.., ...'}`, size: 20 })] }),
                                                                    new Paragraph({ children: [new TextRun({ text: `Konu : ${data.konu || '….. ….. …..'}`, size: 20 })] }),
                                                                ],
                                                            }),
                                                            new TableCell({
                                                                width: { size: 30, type: WidthType.PERCENTAGE },
                                                                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                                                                children: [
                                                                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: tarih, size: 20 })] }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({ spacing: { after: 300 } }),
                                            // ÖN RAPOR Title
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [new TextRun({ text: "ÖN RAPOR", bold: true, underline: {}, size: 28 })],
                                                spacing: { after: 300 },
                                            }),
                                            // Inner table - first section
                                            new Table({
                                                width: { size: 100, type: WidthType.PERCENTAGE },
                                                borders: {
                                                    top: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    left: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    bottom: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    right: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                },
                                                rows: [
                                                    createWordTableRow("İnceleme/Soruşturma Olurunu Veren Makam", data.olur_veren_makam || "Bakanlık Makamı"),
                                                    createWordTableRow("Makam Olurunun Tarih ve Sayısı", `${makamOluruTarih} - ${data.makam_oluru_sayi || '…..'}`),
                                                    createWordTableRow("Görev Emrini Veren Makam", data.gorev_emri_veren || "Teftiş Kurulu Başkanlığı"),
                                                    createWordTableRow("Görev Emrinin Tarihi ve Sayısı", `${gorevEmriTarih} - ${data.gorev_emri_sayi || '…..'}`),
                                                    createWordTableRow("İnceleme/Soruşturma Çalışmalarını\nYürüten Bakanlık Müfettişleri",
                                                        `${mufettis1Unvan} ${data.mufettis1_ad_soyad || '….. …..'}\n${data.mufettis2_ad_soyad ? `${mufettis2Unvan} ${data.mufettis2_ad_soyad}` : ''}`),
                                                    createWordTableRowLarge("İnceleme/Soruşturmanın Konusu",
                                                        data.konu_detay || `Bakanlık Makamının ${makamOluruTarih} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı olurunda yer alan "….. ….. ….." hususları`),
                                                ],
                                            }),
                                            new Paragraph({ spacing: { after: 200 } }),
                                            // Inner table - second section
                                            new Table({
                                                width: { size: 100, type: WidthType.PERCENTAGE },
                                                borders: {
                                                    top: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    left: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    bottom: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    right: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                    insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "auto" },
                                                },
                                                rows: [
                                                    createWordTableRow("Fiil ve Hâlin İşlendiği Tarih", data.fiil_tarihi || ""),
                                                    createWordTableRow("Fiil ve Hâlin İşlendiğinin Öğrenildiği Tarih", data.ogrenilme_tarihi || ""),
                                                    createWordTableRow("İnceleme/Soruşturmanın Yapıldığı Yer", data.yapildigi_yer || ""),
                                                    createWordTableRow("İnceleme/Soruşturmanın Başlama Tarihi", baslamaTarihi),
                                                ],
                                            }),
                                            new Paragraph({ spacing: { after: 100 } }),
                                            // Footer 11.1
                                            new Paragraph({
                                                alignment: AlignmentType.RIGHT,
                                                children: [new TextRun({ text: "11.1", size: 16, color: "666666" })],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }],
        });

        // Generate and download
        const blob = await Packer.toBlob(doc);
        saveAs(blob, `on_rapor_kapagi_${data.tarih || 'tarihsiz'}.docx`);

        if (window.showToast) showToast('Word belgesi oluşturuldu!', 'success');

    } catch (error) {
        console.error('Word generation error:', error);
        alert('Word belgesi oluşturulurken bir hata oluştu: ' + error.message);
    } finally {
        elements.loadingOverlay.classList.add('hidden');
        const loadingText = elements.loadingOverlay.querySelector('p');
        if (loadingText) loadingText.textContent = 'PDF oluşturuluyor...';
    }
}

function createWordTableRow(label, value) {
    const { TableRow, TableCell, Paragraph, TextRun, WidthType, BorderStyle, VerticalAlign, convertInchesToTwip } = docx;
    return new TableRow({
        height: { value: 500, rule: "atLeast" },
        children: [
            new TableCell({
                width: { size: 45, type: WidthType.PERCENTAGE },
                verticalAlign: VerticalAlign.CENTER,
                margins: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                },
                borders: {
                    top: { style: BorderStyle.SINGLE, size: 1 },
                    bottom: { style: BorderStyle.SINGLE, size: 1 },
                    left: { style: BorderStyle.SINGLE, size: 1 },
                    right: { style: BorderStyle.SINGLE, size: 1 },
                },
                children: [new Paragraph({
                    spacing: { before: 60, after: 60 },
                    children: [new TextRun({ text: label, bold: true, size: 18 })]
                })],
            }),
            new TableCell({
                width: { size: 55, type: WidthType.PERCENTAGE },
                verticalAlign: VerticalAlign.CENTER,
                margins: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                },
                borders: {
                    top: { style: BorderStyle.SINGLE, size: 1 },
                    bottom: { style: BorderStyle.SINGLE, size: 1 },
                    left: { style: BorderStyle.SINGLE, size: 1 },
                    right: { style: BorderStyle.SINGLE, size: 1 },
                },
                children: [new Paragraph({
                    spacing: { before: 60, after: 60 },
                    children: [new TextRun({ text: value, size: 18 })]
                })],
            }),
        ],
    });
}

function createWordTableRowLarge(label, value) {
    const { TableRow, TableCell, Paragraph, TextRun, WidthType, BorderStyle, VerticalAlign } = docx;
    return new TableRow({
        height: { value: 1500, rule: "atLeast" },
        children: [
            new TableCell({
                width: { size: 45, type: WidthType.PERCENTAGE },
                verticalAlign: VerticalAlign.TOP,
                margins: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                },
                borders: {
                    top: { style: BorderStyle.SINGLE, size: 1 },
                    bottom: { style: BorderStyle.SINGLE, size: 1 },
                    left: { style: BorderStyle.SINGLE, size: 1 },
                    right: { style: BorderStyle.SINGLE, size: 1 },
                },
                children: [new Paragraph({
                    spacing: { before: 60, after: 60 },
                    children: [new TextRun({ text: label, bold: true, size: 18 })]
                })],
            }),
            new TableCell({
                width: { size: 55, type: WidthType.PERCENTAGE },
                verticalAlign: VerticalAlign.TOP,
                margins: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                },
                borders: {
                    top: { style: BorderStyle.SINGLE, size: 1 },
                    bottom: { style: BorderStyle.SINGLE, size: 1 },
                    left: { style: BorderStyle.SINGLE, size: 1 },
                    right: { style: BorderStyle.SINGLE, size: 1 },
                },
                children: [new Paragraph({
                    spacing: { before: 60, after: 60 },
                    children: [new TextRun({ text: value, size: 18 })]
                })],
            }),
        ],
    });
}
