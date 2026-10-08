import SiteDocument, { siteMetadata } from '../../components/SiteDocument';

export const metadata = siteMetadata;

export default function EnLayout({ children }) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
