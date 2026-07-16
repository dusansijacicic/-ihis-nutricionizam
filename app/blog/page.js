import Header from '../../components/Header';
import MobileNav from '../../components/MobileNav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Blog — IHIS Nutricionizam',
  description: 'Blog IHIS Nutricionizma — stručni tekstovi o nutritivnim deklaracijama, zdravstvenim izjavama i oznakama na prehrambenim proizvodima.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/blog',
    languages: { sr: 'https://ihis-nutricionizam.rs/blog', en: 'https://ihis-nutricionizam.rs/en/blog' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Blog — IHIS Nutricionizam',
    description: 'Stručni tekstovi o nutritivnim deklaracijama, zdravstvenim izjavama i oznakama na prehrambenim proizvodima.',
    url: 'https://ihis-nutricionizam.rs/blog',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover3.jpg'],
  },
};

export default function Blog() {
  return (
    <>
      <Header locale="sr" current="blog" langHref="/en/blog" />
      <MobileNav locale="sr" current="blog" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Blog</h1>
            <p className="page-crumbs"><a href="/">Početna</a> &rsaquo; Blog</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">Stručni tekstovi</span>
            <h2 className="section-h">Nutricionizam objašnjen jednostavno</h2>
            <span className="liner"></span>
            <p className="section-lead">
              Kratki, stručni tekstovi o tome kako se čitaju nutritivne deklaracije, šta znače
              zdravstvene i nutritivne izjave, i kako da prepoznate marketinške oznake na
              prehrambenim proizvodima.
            </p>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <div className="news-row fade-in">
                <img src="/assets/img/cover.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">Deklarisanje</span>
                  <h4>Kako pravilno čitati nutritivnu deklaraciju</h4>
                  <p>
                    Šta tačno znače brojevi na poleđini pakovanja, šta je referentni unos (RI) i
                    zašto energetska vrednost nije jedino što treba da gledate.
                  </p>
                  <a href="/blog/kako-citati-nutritivnu-deklaraciju" className="read-more">Pročitajte više &rarr;</a>
                </div>
              </div>

              <div className="news-row fade-in">
                <img src="/assets/img/cover1.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">Regulativa</span>
                  <h4>Šta znače zdravstvene i nutritivne izjave na hrani</h4>
                  <p>
                    Razlika između nutritivnih i zdravstvenih izjava, ko odobrava njihovu upotrebu,
                    i zašto neke tvrdnje proizvođači ne smeju da stavljaju na ambalažu.
                  </p>
                  <a href="/blog/zdravstvene-i-nutritivne-izjave" className="read-more">Pročitajte više &rarr;</a>
                </div>
              </div>

              <div className="news-row fade-in">
                <img src="/assets/img/cover2.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">Oznake na proizvodu</span>
                  <h4>Šta zapravo znače oznake „prirodno", „bez GMO" i „bez glutena"</h4>
                  <p>
                    Koje od ovih oznaka su regulisane zakonom, koje nisu, i kako da ih tumačite
                    kada birate proizvode u prodavnici.
                  </p>
                  <a href="/blog/gmo-bez-glutena-prirodno" className="read-more">Pročitajte više &rarr;</a>
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
