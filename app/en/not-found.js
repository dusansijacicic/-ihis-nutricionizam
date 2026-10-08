import NotFoundContent from '../../components/NotFoundContent';

export const metadata = { title: 'Page not available — IHIS Nutricionizam', robots: { index: false } };

export default function NotFound() {
  return <NotFoundContent locale="en" />;
}
