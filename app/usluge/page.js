import Header from '../../components/Header';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Usluge — IHIS Nutricionizam',
  description: 'Usluge IHIS Nutricionizma — tehnološki konsalting, deklarisanje i zdravstvene izjave, razvoj novih prehrambenih proizvoda, usklađivanje sa zakonodavstvom Srbije i EU.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/usluge',
    languages: { sr: 'https://ihis-nutricionizam.rs/usluge', en: 'https://ihis-nutricionizam.rs/en/services' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Usluge — IHIS Nutricionizam',
    description: 'Tehnološki konsalting, deklarisanje i zdravstvene izjave, razvoj novih prehrambenih proizvoda.',
    url: 'https://ihis-nutricionizam.rs/usluge',
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
            <p className="page-crumbs"><a href="/">Početna</a> &rsaquo; Usluge</p>
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
                  Efikasno upravljanje vaše investicije u tehnologiju i razvoj novih proizvoda
                  predstavlja osnovnu komponentu vašeg profitabilnog rasta. U današnje vreme
                  intenzivnog razvoja tehnologija, veoma je važno imati pouzdanog savetnika koji
                  će vam omogućiti da uvek imate najbolja rešenja i odgovore za sve izazove koje
                  donosi upravljanje novim tehnologijama.
                </p>
                <p>
                  Vaš proizvod vrhunskog kvaliteta mora biti pokriven besprekornom deklaracijom,
                  koja će istaći sve koristi proizvoda uz istovremeno poštovanje zakonske regulative.
                  Potrošaču se mora ponuditi prijateljska, prikladna izjava — ali takođe ona mora biti
                  u skladu sa nacionalnim zakonodavstvom kao i sa zakonodavstvom EU.
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
                  <i className="ion-ios-flask card-icon"></i>
                  <h4 className="card-title">Tehnološki konsalting</h4>
                  <p>Poboljšanje kvaliteta postojećih proizvoda i uvođenje inovacija; ekspertska pomoć pri puštanju novih funkcionalnih proizvoda na tržište.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-document-text card-icon"></i>
                  <h4 className="card-title">Deklarisanje i zdravstvene izjave</h4>
                  <p>Predlažemo zdravstvene i nutritivne izjave za prehrambene proizvode; usklađujemo vaše želje za deklarisanje sa zakonodavstvom Srbije i EU.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-ios-world card-icon"></i>
                  <h4 className="card-title">Implementacija zakonskih normi</h4>
                  <p>Implementiramo zakonske norme (SRB i EU) koje se tiču kvaliteta proizvoda i prateće dokumentacije; dajemo stručna mišljenja o proizvodima sa određenom zdravstvenom izjavom.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-leaf card-icon"></i>
                  <h4 className="card-title">Razvoj novih proizvoda</h4>
                  <p>Razvijamo nove prehrambene proizvode — od koncepta do finalnog deklarisanja. Posebna ekspertiza: funkcionalna hrana, konditorski proizvodi, dodaci ishrani.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-star card-icon"></i>
                  <h4 className="card-title">Marketinška podrška</h4>
                  <p>Pružamo marketinšku podršku za razdvajanje dobijenih funkcionalnih proizvoda od postojećih sličnih proizvoda na tržištu.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="card-accent">
                  <i className="ion-university card-icon"></i>
                  <h4 className="card-title">Radionice i edukacija</h4>
                  <p>Organizujemo radionice za senzorsku analizu proizvoda i radionice za deklarisanje — za timove proizvođača i distributere.</p>
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
            <a href="/kontakt" className="btn-ihis btn-ihis-white mt-24">Kontaktirajte nas</a>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
