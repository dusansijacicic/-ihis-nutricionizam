'use client';

import { useEffect, useState } from 'react';

export default function Modal({ trigger, title, children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" className="modal-trigger" onClick={() => setOpen(true)}>
        {trigger}
      </button>
      {open && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="modal-panel">
            <button type="button" className="modal-close" onClick={() => setOpen(false)} aria-label="Close">
              &times;
            </button>
            {title && <h3 className="modal-title">{title}</h3>}
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
