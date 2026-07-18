import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import Modal from '../../../components/Modal';
import PozivContent from '../../../components/PozivContent';
import RegistrationForm from '../../../components/RegistrationForm';
import LectureGate from '../../../components/LectureGate';
import { POZIV } from '../../../lib/content/poziv';

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
              IHIS-Nutricionizam organizes various forms of expert education aimed at food and
              dietary supplement producers, professional teams, and anyone wishing to expand
              their knowledge of food, dietary supplements, regulation and innovation.
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
                <h2 className="section-h">13th Conference FOOD, NUTRITION &amp; HEALTH</h2>
                <span className="liner mb-20"></span>
                <p className="mb-16">{POZIV.en.subtitle}</p>
                <p className="mb-16">{POZIV.en.when} &middot; {POZIV.en.where}</p>
                <p>
                  In one place, learn all the most important changes to the regulations of the
                  Republic of Serbia and the European Union, directly from their creators,
                  representatives of the relevant ministries, and leading food safety experts.
                </p>
                <div className="icon-row icon-row--dark" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
                  <Modal
                    title={POZIV.en.title}
                    trigger={<span className="icon-btn"><i className="ion-ios-email-outline icon-btn-icon"></i><span className="icon-btn-label">Invitation</span></span>}
                  >
                    <PozivContent locale="en" />
                  </Modal>
                  <Modal
                    title="Conference registration"
                    trigger={<span className="icon-btn"><i className="ion-edit icon-btn-icon"></i><span className="icon-btn-label">Registration</span></span>}
                  >
                    <RegistrationForm locale="en" />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Programs</span>
              <h2 className="section-h">Transferring knowledge to advance the modern food industry</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-3">
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-people"></i>
                  <h3>Public conferences</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>We organize annual and thematic conferences that bring together experts from the food industry, science and regulatory bodies, enabling the exchange of knowledge, experience and current information.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-home"></i>
                  <h3>In-house education &amp; workshops</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>We create customized programs for companies and their teams in product development, production, quality and regulatory affairs, tailored to the organization's specific needs.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-book"></i>
                  <h3>Expert lectures &amp; partner activities</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Our experts participate in conferences, trade events, fairs and educational programs in cooperation with academic and industry partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">Materials</span>
              <h2 className="section-h">Lectures and gallery from past conferences</h2>
              <span className="liner"></span>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <h3>12th Conference FOOD, NUTRITION &amp; HEALTH</h3>
              </div>
              <p>Lectures from the conference are available for download with a code, and photos are in the gallery.</p>
              <div className="event-block-actions">
                <Modal
                  title="12th Conference FOOD, NUTRITION & HEALTH — lectures"
                  trigger={<span className="icon-btn"><i className="ion-ios-book icon-btn-icon"></i><span className="icon-btn-label">Lectures</span></span>}
                >
                  <LectureGate locale="en" event="12-savetovanje" />
                </Modal>
                <a href="/en/gallery#12-savetovanje" className="icon-btn">
                  <i className="ion-images icon-btn-icon"></i>
                  <span className="icon-btn-label">Gallery</span>
                </a>
              </div>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <h3>9th Regional Confectionery Conference</h3>
              </div>
              <p>Lectures from the conference are available for download with a code, and photos are in the gallery.</p>
              <div className="event-block-actions">
                <Modal
                  title="9th Regional Confectionery Conference — lectures"
                  trigger={<span className="icon-btn"><i className="ion-ios-book icon-btn-icon"></i><span className="icon-btn-label">Lectures</span></span>}
                >
                  <LectureGate locale="en" event="9-savetovanje" />
                </Modal>
                <a href="/en/gallery#9-savetovanje" className="icon-btn">
                  <i className="ion-images icon-btn-icon"></i>
                  <span className="icon-btn-label">Gallery</span>
                </a>
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
