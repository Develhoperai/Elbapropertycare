/* ===========================
   Elba Property Care – Main JS
   =========================== */

(function () {
  'use strict';

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky header ---- */
  var header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.getElementById('nav-toggle');
  var navList = document.getElementById('nav-list');

  navToggle.addEventListener('click', function () {
    var isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close nav on link click
  navList.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---- Active nav link on scroll ---- */
  var sections = Array.from(document.querySelectorAll('section[id]'));
  var navLinks = Array.from(document.querySelectorAll('.nav__link'));

  function updateActiveLink() {
    var scrollPos = window.scrollY + 100;
    var current = '';
    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        current = section.id;
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }

  /* ---- Contact form validation ---- */
  var form = document.getElementById('contact-form');
  var successMsg = document.getElementById('form-success');

  function showError(fieldId, msg) {
    var input = document.getElementById(fieldId);
    var error = document.getElementById(fieldId + '-error');
    if (input) input.classList.add('error');
    if (error) error.textContent = msg;
  }

  function clearError(fieldId) {
    var input = document.getElementById(fieldId);
    var error = document.getElementById(fieldId + '-error');
    if (input) input.classList.remove('error');
    if (error) error.textContent = '';
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateForm() {
    var valid = true;

    ['name', 'email', 'service'].forEach(clearError);

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var service = document.getElementById('service').value;

    if (!name) { showError('name', 'Please enter your full name.'); valid = false; }
    if (!email) {
      showError('email', 'Please enter your email address.'); valid = false;
    } else if (!validateEmail(email)) {
      showError('email', 'Please enter a valid email address.'); valid = false;
    }
    if (!service) { showError('service', 'Please select a service.'); valid = false; }

    return valid;
  }

  if (form) {
    // Live validation: clear errors as user types
    ['name', 'email', 'service'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', function () { clearError(id); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) return;

      // Simulate form submission (no backend)
      var submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(function () {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Request';
        successMsg.hidden = false;
        setTimeout(function () { successMsg.hidden = true; }, 6000);
      }, 1000);
    });
  }
})();
