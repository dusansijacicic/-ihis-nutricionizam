import Header from '../../../../components/Header';
import MobileNav from '../../../../components/MobileNav';
import Footer from '../../../../components/Footer';

export const metadata = {
  title: 'How to correctly read a nutrition label — IHIS Nutricionizam',
  description: 'How to correctly read a nutrition label on food products — what the numbers, reference intake and energy value actually mean.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/en/blog/how-to-read-nutrition-label',
    languages: {
      sr: 'https://ihis-nutricionizam.rs/rs/blog/how-to-read-nutrition-label',
      en: 'https://ihis-nutricionizam.rs/en/blog/how-to-read-nutrition-label',
    },
  },
  openGraph: {
    type: 'article', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'How to correctly read a nutrition label',
    description: 'What the numbers on the back of the pack mean, reference intake, and energy value.',
    url: 'https://ihis-nutricionizam.rs/en/blog/how-to-read-nutrition-label',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function PostEn1() {
  return (
    <>
      <Header locale="en" current="blog" langHref="/rs/blog/how-to-read-nutrition-label" />
      <MobileNav locale="en" current="blog" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Nutrition label</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; <a href="/en/blog">Blog</a> &rsaquo; How to read a nutrition label</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container-narrow">
            <span className="section-tag">Labeling</span>
            <h2 className="section-h mb-20">How to correctly read a nutrition label</h2>

            <p className="mb-16">
              Every packaged food product in Serbia and the EU must carry a nutrition label — a
              table on the back of the pack showing energy value and nutrient content. The problem
              is that most consumers look at only one line of that table, ignoring the rest, which
              often says more about a product's quality.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 300, letterSpacing: '1px' }}>What must be included</h3>
            <p className="mb-16">
              A standard nutrition label includes: energy value (in kJ and kcal), the amount of fat
              and saturated fatty acids, carbohydrates and sugars, protein and salt — all expressed
              per 100 g or 100 ml of product. Many manufacturers also state the value per serving,
              which makes it easier to compare against recommended daily intake.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Reference intake (RI)</h3>
            <p className="mb-16">
              Reference daily intake is the estimated amount of energy and nutrients an average
              adult needs. When a pack shows that a serving „covers 15% RI for sugars", it means
              that serving should make up 15% of your daily sugar intake — a useful guide, but not
              an absolute rule for every individual.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 300, letterSpacing: '1px' }}>What to pay attention to</h3>
            <p className="mb-16">
              Energy value alone doesn't tell you enough — two products with the same calorie count
              can have completely different sugar, fat and fiber content. Instead of looking only at
              „calories", compare sugar and saturated fat content per 100 g, and check where the
              ingredient you're interested in falls on the ingredient list — ingredients are always
              listed in descending order by proportion in the product.
            </p>

            <p>
              Correctly interpreting a nutrition label is one of the basic tools for making informed
              food choices — and a topic IHIS Nutricionizam addresses as part of its
              <a href="/en/services"> expert labeling consulting</a>.
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
