/* IHIS Nutricionizam — Main JavaScript */

(function () {

  /* ── Preloader ─────────────────────────────────── */
  var preloader = document.getElementById('preloader');
  if (preloader) {
    function hidePreloader() {
      preloader.classList.add('fade-out');
      setTimeout(function () { preloader.style.display = 'none'; }, 600);
    }
    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }
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

  /* ── Contact form ──────────────────────────────── */
  var form = document.getElementById('contact-form');
  if (form) {
    var isEn = document.documentElement.lang === 'en';
    var t = isEn ? {
      sending: 'Sending...',
      success: 'Thank you! Your message has been received. We will reply within 24h.',
      genericError: 'Something went wrong. Please try again.',
      networkError: 'Something went wrong. Please check your connection and try again.',
      submit: 'Send message',
      sent: 'Message sent'
    } : {
      sending: 'Slanje...',
      success: 'Hvala! Vaša poruka je primljena. Odgovorićemo u roku od 24h.',
      genericError: 'Došlo je do greške. Pokušajte ponovo.',
      networkError: 'Došlo je do greške. Proverite konekciju i pokušajte ponovo.',
      submit: 'Pošaljite poruku',
      sent: 'Poruka poslata'
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var msg = form.querySelector('.form-msg');
      var data = Object.fromEntries(new FormData(form).entries());

      btn.textContent = t.sending;
      btn.disabled = true;

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (r) { return r.json().then(function (body) { return { ok: r.ok, body: body }; }); })
        .then(function (result) {
          if (msg) {
            msg.style.display = 'block';
            msg.classList.toggle('form-msg--ok', result.ok);
            msg.classList.toggle('form-msg--err', !result.ok);
            msg.textContent = result.ok
              ? t.success
              : (result.body && result.body.error) || t.genericError;
          }
          if (result.ok) {
            btn.textContent = t.sent;
            form.reset();
          } else {
            btn.textContent = t.submit;
            btn.disabled = false;
          }
        })
        .catch(function () {
          if (msg) {
            msg.style.display = 'block';
            msg.classList.remove('form-msg--ok');
            msg.classList.add('form-msg--err');
            msg.textContent = t.networkError;
          }
          btn.textContent = t.submit;
          btn.disabled = false;
        });
    });
  }

})();
