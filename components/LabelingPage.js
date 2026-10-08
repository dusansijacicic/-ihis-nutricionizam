import { notFound } from 'next/navigation';
import Header from './Header';
import MobileNav from './MobileNav';
import Footer from './Footer';
import PageHero from './PageHero';
import JsonLd from './JsonLd';
import { breadcrumbSchema, serviceSchema } from '../lib/schema';
import { isPreview } from '../lib/preview';
import { DEKLARISANJE } from '../lib/content/pregled';

// Stranica usluge deklarisanja (/rs/deklarisanje, /en/food-labeling). Za sada samo u admin
// pregledu — javno vraća 404 i nije u sitemap.js dok se ne pusti.
export default function LabelingPage({ locale }) {
  if (!isPreview()) notFound();
  const t = DEKLARISANJE[locale];
  const other = locale === 'en' ? DEKLARISANJE.sr.path : DEKLARISANJE.en.path;

  return (
    <>
      <Header locale={locale === 'en' ? 'en' : 'sr'} current="services" langHref={other} />
      <MobileNav locale={locale === 'en' ? 'en' : 'sr'} current="services" />

      <section className="mastwrap top-spaced">
        <PageHero image="/assets/img/cover2.jpg">
          <div className="page-hero-overlay"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">{t.heroTitle}</h1>
            <p className="page-crumbs">
              <a href={t.crumbs[0][1]}>{t.crumbs[0][0]}</a> &rsaquo; <a href={t.crumbs[1][1]}>{t.crumbs[1][0]}</a> &rsaquo; {t.crumbs[2][0]}
            </p>
            <JsonLd data={breadcrumbSchema(t.crumbs)} />
            <JsonLd data={serviceSchema({ name: t.heroTitle, description: t.lead, path: t.path, locale })} />
          </div>
        </PageHero>

        <div className="section-white text-center">
          <div className="container-narrow">
            <span className="section-tag">{t.tag}</span>
            <h2 className="section-h">{t.heading}</h2>
            <span className="liner"></span>
            <p className="section-lead grey">{t.lead}</p>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">{t.servicesTag}</span>
              <h2 className="section-h">{t.servicesHeading}</h2>
              <span className="liner"></span>
            </div>
            <div className="grid-2">
              {t.services.map((s) => (
                <div className="fade-in" key={s.title}>
                  <div className="card-accent">
                    <i className={`${s.icon} card-icon`}></i>
                    <h3 className="card-title">{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-white">
          <div className="container-narrow">
            <div className="section-head">
              <span className="section-tag">{t.regsTag}</span>
              <h2 className="section-h">{t.regsHeading}</h2>
              <span className="liner"></span>
            </div>
            <ul className="labeling-regs">
              {t.regs.map(([name, eu]) => (
                <li key={name}>
                  <i className="ion-ios-paper-outline"></i>
                  <span>{name}{eu && <em>{eu}</em>}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-dark">
          <div className="container-sm">
            <div className="labeling-workshop">
              <div>
                <span className="section-tag">{t.workshopTag}</span>
                <h2 className="section-h">{t.workshopHeading}</h2>
                <span className="liner"></span>
                <p className="section-lead">{t.workshopText}</p>
              </div>
              <a href={t.workshopHref} className="btn-ihis btn-ihis-cream">{t.workshopCta}</a>
            </div>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">{t.articlesTag}</span>
              <h2 className="section-h">{t.articlesHeading}</h2>
              <span className="liner"></span>
            </div>
            <div className="labeling-articles">
              {t.articles.map(([title, href]) => (
                <a href={href} className="labeling-article" key={href}>
                  <span>{title}</span>
                  <i className="ion-ios-arrow-thin-right"></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-white text-center">
          <div className="container-cta">
            <h2 className="section-h">{t.ctaHeading}</h2>
            <span className="liner"></span>
            <p className="section-lead grey">{t.ctaText}</p>
            <a href={t.ctaHref} className="btn-ihis btn-ihis-color mt-30">{t.ctaButton}</a>
          </div>
        </div>
      </section>

      <Footer locale={locale === 'en' ? 'en' : 'sr'} />
    </>
  );
}
