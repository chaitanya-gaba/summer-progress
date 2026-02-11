/**
 * CART.JS
 * Handles cart state, persistence, and rendering
 */

import { CART_STORAGE_KEY } from '../core/config.js';
import { formatPrice } from '../core/utils.js';

let cart = {};

/* ==========================================================
   INITIALIZATION
   ========================================================== */

export function initCart() {
  loadCart();
  updateCartCount();
  renderCart();
}

/* ==========================================================
   STORAGE
   ========================================================== */

function loadCart() {
  const saved = localStorage.getItem(CART_STORAGE_KEY);
  cart = saved ? JSON.parse(saved) : {};
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

/* ==========================================================
   CART ACTIONS
   ========================================================== */

export function addToCart(item) {
  if (!item?.id || !item?.price) return;

  if (!cart[item.id]) {
    cart[item.id] = { ...item, quantity: 1 };
  } else {
    cart[item.id].quantity += 1;
  }

  saveCart();
  updateCartCount();
  renderCart();
}

export function removeFromCart(id) {
  if (!cart[id]) return;

  delete cart[id];
  saveCart();
  updateCartCount();
  renderCart();
}

export function clearCart() {
  cart = {};
  saveCart();
  updateCartCount();
  renderCart();
}

/* ==========================================================
   UI UPDATES
   ========================================================== */

function updateCartCount() {
  const countEl = document.querySelector('[data-cart-count]');
  if (!countEl) return;

  const totalItems = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  countEl.textContent = totalItems;
}

function renderCart() {
  const container = document.querySelector('.cart-items');
  const totalEl = document.querySelector('.total strong');

  if (!container || !totalEl) return;

  container.innerHTML = '';

  let total = 0;

  Object.values(cart).forEach(item => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="cart-row">
        <span>${item.name}</span>
        <span>x${item.quantity}</span>
        <span>${formatPrice(item.price * item.quantity)}</span>
      </div>
    `;
  });

  totalEl.textContent = formatPrice(total);
}