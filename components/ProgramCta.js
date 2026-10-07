'use client';

// Dugme "Prijavite se" na kartici programa: bira tu radionicu u formi i glatko
// klizi do forme (#prijava) na istoj stranici, bez ponovnog učitavanja.
export default function ProgramCta({ programId, label }) {
  const href = `?program=${programId}#prijava`;

  function onClick(e) {
    const form = document.getElementById('prijava');
    if (!form) return;
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('radionica-program', { detail: programId }));
    window.history.replaceState(null, '', href);
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return <a href={href} className="btn-ihis btn-ihis-color" onClick={onClick}>{label}</a>;
}
