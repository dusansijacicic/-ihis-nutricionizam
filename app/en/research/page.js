import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Research & Development (R&D) — IHIS Nutricionizam',
  description: 'IHIS Nutricionizam research and development — nutritional and energy value of food, functional ingredients, effects on metabolism, and food contaminants.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/research',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/research', en: 'https://ihis-nutricionizam.rs/en/research' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Research — IHIS Nutricionizam',
    description: 'Nutritional and energy value of food, functional ingredients, effects on metabolism, and food contaminants.',
    url: 'https://ihis-nutricionizam.rs/en/research',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function ResearchEn() {
  return (
    <>
      <Header locale="en" current="research" langHref="/rs/research" />
      <MobileNav locale="en" current="research" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Research &amp; Development (R&amp;D)</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Research &amp; Development</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">Our research</span>
                <h2 className="section-h">The scientific foundation of everything we do</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  According to the FAO/WHO World Declaration on Nutrition (1992), ensuring a
                  sufficient quantity of varied, safe food is a fundamental human right. Meeting
                  nutritional needs and ensuring food safety are key factors in preventing a wide
                  range of diseases and disorders. A healthy diet and food safety are therefore
                  prerequisites for achieving, maintaining and improving human health.
                </p>
                <p className="mb-16">
                  Food is essential for human growth, development and bodily functions. Good
                  nutrition requires a well-balanced diet that provides an adequate daily amount of
                  all classes of nutrients and optimal energy intake for the human body. Food must
                  be safe, nutritious and available in a sustainable way.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover3.jpg" alt="Research" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Areas</span>
              <h2 className="section-h">Research topics</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-2">
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-flask color"></i>Nutritional and energy value</h4>
                  <p>Basic research into food products and food supplements, exploring opportunities for their improvement, innovation, and proposing innovative products for the market.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-leaf color"></i>Functional ingredients and health</h4>
                  <p>Research into the effects of functional ingredients on human health and metabolism — clinical efficacy, effective doses, safety of use.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-pulse color"></i>Effects on metabolism</h4>
                  <p>Research into the effects of a food product's nutrients on metabolism — bioavailability, absorption, interactions with the body.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-warning color"></i>Food contaminants</h4>
                  <p>Research into the effects of contaminants that enter food from the environment or during processing and production — risk identification and preventive measures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer locale="en" />
    </>
  );
}
