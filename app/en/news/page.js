import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'News — IHIS Nutricionizam',
  description: 'IHIS Nutricionizam news — the latest on conferences and company activities.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/news',
    languages: { sr: 'https://ihis-nutricionizam.rs/vesti', en: 'https://ihis-nutricionizam.rs/en/news' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'News — IHIS Nutricionizam',
    description: 'The latest on conferences and company activities.',
    url: 'https://ihis-nutricionizam.rs/en/news',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function NewsEn() {
  return (
    <>
      <Header locale="en" current="news" langHref="/vesti" />
      <MobileNav locale="en" current="news" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">News</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; News</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro" style={{ alignItems: 'flex-start' }}>
              <div className="col-img-lg fade-in">
                <img src="/assets/img/cover.jpg" alt="News" />
              </div>
              <div className="col-text fade-in news-feature">
                <span className="news-feature-date">May 2022</span>
                <h2>6th Regional Confectionery Conference</h2>
                <span className="news-feature-rule"></span>
                <p className="mb-14">Held on May 24, 2022 at the Holiday Inn hotel in Belgrade.</p>
                <p className="mb-14">
                  Speakers: Prof. Dr Marica Rakin and Prof. Dr Zorica Knežević-Jugović (FTM Belgrade),
                  Prof. Dr Biljana Pajin, Doc. Dr Ivana Nikolić and Doc. Dr Senka Popović (FT Novi Sad),
                  and Dr Vet. Med. Mina Mitrović Jeremić (MC Labor). Sponsor: MC LABOR.
                </p>
                <a href="/en/education" className="btn-ihis btn-ihis-color mt-10">Read more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">News archive</span>
              <h2 className="section-h">Latest</h2>
              <span className="liner"></span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <div className="news-row fade-in">
                <img src="/assets/img/cover2.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">April 2019</span>
                  <h4>5th Regional Confectionery Conference</h4>
                  <p>
                    Held on April 16, 2019 in Belgrade at the Crowne Plaza hotel, Vladimira Popovića 10,
                    Novi Beograd, organized by IHIS Nutricionizam. Speakers: Prof. Dr Biljana Pajin,
                    Prof. Dr Marica Rakin, Prof. Dr Vera Lazić, Bojan Tomić, B.Eng. (Jaffa DOO Crvenka),
                    Prof. Dr Đerđ Karlović, Prof. Dr Zita Šereš, and Dr Danica Zarić (IHIS Nutricionizam, director).
                  </p>
                  <a href="/en/education" className="read-more">Read more &rarr;</a>
                </div>
              </div>

              <div className="news-row fade-in">
                <img src="/assets/img/cover1.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">October 2018</span>
                  <h4>7th Conference: Food, Nutrition &amp; Health</h4>
                  <p>
                    On October 16, 2018, the 7th conference FOOD, NUTRITION &amp; HEALTH was held at
                    the Crowne Plaza hotel in Belgrade — topics covered included harmonization of
                    legislation on materials in contact with food, nutrition and health claims, food
                    for special groups, European dietary reference values, and calculating nutritional
                    value for labeling. A round table titled „From regulation to practice" was also held.
                  </p>
                  <a href="/en/education" className="read-more">Read more &rarr;</a>
                </div>
              </div>

              <div className="news-row fade-in">
                <img src="/assets/img/cover3.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">April 2018</span>
                  <h4>4th Regional Confectionery Conference</h4>
                  <p>
                    On April 19, 2018, the 4th Regional Confectionery Conference was held at the
                    Hyatt Regency hotel in Belgrade. Topics covered: production of white chocolate
                    enriched with polyphenols, high-protein products, antioxidants in cocoa mass and
                    milk chocolates, modified starches, and reducing acrylamide in confectionery products.
                  </p>
                  <a href="/en/education" className="read-more">Read more &rarr;</a>
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
