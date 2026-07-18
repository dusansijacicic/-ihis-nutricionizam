import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Services — IHIS Nutricionizam',
  description: 'IHIS Nutricionizam services — technology consulting, food labeling and health claims, new product development, alignment with Serbian and EU legislation.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/services',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/services', en: 'https://ihis-nutricionizam.rs/en/services' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Services — IHIS Nutricionizam',
    description: 'Technology consulting, food labeling and health claims, new product development.',
    url: 'https://ihis-nutricionizam.rs/en/services',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

export default function ServicesEn() {
  return (
    <>
      <Header locale="en" current="services" langHref="/rs/services" />
      <MobileNav locale="en" current="services" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Services</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Services</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">What we offer</span>
                <h2 className="section-h">Expert support for the food industry</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  A successful food product requires a combination of science, technology,
                  regulatory compliance and market understanding. IHIS-Nutricionizam provides
                  complete support to companies – from concept and product formulation
                  development, through technology selection and production process setup, to
                  bringing the product to market.
                </p>
                <p>
                  Our goal is to enable companies to develop more efficiently, reduce risk, and
                  create products that meet the demands of today's consumers and current
                  regulatory standards.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover.jpg" alt="Services" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">What we offer</span>
              <h2 className="section-h">Our services</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-2">
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-leaf card-icon"></i>
                  <h4 className="card-title">New product development</h4>
                  <p>We develop innovative food products, dietary supplements and functional food – from the initial idea and ingredient selection to formulation and industrial realization.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-gear-b card-icon"></i>
                  <h4 className="card-title">Technology consulting &amp; greenfield investments</h4>
                  <p>We provide complete support in establishing new production capacities – from defining the technological concept, equipment selection and contracting, production line organization, raw material selection and process design, to launching and optimizing operations.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-document-text card-icon"></i>
                  <h4 className="card-title">Labeling &amp; regulatory support</h4>
                  <p>We prepare and review food product labels, align them with the requirements of Serbian and EU legislation, and advise on the use of nutrition and health claims.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-flask card-icon"></i>
                  <h4 className="card-title">Functional ingredients &amp; functional products</h4>
                  <p>We help select, apply and correctly label functional ingredients, and support the development of products with added nutritional value.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-search card-icon"></i>
                  <h4 className="card-title">Scientific research support</h4>
                  <p>We carry out research and expert analysis that enable science-based product development and sound business decisions.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-university card-icon"></i>
                  <h4 className="card-title">Education &amp; knowledge transfer</h4>
                  <p>We organize expert workshops, conferences and educational programs for food producers, distributors and expert teams, aimed at advancing knowledge, quality and the application of modern technologies and regulations in the food industry.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-people card-icon"></i>
                  <h4 className="card-title">Industry conferences &amp; networking</h4>
                  <p>We organize expert gatherings that connect science, industry and regulation, including our traditional annual conferences: the Regional Confectionery Conference in April and the "Food, Nutrition & Health" Conference in October.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-star card-icon"></i>
                  <h4 className="card-title">Marketing support &amp; product positioning</h4>
                  <p>We help companies clearly define product value, communicate its benefits, and position innovative and functional products on the market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <h2 className="section-h">Request a proposal</h2>
            <span className="liner"></span>
            <p className="mt-10">Tell us about your needs and we'll get back to you shortly with a proposal for cooperation.</p>
            <a href="/en/contact" className="btn-ihis btn-ihis-white mt-24">Contact us</a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
