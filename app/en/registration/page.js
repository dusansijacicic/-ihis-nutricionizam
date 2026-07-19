import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import RegistrationForm from '../../../components/RegistrationForm';
import { POZIV } from '../../../lib/content/poziv';

export const metadata = {
  title: 'Registration — 13th Conference FOOD, NUTRITION & HEALTH',
  description: 'Register for the 13th Conference FOOD, NUTRITION & HEALTH, 6 October 2026, Hotel Crowne Plaza, Belgrade.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/registration',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/registration', en: 'https://ihis-nutricionizam.rs/en/registration' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Registration — 13th Conference FOOD, NUTRITION & HEALTH',
    description: '6 October 2026, Hotel Crowne Plaza, Belgrade.',
    url: 'https://ihis-nutricionizam.rs/en/registration',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function RegistrationPage() {
  const t = POZIV.en;

  return (
    <>
      <Header locale="en" current="home" langHref="/rs/registration" />
      <MobileNav locale="en" current="home" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Registration</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Registration</p>
          </div>
        </div>

        <div className="section-dark">
          <div className="container">
            <div className="contact-row">
              <div className="col-text fade-in">
                <span className="section-tag">Register</span>
                <h2 className="section-h">13th Conference FOOD, NUTRITION &amp; HEALTH</h2>
                <span className="liner mb-20"></span>
                <RegistrationForm locale="en" />
              </div>

              <div className="contact-info fade-in">
                <span className="section-tag">Details</span>
                <h2 className="section-h">When and where</h2>
                <span className="liner"></span>
                <p className="mb-16">{t.when}</p>
                <p className="mb-16">{t.where}</p>
                <p className="mb-16">{t.subtitle}</p>
                <div className="fee-box mt-10">
                  {t.fees.map((f, i) => <p className="fee-box-line" key={i}>{f}</p>)}
                </div>
                <p className="mt-16" style={{ fontSize: 13, opacity: .85 }}>{t.feeNote}</p>
                <div className="payment-box mt-16">
                  <h4>{t.paymentHeading}</h4>
                  <p>{t.paymentAccount}</p>
                  <p>{t.paymentForeign}</p>
                </div>
                <p className="mt-16"><a href="/en/invitation" style={{ color: '#fff', textDecoration: 'underline' }}>View the full invitation and program &rarr;</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
