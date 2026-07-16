import Header from '../../../../components/Header';
import MobileNav from '../../../../components/MobileNav';
import Footer from '../../../../components/Footer';

export const metadata = {
  title: 'Kako pravilno čitati nutritivnu deklaraciju — IHIS Nutricionizam',
  description: 'Kako pravilno čitati nutritivnu deklaraciju na prehrambenim proizvodima — šta znače brojevi, referentni unos i energetska vrednost.',
  alternates: {
    canonical: 'https://ihis-nutricionizam.rs/rs/blog/how-to-read-nutrition-label',
    languages: {
      sr: 'https://ihis-nutricionizam.rs/rs/blog/how-to-read-nutrition-label',
      en: 'https://ihis-nutricionizam.rs/en/blog/how-to-read-nutrition-label',
    },
  },
  openGraph: {
    type: 'article', siteName: 'IHIS Nutricionizam', locale: 'sr_RS',
    title: 'Kako pravilno čitati nutritivnu deklaraciju',
    description: 'Šta znače brojevi na poleđini pakovanja, referentni unos i energetska vrednost.',
    url: 'https://ihis-nutricionizam.rs/rs/blog/how-to-read-nutrition-label',
    images: ['https://ihis-nutricionizam.rs/assets/img/cover.jpg'],
  },
};

export default function PostSr1() {
  return (
    <>
      <Header locale="sr" current="blog" langHref="/en/blog/how-to-read-nutrition-label" />
      <MobileNav locale="sr" current="blog" />

      <section className="mastwrap top-spaced">
        <div className="page-hero" style={{ backgroundImage: "url('/assets/img/cover.jpg')" }}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Nutritivna deklaracija</h1>
            <p className="page-crumbs"><a href="/rs">Početna</a> &rsaquo; <a href="/rs/blog">Blog</a> &rsaquo; Kako čitati nutritivnu deklaraciju</p>
          </div>
        </div>

        <div className="section-white">
          <div className="container-narrow">
            <span className="section-tag">Deklarisanje</span>
            <h2 className="section-h mb-20">Kako pravilno čitati nutritivnu deklaraciju</h2>

            <p className="mb-16">
              Svaki upakovani prehrambeni proizvod u Srbiji i EU mora imati nutritivnu deklaraciju —
              tabelu na poleđini pakovanja koja prikazuje energetsku vrednost i sadržaj hranljivih
              materija. Problem je što većina potrošača gleda samo jedan red te tabele, a
              zanemaruje ostatak koji često govori više o kvalitetu proizvoda.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Šta obavezno mora da piše</h3>
            <p className="mb-16">
              Standardna nutritivna deklaracija sadrži: energetsku vrednost (u kJ i kcal), količinu
              masti i zasićenih masnih kiselina, ugljenih hidrata i šećera, proteina i soli — sve
              izraženo na 100 g ili 100 ml proizvoda. Mnogi proizvođači dodatno navode i vrednost
              po porciji, što olakšava poređenje sa preporučenim dnevnim unosom.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Referentni unos (RI)</h3>
            <p className="mb-16">
              Referentni dnevni unos je procenjena količina energije i hranljivih materija potrebna
              prosečnoj odrasloj osobi. Kada na pakovanju vidite da porcija proizvoda „pokriva 15%
              RI za šećere", to znači da bi ta porcija trebalo da čini 15% vašeg dnevnog unosa
              šećera — koristan orijentir, ali ne apsolutno pravilo za svaku osobu.
            </p>

            <h3 className="mb-16" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 300, letterSpacing: '1px' }}>Na šta obratiti pažnju</h3>
            <p className="mb-16">
              Energetska vrednost sama po sebi ne govori dovoljno — dva proizvoda sa istim brojem
              kalorija mogu imati potpuno različit sastav šećera, masti i vlakana. Umesto da gledate
              samo „kalorije", uporedite sadržaj šećera i zasićenih masti na 100 g, i proverite gde
              se sastojak koji vas zanima nalazi na listi sastojaka — sastojci su uvek navedeni po
              opadajućem udelu u proizvodu.
            </p>

            <p>
              Pravilno tumačenje nutritivne deklaracije jedan je od osnovnih alata za informisan
              izbor hrane — i tema kojom se IHIS Nutricionizam bavi u okviru <a href="/rs/services">stručnog
              konsaltinga za deklarisanje proizvoda</a>.
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
