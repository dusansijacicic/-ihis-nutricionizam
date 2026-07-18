import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import { SPONSORSHIP } from '../../../lib/content/sponsorship';

export const metadata = {
  title: 'Poziv za sponzorstvo — 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE',
  description: 'Sponzorski paketi za 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE — Generalni sponzor, Glavni sponzor, Sponzor.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/sponsorship',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/sponsorship', en: 'https://ihis-nutricionizam.rs/en/sponsorship' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Poziv za sponzorstvo — 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE',
    description: 'Generalni sponzor, Glavni sponzor, Sponzor — paketi i pogodnosti.',
    url: 'https://ihis-nutricionizam.rs/rs/sponsorship',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

export default function SponzorstvoStranica() {
  const t = SPONSORSHIP.sr;

  return (
    <>
      <Header locale="sr" current="home" langHref="/en/sponsorship" />
      <MobileNav locale="sr" current="home" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">{t.title}</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Poziv za sponzorstvo</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">{t.subtitle}</span>
            <h2 className="section-h">{t.when}</h2>
            <span className="liner"></span>
            <p className="section-lead grey mt-10">{t.where}</p>
            <p className="section-lead grey mt-16">{t.intro}</p>
            <p className="section-lead grey mt-10">{t.lead}</p>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="tier-grid">
              {t.tiers.map((tier, i) => (
                <div className={`tier-card${i === 0 ? ' tier-card--featured' : ''}`} key={i}>
                  <span className="tier-name">{tier.name}</span>
                  <span className="tier-price">{tier.price}</span>
                  <ul className="tier-list">
                    {tier.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center grey mt-30">{t.note}</p>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <span className="section-tag" style={{ color: 'rgba(255,255,255,.5)' }}>{t.contactHeading}</span>
            <h2 className="section-h mt-8">Kontaktirajte nas</h2>
            <span className="liner"></span>
            <p className="mt-16">{t.outro}</p>
            <div className="mt-20">
              {t.contact.map((c, i) => <p key={i}>{c}</p>)}
            </div>
            <a href="/rs/contact" className="btn-ihis btn-ihis-white mt-24">Pišite nam</a>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
