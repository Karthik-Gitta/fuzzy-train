/**
 * COOKIES AND CREAM (CNC) - CONTACT & VISIT PAGE LOGIC
 * Handles contact/table reservation form validation, copy-to-clipboard, and interaction feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCopyActions();
});

function initContactForm() {
  const form = document.getElementById('cafeContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const inquiryType = form.querySelector('[name="type"]');
    const messageInput = form.querySelector('[name="message"]');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!nameInput.value.trim() || !phoneInput.value.trim()) {
      if (window.showToast) {
        window.showToast('Please provide your name and contact phone number.', 'fa-triangle-exclamation');
      }
      return;
    }

    // Phone validation for Indian 10-digit mobile number
    const cleanPhone = phoneInput.value.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      if (window.showToast) {
        window.showToast('Please enter a valid 10-digit phone number.', 'fa-circle-exclamation');
      }
      phoneInput.focus();
      return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
    submitBtn.disabled = true;

    // Simulate pleasant network response
    setTimeout(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      form.reset();

      if (window.showToast) {
        window.showToast('Message sent! Our cafe team will get in touch shortly.', 'fa-circle-check');
      }
    }, 900);
  });
}

function initCopyActions() {
  const copyBtns = document.querySelectorAll('[data-copy-text]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy-text');
      if (navigator.clipboard && text) {
        navigator.clipboard.writeText(text).then(() => {
          if (window.showToast) {
            window.showToast(`Copied to clipboard: ${text}`, 'fa-copy');
          }
        });
      }
    });
  });
}
