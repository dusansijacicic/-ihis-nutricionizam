import Image from 'next/image';
import Script from 'next/script';
import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Gallery — IHIS Nutricionizam',
  description: 'IHIS Nutricionizam gallery — photos from regional confectionery conferences and Food, Nutrition and Health conferences.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/gallery',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/gallery', en: 'https://ihis-nutricionizam.rs/en/gallery' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Gallery — IHIS Nutricionizam',
    description: 'Photos from regional confectionery conferences and Food, Nutrition and Health conferences.',
    url: 'https://ihis-nutricionizam.rs/en/gallery',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

const conf2026 = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const conf8 = [
  '1744841312295', '1744841312341', '1744841312924',
  '1744841313446', '1744841313579', '1744841313693', '1744841313793', '1744841314038',
];

export default function GalleryEn() {
  return (
    <>
      <Header locale="en" current="gallery" langHref="/rs/gallery" />
      <MobileNav locale="en" current="gallery" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Gallery</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Gallery</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container">
            <div className="section-head section-head--tight">
              <span className="section-tag">Photo archive</span>
              <h2 className="section-h">Conferences and activities</h2>
              <span className="liner"></span>
            </div>

            <div className="gal-filter">
              <button className="gal-btn active" data-filter="all">All photos</button>
              <button className="gal-btn" data-filter="2026">2026 Conference</button>
              <button className="gal-btn" data-filter="viii">8th Conference</button>
              <button className="gal-btn" data-filter="arhiva">Photo archive</button>
            </div>

            <div className="gal-grid" id="galGrid">
              {conf2026.map((n) => (
                <div className="gal-item" data-group="2026" data-caption="2026 Conference" data-full={`/assets/img/gallery/2026/${n}.JPG`} key={`2026-${n}`}>
                  <Image src={`/assets/img/gallery/2026/${n}.JPG`} alt="2026 Conference" fill sizes="(max-width: 600px) 50vw, 260px" style={{ objectFit: 'cover' }} />
                  <div className="gal-overlay"><i className="ion-ios-search-strong"></i></div>
                </div>
              ))}

              {conf8.map((f) => (
                <div className="gal-item" data-group="viii" data-caption="8th Regional Confectionery Conference" data-full={`/assets/img/gallery/8-savetovanje/${f}.jpg`} key={`viii-${f}`}>
                  <Image src={`/assets/img/gallery/8-savetovanje/${f}.jpg`} alt="8th Conference" fill sizes="(max-width: 600px) 50vw, 260px" style={{ objectFit: 'cover' }} />
                  <div className="gal-overlay"><i className="ion-ios-search-strong"></i></div>
                </div>
              ))}

              {['cover', 'cover1', 'cover2', 'cover3'].map((f) => (
                <div className="gal-item" data-group="arhiva" data-caption="IHIS Nutricionizam" data-full={`/assets/img/${f}.jpg`} key={f}>
                  <Image src={`/assets/img/${f}.jpg`} alt="IHIS Nutricionizam" fill sizes="(max-width: 600px) 50vw, 260px" style={{ objectFit: 'cover' }} />
                  <div className="gal-overlay"><i className="ion-ios-search-strong"></i></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-dark text-center">
          <div className="container-cta-sm">
            <h2 className="section-h">Follow us</h2>
            <span className="liner"></span>
            <p className="mt-10">Follow our activities, conferences and news on social media.</p>
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

      <Footer locale="en" />

      <Script src="/assets/js/galerija.js" strategy="afterInteractive" />
    </>
  );
}
