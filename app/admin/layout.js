import SiteDocument, { siteMetadata } from '../../components/SiteDocument';

export const metadata = { ...siteMetadata, robots: { index: false, follow: false } };

export default function AdminLayout({ children }) {
  return <SiteDocument lang="sr">{children}</SiteDocument>;
}
