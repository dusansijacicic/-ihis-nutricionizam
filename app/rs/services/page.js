import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Usluge — IHIS Nutricionizam',
  description: 'Usluge IHIS Nutricionizma — tehnološki konsalting, deklarisanje i zdravstvene izjave, razvoj novih prehrambenih proizvoda, usklađivanje sa zakonodavstvom Srbije i EU.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/services',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/services', en: 'https://ihis-nutricionizam.rs/en/services' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Usluge — IHIS Nutricionizam',
    description: 'Tehnološki konsalting, deklarisanje i zdravstvene izjave, razvoj novih prehrambenih proizvoda.',
    url: 'https://ihis-nutricionizam.rs/rs/services',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

export default function Usluge() {
  return (
    <>
      <Header locale="sr" current="services" langHref="/en/services" />
      <MobileNav locale="sr" current="services" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Usluge</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Usluge</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">Šta nudimo</span>
                <h2 className="section-h">Stručna podrška prehrambenoj industriji</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  Uspešan prehrambeni proizvod zahteva spoj nauke, tehnologije, regulatorne
                  usklađenosti i razumevanja tržišta. IHIS-Nutricionizam pruža kompletnu podršku
                  kompanijama – od razvoja koncepta i formulacije proizvoda, preko izbora
                  tehnologije i uspostavljanja proizvodnih procesa, do plasmana proizvoda na
                  tržište.
                </p>
                <p>
                  Naš cilj je da kompanijama omogućimo efikasniji razvoj, smanjenje rizika i
                  stvaranje proizvoda koji odgovaraju zahtevima savremenog potrošača i važećim
                  regulatornim standardima.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover.jpg" alt="Usluge" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Šta nudimo</span>
              <h2 className="section-h">Naše usluge</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-2">
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-leaf card-icon"></i>
                  <h4 className="card-title">Razvoj novih proizvoda</h4>
                  <p>Razvijamo inovativne prehrambene proizvode, dodatke ishrani i funkcionalnu hranu – od početne ideje, izbora sastojaka i formulacije, do industrijske realizacije.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-gear-b card-icon"></i>
                  <h4 className="card-title">Tehnološki konsalting i greenfield investicije</h4>
                  <p>Pružamo kompletnu podršku pri uspostavljanju novih proizvodnih kapaciteta – od definisanja tehnološkog koncepta, izbora i ugovaranja opreme, organizacije proizvodnih linija, izbora sirovina i procesa proizvodnje, do pokretanja i optimizacije rada.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-document-text card-icon"></i>
                  <h4 className="card-title">Deklarisanje i regulatorna podrška</h4>
                  <p>Izrađujemo i proveravamo deklaracije prehrambenih proizvoda, usklađujemo ih sa zahtevima zakonodavstva Srbije i EU i savetujemo u primeni nutritivnih i zdravstvenih izjava.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-flask card-icon"></i>
                  <h4 className="card-title">Funkcionalni sastojci i funkcionalni proizvodi</h4>
                  <p>Pomažemo u izboru, primeni i pravilnom deklarisanju funkcionalnih sastojaka, kao i u razvoju proizvoda sa dodatom nutritivnom vrednošću.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-search card-icon"></i>
                  <h4 className="card-title">Naučno-istraživačka podrška</h4>
                  <p>Sprovodimo istraživanja i stručne analize koje omogućavaju naučno utemeljen razvoj proizvoda i donošenje kvalitetnih poslovnih odluka.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-university card-icon"></i>
                  <h4 className="card-title">Edukacija i transfer znanja</h4>
                  <p>Organizujemo stručne radionice, savetovanja i edukacije za proizvođače hrane, distributere i stručne timove, sa ciljem unapređenja znanja, kvaliteta i primene savremenih tehnologija i propisa u prehrambenoj industriji.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-people card-icon"></i>
                  <h4 className="card-title">Stručna savetovanja i povezivanje industrije</h4>
                  <p>Organizujemo stručne skupove koji povezuju nauku, industriju i regulativu, uključujući tradicionalna godišnja savetovanja: Regionalno konditorsko savetovanje u aprilu i Savetovanje „Hrana, ishrana &amp; zdravlje" u oktobru.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-star card-icon"></i>
                  <h4 className="card-title">Marketinška podrška i pozicioniranje proizvoda</h4>
                  <p>Pomažemo kompanijama u jasnom definisanju vrednosti proizvoda, komunikaciji njegovih prednosti i pozicioniranju inovativnih i funkcionalnih proizvoda na tržištu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <h2 className="section-h">Zatražite ponudu</h2>
            <span className="liner"></span>
            <p className="mt-10">Opišite nam vaše potrebe i kontaktiraćemo vas u najkraćem roku sa predlogom saradnje.</p>
            <a href="/rs/contact" className="btn-ihis btn-ihis-white mt-24">Kontaktirajte nas</a>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
