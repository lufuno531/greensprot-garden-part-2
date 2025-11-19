// ===============================
// GreenSprout Interactive Script
// ===============================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Hamburger Nav ---------- */
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (ham && nav) {
    ham.addEventListener('click', () => {
      nav.classList.toggle("nav-active");
      ham.classList.toggle("open");
    });
  }

  /* ---------- Accordion FAQ ---------- */
 document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Toggle max-height for smooth expansion/collapse
    if (isExpanded) {
      panel.style.maxHeight = null;
      button.setAttribute('aria-expanded', 'false');
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      button.setAttribute('aria-expanded', 'true');
    }
  });
});


  /* ---------- Lightbox for gallery ---------- */
  (function setupLightbox() {
  const triggers = document.querySelectorAll('.lightbox-trigger');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  if (!triggers.length || !lightbox || !lightboxImg) return;

  // Open handler
  triggers.forEach(img => {
    img.addEventListener('click', () => {
      const large = img.getAttribute('data-large') || img.getAttribute('src');
      lightboxImg.src = large;
      lightboxImg.alt = img.alt || 'Gallery image';
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
      // trap focus (simple)
      lightbox.focus();
      document.body.style.overflow = 'hidden';
    });
  });

  // Close handlers
  function closeLightbox() {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  lightbox.addEventListener('click', (e) => {
    // close if click on backdrop or close button
    if (e.target === lightbox || e.target === closeBtn) closeLightbox();
  });

  // close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') closeLightbox();
  });
})();


  /* ---------- Contact Form ---------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Your email will now open in your mail app.");
    });
  }

  /* ---------- Enquiry Form ---------- */
  const enquiryForm = document.querySelector('form[data-enquiry="true"]');
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const feedback = enquiryForm.querySelector('.form-feedback');
      feedback.style.color = "green";
      feedback.textContent = "Thank you for your enquiry. We will respond shortly.";
    });
  }

   

  /* ---------- AUTO DATE + TIME ---------- */
  const autoDate = document.getElementById("auto-date");

  if (autoDate) {
    function updateDateTime() {
      const now = new Date();

      const date = now.toLocaleDateString("en-ZA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      const time = now.toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });

      autoDate.textContent = `Last updated: ${date} • ${time}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
  }
});







