import Header from '../../../../components/Header';
import MobileNav from '../../../../components/MobileNav';
import Footer from '../../../../components/Footer';

export const metadata = {
  title: 'What Is Nutrition Science? — IHIS Nutricionizam',
  description: 'What is nutrition science, what does it study, and how is it applied in food product development, labeling and the food industry.',
  alternates: {
    canonical: 'https://www.ihis-nutricionizam.rs/en/blog/what-is-nutrition-science',
    languages: {
      sr: 'https://www.ihis-nutricionizam.rs/rs/blog/sta-je-nutricionizam',
      en: 'https://www.ihis-nutricionizam.rs/en/blog/what-is-nutrition-science',
      'x-default': 'https://www.ihis-nutricionizam.rs/rs/blog/sta-je-nutricionizam',
    },
  },
  openGraph: {
    type: 'article', siteName: 'IHIS Nutricionizam', locale: 'en_US',
    title: 'What Is Nutrition Science?',
    description: 'A definition of nutrition science and its application in food product development and labeling.',
    url: 'https://www.ihis-nutricionizam.rs/en/blog/what-is-nutrition-science',
    images: ['https://www.ihis-nutricionizam.rs/assets/img/cover3.jpg'],
  },
};

export default function WhatIsNutritionScience() {
  return (
    <>
      <Header locale="en" current="blog" langHref="/rs/blog/sta-je-nutricionizam" />
      <MobileNav locale="en" current="blog" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover3.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">What Is Nutrition Science?</h1>
            <p className="page-crumbs"><a href="/en">Home</a> &rsaquo; <a href="/en/blog">Blog</a> &rsaquo; What Is Nutrition Science?</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container-narrow">
            <span className="section-tag">Nutrition science</span>
            <h2 className="section-h mb-20">Nutrition science — connecting food and health</h2>

            <p className="mb-16">
              <strong>Nutrition science (nutricionizam)</strong> is the scientific discipline that
              studies food, nutrients, and their effect on the growth, development and health of
              the human body. It examines how the body uses what we consume — from macronutrients
              (proteins, fats, carbohydrates) to micronutrients (vitamins, minerals) and the
              bioactive components found in functional foods.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>What nutrition science covers</h3>
            <p className="mb-16">
              Nutrition science combines knowledge from biochemistry, physiology, food technology
              and medicine to understand how food composition affects health — disease prevention,
              optimal body function and quality of life. In practice, that means researching the
              nutritional and energy value of products, the effect of functional ingredients on
              metabolism, and the science-based creation of new food products and dietary
              supplements.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Nutrition science in the food industry</h3>
            <p className="mb-16">
              For food manufacturers, nutrition science isn't just theory — it's applied directly
              through <a href="/en/research">food product development</a>, the selection of
              functional ingredients, and correct <a href="/en/services">labeling</a> of nutrition
              and health claims in line with Serbian and EU regulations. A company that understands
              nutrition science can develop a product that is tasty, safe and market-competitive
              at the same time.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>From science to finished product</h3>
            <p>
              At IHIS-Nutricionizam, we apply this science across the whole process — from research
              and formulation, through the selection of functional ingredients, to the{' '}
              <a href="/en/tech">technological concept and launching production</a>. The goal is to
              turn scientific knowledge about food and health into products that truly deliver on
              what their label promises.
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
