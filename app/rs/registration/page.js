import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import RegistrationForm from '../../../components/RegistrationForm';
import { POZIV } from '../../../lib/content/poziv';

export const metadata = {
  title: 'Prijava za savetovanje — 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE',
  description: 'Prijavite se za 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE, 06.10.2026, Hotel Crowne Plaza, Beograd.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/registration',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/registration', en: 'https://ihis-nutricionizam.rs/en/registration' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Prijava za savetovanje — 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE',
    description: '06.10.2026, Hotel Crowne Plaza, Beograd.',
    url: 'https://ihis-nutricionizam.rs/rs/registration',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function PrijavaStranica() {
  const t = POZIV.sr;

  return (
    <>
      <Header locale="sr" current="home" langHref="/en/registration" />
      <MobileNav locale="sr" current="home" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Prijava za savetovanje</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Prijava</p>
          </div>
        </div>

        <div className="section-dark">
          <div className="container">
            <div className="contact-row">
              <div className="col-text fade-in">
                <span className="section-tag">Prijavite se</span>
                <h2 className="section-h">13. Savetovanje HRANA, ISHRANA &amp; ZDRAVLJE</h2>
                <span className="liner mb-20"></span>
                <RegistrationForm locale="sr" />
              </div>

              <div className="contact-info fade-in">
                <span className="section-tag">Detalji</span>
                <h2 className="section-h">Kada i gde</h2>
                <span className="liner"></span>
                <p className="mb-16">{t.when}</p>
                <p className="mb-16">{t.where}</p>
                <p className="mb-16">{t.subtitle}</p>
                <div className="fee-box mt-10">
                  {t.fees.map((f, i) => <p className="fee-box-line" key={i}>{f}</p>)}
                </div>
                <p className="mt-16" style={{ fontSize: 13, opacity: .85 }}>{t.feeNote}</p>
                <p className="mt-16"><a href="/rs/invitation" style={{ color: '#fff', textDecoration: 'underline' }}>Pogledajte kompletan poziv i program &rarr;</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
