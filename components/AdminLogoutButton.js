'use client';

export default function AdminLogoutButton() {
  async function onClick() {
    await fetch('/api/admin/logout', { method: 'POST' });
    // Puno učitavanje stranice (ne router.push): prijava/odjava menja admin pregled, a time i
    // ceo dokument (preloader, ikonice, preview.css), što se ne sme samo delimično osvežiti.
    window.location.assign('/admin/login');
  }

  return (
    <button type="button" onClick={onClick} className="btn-ihis btn-ihis-dark">
      Odjavi se
    </button>
  );
}
