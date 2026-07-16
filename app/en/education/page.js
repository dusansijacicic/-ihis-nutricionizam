import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Education — IHIS Nutricionizam',
  description: 'Education and conferences by IHIS Nutricionizam — the annual Food, Nutrition and Health conference and the Regional Confectionery Conference.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/education',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/education', en: 'https://ihis-nutricionizam.rs/en/education' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Education — IHIS Nutricionizam',
    description: 'The annual Food, Nutrition and Health conference and the Regional Confectionery Conference.',
    url: 'https://ihis-nutricionizam.rs/en/education',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover3.jpg'],
  },
};

export default function EducationEn() {
  return (
    <>
      <Header locale="en" current="education" langHref="/rs/education" />
      <MobileNav locale="en" current="education" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Education</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Education</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">Conferences and training</span>
            <h2 className="section-h">Sharing knowledge is our mission</h2>
            <span className="liner"></span>
            <p className="section-lead">
              IHIS Nutricionizam organizes annual conferences, workshops and lectures aimed at food
              producers, distributors, retail chains, and anyone wishing to expand their knowledge
              of food regulation and nutrition science.
            </p>
          </div>
        </div>

        <div className="section-dark">
          <div className="container">
            <div className="row-intro">
              <div className="col-img-md fade-in">
                <img src="/assets/img/cover1.jpg" alt="Conference" />
              </div>
              <div className="col-text fade-in">
                <span className="section-tag">Annual event</span>
                <h2 className="section-h">Food, Nutrition and Health</h2>
                <span className="liner mb-20"></span>
                <p className="mb-16">
                  The international conference „Food, Nutrition and Health" is the leading regional
                  professional gathering dedicated to current topics in the food industry, nutrition
                  science and regulation.
                </p>
                <p className="mb-16">
                  Participants include experts from food companies, academia, regulatory bodies and
                  media from Serbia and the region.
                </p>
                <p>
                  Topics: correct labeling, EU harmonization, functional foods, nutrition and health
                  claims, food safety.
                </p>
                <a href="/en/contact" className="btn-ihis btn-ihis-white mt-24">Register</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Programs</span>
              <h2 className="section-h">Forms of education</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-3">
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-people"></i>
                  <h3>Public conferences</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Annual and thematic conferences open to everyone interested in the food industry.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-home"></i>
                  <h3>In-house training</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Customized workshops for teams within a company — product development, marketing, QA, regulatory affairs.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-book"></i>
                  <h3>Expert lectures</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Lectures at conferences, trade fairs, and in cooperation with higher education institutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">Archive</span>
              <h2 className="section-h">Past conferences</h2>
              <span className="liner"></span>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <span className="archive-date">May 2022</span>
                <h3>6th Regional Confectionery Conference</h3>
              </div>
              <p>Held on May 24, 2022 at the Holiday Inn hotel in Belgrade.</p>
              <div className="pill-row">
                <span className="pill">Prof. Dr Marica Rakin – Faculty of Technology and Metallurgy, Belgrade</span>
                <span className="pill">Prof. Dr Zorica Knežević-Jugović – Faculty of Technology and Metallurgy, Belgrade</span>
                <span className="pill">Prof. Dr Biljana Pajin – Faculty of Technology, Novi Sad</span>
                <span className="pill">Doc. Dr Ivana Nikolić – Faculty of Technology, Novi Sad</span>
                <span className="pill">Doc. Dr Senka Popović – Faculty of Technology, Novi Sad</span>
                <span className="pill">Dr Vet. Med. Mina Mitrović Jeremić – MC Labor</span>
              </div>
              <div className="pill-row pill-row--tight">
                <span className="pill-dark">Sponsor: MC LABOR</span>
              </div>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <span className="archive-date">April 2019</span>
                <h3>5th Regional Confectionery Conference</h3>
              </div>
              <p>
                Held in Belgrade at the Crowne Plaza hotel, Vladimira Popovića 10, Novi Beograd.<br />
                Organized by IHIS Nutricionizam.
              </p>
              <div className="pill-row">
                <span className="pill">Prof. Dr Biljana Pajin – White chocolate enriched with green tea extract (FT Novi Sad)</span>
                <span className="pill">Prof. Dr Marica Rakin – Prebiotics and probiotics in functional confectionery products (FTM Belgrade)</span>
                <span className="pill">Prof. Dr Vera Lazić – Packaging confectionery products in an inert atmosphere (FT Novi Sad)</span>
                <span className="pill">Bojan Tomić, B.Eng. – Challenges in producing Jaffa cakes: raw material quality and process parameters (Jaffa DOO Crvenka)</span>
                <span className="pill">Prof. Dr Đerđ Karlović – Methods for determining shelf life of confectionery products (Corvinus University, Bunge Poland)</span>
                <span className="pill">Prof. Dr Zita Šereš – Sugars vs. sweeteners in confectionery products (FT Novi Sad)</span>
                <span className="pill">Dr Danica Zarić – Comparative quality review of chocolates on the Serbian and North Macedonian markets (IHIS Nutricionizam)</span>
              </div>
              <div className="pill-row pill-row--tight">
                <span className="pill-accent">General sponsor: ESAROM</span>
                <span className="pill-dark">Main sponsor: MC LABOR</span>
              </div>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <span className="archive-date">October 2018</span>
                <h3>7th Conference: Food, Nutrition &amp; Health</h3>
              </div>
              <p>Crowne Plaza hotel, Belgrade. Topics covered:</p>
              <div className="pill-row">
                <span className="pill">Prim. Dr Vesna Pantić Palibrk – Materials in contact with food: EU harmonization</span>
                <span className="pill">Dr Danica Zarić – Detailed explanation of the Regulation on nutrition and health claims</span>
                <span className="pill">Dr Danica Zarić – How to correctly label: natural, non-GMO, gluten-free</span>
                <span className="pill">Dr Lea Pollak – Food for special groups: new categories and EU legislation</span>
                <span className="pill">Prof. Dr Ivan Stanković – European dietary reference values for nutrients</span>
                <span className="pill">Doc. Dr Milka Popović – How to calculate nutritional value for a nutrition label</span>
              </div>
              <p className="archive-note">
                <strong>Round table „From regulation to practice"</strong> — moderator: Dr Danica Zarić<br />
                Participants: Serbian Ministry of Agriculture, Border Sanitary Inspection of the Ministry of Health, academics.
              </p>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <span className="archive-date">April 2018</span>
                <h3>4th Regional Confectionery Conference</h3>
              </div>
              <p>Hyatt Regency hotel, Belgrade.</p>
              <div className="pill-row">
                <span className="pill">Prof. Dr Biljana Pajin – White chocolate enriched with polyphenols (FT Novi Sad)</span>
                <span className="pill">Zoltan Katona, B.Eng. – High-protein confectionery products — the future of the industry (Cornexi Food, Hungary)</span>
                <span className="pill">Prof. Dr Marica Rakin – Antioxidants in cocoa mass and milk chocolates (FTM Belgrade)</span>
                <span className="pill">Dr Danica Zarić – Comparative quality review of milk chocolates on the Serbian and North Macedonian markets (IHIS Nutricionizam)</span>
                <span className="pill">Prof. Dr Đurđica Ačkar – Modified starches in the confectionery industry (FTech Osijek)</span>
                <span className="pill">Prof. Dr Đerđ Karlović – Reducing acrylamide in confectionery products (Corvinus University)</span>
                <span className="pill">Prof. Dr Aleksandar Fišteš – Enriching biscuits with extruded food industry by-products (FT Novi Sad)</span>
              </div>
              <div className="pill-row pill-row--tight">
                <span className="pill-dark">Sponsors: GIVAUDAN · FRUTAROM FOOD PROTECTION · BAKER PERKINS · SIGMA PROCES · MOREX ADA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <h2 className="section-h">Organize training</h2>
            <span className="liner"></span>
            <p className="mt-10">
              Interested in in-house training for your team, or in attending our next public
              conference? Get in touch.
            </p>
            <a href="/en/contact" className="btn-ihis btn-ihis-white mt-24">Contact us</a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
