/* IHIS Nutricionizam — Galerija page: filter tabs + lightbox */

(function () {
  const btns = document.querySelectorAll('.gal-btn');
  const items = document.querySelectorAll('.gal-item');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(function (it) {
        it.classList.toggle('hidden', f !== 'all' && it.dataset.group !== f);
      });
    });
  });

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  let visibleItems = [];
  let lbIndex = 0;

  function openLb(idx) {
    visibleItems = [...document.querySelectorAll('.gal-item:not(.hidden)')];
    lbIndex = idx;
    const item = visibleItems[lbIndex];
    lbImg.src = item.dataset.full;
    lbCaption.textContent = item.dataset.caption || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      const allItems = [...document.querySelectorAll('.gal-item:not(.hidden)')];
      openLb(allItems.indexOf(item));
    });
  });

  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', function () {
    lbIndex = (lbIndex - 1 + visibleItems.length) % visibleItems.length;
    lbImg.src = visibleItems[lbIndex].dataset.full;
    lbCaption.textContent = visibleItems[lbIndex].dataset.caption || '';
  });
  document.getElementById('lbNext').addEventListener('click', function () {
    lbIndex = (lbIndex + 1) % visibleItems.length;
    lbImg.src = visibleItems[lbIndex].dataset.full;
    lbCaption.textContent = visibleItems[lbIndex].dataset.caption || '';
  });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
  });
})();
