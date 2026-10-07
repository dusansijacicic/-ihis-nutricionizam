import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import RegistrationForm from '../../../components/RegistrationForm';
import ProgramCta from '../../../components/ProgramCta';
import { RADIONICA } from '../../../lib/content/radionica';

export const metadata = {
  title: 'Food Labeling Workshop — IHIS Nutricionizam',
  description: 'One-day workshop on labeling food products for the EU and Serbian markets, with the application of nutrition and health claims. Lecturer: Danica Zarić, PhD.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/workshop',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/radionica', en: 'https://ihis-nutricionizam.rs/en/workshop' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Food Labeling Workshop',
    description: 'Labeling food products for the EU and Serbian markets, with the application of nutrition and health claims.',
    url: 'https://ihis-nutricionizam.rs/en/workshop',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function WorkshopEn() {
  const t = RADIONICA.en;

  return (
    <>
      <Header locale="en" current="workshop" langHref="/rs/radionica" />
      <MobileNav locale="en" current="workshop" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Labeling Workshop</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Workshop</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-sm">
            <span className="section-tag">Workshop</span>
            <h2 className="section-h">{t.subtitle}</h2>
            <span className="liner"></span>
            <p className="section-lead grey">{t.intro}</p>
            <div className="workshop-facts">
              {t.facts.map((f) => (
                <div className="workshop-fact fade-in" key={f.label}>
                  <i className={f.icon}></i>
                  <span className="workshop-fact-label">{f.label}</span>
                  <span className="workshop-fact-value">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">Program</span>
              <h2 className="section-h">{t.programsHeading}</h2>
              <span className="liner"></span>
            </div>
            <div className="tier-grid tier-grid--2">
              {t.programs.map((p, i) => (
                <div className="fade-in" key={p.name}>
                  <div className={`tier-card${i === 1 ? ' tier-card--featured' : ''}`}>
                    <h3 className="tier-name">{p.name}</h3>
                    <p className="tier-sub">{p.subtitle}</p>
                    <div className="tier-price">{p.price}</div>
                    <ul className="workshop-schedule">
                      {p.schedule.map((s) => (
                        <li key={s.time}>
                          <span className="workshop-slot">{s.time}</span>
                          <p>{s.text}</p>
                          {s.note && <span className="workshop-note">{s.note}</span>}
                        </li>
                      ))}
                    </ul>
                    <ProgramCta programId={p.id} label={t.programCta} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="callout-note"><i className="ion-ios-people"></i>{t.discount}</span>
              <p className="section-lead grey mt-20">{t.feeNote}</p>
            </div>
          </div>
        </div>

        <div className="section-dark" id="prijava">
          <div className="container-narrow">
            <div className="text-center">
              <span className="section-tag">Dates by arrangement</span>
              <h2 className="section-h">{t.applyHeading}</h2>
              <span className="liner"></span>
              <p className="section-lead">{t.formIntro}</p>
            </div>
            <div className="workshop-form">
              <RegistrationForm locale="en" />
            </div>
            <p className="mt-24 text-center">{t.contact}</p>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
