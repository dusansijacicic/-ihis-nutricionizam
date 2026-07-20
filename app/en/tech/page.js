import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Technology & Greenfield Investments — IHIS Nutricionizam',
  description: 'Technology consulting and greenfield investments by IHIS Nutricionizam — equipment selection, production line organization and realization of new production capacities.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/tech',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/tech', en: 'https://ihis-nutricionizam.rs/en/tech' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Technology & Greenfield Investments — IHIS Nutricionizam',
    description: 'Equipment selection, production line organization and realization of new production capacities.',
    url: 'https://ihis-nutricionizam.rs/en/tech',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

export default function TechEn() {
  return (
    <>
      <Header locale="en" current="tech" langHref="/rs/tech" />
      <MobileNav locale="en" current="tech" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Technology &amp; Greenfield Investments</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Technology &amp; Greenfield Investments</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">Technology consulting</span>
                <h2 className="section-h">From technological concept to production launch</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  We provide complete support to companies planning new production capacities
                  or greenfield investments in the food industry – from defining the
                  technological concept and equipment selection, through production line
                  organization, to launching and optimizing production.
                </p>
                <p>
                  Our team follows the investment through every stage, connecting
                  technological, regulatory and market knowledge, so that the new production
                  facility runs efficiently, safely and in compliance with Serbian and EU
                  regulations from day one.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover2.jpg" alt="Technology & Greenfield Investments" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">What we offer</span>
              <h2 className="section-h">Support through every stage of the investment</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-2">
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-document-text card-icon"></i>
                  <h4 className="card-title">Technological concept</h4>
                  <p>Defining the technological concept and production process in line with the product range and investment capacity.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-gear-b card-icon"></i>
                  <h4 className="card-title">Equipment selection &amp; contracting</h4>
                  <p>Expert support in selecting suppliers and contracting equipment that meets technological and budget requirements.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-people card-icon"></i>
                  <h4 className="card-title">Production line organization</h4>
                  <p>Designing the layout and organization of production lines for an efficient and safe production flow.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-leaf card-icon"></i>
                  <h4 className="card-title">Raw material &amp; process selection</h4>
                  <p>Selecting raw materials and defining production processes aligned with the technology and planned products.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-flask card-icon"></i>
                  <h4 className="card-title">Production launch</h4>
                  <p>Support during production start-up, staff training and process optimization during the first production cycles.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-world card-icon"></i>
                  <h4 className="card-title">Greenfield investments</h4>
                  <p>Complete support in realizing greenfield investments, from planning to the start-up of the new facility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <h2 className="section-h">Planning a new investment?</h2>
            <span className="liner"></span>
            <p className="mt-10">Contact us and let's discuss the technological concept that fits your plans.</p>
            <a href="/en/contact" className="btn-ihis btn-ihis-white mt-24">Contact us</a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
