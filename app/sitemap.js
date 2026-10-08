const BASE = 'https://www.ihis-nutricionizam.rs';

// lastModified: datum poslednje izmene sadržaja stranice (ažurirati kad se stranica menja).
const PAGES = [
  { sr: '/rs', en: '/en', priority: 1.0, lastModified: '2026-10-08' },
  { sr: '/rs/radionica', en: '/en/workshop', priority: 0.9, lastModified: '2026-10-07' },
  { sr: '/rs/registration', en: '/en/registration', priority: 0.8, lastModified: '2026-10-07' },
  { sr: '/rs/about', en: '/en/about', priority: 0.8, lastModified: '2026-07-20' },
  { sr: '/rs/services', en: '/en/services', priority: 0.8, lastModified: '2026-08-11' },
  { sr: '/rs/research', en: '/en/research', priority: 0.8, lastModified: '2026-08-12' },
  { sr: '/rs/tech', en: '/en/tech', priority: 0.8, lastModified: '2026-08-11' },
  { sr: '/rs/education', en: '/en/education', priority: 0.7, lastModified: '2026-10-08' },
  { sr: '/rs/gallery', en: '/en/gallery', priority: 0.6, lastModified: '2026-10-08' },
  { sr: '/rs/news', en: '/en/news', priority: 0.7, lastModified: '2026-07-16' },
  { sr: '/rs/blog', en: '/en/blog', priority: 0.6, lastModified: '2026-08-11' },
  { sr: '/rs/blog/sta-je-nutricionizam', en: '/en/blog/what-is-nutrition-science', priority: 0.6, lastModified: '2026-08-11' },
  { sr: '/rs/blog/how-to-read-nutrition-label', en: '/en/blog/how-to-read-nutrition-label', priority: 0.5, lastModified: '2026-07-16' },
  { sr: '/rs/blog/nutrition-and-health-claims', en: '/en/blog/nutrition-and-health-claims', priority: 0.5, lastModified: '2026-07-16' },
  { sr: '/rs/blog/natural-non-gmo-gluten-free-labels', en: '/en/blog/natural-non-gmo-gluten-free-labels', priority: 0.5, lastModified: '2026-07-16' },
  { sr: '/rs/contact', en: '/en/contact', priority: 0.5, lastModified: '2026-07-19' },
];

export default function sitemap() {
  const entries = [];

  for (const page of PAGES) {
    const languages = { sr: `${BASE}${page.sr}`, en: `${BASE}${page.en}`, 'x-default': `${BASE}${page.sr}` };
    entries.push({
      url: `${BASE}${page.sr}`,
      lastModified: page.lastModified,
      priority: page.priority,
      alternates: { languages },
    });
    entries.push({
      url: `${BASE}${page.en}`,
      lastModified: page.lastModified,
      priority: page.priority - 0.1,
      alternates: { languages },
    });
  }

  return entries;
}
