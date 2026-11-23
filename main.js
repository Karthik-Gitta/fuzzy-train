/**
 * COOKIES AND CREAM (CNC) - MAIN JAVASCRIPT
 * Handles Navigation, Live Open/Closed Timing Checker, Gallery Lightbox, FAQ Accordion & Toasts
 * Simple Vanilla JavaScript - Compatible with all browsers and devices
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveStatusChecker();
  initMobileNavigation();
  initStickyHeader();
  initBackToTop();
  initSmoothScroll();
  initGalleryFilterAndLightbox();
  initFaqAccordion();
});

/* ==========================================================================
   1. LIVE OPEN / CLOSED STATUS CHECKER
   Hours: 11:00 AM to 10:30 PM (Every day, Indian Standard Time UTC+5:30)
   ========================================================================== */
function initLiveStatusChecker() {
  const updateStatus = () => {
    const now = new Date();
    // Convert to Indian Standard Time (UTC + 5:30)
    const utcOffset = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utcOffset + (3600000 * 5.5));

    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const currentMinutes = (hours * 60) + minutes;

    const OPEN_MINUTES = 11 * 60;          // 11:00 AM = 660 mins
    const CLOSE_MINUTES = 22 * 60 + 30;    // 10:30 PM = 1350 mins

    const isOpen = currentMinutes >= OPEN_MINUTES && currentMinutes < CLOSE_MINUTES;

    const statusPills = document.querySelectorAll('.live-status-pill');
    const timingDescriptions = document.querySelectorAll('[data-cafe-timing-desc]');

    if (isOpen) {
      const minutesRemaining = CLOSE_MINUTES - currentMinutes;
      const hoursRemaining = Math.floor(minutesRemaining / 60);
      const minsLeft = minutesRemaining % 60;

      let timeMsg = 'Closes at 10:30 PM';
      if (hoursRemaining < 1) {
        timeMsg = `Closes in ${minsLeft} mins`;
      }

      statusPills.forEach(pill => {
        pill.className = 'live-status-pill is-open';
        pill.innerHTML = `<span class="live-status-dot"></span><span>Open Now &bull; ${timeMsg}</span>`;
      });

      timingDescriptions.forEach(desc => {
        desc.textContent = `We are open right now! Visit us for fresh brews, bakes, and savory treats until 10:30 PM tonight.`;
      });
    } else {
      let openMsg = 'Opens at 11:00 AM';
      if (currentMinutes >= CLOSE_MINUTES) {
        openMsg = 'Opens tomorrow at 11:00 AM';
      }

      statusPills.forEach(pill => {
        pill.className = 'live-status-pill is-closed';
        pill.innerHTML = `<span class="live-status-dot"></span><span>Closed Now &bull; ${openMsg}</span>`;
      });

      timingDescriptions.forEach(desc => {
        desc.textContent = `We are currently closed. We welcome you every day from 11:00 AM to 10:30 PM. See you soon!`;
      });
    }
  };

  updateStatus();
  setInterval(updateStatus, 30000);
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   3. STICKY HEADER SCROLL EFFECT
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   4. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   5. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ==========================================================================
   6. INTERACTIVE GALLERY FILTER & LIGHTBOX
   ========================================================================== */
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (filterBtns.length > 0 && galleryCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-gallery-filter');

        galleryCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Gallery Card Click to open Lightbox Modal
  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.gallery-card-title')?.textContent || 'Cookies & Cream Gallery';
      const tag = card.querySelector('.gallery-card-tag')?.textContent || '';

      if (img) {
        openGenericLightbox(img.src, `${tag ? tag + ' — ' : ''}${title}`);
      } else {
        const placeholderText = card.querySelector('.placeholder-label')?.textContent || title;
        if (window.showToast) {
          window.showToast(`Selected: ${placeholderText}. Photo ready for replacement.`, 'fa-camera');
        }
      }
    });
  });
}

/* Generic Lightbox Helper */
function openGenericLightbox(src, captionText) {
  let lightbox = document.getElementById('generalLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'generalLightbox';
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-content-box">
        <button class="lightbox-close" id="generalLightboxClose" aria-label="Close viewer">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img src="${src}" alt="${captionText}" class="lightbox-img" id="generalLightboxImg">
        <div class="lightbox-caption" id="generalLightboxCaption">${captionText}</div>
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = document.getElementById('generalLightboxClose');
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  } else {
    document.getElementById('generalLightboxImg').src = src;
    document.getElementById('generalLightboxCaption').textContent = captionText;
  }

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   7. FAQ ACCORDION COMPONENT
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   8. GLOBAL TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, icon = 'fa-check-circle') {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid ${icon}" style="color: var(--color-gold); font-size: 1.2rem;"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
window.showToast = showToast;
