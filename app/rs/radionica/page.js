import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import RegistrationForm from '../../../components/RegistrationForm';
import ProgramCta from '../../../components/ProgramCta';
import { RADIONICA } from '../../../lib/content/radionica';

export const metadata = {
  title: 'Radionica o deklarisanju prehrambenih proizvoda — IHIS Nutricionizam',
  description: 'Jednodnevna radionica o deklarisanju prehrambenih proizvoda za EU i SRB tržište, sa primenom nutritivnih i zdravstvenih izjava. Predavač: dr Danica Zarić.',
  alternates: {
    canonical: 'https://www.ihis-nutricionizam.rs/rs/radionica',
    languages: { sr: 'https://www.ihis-nutricionizam.rs/rs/radionica', en: 'https://www.ihis-nutricionizam.rs/en/workshop', 'x-default': 'https://www.ihis-nutricionizam.rs/rs/radionica' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Radionica o deklarisanju prehrambenih proizvoda',
    description: 'Deklarisanje prehrambenih proizvoda za EU i SRB tržište, sa primenom nutritivnih i zdravstvenih izjava.',
    url: 'https://www.ihis-nutricionizam.rs/rs/radionica',
    images: ['https://www.ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function Radionica() {
  const t = RADIONICA.sr;

  return (
    <>
      <Header locale="sr" current="workshop" langHref="/en/workshop" />
      <MobileNav locale="sr" current="workshop" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Radionica o deklarisanju</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Radionica</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-sm">
            <span className="section-tag">Radionica</span>
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
              <span className="section-tag">Termini po dogovoru</span>
              <h2 className="section-h">{t.applyHeading}</h2>
              <span className="liner"></span>
              <p className="section-lead">{t.formIntro}</p>
            </div>
            <div className="workshop-form">
              <RegistrationForm locale="sr" />
            </div>
            <p className="mt-24 text-center">{t.contact}</p>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
