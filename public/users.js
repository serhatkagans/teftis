/**
 * Kullanıcı Yönetimi - yalnızca yönetici (role: 'admin') görür.
 * Sunucu da her istekte yetkiyi denetler; buradaki gizleme yalnızca arayüz içindir.
 */

const USER_ROLE_LABELS = { admin: 'Yönetici', mufettis: 'Müfettiş' };

function isAdminUser() {
    const user = AuthService.getCurrentUser();
    return !!user && user.role === 'admin';
}

async function usersApi(method, body) {
    const response = await fetch('api/users', {
        method,
        headers: { 'Content-Type': 'application/json', ...AuthService.getAuthHeaders() },
        body: body ? JSON.stringify(body) : undefined
    });
    if (response.status === 401) {
        AuthService.logout();
        throw new Error('Oturumun süresi doldu');
    }
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'İşlem başarısız');
    return data;
}

function formatUserDate(value) {
    if (!value) return '—';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '—';
    return date.toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' });
}

async function renderUsersPage() {
    const mainContent = document.getElementById('mainContent');

    if (!isAdminUser()) {
        mainContent.innerHTML = `
            <div class="placeholder-page">
                <div class="placeholder-content">
                    <div class="placeholder-icon">🔒</div>
                    <h1>Yetkiniz Yok</h1>
                    <p class="placeholder-message">Kullanıcı yönetimi yalnızca yöneticilere açıktır.</p>
                </div>
            </div>
        `;
        return;
    }

    mainContent.innerHTML = `
        <div class="documents-list-page users-page">
            <h1>👥 Kullanıcılar <span id="usersTotal"></span></h1>

            <section class="users-add-card">
                <h2>Yeni Kullanıcı Ekle</h2>
                <div class="login-error" id="userFormError"></div>
                <form id="userForm" class="users-form" autocomplete="off" ${uiAction('submit', 'handleAddUser', '$event')}>
                    <div class="form-group">
                        <label for="newUserName">Ad Soyad *</label>
                        <input type="text" id="newUserName" required maxlength="100">
                    </div>
                    <div class="form-group">
                        <label for="newUserUsername">Kullanıcı Adı *</label>
                        <input type="text" id="newUserUsername" required minlength="3" maxlength="32"
                               pattern="[a-zA-Z0-9._\\-]+" title="Harf, rakam, nokta, tire ve alt çizgi" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="newUserEmail">E-posta</label>
                        <input type="email" id="newUserEmail" placeholder="ornek@meb.gov.tr">
                    </div>
                    <div class="form-group">
                        <label for="newUserPassword">Geçici Şifre * <small>(en az 8 karakter)</small></label>
                        <input type="password" id="newUserPassword" required minlength="8" autocomplete="new-password">
                    </div>
                    <div class="form-group">
                        <label for="newUserRole">Rol</label>
                        <select id="newUserRole">
                            <option value="mufettis">Müfettiş</option>
                            <option value="admin">Yönetici</option>
                        </select>
                    </div>
                    <div class="form-group users-form-actions">
                        <button type="submit" class="btn btn-primary" id="userFormSubmit">➕ Kullanıcı Ekle</button>
                    </div>
                </form>
            </section>

            <div id="usersResults">
                <div class="loading-page">
                    <div class="loading-spinner"></div>
                    <p>Kullanıcılar yükleniyor...</p>
                </div>
            </div>
        </div>
    `;

    await loadUsersList();
}

async function loadUsersList() {
    const results = document.getElementById('usersResults');
    if (!results) return;

    let users;
    try {
        users = await usersApi('GET');
    } catch (error) {
        results.innerHTML = `<div class="empty-state"><p>${escapeHtml(error.message)}</p></div>`;
        return;
    }

    document.getElementById('usersTotal').textContent = `(${users.length})`;
    const currentUser = AuthService.getCurrentUser();

    results.innerHTML = `
        <table class="documents-table users-table">
            <thead>
                <tr>
                    <th>Ad Soyad</th>
                    <th>Kullanıcı Adı</th>
                    <th>E-posta</th>
                    <th>Rol</th>
                    <th>Belge</th>
                    <th>Son Giriş</th>
                    <th>Eklenme</th>
                </tr>
            </thead>
            <tbody>
                ${users.map(u => `
                    <tr>
                        <td>${escapeHtml(u.name || '')}${currentUser && u.id === currentUser.id ? ' <small>(siz)</small>' : ''}</td>
                        <td>${escapeHtml(u.username || '')}</td>
                        <td>${escapeHtml(u.email || '—')}</td>
                        <td><span class="role-badge role-${u.role === 'admin' ? 'admin' : 'mufettis'}">${escapeHtml(USER_ROLE_LABELS[u.role] || u.role || '')}</span></td>
                        <td>${Number(u.document_count) || 0}</td>
                        <td>${escapeHtml(formatUserDate(u.last_login))}</td>
                        <td>${escapeHtml(formatUserDate(u.created_at))}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

async function handleAddUser(event) {
    event.preventDefault();

    const errorDiv = document.getElementById('userFormError');
    const submitBtn = document.getElementById('userFormSubmit');
    errorDiv.classList.remove('visible');
    errorDiv.textContent = '';

    const body = {
        name: document.getElementById('newUserName').value.trim(),
        username: document.getElementById('newUserUsername').value.trim(),
        email: document.getElementById('newUserEmail').value.trim(),
        password: document.getElementById('newUserPassword').value,
        role: document.getElementById('newUserRole').value
    };

    submitBtn.disabled = true;
    try {
        const created = await usersApi('POST', body);
        document.getElementById('userForm').reset();
        showToast(`${created.name} (${created.username}) eklendi`, 'success');
        await loadUsersList();
    } catch (error) {
        errorDiv.textContent = error.message;
        errorDiv.classList.add('visible');
    } finally {
        submitBtn.disabled = false;
    }
}
