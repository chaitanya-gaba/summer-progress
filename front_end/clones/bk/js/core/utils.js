/**
 * UTILS.JS
 * Shared utilities and theme management
 */

import { THEMES, THEME_DEFAULT, THEME_STORAGE_KEY } from './config.js';

/* ==========================================================
   THEME MANAGEMENT
   ========================================================== */

export function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  const validTheme = THEMES.includes(savedTheme)
    ? savedTheme
    : THEME_DEFAULT;

  applyTheme(validTheme);
  attachThemeToggleListeners();
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

function attachThemeToggleListeners() {
  const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
  if (!toggleButtons.length) return;

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const newTheme = btn.dataset.themeToggle;
      if (THEMES.includes(newTheme)) {
        applyTheme(newTheme);
      }
    });
  });
}

/* ==========================================================
   HELPERS
   ========================================================== */

export function formatPrice(amount) {
  return `₹${Number(amount).toFixed(0)}`;
}

export function throttle(func, limit = 100) {
  let lastFunc;
  let lastRan;

  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export function smoothScrollTo(target, offset = 0) {
  if (!target) return;

  const top =
    target.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top,
    behavior: 'smooth'
  });
}