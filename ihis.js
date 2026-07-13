/* IHIS Nutricionizam — Main JavaScript */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Preloader ─────────────────────────────────── */
  var preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      preloader.classList.add('fade-out');
      setTimeout(function () { preloader.style.display = 'none'; }, 600);
    });
  }

  /* ── Menu Trigger ──────────────────────────────── */
  var trigger   = document.querySelector('.menu-trigger');
  var mastnav   = document.querySelector('nav.mastnav');
  var closeBtn  = document.querySelector('.mastnav-close');
  var body      = document.body;

  function openNav() {
    mastnav.classList.add('is-open');
    trigger && trigger.classList.add('is-active');
    body.style.overflow = 'hidden';
  }
  function closeNav() {
    mastnav.classList.remove('is-open');
    trigger && trigger.classList.remove('is-active');
    body.style.overflow = '';
  }

  if (trigger) trigger.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  // Close nav when a link is clicked
  var navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function (a) {
    a.addEventListener('click', closeNav);
  });

  // Close on click outside (on dark overlay)
  if (mastnav) {
    document.querySelector('.mastnav-left') &&
      document.querySelector('.mastnav-left').addEventListener('click', closeNav);
  }

  /* ── Mark current page in nav ──────────────────── */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function (a) {
    if (a.getAttribute('href') === path) {
      a.classList.add('is-current');
    }
  });

  /* ── Hero Slider ───────────────────────────────── */
  var slides = document.querySelectorAll('.hero-slide');
  var dots   = document.querySelectorAll('.hero-dot');
  if (slides.length > 0) {
    var current = 0;
    var interval;

    function goTo(n) {
      slides[current].classList.remove('is-active');
      dots[current] && dots[current].classList.remove('is-active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      dots[current] && dots[current].classList.add('is-active');
    }

    function next() { goTo(current + 1); }

    // Init
    slides[0].classList.add('is-active');
    dots[0] && dots[0].classList.add('is-active');

    interval = setInterval(next, 5000);

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        clearInterval(interval);
        goTo(i);
        interval = setInterval(next, 5000);
      });
    });
  }

  /* ── Progress bar animation ────────────────────── */
  var fills = document.querySelectorAll('.progress-fill');
  if (fills.length > 0) {
    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.width = e.target.getAttribute('data-width') + '%';
          barObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(function (f) { barObserver.observe(f); });
  }

  /* ── Stat counter ──────────────────────────────── */
  var statNums = document.querySelectorAll('[data-count]');
  if (statNums.length > 0) {
    var cntObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el    = e.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var dur    = 1800;
        var start  = performance.now();
        function animate(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
        cntObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    statNums.forEach(function (el) { cntObserver.observe(el); });
  }

  /* ── Fade-in on scroll ─────────────────────────── */
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, idx) {
        if (e.isIntersecting) {
          setTimeout(function () {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }, idx * 80);
          fadeObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      fadeObserver.observe(el);
    });
  }

  /* ── Contact form (demo) ───────────────────────── */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var msg = form.querySelector('.form-msg');
      btn.textContent = 'Slanje...';
      btn.disabled = true;
      setTimeout(function () {
        if (msg) {
          msg.style.display = 'block';
          msg.textContent = 'Hvala! Vaša poruka je primljena. Odgovorićemo u roku od 24h.';
        }
        btn.textContent = 'Poruka poslata';
      }, 1200);
    });
  }

});
