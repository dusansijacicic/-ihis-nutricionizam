'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const STR = {
  sr: { pages: 'strana', page: 'Strana', close: 'Zatvori', prev: 'Prethodna strana', next: 'Sledeća strana', rotate: 'Okrenite telefon za veći prikaz' },
  en: { pages: 'pages', page: 'Page', close: 'Close', prev: 'Previous page', next: 'Next page', rotate: 'Rotate your phone for a larger view' },
};

const SWIPE_MIN = 40;

// Slajdovi se prikazuju kao CSS pozadina, a ne kao <img>, pa pregledač ne nudi
// "Sačuvaj sliku" ni na desni klik ni na dugi pritisak na telefonu.
export default function SlideDecks({ conf, decks, locale }) {
  const t = STR[locale] || STR.sr;
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(1);
  const touchX = useRef(null);
  const closeRef = useRef(null);
  const deck = open === null ? null : decks[open];

  const src = useCallback((deckId, n) => `/api/predavanja/${conf}/${deckId}/${n}`, [conf]);
  const go = useCallback((delta) => {
    setPage((p) => Math.min(Math.max(p + delta, 1), deck ? deck.pages : 1));
  }, [deck]);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!deck) return undefined;
    function onKey(e) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') go(1);
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(-1);
      else if (e.key === 'Escape') close();
      else return;
      e.preventDefault();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [deck, go, close]);

  // Unapred učitava susedne strane, da listanje bude trenutno.
  useEffect(() => {
    if (!deck) return;
    [page + 1, page + 2, page - 1].forEach((n) => {
      if (n < 1 || n > deck.pages) return;
      const img = new window.Image();
      img.src = src(deck.id, n);
    });
  }, [deck, page, src]);

  function onTouchStart(e) {
    touchX.current = e.touches.length === 1 ? e.touches[0].clientX : null;
  }

  function onTouchEnd(e) {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) >= SWIPE_MIN) go(dx < 0 ? 1 : -1);
  }

  return (
    <>
      <div className="deck-grid">
        {decks.map((d, i) => (
          <button type="button" className="deck-card" key={d.id} onClick={() => { setPage(1); setOpen(i); }}>
            <span className="deck-card-thumb" style={{ backgroundImage: `url(${src(d.id, 1)})` }}></span>
            <span className="deck-card-body">
              <span className="deck-card-title">{d.title}</span>
              <span className="deck-card-author">{d.author}</span>
              <span className="deck-card-meta"><i className="ion-ios-albums-outline"></i>{d.pages} {t.pages}</span>
            </span>
          </button>
        ))}
      </div>

      {deck && (
        <div
          className="slide-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={deck.title}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="slide-viewer-bar">
            <span className="slide-viewer-title">{deck.title}</span>
            <span className="slide-viewer-count">{page} / {deck.pages}</span>
            <button type="button" className="slide-viewer-close" onClick={close} aria-label={t.close} ref={closeRef}>&times;</button>
          </div>
          <div className="slide-viewer-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className="preloader-ring"></div>
            <div
              className="slide-viewer-slide"
              role="img"
              aria-label={`${t.page} ${page}`}
              style={{ backgroundImage: `url(${src(deck.id, page)})` }}
            ></div>
            <button type="button" className="hero-arrow-prev" onClick={() => go(-1)} disabled={page === 1} aria-label={t.prev}>&lsaquo;</button>
            <button type="button" className="hero-arrow-next" onClick={() => go(1)} disabled={page === deck.pages} aria-label={t.next}>&rsaquo;</button>
            <p className="slide-viewer-hint">{t.rotate}</p>
          </div>
        </div>
      )}
    </>
  );
}
