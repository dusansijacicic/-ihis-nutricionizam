import Image from 'next/image';
import { isPreview } from '../lib/preview';
import { VEST_13 } from '../lib/content/pregled';

// Vest o održanom 13. savetovanju (za sada samo u admin pregledu).
export default function News13({ locale }) {
  if (!isPreview()) return null;
  const t = VEST_13[locale] || VEST_13.sr;

  return (
    <div className="section-white">
      <div className="container">
        <div className="row-intro news13">
          <div className="news13-photo">
            <Image
              src="/assets/img/gallery/13-savetovanje/13-savetovanje-puna-sala-crowne-plaza-02.jpg"
              alt={t.alt}
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="col-text news-feature">
            <span className="news-feature-date">{t.date}</span>
            <h2>{t.title}</h2>
            <span className="news-feature-rule"></span>
            {t.paragraphs.map((p) => <p className="mb-14" key={p.slice(0, 24)}>{p}</p>)}
            <div className="news13-actions">
              <a href={t.galleryHref} className="btn-ihis btn-ihis-color">{t.gallery}</a>
              <a href={t.lecturesHref} className="btn-ihis btn-ihis-dark">{t.lectures}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
