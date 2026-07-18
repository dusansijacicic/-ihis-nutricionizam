import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'O nama — IHIS Nutricionizam',
  description: 'O nama — IHIS Nutricionizam, naučno-istraživačka kompanija za nutricionizam i deklarisanje hrane u Beogradu, osnovana 2012. godine, deo IHIS Naučno Tehnološkog Parka Zemun.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/about',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/about', en: 'https://ihis-nutricionizam.rs/en/about' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'O nama — IHIS Nutricionizam',
    description: 'Naučno-istraživačka kompanija za nutricionizam i deklarisanje hrane u Beogradu.',
    url: 'https://ihis-nutricionizam.rs/rs/about',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function ONama() {
  return (
    <>
      <Header locale="sr" current="about" langHref="/en/about" />
      <MobileNav locale="sr" current="about" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">O nama</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; O nama</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro">
              <div className="col-text fade-in">
                <span className="section-tag">Ko smo</span>
                <h2 className="section-h">IHIS Nutricionizam</h2>
                <span className="liner"></span>
                <p className="mb-16">
                  <strong>IHIS-NUTRICIONIZAM</strong> je naučno-istraživačka organizacija specijalizovana za razvoj
                  hrane, dodataka ishrani i funkcionalnih proizvoda. Povezujemo savremena naučna dostignuća sa
                  potrebama prehrambene industrije, stvarajući inovativna, tehnološki izvodljiva i regulatorno
                  usklađena rešenja.
                </p>
                <p className="mb-16">
                  Naša misija je da naučna znanja pretvorimo u tržišno uspešne proizvode – od početne ideje,
                  razvoja formulacije i izbora funkcionalnih sastojaka, do industrijske proizvodnje i plasmana na
                  tržište. Partner smo kompanijama u svim fazama razvoja proizvoda, pružajući stručnu podršku
                  zasnovanu na iskustvu, istraživanju i razumevanju savremenih tržišnih zahteva i potreba potrošača.
                </p>
                <p>
                  Pored razvoja proizvoda, pružamo kompletnu podršku u realizaciji novih proizvodnih kapaciteta i
                  greenfield investicija – od definisanja tehnološkog koncepta, izbora i ugovaranja opreme,
                  projektovanja i organizacije proizvodnih linija, izbora sirovina i uspostavljanja proizvodnih
                  procesa, do pokretanja i optimizacije proizvodnje.
                </p>
              </div>
              <div className="col-img fade-in">
                <img src="/assets/img/cover3.jpg" alt="IHIS Nutricionizam" className="shadow-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Naši stručnjaci</span>
              <h2 className="section-h">Tim</h2>
              <span className="liner"></span>
            </div>
            <div className="team-row">
              <div className="team-member fade-in">
                <div className="team-photo" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}></div>
                <h4>Dr Danica Zarić</h4>
                <h6>Direktor</h6>
              </div>
              <div className="team-member fade-in">
                <div className="team-photo" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}></div>
                <h4>Stručni tim</h4>
                <h6>Tehnolozi · Nutricionisti · Biotehnolozi</h6>
                <p>Okuplja najkvalitetnije stručnjake iz oblasti tehnologije, biotehnologije, nutricionizma, kvaliteta i bezbednosti hrane.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Biografija</span>
              <h2 className="section-h">Dr Danica Zarić</h2>
              <span className="liner"></span>
            </div>
            <div className="container-narrow" style={{ padding: 0 }}>
              <p className="mb-16">
                Doktorirala je 2011. godine na temu proizvodnje čokolade uz primenu sojinog mleka
                u kugličnim mlinovima. Profesionalnu karijeru u prehrambenoj industriji gradila je
                15 godina — u kompanijama Soko Nada Štark, Delta Holding i Bambi-Banat — pre nego
                što je osnovala IHIS Nutricionizam.
              </p>
              <p className="mb-16">
                Autorka je i koautorka preko 100 objavljenih naučnih radova i nosilac 8 tehničkih
                rešenja u oblasti funkcionalnih konditorskih proizvoda. Od 2020. godine angažovana je
                i kao viši naučni saradnik na Inovacionom centru Tehnološko-metalurškog fakulteta
                Univerziteta u Beogradu.
              </p>
              <p>
                Redovno učestvuje kao predavač i moderator na regionalnim stručnim savetovanjima
                iz oblasti deklarisanja hrane, nutritivnih i zdravstvenih izjava, i kvaliteta
                konditorskih proizvoda.
              </p>
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta">
            <h2 className="section-h">Kontaktirajte nas</h2>
            <span className="liner"></span>
            <p className="mt-10">Zainteresovani ste za saradnju ili imate pitanje? Rado ćemo odgovoriti.</p>
            <a href="/rs/contact" className="btn-ihis btn-ihis-white mt-24">Pišite nam</a>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
