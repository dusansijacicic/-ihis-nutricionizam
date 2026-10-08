import SiteDocument, { siteMetadata } from '../../components/SiteDocument';

export const metadata = siteMetadata;

export default function SrLayout({ children }) {
  return <SiteDocument lang="sr">{children}</SiteDocument>;
}
