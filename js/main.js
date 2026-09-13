'use strict';

/**
 * CREMS iQ — site interactions
 * Modals (document preview + login) and the two demo forms.
 * Loaded with `defer`, so the DOM is guaranteed to be parsed before this runs;
 * the DOMContentLoaded wrapper below is just a safety net if the tag is ever
 * moved or loaded a different way.
 */
document.addEventListener('DOMContentLoaded', function () {

  // ---- Document preview modal ----
  var docInfo = {
    '90-day-plan': {
      title: 'CREMS IQ Intelligence Reports',
      sub: 'A custom intelligence report curated just for you. Access data in any market in the United States. Sit side by side with an expert consultant to plan the roadmap to success based on your goals.'
    }
  };

  var overlay = document.getElementById('modalOverlay');
  var modalTitle = document.getElementById('modalTitle');
  var modalSub = document.getElementById('modalSub');
  var loginOverlay = document.getElementById('loginOverlay');

  document.querySelectorAll('[data-doc]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var d = docInfo[btn.dataset.doc];
      if (!d) return;
      modalTitle.textContent = d.title;
      modalSub.textContent = d.sub;
      overlay.classList.add('is-open');
    });
  });

  document.getElementById('modalClose').addEventListener('click', function () {
    overlay.classList.remove('is-open');
  });

  document.getElementById('modalOpenBtn').addEventListener('click', function () {
    alert('Demo only — connect this to your document storage (e.g. a signed file URL).');
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) overlay.classList.remove('is-open');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      overlay.classList.remove('is-open');
      loginOverlay.classList.remove('is-open');
    }
  });

  // ---- Login modal (Leadership Path to Success) ----
  document.querySelectorAll('[data-login-trigger]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      loginOverlay.classList.add('is-open');
    });
  });

  document.getElementById('loginModalClose').addEventListener('click', function () {
    loginOverlay.classList.remove('is-open');
  });

  loginOverlay.addEventListener('click', function (e) {
    if (e.target === loginOverlay) loginOverlay.classList.remove('is-open');
  });

  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Demo only — connect this to your authentication backend.');
  });

  document.getElementById('loginRequestLink').addEventListener('click', function () {
    loginOverlay.classList.remove('is-open');
  });

  // ---- Consulting Forms: brokerage consult dropdown ----
  var brokerageSelect = document.getElementById('brokerage-select');
  var brokerageOpenBtn = document.getElementById('brokerageOpenBtn');
  brokerageOpenBtn.addEventListener('click', function () {
    window.open(brokerageSelect.value, '_blank', 'noopener');
  });

  // ---- Data access form ----
  document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('CREMS iQ Data Access: credentials submitted. (Demo only — connect this to your auth backend.)');
  });

});
