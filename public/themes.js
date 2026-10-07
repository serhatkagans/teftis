/**
 * Tema Yönetimi - Theme Manager
 */

const THEMES = {
    'dark-corporate': {
        id: 'dark-corporate',
        name: 'Koyu Kurumsal',
        icon: '🌙',
        colors: {
            '--bg-primary': '#0f0f1a',
            '--bg-secondary': '#1a1a2e',
            '--bg-tertiary': '#252542',
            '--bg-card': '#1e1e35',
            '--bg-input': '#2a2a4a',
            '--text-primary': '#ffffff',
            '--text-secondary': '#b8b8d0',
            '--text-muted': '#6b6b8a',
            '--accent-primary': '#6366f1',
            '--accent-secondary': '#8b5cf6',
            '--border-color': '#3a3a5c',
            '--border-focus': '#6366f1',
            '--success': '#10b981',
            '--warning': '#f59e0b',
            '--danger': '#ef4444',
            '--preview-bg': '#f5f5f5'
        },
        swatch: ['#0f0f1a', '#6366f1', '#8b5cf6']
    },
    'light-corporate': {
        id: 'light-corporate',
        name: 'Açık Kurumsal',
        icon: '☀️',
        colors: {
            '--bg-primary': '#f0f2f5',
            '--bg-secondary': '#ffffff',
            '--bg-tertiary': '#e8eaed',
            '--bg-card': '#ffffff',
            '--bg-input': '#f5f7fa',
            '--text-primary': '#1a1a2e',
            '--text-secondary': '#4a4a6a',
            '--text-muted': '#8a8aa0',
            '--accent-primary': '#4f46e5',
            '--accent-secondary': '#7c3aed',
            '--border-color': '#d1d5db',
            '--border-focus': '#4f46e5',
            '--success': '#059669',
            '--warning': '#d97706',
            '--danger': '#dc2626',
            '--preview-bg': '#f9fafb'
        },
        swatch: ['#f0f2f5', '#4f46e5', '#1a1a2e']
    },
    'dark-gray': {
        id: 'dark-gray',
        name: 'Koyu Gri',
        icon: '🌑',
        colors: {
            '--bg-primary': '#121212',
            '--bg-secondary': '#1e1e1e',
            '--bg-tertiary': '#2d2d2d',
            '--bg-card': '#252525',
            '--bg-input': '#333333',
            '--text-primary': '#e0e0e0',
            '--text-secondary': '#a0a0a0',
            '--text-muted': '#666666',
            '--accent-primary': '#90caf9',
            '--accent-secondary': '#64b5f6',
            '--border-color': '#404040',
            '--border-focus': '#90caf9',
            '--success': '#81c784',
            '--warning': '#ffb74d',
            '--danger': '#e57373',
            '--preview-bg': '#e8e8e8'
        },
        swatch: ['#121212', '#90caf9', '#e0e0e0']
    },
    'meb-theme': {
        id: 'meb-theme',
        name: 'MEB Tonu',
        icon: '🏫',
        colors: {
            '--bg-primary': '#f8fafc',
            '--bg-secondary': '#ffffff',
            '--bg-tertiary': '#e2e8f0',
            '--bg-card': '#ffffff',
            '--bg-input': '#f1f5f9',
            '--text-primary': '#0f172a',
            '--text-secondary': '#475569',
            '--text-muted': '#94a3b8',
            '--accent-primary': '#0d9488',
            '--accent-secondary': '#0891b2',
            '--border-color': '#cbd5e1',
            '--border-focus': '#0d9488',
            '--success': '#10b981',
            '--warning': '#f59e0b',
            '--danger': '#ef4444',
            '--preview-bg': '#f1f5f9'
        },
        swatch: ['#f8fafc', '#0d9488', '#0f172a']
    }
};

// Current theme
let currentTheme = localStorage.getItem('selectedTheme') || 'meb-theme';

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    renderThemeSelector();
});

function applyTheme(themeId) {
    const theme = THEMES[themeId];
    if (!theme) return;

    const root = document.documentElement;

    // Apply all color variables
    Object.entries(theme.colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    // Update gradient based on accent colors
    const gradientValue = `linear-gradient(135deg, ${theme.colors['--accent-primary']} 0%, ${theme.colors['--accent-secondary']} 50%, ${theme.colors['--accent-secondary']} 100%)`;
    root.style.setProperty('--accent-gradient', gradientValue);

    // Update preview background
    const previewContainer = document.querySelector('.preview-container');
    if (previewContainer) {
        previewContainer.style.background = theme.colors['--preview-bg'];
    }

    // Store in localStorage
    localStorage.setItem('selectedTheme', themeId);
    currentTheme = themeId;

    // Update active state in selector
    updateThemeSelectorUI();
}

function renderThemeSelector() {
    // Check if selector already exists
    if (document.getElementById('themeSelector')) return;

    const headerNav = document.querySelector('.header-nav');
    if (!headerNav) return;

    // Create theme selector container
    const selectorHTML = `
        <div class="theme-selector" id="themeSelector">
            <button class="theme-toggle-btn" onclick="toggleThemeDropdown()" title="Tema Seç">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
                <span class="theme-label">Tema</span>
            </button>
            <div class="theme-dropdown" id="themeDropdown">
                <div class="theme-dropdown-header">Tema Seçin</div>
                ${Object.values(THEMES).map(theme => `
                    <button class="theme-option ${theme.id === currentTheme ? 'active' : ''}" 
                            onclick="selectTheme('${theme.id}')"
                            data-theme="${theme.id}">
                        <div class="theme-swatch">
                            ${theme.swatch.map(color => `<span style="background: ${color}"></span>`).join('')}
                        </div>
                        <div class="theme-info">
                            <span class="theme-icon">${theme.icon}</span>
                            <span class="theme-name">${theme.name}</span>
                        </div>
                        ${theme.id === currentTheme ? '<span class="theme-check">✓</span>' : ''}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // Insert before Ana Sayfa link
    headerNav.insertAdjacentHTML('afterbegin', selectorHTML);
}

function toggleThemeDropdown() {
    const dropdown = document.getElementById('themeDropdown');
    dropdown.classList.toggle('open');

    // Close dropdown when clicking outside
    if (dropdown.classList.contains('open')) {
        setTimeout(() => {
            document.addEventListener('click', closeThemeDropdownOutside);
        }, 10);
    }
}

function closeThemeDropdownOutside(e) {
    const selector = document.getElementById('themeSelector');
    if (!selector.contains(e.target)) {
        const dropdown = document.getElementById('themeDropdown');
        dropdown.classList.remove('open');
        document.removeEventListener('click', closeThemeDropdownOutside);
    }
}

function selectTheme(themeId) {
    applyTheme(themeId);

    // Close dropdown
    const dropdown = document.getElementById('themeDropdown');
    dropdown.classList.remove('open');
    document.removeEventListener('click', closeThemeDropdownOutside);
}

function updateThemeSelectorUI() {
    const options = document.querySelectorAll('.theme-option');
    options.forEach(option => {
        const isActive = option.dataset.theme === currentTheme;
        option.classList.toggle('active', isActive);

        // Update check mark
        const existingCheck = option.querySelector('.theme-check');
        if (isActive && !existingCheck) {
            option.insertAdjacentHTML('beforeend', '<span class="theme-check">✓</span>');
        } else if (!isActive && existingCheck) {
            existingCheck.remove();
        }
    });
}
