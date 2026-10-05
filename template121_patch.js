// Template Checkbox Sistemi - Tüm şablonlar için
// Seçilen maddeler otomatik olarak ilgili textarea'ya eklenir

(function () {
    // Field ID to textarea ID mapping
    const fieldMappings = {
        'tespit_secenekleri': 'tespit_hususlar',
        'iddia_secenekleri': 'tespit_hususlar',
        'konu_secenekleri': 'konusu_aciklama',
        'yontem_secenekleri': 'yontem_surec',
        'degerlendirme_secenekleri': 'degerlendirme',
        'sonuc_secenekleri': 'sonuc_kanaat_teklif'
    };

    // toggleCheckboxOption fonksiyonunu global yap
    window.toggleCheckboxOption = function (element, fieldId) {
        const checkbox = element.querySelector('input[type="checkbox"]');
        if (!checkbox) return;

        // Tıklanan element checkbox değilse toggle et
        if (event && event.target !== checkbox) {
            checkbox.checked = !checkbox.checked;
        }

        // Header ise seçimi engelle
        if (checkbox.value.startsWith('header_')) {
            checkbox.checked = false;
            return;
        }

        // İlgili textarea'yı bul
        let targetTextareaId = fieldMappings[fieldId];
        if (!targetTextareaId) {
            // Fallback: _secenekleri -> _hususlar
            targetTextareaId = fieldId.replace('_secenekleri', '_hususlar');
        }

        const textarea = document.getElementById(targetTextareaId);
        if (!textarea) {
            console.warn('Textarea bulunamadı:', fieldId, '->', targetTextareaId);
            return;
        }

        // Seçili checkbox'ların template'lerini topla
        const checkboxes = document.querySelectorAll(`input[name="${fieldId}"]:checked`);
        const templates = [];

        checkboxes.forEach(cb => {
            // Header değilse ve template varsa ekle
            if (!cb.value.startsWith('header_') && cb.dataset.template) {
                // Template'deki \\n karakterlerini gerçek satır sonuna çevir
                const template = cb.dataset.template.replace(/\\n/g, '\n').replace(/&quot;/g, '"');
                templates.push(template);
            }
        });

        // Textarea'yı güncelle - bölüme göre formatla
        if (templates.length > 0) {
            let combinedText = templates.join('\n');

            if (fieldId === 'tespit_secenekleri' || fieldId === 'iddia_secenekleri') {
                textarea.value = combinedText + '\nhususları ortaya çıkmıştır.';
            } else if (fieldId === 'konu_secenekleri') {
                textarea.value = 'İlgi (a)\'da kayıtlı Makam Olurunda yer alan;\n' + combinedText + '\niddiaları inceleme/soruşturmanın konusunu oluşturmaktadır (Ek: …/…).';
            } else if (fieldId === 'sonuc_secenekleri') {
                textarea.value = 'Raporun önceki bölümlerinde açıklandığı üzere İlgi (a)\'da kayıtlı Makam Olurunda yer alan:\n\n' + combinedText + '\n\nuygun olacağı,\nyönündeki kanaatimizi arz ederiz.';
            } else {
                textarea.value = combinedText;
            }
        } else {
            textarea.value = '';
        }

        // Preview'ı güncelle
        if (typeof updatePreview === 'function') {
            updatePreview();
        }
    };

    console.log('Template checkbox sistemi yüklendi (tüm şablonlar destekleniyor).');
})();
