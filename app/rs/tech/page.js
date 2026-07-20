import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Tehnologija i greenfield investicije — IHIS Nutricionizam',
  description: 'Tehnološki konsalting i greenfield investicije IHIS Nutricionizma — izbor opreme, organizacija proizvodnih linija i realizacija novih proizvodnih kapaciteta.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/tech',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/tech', en: 'https://ihis-nutricionizam.rs/en/tech' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Tehnologija i greenfield investicije — IHIS Nutricionizam',
    description: 'Izbor opreme, organizacija proizvodnih linija i realizacija novih proizvodnih kapaciteta.',
    url: 'https://ihis-nutricionizam.rs/rs/tech',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

export default function Tehnologija() {
  return (
    <>
      <Header locale="sr" current="tech" langHref="/en/tech" />
      <MobileNav locale="sr" current="tech" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Tehnologija i greenfield investicije</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Tehnologija i greenfield investicije</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">Tehnološki konsalting</span>
                <h2 className="section-h">Od tehnološkog koncepta do pokretanja proizvodnje</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  Pružamo kompletnu podršku kompanijama koje planiraju nove proizvodne kapacitete
                  ili greenfield investicije u prehrambenoj industriji – od definisanja tehnološkog
                  koncepta i izbora opreme, preko organizacije proizvodnih linija, do pokretanja i
                  optimizacije proizvodnje.
                </p>
                <p>
                  Naš tim prati investiciju kroz sve faze, povezujući tehnološka, regulatorna i
                  tržišna znanja, kako bi nova proizvodnja od prvog dana radila efikasno, bezbedno
                  i u skladu sa propisima Srbije i EU.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover2.jpg" alt="Tehnologija i greenfield investicije" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Šta nudimo</span>
              <h2 className="section-h">Podrška kroz sve faze investicije</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-2">
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-document-text card-icon"></i>
                  <h4 className="card-title">Tehnološki koncept</h4>
                  <p>Definisanje tehnološkog koncepta i proizvodnog procesa u skladu sa asortimanom i kapacitetom investicije.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-gear-b card-icon"></i>
                  <h4 className="card-title">Izbor i ugovaranje opreme</h4>
                  <p>Stručna podrška pri izboru dobavljača i ugovaranju opreme koja odgovara tehnološkim i budžetskim zahtevima.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-people card-icon"></i>
                  <h4 className="card-title">Organizacija proizvodnih linija</h4>
                  <p>Projektovanje rasporeda i organizacije proizvodnih linija radi efikasnog i bezbednog toka proizvodnje.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-leaf card-icon"></i>
                  <h4 className="card-title">Izbor sirovina i procesa</h4>
                  <p>Odabir sirovina i definisanje proizvodnih procesa usklađenih sa tehnologijom i planiranim proizvodima.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-flask card-icon"></i>
                  <h4 className="card-title">Pokretanje proizvodnje</h4>
                  <p>Podrška pri puštanju proizvodnje u rad, obuci osoblja i optimizaciji procesa u prvim ciklusima rada.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-world card-icon"></i>
                  <h4 className="card-title">Greenfield investicije</h4>
                  <p>Kompletna podrška pri realizaciji greenfield investicija, od planiranja do puštanja u rad novog pogona.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Reference</span>
              <h2 className="section-h">Realizovani projekti</h2>
              <span className="liner"></span>
            </div>

            <div className="project-showcase fade-in">
              <div className="project-photo" style={{ backgroundImage: "url('/assets/img/projects/orasje/factory.png')" }}>
                <span className="project-badge">Greenfield projekat</span>
              </div>
              <div className="project-info">
                <h3>El Grito — Orašje, Bosna i Hercegovina</h3>
                <p>
                  Nova proizvodna fabrika za prehrambene proizvode, realizovana kao greenfield
                  investicija — od tehnološkog koncepta i izbora opreme, do pokretanja
                  proizvodnje. U pogonu se danas proizvode brendovi la Bomba, Chips Way i
                  El Grito.
                </p>
              </div>
            </div>

            <div className="project-gallery">
              <div className="fade-in"><img src="/assets/img/projects/orasje/la-bomba-lineup.png" alt="la Bomba" /></div>
              <div className="fade-in"><img src="/assets/img/projects/orasje/la-bomba-cooking.png" alt="la Bomba čokolada za kuvanje" /></div>
              <div className="fade-in"><img src="/assets/img/projects/orasje/chips-way.png" alt="Chips Way" /></div>
              <div className="fade-in"><img src="/assets/img/projects/orasje/el-grito.png" alt="El Grito tortilje" /></div>
              <div className="fade-in"><img src="/assets/img/projects/orasje/kakaova-ploca.png" alt="Kakaova ploča" /></div>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <h2 className="section-h">Planirate novu investiciju?</h2>
            <span className="liner"></span>
            <p className="mt-10">Kontaktirajte nas i razgovarajmo o tehnološkom konceptu koji odgovara vašim planovima.</p>
            <a href="/rs/contact" className="btn-ihis btn-ihis-white mt-24">Kontaktirajte nas</a>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
