import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import { SPONSORSHIP } from '../../../lib/content/sponsorship';

export const metadata = {
  title: 'Sponsorship — 13th Conference FOOD, NUTRITION & HEALTH',
  description: 'Sponsorship packages for the 13th Conference FOOD, NUTRITION & HEALTH — General Sponsor, Main Sponsor, Sponsor.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/sponsorship',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/sponsorship', en: 'https://ihis-nutricionizam.rs/en/sponsorship' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Sponsorship — 13th Conference FOOD, NUTRITION & HEALTH',
    description: 'General Sponsor, Main Sponsor, Sponsor — packages and benefits.',
    url: 'https://ihis-nutricionizam.rs/en/sponsorship',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

export default function SponsorshipPage() {
  const t = SPONSORSHIP.en;

  return (
    <>
      <Header locale="en" current="home" langHref="/rs/sponsorship" />
      <MobileNav locale="en" current="home" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">{t.title}</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Sponsorship</p>
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
            <div className="stat-row">
              <div className="stat-item">
                <span className="stat-num">150+</span>
                <span className="stat-label">Participants</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">13th</span>
                <span className="stat-label">Edition</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">Oct 6</span>
                <span className="stat-label">Conference date</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="tier-grid">
              {t.tiers.map((tier, i) => (
                <div className="fade-in" key={i}>
                  <div className={`tier-card${i === 0 ? ' tier-card--featured' : ''}`}>
                    <span className="tier-name">{tier.name}</span>
                    <span className="tier-price">{tier.price}</span>
                    <ul className="tier-list">
                      {tier.items.map((it, j) => <li key={j}>{it}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-30">
              <span className="callout-note"><i className="ion-information-circled"></i>{t.note}</span>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <span className="section-tag" style={{ color: 'rgba(255,255,255,.5)' }}>{t.contactHeading}</span>
            <h2 className="section-h mt-8">Contact us</h2>
            <span className="liner"></span>
            <p className="mt-16">{t.outro}</p>
            <div className="mt-20">
              {t.contact.map((c, i) => <p key={i}>{c}</p>)}
            </div>
            <a href="/en/contact" className="btn-ihis btn-ihis-white mt-24">Contact us</a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
