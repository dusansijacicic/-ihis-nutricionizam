import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import RegistrationForm from '../../../components/RegistrationForm';
import { RADIONICA } from '../../../lib/content/radionica';

export const metadata = {
  title: 'Prijava za radionicu o deklarisanju — IHIS Nutricionizam',
  description: 'Prijavite se za jednodnevnu radionicu o deklarisanju prehrambenih proizvoda za EU i SRB tržište. Termin i mesto održavanja po dogovoru.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/registration',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/registration', en: 'https://ihis-nutricionizam.rs/en/registration' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Prijava za radionicu o deklarisanju',
    description: 'Jednodnevna radionica o deklarisanju prehrambenih proizvoda za EU i SRB tržište.',
    url: 'https://ihis-nutricionizam.rs/rs/registration',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover2.jpg'],
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
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="grid-3 grid-3--tight">
              {t.facts.map((f) => (
                <div className="fade-in" key={f.label}>
                  <div className="contact-label-box">
                    <span className={f.icon}></span>
                    <h4>{f.label}</h4>
                    <p>{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-dark">
          <div className="container">
            <div className="contact-row">
              <div className="col-text fade-in">
                <span className="section-tag">Prijavite se</span>
                <h2 className="section-h">Radionica o deklarisanju</h2>
                <span className="liner mb-20"></span>
                <p className="mb-20">{t.formIntro}</p>
                <RegistrationForm locale="sr" />
              </div>

              <div className="contact-info reg-sidebar fade-in">
                <span className="section-tag">Kotizacija</span>
                <h2 className="section-h">Uslovi učešća</h2>
                <span className="liner"></span>
                <div className="fee-box mt-10">
                  {t.programs.map((p) => <p className="fee-box-line" key={p.id}>{p.name}: {p.price}</p>)}
                </div>
                <p className="mt-16" style={{ fontSize: 14, lineHeight: '22px', opacity: .85 }}>{t.discount}. {t.feeNote}</p>
                <p className="mt-16" style={{ fontSize: 13, opacity: .85 }}>{t.contact}</p>
                <p className="mt-16"><a href="/rs/radionica" style={{ color: '#fff', textDecoration: 'underline' }}>Pogledajte kompletan program radionice &rarr;</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
