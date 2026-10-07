'use client';

import { useEffect, useState } from 'react';
import { RADIONICA, RADIONICA_MESTA } from '../lib/content/radionica';

const STR = {
  sr: {
    program: 'Izaberite radionicu',
    participants: 'Broj polaznika (min. 2)',
    location: 'Mesto održavanja',
    dates: 'Predlog 2–3 termina (npr. 12.11, 19.11. ili 26.11.)',
    name: 'Ime i prezime',
    company: 'Naziv firme',
    pib: 'PIB firme',
    address: 'Adresa firme',
    phone: 'Mobilni telefon',
    email: 'E-mail',
    submit: 'Pošaljite prijavu',
    sending: 'Slanje...',
    success: 'Prijava je uspešno poslata. Javićemo Vam se radi dogovora o terminu i poslati predračun.',
    error: 'Došlo je do greške pri slanju prijave. Pokušajte ponovo ili nam pišite na office@ihis-nutricionizam.rs.',
  },
  en: {
    program: 'Choose a workshop',
    participants: 'Number of participants (min. 2)',
    location: 'Venue',
    dates: 'Proposed 2–3 dates (e.g. 12 Nov, 19 Nov or 26 Nov)',
    name: 'Full name',
    company: 'Company name',
    pib: 'Company tax ID (PIB)',
    address: 'Company address',
    phone: 'Mobile phone',
    email: 'E-mail',
    submit: 'Send registration',
    sending: 'Sending...',
    success: 'Your registration has been sent. We will contact you to agree on the date and send the pro forma invoice.',
    error: 'Something went wrong sending your registration. Please try again or email office@ihis-nutricionizam.rs.',
  },
};

export default function RegistrationForm({ locale }) {
  const t = STR[locale] || STR.sr;
  const programs = (RADIONICA[locale] || RADIONICA.sr).programs;
  const [status, setStatus] = useState('idle');
  const [program, setProgram] = useState('');

  // Radionica je već izabrana kad se stigne sa ?program=..., ili kad se na istoj
  // stranici klikne "Prijavite se" na kartici programa (događaj iz ProgramCta).
  useEffect(() => {
    const pick = (id) => { if (programs.some((p) => p.id === id)) setProgram(id); };
    pick(new URLSearchParams(window.location.search).get('program'));
    const onPick = (e) => pick(e.detail);
    window.addEventListener('radionica-program', onPick);
    return () => window.removeEventListener('radionica-program', onPick);
  }, [programs]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <p className="reg-msg reg-msg--ok">{t.success}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="registration-form">
      <select name="program" className="cf-input rf-full" aria-label={t.program} value={program} onChange={(e) => setProgram(e.target.value)} required>
        <option value="" disabled>{t.program}</option>
        {programs.map((p) => <option key={p.id} value={p.id}>{p.name} — {p.price}</option>)}
      </select>
      <input type="number" name="participants" className="cf-input" placeholder={t.participants} aria-label={t.participants} min="2" max="200" required />
      <select name="location" className="cf-input" aria-label={t.location} defaultValue="" required>
        <option value="" disabled>{t.location}</option>
        {Object.entries(RADIONICA_MESTA).map(([id, label]) => <option key={id} value={id}>{label[locale] || label.sr}</option>)}
      </select>
      <textarea name="dates" className="cf-input cf-textarea rf-full" rows={2} placeholder={t.dates} aria-label={t.dates} required></textarea>
      <input type="text" name="name" className="cf-input rf-full" placeholder={t.name} aria-label={t.name} required />
      <input type="text" name="company" className="cf-input" placeholder={t.company} aria-label={t.company} required />
      <input type="text" name="pib" className="cf-input" placeholder={t.pib} aria-label={t.pib} required />
      <input type="text" name="address" className="cf-input rf-full" placeholder={t.address} aria-label={t.address} required />
      <input type="tel" name="phone" className="cf-input" placeholder={t.phone} aria-label={t.phone} required />
      <input type="email" name="email" className="cf-input" placeholder={t.email} aria-label={t.email} required />
      <button type="submit" className="btn-ihis btn-ihis-color rf-full" disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : t.submit}
      </button>
      {status === 'error' && <p className="reg-msg reg-msg--err rf-full">{t.error}</p>}
    </form>
  );
}
