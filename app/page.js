import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'IHIS Nutricionizam — Hrana, ishrana i zdravlje',
  description: 'IHIS Nutricionizam — naučno-istraživačka kompanija za deklarisanje i razvoj prehrambenih proizvoda, Beograd.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/',
    languages: {
      sr: 'https://ihis-nutricionizam.rs/',
      en: 'https://ihis-nutricionizam.rs/en',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'IHIS Nutricionizam',
    locale: 'sr_RS',
    title: 'IHIS Nutricionizam — Hrana, ishrana i zdravlje',
    description: 'Naučno-istraživačka kompanija za deklarisanje i razvoj prehrambenih proizvoda, Beograd.',
    url: 'https://ihis-nutricionizam.rs/',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <Header locale="sr" current="home" langHref="/en" />
      <MobileNav locale="sr" current="home" />

      <section className="mastwrap">
        <div className="hero-slider">
          <div className="hero-slide is-active" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}></div>
          <div className="hero-slide" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-caption">
            <h1 className="hero-title">IHIS Nutricionizam</h1>
            <span className="hero-sub">Hrana &bull; Ishrana &bull; Zdravlje</span>
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
          <span className="section-tag">O kompaniji</span>
          <h2 className="section-h">Nauka u službi ishrane</h2>
          <span className="liner"></span>
          <p className="section-lead">„Neka hrana bude tvoj lek, a lek tvoja hrana." — Hipokrat</p>
          <p className="section-lead grey mt-20">
            IHIS Nutricionizam je naučno-istraživačka kompanija posvećena unapređenju
            kvaliteta i ispravnog deklarisanja prehrambenih proizvoda na srpskom i
            evropskom tržištu. Pored istraživačke misije, pružamo stručnu podršku
            kompanijama u prehrambenoj industriji i edukujemo potrošače i proizvođače.
          </p>
          <a href="/o-nama" className="btn-ihis btn-ihis-color mt-30">Saznajte više</a>
        </div>
      </section>

      <section className="section-light">
        <div className="container-40">
          <div className="section-head">
            <span className="section-tag">Šta radimo</span>
            <h2 className="section-h">Naše usluge</h2>
            <span className="liner"></span>
          </div>
          <div className="grid-3">
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-document-text"></i>
                <h3>Deklarisanje proizvoda</h3>
                <div className="liner-small color"></div>
                <p>Provera i izrada ispravnih deklaracija u skladu sa srpskim i EU propisima o označavanju hrane.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-ribbon-a"></i>
                <h3>Nutritivne tvrdnje</h3>
                <div className="liner-small color"></div>
                <p>Savetovanje o primeni dozvoljenih nutritivnih i zdravstvenih tvrdnji na ambalaži prehrambenih proizvoda.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-leaf"></i>
                <h3>Funkcionalni sastojci</h3>
                <div className="liner-small color"></div>
                <p>Odabir i deklarisanje funkcionalnih sastojaka; razvoj funkcionalnih prehrambenih proizvoda.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-ios-search"></i>
                <h3>Naučno istraživanje</h3>
                <div className="liner-small color"></div>
                <p>Istraživanja ispravnosti deklaracija na uzorcima od više hiljada prehrambenih proizvoda na tržištu.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-university"></i>
                <h3>Edukacija</h3>
                <div className="liner-small color"></div>
                <p>Organizacija savetovanja i predavanja za proizvođače hrane, distributere i potrošače.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-star"></i>
                <h3>Marketinška podrška</h3>
                <div className="liner-small color"></div>
                <p>Pozicioniranje funkcionalnih i zdravih proizvoda na tržištu; komunikacija prema potrošačima.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-30">
            <a href="/usluge" className="btn-ihis btn-ihis-dark">Sve usluge</a>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container-40">
          <div className="section-head">
            <span className="section-tag">Aktuelno</span>
            <h2 className="section-h">Vesti i savetovanja</h2>
            <span className="liner"></span>
          </div>
          <div className="home-news-grid">
            <div className="fade-in">
              <div className="news-block" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
                <div className="news-block-inner">
                  <h3>6. Regionalno<br />konditorsko savetovanje</h3>
                  <h1>Maj 2022 &bull; Beograd</h1>
                  <a href="/edukacija" className="btn-ihis btn-ihis-outline">Više informacija</a>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <div className="news-block" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
                <div className="news-block-inner">
                  <h3>V savetovanje<br />konditorske industrije regiona</h3>
                  <h1>April 2019 &bull; Beograd</h1>
                  <a href="/vesti" className="btn-ihis btn-ihis-outline">Pročitajte više</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark text-center">
        <div className="container-cta" style={{ maxWidth: 700 }}>
          <span className="section-tag" style={{ color: 'rgba(255,255,255,.4)' }}>Kontaktirajte nas</span>
          <h2 className="section-h mt-8">Radimo zajedno</h2>
          <span className="liner"></span>
          <p className="mt-10" style={{ lineHeight: '28px' }}>
            Imate pitanje o deklarisanju proizvoda, nutritivnim tvrdnjama ili razvoju
            funkcionalnih namirnica? Naš stručni tim je na raspolaganju.
          </p>
          <a href="/kontakt" className="btn-ihis btn-ihis-white mt-30">Pošaljite upit</a>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
