import Header from '../../components/Header';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer';
import { POZIV } from '../../lib/content/poziv';

export const metadata = {
  title: 'IHIS Nutricionizam — Hrana, ishrana i zdravlje',
  description: 'IHIS Nutricionizam — naučno-istraživačka kompanija za deklarisanje i razvoj prehrambenih proizvoda, Beograd.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs',
    languages: {
      sr: 'https://ihis-nutricionizam.rs/rs',
      en: 'https://ihis-nutricionizam.rs/en',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'IHIS Nutricionizam',
    locale: 'sr_RS',
    title: 'IHIS Nutricionizam — Hrana, ishrana i zdravlje',
    description: 'Naučno-istraživačka kompanija za deklarisanje i razvoj prehrambenih proizvoda, Beograd.',
    url: 'https://ihis-nutricionizam.rs/rs',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <Header locale="sr" current="home" langHref="/en" />
      <MobileNav locale="sr" current="home" />

      <section className="mastwrap">
        <div className="hero-slider hero-slider--single">
          <div className="hero-slide hero-slide--poziv is-active" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}>
            <div className="hero-poziv-panel">
              <span className="hero-poziv-tag">Aktuelno</span>
              <h1 className="hero-poziv-title">Pozivamo vas na 13. Savetovanje HRANA, ISHRANA &amp; ZDRAVLJE</h1>
              <p className="hero-poziv-sub">{POZIV.sr.subtitle}</p>
              <p className="hero-poziv-meta">{POZIV.sr.when} &middot; {POZIV.sr.where}</p>
              <p className="hero-poziv-intro">{POZIV.sr.intro[0]}</p>
              <div className="icon-row icon-row--dark hero-poziv-actions">
                <a href="/rs/invitation" className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-ios-email-outline"></i></span>
                  <span className="icon-btn-label">Poziv</span>
                </a>
                <a href="/rs/registration" className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-edit"></i></span>
                  <span className="icon-btn-label">Prijava</span>
                </a>
                <a href="/rs/sponsorship" className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-star"></i></span>
                  <span className="icon-btn-label">Poziv za sponzorstvo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white text-center">
        <div className="container-40">
          <span className="section-tag">O kompaniji</span>
          <h2 className="section-h">Nauka u službi ishrane</h2>
          <span className="liner"></span>
          <p className="section-lead grey mt-20">
            IHIS NUTRICIONIZAM povezuje nauku, inovacije i prehrambenu industriju kroz
            razvoj hrane, dodataka ishrani i funkcionalnih proizvoda. Kao istraživačko-razvojni
            partner, pomažemo kompanijama da svoje ideje pretvore u bezbedne, regulatorno
            usklađene i tržišno konkurentne proizvode.
          </p>
          <p className="section-lead grey mt-10">
            Razvijamo inovativne proizvode i pružamo stručnu tehnološku i regulatornu
            podršku kompanijama koje žele da budu korak ispred.
          </p>
          <a href="/rs/about" className="btn-ihis btn-ihis-color mt-30">Saznajte više</a>
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
                <i className="icon ion-ios-flask"></i>
                <h3>Razvoj proizvoda</h3>
                <div className="liner-small color"></div>
                <p>Od ideje do finalnog proizvoda – razvoj formulacija, izbor sastojaka i tehnološka podrška.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-gear-b"></i>
                <h3>Tehnološki konsalting i investicije</h3>
                <div className="liner-small color"></div>
                <p>Podrška u izboru tehnologije, opreme, organizaciji proizvodnih linija i realizaciji proizvodnih kapaciteta.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-leaf"></i>
                <h3>Funkcionalni sastojci i funkcionalna hrana</h3>
                <div className="liner-small color"></div>
                <p>Stručni izbor, primena i deklarisanje funkcionalnih sastojaka za razvoj inovativnih proizvoda.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-document-text"></i>
                <h3>Deklarisanje i regulatorna usklađenost</h3>
                <div className="liner-small color"></div>
                <p>Izrada i provera deklaracija u skladu sa propisima Republike Srbije i Evropske unije.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-ios-search"></i>
                <h3>Naučna istraživanja i ekspertiza</h3>
                <div className="liner-small color"></div>
                <p>Istraživanja, stručne analize i podrška zasnovana na savremenim naučnim saznanjima.</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="feature-block">
                <i className="icon ion-university"></i>
                <h3>Edukacija i stručna podrška</h3>
                <div className="liner-small color"></div>
                <p>Radionice i savetovanje za proizvođače, distributere i stručne timove.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-30">
            <a href="/rs/services" className="btn-ihis btn-ihis-dark">Sve usluge</a>
          </div>
        </div>
      </section>

      <section className="section-dark text-center">
        <div className="container-cta" style={{ maxWidth: 700 }}>
          <span className="section-tag" style={{ color: 'rgba(255,255,255,.4)' }}>Kontaktirajte nas</span>
          <h2 className="section-h mt-8">Radimo zajedno</h2>
          <span className="liner"></span>
          <p className="mt-10" style={{ lineHeight: '28px' }}>
            Imate ideju za novi prehrambeni proizvod, potrebnu podršku u razvoju
            formulacije, izboru funkcionalnih sastojaka, usklađenosti vašeg proizvoda sa
            zakonodavstvom hrane ili unapređenju proizvodnog procesa? Naš stručni tim
            stoji vam na raspolaganju za pouzdana naučno zasnovana rešenja prilagođena
            vašim potrebama.
          </p>
          <a href="/rs/contact" className="btn-ihis btn-ihis-white mt-30">Pošaljite upit</a>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
