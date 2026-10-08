import Header from '../../components/Header';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer';

export const metadata = { title: 'Stranica nije pronađena — IHIS Nutricionizam', robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Header locale="sr" current="" langHref="/en" />
      <MobileNav locale="sr" current="" />
      <section className="mastwrap top-spaced">
        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">Greška 404</span>
            <h1 className="section-h">Stranica nije pronađena</h1>
            <span className="liner"></span>
            <p className="section-lead grey">Stranica koju tražite ne postoji ili je premeštena.</p>
            <div className="icon-row mt-30">
              <a href="/rs" className="btn-ihis btn-ihis-color">Početna</a>
              <a href="/rs/radionica" className="btn-ihis btn-ihis-dark">Radionica o deklarisanju</a>
              <a href="/rs/contact" className="btn-ihis btn-ihis-dark">Kontakt</a>
            </div>
          </div>
        </div>
      </section>
      <Footer locale="sr" />
    </>
  );
}
