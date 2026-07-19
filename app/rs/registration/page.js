import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import RegistrationForm from '../../../components/RegistrationForm';
import PaymentSlip from '../../../components/PaymentSlip';
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

        <div className="section-white">
          <div className="container">
            <div className="grid-3 grid-3--tight">
              <div className="fade-in">
                <div className="contact-label-box">
                  <span className="ion-ios-calendar"></span>
                  <h4>Datum</h4>
                  <p>{t.when}</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="contact-label-box">
                  <span className="ion-ios-location"></span>
                  <h4>Lokacija</h4>
                  <p>{t.where}</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="contact-label-box">
                  <span className="ion-document-text"></span>
                  <h4>Tema savetovanja</h4>
                  <p>{t.subtitle}</p>
                </div>
              </div>
            </div>
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

              <div className="contact-info reg-sidebar fade-in">
                <span className="section-tag">Kotizacija</span>
                <h2 className="section-h">Uslovi učešća</h2>
                <span className="liner"></span>
                <div className="fee-box mt-10">
                  {t.fees.map((f, i) => <p className="fee-box-line" key={i}>{f}</p>)}
                </div>
                <p className="mt-16" style={{ fontSize: 14, lineHeight: '22px', opacity: .85 }}>{t.feeNote}</p>
                <h3 className="payment-heading mt-24">{t.paymentHeading}</h3>
                <PaymentSlip locale="sr" t={t} />
                <p className="mt-16" style={{ fontSize: 13, opacity: .85 }}>{t.paymentForeign}</p>
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
