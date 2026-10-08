import LabelingPage from '../../../components/LabelingPage';
import { DEKLARISANJE } from '../../../lib/content/pregled';

// Za sada samo u admin pregledu (noindex); pri puštanju javno ukloniti robots i dodati u sitemap.
export const metadata = {
  title: DEKLARISANJE.sr.metaTitle,
  description: DEKLARISANJE.sr.metaDescription,
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.ihis-nutricionizam.rs/rs/deklarisanje',
    languages: { sr: 'https://www.ihis-nutricionizam.rs/rs/deklarisanje', en: 'https://www.ihis-nutricionizam.rs/en/food-labeling', 'x-default': 'https://www.ihis-nutricionizam.rs/rs/deklarisanje' },
  },
};

export default function Deklarisanje() {
  return <LabelingPage locale="sr" />;
}
