const BASE = 'https://ihis-nutricionizam.rs';

const PAGES = [
  { sr: '/rs', en: '/en', priority: 1.0 },
  { sr: '/rs/invitation', en: '/en/invitation', priority: 0.9 },
  { sr: '/rs/registration', en: '/en/registration', priority: 0.9 },
  { sr: '/rs/sponsorship', en: '/en/sponsorship', priority: 0.8 },
  { sr: '/rs/about', en: '/en/about', priority: 0.8 },
  { sr: '/rs/services', en: '/en/services', priority: 0.8 },
  { sr: '/rs/research', en: '/en/research', priority: 0.8 },
  { sr: '/rs/tech', en: '/en/tech', priority: 0.8 },
  { sr: '/rs/education', en: '/en/education', priority: 0.7 },
  { sr: '/rs/gallery', en: '/en/gallery', priority: 0.6 },
  { sr: '/rs/news', en: '/en/news', priority: 0.7 },
  { sr: '/rs/blog', en: '/en/blog', priority: 0.6 },
  { sr: '/rs/blog/how-to-read-nutrition-label', en: '/en/blog/how-to-read-nutrition-label', priority: 0.5 },
  { sr: '/rs/blog/nutrition-and-health-claims', en: '/en/blog/nutrition-and-health-claims', priority: 0.5 },
  { sr: '/rs/blog/natural-non-gmo-gluten-free-labels', en: '/en/blog/natural-non-gmo-gluten-free-labels', priority: 0.5 },
  { sr: '/rs/contact', en: '/en/contact', priority: 0.5 },
];

export default function sitemap() {
  const entries = [];

  for (const page of PAGES) {
    const languages = { sr: `${BASE}${page.sr}`, en: `${BASE}${page.en}` };
    entries.push({
      url: `${BASE}${page.sr}`,
      priority: page.priority,
      alternates: { languages },
    });
    entries.push({
      url: `${BASE}${page.en}`,
      priority: page.priority - 0.1,
      alternates: { languages },
    });
  }

  return entries;
}
