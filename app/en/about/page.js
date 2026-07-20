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
                  technologically feasible and regulatory-compliant solutions. Our mission is to turn
                  scientific knowledge into market-successful products, as a partner to companies at
                  every stage of development:
                </p>
                <ul className="poziv-topic-list mb-16">
                  <li>Concept development, formulation and selection of functional ingredients</li>
                  <li>Industrial production and market launch</li>
                  <li>Defining the technological concept, equipment selection and contracting</li>
                  <li>Production line organization and greenfield investments</li>
                </ul>
                <p>
                  We ground our expert support in experience, research and an understanding of
                  today's market requirements and consumer needs.
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
                <div className="team-photo" style={{ backgroundImage: "url('/assets/img/branko.jpg')" }}></div>
                <h4>M.Sc. Tech. Branko Zarić</h4>
                <h6>Director</h6>
                <a href="https://www.linkedin.com/in/branko-zari%C4%87-274256b8/" target="_blank" rel="noreferrer" className="team-linkedin" aria-label="LinkedIn profile — Branko Zarić">
                  <span className="ion-social-linkedin"></span>
                </a>
              </div>
              <div className="team-member fade-in">
                <div className="team-photo" style={{ backgroundImage: "url('/assets/img/danica.jpg')" }}></div>
                <h4>PhD Danica Zarić</h4>
                <h6>Founder</h6>
                <a href="https://www.linkedin.com/in/danica-zaric-32239683/" target="_blank" rel="noreferrer" className="team-linkedin" aria-label="LinkedIn profile — Danica Zarić">
                  <span className="ion-social-linkedin"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Biography</span>
              <h2 className="section-h">M.Sc. Tech. Branko Zarić — Director</h2>
              <span className="liner"></span>
            </div>
            <div className="container-narrow" style={{ padding: 0 }}>
              <p className="mb-16">
                Over 30 years of experience leading major food industry companies, with a rich
                career in executive and management roles across production, sales, procurement
                and investment development:
              </p>
              <ul className="poziv-topic-list mb-16">
                <li>Production Director — Soko Štark</li>
                <li>Sales Director — Fresh&amp;Co</li>
                <li>Procurement Director — Imlek</li>
                <li>Chairman of the Board — Bitola Dairy (Bimilk)</li>
              </ul>
              <p>
                Today he applies his extensive industry experience to developing innovative
                projects and providing strategic and technological support to companies in the
                food sector.
              </p>
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Biography</span>
              <h2 className="section-h">PhD Danica Zarić — Founder</h2>
              <span className="liner"></span>
            </div>
            <div className="container-narrow" style={{ padding: 0 }}>
              <p className="mb-16">
                She built a professional career in the food industry spanning more than 15 years
                in senior product development roles, before founding IHIS-Nutricionizam:
              </p>
              <ul className="poziv-topic-list mb-16">
                <li>Soko Štark — Head of Chocolate Development</li>
                <li>Delta Holding — Development Director</li>
                <li>Bambi-Banat — Development Director</li>
                <li>PhD (2011) — chocolate production using soy milk in ball mills</li>
                <li>Research Professor (2020) — highest scientific title</li>
                <li>100+ scientific papers, 11 technical solutions in functional food and confectionery products</li>
                <li>Member of the Serbian Ministry of Health expert team for the Regulation on Nutrition and Health Claims</li>
              </ul>
              <p className="mb-16">
                Her expertise covers research and development of food products, functional food,
                dietary supplements, food labeling, the application of nutrition and health
                claims, and the regulatory requirements of the Republic of Serbia and the
                European Union. She regularly participates as a speaker and moderator at
                professional conferences on product development, food labeling, nutrition and
                health claims, and food product quality.
              </p>
              <p>
                Through IHIS-Nutricionizam, she brings together a multidisciplinary team of
                top-tier experts in food technology, biotechnology, nutrition science, quality
                and food safety, providing companies with science-based, practically applicable
                solutions for developing innovative products.
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
