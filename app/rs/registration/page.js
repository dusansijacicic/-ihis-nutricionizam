import Header from '../../../components/Header';
import JsonLd from '../../../components/JsonLd';
import { breadcrumbSchema } from '../../../lib/schema';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import RegistrationForm from '../../../components/RegistrationForm';
import { RADIONICA } from '../../../lib/content/radionica';

export const metadata = {
  title: 'Prijava za radionicu o deklarisanju — IHIS Nutricionizam',
  description: 'Prijavite se za jednodnevnu radionicu o deklarisanju prehrambenih proizvoda za EU i SRB tržište. Termin i mesto održavanja po dogovoru.',
  alternates: {
    canonical: 'https://www.ihis-nutricionizam.rs/rs/registration',
    languages: { sr: 'https://www.ihis-nutricionizam.rs/rs/registration', en: 'https://www.ihis-nutricionizam.rs/en/registration', 'x-default': 'https://www.ihis-nutricionizam.rs/rs/registration' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Prijava za radionicu o deklarisanju',
    description: 'Jednodnevna radionica o deklarisanju prehrambenih proizvoda za EU i SRB tržište.',
    url: 'https://www.ihis-nutricionizam.rs/rs/registration',
    images: ['https://www.ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function PrijavaStranica() {
  const t = RADIONICA.sr;

  return (
    <>
      <Header locale="sr" current="workshop" langHref="/en/registration" />
      <MobileNav locale="sr" current="workshop" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Prijava za radionicu</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; <a href="/rs/radionica">Radionica</a> &rsaquo; Prijava</p>
            <JsonLd data={breadcrumbSchema([["Početna", "/rs"], ["Radionica", "/rs/radionica"], ["Prijava", "/rs/registration"]])} />
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-sm">
            <span className="section-tag">Radionica o deklarisanju</span>
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

        <div className="section-dark" id="prijava">
          <div className="container">
            <div className="contact-row">
              <div className="col-text fade-in">
                <span className="section-tag">Prijavite se</span>
                <h2 className="section-h">Radionica o deklarisanju</h2>
                <span className="liner mb-20"></span>
                <p className="reg-lead">{t.formIntro}</p>
                <RegistrationForm locale="sr" />
              </div>

              <div className="contact-info reg-sidebar fade-in">
                <span className="section-tag">Kotizacija</span>
                <h2 className="section-h">Uslovi učešća</h2>
                <span className="liner"></span>
                <div className="fee-box reg-fee-box">
                  {t.programs.map((p) => (
                    <p className="fee-box-line" key={p.id}>
                      <span className="fee-box-name">{p.name} · {p.time}</span>
                      {p.price}
                    </p>
                  ))}
                </div>
                <ul className="reg-facts">
                  <li><i className="ion-ios-people"></i>{t.discount}</li>
                  <li><i className="ion-ios-person"></i>{t.minParticipants}</li>
                  <li><i className="ion-ios-checkmark-outline"></i>{t.includesHeading}: {t.includes.join(', ').toLowerCase()}</li>
                </ul>
                <a href="/rs/radionica" className="btn-ihis btn-ihis-cream reg-program-btn">
                  <i className="ion-ios-list-outline"></i>{t.programLink}<i className="ion-ios-arrow-thin-right"></i>
                </a>

                <h3 className="reg-steps-heading">{t.stepsHeading}</h3>
                <ol className="reg-steps">
                  {t.steps.map((s) => (
                    <li key={s.title}>
                      <strong>{s.title}</strong>
                      <span>{s.text}</span>
                    </li>
                  ))}
                </ol>
                <p className="reg-contact">{t.contact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
