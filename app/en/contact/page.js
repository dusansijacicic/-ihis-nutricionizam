import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Contact — IHIS Nutricionizam',
  description: 'Contact IHIS Nutricionizam — Batajnicki drum 9 deo br. 8, Belgrade. Phone, email and location map.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/contact',
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/contact', en: 'https://ihis-nutricionizam.rs/en/contact' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Contact — IHIS Nutricionizam',
    description: 'Batajnicki drum 9 deo br. 8, Belgrade. Phone, email and location map.',
    url: 'https://ihis-nutricionizam.rs/en/contact',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function ContactEn() {
  return (
    <>
      <Header locale="en" current="contact" langHref="/rs/contact" />
      <MobileNav locale="en" current="contact" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Contact</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Contact</p>
          </div>
        </div>

        <div className="section-dark">
          <div className="container">
            <div className="contact-row">
              <div className="col-text fade-in">
                <span className="section-tag">Get in touch</span>
                <h2 className="section-h">Send an inquiry</h2>
                <span className="liner"></span>
                <form id="contact-form">
                  <input type="text" name="name" className="cf-input" placeholder="Full name" required />
                  <input type="email" name="email" className="cf-input" placeholder="Email address" required />
                  <input type="text" name="company" className="cf-input" placeholder="Company (optional)" />
                  <textarea name="message" className="cf-input cf-textarea" rows="4" placeholder="Your message..." required></textarea>
                  <button type="submit" className="btn-ihis btn-ihis-white">Send message</button>
                  <p className="form-msg"></p>
                </form>
              </div>

              <div className="contact-info fade-in">
                <span className="section-tag">Details</span>
                <h2 className="section-h">Find us</h2>
                <span className="liner"></span>

                <div className="contact-info-block contact-info-block--last">
                  <span className="ion-ios-location contact-icon"></span>
                  <span className="contact-addr-text">
                    Batajnicki drum 9 deo, br. 8<br />
                    <span className="indent">11080 Belgrade, Serbia</span>
                  </span>
                </div>

                <div className="contact-info-block">
                  <span className="ion-ios-telephone contact-icon"></span>
                  <a href="tel:+381113341994" className="contact-phone">+381 11 33 41 994</a>
                </div>
                <div className="contact-info-block">
                  <span className="ion-iphone contact-icon"></span>
                  <a href="tel:+381648780117" className="contact-phone">+381 64 87 80 117</a>
                </div>
                <div className="contact-info-block contact-info-block--last">
                  <span className="ion-iphone contact-icon"></span>
                  <a href="tel:+381658496845" className="contact-phone">+381 65 84 96 845</a>
                </div>

                <div className="contact-info-block">
                  <span className="ion-ios-email contact-icon"></span>
                  <a href="mailto:office@ihis-nutricionizam.rs" className="contact-mail">office@ihis-nutricionizam.rs</a>
                </div>
                <div className="contact-info-block">
                  <span className="ion-ios-email contact-icon"></span>
                  <a href="mailto:branko.zaric@ihis-nutricionizam.rs" className="contact-mail">branko.zaric@ihis-nutricionizam.rs</a>
                </div>
                <div>
                  <span className="ion-ios-email contact-icon"></span>
                  <a href="mailto:danica.zaric@ihis-nutricionizam.rs" className="contact-mail">danica.zaric@ihis-nutricionizam.rs</a>
                </div>

                <div className="contact-hours">
                  <h6>Business hours</h6>
                  <p>
                    Mon – Fri: 09:00 – 17:00<br />
                    Sat, Sun: closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container">
            <div className="grid-3 grid-3--tight">
              <div className="fade-in">
                <div className="contact-label-box">
                  <span className="ion-ios-location"></span>
                  <h4>Address</h4>
                  <p>Batajnicki drum 9 deo, br. 8<br />11080 Belgrade, Serbia</p>
                </div>
              </div>
              <div className="fade-in">
                <div className="contact-label-box">
                  <span className="ion-ios-telephone"></span>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+381113341994">+381 11 33 41 994</a><br />
                    <a href="tel:+381648780117">+381 64 87 80 117</a><br />
                    <a href="tel:+381658496845">+381 65 84 96 845</a>
                  </p>
                </div>
              </div>
              <div className="fade-in">
                <div className="contact-label-box">
                  <span className="ion-ios-email"></span>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:office@ihis-nutricionizam.rs">office@ihis-nutricionizam.rs</a><br />
                    <a href="mailto:branko.zaric@ihis-nutricionizam.rs">branko.zaric@ihis-nutricionizam.rs</a><br />
                    <a href="mailto:danica.zaric@ihis-nutricionizam.rs">danica.zaric@ihis-nutricionizam.rs</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-embed">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=20.38,44.76,20.44,44.80&layer=mapnik&marker=44.782,20.410"
            allowFullScreen
            loading="lazy"
            title="IHIS Nutricionizam location map">
          </iframe>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
