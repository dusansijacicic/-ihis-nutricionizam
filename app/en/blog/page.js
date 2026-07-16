import Header from '../../../components/Header';
import MobileNav from '../../../components/MobileNav';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Blog — IHIS Nutricionizam',
  description: 'IHIS Nutricionizam blog — articles on nutrition labels, health claims, and food product marks.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/blog',
    languages: { sr: 'https://ihis-nutricionizam.rs/blog', en: 'https://ihis-nutricionizam.rs/en/blog' },
  },
  openGraph: {
    type: 'website', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'Blog — IHIS Nutricionizam',
    description: 'Articles on nutrition labels, health claims, and food product marks.',
    url: 'https://ihis-nutricionizam.rs/en/blog',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover3.jpg'],
  },
};

export default function BlogEn() {
  return (
    <>
      <Header locale="en" current="blog" langHref="/blog" />
      <MobileNav locale="en" current="blog" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Blog</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; Blog</p>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">Expert articles</span>
            <h2 className="section-h">Nutrition science, explained simply</h2>
            <span className="liner"></span>
            <p className="section-lead">
              Short, expert articles on how to read nutrition labels, what health and nutrition
              claims actually mean, and how to spot marketing labels on food products.
            </p>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <div className="news-row fade-in">
                <img src="/assets/img/cover.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">Labeling</span>
                  <h4>How to correctly read a nutrition label</h4>
                  <p>
                    What the numbers on the back of the pack actually mean, what reference intake
                    (RI) is, and why energy value isn't the only thing you should look at.
                  </p>
                  <a href="/en/blog/how-to-read-nutrition-label" className="read-more">Read more &rarr;</a>
                </div>
              </div>

              <div className="news-row fade-in">
                <img src="/assets/img/cover1.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">Regulation</span>
                  <h4>What health and nutrition claims on food actually mean</h4>
                  <p>
                    The difference between nutrition and health claims, who approves their use, and
                    why manufacturers aren't allowed to put certain claims on packaging.
                  </p>
                  <a href="/en/blog/nutrition-and-health-claims" className="read-more">Read more &rarr;</a>
                </div>
              </div>

              <div className="news-row fade-in">
                <img src="/assets/img/cover2.jpg" alt="" className="news-thumb" />
                <div>
                  <span className="news-eyebrow">Product labels</span>
                  <h4>What „natural", „non-GMO" and „gluten-free" labels actually mean</h4>
                  <p>
                    Which of these labels are legally regulated, which aren't, and how to interpret
                    them when choosing products in the store.
                  </p>
                  <a href="/en/blog/natural-non-gmo-gluten-free-labels" className="read-more">Read more &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
