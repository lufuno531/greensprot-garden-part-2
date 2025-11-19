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
  const galleryImgs = document.querySelectorAll(".gallery-img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox img");

  if (lightbox) {
    galleryImgs.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

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







