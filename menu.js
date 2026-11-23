/**
 * COOKIES AND CREAM (CNC) - CLEAN & ELEGANT MENU CONTROLLER
 * Handles category filtering, instant search, and Veg / Non-Veg toggles.
 * Simple, fast, vanilla JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMenuRenderer();
});

let currentCategory = 'all';
let currentDiet = 'all'; // 'all', 'veg', 'nonveg'
let currentSearchQuery = '';

function initMenuRenderer() {
  const categoryPillsContainer = document.getElementById('categoryPillsContainer');
  const menuGrid = document.getElementById('menuGrid');
  const searchInput = document.getElementById('menuSearchInput');
  const dietFilterBtns = document.querySelectorAll('.diet-filter-btn');
  const itemCountEl = document.getElementById('menuItemCount');

  if (!menuGrid) return;

  // Render category buttons dynamically
  if (categoryPillsContainer && typeof MENU_CATEGORIES !== 'undefined') {
    categoryPillsContainer.innerHTML = MENU_CATEGORIES.map(cat => `
      <button class="category-pill ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
        <i class="fa-solid ${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');

    categoryPillsContainer.querySelectorAll('.category-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        categoryPillsContainer.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderFilteredItems();
      });
    });
  }

  // Dietary filter buttons (All / Veg / Non-Veg)
  dietFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dietFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDiet = btn.getAttribute('data-diet');
      renderFilteredItems();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderFilteredItems();
    });
  }

  // Filter & Render
  function renderFilteredItems() {
    if (typeof MENU_ITEMS === 'undefined') return;

    const filtered = MENU_ITEMS.filter(item => {
      // Category match
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;

      // Diet match
      let matchesDiet = true;
      if (currentDiet === 'veg') matchesDiet = item.isVeg === true;
      if (currentDiet === 'nonveg') matchesDiet = item.isVeg === false;

      // Search match
      let matchesSearch = true;
      if (currentSearchQuery) {
        matchesSearch = item.name.toLowerCase().includes(currentSearchQuery) ||
                        item.categoryName.toLowerCase().includes(currentSearchQuery);
      }

      return matchesCategory && matchesDiet && matchesSearch;
    });

    if (itemCountEl) {
      itemCountEl.textContent = `Showing ${filtered.length} of ${MENU_ITEMS.length} items`;
    }

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: 16px; border: 1px dashed var(--color-cream-border);">
          <i class="fa-solid fa-mug-saucer" style="font-size: 2.8rem; color: var(--color-gold); margin-bottom: 14px;"></i>
          <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--color-primary); margin-bottom: 8px;">No matching items found</h3>
          <p style="color: var(--color-muted); font-size: 0.95rem; margin-bottom: 20px;">Try adjusting your search terms or dietary filter.</p>
          <button id="resetMenuFiltersBtn" class="btn btn-outline-dark btn-sm">Reset All Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetMenuFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          currentDiet = 'all';
          currentSearchQuery = '';
          if (searchInput) searchInput.value = '';
          dietFilterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-diet') === 'all'));
          if (categoryPillsContainer) {
            categoryPillsContainer.querySelectorAll('.category-pill').forEach(b => b.classList.toggle('active', b.getAttribute('data-category') === 'all'));
          }
          renderFilteredItems();
        });
      }
      return;
    }

    // Render clean, simple, elegant cards with Veg/Non-Veg icons and prices in ₹
    menuGrid.innerHTML = filtered.map(item => {
      const dietIcon = item.isVeg
        ? `<span class="diet-symbol-box veg" title="Vegetarian"><span class="diet-symbol-circle"></span></span>`
        : `<span class="diet-symbol-box non-veg" title="Non-Vegetarian"><span class="diet-symbol-circle"></span></span>`;

      return `
        <div class="menu-item-tile" data-id="${item.id}" data-category="${item.category}">
          <div class="menu-item-tile-top">
            <div class="menu-item-tile-left">
              ${dietIcon}
              <div class="menu-item-tile-info">
                <h3 class="menu-item-tile-name">${item.name}</h3>
                <span class="menu-item-tile-category">${item.categoryName}</span>
              </div>
            </div>
            <div class="menu-item-tile-price">₹${item.price.toFixed(2)}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Initial render
  renderFilteredItems();
}
