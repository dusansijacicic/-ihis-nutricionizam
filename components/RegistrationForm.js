'use client';

import { useState } from 'react';

const STR = {
  sr: {
    name: 'Ime i prezime',
    company: 'Kompanija',
    pib: 'PIB',
    address: 'Adresa i poštanski broj',
    phone: 'Telefon',
    email: 'E-mail',
    submit: 'Pošaljite prijavu',
    sending: 'Slanje...',
    success: 'Prijava je uspešno poslata. Kontaktiraćemo Vas uskoro.',
    error: 'Došlo je do greške pri slanju prijave. Pokušajte ponovo ili nam pišite na office@ihis-nutricionizam.rs.',
  },
  en: {
    name: 'Full name',
    company: 'Company',
    pib: 'Tax ID (PIB)',
    address: 'Address and postal code',
    phone: 'Phone',
    email: 'E-mail',
    submit: 'Send registration',
    sending: 'Sending...',
    success: 'Your registration has been sent. We will contact you soon.',
    error: 'Something went wrong sending your registration. Please try again or email office@ihis-nutricionizam.rs.',
  },
};

export default function RegistrationForm({ locale }) {
  const t = STR[locale] || STR.sr;
  const [status, setStatus] = useState('idle');

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
      <input type="text" name="name" className="cf-input" placeholder={t.name} required />
      <input type="text" name="company" className="cf-input" placeholder={t.company} />
      <input type="text" name="pib" className="cf-input" placeholder={t.pib} />
      <input type="text" name="address" className="cf-input" placeholder={t.address} />
      <input type="tel" name="phone" className="cf-input" placeholder={t.phone} />
      <input type="email" name="email" className="cf-input" placeholder={t.email} required />
      <button type="submit" className="btn-ihis btn-ihis-color" disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : t.submit}
      </button>
      {status === 'error' && <p className="reg-msg reg-msg--err">{t.error}</p>}
    </form>
  );
}
