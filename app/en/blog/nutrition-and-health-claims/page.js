import Header from '../../../../components/Header';
import MobileNav from '../../../../components/MobileNav';
import Footer from '../../../../components/Footer';

export const metadata = {
  title: 'What health and nutrition claims on food actually mean — IHIS Nutricionizam',
  description: 'What health and nutrition claims on food actually mean, who approves them, and why manufacturers can\'t use them freely.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/blog/nutrition-and-health-claims',
    languages: {
      sr: 'https://ihis-nutricionizam.rs/rs/blog/nutrition-and-health-claims',
      en: 'https://ihis-nutricionizam.rs/en/blog/nutrition-and-health-claims',
    },
  },
  openGraph: {
    type: 'article', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'What health and nutrition claims on food actually mean',
    description: 'The difference between nutrition and health claims and who approves their use.',
    url: 'https://ihis-nutricionizam.rs/en/blog/nutrition-and-health-claims',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

export default function PostEn2() {
  return (
    <>
      <Header locale="en" current="blog" langHref="/rs/blog/nutrition-and-health-claims" />
      <MobileNav locale="en" current="blog" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Health claims</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; <a href="/en/blog">Blog</a> &rsaquo; Nutrition and health claims</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container-narrow">
            <span className="section-tag">Regulation</span>
            <h2 className="section-h mb-20">What health and nutrition claims on food actually mean</h2>

            <p className="mb-16">
              „High in fiber," „lowers cholesterol," „source of vitamin C" — claims like these on
              packaging aren't marketing freedom for manufacturers. These are nutrition and health
              claims, and their use is strictly regulated, because they directly shape how
              consumers perceive a product.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Nutrition claim</h3>
            <p className="mb-16">
              A nutrition claim states or implies that a product has particular beneficial
              nutritional properties — for example that it is a „source of protein," „no added
              sugar," or „reduced fat." To use such a claim, the product must actually meet the
              prescribed quantitative requirements for that nutrient.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Health claim</h3>
            <p className="mb-16">
              A health claim goes a step further — it asserts a relationship between a nutrient and
              health (e.g. „calcium contributes to normal muscle function"). Such claims must be
              scientifically substantiated and approved, and a manufacturer may not independently
              formulate a new health claim without a basis in applicable regulations.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Why this matters to consumers</h3>
            <p>
              When a manufacturer uses a claim that isn't substantiated or that exceeds what is
              permitted, the consumer gets a misleading picture of the product — which can affect
              food choices, especially for people with specific health needs. That's precisely why
              correct labeling is one of the core services IHIS Nutricionizam provides to
              manufacturers — see our <a href="/en/services">labeling and health claims services</a>.
            </p>
          </div>
        </div>

        <div className="section-light text-center">
          <div className="container-cta">
            <a href="/en/blog" className="btn-ihis btn-ihis-dark">&larr; Back to blog</a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
