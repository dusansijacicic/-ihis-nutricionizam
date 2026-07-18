import { POZIV } from '../lib/content/poziv';

export default function PozivContent({ locale }) {
  const t = POZIV[locale] || POZIV.sr;

  return (
    <div className="poziv-content">
      <p className="modal-lead">{t.subtitle}</p>
      <p className="modal-meta">{t.when} &middot; {t.where}</p>
      {t.intro.map((p, i) => <p key={i}>{p}</p>)}

      <h4>{t.topicsHeading}</h4>
      {t.topics.map((topic, i) => (
        <div className="modal-block" key={i}>
          <h5>{topic.title}</h5>
          {topic.items.length > 0 && (
            <ul>{topic.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
          )}
        </div>
      ))}

      <h4>{t.speakersHeading}</h4>
      <ul>{t.speakers.map((s, i) => <li key={i}>{s}</li>)}</ul>

      <h4>{t.panelHeading}</h4>
      <p><em>{t.panelModerator}</em></p>
      <p>{t.panelText}</p>

      <h4>{t.feeHeading}</h4>
      <ul>{t.fees.map((f, i) => <li key={i}>{f}</li>)}</ul>
      <p>{t.feeNote}</p>

      <p className="modal-contact">{t.contact}</p>
    </div>
  );
}
