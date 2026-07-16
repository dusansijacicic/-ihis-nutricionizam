import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Services — IHIS Nutricionizam',
  description: 'IHIS Nutricionizam services — technology consulting, food labeling and health claims, new product development, alignment with Serbian and EU legislation.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/services',
    languages: { sr: 'https://ihis-nutricionizam.rs/usluge', en: 'https://ihis-nutricionizam.rs/en/services' },
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
      <Header locale="en" current="services" langHref="/usluge" />
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
                  Efficiently managing your investment in technology and new product development
                  is a core component of your profitable growth. In today's era of intensive
                  technological development, it is essential to have a reliable advisor who ensures
                  you always have the best solutions and answers to every challenge that comes with
                  managing new technologies.
                </p>
                <p>
                  Your top-quality product must be backed by a flawless label that highlights all
                  of its benefits while respecting legal regulations. Consumers must be offered a
                  friendly, appropriate claim — but one that also complies with both national and
                  EU legislation.
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
                  <i className="ion-ios-flask card-icon"></i>
                  <h4 className="card-title">Technology consulting</h4>
                  <p>Improving the quality of existing products and introducing innovations; expert assistance in launching new functional products.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-document-text card-icon"></i>
                  <h4 className="card-title">Labeling and health claims</h4>
                  <p>We propose health and nutrition claims for food products; we align your labeling requirements with Serbian and EU legislation.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-world card-icon"></i>
                  <h4 className="card-title">Implementation of legal norms</h4>
                  <p>We implement legal norms (Serbian and EU) relating to product quality and accompanying documentation; we provide expert opinions on products with a specific health claim.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-leaf card-icon"></i>
                  <h4 className="card-title">New product development</h4>
                  <p>We develop new food products — from concept to final labeling. Special expertise: functional foods, confectionery products, food supplements.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-star card-icon"></i>
                  <h4 className="card-title">Marketing support</h4>
                  <p>We provide marketing support to help differentiate your functional products from existing similar products on the market.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-university card-icon"></i>
                  <h4 className="card-title">Workshops and education</h4>
                  <p>We organize sensory analysis workshops and labeling workshops for producer and distributor teams.</p>
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
