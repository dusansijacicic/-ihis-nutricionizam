import LabelingPage from '../../../components/LabelingPage';
import { DEKLARISANJE } from '../../../lib/content/pregled';

// Admin preview only for now (noindex); on release remove robots and add to the sitemap.
export const metadata = {
  title: DEKLARISANJE.en.metaTitle,
  description: DEKLARISANJE.en.metaDescription,
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.ihis-nutricionizam.rs/en/food-labeling',
    languages: { sr: 'https://www.ihis-nutricionizam.rs/rs/deklarisanje', en: 'https://www.ihis-nutricionizam.rs/en/food-labeling', 'x-default': 'https://www.ihis-nutricionizam.rs/rs/deklarisanje' },
  },
};

export default function FoodLabeling() {
  return <LabelingPage locale="en" />;
}
