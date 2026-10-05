/* =====================================================
   Teftiş Kurulu Başkanlığı İnceleme ve Soruşturma Modülü - Application Logic
   Multi-Template Support
   ===================================================== */

// Template Definitions
const TEMPLATES = {
    '1.1': {
        id: '1.1',
        name: 'Şikâyetçi İfade Tutanağı',
        category: 'İfade Tutanakları',
        sections: [
            {
                title: 'Genel Bilgiler',
                icon: '📅',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true },
                    { id: 'saat', label: 'Saat', type: 'time', required: true },
                    { id: 'kurum_adi', label: 'Kurum Adı', type: 'text', required: true, placeholder: 'örn: İl Milli Eğitim Müdürlüğü' }
                ]
            },
            {
                title: 'Şikâyetçi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'sikayetci_adi', label: 'Adı ve Soyadı', type: 'text', required: true },
                    { id: 'sikayetci_tc', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, placeholder: 'TC No / T.C.' },
                    { id: 'sikayetci_ana_baba', label: 'Ana ve Baba Adı', type: 'text' },
                    { id: 'sikayetci_dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text' },
                    { id: 'sikayetci_gorev_meslek', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'sikayetci_is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', fullWidth: true, rows: 2 },
                    { id: 'sikayetci_ikamet_adresi', label: 'İkametgâh Adresi', type: 'textarea', fullWidth: true, rows: 2 },
                    { id: 'sikayetci_telefon', label: 'Telefon (Cep-Ev-İş yeri)', type: 'tel', placeholder: '05XX XXX XX XX' }
                ]
            },
            {
                title: 'Dilekçe Bilgileri (Soru 1 İçin)',
                icon: '📝',
                fields: [
                    { id: 'dilekce_makam', label: 'Dilekçe Hitabı (Makam)', type: 'text', placeholder: 'örn: Valilik Makamına / İl MEM', fullWidth: true },
                    { id: 'dilekce_tarih', label: 'Dilekçe Tarihi', type: 'date' },
                    { id: 'dilekce_imza_sahibi', label: 'Dilekçedeki İsim/İmza', type: 'text', placeholder: 'Dilekçe kime ait görünüyor?' },
                    { id: 'dilekce_cevap', label: 'Cevap 1 (Dilekçe Sorusuna Yanıt)', type: 'textarea', rows: 3, placeholder: 'Bana gösterdiğiniz dilekçedeki imza bana aittir / değildir...', fullWidth: true }
                ]
            },
            {
                title: 'Sorular ve Cevaplar',
                icon: '❓',
                isQA: true
            },
            {
                title: 'Muhakkik Bilgileri',
                icon: '🏛️',
                fields: [
                    { id: 'muhakkik1_adi', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'muhakkik1_unvan', label: '1. Müfettiş Unvanı', type: 'text', placeholder: 'örn: Maarif Müfettişi' },
                    { id: 'muhakkik1_kod', label: '1. Müfettiş Kodu', type: 'text' },
                    { id: 'muhakkik2_adi', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'muhakkik2_unvan', label: '2. Müfettiş Unvanı', type: 'text' },
                    { id: 'muhakkik2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.2': {
        id: '1.2',
        name: 'Tanık İfade Tutanağı (Yeminsiz)',
        category: 'İfade Tutanakları',
        sections: [
            {
                title: 'Genel Bilgiler',
                icon: '📅',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true },
                    { id: 'saat', label: 'Saat', type: 'time', required: true },
                    { id: 'kurum_adi', label: 'Kurum Adı', type: 'text', required: true, placeholder: 'örn: İl Milli Eğitim Müdürlüğü' }
                ]
            },
            {
                title: 'Tanık Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'tanik_adi', label: 'Adı ve Soyadı', type: 'text', required: true },
                    { id: 'tanik_tc', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, placeholder: 'TC No / T.C.' },
                    { id: 'tanik_ana_baba', label: 'Ana ve Baba Adı', type: 'text' },
                    { id: 'tanik_dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text' },
                    { id: 'tanik_gorev_meslek', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'tanik_is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', fullWidth: true, rows: 2 },
                    { id: 'tanik_ikamet_adresi', label: 'İkametgâh Adresi', type: 'textarea', fullWidth: true, rows: 2 },
                    { id: 'tanik_telefon', label: 'Telefon (Cep-Ev-İş yeri)', type: 'tel', placeholder: '05XX XXX XX XX' }
                ]
            },
            {
                title: 'Sorular ve Cevaplar',
                icon: '❓',
                isQA: true
            },
            {
                title: 'Ek Beyan',
                icon: '📄',
                fields: [
                    { id: 'ek_beyan', label: 'Varsa ek beyanlar', type: 'textarea', rows: 3, placeholder: 'Tanığın eklemek istediği beyanlar...', fullWidth: true }
                ]
            },
            {
                title: 'Muhakkik Bilgileri',
                icon: '🏛️',
                fields: [
                    { id: 'muhakkik1_adi', label: '1. Muhakkik Adı Soyadı', type: 'text', required: true },
                    { id: 'muhakkik1_unvan', label: '1. Muhakkik Unvanı', type: 'text', placeholder: 'örn: Maarif Müfettişi' },
                    { id: 'muhakkik1_kod', label: '1. Muhakkik Kodu', type: 'text' },
                    { id: 'muhakkik2_adi', label: '2. Muhakkik Adı Soyadı', type: 'text' },
                    { id: 'muhakkik2_unvan', label: '2. Muhakkik Unvanı', type: 'text' },
                    { id: 'muhakkik2_kod', label: '2. Muhakkik Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.3': {
        id: '1.3',
        name: 'Tanık İfade Tutanağı (Yeminli)',
        category: 'İfade Tutanakları',
        sections: [
            {
                title: 'Genel Bilgiler',
                icon: '📅',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true },
                    { id: 'saat', label: 'Saat', type: 'time', required: true },
                    { id: 'kurum_adi', label: 'Kurum Adı', type: 'text', required: true, placeholder: 'örn: Fatih', fullWidth: true },
                    { id: 'kurum_turu', label: 'Kurum Türü', type: 'select', required: true, options: ['İlkokulundaki', 'Ortaokulundaki', 'Lisesindeki', 'Müdürlüğündeki'] }
                ]
            },
            {
                title: 'Tanık Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'tanik_adi', label: 'Adı ve Soyadı', type: 'text', required: true },
                    { id: 'tanik_tc', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, placeholder: 'TC No / T.C.' },
                    { id: 'tanik_ana_baba', label: 'Ana ve Baba Adı', type: 'text' },
                    { id: 'tanik_dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text' },
                    { id: 'tanik_gorev_meslek', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'tanik_is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', fullWidth: true, rows: 2 },
                    { id: 'tanik_ikamet_adresi', label: 'İkametgâh Adresi', type: 'textarea', fullWidth: true, rows: 2 },
                    { id: 'tanik_telefon', label: 'Telefon (Cep-Ev-İş yeri)', type: 'tel', placeholder: '05XX XXX XX XX' }
                ]
            },
            {
                title: 'Sorular ve Cevaplar',
                icon: '❓',
                isQA: true
            },
            {
                title: 'Muhakkik Bilgileri',
                icon: '🏛️',
                fields: [
                    { id: 'muhakkik1_adi', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'muhakkik1_unvan', label: '1. Müfettiş Unvanı', type: 'text', placeholder: 'örn: Bakanlık Müfettişi', value: 'Bakanlık Müfettişi' },
                    { id: 'muhakkik1_kod', label: '1. Müfettiş Kodu', type: 'text' },
                    { id: 'muhakkik2_adi', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'muhakkik2_unvan', label: '2. Müfettiş Unvanı', type: 'text', placeholder: 'örn: Bakanlık Müfettişi', value: 'Bakanlık Müfettişi' },
                    { id: 'muhakkik2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },

    '2.1': {
        id: '2.1',
        name: 'Disiplin Soruşturmasında Tanığın Yazılı Olarak Davet Edilmesi – Çağrı Kâğıdı',
        category: 'Çağrı Kâğıtları',
        sections: [
            {
                title: 'Üst Bilgiler',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', required: true, placeholder: '…../….,…' },
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true },
                    { id: 'konu', label: 'Konu', type: 'text', required: true, placeholder: 'Tanıklığınız' }
                ]
            },
            {
                title: 'Muhatap Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'muhatap_ad_soyad', label: 'Muhatap Adı Soyadı', type: 'text', required: true },
                    { id: 'adres_satir1', label: 'Adres Satır 1', type: 'text', required: true, fullWidth: true },
                    { id: 'adres_satir2', label: 'Adres Satır 2', type: 'text', fullWidth: true }
                ]
            },
            {
                title: 'Davet Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'kurum_bilgisi', label: 'Kurum Bilgisi', type: 'text', required: true, placeholder: 'örn: Fatih İlkokulu Müdürlüğü', fullWidth: true },
                    { id: 'davet_tarihi', label: 'Davet Tarihi', type: 'date', required: true },
                    { id: 'davet_gunu', label: 'Davet Günü', type: 'text', required: true, placeholder: 'örn: Pazartesi' },
                    { id: 'davet_saat', label: 'Davet Saati', type: 'time', required: true },
                    { id: 'davet_yeri', label: 'Davet Yeri', type: 'text', required: true, placeholder: 'örn: İl Milli Eğitim Müdürlüğü', fullWidth: true }
                ]
            },
            {
                title: 'İmza Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis_ad_soyad', label: 'Müfettiş Adı Soyadı', type: 'text', required: true, placeholder: 'örn: Ahmet YILMAZ' },
                    { id: 'mufettis_kod', label: 'Müfettiş Kodu', type: 'text', required: true, placeholder: 'örn: (12345)' }
                ]
            }
        ]
    },
    '2.2': {
        id: '2.2',
        name: 'Ön İncelemede Tanığın Yazılı Olarak Davet Edilmesi-Çağrı Kâğıdı',
        category: 'Çağrı Kâğıtları',
        sections: [
            {
                title: 'Üst Bilgiler',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', required: true, placeholder: '…../….,…' },
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true },
                    { id: 'konu', label: 'Konu', type: 'text', required: true, placeholder: 'Tanıklığınız' }
                ]
            },
            {
                title: 'Muhatap Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'muhatap_ad_soyad', label: 'Muhatap Adı Soyadı', type: 'text', required: true },
                    { id: 'muhatap_adres', label: 'Muhatap Adresi', type: 'textarea', required: true, fullWidth: true, rows: 2 }
                ]
            },
            {
                title: 'Randevu Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'randevu_tarihi', label: 'Randevu Tarihi', type: 'date', required: true },
                    { id: 'randevu_saati', label: 'Randevu Saati', type: 'time', required: true },
                    { id: 'yer', label: 'İfade Yeri / Kurum Adı', type: 'text', required: true, placeholder: 'örn: İl Milli Eğitim Müdürlüğü Müfettişliği çalışma odası', fullWidth: true }
                ]
            },
            {
                title: 'İmza Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'muhakkik_adi', label: 'Muhakkik Adı Soyadı', type: 'text', required: true },
                    { id: 'muhakkik_kod', label: 'Muhakkik Kodu', type: 'text', required: true, placeholder: 'örn: (12345)' },
                    { id: 'muhakkik_unvan', label: 'Muhakkik Unvanı', type: 'text', required: true, placeholder: 'örn: Bakanlık Müfettişi' }
                ]
            }
        ]
    },
    '2.3': {
        id: '2.3',
        name: 'Disiplin Soruşturması ve Ön İncelemede Çağrı Kâğıdının Tebliğ-Tebellüğ Tutanağı',
        category: 'Çağrı Kâğıtları',
        sections: [
            {
                title: 'Genel Bilgiler',
                icon: '📅',
                fields: [
                    { id: 'cagri_tarihi', label: 'Çağrı Kâğıdı Tarihi', type: 'date', required: true },
                    { id: 'cagri_sayisi', label: 'Çağrı Kâğıdı Sayısı', type: 'text', required: true },
                    { id: 'teslim_tarihi', label: 'Teslim Tarihi', type: 'date', required: true },
                    { id: 'teslim_saati', label: 'Teslim Saati', type: 'time', required: true }
                ]
            },
            {
                title: 'Taraf Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'teslim_eden_ad', label: 'Teslim Edenin Adı ve Soyadı', type: 'text', required: true },
                    { id: 'teslim_eden_unvan', label: 'Teslim Edenin Unvanı/Görevi', type: 'text', required: true },
                    { id: 'teslim_alan_ad', label: 'Teslim Alanın Adı ve Soyadı', type: 'text', required: true },
                    { id: 'teslim_alan_unvan', label: 'Teslim Alanın Unvanı/Görevi', type: 'text', required: true }
                ]
            }
        ]
    },
    '2.4': {
        id: '2.4',
        name: 'Ön İncelemede, Çağrı Kâğıdına Rağmen Gelmeyen Tanıkla İlgili Yetkili Mercie Yazılan Yazı',
        category: 'Çağrı Kâğıtları',
        sections: [
            {
                title: 'Üst Yazı Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', required: true, placeholder: '…../…,…' },
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true },
                    { id: 'yonelim_makami', label: 'Yönelim Makamı', type: 'select', required: true, options: ['VALİLİĞİNE', 'KAYMAKAMLIĞINA'] },
                    { id: 'yonelim_yeri', label: 'İl/İlçe', type: 'text', required: true, placeholder: 'ANKARA' }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Tarih', type: 'date', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Sayı', type: 'text', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Tarih', type: 'date', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Sayı', type: 'text', required: true }
                ]
            },
            {
                title: 'Tanık ve Randevu',
                icon: '📅',
                fields: [
                    { id: 'tanik_ad_soyad', label: 'Tanık Adı Soyadı', type: 'text', required: true },
                    { id: 'tanik_tc', label: 'Tanık T.C.', type: 'text', required: true },
                    { id: 'tanik_gorev_adres', label: 'Tanık Görev/İş', type: 'textarea', rows: 2 },
                    { id: 'tanik_ikamet_adres', label: 'Tanık İkamet', type: 'textarea', rows: 2 },
                    { id: 'randevu_tarihi', label: 'Randevu Tarihi', type: 'date', required: true },
                    { id: 'randevu_saati', label: 'Randevu Saati', type: 'time', required: true },
                    { id: 'randevu_yeri', label: 'Randevu Yeri', type: 'text', required: true }
                ]
            },
            {
                title: 'Ek ve İmza',
                icon: '📎',
                fields: [
                    { id: 'ek_cagri_sayfa', label: 'Ek-1 Sayfa', type: 'number', value: 1 },
                    { id: 'ek_teblig_sayfa', label: 'Ek-2 Sayfa', type: 'number', value: 1 },
                    { id: 'mufettis_ad_soyad', label: 'Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis_kod', label: 'Müfettiş Kodu', type: 'text', required: true }
                ]
            }
        ]
    },
    '3.1': {
        id: '3.1',
        name: 'İhbar ve Şikâyetlerle İlgili Tutanak',
        category: 'İhbar ve Şikâyetlerle İlgili Tutanak',
        implemented: true,
        sections: [
            {
                title: 'Kimlik Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'ad_soyad', label: 'Adı ve Soyadı', type: 'text', required: true, width: 'half' },
                    { id: 'tc_kimlik', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, width: 'half' },
                    { id: 'ana_baba_adi', label: 'Ana ve Baba Adı', type: 'text', width: 'half' },
                    { id: 'dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text', width: 'half' },
                    { id: 'gorevi', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', width: 'full' },
                    { id: 'ikametgah_adresi', label: 'İkametgâh Adresi', type: 'textarea', width: 'full' },
                    { id: 'telefon', label: 'Telefon (Cep-Ev-İşyeri)', type: 'text', width: 'full' }
                ]
            },
            {
                title: 'İhbar/Şikâyet Detayları',
                icon: '📝',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'saat', label: 'Saat', type: 'time', required: true, width: 'half' },
                    { id: 'kurum_adi', label: 'Müfettişlik Yeri', type: 'text', placeholder: '... Müdürlüğü', width: 'full' }
                ]
            },
            {
                title: 'İhbar/Şikâyet İçeriği',
                icon: '📋',
                fields: [
                    { id: 'konu', label: 'İhbar/Şikâyet Konusu', type: 'text', width: 'full' },
                    { id: 'ilgili_gorevli', label: 'İlgili Görevli', type: 'text', width: 'full' },
                    { id: 'ihbar_aciklama', label: 'İhbar/Şikâyet Açıklaması', type: 'textarea', rows: 6, width: 'full' },
                    { id: 'sunulan_belgeler', label: 'Sunulan Belgeler', type: 'text', width: 'full' },
                    { id: 'diger_basvuru', label: 'Başka Başvuru', type: 'text', width: 'full' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.4.1': {
        id: '1.4.1',
        name: 'Yazılı İfade Tutanağı',
        category: 'İfade Tutanakları',
        implemented: true,
        sections: [
            {
                title: 'Genel Bilgiler',
                icon: '📅',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true },
                    { id: 'saat', label: 'Saat', type: 'time', required: true },
                    { id: 'kurum_adi', label: 'Kurum Adı', type: 'text', required: true, placeholder: 'örn: Fatih', fullWidth: true },
                    { id: 'kurum_turu', label: 'Kurum Türü', type: 'select', required: true, options: ['İlkokulundaki', 'Ortaokulundaki', 'Lisesindeki', 'Müdürlüğündeki'] }
                ]
            },
            {
                title: 'İfade Sahibi Kimlik Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'tanik_adi', label: 'Adı ve Soyadı', type: 'text', required: true },
                    { id: 'tanik_tc', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, placeholder: 'TC No / T.C.' },
                    { id: 'tanik_ana_baba', label: 'Ana ve Baba Adı', type: 'text' },
                    { id: 'tanik_dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text' },
                    { id: 'tanik_gorev_meslek', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'tanik_is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', fullWidth: true, rows: 2 },
                    { id: 'tanik_ikamet_adresi', label: 'İkametgâh Adresi', type: 'textarea', fullWidth: true, rows: 2 },
                    { id: 'tanik_telefon', label: 'Telefon (Cep-Ev-İş yeri)', type: 'tel', placeholder: '05XX XXX XX XX' }
                ]
            },
            {
                title: 'İfade Bilgileri',
                icon: 'ℹ️',
                fields: [
                    { id: 'konum', label: 'İfade Sahibinin Konumu', type: 'select', required: true, options: ['Tanık', 'Şikayetçi', 'Hakkında İnceleme Yapılan', 'Hakkında Soruşturma Yapılan'] }
                ]
            },
            {
                title: 'Yazılı Sorular',
                icon: '📝',
                isWrittenQuestions: true
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '🏛️',
                fields: [
                    { id: 'muhakkik1_adi', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'muhakkik1_unvan', label: '1. Müfettiş Unvanı', type: 'text', placeholder: 'örn: Bakanlık Müfettişi', value: 'Bakanlık Müfettişi' },
                    { id: 'muhakkik1_kod', label: '1. Müfettiş Kodu', type: 'text' },
                    { id: 'muhakkik2_adi', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'muhakkik2_unvan', label: '2. Müfettiş Unvanı', type: 'text', placeholder: 'örn: Bakanlık Müfettişi', value: 'Bakanlık Müfettişi' },
                    { id: 'muhakkik2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.4.2': {
        id: '1.4.2',
        name: 'Yazılı İfade Tutanağı (Öğrenci İçin)',
        category: 'İfade Tutanakları',
        implemented: true,
        sections: [
            {
                title: 'Genel Bilgiler',
                icon: '📅',
                fields: [
                    { id: 'sorusturma_konusu', label: 'Soruşturmaya Konu Kişi', type: 'text', required: true, placeholder: 'örn: Ali Yılmaz', fullWidth: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true },
                    { id: 'saat', label: 'Saat', type: 'time', required: true },
                    { id: 'kurum_adi', label: 'Kurum Adı (Okul)', type: 'text', required: true, placeholder: 'örn: Atatürk Ortaokulu' }
                ]
            },
            {
                title: 'Öğrenci Kimlik Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'ogrenci_ad_soyad', label: 'Öğrencinin Adı Soyadı', type: 'text', required: true },
                    { id: 'tc_kimlik_uyruk', label: 'T.C. Kimlik No / Uyruk', type: 'text', required: true, placeholder: 'TC No - T.C.' },
                    { id: 'ogrenci_numarasi', label: 'Öğrenci Numarası', type: 'text', required: true },
                    { id: 'sinifi', label: 'Sınıfı', type: 'text', required: true, placeholder: 'örn: 8-A' },
                    { id: 'okulu', label: 'Okulu', type: 'text', required: true, fullWidth: true }
                ]
            },
            {
                title: 'İfade Bilgileri',
                icon: 'ℹ️',
                fields: [
                    { id: 'konum', label: 'Öğrencinin Konumu', type: 'select', required: true, options: ['Tanık', 'Şikayetçi', 'Hakkında İnceleme Yapılan', 'Hakkında Soruşturma Yapılan'] },
                    { id: 'rehber_ogretmen', label: 'Eşlik Eden Rehber Öğretmen', type: 'text', required: true, placeholder: 'Rehber öğretmenin adı soyadı' }
                ]
            },
            {
                title: 'Yazılı Sorular',
                icon: '📝',
                isWrittenQuestions: true
            },
            {
                title: 'İmza Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.5': {
        id: '1.5',
        name: 'İtham (Şikâyet) Edilene Ait İfade Tutanağı',
        category: 'İfade Tutanakları',
        implemented: true,
        sections: [
            {
                title: 'Kimlik Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'ad_soyad', label: 'Adı ve Soyadı', type: 'text', required: true, width: 'half' },
                    { id: 'tc_kimlik', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, width: 'half' },
                    { id: 'ana_baba_adi', label: 'Ana ve Baba Adı', type: 'text', width: 'half' },
                    { id: 'dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text', width: 'half' },
                    { id: 'gorevi', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', width: 'full' },
                    { id: 'ikametgah_adresi', label: 'İkametgâh Adresi', type: 'textarea', width: 'full' },
                    { id: 'telefon', label: 'Telefon (Cep-Ev-İşyeri)', type: 'text', width: 'full' }
                ]
            },
            {
                title: 'İfade Detayları',
                icon: '📝',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'saat', label: 'Saat', type: 'time', required: true, width: 'half' },
                    { id: 'kurum_adi', label: 'İfadenin Alındığı Yer', type: 'text', placeholder: '... Müdürlüğü', width: 'full' },
                    { id: 'konum', label: 'Konum', type: 'text', value: 'itham/şikâyet edilen', width: 'full' }
                ]
            },
            {
                title: 'Sorular ve Cevaplar',
                icon: '❓',
                isQA: true
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.6.1': {
        id: '1.6.1',
        name: 'Müdafi Talebi Olmadığında Düzenlenecek İfade Tutanağı',
        category: 'İfade Tutanakları',
        implemented: true,
        sections: [
            {
                title: 'Kimlik Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'ad_soyad', label: 'Adı ve Soyadı', type: 'text', required: true, width: 'half' },
                    { id: 'tc_kimlik', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, width: 'half' },
                    { id: 'ana_baba_adi', label: 'Ana ve Baba Adı', type: 'text', width: 'half' },
                    { id: 'dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text', width: 'half' },
                    { id: 'gorevi', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', width: 'full' },
                    { id: 'ikametgah_adresi', label: 'İkametgâh Adresi', type: 'textarea', width: 'full' },
                    { id: 'telefon', label: 'Telefon (Cep-Ev-İşyeri)', type: 'text', width: 'full' }
                ]
            },
            {
                title: 'İfade Detayları',
                icon: '📝',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'saat', label: 'Saat', type: 'time', required: true, width: 'half' },
                    { id: 'kurum_adi', label: 'İfadenin Alındığı Yer', type: 'text', placeholder: '... Müdürlüğü', width: 'full' },
                    { id: 'konum', label: 'Konum', type: 'text', value: 'hakkında ön inceleme yapılan', width: 'full' }
                ]
            },
            {
                title: 'Sorular ve Cevaplar',
                icon: '❓',
                isQA: true
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.6.2': {
        id: '1.6.2',
        name: 'Müdafi Seçebilecek Durumda Olduğunun Beyan Edilerek Müdafi Kullanılacağı Açıklandığında Düzenlenecek İfade Tutanağı',
        category: 'İfade Tutanakları',
        implemented: true,
        sections: [
            {
                title: 'Kimlik Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'ad_soyad', label: 'Adı ve Soyadı', type: 'text', required: true, width: 'half' },
                    { id: 'tc_kimlik', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, width: 'half' },
                    { id: 'ana_baba_adi', label: 'Ana ve Baba Adı', type: 'text', width: 'half' },
                    { id: 'dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text', width: 'half' },
                    { id: 'gorevi', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', width: 'full' },
                    { id: 'ikametgah_adresi', label: 'İkametgâh Adresi', type: 'textarea', width: 'full' },
                    { id: 'telefon', label: 'Telefon (Cep-Ev-İşyeri)', type: 'text', width: 'full' }
                ]
            },
            {
                title: 'İfade Detayları',
                icon: '📝',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'saat', label: 'Saat', type: 'time', required: true, width: 'half' },
                    { id: 'kurum_adi', label: 'İfadenin Alındığı Yer', type: 'text', placeholder: '... Müdürlüğü', width: 'full' },
                    { id: 'konum', label: 'Konum', type: 'text', value: 'hakkında ön inceleme yapılan', width: 'full' }
                ]
            },
            {
                title: 'Müdafi Randevu Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'verilen_sure_gun', label: 'Verilen Süre (Gün)', type: 'number', placeholder: 'Örn: 7', width: 'half' },
                    { id: 'randevu_tarihi', label: 'Randevu Tarihi', type: 'date', width: 'half' },
                    { id: 'randevu_saati', label: 'Randevu Saati', type: 'time', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },

    '1.6.3': {
        id: '1.6.3',
        name: 'Müdafi Seçebilecek Durumda Olmadığının Beyan Edilerek Müdafi Görevlendirilmesi İstenildiğinde Düzenlenecek İfade Tutanağı',
        category: 'İfade Tutanakları',
        implemented: true,
        sections: [
            {
                title: 'Kimlik Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'ad_soyad', label: 'Adı ve Soyadı', type: 'text', required: true, width: 'half' },
                    { id: 'tc_kimlik', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, width: 'half' },
                    { id: 'ana_baba_adi', label: 'Ana ve Baba Adı', type: 'text', width: 'half' },
                    { id: 'dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text', width: 'half' },
                    { id: 'gorevi', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', width: 'full' },
                    { id: 'ikametgah_adresi', label: 'İkametgâh Adresi', type: 'textarea', width: 'full' },
                    { id: 'telefon', label: 'Telefon (Cep-Ev-İşyeri)', type: 'text', width: 'full' }
                ]
            },
            {
                title: 'İfade Detayları',
                icon: '📝',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'saat', label: 'Saat', type: 'time', required: true, width: 'half' },
                    { id: 'kurum_adi', label: 'İfadenin Alındığı Yer', type: 'text', placeholder: '... Müdürlüğü', width: 'full' },
                    { id: 'konum', label: 'Konum', type: 'text', value: 'hakkında ön inceleme yapılan', width: 'full' }
                ]
            },
            {
                title: 'Müdafi Randevu Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'randevu_tarihi', label: 'Geri Dönüş Tarihi', type: 'date', required: true, width: 'half' },
                    { id: 'randevu_saati', label: 'Geri Dönüş Saati', type: 'time', required: true, width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.6.4': {
        id: '1.6.4',
        name: 'Müdafi Seçemeyeceğini Beyan Üzerine Baro Başkanlığına Yazı Örneği',
        category: 'İfade Tutanakları',
        implemented: true,
        sections: [
            {
                title: 'Üst Yazı Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…../…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true },
                    { id: 'konu', label: 'Konu', type: 'text', value: 'Müdafi Talebi', width: 'full', required: true },
                    { id: 'baro_adi', label: 'Baro Adı', type: 'text', placeholder: 'ANKARA', width: 'full', required: true }
                ]
            },
            {
                title: 'İfadesi Alınacak Kişi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'ifade_sahibi_ad_soyad', label: 'Adı Soyadı', type: 'text', width: 'half', required: true },
                    { id: 'tc_kimlik', label: 'T.C. Kimlik No', type: 'text', width: 'half' },
                    { id: 'ifade_sahibi_adres_tel', label: 'Adresi ve Telefonu', type: 'textarea', width: 'full' }
                ]
            },
            {
                title: 'İfade Randevu Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'ifade_yeri', label: 'İfade Yeri', type: 'text', width: 'full', required: true },
                    { id: 'ifade_tarihi', label: 'İfade Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ifade_saati', label: 'İfade Saati', type: 'time', width: 'half', required: true },
                    { id: 'ek_sayfa', label: 'Ekli Tutanak Sayfa Sayısı', type: 'number', width: 'quarter' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '1.6.5': {
        id: '1.6.5',
        name: 'Müdafi Seçme Hakkı Kullanıldığında Düzenlenecek İfade Tutanağı',
        category: 'İfade Tutanakları',
        type: 'ifade_mudafili',
        isQA: true,
        implemented: true,
        sections: [
            {
                title: 'Kimlik Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'ad_soyad', label: 'Adı ve Soyadı', type: 'text', required: true, width: 'half' },
                    { id: 'tc_kimlik', label: 'T.C. Kimlik No/Uyruğu', type: 'text', required: true, width: 'half' },
                    { id: 'ana_baba_adi', label: 'Ana ve Baba Adı', type: 'text', width: 'half' },
                    { id: 'dogum_yeri_tarihi', label: 'Doğum Yeri ve Tarihi', type: 'text', width: 'half' },
                    { id: 'gorevi', label: 'Görevi/İşi/Mesleği', type: 'text', width: 'full' },
                    { id: 'is_adresi', label: 'Görev/İşyeri Adresi', type: 'textarea', width: 'full' },
                    { id: 'ikametgah_adresi', label: 'İkametgâh Adresi', type: 'textarea', width: 'full' },
                    { id: 'telefon', label: 'Telefon (Cep-Ev-İşyeri)', type: 'text', width: 'full' }
                ]
            },
            {
                title: 'İfade Detayları',
                icon: '📝',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'saat', label: 'Saat', type: 'time', required: true, width: 'half' },
                    { id: 'kurum_adi', label: 'İfadenin Alındığı Yer', type: 'text', placeholder: '... Müdürlüğü', width: 'full' }
                ]
            },
            {
                title: 'Müdafi Bilgileri',
                icon: '⚖️',
                fields: [
                    { id: 'mudafi_ad_soyad', label: 'Müdafi/Avukat Adı Soyadı', type: 'text', required: true, width: 'full' }
                ]
            },
            {
                title: 'Soru ve Cevaplar',
                icon: '❓',
                isQA: true,
                fields: []
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text' }
                ]
            }
        ]
    },
    '4.1': {
        id: '4.1',
        name: 'Bilgi ve/veya Belge İsteme Yazısı (Varyant 1)',
        category: 'Bilgi ve Belge İsteme Yazıları',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Üst Bilgiler',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', required: true, placeholder: '…./…,…', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Sayı', type: 'text', required: true, placeholder: '…..', width: 'half' },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Sayı', type: 'text', required: true, placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Okul/Kurum Bilgileri',
                icon: '🏫',
                fields: [
                    { id: 'okul_adi', label: 'Okul Adı', type: 'text', required: true, placeholder: 'örn: Atatürk', fullWidth: true },
                    { id: 'okul_turu', label: 'Okul Türü', type: 'text', placeholder: 'Mesleki ve Teknik Anadolu Lisesi', value: 'Mesleki ve Teknik Anadolu Lisesi', fullWidth: true }
                ]
            },
            {
                title: 'İnceleme Dönemi ve Tipi',
                icon: '📅',
                fields: [
                    { id: 'donem_baslangic', label: 'Dönem Başlangıç Yılı', type: 'text', required: true, placeholder: '2020', width: 'half' },
                    { id: 'donem_bitis', label: 'Dönem Bitiş Yılı', type: 'text', required: true, placeholder: '2023', width: 'half' },
                    { id: 'islem_tipi', label: 'İşlem Tipi', type: 'select', required: true, options: ['incelenmesi', 'soruşturulması', 'ön incelemesi'], value: 'incelenmesi', fullWidth: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis_ad_soyad', label: 'Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis_kod', label: 'Müfettiş Kodu', type: 'text', required: true, placeholder: '(12345)' }
                ]
            }
        ]
    },
    '4.2': {
        id: '4.2',
        name: 'Bilgi ve/veya Belge İsteme Yazısı (Varyant 2)',
        category: 'Bilgi ve Belge İsteme Yazıları',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Üst Bilgiler',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', required: true, placeholder: '…./…,…', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' }
                ]
            },
            {
                title: 'Yönelim Bilgileri',
                icon: '🎯',
                fields: [
                    { id: 'yonelim_yeri', label: 'İl/İlçe Adı', type: 'text', required: true, placeholder: 'örn: Ankara', fullWidth: true },
                    { id: 'yonelim_makami', label: 'Makam Türü', type: 'select', required: true, options: ['VALİLİĞİNE', 'KAYMAKAMLIĞINA'], value: 'VALİLİĞİNE', fullWidth: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Sayı', type: 'text', required: true, placeholder: '…..', width: 'half' },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Sayı', type: 'text', required: true, placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Okul/Kurum Bilgileri',
                icon: '🏫',
                fields: [
                    { id: 'okul_adi', label: 'Okul Adı', type: 'text', required: true, placeholder: 'örn: Atatürk', fullWidth: true },
                    { id: 'okul_turu', label: 'Okul Türü', type: 'text', placeholder: 'Mesleki ve Teknik Anadolu Lisesi', value: 'Mesleki ve Teknik Anadolu Lisesi', fullWidth: true }
                ]
            },
            {
                title: 'Vergi ve Tarih Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'vergi_dairesi', label: 'Vergi Dairesi Adı', type: 'text', required: true, placeholder: 'örn: Çankaya', fullWidth: true },
                    { id: 'tarih_baslangic', label: 'Başlangıç Tarihi', type: 'date', required: true, width: 'half' },
                    { id: 'tarih_bitis', label: 'Bitiş Tarihi', type: 'date', required: true, width: 'half' },
                    { id: 'islem_tipi', label: 'İşlem Tipi', type: 'select', required: true, options: ['inceleme', 'soruşturma', 'ön inceleme'], value: 'inceleme', fullWidth: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri ve Adres',
                icon: '👮',
                fields: [
                    { id: 'mufettis_ad_soyad', label: 'Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis_kod', label: 'Müfettiş Kodu', type: 'text', required: true, placeholder: '(12345)' },
                    { id: 'adres', label: 'Müfettişlik Adresi', type: 'textarea', required: true, placeholder: 'Tam adres...', fullWidth: true, rows: 2 }
                ]
            }
        ]
    },
    '4.3': {
        id: '4.3',
        name: 'Bilgi ve/veya Belge İsteme Yazısı (Varyant 3)',
        category: 'Bilgi ve Belge İsteme Yazıları',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Üst Bilgiler',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', required: true, placeholder: '…./…,…', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' }
                ]
            },
            {
                title: 'Mahkeme Bilgileri',
                icon: '⚖️',
                fields: [
                    { id: 'mahkeme_adi', label: 'Mahkeme Adı', type: 'text', required: true, placeholder: 'örn: Ankara 5. Ağır Ceza', fullWidth: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Sayı', type: 'text', required: true, placeholder: '…..', width: 'half' },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Sayı', type: 'text', required: true, placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'İşlem ve Kişi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'islem_tipi', label: 'İşlem Tipi', type: 'select', required: true, options: ['disiplin soruşturması', '4483 sayılı Kanun kapsamında ön inceleme'], value: 'disiplin soruşturması', fullWidth: true },
                    { id: 'kisi_ad_soyad', label: 'Kişi Adı Soyadı', type: 'text', required: true, placeholder: 'Hakkında işlem yapılan kişi', fullWidth: true },
                    { id: 'kisi_tc', label: 'T.C. Kimlik No', type: 'text', required: true, placeholder: '12345678901', width: 'half' },
                    { id: 'suclar', label: 'Suçlar/Hususlar', type: 'textarea', required: true, placeholder: 'İlgili suçlar veya hususlar', fullWidth: true, rows: 2 }
                ]
            },
            {
                title: 'Dava Bilgileri',
                icon: '📁',
                fields: [
                    { id: 'esas_no', label: 'Esas No', type: 'text', required: true, placeholder: 'Dava esas numarası' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true, placeholder: '(12345)' },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', required: true, placeholder: '(12345)' }
                ]
            }
        ]
    },
    '4.4': {
        id: '4.4',
        name: 'Bilgi ve/veya Belge İsteme Yazısı (Varyant 4)',
        category: 'Bilgi ve Belge İsteme Yazıları',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Üst Bilgiler',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', required: true, placeholder: '…./…,…', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', required: true, width: 'half' }
                ]
            },
            {
                title: 'Başsavcılık Bilgileri',
                icon: '⚖️',
                fields: [
                    { id: 'bassavcilik_yeri', label: 'Başsavcılık Yeri', type: 'text', required: true, placeholder: 'örn: Ankara', fullWidth: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Sayı', type: 'text', required: true, placeholder: '…..', width: 'half' },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Tarih', type: 'date', required: true, width: 'half' },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Sayı', type: 'text', required: true, placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'İşlem ve Kişi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'islem_tipi', label: 'İşlem Tipi', type: 'select', required: true, options: ['disiplin soruşturması', '4483 sayılı Kanun kapsamında ön inceleme'], value: 'disiplin soruşturması', fullWidth: true },
                    { id: 'kisi_ad_soyad', label: 'Kişi Adı Soyadı', type: 'text', required: true, placeholder: 'Hakkında işlem yapılan kişi', fullWidth: true },
                    { id: 'kisi_tc', label: 'T.C. Kimlik No', type: 'text', required: true, placeholder: '12345678901', width: 'half' },
                    { id: 'suclar', label: 'Suçlar/Hususlar', type: 'textarea', required: true, placeholder: 'İlgili suçlar veya hususlar', fullWidth: true, rows: 2 }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', required: true, placeholder: '(12345)' },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', required: true },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', required: true, placeholder: '(12345)' }
                ]
            }
        ]
    },
    '5.1': {
        id: '5.1',
        name: 'Bilirkişi Görevlendirme Konusunda İlgili Kuruluşa Yazılan Yazı',
        category: 'Bilirkişi',
        type: 'bilirkisi_gorevlendirme',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true },
                    { id: 'konu', label: 'Konu', type: 'text', value: 'Bilirkişi Görevlendirmesi', width: 'full', required: true }
                ]
            },
            {
                title: 'Alıcı Bilgileri',
                icon: '🏢',
                fields: [
                    { id: 'mudur_adi', label: 'Müdürlük Adı', type: 'text', placeholder: 'örn: … İl/İlçe Millî Eğitim Müdürlüğü', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi Dokümanları',
                icon: '🔗',
                fields: [
                    { id: 'makam_oluru_tarihi', label: 'Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'makam_oluru_sayi', label: 'Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'gorevlendirme_tarihi', label: 'Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'gorevlendirme_sayi', label: 'Görevlendirme Emri Sayısı', type: 'text', placeholder: '….', width: 'half', required: true }
                ]
            },
            {
                title: 'Bilirkişi Bilgileri',
                icon: '🔍',
                fields: [
                    { id: 'bilirkisi1_ad_soyad', label: '1. Bilirkişinin Adı Soyadı', type: 'text', width: 'half', required: true },
                    { id: 'bilirkisi1_brans', label: '1. Bilirkişinin Branşı', type: 'text', width: 'half', required: true },
                    { id: 'bilirkisi2_ad_soyad', label: '2. Bilirkişinin Adı Soyadı', type: 'text', width: 'half' },
                    { id: 'bilirkisi2_brans', label: '2. Bilirkişinin Branşı', type: 'text', width: 'half' },
                    { id: 'okul_adi', label: 'Okul/Kurum Adı', type: 'text', placeholder: 'Bilirkişilerin görev yaptığı okul', width: 'full', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Bakanlık Müfettişi Adı Soyadı', type: 'text', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Bakanlık Müfettişi Adı Soyadı', type: 'text', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek1_bilirkisi', label: '1. Ek - Bilirkişi Adı Soyadı (Görevlendirme Yazısı için)', type: 'text', placeholder: 'Adı Soyadı', width: 'half', required: true },
                    { id: 'ek1_sayfa', label: 'Sayfa Sayısı', type: 'text', placeholder: '… Sayfa', width: 'half', value: '1 Sayfa' },
                    { id: 'ek2_bilirkisi', label: '2. Ek - Bilirkişi Adı Soyadı (Görevlendirme Yazısı için)', type: 'text', placeholder: 'Adı Soyadı', width: 'half' },
                    { id: 'ek2_sayfa', label: 'Sayfa Sayısı', type: 'text', placeholder: '… Sayfa', width: 'half', value: '1 Sayfa' }
                ]
            }
        ]
    },
    '5.2': {
        id: '5.2',
        name: 'Bilirkişi Görevlendirme Yazısı',
        category: 'Bilirkişi',
        type: 'bilirkisi_gorevlendirme_yazisi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true },
                    { id: 'konu', label: 'Konu', type: 'text', value: 'Görevlendirme', width: 'full', required: true }
                ]
            },
            {
                title: 'Bilirkişi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'bilirkisi_ad_soyad', label: 'Bilirkişi Adı Soyadı', type: 'text', placeholder: 'Sayın ….. …..', width: 'half', required: true },
                    { id: 'bilirkisi_gorev', label: 'Bilirkişi Unvanı/Görevi', type: 'text', placeholder: '….. ….. Lisesi ….. Öğretmeni', width: 'half', required: true }
                ]
            },
            {
                title: 'Görevlendirme Detayları',
                icon: '📅',
                fields: [
                    { id: 'ders_adi', label: 'Ders Adı / Konu', type: 'text', placeholder: 'Matematik', width: 'full', required: true },
                    { id: 'randevu_tarihi', label: 'Hazır Bulunma Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'randevu_gunu', label: 'Gün', type: 'text', placeholder: 'Pazartesi', width: 'half', required: true },
                    { id: 'randevu_saati', label: 'Saat', type: 'time', width: 'half', required: true },
                    { id: 'randevu_yeri', label: 'Hazır Bulunma Yeri', type: 'text', placeholder: '….. Lisesindeki ….. odasında', width: 'full', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Bakanlık Müfettişi Adı Soyadı', type: 'text', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Bakanlık Müfettişi Adı Soyadı', type: 'text', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', width: 'half' }
                ]
            }
        ]
    },
    '5.3': {
        id: '5.3',
        name: 'Bilirkişi Ücret Ödeme Yazısı',
        category: 'Bilirkişi',
        type: 'bilirkisi_ucret',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true },
                    { id: 'konu', label: 'Konu', type: 'text', value: 'Bilirkişi Ücreti', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Görevlendirme Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Görevlendirme Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Soruşturma ve Bilirkişi Detayları',
                icon: '🔍',
                fields: [
                    { id: 'sorusturulan_kurum', label: 'Soruşturulan Okul/Kurum', type: 'text', placeholder: '….. ….. Lisesi', width: 'full', required: true },
                    { id: 'bilirkisi_kurum', label: 'Bilirkişilerin Görev Yaptığı Okul', type: 'text', placeholder: '….. Lisesi', width: 'full', required: true },
                    { id: 'bilirkisi_ad_soyad', label: 'Bilirkişi Adı Soyadı (Çoğul ise virgülle ayırın)', type: 'text', placeholder: 'Adı Soyadı', width: 'full', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👮',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Bakanlık Müfettişi Adı Soyadı', type: 'text', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Bakanlık Müfettişi Adı Soyadı', type: 'text', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '6.1': {
        id: '6.1',
        name: 'Soruşturma ve Görevden Uzaklaştırma Tedbiri Alma Oluru',
        category: 'Görevden Uzaklaştırma',
        type: 'olur_yazisi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…..', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Personel Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'personel_ad_soyad', label: 'Personel Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'personel_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'personel_unvan', label: 'Unvanı', type: 'text', placeholder: 'Sayman', width: 'half', required: true },
                    { id: 'personel_kurum', label: 'Görev Yeri (Kurum Adı)', type: 'text', placeholder: '….. ….. Mesleki ve Teknik Anadolu Lisesi', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_mahkeme', label: 'Mahkeme/Makam Adı', type: 'text', placeholder: '….. ….. Ağır Ceza Mahkemesinin', width: 'full', required: true },
                    { id: 'ilgi_tarih', label: 'İlgi Yazı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_sayi', label: 'İlgi Yazı / Esas Sayısı', type: 'text', placeholder: '...../..... Esas', width: 'half', required: true }
                ]
            },
            {
                title: 'Soruşturma Detayları',
                icon: '⚖️',
                fields: [
                    { id: 'suc_adi', label: 'Suç / İddia', type: 'text', value: 'nitelikli dolandırıcılık', width: 'full', required: true }
                ]
            },
            {
                title: 'Onay ve İmza Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'baskan_ad_soyad', label: 'Teftiş Kurulu Başkanı Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'full', required: true },
                    { id: 'bakan_ad_soyad', label: 'Bakan Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'full', required: true }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_aciklama', label: 'Ek Açıklaması', type: 'text', value: '….. …..', width: 'half' },
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '6.2': {
        id: '6.2',
        name: 'Görevden Uzaklaştırma Tedbirinin Kaldırılması Oluru',
        category: 'Görevden Uzaklaştırma',
        type: 'olur_yazisi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…..', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Personel Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'personel_ad_soyad', label: 'Personel Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'personel_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'personel_unvan', label: 'Unvanı', type: 'text', placeholder: 'Sayman', width: 'half', required: true },
                    { id: 'personel_kurum', label: 'Görev Yeri (Kurum Adı)', type: 'text', placeholder: '….. ….. Mesleki ve Teknik Anadolu Lisesi', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Olur Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Olur Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Emir Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Emir Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_c_mufettisler', label: 'İlgi (c) Raporu Düzenleyen Müfettişler', type: 'text', placeholder: '….. ….. ile ….. ……', width: 'full', required: true },
                    { id: 'ilgi_c_tarih', label: 'İlgi (c) Rapor Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_c_sayi', label: 'İlgi (c) Rapor Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Onay ve İmza Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'baskan_ad_soyad', label: 'Teftiş Kurulu Başkanı Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'full', required: true },
                    { id: 'bakan_ad_soyad', label: 'Bakan Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'full', required: true }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_aciklama', label: 'Ek Açıklaması', type: 'text', value: '….. …..', width: 'half' },
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '6.3': {
        id: '6.3',
        name: 'Bakanlık Müfettişlerince Görevden Uzaklaştırma Tedbiri Alma',
        category: 'Görevden Uzaklaştırma',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'full', required: true }
                ]
            },
            {
                title: 'Personel Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'personel_ad_soyad', label: 'Personel Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'full', required: true },
                    { id: 'personel_unvan', label: 'Unvanı', type: 'text', placeholder: 'Saymanı', width: 'half', required: true },
                    { id: 'personel_kurum', label: 'Görev Yeri (Kurum Adı)', type: 'text', placeholder: '….. ….. Mesleki ve Teknik Anadolu Lisesi', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'makam_oluru_tarihi', label: 'Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'makam_oluru_sayi', label: 'Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'gorevlendirme_tarihi', label: 'Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'gorevlendirme_sayi', label: 'Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'sorusturma_nedeni', label: 'Soruşturma/İnceleme Nedeni', type: 'textarea', placeholder: '….. …..', width: 'full', required: true, rows: 3 }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı (İsteğe Bağlı)', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu (İsteğe Bağlı)', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_aciklama', label: 'Ek Açıklaması', type: 'text', value: '….. …..', width: 'half' },
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '6.4': {
        id: '6.4',
        name: 'Bakanlık Müfettişlerince Alınan Görevden Uzaklaştırma Tedbirinin Kaldırılması Teklifi',
        category: 'Görevden Uzaklaştırma',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Personel Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'personel_ad_soyad', label: 'Personel Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'personel_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'personel_unvan', label: 'Unvanı', type: 'text', placeholder: 'Saymanı', width: 'half', required: true },
                    { id: 'personel_kurum', label: 'Görev Yeri (Kurum Adı)', type: 'text', placeholder: '….. ….. Mesleki ve Teknik Anadolu Lisesi', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Makam Oluru Sayısı', type: 'text', placeholder: '…../…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_c_tarih', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_c_sayi', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Sayısı', type: 'text', placeholder: '…/…..', width: 'half', required: true },
                    { id: 'uzaklastirma_nedeni', label: 'Görevden Uzaklaştırma Nedeni', type: 'textarea', placeholder: '….. ….. ….. ….. ….. ….. ….. ….. ….. …..', width: 'full', required: true, rows: 3 }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı (İsteğe Bağlı)', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu (İsteğe Bağlı)', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_aciklama', label: 'Ek Açıklaması', type: 'text', value: '….. …..', width: 'half' },
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '6.5': {
        id: '6.5',
        name: 'Bakanlık Müfettişlerince Alınan Görevden Uzaklaştırma Tedbirinin Kaldırılması Oluru',
        category: 'Görevden Uzaklaştırma',
        type: 'olur_yazisi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Personel Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'personel_ad_soyad', label: 'Personel Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'personel_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'personel_unvan', label: 'Unvanı', type: 'text', placeholder: 'Saymanı', width: 'half', required: true },
                    { id: 'personel_kurum', label: 'Görev Yeri (Kurum Adı)', type: 'text', placeholder: '….. ….. Mesleki ve Teknik Anadolu Lisesi', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_c_tarih', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_c_sayi', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_d_tarih', label: 'İlgi (d) Kaldırma Talebi Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_d_sayi', label: 'İlgi (d) Kaldırma Talebi Yazısı Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Yetkili İmza Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'baskan_ad_soyad', label: 'Teftiş Kurulu Başkanı Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'full', required: true },
                    { id: 'bakan_ad_soyad', label: 'Bakan Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'full', required: true }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_aciklama', label: 'Ek Açıklaması', type: 'text', value: '….. …..', width: 'half' },
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '6.6': {
        id: '6.6',
        name: 'Görevden Uzaklaştırmanın Bakanlığa Bildirilmesi ile İlgili Yazı',
        category: 'Görevden Uzaklaştırma',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Personel Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'personel_ad_soyad', label: 'Personel Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'personel_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'personel_unvan', label: 'Unvanı', type: 'text', placeholder: 'Döner Sermaye İşletmesi Saymanı', width: 'half', required: true },
                    { id: 'personel_kurum', label: 'Görev Yeri (Kurum Adı)', type: 'text', placeholder: '….. Mesleki ve Teknik Anadolu Lisesi', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_c_tarih', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_c_sayi', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Sayısı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'ilgi_d_valilik', label: 'İlgi (d) Valilik/Kaymakamlık Adı', type: 'text', placeholder: '….. Valiliği', width: 'full', required: true },
                    { id: 'ilgi_d_tarih', label: 'İlgi (d) Bilgilendirme Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_d_sayi', label: 'İlgi (d) Bilgilendirme Yazısı Sayısı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'ilgi_e_kurum', label: 'İlgi (e) Kurum Adı', type: 'text', placeholder: '….. ….. Lisesi', width: 'full', required: true },
                    { id: 'ilgi_e_tarih', label: 'İlgi (e) Bilgilendirme Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_e_sayi', label: 'İlgi (e) Bilgilendirme Yazısı Sayısı', type: 'text', placeholder: '…./…,…', width: 'half', required: true }
                ]
            },
            {
                title: 'Soruşturma Detayları',
                icon: '⚖️',
                fields: [
                    { id: 'zimmet_tutari', label: 'Zimmet Tutarı', type: 'text', placeholder: '….. ….. TL', width: 'half', required: true },
                    { id: 'suc_duyurusu_yer', label: 'Suç Duyurusu Yapılacak Yer', type: 'text', placeholder: '….. Cumhuriyet Başsavcılığı', width: 'half', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '6.7': {
        id: '6.7',
        name: 'Görevden Uzaklaştırmanın İlgili Mülki Amire Bildirilmesi ile İlgili Yazı',
        category: 'Görevden Uzaklaştırma',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Muhatap Bilgileri',
                icon: '📬',
                fields: [
                    { id: 'valilik_adi', label: 'Valilik/Kaymakamlık Adı', type: 'text', placeholder: '….. Valiliği / Kaymakamlığı', width: 'full', required: true }
                ]
            },
            {
                title: 'Personel Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'personel_ad_soyad', label: 'Personel Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'personel_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'personel_unvan', label: 'Unvanı', type: 'text', placeholder: 'Döner Sermaye İşletmesi Saymanı', width: 'half', required: true },
                    { id: 'personel_kurum', label: 'Görev Yeri (Kurum Adı)', type: 'text', placeholder: '….. Mesleki ve Teknik Anadolu Lisesi', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Görev Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Görev Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_c_tarih', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_c_sayi', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Sayısı', type: 'text', placeholder: '…./…,…', width: 'half', required: true }
                ]
            },
            {
                title: 'Soruşturma Detayları',
                icon: '⚖️',
                fields: [
                    { id: 'zimmet_tutari', label: 'Zimmet Tutarı', type: 'text', placeholder: '….. TL', width: 'half', required: true },
                    { id: 'suc_duyurusu_yer', label: 'Suç Duyurusu Yapılacak Yer', type: 'text', placeholder: '….. Cumhuriyet Başsavcılığı', width: 'half', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '6.8': {
        id: '6.8',
        name: 'Görevden Uzaklaştırmanın Birime/Kuruma Bildirilmesi ile İlgili Yazı',
        category: 'Görevden Uzaklaştırma',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Muhatap Bilgileri',
                icon: '📬',
                fields: [
                    { id: 'kurum_adi', label: 'Kurum/Okul Adı', type: 'text', placeholder: '….. ….. Mesleki ve Teknik Anadolu Lisesi Müdürlüğüne', width: 'full', required: true }
                ]
            },
            {
                title: 'Personel Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'personel_ad_soyad', label: 'Personel Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'personel_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'personel_unvan', label: 'Unvanı', type: 'text', placeholder: 'Döner Sermaye İşletmesi Saymanı', width: 'half', required: true },
                    { id: 'zimmet_tutari', label: 'Zimmet Tutarı', type: 'text', placeholder: '….. TL', width: 'half', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_c_tarih', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_c_sayi', label: 'İlgi (c) Görevden Uzaklaştırma Yazısı Sayısı', type: 'text', placeholder: '…./…,…', width: 'half', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '6.9': {
        id: '6.9',
        name: 'Görevden Uzaklaştırma Yazısının Tebliğ ve Tebellüğ Belgesi',
        category: 'Görevden Uzaklaştırma',
        type: 'tutanak',
        implemented: true,
        sections: [
            {
                title: 'Yazı Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'yazi_tarih', label: 'Yazı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'yazi_sayi', label: 'Yazı Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'gorevden_uzaklastirma_tarih', label: 'Görevden Uzaklaştırma Yazısı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'gorevden_uzaklastirma_sayi', label: 'Görevden Uzaklaştırma Yazısı Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Tebellüğ Bilgileri',
                icon: '📝',
                fields: [
                    { id: 'tebellug_tarih', label: 'Tebellüğ Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'tebellug_saat', label: 'Tebellüğ Saati', type: 'time', width: 'half', required: true }
                ]
            },
            {
                title: 'Tebliğ Eden (Müfettiş)',
                icon: '✍️',
                fields: [
                    { id: 'teblig_eden_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'teblig_eden_gorev', label: 'Görevi/Unvanı', type: 'text', placeholder: 'Bakanlık Müfettişi', width: 'half', required: true }
                ]
            },
            {
                title: 'Tebellüğ Alan (Personel)',
                icon: '👤',
                fields: [
                    { id: 'tebellug_alan_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'tebellug_alan_gorev', label: 'Görevi/Unvanı', type: 'text', placeholder: '….. Meslek ve Teknik Anadolu Lisesi Döner Sermaye İşletmesi Saymanı', width: 'full', required: true }
                ]
            }
        ]
    },
    '7.1': {
        id: '7.1',
        name: 'Tanık İçin Naip Tayin Yazısı',
        category: 'Naip Görevlendirme ve İstinabe Talimatı',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Naip Bilgileri',
                icon: '👨‍⚖️',
                fields: [
                    { id: 'naip_ad_soyad', label: 'Naip Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'naip_unvan', label: 'Naip Unvanı', type: 'text', placeholder: '….. Müdürü/Bakanlık Müfettişi', width: 'half', required: true },
                    { id: 'naip_adres', label: 'Naip Adresi', type: 'text', placeholder: '….. ….. ….. …..', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Görev Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Görev Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Tanık Bilgileri',
                icon: '👥',
                fields: [
                    { id: 'kurum_adi', label: 'Kurum/Okul Adı', type: 'text', placeholder: '….. Lisesi', width: 'full', required: true },
                    { id: 'tanik1_unvan', label: '1. Tanık Unvanı', type: 'text', placeholder: 'Müdür Yardımcısı', width: 'half', required: true },
                    { id: 'tanik1_ad_soyad', label: '1. Tanık Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'tanik2_unvan', label: '2. Tanık Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half' },
                    { id: 'tanik2_ad_soyad', label: '2. Tanık Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'İstinabe Talimatı Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '7.2': {
        id: '7.2',
        name: 'Tanık İçin İstinabe Talimatı',
        category: 'Naip Görevlendirme ve İstinabe Talimatı',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Tanık Bilgileri',
                icon: '👥',
                fields: [
                    { id: 'kurum_adi', label: 'Kurum/Okul Adı', type: 'text', placeholder: '….. Lisesi', width: 'full', required: true },
                    { id: 'tanik1_unvan', label: '1. Tanık Unvanı', type: 'text', placeholder: 'Müdür Yardımcısı', width: 'half', required: true },
                    { id: 'tanik1_ad_soyad', label: '1. Tanık Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'tanik2_unvan', label: '2. Tanık Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half' },
                    { id: 'tanik2_ad_soyad', label: '2. Tanık Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' }
                ]
            },
            {
                title: 'Sorular',
                icon: '❓',
                fields: [
                    { id: 'soru1', label: 'Soru 1', type: 'textarea', placeholder: 'Okulunuz eski müdürü...', width: 'full', required: true },
                    { id: 'soru2', label: 'Soru 2', type: 'textarea', placeholder: '….. ….. …..', width: 'full' },
                    { id: 'soru3', label: 'Soru 3', type: 'textarea', placeholder: '….. ….. …..', width: 'full' }
                ]
            },
            {
                title: 'İfade Tarihi',
                icon: '📅',
                fields: [
                    { id: 'ifade_tarih', label: 'İfade Alınacak Tarih', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '7.3': {
        id: '7.3',
        name: 'İtham/Şikâyet Edilen (Sorumlu Görülen) İçin Naip Tayin Yazısı',
        category: 'Naip Görevlendirme ve İstinabe Talimatı',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Naip Bilgileri',
                icon: '👨‍⚖️',
                fields: [
                    { id: 'naip_ad_soyad', label: 'Naip Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'naip_unvan', label: 'Naip Unvanı', type: 'text', placeholder: '….. Müdürü/Bakanlık Maarif Müfettişi', width: 'half', required: true },
                    { id: 'naip_adres', label: 'Naip Adresi', type: 'text', placeholder: '….. …..', width: 'full', required: true }
                ]
            },
            {
                title: 'İlgi (Referans) Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'İlgi (a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'İlgi (a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'İlgi (b) Görev Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'İlgi (b) Görev Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'İtham/Şikâyet Edilen Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'kurum_adi', label: 'Kurum/Okul Adı', type: 'text', placeholder: '….. Lisesi', width: 'full', required: true },
                    { id: 'itham_unvan', label: 'Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half', required: true },
                    { id: 'itham_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'İstinabe Talimatı Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '7.4': {
        id: '7.4',
        name: 'İtham/Şikâyet Edilen (Sorumlu Görülen) İçin İstinabe Talimatı',
        category: 'Naip Görevlendirme ve İstinabe Talimatı',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'İtham/Şikâyet Edilen Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'kurum_adi', label: 'Kurum/Okul Adı', type: 'text', placeholder: '….. Lisesi', width: 'full', required: true },
                    { id: 'itham_unvan', label: 'Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half', required: true },
                    { id: 'itham_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true }
                ]
            },
            {
                title: 'Sorular',
                icon: '❓',
                fields: [
                    { id: 'soru1', label: 'Soru 1', type: 'textarea', placeholder: 'Okulunuz öğrencilerinden...', width: 'full', required: true },
                    { id: 'soru2', label: 'Soru 2', type: 'textarea', placeholder: '….. ….. …..', width: 'full' },
                    { id: 'soru3', label: 'Soru 3', type: 'textarea', placeholder: '….. ….. …..', width: 'full' }
                ]
            },
            {
                title: 'İfade Tarihi',
                icon: '📅',
                fields: [
                    { id: 'ifade_tarih', label: 'İfade Alınacak Tarih', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '8.1': {
        id: '8.1',
        name: 'İnceleme ve Soruşturmalarda Gerektiğinde Grup Adına İfade Alma (Yetkilendirme) Kararı',
        category: 'Yetkilendirme',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'Görevlendirme Bilgileri',
                icon: '📝',
                fields: [
                    { id: 'gorev_emri_tarih', label: 'Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'gorev_emri_sayi', label: 'Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'makam_oluru_tarih', label: 'Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'makam_oluru_sayi', label: 'Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Soruşturulan Kişi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'kurum_adi', label: 'Kurum/Okul Adı', type: 'text', placeholder: '….. Lisesi', width: 'full', required: true },
                    { id: 'sorusturulan_unvan', label: 'Unvanı', type: 'text', placeholder: 'Müdür', width: 'half', required: true },
                    { id: 'sorusturulan_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'calisma_turu', label: 'Çalışma Türü', type: 'select', options: ['inceleme', 'soruşturma', 'ön inceleme'], width: 'half', required: true }
                ]
            },
            {
                title: 'İfadesi Alınacak Kişiler',
                icon: '👥',
                fields: [
                    { id: 'ifade1_unvan', label: '1. Kişi Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half', required: true },
                    { id: 'ifade1_ad_soyad', label: '1. Kişi Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'ifade2_unvan', label: '2. Kişi Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half' },
                    { id: 'ifade2_ad_soyad', label: '2. Kişi Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' },
                    { id: 'mufettis3_ad_soyad', label: '3. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis3_kod', label: '3. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'İfade Alma Esasları Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '8.2': {
        id: '8.2',
        name: 'İfade Alma Esasları',
        category: 'Yetkilendirme',
        type: 'diger',
        implemented: true,
        sections: [
            {
                title: 'Yetkilendirme Kararı Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'karar_tarih', label: 'Yetkilendirme Kararı Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'karar_sayi', label: 'Yetkilendirme Kararı Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'İfadesi Alınacak Kişi 1',
                icon: '👤',
                fields: [
                    { id: 'kisi1_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'kisi1_unvan', label: 'Görevi/Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half', required: true },
                    { id: 'kisi1_gorev_yeri', label: 'Görev Yeri', type: 'text', placeholder: '….. İli', width: 'half' },
                    { id: 'kisi1_konum', label: 'İfade Konumu', type: 'select', options: ['muhbir', 'müşteki', 'tanık', 'sorumlu/itham edilen'], width: 'half', required: true },
                    { id: 'kisi1_konu_no', label: 'Konu/İddia No', type: 'text', placeholder: '1, 2', width: 'half' }
                ]
            },
            {
                title: 'İfadesi Alınacak Kişi 2',
                icon: '👤',
                fields: [
                    { id: 'kisi2_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'kisi2_unvan', label: 'Görevi/Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half' },
                    { id: 'kisi2_gorev_yeri', label: 'Görev Yeri', type: 'text', placeholder: '….. İli', width: 'half' },
                    { id: 'kisi2_konum', label: 'İfade Konumu', type: 'select', options: ['muhbir', 'müşteki', 'tanık', 'sorumlu/itham edilen'], width: 'half' },
                    { id: 'kisi2_konu_no', label: 'Konu/İddia No', type: 'text', placeholder: '1, 2', width: 'half' }
                ]
            },
            {
                title: 'İfadesi Alınacak Kişi 3',
                icon: '👤',
                fields: [
                    { id: 'kisi3_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'kisi3_unvan', label: 'Görevi/Unvanı', type: 'text', placeholder: 'Öğretmen', width: 'half' },
                    { id: 'kisi3_gorev_yeri', label: 'Görev Yeri', type: 'text', placeholder: '….. İli', width: 'half' },
                    { id: 'kisi3_konum', label: 'İfade Konumu', type: 'select', options: ['muhbir', 'müşteki', 'tanık', 'sorumlu/itham edilen'], width: 'half' },
                    { id: 'kisi3_konu_no', label: 'Konu/İddia No', type: 'text', placeholder: '1, 2', width: 'half' }
                ]
            },
            {
                title: 'Grup Üyesi Atamaları',
                icon: '👥',
                fields: [
                    { id: 'grup1_siralar', label: 'Grup Üyesi 1\'e Atanan Sıra No\'ları', type: 'text', placeholder: '1, 2', width: 'half' },
                    { id: 'grup1_uye', label: 'Grup Üyesi 1 Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'grup2_siralar', label: 'Grup Üyesi 2\'ye Atanan Sıra No\'ları', type: 'text', placeholder: '3', width: 'half' },
                    { id: 'grup2_uye', label: 'Grup Üyesi 2 Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' },
                    { id: 'mufettis3_ad_soyad', label: '3. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis3_kod', label: '3. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '9.1': {
        id: '9.1',
        name: 'Soruşturmaya Konu Olan Eşyaya Elkoyma Tutanağı',
        category: 'Elkoyma Tutanağı',
        type: 'tutanak',
        implemented: true,
        sections: [
            {
                title: 'Görevlendirme Bilgileri',
                icon: '📝',
                fields: [
                    { id: 'gorev_emri_tarih', label: 'Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'gorev_emri_sayi', label: 'Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'makam_oluru_tarih', label: 'Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'makam_oluru_sayi', label: 'Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'calisma_turu', label: 'Çalışma Türü', type: 'select', options: ['inceleme', 'soruşturma'], width: 'half', required: true }
                ]
            },
            {
                title: 'Hakkında Soruşturma Yapılan Kişi',
                icon: '👤',
                fields: [
                    { id: 'sorusturulan_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'sorusturulan_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'El Konulan Eşya Bilgileri',
                icon: '📦',
                fields: [
                    { id: 'esya_marka', label: 'Marka', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'esya_model', label: 'Model', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'esya_seri_no', label: 'Seri No / Plaka / Numara', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'esya_tanim', label: 'Eşya Tanımı (mal, eşya vb.)', type: 'text', placeholder: 'cep telefonu, bilgisayar, vb.', width: 'full', required: true }
                ]
            },
            {
                title: 'Tutanak Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'tarih', label: 'Tutanak Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'saat', label: 'Saat', type: 'time', width: 'half', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Mal Sahibi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'mal_sahibi_ad_soyad', label: 'Mal Sahibi Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'full', required: true }
                ]
            }
        ]
    },
    '10.1': {
        id: '10.1',
        name: 'İmza ve/veya Yazı Tespiti İçin Kriminal Daire Başkanlığına Yazılacak Yazı',
        category: 'İmza/Yazı Örneği Tespiti',
        type: 'yazi',
        implemented: true,
        sections: [
            {
                title: 'Belge Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true }
                ]
            },
            {
                title: 'İlgi Bilgileri',
                icon: '📝',
                fields: [
                    { id: 'makam_oluru_tarih', label: 'Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'makam_oluru_sayi', label: 'Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'gorev_emri_tarih', label: 'Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'gorev_emri_sayi', label: 'Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'calisma_turu', label: 'Çalışma Türü', type: 'select', options: ['inceleme', 'soruşturma'], width: 'half', required: true }
                ]
            },
            {
                title: 'Kişi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'kisi_ad_soyad', label: 'Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'kisi_tc', label: 'T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'İmza ve/veya Yazı Örneği Sayfa Sayısı', type: 'number', value: '1', width: 'half' }
                ]
            }
        ]
    },
    '10.2': {
        id: '10.2',
        name: 'İmza Tetkiki veya Yazı Yazdırılması Tespit Tutanağı',
        category: 'İmza/Yazı Örneği Tespiti',
        type: 'tutanak',
        implemented: true,
        sections: [
            {
                title: 'Çalışma Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'calisma_turu', label: 'Çalışma Türü', type: 'select', options: ['inceleme', 'soruşturma', 'ön inceleme'], width: 'half', required: true }
                ]
            },
            {
                title: 'Kişi Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'kisi_ad_soyad', label: 'Yazı/İmza Yazıldığını Belirtilen Kişi', type: 'text', placeholder: '….. …..', width: 'half', required: true },
                    { id: 'muhatap_ad_soyad', label: 'İddianın Muhatabı', type: 'text', placeholder: '….. …..', width: 'half', required: true }
                ]
            },
            {
                title: 'Tutanak Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'kurum_adi', label: 'Kurum Adı', type: 'text', placeholder: '….. İlkokulu/Ortaokulu/Lisesi/Müdürlüğü', width: 'full', required: true },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half', required: true },
                    { id: 'saat', label: 'Saat', type: 'time', width: 'half', required: true }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '✍️',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            },
            {
                title: 'Yer Tanığı',
                icon: '👤',
                fields: [
                    { id: 'tanik_ad_soyad', label: 'Yer Tanığı/Okul Müdürü Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'full', required: true }
                ]
            }
        ]
    },
    '10.2.1': {
        id: '10.2.1',
        name: 'İmza ve/veya Yazı Örneği Tespit Tutanağı',
        category: 'İmza/Yazı Örneği Tespiti',
        type: 'tutanak',
        implemented: true,
        sections: [
            {
                title: 'Bilgilendirme',
                icon: '📋',
                fields: [
                    { id: 'aciklama', label: 'Not', type: 'info', value: 'Bu form, imza ve yazı örneklerinin fiziksel olarak toplanması için yazdırılır. Formu PDF olarak indirip yazdırabilirsiniz.' }
                ]
            }
        ]
    },
    '11.1': {
        id: '11.1',
        name: 'Ön Rapor Kapağı',
        category: 'Ön Rapor',
        type: 'rapor',
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: '….. ….. …..', width: 'full' }
                ]
            },
            {
                title: 'Makam Bilgileri',
                icon: '🏛️',
                fields: [
                    { id: 'olur_veren_makam', label: 'İnceleme/Soruşturma Olurunu Veren Makam', type: 'text', placeholder: 'Bakanlık Makamı', width: 'full' },
                    { id: 'makam_oluru_tarih', label: 'Makam Oluru Tarihi', type: 'date', width: 'half' },
                    { id: 'makam_oluru_sayi', label: 'Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'gorev_emri_veren', label: 'Görev Emrini Veren Makam', type: 'text', placeholder: 'Teftiş Kurulu Başkanlığı', width: 'full' },
                    { id: 'gorev_emri_tarih', label: 'Görev Emri Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_emri_sayi', label: 'Görev Emri Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_unvan', label: '1. Müfettiş Unvanı', type: 'select', options: ['Bakanlık Başmüfettişi', 'Bakanlık Müfettişi'], width: 'half' },
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'mufettis2_unvan', label: '2. Müfettiş Unvanı', type: 'select', options: ['Bakanlık Başmüfettişi', 'Bakanlık Müfettişi'], width: 'half', required: false },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: false }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Detayları',
                icon: '📋',
                fields: [
                    { id: 'konu_detay', label: 'İnceleme/Soruşturmanın Konusu', type: 'textarea', placeholder: 'Bakanlık Makamının gg.aa.yyyy tarihli ve ….. sayılı olurunda yer alan "….. ….. ….." hususları', width: 'full', rows: 3 },
                    { id: 'fiil_tarihi', label: 'Fiil ve Hâlin İşlendiği Tarih', type: 'text', placeholder: '', width: 'half' },
                    { id: 'ogrenilme_tarihi', label: 'Fiil ve Hâlin İşlendiğinin Öğrenildiği Tarih', type: 'text', placeholder: '', width: 'half' },
                    { id: 'yapildigi_yer', label: 'İnceleme/Soruşturmanın Yapıldığı Yer', type: 'text', placeholder: '', width: 'full' },
                    { id: 'baslama_tarihi', label: 'İnceleme/Soruşturmanın Başlama Tarihi', type: 'date', width: 'half' }
                ]
            }
        ]
    },
    '11.2': {
        id: '11.2',
        name: 'Ön Rapor',
        category: 'Ön Rapor',
        type: 'rapor',
        implemented: true,
        sections: [
            {
                title: 'Rapor Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'rapor_no', label: 'Rapor No', type: 'text', placeholder: 'Ör: 2026/01', width: 'half' },
                    { id: 'tarih', label: 'Rapor Tarihi', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Giriş',
                icon: '📝',
                fields: [
                    { id: 'giris', label: 'Giriş Bölümü', type: 'textarea', placeholder: 'İnceleme/soruşturmanın konusu, kapsamı ve amacını belirten giriş metni...', width: 'full', rows: 5 }
                ]
            },
            {
                title: 'Tespitler',
                icon: '🔍',
                fields: [
                    { id: 'tespitler', label: 'Tespitler', type: 'textarea', placeholder: 'İnceleme/soruşturma sürecinde yapılan tespitler...', width: 'full', rows: 8 }
                ]
            },
            {
                title: 'Değerlendirme',
                icon: '⚖️',
                fields: [
                    { id: 'degerlendirme', label: 'Değerlendirme', type: 'textarea', placeholder: 'Tespitlerin hukuki ve idari açıdan değerlendirilmesi...', width: 'full', rows: 8 }
                ]
            },
            {
                title: 'Sonuç ve Kanaat',
                icon: '✅',
                fields: [
                    { id: 'sonuc', label: 'Sonuç ve Kanaat', type: 'textarea', placeholder: 'Varılan sonuç ve kanaat...', width: 'full', rows: 5 }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_unvan', label: '1. Müfettiş Unvanı', type: 'select', options: ['Bakanlık Başmüfettişi', 'Bakanlık Müfettişi'], width: 'half' },
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'mufettis2_unvan', label: '2. Müfettiş Unvanı', type: 'select', options: ['Bakanlık Başmüfettişi', 'Bakanlık Müfettişi', ''], width: 'half', required: false },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: false }
                ]
            }
        ]
    },
    '12.1': {
        id: '12.1',
        name: 'Disiplin Soruşturması Olur İstek Yazısı (Denetim esnasında)',
        category: 'Olur İstekleri',
        type: 'yazi',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…, …', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', value: 'Olur İsteği', width: 'full' }
                ]
            },
            {
                title: 'İlgi Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_tarih', label: 'Turne Emirleri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_sayi', label: 'Turne Emirleri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Denetim Bilgileri',
                icon: '🔍',
                fields: [
                    { id: 'denetim_il', label: 'Denetim İli', type: 'text', placeholder: 'Ankara', width: 'half' },
                    { id: 'denetim_ilce', label: 'Denetim İlçesi', type: 'text', placeholder: 'Çankaya', width: 'half' },
                    { id: 'okul_adi', label: 'Okul/Kurum Adı', type: 'text', placeholder: '….. Lisesi/İlkokulu/Ortaokulu', width: 'full' }
                ]
            },
            {
                title: 'Tespit Edilen Hususlar',
                icon: '⚠️',
                fields: [
                    {
                        id: 'iddia_secenekleri',
                        label: 'İddia Maddelerini Seçin (Checkbox ile seçin, bilgileri doldurun)',
                        type: 'checkboxlist',
                        width: 'full',
                        options: [
                            { value: 'header_mudur', label: '━━━ OKUL MÜDÜRÜ İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'mudur_1_1', label: '1.1. Bakmakla yükümlü olmadığı kişi için haksız tedavi/yol gideri aldığı', template: '1. İl/İlçe ….. ….. Lisesi/İlkokulu Müdürü ….. …..\'nın (T.C. Kimlik No: .…..);\\n1.1. Bakmakla yükümlü olmadığı oğlu/kızı ….. ….. ile ilgili olarak …. malî yılında tedavi ve yol gideri olan ….. TL\'yi haksız yere saymanlıktan aldığı,' },
                            { value: 'mudur_1_2', label: '1.2. Okul tesislerinin amacı dışında kullanılmasına sebebiyet verdiği', template: '1.2. Okulun kapalı spor salonunun amacı dışında kullanılmasına sebebiyet verdiği,' },
                            { value: 'header_yardimci', label: '━━━ MÜDÜR YARDIMCISI İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'yardimci_2_1', label: '2.1. Kaloriferleri yaktırmayarak tesisatın zarar görmesine sebep olduğu', template: '2. İl/İlçe ….. ….. Lisesi/İlkokulu Müdür Yardımcısı ….. …..\'nın (T.C. Kimlik No: .…..);\\n2.1. Okul müdürünün talimatına rağmen yarıyıl tatilinde, okul kaloriferlerini yaktırmamak suretiyle tesisatın zarar görmesine sebep olduğu,' },
                            { value: 'yardimci_2_2', label: '2.2. Bakmakla yükümlü olunmayan kişi için tahakkuk ettirdiği', template: '2.2. Okul Müdürü ….. …..\'nın bakmakla yükümlü olmadığı oğlu ….. ….. ile ilgili olarak …. malî yılında tedavi ve yol gideri olarak ….. TL\'yi tahakkuk ettirdiği,' },
                            { value: 'header_ogretmen', label: '━━━ ÖĞRETMEN İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'ogretmen_3_1', label: '3.1. Zümre öğretmenleri toplantısı kararlarına uygun davranmadığı', template: '3. İl/İlçe ….. ….. Lisesi/İlkokulu ….. Öğretmeni ….. …..\'nin (T.C. Kimlik No: .…..); 20../20.. Öğretim yılında sene başı zümre öğretmenleri toplantısında alınan kararlara uygun davranmadığı,' },
                            { value: 'header_diger', label: '━━━ DİĞER ━━━', isHeader: true, template: '' },
                            { value: 'serbest', label: 'Serbest metin ekle (yukarıdakiler dışında)', template: '... [Buraya kendi iddia metninizi yazın]' }
                        ]
                    },
                    { id: 'tespit_hususlar', label: 'Tespit Edilen Hususlar (Seçimleriniz buraya eklenir, düzenleyebilirsiniz)', type: 'textarea', placeholder: 'Yukarıdan iddia maddelerini seçin veya kendiniz yazın...\n\nÖrnek format:\n1. İl/İlçe ... Lisesi Müdürü ... ...nın (T.C. Kimlik No: ...);\n1.1. [İddia metni],\n1.2. [İddia metni],\n2. İl/İlçe ... Lisesi Müdür Yardımcısı ...nın (T.C. Kimlik No: ...);\n2.1. [İddia metni],\n...\nhususları ortaya çıkmıştır.', width: 'full', rows: 15 }
                ]
            },
            {
                title: 'Hakkında Olur İstenen Kişiler',
                icon: '👥',
                fields: [
                    { id: 'olur_istenen_kisiler', label: 'Disiplin Soruşturması Yapılacak Kişiler', type: 'textarea', placeholder: 'Kişi 1 (T.C. Kimlik No: ....);\\nKişi 2 (T.C. Kimlik No: ....)', width: 'full', rows: 4 }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '12.2': {
        id: '12.2',
        name: 'Disiplin Soruşturması Olur İstek Yazısı (İnceleme esnasında)',
        category: 'Olur İstekleri',
        type: 'yazi',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,…', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', value: 'Olur İsteği', width: 'full' }
                ]
            },
            {
                title: 'İlgi Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'a) Makam Oluru Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_a_sayi', label: 'a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true },
                    { id: 'ilgi_b_tarih', label: 'b) Görevlendirme Emri Tarihi', type: 'date', width: 'half', required: true },
                    { id: 'ilgi_b_sayi', label: 'b) Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half', required: true }
                ]
            },
            {
                title: 'Tespit Edilen Hususlar',
                icon: '⚠️',
                fields: [
                    {
                        id: 'iddia_secenekleri',
                        label: 'İddia Maddelerini Seçin (Checkbox ile seçin, bilgileri doldurun)',
                        type: 'checkboxlist',
                        width: 'full',
                        options: [
                            { value: 'header_mudur', label: '━━━ OKUL MÜDÜRÜ İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'mudur_1_1', label: '1.1. Bakmakla yükümlü olmadığı kişi için haksız tedavi/yol gideri aldığı', template: '1. İl/İlçe ….. ….. Lisesi/İlkokulu Müdürü ….. …..\'nın (T.C. Kimlik No: .…..);\\n1.1. Bakmakla yükümlü olmadığı oğlu/kızı ….. ….. ile ilgili olarak …. malî yılında tedavi ve yol gideri olan ….. TL\'yi haksız yere saymanlıktan aldığı,' },
                            { value: 'mudur_1_2', label: '1.2. Okul tesislerinin amacı dışında kullanılmasına sebebiyet verdiği', template: '1.2. Okulun kapalı spor salonunun amacı dışında kullanılmasına sebebiyet verdiği,' },
                            { value: 'mudur_1_3', label: '1.3. Görevine geç gelip görevinden erken ayrıldığı', template: '1.3. Görevine geç gelip görevinden erken ayrıldığı,' },
                            { value: 'mudur_1_4', label: '1.4. Okulun taşıtını özel işlerinde kullandığı', template: '1.4. Okulun taşıtını özel işlerinde kullandığı,' },
                            { value: 'header_yardimci', label: '━━━ MÜDÜR YARDIMCISI İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'yardimci_2_1', label: '2.1. Kaloriferleri yaktırmayarak tesisatın zarar görmesine sebep olduğu', template: '2. İl/İlçe ….. ….. Lisesi/İlkokulu Müdür Yardımcısı ….. …..\'nın (T.C. Kimlik No: .…..);\\n2.1. Okul müdürünün talimatına rağmen yarıyıl tatilinde, okul kaloriferlerini yaktırmamak suretiyle tesisatın zarar görmesine sebep olduğu,' },
                            { value: 'yardimci_2_2', label: '2.2. Bakmakla yükümlü olunmayan kişi için tahakkuk ettirdiği', template: '2.2. Okul Müdürü ….. …..\'nın bakmakla yükümlü olmadığı oğlu ….. ….. ile ilgili olarak …. malî yılında tedavi ve yol gideri olarak ….. TL\'yi tahakkuk ettirdiği,' },
                            { value: 'yardimci_2_3', label: '2.3. Öğrencisine tokat attığı', template: '2.3. Öğrencisine tokat attığı,' },
                            { value: 'header_ogretmen', label: '━━━ ÖĞRETMEN İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'ogretmen_3_1', label: '3.1. Zümre öğretmenleri toplantısı kararlarına uygun davranmadığı', template: '3. İl/İlçe ….. ….. Lisesi/İlkokulu ….. Öğretmeni ….. …..\'nin (T.C. Kimlik No: .…..);\\n3.1. 20../20.. Öğretim yılında sene başı zümre öğretmenleri toplantısında alınan kararlara uygun davranmadığı,' },
                            { value: 'ogretmen_3_2', label: '3.2. Okul bahçesinde sigara içtiği', template: '3.2. Okul bahçesinde sigara içtiği,' },
                            { value: 'ogretmen_3_3', label: '3.3. Amirine karşı kaba sözler söylediği', template: '3.3. Amirine karşı kaba sözler söylediği,' },
                            { value: 'header_diger', label: '━━━ DİĞER ━━━', isHeader: true, template: '' },
                            { value: 'serbest', label: 'Serbest metin ekle (yukarıdakiler dışında)', template: '... [Buraya kendi iddia metninizi yazın]' }
                        ]
                    },
                    { id: 'tespit_hususlar', label: 'Tespit Edilen Hususlar (Seçimleriniz buraya eklenir, düzenleyebilirsiniz)', type: 'textarea', placeholder: 'Yukarıdan iddia maddelerini seçin veya kendiniz yazın...\\n\\nÖrnek format:\\n1. İl/İlçe ... Lisesi Müdürü ... ...nın (T.C. Kimlik No: ...);\\n1.1. [İddia metni],\\n1.2. [İddia metni],\\n2. İl/İlçe ... Lisesi Müdür Yardımcısı ...nın (T.C. Kimlik No: ...);\\n2.1. [İddia metni],\\n...\\nhususları ortaya çıkmıştır.', width: 'full', rows: 15 }
                ]
            },
            {
                title: 'Hakkında Olur İstenen Kişiler',
                icon: '👥',
                fields: [
                    { id: 'olur_istenen_kisiler', label: 'Disiplin Soruşturması Yapılacak Kişiler', type: 'textarea', placeholder: '….. ….. Lisesi Müdürü ….. ….. (T.C. Kimlik No: …..), ….. ….. Lisesi Müdür Yardımcısı ….. ….. (T.C. Kimlik No: …..)', width: 'full', rows: 4 }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '13.1': {
        id: '13.1',
        name: 'İnceleme-Soruşturma Rapor Kapağı',
        category: 'İnceleme-Soruşturma Raporu',
        type: 'rapor',
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: '….. ….. hakkında', width: 'full' }
                ]
            },
            {
                title: 'Makam Bilgileri',
                icon: '🏛️',
                fields: [
                    { id: 'olur_veren_makam', label: 'Olur Veren Makam', type: 'text', placeholder: 'Bakanlık Makamı', width: 'full' },
                    { id: 'makam_oluru_tarih', label: 'Makam Oluru Tarihi', type: 'date', width: 'half' },
                    { id: 'makam_oluru_sayi', label: 'Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'gorev_emri_veren', label: 'Görev Emrini Veren Makam', type: 'text', placeholder: 'Teftiş Kurulu Başkanlığı', width: 'full' },
                    { id: 'gorev_emri_tarih', label: 'Görev Emri Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_emri_sayi', label: 'Görev Emri Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_unvan', label: '1. Müfettiş Unvanı', type: 'select', options: ['Bakanlık Başmüfettişi', 'Bakanlık Müfettişi'], width: 'half' },
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'mufettis2_unvan', label: '2. Müfettiş Unvanı', type: 'select', options: ['Bakanlık Başmüfettişi', 'Bakanlık Müfettişi', ''], width: 'half', required: false },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half', required: false }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Detayları',
                icon: '📋',
                fields: [
                    { id: 'konu_detay', label: 'İnceleme/Soruşturmanın Konusu', type: 'textarea', placeholder: 'Bakanlık Makamının gg.aa.yyyy tarihli ve ….. sayılı olurunda yer alan "….. ….. ….. ….." hususları', width: 'full', rows: 3 },
                    { id: 'fiil_tarihi', label: 'Fiil ve Hâlin İşlendiği Tarih', type: 'text', placeholder: '', width: 'half' },
                    { id: 'ogrenilme_tarihi', label: 'Fiil ve Hâlin İşlendiğinin Öğrenildiği Tarih', type: 'text', placeholder: '', width: 'half' },
                    { id: 'yapildigi_yer', label: 'İnceleme/Soruşturmanın Yapıldığı Yer', type: 'text', placeholder: '', width: 'full' },
                    { id: 'baslama_tarihi', label: 'İnceleme/Soruşturmanın Başlama Tarihi', type: 'date', width: 'half' },
                    { id: 'bitis_tarihi', label: 'İnceleme/Soruşturmanın Bitirilme Tarihi', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Hakkında Soruşturma Yapılanlar ve Teklifler',
                icon: '👥',
                fields: [
                    { id: 'hakkinda_sorusturma', label: 'Hakkında İnceleme/Soruşturma Yapılanlar ve Getirilen Teklifler', type: 'textarea', placeholder: 'İsim, unvan, TC Kimlik No ve teklif edilen ceza/işlem...', width: 'full', rows: 8 },
                    { id: 'mali_teklif_tutari', label: 'Mali Tekliflerin Toplam Tutarı', type: 'text', placeholder: '…..TL.-', width: 'half' },
                    { id: 'baska_rapor', label: 'Başka Rapor Düzenlenmiş ise Tarih ve Sayısı', type: 'text', placeholder: 'Düzenlenmemiştir.', value: 'Düzenlenmemiştir.', width: 'half' }
                ]
            }
        ]
    },
    '13.2': {
        id: '13.2',
        name: 'İnceleme-Soruşturma Raporu',
        category: 'İnceleme-Soruşturma Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./…,...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: '….. ….. Lisesi Yöneticileri', width: 'full' }
                ]
            },
            {
                title: 'İlgi Bilgileri',
                icon: '🔗',
                fields: [
                    { id: 'ilgi_a_tarih', label: 'a) Makam Oluru Tarihi', type: 'date', width: 'half' },
                    { id: 'ilgi_a_sayi', label: 'a) Makam Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'ilgi_b_tarih', label: 'b) Görevlendirme Emri Tarihi', type: 'date', width: 'half' },
                    { id: 'ilgi_b_sayi', label: 'b) Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Giriş Paragrafı',
                icon: '📝',
                fields: [
                    { id: 'hakkinda_kisiler', label: 'Hakkında İnceleme/Soruşturma Yapılanlar', type: 'textarea', placeholder: '….. ….. Lisesi Müdürü ….. ….., ….. öğretmeni ….. ….. ve memur ….. …..', width: 'full', rows: 3 },
                    { id: 'calisma_baslangic', label: 'Çalışma Başlangıç Tarihi', type: 'date', width: 'half' },
                    { id: 'calisma_bitis', label: 'Çalışma Bitiş Tarihi', type: 'date', width: 'half' }
                ]
            },
            {
                title: '1. İnceleme/Soruşturmanın Konusu',
                icon: '📋',
                fields: [
                    {
                        id: 'konu_secenekleri',
                        label: 'İddia Maddelerini Seçin',
                        type: 'checkboxlist',
                        width: 'full',
                        options: [
                            { value: 'header_mudur', label: '━━━ OKUL MÜDÜRÜ İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'konu_mudur_usulsuzluk', label: 'Okula gelen tüketim malzemesinin alımında usulsüzlük yaptığı', template: '1. Ankara/Çankaya ….. İlkokulu/Lisesi Müdürü ….. …..\'nin okula gelen tüketim malzemesinin alımında usulsüzlük yaptığı,' },
                            { value: 'konu_mudur_tesisler', label: 'Okul tesislerinin amacı dışında kullanılmasına sebebiyet verdiği', template: '2. Ankara/Çankaya ….. İlkokulu/Lisesi Müdürü ….. …..\'nin okulun kapalı spor salonunun amacı dışında kullanılmasına sebebiyet verdiği,' },
                            { value: 'konu_mudur_ogrenci', label: 'Öğrencilere fiziksel şiddet uyguladığı', template: '3. Ankara/Çankaya ….. İlkokulu/Lisesi Müdürü ….. …..\'nin öğrencilere fiziksel şiddet uyguladığı,' },
                            { value: 'header_ogretmen', label: '━━━ ÖĞRETMEN İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'konu_ogretmen_devamsizlik', label: 'Derslerine sık sık geç girdiği ve bazen okula hiç gelmediği', template: '4. Ankara/Çankaya ….. İlkokulu/Lisesi ….. Öğretmeni ….. …..\'ın derslerine sık sık geç girdiği ve bazen de okula hiç gelmediği,' },
                            { value: 'konu_ogretmen_zumre', label: 'Zümre kararlarına uygun davranmadığı', template: '5. Ankara/Çankaya ….. İlkokulu/Lisesi ….. Öğretmeni ….. …..\'ın zümre öğretmenleri toplantısı kararlarına uygun davranmadığı,' },
                            { value: 'header_memur', label: '━━━ MEMUR İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'konu_memur_hakaret', label: 'Vatandaşa hakaret ettiği ve fiziksel şiddet uyguladığı', template: '6. Ankara/Çankaya ….. İlkokulu/Lisesi Memuru ….. …..\'nın ev sahibi ….. …..\'ye caddede hakaret ettiği ve tokat attığı,' },
                            { value: 'header_yardimci', label: '━━━ MÜDÜR YARDIMCISI İDDİALARI ━━━', isHeader: true, template: '' },
                            { value: 'konu_yardimci_amir', label: 'Amirine kaba sözler söylediği', template: '7.1. Ankara/Çankaya ….. İlkokulu/Lisesi Müdür Yardımcısı ….. …..\'nın amirine kaba sözler söylediği,' },
                            { value: 'konu_yardimci_mobbing', label: 'Personele mobbing yaptığı', template: '7.2. Sınıf Öğretmeni ….. …..\'ye mobbing yaptığı,' },
                            { value: 'header_diger', label: '━━━ DİĞER ━━━', isHeader: true, template: '' },
                            { value: 'konu_serbest', label: 'Serbest metin ekle', template: '[Buraya kendi iddia metninizi yazın]' }
                        ]
                    },
                    { id: 'konusu_aciklama', label: 'İddialar Metni (Seçimleriniz buraya eklenir)', type: 'textarea', placeholder: 'İlgi (a)\'da kayıtlı Makam Olurunda yer alan;\n1. ...\n2. ...\niddiaları inceleme/soruşturmanın konusunu oluşturmaktadır (Ek: …/…).', width: 'full', rows: 12 }
                ]
            },
            {
                title: '2. Yapılan İnceleme/Soruşturma (Yöntem ve Süreç)',
                icon: '🔍',
                fields: [
                    {
                        id: 'yontem_secenekleri',
                        label: 'Yöntem ve Süreç Maddelerini Seçin',
                        type: 'checkboxlist',
                        width: 'full',
                        options: [
                            { value: 'yontem_2_1', label: '2.1. Makam Oluru ve ekleri incelenerek başlandı', template: '2.1. İnceleme ve soruşturma çalışmalarına ilgi (a) Makam Oluru ve ekleri incelenmek suretiyle başlanmıştır.' },
                            { value: 'yontem_2_2', label: '2.2. Vali/Kaymakam ile görüşüldü', template: '2.2. İnceleme ve soruşturma konusuyla ilgili olarak kendisi ile görüşülen İl Valisi / İlçe Kaymakamı "….. ….. ….." şeklinde açıklamalarda bulunmuştur.' },
                            { value: 'yontem_2_3', label: '2.3. Şikâyetçi ve tanıkların bilgilerine başvuruldu', template: '2.3. Şikâyetçi ….. …..\'nın (Ek: …/…); tanık olarak gösterilen öğretmenler ….. ….., ….. ….., ….. …..\'nın (Ek: …/…) bilgilerine başvurulmuştur.' },
                            { value: 'yontem_2_4', label: '2.4. Şikâyet edilenlerin ifadeleri alındı', template: '2.4. Şikâyet edilen Okul Müdürü ….. …..\'nın (Ek: …); öğretmen ….. …..\'nın (Ek:…) ve memur ….. …..\'nın (Ek: ...) ifadeleri alınmıştır.' },
                            { value: 'yontem_2_5', label: '2.5. İlgili kurumlardan belgeler alındı', template: '2.5. Ayrıca; iddia konuları ile ilgili olmak üzere İl / İlçe Millî Eğitim Müdürlüğünden gerekli belge örnekleri (Ek: …/…); okulu müdürlüğünden konuya ilişkin evrak (Ek: …/…); ….. ….. defterinin ilgili sayfalarının fotokopileri (Ek: …/…) alınarak raporumuza ek yapılmıştır.' },
                            { value: 'yontem_serbest', label: 'Serbest metin ekle', template: '[Buraya kendi yöntem metninizi yazın]' }
                        ]
                    },
                    { id: 'yontem_surec', label: 'Yöntem ve Süreç Metni (Seçimleriniz buraya eklenir)', type: 'textarea', placeholder: '2.1. ...\n2.2. ...\n2.3. ...', width: 'full', rows: 12 }
                ]
            },
            {
                title: '3. Bilgi-Belge ve İfadelerin Değerlendirilmesi',
                icon: '⚖️',
                fields: [
                    {
                        id: 'degerlendirme_secenekleri',
                        label: 'Değerlendirme Şablonlarını Seçin',
                        type: 'checkboxlist',
                        width: 'full',
                        options: [
                            { value: 'header_subut', label: '━━━ SÜBUTA EREN İDDİALAR ━━━', isHeader: true, template: '' },
                            { value: 'deger_subut_disiplin', label: 'Disiplin yönünden değerlendirme (657 sayılı Kanun)', template: 'Disiplin yönünden değerlendirildiğinde; ….. ….. Lisesi Müdürü ….. …..\'nin 657 sayılı Devlet Memurları Kanunu\'nun ödev ve sorumlulukları arasında yer alan "….. ….." hükmüne uymayarak ….. eyleminin faili durumunda olduğu ve fiilinin aynı Kanun\'un 125/… maddesinde yer alan "….. ….." kapsamına girdiği,' },
                            { value: 'deger_subut_adli', label: 'Adli yönden değerlendirme (TCK/4483)', template: 'Adli yönden değerlendirildiğinde; TCK kapsamında ….. suçunun tüm unsurlarının gerçekleştiği ve 4483 sayılı Kanun kapsamına girmediği anlaşıldığından hakkında ….. Cumhuriyet Başsavcılığına suç duyurusunda bulunulması gerektiği,' },
                            { value: 'deger_subut_idari', label: 'İdari yönden değerlendirme (nakil/görev değişikliği)', template: 'İdari yönden değerlendirildiğinde; ….. ….. nedenleriyle kamu yararı gözetilmesi ve hizmetin gereği olarak ….. ….. atanmasının uygun olacağı,' },
                            { value: 'deger_subut_mali', label: 'Mali yönden değerlendirme (tazmin)', template: 'Mali yönden değerlendirildiğinde; ….. TL\'nin yasal faiziyle birlikte tazmin edilmesi gerektiği,' },
                            { value: 'header_subut_degil', label: '━━━ SÜBUTA ERMEYEN İDDİALAR ━━━', isHeader: true, template: '' },
                            { value: 'deger_subut_degil', label: 'İddianın sübuta ermediği', template: 'Bu duruma göre, ….. …..\'nın ….. iddiasının sübuta ermediği anlaşılmaktadır.' },
                            { value: 'header_islem_yok', label: '━━━ İŞLEM GEREKTİRMEYEN ━━━', isHeader: true, template: '' },
                            { value: 'deger_islem_yok', label: 'Gerekli işlemler önceden tamamlandı', template: 'Bu duruma göre ….. konusunda gerekli işlemler önceden tamamlandığından ve "tek fiile tek ceza ilkesi" gereğince aynı fiilden dolayı ikinci defa ceza uygulamasına gidilemeyeceğinden ilgili hakkında bu konuda herhangi bir işleme yer olmadığı ortaya çıkmaktadır.' },
                            { value: 'deger_serbest', label: 'Serbest metin ekle', template: '[Buraya kendi değerlendirme metninizi yazın]' }
                        ]
                    },
                    { id: 'degerlendirme', label: 'Değerlendirme Metni (Seçimleriniz buraya eklenir)', type: 'textarea', placeholder: 'İlgi (a)\'da kayıtlı Makam Olurunda yer alan;\n3.1. "..." iddiası ile ilgili olarak;\n...\n3.2. "..." iddiası ile ilgili olarak;\n...', width: 'full', rows: 20 }
                ]
            },
            {
                title: '4. Sonuç–Kanaat ve Teklif',
                icon: '✅',
                fields: [
                    {
                        id: 'sonuc_secenekleri',
                        label: 'Sonuç ve Teklif Şablonlarını Seçin',
                        type: 'checkboxlist',
                        width: 'full',
                        options: [
                            { value: 'header_disiplin', label: '━━━ DİSİPLİN TEKLİFLERİ ━━━', isHeader: true, template: '' },
                            { value: 'sonuc_disiplin_uyari', label: 'a) Disiplin: Uyarı cezası', template: 'a) DİSİPLİN YÖNÜNDEN: ….. ….. Lisesi Müdürü ….. …..\'in (T.C. Kimlik No: .….) 657 sayılı Kanunun 125/A maddesi uyarınca UYARI cezası ile cezalandırılmasının;' },
                            { value: 'sonuc_disiplin_kinama', label: 'a) Disiplin: Kınama cezası', template: 'a) DİSİPLİN YÖNÜNDEN: ….. ….. Lisesi Müdürü ….. …..\'in (T.C. Kimlik No: .….) 657 sayılı Kanunun 125/B maddesi uyarınca KINAMA cezası ile cezalandırılmasının;' },
                            { value: 'sonuc_disiplin_kesinti', label: 'a) Disiplin: Aylıktan kesme cezası', template: 'a) DİSİPLİN YÖNÜNDEN: ….. ….. Lisesi Müdürü ….. …..\'in (T.C. Kimlik No: .….) 657 sayılı Kanunun 125/C maddesi uyarınca 1/… oranında AYLIKTAN KESME cezası ile cezalandırılmasının;' },
                            { value: 'sonuc_disiplin_durdurma', label: 'a) Disiplin: Kademe ilerlemesinin durdurulması cezası', template: 'a) DİSİPLİN YÖNÜNDEN: ….. ….. Lisesi Müdürü ….. …..\'in (T.C. Kimlik No: .….) 657 sayılı Kanunun 125/D maddesi uyarınca … yıl süreyle KADEME İLERLEMESİNİN DURDURULMASI cezası ile cezalandırılmasının;' },
                            { value: 'sonuc_disiplin_cikarma', label: 'a) Disiplin: Devlet memurluğundan çıkarma cezası', template: 'a) DİSİPLİN YÖNÜNDEN: ….. ….. Lisesi Müdürü ….. …..\'in (T.C. Kimlik No: .….) 657 sayılı Kanunun 125/E maddesi uyarınca DEVLET MEMURLUĞUNDAN ÇIKARMA cezası ile cezalandırılmasının;' },
                            { value: 'header_adli', label: '━━━ ADLİ TEKLİFLER ━━━', isHeader: true, template: '' },
                            { value: 'sonuc_adli_suc', label: 'b) Adli: Suç duyurusu', template: 'b) ADLİ YÖNDEN: ….. ….. hakkında ….. Cumhuriyet Başsavcılığına suç duyurusunda bulunulmasının;' },
                            { value: 'sonuc_adli_4483', label: 'b) Adli: 4483 Valiliğe tevdi', template: 'b) ADLİ YÖNDEN: Fiilinin 4483 sayılı Kanun kapsamında olduğu anlaşıldığından …… Valiliğine tevdi edilmesinin;' },
                            { value: 'header_idari', label: '━━━ İDARİ TEKLİFLER ━━━', isHeader: true, template: '' },
                            { value: 'sonuc_idari_nakil', label: 'c) İdari: Görev yeri değişikliği', template: 'c) İDARİ YÖNDEN: ….. …..\'nın….. ….. ….. ….. nedenleriyle, kamu yararı gözetilmesi ve hizmetin gereği olarak ….. ….. ….. atanmasının;' },
                            { value: 'header_mali', label: '━━━ MALİ TEKLİFLER ━━━', isHeader: true, template: '' },
                            { value: 'sonuc_mali_tazmin', label: 'd) Mali: Tazmin', template: 'd) MALİ YÖNDEN: ….. TL\'nin yasal faiziyle birlikte ….. …..\'dan tazmin edilmesinin;' },
                            { value: 'header_islem_yok', label: '━━━ İŞLEM GEREKTİRMEYEN ━━━', isHeader: true, template: '' },
                            { value: 'sonuc_islem_yok', label: 'İşleme yer olmadığı', template: '….. iddiası ile ilgili gerekli işlemler önceden tamamlandığından ilgili hakkında bu konuda yeni bir işleme yer olmadığı,' },
                            { value: 'sonuc_subut_degil', label: 'Sübuta ermediği', template: '….. iddiası sübuta ermediğinden herhangi bir işlem tayinine gerek olmadığı,' },
                            { value: 'sonuc_serbest', label: 'Serbest metin ekle', template: '[Buraya kendi sonuç metninizi yazın]' }
                        ]
                    },
                    { id: 'sonuc_kanaat_teklif', label: 'Sonuç, Kanaat ve Teklifler (Seçimleriniz buraya eklenir)', type: 'textarea', placeholder: 'Raporun önceki bölümlerinde açıklandığı üzere...\n\n4.1. ... iddiasının sübuta erdiği...\na) DİSİPLİN YÖNÜNDEN: ...\nb) ADLİ YÖNDEN: ...\nc) İDARİ YÖNDEN: ...\nd) MALİ YÖNDEN: ...\n\nyönündeki kanaatimizi arz ederiz.', width: 'full', rows: 20 }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ekler', label: 'Ekler', type: 'text', value: 'Dizi Pusulasına bağlı ekler (… Sayfa)', width: 'full' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '14.1': {
        id: '14.1',
        name: 'Ön İnceleme Raporu Kapağı',
        category: 'Ön İnceleme Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: '….. ….. …..', width: 'full' }
                ]
            },
            {
                title: 'Ön İnceleme Oluru Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'olur_veren_merci', label: 'Ön İnceleme Olurunu Veren Merci', type: 'text', value: 'Bakanlık Makamı', width: 'full' },
                    { id: 'olur_tarih', label: 'Ön İnceleme Olurunun Tarihi', type: 'date', width: 'half' },
                    { id: 'olur_sayi', label: 'Ön İnceleme Olurunun Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'ek_sure_tarih', label: 'Ek Süre Olurunun Tarihi (varsa)', type: 'date', width: 'half' },
                    { id: 'ek_sure_sayi', label: 'Ek Süre Olurunun Sayısı (varsa)', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Bakanlık ve Görev Emri Bilgileri',
                icon: '🏛️',
                fields: [
                    { id: 'bakanlik_olur_tarih', label: 'Bakanlık Olurunun Tarihi', type: 'date', width: 'half' },
                    { id: 'bakanlik_olur_sayi', label: 'Bakanlık Olurunun Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'gorev_emri_makam', label: 'Görev Emrini Veren Makam', type: 'text', value: 'Teftiş Kurulu Başkanlığı', width: 'full' },
                    { id: 'gorev_emri_tarih', label: 'Görev Emrinin Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_emri_sayi', label: 'Görev Emrinin Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_unvan', label: '1. Müfettiş Unvanı', type: 'select', options: ['Bakanlık Başmüfettişi', 'Bakanlık Müfettişi'], width: 'half' },
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'mufettis2_unvan', label: '2. Müfettiş Unvanı', type: 'select', options: ['Bakanlık Başmüfettişi', 'Bakanlık Müfettişi', ''], width: 'half' },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' }
                ]
            },
            {
                title: 'İnceleme Detayları',
                icon: '🔍',
                fields: [
                    { id: 'fiil_tarihi', label: 'Fiilin İşlendiği Tarih', type: 'date', width: 'half' },
                    { id: 'inceleme_yeri', label: 'Ön İncelemenin Yapıldığı Yer', type: 'text', placeholder: '…..', width: 'full' },
                    { id: 'ihbarci_sikayetci', label: 'İhbarcının/Şikâyetçinin Adı ve Soyadı (Yoksa Kamu Hukuku)', type: 'text', placeholder: '….. ….. / Kamu Hukuku', width: 'full' },
                    { id: 'baslangic_tarihi', label: 'Ön İncelemenin Başladığı Tarih', type: 'date', width: 'half' },
                    { id: 'bitis_tarihi', label: 'Ön İncelemenin Bitirildiği Tarih', type: 'date', width: 'half' },
                    { id: 'baska_rapor', label: 'Bu Konuda Başka Rapor Düzenlenmişse Tarihi ve Sayısı', type: 'text', placeholder: 'Düzenlenmemiştir.', width: 'full' }
                ]
            },
            {
                title: 'Ön İncelemenin Konusu',
                icon: '📝',
                fields: [
                    { id: 'inceleme_konusu', label: 'Ön İncelemenin Konusu', type: 'textarea', placeholder: '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..', width: 'full', rows: 3 }
                ]
            },
            {
                title: 'Haklarında Ön İnceleme Yapılanlar',
                icon: '👥',
                fields: [
                    { id: 'hakkinda_adi_soyadi', label: 'Adı Soyadı', type: 'textarea', placeholder: '….. …..\n….. …..\n….. …..', width: 'half', rows: 4 },
                    { id: 'hakkinda_gorevi', label: 'Görevi', type: 'textarea', placeholder: '….. Müdürü\n….. Öğretmeni\n….. Memuru', width: 'half', rows: 4 },
                    { id: 'hakkinda_isnat_edilen_fiil', label: 'İsnat Edilen Fiil', type: 'textarea', placeholder: '…..\n…..\n…..', width: 'half', rows: 4 },
                    { id: 'hakkinda_getirilen_teklif', label: 'Getirilen Teklif', type: 'textarea', placeholder: 'Soruşturma izni verilmesi\nMen-i muhakeme\n…..', width: 'half', rows: 4 }
                ]
            }
        ]
    },
    '14.2': {
        id: '14.2',
        name: 'Ön İnceleme Raporu',
        category: 'Ön İnceleme Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: '….. ….. Hakkında Ön İnceleme', width: 'full' }
                ]
            },
            {
                title: 'I. GİRİŞ',
                icon: '📋',
                fields: [
                    { id: 'bakanlik_olur_tarih', label: 'Bakanlık Makamı Olurunun Tarihi', type: 'date', width: 'half' },
                    { id: 'bakanlik_olur_sayi', label: 'Bakanlık Makamı Olurunun Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'gorev_emri_tarih', label: 'Görev Emrinin Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_emri_sayi', label: 'Görev Emrinin Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'baslangic_tarihi', label: 'Ön İnceleme Başlama Tarihi', type: 'date', width: 'half' },
                    { id: 'bitis_tarihi', label: 'Ön İnceleme Bitirilme Tarihi', type: 'date', width: 'half' },
                    { id: 'inceleme_yeri', label: 'Ön İncelemenin Yapıldığı Yer', type: 'text', placeholder: '…..', width: 'full' }
                ]
            },
            {
                title: 'II. İHBARCI/ŞİKÂYETÇİ',
                icon: '👤',
                fields: [
                    { id: 'ihbarci_adi_soyadi', label: 'Adı ve Soyadı (Yoksa "Kamu Hukuku" yazın)', type: 'text', placeholder: '….. ….. / Kamu Hukuku', width: 'half' },
                    { id: 'ihbarci_tc', label: 'T.C. Kimlik Numarası', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'ihbarci_gorevi', label: 'Görevi/İşi', type: 'text', placeholder: '…..', width: 'full' },
                    { id: 'ihbarci_gorev_adresi', label: 'Görev/İş Adresi ve Telefonu', type: 'text', placeholder: '…..', width: 'full' },
                    { id: 'ihbarci_ikamet_adresi', label: 'İkametgâh Adresi ve Telefonu', type: 'text', placeholder: '…..', width: 'full' }
                ]
            },
            {
                title: 'III. YETKİLİ MERCİİN ÖĞRENME TARİHİ',
                icon: '📅',
                fields: [
                    { id: 'ogrenme_tarihi', label: 'Yetkili Merciin Öğrenme Tarihi', type: 'date', width: 'half' },
                    { id: 'ogrenme_aciklama', label: 'Açıklama', type: 'textarea', placeholder: 'Yetkili merciin bu fiilleri nasıl öğrendiğine dair açıklama...', width: 'full', rows: 3 }
                ]
            },
            {
                title: 'IV. FİİL YERİ VE TARİHİ',
                icon: '📍',
                fields: [
                    { id: 'fiil_yeri', label: 'Fiilin İşlendiği Yer', type: 'text', placeholder: '…..', width: 'full' },
                    { id: 'fiil_tarihi', label: 'Fiilin İşlendiği Tarih', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'V. HAKKINDA ÖN İNCELEME YAPILANLAR',
                icon: '👥',
                fields: [
                    { id: 'hakkinda_bilgiler', label: 'Haklarında Ön İnceleme Yapılanların Bilgileri', type: 'textarea', placeholder: '1. Adı Soyadı: ..... .....\n   T.C. Kimlik No: .....\n   Görevi (Halen): .....\n   Görevi (Fiil Tarihi): .....\n   İkametgâh Adresi: .....\n   Telefon: .....\n\n2. Adı Soyadı: ..... .....\n   ...', width: 'full', rows: 10 }
                ]
            },
            {
                title: 'VI. ÖN İNCELEMENİN KONUSU',
                icon: '📝',
                fields: [
                    { id: 'inceleme_konusu', label: 'Ön İncelemenin Konusu', type: 'textarea', placeholder: 'Ön inceleme yapılması istenilen konular belirtilir...', width: 'full', rows: 5 }
                ]
            },
            {
                title: 'VII. YAPILAN ÖN İNCELEME ÇALIŞMALARI',
                icon: '🔍',
                fields: [
                    { id: 'yapilan_calismalar', label: 'Yapılan Ön İnceleme Çalışmaları', type: 'textarea', placeholder: 'Ön inceleme konularında yapılan inceleme çalışmaları belirtilir.\n- İhbarcı/şikâyetçinin ifadesine ve varsa sunduğu bilgi ve belgelere yer verilir.\n- Konularla ilgili bilgi ve incelenen belgeler açıklanır.\n- Dinlenen tanıklar ile haklarında ön inceleme yapılanların ifadelerine yer verilir.', width: 'full', rows: 15 }
                ]
            },
            {
                title: 'VIII. BİLGİ, BELGE VE İFADELERİN DEĞERLENDİRİLMESİ',
                icon: '⚖️',
                fields: [
                    { id: 'degerlendirme', label: 'Bilgi, Belge ve İfadelerin Değerlendirilmesi', type: 'textarea', placeholder: 'İnceleme çalışmalarında elde edilen veriler, ilgili mevzuat dâhilinde irdelenip değerlendirilir.\nOluşan görüş ve kanaat, suçla ilgili kanun maddeleri açıklanmak suretiyle belirtilir.', width: 'full', rows: 15 }
                ]
            },
            {
                title: 'IX. SONUÇ, KANAAT VE TEKLİF',
                icon: '✅',
                fields: [
                    { id: 'sonuc_kanaat', label: 'Sonuç, Kanaat ve Teklif', type: 'textarea', placeholder: 'Haklarında ön inceleme yapılanların suç teşkil eden veya etmeyen fiilleri belirtilmek suretiyle, yetkili merci tarafından 4483 sayılı Kanun\'un 6 ncı maddesi gereğince alınacak karara esas olmak üzere "soruşturma izni verilmesi" veya "soruşturma izni verilmemesi" şeklinde kanaat belirtilir.', width: 'full', rows: 15 }
                ]
            },
            {
                title: 'Ekler',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'Sayfa Sayısı', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ek_adet', label: 'Adet', type: 'text', placeholder: '…', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '15.1': {
        id: '15.1',
        name: 'Cumhuriyet Başsavcılığına Suç Duyurusu Yazısı/Raporu Kapağı',
        category: 'Suç Duyurusu-Tevdi Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: '….. ….. ….. …..', width: 'full' }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Oluru',
                icon: '📋',
                fields: [
                    { id: 'olur_makam', label: 'İnceleme/Soruşturma Olurunu Veren Makam', type: 'text', placeholder: 'Bakanlık Makamı', width: 'full' },
                    { id: 'olur_tarih', label: 'Makam Olurunun Tarihi', type: 'date', width: 'half' },
                    { id: 'olur_sayi', label: 'Makam Olurunun Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Görev Emri',
                icon: '📝',
                fields: [
                    { id: 'gorev_makam', label: 'Görev Emrini Veren Makam', type: 'text', placeholder: 'Teftiş Kurulu Başkanlığı', width: 'full' },
                    { id: 'gorev_tarih', label: 'Görevlendirme Emrinin Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_sayi', label: 'Görevlendirme Emrinin Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Bilgileri',
                icon: '🔍',
                fields: [
                    { id: 'talep_merci', label: 'İnceleme/Soruşturma Talep Eden Merci', type: 'text', width: 'full' },
                    { id: 'olur_alan_birim', label: 'İnceleme/Soruşturma Olurunu Alan Birim', type: 'text', width: 'full' },
                    { id: 'ihbarci_sikayetci', label: 'İhbarcı veya Şikâyetçinin Adı-Soyadı', type: 'text', width: 'full' },
                    { id: 'mufettisler', label: 'İnceleme/Soruşturma Çalışmasını Yürüten Bakanlık Müfettişleri', type: 'textarea', width: 'full' },
                    { id: 'inceleme_yeri', label: 'İnceleme/Soruşturmanın Yapıldığı Yer', type: 'text', width: 'full' },
                    { id: 'baslangic_tarihi', label: 'İnceleme/Soruşturmanın Başladığı Tarih', type: 'date', width: 'half' },
                    { id: 'bitis_tarihi', label: 'İnceleme/Soruşturmanın Bitirildiği Tarih', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Suç Duyurusu Bilgileri',
                icon: '⚖️',
                fields: [
                    { id: 'suc_duyurusu_konusu', label: 'Suç Duyurusunun Konusu', type: 'textarea', width: 'full' },
                    { id: 'suc_kanun_maddesi', label: 'Suçla İlgili Kanun Maddesi', type: 'text', width: 'full' },
                    { id: 'suc_tarihi', label: 'Suçun İşlendiği Tarih', type: 'date', width: 'half' },
                    { id: 'suc_yeri', label: 'Suçun İşlendiği Yer', type: 'text', width: 'half' }
                ]
            },
            {
                title: 'Hakkında Duyuru Yapılanlar',
                icon: '👤',
                fields: [
                    { id: 'duyuru_yapilanlar', label: 'Hakkında Duyuru Yapılanların\nAdı ve Soyadı, Kimlik Numarası\nGörevi/İşi ve Adresi', type: 'textarea', width: 'full', rows: 4 }
                ]
            },
            {
                title: 'Diğer Bilgiler',
                icon: '📎',
                fields: [
                    { id: 'baska_rapor', label: 'Bu Konuda Başka Rapor Düzenlenmiş ise Tarih ve Sayısı', type: 'text', width: 'full' }
                ]
            }
        ]
    },
    '15.2': {
        id: '15.2',
        name: 'Cumhuriyet Başsavcılığına Suç Duyurusu Yazısı/Raporu',
        category: 'Suç Duyurusu-Tevdi Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: 'Suç Duyurusu', width: 'full' },
                    { id: 'bassavcilik', label: 'Cumhuriyet Başsavcılığı', type: 'text', placeholder: '….. Cumhuriyet Başsavcılığına', width: 'full' }
                ]
            },
            {
                title: 'İlgi Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'bakanlik_olur_tarih', label: 'Bakanlık Makamı Olur Tarihi', type: 'date', width: 'half' },
                    { id: 'bakanlik_olur_sayi', label: 'Bakanlık Makamı Olur Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'gorev_emri_tarih', label: 'Görevlendirme Emri Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_emri_sayi', label: 'Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Bilgileri',
                icon: '🔍',
                fields: [
                    { id: 'calisma_turu', label: 'Çalışma Türü', type: 'select', options: ['inceleme', 'soruşturma', 'ön inceleme'], width: 'half' },
                    { id: 'baslangic_tarihi', label: 'Çalışma Başlangıç Tarihi', type: 'date', width: 'half' },
                    { id: 'bitis_tarihi', label: 'Çalışma Bitiş Tarihi', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Suç Duyurusu Bilgileri',
                icon: '⚖️',
                fields: [
                    { id: 'suc_duyurusu_konusu', label: 'Suç Duyurusunun Konusu', type: 'textarea', width: 'full', rows: 3 }
                ]
            },
            {
                title: 'Hakkında Suç Duyurusu Yapılanlar',
                icon: '👤',
                fields: [
                    { id: 'sanik_adi_soyadi', label: 'Adı ve Soyadı', type: 'text', width: 'full' },
                    { id: 'sanik_tc', label: 'T.C. Kimlik Numarası', type: 'text', width: 'half' },
                    { id: 'sanik_gorevi', label: 'Görevi/İşi ve Adresi', type: 'textarea', width: 'full', rows: 2 }
                ]
            },
            {
                title: 'Suç Bilgileri',
                icon: '📅',
                fields: [
                    { id: 'suc_ogrenme_tarihi', label: 'Suçu Öğrenme Tarihi', type: 'date', width: 'half' },
                    { id: 'suc_yeri', label: 'Suç Yeri', type: 'text', width: 'half' },
                    { id: 'suc_tarihi', label: 'Suç Tarihi', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Açıklama, Tahlil ve Sonuç - Olay Bilgileri',
                icon: '📝',
                description: 'Suç duyurusuna konu fiil/olayların detayları',
                fields: [
                    { id: 'il_adi', label: 'İl Adı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'merkez_okul_turu', label: 'Merkez Okul Türü', type: 'text', placeholder: 'İlköğretim', width: 'half' },
                    { id: 'komur_kaynagi', label: 'Kömür Kaynağı (Şehir)', type: 'text', placeholder: 'Şırnak', width: 'half' },
                    { id: 'ilk_komur_miktari', label: 'İlk Tahsis Kömür Miktarı (ton)', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'encumen_karar_tarih1', label: '1. Encümen Kararı Tarihi', type: 'date', width: 'half' },
                    { id: 'encumen_karar_sayi1', label: '1. Encümen Kararı Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'kanun_no', label: 'Kanun Numarası', type: 'text', value: '4734', width: 'half' },
                    { id: 'kanun_madde', label: 'Kanun Maddesi', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ilk_tasima_bedeli', label: '1. Taşıma Bedeli (TL)', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'yuklenici_adi', label: 'Yüklenici Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'mali_yil', label: 'Mali Yılı', type: 'text', placeholder: '….', width: 'half' },
                    { id: 'ek_no_1', label: 'Ek No (İlk Karar)', type: 'text', placeholder: '…/…', width: 'half' },
                    { id: 'encumen_karar_tarih2', label: '2. Encümen Kararı Tarihi', type: 'date', width: 'half' },
                    { id: 'encumen_karar_sayi2', label: '2. Encümen Kararı Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'ikinci_komur_miktari', label: '2. Kömür Miktarı (ton)', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ikinci_tasima_bedeli', label: '2. Taşıma Bedeli (TL)', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'ek_no_2', label: 'Ek No (İkinci Karar)', type: 'text', placeholder: '…', width: 'half' }
                ]
            },
            {
                title: 'Açıklama - Tespit Edilen Durum',
                icon: '🔍',
                fields: [
                    { id: 'okul_adi', label: 'Okul Adı (Tespitin Yapıldığı)', type: 'text', placeholder: '….. ….. İlkokulu', width: 'full' },
                    { id: 'kamyon_sayisi', label: 'Kamyon Sayısı', type: 'text', placeholder: '6', width: 'half' },
                    { id: 'planlanan_miktar', label: 'Teslimi Amaçlanan Miktar (ton)', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ek_no_planlanan', label: 'Ek No (Planlanan Miktar)', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'eksik_miktar', label: 'Eksik Tespit Edilen Miktar (ton)', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ek_no_eksik', label: 'Ek No (Eksik Tespit)', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ek_no_intikal', label: 'Ek No (Müdürlüğe İntikal)', type: 'text', placeholder: '...', width: 'half' },
                    { id: 'valilik_olur_tarih', label: 'Valilik Oluru Tarihi', type: 'date', width: 'half' },
                    { id: 'valilik_olur_sayi', label: 'Valilik Oluru Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'onceki_mufettis1', label: 'Önceki Müfettiş 1 Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'onceki_mufettis2', label: 'Önceki Müfettiş 2 Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'ek_no_gorevlendirme', label: 'Ek No (Görevlendirme)', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ek_no_ifade_belge', label: 'Ek No (İfade ve Belgeler)', type: 'text', placeholder: '…/...', width: 'half' }
                ]
            },
            {
                title: 'Açıklama - Tespit Detayları',
                icon: '📋',
                fields: [
                    { id: 'bosaltma_yeri', label: 'Kömür Boşaltma Yeri', type: 'text', placeholder: '…...', width: 'full' },
                    { id: 'ek_no_sofor_ifade', label: 'Ek No (Şoför İfadeleri)', type: 'text', placeholder: '…/…', width: 'half' }
                ]
            },
            {
                title: 'Sonuç - Diğer İlgililer',
                icon: '⚖️',
                fields: [
                    { id: 'ogretim_yili', label: 'Öğretim Yılı', type: 'text', placeholder: '…./….', width: 'half' },
                    { id: 'mutemed_adi', label: 'Mutemed Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'mutemed_tc', label: 'Mutemed T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'zimmet_yazi_tarih', label: 'Zimmet Yazısı Tarihi', type: 'date', width: 'half' },
                    { id: 'zimmet_yazi_sayi', label: 'Zimmet Yazısı Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'tck_madde', label: 'TCK Maddesi', type: 'text', value: '247', width: 'half' }
                ]
            },
            {
                title: 'Sonuç - Yüklenici Detay Bilgileri',
                icon: '👤',
                fields: [
                    { id: 'yuklenici_baba_adi', label: 'Yüklenici Baba Adı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'yuklenici_dogum_yili', label: 'Yüklenici Doğum Yılı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'yuklenici_adresi', label: 'Yüklenici Adresi', type: 'text', placeholder: '….. ….. ….. …..', width: 'full' },
                    { id: 'yuklenici_tc', label: 'Yüklenici T.C. Kimlik No', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Kapanış ve Teklif',
                icon: '✍️',
                fields: [
                    { id: 'teklif_edilen_suc', label: 'Teklif Edilen Suç/Fiil', type: 'text', value: 'taahhüt ettiği kömür miktarında hile yapmak suretiyle Devleti zarara uğratmak ve haksız kazanç sağlamak', width: 'full' },
                    { id: 'yasal_dayanak', label: 'Yasal Dayanak', type: 'text', value: 'genel hükümler', width: 'full' }
                ]
            },
            {
                title: 'Ek Bilgileri',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ek_adet', label: 'Ek Adet', type: 'text', placeholder: '…', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '15.3': {
        id: '15.3',
        name: 'Diğer Bakanlık Mensupları Suç Duyurusu Yazısı/Raporu Kapağı',
        category: 'Suç Duyurusu-Tevdi Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: '….. ….. …..', width: 'full' }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Oluru',
                icon: '📋',
                fields: [
                    { id: 'olur_makam', label: 'İnceleme/Soruşturma Olurunu Veren Makam', type: 'text', value: 'Bakanlık Makamı', width: 'full' },
                    { id: 'olur_tarih', label: 'Makam Olurunun Tarihi', type: 'date', width: 'half' },
                    { id: 'olur_sayi', label: 'Makam Olurunun Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Görev Emri',
                icon: '📝',
                fields: [
                    { id: 'gorev_makam', label: 'Görev Emrini Veren Makam', type: 'text', value: 'Teftiş Kurulu Başkanlığı', width: 'full' },
                    { id: 'gorev_tarih', label: 'Görevlendirme Emrinin Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_sayi', label: 'Görevlendirme Emrinin Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Bilgileri',
                icon: '🔍',
                fields: [
                    { id: 'talep_merci', label: 'İnceleme/Soruşturma Talep Eden Merci', type: 'text', width: 'full' },
                    { id: 'olur_alan_birim', label: 'İnceleme/Soruşturma Olurunu Alan Birim', type: 'text', width: 'full' },
                    { id: 'ihbarci_sikayetci', label: 'İhbarcı veya Şikâyetçinin Adı, Soyadı', type: 'text', width: 'full' },
                    { id: 'mufettisler', label: 'İnceleme/Soruşturma Çalışmasını Yürüten Bakanlık Müfettişleri', type: 'textarea', width: 'full', rows: 3 },
                    { id: 'inceleme_yeri', label: 'İnceleme/Soruşturmanın Yapıldığı Yer', type: 'text', width: 'full' },
                    { id: 'baslangic_tarihi', label: 'İnceleme/Soruşturmanın Başladığı Tarih', type: 'date', width: 'half' },
                    { id: 'bitis_tarihi', label: 'İnceleme/Soruşturmanın Bitirildiği Tarih', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Suç Duyurusu Bilgileri',
                icon: '⚖️',
                fields: [
                    { id: 'suc_duyurusu_konusu', label: 'Suç Duyurusunun Konusu', type: 'textarea', width: 'full', rows: 3 },
                    { id: 'suc_kanun_maddesi', label: 'Suçla İlgili Kanun Maddesi', type: 'text', width: 'full' },
                    { id: 'suc_tarihi', label: 'Suçun İşlendiği Tarih', type: 'date', width: 'half' },
                    { id: 'suc_yeri', label: 'Suçun İşlendiği Yer', type: 'text', width: 'half' }
                ]
            },
            {
                title: 'Hakkında Duyuru Yapılanlar',
                icon: '👤',
                fields: [
                    { id: 'duyuru_yapilanlar', label: 'Hakkında Duyuru Yapılanların\nAdı ve Soyadı, Kimlik Numarası\nGörevi/İşi ve Adresi', type: 'textarea', width: 'full', rows: 4 }
                ]
            },
            {
                title: 'Diğer Bilgiler',
                icon: '📎',
                fields: [
                    { id: 'baska_rapor', label: 'Bu Konuda Başka Rapor Düzenlenmiş ise Tarih ve Sayısı', type: 'text', width: 'full' }
                ]
            }
        ]
    },
    '15.4': {
        id: '15.4',
        name: 'Diğer Bakanlık Mensupları ile İlgili Suç Duyurusu Yazısı/Raporu',
        category: 'Suç Duyurusu-Tevdi Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', value: 'Suç Duyurusu', width: 'full' },
                    { id: 'bakanlik', label: 'Muhatap Bakanlık', type: 'text', placeholder: '….. ….. BAKANLIĞINA', width: 'full' }
                ]
            },
            {
                title: 'İlgi Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'bakanlik_olur_tarih', label: 'Bakanlık Makamı Olur Tarihi', type: 'date', width: 'half' },
                    { id: 'bakanlik_olur_sayi', label: 'Bakanlık Makamı Olur Sayısı', type: 'text', placeholder: '…..', width: 'half' },
                    { id: 'gorev_emri_tarih', label: 'Görevlendirme Emri Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_emri_sayi', label: 'Görevlendirme Emri Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Bilgileri',
                icon: '🔍',
                fields: [
                    { id: 'baslangic_tarihi', label: 'İnceleme/Soruşturma Başlangıç Tarihi', type: 'date', width: 'half' },
                    { id: 'bitis_tarihi', label: 'İnceleme/Soruşturma Bitiş Tarihi', type: 'date', width: 'half' },
                    {
                        id: 'inceleme_konusu', label: 'İnceleme/Soruşturma Konusu', type: 'textarea', placeholder: '….. ….. İlkokulu kışlık kömür nakliye ve tesellüm işleri', width: 'full', rows: 2
                    },
                    { id: 'kurum_adi', label: 'İlgili Kurum/Kuruluş', type: 'text', placeholder: '….. ….. İlkokulu', width: 'full' }
                ]
            },
            {
                title: 'Açıklama ve Tespit - Paragraf 1',
                icon: '📝',
                fields: [
                    { id: 'okul1_adi', label: 'Okul Adı (tahsis edilen)', type: 'text', placeholder: '….. ….. İlkokulu', width: 'full' },
                    { id: 'muteahhit_adi', label: 'Müteahhit Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'memur_adi', label: 'MEM Memuru Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'meydan_yeri', label: 'Kömür Boşaltma Yeri', type: 'text', placeholder: '….. yanındaki meydan', width: 'full' }
                ]
            },
            {
                title: 'Açıklama ve Tespit - Paragraf 2',
                icon: '📝',
                fields: [
                    { id: 'okul2_adi', label: 'Alan Yanındaki Okul', type: 'text', placeholder: '….. Okulu', width: 'full' },
                    { id: 'traktor1_surucu', label: '1. Traktör Sürücüsü', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'traktor1_plaka', label: '1. Traktör Plakası', type: 'text', placeholder: '.. … ….', width: 'half' },
                    { id: 'traktor2_surucu', label: '2. Traktör Sürücüsü', type: 'text', placeholder: '….. …..', width: 'half' },
                    { id: 'traktor2_plaka', label: '2. Traktör Plakası', type: 'text', placeholder: '.. … ….', width: 'half' },
                    { id: 'hedef_okul', label: 'Kömür Götürülen Okul', type: 'text', placeholder: '….. ….. İlkokulu', width: 'full' },
                    { id: 'kantar_fis_no', label: 'Kantar Tartı Fişi Numaraları', type: 'text', placeholder: '(…)', width: 'half' },
                    { id: 'belediye_adi', label: 'Belediye Adı', type: 'text', placeholder: '….. Belediyesi', width: 'half' },
                    { id: 'kantar_memuru_adi', label: 'Kantar Memuru Adı Soyadı', type: 'text', placeholder: '….. …..', width: 'full' },
                    { id: 'fis_tonaj', label: 'Fişlerdeki Tonaj', type: 'text', placeholder: '(...)', width: 'half' },
                    { id: 'eksik_tonaj', label: 'Eksik Götürülen Tonaj', type: 'text', placeholder: 'iki buçuk ton', width: 'half' }
                ]
            },
            {
                title: 'Açıklama ve Tespit - Paragraf 3',
                icon: '📝',
                fields: [
                    { id: 'belediye_baskanligi', label: 'Yazışma Yapılan Belediye', type: 'text', placeholder: '….. Belediye Başkanlığı', width: 'full' }
                ]
            },
            {
                title: 'Hakkında Suç Duyurusu Yapılan',
                icon: '👤',
                fields: [
                    { id: 'sanik_kurumu', label: 'Mensubu Olduğu Kurum', type: 'text', placeholder: '….. Belediye Başkanlığı', width: 'full' },
                    { id: 'sanik_adi_soyadi', label: 'Adı ve Soyadı', type: 'text', width: 'full' },
                    { id: 'sanik_gorevi', label: 'Görevi', type: 'text', placeholder: 'Kantar Memuru', width: 'full' },
                    { id: 'sucun_tanimi', label: 'İsnat Edilen Suçun Tanımı', type: 'textarea', placeholder: 'Açıktan kantar tartı fişi düzenlemek suretiyle görevini kötüye kullanan...', width: 'full', rows: 3 }
                ]
            },
            {
                title: 'Sonuç ve Teklif',
                icon: '✅',
                fields: [
                    { id: 'tevdi_bakanlik', label: 'Suç Duyurusu Yapılacak Bakanlık', type: 'text', placeholder: 'İçişleri Bakanlığı', width: 'full' }
                ]
            },
            {
                title: 'Ek Bilgileri',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ek_adet', label: 'Ek Adet', type: 'text', placeholder: '…', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '15.5': {
        id: '15.5',
        name: '4483 sayılı Kanuna Göre Yetkili Mercie Tevdi Yazısı/Raporu Kapağı',
        category: 'Suç Duyurusu-Tevdi Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: '….. ….. …..', width: 'full' }
                ]
            },
            {
                title: 'Yetkili Merci',
                icon: '🏛️',
                fields: [
                    { id: 'yetkili_merci', label: 'Tevdi Yazısının/Suç Duyurusunun Sunulduğu Yetkili Merciin Unvanı', type: 'text', placeholder: '….. Valiliği / ….. Kaymakamlığı', width: 'full' }
                ]
            },
            {
                title: 'İnceleme/Soruşturma Oluru',
                icon: '📋',
                fields: [
                    { id: 'olur_makam', label: 'İnceleme/Soruşturma Olurunu Veren Makam', type: 'text', value: 'Bakanlık Makamı', width: 'full' },
                    { id: 'olur_tarih', label: 'Makam Olurunun Tarihi', type: 'date', width: 'half' },
                    { id: 'olur_sayi', label: 'Makam Olurunun Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Görev Emri',
                icon: '📝',
                fields: [
                    { id: 'gorev_makam', label: 'Görev Emrini Veren Makam', type: 'text', value: 'Teftiş Kurulu Başkanlığı', width: 'full' },
                    { id: 'gorev_tarih', label: 'Görevlendirme Emrinin Tarihi', type: 'date', width: 'half' },
                    { id: 'gorev_sayi', label: 'Görevlendirme Emrinin Sayısı', type: 'text', placeholder: '…..', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettisler', label: 'İnceleme/Soruşturma Çalışmasını Yürüten Bakanlık Müfettişleri', type: 'textarea', placeholder: 'Bakanlık Başmüfettişi ….. …..\nBakanlık Müfettişi ….. …..', width: 'full', rows: 3 }
                ]
            },
            {
                title: 'Fiil Bilgileri',
                icon: '⚠️',
                fields: [
                    { id: 'fiil_konusu', label: 'İşlenen Fiilin Konusu', type: 'textarea', width: 'full', rows: 2 },
                    { id: 'fiil_yeri', label: 'Fiilin Yapıldığı Yer', type: 'text', width: 'full' },
                    { id: 'fiil_baslangic_tarihi', label: 'Fiilin Başladığı Tarih', type: 'date', width: 'half' },
                    { id: 'fiil_bitis_tarihi', label: 'Fiilin Bitirildiği Tarih', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Suç Duyurusu Bilgileri',
                icon: '⚖️',
                fields: [
                    { id: 'suc_duyurusu_konusu', label: 'Tevdi Yazısı/Suç Duyurusunun Konusu', type: 'textarea', width: 'full', rows: 3 },
                    { id: 'suc_kanun_maddesi', label: 'Suçla İlgili Kanun Maddesi', type: 'text', width: 'full' },
                    { id: 'suc_tarihi', label: 'Suçun İşlendiği Tarih', type: 'date', width: 'half' },
                    { id: 'suc_yeri', label: 'Suçun İşlendiği Yer', type: 'text', width: 'half' }
                ]
            },
            {
                title: 'Hakkında Duyuru Yapılanlar',
                icon: '👤',
                fields: [
                    { id: 'duyuru_yapilanlar', label: 'Hakkında Duyuru Yapılanların\nAdı ve Soyadı, Kimlik Numarası\nGörevi/İşi ve Adresi', type: 'textarea', width: 'full', rows: 4 }
                ]
            },
            {
                title: 'Diğer Bilgiler',
                icon: '📎',
                fields: [
                    { id: 'baska_rapor', label: 'Bu Konuda Başka Rapor Düzenlenmiş ise Tarih ve Sayısı', type: 'text', width: 'full' }
                ]
            }
        ]
    },
    '15.6': {
        id: '15.6',
        name: '4483 sayılı Kanuna Göre Yetkili Mercie Yapılacak Tevdi Yazısı/Raporu',
        category: 'Suç Duyurusu-Tevdi Raporu',
        type: 'rapor',
        hasOzelHeader: true,
        implemented: true,
        sections: [
            {
                title: 'Evrak Bilgileri',
                icon: '📄',
                fields: [
                    { id: 'sayi', label: 'Sayı', type: 'text', placeholder: '…./.., ...', width: 'half' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' },
                    { id: 'konu', label: 'Konu', type: 'text', placeholder: 'Tevdi Yazısı', width: 'full' }
                ]
            },
            {
                title: 'Yetkili Merci',
                icon: '🏛️',
                fields: [
                    { id: 'yetkili_merci', label: 'Tevdi Yazısının Sunulduğu Yetkili Merciin Unvanı', type: 'text', placeholder: '….. Valiliği / ….. Kaymakamlığı', width: 'full' }
                ]
            },
            {
                title: 'I. GİRİŞ',
                icon: '📋',
                fields: [
                    { id: 'gorev_emirleri', label: 'Görev Emirlerinin Tarih ve Sayıları', type: 'text', placeholder: '…./.., ... tarihli ve ….. sayılı', width: 'full' },
                    { id: 'calisma_kurumu', label: 'Çalışmaların Yapıldığı Kurum/Kuruluş', type: 'text', width: 'full' },
                    { id: 'calisma_tarihleri', label: 'Çalışmaların Yapıldığı Tarihler', type: 'text', placeholder: 'gg.aa.yyyy - gg.aa.yyyy', width: 'full' },
                    { id: 'calisma_seyri', label: 'Çalışmaların Seyri', type: 'textarea', width: 'full', rows: 3 },
                    { id: 'duzenlenen_raporlar', label: 'Düzenlenen Raporlar', type: 'textarea', width: 'full', rows: 2 },
                    { id: 'baska_mercilere_duyurular', label: 'Başka Mercilere Yapılan Diğer Duyurular (Varsa)', type: 'textarea', width: 'full', rows: 2 },
                    { id: 'fiil_duyurusu_gerekcesi', label: 'Fiil Duyurusu Yapılması Gerekçesi ve Dayanağı', type: 'textarea', width: 'full', rows: 3 }
                ]
            },
            {
                title: 'II. FİİL DUYURUSUNUN KONUSU',
                icon: '⚠️',
                fields: [
                    { id: 'suc_konusu', label: 'Suçun Konusu', type: 'textarea', width: 'full', rows: 3 },
                    { id: 'suc_faili', label: 'Fail (Adı Soyadı, TC Kimlik No, Görevi, Adresi)', type: 'textarea', width: 'full', rows: 3 },
                    { id: 'suc_yeri', label: 'Suçun İşlendiği Yer', type: 'text', width: 'full' },
                    { id: 'suc_tarihi', label: 'Suçun İşlendiği Tarih', type: 'date', width: 'half' },
                    { id: 'muhbir_sikayetci', label: 'Muhbir/Müştekinin Adı, Soyadı ve Adresi (Varsa)', type: 'textarea', width: 'full', rows: 2 }
                ]
            },
            {
                title: 'III. FİİL DUYURUSU ÖNCESİ SÜREÇTE YAPILAN ÇALIŞMALAR',
                icon: '🔍',
                fields: [
                    { id: 'yurutulen_calismalar', label: 'Denetim, İnceleme-Soruşturma Sürecinde Yürütülen Çalışmalar', type: 'textarea', width: 'full', rows: 4 },
                    { id: 'disiplin_islemleri', label: 'Disiplin Hukuku Yönünden Yapılan İşlemlerin Boyutu', type: 'textarea', width: 'full', rows: 3 },
                    { id: 'delil_ve_emareler', label: 'Elde Edilen Delil ve Emareler', type: 'textarea', width: 'full', rows: 4 },
                    { id: 'on_irdeleme', label: 'Ön İrdeleme ve Değerlendirme', type: 'textarea', width: 'full', rows: 4 },
                    { id: 'gorev_kanaat', label: 'Duyuru Yapılması Sonucuna Ulaştıran Görev ve Kanaat', type: 'textarea', width: 'full', rows: 3 }
                ]
            },
            {
                title: 'IV. SONUÇ VE TEKLİF',
                icon: '✅',
                fields: [
                    { id: 'sonuc_gorus', label: 'Oluşan Görüş ve Kanaat ile Ulaşılan Sonuç', type: 'textarea', width: 'full', rows: 4 },
                    { id: 'on_inceleme_teklifi', label: '4483 sayılı Kanuna göre "ön inceleme" yaptırılması teklifi', type: 'textarea', placeholder: 'Yukarıda açıklanan nedenlerle; … hakkında 4483 sayılı Kanuna göre ön inceleme yaptırılmasının uygun olacağı hususu takdirlerinize arz olunur.', width: 'full', rows: 3 }
                ]
            },
            {
                title: 'Ek Bilgileri',
                icon: '📎',
                fields: [
                    { id: 'ek_sayfa', label: 'Ek Sayfa Sayısı', type: 'text', placeholder: '…', width: 'half' },
                    { id: 'ek_adet', label: 'Ek Adet', type: 'text', placeholder: '…', width: 'half' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
    '16.1': {
        id: '16.1',
        name: 'Dizi Pusulası',
        category: 'Dizi Pusulası',
        type: 'diger',
        implemented: true,
        sections: [
            {
                title: 'Rapor Bilgileri',
                icon: '📋',
                fields: [
                    { id: 'kurum_adi', label: 'Kurum Adı (örn: ….. ….. Lisesi)', type: 'text', placeholder: '….. ….. Lisesi', width: 'full' },
                    { id: 'ilgililer', label: 'İlgililer (Müdür, Öğretmen, Memur vb.)', type: 'textarea', placeholder: 'MÜDÜRÜ ….. ….., ÖĞRETMEN ….. ….. ve MEMUR ….. …..', width: 'full', rows: 2 },
                    { id: 'rapor_turu', label: 'Rapor Türü', type: 'text', placeholder: 'İNCELEME/SORUŞTURMA RAPORU', value: 'İNCELEME/SORUŞTURMA RAPORU', width: 'full' },
                    { id: 'tarih', label: 'Tarih', type: 'date', width: 'half' }
                ]
            },
            {
                title: 'Ek Listesi',
                icon: '📎',
                isDiziPusulasi: true
            },
            {
                title: 'Özet Bilgi',
                icon: '📊',
                fields: [
                    { id: 'toplam_ek', label: 'Toplam Ek Sayısı', type: 'text', placeholder: '12', width: 'half' },
                    { id: 'toplam_sayfa', label: 'Toplam Sayfa/Parça Sayısı', type: 'text', placeholder: '28', width: 'half' },
                    { id: 'toplam_yazi', label: 'Toplam Yazı ile (örn: On iki ek, Yirmi sekiz sayfa)', type: 'text', placeholder: '(12) On iki ek, (28) Yirmi sekiz sayfadan (parçadan) ibarettir.', width: 'full' }
                ]
            },
            {
                title: 'Müfettiş Bilgileri',
                icon: '👔',
                fields: [
                    { id: 'mufettis1_ad_soyad', label: '1. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half', required: true },
                    { id: 'mufettis1_kod', label: '1. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half', required: true },
                    { id: 'mufettis2_ad_soyad', label: '2. Müfettiş Adı Soyadı', type: 'text', placeholder: 'Adı SOYADI', width: 'half' },
                    { id: 'mufettis2_kod', label: '2. Müfettiş Kodu', type: 'text', placeholder: 'KOD', width: 'half' }
                ]
            }
        ]
    },
};
// State Management
const state = {
    currentTemplate: '1.1',
    qaItems: [],
    qaCounter: 0,
    writtenQuestions: [],
    writtenQuestionsCounter: 0
};

// DOM Elements
const elements = {
    form: null,
    qaContainer: null,
    clearFormBtn: null,
    generatePdfBtn: null,
    previewContent: null,
    loadingOverlay: null,
    templateSelect: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    initializeEventListeners();
    loadTemplate(state.currentTemplate);
});

function initializeElements() {
    elements.form = document.getElementById('documentForm');
    elements.clearFormBtn = document.getElementById('clearFormBtn');
    elements.generatePdfBtn = document.getElementById('generatePdfBtn');
    elements.previewContent = document.getElementById('previewContent');
    elements.loadingOverlay = document.getElementById('loadingOverlay');
    elements.templateSelect = document.getElementById('templateSelect');
}

function initializeEventListeners() {
    elements.clearFormBtn.addEventListener('click', clearForm);
    elements.generatePdfBtn.addEventListener('click', generatePDF);
    elements.templateSelect.addEventListener('change', (e) => {
        if (confirm('Template değiştirilecek. Mevcut form verileri silinecek. Devam etmek istiyor musunuz?')) {
            loadTemplate(e.target.value);
        } else {
            e.target.value = state.currentTemplate;
        }
    });
}

// =====================================================
// Template Loading
// =====================================================

// ==========================================
// Şablon 2.3: Tebliğ-Tebellüğ Tutanağı
// ==========================================
function renderTemplate23(data) {
    if (!data) return '';

    const formatDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 14pt; font-weight: bold; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 2px;">TEBLİĞ-TEBELLÜĞ TUTANAĞI</h1>
        </div>
        
        <div class="letter-body" style="text-align: justify; margin-bottom: 20px; font-size: 11pt; line-height: 1.6;">
            <p style="text-indent: 0;">
                Bakanlık Müfettişlerince adıma gönderilen ve "tanık" olarak çağrılmamla ilgili olan 
                <strong>${formatDate(data.cagri_tarihi) || '...'}</strong> tarihli ve 
                <strong>${data.cagri_sayisi || '...'}</strong> sayılı kapalı zarf içinde çağrı kâğıdını teslim aldım. 
                <strong>${formatDate(data.teslim_tarihi) || '...'}</strong> - Saat: <strong>${data.teslim_saati || '...'}</strong>
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
    `;
}

// ... (createPDFContent23 - unchanged)

// ==========================================
// Şablon 2.4: Zorla Getirme Yazısı
// ==========================================
function renderTemplate24(data) {
    if (!data) return '';

    const formatDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const getDayName = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { weekday: 'long' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 30px; font-size: 11pt;">
            <div>
                <div><strong>Sayı:</strong> ${data.sayi || '…../…,…'}</div>
                <div><strong>Konu:</strong> Tanığın Zorla Getirilmesi</div>
            </div>
            <div style="text-align: right;">
                ${formatDate(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 30px 0; font-size: 12pt;">
            ${(data.yonelim_yeri || '.....').toUpperCase()} ${(data.yonelim_makami || 'VALİLİĞİNE')}
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.6;">
             <div style="margin-bottom: 20px;">
                <div style="display: flex;">
                    <div style="min-width: 40px; font-weight: bold;">İlgi :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '...'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '...'} sayılı görevlendirme emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 20px;">
                İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen ön incelemede, aşağıda isim ve adresi belirtilen <strong>${data.tanik_ad_soyad || '..... .....'}</strong> "tanık" sıfatıyla ifadesine başvurulmak için kendisine gönderilen davetiyede belirtilen gün ve saatte çağrımıza icabet etmediğinden; adı geçenin, 5271 sayılı Ceza Muhakemesi Kanunu’nun 44 üncü maddesinde belirtilen usulle, <strong>${formatDate(data.randevu_tarihi)}</strong> tarihine tesadüf eden <strong>${getDayName(data.randevu_tarihi)}</strong> günü saat <strong>${data.randevu_saati || '...'}</strong>'da/de <strong>${data.randevu_yeri || '.....'}</strong> Müfettişliğimiz çalışma odasında hazır bulundurulmasının sağlanması hususunda ilgililere emirlerinizi rica ederim.
            </p>
        </div>

        <div class="letter-signature" style="text-align: right; margin: 40px 0;">
            <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 50px;">İmza</div>
                <div><strong>${data.mufettis_ad_soyad || '..... .....'}</strong></div>
                <div>(${data.mufettis_kod || '...'})</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 30px; font-size: 10pt; border-top: 1px solid #ccc; padding-top: 10px;">
            <strong>Ek:</strong><br>
            1- Çağrı Yazısı (${data.ek_cagri_sayfa || '...'} Sayfa)<br>
            2- Tebliğ-Tebellüğ Tutanağı (${data.ek_teblig_sayfa || '...'} Sayfa)
        </div>

        <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; font-size: 10pt;">
            <div style="font-weight: bold; text-decoration: underline; margin-bottom: 8px;">TANIKLA İLGİLİ BİLGİLER:</div>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="width: 200px; padding: 2px 0;"><strong>Adı ve Soyadı</strong></td><td>: ${data.tanik_ad_soyad || '...'}</td></tr>
                <tr><td style="padding: 2px 0;"><strong>T.C Kimlik Numarası</strong></td><td>: ${data.tanik_tc || '...'}</td></tr>
                <tr><td style="padding: 2px 0;"><strong>Görevi /İş Adresi ve Tel.</strong></td><td>: ${data.tanik_gorev_adres || '...'}</td></tr>
                <tr><td style="padding: 2px 0;"><strong>İkamet Adresi ve Tel.</strong></td><td>: ${data.tanik_ikamet_adres || '...'}</td></tr>
            </table>
        </div>
        
        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: center; color: #666; border-top: 1px solid #ccc; padding-top: 10px;">
             Bu belge resmi soruşturma dosyasının ayrılmaz bir parçasıdır. (Belge No: 2.4)
        </div>
        
        <div style="margin-top: 20px; font-size: 9pt;">
             <div style="font-weight: bold; margin-bottom: 5px;">Açıklama:</div>
             <div>1. Çağrı kâğıdı, Muhakkik/Ön İncelemeci tarafından yazıldığında;</div>
             <div style="margin-left: 15px;">a) Yazının başlık kısmına görevli bulunduğu kurumun/birimin adı yazılmalıdır.</div>
             <div style="margin-left: 15px;">b) Yazının ilgi kısmına kendini görevlendiren makamın/yetkili merciin oluru ve görevlendirme emri yazılmalıdır.</div>
        </div>
    `;
}

function createPDFContent24(data) {
    const formatDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const getDayName = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { weekday: 'long' });
    };

    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;';

    container.innerHTML = `
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
                    ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '...'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '...'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 20px; font-size: 12pt;">
            İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen ön incelemede, aşağıda isim ve adresi belirtilen <strong>${data.tanik_ad_soyad || '..... .....'}</strong> "tanık" sıfatıyla ifadesine başvurulmak için kendisine gönderilen davetiyede belirtilen gün ve saatte çağrımıza icabet etmediğinden; adı geçenin, 5271 sayılı Ceza Muhakemesi Kanunu’nun 44 üncü maddesinde belirtilen usulle, <strong>${formatDate(data.randevu_tarihi)}</strong> tarihine tesadüf eden <strong>${getDayName(data.randevu_tarihi)}</strong> günü saat <strong>${data.randevu_saati || '...'}</strong>'da/de <strong>${data.randevu_yeri || '.....'}</strong> Müfettişliğimiz çalışma odasında hazır bulundurulmasının sağlanması hususunda ilgililere emirlerinizi rica ederim.
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
    `;

    return container;
}

// =====================================================
// Template 3.1 - İhbar ve Şikâyetlerle İlgili Tutanak
// =====================================================

function renderTemplate31(data) {
    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 2px;">İHBAR/ŞİKÂYET TESPİT TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 10pt; margin-bottom: 12px;">
            <tr><td style="width: 200px;">Adı ve Soyadı</td><td style="width: 10px;">:</td><td><strong>${data.ad_soyad || ''}</strong></td></tr>
            <tr><td>T.C. Kimlik No/Uyruğu</td><td>:</td><td><strong>${data.tc_kimlik || ''}</strong></td></tr>
            <tr><td>Ana ve Baba Adı</td><td>:</td><td><strong>${data.ana_baba_adi || ''}</strong></td></tr>
            <tr><td>Doğum Yeri ve Tarihi</td><td>:</td><td><strong>${data.dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td>Görevi/İşi/Mesleği</td><td>:</td><td><strong>${data.gorevi || ''}</strong></td></tr>
            <tr><td>Görev/İşyeri Adresi</td><td>:</td><td><strong>${data.is_adresi || ''}</strong></td></tr>
            <tr><td>İkametgâh Adresi</td><td>:</td><td><strong>${data.ikametgah_adresi || ''}</strong></td></tr>
            <tr><td>Telefon (Cep-Ev-İşyeri)</td><td>:</td><td><strong>${data.telefon || ''}</strong></td></tr>
            <tr><td>İhbar/Şikâyet Tarih ve Saati</td><td>:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

        <p style="text-align: justify; font-size: 10pt; margin-bottom: 15px; line-height: 1.8;">
            Yukarıda açık kimliği ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına kendiliğinden gelip; bir konuda ihbar/şikâyette bulunacağını söyleyerek, kendisinin dinlenmesini ve sunacağı belgelerin alınmasını talep etti. Adı geçene, ihbar ve şikâyet konusunda izlemesi gereken prosedür, usul ve esaslar anlatıldı. Buna rağmen, adı geçen; "<strong>${data.konu || '….. …..'}</strong>" konusunda "<strong>${data.ilgili_gorevli || '….. …..'}</strong>" görevlisi ile ilgili olarak; "<strong>${data.ihbar_aciklama || '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</strong>" şeklinde ihbarda/şikâyette bulundu. Ayrıca; ihbar/şikâyet konusu ile ilgili olarak bu tutanak ekindeki belgeleri de (<strong>${data.sunulan_belgeler || '….. ….. …..'}</strong>) Müfettişliğimize sundu. Bu konuda ilgili ve yetkili mercilere bir başvurusu olup olmadığı konusunda da "<strong>${data.diger_basvuru || '….. ….. …..'}</strong>" açıklamalarını yaptı.
        </p>

        <p style="text-align: justify; font-size: 10pt; margin-top: 15px;">
            Durumu tespit eden bu tutanak, tarafımızdan müştereken tanzim edilip okundu. Muhbirin/şikâyetçinin, yazılanların doğru ve söylediklerinin aynısı olduğunu bildirmesi üzerine bu tutanak birlikte imza altına alındı. <strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong>
        </p>

        <table style="width: 100%; text-align: center; font-size: 9pt; margin-top: 30px;">
            <tr>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 9pt;">Bilgi Veren (Muhbir/Şikâyetçi)</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent31(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

    container.innerHTML = `
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
    `;

    return container;
}

// ==========================================
// Template 4.1: Bilgi/Belge İsteme
// ==========================================
function renderTemplate41(data) {
    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const d = new Date(dateStr);
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const okulTamAd = `${data.okul_adi || '…..'} ${data.okul_turu || 'Mesleki ve Teknik Anadolu Lisesi'}`;
    const donemYillar = `${data.donem_baslangic || '….'} - ${data.donem_bitis || '….'}`;
    const islemTipi = data.islem_tipi || 'incelenmesi';

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 12pt; line-height: 1.8; max-width: 700px; margin: 0; padding: 0;">
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
                    <td style="text-align: right;">${formatDate(data.tarih)}</td>
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
                            <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                            <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
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
                    <div><strong>${data.mufettis_ad_soyad || 'Adı SOYADI'}</strong></div>
                    <div>(${data.mufettis_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// Template 4.2: Bilgi/Belge İsteme (Varyant 2)
// ==========================================
function renderTemplate42(data) {
    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const d = new Date(dateStr);
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const okulTamAd = `${data.okul_adi || '….. …..'} ${data.okul_turu || 'Mesleki ve Teknik Anadolu Lisesi'}`;
    const vergiDairesiTam = `${data.vergi_dairesi || '….. …..'} Vergi Dairesi`;
    const yonelimTam = `${(data.yonelim_yeri || '…..').toUpperCase()} ${data.yonelim_makami || 'VALİLİĞİNE'}`;

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 12pt; line-height: 1.8; max-width: 700px; margin: 0; padding: 0;">
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
                    <td style="text-align: right;">${formatDate(data.tarih)}</td>
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
                            <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                            <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        </td>
                    </tr>
                </table>
            </div>

            <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 20px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen <strong>${data.islem_tipi || 'inceleme'}</strong> çalışmaları kapsamında; <strong>${okulTamAd}</strong> Döner Sermaye İşletmesi faaliyetleri dolayısıyla fazla çalışma yaptırılan personele <strong>${formatDate(data.tarih_baslangic)}-${formatDate(data.tarih_bitis)}</strong> tarihleri arasında yapılan ödemelerden alınan gelir ve damga vergisi kesintilerin <strong>${vergiDairesiTam} Müdürlüğüne</strong> yatırılıp yatırılmadığı bilgisine ihtiyaç duyulmuştur.
            </p>

            <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 25px;">
                Bu itibarla; <strong>${okulTamAd} Müdürlüğünce</strong>, <strong>${formatDate(data.tarih_baslangic)}-${formatDate(data.tarih_bitis)}</strong> tarihleri arasında yatırılan gelir ve damga vergileri tutarlarının, ilgili tahakkuk fişi, vergi makbuzu fotokopileri ile birlikte bir cetvel hâlinde Müfettişliğimizin aşağıdaki adresine bildirilmesi hususunda gereğini rica ederim.
            </p>

            <div style="text-align: right; margin-top: 40px; margin-bottom: 25px;">
                <div style="display: inline-block; text-align: center; min-width: 200px;">
                    <div style="margin-bottom: 20px;">İmza</div>
                    <div><strong>${data.mufettis_ad_soyad || 'Adı SOYADI'}</div>
                    <div>(${data.mufettis_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
            </div>

            <div style="margin-top: 25px; margin-bottom: 20px;">
                <div style="font-weight: bold; margin-bottom: 5px;">ADRES:</div>
                <div>${data.adres || '….. ….. ….. ….. ….. ….. ….. ….. ….. …..\n….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</div>
            </div>

            <div style="border-top: 1px solid #000; padding-top: 10px; margin-top: 20px; font-size: 10pt; font-style: italic;">
                <div style="font-weight: bold; margin-bottom: 5px;">Açıklama:</div>
                <div>Bilgi veya belge istemi Muhakkik/Ön İncelemeci tarafından yapıldığında, yazının başlık kısmına görevli oldukları kurumun adı, yazının yazıldığı kısma ise görevlendiren/olur veren makamın/yetkili merciin adı, ilgi kısmına kendisine verilen olur ve görev emirleri yazılmalıdır.</div>
            </div>
        </div>
    `;
}

// ==========================================
// Template 4.3: Dosya Hakkında Bilgi/Belge İsteme
// ==========================================
function renderTemplate43(data) {
    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const d = new Date(dateStr);
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const mahkemeTam = `${data.mahkeme_adi || '….. …..'} MAHKEMESİNE`;
    const islemTipiAciklama = data.islem_tipi === '4483 sayılı Kanun kapsamında ön inceleme'
        ? '(4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine göre yürütülmekte bulunan ön inceleme çalışmaları kapsamında)'
        : '';

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 12pt; line-height: 1.5; max-width: 700px; margin: 0; padding: 0;">
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
                    <td style="text-align: right;">${formatDate(data.tarih)}</td>
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
                            <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                            <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
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
                    <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
                <div>
                    <div style="margin-bottom: 20px;">İmza</div>
                    <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// Template 4.4: Başsavcılık Dosya Bilgi/Belge İsteme
// ==========================================
function renderTemplate44(data) {
    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const d = new Date(dateStr);
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const bassavcilikTam = `${(data.bassavcilik_yeri || '….').toUpperCase()} CUMHURİYET BAŞSAVCILIĞINA`;
    const islemTipiAciklama = data.islem_tipi === '4483 sayılı Kanun kapsamında ön inceleme'
        ? '(4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine göre yürütülmekte bulunan ön inceleme çalışmaları kapsamında)'
        : '';

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 12pt; line-height: 1.5; max-width: 700px; margin: 0; padding: 0;">
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
                    <td style="text-align: right;">${formatDate(data.tarih)}</td>
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
                            <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                            <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
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
        </div>
    `;
}

function createPDFContent41(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.8; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-word; overflow-wrap: break-word; margin: 0 auto;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const d = new Date(dateStr);
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const okulTamAd = `${data.okul_adi || '…..'} ${data.okul_turu || 'Mesleki ve Teknik Anadolu Lisesi'}`;
    const donemYillar = `${data.donem_baslangic || '….'} - ${data.donem_bitis || '….'}`;
    const islemTipi = data.islem_tipi || 'incelenmesi';

    container.innerHTML = `
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
                <td style="text-align: right;">${formatDate(data.tarih)}</td>
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 20px;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince <strong>${okulTamAd}</strong> Döner Sermaye İşletmesinin <strong>${donemYillar}</strong> yıllarına ait hesaplarının <strong>${islemTipi}</strong> sırasında, anılan döner sermaye işletmesinin söz konusu dönemdeki evrakının Sayıştay Başkanlığına gönderildiği anlaşmıştır.
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
    `;

    return container;
}

function createPDFContent42(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word; margin: 0 auto;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const d = new Date(dateStr);
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const okulTamAd = `${data.okul_adi || '….. …..'} ${data.okul_turu || 'Mesleki ve Teknik Anadolu Lisesi'}`;
    const vergiDairesiTam = `${data.vergi_dairesi || '….. …..'} Vergi Dairesi`;
    const yonelimTam = `${(data.yonelim_yeri || '…..').toUpperCase()} ${data.yonelim_makami || 'VALİLİĞİNE'}`;

    container.innerHTML = `
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
                <td style="text-align: right;">${formatDate(data.tarih)}</td>
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 15px;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen <strong>${data.islem_tipi || 'inceleme'}</strong> çalışmaları kapsamında; <strong>${okulTamAd}</strong> Döner Sermaye İşletmesi faaliyetleri dolayısıyla fazla çalışma yaptırılan personele <strong>${formatDate(data.tarih_baslangic)}-${formatDate(data.tarih_bitis)}</strong> tarihleri arasında yapılan ödemelerden alınan gelir ve damga vergisi kesintilerin <strong>${vergiDairesiTam} Müdürlüğüne</strong> yatırılıp yatırılmadığı bilgisine ihtiyaç duyulmuştur.
        </p>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 25px;">
            Bu itibarla; <strong>${okulTamAd} Müdürlüğünce</strong>, <strong>${formatDate(data.tarih_baslangic)}-${formatDate(data.tarih_bitis)}</strong> tarihleri arasında yatırılan gelir ve damga vergileri tutarlarının, ilgili tahakkuk fişi, vergi makbuzu fotokopileri ile birlikte bir cetvel hâlinde Müfettişliğimizin aşağıdaki adresine bildirilmesi hususunda gereğini rica ederim.
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
    `;

    return container;
}

function createPDFContent43(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word; margin: 0 auto;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const d = new Date(dateStr);
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const mahkemeTam = `${data.mahkeme_adi || '….. …..'} MAHKEMESİNE`;
    const islemTipiAciklama = data.islem_tipi === '4483 sayılı Kanun kapsamında ön inceleme'
        ? '(4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine göre yürütülmekte bulunan ön inceleme çalışmaları kapsamında)'
        : '';

    container.innerHTML = `
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
                <td style="text-align: right;">${formatDate(data.tarih)}</td>
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </td>
                </tr>
            </table>
        </div>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 20px;">
            İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülen <strong>${data.islem_tipi || 'disiplin soruşturması'}</strong> kapsamında ${islemTipiAciklama} <strong>${data.kisi_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No.: <strong>${data.kisi_tc || '…..'}</strong>) hakkında <strong>${data.suclar || '….. ….. suçlarından/hususlarından'}</strong> dolayı Mahkemenizce <strong>${data.esas_no || '…..'} Esas No'lu</strong> dosya üzerinden yürütülen dava ve işler hakkında bilgiye ihtiyaç duyulmuştur.
        </p>

        <p style="text-align: justify; text-indent: 1.25cm; margin-bottom: 40px;">
            Sözü edilen dosyanın (bilgi ve belgelerin) onaylı bir örneğinin tarafımıza verilmes i hususunda gereğini arz ederiz.
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
    `;

    return container;
}

function createPDFContent44(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word; margin: 0 auto;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const d = new Date(dateStr);
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const bassavcilikTam = `${(data.bassavcilik_yeri || '….').toUpperCase()} CUMHURİYET BAŞSAVCILIĞINA`;
    const islemTipiAciklama = data.islem_tipi === '4483 sayılı Kanun kapsamında ön inceleme'
        ? '(4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine göre yürütülmekte bulunan ön inceleme çalışmaları kapsamında)'
        : '';

    container.innerHTML = `
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
                <td style="text-align: right;">${formatDate(data.tarih)}</td>
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
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
    `;

    return container;
}

function loadTemplate(templateId) {
    state.currentTemplate = templateId;
    state.qaItems = [];
    state.qaCounter = 0;

    const template = TEMPLATES[templateId];
    if (!template) {
        console.error('Template not found:', templateId);
        return;
    }

    // Build form HTML
    let formHtml = '';

    template.sections.forEach(section => {
        formHtml += `
            <div class="form-section">
                <h3 class="section-title">
                    <span class="section-icon">${section.icon}</span>
                    ${section.title}
                </h3>
        `;

        if (section.isQA) {
            formHtml += `
                <div id="qaContainer" class="qa-container"></div>
                <button type="button" class="btn btn-add" id="addQaBtn">
                    <span>➕</span> Yeni Soru Ekle
                </button>
            `;
        } else if (section.isWrittenQuestions) {
            formHtml += `
                <div id="writtenQuestionsContainer" class="qa-container"></div>
                <button type="button" class="btn btn-add" id="addWqBtn">
                    <span>➕</span> Yeni Soru Ekle
                </button>
            `;
        } else if (section.isDiziPusulasi) {
            formHtml += `
                <div id="diziEkContainer" class="qa-container"></div>
                <button type="button" class="btn btn-add" id="addDiziEkBtn">
                    <span>➕</span> Yeni Ek Ekle
                </button>
            `;
        } else if (section.fields) {
            formHtml += '<div class="form-grid">';
            section.fields.forEach(field => {
                formHtml += createFieldHtml(field);
            });
            formHtml += '</div>';
        }

        formHtml += '</div>';
    });

    elements.form.innerHTML = formHtml;

    // Re-initialize Q&A container (only if template has Q&A section)
    elements.qaContainer = document.getElementById('qaContainer');
    const addQaBtn = document.getElementById('addQaBtn');
    if (addQaBtn && elements.qaContainer) {
        addQaBtn.addEventListener('click', addQaItem);
        // Add first Q&A item only for templates with Q&A (except 1.1 which has fixed Soru 1)
        if (state.currentTemplate !== '1.1') {
            addQaItem();
        }
    }

    // Initialize Written Questions container (only if template has Written Questions section)
    const wqContainer = document.getElementById('writtenQuestionsContainer');
    const addWqBtn = document.getElementById('addWqBtn');
    if (addWqBtn && wqContainer) {
        state.writtenQuestions = [];
        state.writtenQuestionsCounter = 0;
        addWqBtn.addEventListener('click', addWrittenQuestion);
        // Add first question
        addWrittenQuestion();
    }

    // Initialize Dizi Pusulası Ek container (only if template has Dizi Pusulası section)
    const diziEkContainer = document.getElementById('diziEkContainer');
    const addDiziEkBtn = document.getElementById('addDiziEkBtn');
    if (addDiziEkBtn && diziEkContainer) {
        diziEkItems = [];
        diziEkCounter = 0;
        addDiziEkBtn.addEventListener('click', addDiziEkItem);
        renderDiziEkItems();
    }

    // Add form input listeners
    elements.form.addEventListener('input', debounce(updatePreview, 150));

    updatePreview();
}

function createFieldHtml(field) {
    const required = field.required ? '<span class="required">*</span>' : '';
    const fullWidth = field.fullWidth ? 'full-width' : '';
    const pattern = field.pattern ? `pattern="${field.pattern}"` : '';
    const maxlength = field.maxlength ? `maxlength="${field.maxlength}"` : '';
    const placeholder = field.placeholder ? `placeholder="${field.placeholder}"` : '';
    const rows = field.rows || 2;
    const requiredAttr = field.required ? 'required' : '';
    const defaultValue = field.value || field.defaultValue || '';

    let inputHtml = '';

    if (field.type === 'textarea') {
        inputHtml = `<textarea id="${field.id}" name="${field.id}" rows="${rows}" ${placeholder} ${requiredAttr}>${defaultValue}</textarea>`;
    } else if (field.type === 'select' && field.options) {
        const optionsHtml = field.options.map(opt =>
            `<option value="${opt}">${opt}</option>`
        ).join('');
        inputHtml = `<select id="${field.id}" name="${field.id}" ${requiredAttr}>
            <option value="">Seçiniz...</option>
            ${optionsHtml}
        </select>`;
    } else if (field.type === 'checkboxlist' && field.options) {
        const checkboxHtml = field.options.map((opt, idx) => {
            // Header seçenekleri farklı stil
            if (opt.isHeader || opt.value.endsWith('_header')) {
                return `<div class="checkbox-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 12px; margin: 12px 0 6px 0; border-radius: 6px; font-weight: 600; font-size: 0.85em; letter-spacing: 0.5px;">
                    ${opt.label}
                </div>`;
            }
            return `<div class="checkbox-item" style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; padding: 8px; background: #f9f9f9; border-radius: 4px; cursor: pointer; transition: all 0.2s;" onclick="toggleCheckboxOption(this, '${field.id}')" onmouseover="this.style.background='#e8f4fd'" onmouseout="this.style.background='#f9f9f9'">
                <input type="checkbox" id="${field.id}_${idx}" name="${field.id}" value="${opt.value}" data-template="${opt.template ? opt.template.replace(/"/g, '&quot;').replace(/\n/g, '\\n') : ''}" style="margin-top: 2px; cursor: pointer; width: 18px; height: 18px;">
                <label for="${field.id}_${idx}" style="cursor: pointer; font-size: 0.9em; line-height: 1.4;">${opt.label}</label>
            </div>`;
        }).join('');
        inputHtml = `<div class="checkbox-list" style="border: 1px solid #ddd; padding: 10px; border-radius: 6px; max-height: 400px; overflow-y: auto;">${checkboxHtml}</div>`;
    } else if (field.type === 'custom' && typeof field.customRender === 'function') {
        // Custom render fonksiyonu ile özel alan oluştur
        inputHtml = field.customRender();
    } else {
        inputHtml = `<input type="${field.type}" id="${field.id}" name="${field.id}" ${pattern} ${maxlength} ${placeholder} ${requiredAttr} value="${defaultValue}">`;
    }

    return `
        <div class="form-group ${fullWidth}">
            <label for="${field.id}">${field.label} ${required}</label>
            ${inputHtml}
        </div>
    `;
}

// =====================================================
// Q&A Management
// =====================================================

function addQaItem() {
    state.qaCounter++;
    const qaId = state.qaCounter;

    const qaItem = document.createElement('div');
    qaItem.className = 'qa-item';
    qaItem.dataset.qaId = qaId;

    qaItem.innerHTML = `
        <div class="qa-item-header">
            <span class="qa-number">Soru ${qaId}</span>
            <button type="button" class="qa-remove-btn" onclick="removeQaItem(${qaId})" title="Sil">
                ✕
            </button>
        </div>
        <div class="qa-fields">
            <div class="form-group">
                <label>Soru <span class="required">*</span></label>
                <textarea name="soru_${qaId}" class="qa-soru" rows="2" 
                    placeholder="Soruyu yazın..." required></textarea>
            </div>
            <div class="form-group">
                <label>Cevap <span class="required">*</span></label>
                <textarea name="cevap_${qaId}" class="qa-cevap" rows="3" 
                    placeholder="Cevabı yazın..." required></textarea>
            </div>
        </div>
    `;

    elements.qaContainer.appendChild(qaItem);
    state.qaItems.push(qaId);

    qaItem.querySelectorAll('textarea').forEach(ta => {
        ta.addEventListener('input', debounce(updatePreview, 150));
    });

    updateQaNumbers();
    updatePreview();
}

function removeQaItem(qaId) {
    // For template 1.1, all dynamic Q&A items can be removed (Soru 1 is fixed)
    // For other templates, at least one Q&A item must remain
    if (state.currentTemplate !== '1.1' && state.qaItems.length <= 1) {
        alert('En az bir soru/cevap çifti olmalıdır.');
        return;
    }

    const qaItem = document.querySelector(`.qa-item[data-qa-id="${qaId}"]`);
    if (qaItem) {
        qaItem.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            qaItem.remove();
            state.qaItems = state.qaItems.filter(id => id !== qaId);
            updateQaNumbers();
            updatePreview();
        }, 300);
    }
}

function updateQaNumbers() {
    const qaItems = elements.qaContainer.querySelectorAll('.qa-item');
    qaItems.forEach((item, index) => {
        const numberSpan = item.querySelector('.qa-number');
        numberSpan.textContent = `Soru ${index + 1}`;
    });
}

// =====================================================
// Written Questions Management (For Template 1.4.1)
// =====================================================

function addWrittenQuestion() {
    state.writtenQuestionsCounter++;
    const wqId = state.writtenQuestionsCounter;

    const wqItem = document.createElement('div');
    wqItem.className = 'qa-item'; // Reuse qa-item styles
    wqItem.dataset.wqId = wqId;

    wqItem.innerHTML = `
        <div class="qa-item-header">
            <span class="qa-number">Soru ${wqId}</span>
            <button type="button" class="qa-remove-btn" onclick="removeWrittenQuestion(${wqId})" title="Sil">
                ✕
            </button>
        </div>
        <div class="qa-fields">
            <div class="form-group full-width">
                <label>Soru Metni <span class="required">*</span></label>
                <textarea name="written_question_${wqId}" class="written-question-input" rows="2" 
                    placeholder="Soru metnini yazın..." required></textarea>
            </div>
            <div class="form-group full-width">
                <label>Cevap (İsteğe bağlı - boş bırakılırsa el yazısı için yer kalır)</label>
                <textarea name="written_answer_${wqId}" class="written-answer-input" rows="3" 
                    placeholder="Cevabı yazın veya boş bırakın..."></textarea>
            </div>
        </div>
    `;

    const container = document.getElementById('writtenQuestionsContainer');
    if (container) {
        container.appendChild(wqItem);
        state.writtenQuestions.push(wqId);

        wqItem.querySelectorAll('textarea').forEach(ta => {
            ta.addEventListener('input', debounce(updatePreview, 150));
        });

        updateWrittenQuestionNumbers();
        updatePreview();
    }
}


function removeWrittenQuestion(wqId) {
    if (state.writtenQuestions.length <= 1) {
        alert('En az bir soru olmalıdır.');
        return;
    }

    const wqItem = document.querySelector(`.qa-item[data-wq-id="${wqId}"]`);
    if (wqItem) {
        wqItem.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            wqItem.remove();
            state.writtenQuestions = state.writtenQuestions.filter(id => id !== wqId);
            updateWrittenQuestionNumbers();
            updatePreview();
        }, 300);
    }
}

function updateWrittenQuestionNumbers() {
    const container = document.getElementById('writtenQuestionsContainer');
    if (!container) return;

    const items = container.querySelectorAll('.qa-item');
    items.forEach((item, index) => {
        const numberSpan = item.querySelector('.qa-number');
        numberSpan.textContent = `Soru ${index + 1}`;
    });
}

// =====================================================
// Form Data Collection
// =====================================================

// Form verileri şablonlarda doğrudan HTML'e yazılır. Kullanıcının girdiği
// "<", "&" gibi karakterler HTML olarak yorumlanmasın (betik çalıştırılamasın)
// diye önizleme ve PDF'ten önce tüm metin değerleri kaçışlanır. Kaydetme ve
// Word üretimi ham veriyi kullanmaya devam eder.
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeFormData(value) {
    if (typeof value === 'string') return escapeHtml(value);
    if (Array.isArray(value)) return value.map(escapeFormData);
    if (value && typeof value === 'object') {
        const out = {};
        Object.keys(value).forEach(key => { out[key] = escapeFormData(value[key]); });
        return out;
    }
    return value;
}

function collectFormData() {
    const formData = new FormData(elements.form);
    const data = {};

    // Collect all form fields
    for (const [key, value] of formData.entries()) {
        if (!key.startsWith('soru_') && !key.startsWith('cevap_') && !key.startsWith('written_question_')) {
            data[key] = value;
        }
    }

    // Format dates
    if (data.tarih) {
        const date = new Date(data.tarih);
        data.tarih_formatted = date.toLocaleDateString('tr-TR', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        });
    } else {
        data.tarih_formatted = '';
    }

    // Format other dates
    ['sikayetci_dogum_tarihi', 'tanik_dogum_tarihi', 'davet_tarihi'].forEach(field => {
        if (data[field]) {
            const date = new Date(data[field]);
            data[field + '_formatted'] = date.toLocaleDateString('tr-TR', {
                day: '2-digit', month: '2-digit', year: 'numeric'
            });
        } else {
            data[field + '_formatted'] = '';
        }
    });

    // Collect Q&A pairs (only if qaContainer exists)
    data.soru_cevap = [];
    if (elements.qaContainer) {
        const qaItems = elements.qaContainer.querySelectorAll('.qa-item');
        qaItems.forEach((item, index) => {
            const soru = item.querySelector('.qa-soru').value || '';
            const cevap = item.querySelector('.qa-cevap').value || '';
            data.soru_cevap.push({ index: index + 1, soru, cevap });
        });
    }

    // Collect Written Questions and Answers (only if writtenQuestionsContainer exists)
    data.written_questions = [];
    if (document.getElementById('writtenQuestionsContainer')) {
        const items = document.querySelectorAll('#writtenQuestionsContainer .qa-item');
        items.forEach((item, index) => {
            const question = item.querySelector('.written-question-input').value || '';
            const answerInput = item.querySelector('.written-answer-input');
            const answer = answerInput ? answerInput.value || '' : '';
            data.written_questions.push({ index: index + 1, question, answer });
        });
    }

    // Collect Dizi Pusulası Ek Listesi (only if diziEkContainer exists)
    if (document.getElementById('diziEkContainer')) {
        data.ek_listesi = getDiziEkData();
    }

    return data;
}

// =====================================================
// Preview Rendering
// =====================================================

function updatePreview() {
    const data = escapeFormData(collectFormData());
    const template = TEMPLATES[state.currentTemplate];

    let html = '';

    if (state.currentTemplate === '1.1') {
        html = renderTemplate11(data);
    } else if (state.currentTemplate === '1.2') {
        html = renderTemplate12(data, false);
    } else if (state.currentTemplate === '1.3') {
        html = renderTemplate12(data, true);
    } else if (state.currentTemplate === '2.1') {
        html = renderTemplate21(data);
    } else if (state.currentTemplate === '2.2') {
        html = renderTemplate22(data);
    } else if (state.currentTemplate === '2.3') {
        html = renderTemplate23(data);
    } else if (state.currentTemplate === '2.4') {
        html = renderTemplate24(data);
    } else if (state.currentTemplate === '3.1') {
        html = renderTemplate31(data);
    } else if (state.currentTemplate === '1.4.1') {
        html = renderTemplate141(data);
    } else if (state.currentTemplate === '1.4.2') {
        html = renderTemplate142(data);
    } else if (state.currentTemplate === '1.5') {
        html = renderTemplate15(data);
    } else if (state.currentTemplate === '1.6.1') {
        html = renderTemplate161(data);
    } else if (state.currentTemplate === '1.6.2') {
        html = renderTemplate162(data);

    } else if (state.currentTemplate === '1.6.3') {
        html = renderTemplate163(data);
    } else if (state.currentTemplate === '1.6.4') {
        html = renderTemplate164(data);
    } else if (state.currentTemplate === '1.6.5') {
        html = renderTemplate165(data);
    } else if (state.currentTemplate === '4.1') {
        html = renderTemplate41(data);
    } else if (state.currentTemplate === '4.2') {
        html = renderTemplate42(data);
    } else if (state.currentTemplate === '4.3') {
        html = renderTemplate43(data);
    } else if (state.currentTemplate === '4.4') {
        html = renderTemplate44(data);
    } else if (state.currentTemplate === '5.1') {
        html = renderTemplate51(data);
    } else if (state.currentTemplate === '5.2') {
        html = renderTemplate52(data);
    } else if (state.currentTemplate === '5.3') {
        html = renderTemplate53(data);
    } else if (state.currentTemplate === '6.1') {
        html = renderTemplate61(data);
    } else if (state.currentTemplate === '6.2') {
        html = renderTemplate62(data);
    } else if (state.currentTemplate === '6.3') {
        html = renderTemplate63(data);
    } else if (state.currentTemplate === '6.4') {
        html = renderTemplate64(data);
    } else if (state.currentTemplate === '6.5') {
        html = renderTemplate65(data);
    } else if (state.currentTemplate === '6.6') {
        html = renderTemplate66(data);
    } else if (state.currentTemplate === '6.7') {
        html = renderTemplate67(data);
    } else if (state.currentTemplate === '6.8') {
        html = renderTemplate68(data);
    } else if (state.currentTemplate === '6.9') {
        html = renderTemplate69(data);
    } else if (state.currentTemplate === '7.1') {
        html = renderTemplate71(data);
    } else if (state.currentTemplate === '7.2') {
        html = renderTemplate72(data);
    } else if (state.currentTemplate === '7.3') {
        html = renderTemplate73(data);
    } else if (state.currentTemplate === '7.4') {
        html = renderTemplate74(data);
    } else if (state.currentTemplate === '8.1') {
        html = renderTemplate81(data);
    } else if (state.currentTemplate === '8.2') {
        html = renderTemplate82(data);
    } else if (state.currentTemplate === '9.1') {
        html = renderTemplate91(data);
    } else if (state.currentTemplate === '10.1') {
        html = renderTemplate101(data);
    } else if (state.currentTemplate === '10.2') {
        html = renderTemplate102(data);
    } else if (state.currentTemplate === '10.2.1') {
        html = renderTemplate1021(data);
    } else if (state.currentTemplate === '11.1') {
        html = renderTemplate111(data);
    } else if (state.currentTemplate === '11.2') {
        html = renderTemplate112(data);
    } else if (state.currentTemplate === '12.1') {
        html = renderTemplate121(data);
    } else if (state.currentTemplate === '12.2') {
        html = renderTemplate122(data);
    } else if (state.currentTemplate === '13.1') {
        html = renderTemplate131(data);
    } else if (state.currentTemplate === '13.2') {
        html = renderTemplate132(data);
    } else if (state.currentTemplate === '14.1') {
        html = renderTemplate1401(data);
    } else if (state.currentTemplate === '14.2') {
        html = renderTemplate1402(data);
    } else if (state.currentTemplate === '15.1') {
        html = renderTemplate151(data);
    } else if (state.currentTemplate === '15.2') {
        html = renderTemplate152(data);
    } else if (state.currentTemplate === '15.3') {
        html = renderTemplate153(data);
    } else if (state.currentTemplate === '15.4') {
        html = renderTemplate154(data);
    } else if (state.currentTemplate === '15.5') {
        html = renderTemplate155(data);
    } else if (state.currentTemplate === '15.6') {
        html = renderTemplate156(data);
    } else if (state.currentTemplate === '16.1') {
        html = renderTemplate161_dizi(data);
    }

    renderPaginatedPreview(elements.previewContent, html);
}

// =====================================================
// A4 Sayfalı Önizleme
// =====================================================

// Önizleme, PDF ile aynı ölçülerde (A4, 15 mm kenar boşluğu) ayrı sayfalar
// halinde gösterilir. İçerik tek bir akışta kalır; sayfa sınırına denk gelen
// bloklar boşluk eklenerek sonraki sayfaya itilir, uzun paragraflar ise satır
// sınırından ikiye bölünür.
const A4_PAGE_W = 210;   // mm
const A4_PAGE_H = 297;   // mm
const A4_MARGIN = 15;    // mm (sunucu PDF kenar boşluğuyla aynı)
const A4_GAP = 10;       // mm, önizlemede sayfalar arası boşluk
const A4_STRIDE = A4_PAGE_H + A4_GAP;
const A4_USABLE_H = A4_PAGE_H - 2 * A4_MARGIN;
const A4_BLOCK_TAGS = new Set(['TABLE', 'IMG', 'SVG', 'CANVAS', 'HR', 'UL', 'OL']);

function renderPaginatedPreview(root, html) {
    if (!root) return;
    root.classList.add('a4-preview');
    root._previewHtml = html;
    root.innerHTML = '<div class="a4-sheets"></div><div class="a4-flow"></div>';
    root.querySelector('.a4-flow').innerHTML = html;

    fitPreviewZoom(root);
    paginatePreview(root);

    // Görseller (logo vb.) sonradan yüklenirse yerleşim değişir; yeniden sayfala
    root.querySelectorAll('.a4-flow img').forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', () => {
                if (root._previewHtml === html) renderPaginatedPreview(root, html);
            }, { once: true });
        }
    });
}

// Önizleme panelinden geniş olan A4 sayfasını panele sığacak şekilde küçültür
function fitPreviewZoom(root) {
    root.style.zoom = '';
    const container = root.parentElement;
    if (!container) return;
    const cs = getComputedStyle(container);
    const available = container.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const pageWidthPx = A4_PAGE_W * 96 / 25.4;
    if (available > 0 && available < pageWidthPx) {
        root.style.zoom = String(available / pageWidthPx);
    }
}

function previewHasBox(cs) {
    const hasBorder = ['Top', 'Right', 'Bottom', 'Left'].some(side =>
        cs['border' + side + 'Style'] !== 'none' && parseFloat(cs['border' + side + 'Width']) > 0);
    const bg = cs.backgroundColor;
    const hasBg = bg && bg !== 'transparent' && !/rgba\(.*,\s*0\)$/.test(bg);
    return hasBorder || hasBg;
}

function previewHasDirectText(el) {
    return Array.from(el.childNodes).some(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '');
}

// Sayfa sınırında ayrı ayrı yerleştirilebilecek en küçük blokları toplar
function collectPreviewBlocks(container, mmPx, out) {
    Array.from(container.children).forEach(child => {
        const cs = getComputedStyle(child);
        if (cs.display === 'none' || cs.position === 'absolute' || cs.position === 'fixed') return;

        const isPlainBlock = cs.display === 'block' || cs.display === 'list-item';
        const atomic =
            A4_BLOCK_TAGS.has(child.tagName.toUpperCase()) ||
            !isPlainBlock ||
            child.children.length === 0 ||
            pdfIsInlineOnly(child) ||
            previewHasDirectText(child) ||
            // Çerçeveli/arka planlı kutular sayfaya sığıyorsa bölünmesin
            (previewHasBox(cs) && child.getBoundingClientRect().height / mmPx <= A4_USABLE_H);

        if (atomic) out.push(child);
        else collectPreviewBlocks(child, mmPx, out);
    });
    return out;
}

// Satır içi içerikli bir bloğu, alt sınırı (px) aşan ilk satırdan böler.
// Bölünme olursa yeni (devam) elemanı döndürür.
function splitPreviewBlockAt(el, limitPx) {
    const positions = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.textContent;
        for (let i = 0; i < text.length; i++) {
            if (!/\s/.test(text[i])) positions.push([node, i]);
        }
    }
    if (positions.length < 2) return null;

    const range = document.createRange();
    const bottomOf = ([node, i]) => {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        return range.getBoundingClientRect().bottom;
    };

    // Taşan ilk karakteri ikili arama ile bul (satırlar yukarıdan aşağı sıralı)
    let lo = 0, hi = positions.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (bottomOf(positions[mid]) > limitPx) hi = mid;
        else lo = mid + 1;
    }
    if (lo === 0 || lo >= positions.length) return null;

    const [node, offset] = positions[lo];
    range.setStart(node, offset);
    range.setEnd(el, el.childNodes.length);
    const rest = range.extractContents();

    const cont = el.cloneNode(false);
    cont.removeAttribute('id');
    cont.appendChild(rest);
    cont.style.textIndent = '0';
    cont.style.marginTop = '0';
    el.style.marginBottom = '0';
    el.style.paddingBottom = '0';
    cont.style.paddingTop = '0';
    // İki yana yaslı paragrafın bölünen son satırı da yaslı kalsın
    if (getComputedStyle(el).textAlign === 'justify') el.style.textAlignLast = 'justify';
    el.after(cont);
    return cont;
}

// Bloğun üst kenarını hedef konuma (mm, akışa göre) itecek boşluk ekler
function pushPreviewBlockTo(el, targetMm, originPx, mmPx) {
    const spacer = document.createElement('div');
    spacer.className = 'a4-spacer';
    el.parentNode.insertBefore(spacer, el);
    // Kenar boşluğu (margin) birleşmeleri nedeniyle iki adımda ölçerek ayarla
    let height = 0;
    for (let i = 0; i < 2; i++) {
        const top = (el.getBoundingClientRect().top - originPx) / mmPx;
        height = Math.max(0, height + (targetMm - top));
        spacer.style.height = height + 'mm';
    }
}

function paginatePreview(root) {
    const flow = root.querySelector('.a4-flow');
    const sheets = root.querySelector('.a4-sheets');
    if (!flow || !sheets) return;

    const probe = document.createElement('div');
    probe.style.cssText = 'position:absolute; visibility:hidden; height:100mm; width:1px;';
    flow.appendChild(probe);
    const mmPx = probe.getBoundingClientRect().height / 100;
    probe.remove();
    if (!mmPx) return; // görünmez panel; ölçüm yapılamaz

    const originPx = flow.getBoundingClientRect().top;
    const toMm = px => (px - originPx) / mmPx;
    const blocks = collectPreviewBlocks(flow, mmPx, []);
    const EPS = 0.3;

    for (let i = 0; i < blocks.length; i++) {
        const el = blocks[i];
        if (el.getBoundingClientRect().height === 0) continue;

        let top = toMm(el.getBoundingClientRect().top);
        const page = Math.floor(top / A4_STRIDE);
        const usableStart = page * A4_STRIDE + A4_MARGIN;
        const usableEnd = page * A4_STRIDE + A4_PAGE_H - A4_MARGIN;

        // Blok alt kenar boşluğunda / sayfalar arasında başlıyorsa sonraki sayfaya
        if (top >= usableEnd - EPS) {
            pushPreviewBlockTo(el, (page + 1) * A4_STRIDE + A4_MARGIN, originPx, mmPx);
            continue;
        }
        // Üst kenar boşluğunda başlıyorsa yazı alanının başına indir
        if (top < usableStart - EPS) {
            pushPreviewBlockTo(el, usableStart, originPx, mmPx);
            top = toMm(el.getBoundingClientRect().top);
        }
        const bottom = toMm(el.getBoundingClientRect().bottom);
        if (bottom <= usableEnd + EPS) continue;

        // Sayfa sınırını aşıyor: önce satır sınırından bölmeyi dene
        const cs = getComputedStyle(el);
        const splittable = (cs.display === 'block' || cs.display === 'list-item') &&
            !A4_BLOCK_TAGS.has(el.tagName.toUpperCase()) && pdfIsInlineOnly(el);
        if (splittable) {
            const cont = splitPreviewBlockAt(el, originPx + usableEnd * mmPx);
            if (cont) {
                blocks.splice(i + 1, 0, cont);
                continue;
            }
        }

        // Bölünemiyorsa ve tek sayfaya sığıyorsa bütün olarak sonraki sayfaya taşı
        if (bottom - top <= A4_USABLE_H && top > usableStart + EPS) {
            pushPreviewBlockTo(el, (page + 1) * A4_STRIDE + A4_MARGIN, originPx, mmPx);
        }
    }

    // Sayfa arka planlarını çiz
    const lastBottom = toMm(flow.getBoundingClientRect().bottom) - A4_MARGIN;
    const pageCount = Math.max(1, Math.floor(Math.max(0, lastBottom - EPS) / A4_STRIDE) + 1);
    const totalH = pageCount * A4_STRIDE - A4_GAP;
    flow.style.minHeight = totalH + 'mm';
    root.style.height = (pageCount * A4_STRIDE) + 'mm'; // son sayfa numarası için alt boşluk dahil
    let sheetsHtml = '';
    for (let p = 0; p < pageCount; p++) {
        sheetsHtml += `<div class="a4-sheet" style="top:${p * A4_STRIDE}mm"><span class="a4-page-no">${p + 1} / ${pageCount}</span></div>`;
    }
    sheets.innerHTML = sheetsHtml;
}

// Pencere boyutu değişince önizlemeleri yeniden ölçekle ve sayfala
let previewResizeTimer = null;
window.addEventListener('resize', () => {
    clearTimeout(previewResizeTimer);
    previewResizeTimer = setTimeout(() => {
        document.querySelectorAll('.a4-preview').forEach(root => {
            if (root._previewHtml !== undefined) renderPaginatedPreview(root, root._previewHtml);
        });
    }, 150);
});

function renderTemplate11(data) {
    // Format dilekce date
    let dilekceTarihFormatted = 'gg.aa.yyyy';
    if (data.dilekce_tarih) {
        const d = new Date(data.dilekce_tarih);
        dilekceTarihFormatted = d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    // Build Q&A section - Soru 2+ with last one ending with " dedi."
    let qaHtml = '';
    let noExtraQuestions = !data.soru_cevap || data.soru_cevap.length === 0;
    if (data.soru_cevap && data.soru_cevap.length > 0) {
        data.soru_cevap.forEach((item, idx) => {
            const isLast = idx === data.soru_cevap.length - 1;
            const ending = isLast ? '" dedi.' : '';
            qaHtml += `<br><strong>Soru ${idx + 2}.</strong> <strong>${item.soru || '..... .....'}</strong><br><strong>Cevap ${idx + 2}.</strong> <strong>${item.cevap || '..... .....'}</strong>${ending}`;
        });
    }
    // If no extra questions, add " dedi." after Cevap 1
    const cevap1Ending = noExtraQuestions ? '" dedi.' : '';

    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold;">İFADE TUTANAĞI</h1>
        </div>
        
        <table style="font-size: 11pt; margin-bottom: 15px; border-collapse: collapse; width: 100%;">
            <tr><td style="width: 200px;"><strong>Adı ve Soyadı</strong></td><td style="width: 15px;">:</td><td><strong>${data.sikayetci_adi || ''}</strong></td></tr>
            <tr><td><strong>T.C. Kimlik No/Uyruğu</strong></td><td>:</td><td><strong>${data.sikayetci_tc || ''}</strong></td></tr>
            <tr><td><strong>Ana ve Baba Adı</strong></td><td>:</td><td><strong>${data.sikayetci_ana_baba || ''}</strong></td></tr>
            <tr><td><strong>Doğum Yeri ve Tarihi</strong></td><td>:</td><td><strong>${data.sikayetci_dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td><strong>Görevi/İşi/Mesleği</strong></td><td>:</td><td><strong>${data.sikayetci_gorev_meslek || ''}</strong></td></tr>
            <tr><td><strong>Görev/İşyeri Adresi</strong></td><td>:</td><td><strong>${data.sikayetci_is_adresi || ''}</strong></td></tr>
            <tr><td><strong>İkametgâh Adresi</strong></td><td>:</td><td><strong>${data.sikayetci_ikamet_adresi || ''}</strong></td></tr>
            <tr><td><strong>Telefon (Cep-Ev-İş yeri)</strong></td><td>:</td><td><strong>${data.sikayetci_telefon || ''}</strong></td></tr>
            <tr><td><strong>İfadenin Tarih ve Saati</strong></td><td>:</td><td><strong>${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</strong></td></tr>
        </table>
        
        <div style="text-align: justify; margin: 15px 0; font-size: 11pt; line-height: 1.6;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.sikayetci_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '..... .....'}</strong> Müfettişliğimiz çalışma odasına "şikâyetçi" konumunda davet edildi. İfade vermesine engel bir durumu olmadığını beyan etmesi üzerine; <strong>${data.dilekce_makam || '..... .....'}</strong> hitaben yazılan <strong>${dilekceTarihFormatted}</strong> tarihli, <strong>${data.dilekce_imza_sahibi || '..... .....'}</strong> isim ve imzalı şikâyet dilekçesi ile dilekçe ekleri kendisine gösterilerek soruldu:
        </div>
        
        <div style="text-align: justify; margin: 15px 0; font-size: 11pt; line-height: 1.8;">
            <strong>Soru 1.</strong> "<strong>${dilekceTarihFormatted}</strong> tarihli <strong>${data.dilekce_makam || '..... .....'}</strong>'a hitaben yazılan şikâyet dilekçesindeki, isim ve imza size mi aittir?
            <br><strong>Cevap 1.</strong> <strong>${data.dilekce_cevap || 'Bana gösterdiğiniz ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... ..... .....'}</strong>${cevap1Ending}${qaHtml}
        </div>
        
        <div style="text-align: justify; margin: 15px 0 40px 0; font-size: 11pt; line-height: 1.6;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, başka diyeceğinin bulunmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine bu ifade tutanağı birlikte imzalandı. <strong>${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</strong>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center; margin-top: 60px;">
            <div>
                <div>İmza</div>
                <br><br><br>
                <div><strong>${data.muhakkik1_adi || 'Adı SOYADI'}</strong></div>
                <div>(${data.muhakkik1_kod || 'KOD'})</div>
                <div>${data.muhakkik1_unvan || 'Bakanlık Müfettişi'}</div>
            </div>
            <div>
                <div>İmza</div>
                <br><br><br>
                <div><strong>${data.muhakkik2_adi || 'Adı SOYADI'}</strong></div>
                <div>(${data.muhakkik2_kod || 'KOD'})</div>
                <div>${data.muhakkik2_unvan || 'Bakanlık Müfettişi'}</div>
            </div>
            <div>
                <div>İmza</div>
                <br><br><br>
                <div><strong>${data.sikayetci_adi || 'Adı SOYADI'}</strong></div>
                <div>İfade Sahibi</div>
                <div>(Şikâyetçi)</div>
            </div>
        </div>
    `;
}

function renderTemplate12(data, isYeminli = false) {
    const docNo = isYeminli ? '1.3 (Yeminli)' : '1.2 (Yeminsiz)';

    // Kurum bilgisi (1.3 için kurum_adi + kurum_turu, 1.2 için sadece kurum_adi)
    const kurumBilgisi = isYeminli
        ? `${data.kurum_adi || '..... .....'} ${data.kurum_turu || 'İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki'}`
        : `${data.kurum_adi || '..... .....'}`;

    // Giriş paragrafı
    const introParagraph = isYeminli
        ? `Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.tanik_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${kurumBilgisi}</strong> Müfettişliğimiz çalışma odasına "tanık" konumunda davet edildi. Tanıklığa mani bir hâlinin olmadığını beyan etmesi üzerine ve usulüne uygun olarak yemin verdirildikten sonra, konu kendisine anlatılarak soruldu:`
        : `Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.tanik_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${kurumBilgisi}</strong> Müfettişliğimiz çalışma odasına "tanık" konumunda davet edildi. Tanıklığa mani bir hâlinin olmadığını beyan etmesi üzerine konu kendisine anlatılarak soruldu:`;

    // Build Q&A section with last one ending with " dedi."
    let qaHtml = '';
    if (data.soru_cevap && data.soru_cevap.length > 0) {
        data.soru_cevap.forEach((item, idx) => {
            const isLast = idx === data.soru_cevap.length - 1;
            const ending = isLast ? '" dedi.' : '';
            qaHtml += `<br><strong>Soru ${idx + 1}.</strong> <strong>${item.soru || '..... .....'}</strong><br><strong>Cevap ${idx + 1}.</strong> <strong>${item.cevap || '..... .....'}</strong>${ending}`;
        });
    }

    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold;">İFADE TUTANAĞI</h1>
        </div>
        
        <table style="font-size: 11pt; margin-bottom: 15px; border-collapse: collapse; width: 100%;">
            <tr><td style="width: 200px;"><strong>Adı ve Soyadı</strong></td><td style="width: 15px;">:</td><td><strong>${data.tanik_adi || ''}</strong></td></tr>
            <tr><td><strong>T.C. Kimlik No/Uyruğu</strong></td><td>:</td><td><strong>${data.tanik_tc || ''}</strong></td></tr>
            <tr><td><strong>Ana ve Baba Adı</strong></td><td>:</td><td><strong>${data.tanik_ana_baba || ''}</strong></td></tr>
            <tr><td><strong>Doğum Yeri ve Tarihi</strong></td><td>:</td><td><strong>${data.tanik_dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td><strong>Görevi/İşi/Mesleği</strong></td><td>:</td><td><strong>${data.tanik_gorev_meslek || ''}</strong></td></tr>
            <tr><td><strong>Görev/İşyeri Adresi</strong></td><td>:</td><td><strong>${data.tanik_is_adresi || ''}</strong></td></tr>
            <tr><td><strong>İkametgâh Adresi</strong></td><td>:</td><td><strong>${data.tanik_ikamet_adresi || ''}</strong></td></tr>
            <tr><td><strong>Telefon (Cep-Ev-İş yeri)</strong></td><td>:</td><td><strong>${data.tanik_telefon || ''}</strong></td></tr>
            <tr><td><strong>İfadenin Tarih ve Saati</strong></td><td>:</td><td><strong>${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</strong></td></tr>
        </table>
        
        <div style="text-align: justify; margin: 15px 0; font-size: 11pt; line-height: 1.6;">
            ${introParagraph}
        </div>
        
        <div style="text-align: justify; margin: 15px 0; font-size: 11pt; line-height: 1.8;">
            ${qaHtml || '<em>Henüz soru/cevap eklenmedi.</em>'}
        </div>
        
        <div style="text-align: justify; margin: 15px 0 40px 0; font-size: 11pt; line-height: 1.6;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, başka diyeceğinin bulunmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine bu ifade tutanağı birlikte imzalandı. <strong>${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</strong>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center; margin-top: 60px;">
            <div>
                <div>İmza</div>
                <br><br><br>
                <div><strong>${data.muhakkik1_adi || 'Adı SOYADI'}</strong></div>
                <div>(${data.muhakkik1_kod || 'KOD'})</div>
                <div>${data.muhakkik1_unvan || 'Bakanlık Müfettişi'}</div>
            </div>
            <div>
                <div>İmza</div>
                <br><br><br>
                <div><strong>${data.muhakkik2_adi || 'Adı SOYADI'}</strong></div>
                <div>(${data.muhakkik2_kod || 'KOD'})</div>
                <div>${data.muhakkik2_unvan || 'Bakanlık Müfettişi'}</div>
            </div>
            <div>
                <div>İmza</div>
                <br><br><br>
                <div><strong>${data.tanik_adi || 'Adı SOYADI'}</strong></div>
                <div>İfade Sahibi</div>
                <div>(Tanık)</div>
            </div>
        </div>
    `;
}


function renderQaItems(qaItems) {
    if (!qaItems || qaItems.length === 0) {
        return '<div class="empty-field">Henüz soru/cevap eklenmedi.</div>';
    }

    return qaItems.map(item => `
        <div class="qa-display-item">
            <div class="question-text"><strong>SORU ${item.index}:</strong> ${item.soru || '<span class="empty-field">________</span>'}</div>
            <div class="answer-text"><strong>CEVAP:</strong> ${item.cevap || '<span class="empty-field">________</span>'}</div>
        </div>
    `).join('');
}

// =====================================================
// PDF Generation
// =====================================================

// html2pdf içeriği tek bir görüntü olarak dilimlediği için sayfa sınırına denk
// gelen satırlar ortadan kesiliyor. Bu fonksiyonlar, PDF içeriğini basımdan önce
// satır bazında "bölünemez" (page-break-inside: avoid) bloklara çevirerek
// ikinci sayfaya taşan belgelerdeki kaymaları önler.
const PDF_INLINE_TAGS = new Set(['STRONG', 'B', 'EM', 'I', 'U', 'S', 'SPAN', 'SMALL', 'SUP', 'SUB', 'A']);

function pdfIsInlineOnly(el) {
    return Array.from(el.children).every(c => PDF_INLINE_TAGS.has(c.tagName) || c.tagName === 'BR');
}

// Bir metin bloğunu satır sonlarından (<br> ve pre-wrap içindeki \n) ayırıp
// her satırı kendi bölünemez div'ine koyar.
function pdfSplitIntoLineBlocks(el, splitOnNewlines) {
    const groups = [[]];
    const current = () => groups[groups.length - 1];

    Array.from(el.childNodes).forEach(node => {
        if (node.nodeName === 'BR') {
            groups.push([]);
            return;
        }
        const isText = node.nodeType === Node.TEXT_NODE;
        const isPlainInline = node.nodeType === Node.ELEMENT_NODE && node.children.length === 0;
        if (splitOnNewlines && (isText || isPlainInline) && node.textContent.includes('\n')) {
            node.textContent.split('\n').forEach((part, i) => {
                if (i > 0) groups.push([]);
                if (part.trim() === '') return;
                if (isText) {
                    current().push(document.createTextNode(part));
                } else {
                    const clone = node.cloneNode(false);
                    clone.textContent = part;
                    current().push(clone);
                }
            });
            return;
        }
        current().push(node);
    });

    const isEmptyGroup = g => g.length === 0 ||
        g.every(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim() === '');

    // Baştaki/sondaki boş satırları at (şablon kaynağındaki girinti boşlukları)
    while (groups.length && isEmptyGroup(groups[0])) groups.shift();
    while (groups.length && isEmptyGroup(groups[groups.length - 1])) groups.pop();

    el.style.whiteSpace = 'normal';
    el.innerHTML = '';
    groups.forEach(g => {
        const line = document.createElement('div');
        line.style.pageBreakInside = 'avoid';
        if (isEmptyGroup(g)) {
            line.innerHTML = '&nbsp;';
        } else {
            g.forEach(n => line.appendChild(n));
        }
        el.appendChild(line);
    });
}

function optimizePdfPageBreaks(root) {
    if (!root || typeof root.querySelectorAll !== 'function') return;

    // 0) Boşluksuz uzun diziler (ör. yapıştırılan linkler) satıra sığmayınca
    //    sayfadan yana taşıp kesiliyordu. CSS ile kelime içinden kırmak
    //    (overflow-wrap) çözüm değil: html2canvas bu şekilde kırılan satırları
    //    boş boyuyor. Bunun yerine uzun dizilere görünmez kırılma noktası
    //    (zero-width space) ekle; hem tarayıcı hem html2canvas aynı yerden kırar.
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const textNode = walker.currentNode;
        if (/\S{21,}/.test(textNode.textContent)) {
            textNode.textContent = textNode.textContent.replace(/\S{20}(?=\S)/g, '$&\u200B');
        }
    }

    // 1) Düz metin blokları: satır bazında bölünemez hale getir
    root.querySelectorAll('div, p, li').forEach(el => {
        if (el.closest('table')) return; // tablo hücrelerine dokunma (kapak sayfaları)
        if (el.style.pageBreakInside) return;
        if (!pdfIsInlineOnly(el)) return;

        const isPreWrap = (el.style.whiteSpace || '').indexOf('pre') === 0;
        const hasBr = !!el.querySelector(':scope > br');
        const hasNewline = isPreWrap && el.textContent.includes('\n');

        // text-indent'li paragrafları bölmek girintiyi her satıra taşır; bütün olarak koru
        if ((hasBr || hasNewline) && !el.style.textIndent) {
            pdfSplitIntoLineBlocks(el, isPreWrap);
        } else {
            el.style.pageBreakInside = 'avoid';
        }
    });

    // 2) İmza blokları gibi yatay (flex) gruplar sayfa sınırında bölünmesin
    pdfProtectFlexBlocks(root);
}

// İmza blokları gibi flex grupların sayfa sınırında bölünmesini engeller.
// Hem tarayıcı içi (html2pdf) hem sunucu (Chrome yazdırma) yolunda kullanılır.
function pdfProtectFlexBlocks(root) {
    root.querySelectorAll('*').forEach(el => {
        if (el.closest('table')) return;
        if (el.style.display === 'flex' && !el.style.pageBreakInside) {
            el.style.pageBreakInside = 'avoid';
        }
    });
}

// PDF'i sunucuda Chrome'un gerçek yazdırma motoruyla üretir (kesin sayfalama,
// seçilebilir metin, küçük dosya). Başarısız olursa false döner ve çağıran
// tarayıcı içi yönteme (html2pdf) geri düşer.
async function generatePDFOnServer(contentEl, filename) {
    try {
        pdfProtectFlexBlocks(contentEl);
        const response = await fetch('api/pdf', {
            method: 'POST',
            headers: Object.assign({ 'Content-Type': 'application/json' }, AuthService.getAuthHeaders()),
            body: JSON.stringify({ html: contentEl.outerHTML })
        });
        if (!response.ok) {
            console.warn('Sunucu PDF üretimi başarısız (HTTP ' + response.status + '), tarayıcı yöntemine geçiliyor');
            return false;
        }
        const blob = await response.blob();
        saveAs(blob, filename);
        return true;
    } catch (error) {
        console.warn('Sunucu PDF üretimine ulaşılamadı, tarayıcı yöntemine geçiliyor:', error);
        return false;
    }
}

// Şablon kodu → PDF içeriği üreten fonksiyon ve indirilen dosyanın adı.
// Hem form ekranı (generatePDF) hem kayıtlı belgeler (router.js) bunu kullanır.
const PDF_TEMPLATES = {
    '1.1': { build: data => createPDFContent11(data), name: 'sikayetci_ifade_tutanagi' },
    '1.2': { build: data => createPDFContent12(data, false), name: 'tanik_ifade_tutanagi_yeminsiz' },
    '1.3': { build: data => createPDFContent12(data, true), name: 'tanik_ifade_tutanagi_yeminli' },
    '1.4.1': { build: data => createPDFContent141(data), name: 'yazili_ifade_tutanagi' },
    '1.4.2': { build: data => createPDFContent142(data), name: 'yazili_ifade_tutanagi_ogrenci' },
    '1.5': { build: data => createPDFContent15(data), name: 'itham_ifade_tutanagi' },
    '1.6.1': { build: data => createPDFContent161(data), name: 'on_inceleme_ifade_mudafisiz' },
    '1.6.2': { build: data => createPDFContent162(data), name: 'on_inceleme_mudafi_istegi' },
    '1.6.3': { build: data => createPDFContent163(data), name: 'on_inceleme_mudafi_atama_istegi' },
    '1.6.4': { build: data => createPDFContent164(data), name: 'on_inceleme_baro_yazisi' },
    '1.6.5': { build: data => createPDFContent165(data), name: 'on_inceleme_ifade_mudafili' },
    '2.1': { build: data => createPDFContent21(data), name: 'cagri_kagidi_tanik' },
    '2.3': { build: data => createPDFContent23(data), name: 'teblig_tebellug_tutanagi' },
    '2.4': { build: data => createPDFContent24(data), name: 'zorla_getirme_yazisi' },
    '3.1': { build: data => createPDFContent31(data), name: 'ihbar_sikayet_tespit' },
    '4.1': { build: data => createPDFContent41(data), name: 'bilgi_belge_isteme' },
    '4.2': { build: data => createPDFContent42(data), name: 'bilgi_belge_isteme_varyant2' },
    '4.3': { build: data => createPDFContent43(data), name: 'dosya_bilgi_belge_isteme' },
    '4.4': { build: data => createPDFContent44(data), name: 'bassavcilik_bilgi_belge_isteme' },
    '5.1': { build: data => createPDFContent51(data), name: 'bilirkisi_gorevlendirme' },
    '5.2': { build: data => createPDFContent52(data), name: 'bilirkisi_gorevlendirme_yazisi' },
    '5.3': { build: data => createPDFContent53(data), name: 'bilirkisi_ucret_odeme' },
    '6.1': { build: data => createPDFContent61(data), name: 'gorevden_uzaklastirma_oluru' },
    '6.2': { build: data => createPDFContent62(data), name: 'gorevden_uzaklastirma_kaldirma_oluru' },
    '6.3': { build: data => createPDFContent63(data), name: 'gorevden_uzaklastirma_tedbiri' },
    '6.4': { build: data => createPDFContent64(data), name: 'gorevden_uzaklastirma_kaldirma_teklifi' },
    '6.5': { build: data => createPDFContent65(data), name: 'gorevden_uzaklastirma_kaldirma_oluru' },
    '6.6': { build: data => createPDFContent66(data), name: 'gorevden_uzaklastirma_bildirimi' },
    '6.7': { build: data => createPDFContent67(data), name: 'gorevden_uzaklastirma_mulki_amir' },
    '6.8': { build: data => createPDFContent68(data), name: 'gorevden_uzaklastirma_kurum' },
    '6.9': { build: data => createPDFContent69(data), name: 'gorevden_uzaklastirma_teblig' },
    '7.1': { build: data => createPDFContent71(data), name: 'naip_tayin_tanik' },
    '7.2': { build: data => createPDFContent72(data), name: 'istinabe_talimati_tanik' },
    '7.3': { build: data => createPDFContent73(data), name: 'naip_tayin_itham' },
    '7.4': { build: data => createPDFContent74(data), name: 'istinabe_talimati_itham' },
    '8.1': { build: data => createPDFContent81(data), name: 'yetkilendirme_karari' },
    '8.2': { build: data => createPDFContent82(data), name: 'ifade_alma_esaslari' },
    '9.1': { build: data => createPDFContent91(data), name: 'elkoyma_tutanagi' },
    '10.1': { build: data => createPDFContent101(data), name: 'imza_yazi_tespiti' },
    '10.2': { build: data => createPDFContent102(data), name: 'imza_yazi_tespit_tutanagi' },
    '10.2.1': { build: data => createPDFContent1021(data), name: 'imza_yazi_ornegi_formu' },
    '11.1': { build: data => createPDFContent111(data), name: 'on_rapor_kapagi' },
    '11.2': { build: data => createPDFContent112(data), name: 'on_rapor' },
    '12.1': { build: data => createPDFContent121(data), name: 'olur_istek_denetim' },
    '12.2': { build: data => createPDFContent122(data), name: 'olur_istek_inceleme' },
    '13.1': { build: data => createPDFContent131(data), name: 'inceleme_sorusturma_kapagi' },
    '13.2': { build: data => createPDFContent132(data), name: 'inceleme_sorusturma_raporu' },
    '14.1': { build: data => createPDFContent1401(data), name: 'on_inceleme_raporu_kapagi' },
    '14.2': { build: data => createPDFContent1402(data), name: 'on_inceleme_raporu' },
    '15.1': { build: data => createPDFContent151(data), name: 'suc_duyurusu_kapagi' },
    '15.2': { build: data => createPDFContent152(data), name: 'suc_duyurusu_raporu' },
    '15.3': { build: data => createPDFContent153(data), name: 'diger_bakanlik_suc_duyurusu_kapagi' },
    '15.4': { build: data => createPDFContent154(data), name: 'diger_bakanlik_suc_duyurusu_raporu' },
    '15.5': { build: data => createPDFContent155(data), name: 'tevdi_raporu_kapagi' },
    '2.2': { build: data => createPDFContent22(data), name: 'cagri_kagidi_on_inceleme_tanik' },
    '15.6': { build: data => createPDFContent156(data), name: 'tevdi_yazisi_raporu' },
    '16.1': { build: data => createPDFContent161_dizi(data), name: 'dizi_pusulasi' },
};

// PDF içeriğini indirir: önce sunucuda Chrome yazdırma motoruyla üretir,
// ulaşılamazsa tarayıcı içi html2pdf yöntemine geri düşer.
async function downloadPDF(pdfContent, filename) {
    const serverOk = await generatePDFOnServer(pdfContent, filename);

    if (!serverOk) {
        // Sayfa sınırında satırların ortadan kesilmesini önle
        optimizePdfPageBreaks(pdfContent);

        const opt = {
            margin: [15, 15, 15, 15],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'] }
        };

        await html2pdf().set(opt).from(pdfContent).save();
    }
}

async function generatePDF() {
    // Auth kontrolü - giriş yapmamış kullanıcılar PDF üretemez
    if (!AuthService || !AuthService.isLoggedIn()) {
        showToast('PDF üretmek için giriş yapmalısınız', 'error');
        window.location.hash = '#/login';
        return;
    }

    if (!elements.form.checkValidity()) {
        elements.form.reportValidity();
        return;
    }

    elements.loadingOverlay.classList.remove('hidden');

    try {
        const data = collectFormData();
        const pdfTemplate = PDF_TEMPLATES[state.currentTemplate];
        const pdfContent = pdfTemplate && pdfTemplate.build(escapeFormData(data));
        const templateName = pdfTemplate && pdfTemplate.name;

        if (!pdfContent) {
            throw new Error(`Şablon için PDF içeriği oluşturulamadı: ${state.currentTemplate}`);
        }

        const filename = `${templateName}_${data.tarih || 'tarihsiz'}.pdf`;
        if (window.showToast) showToast('PDF oluşturuluyor...', 'info');

        await downloadPDF(pdfContent, filename);

    } catch (error) {
        console.error('PDF generation error:', error);
        alert('PDF oluşturulurken bir hata oluştu: ' + error.message);
    } finally {
        elements.loadingOverlay.classList.add('hidden');
    }
}

function createPDFContent11(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;';

    // Format dilekce date
    let dilekceTarihFormatted = 'gg.aa.yyyy';
    if (data.dilekce_tarih) {
        const d = new Date(data.dilekce_tarih);
        dilekceTarihFormatted = d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    // Build Q&A section - Soru 2+ with last one ending with " dedi."
    let qaHtml = '';
    if (data.soru_cevap && data.soru_cevap.length > 0) {
        data.soru_cevap.forEach((item, idx) => {
            const isLast = idx === data.soru_cevap.length - 1;
            const ending = isLast ? '" dedi.' : '';
            qaHtml += `<br><strong>Soru ${idx + 2}.</strong> <strong>${item.soru || '..... .....'}</strong><br><strong>Cevap ${idx + 2}.</strong> <strong>${item.cevap || '..... .....'}</strong>${ending}`;
        });
    }

    container.innerHTML = `
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
    `;

    return container;
}

function createPDFContent12(data, isYeminli = false) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;';

    const docNo = isYeminli ? '1.3 (Yeminli)' : '1.2 (Yeminsiz)';

    // Kurum bilgisi (1.3 için kurum_adi + kurum_turu, 1.2 için sadece kurum_adi)
    const kurumBilgisi = isYeminli
        ? `${data.kurum_adi || '..... .....'} ${data.kurum_turu || 'İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki'}`
        : `${data.kurum_adi || '..... .....'}`;

    const introParagraph = isYeminli
        ? `Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.tanik_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${kurumBilgisi}</strong> Müfettişliğimiz çalışma odasına "tanık" konumunda davet edildi. Tanıklığa mani bir hâlinin olmadığını beyan etmesi üzerine ve usulüne uygun olarak yemin verdirildikten sonra, konu kendisine anlatılarak soruldu:`
        : `Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.tanik_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${kurumBilgisi}</strong> Müfettişliğimiz çalışma odasına "tanık" konumunda davet edildi. Tanıklığa mani bir hâlinin olmadığını beyan etmesi üzerine konu kendisine anlatılarak soruldu:`;


    container.innerHTML = `
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
            ${data.soru_cevap.map(item => `
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
                        <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
                    </td>
                    <td style="padding-top: 50px; border-top: 1px solid #000; width: 33%; vertical-align: top;">
                        <div style="font-weight: bold; font-size: 10pt;">İmza</div>
                        <br><br>
                        <div><strong>${data.muhakkik2_adi || '..... .....'}</strong></div>
                        <div>(${data.muhakkik2_kod || '.....'})</div>
                        <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
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
    `;

    return container;
}

// =====================================================
// Template 2.1 - Çağrı Kâğıdı
// =====================================================

function renderTemplate21(data) {
    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>
        
        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 30px; font-size: 11pt;">
            <div>
                <div><strong>Sayı:</strong> <strong>${data.sayi || '…../….,…'}</strong></div>
                <div><strong>Konu:</strong> <strong>${data.konu || 'Tanıklığınız'}</strong></div>
            </div>
            <div style="text-align: right;">
                <div><strong>${data.tarih_formatted || '__/__/____'}</strong></div>
            </div>
        </div>
        
        <div class="letter-recipient" style="text-align: center; margin: 40px 0; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Sayın ${data.muhatap_ad_soyad || '….. …..'}</strong></div>
            <div style="margin-bottom: 3px;"><strong>${data.adres_satir1 || '….. ….. Mahallesi/Caddesi ….. Sokak No: …/…'}</strong></div>
            <div><strong>${data.adres_satir2 || '….. ….. …..'}</strong></div>
        </div>
        
        <div class="letter-body" style="text-align: justify; text-indent: 1cm; margin-bottom: 30px; font-size: 11pt; line-height: 1.8;">
            <p style="margin-bottom: 15px;">
                Müfettişliğimizce yürütülmekte olan inceleme/soruşturma çalışmaları kapsamında 
                yer alan bazı konularda/iddialarda 'Tanık' konumunda olduğunuz öğrenilmiş/anlaşılmış 
                olup 'Tanık' olarak bilginize başvurma ihtiyacı duyulmuştur.
            </p>
            <p>
                Tanık olarak bilginize başvurmak üzere <strong>${data.davet_tarihi_formatted || '__/__/____'}</strong> 
                tarihine rastlayan <strong>${data.davet_gunu || '________'}</strong> günü saat 
                <strong>${data.davet_saat || '__:__'}</strong>'da/de <strong>${data.kurum_bilgisi || data.davet_yeri || '________'}</strong> 
                Müfettişliğimiz çalışma odasında bulunmanızı rica ederim.
            </p>
        </div>
        
        <div class="letter-signature" style="text-align: right; margin: 40px 0;">
            <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 50px;">İmza</div>
                <div><strong>${data.mufettis_ad_soyad || '________'}</strong></div>
                <div><strong>${data.mufettis_kod || '(___)'}</strong></div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>
        
        <div class="letter-notes" style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #333; font-size: 9pt;">
            <div style="font-weight: bold; margin-bottom: 10px;">Açıklama:</div>
            <ol style="margin-left: 20px; line-height: 1.6;">
                <li style="margin-bottom: 8px;">Tanığın yazılı olarak çağrılmasında ikametgâh adresi esastır. Tanığın iş adresi de yazılabilir.</li>
                <li>Çağrı kâğıdı, Muhakkik tarafından yazıldığında; Sayı kısmına Muhakkikin inceleme/soruşturma onay numarası ve tarih kısmına da çağrı kâğıdının yazıldığı tarih konur.</li>
            </ol>
        </div>
        
        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: center; color: #666; border-top: 1px solid #ccc; padding-top: 10px;">
            Bu belge resmi soruşturma dosyasının ayrılmaz bir parçasıdır. (Belge No: 2.1)
        </div>
    `;
}

function createPDFContent21(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.6; color: #000; background: #fff; width: 170mm;';

    container.innerHTML = `
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
    `;

    return container;
}

// =====================================================
// Template 2.2 - Ön İncelemede Tanığın Yazılı Olarak Davet Edilmesi-Çağrı Kâğıdı
// =====================================================

function renderTemplate22(data) {
    // Randevu tarihi formatı
    let randevuTarihiFormatted = 'gg.aa.yyyy';
    let randevuGunu = '…..';
    if (data.randevu_tarihi) {
        const d = new Date(data.randevu_tarihi);
        randevuTarihiFormatted = d.toLocaleDateString('tr-TR');
        randevuGunu = d.toLocaleDateString('tr-TR', { weekday: 'long' });
    }

    return `
        <div>
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
                <div style="font-weight: bold;">T.C.</div>
                <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                <div style="font-weight: bold;">Teftiş Kurulu</div>
            </div>
            
            <table style="width: 100%; margin-bottom: 30px;">
                <tr>
                    <td style="vertical-align: top;">
                        <div><strong>Sayı:</strong> <strong>${data.sayi || '…../….,…'}</strong></div>
                        <div><strong>Konu:</strong> <strong>${data.konu || 'Tanıklığınız'}</strong></div>
                    </td>
                    <td style="text-align: right; vertical-align: top;">
                        <strong>${data.tarih_formatted || 'gg.aa.yyyy'}</strong>
                    </td>
                </tr>
            </table>
            
           <div style="text-align: center; margin: 40px 0;">
                <div style="margin-bottom: 5px;"><strong>Sayın ${data.muhatap_ad_soyad || '….. …..'}</strong></div>
                <div><strong>${data.muhatap_adres || '….. ….. Mahallesi/Caddesi ….. Sokak No: …/…'}</strong></div>
            </div>
            
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Müfettişliğimizce yürütülmekte olan “Ön İnceleme” çalışmaları kapsamında yer alan bazı konularda/iddialarda “Tanık” olarak/konumunda olduğunuz öğrenilmiş/anlaşılmış olup “Tanık” olarak/konumunda bilginize başvurma ihtiyacı duyulmuştur. 
            </p>
            
             <p style="text-align: justify; text-indent: 1cm; margin-bottom: 30px;">
                Tanık olarak bilginize baş vurmak üzere <strong>${randevuTarihiFormatted}</strong> tarihine rastlayan <strong>${randevuGunu}</strong> günü saat <strong>${data.randevu_saati || 'ss.dd'}</strong>'da/de <strong>${data.kurum_bilgisi || data.yer || '….. ….. Müdürlüğündeki'}</strong> Müfettişliğimiz çalışma odasına gelmeniz gerekmektedir. Gelmediğiniz takdirde 5271 sayılı Ceza Muhakemesi Kanunu’nun 44 üncü maddesinde belirtilen usulle (zorla) getirileceğinizin bilinmesini rica ederim.
            </p>
            
            <div style="text-align: right; margin: 60px 0;">
                <div style="display: inline-block; text-align: center; min-width: 200px;">
                     <div style="margin-bottom: 50px;">İmza</div>
                    <div><strong>${data.muhakkik_adi || '________'}</strong></div>
                    <div><strong>(${data.muhakkik_kod || 'KOD'})</strong></div>
                    <div>${data.muhakkik_unvan || 'Bakanlık Müfettişi'}</div>
                </div>
            </div>
            
            <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #333; font-size: 9pt;">
                <div style="font-weight: bold; margin-bottom: 5px;">Açıklama:</div>
                <div style="margin-left: 15px;">
                     1- Tanığın yazılı olarak çağrılmasında ikametgâh adresi esastır. Ancak, tanık bir kurumda / kuruluşta çalışıyorsa, gerektiğinde görev/iş adresine yazılmak suretiyle de çağrılabilir.<br>
                     2- Çağrı kâğıdı, Muhakkik/Ön İncelemeci tarafından yazıldığında, yazanın başlık kısmına görevli bulunduğu kurumun/birimin adı yazılmalıdır.
                </div>
            </div>
        </div>
    `;
}

function createPDFContent22(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

    container.innerHTML = `
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
            Tanık olarak bilginize baş vurmak üzere <strong>${data.randevu_tarihi_formatted || '__/__/____'}</strong> tarihine rastlayan <strong>${data.randevu_gunu || '________'}</strong> günü saat <strong>${data.randevu_saati || '__:__'}</strong>'da/de <strong>${data.yer || '________'}</strong> Müfettişliğimiz çalışma odasına gelmeniz gerekmektedir. Gelmediğiniz takdirde 5271 sayılı Ceza Muhakemesi Kanunu’nun 44 üncü maddesinde belirtilen usulle (zorla) getirileceğinizin bilinmesini rica ederim.
        </p>
        
        <div style="text-align: right; margin: 60px 0;">
            <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 50px;">İmza</div>
                <div><strong>${data.muhakkik_adi || '________'}</strong></div>
                <div>(KOD)</div>
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
    `;

    return container;
}

// =====================================================
// Template 1.4.1 - Yazılı İfade Tutanağı
// =====================================================

function renderTemplate141(data) {
    const questionsList = (data.written_questions || []).map(q =>
        `Soru ${q.index}. ${q.question || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}`
    );

    let questionsText = '';
    if (questionsList.length > 0) {
        questionsText = questionsList.join(' ….. olmadığı; <br>') + ' gelmediği; iddiaları/konuları mevcuttur.';
    }

    const answersHtml = (data.written_questions || []).map(q =>
        `<div>Cevap ${q.index}. ….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..</div>`
    ).join('');

    return `
        <div style="text-align: center; margin-bottom: 15px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 10pt; margin-bottom: 12px;">
            <tr><td style="width: 180px;">Adı ve Soyadı</td><td style="width: 10px;">:</td><td>${data.ad_soyad || ''}</td></tr>
            <tr><td>T.C. Kimlik No/Uyruğu</td><td>:</td><td>${data.tc_kimlik_uyruk || ''}</td></tr>
            <tr><td>Ana ve Baba Adı</td><td>:</td><td>${data.ana_baba_adi || ''}</td></tr>
            <tr><td>Doğum Yeri ve Tarihi</td><td>:</td><td>${data.dogum_yeri_tarihi || ''}</td></tr>
            <tr><td>Görevi/İşi/Mesleği</td><td>:</td><td>${data.gorevi_meslegi || ''}</td></tr>
            <tr><td>Görev/İşyeri Adresi</td><td>:</td><td>${data.gorev_isyeri_adresi || ''}</td></tr>
            <tr><td>İkametgâh Adresi</td><td>:</td><td>${data.ikametgah_adresi || ''}</td></tr>
            <tr><td>Telefon (Cep-Ev-İş yeri)</td><td>:</td><td>${data.telefon || ''}</td></tr>
            <tr><td>İfadenin Tarih ve Saati</td><td>:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

        <p style="text-align: justify; font-size: 9pt; margin-bottom: 10px;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan ${data.ad_soyad || '….. …..'} (${data.konum || '…..'}); belirtilen tarih ve saatte ${data.kurum_adi || '….. …..'} Müfettişliğimiz çalışma odasına "${data.konum || '…..'}" konumunda davet edildi. Bazı iddialar / konular ile ilgili olarak aşağıda yazılı soruların sorulacağı ve yapacağı açıklamalarının belirtilen yerden başlayarak tarafınca yazılmak suretiyle, yazılı ifadesinin alınacağı belirtildi. ${questionsText}
        </p>

        <p style="text-align: justify; font-size: 9pt; margin-bottom: 15px;">
            Bu iddialar/konular ile ilgili bildiklerinizi, duyduklarınızı varsa gördüklerinizi aşağıda yazarak açıklamanızı rica ederiz. <strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong>
        </p>

        <table style="width: 100%; text-align: center; font-size: 9pt; margin-bottom: 15px;">
            <tr>
                <td style="width: 50%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 20px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 50%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 20px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
            </tr>
        </table>

        <div style="text-align: center; font-size: 9pt; letter-spacing: 1px;">============================================== ============ ======</div>

        <p style="text-align: justify; font-size: 8pt; margin: 10px 0;">
            <strong>Açıklama:</strong> Cevaplarınızı, aşağıda işaret edilen yerden başlayıp soru sırasını gözeterek yazınız. Cevaplarınıza ara vermeden devam ediniz. Arka sayfaya yazmayınız. Gerektiğinde ikinci, üçüncü kâğıt kullanabilirsiniz. Birden fazla kâğıt kullandığınızda her kâğıdı imzalamayı unutmayınız.
        </p>

        <div style="font-weight: bold; font-size: 9pt; margin-bottom: 5px;">Cevaplarım:</div>
        <div style="font-size: 9pt;">${answersHtml}</div>

        <div style="text-align: right; margin-top: 40px; font-size: 10pt; font-weight: bold;">İMZA</div>
    `;
}

function createPDFContent141(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

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
        `Cevap ${q.index}. ….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..\n`
    ).join('');

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 2px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 11pt; margin-bottom: 18px; border-collapse: collapse;">
            <tr><td style="width: 200px; padding: 2px 0;">Adı ve Soyadı</td><td style="width: 15px; text-align: center;">:</td><td>${data.ad_soyad || ''}</td></tr>
            <tr><td style="padding: 2px 0;">T.C. Kimlik No/Uyruğu</td><td style="text-align: center;">:</td><td>${data.tc_kimlik_uyruk || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Ana ve Baba Adı</td><td style="text-align: center;">:</td><td>${data.ana_baba_adi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Doğum Yeri ve Tarihi</td><td style="text-align: center;">:</td><td>${data.dogum_yeri_tarihi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Görevi/İşi/Mesleği</td><td style="text-align: center;">:</td><td>${data.gorevi_meslegi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Görev/İşyeri Adresi</td><td style="text-align: center;">:</td><td>${data.gorev_isyeri_adresi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">İkametgâh Adresi</td><td style="text-align: center;">:</td><td>${data.ikametgah_adresi || ''}</td></tr>
            <tr><td style="padding: 2px 0;">Telefon (Cep-Ev-İş yeri)</td><td style="text-align: center;">:</td><td>${data.telefon || ''}</td></tr>
            <tr><td style="padding: 2px 0;">İfadenin Tarih ve Saati</td><td style="text-align: center;">:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

        <p style="text-align: justify; margin-bottom: 15px; font-size: 11pt; line-height: 1.5; white-space: pre-line;">
Yukarıda açık kimlik ve diğer bilgileri yer alan ${data.ad_soyad || '….. …..'} (${data.konum || '…..'}); belirtilen tarih ve saatte ${data.kurum_adi || '….. …..'} İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki Müfettişliğimiz çalışma odasına "${data.konum || '…..'}" konumunda davet edildi. Bazı iddialar / konular ile ilgili olarak aşağıda yazılı soruların sorulacağı ve yapacağı açıklamalarının belirtilen yerden başlayarak tarafınca yazılmak suretiyle, yazılı ifadesinin alınacağı belirtildi. ${questionsText}
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
    `;

    return container;
}

// =====================================================
// Template 1.4.2 - Yazılı İfade Tutanağı (Öğrenci İçin)
// =====================================================

function renderTemplate142(data) {
    const questionsList = (data.written_questions || []).map(q =>
        `Soru ${q.index}. ${q.question || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}`
    );

    let questionsText = '';
    if (questionsList.length > 0) {
        questionsText = questionsList.join(' ….. olmadığı; <br>') + ' gelmediği; iddiaları/konuları mevcuttur.';
    }

    const answersHtml = (data.written_questions || []).map(q =>
        `<div>Cevap ${q.index}. <strong>${q.answer || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong></div>`
    ).join('');

    return `
        <div style="text-align: center; margin-bottom: 15px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 10pt; margin-bottom: 12px;">
            <tr><td style="width: 180px;">Öğrencinin Adı ve Soyadı</td><td style="width: 10px;">:</td><td><strong>${data.ogrenci_ad_soyad || ''}</strong></td></tr>
            <tr><td>T.C. Kimlik No/Uyruğu</td><td>:</td><td><strong>${data.tc_kimlik_uyruk || ''}</strong></td></tr>
            <tr><td>Öğrenci Numarası</td><td>:</td><td><strong>${data.ogrenci_numarasi || ''}</strong></td></tr>
            <tr><td>Sınıfı</td><td>:</td><td><strong>${data.sinifi || ''}</strong></td></tr>
            <tr><td>Okulu</td><td>:</td><td><strong>${data.okulu || ''}</strong></td></tr>
            <tr><td>İfadenin Tarih ve Saati</td><td>:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

        <p style="text-align: justify; font-size: 9pt; margin-bottom: 10px;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ogrenci_ad_soyad || '….. …..'}</strong> (<strong>${data.konum || '…..'}</strong>); belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> İlkokulundaki/Ortaokulundaki/Lisesindeki Müfettişliğimiz çalışma odasına "<strong>${data.konum || '…..'}</strong>" konumunda davet edildi. Öğrenciye, müfettişliğimiz odasında hazır bulunan <strong>${data.rehber_ogretmen || 'okul rehber öğretmeni'}</strong> eşliğinde, <strong>${data.sorusturma_konusu || '….. …..'}</strong> hakkındaki iddialar/konular ile ilgili olarak aşağıda yazılı soruların sorulacağı ve yapacağı açıklamalarının belirtilen yerden başlayarak tarafınca yazılmak suretiyle, yazılı ifadesinin alınacağı belirtildi. Sorulan sorulara cevap verebileceğini beyan etmesi üzerine soruldu:
        </p>
        <p style="text-align: justify; font-size: 9pt; margin-bottom: 10px;">
            ${questionsText}
        </p>

        <p style="text-align: justify; font-size: 9pt; margin-bottom: 15px;">
            Bu iddialar/konular ile ilgili bildiklerinizi, duyduklarınızı varsa gördüklerinizi aşağıda yazarak açıklamanızı rica ederiz. <strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong>
        </p>

        <table style="width: 100%; text-align: center; font-size: 9pt; margin-bottom: 15px;">
            <tr>
                <td style="width: 50%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 20px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 50%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 20px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
            </tr>
        </table>

        <div style="text-align: center; font-size: 9pt; letter-spacing: 1px;">============================================== ============ ======</div>

        <p style="text-align: justify; font-size: 8pt; margin: 10px 0;">
            <strong>Açıklama:</strong> Cevaplarınızı, aşağıda işaret edilen yerden başlayıp soru sırasını gözeterek yazınız. Cevaplarınıza ara vermeden devam ediniz. Arka sayfaya yazmayınız. Gerektiğinde ikinci, üçüncü kâğıt kullanabilirsiniz. Birden fazla kâğıt kullandığınızda her kâğıdı imzalamayı unutmayınız.
        </p>

        <div style="font-weight: bold; font-size: 9pt; margin-bottom: 5px;">Cevaplarım:</div>
        <div style="font-size: 9pt;">${answersHtml}</div>

        <div style="text-align: right; margin-top: 40px; font-size: 10pt; font-weight: bold;">İMZA</div>
    `;
}

function createPDFContent142(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

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
        `Cevap ${q.index}. ….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..\n`
    ).join('');

    container.innerHTML = `
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
Yukarıda açık kimlik ve diğer bilgileri yer alan ${data.ogrenci_ad_soyad || '….. …..'} (${data.konum || '…..'}); belirtilen tarih ve saatte ${data.kurum_adi || '….. …..'} İlkokulundaki/Ortaokulundaki/Lisesindeki Müfettişliğimiz çalışma odasına "${data.konum || '…..'}" konumunda davet edildi. Öğrenciye, müfettişliğimiz odasında hazır bulunan ${data.rehber_ogretmen || 'okul rehber öğretmeni/müfettişliğimizin talebi üzerine Valiliğince/Müdürlüğünce görevlendirilen rehber öğretmen'} eşliğinde, bazı iddialar/konular ile ilgili olarak aşağıda yazılı soruların sorulacağı ve yapacağı açıklamalarının belirtilen yerden başlayarak tarafınca yazılmak suretiyle, yazılı ifadesinin alınacağı belirtildi. Sorulan sorulara cevap verebileceğini beyan etmesi üzerine soruldu: ${questionsText}
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
    `;

    return container;
}

// =====================================================
// Utility Functions
// =====================================================

// Toggle checkbox option and update related textarea
function toggleCheckboxOption(element, fieldId) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    if (!checkbox) return;

    // Toggle checkbox if click was on the wrapper div (not directly on checkbox)
    if (event && event.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
    }

    // Field ID to textarea ID mapping
    const fieldMappings = {
        'tespit_secenekleri': 'tespit_hususlar',
        'iddia_secenekleri': 'tespit_hususlar',
        'konu_secenekleri': 'konusu_aciklama',
        'yontem_secenekleri': 'yontem_surec',
        'degerlendirme_secenekleri': 'degerlendirme',
        'sonuc_secenekleri': 'sonuc_kanaat_teklif'
    };

    // Find the associated textarea
    let targetTextareaId = fieldMappings[fieldId];
    if (!targetTextareaId) {
        // Fallback: try replacing _secenekleri with _hususlar
        targetTextareaId = fieldId.replace('_secenekleri', '_hususlar');
    }

    const textarea = document.getElementById(targetTextareaId);
    if (!textarea) {
        console.warn('Textarea not found for field:', fieldId, '-> expected:', targetTextareaId);
        return;
    }

    // Collect all selected templates
    const checkboxes = document.querySelectorAll(`input[name="${fieldId}"]:checked`);
    let combinedText = '';
    checkboxes.forEach((cb, idx) => {
        const template = cb.getAttribute('data-template');
        if (template) {
            // Decode the template (it was escaped for HTML)
            const decodedTemplate = template.replace(/\\n/g, '\n').replace(/&quot;/g, '"');
            if (combinedText) combinedText += '\n';
            combinedText += decodedTemplate;
        }
    });

    // Update textarea with selected templates
    // For tespit_hususlar and iddia_secenekleri, add suffix
    if (combinedText) {
        if (fieldId === 'tespit_secenekleri' || fieldId === 'iddia_secenekleri') {
            textarea.value = combinedText + '\nhususları ortaya çıkmıştır.';
        } else if (fieldId === 'sonuc_secenekleri') {
            textarea.value = 'Raporun önceki bölümlerinde açıklandığı üzere İlgi (a)\'da kayıtlı Makam Olurunda yer alan:\n\n' + combinedText + '\n\nuygun olacağı,\nyönündeki kanaatimizi arz ederiz.';
        } else if (fieldId === 'konu_secenekleri') {
            textarea.value = 'İlgi (a)\'da kayıtlı Makam Olurunda yer alan;\n' + combinedText + '\niddiaları inceleme/soruşturmanın konusunu oluşturmaktadır (Ek: …/…).';
        } else {
            textarea.value = combinedText;
        }
    } else {
        textarea.value = '';
    }

    // Trigger preview update
    if (typeof updatePreview === 'function') {
        updatePreview();
    }
}

function clearForm() {
    if (!confirm('Tüm form verileri silinecek. Emin misiniz?')) return;

    loadTemplate(state.currentTemplate);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =====================================================
// Document Save/Load Functions
// =====================================================

// Current editing document ID (null if new)
let editingDocumentId = null;

/**
 * Save or update document
 */
async function saveDocument() {
    // Auth kontrolü - giriş yapmamış kullanıcılar kaydedemez
    if (!AuthService || !AuthService.isLoggedIn()) {
        showToast('Veri kaydetmek için giriş yapmalısınız', 'error');
        window.location.hash = '#/login';
        return;
    }

    const saveBtn = document.getElementById('saveDocumentBtn');
    if (!saveBtn) return;

    // Get document ID from button data attribute
    const documentId = saveBtn.dataset.documentId || null;
    const isUpdate = !!documentId;

    // Validate required fields
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;
    let firstInvalid = null;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
            if (!firstInvalid) firstInvalid = field;
        } else {
            field.classList.remove('error');
        }
    });

    if (!isValid) {
        showToast('Lütfen zorunlu alanları doldurun', 'error');
        firstInvalid?.focus();
        return;
    }

    // Show loading state
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<span class="spinner"></span> Kaydediliyor...';

    try {
        const formData = collectFormData();
        const template = TEMPLATES[state.currentTemplate];

        const documentData = {
            template_code: state.currentTemplate,
            template_name: template.name,
            category: template.category,
            person_name: DataService._extractPersonName(formData),
            event_date: DataService._extractEventDate(formData),
            form_data: formData
        };

        let result;

        if (isUpdate) {
            // Update existing document
            result = await DataService.update(documentId, documentData);
            if (result.success) {
                showToast('Belge güncellendi', 'success');
                // Navigate to document detail
                navigateTo(`documents/${documentId}`);
            } else {
                throw new Error(result.error || 'Güncelleme başarısız');
            }
        } else {
            // Create new document
            result = await DataService.save(documentData);
            if (result.id) {
                showToast('Belge kaydedildi', 'success');
                // Navigate to document detail
                navigateTo(`documents/${result.id}`);
            } else {
                throw new Error('Kayıt başarısız');
            }
        }
    } catch (error) {
        console.error('Save error:', error);
        showToast('Kayıt sırasında hata oluştu: ' + error.message, 'error');

        // Reset button
        saveBtn.disabled = false;
        saveBtn.innerHTML = documentId
            ? '<span>🔄</span> Güncelle'
            : '<span>💾</span> Kaydet';
    }
}

/**
 * Load document for editing
 */
async function loadDocumentForEdit(documentId) {
    const document = await DataService.getById(documentId);

    if (!document) {
        showToast('Belge bulunamadı', 'error');
        return null;
    }

    return document;
}

/**
 * Fill form with saved data
 */
function fillFormWithData(formData) {
    if (!formData) return;

    Object.entries(formData).forEach(([fieldId, value]) => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.value = value;
            field.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });

    // Handle Q&A items if present
    const qaData = formData.soru_cevap || formData.qa_items;
    if (qaData && Array.isArray(qaData)) {
        // Clear existing Q&A items
        state.qaItems = [];
        const qaContainer = document.getElementById('qaContainer');
        if (qaContainer) {
            qaContainer.innerHTML = '';

            // Add saved Q&A items
            qaData.forEach((item) => {
                addQaItem();
                const lastId = state.qaItems[state.qaItems.length - 1];
                if (lastId) {
                    const questionField = document.querySelector(`textarea[name="soru_${lastId}"]`);
                    const answerField = document.querySelector(`textarea[name="cevap_${lastId}"]`);

                    // Support both property names just in case
                    const questionText = item.soru || item.question || '';
                    const answerText = item.cevap || item.answer || '';

                    if (questionField) questionField.value = questionText;
                    if (answerField) answerField.value = answerText;
                }
            });
        }
    }

    // Handle Written Questions if present
    if (formData.written_questions && Array.isArray(formData.written_questions)) {
        state.writtenQuestions = [];
        const wqContainer = document.getElementById('writtenQuestionsContainer');
        if (wqContainer) {
            wqContainer.innerHTML = '';

            // Add saved items
            formData.written_questions.forEach(item => {
                addWrittenQuestion();
                const lastId = state.writtenQuestions[state.writtenQuestions.length - 1];
                if (lastId) {
                    const field = document.querySelector(`textarea[name="written_question_${lastId}"]`);
                    if (field) field.value = item.question || '';
                }
            });
        }
    }

    updatePreview();
}

// =====================================================
// Toast Notification
// =====================================================

function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
    `;

    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add fadeOut animation and toast styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut { 
        from { opacity: 1; transform: translateY(0); } 
        to { opacity: 0; transform: translateY(-10px); } 
    }
    
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        background: var(--bg-card, #1e1e35);
        border: 1px solid var(--border-color, #3a3a5c);
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .toast.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .toast-success { border-left: 4px solid #10b981; }
    .toast-error { border-left: 4px solid #ef4444; }
    .toast-warning { border-left: 4px solid #f59e0b; }
    .toast-info { border-left: 4px solid #6366f1; }
    
    .toast-icon { font-size: 1.2rem; }
    .toast-message { color: var(--text-primary, #fff); font-size: 0.9rem; }
    
    .btn-success {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        border: none;
    }
    
    .btn-success:hover {
        background: linear-gradient(135deg, #059669 0%, #047857 100%);
    }
    
    .spinner {
        display: inline-block;
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    input.error, textarea.error, select.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
`;
document.head.appendChild(style);

// =====================================================
// Template 1.5 - İtham (Şikâyet) Edilene Ait İfade Tutanağı
// =====================================================

function renderTemplate15(data) {
    // Soru ve cevapları birlikte göster
    const qaHtml = (data.soru_cevap || []).map((q, index) => `
        <div style="margin-bottom: 15px;">
            <div style="margin-bottom: 5px;">Soru ${index + 1}. <strong>${q.soru || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong> iddiasıyla ilgili olarak sorulduğunda;</div>
            <div style="margin-left: 20px;">Cevap ${index + 1}. <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong></div>
        </div>
    `).join('');

    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 2px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 10pt; margin-bottom: 12px;">
            <tr><td style="width: 200px;">Adı ve Soyadı</td><td style="width: 10px;">:</td><td><strong>${data.ad_soyad || ''}</strong></td></tr>
            <tr><td>T.C. Kimlik No/Uyruğu</td><td>:</td><td><strong>${data.tc_kimlik || ''}</strong></td></tr>
            <tr><td>Ana ve Baba Adı</td><td>:</td><td><strong>${data.ana_baba_adi || ''}</strong></td></tr>
            <tr><td>Doğum Yeri ve Tarihi</td><td>:</td><td><strong>${data.dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td>Görevi/İşi/Mesleği</td><td>:</td><td><strong>${data.gorevi || ''}</strong></td></tr>
            <tr><td>Görev/İşyeri Adresi</td><td>:</td><td><strong>${data.is_adresi || ''}</strong></td></tr>
            <tr><td>İkametgâh Adresi</td><td>:</td><td><strong>${data.ikametgah_adresi || ''}</strong></td></tr>
            <tr><td>Telefon (Cep-Ev-İşyeri)</td><td>:</td><td><strong>${data.telefon || ''}</strong></td></tr>
            <tr><td>İfadenin Tarih ve Saati</td><td>:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

        <p style="text-align: justify; font-size: 10pt; margin-bottom: 10px;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına "<strong>${data.konum || 'itham/şikâyet edilen'}</strong>" konumunda davet edildi. Davet edilmesine esas konu kendisine anlatılarak bu konuda açıklamalarının istenileceği ve açıklama yapmasına engel bir durumu olup olmadığı, açıklama yapmak isteyip istemediği sorulduğunda; açıklama yapmasına engel bir durumunun olmadığı ve özgür iradesi ile açıklama yapmak istediğini belirtmesi üzerine; iddialar/konular ile ilgili olarak soruldu:
        </p>

        <div style="font-size: 10pt; margin-bottom: 20px;">${qaHtml}</div>

        <p style="text-align: justify; font-size: 10pt; margin-top: 15px;">
             Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. <strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong>
        </p>

        <table style="width: 100%; text-align: center; font-size: 9pt; margin-top: 30px;">
            <tr>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div>İfade Sahibi</div>
                    <div>(İtham/Şikâyet Edilen)</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent15(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

    const questionsList = (data.soru_cevap || []).map((q, index) =>
        `<strong>Soru ${index + 1}.</strong> <strong>${q.soru || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong> iddiasıyla ilgili olarak sorulduğunda;<br>
         <strong>Cevap ${index + 1}.</strong> <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong>`
    );

    let questionsHtml = '';
    if (questionsList.length > 0) {
        questionsHtml = questionsList.join('<br><br>');
    }

    container.innerHTML = `
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
    `;

    return container;
}

// =====================================================
// Template 1.6.1 - Müdafi Talebi Olmadığında Düzenlenecek İfade Tutanağı
// =====================================================

function renderTemplate161(data) {
    // Soru ve cevapları birlikte göster
    const qaHtml = (data.soru_cevap || []).map((q, index) => `
        <div style="margin-bottom: 15px;">
            <div style="margin-bottom: 5px;">Soru ${index + 1}. <strong>${q.soru || '….. ….. iddiasıyla ilgili olarak sorulduğunda; (sorulacak soru açık olarak yazılacak)'}</strong></div>
            <div style="margin-left: 20px;">Cevap ${index + 1}. <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong></div>
        </div>
    `).join('');

    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 2px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 10pt; margin-bottom: 12px;">
            <tr><td style="width: 200px;">Adı ve Soyadı</td><td style="width: 10px;">:</td><td><strong>${data.ad_soyad || ''}</strong></td></tr>
            <tr><td>T.C. Kimlik No/Uyruğu</td><td>:</td><td><strong>${data.tc_kimlik || ''}</strong></td></tr>
            <tr><td>Ana ve Baba Adı</td><td>:</td><td><strong>${data.ana_baba_adi || ''}</strong></td></tr>
            <tr><td>Doğum Yeri ve Tarihi</td><td>:</td><td><strong>${data.dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td>Görevi/İşi/Mesleği</td><td>:</td><td><strong>${data.gorevi || ''}</strong></td></tr>
            <tr><td>Görev/İşyeri Adresi</td><td>:</td><td><strong>${data.is_adresi || ''}</strong></td></tr>
            <tr><td>İkametgâh Adresi</td><td>:</td><td><strong>${data.ikametgah_adresi || ''}</strong></td></tr>
            <tr><td>Telefon (Cep-Ev-İşyeri)</td><td>:</td><td><strong>${data.telefon || ''}</strong></td></tr>
            <tr><td>İfadenin Tarih ve Saati</td><td>:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

         <p style="text-align: justify; font-size: 10pt; margin-bottom: 10px;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına "<strong>${data.konum || 'hakkında ön inceleme yapılan'}</strong>" konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar anlatılarak müdafi seçme hakkının bulunduğu ve onun hukuki yardımından yararlanabileceği, müdafinin ifade esnasında hazır bulunabileceği bildirildi. Müdafi seçecek durumda olmadığı ve bir müdafi yardımından faydalanmak istediği takdirde, kendisine Baro tarafından bir müdafi görevlendirilebileceği belirtildi. Yüklenen fiiller/iddialar hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylendi. Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatıldı ve aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanındı. Açıklamaları anladığını ve kendisine yüklenen fiillerle/iddialarla ilgili olarak yöneltilen sorulara özgür iradesiyle kendisinin cevap vereceğini, müdafi talebinin bulunmadığını belirtmesi üzerine soruldu:
        </p>

        <div style="font-size: 10pt; margin-bottom: 20px;">${qaHtml}${qaHtml ? ' " dedi."' : ''}</div>

        <p style="text-align: justify; font-size: 10pt; margin-top: 15px;">
             Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. <strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong>
        </p>

        <table style="width: 100%; text-align: center; font-size: 9pt; margin-top: 30px;">
            <tr>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 9pt;">(Hakkında Ön İnceleme Yapılan)</div>
                     <div>İfade Sahibi</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent161(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

    const questionsList = (data.soru_cevap || []).map((q, index) =>
        `<strong>Soru ${index + 1}.</strong> <strong>${q.soru || '….. ….. iddiasıyla ilgili olarak sorulduğunda; (sorulacak soru açık olarak yazılacak)'}</strong><br>
         <strong>Cevap ${index + 1}.</strong> <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong>`
    );

    let questionsHtml = '';
    if (questionsList.length > 0) {
        questionsHtml = questionsList.join('<br><br>');
    }

    container.innerHTML = `
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
    `;

    return container;
}

function renderTemplate162(data) {
    const appointmentDate = data.randevu_tarihi ? new Date(data.randevu_tarihi) : null;
    let dayName = '…..';
    let formattedAppointmentDate = 'gg.aa.yyyy';

    if (appointmentDate && !isNaN(appointmentDate.getTime())) {
        dayName = appointmentDate.toLocaleDateString('tr-TR', { weekday: 'long' });
        formattedAppointmentDate = appointmentDate.toLocaleDateString('tr-TR');
    }

    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 2px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 10pt; margin-bottom: 12px;">
            <tr><td style="width: 200px;">Adı ve Soyadı</td><td style="width: 10px;">:</td><td><strong>${data.ad_soyad || ''}</strong></td></tr>
            <tr><td>T.C. Kimlik No/Uyruğu</td><td>:</td><td><strong>${data.tc_kimlik || ''}</strong></td></tr>
            <tr><td>Ana ve Baba Adı</td><td>:</td><td><strong>${data.ana_baba_adi || ''}</strong></td></tr>
            <tr><td>Doğum Yeri ve Tarihi</td><td>:</td><td><strong>${data.dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td>Görevi/İşi/Mesleği</td><td>:</td><td><strong>${data.gorevi || ''}</strong></td></tr>
            <tr><td>Görev/İşyeri Adresi</td><td>:</td><td><strong>${data.is_adresi || ''}</strong></td></tr>
            <tr><td>İkametgâh Adresi</td><td>:</td><td><strong>${data.ikametgah_adresi || ''}</strong></td></tr>
            <tr><td>Telefon (Cep-Ev-İşyeri)</td><td>:</td><td><strong>${data.telefon || ''}</strong></td></tr>
            <tr><td>İfadenin Tarih ve Saati</td><td>:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

         <p style="text-align: justify; font-size: 10pt; margin-bottom: 10px;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına "<strong>${data.konum || 'hakkında ön inceleme yapılan'}</strong>" konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar anlatılarak, müdafi seçme hakkının bulunduğu ve onun hukuki yardımından yararlanabileceği, müdafinin ifade esnasında hazır bulunabileceği bildirildi. Müdafi seçecek durumda olmadığı ve bir müdafi yardımından faydalanmak istediği takdirde, kendisine Baro tarafından bir müdafi görevlendirilebileceği belirtildi. Yüklenen fiiller/iddialar hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylendi. Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatıldı ve aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanındı. Açıklamaları anladığını ve kendisine yüklenen fiillerle/iddialarla ilgili olarak yöneltilen sorulara müdafi ile birlikte cevap vereceğini belirtti. Bunun üzerine, kendisine müdafi seçmesi ve getirmesi için <strong>(${data.verilen_sure_gun || '…'}) günlük</strong> süre verildi. <strong>${formattedAppointmentDate}</strong> tarihine rastlayan <strong>${dayName}</strong> günü saat <strong>Saat: ${data.randevu_saati || 'ss.dd'}'da/de</strong> yukarıda belirtilen müfettişlik adresinde müdafi ile birlikte hazır bulunması istenildi. Belirtilen gün ve saatte bulunmadığı takdirde, "açıklamada bulunmama hakkını" kullandığının anlaşılacağı söylendi. Bu hususları da anladığını ve kabul ettiğini beyan etti.
        </p>

        <p style="text-align: justify; font-size: 10pt; margin-top: 15px;">
             Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yukarıda talebinin aynen yazıldığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. <strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong>
        </p>

        <table style="width: 100%; text-align: center; font-size: 9pt; margin-top: 30px;">
            <tr>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 9pt;">(Hakkında Ön İnceleme Yapılan)</div>
                     <div>İfade Sahibi</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent162(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

    let appointmentDate = null;
    let dayName = '…..';
    let formattedAppointmentDate = 'gg.aa.yyyy';

    if (data.randevu_tarihi) {
        const d = new Date(data.randevu_tarihi);
        if (!isNaN(d.getTime())) {
            appointmentDate = d;
            dayName = d.toLocaleDateString('tr-TR', { weekday: 'long' });
            formattedAppointmentDate = d.toLocaleDateString('tr-TR');
        }
    }

    container.innerHTML = `
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
             Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına "<strong>${data.konum || 'hakkında ön inceleme yapılan'}</strong>" konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar anlatılarak, müdafi seçme hakkının bulunduğu ve onun hukuki yardımından yararlanabileceği, müdafinin ifade esnasında hazır bulunabileceği bildirildi. Müdafi seçecek durumda olmadığı ve bir müdafi yardımından faydalanmak istediği takdirde, kendisine Baro tarafından bir müdafi görevlendirilebileceği belirtildi. Yüklenen fiiller/iddialar hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylendi. Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatıldı ve aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanındı. Açıklamaları anladığını ve kendisine yüklenen fiillerle/iddialarla ilgili olarak yöneltilen sorulara müdafi ile birlikte cevap vereceğini belirtti. Bunun üzerine, kendisine müdafi seçmesi ve getirmesi için <strong>(${data.verilen_sure_gun || '…'}) günlük</strong> süre verildi. <strong>${formattedAppointmentDate}</strong> tarihine rastlayan <strong>${dayName}</strong> günü saat <strong>Saat: ${data.randevu_saati || 'ss.dd'}'da/de</strong> yukarıda belirtilen müfettişlik adresinde müdafi ile birlikte hazır bulunması istenildi. Belirtilen gün ve saatte bulunmadığı takdirde, "açıklamada bulunmama hakkını" kullandığının anlaşılacağı söylendi. Bu hususları da anladığını ve kabul ettiğini beyan etti.
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
    `;

    return container;
}


// =====================================================
// Template 1.6.3 - Müdafi Seçebilecek Durumda Olmadığının Beyan Edilerek Müdafi Görevlendirilmesi İstenildiğinde Düzenlenecek İfade Tutanağı
// =====================================================

function renderTemplate163(data) {
    const appointmentDate = data.randevu_tarihi ? new Date(data.randevu_tarihi) : null;
    const dayName = appointmentDate ? appointmentDate.toLocaleDateString('tr-TR', { weekday: 'long' }) : '…..';
    const formattedAppointmentDate = appointmentDate ? appointmentDate.toLocaleDateString('tr-TR') : 'gg.aa.yyyy';

    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 2px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; font-size: 10pt; margin-bottom: 12px;">
            <tr><td style="width: 200px;">Adı ve Soyadı</td><td style="width: 10px;">:</td><td><strong>${data.ad_soyad || ''}</strong></td></tr>
            <tr><td>T.C. Kimlik No/Uyruğu</td><td>:</td><td><strong>${data.tc_kimlik || ''}</strong></td></tr>
            <tr><td>Ana ve Baba Adı</td><td>:</td><td><strong>${data.ana_baba_adi || ''}</strong></td></tr>
            <tr><td>Doğum Yeri ve Tarihi</td><td>:</td><td><strong>${data.dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td>Görevi/İşi/Mesleği</td><td>:</td><td><strong>${data.gorevi || ''}</strong></td></tr>
            <tr><td>Görev/İşyeri Adresi</td><td>:</td><td><strong>${data.is_adresi || ''}</strong></td></tr>
            <tr><td>İkametgâh Adresi</td><td>:</td><td><strong>${data.ikametgah_adresi || ''}</strong></td></tr>
            <tr><td>Telefon (Cep-Ev-İşyeri)</td><td>:</td><td><strong>${data.telefon || ''}</strong></td></tr>
            <tr><td>İfadenin Tarih ve Saati</td><td>:</td><td><strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td></tr>
        </table>

         <p style="text-align: justify; font-size: 10pt; margin-bottom: 10px;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına “${data.konum || 'hakkında ön inceleme yapılan'}” konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar anlatılarak, müdafi seçme hakkının bulunduğu ve onun hukuki yardımından yararlanabileceği, müdafinin ifade esnasında hazır bulunabileceği bildirildi. Müdafi seçecek durumda olmadığı ve bir müdafi yardımından faydalanmak istediği takdirde, kendisine baro tarafından bir müdafi görevlendirilebileceği belirtildi. Yüklenen fiiller/iddialar hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylendi. Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatıldı ve aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanındı. Açıklamaları anladığını ve kendisine yüklenen fiillerle/iddialarla ilgili olarak yöneltilen sorulara bir müdafinin hukuki yardımından yararlanmak suretiyle cevap vermek istediğini, ancak müdafi seçecek durumda olmadığını beyan etmesi üzerine; Müfettişliğimizce, kendisine baro tarafından bir müdafi görevlendirilmesi için yazılı girişimde bulunulacağı belirtilerek, birlikte belirlenen <strong>${formattedAppointmentDate}</strong> tarihine tesadüf eden <strong>${dayName}</strong> günü saat <strong>Saat: ${data.randevu_saati || 'ss.dd'}’da/de</strong> veya Baro ile yapılan görüşmede belirlenen gün ve saatte, ifadesine başvurulacağı kararlaştırıldı. Belirlenen veya bildirilen gün ve saatte, yukarıda belirtilen müfettişlik adresinde hazır bulunması istenildi. Belirtilen gün ve saatte bulunmadığı takdirde, “açıklamada bulunmama hakkını” kullandığının anlaşılacağı söylendi. Bu hususları da anladığını ve kabul ettiğini beyan etti.
        </p>

        <p style="text-align: justify; font-size: 10pt; margin-top: 15px;">
             Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yukarıda talebinin aynen yazıldığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. <strong>${data.tarih_formatted || 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong>
        </p>

        <table style="width: 100%; text-align: center; font-size: 9pt; margin-top: 10px;">
            <tr>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 33%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 9pt;">(Hakkında Ön İnceleme Yapılan)</div>
                     <div>İfade Sahibi</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent163(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

    const appointmentDate = data.randevu_tarihi ? new Date(data.randevu_tarihi) : null;
    const dayName = appointmentDate ? appointmentDate.toLocaleDateString('tr-TR', { weekday: 'long' }) : '…..';
    const formattedAppointmentDate = appointmentDate ? appointmentDate.toLocaleDateString('tr-TR') : 'gg.aa.yyyy';

    container.innerHTML = `
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
             Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '….. …..'}</strong> Müfettişliğimiz çalışma odasına “<strong>${data.konum || 'hakkında ön inceleme yapılan'}</strong>” konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar anlatılarak, müdafi seçme hakkının bulunduğu ve onun hukuki yardımından yararlanabileceği, müdafinin ifade esnasında hazır bulunabileceği bildirildi. Müdafi seçecek durumda olmadığı ve bir müdafi yardımından faydalanmak istediği takdirde, kendisine baro tarafından bir müdafi görevlendirilebileceği belirtildi. Yüklenen fiiller/iddialar hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylendi. Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatıldı ve aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanındı. Açıklamaları anladığını ve kendisine yüklenen fiillerle/iddialarla ilgili olarak yöneltilen sorulara bir müdafinin hukuki yardımından yararlanmak suretiyle cevap vermek istediğini, ancak müdafi seçecek durumda olmadığını beyan etmesi üzerine; Müfettişliğimizce, kendisine baro tarafından bir müdafi görevlendirilmesi için yazılı girişimde bulunulacağı belirtilerek, birlikte belirlenen <strong>${formattedAppointmentDate}</strong> tarihine tesadüf eden <strong>${dayName}</strong> günü saat <strong>Saat: ${data.randevu_saati || 'ss.dd'}’da/de</strong> veya Baro ile yapılan görüşmede belirlenen gün ve saatte, ifadesine başvurulacağı kararlaştırıldı. Belirlenen veya bildirilen gün ve saatte, yukarıda belirtilen müfettişlik adresinde hazır bulunması istenildi. Belirtilen gün ve saatte bulunmadığı takdirde, “açıklamada bulunmama hakkını” kullandığının anlaşılacağı söylendi. Bu hususları da anladığını ve kabul ettiğini beyan etti.
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
    `;

    return container;
}

// =====================================================
// Template 1.6.4 - Müdafi Seçemeyeceğini Beyan Üzerine Baro Başkanlığına Yazı Örneği
// =====================================================

function renderTemplate164(data) {
    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı:</strong> <strong>${data.sayi || '…../…,…'}</strong></div>
                <div><strong>Konu:</strong> <strong>${data.konu || 'Müdafi Talebi'}</strong></div>
            </div>
            <div style="text-align: right;">
                <div><strong>${data.tarih ? new Date(data.tarih).toLocaleDateString('tr-TR') : 'gg.aa.yyyy'}</strong></div>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 30px 0 20px 0;">
            <strong>${data.baro_adi ? data.baro_adi.toLocaleUpperCase('tr-TR') : '…..'}</strong> BAROSU BAŞKANLIĞINA
        </div>

         <p style="text-align: justify; font-size: 11pt; margin-bottom: 15px; text-indent: 40px;">
            Müfettişliğimizce, 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun kapsamında yürütülmekte olan ön inceleme sırasında, ifadesine başvurulmak üzere çağrılan <strong>${data.ifade_sahibi_ad_soyad || '….. …..'}</strong>, ekteki tutanakta da görüleceği üzere, müdafi seçecek durumda olmadığını ve bir müdafinin hukuki yardımından faydalanmak istediğini beyan etmiş bulunmaktadır.
        </p>

        <p style="text-align: justify; font-size: 11pt; margin-bottom: 15px; text-indent: 40px;">
            Bu nedenle; Ceza Muhakemesi Kanunu’nun 149, 150, 156 ncı maddeleri gereğince, aşağıda bilgileri yer alan kişiye hukuki yardımda bulunacak bir müdafinin Başkanlığınızca belirlenerek, aşağıda belirtilen yer, gün ve saatte yapılacak ifade alımında hazır bulundurulmasının sağlanmasını rica ederiz.
        </p>

        <table style="width: 100%; text-align: center; font-size: 10pt; margin-top: 40px;">
            <tr>
                <td style="width: 50%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 50%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
            </tr>
        </table>

        <div style="margin-top: 30px; font-size: 10pt;">
            <div><strong>Ek:</strong> İfade Tutanağı (${data.ek_sayfa || '…'} Sayfa)</div>
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #ccc; padding-top: 10px;">
            <div style="font-weight: bold; margin-bottom: 5px;">İfadesi Alınacak Kişinin Bilgileri:</div>
            <div style="margin-left: 10px;">
                <div>1. İfadesi alınacak kişi ile ilgili bilgiler:</div>
                <div style="margin-left: 20px;">Adı Soyadı: <strong>${data.ifade_sahibi_ad_soyad || '….. …..'}</strong></div>
                <div style="margin-left: 20px;">T.C. Kimlik No: <strong>${data.tc_kimlik || '….. …..'}</strong></div>
                <div style="margin-left: 20px;">Adresi ve Telefonu: <strong>${data.ifade_sahibi_adres_tel || '….. …..'}</strong></div>
                <div style="margin-top: 5px;">2. İfadenin alınacağı yer, gün ve saat:</div>
                <div style="margin-left: 20px;">İfade Yeri: <strong>${data.ifade_yeri || '….. …..'}</strong></div>
                <div style="margin-left: 20px;">İfade Tarihi: <strong>${data.ifade_tarihi ? new Date(data.ifade_tarihi).toLocaleDateString('tr-TR') : 'gg.aa.yyyy'}, ${data.ifade_saati || 'ss.dd'}</strong></div>
            </div>
        </div>
    `;
}

function createPDFContent164(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

    const formattedDate = data.tarih ? new Date(data.tarih).toLocaleDateString('tr-TR') : 'gg.aa.yyyy';
    const ifadeTarihiFormatted = data.ifade_tarihi ? new Date(data.ifade_tarihi).toLocaleDateString('tr-TR') : 'gg.aa.yyyy';

    container.innerHTML = `
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
                <div style="margin-left: 20px;">Adresi ve Telefonu: ${data.ifade_sahibi_adres_tel || '….. …..'}</div>
                <div style="margin-top: 10px;"><strong>2. İfadenin alınacağı yer, gün ve saat:</strong></div>
                <div style="margin-left: 20px;">İfade Yeri: ${data.ifade_yeri || '….. …..'}</div>
                <div style="margin-left: 20px;">İfade Tarihi: ${ifadeTarihiFormatted}, ….. günü, saat ${data.ifade_saati || 'ss.dd'}</div>
            </div>
        </div>
    `;

    return container;
}

// =====================================================
// Template 1.6.5 - Müdafi Seçme Hakkı Kullanıldığında Düzenlenecek İfade Tutanağı
// =====================================================

function renderTemplate165(data) {
    // Soru ve cevapları birlikte göster - kullanıcının istediği formatta
    const qaItems = (data.soru_cevap || []).map((q, index) =>
        `Soru ${index + 1}. <strong>${q.soru || '….. (sorulacak soru açık olarak yazılacak) …..'}</strong> iddiasıyla ilgili olarak sorulduğunda;\nCevap ${index + 1}. <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</strong>`
    );

    const qaHtml = qaItems.length > 0
        ? qaItems.join(' ') + ' " dedi.'
        : '';

    return `
        <div style="text-align: center; margin-bottom: 25px;">
             <h1 style="font-size: 14pt; font-weight: bold; margin: 0; letter-spacing: 1px;">İFADE TUTANAĞI</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 11pt;">
            <tr>
                <td style="font-weight: bold; padding: 3px; width: 35%;">Adı ve Soyadı</td>
                <td style="padding: 3px; width: 2%;">:</td>
                <td style="padding: 3px;"><strong>${data.ad_soyad || ''}</strong></td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px;">T.C. Kimlik No/Uyruğu</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;"><strong>${data.tc_kimlik || ''}</strong></td>
            </tr>
             <tr>
                <td style="font-weight: bold; padding: 3px;">Ana ve Baba Adı</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;"><strong>${data.ana_baba_adi || ''}</strong></td>
            </tr>
             <tr>
                <td style="font-weight: bold; padding: 3px;">Doğum Yeri ve Tarihi</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;"><strong>${data.dogum_yeri_tarihi || ''}</strong></td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px;">Görevi/İşi/Mesleği</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;"><strong>${data.gorevi || ''}</strong></td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px; vertical-align: top;">Görev/İşyeri Adresi</td>
                <td style="padding: 3px; vertical-align: top;">:</td>
                <td style="padding: 3px;"><strong>${data.is_adresi || ''}</strong></td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px; vertical-align: top;">İkametgâh Adresi</td>
                <td style="padding: 3px; vertical-align: top;">:</td>
                <td style="padding: 3px;"><strong>${data.ikametgah_adresi || ''}</strong></td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px;">Telefon (Cep-Ev-İşyeri)</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;"><strong>${data.telefon || ''}</strong></td>
            </tr>
              <tr>
                <td style="font-weight: bold; padding: 3px;">Müdafi/Avukat Adı Soyadı</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;"><strong>${data.mudafi_ad_soyad || ''}</strong></td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 3px;">İfadenin Tarih ve Saati</td>
                <td style="padding: 3px;">:</td>
                <td style="padding: 3px;"><strong>${data.tarih ? new Date(data.tarih).toLocaleDateString('tr-TR') : 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</strong></td>
            </tr>
        </table>
        
        <div style="margin-bottom: 20px; text-align: justify; text-indent: 40px; font-size: 11pt;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '…..'} İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki Müfettişliğimiz çalışma odasına</strong> "hakkında ön inceleme yapılan" konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar açıklanarak, müdafinin hukuki yardımından yararlanmak suretiyle ve özgür iradesiyle kendisinin cevap vereceğini belirtmesi üzerine sorulduğunda:
        </div>

        <div style="margin-bottom: 20px; font-size: 11pt; text-align: justify; white-space: pre-line;">
            ${qaHtml}
        </div>
        
        <div style="margin-top: 30px; text-align: justify; text-indent: 40px; font-size: 11pt;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. ${data.tarih ? new Date(data.tarih).toLocaleDateString('tr-TR') : 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}
        </div>

        <table style="width: 100%; text-align: center; font-size: 9pt; margin-top: 30px;">
            <tr>
                <td style="width: 25%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis1_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                <td style="width: 25%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mufettis2_ad_soyad || 'Adı SOYADI'}</div>
                    <div style="color: red; font-weight: bold;">(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </td>
                 <td style="width: 25%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.ad_soyad || 'Adı SOYADI'}</div>
                    <div style="font-size: 9pt;">(Hakkında Ön İnceleme Yapılan)</div>
                     <div>İfade Sahibi</div>
                </td>
                <td style="width: 25%;">
                    <div>İmza</div>
                    <div style="font-weight: bold; margin-top: 25px;">${data.mudafi_ad_soyad || 'Adı SOYADI'}</div>
                    <div>Müdafi/Avukat</div>
                </td>
            </tr>
        </table>
    `;
}

// Helper function for rendering Q&A in PDF
function renderQAPdf(questions) {
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        return '';
    }

    return questions.map((q, index) =>
        `<strong>Soru ${index + 1}.</strong> <strong>${q.soru || '….. ….. iddiasıyla ilgili olarak sorulduğunda; (sorulacak soru açık olarak yazılacak)'}</strong><br>
         <strong>Cevap ${index + 1}.</strong> <strong>${q.cevap || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</strong>`
    ).join('<br><br>');
}

function createPDFContent165(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 170mm;';

    const questionsPdf = renderQAPdf(data.questions);

    container.innerHTML = `
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
                <td style="padding: 3px;">${data.tarih ? new Date(data.tarih).toLocaleDateString('tr-TR') : 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}</td>
            </tr>
        </table>

         <div style="margin-bottom: 20px; text-align: justify; text-indent: 1.25cm; font-size: 12pt;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.ad_soyad || '….. …..'}</strong>; belirtilen tarih ve saatte <strong>${data.kurum_adi || '…..'} İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki Müfettişliğimiz çalışma odasına</strong> “hakkında ön inceleme yapılan” konumunda davet edildi. Davet edilme gerekçesi belirtilerek ve kendisine yüklenen fiiller/iddialar açıklanarak, müdafinin hukuki yardımından yararlanmak suretiyle ve özgür iradesiyle kendisinin cevap vereceğini belirtmesi üzerine sorulduğunda:
        </div>

        <div style="margin-bottom: 20px;">
            ${questionsPdf}
        </div>

         <div style="margin-top: 30px; text-align: justify; text-indent: 1.25cm; font-size: 12pt;">
            Yazılanlar okundu, kendisinin okumasına fırsat verildi. Yazılanların söylediklerinin aynısı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı. ${data.tarih ? new Date(data.tarih).toLocaleDateString('tr-TR') : 'gg.aa.yyyy'} - Saat: ${data.saat || 'ss.dd'}
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
    `;
    return container;
}

// =====================================================
// Template 1.4.1 - Yazılı İfade Tutanağı
// =====================================================

function renderTemplate141(data) {
    // Kurum bilgisi
    const kurumBilgisi = `${data.kurum_adi || '..... .....'} ${data.kurum_turu || 'İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki'}`;

    return `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 14pt; font-weight: bold;">İFADE TUTANAĞI</h1>
        </div>

        <table style="font-size: 11pt; margin-bottom: 15px; border-collapse: collapse; width: 100%;">
            <tr><td style="width: 200px;"><strong>Adı ve Soyadı</strong></td><td style="width: 15px;">:</td><td><strong>${data.tanik_adi || ''}</strong></td></tr>
            <tr><td><strong>T.C. Kimlik No/Uyruğu</strong></td><td>:</td><td><strong>${data.tanik_tc || ''}</strong></td></tr>
            <tr><td><strong>Ana ve Baba Adı</strong></td><td>:</td><td><strong>${data.tanik_ana_baba || ''}</strong></td></tr>
            <tr><td><strong>Doğum Yeri ve Tarihi</strong></td><td>:</td><td><strong>${data.tanik_dogum_yeri_tarihi || ''}</strong></td></tr>
            <tr><td><strong>Görevi/İşi/Mesleği</strong></td><td>:</td><td><strong>${data.tanik_gorev_meslek || ''}</strong></td></tr>
            <tr><td><strong>Görev/İşyeri Adresi</strong></td><td>:</td><td><strong>${data.tanik_is_adresi || ''}</strong></td></tr>
            <tr><td><strong>İkametgâh Adresi</strong></td><td>:</td><td><strong>${data.tanik_ikamet_adresi || ''}</strong></td></tr>
            <tr><td><strong>Telefon (Cep-Ev-İş yeri)</strong></td><td>:</td><td><strong>${data.tanik_telefon || ''}</strong></td></tr>
            <tr><td><strong>İfadenin Tarih ve Saati</strong></td><td>:</td><td><strong>${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</strong></td></tr>
        </table>

        <div style="text-align: justify; margin: 15px 0; font-size: 11pt; line-height: 1.6;">
            Yukarıda açık kimlik ve diğer bilgileri yer alan <strong>${data.tanik_adi || '..... .....'}</strong>; belirtilen tarih ve saatte <strong>${kurumBilgisi}</strong> Müfettişliğimiz çalışma odasına "<strong>${data.konum || '.....'}</strong>" konumunda davet edildi. Bazı iddialar / konular ile ilgili olarak aşağıda yazılı soruların sorulacağı ve yapacağı açıklamalarının belirtilen yerden başlayarak tarafınca yazılmak suretiyle, yazılı ifadesinin alınacağı belirtildi.
        </div>

        <div style="margin: 15px 0;">
            ${data.written_questions ? data.written_questions.map((q, i) => `
                <div style="margin-bottom: 5px;"><strong>Soru ${i + 1}.</strong> ${q.question || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'} ${i === data.written_questions.length - 2 ? 'olmadığı;' : (i === data.written_questions.length - 1 ? 'gelmediği; iddiaları/konuları mevcuttur.' : '')}</div>
            `).join('') : '<div>Soru eklenmedi</div>'}
        </div>

        <div style="text-align: justify; margin: 15px 0; font-size: 11pt;">
            Bu iddialar/konular ile ilgili bildiklerinizi, duyduklarınızı varsa gördüklerinizi aşağıda yazarak açıklamanızı rica ederiz. <strong>${(data.tarih_formatted || 'gg.aa.yyyy') + ' - Saat: ' + (data.saat || 'ss.dd')}</strong>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: center; margin: 30px 0;">
            <div>
                <div>İmza</div>
                <br><br>
                <div><strong>${data.muhakkik1_adi || 'Adı SOYADI'}</strong></div>
                <div>(${data.muhakkik1_kod || 'KOD'})</div>
                <div>${data.muhakkik1_unvan || 'Bakanlık Müfettişi'}</div>
            </div>
            <div>
                <div>İmza</div>
                <br><br>
                <div><strong>${data.muhakkik2_adi || 'Adı SOYADI'}</strong></div>
                <div>(${data.muhakkik2_kod || 'KOD'})</div>
                <div>${data.muhakkik2_unvan || 'Bakanlık Müfettişi'}</div>
            </div>
        </div>

        <div style="text-align: center; font-size: 9pt; letter-spacing: 1px; margin: 20px 0;">============================================== ============ ======</div>

        <div style="font-size: 10pt; font-style: italic; margin: 10px 0;">
            <strong>Açıklama:</strong> Cevaplarınızı, aşağıda işaret edilen yerden başlayıp soru sırasını gözeterek yazınız. Cevaplarınıza ara vermeden devam ediniz. Arka sayfaya yazmayınız. Gerektiğinde ikinci, üçüncü kâğıt kullanabilirsiniz. Birden fazla kâğıt kullandığınızda her kâğıdı imzalamayı unutmayınız.
        </div>

        <div style="font-weight: bold; margin: 15px 0 10px 0;">Cevaplarım:</div>
        <div style="font-size: 11pt;">
            ${data.written_questions ? data.written_questions.map((q, i) => `
                <div style="margin-bottom: 10px;"><strong>Cevap ${i + 1}.</strong> ${q.answer || '….. ….. ….. ….. ….. ….. ….. …. …. ….. ….. ….. …..'}</div>
            `).join('') : ''}
        </div>

        <div style="text-align: right; margin-top: 60px;">
            <div style="display: inline-block; text-align: center; width: 200px;">
                <div><strong>İMZA</strong></div>
                <br><br><br>
            </div>
        </div>
    `;
}


function createPDFContent141(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;';

    // Kurum bilgisi
    const kurumBilgisi = `${data.kurum_adi || '..... .....'} ${data.kurum_turu || 'İlkokulundaki/Ortaokulundaki/Lisesindeki/Müdürlüğündeki'}`;

    container.innerHTML = `
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
                        <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
                    </td>
                    <td style="width: 50%; vertical-align: top;">
                        <div style="font-weight: bold; font-size: 10pt;">İmza</div>
                        <br><br>
                        <div><strong>${data.muhakkik2_adi || '..... .....'}</strong></div>
                        <div>(${data.muhakkik2_kod || '.....'})</div>
                        <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
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
    `;
    return container;
}

// ==========================================
// Şablon 5.1: Bilirkişi Görevlendirme Yazısı
// ==========================================
function renderTemplate51(data) {
    if (!data) return '';

    const formatDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
    };

    const formatLongDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    // Bilirkişi ekler listesi
    const ekler = [];
    if (data.ek1_bilirkisi) {
        ekler.push(`1- ${data.ek1_bilirkisi}'ın Görevlendirme Yazısı (${data.ek1_sayfa || '1 Sayfa'})`);
    }
    if (data.ek2_bilirkisi) {
        ekler.push(`2- ${data.ek2_bilirkisi}'ın Görevlendirme Yazısı (${data.ek2_sayfa || '1 Sayfa'})`);
    }

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 30px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> ${data.konu || 'Bilirkişi Görevlendirmesi'}</div>
            </div>
            <div style="text-align: right;">
                ${formatLongDate(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 30px 0; font-size: 11pt;">
            <strong>${(data.mudur_adi || '….. ….. …..').toUpperCase()}</strong> MÜDÜRLÜĞÜNE
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.6;">
            <div style="margin-bottom: 20px;">
                <div style="display: flex;">
                    <div style="min-width: 40px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.makam_oluru_tarihi)} tarihli ve ${data.makam_oluru_sayi || '…..'}  sayılı Oluru.</div>
                        <div style="text-indent: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.gorevlendirme_tarihi)} tarihli ve ${data.gorevlendirme_sayi || '….'} sayılı görevlendirme emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 20px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülmekte olan inceleme/soruşturmada, <strong>${data.okul_adi || '….. ….. ….. Okulu'}</strong> <strong>${data.bilirkisi1_brans || '…..'}  branşı</strong> öğretmenlerinden <strong>${data.bilirkisi1_ad_soyad || '….. …..'}</strong>${data.bilirkisi2_ad_soyad ? ` ve <strong>${data.bilirkisi2_brans || '…..'}  branşı</strong> öğretmenlerinden <strong>${data.bilirkisi2_ad_soyad}</strong>` : ''} bilirkişi olarak görevlendirilmişlerdir.
            </p>
            <p style="text-align: justify; text-indent: 0; margin-bottom: 20px;">
                Ekteki görevlendirme yazılarının adı geçenlere tebliğ edilerek tebliğ/tebellüğ evrakının Müfettişliğimize verilmesini rica ederiz.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 50px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 50px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(${data.mufettis1_kod || '…..'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 50px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || '…..'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        ${ekler.length > 0 ? `
        <div style="margin-top: 30px; font-size: 10pt; border-top: 1px solid #ccc; padding-top: 15px;">
            <strong>Ek:</strong><br>
            ${ekler.map(ek => `${ek}<br>`).join('')}
        </div>
        ` : ''}

        <div class="footer" style="margin-top: 30px; font-size: 9pt; text-align: right; color: #666;">
            5.1
        </div>
    `;
}

function createPDFContent51(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
    };

    // Bilirkişi ekler listesi
    const ekler = [];
    if (data.ek1_bilirkisi) {
        ekler.push(`1- ${data.ek1_bilirkisi}'ın Görevlendirme Yazısı (${data.ek1_sayfa || '1 Sayfa'})`);
    }
    if (data.ek2_bilirkisi) {
        ekler.push(`2- ${data.ek2_bilirkisi}'ın Görevlendirme Yazısı (${data.ek2_sayfa || '1 Sayfa'})`);
    }

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> ${data.konu || 'Bilirkişi Görevlendirmesi'}</div>
            </div>
            <div style="text-align: right;">
                ${formatDate(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0 15px 0; font-size: 11pt;">
            <strong>${(data.mudur_adi || '….. ….. …..').toUpperCase()}</strong> MÜDÜRLÜĞÜNE
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 40px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDate(data.makam_oluru_tarihi)} tarihli ve ${data.makam_oluru_sayi || '…..'}  sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatDate(data.gorevlendirme_tarihi)} tarihli ve ${data.gorevlendirme_sayi || '….'} sayılı görevlendirme emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer Alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülmekte olan inceleme/soruşturmada, <strong>${data.okul_adi || '….. ….. ….. Okulu'}</strong> <strong>${data.bilirkisi1_brans || '…..'}  branşı</strong> öğretmenlerinden <strong>${data.bilirkisi1_ad_soyad || '….. …..'}</strong>${data.bilirkisi2_ad_soyad ? ` ve <strong>${data.bilirkisi2_brans || '…..'}  branşı</strong> öğretmenlerinden <strong>${data.bilirkisi2_ad_soyad}</strong>` : ''} bilirkişi olarak görevlendirilmişlerdir.
            </p>
            <p style="text-align: justify; text-indent: 0; margin-bottom: 15px;">
                Ekteki görevlendirme yazılarının adı geçenlere tebliğ edilerek tebliğ/tebellüğ evrakının Müfettişliğimize verilmesini rica ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(${data.mufettis1_kod || '…..'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 160px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || '…..'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        ${ekler.length > 0 ? `
        <div style="margin-top: 25px; font-size: 10pt; border-top: 1px solid #999; padding-top: 12px;">
            <strong>Ek:</strong><br>
            ${ekler.map(ek => `${ek}<br>`).join('')}
        </div>
        ` : ''}

        <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            5.1
        </div>
    `;
    return container;
}

function renderTemplate52(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 30px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.konu || 'Görevlendirme'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: left; margin: 30px 0; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Sayın ${data.bilirkisi_ad_soyad || '….. …..'}</strong></div>
            <div><strong>${data.bilirkisi_gorev || '….. ….. Lisesi ….. Öğretmeni'}</strong></div>
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.6;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 20px;">
                Müfettişliğimizce yürütülmekte olan inceleme/soruşturmada, <strong>${data.ders_adi || '…..'}</strong> dersine ait sınav kâğıtlarının değerlendirilmesinde “bilirkişi” görüşünün alınması gerekli görülmektedir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 20px;">
                Bu itibarla; <strong>${data.ders_adi || '…..'}</strong> dersine ait sınav kâğıtlarının değerlendirilmesi konusunda, Ceza Muhakemesi Kanunu’nun 63-66 ncı maddeleri gereğince “bilirkişi” olarak görevlendirildiniz.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 20px;">
                Bu nedenle <strong>${formatLongDate(data.randevu_tarihi)}</strong> <strong>${data.randevu_gunu || '…..'}</strong> günü, saat <strong>${data.randevu_saati || 'ss.dd'}</strong>’de/da <strong>${data.randevu_yeri || '….. Lisesindeki ….. odasında'}</strong> hazır bulunmanızı rica ederiz.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 50px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 50px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 50px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(<strong>${data.mufettis2_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div class="footer" style="margin-top: 30px; font-size: 9pt; text-align: right; color: #666;">
            5.2
        </div>
    `;
}

function createPDFContent52(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px;">ÖZEL</div>
            <div style="font-weight: bold;">T.C.</div>
            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 30px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.konu || 'Görevlendirme'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: left; margin: 30px 0; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Sayın ${data.bilirkisi_ad_soyad || '….. …..'}</strong></div>
            <div><strong>${data.bilirkisi_gorev || '….. ….. Lisesi ….. Öğretmeni'}</strong></div>
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Müfettişliğimizce yürütülmekte olan inceleme/soruşturmada, <strong>${data.ders_adi || '…..'}</strong> dersine ait sınav kâğıtlarının değerlendirilmesinde “bilirkişi” görüşünün alınması gerekli görülmektedir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Bu itibarla; <strong>${data.ders_adi || '…..'}</strong> dersine ait sınav kâğıtlarının değerlendirilmesi konusunda, Ceza Muhakemesi Kanunu’nun 63-66 ncı maddeleri gereğince “bilirkişi” olarak görevlendirildiniz.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Bu nedenle <strong>${formatDate(data.randevu_tarihi)}</strong> <strong>${data.randevu_gunu || '…..'}</strong> günü, saat <strong>${data.randevu_saati || 'ss.dd'}</strong>’de/da <strong>${data.randevu_yeri || '….. Lisesindeki ….. odasında'}</strong> hazır bulunmanızı rica ederiz.
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

        <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            5.2
        </div>
    `;
    return container;
}


function renderTemplate53(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.konu || 'Bilirkişi Ücreti'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 30px 0; font-size: 11pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince <strong>${data.sorusturulan_kurum || '….. ….. Lisesi'}</strong>nde yürütülen soruşturmada bilirkişi olarak görevlendirilen <strong>${data.bilirkisi_kurum || '….. Lisesi'}</strong> Öğretmenleri <strong>${data.bilirkisi_ad_soyad || '….. …..'}’a</strong>, bilirkişi ücreti olarak takdir edilen miktarı gösterir “Bilirkişi Ücreti Tespit Kararı” ilişikte sunulmuştur.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Takdir olunan ücretin, Ceza Muhakemesi Kanunu’nun 72 nci maddesi uyarınca ilgililere ödenmesinin sağlanmasını tensiplerinize arz ederiz.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(<strong>${data.mufettis2_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 25px; font-size: 10pt; border-top: 1px solid #999; padding-top: 12px;">
            <strong>Ek:</strong><br>
            Bilirkişi Ücreti Tespit Kararı (${data.ek_sayfa || '1'} Sayfa)
        </div>

        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            5.3
        </div>
    `;
}

function createPDFContent53(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.konu || 'Bilirkişi Ücreti'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 30px 0; font-size: 11pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince <strong>${data.sorusturulan_kurum || '….. ….. Lisesi'}</strong>nde yürütülen soruşturmada bilirkişi olarak görevlendirilen <strong>${data.bilirkisi_kurum || '….. Lisesi'}</strong> Öğretmenleri <strong>${data.bilirkisi_ad_soyad || '….. …..'}’a</strong>, bilirkişi ücreti olarak takdir edilen miktarı gösterir “Bilirkişi Ücreti Tespit Kararı” ilişikte sunulmuştur.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                Takdir olunan ücretin, Ceza Muhakemesi Kanunu’nun 72 nci maddesi uyarınca ilgililere ödenmesinin sağlanmasını tensiplerinize arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 30px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(<strong>${data.mufettis2_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 25px; font-size: 10pt; border-top: 1px solid #999; padding-top: 12px;">
            <strong>Ek:</strong><br>
            Bilirkişi Ücreti Tespit Kararı (${data.ek_sayfa || '1'} Sayfa)
        </div>

        <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            5.3
        </div>
    `;
    return container;
}

function renderTemplate61(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…../…..'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.personel_ad_soyad || '….. …..'}’ın Görevden Uzaklaştırılması</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            BAKANLIK MAKAMINA
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        ${data.ilgi_mahkeme || '….. ….. Ağır Ceza Mahkemesinin'} ${formatLongDate(data.ilgi_tarih)} tarihli ve ${data.ilgi_sayi || '...../..... Esas'} sayılı yazısı ve ekleri.
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

        <div style="margin-top: 30px; margin-bottom: 40px; text-align: right;">
             <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px; font-size: 10pt;">İmza</div>
                <div><strong>${data.baskan_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>Teftiş Kurulu Başkanı</div>
            </div>
        </div>

        <div style="margin-top: 20px; text-align: center;">
            <div style="font-weight: bold; margin-bottom: 15px;">OLUR</div>
            <div style="margin-bottom: 20px; font-size: 10pt;">...../...../20.....</div> <!-- Date placeholder for wet signature -->
            <div style="margin-bottom: 30px;">&nbsp;</div>
            <div style="font-weight: bold;">${data.bakan_ad_soyad || 'Adı SOYADI'}</div>
            <div>Bakan</div>
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama || '….. …..'} (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.1
        </div>
    `;
}

function createPDFContent61(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        ${data.ilgi_mahkeme || '….. ….. Ağır Ceza Mahkemesinin'} ${formatDate(data.ilgi_tarih)} tarihli ve ${data.ilgi_sayi || '...../..... Esas'} sayılı yazısı ve ekleri.
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
    `;
    return container;
}

function renderTemplate62(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 5px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…../…..'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.personel_ad_soyad || '….. …..'}’ın Görevden Uzaklaştırırma</strong></div>
                <div style="margin-left: 56px;"><strong>Tedbirinin Kaldırılması</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 5px 0; font-size: 11pt;">
            BAKANLIK MAKAMINA
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.1;">
            <div style="margin-bottom: 5px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı görevden uzaklaştırma ve inceleme soruşturma Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) Bakanlık Müfettişleri ${data.ilgi_c_mufettisler || '….. ….. ile ….. ……'} tarafından düzenlenen ${formatLongDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı inceleme raporu/yazı.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 5px;">
                İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince yürütülen inceleme sonucunda Bakanlık Müfettişleri tarafından düzenlenen ilgi (c)’de kayıtlı raporda/yazıda <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}’nın</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) görevinin başında kalmasındaki sakıncanın ortadan kalktığı belirtilerek ilgi (a)’da kayıtlı Makam Oluru ile alınan görevden uzaklaştırma tedbirinin kaldırılması teklif edilmektedir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 5px;">
                Makamlarınca uygun görüldüğü takdirde <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) hakkında ilgi (a)’da kayıtlı Makam Oluru ile alınan görevden uzaklaştırma tedbirinin 657 sayılı Devlet Memurları Kanunu’nun 142 nci maddesi gereğince kaldırılmasını Olurlarına arz ederim.
            </p>
        </div>

        <div style="margin-top: 10px; margin-bottom: 10px; text-align: right;">
             <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 10px; font-size: 10pt;">İmza</div>
                <div><strong>${data.baskan_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>Teftiş Kurulu Başkanı</div>
            </div>
        </div>

        <div style="margin-top: 5px; text-align: center;">
            <div style="font-weight: bold; margin-bottom: 5px;">OLUR</div>
            <div style="margin-bottom: 10px; font-size: 10pt;">...../...../20.....</div> <!-- Date placeholder -->
            <div style="margin-bottom: 10px;">&nbsp;</div>
            <div style="font-weight: bold;">${data.bakan_ad_soyad || 'Adı SOYADI'}</div>
            <div>Bakan</div>
        </div>

        <div style="margin-top: 10px; font-size: 10pt; border-top: 1px solid #999; padding-top: 5px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama || '….. …..'} (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.2
        </div>
    `;
}

function createPDFContent62(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.1; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 5px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…../…..'}</div>
                <div><strong>Konu :</strong> ${data.personel_ad_soyad || '….. …..'}’ın Görevden Uzaklaştırırma</div>
                <div style="margin-left: 56px;">Tedbirinin Kaldırılması</div>
            </div>
            <div style="text-align: right;">
                ${formatDate(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 5px 0; font-size: 11pt;">
            BAKANLIK MAKAMINA
        </div>

        <div style="font-size: 11pt; line-height: 1.1;">
            <div style="margin-bottom: 5px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı görevden uzaklaştırma ve inceleme soruşturma Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) Bakanlık Müfettişleri ${data.ilgi_c_mufettisler || '….. ….. ile ….. ……'} tarafından düzenlenen ${formatDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı inceleme raporu/yazı.</div>
                    </div>
                </div>
            </div>

            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 5px;">
                İlgi (b)’de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)’da kayıtlı Makam Oluru gereğince yürütülen inceleme sonucunda Bakanlık Müfettişleri tarafından düzenlenen ilgi (c)’de kayıtlı raporda/yazıda <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}’nın</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) görevinin başında kalmasındaki sakıncanın ortadan kalktığı belirtilerek ilgi (a)’da kayıtlı Makam Oluru ile alınan görevden uzaklaştırma tedbirinin kaldırılması teklif edilmektedir.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 5px;">
                Makamlarınca uygun görüldüğü takdirde <strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'}</strong> <strong>${data.personel_unvan || 'Saymanı'}</strong> <strong>${data.personel_ad_soyad || '….. …..'}</strong> (T.C. Kimlik No: <strong>${data.personel_tc || '…..'}</strong>) hakkında ilgi (a)’da kayıtlı Makam Oluru ile alınan görevden uzaklaştırma tedbirinin 657 sayılı Devlet Memurları Kanunu’nun 142 nci maddesi gereğince kaldırılmasını Olurlarına arz ederim.
            </p>
        </div>

        <div style="margin-top: 10px; margin-bottom: 10px; text-align: right; page-break-inside: avoid;">
             <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 10px; font-size: 10pt;">İmza</div>
                <div style="font-weight: bold;">${data.baskan_ad_soyad || 'Adı SOYADI'}</div>
                <div>Teftiş Kurulu Başkanı</div>
            </div>
        </div>

        <div style="margin-top: 5px; text-align: left; margin-left: 100px; page-break-inside: avoid;">
            <div style="font-weight: bold; margin-bottom: 5px;">OLUR</div>
            <div style="margin-bottom: 10px;">&nbsp;</div>
            <div style="font-weight: bold;">${data.bakan_ad_soyad || 'Adı SOYADI'}</div>
            <div>Bakan</div>
        </div>

        <div style="margin-top: 10px; font-size: 10pt; border-top: 1px solid #999; padding-top: 5px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama || '….. …..'} (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
                <div><strong>Konu :</strong> <strong>${data.personel_ad_soyad || '….. …..'}’ın Görevden Uzaklaştırma</strong></div>
                <div style="margin-left: 56px;"><strong>Tedbirinin Kaldırılması</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            BAKANLIK MAKAMINA
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı görevden uzaklaştırma ve inceleme soruşturma Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) Bakanlık Müfettişleri ${data.ilgi_c_mufettisler || '….. ….. ile ….. ……'} tarafından düzenlenen ${formatLongDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı inceleme raporu/yazı.</div>
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

        <div style="margin-top: 30px; margin-bottom: 40px; text-align: right;">
             <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px; font-size: 10pt;">İmza</div>
                <div><strong>${data.baskan_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>Teftiş Kurulu Başkanı</div>
            </div>
        </div>

        <div style="margin-top: 20px; text-align: center;">
            <div style="font-weight: bold; margin-bottom: 15px;">OLUR</div>
            <div style="margin-bottom: 20px; font-size: 10pt;">...../...../20.....</div> <!-- Date placeholder -->
            <div style="margin-bottom: 30px;">&nbsp;</div>
            <div style="font-weight: bold;">${data.bakan_ad_soyad || 'Adı SOYADI'}</div>
            <div>Bakan</div>
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama || '….. …..'} (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.2
        </div>
    `;
}

function createPDFContent62(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı görevden uzaklaştırma ve inceleme soruşturma Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) Bakanlık Müfettişleri ${data.ilgi_c_mufettisler || '….. ….. ile ….. ……'} tarafından düzenlenen ${formatDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı inceleme raporu/yazı.</div>
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
    `;
    return container;
}

function renderTemplate63(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: flex-end; margin-bottom: 20px; font-size: 11pt;">
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: left; margin: 20px 0; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Sayın ${data.personel_ad_soyad || '….. …..'}</strong></div>
            <div><strong>${data.personel_kurum || '….. ….. Mesleki ve Teknik Anadolu Lisesi'} ${data.personel_unvan || 'Saymanı'}</strong></div>
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 70px; font-weight: bold;">İlgi     :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.makam_oluru_tarihi)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.gorevlendirme_tarihi)} tarihli ve ${data.gorevlendirme_sayi || '…..'} sayılı görevlendirme emri.</div>
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

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
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

        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            6.3
        </div>
    `;
}

function createPDFContent63(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px; font-size: 11pt;">
            <div style="text-align: right;">
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.makam_oluru_tarihi)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatDate(data.gorevlendirme_tarihi)} tarihli ve ${data.gorevlendirme_sayi || '…..'} sayılı görevlendirme emri.</div>
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
    `;
    return container;
}

function renderTemplate64(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı:</strong> <strong>${data.sayi || '…../….,…'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div class="letter-recipient" style="text-align: left; margin: 20px 0; font-size: 11pt;">
            <div style="margin-bottom: 5px;"><strong>Teftiş Kurulu Başkanlığına</strong></div>
            <div><strong>ANKARA</strong></div>
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 15px;">
                <div style="display: flex;">
                    <div style="min-width: 70px; font-weight: bold;">İlgi     :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div style="padding-left: 0.3cm;">c) Müfettişliğimizin ${formatLongDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı görevden uzaklaştırma yazısı.</div>
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

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || '…..'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
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

        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            6.4
        </div>
    `;
}

function createPDFContent64(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div style="padding-left: 0.3cm;">b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div style="padding-left: 0.3cm;">c) Müfettişliğimizin ${formatDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı görevden uzaklaştırma yazısı.</div>
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
    `;
    return container;
}

function renderTemplate65(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return '...';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…../…..'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın Görevden Uzaklaştırma</strong></div>
                <div style="margin-left: 56px;"><strong>Tedbirinin Kaldırılması</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            BAKANLIK MAKAMINA
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) Bakanlık Müfettişlerince düzenlenen ${formatLongDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı görevden uzaklaştırma yazısı.</div>
                        <div>d) Bakanlık Müfettişlerince düzenlenen ${formatLongDate(data.ilgi_d_tarih)} tarihli ve ${data.ilgi_d_sayi || '…..'} sayılı yazı.</div>
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

        <div style="margin-top: 30px; margin-bottom: 40px; text-align: right;">
             <div style="display: inline-block; text-align: center; min-width: 200px;">
                <div style="margin-bottom: 20px; font-size: 10pt;">İmza</div>
                <div><strong>${data.baskan_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>Teftiş Kurulu Başkanı</div>
            </div>
        </div>

        <div style="margin-top: 20px; text-align: center;">
            <div style="font-weight: bold; margin-bottom: 15px;">OLUR</div>
            <div style="margin-bottom: 20px; font-size: 10pt;">...../...../20.....</div>
            <div style="margin-bottom: 30px;">&nbsp;</div>
            <div style="font-weight: bold;">${data.bakan_ad_soyad || 'Adı SOYADI'}</div>
            <div>Bakan</div>
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong><br>
            ${data.ek_aciklama || '….. …..'} (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.5
        </div>
    `;
}

function createPDFContent65(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 15mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) Bakanlık Müfettişlerince düzenlenen ${formatDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…..'} sayılı görevden uzaklaştırma yazısı.</div>
                        <div>d) Bakanlık Müfettişlerince düzenlenen ${formatDate(data.ilgi_d_tarih)} tarihli ve ${data.ilgi_d_sayi || '…..'} sayılı yazı.</div>
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
    `;
    return container;
}

function renderTemplate66(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın Görevden Uzaklaştırılması</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            MİLLÎ EĞİTİM BAKANLIĞINA<br>
            <span style="font-size: 10pt;">(Teftiş Kurulu Başkanlığı)</span>
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) ${formatLongDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
                        <div>d) ${data.ilgi_d_valilik || '….. Valiliğine/Kaymakamlığına'} yazılan ${formatLongDate(data.ilgi_d_tarih)} tarihli ve ${data.ilgi_d_sayi || '…./…,…'} sayılı bilgilendirme yazımız.</div>
                        <div>e) ${data.ilgi_e_kurum || '….. ….. Lisesine'} yazılan ${formatLongDate(data.ilgi_e_tarih)} tarihli ve ${data.ilgi_e_sayi || '…./…,…'} sayılı bilgilendirme yazımız.</div>
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

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
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

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.6
        </div>
    `;
}

function createPDFContent66(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) ${formatDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
                        <div>d) ${data.ilgi_d_valilik || '….. Valiliğine/Kaymakamlığına'} yazılan ${formatDate(data.ilgi_d_tarih)} tarihli ve ${data.ilgi_d_sayi || '…./…,…'} sayılı bilgilendirme yazımız.</div>
                        <div>e) ${data.ilgi_e_kurum || '….. ….. Lisesine'} yazılan ${formatDate(data.ilgi_e_tarih)} tarihli ve ${data.ilgi_e_sayi || '…./…,…'} sayılı bilgilendirme yazımız.</div>
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
    `;
    return container;
}

function renderTemplate67(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın Görevden Uzaklaştırılması</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            ${data.valilik_adi || '….. VALİLİĞİNE/KAYMAKAMLIĞINA'}
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
                        <div>c) ${formatLongDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
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

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
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

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.7
        </div>
    `;
}

function createPDFContent67(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
                        <div>c) ${formatDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
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
    `;
    return container;
}

function renderTemplate68(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.personel_ad_soyad || '….. …..'}'ın Görevden Uzaklaştırılması</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            ${data.kurum_adi || '….. ….. MESLEK ve TEKNİK ANADOLU LİSESİ MÜDÜRLÜĞÜNE'}
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) ${formatLongDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
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

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            6.8
        </div>
    `;
}

function createPDFContent68(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                        <div>c) ${formatDate(data.ilgi_c_tarih)} tarihli ve ${data.ilgi_c_sayi || '…./…,…'} sayılı görevden uzaklaştırma tedbiri yazımız.</div>
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
    `;
    return container;
}

function renderTemplate69(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const formatTime = (timeStr) => {
        if (!timeStr) return 'ss.dd';
        return timeStr.replace(':', '.');
    };

    return `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 40px;">
            TEBLİĞ VE TEBELLÜĞ BELGESİ
        </div>

        <div style="font-size: 11pt; line-height: 2; text-align: justify; text-indent: 1cm; margin-bottom: 40px;">
            Bakanlık Müfettişlerince adıma gönderilen <strong>${formatLongDate(data.yazi_tarih)}</strong> tarihli ve <strong>${data.yazi_sayi || '…..'}</strong> sayılı kapalı zarf içindeki "görevden uzaklaştırma" durumuna ilişkin <strong>${formatLongDate(data.gorevden_uzaklastirma_tarih)}</strong> tarihli ve <strong>${data.gorevden_uzaklastirma_sayi || '…..'}</strong> sayılı yazıyı teslim alarak tebellüğ ettim. <strong>${formatLongDate(data.tebellug_tarih)} - Saat: ${formatTime(data.tebellug_saat)}</strong>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 60px 0;">
            <div style="text-align: center; min-width: 200px;">
                <div style="font-weight: bold; margin-bottom: 10px;">Tebliğ eden</div>
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.teblig_eden_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>${data.teblig_eden_gorev || 'Görevi/Unvanı'}</div>
            </div>
            <div style="text-align: center; min-width: 200px;">
                <div style="font-weight: bold; margin-bottom: 10px;">Tebellüğ alan</div>
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.tebellug_alan_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>${data.tebellug_alan_gorev || '….. Meslek ve Teknik Anadolu Lisesi Döner Sermaye İşletmesi Saymanı'}</div>
            </div>
        </div>

        <div class="footer" style="margin-top: 40px; font-size: 9pt; text-align: right; color: #666;">
            6.9
        </div>
    `;
}

function createPDFContent69(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const formatTime = (timeStr) => {
        if (!timeStr) return 'ss.dd';
        return timeStr.replace(':', '.');
    };

    container.innerHTML = `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 40px;">
            TEBLİĞ VE TEBELLÜĞ BELGESİ
        </div>

        <div style="font-size: 11pt; line-height: 2; text-align: justify; text-indent: 1cm; margin-bottom: 40px;">
            Bakanlık Müfettişlerince adıma gönderilen <strong>${formatDate(data.yazi_tarih)}</strong> tarihli ve <strong>${data.yazi_sayi || '…..'}</strong> sayılı kapalı zarf içindeki "görevden uzaklaştırma" durumuna ilişkin <strong>${formatDate(data.gorevden_uzaklastirma_tarih)}</strong> tarihli ve <strong>${data.gorevden_uzaklastirma_sayi || '…..'}</strong> sayılı yazıyı teslim alarak tebellüğ ettim. <strong>${formatDate(data.tebellug_tarih)} - Saat: ${formatTime(data.tebellug_saat)}</strong>
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
    `;
    return container;
}

function renderTemplate71(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

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

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>Naip Olarak Görevlendirilme</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="margin: 20px 0; font-size: 11pt;">
            <div><strong>Sayın ${data.naip_ad_soyad || '….. …..'}</strong></div>
            <div>${data.naip_unvan || '….. Müdürü/Bakanlık Müfettişi'}</div>
            <div style="margin-left: 3cm;">${data.naip_adres || '….. ….. ….. …..'}</div>
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
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

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
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

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            7.1
        </div>
    `;
}

function createPDFContent71(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

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

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
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
    `;
    return container;
}

function renderTemplate72(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

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

    return `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 20px;">
            İSTİNABE TALİMATI
        </div>

        <div style="font-size: 11pt; line-height: 1.6; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                ${tanikText} ifadelerinin alınması ile ilgili istinabe talimatı:
            </p>

            <p style="margin-bottom: 10px;">
                <strong>1.</strong> Tanıklar ifade odasına ayrı ayrı çağrılacaklardır. Tanığın kimliğinin tespit edilmesini müteakip, tanıklığa mani bir hâlinin olmadığı anlaşıldıktan ve tanıklık edeceği konu kendisine anlatıldıktan sonra, usulüne uygun yemin verdirilir ve bu hususlar ifade tutanağına aynen aktarılır. Daha sonra aşağıdaki sorular aynen sorulacaktır. Tanığın vereceği cevaplar her sorunun bittiği yerden başlanmak üzere aynen yazılacaktır. İfade tutanaklarının usulüne uygun şekilde düzenlenmesine özen gösterilecektir.
            </p>

            <p style="margin-bottom: 10px;">
                <strong>2.</strong> Tanıklara aşağıdaki (${data.soru3 ? '3' : data.soru2 ? '2' : '1'}) soru sorulacaktır.<br>
                ${sorularHtml}
            </p>

            <p style="margin-bottom: 10px;">
                <strong>3.</strong> Yukarıdaki sorular aynı sıra dâhilinde her iki tanığa da ayrı ayrı olmak üzere aynen yöneltilecek ve tanığın konularla ilgili olarak söyleyecekleri aynı sıra dâhilinde "cevap" olarak yazıldıktan sonra 'dedi.' diye yazılarak, ifadesi kendisine okunacak ve okumasına fırsat verilecek.
            </p>

            <p style="margin-bottom: 10px;">
                <strong>4.</strong> İfade Tutanağının altına ise;<br>
                "İfadesi kendisine okundu, okumasına fırsat verildi. Yazılanların söylediklerinin aynı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı." şeklinde bağlanarak, tarih atılacak ve tutanağın alt kısmı tanıkla birlikte imzalanacaktır.
            </p>

            <p style="margin-bottom: 10px;">
                <strong>5.</strong> Ayrıca, ifade tutanağının en alt kısmına "naip" olarak; "<strong>${data.tanik1_ad_soyad || '….. …..'}</strong>'ın ifadesi, Bakanlık Müfettişleri <strong>${data.mufettis1_ad_soyad || '….. …..'}</strong>${data.mufettis2_ad_soyad ? ` ve <strong>${data.mufettis2_ad_soyad}</strong>` : ''}'ın istinabe talimatına uygun olarak ${formatLongDate(data.ifade_tarih)} tarihinde tarafımdan alınmıştır" yazılarak, ad, soyad ve unvan belirtilerek imza atılacaktır.
            </p>

            <p style="margin-bottom: 10px;">
                <strong>6.</strong> İfade tutanakları, ikişer nüsha olarak hazırlanarak, Müfettişliğimiz adresine usulünce gönderilecektir.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            7.2
        </div>
    `;
}

function createPDFContent72(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

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

    container.innerHTML = `
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
                <strong>5.</strong> Ayrıca, ifade tutanağının en alt kısmına "naip" olarak; "<strong>${data.tanik1_ad_soyad || '….. …..'}</strong>'ın ifadesi, Bakanlık Müfettişleri <strong>${data.mufettis1_ad_soyad || '….. …..'}</strong>${data.mufettis2_ad_soyad ? ` ve <strong>${data.mufettis2_ad_soyad}</strong>` : ''}'ın istinabe talimatına uygun olarak ${formatDate(data.ifade_tarih)} tarihinde tarafımdan alınmıştır" yazılarak, ad, soyad ve unvan belirtilerek imza atılacaktır.
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
    `;
    return container;
}

function renderTemplate73(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="text-align: right; font-weight: bold; color: #c00; font-size: 11pt; margin-bottom: 5px;">İVEDİ</div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>Naip Olarak Görevlendirilme</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="margin: 20px 0; font-size: 11pt;">
            <div><strong>Sayın ${data.naip_ad_soyad || '….. …..'}</strong></div>
            <div>${data.naip_unvan || '….. Müdürü/Bakanlık Maarif Müfettişi'}</div>
            <div style="margin-left: 3cm;">${data.naip_adres || '….. …..'}</div>
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <div style="margin-bottom: 10px;">
                <div style="display: flex;">
                    <div style="min-width: 50px; font-weight: bold;">İlgi    :</div>
                    <div>
                        <div>a) Bakanlık Makamının ${formatLongDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
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

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
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

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            7.3
        </div>
    `;
}

function createPDFContent73(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
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
                ${formatDate(data.tarih)}
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
                        <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                        <div>b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görev emri.</div>
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
    `;
    return container;
}

function renderTemplate74(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

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

    return `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 20px;">
            İSTİNABE TALİMATI
        </div>

        <div style="font-size: 11pt; line-height: 1.6; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                ${data.kurum_adi || '….. Lisesi'} ${data.itham_unvan || 'Öğretmeni'} <strong>${data.itham_ad_soyad || '….. …..'}</strong>'nin ifadesinin alınması ile ilgili istinabe talimatı:
            </p>

            <p style="margin-bottom: 10px;">
                <strong>1.</strong> Adı geçenin kimliğinin tespit edilmesini müteakip, hakkındaki iddialar kendisine anlatılıp, aşağıdaki sorular aynen sorulacak, vereceği cevaplar her sorunun bittiği yerden başlanmak üzere aynen yazılarak, ifade tutanağı usulüne uygun şekilde düzenlenecektir.
            </p>

            <p style="margin-bottom: 10px;">
                <strong>2.</strong> Adı geçene sorulacak sorular;<br>
                ${sorularHtml}
            </p>

            <p style="margin-bottom: 10px;">
                <strong>3.</strong> Yukarıdaki sorular aynı sıra dâhilinde adı geçene aynen yöneltilecek ve konularla ilgili olarak söyleyecekleri bittikten sonra "dedi" diye yazılarak, ifadesi kendisine okunacak, okumasına fırsat verilecektir.
            </p>

            <p style="margin-bottom: 10px;">
                <strong>4.</strong> İfade Tutanağının altına ise;<br>
                "İfadesi kendisine okundu, okumasına fırsat verildi. Yazılanların söylediklerinin aynı olduğunu, ifadesinde düzelteceği bir husus bulunmadığını, başka diyeceğinin de olmadığını, ifadesinin özgür iradesine dayalı olduğunu beyan etmesi üzerine, bu ifade tutanağı birlikte imzalandı." şeklinde bağlanarak, tarih atılacak ve tutanağın alt kısmı ifadesi alınanla birlikte imzalanacaktır.
            </p>

            <p style="margin-bottom: 10px;">
                <strong>5.</strong> Ayrıca, ifade tutanağının en alt kısmına "naip" olarak; "<strong>${data.itham_ad_soyad || '….. …..'}</strong>'ın ifadesi, Bakanlık Müfettişleri <strong>${data.mufettis1_ad_soyad || '….. …..'}</strong>${data.mufettis2_ad_soyad ? ` ile <strong>${data.mufettis2_ad_soyad}</strong>` : ''}'ın istinabe talimatına uygun olarak ${formatLongDate(data.ifade_tarih)} tarihinde tarafımdan alınmıştır" yazılarak ad, soyad ve unvan belirtilerek imza atılacaktır.
            </p>

            <p style="margin-bottom: 10px;">
                <strong>6.</strong> İfade tutanağı, iki nüsha olarak hazırlanarak Müfettişliğimiz adresine usulünce gönderilecektir.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            7.4
        </div>
    `;
}

function createPDFContent74(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

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

    container.innerHTML = `
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
                <strong>5.</strong> Ayrıca, ifade tutanağının en alt kısmına "naip" olarak; "<strong>${data.itham_ad_soyad || '….. …..'}</strong>'ın ifadesi, Bakanlık Müfettişleri <strong>${data.mufettis1_ad_soyad || '….. …..'}</strong>${data.mufettis2_ad_soyad ? ` ile <strong>${data.mufettis2_ad_soyad}</strong>` : ''}'ın istinabe talimatına uygun olarak ${formatDate(data.ifade_tarih)} tarihinde tarafımdan alınmıştır" yazılarak ad, soyad ve unvan belirtilerek imza atılacaktır.
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
    `;
    return container;
}

function renderTemplate81(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    // Build ifade alınacak kişiler listesi
    let kisilerText = `${data.kurum_adi || '….. Lisesi'} (önceki/eski) ${data.ifade1_unvan || 'öğretmeni'} <strong>${data.ifade1_ad_soyad || '….. …..'}</strong>`;
    if (data.ifade2_ad_soyad) {
        kisilerText += ` ve <strong>${data.ifade2_ad_soyad}</strong>`;
    }

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>İfade alma</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; font-size: 12pt; margin: 20px 0 15px 0;">
            YETKİLENDİRME KARARI
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.5;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                Teftiş Kurulu Başkanlığının ${formatLongDate(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı görevlendirme emirleri ekinde yer alan Bakanlık Makamının ${formatLongDate(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru gereğince ${data.kurum_adi || '….. Lisesi'} ${data.sorusturulan_unvan || 'Müdürü'} <strong>${data.sorusturulan_ad_soyad || '….. …..'}</strong> ve diğer görevliler hakkında Müfettişliğimizce yürütülen ${calismaTuru} çalışmasında, çalışma kapsamındaki konularda/iddialarda bilgisi ve/veya ilgisi bulunan bazı görevlilerin yeni görev yerlerine atanmaları dolayısıyla konu/olay mahalli dışında bulundukları anlaşılmıştır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                ${calismaTuru.charAt(0).toUpperCase() + calismaTuru.slice(1)} çalışmalarının kısa sürede tamamlanabilmesi için; ${calismaTuru} kapsamındaki konular/iddialar bağlamında, ekli esaslarda belirtilen konumları dolayısıyla ifadelerinin alınması gerekli görülen ${kisilerText}'nın ifadelerinin yeni görev yerlerinde, ${calismaTuru} grubumuzca tespit edilen ve bu karar ekinde yer alan esaslar dâhilinde, belirlenen grup üyesi tarafından alınması kararlaştırılmıştır.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0; flex-wrap: wrap;">
            <div style="text-align: center; min-width: 150px; margin: 10px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 150px; margin: 10px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            ${data.mufettis3_ad_soyad ? `
            <div style="text-align: center; min-width: 150px; margin: 10px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis3_ad_soyad}</strong></div>
                <div>(${data.mufettis3_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong> İfade Alma Esasları (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            8.1
        </div>
    `;
}

function createPDFContent81(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    // Build ifade alınacak kişiler listesi
    let kisilerText = `${data.kurum_adi || '….. Lisesi'} (önceki/eski) ${data.ifade1_unvan || 'öğretmeni'} <strong>${data.ifade1_ad_soyad || '….. …..'}</strong>`;
    if (data.ifade2_ad_soyad) {
        kisilerText += ` ve <strong>${data.ifade2_ad_soyad}</strong>`;
    }

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> İfade alma</div>
            </div>
            <div style="text-align: right;">
                ${formatDate(data.tarih)}
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; font-size: 12pt; margin: 15px 0 12px 0;">
            YETKİLENDİRME KARARI
        </div>

        <div style="font-size: 10pt; line-height: 1.4;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 8px;">
                Teftiş Kurulu Başkanlığının ${formatDate(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı görevlendirme emirleri ekinde yer alan Bakanlık Makamının ${formatDate(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru gereğince ${data.kurum_adi || '….. Lisesi'} ${data.sorusturulan_unvan || 'Müdürü'} <strong>${data.sorusturulan_ad_soyad || '….. …..'}</strong> ve diğer görevliler hakkında Müfettişliğimizce yürütülen ${calismaTuru} çalışmasında, çalışma kapsamındaki konularda/iddialarda bilgisi ve/veya ilgisi bulunan bazı görevlilerin yeni görev yerlerine atanmaları dolayısıyla konu/olay mahalli dışında bulundukları anlaşılmıştır.
            </p>
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 8px;">
                ${calismaTuru.charAt(0).toUpperCase() + calismaTuru.slice(1)} çalışmalarının kısa sürede tamamlanabilmesi için; ${calismaTuru} kapsamındaki konular/iddialar bağlamında, ekli esaslarda belirtilen konumları dolayısıyla ifadelerinin alınması gerekli görülen ${kisilerText}'nın ifadelerinin yeni görev yerlerinde, ${calismaTuru} grubumuzca tespit edilen ve bu karar ekinde yer alan esaslar dâhilinde, belirlenen grup üyesi tarafından alınması kararlaştırılmıştır.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 30px 0 15px 0; flex-wrap: wrap; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            ${data.mufettis3_ad_soyad ? `
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis3_ad_soyad}</strong></div>
                <div>(${data.mufettis3_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 15px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong> İfade Alma Esasları (${data.ek_sayfa || '…'} Sayfa)
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            8.1
        </div>
    `;
    return container;
}

function renderTemplate82(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    // Build table rows
    let tableRows = '';
    for (let i = 1; i <= 3; i++) {
        const adSoyad = data[`kisi${i}_ad_soyad`];
        if (adSoyad) {
            tableRows += `
                <tr>
                    <td style="border: 1px solid #000; padding: 5px; text-align: center;">${i}</td>
                    <td style="border: 1px solid #000; padding: 5px;">${adSoyad}</td>
                    <td style="border: 1px solid #000; padding: 5px;">${data[`kisi${i}_unvan`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 5px;">${data[`kisi${i}_gorev_yeri`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 5px;">${data[`kisi${i}_konum`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 5px;">${data[`kisi${i}_konu_no`] || ''}</td>
                </tr>
            `;
        }
    }
    if (!tableRows) {
        tableRows = `
            <tr><td style="border: 1px solid #000; padding: 5px; text-align: center;">1</td><td style="border: 1px solid #000; padding: 5px;" colspan="5"></td></tr>
            <tr><td style="border: 1px solid #000; padding: 5px; text-align: center;">2</td><td style="border: 1px solid #000; padding: 5px;" colspan="5"></td></tr>
            <tr><td style="border: 1px solid #000; padding: 5px; text-align: center;">3</td><td style="border: 1px solid #000; padding: 5px;" colspan="5"></td></tr>
        `;
    }

    return `
        <div style="font-weight: bold; color: #c00; text-align: center; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
        <div style="text-align: center; font-weight: bold; font-size: 12pt; margin-bottom: 15px;">
            İFADE ALMA ESASLARI
        </div>

        <div style="font-size: 10pt; line-height: 1.5; text-align: justify;">
            <p style="margin-bottom: 8px;">
                <strong>1.</strong> Bu Esaslar, ${formatLongDate(data.karar_tarih)} tarihli ve ${data.karar_sayi || '…..'} sayılı Yetkilendirme Kararı ekidir.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>2.</strong> İfadesi alınacak görevlilerin adı ve soyadı, görevi/unvanı, görev yeri ve ifade konumu (muhbir, müşteki, tanık, …) ile hangi konularda/iddialarda ifadesinin alınacağı aşağıdaki tabloda belirtilmektedir.
            </p>

            <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin: 10px 0;">
                <thead>
                    <tr style="background-color: #f0f0f0;">
                        <th style="border: 1px solid #000; padding: 5px; text-align: center;">Sıra No</th>
                        <th style="border: 1px solid #000; padding: 5px;">Adı ve Soyadı</th>
                        <th style="border: 1px solid #000; padding: 5px;">Görevi/Unvanı</th>
                        <th style="border: 1px solid #000; padding: 5px;">Görev Yeri</th>
                        <th style="border: 1px solid #000; padding: 5px;">İfade Konumu</th>
                        <th style="border: 1px solid #000; padding: 5px;">Konu/İddia No</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>

            <p style="margin-bottom: 8px;">
                <strong>3.</strong> İfadesi alınacak görevlilere/kişilere; inceleme/soruşturma çalışmaları sırasında grubumuzca elde edilen veriler göz önünde bulundurularak, konular/iddialar bağlamında, konumlarının gerektirdiği sorular usulünce sorulacak, verdiği cevaplar ilgili ifade tutanağına aynen yazılacaktır.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>4.</strong> İfadesi alınacakların yaptığı açıklamalar sonrasında ortaya çıkabilecek yeni durumlar ile ilgili olarak gerektiğinde ilgililere grubumuz adına ek sorular sorularak cevapları alınacaktır.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>5.</strong> Yukarıdaki tabloda belirtilen (${data.grup1_siralar || '..., …, …'}) sıra no.lu kişilerin/görevlilerin ifadeleri, gurup üyesi <strong>${data.grup1_uye || '….. …..'}</strong> tarafından; (${data.grup2_siralar || '..., …, …'}) sıra no.lu kişilerin/görevlilerin ifadeleri ise gurup üyesi <strong>${data.grup2_uye || '….. …..'}</strong> tarafından alınacaktır.
            </p>

            <p style="margin-bottom: 8px;">
                <strong>6.</strong> İfadelerin alınması sırasında, gerektiren bir durum oluştuğunda, heyetimiz başkanı ve üyeleri arasında telefonla görüşme yapılabilecektir.
            </p>

            <p style="margin-bottom: 10px;">
                ${formatLongDate(data.karar_tarih)} tarihli ve ${data.karar_sayi || '…..'} sayılı Yetkilendirme Kararı eki, (6) maddeden oluşan bu Esaslar grubumuzca tespit edilerek karar altına alınmıştır.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 30px 0 20px 0; flex-wrap: wrap;">
            <div style="text-align: center; min-width: 140px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div style="font-size: 10pt;"><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 140px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div style="font-size: 10pt;"><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            ${data.mufettis3_ad_soyad ? `
            <div style="text-align: center; min-width: 140px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div style="font-size: 10pt;"><strong>${data.mufettis3_ad_soyad}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis3_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            8.2
        </div>
    `;
}

function createPDFContent82(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    // Build table rows
    let tableRows = '';
    for (let i = 1; i <= 3; i++) {
        const adSoyad = data[`kisi${i}_ad_soyad`];
        if (adSoyad) {
            tableRows += `
                <tr>
                    <td style="border: 1px solid #000; padding: 3px; text-align: center;">${i}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${adSoyad}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${data[`kisi${i}_unvan`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${data[`kisi${i}_gorev_yeri`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${data[`kisi${i}_konum`] || ''}</td>
                    <td style="border: 1px solid #000; padding: 3px;">${data[`kisi${i}_konu_no`] || ''}</td>
                </tr>
            `;
        }
    }
    if (!tableRows) {
        tableRows = `
            <tr><td style="border: 1px solid #000; padding: 3px; text-align: center;">1</td><td style="border: 1px solid #000; padding: 3px;" colspan="5"></td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px; text-align: center;">2</td><td style="border: 1px solid #000; padding: 3px;" colspan="5"></td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px; text-align: center;">3</td><td style="border: 1px solid #000; padding: 3px;" colspan="5"></td></tr>
        `;
    }

    container.innerHTML = `
        <div style="font-weight: bold; color: #c00; text-align: center; margin-bottom: 5px; font-size: 9pt;">ÖZEL</div>
        <div style="text-align: center; font-weight: bold; font-size: 11pt; margin-bottom: 12px;">
            İFADE ALMA ESASLARI
        </div>

        <div style="font-size: 9pt; line-height: 1.3; text-align: justify;">
            <p style="margin-bottom: 6px;">
                <strong>1.</strong> Bu Esaslar, ${formatDate(data.karar_tarih)} tarihli ve ${data.karar_sayi || '…..'} sayılı Yetkilendirme Kararı ekidir.
            </p>

            <p style="margin-bottom: 6px;">
                <strong>2.</strong> İfadesi alınacak görevlilerin adı ve soyadı, görevi/unvanı, görev yeri ve ifade konumu (muhbir, müşteki, tanık, …) ile hangi konularda/iddialarda ifadesinin alınacağı aşağıdaki tabloda belirtilmektedir.
            </p>

            <table style="width: 100%; border-collapse: collapse; font-size: 8pt; margin: 8px 0;">
                <thead>
                    <tr style="background-color: #f0f0f0;">
                        <th style="border: 1px solid #000; padding: 3px; text-align: center;">Sıra No</th>
                        <th style="border: 1px solid #000; padding: 3px;">Adı ve Soyadı</th>
                        <th style="border: 1px solid #000; padding: 3px;">Görevi/Unvanı</th>
                        <th style="border: 1px solid #000; padding: 3px;">Görev Yeri</th>
                        <th style="border: 1px solid #000; padding: 3px;">İfade Konumu</th>
                        <th style="border: 1px solid #000; padding: 3px;">Konu/İddia No</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>

            <p style="margin-bottom: 6px;">
                <strong>3.</strong> İfadesi alınacak görevlilere/kişilere; inceleme/soruşturma çalışmaları sırasında grubumuzca elde edilen veriler göz önünde bulundurularak, konular/iddialar bağlamında, konumlarının gerektirdiği sorular usulünce sorulacak, verdiği cevaplar ilgili ifade tutanağına aynen yazılacaktır.
            </p>

            <p style="margin-bottom: 6px;">
                <strong>4.</strong> İfadesi alınacakların yaptığı açıklamalar sonrasında ortaya çıkabilecek yeni durumlar ile ilgili olarak gerektiğinde ilgililere grubumuz adına ek sorular sorularak cevapları alınacaktır.
            </p>

            <p style="margin-bottom: 6px;">
                <strong>5.</strong> Yukarıdaki tabloda belirtilen (${data.grup1_siralar || '..., …, …'}) sıra no.lu kişilerin/görevlilerin ifadeleri, gurup üyesi <strong>${data.grup1_uye || '….. …..'}</strong> tarafından; (${data.grup2_siralar || '..., …, …'}) sıra no.lu kişilerin/görevlilerin ifadeleri ise gurup üyesi <strong>${data.grup2_uye || '….. …..'}</strong> tarafından alınacaktır.
            </p>

            <p style="margin-bottom: 6px;">
                <strong>6.</strong> İfadelerin alınması sırasında, gerektiren bir durum oluştuğunda, heyetimiz başkanı ve üyeleri arasında telefonla görüşme yapılabilecektir.
            </p>

            <p style="margin-bottom: 8px;">
                ${formatDate(data.karar_tarih)} tarihli ve ${data.karar_sayi || '…..'} sayılı Yetkilendirme Kararı eki, (6) maddeden oluşan bu Esaslar grubumuzca tespit edilerek karar altına alınmıştır.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 20px 0 10px 0; flex-wrap: wrap; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 120px; margin: 3px;">
                <div style="margin-bottom: 30px; font-size: 8pt;">İmza</div>
                <div style="font-size: 9pt;"><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 8pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 8pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 120px; margin: 3px;">
                <div style="margin-bottom: 30px; font-size: 8pt;">İmza</div>
                <div style="font-size: 9pt;"><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 8pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 8pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            ${data.mufettis3_ad_soyad ? `
            <div style="text-align: center; min-width: 120px; margin: 3px;">
                <div style="margin-bottom: 30px; font-size: 8pt;">İmza</div>
                <div style="font-size: 9pt;"><strong>${data.mufettis3_ad_soyad}</strong></div>
                <div style="font-size: 8pt;">(${data.mufettis3_kod || 'KOD'})</div>
                <div style="font-size: 8pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 10px; font-size: 7pt; text-align: right; color: #666;">
            8.2
        </div>
    `;
    return container;
}

function renderTemplate91(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const formatTime = (timeStr) => {
        if (!timeStr) return 'ss.dd';
        return timeStr.replace(':', '.');
    };

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma';

    return `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 20px;">
            ELKOYMA TUTANAĞI
        </div>

        <div style="font-size: 11pt; line-height: 1.6; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 15px;">
                Teftiş Kurulu Başkanlığının ${formatLongDate(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı emirleri ekinde yer alan Bakanlık Makamının ${formatLongDate(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru gereği Müfettişliğimizce yürütülmekte olan ${calismaTuru} nedeniyle, hakkında soruşturma yapılan <strong>${data.sorusturulan_ad_soyad || '….. …..'}</strong>'ın (T.C. Kimlik No: ${data.sorusturulan_tc || '…..'}) olayda kullandığı iddia edilen <strong>${data.esya_marka || '…..'}</strong> (marka) <strong>${data.esya_model || '…..'}</strong> (model) <strong>${data.esya_seri_no || '…..'}</strong>'lu (seri no, no vb.) <strong>${data.esya_tanim || '…..'}</strong>'a (olayda kullanılan mal, eşya vb.) araştırma sonucu geri verilmek üzere geçici olarak el konularak zapt edilmiş olup, işbu El Koyma Tutanağı tarafımızca tanzim edilerek imza altına alınmıştır. ${formatLongDate(data.tarih)} - Saat: ${formatTime(data.saat)}
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 50px 0 30px 0; flex-wrap: wrap;">
            <div style="text-align: center; min-width: 150px; margin: 10px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 150px; margin: 10px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            <div style="text-align: center; min-width: 150px; margin: 10px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mal_sahibi_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 10pt;">(El Konulan Malın/Eşyanın Sahibi)</div>
            </div>
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            9.1
        </div>
    `;
}

function createPDFContent91(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const formatTime = (timeStr) => {
        if (!timeStr) return 'ss.dd';
        return timeStr.replace(':', '.');
    };

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma';

    container.innerHTML = `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px;">
            ELKOYMA TUTANAĞI
        </div>

        <div style="font-size: 10pt; line-height: 1.4; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                Teftiş Kurulu Başkanlığının ${formatDate(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı emirleri ekinde yer alan Bakanlık Makamının ${formatDate(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru gereği Müfettişliğimizce yürütülmekte olan ${calismaTuru} nedeniyle, hakkında soruşturma yapılan <strong>${data.sorusturulan_ad_soyad || '….. …..'}</strong>'ın (T.C. Kimlik No: ${data.sorusturulan_tc || '…..'}) olayda kullandığı iddia edilen <strong>${data.esya_marka || '…..'}</strong> (marka) <strong>${data.esya_model || '…..'}</strong> (model) <strong>${data.esya_seri_no || '…..'}</strong>'lu (seri no, no vb.) <strong>${data.esya_tanim || '…..'}</strong>'a (olayda kullanılan mal, eşya vb.) araştırma sonucu geri verilmek üzere geçici olarak el konularak zapt edilmiş olup, işbu El Koyma Tutanağı tarafımızca tanzim edilerek imza altına alınmıştır. ${formatDate(data.tarih)} - Saat: ${formatTime(data.saat)}
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0; flex-wrap: wrap; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            <div style="text-align: center; min-width: 130px; margin: 5px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mal_sahibi_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(El Konulan Malın/Eşyanın Sahibi)</div>
            </div>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            9.1
        </div>
    `;
    return container;
}

function renderTemplate101(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma';

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> İmza/Yazı Tespiti</div>
            </div>
            <div style="text-align: right;">
                ${formatLongDate(data.tarih)}
            </div>
        </div>

        <div style="font-weight: bold; font-size: 11pt; margin-bottom: 15px;">
            EMNİYET GENEL MÜDÜRLÜĞÜNE<br>
            <span style="font-weight: normal;">(Kriminal Daire Başkanlığı)</span>
        </div>

        <div style="font-size: 11pt; margin-bottom: 15px;">
            <strong>İlgi    :</strong> a) Bakanlık Makamının ${formatLongDate(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru.<br>
            <span style="margin-left: 45px;">b) Teftiş Kurulu Başkanlığının ${formatLongDate(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı görevlendirme emri.</span>
        </div>

        <div class="letter-body" style="font-size: 11pt; line-height: 1.6;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 15px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülmekte olan ${calismaTuru}de; <strong>${data.kisi_ad_soyad || '….. …..'}</strong>'ın (T.C. Kimlik No: ${data.kisi_tc || '…..'}) ${calismaTuru} konusu belge üzerinde yer alan imzanın kendisine ait olmadığını beyan etmesi üzerine adı geçen kişiden imza ve yazı örnekleri alınmış olup söz konusu imzanın Başkanlığınızca incelenerek sonucun Teftiş Kurulu Başkanlığına gönderilmesi hususunda gereğini arz ederiz.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: center; margin: 40px 0 30px 0; gap: 60px;">
            <div style="text-align: center;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 20px; font-size: 10pt; border-top: 1px solid #999; padding-top: 10px;">
            <strong>Ek:</strong> İmza ve/veya Yazı Örneği (${data.ek_sayfa || '…'} Sayfa)<br>
            <span style="margin-left: 25px;">Tespit Tutanağı</span>
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            10.1
        </div>
    `;
}

function createPDFContent101(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma';

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 10px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 9pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 10pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 10pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 10pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 10pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> İmza/Yazı Tespiti</div>
            </div>
            <div style="text-align: right;">
                ${formatDate(data.tarih)}
            </div>
        </div>

        <div style="font-weight: bold; font-size: 10pt; margin-bottom: 12px;">
            EMNİYET GENEL MÜDÜRLÜĞÜNE<br>
            <span style="font-weight: normal;">(Kriminal Daire Başkanlığı)</span>
        </div>

        <div style="font-size: 10pt; margin-bottom: 12px;">
            <strong>İlgi    :</strong> a) Bakanlık Makamının ${formatDate(data.makam_oluru_tarih)} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı Oluru.<br>
            <span style="margin-left: 40px;">b) Teftiş Kurulu Başkanlığının ${formatDate(data.gorev_emri_tarih)} tarihli ve ${data.gorev_emri_sayi || '…..'} sayılı görevlendirme emri.</span>
        </div>

        <div style="font-size: 10pt; line-height: 1.4;">
            <p style="text-align: justify; text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce yürütülmekte olan ${calismaTuru}de; <strong>${data.kisi_ad_soyad || '….. …..'}</strong>'ın (T.C. Kimlik No: ${data.kisi_tc || '…..'}) ${calismaTuru} konusu belge üzerinde yer alan imzanın kendisine ait olmadığını beyan etmesi üzerine adı geçen kişiden imza ve yazı örnekleri alınmış olup söz konusu imzanın Başkanlığınızca incelenerek sonucun Teftiş Kurulu Başkanlığına gönderilmesi hususunda gereğini arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: center; margin: 30px 0 15px 0; gap: 50px; page-break-inside: avoid;">
            <div style="text-align: center;">
                <div style="margin-bottom: 30px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center;">
                <div style="margin-bottom: 30px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
        </div>

        <div style="margin-top: 15px; font-size: 9pt; border-top: 1px solid #999; padding-top: 8px;">
            <strong>Ek:</strong> İmza ve/veya Yazı Örneği (${data.ek_sayfa || '…'} Sayfa)<br>
            <span style="margin-left: 20px;">Tespit Tutanağı</span>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            10.1
        </div>
    `;
    return container;
}

function renderTemplate102(data) {
    if (!data) return '';

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const formatTime = (timeStr) => {
        if (!timeStr) return 'ss.dd';
        return timeStr.replace(':', '.');
    };

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    return `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 20px;">
            İMZA/YAZI TESPİT TUTANAĞI
        </div>

        <div style="font-size: 11pt; line-height: 1.6; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 15px;">
                Müfettişliğimizce yürütülmekte olan ${calismaTuru}de suç unsuru olarak belirtilen belgelerin, <strong>${data.kisi_ad_soyad || '….. …..'}</strong> tarafından yazıldığı/imzalandığı öne sürüldüğünden yazı/imza incelemesinde değerlendirilmek üzere iddianın muhatabı <strong>${data.muhatap_ad_soyad || '….. …..'}</strong>'ya, aşağıdaki metin kendi el yazısıyla yazdırıldı/imzalatıldı. (Buraya, belirli bir metin okumak suretiyle; oturarak ve ayakta olmak üzere sağ veya sol el yazısıyla okunan metin kişiye yazdırılır. Şayet imza tetkiki yapılacaksa muhatabın imza örnekleri oturarak ve ayakta en az 3'er defa alınır. İmza tetkikinde, suç unsuru olarak belirtilen belgelerin tarihlerine yakın tarihlerde kişinin ıslak imza attığı suç unsuru bulunmayan diğer belgelerden de istifade edilebilir.)
            </p>
            <p style="text-indent: 1cm; margin-bottom: 15px;">
                İşbu yazı yazdırılması/imza tetkiki, huzurumuzda icra edilmiş olup tutanağın doğruluğu tarafımızdan müştereken tasdik edildi. Bu tutanak <strong>${data.kurum_adi || '….. İlkokulu/Ortaokulu/Lisesi/Müdürlüğü'}</strong>nde ${formatLongDate(data.tarih)} tarihinde ve saat ${formatTime(data.saat)}'de/da Müfettişliğimize tahsis edilen odada düzenlenmiştir.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: center; margin: 50px 0 30px 0; gap: 40px; flex-wrap: wrap;">
            <div style="text-align: center; min-width: 140px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 140px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div>(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            <div style="text-align: center; min-width: 140px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.tanik_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 10pt;">Yer Tanığı/Okul Müdürü</div>
            </div>
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            10.2
        </div>
    `;
}

function createPDFContent102(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const formatTime = (timeStr) => {
        if (!timeStr) return 'ss.dd';
        return timeStr.replace(':', '.');
    };

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    container.innerHTML = `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px;">
            İMZA/YAZI TESPİT TUTANAĞI
        </div>

        <div style="font-size: 10pt; line-height: 1.4; text-align: justify;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                Müfettişliğimizce yürütülmekte olan ${calismaTuru}de suç unsuru olarak belirtilen belgelerin, <strong>${data.kisi_ad_soyad || '….. …..'}</strong> tarafından yazıldığı/imzalandığı öne sürüldüğünden yazı/imza incelemesinde değerlendirilmek üzere iddianın muhatabı <strong>${data.muhatap_ad_soyad || '….. …..'}</strong>'ya, aşağıdaki metin kendi el yazısıyla yazdırıldı/imzalatıldı. (Buraya, belirli bir metin okumak suretiyle; oturarak ve ayakta olmak üzere sağ veya sol el yazısıyla okunan metin kişiye yazdırılır. Şayet imza tetkiki yapılacaksa muhatabın imza örnekleri oturarak ve ayakta en az 3'er defa alınır. İmza tetkikinde, suç unsuru olarak belirtilen belgelerin tarihlerine yakın tarihlerde kişinin ıslak imza attığı suç unsuru bulunmayan diğer belgelerden de istifade edilebilir.)
            </p>
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                İşbu yazı yazdırılması/imza tetkiki, huzurumuzda icra edilmiş olup tutanağın doğruluğu tarafımızdan müştereken tasdik edildi. Bu tutanak <strong>${data.kurum_adi || '….. İlkokulu/Ortaokulu/Lisesi/Müdürlüğü'}</strong>nde ${formatDate(data.tarih)} tarihinde ve saat ${formatTime(data.saat)}'de/da Müfettişliğimize tahsis edilen odada düzenlenmiştir.
            </p>
        </div>

        <div style="display: flex; justify-content: center; margin: 40px 0 20px 0; gap: 30px; flex-wrap: wrap; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 120px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis1_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center; min-width: 120px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad}</strong></div>
                <div style="font-size: 9pt;">(${data.mufettis2_kod || 'KOD'})</div>
                <div style="font-size: 9pt;">Bakanlık Müfettişi</div>
            </div>
            ` : ''}
            <div style="text-align: center; min-width: 120px;">
                <div style="margin-bottom: 35px; font-size: 9pt;">İmza</div>
                <div><strong>${data.tanik_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div style="font-size: 9pt;">Yer Tanığı/Okul Müdürü</div>
            </div>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            10.2
        </div>
    `;
    return container;
}

function renderTemplate1021(data) {
    if (!data) data = {};

    return `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 20px;">
            İMZA ÖRNEKLERİ
        </div>

        <div style="display: flex; justify-content: space-between; gap: 20px;">
            <!-- Sol Taraf -->
            <div style="width: 48%;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 10px;">AYAKTA SOL ELLE</td></tr>
                    <tr>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                    </tr>
                    <tr><td colspan="3" style="height: 40px; border: none;"></td></tr>
                    <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 10px;">OTURARAK SOL ELLE</td></tr>
                    <tr>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                    </tr>
                </table>
            </div>

            <!-- Sağ Taraf -->
            <div style="width: 48%;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 10px;">AYAKTA SAĞ ELLE</td></tr>
                    <tr>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                    </tr>
                    <tr><td colspan="3" style="height: 40px; border: none;"></td></tr>
                    <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 10px;">OTURARAK SAĞ ELLE</td></tr>
                    <tr>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                        <td style="border: 1px solid #000; width: 33.33%; height: 80px;"></td>
                    </tr>
                </table>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin: 40px 0 15px 0; text-decoration: underline;">
            YAZI ÖRNEĞİ
        </div>

        <div style="border: 1px solid #000; padding: 15px; min-height: 320px;">
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="height: 22px;"></div>
        </div>

        <div class="footer" style="margin-top: 10px; font-size: 9pt; text-align: right; color: #666;">
            10.2.1
        </div>
    `;
}

function createPDFContent1021(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.2; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    if (!data) data = {};

    container.innerHTML = `
        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 15px;">
            İMZA ÖRNEKLERİ
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td style="width: 50%; vertical-align: top; padding-right: 8px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 8px;">AYAKTA SOL ELLE</td></tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr><td colspan="3" style="height: 30px; border: none;"></td></tr>
                        <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 8px;">OTURARAK SOL ELLE</td></tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                    </table>
                </td>
                <td style="width: 50%; vertical-align: top; padding-left: 8px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 8px;">AYAKTA SAĞ ELLE</td></tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr><td colspan="3" style="height: 30px; border: none;"></td></tr>
                        <tr><td colspan="3" style="border: 1px solid #000; text-align: center; font-weight: bold; padding: 8px;">OTURARAK SAĞ ELLE</td></tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                            <td style="border: 1px solid #000; width: 33.33%; height: 65px;"></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <div style="text-align: center; font-weight: bold; font-size: 13pt; margin: 30px 0 12px 0; text-decoration: underline;">
            YAZI ÖRNEĞİ
        </div>

        <div style="border: 1px solid #000; padding: 10px; min-height: 320px;">
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="border-bottom: 1px dotted #000; height: 22px;"></div>
            <div style="height: 22px;"></div>
        </div>

        <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">
            10.2.1
        </div>
    `;
    return container;
}

function renderTemplate111(data) {
    if (!data) data = {};

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

    return `
        <table style="width: 100%; height: 100%; min-height: 700px; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 35px; background-color: #0066CC; border-right: 3px solid #000; vertical-align: middle;">
                    <div style="writing-mode: vertical-rl; transform: rotate(180deg); text-align: center; font-weight: bold; font-size: 11pt; color: #fff; white-space: nowrap; padding: 10px 5px;">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="vertical-align: top; padding: 20px;">
                    <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 15px; font-size: 12pt;">ÖZEL</div>

                    <div style="text-align: center; margin-bottom: 20px;">
                        <div>T.C.</div>
                        <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div>Teftiş Kurulu</div>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <div>
                            <div>Sayı : <strong>${data.sayi || '…./.., ...'}</strong></div>
                            <div>Konu : <strong>${data.konu || '….. ….. …..'}</strong></div>
                        </div>
                        <div style="text-align: right;"><strong>${tarih}</strong></div>
                    </div>

                    <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 20px; font-size: 14pt;">
                        ÖN RAPOR
                    </div>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.olur_veren_makam || 'Bakanlık Makamı'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Makam Olurunun Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${makamOluruTarih} - ${data.makam_oluru_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Görev Emrini Veren Makam</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.gorev_emri_veren || 'Teftiş Kurulu Başkanlığı'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Görev Emrinin Tarihi ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${gorevEmriTarih} - ${data.gorev_emri_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturma Çalışmalarını<br>Yürüten Bakanlık Müfettişleri</td>
                            <td style="border: 1px solid #000; padding: 8px;">
                                <div>${mufettis1Unvan} <strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                                ${data.mufettis2_ad_soyad ? `<div>${mufettis2Unvan} <strong>${data.mufettis2_ad_soyad}</strong></div>` : ''}
                            </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold; vertical-align: top;">İnceleme/Soruşturmanın Konusu</td>
                            <td style="border: 1px solid #000; padding: 8px; min-height: 60px;">
                                <strong>${data.konu_detay || `Bakanlık Makamının ${makamOluruTarih} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı olurunda yer alan "….. ….. ….." hususları`}</strong>
                            </td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold;">Fiil ve Hâlin İşlendiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.fiil_tarihi || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Fiil ve Hâlin İşlendiğinin Öğrenildiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.ogrenilme_tarihi || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Yapıldığı Yer</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.yapildigi_yer || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Başlama Tarihi</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${baslamaTarihi}</strong></td>
                        </tr>
                    </table>

                    <div style="margin-top: 15px; font-size: 9pt; text-align: right; color: #666;">11.1</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent111(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.3; color: #000; background: #fff; width: 190mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 5mm;';

    if (!data) data = {};

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

    container.innerHTML = `
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
    `;
    return container;
}


function renderTemplate131(data) {
    if (!data) data = {};

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = data.tarih ? formatLongDate(data.tarih) : 'gg.aa.yyyy';
    const makamOluruTarih = data.makam_oluru_tarih ? formatLongDate(data.makam_oluru_tarih) : 'gg.aa.yyyy';
    const gorevEmriTarih = data.gorev_emri_tarih ? formatLongDate(data.gorev_emri_tarih) : 'gg.aa.yyyy';
    const baslamaTarihi = data.baslama_tarihi ? formatLongDate(data.baslama_tarihi) : '';
    const bitisTarihi = data.bitis_tarihi ? formatLongDate(data.bitis_tarihi) : '';

    const mufettis1Unvan = data.mufettis1_unvan || 'Bakanlık Başmüfettişi';
    const mufettis2Unvan = data.mufettis2_unvan || 'Bakanlık Müfettişi';

    return `
        <table style="width: 100%; height: 100%; min-height: 700px; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 35px; background-color: #0066CC; border-right: 3px solid #000; vertical-align: middle;">
                    <div style="writing-mode: vertical-rl; transform: rotate(180deg); text-align: center; font-weight: bold; font-size: 11pt; color: #fff; white-space: nowrap; padding: 10px 5px;">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="vertical-align: top; padding: 20px;">
                    <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 15px; font-size: 12pt;">ÖZEL</div>

                    <div style="text-align: center; margin-bottom: 20px;">
                        <div>T.C.</div>
                        <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div>Teftiş Kurulu</div>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <div>
                            <div>Sayı : <strong>${data.sayi || '…./.., ...'}</strong></div>
                            <div>Konu : <strong>${data.konu || '….. ….. …..'}</strong></div>
                        </div>
                        <div style="text-align: right;"><strong>${tarih}</strong></div>
                    </div>

                    <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 20px; font-size: 14pt;">
                        İNCELEME/SORUŞTURMA RAPORU
                    </div>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.olur_veren_makam || 'Bakanlık Makamı'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Makam Olurunun Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${makamOluruTarih} - ${data.makam_oluru_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Görev Emrini Veren Makam</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.gorev_emri_veren || 'Teftiş Kurulu Başkanlığı'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Görev Emrinin Tarihi ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${gorevEmriTarih} - ${data.gorev_emri_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturma Çalışmalarını<br>Yürüten Bakanlık Müfettişleri</td>
                            <td style="border: 1px solid #000; padding: 8px;">
                                <div>${mufettis1Unvan} <strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
                                ${data.mufettis2_ad_soyad ? `<div>${mufettis2Unvan} <strong>${data.mufettis2_ad_soyad}</strong></div>` : ''}
                            </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold; vertical-align: top;">İnceleme/Soruşturmanın Konusu</td>
                            <td style="border: 1px solid #000; padding: 8px; min-height: 60px;">
                                <strong>${data.konu_detay || `Bakanlık Makamının ${makamOluruTarih} tarihli ve ${data.makam_oluru_sayi || '…..'} sayılı olurunda yer alan "….. ….. ….. ….." hususları`}</strong>
                            </td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold;">Fiil ve Hâlin İşlendiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.fiil_tarihi || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Fiil ve Hâlin İşlendiğinin Öğrenildiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.ogrenilme_tarihi || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Yapıldığı Yer</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.yapildigi_yer || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Başlama Tarihi</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${baslamaTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Bitirilme Tarihi</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${bitisTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold; vertical-align: top; height: 150px;">Hakkında<br>İnceleme/Soruşturma<br>Yapılanlar<br><u>ve</u> Getirilen<br>Teklifler</td>
                            <td style="border: 1px solid #000; padding: 8px; vertical-align: top;">
                                <div style="white-space: pre-wrap;">${data.hakkinda_sorusturma || ''}</div>
                                <div style="margin-top: 10px; border-top: 1px solid #ccc; padding-top: 5px;">Mali Tekliflerin Toplam Tutarı: <strong>${data.mali_teklif_tutari || '…..TL.-'}</strong></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Başka Rapor Düzenlenmiş ise Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.baska_rapor || 'Düzenlenmemiştir.'}</strong></td>
                        </tr>
                    </table>

                    <div style="margin-top: 15px; font-size: 9pt; text-align: right; color: #666;">13.1</div>
                </td>
            </tr>
        </table>
    `;
}



function renderTemplate132(data) {
    if (!data) data = {};

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = data.tarih ? formatLongDate(data.tarih) : 'gg.aa.yyyy';
    const ilgiATarih = data.ilgi_a_tarih ? formatLongDate(data.ilgi_a_tarih) : 'gg.aa.yyyy';
    const ilgiBTarih = data.ilgi_b_tarih ? formatLongDate(data.ilgi_b_tarih) : 'gg.aa.yyyy';
    const calismaBaslangic = data.calisma_baslangic ? formatLongDate(data.calisma_baslangic) : 'gg.aa.yyyy';
    const calismaBitis = data.calisma_bitis ? formatLongDate(data.calisma_bitis) : 'gg.aa.yyyy';

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt; text-decoration: underline;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı</strong> : <strong>${data.sayi || '…./…,...'}</strong></div>
                <div><strong>Konu</strong> : <strong>${data.konu || '….. ….. Lisesi Yöneticileri'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${tarih}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 25px 0; font-size: 12pt;">
            MİLLÎ EĞİTİM BAKANLIĞINA
        </div>

        <div style="margin-bottom: 20px; font-size: 11pt;">
            <div style="display: flex;">
                <div style="min-width: 70px; font-weight: bold;">İlgi    :</div>
                <div>
                    <div>a) Bakanlık Makamının <strong>${ilgiATarih}</strong> tarihli ve <strong>${data.ilgi_a_sayi || '…..'}</strong> sayılı inceleme/soruşturma Oluru.</div>
                    <div style="padding-left: 0.5cm;">b) Teftiş Kurulu Başkanlığının <strong>${ilgiBTarih}</strong> tarihli ve <strong>${data.ilgi_b_sayi || '…..'}</strong> sayılı görevlendirme emri.</div>
                </div>
            </div>
        </div>

        <div style="text-align: justify; font-size: 11pt; line-height: 1.6; margin-bottom: 20px;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince ${data.hakkinda_kisiler ? `<strong>${data.hakkinda_kisiler}</strong>` : '….. ….. Lisesi Müdürü ….. ….., ….. öğretmeni ….. ….. ve memur ….. ….. '} hakkında yürütülen inceleme/soruşturma çalışmaları, <strong>${calismaBaslangic} - ${calismaBitis}</strong> tarihleri arasında yapılmış olup; tespit edilen hususlar aşağıda açıklanmıştır.
            </p>
        </div>

        <div style="font-size: 11pt; line-height: 1.6; margin-bottom: 20px;">
            <div style="font-weight: bold; font-size: 12pt; margin-bottom: 10px; color: #333;">1. İNCELEME/SORUŞTURMANIN KONUSU:</div>
            ${!data.konusu_aciklama ? `<div style="text-indent: 1cm; margin-bottom: 10px; font-style: italic; color: #666;">
                (Bu bölümde Makam Olurlarında yer alan iddialar aşağıdaki örnekte belirtildiği şekilde aynen yazılmalıdır.)
            </div>` : ''}
            <div style="white-space: pre-wrap;">${data.konusu_aciklama ? `<strong>${data.konusu_aciklama}</strong>` : '<span class="empty-field">[İnceleme/soruşturma konusu girilmedi]</span>'}</div>
        </div>

        <div style="font-size: 11pt; line-height: 1.6; margin-bottom: 20px;">
            <div style="font-weight: bold; font-size: 12pt; margin-bottom: 10px; color: #333;">2. YAPILAN İNCELEME/SORUŞTURMA (Yöntem ve Süreç Akışı):</div>
            ${!data.yontem_surec ? `<div style="text-indent: 1cm; margin-bottom: 10px; font-style: italic; color: #666;">
                (Bu bölümde Makam Olurlarında yer alan iddiaların hangi yöntemle incelendiği ve işlem basamaklarının neler olduğu belirtilmelidir.)
            </div>` : ''}
            <div style="white-space: pre-wrap;">${data.yontem_surec ? `<strong>${data.yontem_surec}</strong>` : '<span class="empty-field">[Yöntem ve süreç girilmedi]</span>'}</div>
        </div>

        <div style="font-size: 11pt; line-height: 1.6; margin-bottom: 20px;">
            <div style="font-weight: bold; font-size: 12pt; margin-bottom: 10px; color: #333;">3. BİLGİ-BELGE VE İFADELERİN DEĞERLENDİRİLMESİ (Tahlil ve Münakaşa/Analiz ve Değerlendirme):</div>
            ${!data.degerlendirme ? `<div style="text-indent: 1cm; margin-bottom: 10px; font-style: italic; color: #666;">
                (Bu bölümde iddia konularına yönelik tüm ispat araçları detaylıca analiz edip değerlendirilmelidir.)
            </div>` : ''}
            <div style="white-space: pre-wrap;">${data.degerlendirme ? `<strong>${data.degerlendirme}</strong>` : '<span class="empty-field">[Değerlendirme girilmedi]</span>'}</div>
        </div>

        <div style="font-size: 11pt; line-height: 1.6; margin-bottom: 20px;">
            <div style="font-weight: bold; font-size: 12pt; margin-bottom: 10px; color: #333;">4. SONUÇ–KANAAT VE TEKLİF:</div>
            <div style="white-space: pre-wrap;">${data.sonuc_kanaat_teklif ? `<strong>${data.sonuc_kanaat_teklif}</strong>` : '<span class="empty-field">[Sonuç, kanaat ve teklif girilmedi]</span>'}</div>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || 'KOD'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis2_kod || 'KOD'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
        </div>

        ${data.ekler ? `
        <div style="margin-top: 30px; font-size: 11pt;">
            <div style="font-weight: bold;">Ek:</div>
            <div><strong>${data.ekler}</strong></div>
        </div>
        ` : ''}

        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            13.2
        </div>
    `;
}

function createPDFContent132(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 0;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = data.tarih ? formatDate(data.tarih) : 'gg.aa.yyyy';
    const ilgiATarih = data.ilgi_a_tarih ? formatDate(data.ilgi_a_tarih) : 'gg.aa.yyyy';
    const ilgiBTarih = data.ilgi_b_tarih ? formatDate(data.ilgi_b_tarih) : 'gg.aa.yyyy';
    const calismaBaslangic = data.calisma_baslangic ? formatDate(data.calisma_baslangic) : 'gg.aa.yyyy';
    const calismaBitis = data.calisma_bitis ? formatDate(data.calisma_bitis) : 'gg.aa.yyyy';

    container.innerHTML = `
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
    `;
    return container;
}


// =====================================================
// Template 14.1 - Ön İnceleme Raporu Kapağı
// =====================================================

function renderTemplate1401(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const ekSureTarih = data.ek_sure_tarih ? formatDate(data.ek_sure_tarih) : '';
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const fiilTarihi = data.fiil_tarihi ? formatDate(data.fiil_tarihi) : '';

    const mufettis1 = data.mufettis1_ad_soyad ?
        `${data.mufettis1_unvan || 'Bakanlık Müfettişi'} <strong>${data.mufettis1_ad_soyad}</strong>` :
        `Bakanlık Başmüfettişi <strong>….. …..</strong>`;

    const mufettis2 = data.mufettis2_ad_soyad ?
        `<br>${data.mufettis2_unvan || 'Bakanlık Müfettişi'} <strong>${data.mufettis2_ad_soyad}</strong>` :
        `<br>Bakanlık Müfettişi <strong>….. …..</strong>`;

    return `
        <table style="width: 100%; height: 100%; min-height: 700px; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 35px; background: repeating-linear-gradient(45deg, #0066CC, #0066CC 3px, #3399FF 3px, #3399FF 6px); border-right: 3px solid #000; vertical-align: middle;">
                    <div style="writing-mode: vertical-rl; transform: rotate(180deg); text-align: center; font-weight: bold; font-size: 11pt; color: #fff; white-space: nowrap; padding: 10px 5px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="padding: 15px 20px; vertical-align: top; font-family: 'Times New Roman', serif;">
                    <div style="text-align: center; margin-bottom: 10px;">
                        <div style="font-weight: bold; color: #c00; text-decoration: underline; font-size: 10pt;">ÖZEL</div>
                        <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
                        <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 10pt;">
                        <div>
                            <div>Sayı : <strong>${data.sayi || '…./.., ...'}</strong></div>
                            <div>Konu : <strong>${data.konu || '….. ….. …..'}</strong></div>
                        </div>
                        <div style="text-align: right;"><strong>${tarih}</strong></div>
                    </div>

                    <div style="text-align: center; font-weight: bold; font-size: 13pt; margin: 15px 0; border: 2px solid #000; padding: 8px;">
                        ÖN İNCELEME RAPORU
                    </div>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; width: 50%; background: #f5f5f5;"><strong>Ön İnceleme Olurunu Veren Merci</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${data.olur_veren_merci || 'Bakanlık Makamı'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İnceleme Olurunun Tarih ve Sayısı</strong><br><span style="font-size: 9pt;">(Ek Süre Olurunun Tarih ve Sayısı)</span></td>
                            <td style="border: 1px solid #000; padding: 6px;">
                                <strong>${olurTarih} – ${data.olur_sayi || '…..'}</strong>
                                ${ekSureTarih ? `<br><strong>${ekSureTarih} – ${data.ek_sure_sayi || '…..'}</strong>` : ''}
                            </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Bakanlık Olurunun Tarih ve Sayısı</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${bakanlikOlurTarih} – ${data.bakanlik_olur_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Görev Emrini Veren Makam</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${data.gorev_emri_makam || 'Teftiş Kurulu Başkanlığı'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Görev Emrinin Tarihi ve Sayısı</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${gorevEmriTarih} – ${data.gorev_emri_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İncelemeyi Yapanın<br>Adı-Soyadı ve Unvanı</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;">${mufettis1}${mufettis2}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Fiilin İşlendiği Tarih</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${fiilTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İncelemenin Yapıldığı Yer</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${data.inceleme_yeri || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>İhbarcının/Şikâyetçinin Adı ve Soyadı<br><span style="font-size: 9pt;">(Yoksa Kamu Hukuku)</span></strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${data.ihbarci_sikayetci || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İncelemenin Başladığı Tarih</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${baslangicTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Ön İncelemenin Bitirildiği Tarih</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${bitisTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 6px; background: #f5f5f5;"><strong>Bu Konuda Başka Rapor<br>Düzenlenmişse Tarihi ve Sayısı</strong></td>
                            <td style="border: 1px solid #000; padding: 6px;"><strong>${data.baska_rapor || ''}</strong></td>
                        </tr>
                    </table>

                    <div style="margin-bottom: 10px;">
                        <div style="border: 1px solid #000; padding: 6px; font-size: 10pt;">
                            <strong>Ön İncelemenin Konusu:</strong> <strong>${data.inceleme_konusu || '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</strong>
                        </div>
                    </div>

                    <div style="border: 1px solid #000; font-size: 10pt;">
                        <div style="padding: 6px; background: #f5f5f5; border-bottom: 1px solid #000;"><strong>Haklarında Ön İnceleme Yapılanlarla İlgili Açıklamalar:</strong></div>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background: #eee;">
                                <td style="border: 1px solid #000; padding: 6px; width: 25%; text-align: center;"><strong>Adı Soyadı</strong></td>
                                <td style="border: 1px solid #000; padding: 6px; width: 25%; text-align: center;"><strong>Görevi</strong></td>
                                <td style="border: 1px solid #000; padding: 6px; width: 25%; text-align: center;"><strong>İsnat Edilen Fiil</strong></td>
                                <td style="border: 1px solid #000; padding: 6px; width: 25%; text-align: center;"><strong>Getirilen Teklif</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 6px; min-height: 60px; white-space: pre-wrap; vertical-align: top;"><strong>${data.hakkinda_adi_soyadi || ''}</strong></td>
                                <td style="border: 1px solid #000; padding: 6px; min-height: 60px; white-space: pre-wrap; vertical-align: top;"><strong>${data.hakkinda_gorevi || ''}</strong></td>
                                <td style="border: 1px solid #000; padding: 6px; min-height: 60px; white-space: pre-wrap; vertical-align: top;"><strong>${data.hakkinda_isnat_edilen_fiil || ''}</strong></td>
                                <td style="border: 1px solid #000; padding: 6px; min-height: 60px; white-space: pre-wrap; vertical-align: top;"><strong>${data.hakkinda_getirilen_teklif || ''}</strong></td>
                            </tr>
                        </table>
                    </div>

                    <div style="margin-top: 10px; font-size: 8pt; text-align: right; color: #666;">14.1</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent1401(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 165mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 0;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const ekSureTarih = data.ek_sure_tarih ? formatDate(data.ek_sure_tarih) : '';
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const fiilTarihi = data.fiil_tarihi ? formatDate(data.fiil_tarihi) : '';

    const mufettis1 = data.mufettis1_ad_soyad ?
        `${data.mufettis1_unvan || 'Bakanlık Müfettişi'} ${data.mufettis1_ad_soyad}` :
        `Bakanlık Başmüfettişi ….. …..`;

    const mufettis2 = data.mufettis2_ad_soyad ?
        `<br>${data.mufettis2_unvan || 'Bakanlık Müfettişi'} ${data.mufettis2_ad_soyad}` :
        `<br>Bakanlık Müfettişi ….. …..`;

    container.innerHTML = `
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
                            <td style="border: 1px solid #000; padding: 4px;">${olurTarih} – ${data.olur_sayi || '…..'}<br>${ekSureTarih ? `${ekSureTarih} – ${data.ek_sure_sayi || '…..'}` : ''}</td>
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
    `;
    return container;
}

// =====================================================
// Template 14.2 - Ön İnceleme Raporu
// =====================================================

function renderTemplate1402(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const ogrenmeTarihi = formatDate(data.ogrenme_tarihi);
    const fiilTarihi = formatDate(data.fiil_tarihi);

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 12pt; line-height: 1.8; max-width: 700px; margin: 0; padding: 0;">
            <div style="text-align: center; margin-bottom: 10px; font-weight: bold; color: #c00;">ÖZEL</div>
            
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-weight: bold;">T.C.</div>
                <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                <div style="font-weight: bold;">Teftiş Kurulu</div>
            </div>

            <table style="width: 100%; font-size: 12pt; margin-bottom: 20px;">
                <tr>
                    <td style="width: 80px;">Sayı</td>
                    <td style="width: 15px;">:</td>
                    <td><strong>${data.sayi || '…./.., ...'}</strong></td>
                    <td style="text-align: right;"><strong>${tarih}</strong></td>
                </tr>
                <tr>
                    <td>Konu</td>
                    <td>:</td>
                    <td colspan="2"><strong>${data.konu || '….. ….. Hakkında Ön İnceleme'}</strong></td>
                </tr>
            </table>

            <div style="text-align: center; font-weight: bold; font-size: 14pt; margin: 25px 0; text-decoration: underline;">
                ÖN İNCELEME RAPORU
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">I. GİRİŞ:</h3>
                <p style="text-align: justify; margin: 5px 0;">
                    Bakanlık Makamının <strong>${bakanlikOlurTarih}</strong> tarihli ve <strong>${data.bakanlik_olur_sayi || '…..'}</strong> sayılı Oluru,<br>
                    Teftiş Kurulu Başkanlığının <strong>${gorevEmriTarih}</strong> tarihli ve <strong>${data.gorev_emri_sayi || '…..'}</strong> sayılı görev emri,<br>
                    Ön inceleme çalışmasının başlama tarihi: <strong>${baslangicTarihi}</strong>, bitirilme tarihi: <strong>${bitisTarihi}</strong>,<br>
                    Ön inceleme çalışmasının yürütüldüğü yer: <strong>${data.inceleme_yeri || '…..'}</strong>
                </p>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">II. İHBARCI/ŞİKÂYETÇİ:</h3>
                ${data.ihbarci_adi_soyadi && data.ihbarci_adi_soyadi.toLowerCase() !== 'kamu hukuku' ? `
                <table style="width: 100%; font-size: 11pt; margin-bottom: 10px;">
                    <tr><td style="width: 250px;">Adı ve Soyadı</td><td style="width: 15px;">:</td><td><strong>${data.ihbarci_adi_soyadi || '…..'}</strong></td></tr>
                    <tr><td>T.C. Kimlik Numarası</td><td>:</td><td><strong>${data.ihbarci_tc || '…..'}</strong></td></tr>
                    <tr><td>Görevi/İşi</td><td>:</td><td><strong>${data.ihbarci_gorevi || '…..'}</strong></td></tr>
                    <tr><td>Görev/İş Adresi ve Telefonu</td><td>:</td><td><strong>${data.ihbarci_gorev_adresi || '…..'}</strong></td></tr>
                    <tr><td>İkametgâh Adresi ve Telefonu</td><td>:</td><td><strong>${data.ihbarci_ikamet_adresi || '…..'}</strong></td></tr>
                </table>
                ` : `<p style="margin: 5px 0;"><strong>Kamu Hukuku</strong></p>`}
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">III. YETKİLİ MERCİİN ÖĞRENME TARİHİ:</h3>
                <p style="text-align: justify; margin: 5px 0;">
                    <strong>${ogrenmeTarihi}</strong>
                    ${data.ogrenme_aciklama ? `<br>${data.ogrenme_aciklama}` : ''}
                </p>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">IV. FİİL YERİ VE TARİHİ:</h3>
                <p style="text-align: justify; margin: 5px 0;">
                    Yer: <strong>${data.fiil_yeri || '…..'}</strong><br>
                    Tarih: <strong>${fiilTarihi}</strong>
                </p>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">V. HAKKINDA ÖN İNCELEME YAPILANLAR:</h3>
                <div style="white-space: pre-wrap; text-align: justify;">${data.hakkinda_bilgiler || '…..'}</div>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">VI. ÖN İNCELEMENİN KONUSU:</h3>
                <div style="white-space: pre-wrap; text-align: justify;">${data.inceleme_konusu || '…..'}</div>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">VII. YAPILAN ÖN İNCELEME ÇALIŞMALARI:</h3>
                <div style="white-space: pre-wrap; text-align: justify;">${data.yapilan_calismalar || '…..'}</div>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">VIII. BİLGİ, BELGE VE İFADELERİN DEĞERLENDİRİLMESİ:</h3>
                <div style="white-space: pre-wrap; text-align: justify;">${data.degerlendirme || '…..'}</div>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 12pt;">IX. SONUÇ, KANAAT VE TEKLİF:</h3>
                <div style="white-space: pre-wrap; text-align: justify;">${data.sonuc_kanaat || '…..'}</div>
                <div style="text-align: right; margin-top: 15px;"><strong>${tarih}</strong></div>
            </div>

            <div style="display: flex; justify-content: space-around; margin: 40px 0 20px 0;">
                <div style="text-align: center; min-width: 150px;">
                    <div style="margin-bottom: 30px; font-size: 10pt;">İmza</div>
                    <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
                </div>
                <div style="text-align: center; min-width: 150px;">
                    <div style="margin-bottom: 30px; font-size: 10pt;">İmza</div>
                    <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
                </div>
            </div>

            <div style="margin-top: 25px; font-size: 11pt;">
                <strong>Ek:</strong> Dizi Pusulasına Bağlı İşlemli Dosya (${data.ek_sayfa || '…'} Sayfa/${data.ek_adet || '…'} Adet)
            </div>

            <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">14.2</div>
        </div>
    `;
}

function createPDFContent1402(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.6; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const ogrenmeTarihi = formatDate(data.ogrenme_tarihi);
    const fiilTarihi = formatDate(data.fiil_tarihi);

    container.innerHTML = `
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
    `;
    return container;
}


function createPDFContent131(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.3; color: #000; background: #fff; width: 190mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 5mm;';

    if (!data) data = {};

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = data.tarih ? formatLongDate(data.tarih) : 'gg.aa.yyyy';
    const makamOluruTarih = data.makam_oluru_tarih ? formatLongDate(data.makam_oluru_tarih) : 'gg.aa.yyyy';
    const gorevEmriTarih = data.gorev_emri_tarih ? formatLongDate(data.gorev_emri_tarih) : 'gg.aa.yyyy';
    const baslamaTarihi = data.baslama_tarihi ? formatLongDate(data.baslama_tarihi) : '';
    const bitisTarihi = data.bitis_tarihi ? formatLongDate(data.bitis_tarihi) : '';

    const mufettis1Unvan = data.mufettis1_unvan || 'Bakanlık Başmüfettişi';
    const mufettis2Unvan = data.mufettis2_unvan || 'Bakanlık Müfettişi';

    container.innerHTML = `
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
    `;
    return container;
}

function renderTemplate112(data) {
    if (!data) data = {};

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = data.tarih ? formatLongDate(data.tarih) : 'gg.aa.yyyy';
    const mufettis1Unvan = data.mufettis1_unvan || 'Bakanlık Başmüfettişi';
    const mufettis2Unvan = data.mufettis2_unvan || 'Bakanlık Müfettişi';

    return `
        <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 20px; text-decoration: underline;">
            ÖN RAPOR
        </div>

        <div style="text-align: right; margin-bottom: 20px;">
            <strong>Rapor No:</strong> ${data.rapor_no || '…../…..'}<br>
            <strong>Tarih:</strong> ${tarih}
        </div>

        <div style="margin-bottom: 20px;">
            <div style="font-weight: bold; font-size: 12pt; margin-bottom: 10px; border-bottom: 2px solid #000; padding-bottom: 5px;">
                I. GİRİŞ
            </div>
            <div style="text-align: justify; line-height: 1.6;">
                ${data.giris ? `<strong>${data.giris}</strong>` : '<span class="empty-field">[Giriş bölümü girilmedi]</span>'}
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <div style="font-weight: bold; font-size: 12pt; margin-bottom: 10px; border-bottom: 2px solid #000; padding-bottom: 5px;">
                II. TESPİTLER
            </div>
            <div style="text-align: justify; line-height: 1.6; white-space: pre-wrap;">
                ${data.tespitler ? `<strong>${data.tespitler}</strong>` : '<span class="empty-field">[Tespitler girilmedi]</span>'}
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <div style="font-weight: bold; font-size: 12pt; margin-bottom: 10px; border-bottom: 2px solid #000; padding-bottom: 5px;">
                III. DEĞERLENDİRME
            </div>
            <div style="text-align: justify; line-height: 1.6; white-space: pre-wrap;">
                ${data.degerlendirme ? `<strong>${data.degerlendirme}</strong>` : '<span class="empty-field">[Değerlendirme girilmedi]</span>'}
            </div>
        </div>

        <div style="margin-bottom: 30px;">
            <div style="font-weight: bold; font-size: 12pt; margin-bottom: 10px; border-bottom: 2px solid #000; padding-bottom: 5px;">
                IV. SONUÇ VE KANAAT
            </div>
            <div style="text-align: justify; line-height: 1.6; white-space: pre-wrap;">
                ${data.sonuc ? `<strong>${data.sonuc}</strong>` : '<span class="empty-field">[Sonuç ve kanaat girilmedi]</span>'}
            </div>
        </div>

        <div style="display: flex; justify-content: center; gap: 80px; margin-top: 40px;">
            <div style="text-align: center;">
                <div>${mufettis1Unvan}</div>
                <div style="margin-top: 5px;"><strong>${data.mufettis1_ad_soyad || '….. …..'}</strong></div>
            </div>
            ${data.mufettis2_ad_soyad ? `
            <div style="text-align: center;">
                <div>${mufettis2Unvan}</div>
                <div style="margin-top: 5px;"><strong>${data.mufettis2_ad_soyad}</strong></div>
            </div>
            ` : ''}
        </div>

        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            11.2
        </div>
    `;
}

function createPDFContent112(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    if (!data) data = {};

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = data.tarih ? formatLongDate(data.tarih) : 'gg.aa.yyyy';
    const mufettis1Unvan = data.mufettis1_unvan || 'Bakanlık Başmüfettişi';
    const mufettis2Unvan = data.mufettis2_unvan || 'Bakanlık Müfettişi';

    container.innerHTML = `
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
    `;
    return container;
}

function renderTemplate121(data) {
    if (!data) data = {};

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı  :</strong> <strong>${data.sayi || '…./…, …'}</strong></div>
                <div><strong>Konu:</strong> <strong>${data.konu || 'Olur İsteği'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 25px 0; font-size: 12pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="margin-bottom: 20px; font-size: 11pt;">
            <div style="display: flex;">
                <div style="min-width: 70px; font-weight: bold;">İlgi    :</div>
                <div>Teftiş Kurulu Başkanlığının <strong>${formatLongDate(data.ilgi_tarih)}</strong> tarihli ve <strong>${data.ilgi_sayi || '…..'}</strong> sayılı turne emirleri.</div>
            </div>
        </div>

        <div style="text-align: justify; font-size: 11pt; line-height: 1.6; margin-bottom: 15px;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                İlgi'de kayıtlı emir gereğince <strong>${data.denetim_il || '…..'}/${data.denetim_ilce || '…..'}</strong> <strong>${data.okul_adi || '….. ….. Lisesi/İlkokulu/Ortaokulu'}</strong>'nda yapılan genel denetim çalışmaları sürecinde;
            </p>
        </div>

        <div style="font-size: 11pt; line-height: 1.6; margin-bottom: 15px; white-space: pre-wrap;">
${data.tespit_hususlar ? `<strong>${data.tespit_hususlar}</strong>` : `<span style="color: #999;">[Tespit edilen hususlar buraya yazılacak...]</span>`}
        </div>

        <div style="text-align: justify; font-size: 11pt; line-height: 1.6; margin-bottom: 20px;">
            <p style="margin-top: 10px;">hususları ortaya çıkmıştır.</p>
            <p style="text-indent: 1cm; margin-top: 15px;">
                Yukarıda belirtilen hususlarla ilgili olarak ${data.olur_istenen_kisiler ? `<strong>${data.olur_istenen_kisiler}</strong>` : '<span style="color: #999;">[Olur istenen kişiler]</span>'} hakkında disiplin soruşturması yapılabilmesi için Makamdan gerekli olurun alınmasını tensiplerine arz ederiz.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || 'KOD'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis2_kod || 'KOD'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
        </div>

        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            12.1
        </div>
    `;
}

function createPDFContent121(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 12px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 10pt;">
            <div>
                <div><strong>Sayı  :</strong> ${data.sayi || '…./…, …'}</div>
                <div><strong>Konu:</strong> ${data.konu || 'Olur İsteği'}</div>
            </div>
            <div style="text-align: right;">${formatDate(data.tarih)}</div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="margin-bottom: 15px; font-size: 10pt;">
            <div style="display: flex;">
                <div style="min-width: 60px; font-weight: bold;">İlgi    :</div>
                <div>Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_tarih)} tarihli ve ${data.ilgi_sayi || '…..'} sayılı turne emirleri.</div>
            </div>
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 12px;">
            <p style="text-indent: 1cm; margin: 0;">
                İlgi'de kayıtlı emir gereğince ${data.denetim_il || '…..'}/${data.denetim_ilce || '…..'} ${data.okul_adi || '….. ….. Lisesi/İlkokulu/Ortaokulu'}'nda yapılan genel denetim çalışmaları sürecinde;
            </p>
        </div>

        <div style="font-size: 10pt; line-height: 1.5; margin-bottom: 12px; white-space: pre-wrap;">
${data.tespit_hususlar || '[Tespit edilen hususlar]'}
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <p style="margin-top: 8px;">hususları ortaya çıkmıştır.</p>
            <p style="text-indent: 1cm; margin-top: 12px;">
                Yukarıda belirtilen hususlarla ilgili olarak ${data.olur_istenen_kisiler || '[Olur istenen kişiler]'} hakkında disiplin soruşturması yapılabilmesi için Makamdan gerekli olurun alınmasını tensiplerine arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 35px 0 25px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px; font-size: 10pt;">
                <div style="margin-bottom: 35px;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || 'KOD'}</strong>)</div>
                <div>Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 160px; font-size: 10pt;">
                <div style="margin-bottom: 35px;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis2_kod || 'KOD'}</strong>)</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">
            12.1
        </div>
    `;
    return container;
}

function renderTemplate122(data) {
    if (!data) data = {};

    const formatLongDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return `
        <div class="letter-header" style="text-align: center; margin-bottom: 15px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div class="letter-meta" style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 11pt;">
            <div>
                <div><strong>Sayı   :</strong> <strong>${data.sayi || '…./…,…'}</strong></div>
                <div><strong>Konu :</strong> <strong>${data.konu || 'Olur İsteği'}</strong></div>
            </div>
            <div style="text-align: right;">
                <strong>${formatLongDate(data.tarih)}</strong>
            </div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 25px 0; font-size: 12pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="margin-bottom: 20px; font-size: 11pt;">
            <div style="display: flex;">
                <div style="min-width: 70px; font-weight: bold;">İlgi    :</div>
                <div>
                    <div>a) Bakanlık Makamının <strong>${formatLongDate(data.ilgi_a_tarih)}</strong> tarihli ve <strong>${data.ilgi_a_sayi || '…..'}</strong> sayılı Oluru.</div>
                    <div style="padding-left: 0.5cm;">b) Teftiş Kurulu Başkanlığının <strong>${formatLongDate(data.ilgi_b_tarih)}</strong> tarihli ve <strong>${data.ilgi_b_sayi || '…..'}</strong> sayılı görevlendirme emri.</div>
                </div>
            </div>
        </div>

        <div style="text-align: justify; font-size: 11pt; line-height: 1.6; margin-bottom: 15px;">
            <p style="text-indent: 1cm; margin-bottom: 10px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince yürütülen inceleme/soruşturma çalışmaları sürecinde;
            </p>
        </div>

        <div style="font-size: 11pt; line-height: 1.6; margin-bottom: 15px; white-space: pre-wrap;">
${data.tespit_hususlar ? `<strong>${data.tespit_hususlar}</strong>` : `<span style="color: #999;">[Tespit edilen hususlar buraya yazılacak...]</span>`}
        </div>

        <div style="text-align: justify; font-size: 11pt; line-height: 1.6; margin-bottom: 20px;">
            <p style="text-indent: 1cm;">hususları ortaya çıkmıştır.</p>
            <p style="text-indent: 1cm; margin-top: 15px;">
                Yukarıda belirtilen hususlarla ilgili olarak ${data.olur_istenen_kisiler ? `<strong>${data.olur_istenen_kisiler}</strong>` : '<span style="color: #999;">[Olur istenen kişiler]</span>'} hakkında disiplin soruşturması yapılabilmesi için Makamdan gerekli olurun alınmasını tensiplerine arz ederiz.
            </p>
        </div>

        <div class="letter-signature" style="display: flex; justify-content: space-around; margin: 40px 0 30px 0;">
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || 'KOD'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 180px;">
                <div style="margin-bottom: 40px; font-size: 10pt;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis2_kod || 'KOD'}</strong>)</div>
                <div style="font-size: 10pt;">Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 20px; padding: 10px; border: 1px solid #ccc; background: #f9f9f9; font-size: 9pt;">
            <strong>Açıklama:</strong> Disiplin yönünden alınan olurlarda yer alan hususlardan, 4483, 3628, 5816 sayılı ve diğer ceza hükümlü kanunlar kapsamına giren eylemlerle ilgili olarak, usulünce görevli ve yetkili mercilere gerekli duyuruların yapılması gerektiği göz önünde bulundurulmalıdır.
        </div>

        <div class="footer" style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">
            12.2
        </div>
    `;
}

function createPDFContent122(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 180mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10mm;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 12px;">
            <div style="font-weight: bold; color: #c00; margin-bottom: 5px; font-size: 10pt;">ÖZEL</div>
            <div style="font-weight: bold; font-size: 11pt;">T.C.</div>
            <div style="font-weight: bold; font-size: 11pt;">MİLLÎ EĞİTİM BAKANLIĞI</div>
            <div style="font-weight: bold; font-size: 11pt;">Teftiş Kurulu</div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 10pt;">
            <div>
                <div><strong>Sayı   :</strong> ${data.sayi || '…./…,…'}</div>
                <div><strong>Konu :</strong> ${data.konu || 'Olur İsteği'}</div>
            </div>
            <div style="text-align: right;">${formatDate(data.tarih)}</div>
        </div>

        <div style="text-align: center; font-weight: bold; margin: 20px 0; font-size: 11pt;">
            TEFTİŞ KURULU BAŞKANLIĞINA
        </div>

        <div style="margin-bottom: 15px; font-size: 10pt;">
            <div style="display: flex;">
                <div style="min-width: 60px; font-weight: bold;">İlgi    :</div>
                <div>
                    <div>a) Bakanlık Makamının ${formatDate(data.ilgi_a_tarih)} tarihli ve ${data.ilgi_a_sayi || '…..'} sayılı Oluru.</div>
                    <div style="padding-left: 0.5cm;">b) Teftiş Kurulu Başkanlığının ${formatDate(data.ilgi_b_tarih)} tarihli ve ${data.ilgi_b_sayi || '…..'} sayılı görevlendirme emri.</div>
                </div>
            </div>
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 12px;">
            <p style="text-indent: 1cm; margin: 0;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince yürütülen inceleme/soruşturma çalışmaları sürecinde;
            </p>
        </div>

        <div style="font-size: 10pt; line-height: 1.5; margin-bottom: 12px; white-space: pre-wrap;">
${data.tespit_hususlar || '[Tespit edilen hususlar]'}
        </div>

        <div style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 15px;">
            <p style="text-indent: 1cm;">hususları ortaya çıkmıştır.</p>
            <p style="text-indent: 1cm; margin-top: 12px;">
                Yukarıda belirtilen hususlarla ilgili olarak ${data.olur_istenen_kisiler || '[Olur istenen kişiler]'} hakkında disiplin soruşturması yapılabilmesi için Makamdan gerekli olurun alınmasını tensiplerine arz ederiz.
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin: 35px 0 20px 0; page-break-inside: avoid;">
            <div style="text-align: center; min-width: 160px; font-size: 10pt;">
                <div style="margin-bottom: 35px;">İmza</div>
                <div><strong>${data.mufettis1_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis1_kod || 'KOD'}</strong>)</div>
                <div>Bakanlık Müfettişi</div>
            </div>
            <div style="text-align: center; min-width: 160px; font-size: 10pt;">
                <div style="margin-bottom: 35px;">İmza</div>
                <div><strong>${data.mufettis2_ad_soyad || 'Adı SOYADI'}</strong></div>
                <div>(<strong>${data.mufettis2_kod || 'KOD'}</strong>)</div>
                <div>Bakanlık Müfettişi</div>
            </div>
        </div>

        <div style="margin-top: 15px; padding: 8px; border: 1px solid #999; background: #f5f5f5; font-size: 8pt;">
            <strong>Açıklama:</strong> Disiplin yönünden alınan olurlarda yer alan hususlardan, 4483, 3628, 5816 sayılı ve diğer ceza hükümlü kanunlar kapsamına giren eylemlerle ilgili olarak, usulünce görevli ve yetkili mercilere gerekli duyuruların yapılması gerektiği göz önünde bulundurulmalıdır.
        </div>

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">
            12.2
        </div>
    `;
    return container;
}

// =====================================================
// Word Export for Template 11.1
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

// Helper function for Word table rows
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

// Helper function for Word table rows with larger height
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

// =====================================================
// Template 15.1 - Cumhuriyet Başsavcılığına Suç Duyurusu Yazısı/Raporu Kapağı
// =====================================================

function renderTemplate151(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const gorevTarih = formatDate(data.gorev_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const sucTarihi = formatDate(data.suc_tarihi);

    return `
        <table style="width: 100%; height: 100%; min-height: 700px; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 35px; background-color: #0066CC; border-right: 3px solid #000; vertical-align: middle;">
                    <div style="writing-mode: vertical-rl; transform: rotate(180deg); text-align: center; font-weight: bold; font-size: 11pt; color: #fff; white-space: nowrap; padding: 10px 5px;">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="vertical-align: top; padding: 20px;">
                    <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 15px; font-size: 12pt;">ÖZEL</div>

                    <div style="text-align: center; margin-bottom: 20px;">
                        <div>T.C.</div>
                        <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div>Teftiş Kurulu</div>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <div>
                            <div>Sayı : <strong>${data.sayi || '…./.., ...'}</strong></div>
                            <div>Konu : <strong>${data.konu || '….. ….. ….. …..'}</strong></div>
                        </div>
                        <div style="text-align: right;"><strong>${tarih}</strong></div>
                    </div>

                    <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 20px; font-size: 14pt;">
                        CUMHURİYET BAŞSAVCILIĞINA SUÇ DUYURUSU
                    </div>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam<br>Makam Olurunun Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.olur_makam || 'Bakanlık Makamı'}</strong><br><strong>${olurTarih} - ${data.olur_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Görev Emrini Veren Makam<br>Görevlendirme Emrinin Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.gorev_makam || 'Teftiş Kurulu Başkanlığı'}</strong><br><strong>${gorevTarih} - ${data.gorev_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturma Talep Eden Merci<br>İnceleme/Soruşturma Olurunu Alan Birim</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.talep_merci || ''}</strong><br><strong>${data.olur_alan_birim || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İhbarcı veya Şikâyetçinin Adı-Soyadı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.ihbarci_sikayetci || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturma Çalışmasını Yürüten<br>Bakanlık Müfettişleri</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong style="white-space: pre-wrap;">${data.mufettisler || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Yapıldığı Yer</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.inceleme_yeri || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Başladığı Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${baslangicTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Bitirildiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${bitisTarihi}</strong></td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold;">Suç Duyurusunun Konusu</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong style="white-space: pre-wrap;">${data.suc_duyurusu_konusu || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Suçla İlgili Kanun Maddesi</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.suc_kanun_maddesi || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Suçun İşlendiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${sucTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Suçun İşlendiği Yer</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.suc_yeri || ''}</strong></td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold; vertical-align: top; min-height: 80px;">Hakkında Duyuru Yapılanların<br>Adı ve Soyadı, Kimlik Numarası<br>Görevi/İşi ve Adresi</td>
                            <td style="border: 1px solid #000; padding: 8px; vertical-align: top;"><strong style="white-space: pre-wrap;">${data.duyuru_yapilanlar || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Bu Konuda Başka Rapor Düzenlenmiş ise<br>Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.baska_rapor || ''}</strong></td>
                        </tr>
                    </table>

                    <div style="margin-top: 15px; font-size: 9pt; text-align: right; color: #666;">15.1</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent151(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.4; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const gorevTarih = formatDate(data.gorev_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const sucTarihi = formatDate(data.suc_tarihi);

    container.innerHTML = `
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
    `;

    return container;
}

// =====================================================
// Template 15.2 - Cumhuriyet Başsavcılığına Suç Duyurusu Yazısı/Raporu
// =====================================================

function renderTemplate152(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const sucOgrenmeTarihi = formatDate(data.suc_ogrenme_tarihi);
    const sucTarihi = formatDate(data.suc_tarihi);
    const encumenTarih1 = formatDate(data.encumen_karar_tarih1);
    const encumenTarih2 = formatDate(data.encumen_karar_tarih2);
    const valilikOlurTarih = formatDate(data.valilik_olur_tarih);
    const zimmetYaziTarih = formatDate(data.zimmet_yazi_tarih);

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    // Helper function for displaying data with fallback
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 11pt; line-height: 1.5; padding: 20px;">
            <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 15px;">ÖZEL</div>
            
            <div style="text-align: center; margin-bottom: 15px;">
                <div>T.C.</div>
                <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                <div>Teftiş Kurulu</div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                <div>
                    <div>Sayı : ${v(data.sayi, '…./.., ...')}</div>
                    <div>Konu: ${v(data.konu, 'Suç Duyurusu')}</div>
                </div>
                <div style="text-align: right;">${v(tarih)}</div>
            </div>

            <div style="text-align: center; font-weight: bold; margin-bottom: 20px;">
                ${data.bassavcilik || '….. CUMHURİYET BAŞSAVCILIĞINA'}
            </div>

            <div style="margin-bottom: 15px;">
                <div><strong>İlgi :</strong> a) Bakanlık Makamının ${v(bakanlikOlurTarih)} tarihli ve ${v(data.bakanlik_olur_sayi)} sayılı Oluru.</div>
                <div style="margin-left: 38px;">b) Teftiş Kurulu Başkanlığının ${v(gorevEmriTarih)} tarihli ve ${v(data.gorev_emri_sayi)} sayılı görevlendirme emri.</div>
            </div>

            <p style="text-indent: 40px; text-align: justify; margin-bottom: 15px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce ${v(baslangicTarihi)}-${v(bitisTarihi)} tarihleri arasında yürütülen ${v(calismaTuru)} çalışmaları sonucunda suç teşkil eden fiil/eylemlerde bulunduğu değerlendirilen kişi/kişilerle ilgili hususlar aşağıda açıklanmıştır.
            </p>

            <p style="font-weight: bold; margin-bottom: 10px;">SUÇ DUYURUSUNUN KONUSU:</p>
            <p style="text-align: justify; margin-bottom: 15px; white-space: pre-wrap;">${data.suc_duyurusu_konusu || '….. ….. ….. ….. ….. ….. ….. ….. ….. ….. ….. …..'}</p>

            <p style="font-weight: bold; margin-bottom: 10px;">HAKKINDA SUÇ DUYURUSU YAPILANLAR:</p>
            <table style="margin-bottom: 15px; width: 100%;">
                <tr>
                    <td style="width: 200px;"><strong>Adı ve Soyadı</strong></td>
                    <td>: ${v(data.sanik_adi_soyadi)}</td>
                </tr>
                <tr>
                    <td><strong>T.C. Kimlik Numarası</strong></td>
                    <td>: ${v(data.sanik_tc)}</td>
                </tr>
                <tr>
                    <td style="vertical-align: top;"><strong>Görevi/İşi ve Adresi</strong></td>
                    <td>: <strong style="white-space: pre-wrap;">${data.sanik_gorevi || ''}</strong></td>
                </tr>
            </table>

            <p style="margin-bottom: 10px;"><strong>SUÇU ÖĞRENME TARİHİ:</strong> ${v(sucOgrenmeTarihi)}</p>

            <p style="margin-bottom: 15px;"><strong>SUÇ YERİ VE TARİHİ:</strong> ${v(data.suc_yeri)} ${v(sucTarihi)}</p>

            <p style="font-weight: bold; margin-bottom: 10px;">AÇIKLAMA, TAHLİL VE SONUÇ:</p>
            <p style="font-size: 9pt; font-style: italic; margin-bottom: 10px;">(Açıklama: Bu bölüme Suç Duyurusuna Konu Fiil/Olaylar ve Hukuki Deliller, Gerekçeler, Sonuç yazılacaktır.)</p>
            
            <div style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                ${v(data.il_adi)} Merkez ${v(data.merkez_okul_turu, 'İlköğretim')} okullarının kışlık yakacak ihtiyacının karşılanması ve ${v(data.komur_kaynagi, 'Şırnak')}'tan tahsis edilen (${v(data.ilk_komur_miktari, '…')}) ton kömürün nakli işinin ${v(data.il_adi)} İl Daimi Encümeninin ${v(encumenTarih1)} tarihli ve ${v(data.encumen_karar_sayi1)} sayılı kararı ile ${v(data.kanun_no, '4734')} sayılı Kanunu'nun ${v(data.kanun_madde, '…')} maddesi uyarınca ${v(data.ilk_tasima_bedeli)} TL karşılığında taşımanın teklif eden ${v(data.yuklenici_adi)}'e verildiği ve tahakkuk edecek istihkaklarının da ${v(data.mali_yil, '….')} malî yılı bütçesinden ve ilköğretim kurumları yakacak alımları ve giderleri tertibinden ödenmesinin kararlaştırıldığı (Ek: ${v(data.ek_no_1, '…/…')}) yine; ${v(data.il_adi)} İl Daimi Encümeninin ${v(encumenTarih2)} tarihli ve ${v(data.encumen_karar_sayi2)} sayılı kararı ile İl ilköğretim okullarının kışlık yakacak ihtiyacının karşılanmasıyla ilgili olarak, TKİ'den satın alınan (${v(data.ikinci_komur_miktari, '…')}) ton ${v(data.komur_kaynagi, 'Şırnak')} kömürünün naklinin de ${v(data.ikinci_tasima_bedeli)} TL bedelle nakletme teklifinde bulunan aynı şahsa verilmesinin karar altına alındığı (Ek: ${v(data.ek_no_2, '…')}); bahse konu karar ve anlaşmalar gereği yüklenici firma tarafından kömür nakliyesi ve tesellüm işlerine başlandığı mevcut kayıtların incelenmesinden anlaşılmıştır.
            </div>

            <div style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                Hâl böyleyken, ${v(data.okul_adi, '….. ….. İlkokulu')}na (${v(data.kamyon_sayisi, '6')}) kamyon içerisinde götürülen, (${v(data.planlanan_miktar, '…')}) ton olarak teslimi amaçlanan kömürün miktarından (Ek: ${v(data.ek_no_planlanan, '…')}) okul idaresince şüphelenilmesi üzerine, bir komisyon huzurunda tartılmasının sağlandığı ve teslim alınan kömürün teslim alınması gerekenden (${v(data.eksik_miktar, '…')}) ton eksik olduğunun belirlendiği (Ek: ${v(data.ek_no_eksik, '…')}); konunun İl Millî Eğitim Müdürlüğüne intikal ettirildiği (Ek: ${v(data.ek_no_intikal, '...')}); buna bağlı olarak ${v(data.il_adi)} Valiliğinin ${v(valilikOlurTarih)} tarihli ve ${v(data.valilik_olur_sayi)} sayılı olurları ile soruşturmayı yürütmek üzere Eğitim Müfettişleri ${v(data.onceki_mufettis1)} ile ${v(data.onceki_mufettis2)}'nın görevlendirildiği anlaşılmış (Ek: ${v(data.ek_no_gorevlendirme, '…')}) ve dosya Müfettişliğimizce devralınmıştır. Gerek önceki Müfettişlerce alınan gerekse tarafımızdan alınan ve ekte sunulan ifade ve belgelerden (Ek: ${v(data.ek_no_ifade_belge, '…/...')}) anlaşılacağı üzere;
            </div>

            <div style="text-align: justify; margin-bottom: 15px; margin-left: 40px;">
                a) Yüklenici ${v(data.yuklenici_adi)}'ın nakliye esnasında, şoförlere verdiği talimatla, dolu olarak tartılan kamyonlardaki kömürlerin bir kısmının ${v(data.bosaltma_yeri, '…...')} yanındaki boş alana dökülmesini sağlamış, böylece okullara götürülmesi gerekenden eksik kömür götürüldüğü hâlde tam gösterilmiş ve eylemin tam bir plan dahilinde gerçekleştirildiği anlaşılmıştır. Şöyle ki; ${v(data.okul_adi, '….. İlkokulu')}na götürülen (${v(data.kamyon_sayisi, '6')}) kamyonun durumun fark edilebileceği düşüncesiyle, tartıldıktan sonra ve okula götürülmeden önce kamyonların sadece birisinin üzerinden değil, hepsinin üzerinden bir miktar kömürün önceden belirlenen alana boşaltılması gerçekleştirilmiştir.
            </div>

            <div style="text-align: justify; margin-bottom: 15px;">
                İfadelerine başvurulan, gerek adı verilen okula gerekse diğer okullara kömür götüren şoförler, bu işi yüklenici ${v(data.yuklenici_adi)}'in kendilerine verdiği talimat üzerine yaptıklarını beyan etmişlerdir (Ek: ${v(data.ek_no_sofor_ifade, '…/…')});
            </div>

            <div style="text-align: justify; margin-bottom: 15px; margin-left: 40px;">
                b) Bu duruma göre kantar fişlerine nazaran yapılan teslimatın birçok okul için gerçek miktarı yansıtmadığı sonucuna varılmakta ve ${v(data.okul_adi, '….. İlkokulu')}ndaki durum bunun en çarpıcı örneğini oluşturmaktadır.
            </div>

            <div style="text-align: justify; margin-bottom: 15px; margin-left: 40px;">
                c) Fiil gerçekleştirilirken, okulların tartı imkânlarının olmayışından yararlanılmış, neticede söz konusu okullara, bir miktarı başka mahalde boşaltılmış eksik kömür tam gibi teslim edilmek suretiyle Devlet zarara uğratılmış; yüklenici, taahhüdüne hile karıştırmış ve bu şekilde yasalara aykırı olarak haksız kazanç sağlamıştır.
            </div>

            <div style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                Mevcut belgeler ve ifadelerine başvurulan şoförlerin beyanları bu durumu açıkça ortaya koymaktadır.
            </div>

            <div style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                Sonuç olarak; ${v(data.ogretim_yili, '…./….')} öğretim yılında ilköğretim okullarında kullanılmak üzere tahsisi yapılan kömürün dağıtım ve teslimatında sorumluluğu görülen Bakanlığımız mensupları hakkında Müfettişliğimizce soruşturma yürütülmekte olup; ${v(data.il_adi)} Millî Eğitim Müdürlüğü Mutemedi ${v(data.mutemed_adi)}'ın (T.C. Kimlik No.: ${v(data.mutemed_tc)}); Valilikçe Cumhuriyet Savcılığına yazılan yazıda adı geçenin zimmet suçunu işlediği kanaatine varıldığını ve TCK'nın ${v(data.tck_madde, '247')} nci maddesi gereğince işlem yapılmasının uygun olacağını belirten ${v(zimmetYaziTarih)} tarihli ve ${v(data.zimmet_yazi_sayi)} sayılı yazılarına istinaden tutuklanmış bulunmaktadır.
            </div>

            <div style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                Bununla beraber, yukarıda açıklandığı üzere okullara teslim edilmeden önce tartılan ve kamyonlara yüklenen kömürlerin bir kısmını başka yerlere boşalttırarak, taahhüdüne hile karıştırmak suretiyle, haksız kazanç sağlayan, Devleti zarara uğratan ${v(data.yuklenici_baba_adi)} oğlu ${v(data.yuklenici_dogum_yili)} doğumlu ve ${v(data.yuklenici_adresi, '….. ….. ….. …..')} adresinde oturan yüklenici ${v(data.yuklenici_adi)} (T.C. Kimlik No.: ${v(data.yuklenici_tc)}) hakkında da "${data.teklif_edilen_suc || 'taahhüt ettiği kömür miktarında hile yapmak suretiyle Devleti zarara uğratmak ve haksız kazanç sağlamak'}" fiilinden dolayı "${data.yasal_dayanak || 'genel hükümler'}" çerçevesinde yasal işlem yapılması gereği ortaya çıkmaktadır.
            </div>

            <p style="text-indent: 40px; margin-bottom: 20px;">Durum, gereğinin takdir ve ifası için tevdi olunur. ${v(tarih)}</p>

            <div style="display: flex; justify-content: space-between; margin-top: 40px;">
                <div style="text-align: center; width: 45%;">
                    <div>İmza</div>
                    <div style="margin-top: 30px;">${v(data.mufettis1_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
                <div style="text-align: center; width: 45%;">
                    <div>İmza</div>
                    <div style="margin-top: 30px;">${v(data.mufettis2_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
            </div>

            <div style="margin-top: 30px;">
                <strong>Ek:</strong> Dizi Pusulasına Bağlı İşlemli Dosya (${data.ek_sayfa || '…'} Sayfa/${data.ek_adet || '…'} Adet)
            </div>

            <div style="margin-top: 40px; font-size: 9pt; text-align: right; color: #666;">15.2</div>
        </div>
    `;
}


function createPDFContent152(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10px;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const sucOgrenmeTarihi = formatDate(data.suc_ogrenme_tarihi);
    const sucTarihi = formatDate(data.suc_tarihi);
    const encumenTarih1 = formatDate(data.encumen_karar_tarih1);
    const encumenTarih2 = formatDate(data.encumen_karar_tarih2);
    const valilikOlurTarih = formatDate(data.valilik_olur_tarih);
    const zimmetYaziTarih = formatDate(data.zimmet_yazi_tarih);

    const calismaTuru = data.calisma_turu || 'inceleme/soruşturma/ön inceleme';

    // Helper for displaying data with fallback (bold)
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    container.innerHTML = `
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
    `;

    return container;
}

// =====================================================
// Template 15.3 - Diğer Bakanlık Mensupları Suç Duyurusu Kapağı
// =====================================================

function renderTemplate153(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const gorevTarih = formatDate(data.gorev_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const sucTarihi = formatDate(data.suc_tarihi);

    return `
        <table style="width: 100%; height: 100%; min-height: 700px; border-collapse: collapse; border: 3px solid #000;">
            <tr>
                <!-- Sol mavi şerit -->
                <td style="width: 35px; background-color: #0066CC; border-right: 3px solid #000; vertical-align: middle;">
                    <div style="writing-mode: vertical-rl; transform: rotate(180deg); text-align: center; font-weight: bold; font-size: 11pt; color: #fff; white-space: nowrap; padding: 10px 5px;">
                        Teftiş Kurulu Başkanlığı
                    </div>
                </td>
                <!-- Sağ içerik alanı -->
                <td style="vertical-align: top; padding: 20px;">
                    <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 15px; font-size: 12pt;">ÖZEL</div>

                    <div style="text-align: center; margin-bottom: 20px;">
                        <div>T.C.</div>
                        <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                        <div>Teftiş Kurulu</div>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <div>
                            <div>Sayı : <strong>${data.sayi || '…./.., ...'}</strong></div>
                            <div>Konu : <strong>${data.konu || '….. ….. …..'}</strong></div>
                        </div>
                        <div style="text-align: right;"><strong>${tarih}</strong></div>
                    </div>

                    <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 20px; font-size: 14pt;">
                        DİĞER BAKANLIK MENSUPLARI HAKKINDA SUÇ DUYURUSU
                    </div>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam<br>Makam Olurunun Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.olur_makam || 'Bakanlık Makamı'}</strong><br><strong>${olurTarih} - ${data.olur_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Görev Emrini Veren Makam<br>Görevlendirme Emrinin Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.gorev_makam || 'Teftiş Kurulu Başkanlığı'}</strong><br><strong>${gorevTarih} - ${data.gorev_sayi || '…..'}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturma Talep Eden Merci<br>İnceleme/Soruşturma Olurunu Alan Birim</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.talep_merci || ''}</strong><br><strong>${data.olur_alan_birim || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İhbarcı veya Şikâyetçinin Adı, Soyadı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.ihbarci_sikayetci || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturma Çalışmasını Yürüten<br>Bakanlık Müfettişleri</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong style="white-space: pre-wrap;">${data.mufettisler || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Yapıldığı Yer</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.inceleme_yeri || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Başladığı Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${baslangicTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">İnceleme/Soruşturmanın Bitirildiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${bitisTarihi}</strong></td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold;">Suç Duyurusunun Konusu</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong style="white-space: pre-wrap;">${data.suc_duyurusu_konusu || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Suçla İlgili Kanun Maddesi</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.suc_kanun_maddesi || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Suçun İşlendiği Tarih</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${sucTarihi}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Suçun İşlendiği Yer</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.suc_yeri || ''}</strong></td>
                        </tr>
                    </table>

                    <table style="width: 100%; border-collapse: collapse; font-size: 10pt; margin-bottom: 15px;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; width: 45%; font-weight: bold; vertical-align: top; min-height: 80px;">Hakkında Duyuru Yapılanların<br>Adı ve Soyadı, Kimlik Numarası<br>Görevi/İşi ve Adresi</td>
                            <td style="border: 1px solid #000; padding: 8px; vertical-align: top;"><strong style="white-space: pre-wrap;">${data.duyuru_yapilanlar || ''}</strong></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Bu Konuda Başka Rapor Düzenlenmiş ise<br>Tarih ve Sayısı</td>
                            <td style="border: 1px solid #000; padding: 8px;"><strong>${data.baska_rapor || ''}</strong></td>
                        </tr>
                    </table>

                    <div style="margin-top: 15px; font-size: 9pt; text-align: right; color: #666;">15.3</div>
                </td>
            </tr>
        </table>
    `;
}

function createPDFContent153(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.4; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const gorevTarih = formatDate(data.gorev_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);
    const sucTarihi = formatDate(data.suc_tarihi);

    container.innerHTML = `
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
    `;

    return container;
}

// =====================================================
// Template 15.4 - Diğer Bakanlık Mensupları ile İlgili Suç Duyurusu Yazısı/Raporu
// =====================================================

function renderTemplate154(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);

    // Helper function for displaying data with fallback
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 11pt; line-height: 1.5; padding: 20px;">
            <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 15px;">ÖZEL</div>
            
            <div style="text-align: center; margin-bottom: 15px;">
                <div>T.C.</div>
                <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                <div>Teftiş Kurulu</div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                <div>
                    <div>Sayı : ${v(data.sayi, '…./.., ...')}</div>
                    <div>Konu: ${v(data.konu, 'Suç Duyurusu')}</div>
                </div>
                <div style="text-align: right;">${v(tarih)}</div>
            </div>

            <div style="text-align: center; font-weight: bold; margin-bottom: 20px;">
                ${v(data.bakanlik, '….. ….. BAKANLIĞINA')}
            </div>

            <div style="margin-bottom: 15px;">
                <div><strong>İlgi :</strong> a) Bakanlık Makamının ${v(bakanlikOlurTarih)} tarihli ve ${v(data.bakanlik_olur_sayi)} sayılı Oluru.</div>
                <div style="margin-left: 38px;">b) Teftiş Kurulu Başkanlığının ${v(gorevEmriTarih)} tarihli ve ${v(data.gorev_emri_sayi)} sayılı görevlendirme emri.</div>
            </div>

            <p style="text-indent: 40px; text-align: justify; margin-bottom: 15px;">
                İlgi (b)'de kayıtlı görevlendirme emri ekinde yer alan İlgi (a)'da kayıtlı Makam Oluru gereğince Müfettişliğimizce ${v(baslangicTarihi)}-${v(bitisTarihi)} tarihleri arasında ${v(data.kurum_adi, '….. ….. İlkokulu')}nun ${v(data.inceleme_konusu, 'ilgili konularda')} yürütülen inceleme/soruşturma çalışmalarında;
            </p>

            <p style="text-indent: 40px; text-align: justify; margin-bottom: 15px;">
                ${v(data.okul1_adi, '….. ….. İlkokulu')}'na tahsis edilen kömürlerin tartılarının yapılmasını ve kamyonlardaki kömürlerle ilgili kantar fişlerinin düzenlenmesini müteakip, müteahhit ${v(data.muteahhit_adi, '….. …..')} ve Millî Eğitim Müdürlüğü memurlarından ${v(data.memur_adi, '….. …..')}'in anlaşmaları sonucu, kömür yüklü kamyonların, ${v(data.meydan_yeri, '….. yanındaki meydana')} sevk edilmek suretiyle, kamyonların üzerinden bir miktar kömürün boşaltıldığı, buna rağmen kömürlerden hiç alınmamışçasına okullara tesellümünün sağlandığı, söz konusu meydana boşaltılan kömürlerin de bilahare pazarlandığı belirlenmiştir.
            </p>

            <p style="text-indent: 40px; text-align: justify; margin-bottom: 15px;">
                ${v(data.okul2_adi, '….. Okulunun')} yanındaki alana boşaltılan bahse konu kömürlerden bir miktarının da ${v(data.traktor1_surucu, '….. …..')} yönetimindeki ${v(data.traktor1_plaka, '.. … ….')} plakalı, ${v(data.traktor2_surucu, '….. …..')} yönetimindeki ${v(data.traktor2_plaka, '.. … ….')} plakalı traktörlerle ${v(data.hedef_okul, '….. ….. İlkokuluna')} götürüldüğü; gerek traktörler dolu iken gerekse boşken tartılarının yapılmamasına rağmen götürülen iki traktör kömürle ilgili olarak ${v(data.kantar_fis_no, '(…)')} numaralı kantar tartı fişlerinin ${v(data.belediye_adi, '….. Belediyesi')} kantar memuru ${v(data.kantar_memuru_adi, '….. …..')} tarafından kesilmesinin müteahhit ${v(data.muteahhit_adi, '….. …..')} tarafından sağlandığı, bu iki tartı fişi ile iki traktöre ${v(data.fis_tonaj, '(...)')} ton kömürün yüklenerek adı geçen okula götürüldüğü belirtilmesine karşılık okula ${v(data.eksik_tonaj, 'iki buçuk ton')} eksik kömür götürüldüğü anlaşılmıştır.
            </p>

            <p style="text-indent: 40px; text-align: justify; margin-bottom: 15px;">
                Müfettişliğimizce, ${v(data.belediye_baskanligi, '….. Belediye Başkanlığı')} ile yapılan yazışma sonucunda, anılan kantar tartı fişlerinin kantar memuru ${v(data.kantar_memuru_adi, '….. …..')} tarafından düzenlenmiş olduğu bildirilmiştir.
            </p>

            <p style="text-indent: 40px; text-align: justify; margin-bottom: 15px;">
                Belirtilen nedenlerle; ${v(data.sucun_tanimi, '"….. ….. …..  suçunu işleyen"')} ${v(data.sanik_kurumu, '….. ….. Başkanlığı')} memurlarından ${v(data.sanik_adi_soyadi)} hakkında gerekli soruşturmanın yapılabilmesi için ${v(data.tevdi_bakanlik, '….. Bakanlığına')} suç duyurusunda bulunulmasının yerinde olacağı hususundaki kanaatimizi arz ederiz.
            </p>

            <div style="display: flex; justify-content: space-between; margin-top: 40px;">
                <div style="text-align: center; width: 45%;">
                    <div>İmza</div>
                    <div style="margin-top: 30px;">${v(data.mufettis1_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
                <div style="text-align: center; width: 45%;">
                    <div>İmza</div>
                    <div style="margin-top: 30px;">${v(data.mufettis2_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
            </div>

            <div style="margin-top: 30px;">
                <strong>Ek:</strong> Dizi Pusulasına Bağlı İşlemli Dosya (${data.ek_sayfa || '…'} Sayfa/${data.ek_adet || '…'} Adet)
            </div>

            <div style="margin-top: 40px; font-size: 9pt; text-align: right; color: #666;">15.4</div>
        </div>
    `;
}

function createPDFContent154(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10px;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const bakanlikOlurTarih = formatDate(data.bakanlik_olur_tarih);
    const gorevEmriTarih = formatDate(data.gorev_emri_tarih);
    const baslangicTarihi = formatDate(data.baslangic_tarihi);
    const bitisTarihi = formatDate(data.bitis_tarihi);

    // Helper function for displaying data with fallback - bold for user values
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    container.innerHTML = `
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
    `;

    return container;
}

// =====================================================
// Template 15.5 - 4483 sayılı Kanuna Göre Yetkili Mercie Tevdi Yazısı/Raporu Kapağı
// =====================================================

function renderTemplate155(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const gorevTarih = formatDate(data.gorev_tarih);
    const fiilBaslangic = formatDate(data.fiil_baslangic_tarihi);
    const fiilBitis = formatDate(data.fiil_bitis_tarihi);
    const sucTarihi = formatDate(data.suc_tarihi);

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 10pt; line-height: 1.3;">
            <table style="width: 100%; border-collapse: collapse; min-height: 800px;">
                <tr>
                    <!-- Sol mavi şerit -->
                    <td style="width: 50px; background: linear-gradient(180deg, #1e3a5f 0%, #2c5282 100%); vertical-align: top; padding: 15px 8px;">
                        <div style="color: white; writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); font-size: 11pt; font-weight: bold; letter-spacing: 2px; text-align: center; height: 100%;">
                            Teftiş Kurulu Başkanlığı
                        </div>
                    </td>
                    <!-- Sağ içerik alanı -->
                    <td style="vertical-align: top; padding: 20px;">
                        <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 10px;">ÖZEL</div>
                        
                        <div style="text-align: center; margin-bottom: 15px;">
                            <div>T.C.</div>
                            <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                            <div>Teftiş Kurulu</div>
                        </div>

                        <table style="width: 100%; margin-bottom: 10px;">
                            <tr>
                                <td>Sayı : <strong>${data.sayi || '…./.., ...'}</strong></td>
                                <td style="text-align: right;"><strong>${tarih}</strong></td>
                            </tr>
                            <tr>
                                <td colspan="2">Konu: <strong>${data.konu || '….. ….. …..'}</strong></td>
                            </tr>
                        </table>

                        <h3 style="text-align: center; margin: 15px 0; font-size: 12pt; text-decoration: underline;">TEVDİ RAPORU</h3>

                        <table style="width: 100%; border-collapse: collapse; font-size: 9pt;">
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold; width: 50%;">Tevdi Yazısının/Suç Duyurusunun Sunulduğu<br>Yetkili Merciin Unvanı</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.yetkili_merci || ''}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturma Olurunu Veren Makam,<br>Makam Olurunun Tarih ve Sayısı</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.olur_makam || 'Bakanlık Makamı'}</strong><br><strong>${olurTarih}</strong> - <strong>${data.olur_sayi || '…..'}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Görev Emrini Veren Makam<br>Görevlendirme Emrinin Tarih ve Sayısı</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.gorev_makam || 'Teftiş Kurulu Başkanlığı'}</strong><br><strong>${gorevTarih}</strong> - <strong>${data.gorev_sayi || '…..'}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İnceleme/Soruşturma Çalışmasını<br>Yürüten Bakanlık Müfettişleri</td>
                                <td style="border: 1px solid #000; padding: 5px; white-space: pre-line;"><strong>${data.mufettisler || 'Bakanlık Başmüfettişi ….. …..\nBakanlık Müfettişi ….. …..'}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">İşlenen Fiilin Konusu</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.fiil_konusu || ''}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Fiilin Yapıldığı Yer</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.fiil_yeri || ''}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Fiilin Başladığı Tarih</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${fiilBaslangic}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Fiilin Bitirildiği Tarih</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${fiilBitis}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Tevdi Yazısı/Suç Duyurusunun Konusu</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.suc_duyurusu_konusu || ''}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçla İlgili Kanun Maddesi</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.suc_kanun_maddesi || ''}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçun İşlendiği Tarih</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${sucTarihi}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Suçun İşlendiği Yer</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.suc_yeri || ''}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Hakkında Duyuru Yapılanların<br>Adı ve Soyadı, Kimlik Numarası<br>Görevi/İşi ve Adresi</td>
                                <td style="border: 1px solid #000; padding: 5px; white-space: pre-line;"><strong>${data.duyuru_yapilanlar || ''}</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">Bu Konuda Başka Rapor Düzenlenmiş ise<br>Tarih ve Sayısı</td>
                                <td style="border: 1px solid #000; padding: 5px;"><strong>${data.baska_rapor || ''}</strong></td>
                            </tr>
                        </table>

                        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">15.5</div>
                    </td>
                </tr>
            </table>
        </div>
    `;
}

function createPDFContent155(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const olurTarih = formatDate(data.olur_tarih);
    const gorevTarih = formatDate(data.gorev_tarih);
    const fiilBaslangic = formatDate(data.fiil_baslangic_tarihi);
    const fiilBitis = formatDate(data.fiil_bitis_tarihi);
    const sucTarihi = formatDate(data.suc_tarihi);

    container.innerHTML = `
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
    `;

    return container;
}

// =====================================================
// Template 15.6 - 4483 sayılı Kanuna Göre Yetkili Mercie Yapılacak Tevdi Yazısı/Raporu
// =====================================================

function renderTemplate156(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const sucTarihi = formatDate(data.suc_tarihi);

    // Helper function for displaying data with fallback
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 11pt; line-height: 1.5; padding: 20px;">
            <div style="text-align: center; text-decoration: underline; font-weight: bold; margin-bottom: 15px;">ÖZEL</div>
            
            <div style="text-align: center; margin-bottom: 15px;">
                <div>T.C.</div>
                <div style="font-weight: bold;">MİLLÎ EĞİTİM BAKANLIĞI</div>
                <div>Teftiş Kurulu</div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                <div>
                    <div>Sayı : ${v(data.sayi, '…./..,…')}</div>
                    <div>Konu : ${v(data.konu, 'Tevdi Yazısı')}</div>
                </div>
                <div style="text-align: right;">${v(tarih)}</div>
            </div>

            <div style="text-align: center; font-weight: bold; margin-bottom: 20px;">
                ${v(data.yetkili_merci, '(TEVDİ YAZISININ SUNULDUĞU YETKİLİ MERCİİN UNVANI)')}
            </div>

            <p style="font-weight: bold; margin-bottom: 10px;">I. GİRİŞ:</p>
            <p style="text-align: justify; margin-bottom: 15px; text-indent: 40px; font-style: italic;">
                (Bu bölümde; denetim ve/veya inceleme-soruşturma çalışmalarının yürütülmesine esas olur ve görev emirlerinin tarih ve sayıları, çalışmaların hangi kurumda/kuruluşta ve hangi tarihlerde yapıldığı, çalışmaların seyri, düzenlenen raporlar ve varsa başka mercilere yapılan diğer duyurular hakkında genel açıklamalar yapılarak, suç duyurusu yapılması gerekçesi ve dayanağı kısaca belirtilir.)
            </p>
            <p style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                ${v(data.gorev_emirleri, '…./.., ... tarihli ve ….. sayılı')} görev emri gereğince ${v(data.calisma_kurumu, '….. ….. …..')} kurumunda/kuruluşunda ${v(data.calisma_tarihleri, '….. - …..')} tarihleri arasında yürütülen denetim/inceleme/soruşturma çalışmaları kapsamında;
            </p>
            <p style="text-align: justify; margin-bottom: 10px; text-indent: 40px;">
                ${v(data.calisma_seyri, 'Çalışmalar sürecinde yapılan incelemeler sonucunda tespit edilen hususlar değerlendirilmiştir.')}
            </p>
            ${data.duzenlenen_raporlar ? `<p style="text-align: justify; margin-bottom: 10px; text-indent: 40px;">Düzenlenen raporlar: ${v(data.duzenlenen_raporlar)}</p>` : ''}
            ${data.baska_mercilere_duyurular ? `<p style="text-align: justify; margin-bottom: 10px; text-indent: 40px;">Başka mercilere yapılan duyurular: ${v(data.baska_mercilere_duyurular)}</p>` : ''}
            <p style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                ${v(data.fiil_duyurusu_gerekcesi, 'Yukarıda açıklanan süreç kapsamında elde edilen bilgi ve belgeler ışığında fiil duyurusunda bulunulması gerektiği sonucuna ulaşılmıştır.')}
            </p>

            <p style="font-weight: bold; margin-bottom: 10px;">II. FİİL DUYURUSUNUN KONUSU:</p>
            <table style="margin-bottom: 15px; width: 100%;">
                <tr>
                    <td style="width: 200px;"><strong>Suçun Konusu</strong></td>
                    <td style="width: 15px;">:</td>
                    <td><strong style="white-space: pre-wrap;">${data.suc_konusu || '….. ….. …..'}</strong></td>
                </tr>
                <tr>
                    <td style="vertical-align: top;"><strong>Fail (Adı Soyadı, TC, Görevi, Adresi)</strong></td>
                    <td style="vertical-align: top;">:</td>
                    <td><strong style="white-space: pre-wrap;">${data.suc_faili || '….. …..'}</strong></td>
                </tr>
                <tr>
                    <td><strong>Suçun İşlendiği Yer</strong></td>
                    <td>:</td>
                    <td>${v(data.suc_yeri)}</td>
                </tr>
                <tr>
                    <td><strong>Suçun İşlendiği Tarih</strong></td>
                    <td>:</td>
                    <td>${v(sucTarihi)}</td>
                </tr>
                ${data.muhbir_sikayetci ? `
                <tr>
                    <td style="vertical-align: top;"><strong>Muhbir/Müşteki</strong></td>
                    <td style="vertical-align: top;">:</td>
                    <td><strong style="white-space: pre-wrap;">${data.muhbir_sikayetci}</strong></td>
                </tr>
                ` : ''}
            </table>

            <p style="font-weight: bold; margin-bottom: 10px;">III. FİİL DUYURUSU ÖNCESİ SÜREÇTE YAPILAN ÇALIŞMALAR:</p>
            <p style="text-align: justify; margin-bottom: 10px; text-indent: 40px;">
                ${v(data.yurutulen_calismalar, 'Denetim, inceleme-soruşturma sürecinde yürütülen çalışmalar ….. ….. ….. …..')}
            </p>
            <p style="text-align: justify; margin-bottom: 10px; text-indent: 40px;">
                Disiplin hukuku yönünden yapılan işlemler: ${v(data.disiplin_islemleri, '….. ….. ….. …..')}
            </p>
            <p style="text-align: justify; margin-bottom: 10px; text-indent: 40px;">
                Elde edilen delil ve emareler: ${v(data.delil_ve_emareler, '….. ….. ….. …..')}
            </p>
            <p style="text-align: justify; margin-bottom: 10px; text-indent: 40px;">
                ${v(data.on_irdeleme, 'Elde edilen bilgi ve belgeler ilgili mevzuat dahilinde irdelenerek değerlendirilmiştir.')}
            </p>
            <p style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                ${v(data.gorev_kanaat, 'Yukarıda açıklanan hususlar dikkate alınarak fiil duyurusu yapılması sonucuna ulaşılmıştır.')}
            </p>

            <p style="font-weight: bold; margin-bottom: 10px;">IV. SONUÇ VE TEKLİF:</p>
            <p style="text-align: justify; margin-bottom: 10px; text-indent: 40px;">
                ${v(data.sonuc_gorus, 'Önceki bölümde yapılan açıklamalar sonucunda oluşan görüş ve kanaat ile ulaşılan sonuç belirtilerek;')}
            </p>
            <p style="text-align: justify; margin-bottom: 15px; text-indent: 40px;">
                ${v(data.on_inceleme_teklifi, '4483 sayılı Kanuna göre "ön inceleme" yaptırılması gerektiği teklif olunur.')}
            </p>

            <div style="display: flex; justify-content: space-between; margin-top: 40px;">
                <div style="text-align: center; width: 45%;">
                    <div>İmza</div>
                    <div style="margin-top: 30px;">${v(data.mufettis1_ad_soyad, 'Adı-SOYADI')}</div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
                <div style="text-align: center; width: 45%;">
                    <div>İmza</div>
                    <div style="margin-top: 30px;">${v(data.mufettis2_ad_soyad, 'Adı-SOYADI')}</div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
            </div>

            <div style="margin-top: 30px;">
                <strong>Ek:</strong> Dizi Pusulasına Bağlı İşlemli Dosya (${data.ek_sayfa || '…'} Sayfa/${data.ek_adet || '…'} Adet)
            </div>

            <div style="margin-top: 20px; font-size: 9pt; border-top: 1px solid #ccc; padding-top: 10px;">
                <strong>Açıklamalar:</strong><br>
                <span style="font-style: italic;">(*) Hakkında "ön inceleme" yapılması gerektiği ifade edilen görevlilerin (disiplin yönünden alınan ifadeleri hariç) 4483 sayılı Kanuna göre ifadelerinin alınmasına dikkat edilmelidir.</span>
            </div>

            <div style="margin-top: 20px; font-size: 9pt; text-align: right; color: #666;">15.6</div>
        </div>
    `;
}

function createPDFContent156(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.4; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10px;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);
    const sucTarihi = formatDate(data.suc_tarihi);

    // Helper function for displaying data with fallback
    const v = (val, fallback = '…..') => `<strong>${val || fallback}</strong>`;

    container.innerHTML = `
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
    `;

    return container;
}

// =====================================================
// Template 16.1 - Dizi Pusulası
// =====================================================

function renderTemplate161_dizi(data) {
    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);

    // Helper function for displaying data with fallback
    const v = (val, fallback = '….. …..') => `<strong>${val || fallback}</strong>`;

    // Ek listesi oluşturma
    let ekListesiHtml = '';
    if (data.ek_listesi && data.ek_listesi.length > 0) {
        data.ek_listesi.forEach((ek, idx) => {
            ekListesiHtml += `
                <tr>
                    <td style="border: 1px solid #000; padding: 5px; text-align: center;">${idx + 1}</td>
                    <td style="border: 1px solid #000; padding: 5px; text-align: center;">${ek.parca_sayisi || ''}</td>
                    <td style="border: 1px solid #000; padding: 5px;">${ek.aciklama || ''}</td>
                </tr>
            `;
        });
    } else {
        // Örnek satırlar
        for (let i = 1; i <= 12; i++) {
            ekListesiHtml += `
                <tr>
                    <td style="border: 1px solid #000; padding: 5px; text-align: center;">${i}</td>
                    <td style="border: 1px solid #000; padding: 5px; text-align: center;">…</td>
                    <td style="border: 1px solid #000; padding: 5px;">….. ….. …..</td>
                </tr>
            `;
        }
    }

    return `
        <div style="font-family: 'Times New Roman', Times, serif; font-size: 11pt; line-height: 1.5; padding: 20px;">
            <div style="text-align: center; margin-bottom: 20px;">
                <p style="font-weight: bold;">
                    ${v(data.kurum_adi, '….. ….. LİSESİ')} ${v(data.ilgililer, 'MÜDÜRÜ ….. ….., ÖĞRETMEN ….. ….. ve MEMUR ….. …..')} HAKKINDA DÜZENLENEN ${v(data.rapor_turu, 'İNCELEME/SORUŞTURMA RAPORU')}NA AİT DİZİ PUSULASIDIR
                </p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #000; padding: 8px; text-align: center; width: 60px;">Sıra<br>No</th>
                        <th style="border: 1px solid #000; padding: 8px; text-align: center; width: 80px;">Parça<br>Sayısı</th>
                        <th style="border: 1px solid #000; padding: 8px;">Ekin Kime ve Neye Ait Olduğu</th>
                    </tr>
                </thead>
                <tbody>
                    ${ekListesiHtml}
                    <tr>
                        <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">${data.toplam_ek || '…'}</td>
                        <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">${data.toplam_sayfa || '…'}</td>
                        <td style="border: 1px solid #000; padding: 5px; font-weight: bold;">-TOPLAM-</td>
                    </tr>
                </tbody>
            </table>

            <p style="text-align: center; margin-bottom: 30px;">
                <strong>(${data.toplam_ek || '…'})</strong> ${data.toplam_yazi || '….. ek, ….. sayfadan (parçadan)'} ibarettir. <strong>${tarih}</strong>
            </p>

            <div style="display: flex; justify-content: space-between; margin-top: 40px;">
                <div style="text-align: center; width: 45%;">
                    <div>İmza</div>
                    <div style="margin-top: 30px;">${v(data.mufettis1_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis1_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
                <div style="text-align: center; width: 45%;">
                    <div>İmza</div>
                    <div style="margin-top: 30px;">${v(data.mufettis2_ad_soyad, 'Adı SOYADI')}</div>
                    <div>(${data.mufettis2_kod || 'KOD'})</div>
                    <div>Bakanlık Müfettişi</div>
                </div>
            </div>

            <div style="margin-top: 30px; font-size: 9pt; text-align: right; color: #666;">16.1</div>
        </div>
    `;
}

function createPDFContent161_dizi(data) {
    const container = document.createElement('div');
    container.style.cssText = 'font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.3; color: #000; background: #fff; width: 170mm; max-width: 100%; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin: 0 auto; padding: 10px;';

    if (!data) data = {};

    const formatDate = (dateStr) => {
        if (!dateStr) return 'gg.aa.yyyy';
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const tarih = formatDate(data.tarih);

    // Helper function for displaying data with fallback
    const v = (val, fallback = '….. …..') => `<strong>${val || fallback}</strong>`;

    // Ek listesi oluşturma
    let ekListesiHtml = '';
    if (data.ek_listesi && data.ek_listesi.length > 0) {
        data.ek_listesi.forEach((ek, idx) => {
            ekListesiHtml += `
                <tr>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center;">${idx + 1}</td>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center;">${ek.parca_sayisi || ''}</td>
                    <td style="border: 1px solid #000; padding: 4px; font-size: 9pt;">${ek.aciklama || ''}</td>
                </tr>
            `;
        });
    } else {
        // Örnek satırlar
        for (let i = 1; i <= 12; i++) {
            ekListesiHtml += `
                <tr>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center;">${i}</td>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center;">…</td>
                    <td style="border: 1px solid #000; padding: 4px; font-size: 9pt;">….. ….. …..</td>
                </tr>
            `;
        }
    }

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 15px;">
            <p style="font-weight: bold; font-size: 10pt;">
                ${v(data.kurum_adi, '….. ….. LİSESİ')} ${v(data.ilgililer, 'MÜDÜRÜ ….. ….., ÖĞRETMEN ….. ….. ve MEMUR ….. …..')} HAKKINDA DÜZENLENEN ${v(data.rapor_turu, 'İNCELEME/SORUŞTURMA RAPORU')}NA AİT DİZİ PUSULASIDIR
            </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 9pt;">
            <thead>
                <tr>
                    <th style="border: 1px solid #000; padding: 6px; text-align: center; width: 50px;">Sıra<br>No</th>
                    <th style="border: 1px solid #000; padding: 6px; text-align: center; width: 60px;">Parça<br>Sayısı</th>
                    <th style="border: 1px solid #000; padding: 6px;">Ekin Kime ve Neye Ait Olduğu</th>
                </tr>
            </thead>
            <tbody>
                ${ekListesiHtml}
                <tr>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">${data.toplam_ek || '…'}</td>
                    <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">${data.toplam_sayfa || '…'}</td>
                    <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">-TOPLAM-</td>
                </tr>
            </tbody>
        </table>

        <p style="text-align: center; margin-bottom: 20px; font-size: 9pt;">
            <strong>(${data.toplam_ek || '…'})</strong> ${data.toplam_yazi || '….. ek, ….. sayfadan (parçadan)'} ibarettir. <strong>${tarih}</strong>
        </p>

        <table style="width: 100%; margin-top: 25px;">
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

        <div style="margin-top: 15px; font-size: 8pt; text-align: right; color: #666;">16.1</div>
    `;

    return container;
}

// Dizi Pusulası için ek satırı ekleme fonksiyonu
let diziEkItems = [];
let diziEkCounter = 0;

function addDiziEkItem() {
    diziEkCounter++;
    const newItem = {
        id: diziEkCounter,
        parca_sayisi: '',
        aciklama: ''
    };
    diziEkItems.push(newItem);
    renderDiziEkItems();
    triggerPreviewUpdate();
}

function removeDiziEkItem(id) {
    diziEkItems = diziEkItems.filter(item => item.id !== id);
    renderDiziEkItems();
    triggerPreviewUpdate();
}

function updateDiziEkItem(id, field, value) {
    const item = diziEkItems.find(i => i.id === id);
    if (item) {
        item[field] = value;
        triggerPreviewUpdate();
    }
}

function renderDiziEkItems() {
    const container = document.getElementById('diziEkContainer');
    if (!container) return;

    if (diziEkItems.length === 0) {
        container.innerHTML = '<p style="color: #666; font-style: italic;">Henüz ek eklenmedi. Aşağıdaki butona tıklayarak ek ekleyebilirsiniz.</p>';
        return;
    }

    container.innerHTML = diziEkItems.map((item, idx) => `
        <div class="dizi-ek-item" style="display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px; padding: 12px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef;">
            <div style="display: flex; flex-direction: column; align-items: center; min-width: 50px;">
                <span style="font-weight: bold; color: #495057;">${idx + 1}.</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; width: 80px;">
                <label style="font-size: 11px; color: #6c757d;">Parça Sayısı</label>
                <input type="number" value="${item.parca_sayisi}" oninput="updateDiziEkItem(${item.id}, 'parca_sayisi', this.value)" placeholder="1" style="width: 60px; padding: 8px; border: 1px solid #ced4da; border-radius: 4px; text-align: center;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
                <label style="font-size: 11px; color: #6c757d;">Ekin Kime ve Neye Ait Olduğu</label>
                <textarea oninput="updateDiziEkItem(${item.id}, 'aciklama', this.value)" placeholder="Örn: Teftiş Kurulu Başkanlığının gg.aa.yyyy tarihli ve ..... sayılı görev emri" style="width: 100%; padding: 8px; border: 1px solid #ced4da; border-radius: 4px; resize: vertical; min-height: 40px; font-family: inherit;">${item.aciklama || ''}</textarea>
            </div>
            <button type="button" onclick="removeDiziEkItem(${item.id})" style="padding: 8px 12px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; align-self: center;" title="Bu eki sil">🗑️</button>
        </div>
    `).join('');
}

function getDiziEkData() {
    return diziEkItems.map((item, idx) => ({
        parca_sayisi: item.parca_sayisi,
        aciklama: item.aciklama
    }));
}
