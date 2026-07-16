import Header from '../../components/Header';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer';

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
        <div className="hero-slider">
          <div className="hero-slide is-active" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-caption">
            <h1 className="hero-title">IHIS Nutricionizam</h1>
            <span className="hero-sub">Food &bull; Nutrition &bull; Health</span>
          </div>
          <div className="hero-dots">
            <div className="hero-dot is-active"></div>
            <div className="hero-dot"></div>
            <div className="hero-dot"></div>
            <div className="hero-dot"></div>
          </div>
        </div>
      </section>

      <section className="section-white text-center">
        <div className="container-40">
          <span className="section-tag">About the company</span>
          <h2 className="section-h">Science in the service of nutrition</h2>
          <span className="liner"></span>
          <p className="section-lead">„Let food be thy medicine and medicine be thy food." — Hippocrates</p>
          <p className="section-lead grey mt-20">
            IHIS Nutricionizam is a scientific research company dedicated to improving the
            quality and correct labeling of food products on the Serbian and European market.
            Alongside our research mission, we provide expert support to companies in the food
            industry and educate consumers and producers.
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
                <i className="icon ion-document-text"></i>
                <h3>Product labeling</h3>
                <div className="liner-small color"></div>
                <p>Review and creation of correct labels in line with Serbian and EU food labeling regulations.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-ribbon-a"></i>
                <h3>Nutrition claims</h3>
                <div className="liner-small color"></div>
                <p>Advice on the use of permitted nutrition and health claims on food packaging.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-leaf"></i>
                <h3>Functional ingredients</h3>
                <div className="liner-small color"></div>
                <p>Selection and labeling of functional ingredients; development of functional food products.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-ios-search"></i>
                <h3>Scientific research</h3>
                <div className="liner-small color"></div>
                <p>Research into label accuracy across samples of thousands of food products on the market.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-university"></i>
                <h3>Education</h3>
                <div className="liner-small color"></div>
                <p>Organizing conferences and lectures for food producers, distributors and consumers.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-star"></i>
                <h3>Marketing support</h3>
                <div className="liner-small color"></div>
                <p>Positioning functional and healthy products on the market; communication with consumers.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-30">
            <a href="/en/services" className="btn-ihis btn-ihis-dark">All services</a>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container-40">
          <div className="section-head">
            <span className="section-tag">Latest</span>
            <h2 className="section-h">News and conferences</h2>
            <span className="liner"></span>
          </div>
          <div className="home-news-grid">
            <div className="fade-in">
              <div className="news-block" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
                <div className="news-block-inner">
                  <h3>6th Regional<br />Confectionery Conference</h3>
                  <h1>May 2022 &bull; Belgrade</h1>
                  <a href="/en/education" className="btn-ihis btn-ihis-outline">More information</a>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <div className="news-block" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
                <div className="news-block-inner">
                  <h3>5th Regional<br />Confectionery Conference</h3>
                  <h1>April 2019 &bull; Belgrade</h1>
                  <a href="/en/news" className="btn-ihis btn-ihis-outline">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark text-center">
        <div className="container-cta" style={{ maxWidth: 700 }}>
          <span className="section-tag" style={{ color: 'rgba(255,255,255,.4)' }}>Contact us</span>
          <h2 className="section-h mt-8">Let's work together</h2>
          <span className="liner"></span>
          <p className="mt-10" style={{ lineHeight: '28px' }}>
            Have a question about product labeling, nutrition claims, or developing functional
            food products? Our expert team is here to help.
          </p>
          <a href="/en/contact" className="btn-ihis btn-ihis-white mt-30">Send an inquiry</a>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
