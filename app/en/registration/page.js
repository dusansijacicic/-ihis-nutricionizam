import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import RegistrationForm from '../../../components/RegistrationForm';
import { RADIONICA } from '../../../lib/content/radionica';

export const metadata = {
  title: 'Workshop Registration — IHIS Nutricionizam',
  description: 'Register for the one-day workshop on labeling food products for the EU and Serbian markets. Date and venue by arrangement.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/registration',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/registration', en: 'https://ihis-nutricionizam.rs/en/registration' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Food Labeling Workshop Registration',
    description: 'One-day workshop on labeling food products for the EU and Serbian markets.',
    url: 'https://ihis-nutricionizam.rs/en/registration',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function RegistrationPage() {
  const t = RADIONICA.en;

  return (
    <>
      <Header locale="en" current="workshop" langHref="/rs/registration" />
      <MobileNav locale="en" current="workshop" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Workshop Registration</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; <a href="/en/workshop">Workshop</a> &rsaquo; Registration</p>
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
                <span className="section-tag">Register</span>
                <h2 className="section-h">Labeling Workshop</h2>
                <span className="liner mb-20"></span>
                <p className="mb-20">{t.formIntro}</p>
                <RegistrationForm locale="en" />
              </div>

              <div className="contact-info reg-sidebar fade-in">
                <span className="section-tag">Fee</span>
                <h2 className="section-h">Terms of participation</h2>
                <span className="liner"></span>
                <div className="fee-box mt-10">
                  {t.programs.map((p) => <p className="fee-box-line" key={p.id}>{p.name}: {p.price}</p>)}
                </div>
                <p className="mt-16" style={{ fontSize: 14, lineHeight: '22px', opacity: .85 }}>{t.discount}. {t.feeNote}</p>
                <p className="mt-16" style={{ fontSize: 13, opacity: .85 }}>{t.contact}</p>
                <p className="mt-16"><a href="/en/workshop" style={{ color: '#fff', textDecoration: 'underline' }}>See the full workshop program &rarr;</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
