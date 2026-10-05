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
            const payload = JSON.parse(atob(token.split('.')[1]));
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
            const payload = JSON.parse(atob(token.split('.')[1]));
            console.log('DEBUG TOKEN:');
            console.log('Payload:', payload);
            console.log('Exp (sec):', payload.exp);
            console.log('Exp (ms):', payload.exp * 1000);
            console.log('Now (ms):', Date.now());
            console.log('Diff (ms):', (payload.exp * 1000) - Date.now());
            return payload.exp * 1000; // MS'ye çevir
        } catch (e) {
            // Browser environment fallback for atob issues with unicode
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                const payload = JSON.parse(jsonPayload);
                return payload.exp * 1000;
            } catch (err) {
                console.error('Token parse failed:', err);
                return null;
            }
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

    _saveSession(token, user) {
        localStorage.setItem(this.tokenKey, token);
        localStorage.setItem(this.userKey, JSON.stringify(user));
    }
};

// Global erişim için
window.AuthService = AuthService;
