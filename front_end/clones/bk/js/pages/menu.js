/**
 * MENU.JS — Self-contained. No external imports.
 * All menu data is baked in. Cart works fully.
 * Writes cart to localStorage so nav badge stays in sync.
 */

/* ==========================================================
   MENU DATA — all items inline, no file dependency
   ========================================================== */

const MENU_ITEMS = [
  // Burgers & Wraps
  { id: 'whopper',         name: 'Whopper',                category: 'burgers',   price: 199, emoji: '🍔' },
  { id: 'whopper-jr',      name: 'Whopper Jr.',            category: 'burgers',   price: 129, emoji: '🍔' },
  { id: 'dbl-whopper',     name: 'Double Whopper',         category: 'burgers',   price: 299, emoji: '🍔' },
  { id: 'cheese-whopper',  name: 'Cheese Whopper',         category: 'burgers',   price: 219, emoji: '🧀' },
  { id: 'spicy-whopper',   name: 'Spicy Whopper',          category: 'burgers',   price: 199, emoji: '🌶️' },
  { id: 'bacon-whopper',   name: 'Bacon Whopper',          category: 'burgers',   price: 239, emoji: '🥓' },
  { id: 'veg-whopper',     name: 'Veg Whopper',            category: 'burgers',   price: 149, emoji: '🥗' },
  { id: 'crispy-chicken',  name: 'Crispy Chicken Burger',  category: 'burgers',   price: 169, emoji: '🍗' },
  { id: 'paneer-royale',   name: 'Paneer Royale',          category: 'burgers',   price: 179, emoji: '🧀' },

  // Chicken
  { id: 'nuggets-6',       name: 'Chicken Nuggets (6pc)',  category: 'chicken',   price: 149, emoji: '🍗' },
  { id: 'nuggets-9',       name: 'Chicken Nuggets (9pc)',  category: 'chicken',   price: 199, emoji: '🍗' },
  { id: 'chk-strips',      name: 'Chicken Strips (3pc)',   category: 'chicken',   price: 169, emoji: '🍗' },
  { id: 'spicy-chk',       name: 'Spicy Chicken Burger',   category: 'chicken',   price: 179, emoji: '🌶️' },

  // Sides
  { id: 'fries-reg',       name: 'French Fries (Regular)', category: 'sides',     price: 79,  emoji: '🍟' },
  { id: 'fries-lg',        name: 'French Fries (Large)',   category: 'sides',     price: 99,  emoji: '🍟' },
  { id: 'onion-rings',     name: 'Onion Rings',            category: 'sides',     price: 99,  emoji: '🧅' },
  { id: 'mozz-sticks',     name: 'Mozzarella Sticks',      category: 'sides',     price: 129, emoji: '🧀' },
  { id: 'wedges',          name: 'Potato Wedges',          category: 'sides',     price: 99,  emoji: '🥔' },
  { id: 'spicy-fries',     name: 'Spicy Fries',            category: 'sides',     price: 89,  emoji: '🌶️' },

  // Meals
  { id: 'king-meal',       name: 'King Meal',              category: 'meals',     price: 299, emoji: '👑' },
  { id: 'spicy-chk-meal',  name: 'Spicy Chicken Meal',     category: 'meals',     price: 279, emoji: '🌶️' },
  { id: 'veg-meal',        name: 'Veg Meal',               category: 'meals',     price: 199, emoji: '🥗' },
  { id: 'family-meal',     name: 'Family Combo',           category: 'meals',     price: 499, emoji: '👨‍👩‍👧' },
  { id: 'dbl-chk-meal',    name: 'Double Chicken Meal',    category: 'meals',     price: 349, emoji: '🍗' },

  // Beverages
  { id: 'coke-reg',        name: 'Coke (Regular)',         category: 'beverages', price: 49,  emoji: '🥤' },
  { id: 'coke-lg',         name: 'Coke (Large)',           category: 'beverages', price: 69,  emoji: '🥤' },
  { id: 'choc-shake',      name: 'Chocolate Shake',        category: 'beverages', price: 129, emoji: '🍫' },
  { id: 'cappuccino',      name: 'Cappuccino',             category: 'beverages', price: 119, emoji: '☕' },
  { id: 'mocha',           name: 'BK Mocha',               category: 'beverages', price: 139, emoji: '☕' },
  { id: 'iced-tea',        name: 'Iced Tea',               category: 'beverages', price: 79,  emoji: '🧋' },
  { id: 'espresso',        name: 'Double Espresso',        category: 'beverages', price: 99,  emoji: '☕' },

  // Desserts
  { id: 'soft-serve',      name: 'Soft Serve Cone',        category: 'desserts',  price: 49,  emoji: '🍦' },
  { id: 'sundae',          name: 'Sundae',                  category: 'desserts',  price: 79,  emoji: '🍦' },
  { id: 'brownie',         name: 'Chocolate Brownie',      category: 'desserts',  price: 99,  emoji: '🍫' },
  { id: 'apple-pie',       name: 'Apple Pie',              category: 'desserts',  price: 89,  emoji: '🥧' },
  { id: 'donut',           name: 'BK Donut',               category: 'desserts',  price: 89,  emoji: '🍩' },
];

const CATEGORY_LABELS = {
  burgers:   '🍔 Burgers & Wraps',
  chicken:   '🍗 Chicken',
  sides:     '🍟 Sides',
  meals:     '👑 Meals & Combos',
  beverages: '🥤 Beverages',
  desserts:  '🍦 Desserts',
};

/* ==========================================================
   CART — uses localStorage so nav badge & all pages sync
   ========================================================== */

const CART_KEY = 'bk-cart';

function cartLoad() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}

function cartSave(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateNavBadge(cart);
}

function updateNavBadge(cart) {
  const total = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  // Update ALL badge elements on page (nav + drawer)
  document.querySelectorAll('[data-cart-count], .cart-count').forEach(el => {
    el.textContent = total;
  });
}

function cartAdd(id, name, price) {
  const cart = cartLoad();
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { id, name, price: parseInt(price, 10), qty: 1 };
  }
  cartSave(cart);
  return cart;
}

function cartIncrease(id) {
  const cart = cartLoad();
  if (cart[id]) cart[id].qty++;
  cartSave(cart);
  return cart;
}

function cartDecrease(id) {
  const cart = cartLoad();
  if (cart[id]) {
    cart[id].qty--;
    if (cart[id].qty <= 0) delete cart[id];
  }
  cartSave(cart);
  return cart;
}

function cartClear() {
  cartSave({});
  return {};
}

/* ==========================================================
   RENDER CART SIDEBAR
   ========================================================== */

function renderCart() {
  const cart       = cartLoad();
  const items      = Object.values(cart);
  const cartItemsEl = document.querySelector('.cart-items');
  const subtotalEl  = document.querySelector('.subtotal-value');
  const gstEl       = document.querySelector('.gst-value');
  const totalEl     = document.querySelector('.total-value');

  if (!cartItemsEl) return;

  if (items.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <span style="font-size:3rem">🛒</span>
        <p style="color:#797979;margin-top:8px;font-size:14px">Your cart is empty</p>
      </div>`;
  } else {
    cartItemsEl.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <span class="cart-item-name">${item.name}</span>
        <div class="quantity-controls">
          <button class="decrease" data-id="${item.id}">−</button>
          <span class="qty">${item.qty}</span>
          <button class="increase" data-id="${item.id}">+</button>
          <span class="item-price">₹${item.price * item.qty}</span>
        </div>
      </div>
    `).join('');
  }

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const gst      = Math.round(subtotal * 0.05);  /* 5% GST on food */
  const total    = subtotal + gst;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (gstEl)      gstEl.textContent      = `₹${gst}`;
  if (totalEl)    totalEl.textContent    = `₹${total}`;

  updateNavBadge(cart);
}

/* ==========================================================
   RENDER MENU SECTIONS
   ========================================================== */

function renderMenu(filter = '') {
  const container = document.getElementById('menu-items');
  if (!container) return;

  container.innerHTML = '';

  const categories = [...new Set(MENU_ITEMS.map(i => i.category))];

  categories.forEach(cat => {
    const items = MENU_ITEMS.filter(i =>
      i.category === cat &&
      (!filter || i.name.toLowerCase().includes(filter.toLowerCase()))
    );
    if (!items.length) return;

    const section = document.createElement('div');
    section.className = 'menu-section';
    section.id = cat;

    section.innerHTML = `
      <h2 class="menu-section-title">${CATEGORY_LABELS[cat] || cat}</h2>
      <div class="product-grid">
        ${items.map(item => `
          <div class="product-card">
            <div class="product-emoji">${item.emoji}</div>
            <div class="product-info">
              <h3>${item.name}</h3>
              <div class="product-footer">
                <span class="price">₹${item.price}</span>
                <button
                  class="add-btn"
                  data-id="${item.id}"
                  data-name="${item.name}"
                  data-price="${item.price}"
                >+ Add</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.appendChild(section);
  });
}

/* ==========================================================
   CATEGORY FILTER CHIPS
   ========================================================== */

function initCategoryChips() {
  document.querySelectorAll('[data-target]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-target]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const target = chip.dataset.target;

      if (target === 'all') {
        document.querySelectorAll('.menu-section').forEach(s => s.style.display = '');
      } else {
        document.querySelectorAll('.menu-section').forEach(s => {
          s.style.display = s.id === target ? '' : 'none';
        });
        const section = document.getElementById(target);
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ==========================================================
   SEARCH
   ========================================================== */

function initSearch() {
  const input = document.getElementById('menu-search');
  if (!input) return;
  input.addEventListener('input', () => {
    renderMenu(input.value.trim());
    initCategoryChips();   // re-attach chips after re-render
    attachAddButtons();
    attachCartControls();
  });
}

/* ==========================================================
   ADD BUTTON — delegated on #menu-items
   ========================================================== */

function attachAddButtons() {
  const container = document.getElementById('menu-items');
  if (!container) return;

  // Remove old listener by cloning
  const fresh = container.cloneNode(true);
  container.parentNode.replaceChild(fresh, container);

  fresh.addEventListener('click', e => {
    const btn = e.target.closest('.add-btn');
    if (!btn) return;

    const { id, name, price } = btn.dataset;
    cartAdd(id, name, price);
    renderCart();
    // Notify mobile cart to open
    window.dispatchEvent(new CustomEvent('bk-cart-updated'));

    // Visual feedback
    const original = btn.textContent;
    btn.textContent = '✓ Added';
    btn.classList.add('added');
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('added');
      btn.disabled = false;
    }, 900);
  });
}

/* ==========================================================
   CART CONTROLS — increase / decrease
   ========================================================== */

function attachCartControls() {
  const cartEl = document.querySelector('.cart');
  if (!cartEl) return;

  cartEl.addEventListener('click', e => {
    const id = e.target.dataset?.id;
    if (!id) return;

    if (e.target.classList.contains('increase')) {
      cartIncrease(id);
    } else if (e.target.classList.contains('decrease')) {
      cartDecrease(id);
    }
    renderCart();
  });
}

/* ==========================================================
   CHECKOUT
   ========================================================== */

function initCheckout() {
  const btn = document.querySelector('.checkout-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const cart  = cartLoad();
    const items = Object.values(cart);
    if (!items.length) {
      alert('Your cart is empty!');
      return;
    }
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    const total    = subtotal + Math.round(subtotal * 0.05);
    alert(`✅ Order placed!\nTotal: ₹${total}\n\nThank you for choosing Burger King!`);
    cartClear();
    renderCart();
  });
}

/* ==========================================================
   BOOT
   ========================================================== */

/* ==========================================================
   MOBILE CART — bottom sheet toggle
   
   KEY FIX: We delegate the click to the .cart element itself,
   not to .cart h3 — because renderCart() replaces innerHTML
   which destroys any listener attached directly to h3.
   
   We check if the click target is the h3 OR is inside h3.
   ========================================================== */

function initMobileCart() {
  const cartEl = document.querySelector('.cart');
  if (!cartEl) return;

  function isMobile() { return window.innerWidth <= 820; }

  // Delegate on .cart — survives innerHTML re-renders
  cartEl.addEventListener('click', e => {
    if (!isMobile()) return;

    // Only toggle if user clicked the h3 header area
    const h3 = cartEl.querySelector('h3');
    if (h3 && (e.target === h3 || h3.contains(e.target))) {
      cartEl.classList.toggle('open');
    }
  });

  // Auto-open when item added on mobile
  window.addEventListener('bk-cart-updated', () => {
    if (isMobile()) {
      cartEl.classList.add('open');
    }
  });

  // Tap the backdrop (outside cart) to close
  document.addEventListener('click', e => {
    if (!isMobile()) return;
    if (cartEl.classList.contains('open') && !cartEl.contains(e.target)) {
      cartEl.classList.remove('open');
    }
  });

  // Clean up on desktop resize
  window.addEventListener('resize', () => {
    if (!isMobile()) cartEl.classList.remove('open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderCart();
  initCategoryChips();
  attachAddButtons();
  attachCartControls();
  initSearch();
  initCheckout();
  initMobileCart();

  // Sync badge on load
  updateNavBadge(cartLoad());
});