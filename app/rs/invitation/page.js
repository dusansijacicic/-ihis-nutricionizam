import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import { POZIV } from '../../../lib/content/poziv';

export const metadata = {
  title: 'Poziv na 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE — IHIS Nutricionizam',
  description: 'Poziv na 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE, 06.10.2026, Hotel Crowne Plaza, Beograd. Teme, predavači, kotizacija.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/invitation',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/invitation', en: 'https://ihis-nutricionizam.rs/en/invitation' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Poziv na 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE',
    description: '06.10.2026, Hotel Crowne Plaza, Beograd. Teme, predavači, kotizacija.',
    url: 'https://ihis-nutricionizam.rs/rs/invitation',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

const TOPIC_ICONS = ['ion-leaf', 'ion-ios-briefcase', 'ion-waterdrop', 'ion-ios-pulse', 'ion-ios-people', 'ion-flash', 'ion-ios-book'];

export default function PozivStranica() {
  const t = POZIV.sr;

  return (
    <>
      <Header locale="sr" current="home" langHref="/en/invitation" />
      <MobileNav locale="sr" current="home" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">{t.title}</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Poziv</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">{t.subtitle}</span>
            <h2 className="section-h">{t.when}</h2>
            <span className="liner"></span>
            <p className="section-lead grey mt-10">{t.where}</p>
            {t.intro.map((p, i) => <p className="section-lead grey mt-16" key={i}>{p}</p>)}
            <div className="icon-row mt-30">
              <a href="/rs/registration" className="btn-ihis btn-ihis-color">Prijavite se</a>
              <a href="/rs/sponsorship" className="btn-ihis btn-ihis-dark">Poziv za sponzorstvo</a>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Program</span>
              <h2 className="section-h">{t.topicsHeading}</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-2">
              {t.topics.map((topic, i) => (
                <div className="fade-in" key={i}>
                  <div className="card-accent">
                    <span className="topic-card-icon"><i className={TOPIC_ICONS[i % TOPIC_ICONS.length]}></i></span>
                    <h4 className="card-title">{topic.title}</h4>
                    {topic.items.length > 0 && (
                      <ul className="poziv-topic-list">
                        {topic.items.map((it, j) => <li key={j}>{it}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">Predavači</span>
              <h2 className="section-h">{t.speakersHeading}</h2>
              <span className="liner"></span>
            </div>
            <div className="speaker-grid">
              {t.speakers.map((s, i) => (
                <div className="speaker-card fade-in" key={i}>
                  <span className="speaker-avatar">{s.charAt(0)}</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-dark">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag" style={{ color: 'rgba(255,255,255,.5)' }}>Panel diskusija</span>
              <h2 className="section-h">{t.panelHeading}</h2>
              <span className="liner"></span>
            </div>
            <p className="mb-16"><em>{t.panelModerator}</em></p>
            <p>{t.panelText}</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">Učešće</span>
            <h2 className="section-h">{t.feeHeading}</h2>
            <span className="liner"></span>
            <div className="fee-box mt-24">
              {t.fees.map((f, i) => <p className="fee-box-line" key={i}>{f}</p>)}
            </div>
            <p className="section-lead grey mt-16">{t.feeNote}</p>
            <div className="payment-box mt-24">
              <h4>{t.paymentHeading}</h4>
              <p>{t.paymentAccount}</p>
              <p>{t.paymentForeign}</p>
            </div>
            <p className="section-lead grey mt-16">{t.contact}</p>
            <a href="/rs/registration" className="btn-ihis btn-ihis-color mt-30">Prijavite se</a>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
