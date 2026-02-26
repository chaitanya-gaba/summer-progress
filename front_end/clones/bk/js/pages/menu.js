/**
 * menu.js
 * Handles dynamic menu rendering and cart functionality
 */

console.log('Menu.js loaded');
console.log(MENU_ITEMS);

import { MENU_ITEMS } from '../components/menu-items.js';
import { formatPrice, smoothScrollTo } from '../core/utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu-items');
  const categoryChips = document.querySelectorAll('.category-chip');
  const searchInput = document.getElementById('menu-search');
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalEl = document.querySelector('.cart-footer .total strong');
  const cartCountEl = document.querySelector('.cart-count');
  let cart = [];

  // ==========================================================
  // 1️⃣ Render menu sections dynamically
  // ==========================================================
  const categories = [...new Set(MENU_ITEMS.map(item => item.category))];

  categories.forEach(category => {
    const section = document.createElement('div');
    section.className = 'menu-section';
    section.id = category;

    const titleEl = document.createElement('h2');
    titleEl.textContent = Array.from(categoryChips).find(chip => chip.dataset.target === category)?.textContent || category;
    section.appendChild(titleEl);

    const grid = document.createElement('div');
    grid.className = 'product-grid';

    MENU_ITEMS.filter(item => item.category === category).forEach(item => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="assets/images/products/${item.image}" alt="${item.name}">
        <div class="product-info">
          <h3>${item.name}</h3>
          <p></p>
          <div class="product-footer">
            <span class="price">${formatPrice(item.price)}</span>
            <button class="add-btn">Add</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    menuContainer.appendChild(section);
  });

  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get('category');
  if (selectedCategory) {
    // 1️⃣ Remove active from all chips
    categoryChips.forEach(c => c.classList.remove('active'));

    // 2️⃣ Add active to the one from URL
    const activeChip = Array.from(categoryChips).find(chip => chip.dataset.target === selectedCategory);
    if (activeChip) activeChip.classList.add('active');

    // 3️⃣ Show only the selected category
    document.querySelectorAll('.menu-section').forEach(section => {
      if (selectedCategory === 'all') {
        section.style.display = 'block';
      } else {
        section.style.display = section.id === selectedCategory ? 'block' : 'none';
      }
    });

    // 4️⃣ Scroll to that section
    const section = document.getElementById(selectedCategory);
    if (section) smoothScrollTo(section, 80);
  }

  // ==========================================================
  // 2️⃣ Category chip scrolling
  // ==========================================================
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      // 1️⃣ Update active class
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const targetId = chip.dataset.target;

      // 2️⃣ Show only the selected category
      document.querySelectorAll('.menu-section').forEach(section => {
        if (targetId === 'all') {
          // If you want an "All" category, show all sections
          section.style.display = 'block';
        } else {
          section.style.display = section.id === targetId ? 'block' : 'none';
        }
      });

      // 3️⃣ Scroll to top of menu container (optional)
      menuContainer.scrollTop = 0;
    });
  });

  // ==========================================================
  // 🔍 Search functionality
  // ==========================================================

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    const allSections = document.querySelectorAll('.menu-section');

    allSections.forEach(section => {
      let sectionHasVisibleItems = false;

      const cards = section.querySelectorAll('.product-card');

      cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();

        if (name.includes(searchTerm)) {
          card.style.display = 'flex';
          sectionHasVisibleItems = true;
        } else {
          card.style.display = 'none';
        }
      });

      // Hide section if no items match
      section.style.display = sectionHasVisibleItems ? 'block' : 'none';
    });
  });

  // ==========================================================
  // 3️⃣ Add to cart
  // ==========================================================
  function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalEl = document.querySelector('.subtotal-value');
    const gstEl = document.querySelector('.gst-value');
    const totalEl = document.querySelector('.total-value');
    const cartCountEl = document.querySelector('.cart-count');

    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
      // Create cart item row
      const div = document.createElement('div');
      div.className = 'cart-item';

      div.innerHTML = `
        <span>${item.name}</span>
        <div class="quantity-controls">
          <button class="decrease">−</button>
          <span class="qty">${item.qty}</span>
          <button class="increase">+</button>
          <span class="item-price">₹${item.price * item.qty}</span>
        </div>
      `;

      // Button functionality
      const btnIncrease = div.querySelector('.increase');
      const btnDecrease = div.querySelector('.decrease');
      const qtySpan = div.querySelector('.qty');
      const priceSpan = div.querySelector('.item-price');

      btnIncrease.addEventListener('click', () => {
        item.qty++;
        qtySpan.textContent = item.qty;
        priceSpan.textContent = `₹${item.price * item.qty}`;
        updateCartDisplay();
      });

      btnDecrease.addEventListener('click', () => {
        item.qty--;
        if (item.qty <= 0) {
          cart = cart.filter(ci => ci !== item);
        }
        updateCartDisplay();
      });

      cartItemsContainer.appendChild(div);

      subtotal += item.price * item.qty;
    });

    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    subtotalEl.textContent = `₹${subtotal}`;
    gstEl.textContent = `₹${gst}`;
    totalEl.textContent = `₹${total}`;

    const totalQuantity = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCountEl.textContent = totalQuantity;
  }

  menuContainer.addEventListener('click', e => {
    if (e.target.classList.contains('add-btn')) {
      const card = e.target.closest('.product-card');
      const name = card.querySelector('h3').textContent;
      const price = parseInt(
        card.querySelector('.price').textContent.replace(/[^\d]/g, ''),
        10
      );

      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.qty++;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      updateCartDisplay();
    }
  });

  // ==========================================================
  // 4️⃣ Checkout
  // ==========================================================
  const checkoutBtn = document.querySelector('.checkout-btn');
  checkoutBtn.addEventListener('click', () => {
    if (!cart.length) return alert('Your cart is empty!');
    alert(`Order placed!\nTotal: ${formatPrice(cart.reduce((acc, i) => acc + i.price, 0))}`);
    cart = [];
    updateCartDisplay();
  });
});