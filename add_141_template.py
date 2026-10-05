# -*- coding: utf-8 -*-
# Script to add Template 14.1 (Ön İnceleme Raporu Kapağı) to app.js

with open(r'c:\Users\HP\Desktop\teftiş\app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Template 14.1 definition - similar to 11.1/13.1 cover pages
template_141_definition = """
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
                    { id: 'fiil_tarihi', label: 'Fiilin İşlendiği Tarih', type: 'text', placeholder: '….. …..', width: 'full' },
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
                    { id: 'hakkinda_inceleme_yapilanlar', label: 'Haklarında Ön İnceleme Yapılanlarla İlgili Açıklamalar', type: 'textarea', placeholder: 'Adı Soyadı / Görevi / İsnat Edilen Fiil / Getirilen Teklif\\n\\nÖrnek:\\n….. ….. / ….. Müdürü / ….. / Soruşturma izni verilmesi', width: 'full', rows: 6 }
                ]
            }
        ]
    },"""

# Find the end of Template 13.2 and insert 14.1 after it
# Look for the pattern after 13.2 definition ends
search_pattern = "'13.2': {"
idx_132 = content.find(search_pattern)

if idx_132 == -1:
    print("ERROR: Template 13.2 not found")
else:
    # Find the end of 13.2 sections - we need to find the closing } for 13.2
    # Look for the next template definition or end of TEMPLATES
    next_template = content.find("'14.1':", idx_132)
    if next_template == -1:
        # 14.1 doesn't exist, find where TEMPLATES ends
        # Look for the closing of 13.2
        # We can find }; after 13.2's sections
        bracket_count = 0
        in_template = False
        idx_end = idx_132
        for i in range(idx_132, len(content)):
            if content[i] == '{':
                bracket_count += 1
                in_template = True
            elif content[i] == '}':
                bracket_count -= 1
                if in_template and bracket_count == 0:
                    idx_end = i + 1
                    break
        
        # Find the comma after the closing brace or the }; ending
        if idx_end > idx_132:
            # Check if there's a comma after
            temp_idx = idx_end
            while temp_idx < len(content) and content[temp_idx] in ' \t\r\n':
                temp_idx += 1
            
            if temp_idx < len(content) and content[temp_idx] == ',':
                idx_end = temp_idx + 1
            
            # Insert after the comma
            content = content[:idx_end] + template_141_definition + content[idx_end:]
            
            with open(r'c:\Users\HP\Desktop\teftiş\app.js', 'w', encoding='utf-8') as f:
                f.write(content)
            
            print("SUCCESS: Template 14.1 definition added!")
        else:
            print("ERROR: Could not find end of Template 13.2")
    else:
        print("Template 14.1 already exists in app.js")
