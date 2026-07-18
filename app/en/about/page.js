import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'About Us — IHIS Nutricionizam',
  description: 'About IHIS Nutricionizam — a scientific research company for nutrition science and food labeling in Belgrade, founded in 2012, part of the IHIS Science and Technology Park Zemun.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/about',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/about', en: 'https://ihis-nutricionizam.rs/en/about' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'About Us — IHIS Nutricionizam',
    description: 'A scientific research company for nutrition science and food labeling in Belgrade.',
    url: 'https://ihis-nutricionizam.rs/en/about',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function AboutEn() {
  return (
    <>
      <Header locale="en" current="about" langHref="/rs/about" />
      <MobileNav locale="en" current="about" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">About Us</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; About Us</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">Who we are</span>
                <h2 className="section-h">IHIS Nutricionizam</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  <strong>IHIS-NUTRICIONIZAM</strong> is a scientific research organization specializing in the
                  development of food, dietary supplements and functional products. We connect modern
                  scientific achievements with the needs of the food industry, creating innovative,
                  technologically feasible and regulatory-compliant solutions.
                </p>
                <p className="mb-16">
                  Our mission is to turn scientific knowledge into market-successful products – from the
                  initial idea, formulation development and selection of functional ingredients, to
                  industrial production and market launch. We are a partner to companies at every stage
                  of product development, providing expert support grounded in experience, research and
                  an understanding of today's market requirements and consumer needs.
                </p>
                <p>
                  Beyond product development, we provide complete support in realizing new production
                  capacities and greenfield investments – from defining the technological concept,
                  selecting and contracting equipment, designing and organizing production lines,
                  sourcing raw materials and establishing production processes, to launching and
                  optimizing production.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover3.jpg" alt="IHIS Nutricionizam" className="shadow-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Our experts</span>
              <h2 className="section-h">Team</h2>
              <span className="liner"></span>
            </div>
            <div className="team-row">
              <div className="team-member fade-in">
                <div className="team-photo" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}></div>
                <h4>Dr Danica Zarić</h4>
                <h6>Director</h6>
              </div>
              <div className="team-member fade-in">
                <div className="team-photo" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}></div>
                <h4>Expert team</h4>
                <h6>Technologists · Nutritionists · Biotechnologists</h6>
                <p>Brings together the highest-quality specialists in technology, biotechnology, nutrition science, quality and food safety.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Biography</span>
              <h2 className="section-h">Dr Danica Zarić</h2>
              <span className="liner"></span>
            </div>
            <div className="container-narrow" style={{ padding: 0 }}>
              <p className="mb-16">
                She earned her PhD in 2011 on the production of chocolate using soy milk in ball
                mills. She built a 15-year professional career in the food industry — at Soko Nada
                Štark, Delta Holding and Bambi-Banat — before founding IHIS Nutricionizam.
              </p>
              <p className="mb-16">
                She is the author and co-author of more than 100 published scientific papers and
                holds 8 technical solutions in the field of functional confectionery products.
                Since 2020 she has also been engaged as a senior research associate at the
                Innovation Center of the Faculty of Technology and Metallurgy, University of
                Belgrade.
              </p>
              <p>
                She regularly participates as a speaker and moderator at regional professional
                conferences on food labeling, nutrition and health claims, and confectionery
                product quality.
              </p>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <h2 className="section-h">Get in touch</h2>
            <span className="liner"></span>
            <p className="mt-10">Interested in working together, or have a question? We'd love to hear from you.</p>
            <a href="/en/contact" className="btn-ihis btn-ihis-white mt-24">Contact us</a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
