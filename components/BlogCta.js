import { isPreview } from '../lib/preview';
import { BLOG_CTA } from '../lib/content/pregled';

// Poziv ka radionici i usluzi deklarisanja na kraju blog postova (za sada samo u admin pregledu).
export default function BlogCta({ locale }) {
  if (!isPreview()) return null;
  const t = BLOG_CTA[locale] || BLOG_CTA.sr;

  return (
    <div className="section-dark text-center">
      <div className="container-narrow">
        <span className="section-tag">{t.tag}</span>
        <h2 className="section-h">{t.heading}</h2>
        <span className="liner"></span>
        <p className="section-lead">{t.text}</p>
        <div className="blog-cta-actions">
          <a href={t.primary[1]} className="btn-ihis btn-ihis-color">{t.primary[0]}</a>
          <a href={t.secondary[1]} className="btn-ihis btn-ihis-outline">{t.secondary[0]}</a>
        </div>
      </div>
    </div>
  );
}
