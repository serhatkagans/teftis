/**
 * Router - Hash-based routing for template navigation
 */

// Current route state
let currentRoute = {
    view: 'home',
    templateCode: null,
    category: null
};

// View mode: 'card' or 'list'
let viewMode = localStorage.getItem('viewMode') || 'card';

// Initialize router
document.addEventListener('DOMContentLoaded', () => {
    // Update user menu display
    updateUserMenu();

    // Handle initial route
    handleRouteChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouteChange);

    // Close user menu when clicking outside
    document.addEventListener('click', (e) => {
        const userMenu = document.getElementById('userMenu');
        const userDropdown = document.getElementById('userDropdown');
        const userMenuBtn = document.getElementById('userMenuBtn');

        if (userMenu && !userMenu.contains(e.target)) {
            if (userDropdown) userDropdown.classList.remove('show');
            if (userMenuBtn) userMenuBtn.classList.remove('active');
        }
    });
});

// User Menu Toggle
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    const btn = document.getElementById('userMenuBtn');
    if (dropdown) dropdown.classList.toggle('show');
    if (btn) btn.classList.toggle('active');
}

// Update user menu in navbar
// Update user menu in navbar
function updateUserMenu() {
    const userMenu = document.getElementById('userMenu');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userEmailDisplay = document.getElementById('userEmailDisplay');

    // Nav links
    const navHome = document.getElementById('navHome');
    const navDocuments = document.getElementById('navDocuments');

    if (AuthService && AuthService.isLoggedIn()) {
        const user = AuthService.getCurrentUser();
        if (userMenu) userMenu.style.display = 'block';
        if (userNameDisplay) userNameDisplay.textContent = user.name || user.username;
        if (userEmailDisplay) userEmailDisplay.textContent = user.email || `${user.username}@meb.gov.tr`;

        // Show nav links
        if (navHome) navHome.style.display = 'flex';
        if (navDocuments) navDocuments.style.display = 'flex';
    } else {
        if (userMenu) userMenu.style.display = 'none';

        // Hide nav links
        if (navHome) navHome.style.display = 'none';
        if (navDocuments) navDocuments.style.display = 'none';
    }
}

function handleRouteChange() {
    const hash = window.location.hash.slice(1) || ''; // Remove #
    const parts = hash.split('/').filter(p => p);

    // Always update user menu state
    updateUserMenu();

    // Check for login routes (public - no auth required)
    // Check for login routes (public - no auth required)
    // Check for login routes (public - no auth required)
    if (parts[0] === 'login' || parts[0] === 'register') {
        // Redirect to home if already logged in
        if (AuthService && AuthService.isLoggedIn()) {
            console.log('User already logged in, redirecting to home...');
            window.location.hash = '#/';
            return;
        }

        currentRoute = { view: parts[0], templateCode: null, category: null, documentId: null };
        renderLoginPage(parts[0] === 'register');
        return;
    }

    // Auth check for protected routes
    if (!AuthService || !AuthService.isLoggedIn()) {
        if (parts.length > 0 && parts[0] !== 'login') {
            // Redirect to login if trying to access protected route
            navigateTo('login');
            return;
        }
        // Allow home page for non-logged in users (will show login)
        if (parts.length === 0) {
            currentRoute = { view: 'login', templateCode: null, category: null, documentId: null };
            renderLoginPage(false);
            return;
        }
    }

    // Update user menu
    // updateUserMenu(); // Moved to top

    if (parts.length === 0) {
        // Home page
        currentRoute = { view: 'home', templateCode: null, category: null, documentId: null };
        renderHomePage();
    } else if (parts[0] === 'templates' && parts[1]) {
        // Template page: #/templates/1.1
        const templateCode = parts[1];
        const template = getTemplateByCode(templateCode);
        if (template) {
            currentRoute = { view: 'template', templateCode: templateCode, category: template.category, documentId: null };
            renderTemplatePage(template);
        } else {
            // Template not found
            currentRoute = { view: '404', templateCode: null, category: null, documentId: null };
            render404Page();
        }
    } else if (parts[0] === 'category' && parts[1]) {
        // Category view: #/category/İfade%20Tutanakları
        const category = decodeURIComponent(parts[1]);
        currentRoute = { view: 'category', templateCode: null, category: category, documentId: null };
        renderCategoryPage(category);
    } else if (parts[0] === 'documents' && !parts[1]) {
        // Documents list: #/documents
        currentRoute = { view: 'documents-list', templateCode: null, category: null, documentId: null };
        renderDocumentsListPage();
    } else if (parts[0] === 'documents' && parts[1]) {
        // Document routes
        const documentId = parts[1];
        if (parts[2] === 'edit') {
            // Edit document: #/documents/{id}/edit
            currentRoute = { view: 'document-edit', templateCode: null, category: null, documentId: documentId };
            renderDocumentEditPage(documentId);
        } else {
            // Document detail: #/documents/{id}
            currentRoute = { view: 'document', templateCode: null, category: null, documentId: documentId };
            renderDocumentDetailPage(documentId);
        }
    } else {
        renderHomePage();
    }

    updateBreadcrumb();
    updateActiveNav();
    updateSessionTimer();
}

// Session Timer Logic
let sessionTimerInterval;

function updateSessionTimer() {
    const timerElement = document.getElementById('sessionTimer');

    // Create timer element if it doesn't exist
    if (!timerElement) {
        const headerNav = document.querySelector('.header-nav');
        if (headerNav) {
            const timerDiv = document.createElement('div');
            timerDiv.id = 'sessionTimer';
            timerDiv.className = 'session-timer';
            timerDiv.style.cssText = 'color: var(--text-muted); font-size: 0.8rem; margin-right: 15px; font-variant-numeric: tabular-nums;';
            // Insert before the first child (which is usually theme selector or home link)
            headerNav.insertBefore(timerDiv, headerNav.firstChild);
        }
    }

    // Clear existing interval
    if (sessionTimerInterval) clearInterval(sessionTimerInterval);

    // Only run if logged in
    if (AuthService && AuthService.isLoggedIn()) {
        const updateDisplay = () => {
            const el = document.getElementById('sessionTimer');
            if (!el) return;

            const remaining = AuthService.getRemainingTime();
            if (remaining <= 0) {
                el.innerText = 'Süre doldu';
                el.style.color = 'var(--danger)';
                // Auto logout and redirect to login
                if (remaining < -2000) { // Buffer 2 sec
                    clearInterval(sessionTimerInterval);
                    // Kaydedilmemiş form taslak olarak saklanır; tekrar girişte geri yüklenebilir
                    flushDraftAndStop();
                    AuthService.logout();
                    window.location.hash = '#/login';
                    window.location.reload();
                }
            } else {
                const minutes = Math.floor(remaining / 60000);
                const seconds = Math.floor((remaining % 60000) / 1000);
                el.innerText = `⏳ Oturumun kapanmasına kalan süre: ${minutes}:${seconds.toString().padStart(2, '0')}`;

                // Color warning
                if (minutes < 5) el.style.color = 'var(--warning)';
                else el.style.color = 'var(--text-muted)';
            }
        };

        updateDisplay(); // Initial call
        sessionTimerInterval = setInterval(updateDisplay, 1000);

        // Show extend button if not exists
        if (!document.getElementById('extendSessionBtn')) {
            const btn = document.createElement('button');
            btn.id = 'extendSessionBtn';
            btn.className = 'btn-sm btn-outline-primary';
            btn.innerHTML = '➕ 10dk Uzat';
            btn.style.cssText = 'margin-right: 15px; font-size: 0.75rem; padding: 2px 8px; cursor: pointer; border-radius: 4px; border: 1px solid var(--accent-primary); background: transparent; color: var(--accent-primary);';
            btn.onclick = handleExtendSession;

            // Insert after timer
            const timerEl = document.getElementById('sessionTimer');
            if (timerEl) {
                timerEl.parentNode.insertBefore(btn, timerEl.nextSibling);
            }
        }

    } else {
        const el = document.getElementById('sessionTimer');
        if (el) el.innerText = '';
        const btn = document.getElementById('extendSessionBtn');
        if (btn) btn.remove();
    }
}

// Global handler for extension
window.handleExtendSession = async function () {
    const btn = document.getElementById('extendSessionBtn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '⌛ Uzatılıyor...';
    }

    const result = await AuthService.extendSession();

    if (result.success) {
        showToast('Oturum süresi uzatıldı! ✅');
        // Timer will auto-update on next tick
    } else {
        showToast('Hata: ' + result.error, 'error');
    }

    if (btn) {
        btn.disabled = false;
        btn.innerHTML = '➕ 10dk Uzat';
    }
};

function navigateTo(path) {
    window.location.hash = path ? `#/${path}` : '#/';
}

function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    const container = document.getElementById('breadcrumbContainer');

    if (currentRoute.view === 'home') {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    let html = '<a href="#" onclick="navigateTo(\'\'); return false;">🏠 Ana Sayfa</a>';

    if (currentRoute.category) {
        html += ` <span class="separator">›</span> <a href="#/category/${encodeURIComponent(currentRoute.category)}" onclick="navigateTo('category/${encodeURIComponent(currentRoute.category)}'); return false;">${currentRoute.category}</a>`;
    }

    if (currentRoute.view === 'template' && currentRoute.templateCode) {
        const template = getTemplateByCode(currentRoute.templateCode);
        if (template) {
            html += ` <span class="separator">›</span> <span class="current">${template.code} ${template.name}</span>`;
        }
    }

    breadcrumb.innerHTML = html;
}

function updateActiveNav() {
    const navHome = document.getElementById('navHome');
    if (navHome) {
        navHome.classList.toggle('active', currentRoute.view === 'home');
    }
}

// =====================================================
// Page Renderers
// =====================================================

async function renderHomePage() {
    const mainContent = document.getElementById('mainContent');

    // Yalnızca sayı ve en son belge gerekir; tüm liste çekilmez
    let savedCount = 0;
    let lastDoc = null;
    try {
        const firstPage = await DataService.getPage({ page: 1, limit: 1 });
        savedCount = firstPage.total;
        lastDoc = firstPage.items[0] || null;
    } catch (error) {
        console.error('Failed to load documents:', error);
        // Show silent toast or ignore if just loading home
        if (typeof showToast === 'function') {
            // Delay toast slightly to not interfere with transition
            setTimeout(() => showToast('Belgeler yüklenemedi: ' + error.message, 'warning'), 500);
        }
    }

    // Build compact saved documents notification bar (only if documents exist)
    let savedDocsNotification = '';
    if (savedCount > 0) {
        const lastName = lastDoc ? (lastDoc.person_name || DataService._extractPersonName(lastDoc.form_data || {})) : null;
        savedDocsNotification = `
            <div class="saved-docs-notification">
                <div class="notification-content">
                    <span class="notification-icon">📋</span>
                    <span class="notification-text">
                        <strong>${savedCount}</strong> kayıtlı belge mevcut
                        ${lastName ? ` • Son: <strong>${escapeHtml(lastName)}</strong>` : ''}
                    </span>
                </div>
                <a href="#/documents" onclick="navigateTo('documents'); return false;" class="notification-link">
                    Belgelerime Git →
                </a>
            </div>
        `;
    }

    mainContent.innerHTML = `
        <div class="library-container">
            ${savedDocsNotification}
            
            <!-- Search and Filter Bar -->
            <div class="library-toolbar">
                <div class="search-box">
                    <span class="search-icon">🔍</span>
                    <input type="text" id="searchInput" placeholder="Şablon ara (kod veya isim)..." 
                           oninput="handleSearch(this.value)">
                    <button class="clear-search" id="clearSearch" onclick="clearSearch()" style="display: none;">✕</button>
                </div>
                <div class="filter-box">
                    <label for="categoryFilter">Kategori:</label>
                    <select id="categoryFilter" onchange="handleCategoryFilter(this.value)">
                        <option value="all">Tüm Kategoriler</option>
                        ${getCategories().map(cat => `<option value="${cat}">${cat}</option>`).join('')}
                    </select>
                </div>
                <div class="view-toggle">
                    <button class="view-btn ${viewMode === 'card' ? 'active' : ''}" onclick="setViewMode('card')" title="Kart Görünümü">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="7" height="7" rx="1"/>
                            <rect x="14" y="3" width="7" height="7" rx="1"/>
                            <rect x="3" y="14" width="7" height="7" rx="1"/>
                            <rect x="14" y="14" width="7" height="7" rx="1"/>
                        </svg>
                    </button>
                    <button class="view-btn ${viewMode === 'list' ? 'active' : ''}" onclick="setViewMode('list')" title="Liste Görünümü">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="8" y1="6" x2="21" y2="6"/>
                            <line x1="8" y1="12" x2="21" y2="12"/>
                            <line x1="8" y1="18" x2="21" y2="18"/>
                            <circle cx="4" cy="6" r="1.5"/>
                            <circle cx="4" cy="12" r="1.5"/>
                            <circle cx="4" cy="18" r="1.5"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- Stats Bar -->
            <div class="library-stats">
                <span class="stat-item">
                    <strong id="templateCount">${TEMPLATE_LIBRARY.length}</strong> şablon
                </span>
                <span class="stat-item">
                    <strong>${getCategories().length}</strong> kategori
                </span>
                <span class="stat-item implemented">
                    <strong>${TEMPLATE_LIBRARY.filter(t => t.implemented).length}</strong> aktif
                </span>
                ${savedCount > 0 ? `
                    <span class="stat-item saved">
                        <strong>${savedCount}</strong> kayıtlı belge
                    </span>
                ` : ''}
            </div>
            
            <!-- Template List -->
            <div class="template-list ${viewMode === 'card' ? 'card-view' : 'list-view'}" id="templateList">
                ${renderTemplateGroups(TEMPLATE_LIBRARY)}
            </div>
        </div>
    `;
}

// Helper function for relative date formatting
function formatRelativeDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Az önce';
    if (diffMins < 60) return `${diffMins} dk önce`;
    if (diffHours < 24) return `${diffHours} saat önce`;
    if (diffDays < 7) return `${diffDays} gün önce`;

    return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function setViewMode(mode) {
    viewMode = mode;
    localStorage.setItem('viewMode', mode);

    // Update toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Update template list class
    const templateList = document.getElementById('templateList');
    if (templateList) {
        templateList.className = `template-list ${mode === 'card' ? 'card-view' : 'list-view'}`;
        // Re-render with current filters
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        let results = searchTemplates(searchInput?.value || '');
        results = filterByCategory(results, categoryFilter?.value || 'all');
        templateList.innerHTML = renderTemplateGroups(results);
    }
}

function renderTemplateGroups(templates) {
    const grouped = groupByCategory(templates);

    if (Object.keys(grouped).length === 0) {
        return `
            <div class="empty-state">
                <span class="empty-icon">📭</span>
                <h3>Şablon bulunamadı</h3>
                <p>Arama kriterlerinize uygun şablon bulunamadı.</p>
            </div>
        `;
    }

    let html = '';

    for (let i = 0; i < CATEGORY_ORDER.length; i++) {
        const category = CATEGORY_ORDER[i];
        if (!grouped[category]) continue;

        const icon = CATEGORY_ICONS[category] || '📄';
        const categoryTemplates = grouped[category];

        html += `
            <div class="category-group collapsed">
                <div class="category-header" onclick="toggleCategory(this)">
                    <span class="category-icon">${icon}</span>
                    <h2 class="category-title">${i + 1} ${category}</h2>
                    <span class="category-count">${categoryTemplates.length}</span>
                    <span class="category-toggle">▼</span>
                </div>
                <div class="category-items ${viewMode === 'card' ? 'card-grid' : ''}">
                    ${categoryTemplates.map(t => viewMode === 'card' ? renderTemplateCard(t) : renderTemplateItem(t)).join('')}
                </div>
            </div>
        `;
    }

    return html;
}

function renderTemplateItem(template) {
    const statusClass = template.implemented ? 'implemented' : 'pending';
    const statusIcon = template.implemented ? '✅' : '🔜';
    const statusText = template.implemented ? 'Hazır' : 'Yakında';

    return `
        <div class="template-item ${statusClass}" onclick="navigateTo('templates/${template.code}')">
            <div class="template-code">${template.code}</div>
            <div class="template-name">${template.name}</div>
            <div class="template-status" title="${statusText}">
                <span class="status-icon">${statusIcon}</span>
            </div>
            <div class="template-arrow">→</div>
        </div>
    `;
}

function renderTemplateCard(template) {
    const statusClass = template.implemented ? 'implemented' : 'pending';
    const statusText = template.implemented ? 'Hazır' : 'Yakında';
    const typeInfo = getTemplateType(template.type || 'diger');

    return `
        <div class="template-card ${statusClass}" onclick="navigateTo('templates/${template.code}')">
            <div class="card-thumbnail" style="--type-color: ${typeInfo.color}">
                <div class="thumbnail-icon">
                    ${typeInfo.icon}
                </div>
                <div class="thumbnail-label">${typeInfo.label}</div>
                <div class="thumbnail-subtitle">${typeInfo.subtitle}</div>
                ${template.implemented ? '<div class="card-badge">✅</div>' : ''}
            </div>
            <div class="card-content">
                <div class="card-code">${template.code}</div>
                <div class="card-name">${template.name}</div>
                <div class="card-category">
                    <span class="category-chip">${CATEGORY_ICONS[template.category] || '📄'} ${template.category}</span>
                </div>
            </div>
        </div>
    `;
}

function renderTemplatePage(template) {
    const mainContent = document.getElementById('mainContent');

    if (template.implemented) {
        // Gerçek şablon sayfasını yükle
        renderImplementedTemplate(template);
    } else {
        // Placeholder sayfası göster
        mainContent.innerHTML = `
            <div class="placeholder-page">
                <div class="placeholder-content">
                    <div class="placeholder-icon">🚧</div>
                    <h1>Yakında</h1>
                    <h2>${template.code} - ${template.name}</h2>
                    <p class="placeholder-category">
                        <span class="category-badge">${CATEGORY_ICONS[template.category] || '📄'} ${template.category}</span>
                    </p>
                    <p class="placeholder-message">
                        Bu şablon henüz eklenmedi. Kısa sürede kullanıma sunulacaktır.
                    </p>
                    <div class="placeholder-actions">
                        <button class="btn btn-secondary" onclick="history.back()">
                            <span>←</span> Geri Dön
                        </button>
                        <button class="btn btn-primary" onclick="navigateTo('')">
                            <span>🏠</span> Ana Sayfa
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

function renderImplementedTemplate(template, editDocumentId = null) {
    const mainContent = document.getElementById('mainContent');
    const isEditMode = !!editDocumentId;
    const saveButtonText = isEditMode ? 'Güncelle' : 'Kaydet';
    const saveButtonIcon = isEditMode ? '🔄' : '💾';

    // Ana form sayfası için HTML oluştur
    mainContent.innerHTML = `
        <div class="template-page">
            <!-- Form Panel -->
            <section class="panel form-panel">
                <div class="panel-header">
                    <h2>📝 Form Bilgileri</h2>
                    <div class="panel-actions">
                        <button type="button" class="btn btn-secondary btn-sm" id="clearFormBtn">
                            <span>🗑️</span> Temizle
                        </button>
                    </div>
                </div>
                
                <form id="documentForm" class="document-form">
                    <!-- Form içeriği JavaScript tarafından dinamik olarak oluşturulacak -->
                </form>
            </section>

            <!-- Preview Panel -->
            <section class="panel preview-panel">
                <div class="panel-header">
                    <h2>👁️ Canlı Önizleme</h2>
                    <div class="preview-actions">
                        <button type="button" class="btn btn-success" id="saveDocumentBtn" data-document-id="${editDocumentId || ''}">
                            <span>${saveButtonIcon}</span> ${saveButtonText}
                        </button>
                        ${template.code === '11.1' ? `
                        <button type="button" class="btn btn-info" id="generateWordBtn" title="Word belgesi olarak indir">
                            <span>📝</span> Word
                        </button>
                        ` : ''}
                        <button type="button" class="btn btn-primary" id="generatePdfBtn">
                            <span>📄</span> PDF Üret
                        </button>
                    </div>
                </div>
                <div class="preview-container">
                    <div id="previewContent" class="preview-content">
                        <!-- Önizleme içeriği buraya render edilecek -->
                    </div>
                </div>
            </section>
        </div>
    `;

    // Form ve preview'ı başlat
    initializeTemplateForm(template.code, editDocumentId);
}

function renderCategoryPage(category) {
    const mainContent = document.getElementById('mainContent');
    const templates = getTemplatesByCategory(category);
    const icon = CATEGORY_ICONS[category] || '📄';

    if (templates.length === 0) {
        render404Page();
        return;
    }

    mainContent.innerHTML = `
        <div class="category-page">
            <div class="category-page-header">
                <span class="category-page-icon">${icon}</span>
                <h1>${category}</h1>
                <p>${templates.length} şablon</p>
            </div>
            <div class="category-page-list">
                ${templates.map(t => renderTemplateItem(t)).join('')}
            </div>
            <div class="category-page-actions">
                <button class="btn btn-secondary" onclick="navigateTo('')">
                    <span>←</span> Tüm Kategoriler
                </button>
            </div>
        </div>
    `;
}

function render404Page() {
    const mainContent = document.getElementById('mainContent');

    mainContent.innerHTML = `
        <div class="placeholder-page">
            <div class="placeholder-content">
                <div class="placeholder-icon">❓</div>
                <h1>Sayfa Bulunamadı</h1>
                <p class="placeholder-message">
                    Aradığınız şablon veya sayfa bulunamadı.
                </p>
                <div class="placeholder-actions">
                    <button class="btn btn-primary" onclick="navigateTo('')">
                        <span>🏠</span> Ana Sayfa'ya Dön
                    </button>
                </div>
            </div>
        </div>
    `;
}

// =====================================================
// Login Page
// =====================================================

function renderLoginPage(showRegister = false) {
    // Failsafe: Redirect if already logged in
    if (AuthService && AuthService.isLoggedIn()) {
        window.location.hash = '#/';
        return;
    }

    const mainContent = document.getElementById('mainContent');

    mainContent.innerHTML = `
        <div class="login-container">
            <div class="login-box">
                <div class="login-header">
                    <h1>🔐 İnceleme ve Soruşturma Modülü</h1>
                    <p>Devam etmek için giriş yapın</p>
                </div>
                
                <div class="login-tabs">
                    <button class="login-tab ${!showRegister ? 'active' : ''}" onclick="switchAuthTab('login')">
                        Giriş Yap
                    </button>
                    <button class="login-tab ${showRegister ? 'active' : ''}" onclick="switchAuthTab('register')">
                        Kayıt Ol
                    </button>
                </div>
                
                <div class="login-error" id="authError"></div>
                
                <form class="login-form" id="authForm" onsubmit="handleAuthSubmit(event)">
                    <input type="hidden" id="authMode" value="${showRegister ? 'register' : 'login'}">
                    
                    <div class="form-group" id="nameGroup" style="${showRegister ? '' : 'display: none;'}">
                        <label for="authName">Ad Soyad</label>
                        <input type="text" id="authName" placeholder="Adınız Soyadınız">
                    </div>
                    
                    <div class="form-group">
                        <label for="authUsername">Kullanıcı Adı</label>
                        <input type="text" id="authUsername" placeholder="kullanici_adi" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="authPassword">Şifre</label>
                        <input type="password" id="authPassword" placeholder="••••••••" required>
                    </div>
                    
                    <div class="form-group" id="emailGroup" style="${showRegister ? '' : 'display: none;'}">
                        <label for="authEmail">E-posta (İsteğe bağlı)</label>
                        <input type="email" id="authEmail" placeholder="ornek@meb.gov.tr">
                    </div>
                    
                    <button type="submit" class="btn btn-primary" id="authSubmitBtn">
                        ${showRegister ? '📝 Kayıt Ol' : '🔓 Giriş Yap'}
                    </button>
                </form>
                
                <div class="sso-divider">veya</div>
                
                <button class="btn-sso" disabled title="Yakında eklenecek">
                    🏛️ MEBBİS ile Giriş Yap
                </button>
                
                <div class="login-footer">
                    <p>Sorun mu yaşıyorsunuz? IT desteğine başvurun.</p>
                </div>
            </div>
        </div>
    `;
}

function switchAuthTab(mode) {
    const isRegister = mode === 'register';
    const authMode = document.getElementById('authMode');
    const nameGroup = document.getElementById('nameGroup');
    const emailGroup = document.getElementById('emailGroup');
    const submitBtn = document.getElementById('authSubmitBtn');
    const tabs = document.querySelectorAll('.login-tab');
    const errorDiv = document.getElementById('authError');

    authMode.value = mode;
    nameGroup.style.display = isRegister ? 'flex' : 'none';
    emailGroup.style.display = isRegister ? 'flex' : 'none';
    submitBtn.textContent = isRegister ? '📝 Kayıt Ol' : '🔓 Giriş Yap';
    errorDiv.classList.remove('visible');
    errorDiv.textContent = '';

    tabs[0].classList.toggle('active', !isRegister);
    tabs[1].classList.toggle('active', isRegister);

    // Update URL without triggering route change
    window.history.replaceState(null, '', `#/${mode}`);
}

async function handleAuthSubmit(event) {
    event.preventDefault();

    const mode = document.getElementById('authMode').value;
    const username = document.getElementById('authUsername').value.trim();
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName').value.trim();
    const email = document.getElementById('authEmail').value.trim();
    const errorDiv = document.getElementById('authError');
    const submitBtn = document.getElementById('authSubmitBtn');

    // Clear error
    errorDiv.classList.remove('visible');
    errorDiv.textContent = '';

    // Validation
    if (!username || !password) {
        errorDiv.textContent = 'Kullanıcı adı ve şifre gerekli';
        errorDiv.classList.add('visible');
        return;
    }

    if (mode === 'register' && !name) {
        errorDiv.textContent = 'Ad Soyad gerekli';
        errorDiv.classList.add('visible');
        return;
    }

    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ İşleniyor...';

    try {
        let result;

        if (mode === 'register') {
            result = await AuthService.register(username, password, name, email || null);
        } else {
            result = await AuthService.login(username, password);
        }

        if (result.success) {
            // Update user menu and navigate to home
            updateUserMenu();

            // Fix: If we are already at root (#/), hashchange event won't fire.
            // We need to manually trigger the route handler or force the view update.
            const targetHash = '#/';
            if (window.location.hash === targetHash || window.location.hash === '') {
                window.location.hash = targetHash;
                handleRouteChange(); // Force update
            } else {
                navigateTo('');
            }
        } else {
            errorDiv.textContent = result.error || 'İşlem başarısız';
            errorDiv.classList.add('visible');
        }
    } catch (error) {
        errorDiv.textContent = 'Sunucu hatası: ' + error.message;
        errorDiv.classList.add('visible');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = mode === 'register' ? '📝 Kayıt Ol' : '🔓 Giriş Yap';
    }
}

// =====================================================
// Search and Filter Functions
// =====================================================

function handleSearch(query) {
    const clearBtn = document.getElementById('clearSearch');
    clearBtn.style.display = query ? 'block' : 'none';

    const categoryFilter = document.getElementById('categoryFilter');
    const category = categoryFilter ? categoryFilter.value : 'all';

    let results = searchTemplates(query);
    results = filterByCategory(results, category);

    updateTemplateList(results);
}

function handleCategoryFilter(category) {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput ? searchInput.value : '';

    let results = searchTemplates(query);
    results = filterByCategory(results, category);

    updateTemplateList(results);
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');

    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';

    handleSearch('');
}

function updateTemplateList(templates) {
    const templateList = document.getElementById('templateList');
    const templateCount = document.getElementById('templateCount');

    if (templateList) {
        templateList.innerHTML = renderTemplateGroups(templates);
    }

    if (templateCount) {
        templateCount.textContent = templates.length;
    }
}

function toggleCategory(header) {
    const group = header.closest('.category-group');
    group.classList.toggle('collapsed');
}

// =====================================================
// Template Form Initialization
// =====================================================

async function initializeTemplateForm(templateCode, editDocumentId = null) {
    // Mevcut app.js'deki fonksiyonları kullan
    if (typeof TEMPLATES !== 'undefined' && TEMPLATES[templateCode]) {
        state.currentTemplate = templateCode;
        state.qaItems = [];
        state.qaCounter = 0;

        // Elements'ı yeniden başlat
        elements.form = document.getElementById('documentForm');
        elements.clearFormBtn = document.getElementById('clearFormBtn');
        elements.generatePdfBtn = document.getElementById('generatePdfBtn');
        elements.previewContent = document.getElementById('previewContent');
        elements.loadingOverlay = document.getElementById('loadingOverlay');

        // Event listeners ekle
        if (elements.clearFormBtn) {
            elements.clearFormBtn.addEventListener('click', clearForm);
        }
        if (elements.generatePdfBtn) {
            elements.generatePdfBtn.addEventListener('click', generatePDF);
        }

        // Word button listener (for Template 11.1)
        const generateWordBtn = document.getElementById('generateWordBtn');
        if (generateWordBtn && typeof generateWord111 === 'function') {
            generateWordBtn.addEventListener('click', generateWord111);
        }

        // Save button listener
        const saveBtn = document.getElementById('saveDocumentBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', saveDocument);
        }

        // Template'i yükle
        loadTemplate(templateCode);

        // Edit mode: load existing document data
        let editData = null;
        if (editDocumentId) {
            const document = await loadDocumentForEdit(editDocumentId);
            if (document && document.form_data) editData = document.form_data;
        }
        setTimeout(() => {
            if (editData) fillFormWithData(editData);
            // Kaydedilmemiş değişiklikleri taslak olarak izle (doldurma bittikten sonra)
            setTimeout(() => startDraftTracking(templateCode, editDocumentId), 100);
        }, 100);
    }
}

// =====================================================
// Document Detail Page
// =====================================================

async function renderDocumentDetailPage(documentId) {
    const mainContent = document.getElementById('mainContent');

    // Show loading
    mainContent.innerHTML = `
        <div class="loading-page">
            <div class="loading-spinner"></div>
            <p>Belge yükleniyor...</p>
        </div>
    `;

    const doc = await DataService.getById(documentId);

    if (!doc) {
        mainContent.innerHTML = `
            <div class="placeholder-page">
                <div class="placeholder-content">
                    <div class="placeholder-icon">❓</div>
                    <h1>Belge Bulunamadı</h1>
                    <p class="placeholder-message">Aradığınız belge bulunamadı veya silinmiş olabilir.</p>
                    <div class="placeholder-actions">
                        <button class="btn btn-primary" onclick="navigateTo('')">
                            <span>🏠</span> Ana Sayfa
                        </button>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    const template = TEMPLATES[doc.template_code];
    const createdDate = DataService.formatDate(doc.created_at);
    const updatedDate = DataService.formatDate(doc.updated_at);

    mainContent.innerHTML = `
        <div class="document-detail-page">
            <div class="document-header">
                <div class="document-info">
                    <span class="document-code">${escapeHtml(doc.template_code)}</span>
                    <h1>${escapeHtml(doc.template_name)}</h1>
                    <div class="document-meta">
                        <span class="meta-item">
                            <span class="meta-icon">📁</span>
                            ${escapeHtml(doc.category)}
                        </span>
                        <span class="meta-item">
                            <span class="meta-icon">📅</span>
                            Oluşturulma: ${createdDate}
                        </span>
                        ${doc.person_name ? `
                            <span class="meta-item">
                                <span class="meta-icon">👤</span>
                                ${escapeHtml(doc.person_name)}
                            </span>
                        ` : ''}
                    </div>
                </div>
                <div class="document-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('documents/${documentId}/edit')">
                        <span>✏️</span> Düzenle
                    </button>
                    <button class="btn btn-primary" onclick="downloadDocumentPdf('${documentId}')">
                        <span>📄</span> PDF İndir
                    </button>
                    <button class="btn btn-danger" onclick="deleteDocument('${documentId}')">
                        <span>🗑️</span> Sil
                    </button>
                </div>
            </div>
            
            <div class="document-preview-container">
                <h3>📋 Belge Önizleme</h3>
                <div class="preview-container" id="documentPreview">
                    <!-- Preview will be rendered here -->
                </div>
            </div>
            
            <div class="document-data-section">
                <h3>📊 Kayıtlı Veriler</h3>
                <div class="data-grid">
                    ${renderFormDataTable(escapeFormData(doc.form_data))}
                </div>
            </div>

            <div class="document-data-section">
                <h3>🕘 İşlem Geçmişi</h3>
                <div id="documentHistory"><p class="history-empty">Yükleniyor...</p></div>
            </div>
        </div>
    `;

    loadDocumentHistory(documentId);

    // Render preview
    const previewContainer = document.getElementById('documentPreview');
    if (previewContainer && template) {
        elements.previewContent = previewContainer;
        state.currentTemplate = doc.template_code;

        let html = '';

        // Helper to find the right render function
        // Note: Ideally this should be centralized but we'll map it here for now
        const viewData = escapeFormData(doc.form_data);
        if (doc.template_code === '1.1') html = renderTemplate11(viewData);
        else if (doc.template_code === '1.2') html = renderTemplate12(viewData, false);
        else if (doc.template_code === '1.3') html = renderTemplate12(viewData, true);
        else if (doc.template_code === '1.4.1') html = renderTemplate141(viewData);
        else if (doc.template_code === '1.4.2') html = renderTemplate142(viewData);
        else if (doc.template_code === '1.5') html = renderTemplate15(viewData);
        else if (doc.template_code === '1.6.1') html = renderTemplate161(viewData);
        else if (doc.template_code === '1.6.2') html = renderTemplate162(viewData);
        else if (doc.template_code === '1.6.3') html = renderTemplate163(viewData);
        else if (doc.template_code === '1.6.4') html = renderTemplate164(viewData);
        else if (doc.template_code === '1.6.5') html = renderTemplate165(viewData);
        else if (doc.template_code === '2.1') html = renderTemplate21(viewData);
        else if (doc.template_code === '2.3') html = renderTemplate23(viewData);
        else if (doc.template_code === '2.4') html = renderTemplate24(viewData);
        else if (doc.template_code === '3.1') html = renderTemplate31(viewData);
        else if (doc.template_code === '4.1') html = renderTemplate41(viewData);
        else if (doc.template_code === '4.2') html = renderTemplate42(viewData);
        else if (doc.template_code === '4.3') html = renderTemplate43(viewData);
        else if (doc.template_code === '4.4') html = renderTemplate44(viewData);
        else if (doc.template_code === '5.1') html = renderTemplate51(viewData);
        else if (doc.template_code === '5.2') html = renderTemplate52(viewData);
        else if (doc.template_code === '5.3') html = renderTemplate53(viewData);
        else if (doc.template_code === '6.1') html = renderTemplate61(viewData);
        else if (doc.template_code === '6.2') html = renderTemplate62(viewData);
        else if (doc.template_code === '6.3') html = renderTemplate63(viewData);
        else if (doc.template_code === '6.4') html = renderTemplate64(viewData);
        else if (doc.template_code === '6.5') html = renderTemplate65(viewData);
        else if (doc.template_code === '6.6') html = renderTemplate66(viewData);
        else if (doc.template_code === '6.7') html = renderTemplate67(viewData);
        else if (doc.template_code === '6.8') html = renderTemplate68(viewData);
        else if (doc.template_code === '6.9') html = renderTemplate69(viewData);
        else if (doc.template_code === '7.1') html = renderTemplate71(viewData);
        else if (doc.template_code === '7.2') html = renderTemplate72(viewData);
        else if (doc.template_code === '7.3') html = renderTemplate73(viewData);
        else if (doc.template_code === '7.4') html = renderTemplate74(viewData);
        else if (doc.template_code === '8.1') html = renderTemplate81(viewData);
        else if (doc.template_code === '8.2') html = renderTemplate82(viewData);
        else if (doc.template_code === '9.1') html = renderTemplate91(viewData);
        else if (doc.template_code === '10.1') html = renderTemplate101(viewData);
        else if (doc.template_code === '10.2') html = renderTemplate102(viewData);
        else if (doc.template_code === '10.2.1') html = renderTemplate1021(viewData);
        else if (doc.template_code === '11.1') html = renderTemplate111(viewData);
        else if (doc.template_code === '11.2') html = renderTemplate112(viewData);
        else if (doc.template_code === '12.1') html = renderTemplate121(viewData);
        else if (doc.template_code === '12.2') html = renderTemplate122(viewData);
        else if (doc.template_code === '13.1') html = renderTemplate131(viewData);
        else if (doc.template_code === '13.2') html = renderTemplate132(viewData);
        else if (doc.template_code === '14.1') html = renderTemplate1401(viewData);
        else if (doc.template_code === '14.2') html = renderTemplate1402(viewData);
        else if (doc.template_code === '15.1') html = renderTemplate151(viewData);
        else if (doc.template_code === '15.2') html = renderTemplate152(viewData);
        else if (doc.template_code === '15.3') html = renderTemplate153(viewData);
        else if (doc.template_code === '15.4') html = renderTemplate154(viewData);
        else if (doc.template_code === '15.5') html = renderTemplate155(viewData);
        else if (doc.template_code === '15.6') html = renderTemplate156(viewData);
        else if (doc.template_code === '16.1') html = renderTemplate161_dizi(viewData);
        else html = `<div class="empty-field">Bu şablon (${escapeHtml(doc.template_code)}) için önizleme görüntülenemiyor.</div>`;

        // Wrap in preview-content to match the live preview styling (A4 size, word-wrap, etc.)
        previewContainer.innerHTML = '<div class="preview-content"></div>';
        renderPaginatedPreview(previewContainer.querySelector('.preview-content'), html);
    }

    // Update breadcrumb
    currentRoute.category = doc.category;
}

const HISTORY_ACTION_LABELS = {
    'document.create': 'Oluşturuldu',
    'document.view': 'Görüntülendi',
    'document.update': 'Güncellendi',
    'document.delete': 'Silindi'
};

async function loadDocumentHistory(documentId) {
    const history = await DataService.getHistory(documentId);
    const container = document.getElementById('documentHistory');
    if (!container) return;

    if (history.length === 0) {
        container.innerHTML = '<p class="history-empty">Kayıtlı işlem yok.</p>';
        return;
    }

    container.innerHTML = `
        <table class="documents-table history-table">
            <thead>
                <tr><th>Tarih</th><th>İşlem</th><th>Kullanıcı</th><th>IP</th></tr>
            </thead>
            <tbody>
                ${history.map(entry => `
                    <tr>
                        <td>${escapeHtml(DataService.formatDate(entry.created_at))}</td>
                        <td>${escapeHtml(HISTORY_ACTION_LABELS[entry.action] || entry.action)}</td>
                        <td>${escapeHtml(entry.username || '-')}</td>
                        <td>${escapeHtml(entry.ip || '-')}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderFormDataTable(formData) {
    if (!formData) return '<p>Veri yok</p>';

    let html = '';
    Object.entries(formData).forEach(([key, value]) => {
        if (key === 'qa_items') {
            // Handle Q&A items separately
            if (Array.isArray(value) && value.length > 0) {
                html += `
                    <div class="data-item full-width">
                        <span class="data-label">Sorular ve Cevaplar</span>
                        <div class="qa-list">
                            ${value.map((qa, i) => `
                                <div class="qa-item">
                                    <div class="qa-question"><strong>S${i + 1}:</strong> ${qa.question || '-'}</div>
                                    <div class="qa-answer"><strong>C${i + 1}:</strong> ${qa.answer || '-'}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        } else if (value && typeof value !== 'object') {
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            html += `
                <div class="data-item">
                    <span class="data-label">${label}</span>
                    <span class="data-value">${value}</span>
                </div>
            `;
        }
    });

    return html || '<p>Veri yok</p>';
}

// =====================================================
// Document Edit Page
// =====================================================

async function renderDocumentEditPage(documentId) {
    const doc = await DataService.getById(documentId);

    if (!doc) {
        showToast('Belge bulunamadı', 'error');
        navigateTo('');
        return;
    }

    const template = getTemplateByCode(doc.template_code);

    if (!template || !template.implemented) {
        showToast('Bu şablon düzenlenemez', 'error');
        navigateTo(`documents/${documentId}`);
        return;
    }

    // Update current route
    currentRoute.category = doc.category;
    currentRoute.templateCode = doc.template_code;

    // Render the template form in edit mode
    renderImplementedTemplate(template, documentId);
}

// =====================================================
// Document Actions
// =====================================================

async function deleteDocument(documentId) {
    if (!confirm('Bu belgeyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.')) {
        return;
    }

    const result = await DataService.delete(documentId);

    if (result.success) {
        showToast('Belge silindi', 'success');
        if (currentRoute.view === 'documents-list') loadDocumentsPage();
        else navigateTo('documents');
    } else {
        showToast('Silme işlemi başarısız', 'error');
    }
}

async function downloadDocumentPdf(documentId) {
    const doc = await DataService.getById(documentId);

    if (!doc) {
        showToast('Belge bulunamadı', 'error');
        return;
    }

    // Set current template and generate PDF
    state.currentTemplate = doc.template_code;

    // Generate PDF using existing function
    await generatePDFFromData(doc.form_data, doc.template_code, doc.template_name);
}

// Helper function to format dates in formData (same as collectFormData in app.js)
function formatFormDataDates(data) {
    // Format main tarih field
    if (data.tarih) {
        const date = new Date(data.tarih);
        data.tarih_formatted = date.toLocaleDateString('tr-TR', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        });
    } else {
        data.tarih_formatted = '';
    }

    // Format other common date fields
    const dateFields = ['sikayetci_dogum_tarihi', 'tanik_dogum_tarihi', 'davet_tarihi', 'randevu_tarihi', 'ifade_tarihi'];
    dateFields.forEach(field => {
        if (data[field]) {
            const date = new Date(data[field]);
            data[field + '_formatted'] = date.toLocaleDateString('tr-TR', {
                day: '2-digit', month: '2-digit', year: 'numeric'
            });
        } else {
            data[field + '_formatted'] = '';
        }
    });

    return data;
}

async function generatePDFFromData(formData, templateCode, templateName) {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) loadingOverlay.classList.remove('hidden');

    try {
        // Tarihleri biçimlendir, ardından HTML'e yazılacak değerleri kaçışla
        const data = escapeFormData(formatFormDataDates({ ...formData }));

        const pdfTemplate = PDF_TEMPLATES[templateCode];
        const pdfContent = pdfTemplate && pdfTemplate.build(data);
        if (!pdfContent) {
            throw new Error('PDF içeriği oluşturulamadı');
        }

        const filename = `${pdfTemplate.name}_${formData.tarih || 'tarihsiz'}.pdf`;
        await downloadPDF(pdfContent, filename);
        showToast('PDF oluşturuldu', 'success');
    } catch (error) {
        console.error('PDF Error:', error);
        showToast('PDF oluşturulurken hata: ' + error.message, 'error');
    } finally {
        if (loadingOverlay) loadingOverlay.classList.add('hidden');
    }
}

// =====================================================
// Documents List Page
// =====================================================

// Liste sayfası durumu: belge açıp geri dönünce aynı sayfa/arama korunur
const documentsListState = { page: 1, limit: 20, search: '', category: '' };
let documentsListRequestId = 0;
let documentsSearchTimer = null;

async function renderDocumentsListPage() {
    const mainContent = document.getElementById('mainContent');

    mainContent.innerHTML = `
        <div class="documents-list-page">
            <div class="section-header" style="margin-bottom: 20px;">
                <h1 style="margin: 0;">📋 Tüm Belgeler <span id="documentsTotal"></span></h1>
            </div>

            <div class="library-toolbar">
                <div class="search-box">
                    <span class="search-icon">🔍</span>
                    <input type="text" id="documentsSearchInput" placeholder="Kişi adı, TC kimlik, şablon adı veya kodu..."
                           value="${escapeHtml(documentsListState.search)}"
                           oninput="handleDocumentsSearch(this.value)">
                </div>
                <div class="filter-box">
                    <label for="documentsCategoryFilter">Kategori:</label>
                    <select id="documentsCategoryFilter" onchange="handleDocumentsCategory(this.value)">
                        <option value="">Tüm Kategoriler</option>
                        ${CATEGORY_ORDER.map(cat => `
                            <option value="${escapeHtml(cat)}" ${cat === documentsListState.category ? 'selected' : ''}>${escapeHtml(cat)}</option>
                        `).join('')}
                    </select>
                </div>
            </div>

            <div id="documentsResults">
                <div class="loading-page">
                    <div class="loading-spinner"></div>
                    <p>Belgeler yükleniyor...</p>
                </div>
            </div>
        </div>
    `;

    await loadDocumentsPage();
}

function handleDocumentsSearch(value) {
    clearTimeout(documentsSearchTimer);
    documentsSearchTimer = setTimeout(() => {
        documentsListState.search = value.trim();
        documentsListState.page = 1;
        loadDocumentsPage();
    }, 300);
}

function handleDocumentsCategory(value) {
    documentsListState.category = value;
    documentsListState.page = 1;
    loadDocumentsPage();
}

function goToDocumentsPage(page) {
    documentsListState.page = page;
    loadDocumentsPage();
    const results = document.getElementById('documentsResults');
    if (results) results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function loadDocumentsPage() {
    const requestId = ++documentsListRequestId;
    const { page, limit, search, category } = documentsListState;

    let result;
    try {
        result = await DataService.getPage({ page, limit, search, category });
    } catch (error) {
        console.error('Failed to load documents:', error);
        result = null;
    }

    // Kullanıcı bu arada başka sayfa/arama istediyse eski yanıtı gösterme
    if (requestId !== documentsListRequestId) return;
    const container = document.getElementById('documentsResults');
    if (!container) return;

    if (!result) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <h3>Belgeler yüklenemedi</h3>
                <button class="btn btn-secondary" onclick="loadDocumentsPage()" style="margin-top: 20px;">Tekrar Dene</button>
            </div>
        `;
        return;
    }

    // Son sayfadaki son belge silindiyse bir önceki sayfaya geç
    if (result.items.length === 0 && result.total > 0 && page > result.pages) {
        documentsListState.page = result.pages;
        return loadDocumentsPage();
    }

    const totalEl = document.getElementById('documentsTotal');
    if (totalEl) totalEl.textContent = `(${result.total})`;

    if (result.total === 0) {
        const filtered = search || category;
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">${filtered ? '🔎' : '📭'}</div>
                <h3>${filtered ? 'Aramanıza uyan belge bulunamadı' : 'Henüz kayıtlı belge yok'}</h3>
                <p>${filtered ? 'Arama metnini veya kategoriyi değiştirmeyi deneyin.' : 'Şablon sayfalarından form doldurup kaydedebilirsiniz.'}</p>
                ${filtered ? '' : `
                    <button class="btn btn-primary" onclick="navigateTo('')" style="margin-top: 20px;">
                        <span>🏠</span> Ana Sayfa
                    </button>
                `}
            </div>
        `;
        return;
    }

    const first = (result.page - 1) * result.limit + 1;
    const last = first + result.items.length - 1;

    container.innerHTML = `
        <table class="documents-table">
            <thead>
                <tr>
                    <th style="width: 80px;">Kod</th>
                    <th>Şablon</th>
                    <th style="width: 220px;">Kategori</th>
                    <th style="width: 160px;">Oluşturulma</th>
                    <th style="width: 100px;">İşlemler</th>
                </tr>
            </thead>
            <tbody>
                ${result.items.map(doc => {
        const name = doc.person_name || (doc.form_data ? DataService._extractPersonName(doc.form_data) : null);
        const id = encodeURIComponent(doc.id);
        return `
                    <tr onclick="navigateTo('documents/${id}')">
                        <td><span class="doc-code">${escapeHtml(doc.template_code)}</span></td>
                        <td>
                            <div>${escapeHtml(doc.template_name)}</div>
                            ${name ? `<div style="font-size: 0.85em; color: var(--text-secondary); margin-top: 4px;">👤 ${escapeHtml(name)}</div>` : ''}
                        </td>
                        <td>${escapeHtml(doc.category === 'İfadeler' ? 'İfade Tutanakları' : (doc.category || 'Diğer'))}</td>
                        <td>${formatRelativeDate(doc.created_at)}</td>
                        <td>
                            <button class="btn btn-sm btn-secondary" title="Düzenle" onclick="event.stopPropagation(); navigateTo('documents/${id}/edit')">✏️</button>
                            <button class="btn btn-sm btn-danger" title="Sil" onclick="event.stopPropagation(); deleteDocument('${id}')">🗑️</button>
                        </td>
                    </tr>
                `;
    }).join('')}
            </tbody>
        </table>

        <div class="pagination">
            <span class="pagination-info">${first}–${last} / ${result.total} belge</span>
            ${result.pages > 1 ? `<div class="pagination-buttons">${renderPaginationButtons(result.page, result.pages)}</div>` : ''}
        </div>
    `;
}

// Sayfa düğmeleri: ilk, son ve geçerli sayfanın iki yanındaki sayfalar; aradakiler "…"
function renderPaginationButtons(current, pages) {
    const numbers = [];
    for (let p = 1; p <= pages; p++) {
        if (p === 1 || p === pages || Math.abs(p - current) <= 2) numbers.push(p);
    }

    const buttons = [];
    buttons.push(`<button class="btn btn-sm btn-secondary" ${current === 1 ? 'disabled' : ''} onclick="goToDocumentsPage(${current - 1})">‹ Önceki</button>`);
    numbers.forEach((p, i) => {
        if (i > 0 && p - numbers[i - 1] > 1) buttons.push('<span class="pagination-gap">…</span>');
        buttons.push(p === current
            ? `<button class="btn btn-sm btn-primary" aria-current="page" disabled>${p}</button>`
            : `<button class="btn btn-sm btn-secondary" onclick="goToDocumentsPage(${p})">${p}</button>`);
    });
    buttons.push(`<button class="btn btn-sm btn-secondary" ${current === pages ? 'disabled' : ''} onclick="goToDocumentsPage(${current + 1})">Sonraki ›</button>`);
    return buttons.join('');
}
