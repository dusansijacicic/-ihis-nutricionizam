import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Istraživanje i razvoj (R&D) — IHIS Nutricionizam',
  description: 'Istraživanje IHIS Nutricionizma — nutritivna i energetska vrednost hrane, funkcionalne sirovine, uticaj na metabolizam i zagađivači hrane.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/research',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/research', en: 'https://ihis-nutricionizam.rs/en/research' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Istraživanje — IHIS Nutricionizam',
    description: 'Nutritivna i energetska vrednost hrane, funkcionalne sirovine, uticaj na metabolizam i zagađivači hrane.',
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
                <span className="section-tag">Naša istraživanja</span>
                <h2 className="section-h">Naučna osnova svega što radimo</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  Prema FAO/WHO World Declaration on Nutrition (1992) osiguranje dovoljne količine
                  raznovrsne, zdravstveno bezbedne hrane osnovno je ljudsko pravo. Zadovoljenje
                  nutritivnih potreba i osiguranje zdravstvene bezbednosti hrane važni su faktori
                  u prevenciji nastanka čitavog niza bolesti i poremećaja. Stoga su zdrava ishrana
                  i bezbednost hrane uslov postizanja, održavanja i unapređenja zdravlja ljudi.
                </p>
                <p className="mb-16">
                  Hrana je neophodna za ljudski rast, razvoj i telesne funkcije. Dobra ishrana
                  zahteva dobro izbalansiranu hranu koja obezbeđuje adekvatnu dnevnu količinu svih
                  klasa hranljivih materija i optimalni unos energije za ljudsko telo. Hrana mora
                  biti bezbedna, hranljiva i dostupna na održiv način.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover3.jpg" alt="Istraživanje" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Oblasti</span>
              <h2 className="section-h">Istraživačke teme</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-2">
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-flask color"></i>Nutritivna i energetska vrednost</h4>
                  <p>Osnovno istraživanje prehrambenih proizvoda i dodataka ishrani, istraživanje mogućnosti za njihovo unapređenje, inovacije i predlaganje inovacionih proizvoda na tržištu.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-leaf color"></i>Funkcionalne sirovine i zdravlje</h4>
                  <p>Istraživanje uticaja funkcionalnih sirovina na zdravlje ljudi i na metabolizam — klinička efikasnost, efektivne doze, bezbednost primene.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-pulse color"></i>Uticaj na metabolizam</h4>
                  <p>Istraživanje uticaja hranljivih sastojaka prehrambenog proizvoda na metabolizam — bioraspoloživost, apsorpcija, interakcije sa organizmom.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <h4 className="card-title--icon"><i className="ion-ios-warning color"></i>Zagađivači hrane</h4>
                  <p>Istraživanje uticaja zagađivača hrane koji su u nju dospeli iz životne sredine ili tokom prerade i proizvodnje — identifikacija rizika i preventivne mere.</p>
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
