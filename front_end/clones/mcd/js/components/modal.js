/**
 * MENU.JS
 * Handles menu page interactions
 * - Category chip clicks
 * - Add to cart functionality
 * - Cart total calculation
 */

import { formatPrice, smoothScrollTo } from './core/utils.js';

document.addEventListener('DOMContentLoaded', () => {

  /** ==========================================================
   * CATEGORY CHIP SCROLLING
   * ========================================================== */
  const categoryChips = document.querySelectorAll('.category-chip');
  const menuSections = document.querySelectorAll('.menu-section');

  categoryChips.forEach((chip, index) => {
    chip.addEventListener('click', () => {
      // Remove active class from all chips
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      // Scroll to the corresponding section
      if (menuSections[index]) {
        smoothScrollTo(menuSections[index], 80); // offset for sticky nav
      }
    });
  });

  /** ==========================================================
   * ADD TO CART FUNCTIONALITY
   * ========================================================== */
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalEl = document.querySelector('.cart-footer .total strong');

  // Initialize cart as empty
  let cart = [];

  function updateCartDisplay() {
    // Clear current items
    cartItemsContainer.innerHTML = '';

    // Populate items
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <span>${item.name}</span>
        <span>${formatPrice(item.price)}</span>
      `;
      cartItemsContainer.appendChild(div);
    });

    // Update total
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalEl.textContent = formatPrice(total);
  }

  // Handle Add button clicks
  const addButtons = document.querySelectorAll('.add-btn');
  addButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const name = card.querySelector('h3').textContent;
      const priceText = card.querySelector('.price').textContent;
      const price = parseInt(priceText.replace(/[^\d]/g, ''), 10);

      cart.push({ name, price });
      updateCartDisplay();
    });
  });

  /** ==========================================================
   * OPTIONAL: Checkout button
   * ========================================================== */
  const checkoutBtn = document.querySelector('.checkout-btn');
  checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Order placed!\nTotal: ${formatPrice(cart.reduce((acc, i) => acc + i.price, 0))}`);
    cart = [];
    updateCartDisplay();
  });

});