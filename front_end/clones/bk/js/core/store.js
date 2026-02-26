// js/core/store.js

import {
  CART_STORAGE_KEY,
  THEME_STORAGE_KEY,
  THEME_DEFAULT
} from './config.js';

/* ==========================================================
   INTERNAL STATE
   ========================================================== */

const state = {
  cart: {},
  theme: THEME_DEFAULT,
};

const listeners = new Set();

/* ==========================================================
   UTILITIES
   ========================================================== */

function notify() {
  listeners.forEach(listener => listener(getState()));
}

function persistCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}

function persistTheme() {
  localStorage.setItem(THEME_STORAGE_KEY, state.theme);
}

/* ==========================================================
   PUBLIC API
   ========================================================== */

export function getState() {
  // Return shallow copy to prevent direct mutation
  return {
    ...state,
    cart: { ...state.cart },
  };
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener); // unsubscribe
}

/* ==========================================================
   CART ACTIONS
   ========================================================== */

export function initCart() {
  const saved = localStorage.getItem(CART_STORAGE_KEY);
  state.cart = saved ? JSON.parse(saved) : {};
  notify();
}

export function addToCart(item) {
  if (!item?.id) return;

  if (!state.cart[item.id]) {
    state.cart[item.id] = { ...item, quantity: 1 };
  } else {
    state.cart[item.id].quantity++;
  }

  persistCart();
  notify();
}

export function decreaseFromCart(id) {
  if (!state.cart[id]) return;

  state.cart[id].quantity--;

  if (state.cart[id].quantity <= 0) {
    delete state.cart[id];
  }

  persistCart();
  notify();
}

export function removeFromCart(id) {
  if (!state.cart[id]) return;

  delete state.cart[id];
  persistCart();
  notify();
}

export function clearCart() {
  state.cart = {};
  persistCart();
  notify();
}

/* ==========================================================
   THEME ACTIONS
   ========================================================== */

export function initTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  state.theme = saved || THEME_DEFAULT;
  applyThemeToDOM();
  notify();
}

export function setTheme(theme) {
  state.theme = theme;
  persistTheme();
  applyThemeToDOM();
  notify();
}

function applyThemeToDOM() {
  document.documentElement.setAttribute('data-theme', state.theme);
}