import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

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
              IHIS Nutricionizam organizuje godišnja savetovanja, radionice i predavanja
              namijenjena proizvođačima hrane, distributerima, maloprodajnim lancima i
              svima koji žele da unaprede znanje iz oblasti prehrambene regulative i nutricionizma.
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
                <h2 className="section-h">Hrana, ishrana i zdravlje</h2>
                <span className="liner mb-20"></span>
                <p className="mb-16">
                  Međunarodno savetovanje „Hrana, ishrana i zdravlje" je vodeće regionalno
                  stručno okupljanje posvećeno aktuelnim temama u oblasti prehrambene
                  industrije, nauke o ishrani i regulative.
                </p>
                <p className="mb-16">
                  Učesnici su stručnjaci iz prehrambeih kompanija, akademske zajednice,
                  regulatornih tela i medija iz Srbije i regiona.
                </p>
                <p>
                  Teme: ispravno deklarisanje, EU usklađivanje, funkcionalna hrana,
                  nutritivne i zdravstvene tvrdnje, bezbednost hrane.
                </p>
                <a href="/rs/contact" className="btn-ihis btn-ihis-white mt-24">Prijavite se</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Programi</span>
              <h2 className="section-h">Oblici edukacije</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-3">
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-people"></i>
                  <h3>Javna savetovanja</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Godišnja i tematska savetovanja otvorena za sve zainteresovane iz prehrambene industrije.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-home"></i>
                  <h3>Interne obuke</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Prilagođene radionice za timove unutar kompanije — razvoj, marketing, QA, regulativa.</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="feature-block">
                  <i className="icon ion-ios-book"></i>
                  <h3>Stručna predavanja</h3>
                  <div className="liner-small color" style={{ display: 'block', margin: '10px auto 12px' }}></div>
                  <p>Predavanja na konferencijama, sajmovima i u saradnji sa visokoškolskim institucijama.</p>
                </div>
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
