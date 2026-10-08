import Header from '../../components/Header';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer';

export const metadata = { title: 'Page not found — IHIS Nutricionizam', robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Header locale="en" current="" langHref="/rs" />
      <MobileNav locale="en" current="" />
      <section className="mastwrap top-spaced">
        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">Error 404</span>
            <h1 className="section-h">Page not found</h1>
            <span className="liner"></span>
            <p className="section-lead grey">The page you are looking for does not exist or has been moved.</p>
            <div className="icon-row mt-30">
              <a href="/en" className="btn-ihis btn-ihis-color">Home</a>
              <a href="/en/workshop" className="btn-ihis btn-ihis-dark">Labeling Workshop</a>
              <a href="/en/contact" className="btn-ihis btn-ihis-dark">Contact</a>
            </div>
          </div>
        </div>
      </section>
      <Footer locale="en" />
    </>
  );
}
