export default function OrgSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IHIS Nutricionizam',
    alternateName: 'IHIS-Nutricionizam',
    url: 'https://ihis-nutricionizam.rs',
    logo: 'https://ihis-nutricionizam.rs/assets/img/logo.png',
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
    sameAs: [
      'https://www.facebook.com/ihis.nutricionizam.7/',
      'https://www.instagram.com/ihisnutricionizam/',
      'https://www.linkedin.com/in/danica-zaric-32239683/',
    ],
    knowsAbout: [
      'Nutricionizam',
      'Deklarisanje prehrambenih proizvoda',
      'Razvoj prehrambenih proizvoda',
      'Funkcionalna hrana',
      'Dodaci ishrani',
      'Greenfield investicije',
      'Izgradnja fabrika',
      'Nove proizvodne linije',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
