import Script from 'next/script';
import Header from '../../components/Header';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Galerija — IHIS Nutricionizam',
  description: 'Galerija IHIS Nutricionizma — fotografije sa regionalnih konditorskih savetovanja i konferencija Hrana, ishrana i zdravlje.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/galerija',
    languages: { sr: 'https://ihis-nutricionizam.rs/galerija', en: 'https://ihis-nutricionizam.rs/en/gallery' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Galerija — IHIS Nutricionizam',
    description: 'Fotografije sa regionalnih konditorskih savetovanja i konferencija Hrana, ishrana i zdravlje.',
    url: 'https://ihis-nutricionizam.rs/galerija',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

const conf2026 = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const conf8 = [
  '1744841312295', '1744841312341', '1744841312924', '1744841313446%20(1)',
  '1744841313446', '1744841313579', '1744841313693', '1744841313793', '1744841314038',
];

export default function Galerija() {
  return (
    <>
      <Header locale="sr" current="gallery" langHref="/en/gallery" />
      <MobileNav locale="sr" current="gallery" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Galerija</h1>
            <p className="page-crumbs"><a href="/">Početna</a> &rsaquo; Galerija</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="section-head section-head--tight">
              <span className="section-tag">Foto arhiva</span>
              <h2 className="section-h">Savetovanja i aktivnosti</h2>
              <span className="liner"></span>
            </div>

            <div className="gal-filter">
              <button className="gal-btn active" data-filter="all">Sve slike</button>
              <button className="gal-btn" data-filter="2026">Savetovanje 2026</button>
              <button className="gal-btn" data-filter="viii">VIII Savetovanje</button>
              <button className="gal-btn" data-filter="arhiva">Foto arhiva</button>
            </div>

            <div className="gal-grid" id="galGrid">
              {conf2026.map((n) => (
                <div className="gal-item" data-group="2026" data-caption="Savetovanje 2026" key={`2026-${n}`}>
                  <img src={`/assets/img/gallery/2026/${n}.JPG`} alt="Savetovanje 2026" loading="lazy" />
                  <div className="gal-overlay"><i className="ion-ios-search-strong"></i></div>
                </div>
              ))}

              {conf8.map((f) => (
                <div className="gal-item" data-group="viii" data-caption="VIII Savetovanje konditorske industrije" key={`viii-${f}`}>
                  <img src={`/assets/img/gallery/8-savetovanje/${f}.jpg`} alt="VIII Savetovanje" loading="lazy" />
                  <div className="gal-overlay"><i className="ion-ios-search-strong"></i></div>
                </div>
              ))}

              {['cover', 'cover1', 'cover2', 'cover3'].map((f) => (
                <div className="gal-item" data-group="arhiva" data-caption="IHIS Nutricionizam" key={f}>
                  <img src={`/assets/img/${f}.jpg`} alt="IHIS Nutricionizam" loading="lazy" />
                  <div className="gal-overlay"><i className="ion-ios-search-strong"></i></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta-sm">
            <h2 className="section-h">Pratite nas</h2>
            <span className="liner"></span>
            <p className="mt-10">Pratite naše aktivnosti, savetovanja i vesti na društvenim mrežama.</p>
            <div className="social-row">
              <a href="https://www.facebook.com/ihis.nutricionizam.7/" target="_blank" rel="noreferrer" className="btn-ihis btn-ihis-white">
                <i className="ion-social-facebook"></i>Facebook
              </a>
              <a href="https://www.instagram.com/ihisnutricionizam/" target="_blank" rel="noreferrer" className="btn-ihis btn-ihis-white">
                <i className="ion-social-instagram"></i>Instagram
              </a>
              <a href="https://www.linkedin.com/in/danica-zaric-32239683/" target="_blank" rel="noreferrer" className="btn-ihis btn-ihis-white">
                <i className="ion-social-linkedin"></i>LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="lb" id="lightbox">
        <span className="lb-close" id="lbClose">&times;</span>
        <span className="lb-nav lb-prev" id="lbPrev">&#8249;</span>
        <img className="lb-img" id="lbImg" src="" alt="" />
        <span className="lb-nav lb-next" id="lbNext">&#8250;</span>
        <span className="lb-caption" id="lbCaption"></span>
      </div>

      <Footer locale="sr" />

      <Script src="/assets/js/galerija.js" strategy="afterInteractive" />
    </>
  );
}
