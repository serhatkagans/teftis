/**
 * DataService - Veri Yönetim Katmanı
 * 
 * Bu servis API modunda çalışıyor.
 * Veriler PostgreSQL veritabanında saklanır.
 * 
 * API Yapısı:
 * - save(document) → { id }
 * - update(id, document) → { success }
 * - getById(id) → document
 * - getAll(filters) → documents[]
 * - delete(id) → { success }
 */

const DataService = {
    // =====================================================
    // Configuration
    // =====================================================

    // Set to 'localStorage' or 'api'
    mode: 'api',

    // API Base URL
    apiBaseUrl: 'api',

    // Storage key for localStorage (fallback)
    storageKey: 'documents',

    // =====================================================
    // Public API Methods
    // =====================================================

    /**
     * Save a new document
     * @param {Object} documentData 
     * @returns {Promise<{id: string}>}
     */
    async save(documentData) {
        const document = {
            id: this._generateId(),
            template_code: documentData.template_code,
            template_name: documentData.template_name,
            category: documentData.category,
            person_name: documentData.person_name || null,
            event_date: documentData.event_date || null,
            created_by: documentData.created_by || 'user',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            form_data: documentData.form_data,
            pdf_url: null
        };

        if (this.mode === 'localStorage') {
            return this._localSave(document);
        } else {
            return this._apiSave(document);
        }
    },

    /**
     * Update an existing document
     * @param {string} id 
     * @param {Object} documentData 
     * @returns {Promise<{success: boolean}>}
     */
    async update(id, documentData) {
        const updateData = {
            ...documentData,
            updated_at: new Date().toISOString()
        };

        // Recalculate person_name and event_date if form_data changed
        if (documentData.form_data) {
            updateData.person_name = this._extractPersonName(documentData.form_data);
            updateData.event_date = this._extractEventDate(documentData.form_data);
        }

        if (this.mode === 'localStorage') {
            return this._localUpdate(id, updateData);
        } else {
            return this._apiUpdate(id, updateData);
        }
    },

    /**
     * Get document by ID
     * @param {string} id 
     * @returns {Promise<Object|null>}
     */
    async getById(id) {
        if (this.mode === 'localStorage') {
            return this._localGetById(id);
        } else {
            return this._apiGetById(id);
        }
    },

    /**
     * Get all documents with optional filters
     * @param {Object} filters - { template_code, category, search }
     * @returns {Promise<Array>}
     */
    async getAll(filters = {}) {
        if (this.mode === 'localStorage') {
            return this._localGetAll(filters);
        } else {
            return this._apiGetAll(filters);
        }
    },

    /**
     * Get one page of documents
     * @param {Object} options - { page, limit, search, category, template_code }
     * @returns {Promise<{items: Array, total: number, page: number, limit: number, pages: number}>}
     */
    async getPage(options = {}) {
        const page = options.page || 1;
        const limit = options.limit || 20;

        if (this.mode === 'localStorage') {
            const all = await this._localGetAll(options);
            const pages = Math.max(1, Math.ceil(all.length / limit));
            return { items: all.slice((page - 1) * limit, page * limit), total: all.length, page, limit, pages };
        }

        const params = new URLSearchParams({ page, limit });
        ['search', 'category', 'template_code'].forEach(key => {
            if (options[key]) params.set(key, options[key]);
        });
        const response = await fetch(`${this.apiBaseUrl}/documents?${params}`, {
            headers: this._getAuthHeaders()
        });
        if (!response.ok) throw new Error('Belgeler yüklenemedi (HTTP ' + response.status + ')');
        return response.json();
    },

    /**
     * Get the access/change history of a document
     * @param {string} id
     * @returns {Promise<Array<{created_at: string, username: string, action: string, ip: string}>>}
     */
    async getHistory(id) {
        if (this.mode === 'localStorage') return [];
        const response = await fetch(`${this.apiBaseUrl}/documents/${encodeURIComponent(id)}/history`, {
            headers: this._getAuthHeaders()
        });
        if (!response.ok) return [];
        return response.json();
    },

    /**
     * Delete a document
     * @param {string} id
     * @returns {Promise<{success: boolean}>}
     */
    async delete(id) {
        if (this.mode === 'localStorage') {
            return this._localDelete(id);
        } else {
            return this._apiDelete(id);
        }
    },

    /**
     * Update PDF URL for a document
     * @param {string} id 
     * @param {string} pdfUrl 
     * @returns {Promise<{success: boolean}>}
     */
    async updatePdfUrl(id, pdfUrl) {
        return this.update(id, { pdf_url: pdfUrl });
    },

    // =====================================================
    // LocalStorage Implementation
    // =====================================================

    _getStorage() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    },

    _setStorage(documents) {
        localStorage.setItem(this.storageKey, JSON.stringify(documents));
    },

    _localSave(document) {
        const documents = this._getStorage();
        documents.push(document);
        this._setStorage(documents);
        return Promise.resolve({ id: document.id });
    },

    _localUpdate(id, updateData) {
        const documents = this._getStorage();
        const index = documents.findIndex(d => d.id === id);

        if (index === -1) {
            return Promise.resolve({ success: false, error: 'Document not found' });
        }

        documents[index] = { ...documents[index], ...updateData };
        this._setStorage(documents);
        return Promise.resolve({ success: true });
    },

    _localGetById(id) {
        const documents = this._getStorage();
        const document = documents.find(d => d.id === id);
        return Promise.resolve(document || null);
    },

    _localGetAll(filters) {
        let documents = this._getStorage();

        if (filters.template_code) {
            documents = documents.filter(d => d.template_code === filters.template_code);
        }

        if (filters.category) {
            documents = documents.filter(d => d.category === filters.category);
        }

        if (filters.search) {
            const search = filters.search.toLowerCase();
            documents = documents.filter(d =>
                (d.person_name && d.person_name.toLowerCase().includes(search)) ||
                d.template_name.toLowerCase().includes(search) ||
                d.template_code.toLowerCase().includes(search)
            );
        }

        // Sort by created_at descending
        documents.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        return Promise.resolve(documents);
    },

    _localDelete(id) {
        const documents = this._getStorage();
        const filtered = documents.filter(d => d.id !== id);

        if (filtered.length === documents.length) {
            return Promise.resolve({ success: false, error: 'Document not found' });
        }

        this._setStorage(filtered);
        return Promise.resolve({ success: true });
    },

    // =====================================================
    // API Implementation (for future use)
    // =====================================================

    // Get auth headers from AuthService
    _getAuthHeaders() {
        const headers = { 'Content-Type': 'application/json' };
        if (typeof AuthService !== 'undefined' && AuthService.getToken) {
            const token = AuthService.getToken();
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return headers;
    },

    // Get current user ID
    _getCurrentUserId() {
        if (typeof AuthService !== 'undefined' && AuthService.getCurrentUser) {
            const user = AuthService.getCurrentUser();
            return user ? user.id : null;
        }
        return null;
    },

    async _apiSave(document) {
        // Add user_id to document
        document.user_id = this._getCurrentUserId();

        const response = await fetch(`${this.apiBaseUrl}/documents`, {
            method: 'POST',
            headers: this._getAuthHeaders(),
            body: JSON.stringify(document)
        });
        return response.json();
    },

    async _apiUpdate(id, updateData) {
        const response = await fetch(`${this.apiBaseUrl}/documents/${encodeURIComponent(id)}`, {
            method: 'PUT',
            headers: this._getAuthHeaders(),
            body: JSON.stringify(updateData)
        });
        return response.json();
    },

    async _apiGetById(id) {
        const response = await fetch(`${this.apiBaseUrl}/documents/${encodeURIComponent(id)}`, {
            headers: this._getAuthHeaders()
        });
        if (!response.ok) return null;
        return response.json();
    },

    async _apiGetAll(filters) {
        // Add user_id filter for user-specific documents
        const userId = this._getCurrentUserId();
        if (userId) {
            filters.user_id = userId;
        }

        const params = new URLSearchParams(filters);
        const response = await fetch(`${this.apiBaseUrl}/documents?${params}`, {
            headers: this._getAuthHeaders()
        });
        // Oturum düşmüşse sunucu hata nesnesi döner; liste bekleyen ekranlar bozulmasın
        if (!response.ok) return [];
        return response.json();
    },

    async _apiDelete(id) {
        const response = await fetch(`${this.apiBaseUrl}/documents/${encodeURIComponent(id)}`, {
            method: 'DELETE',
            headers: this._getAuthHeaders()
        });
        return response.json();
    },

    // =====================================================
    // Helper Methods
    // =====================================================

    _generateId() {
        return 'doc_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Extract person name from form data
     * Looks for common field names across templates
     */
    _extractPersonName(formData) {
        const nameFields = [
            'sorusturma_konusu',  // Soruşturmaya konu kişi (priority)
            'ad_soyad',           // Generic ad soyad (Template 1.4.1 etc)
            'ifade_sahibi_ad_soyad', // Template 1.6.4
            'sikayetci_adi',
            'tanik_adi',
            'muhatap_ad_soyad',
            'sanuk_adi',
            'memur_adi'
        ];

        for (const field of nameFields) {
            if (formData[field]) {
                return formData[field];
            }
        }

        // Fuzzy search as fallback
        for (const [key, value] of Object.entries(formData)) {
            if (typeof value === 'string' && value.length > 2) {
                const lowerKey = key.toLowerCase();
                // Look for 'ad_soyad' or 'adi' but avoid 'mufettis', 'katip', 'baba', 'ana'
                if (
                    (lowerKey.includes('ad_soyad') || lowerKey.includes('_adi') || lowerKey.includes('isim')) &&
                    !lowerKey.includes('mufettis') &&
                    !lowerKey.includes('katip') &&
                    !lowerKey.includes('baba') &&
                    !lowerKey.includes('ana') &&
                    !lowerKey.includes('yer') &&
                    !lowerKey.includes('kurum') &&
                    !lowerKey.includes('tarih') &&
                    !lowerKey.includes('adres')
                ) {
                    return value;
                }
            }
        }

        return null;
    },

    /**
     * Extract event date from form data
     * Looks for common date fields across templates
     */
    _extractEventDate(formData) {
        const dateFields = [
            'tarih',
            'ifade_tarihi',
            'davet_tarihi',
            'sorusturma_tarihi'
        ];

        for (const field of dateFields) {
            if (formData[field]) {
                return formData[field];
            }
        }

        return null;
    },

    /**
     * Format date for display
     */
    formatDate(dateString) {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    /**
     * Get statistics
     */
    async getStats() {
        const documents = await this.getAll();

        const byTemplate = {};
        const byCategory = {};

        documents.forEach(doc => {
            byTemplate[doc.template_code] = (byTemplate[doc.template_code] || 0) + 1;
            byCategory[doc.category] = (byCategory[doc.category] || 0) + 1;
        });

        return {
            total: documents.length,
            byTemplate,
            byCategory,
            recent: documents.slice(0, 5)
        };
    }
};

// Export for module systems (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataService;
}
