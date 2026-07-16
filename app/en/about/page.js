import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'About Us — IHIS Nutricionizam',
  description: 'About IHIS Nutricionizam — a scientific research company for nutrition science and food labeling in Belgrade, founded in 2012, part of the IHIS Science and Technology Park Zemun.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/about',
    languages: { sr: 'https://ihis-nutricionizam.rs/o-nama', en: 'https://ihis-nutricionizam.rs/en/about' },
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
      <Header locale="en" current="about" langHref="/o-nama" />
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
                  IHIS-Nutricionizam is a member of the <strong>IHIS Science and Technology Park Zemun a.d.</strong>{' '}
                  (founded in 1971). IHIS STP Zemun is listed in the Register of Innovation Activity
                  Entities of the Ministry of Education and Science of the Republic of Serbia.
                </p>
                <p className="mb-16">
                  IHIS-Nutricionizam is a scientific institution oriented toward businesses in the
                  food technology sector. It provides excellent technical support, working with
                  numerous relevant partners at home and abroad. Alongside its own experts, it proudly
                  brings together the highest-quality specialists in technology, biotechnology,
                  nutrition science, quality and food safety.
                </p>
                <p className="mb-16">
                  IHIS-Nutricionizam conducts research in the field of nutrition, food, and the
                  nutrients our bodies need to function optimally. Guided by Hippocrates' saying{' '}
                  <em>„Let food be thy medicine and medicine be thy food"</em>, beyond its core
                  research mission IHIS-Nutricionizam supports companies in improving product
                  quality on the market and in educating producers and consumers.
                </p>
                <p>
                  We specialize in advising on product development with particular emphasis on
                  correct product labeling, the use of health and nutrition claims, the proper
                  selection and labeling of functional ingredients, and clear labeling of functional
                  products for both producers and consumers. We also provide marketing support to
                  help differentiate functional products from existing similar products on the
                  market. Our strategic partner in the confectionery industry is{' '}
                  <strong>Chocolate Science</strong> from Belgrade.
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
