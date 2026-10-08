// Strukturirani podaci (schema.org JSON-LD) za Google. Moraju da odgovaraju onome što
// stranica vidljivo prikazuje.
import { RADIONICA } from './content/radionica';

export const SITE_URL = 'https://www.ihis-nutricionizam.rs';
export const ORG_ID = `${SITE_URL}/#organization`;
const DANICA_ID = `${SITE_URL}/#danica-zaric`;
const BRANKO_ID = `${SITE_URL}/#branko-zaric`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': ORG_ID,
        name: 'IHIS Nutricionizam',
        alternateName: 'IHIS-Nutricionizam',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/img/logo.png` },
        image: `${SITE_URL}/assets/img/cover.jpg`,
        description:
          'Naučno-istraživačka kompanija specijalizovana za nutricionizam, deklarisanje prehrambenih proizvoda, razvoj novih proizvoda, tehnološki konsalting i izgradnju fabrika (greenfield investicije) u prehrambenoj industriji.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Batajnički drum 9 deo, br. 8',
          addressLocality: 'Beograd',
          postalCode: '11080',
          addressCountry: 'RS',
        },
        telephone: '+381113341994',
        email: 'office@ihis-nutricionizam.rs',
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        }],
        areaServed: { '@type': 'Country', name: 'Serbia' },
        founder: { '@id': DANICA_ID },
        sameAs: [
          'https://www.facebook.com/ihis.nutricionizam.7/',
          'https://www.instagram.com/ihisnutricionizam/',
          'https://www.linkedin.com/in/danica-zaric-32239683/',
        ],
        knowsAbout: [
          'Nutricionizam',
          'Deklarisanje prehrambenih proizvoda',
          'Nutritivne i zdravstvene izjave',
          'Razvoj prehrambenih proizvoda',
          'Funkcionalna hrana',
          'Dodaci ishrani',
          'Greenfield investicije',
          'Izgradnja fabrika',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'IHIS Nutricionizam',
        inLanguage: ['sr', 'en'],
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}

// items: [[naziv, putanja], ...] — od početne do trenutne stranice.
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}

// Radionica o deklarisanju kao kurs: oba programa sa cenom bez PDV-a.
export function courseSchema(locale) {
  const t = RADIONICA[locale];
  const path = locale === 'en' ? '/en/workshop' : '/rs/radionica';
  const prices = { osnovna: 30000, prosirena: 35000 };
  const hours = { osnovna: 'PT5H', prosirena: 'PT6H' };
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: t.title,
    description: t.intro,
    url: `${SITE_URL}${path}`,
    inLanguage: locale === 'en' ? 'en' : 'sr',
    provider: { '@type': 'Organization', '@id': ORG_ID, name: 'IHIS Nutricionizam', sameAs: SITE_URL },
    offers: t.programs.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      category: 'Paid',
      price: prices[p.id],
      priceCurrency: 'RSD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: prices[p.id],
        priceCurrency: 'RSD',
        valueAddedTaxIncluded: false,
      },
      url: `${SITE_URL}${path}`,
    })),
    hasCourseInstance: t.programs.map((p) => ({
      '@type': 'CourseInstance',
      name: p.name,
      courseMode: 'Onsite',
      courseWorkload: hours[p.id],
      instructor: { '@type': 'Person', '@id': DANICA_ID, name: 'Danica Zarić' },
    })),
  };
}

export function articleSchema({ locale, url, headline, description, image, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    mainEntityOfPage: url,
    image,
    inLanguage: locale === 'en' ? 'en' : 'sr',
    datePublished,
    dateModified,
    author: { '@type': 'Organization', '@id': ORG_ID, name: 'IHIS Nutricionizam', url: SITE_URL },
    publisher: { '@id': ORG_ID },
  };
}

export function teamSchema(locale) {
  const en = locale === 'en';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': DANICA_ID,
        name: 'Danica Zarić',
        honorificPrefix: 'PhD.',
        jobTitle: en ? 'Founder' : 'Osnivač',
        image: `${SITE_URL}/assets/img/danica.jpg`,
        worksFor: { '@id': ORG_ID },
        sameAs: ['https://www.linkedin.com/in/danica-zaric-32239683/'],
      },
      {
        '@type': 'Person',
        '@id': BRANKO_ID,
        name: 'Branko Zarić',
        honorificPrefix: 'M.Sc. Tech.',
        jobTitle: en ? 'Director' : 'Direktor',
        image: `${SITE_URL}/assets/img/branko.jpg`,
        worksFor: { '@id': ORG_ID },
        sameAs: ['https://www.linkedin.com/in/branko-zari%C4%87-274256b8/'],
      },
    ],
  };
}
