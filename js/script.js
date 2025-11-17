// script.js - Enhanced interactivity for GreenSprout (hamburger, accordion, lightbox, filter, forms)

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Hamburger Nav ---------- */
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (ham && nav) {
    ham.addEventListener('click', () => {
      const isShown = getComputedStyle(nav).display !== 'none' && nav.style.display === 'flex';
      nav.style.display = isShown ? 'none' : 'flex';
      // simple accessible toggle
      ham.setAttribute('aria-expanded', String(!isShown));
    });
  }

  /* ---------- Accordion FAQ ---------- */
  document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        panel.style.maxHeight = null;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Lightbox for gallery ---------- */
  const lightbox = document.querySelector('.lightbox');
  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', (e) => {
      const src = img.dataset.large || img.src;
      const lbImg = lightbox.querySelector('img');
      lbImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Product Search Filter ---------- */
  const searchInput = document.querySelector('#product-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.product-card').forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = (card.querySelector('.card-desc') || {textContent:''}).textContent.toLowerCase();
        const tags = (card.dataset.tags || '').toLowerCase();
        card.style.display = (title.includes(q) || desc.includes(q) || tags.includes(q)) ? '' : 'none';
      });
    });
  }

  /* ---------- Form Validation (Contact & Enquiry) ---------- */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\s\-\(\)]{7,18}$/;

  document.querySelectorAll('form.needs-validation').forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      let isValid = true;
      const email = form.querySelector('[name="email"]');
      const phone = form.querySelector('[name="phone"]');
      const message = form.querySelector('[name="message"]');

      // Clear previous errors
      [email, phone, message].forEach(el => { if (el) el.classList.remove('error'); });

      if (email && !emailRegex.test(email.value.trim())) {
        isValid = false; email.classList.add('error');
      }
      if (phone && !phoneRegex.test(phone.value.trim())) {
        isValid = false; phone.classList.add('error');
      }
      if (message && message.value.trim().length < 10) {
        isValid = false; message.classList.add('error');
      }

      const feedback = form.querySelector('.form-feedback');
      if (isValid) {
        // Simulated AJAX response (demo)
        feedback.textContent = 'Thanks — your message has been noted. (Demo response)';
        feedback.style.color = 'green';
        // optionally reset form
        // form.reset();
      } else {
        feedback.textContent = 'Please correct the highlighted fields and try again.';
        feedback.style.color = '#b00020';
      }
    });
  });

  /* ---------- Enquiry form simulation: returns availability/cost message ---------- */
  const enquiryForm = document.querySelector('form[data-enquiry="true"]');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // simple validation reused
      const email = enquiryForm.querySelector('[name="email"]');
      const phone = enquiryForm.querySelector('[name="phone"]');
      const message = enquiryForm.querySelector('[name="message"]');
      const subject = enquiryForm.querySelector('[name="subject"]').value;
      const feedback = enquiryForm.querySelector('.form-feedback');

      let ok = true;
      [email, phone, message].forEach(el => el.classList.remove('error'));
      if (!email || !emailRegex.test(email.value.trim())) { ok=false; email.classList.add('error'); }
      if (!phone || !phoneRegex.test(phone.value.trim())) { ok=false; phone.classList.add('error'); }
      if (!message || message.value.trim().length < 8) { ok=false; message.classList.add('error'); }

      if (!ok) {
        feedback.textContent = 'Please correct the highlighted fields.';
        feedback.style.color = '#b00020';
        return;
      }

      // Simulated availability/cost logic
      let resultText = '';
      if (subject === 'product') {
        resultText = 'Product availability: In stock. Estimated cost: R250 (starter kit). We can reserve one for you for 48 hours.';
      } else if (subject === 'volunteer') {
        resultText = 'Volunteer slots: Next community day has 20 slots. Please arrive at 09:00. We will follow up by email.';
      } else if (subject === 'sponsor') {
        resultText = 'Sponsorship: We have tiered options available (R1000+). We will email a sponsorship pack.';
      } else {
        resultText = 'Thank you — we will respond shortly.';
      }
      feedback.textContent = resultText;
      feedback.style.color = 'green';
    });
  }

  /* ---------- Accessibility helper: close lightbox on ESC ---------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.lightbox.open').forEach(lb => {
        lb.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });

}); // DOMContentLoaded end
function updateFooterDate() {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-ZA', options);

  const dateElement = document.getElementById("auto-date");
  if (dateElement) {
    dateElement.textContent = "Last updated: " + formattedDate;
  }
}

updateFooterDate();
