import JsonLd from './JsonLd';
import { faqSchema } from '../lib/schema';
import { isPreview } from '../lib/preview';
import { FAQ_RADIONICA } from '../lib/content/pregled';

// Česta pitanja o radionici (za sada samo u admin pregledu), sa FAQPage podacima za Google.
export default function WorkshopFaq({ locale }) {
  if (!isPreview()) return null;
  const t = FAQ_RADIONICA[locale] || FAQ_RADIONICA.sr;

  return (
    <div className="section-white">
      <div className="container-narrow">
        <div className="section-head">
          <span className="section-tag">FAQ</span>
          <h2 className="section-h">{t.heading}</h2>
          <span className="liner"></span>
        </div>
        <div className="faq-list">
          {t.items.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <JsonLd data={faqSchema(t.items)} />
      </div>
    </div>
  );
}
