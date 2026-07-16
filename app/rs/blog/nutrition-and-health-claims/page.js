import Header from '../../../../components/Header';
import MobileNav from '../../../../components/MobileNav';
import Footer from '../../../../components/Footer';

export const metadata = {
  title: 'Šta znače zdravstvene i nutritivne izjave na hrani — IHIS Nutricionizam',
  description: 'Šta znače zdravstvene i nutritivne izjave na hrani, ko ih odobrava, i zašto ih proizvođači ne mogu slobodno da koriste.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/blog/nutrition-and-health-claims',
    languages: {
      sr: 'https://ihis-nutricionizam.rs/rs/blog/nutrition-and-health-claims',
      en: 'https://ihis-nutricionizam.rs/en/blog/nutrition-and-health-claims',
    },
  },
  openGraph: {
    type: 'article', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Šta znače zdravstvene i nutritivne izjave na hrani',
    description: 'Razlika između nutritivnih i zdravstvenih izjava i ko odobrava njihovu upotrebu.',
    url: 'https://ihis-nutricionizam.rs/rs/blog/nutrition-and-health-claims',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover1.jpg'],
  },
};

export default function PostSr2() {
  return (
    <>
      <Header locale="sr" current="blog" langHref="/en/blog/nutrition-and-health-claims" />
      <MobileNav locale="sr" current="blog" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Zdravstvene izjave</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; <a href="/rs/blog">Blog</a> &rsaquo; Zdravstvene i nutritivne izjave</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container-narrow">
            <span className="section-tag">Regulativa</span>
            <h2 className="section-h mb-20">Šta znače zdravstvene i nutritivne izjave na hrani</h2>

            <p className="mb-16">
              „Bogato vlaknima", „smanjuje holesterol", „izvor vitamina C" — ovakve tvrdnje na
              ambalaži nisu marketinška sloboda proizvođača. To su nutritivne i zdravstvene izjave,
              i njihova upotreba je strogo regulisana, jer direktno utiču na to kako potrošači
              doživljavaju proizvod.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Nutritivna izjava</h3>
            <p className="mb-16">
              Nutritivna izjava tvrdi ili sugeriše da proizvod ima određena korisna nutritivna
              svojstva — na primer da je „izvor proteina", „bez dodatog šećera" ili „sa smanjenim
              udelom masti". Da bi se ovakva izjava koristila, proizvod mora zaista da ispuni
              propisane količinske uslove za taj sastojak.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Zdravstvena izjava</h3>
            <p className="mb-16">
              Zdravstvena izjava ide korak dalje — tvrdi da postoji veza između sastojka i zdravlja
              (npr. „kalcijum doprinosi normalnoj funkciji mišića"). Ovakve izjave moraju biti
              naučno potkrepljene i odobrene, i proizvođač ne sme samostalno da formuliše novu
              zdravstvenu tvrdnju bez osnova u važećim propisima.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Zašto je ovo bitno za potrošače</h3>
            <p>
              Kada proizvođač koristi izjavu koja nije potkrepljena ili prekoračuje ono što je
              dozvoljeno, potrošač dobija pogrešnu sliku o proizvodu — što može uticati na izbor
              hrane, posebno kod osoba sa specifičnim zdravstvenim potrebama. Upravo zato je
              pravilno deklarisanje jedna od osnovnih usluga koje IHIS Nutricionizam pruža
              proizvođačima — pogledajte <a href="/rs/services">usluge deklarisanja i zdravstvenih izjava</a>.
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
