export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: 'https://www.ihis-nutricionizam.rs/sitemap.xml',
  };
}
