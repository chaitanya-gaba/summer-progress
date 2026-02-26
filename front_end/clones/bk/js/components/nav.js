/**
 * NAV.JS
 * Handles: theme switcher, search overlay, mobile drawer,
 *          cart badge bump, active link highlight
 *
 * NOTE: MENU_ITEMS import is inside initSearch() so if the
 * data file is missing, ONLY search fails — drawer still works.
 */

/* ==========================================================
   THEME
   ========================================================== */

const THEMES = [
  { id: 'classic',   name: 'Classic BK', desc: 'Red & flame-grilled',  icon: '🔥' },
  { id: 'latenight', name: 'Late Night',  desc: 'Dark & moody',          icon: '🌙' },
  { id: 'cafe',      name: 'BK Café',     desc: 'Warm & coffee-toned',   icon: '☕' },
];

export function loadTheme() {
  const saved = localStorage.getItem('bk-theme') || 'classic';
  document.documentElement.setAttribute('data-theme', saved);
}

function initThemeSwitcher() {
  const switcher  = document.querySelector('.theme-switcher');
  const toggleBtn = document.querySelector('.theme-toggle-btn');
  const dropdown  = document.querySelector('.theme-dropdown');
  if (!switcher || !toggleBtn || !dropdown) return;

  const getTheme = () =>
    document.documentElement.getAttribute('data-theme') || 'classic';

  function updateLabel() {
    const t = THEMES.find(t => t.id === getTheme());
    const lbl = toggleBtn.querySelector('.theme-toggle-label');
    const ico = toggleBtn.querySelector('.theme-toggle-icon');
    if (lbl) lbl.textContent = t?.name ?? 'Theme';
    if (ico)  ico.textContent  = t?.icon ?? '🎨';
  }

  function buildDropdown() {
    dropdown.innerHTML = THEMES.map(t => `
      <button class="theme-option ${t.id === getTheme() ? 'active' : ''}" data-theme="${t.id}">
        <div class="theme-swatch ${t.id}"></div>
        <div class="theme-info">
          <span class="theme-name">${t.icon} ${t.name}</span>
          <span class="theme-desc">${t.desc}</span>
        </div>
        <span class="theme-check">✓</span>
      </button>
    `).join('');

    dropdown.querySelectorAll('.theme-option').forEach(opt => {
      opt.addEventListener('click', () => {
        applyTheme(opt.dataset.theme);
        switcher.classList.remove('open');
      });
    });
  }

  function applyTheme(id) {
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('bk-theme', id);
    updateLabel();
    buildDropdown();
    syncDrawerTheme(id);
  }

  toggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    switcher.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!switcher.contains(e.target)) switcher.classList.remove('open');
  });

  buildDropdown();
  updateLabel();
}

/* ==========================================================
   SEARCH OVERLAY
   ========================================================== */

async function initSearch() {
  const toggleBtn = document.querySelector('.search-toggle');
  const overlay   = document.querySelector('.search-overlay');
  const input     = document.querySelector('.search-modal-input');
  const closeBtn  = document.querySelector('.search-close-btn');
  const resultsEl = document.querySelector('.search-results');
  if (!toggleBtn || !overlay) return;

  // Import lazily — if file missing, only search breaks, not the whole nav
  let MENU_ITEMS = [];
  try {
    const mod = await import('../data/menu-data.js');
    MENU_ITEMS = mod.MENU_ITEMS || [];
  } catch (e) {
    console.warn('nav.js: could not load menu-data.js for search', e);
  }

  const open = () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input?.focus(), 320);
  };

  const close = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (resultsEl) resultsEl.classList.remove('visible');
  };

  toggleBtn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  if (input && resultsEl) {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { resultsEl.classList.remove('visible'); return; }

      const matches = MENU_ITEMS.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      ).slice(0, 6);

      if (!matches.length) {
        resultsEl.innerHTML = `<div class="search-no-results">No results for "<strong>${q}</strong>"</div>`;
      } else {
        resultsEl.innerHTML = matches.map(item => `
          <div class="search-result-item" data-id="${item.id}">
            <div class="search-result-emoji">🍔</div>
            <div class="search-result-info">
              <div class="search-result-name">${item.name}</div>
              <div class="search-result-meta">${item.category}</div>
            </div>
            <div class="search-result-price">₹${item.price}</div>
          </div>
        `).join('');

        resultsEl.querySelectorAll('.search-result-item').forEach(el => {
          el.addEventListener('click', () => {
            const item = MENU_ITEMS.find(i => i.id === el.dataset.id);
            if (item) window.location.href = `menu.html?category=${item.category}`;
          });
        });
      }
      resultsEl.classList.add('visible');
    });
  }
}

/* ==========================================================
   MOBILE DRAWER
   ========================================================== */

function initMobileDrawer() {
  const hamburger = document.querySelector('.hamburger-btn');
  const drawer    = document.querySelector('.mobile-drawer');
  const backdrop  = document.querySelector('.drawer-backdrop');
  const closeBtn  = document.querySelector('.drawer-close');

  // If any of these are missing, drawer can't work — exit silently
  if (!hamburger || !drawer || !backdrop) return;

  function openDrawer() {
    hamburger.classList.add('open');
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('scroll-locked');
  }

  function closeDrawer() {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('scroll-locked');
  }

  hamburger.addEventListener('click', openDrawer);
  backdrop.addEventListener('click', closeDrawer);
  closeBtn?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Drawer theme buttons
  document.querySelectorAll('.drawer-theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.theme;
      document.documentElement.setAttribute('data-theme', id);
      localStorage.setItem('bk-theme', id);
      syncDrawerTheme(id);
      syncDropdownTheme(id);
    });
  });
}

function syncDrawerTheme(id) {
  document.querySelectorAll('.drawer-theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === id);
  });
}

function syncDropdownTheme(id) {
  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.theme === id);
  });
}

/* ==========================================================
   ACTIVE LINK
   ========================================================== */

function initActiveLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .drawer-nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================
   CART BADGE
   ========================================================== */

export function bumpCartBadge() {
  const badge = document.querySelector('[data-cart-count]');
  if (!badge) return;
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

/* ==========================================================
   INIT — runs when module is parsed (DOM already ready)
   ========================================================== */

loadTheme();
initThemeSwitcher();
initSearch();
initMobileDrawer();
initActiveLink();