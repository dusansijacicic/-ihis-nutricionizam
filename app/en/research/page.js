import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Research & Development (R&D) — IHIS Nutricionizam',
  description: 'IHIS Nutricionizam research and development — product development, labeling and regulatory compliance, functional ingredients, nutritional value and scientific expertise.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/research',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/research', en: 'https://ihis-nutricionizam.rs/en/research' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Research & Development (R&D) — IHIS Nutricionizam',
    description: 'Product development, labeling and regulatory compliance, functional ingredients, nutritional value and scientific expertise.',
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
            <div className="section-head">
              <span className="section-tag">References</span>
              <h2 className="section-h">Realized projects</h2>
              <span className="liner"></span>
            </div>
            <p className="section-lead grey text-center" style={{ margin: '0 auto 30px' }}>
              Some of IHIS-Nutricionizam's most recent completed projects.
            </p>
            <div className="project-hero fade-in">
              <div className="hero-slide is-active" style={{ backgroundImage: "url('/assets/img/projects/orasje/factory.png')" }}>
                <div className="project-slide-caption">
                  <span className="project-slide-tag">Factory · Greenfield project</span>
                  <h3>El Grito — Orašje, Bosnia and Herzegovina</h3>
                </div>
              </div>
              <div className="hero-slide hero-slide--product" style={{ backgroundImage: "url('/assets/img/projects/orasje/la-bomba-lineup.png')" }}>
                <div className="project-slide-caption">
                  <h3>la Bomba — cream spreads</h3>
                </div>
              </div>
              <div className="hero-slide hero-slide--product" style={{ backgroundImage: "url('/assets/img/projects/orasje/la-bomba-cooking.png')" }}>
                <div className="project-slide-caption">
                  <h3>la Bomba — cooking chocolate</h3>
                </div>
              </div>
              <div className="hero-slide hero-slide--product" style={{ backgroundImage: "url('/assets/img/projects/orasje/el-grito.png')" }}>
                <div className="project-slide-caption">
                  <h3>El Grito — tortillas</h3>
                </div>
              </div>
              <div className="hero-slide hero-slide--product" style={{ backgroundImage: "url('/assets/img/projects/orasje/el-grito-chips.png')" }}>
                <div className="project-slide-caption">
                  <h3>El Grito — tortilla chips</h3>
                </div>
              </div>
              <div className="hero-slide hero-slide--product" style={{ backgroundImage: "url('/assets/img/projects/orasje/kakaova-ploca.png')" }}>
                <div className="project-slide-caption">
                  <h3>Cocoa bar for eating and cooking</h3>
                </div>
              </div>
              <div className="hero-slide hero-slide--product" style={{ backgroundImage: "url('/assets/img/projects/orasje/chips-way-strawberry.jpg')" }}>
                <div className="project-slide-caption">
                  <h3>Chips Way feel Happy — strawberry</h3>
                </div>
              </div>
              <div className="hero-slide hero-slide--product" style={{ backgroundImage: "url('/assets/img/projects/orasje/chips-way-apricot.png')" }}>
                <div className="project-slide-caption">
                  <h3>Chips Way feel Happy — apricot</h3>
                </div>
              </div>
              <div className="hero-slide hero-slide--product" style={{ backgroundImage: "url('/assets/img/projects/orasje/chips-way-choco.png')" }}>
                <div className="project-slide-caption">
                  <h3>Chips Way feel Happy — choco</h3>
                </div>
              </div>
              <div className="hero-overlay"></div>
              <button type="button" className="hero-arrow-prev" aria-label="Previous image">&lsaquo;</button>
              <button type="button" className="hero-arrow-next" aria-label="Next image">&rsaquo;</button>
              <div className="hero-dots">
                <div className="hero-dot is-active"></div>
                <div className="hero-dot"></div>
                <div className="hero-dot"></div>
                <div className="hero-dot"></div>
                <div className="hero-dot"></div>
                <div className="hero-dot"></div>
                <div className="hero-dot"></div>
                <div className="hero-dot"></div>
                <div className="hero-dot"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">Research & Development (R&amp;D)</span>
                <h2 className="section-h">Science turned into innovative products</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  IHIS-Nutricionizam connects scientific research, product development and
                  regulatory expertise to help companies develop safe, innovative and
                  market-competitive food products and dietary supplements.
                </p>
                <p className="mb-16">
                  Through a multidisciplinary approach, we provide support from defining the
                  product concept and formulation development, through the selection of
                  functional ingredients and nutritional value assessment, to preparing labels
                  and aligning products with the legislation of the Republic of Serbia and the
                  European Union.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover3.jpg" alt="Research and Development" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">What we do</span>
              <h2 className="section-h">Our R&amp;D activities</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-3">
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-leaf color"></i>New product development</h4>
                  <p>Development and improvement of food products, dietary supplements and functional food – from idea and formulation to a market-ready product.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-document-text color"></i>Labeling and regulatory compliance</h4>
                  <p>Preparing and reviewing labels for all categories of food products and dietary supplements, determining nutritional values, applying nutrition and health claims, and aligning with the legislation of Serbia and the EU.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-flask color"></i>Functional ingredients</h4>
                  <p>Selection, evaluation and application of functional ingredients and bioactive components in line with scientific evidence, technological requirements and the regulatory framework.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-pulse color"></i>Nutritional value and product quality</h4>
                  <p>Composition analysis, nutritional profile optimization and development of products that meet the needs of today's market and consumers.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-search color"></i>Scientific and expert know-how</h4>
                  <p>Applying current scientific knowledge, analysis and expert opinions in developing new products, improving existing formulations, and solving technological and regulatory challenges.</p>
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
