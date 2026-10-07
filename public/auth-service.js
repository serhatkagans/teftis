/**
 * AuthService - Kullanıcı Kimlik Doğrulama Servisi
 * 
 * Kullanıcı girişi, kayıt ve oturum yönetimi.
 * İleride SSO entegrasyonuna hazır modüler yapı.
 */

const AuthService = {
    // =====================================================
    // Configuration
    // =====================================================

    apiBaseUrl: 'api/auth',
    tokenKey: 'auth_token',
    userKey: 'auth_user',

    // Auth provider: 'local' veya 'sso' (ileride)
    authProvider: 'local',

    // =====================================================
    // Public API Methods
    // =====================================================

    /**
     * Kullanıcı kaydı
     */
    async register(username, password, name, email = null) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, name, email })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Kayıt başarısız');
            }

            // Token ve kullanıcı bilgisini kaydet
            this._saveSession(data.token, data.user);

            return { success: true, user: data.user };
        } catch (error) {
            console.error('Register error:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Kullanıcı girişi
     */
    async login(username, password) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Giriş başarısız');
            }

            // Token ve kullanıcı bilgisini kaydet
            this._saveSession(data.token, data.user);

            return { success: true, user: data.user };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Oturum süresini uzat
     */
    async extendSession() {
        const token = this.getToken();
        if (!token) return { success: false, error: 'Oturum yok' };

        try {
            const response = await fetch(`${this.apiBaseUrl}/extend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Uzatma başarısız');
            }

            // Yeni token'ı kaydet
            this._saveSession(data.token, data.user);
            return { success: true };
        } catch (error) {
            console.error('Extend error:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Çıkış yap
     */
    logout() {
        // Çıkışın sunucuda kayda geçmesi için; sonucu beklenmez
        const token = this.getToken();
        if (token) {
            fetch(`${this.apiBaseUrl}/logout`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                keepalive: true
            }).catch(() => { /* yoksay */ });
        }

        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);

        // Ana sayfaya yönlendir
        window.location.hash = '#/login';
    },

    /**
     * Mevcut kullanıcıyı getir
     */
    getCurrentUser() {
        const userStr = localStorage.getItem(this.userKey);
        return userStr ? JSON.parse(userStr) : null;
    },

    /**
     * Token'ı getir
     */
    getToken() {
        return localStorage.getItem(this.tokenKey);
    },

    /**
     * Giriş yapılmış mı? (Token süresi kontrolü dahil)
     */
    isLoggedIn() {
        const token = this.getToken();
        const user = this.getCurrentUser();

        // Token veya kullanıcı yoksa giriş yapmamış
        if (!token || !user) {
            return false;
        }

        // Token süresini kontrol et
        try {
            const payload = this._decodePayload(token);
            const expiration = payload.exp * 1000; // milliseconds

            if (Date.now() >= expiration) {
                // Token süresi dolmuş, oturumu temizle
                console.log('Token expired, logging out...');
                localStorage.removeItem(this.tokenKey);
                localStorage.removeItem(this.userKey);
                return false;
            }

            return true;
        } catch (e) {
            // Token parse edilemezse geçersiz
            console.error('Token parse error:', e);
            localStorage.removeItem(this.tokenKey);
            localStorage.removeItem(this.userKey);
            return false;
        }
    },

    /**
     * Token'ı API header'larına ekle
     */
    getAuthHeaders() {
        const token = this.getToken();
        return token ? { 'Authorization': `Bearer ${token}` } : {};
    },

    /**
     * Token geçerliliğini kontrol et (sunucu ile)
     */
    async validateToken() {
        const token = this.getToken();
        if (!token) return false;

        try {
            const response = await fetch(`${this.apiBaseUrl}/me`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) {
                this.logout();
                return false;
            }

            const data = await response.json();
            // Kullanıcı bilgilerini güncelle
            localStorage.setItem(this.userKey, JSON.stringify(data.user));
            return true;
        } catch (error) {
            console.error('Token validation error:', error);
            return false;
        }
    },

    /**
     * Token süresinin bitiş zamanını al (Unix timestamp)
     */
    getExpiration() {
        const token = this.getToken();
        if (!token) return null;

        try {
            return this._decodePayload(token).exp * 1000; // MS'ye çevir
        } catch (e) {
            console.error('Token parse failed:', e);
            return null;
        }
    },

    /**
     * Kalan süreyi al (ms cinsinden)
     */
    getRemainingTime() {
        const exp = this.getExpiration();
        if (!exp) return 0;
        return Math.max(0, exp - Date.now());
    },

    // =====================================================
    // Private Methods
    // =====================================================

    // JWT gövdesi base64url (- ve _ içerebilir) ve UTF-8'dir; atob doğrudan çözemez.
    // Adında Türkçe harf olan kullanıcıların oturumu bu yüzden hemen düşüyordu.
    _decodePayload(token) {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const padded = base64 + '='.repeat((4 - base64.length % 4) % 4);
        const bytes = Uint8Array.from(atob(padded), c => c.charCodeAt(0));
        return JSON.parse(new TextDecoder().decode(bytes));
    },

    _saveSession(token, user) {
        localStorage.setItem(this.tokenKey, token);
        localStorage.setItem(this.userKey, JSON.stringify(user));
    }
};

// Global erişim için
window.AuthService = AuthService;
