import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';
import { POZIV } from '../../../lib/content/poziv';

export const metadata = {
  title: 'Edukacija — IHIS Nutricionizam',
  description: 'Edukacija i savetovanja IHIS Nutricionizma — godišnje konferencije Hrana, ishrana i zdravlje i Regionalno konditorsko savetovanje.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/education',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/education', en: 'https://ihis-nutricionizam.rs/en/education' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Edukacija — IHIS Nutricionizam',
    description: 'Godišnje konferencije Hrana, ishrana i zdravlje i Regionalno konditorsko savetovanje.',
    url: 'https://ihis-nutricionizam.rs/rs/education',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover3.jpg'],
  },
};

export default function Edukacija() {
  return (
    <>
      <Header locale="sr" current="education" langHref="/en/education" />
      <MobileNav locale="sr" current="education" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Edukacija</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Edukacija</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">Savetovanja i obuke</span>
            <h2 className="section-h">Deljenje znanja je naša misija</h2>
            <span className="liner"></span>
            <p className="section-lead">
              IHIS-Nutricionizam organizuje različite oblike stručne edukacije namenjene
              proizvođačima hrane i dodataka ishrani, stručnim timovima i svima koji žele da
              unaprede znanje iz oblasti hrane, dodataka ishrani, regulative i inovacija.
            </p>
          </div>
        </div>

        <div className="section-dark">
          <div className="container">
            <div className="row-intro">
              <div className="col-img-md fade-in">
                <img src="/assets/img/cover1.jpg" alt="Savetovanje" />
              </div>
              <div className="col-text fade-in">
                <span className="section-tag">Godišnji event</span>
                <h2 className="section-h">13. Savetovanje HRANA, ISHRANA &amp; ZDRAVLJE</h2>
                <span className="liner mb-20"></span>
                <p className="mb-16">{POZIV.sr.subtitle}</p>
                <p className="mb-16">{POZIV.sr.when} &middot; {POZIV.sr.where}</p>
                <p>
                  Na jednom mestu saznajte sve najvažnije izmene propisa Republike Srbije i
                  Evropske unije, direktno od njihovih kreatora, predstavnika nadležnih
                  ministarstava i vodećih stručnjaka iz oblasti bezbednosti hrane.
                </p>
                <div className="icon-row icon-row--dark" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
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
                    <span className="icon-btn-label">Sponzorstvo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Programi</span>
              <h2 className="section-h">Prenos znanja za razvoj savremene prehrambene industrije</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-3">
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-people"></i>
                  <h3>Javna stručna savetovanja</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Organizujemo godišnja i tematska savetovanja koja okupljaju stručnjake iz prehrambene industrije, nauke i regulatornih oblasti, omogućavajući razmenu znanja, iskustava i aktuelnih informacija.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-home"></i>
                  <h3>Interne edukacije i radionice</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Kreiramo prilagođene programe za kompanije i njihove timove iz oblasti razvoja proizvoda, proizvodnje, kvaliteta i regulatornih poslova, u skladu sa specifičnim potrebama organizacije.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-book"></i>
                  <h3>Stručna predavanja i partnerske aktivnosti</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Naši stručnjaci učestvuju na konferencijama, stručnim skupovima, sajmovima i edukativnim programima u saradnji sa akademskim i industrijskim partnerima.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">Materijali</span>
              <h2 className="section-h">Predavanja i galerija sa prethodnih savetovanja</h2>
              <span className="liner"></span>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <h3>12. Savetovanje HRANA, ISHRANA &amp; ZDRAVLJE</h3>
              </div>
              <p>Predavanja sa savetovanja dostupna su za preuzimanje kao zaštićen ZIP fajl (lozinka se dobija na upit), a fotografije u galeriji.</p>
              <div className="event-block-actions">
                <a href="/assets/docs/12-savetovanje.zip" download className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-ios-book"></i></span>
                  <span className="icon-btn-label">Predavanja (ZIP)</span>
                </a>
                <a href="/rs/gallery#12-savetovanje" className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-images"></i></span>
                  <span className="icon-btn-label">Galerija</span>
                </a>
              </div>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <h3>9. Regionalno savetovanje konditorske industrije</h3>
              </div>
              <p>Predavanja sa savetovanja dostupna su za preuzimanje kao zaštićen ZIP fajl (lozinka se dobija na upit), a fotografije u galeriji.</p>
              <div className="event-block-actions">
                <a href="/assets/docs/9-savetovanje.zip" download className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-ios-book"></i></span>
                  <span className="icon-btn-label">Predavanja (ZIP)</span>
                </a>
                <a href="/rs/gallery#9-savetovanje" className="icon-btn">
                  <span className="icon-btn-icon"><i className="ion-images"></i></span>
                  <span className="icon-btn-label">Galerija</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">Arhiva</span>
              <h2 className="section-h">Prethodna savetovanja</h2>
              <span className="liner"></span>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <span className="archive-date">Maj 2022</span>
                <h3>6. Regionalno konditorsko savetovanje</h3>
              </div>
              <p>Održano 24.05.2022. u hotelu Holiday Inn u Beogradu.</p>
              <div className="pill-row">
                <span className="pill">Prof.dr Marica Rakin – Tehnološko-metalurški fakultet Beograd</span>
                <span className="pill">Prof.dr Zorica Knežević-Jugović – Tehnološko-metalurški fakultet Beograd</span>
                <span className="pill">Prof.dr Biljana Pajin – Tehnološki fakultet Novi Sad</span>
                <span className="pill">Doc.dr Ivana Nikolić – Tehnološki fakultet Novi Sad</span>
                <span className="pill">Doc.dr Senka Popović – Tehnološki fakultet Novi Sad</span>
                <span className="pill">Dr vet. med. Mina Mitrović Jeremić – MC Labor</span>
              </div>
              <div className="pill-row pill-row--tight">
                <span className="pill-dark">Sponzor: MC LABOR</span>
              </div>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <span className="archive-date">April 2019</span>
                <h3>V Savetovanje konditorske industrije regiona</h3>
              </div>
              <p>
                Održano u Beogradu u hotelu Crowne Plaza, Vladimira Popovića 10, Novi Beograd.<br />
                U organizaciji IHIS Nutricionizma.
              </p>
              <div className="pill-row">
                <span className="pill">Prof.dr Biljana Pajin – Bela čokolada obogaćena ekstraktom zelenog čaja (TF Novi Sad)</span>
                <span className="pill">Prof.dr Marica Rakin – Prebiotici i probiotici u funkcionalnim konditorskim proizvodima (TMF Beograd)</span>
                <span className="pill">Prof.dr Vera Lazić – Pakovanje konditorskih proizvoda u inertnoj atmosferi (TF Novi Sad)</span>
                <span className="pill">Dipl.ing. Bojan Tomić – Izazovi u proizvodnji Jaffa keksa: kvalitet sirovina i procesni parametri (Jaffa DOO Crvenka)</span>
                <span className="pill">Prof.dr Đerđ Karlović – Metode za određivanje roka trajanja konditorskih proizvoda (Corvinus University, Bunge Poland)</span>
                <span className="pill">Prof.dr Zita Šereš – Šećeri vs zaslađivači u konditorskim proizvodima (TF Novi Sad)</span>
                <span className="pill">Dr Danica Zarić – Uporedni pregled kvaliteta čokolada sa SRB i MK tržišta (IHIS Nutricionizam)</span>
              </div>
              <div className="pill-row pill-row--tight">
                <span className="pill-accent">Generalni sponzor: ESAROM</span>
                <span className="pill-dark">Glavni sponzor: MC LABOR</span>
              </div>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <span className="archive-date">Oktobar 2018</span>
                <h3>VII Savetovanje: Hrana, ishrana &amp; zdravlje</h3>
              </div>
              <p>Hotel Crowne Plaza, Beograd. Obrađene teme:</p>
              <div className="pill-row">
                <span className="pill">Prim. dr Vesna Pantić Palibrk – Materijali u kontaktu sa hranom: usklađivanje sa EU</span>
                <span className="pill">Dr Danica Zarić – Detaljno objašnjenje Pravilnika o nutritivnim i zdravstvenim izjavama</span>
                <span className="pill">Dr Danica Zarić – Kako pravilno deklarisati: natural, bez GMO, bez glutena</span>
                <span className="pill">Dr Lea Pollak – Hrana za posebne grupe: nove kategorije i EU zakonodavstvo</span>
                <span className="pill">Prof.dr Ivan Stanković – Evropske dijetarne referentne vrednosti za nutrijente</span>
                <span className="pill">Doc.dr Milka Popović – Kako izračunati hranjivu vrednost za nutritivnu deklaraciju</span>
              </div>
              <p className="archive-note">
                <strong>Okrugli sto „Od propisa do prakse"</strong> — moderator: dr Danica Zarić<br />
                Učesnici: Ministarstvo poljoprivrede RS, Granična sanitarna inspekcija MZ RS, akademici.
              </p>
            </div>

            <div className="archive-entry fade-in">
              <div className="archive-head">
                <span className="archive-date">April 2018</span>
                <h3>IV Regionalno konditorsko savetovanje</h3>
              </div>
              <p>Hotel Hyatt Regency, Beograd.</p>
              <div className="pill-row">
                <span className="pill">Prof.dr Biljana Pajin – Bela čokolada obogaćena polifenolima (TF Novi Sad)</span>
                <span className="pill">Dipl.ing. Zoltan Katona – Visokoproteinski konditorski proizvodi — budućnost industrije (Cornexi Food, Mađarska)</span>
                <span className="pill">Prof.dr Marica Rakin – Antioksidansi u kakao masi i mlečnim čokoladama (TMF Beograd)</span>
                <span className="pill">Dr Danica Zarić – Uporedni pregled kvaliteta mlečnih čokolada sa SRB i MK tržišta (IHIS Nutricionizam)</span>
                <span className="pill">Prof. dr. sc. Đurđica Ačkar – Modifikovani skrobovi u konditorskoj industriji (PTF Osijek)</span>
                <span className="pill">Prof.dr Đerđ Karlović – Smanjenje akrilamida u konditorskim proizvodima (Corvinus University)</span>
                <span className="pill">Prof.dr Aleksandar Fišteš – Obogaćivanje keksa extrudiranim sporednim proizvodima (TF Novi Sad)</span>
              </div>
              <div className="pill-row pill-row--tight">
                <span className="pill-dark">Sponzori: GIVAUDAN · FRUTAROM FOOD PROTECTION · BAKER PERKINS · SIGMA PROCES · MOREX ADA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <h2 className="section-h">Organizujte edukaciju</h2>
            <span className="liner"></span>
            <p className="mt-10">
              Zainteresovani za internu obuku za vaš tim ili za prisustvo sledećem
              javnom savetovanju? Kontaktirajte nas.
            </p>
            <a href="/rs/contact" className="btn-ihis btn-ihis-white mt-24">Kontaktirajte nas</a>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
