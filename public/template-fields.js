/* =====================================================
   Şablon form alanı tanımları (şablon kodu → bölümler ve alanlar)
   ===================================================== */

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
