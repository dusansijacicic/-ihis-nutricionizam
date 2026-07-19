import Header from '../../components/Header';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer';
import { POZIV } from '../../lib/content/poziv';

export const metadata = {
  title: 'IHIS Nutricionizam — Food, Nutrition and Health',
  description: 'IHIS Nutricionizam — a scientific research company for food labeling and product development, Belgrade.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en',
    languages: {
      sr: 'https://ihis-nutricionizam.rs/rs',
      en: 'https://ihis-nutricionizam.rs/en',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'IHIS Nutricionizam',
    locale: 'en_US',
    title: 'IHIS Nutricionizam — Food, Nutrition and Health',
    description: 'A scientific research company for food labeling and product development, Belgrade.',
    url: 'https://ihis-nutricionizam.rs/en',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function HomeEn() {
  return (
    <>
      <Header locale="en" current="home" langHref="/rs" />
      <MobileNav locale="en" current="home" />

      <section className="mastwrap">
        <div className="hero-slider hero-slider--single">
          <div className="hero-slide hero-slide--poziv is-active" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}>
            <div className="hero-poziv-panel">
              <span className="hero-poziv-tag">Latest</span>
              <h1 className="hero-poziv-title">Join the 13th Conference &quot;FOOD, NUTRITION &amp; HEALTH&quot;</h1>
              <p className="hero-poziv-sub">{POZIV.en.subtitle}</p>
              <p className="hero-poziv-meta">{POZIV.en.when} &middot; {POZIV.en.where}</p>
              <p className="hero-poziv-intro">{POZIV.en.intro[0]}</p>
              <div className="icon-row icon-row--dark hero-poziv-actions">
                <a href="/en/invitation" className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-ios-email-outline"></i></span>
                  <span className="icon-btn-label">Invitation</span>
                </a>
                <a href="/en/registration" className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-edit"></i></span>
                  <span className="icon-btn-label">Registration</span>
                </a>
                <a href="/en/sponsorship" className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-star"></i></span>
                  <span className="icon-btn-label">Sponsorship</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white text-center">
        <div className="container-40">
          <span className="section-tag">About the company</span>
          <h2 className="section-h">Science in the service of nutrition</h2>
          <span className="liner"></span>
          <p className="section-lead grey mt-20">
            IHIS NUTRICIONIZAM connects science, innovation and the food industry through
            the development of food, dietary supplements and functional products. As a
            research and development partner, we help companies turn their ideas into
            safe, regulatory-compliant and market-competitive products.
          </p>
          <p className="section-lead grey mt-10">
            We develop innovative products and provide expert technological and regulatory
            support to companies that want to stay a step ahead.
          </p>
          <a href="/en/about" className="btn-ihis btn-ihis-color mt-30">Learn more</a>
        </div>
      </section>

      <section className="section-light">
        <div className="container-40">
          <div className="section-head">
            <span className="section-tag">What we do</span>
            <h2 className="section-h">Our services</h2>
            <span className="liner"></span>
          </div>
          <div className="grid-3">
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-ios-flask"></i>
                <h3>Product development</h3>
                <div className="liner-small color"></div>
                <p>From idea to finished product – formulation development, ingredient selection and technological support.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-gear-b"></i>
                <h3>Technology consulting &amp; investments</h3>
                <div className="liner-small color"></div>
                <p>Support in technology and equipment selection, production line organization and capacity realization.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-leaf"></i>
                <h3>Functional ingredients &amp; functional food</h3>
                <div className="liner-small color"></div>
                <p>Expert selection, application and labeling of functional ingredients for innovative product development.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-document-text"></i>
                <h3>Labeling &amp; regulatory compliance</h3>
                <div className="liner-small color"></div>
                <p>Preparation and review of labels in line with the regulations of Serbia and the European Union.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-ios-search"></i>
                <h3>Scientific research &amp; expertise</h3>
                <div className="liner-small color"></div>
                <p>Research, expert analysis and support grounded in current scientific knowledge.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-university"></i>
                <h3>Education &amp; expert support</h3>
                <div className="liner-small color"></div>
                <p>Workshops and advisory services for producers, distributors and expert teams.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-30">
            <a href="/en/services" className="btn-ihis btn-ihis-dark">All services</a>
          </div>
        </div>
      </section>

      <section className="section-dark text-center">
        <div className="container-cta" style={{ maxWidth: 700 }}>
          <span className="section-tag" style={{ color: 'rgba(255,255,255,.4)' }}>Contact us</span>
          <h2 className="section-h mt-8">Let's work together</h2>
          <span className="liner"></span>
          <p className="mt-10" style={{ lineHeight: '28px' }}>
            Have an idea for a new food product, or need support in formulation
            development, choosing functional ingredients, aligning your product with food
            legislation, or improving your production process? Our expert team is here to
            help with reliable, science-based solutions tailored to your needs.
          </p>
          <a href="/en/contact" className="btn-ihis btn-ihis-white mt-30">Send an inquiry</a>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
