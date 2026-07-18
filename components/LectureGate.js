'use client';

import { useState } from 'react';

const STR = {
  sr: {
    placeholder: 'Unesite šifru',
    submit: 'Otključaj',
    checking: 'Proveravam...',
    error: 'Netačna šifra. Pokušajte ponovo.',
    empty: 'Predavanja za ovo savetovanje još uvek nisu dostupna.',
  },
  en: {
    placeholder: 'Enter code',
    submit: 'Unlock',
    checking: 'Checking...',
    error: 'Incorrect code. Please try again.',
    empty: 'Lectures for this conference are not yet available.',
  },
};

export default function LectureGate({ locale, event }) {
  const t = STR[locale] || STR.sr;
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle');
  const [files, setFiles] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('checking');
    try {
      const res = await fetch('/api/lectures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, code }),
      });
      if (!res.ok) {
        setStatus('error');
        return;
      }
      const data = await res.json();
      setFiles(data.files || []);
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  }

  if (files) {
    if (files.length === 0) return <p className="reg-msg">{t.empty}</p>;
    return (
      <ul className="lecture-list">
        {files.map((f) => (
          <li key={f.href}><a href={f.href} target="_blank" rel="noreferrer">{f.title}</a></li>
        ))}
      </ul>
    );
  }

  return (
    <form onSubmit={onSubmit} className="lecture-gate-form">
      <input
        type="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="cf-input cf-input--light"
        placeholder={t.placeholder}
        required
      />
      <button type="submit" className="btn-ihis btn-ihis-color" disabled={status === 'checking'}>
        {status === 'checking' ? t.checking : t.submit}
      </button>
      {status === 'error' && <p className="reg-msg reg-msg--err">{t.error}</p>}
    </form>
  );
}
