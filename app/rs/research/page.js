import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Istraživanje i razvoj (R&D) — IHIS Nutricionizam',
  description: 'Istraživanje i razvoj IHIS Nutricionizma — razvoj proizvoda, deklarisanje i regulatorna usklađenost, funkcionalni sastojci, nutritivna vrednost i naučna ekspertiza.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/research',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/research', en: 'https://ihis-nutricionizam.rs/en/research' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Istraživanje i razvoj (R&D) — IHIS Nutricionizam',
    description: 'Razvoj proizvoda, deklarisanje i regulatorna usklađenost, funkcionalni sastojci, nutritivna vrednost i naučna ekspertiza.',
    url: 'https://ihis-nutricionizam.rs/rs/research',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function Istrazivanje() {
  return (
    <>
      <Header locale="sr" current="research" langHref="/en/research" />
      <MobileNav locale="sr" current="research" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Istraživanje i razvoj (R&amp;D)</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Istraživanje i razvoj</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">Istraživanje i razvoj (R&amp;D)</span>
                <h2 className="section-h">Nauka pretvorena u inovativne proizvode</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  IHIS-Nutricionizam povezuje naučna istraživanja, razvoj proizvoda i regulatornu
                  ekspertizu kako bi kompanijama omogućio razvoj bezbednih, inovativnih i tržišno
                  konkurentnih prehrambenih proizvoda i dodataka ishrani.
                </p>
                <p className="mb-16">
                  Kroz multidisciplinarni pristup pružamo podršku od definisanja koncepta proizvoda
                  i razvoja formulacije, preko izbora funkcionalnih sastojaka i procene nutritivne
                  vrednosti, do izrade deklaracija i usklađivanja proizvoda sa zakonodavstvom
                  Republike Srbije i Evropske unije.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover3.jpg" alt="Istraživanje i razvoj" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Šta radimo</span>
              <h2 className="section-h">Naše R&amp;D aktivnosti</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-3">
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-leaf color"></i>Razvoj novih proizvoda</h4>
                  <p>Razvoj i unapređenje prehrambenih proizvoda, dodataka ishrani i funkcionalne hrane – od ideje i formulacije do proizvoda spremnog za tržište.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-document-text color"></i>Deklarisanje i regulatorna usklađenost</h4>
                  <p>Izrada i provera deklaracija za sve kategorije prehrambenih proizvoda i dodataka ishrani, određivanje nutritivnih vrednosti, primena nutritivnih i zdravstvenih izjava i usklađivanje sa propisima Republike Srbije i Evropske unije.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-flask color"></i>Funkcionalni sastojci</h4>
                  <p>Izbor, evaluacija i primena funkcionalnih sastojaka i bioaktivnih komponenti u skladu sa naučnim dokazima, tehnološkim zahtevima i regulatornim okvirom.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-pulse color"></i>Nutritivna vrednost i kvalitet proizvoda</h4>
                  <p>Analiza sastava, optimizacija nutritivnog profila i razvoj proizvoda koji odgovaraju potrebama savremenog tržišta i potrošača.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-search color"></i>Naučna i stručna ekspertiza</h4>
                  <p>Primena savremenih naučnih saznanja, analiza i stručnih mišljenja u razvoju novih proizvoda, unapređenju postojećih formulacija i rešavanju tehnoloških i regulatornih izazova.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer locale="sr" />
    </>
  );
}
