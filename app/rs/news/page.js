import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Vesti — IHIS Nutricionizam',
  description: 'Vesti IHIS Nutricionizma — najnovije informacije o savetovanjima, konferencijama i aktivnostima kompanije.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/news',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/news', en: 'https://ihis-nutricionizam.rs/en/news' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Vesti — IHIS Nutricionizam',
    description: 'Najnovije informacije o savetovanjima, konferencijama i aktivnostima kompanije.',
    url: 'https://ihis-nutricionizam.rs/rs/news',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function Vesti() {
  return (
    <>
      <Header locale="sr" current="news" langHref="/en/news" />
      <MobileNav locale="sr" current="news" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Vesti</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; Vesti</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="row-intro" style={{ alignItems: 'flex-start' }}>
              <div className="col-img-lg fade-in">
                <img src="/assets/img/cover.jpg" alt="Vesti" />
              </div>
              <div className="col-text fade-in news-feature">
                <span className="news-feature-date">Maj 2022</span>
                <h2>6. Regionalno konditorsko savetovanje</h2>
                <span className="news-feature-rule"></span>
                <p className="mb-14">Održano 24.05.2022. u hotelu Holiday Inn u Beogradu.</p>
                <p className="mb-14">
                  Predavači: prof.dr Marica Rakin i prof.dr Zorica Knežević-Jugović (TMF Beograd),
                  prof.dr Biljana Pajin, doc.dr Ivana Nikolić i doc.dr Senka Popović (TF Novi Sad),
                  i dr vet. med. Mina Mitrović Jeremić (MC Labor). Sponzor: MC LABOR.
                </p>
                <a href="/rs/education" className="btn-ihis btn-ihis-color mt-10">Pročitajte više</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Arhiva vesti</span>
              <h2 className="section-h">Aktuelno</h2>
              <span className="liner"></span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <div className="news-row fade-in">
                <img src="/assets/img/cover2.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">April 2019</span>
                  <h4>V savetovanje konditorske industrije regiona</h4>
                  <p>
                    Održano 16.04.2019. u Beogradu u hotelu Crowne Plaza, Vladimira Popovića 10,
                    Novi Beograd, u organizaciji IHIS Nutricionizma. Predavači: prof.dr Biljana Pajin,
                    prof.dr Marica Rakin, prof.dr Vera Lazić, dipl.ing. Bojan Tomić (Jaffa DOO Crvenka),
                    prof.dr Đerđ Karlović, prof.dr Zita Šereš i dr Danica Zarić (IHIS Nutricionizam, direktor).
                  </p>
                  <a href="/rs/education" className="read-more">Pročitajte više &rarr;</a>
                </div>
              </div>

              <div className="news-row fade-in">
                <img src="/assets/img/cover1.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">Oktobar 2018</span>
                  <h4>7. savetovanje: Hrana, ishrana &amp; zdravlje</h4>
                  <p>
                    16.10.2018. u hotelu Crowne Plaza u Beogradu održano je 7. savetovanje HRANA,
                    ISHRANA &amp; ZDRAVLJE — obrađene teme: usklađivanje zakonodavstva o materijalima
                    u kontaktu sa hranom, nutritivne i zdravstvene izjave, hrana za posebne grupe,
                    evropske dijetarne referentne vrednosti i izračunavanje hranjive vrednosti hrane.
                    U okviru savetovanja održan je i okrugli sto „Od propisa do prakse".
                  </p>
                  <a href="/rs/education" className="read-more">Pročitajte više &rarr;</a>
                </div>
              </div>

              <div className="news-row fade-in">
                <img src="/assets/img/cover3.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">April 2018</span>
                  <h4>IV savetovanje konditorske industrije regiona</h4>
                  <p>
                    19.04.2018. u hotelu Hyatt Regency u Beogradu održano je IV Regionalno
                    konditorsko savetovanje. Obrađene teme: proizvodnja bele čokolade obogaćene
                    polifenolima, visokoproteinski proizvodi, antioksidansi u kakao masi i mlečnim
                    čokoladama, modifikovani skrobovi i smanjenje akrilamida u konditorskim proizvodima.
                  </p>
                  <a href="/rs/education" className="read-more">Pročitajte više &rarr;</a>
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
