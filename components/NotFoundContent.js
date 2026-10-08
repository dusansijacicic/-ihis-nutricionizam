import Header from './Header';
import MobileNav from './MobileNav';
import Footer from './Footer';

const STR = {
  sr: {
    home: '/rs', langHref: '/en',
    tag: 'Greška 404',
    title: 'Ova stranica nije dostupna',
    text: 'Stranica koju tražite ne postoji, premeštena je ili je privremeno nedostupna.',
    contactLead: 'Tražite nešto konkretno? Javite nam se — rado ćemo pomoći.',
    links: [
      { href: '/rs', label: 'Početna', primary: true },
      { href: '/rs/radionica', label: 'Radionica o deklarisanju' },
      { href: '/rs/contact', label: 'Kontakt' },
    ],
  },
  en: {
    home: '/en', langHref: '/rs',
    tag: 'Error 404',
    title: 'This page is not available',
    text: 'The page you are looking for does not exist, has been moved or is temporarily unavailable.',
    contactLead: 'Looking for something specific? Get in touch — we are happy to help.',
    links: [
      { href: '/en', label: 'Home', primary: true },
      { href: '/en/workshop', label: 'Labeling Workshop' },
      { href: '/en/contact', label: 'Contact' },
    ],
  },
};

// Zajednička stranica "nije pronađeno" za /rs, /en i nepoznate adrese van njih.
export default function NotFoundContent({ locale }) {
  const t = STR[locale] || STR.sr;

  return (
    <>
      <Header locale={locale} current="" langHref={t.langHref} />
      <MobileNav locale={locale} current="" />

      <section className="mastwrap top-spaced">
        <div className="section-dark nf-section text-center">
          <div className="container-narrow">
            <a href={t.home} className="nf-logo"><img src="/assets/img/logo.png" alt="IHIS Nutricionizam" /></a>
            <p className="nf-code">404</p>
            <span className="section-tag">{t.tag}</span>
            <h1 className="section-h">{t.title}</h1>
            <span className="liner"></span>
            <p className="section-lead">{t.text}</p>

            <div className="nf-contact">
              <p>{t.contactLead}</p>
              <div className="nf-contact-links">
                <a href="mailto:office@ihis-nutricionizam.rs"><i className="ion-ios-email-outline"></i>office@ihis-nutricionizam.rs</a>
                <a href="tel:+381113341994"><i className="ion-ios-telephone-outline"></i>+381 11 3341 994</a>
              </div>
            </div>

            <div className="nf-actions">
              {t.links.map((l) => (
                <a key={l.href} href={l.href} className={`btn-ihis ${l.primary ? 'btn-ihis-color' : 'btn-ihis-outline'}`}>{l.label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
