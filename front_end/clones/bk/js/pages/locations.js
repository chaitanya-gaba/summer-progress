/**
 * LOCATIONS.JS
 * Store finder with mock map, search, filter, and pin interactions
 */

/* ==========================================================
   STORE DATA
   ========================================================== */

const STORES = [
  {
    id: 's1',
    name: 'BK Connaught Place',
    address: 'N-14, Connaught Place, New Delhi',
    city: 'New Delhi',
    distance: 0.8,
    rating: 4.4,
    isOpen: true,
    hours: 'Open · Closes 11 PM',
    tags: ['dine-in', 'delivery'],
    pin: { x: 22, y: 27 }
  },
  {
    id: 's2',
    name: 'BK Karol Bagh',
    address: '23, Ajmal Khan Road, Karol Bagh, Delhi',
    city: 'New Delhi',
    distance: 2.1,
    rating: 4.2,
    isOpen: true,
    hours: 'Open · Closes 10 PM',
    tags: ['drive-thru', 'dine-in', 'delivery'],
    pin: { x: 17, y: 31 }
  },
  {
    id: 's3',
    name: 'BK Sector 17 Chandigarh',
    address: 'SCO 145-147, Sector 17, Chandigarh',
    city: 'Chandigarh',
    distance: 5.4,
    rating: 4.5,
    isOpen: true,
    hours: 'Open · Closes 11 PM',
    tags: ['dine-in', 'delivery'],
    pin: { x: 65, y: 19 }
  },
  {
    id: 's4',
    name: 'BK Hazratganj Lucknow',
    address: '4, Hazratganj Market, Lucknow',
    city: 'Lucknow',
    distance: 7.2,
    rating: 4.1,
    isOpen: false,
    hours: 'Closed · Opens 10 AM',
    tags: ['dine-in'],
    pin: { x: 78, y: 43 }
  },
  {
    id: 's5',
    name: 'BK Malviya Nagar Jaipur',
    address: 'Shop 12, Central Spine, Malviya Nagar, Jaipur',
    city: 'Jaipur',
    distance: 9.5,
    rating: 4.3,
    isOpen: true,
    hours: 'Open · Closes 10:30 PM',
    tags: ['drive-thru', 'dine-in', 'delivery'],
    pin: { x: 32, y: 60 }
  },
  {
    id: 's6',
    name: 'BK Taj East Gate Agra',
    address: 'Fatehabad Road, Near Taj East Gate, Agra',
    city: 'Agra',
    distance: 12.1,
    rating: 3.9,
    isOpen: true,
    hours: 'Open · Closes 10 PM',
    tags: ['dine-in', 'delivery'],
    pin: { x: 55, y: 67 }
  },
  {
    id: 's7',
    name: 'BK CG Road Ahmedabad',
    address: 'Swastik Char Rasta, CG Road, Ahmedabad',
    city: 'Ahmedabad',
    distance: 15.8,
    rating: 4.6,
    isOpen: true,
    hours: 'Open 24 Hours',
    tags: ['drive-thru', 'dine-in', 'delivery'],
    pin: { x: 18, y: 79 }
  },
  {
    id: 's8',
    name: 'BK Bandra West Mumbai',
    address: 'Linking Road, Bandra West, Mumbai',
    city: 'Mumbai',
    distance: 18.3,
    rating: 4.5,
    isOpen: true,
    hours: 'Open · Closes 1 AM',
    tags: ['dine-in', 'delivery'],
    pin: { x: 70, y: 81 }
  },
  {
    id: 's9',
    name: 'BK Koregaon Park Pune',
    address: 'Lane 6, Koregaon Park, Pune',
    city: 'Pune',
    distance: 21.6,
    rating: 4.4,
    isOpen: true,
    hours: 'Open · Closes 11 PM',
    tags: ['dine-in', 'delivery'],
    pin: { x: 45, y: 89 }
  },
  {
    id: 's10',
    name: 'BK Saket Delhi',
    address: 'Select Citywalk Mall, Saket, New Delhi',
    city: 'New Delhi',
    distance: 3.7,
    rating: 4.7,
    isOpen: true,
    hours: 'Open · Closes 11 PM',
    tags: ['dine-in', 'delivery'],
    pin: { x: 25, y: 35 }
  },
  {
    id: 's11',
    name: 'BK Sector 63 Noida',
    address: 'Plot 12A, Sector 63, Noida, UP',
    city: 'New Delhi',
    distance: 4.9,
    rating: 4.0,
    isOpen: false,
    hours: 'Closed · Opens 9 AM',
    tags: ['drive-thru', 'dine-in'],
    pin: { x: 30, y: 29 }
  },
  {
    id: 's12',
    name: 'BK Brigade Road Bangalore',
    address: '1st Cross, Brigade Road, Bangalore',
    city: 'Bangalore',
    distance: 28.4,
    rating: 4.3,
    isOpen: true,
    hours: 'Open · Closes 11:30 PM',
    tags: ['dine-in', 'delivery'],
    pin: { x: 60, y: 88 }
  }
];

/* ==========================================================
   STATE
   ========================================================== */

let activeFilter = 'all';
let activeSort   = 'distance';
let activeStoreId = null;
let searchQuery  = '';
let mapScale     = 1;
let mapOffset    = { x: 0, y: 0 };

/* ==========================================================
   DERIVED DATA
   ========================================================== */

function getFilteredStores() {
  let list = [...STORES];

  // Text search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.address.toLowerCase().includes(q) ||
      s.city.toLowerCase().includes(q)
    );
  }

  // Feature filter
  if (activeFilter === 'open-now') {
    list = list.filter(s => s.isOpen);
  } else if (activeFilter !== 'all') {
    list = list.filter(s => s.tags.includes(activeFilter));
  }

  // Sort
  if (activeSort === 'distance') list.sort((a, b) => a.distance - b.distance);
  if (activeSort === 'name')     list.sort((a, b) => a.name.localeCompare(b.name));
  if (activeSort === 'rating')   list.sort((a, b) => b.rating - a.rating);

  return list;
}

/* ==========================================================
   RENDER
   ========================================================== */

function renderStoreList() {
  const container   = document.getElementById('store-list');
  const countEl     = document.getElementById('store-count');
  const stores      = getFilteredStores();

  countEl.textContent = `${stores.length} restaurant${stores.length !== 1 ? 's' : ''} found`;

  if (!stores.length) {
    container.innerHTML = `
      <div class="store-empty">
        <div class="store-empty-icon">🍔</div>
        <p>No restaurants match your search.<br>Try a different city or filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = stores.map(store => `
    <div
      class="store-card ${activeStoreId === store.id ? 'active' : ''}"
      data-id="${store.id}"
      role="button"
      tabindex="0"
      aria-label="Select ${store.name}"
    >
      <div class="store-card-top">
        <div class="store-card-name">${store.name}</div>
        <div class="store-distance">${store.distance} km</div>
      </div>
      <div class="store-card-address">${store.address}</div>
      <div class="store-card-meta">
        <span class="store-tag ${store.isOpen ? 'open' : 'closed'}">
          ${store.isOpen ? '🟢 Open' : '🔴 Closed'}
        </span>
        ${store.tags.map(tag => `<span class="store-tag">${tagLabel(tag)}</span>`).join('')}
        <span class="store-rating">★ ${store.rating}</span>
      </div>
    </div>
  `).join('');

  // Bind click events
  container.querySelectorAll('.store-card').forEach(card => {
    card.addEventListener('click', () => selectStore(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') selectStore(card.dataset.id);
    });
  });
}

function renderMapPins() {
  const pinsEl = document.getElementById('map-pins');
  pinsEl.innerHTML = STORES.map(store => `
    <div
      class="map-pin ${activeStoreId === store.id ? 'active' : ''}"
      data-id="${store.id}"
      style="left: ${store.pin.x}%; top: ${store.pin.y}%"
      title="${store.name}"
    >
      <div class="pin-body">
        <span class="pin-icon">🍔</span>
      </div>
      <div class="pin-ripple"></div>
    </div>
  `).join('');

  pinsEl.querySelectorAll('.map-pin').forEach(pin => {
    pin.addEventListener('click', () => selectStore(pin.dataset.id));
  });
}

function renderMapCard(store) {
  const card       = document.getElementById('map-store-card');
  const nameEl     = document.getElementById('map-card-name');
  const addressEl  = document.getElementById('map-card-address');
  const statusEl   = document.getElementById('map-card-status');
  const directionsBtn = document.getElementById('map-directions-btn');

  nameEl.textContent    = store.name;
  addressEl.textContent = store.address;
  statusEl.textContent  = store.hours;
  statusEl.className    = `map-card-status ${store.isOpen ? 'open' : 'closed'}`;

  directionsBtn.onclick = () => {
    const query = encodeURIComponent(store.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  card.hidden = false;
}

/* ==========================================================
   INTERACTIONS
   ========================================================== */

function selectStore(id) {
  activeStoreId = id === activeStoreId ? null : id;

  if (activeStoreId) {
    const store = STORES.find(s => s.id === activeStoreId);
    renderMapCard(store);
    // Scroll store card into view in the list
    const card = document.querySelector(`.store-card[data-id="${id}"]`);
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    document.getElementById('map-store-card').hidden = true;
  }

  renderStoreList();
  renderMapPins();
}

function initFilters() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderStoreList();
    });
  });
}

function initSearch() {
  const input = document.getElementById('location-search');
  input?.addEventListener('input', () => {
    searchQuery = input.value;
    renderStoreList();
  });
}

function initSort() {
  const select = document.getElementById('sort-select');
  select?.addEventListener('change', () => {
    activeSort = select.value;
    renderStoreList();
  });
}

function initMapCard() {
  document.getElementById('map-card-close')?.addEventListener('click', () => {
    activeStoreId = null;
    document.getElementById('map-store-card').hidden = true;
    renderStoreList();
    renderMapPins();
  });
}

/* ==========================================================
   MAP ZOOM (CSS transform)
   ========================================================== */

function initMapControls() {
  const canvas = document.getElementById('map-canvas');

  document.getElementById('zoom-in')?.addEventListener('click', () => {
    mapScale = Math.min(mapScale + 0.2, 2.4);
    applyMapTransform(canvas);
  });

  document.getElementById('zoom-out')?.addEventListener('click', () => {
    mapScale = Math.max(mapScale - 0.2, 0.6);
    applyMapTransform(canvas);
  });

  document.getElementById('map-reset')?.addEventListener('click', () => {
    mapScale  = 1;
    mapOffset = { x: 0, y: 0 };
    applyMapTransform(canvas);
  });
}

function applyMapTransform(canvas) {
  canvas.style.transformOrigin = 'center center';
  canvas.style.transform =
    `scale(${mapScale}) translate(${mapOffset.x}px, ${mapOffset.y}px)`;
}

/* ==========================================================
   USE MY LOCATION
   ========================================================== */

function initUseLocation() {
  const btn = document.getElementById('use-location-btn');
  btn?.addEventListener('click', () => {
    btn.textContent = '📡 Locating...';
    btn.disabled = true;

    if (!navigator.geolocation) {
      showLocationResult(btn, '❌ Not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        showLocationResult(btn, '✅ Location found!');
        activeSort = 'distance';
        document.getElementById('sort-select').value = 'distance';
        renderStoreList();
      },
      () => {
        showLocationResult(btn, '❌ Permission denied');
      }
    );
  });
}

function showLocationResult(btn, msg) {
  btn.textContent = msg;
  setTimeout(() => {
    btn.textContent = '📡 Use My Location';
    btn.disabled = false;
  }, 2500);
}

/* ==========================================================
   HELPERS
   ========================================================== */

function tagLabel(tag) {
  const map = {
    'drive-thru': '🚗 Drive-Thru',
    'dine-in':    '🍽️ Dine-In',
    'delivery':   '🛵 Delivery'
  };
  return map[tag] || tag;
}

/* ==========================================================
   INIT
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderStoreList();
  renderMapPins();
  initFilters();
  initSearch();
  initSort();
  initMapCard();
  initMapControls();
  initUseLocation();
});