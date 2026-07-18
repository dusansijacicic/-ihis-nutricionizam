import { SPONSORSHIP } from '../lib/content/sponsorship';

export default function SponsorshipContent({ locale }) {
  const t = SPONSORSHIP[locale] || SPONSORSHIP.en;

  return (
    <div className="sponsorship-content">
      <p className="modal-lead">{t.subtitle}</p>
      <p className="modal-meta">{t.when} &middot; {t.where}</p>
      <p>{t.intro}</p>
      <p>{t.lead}</p>

      {t.tiers.map((tier, i) => (
        <div className="modal-block" key={i}>
          <h5>{tier.name} <span className="modal-price">{tier.price}</span></h5>
          <ul>{tier.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
        </div>
      ))}

      <p>{t.note}</p>
      <p>{t.outro}</p>

      <h4>{t.contactHeading}</h4>
      <ul>{t.contact.map((c, i) => <li key={i}>{c}</li>)}</ul>
    </div>
  );
}
