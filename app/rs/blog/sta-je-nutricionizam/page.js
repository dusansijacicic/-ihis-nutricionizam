import Header from '../../../../components/Header';
import PageHero from '../../../../components/PageHero';
import BlogCta from '../../../../components/BlogCta';
import JsonLd from '../../../../components/JsonLd';
import { breadcrumbSchema, articleSchema } from '../../../../lib/schema';
import MobileNav from '../../../../components/MobileNav';
import Footer from '../../../../components/Footer';

export const metadata = {
  title: 'Šta je nutricionizam? — IHIS Nutricionizam',
  description: 'Šta je nutricionizam, čime se bavi nauka o ishrani i kako se primenjuje u razvoju prehrambenih proizvoda, deklarisanju i prehrambenoj industriji.',
  alternates: {
    canonical: 'https://www.ihis-nutricionizam.rs/rs/blog/sta-je-nutricionizam',
    languages: {
      sr: 'https://www.ihis-nutricionizam.rs/rs/blog/sta-je-nutricionizam',
      en: 'https://www.ihis-nutricionizam.rs/en/blog/what-is-nutrition-science',
      'x-default': 'https://www.ihis-nutricionizam.rs/rs/blog/sta-je-nutricionizam',
    },
  },
  openGraph: {
    type: 'article', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Šta je nutricionizam?',
    description: 'Definicija nutricionizma i njegova primena u razvoju i deklarisanju prehrambenih proizvoda.',
    url: 'https://www.ihis-nutricionizam.rs/rs/blog/sta-je-nutricionizam',
    images: ['https://www.ihis-nutricionizam.rs/assets/img/cover3.jpg'],
  },
};

export default function StaJeNutricionizam() {
  return (
    <>
      <Header locale="sr" current="blog" langHref="/en/blog/what-is-nutrition-science" />
      <MobileNav locale="sr" current="blog" />

      <section className="mastwrap top-spaced">
        <PageHero image="/assets/img/cover3.jpg">
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Šta je nutricionizam?</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; <a href="/rs/blog">Blog</a> &rsaquo; Šta je nutricionizam?</p>
            <JsonLd data={breadcrumbSchema([["Početna", "/rs"], ["Blog", "/rs/blog"], ["Šta je nutricionizam?", "/rs/blog/sta-je-nutricionizam"]])} />
            <JsonLd data={articleSchema({ locale: "sr", url: "https://www.ihis-nutricionizam.rs/rs/blog/sta-je-nutricionizam", headline: "Šta je nutricionizam?", description: "Šta je nutricionizam, čime se bavi nauka o ishrani i kako se primenjuje u razvoju prehrambenih proizvoda, deklarisanju i prehrambenoj industriji.", image: "https://www.ihis-nutricionizam.rs/assets/img/cover3.jpg", datePublished: "2026-08-11", dateModified: "2026-08-11" })} />
          </div>
        </PageHero>

        <div className="section-white">
          <div className="container-narrow">
            <span className="section-tag">Nauka o ishrani</span>
            <h2 className="section-h mb-20">Nutricionizam — nauka koja povezuje hranu i zdravlje</h2>

            <p className="mb-16">
              <strong>Nutricionizam</strong> je naučna disciplina koja proučava hranu, hranljive
              materije i njihov uticaj na rast, razvoj i zdravlje ljudskog organizma. Bavi se time
              kako telo koristi ono što unosimo kroz ishranu — od makronutrijenata (proteini,
              masti, ugljeni hidrati) do mikronutrijenata (vitamini, minerali) i bioaktivnih
              komponenti u funkcionalnoj hrani.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Čime se bavi nutricionizam</h3>
            <p className="mb-16">
              Nutricionizam kombinuje znanja iz biohemije, fiziologije, prehrambene tehnologije i
              medicine kako bi se razumelo na koji način sastav hrane utiče na zdravlje —
              prevenciju bolesti, optimalan rad organizma i kvalitet života. U praktičnoj primeni,
              to znači istraživanje nutritivne i energetske vrednosti proizvoda, uticaja
              funkcionalnih sastojaka na metabolizam, i naučno utemeljeno kreiranje novih
              prehrambenih proizvoda i dodataka ishrani.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Nutricionizam u prehrambenoj industriji</h3>
            <p className="mb-16">
              Za proizvođače hrane, nutricionizam nije samo teorijska nauka — direktno se
              primenjuje kroz <a href="/rs/research">razvoj prehrambenih proizvoda</a>, izbor
              funkcionalnih sastojaka, i pravilno <a href="/rs/services">deklarisanje</a> nutritivnih
              i zdravstvenih izjava u skladu sa propisima Srbije i Evropske unije. Kompanija koja
              razume nutricionizam može da razvije proizvod koji je istovremeno ukusan, bezbedan i
              tržišno konkurentan.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Od nauke do gotovog proizvoda</h3>
            <p>
              U IHIS-Nutricionizmu, ovu nauku primenjujemo kroz ceo proces — od istraživanja i
              formulacije, preko izbora funkcionalnih sastojaka, do{' '}
              <a href="/rs/tech">tehnološkog koncepta i pokretanja proizvodnje</a>. Cilj je da
              naučno znanje o ishrani i zdravlju pretvorimo u proizvode koji zaista ispunjavaju
              ono što deklaracija obećava.
            </p>
          </div>
        </div>

        <BlogCta locale="sr" />

        <div className="section-light text-center">
          <div className="container-cta">
            <a href="/rs/blog" className="btn-ihis btn-ihis-dark">&larr; Nazad na blog</a>
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
