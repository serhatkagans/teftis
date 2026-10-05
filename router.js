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

    // Get saved documents with error handling
    let savedDocuments = [];
    try {
        savedDocuments = await DataService.getAll();
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
    if (savedDocuments.length > 0) {
        const lastDoc = savedDocuments[0]; // Most recent
        savedDocsNotification = `
            <div class="saved-docs-notification">
                <div class="notification-content">
                    <span class="notification-icon">📋</span>
                    <span class="notification-text">
                        <strong>${savedDocuments.length}</strong> kayıtlı belge mevcut
                        ${lastDoc.person_name ? ` • Son: <strong>${lastDoc.person_name}</strong>` : ''}
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
                ${savedDocuments.length > 0 ? `
                    <span class="stat-item saved">
                        <strong>${savedDocuments.length}</strong> kayıtlı belge
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
        if (editDocumentId) {
            const document = await loadDocumentForEdit(editDocumentId);
            if (document && document.form_data) {
                setTimeout(() => {
                    fillFormWithData(document.form_data);
                }, 100);
            }
        }
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
                    <span class="document-code">${doc.template_code}</span>
                    <h1>${doc.template_name}</h1>
                    <div class="document-meta">
                        <span class="meta-item">
                            <span class="meta-icon">📁</span>
                            ${doc.category}
                        </span>
                        <span class="meta-item">
                            <span class="meta-icon">📅</span>
                            Oluşturulma: ${createdDate}
                        </span>
                        ${doc.person_name ? `
                            <span class="meta-item">
                                <span class="meta-icon">👤</span>
                                ${doc.person_name}
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
                    ${renderFormDataTable(doc.form_data)}
                </div>
            </div>
        </div>
    `;

    // Render preview
    const previewContainer = document.getElementById('documentPreview');
    if (previewContainer && template) {
        elements.previewContent = previewContainer;
        state.currentTemplate = doc.template_code;

        let html = '';

        // Helper to find the right render function
        // Note: Ideally this should be centralized but we'll map it here for now
        if (doc.template_code === '1.1') html = renderTemplate11(doc.form_data);
        else if (doc.template_code === '1.2') html = renderTemplate12(doc.form_data, false);
        else if (doc.template_code === '1.3') html = renderTemplate12(doc.form_data, true);
        else if (doc.template_code === '1.4.1') html = renderTemplate141(doc.form_data);
        else if (doc.template_code === '1.4.2') html = renderTemplate142(doc.form_data);
        else if (doc.template_code === '1.5') html = renderTemplate15(doc.form_data);
        else if (doc.template_code === '1.6.1') html = renderTemplate161(doc.form_data);
        else if (doc.template_code === '1.6.2') html = renderTemplate162(doc.form_data);
        else if (doc.template_code === '1.6.3') html = renderTemplate163(doc.form_data);
        else if (doc.template_code === '1.6.4') html = renderTemplate164(doc.form_data);
        else if (doc.template_code === '1.6.5') html = renderTemplate165(doc.form_data);
        else if (doc.template_code === '2.1') html = renderTemplate21(doc.form_data);
        else if (doc.template_code === '2.3') html = renderTemplate23(doc.form_data);
        else if (doc.template_code === '2.4') html = renderTemplate24(doc.form_data);
        else if (doc.template_code === '3.1') html = renderTemplate31(doc.form_data);
        else if (doc.template_code === '4.1') html = renderTemplate41(doc.form_data);
        else if (doc.template_code === '4.2') html = renderTemplate42(doc.form_data);
        else if (doc.template_code === '4.3') html = renderTemplate43(doc.form_data);
        else if (doc.template_code === '4.4') html = renderTemplate44(doc.form_data);
        else if (doc.template_code === '5.1') html = renderTemplate51(doc.form_data);
        else if (doc.template_code === '5.2') html = renderTemplate52(doc.form_data);
        else if (doc.template_code === '5.3') html = renderTemplate53(doc.form_data);
        else if (doc.template_code === '6.1') html = renderTemplate61(doc.form_data);
        else if (doc.template_code === '6.2') html = renderTemplate62(doc.form_data);
        else if (doc.template_code === '6.3') html = renderTemplate63(doc.form_data);
        else if (doc.template_code === '6.4') html = renderTemplate64(doc.form_data);
        else if (doc.template_code === '6.5') html = renderTemplate65(doc.form_data);
        else if (doc.template_code === '6.6') html = renderTemplate66(doc.form_data);
        else if (doc.template_code === '6.7') html = renderTemplate67(doc.form_data);
        else if (doc.template_code === '6.8') html = renderTemplate68(doc.form_data);
        else if (doc.template_code === '6.9') html = renderTemplate69(doc.form_data);
        else if (doc.template_code === '7.1') html = renderTemplate71(doc.form_data);
        else if (doc.template_code === '7.2') html = renderTemplate72(doc.form_data);
        else if (doc.template_code === '7.3') html = renderTemplate73(doc.form_data);
        else if (doc.template_code === '7.4') html = renderTemplate74(doc.form_data);
        else if (doc.template_code === '8.1') html = renderTemplate81(doc.form_data);
        else if (doc.template_code === '8.2') html = renderTemplate82(doc.form_data);
        else if (doc.template_code === '9.1') html = renderTemplate91(doc.form_data);
        else if (doc.template_code === '10.1') html = renderTemplate101(doc.form_data);
        else if (doc.template_code === '10.2') html = renderTemplate102(doc.form_data);
        else if (doc.template_code === '10.2.1') html = renderTemplate1021(doc.form_data);
        else if (doc.template_code === '11.1') html = renderTemplate111(doc.form_data);
        else if (doc.template_code === '11.2') html = renderTemplate112(doc.form_data);
        else if (doc.template_code === '12.1') html = renderTemplate121(doc.form_data);
        else if (doc.template_code === '12.2') html = renderTemplate122(doc.form_data);
        else if (doc.template_code === '13.1') html = renderTemplate131(doc.form_data);
        else if (doc.template_code === '13.2') html = renderTemplate132(doc.form_data);
        else if (doc.template_code === '14.1') html = renderTemplate1401(doc.form_data);
        else if (doc.template_code === '14.2') html = renderTemplate1402(doc.form_data);
        else if (doc.template_code === '15.1') html = renderTemplate151(doc.form_data);
        else if (doc.template_code === '15.2') html = renderTemplate152(doc.form_data);
        else if (doc.template_code === '15.3') html = renderTemplate153(doc.form_data);
        else if (doc.template_code === '15.4') html = renderTemplate154(doc.form_data);
        else if (doc.template_code === '15.5') html = renderTemplate155(doc.form_data);
        else if (doc.template_code === '15.6') html = renderTemplate156(doc.form_data);
        else if (doc.template_code === '16.1') html = renderTemplate161_dizi(doc.form_data);
        else html = `<div class="empty-field">Bu şablon (${doc.template_code}) için önizleme görüntülenemiyor.</div>`;

        // Wrap in preview-content to match the live preview styling (A4 size, word-wrap, etc.)
        previewContainer.innerHTML = `<div class="preview-content">${html}</div>`;
    }

    // Update breadcrumb
    currentRoute.category = doc.category;
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
        navigateTo('');
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
        console.log('🔍 generatePDFFromData called with:', { templateCode, templateName });
        console.log('📦 Raw formData:', formData);

        // Format dates before generating PDF
        const data = formatFormDataDates({ ...formData });

        console.log('📅 Formatted data:', data);

        let pdfContent;

        if (templateCode === '1.1') {
            pdfContent = createPDFContent11(data);
        } else if (templateCode === '1.2') {
            pdfContent = createPDFContent12(data, false);
        } else if (templateCode === '1.3') {
            pdfContent = createPDFContent12(data, true);
        } else if (templateCode === '1.4.1') {
            pdfContent = createPDFContent141(data);
        } else if (templateCode === '1.4.2') {
            pdfContent = createPDFContent142(data);
        } else if (templateCode === '1.5') {
            pdfContent = createPDFContent15(data);
        } else if (templateCode === '1.6.1') {
            pdfContent = createPDFContent161(data);
        } else if (templateCode === '1.6.2') {
            pdfContent = createPDFContent162(data);
        } else if (templateCode === '1.6.3') {
            pdfContent = createPDFContent163(data);
        } else if (templateCode === '1.6.4') {
            pdfContent = createPDFContent164(data);
        } else if (templateCode === '1.6.5') {
            pdfContent = createPDFContent165(data);
        } else if (templateCode === '2.1') {
            pdfContent = createPDFContent21(data);
        } else if (templateCode === '2.2') {
            pdfContent = createPDFContent22(data);
        } else if (templateCode === '2.3') {
            pdfContent = createPDFContent23(data);
        } else if (templateCode === '2.4') {
            pdfContent = createPDFContent24(data);
        } else if (templateCode === '3.1') {
            pdfContent = createPDFContent31(data);
        } else if (templateCode === '4.1') {
            pdfContent = createPDFContent41(data);
        } else if (templateCode === '4.2') {
            pdfContent = createPDFContent42(data);
        } else if (templateCode === '4.3') {
            pdfContent = createPDFContent43(data);
        } else if (templateCode === '4.4') {
            pdfContent = createPDFContent44(data);
        } else if (templateCode === '5.1') {
            pdfContent = createPDFContent51(data);
        } else if (templateCode === '5.2') {
            pdfContent = createPDFContent52(data);
        } else if (templateCode === '5.3') {
            pdfContent = createPDFContent53(data);
        } else if (templateCode === '6.1') {
            pdfContent = createPDFContent61(data);
        } else if (templateCode === '6.2') {
            pdfContent = createPDFContent62(data);
        } else if (templateCode === '6.3') {
            pdfContent = createPDFContent63(data);
        } else if (templateCode === '6.4') {
            pdfContent = createPDFContent64(data);
        } else if (templateCode === '6.5') {
            pdfContent = createPDFContent65(data);
        } else if (templateCode === '6.6') {
            pdfContent = createPDFContent66(data);
        } else if (templateCode === '6.7') {
            pdfContent = createPDFContent67(data);
        } else if (templateCode === '6.8') {
            pdfContent = createPDFContent68(data);
        } else if (templateCode === '6.9') {
            pdfContent = createPDFContent69(data);
        } else if (templateCode === '7.1') {
            pdfContent = createPDFContent71(data);
        } else if (templateCode === '7.2') {
            pdfContent = createPDFContent72(data);
        } else if (templateCode === '7.3') {
            pdfContent = createPDFContent73(data);
        } else if (templateCode === '7.4') {
            pdfContent = createPDFContent74(data);
        } else if (templateCode === '8.1') {
            pdfContent = createPDFContent81(data);
        } else if (templateCode === '8.2') {
            pdfContent = createPDFContent82(data);
        } else if (templateCode === '9.1') {
            pdfContent = createPDFContent91(data);
        } else if (templateCode === '10.1') {
            pdfContent = createPDFContent101(data);
        } else if (templateCode === '10.2') {
            pdfContent = createPDFContent102(data);
        } else if (templateCode === '10.2.1') {
            pdfContent = createPDFContent1021(data);
        } else if (templateCode === '11.1') {
            pdfContent = createPDFContent111(data);
        } else if (templateCode === '11.2') {
            pdfContent = createPDFContent112(data);
        } else if (templateCode === '12.1') {
            pdfContent = createPDFContent121(data);
        } else if (templateCode === '12.2') {
            pdfContent = createPDFContent122(data);
        } else if (templateCode === '13.1') {
            pdfContent = createPDFContent131(data);
        } else if (templateCode === '13.2') {
            pdfContent = createPDFContent132(data);
        } else if (templateCode === '14.1') {
            pdfContent = createPDFContent1401(data);
        } else if (templateCode === '14.2') {
            pdfContent = createPDFContent1402(data);
        } else if (templateCode === '15.1') {
            pdfContent = createPDFContent151(data);
        } else if (templateCode === '15.2') {
            pdfContent = createPDFContent152(data);
        } else if (templateCode === '15.3') {
            pdfContent = createPDFContent153(data);
        } else if (templateCode === '15.4') {
            pdfContent = createPDFContent154(data);
        } else if (templateCode === '15.5') {
            pdfContent = createPDFContent155(data);
        } else if (templateCode === '15.6') {
            pdfContent = createPDFContent156(data);
        } else if (templateCode === '16.1') {
            pdfContent = createPDFContent161_dizi(data);
        }

        if (!pdfContent) {
            throw new Error('PDF içeriği oluşturulamadı');
        }

        const opt = {
            margin: [15, 15, 15, 15],
            filename: `${templateCode}_${templateName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        console.log('🚀 Starting html2pdf conversion...');
        await html2pdf().set(opt).from(pdfContent).save();
        console.log('✅ PDF saved successfully!');
        showToast('PDF oluşturuldu', 'success');
    } catch (error) {
        console.error('❌ PDF Error:', error);
        console.error('❌ Error stack:', error.stack);
        showToast('PDF oluşturulurken hata: ' + error.message, 'error');
    } finally {
        if (loadingOverlay) loadingOverlay.classList.add('hidden');
    }
}

// =====================================================
// Documents List Page
// =====================================================

async function renderDocumentsListPage() {
    const mainContent = document.getElementById('mainContent');
    const documents = await DataService.getAll();

    if (documents.length === 0) {
        mainContent.innerHTML = `
            <div class="documents-list-page">
                <h1>📋 Tüm Belgeler</h1>
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <h3>Henüz kayıtlı belge yok</h3>
                    <p>Şablon sayfalarından form doldurup kaydedebilirsiniz.</p>
                    <button class="btn btn-primary" onclick="navigateTo('')" style="margin-top: 20px;">
                        <span>🏠</span> Ana Sayfa
                    </button>
                </div>
            </div>
        `;
        return;
    }

    mainContent.innerHTML = `
        <div class="documents-list-page">
            <div class="section-header" style="margin-bottom: 20px;">
                <h1 style="margin: 0;">📋 Tüm Belgeler (${documents.length})</h1>
            </div>
            
            <div class="document-groups">
                ${(() => {
            // Group documents by category
            const grouped = {};
            documents.forEach(doc => {
                let cat = doc.category || 'Diğer';
                // Normalize legacy category name
                if (cat === 'İfadeler') cat = 'İfade Tutanakları';

                if (!grouped[cat]) grouped[cat] = [];
                grouped[cat].push(doc);
            });

            // Determine order (use predefined order, append 'Diğer' at end)
            const catsToRender = [...CATEGORY_ORDER];
            if (grouped['Diğer']) catsToRender.push('Diğer');
            // Add any other categories that might exist but not in ORDER
            Object.keys(grouped).forEach(cat => {
                if (!catsToRender.includes(cat) && cat !== 'Diğer') catsToRender.push(cat);
            });

            return catsToRender.map((category, index) => {
                const docs = grouped[category];
                if (!docs) return '';

                const icon = CATEGORY_ICONS[category] || '📄';
                const collapsedClass = 'collapsed'; // Start collapsed like Home Page
                const categoryNumber = CATEGORY_ORDER.includes(category) ? `${CATEGORY_ORDER.indexOf(category) + 1} ` : '';

                return `
                            <div class="category-group ${collapsedClass}">
                                <div class="category-header" onclick="toggleCategory(this)">
                                    <span class="category-icon">${icon}</span>
                                    <h2 class="category-title">${categoryNumber}${category}</h2>
                                    <span class="category-count">${docs.length}</span>
                                    <span class="category-toggle">▼</span>
                                </div>
                                <div class="category-items" style="padding: 0;">
                                    <table class="documents-table" style="margin: 0; box-shadow: none; border-top: 1px solid var(--border-color);">
                                        <thead>
                                            <tr>
                                                <th style="width: 80px;">Kod</th>
                                                <th>Şablon</th>
                                                <th style="width: 200px;">Oluşturulma</th>
                                                <th style="width: 100px;">İşlemler</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${docs.map(doc => `
                                                <tr onclick="navigateTo('documents/${doc.id}')">
                                                    <td><span class="doc-code">${doc.template_code}</span></td>
                                                    <td>
                                                        <div>${doc.template_name}</div>
                                                        ${(() => {
                        const name = doc.person_name || (doc.form_data ? DataService._extractPersonName(doc.form_data) : null);
                        return name ? `<div style="font-size: 0.85em; color: var(--text-secondary); margin-top: 4px;">👤 ${name}</div>` : '';
                    })()}
                                                    </td>
                                                    <td>${formatRelativeDate(doc.created_at)}</td>
                                                    <td>
                                                        <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); navigateTo('documents/${doc.id}/edit')">✏️</button>
                                                        <button class="btn btn-sm btn-danger" onclick="event.stopPropagation(); deleteDocument('${doc.id}')">🗑️</button>
                                                    </td>
                                                </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `;
            }).join('');
        })()}
            </div>
        </div>
    `;
}
