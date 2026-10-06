'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STR = {
  sr: {
    placeholder: 'Šifra',
    submit: 'Otključaj',
    sending: 'Provera...',
    wrong: 'Pogrešna šifra. Proverite šifru iz mejla i pokušajte ponovo.',
    error: 'Došlo je do greške. Pokušajte ponovo.',
    help: 'Niste dobili šifru? Pišite nam na office@ihis-nutricionizam.rs.',
  },
  en: {
    placeholder: 'Password',
    submit: 'Unlock',
    sending: 'Checking...',
    wrong: 'Wrong password. Please check the password from the e-mail and try again.',
    error: 'Something went wrong. Please try again.',
    help: 'Did not receive the password? Write to us at office@ihis-nutricionizam.rs.',
  },
};

export default function LectureGate({ locale }) {
  const t = STR[locale] || STR.sr;
  const router = useRouter();
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const password = new FormData(e.currentTarget).get('password');
    try {
      const res = await fetch('/api/predavanja/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        // Server ponovo renderuje stranicu, sada sa listom predavanja.
        router.refresh();
        return;
      }
      setStatus(res.status === 401 ? 'wrong' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="lecture-gate">
      <span className="lecture-gate-icon"><i className="ion-locked"></i></span>
      <form onSubmit={onSubmit} className="lecture-gate-form">
        <input
          type="password"
          name="password"
          className="cf-input cf-input--light"
          placeholder={t.placeholder}
          aria-label={t.placeholder}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          required
        />
        <button type="submit" className="btn-ihis btn-ihis-color" disabled={status === 'sending'}>
          {status === 'sending' ? t.sending : t.submit}
        </button>
      </form>
      {status === 'wrong' && <p className="reg-msg reg-msg--err">{t.wrong}</p>}
      {status === 'error' && <p className="reg-msg reg-msg--err">{t.error}</p>}
      <p className="archive-note">{t.help}</p>
    </div>
  );
}
