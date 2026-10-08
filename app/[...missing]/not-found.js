import NotFoundContent from '../../components/NotFoundContent';

export const metadata = { title: 'Stranica nije dostupna — IHIS Nutricionizam', robots: { index: false } };

export default function NotFound() {
  return <NotFoundContent locale="sr" />;
}
