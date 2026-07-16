import Header from '../../../../components/Header';
import MobileNav from '../../../../components/MobileNav';
import Footer from '../../../../components/Footer';

export const metadata = {
  title: 'Šta znače oznake „prirodno", „bez GMO" i „bez glutena" — IHIS Nutricionizam',
  description: "Šta zapravo znače oznake 'prirodno', 'bez GMO' i 'bez glutena' na prehrambenim proizvodima — koje su regulisane, a koje nisu.",
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/blog/natural-non-gmo-gluten-free-labels',
    languages: {
      sr: 'https://ihis-nutricionizam.rs/rs/blog/natural-non-gmo-gluten-free-labels',
      en: 'https://ihis-nutricionizam.rs/en/blog/natural-non-gmo-gluten-free-labels',
    },
  },
  openGraph: {
    type: 'article', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: "Šta zapravo znače oznake 'prirodno', 'bez GMO' i 'bez glutena'",
    description: 'Koje od ovih oznaka su regulisane zakonom, a koje nisu.',
    url: 'https://ihis-nutricionizam.rs/rs/blog/natural-non-gmo-gluten-free-labels',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover2.jpg'],
  },
};

export default function PostSr3() {
  return (
    <>
      <Header locale="sr" current="blog" langHref="/en/blog/natural-non-gmo-gluten-free-labels" />
      <MobileNav locale="sr" current="blog" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover2.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Oznake na proizvodu</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; <a href="/rs/blog">Blog</a> &rsaquo; Prirodno, bez GMO, bez glutena</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container-narrow">
            <span className="section-tag">Oznake na proizvodu</span>
            <h2 className="section-h mb-20">Šta zapravo znače oznake „prirodno", „bez GMO" i „bez glutena"</h2>

            <p className="mb-16">
              Ambalaža prehrambenih proizvoda danas je puna dodatnih oznaka koje treba da olakšaju
              izbor potrošaču. Problem je što neke od njih imaju jasnu zakonsku definiciju, dok
              druge suštinski predstavljaju marketinšku formulaciju bez čvrste regulatorne osnove.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>„Bez GMO"</h3>
            <p className="mb-16">
              Ovo je regulisana oznaka — proizvod deklarisan kao „bez GMO" zaista mora da ispuni
              zakonom propisane uslove o odsustvu genetski modifikovanih sastojaka iznad dozvoljenog
              praga. Proizvođač koji ovu oznaku stavi na ambalažu preuzima pravnu odgovornost da je
              tvrdnja tačna.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>„Bez glutena"</h3>
            <p className="mb-16">
              Takođe regulisana oznaka, sa preciznim graničnim vrednostima sadržaja glutena koje
              proizvod mora da zadovolji da bi smeo da nosi ovu deklaraciju — bitno za osobe sa
              celijakijom i intolerancijom na gluten, kojima netačna oznaka može ozbiljno naškoditi.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>„Prirodno"</h3>
            <p className="mb-16">
              Za razliku od prethodne dve, oznaka „prirodno" najčešće nema jedinstvenu, strogo
              propisanu zakonsku definiciju u istoj meri kao GMO ili gluten oznake, što znači da
              njeno značenje u praksi može da varira od proizvođača do proizvođača. Zato je ova
              oznaka ta koju potrošači treba da tumače sa najviše opreza i, po potrebi, provere
              preostali deo deklaracije i listu sastojaka.
            </p>

            <p>
              Razlikovanje regulisanih od neregulisanih oznaka jedan je od razloga zašto je stručna
              provera deklaracije pre lansiranja proizvoda važna — i deo je <a href="/rs/services">konsaltinga
              za deklarisanje</a> koji IHIS Nutricionizam pruža proizvođačima hrane.
            </p>
          </div>
        </div>

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
