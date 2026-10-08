import SiteDocument, { siteMetadata } from '../../components/SiteDocument';

// Root layout za adrese van /rs, /en i /admin (npr. stari linkovi) — prikazuju brendiranu 404.
export const metadata = { ...siteMetadata, robots: { index: false } };

export default function MissingLayout({ children }) {
  return <SiteDocument lang="sr">{children}</SiteDocument>;
}
