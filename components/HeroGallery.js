import Image from 'next/image';
import { FOTO_13_SAVETOVANJE } from '../lib/content/galerija';

// Fotografije sa 13. savetovanja koje se smenjuju u pozadini hero sekcije na naslovnoj.
const HERO_FILES = [
  '13-savetovanje-puna-sala-crowne-plaza-02.jpg',
  '13-savetovanje-izlaganje-za-govornicom-01.jpg',
  '13-savetovanje-predavanje-pred-punom-salom-06.jpg',
  '13-savetovanje-okrugli-sto-pitanja-iz-industrije-19.jpg',
  '13-savetovanje-stand-mc-labor-23.jpg',
  '13-savetovanje-druzenje-tokom-pauze-29.jpg',
];
const SLIDE_SECONDS = 5;
const FADE_SECONDS = 1.5;

const PHOTOS = HERO_FILES.map((file) => FOTO_13_SAVETOVANJE.find((f) => f.file === file));

// Smena je čisto CSS animacija (vidi .hero-gallery u ihis.css): svaka slika kreće
// SLIDE_SECONDS posle prethodne, a prva je vidljiva odmah.
export default function HeroGallery({ locale }) {
  return (
    <div className="hero-gallery" style={{ '--hero-cycle': `${PHOTOS.length * SLIDE_SECONDS}s` }}>
      {PHOTOS.map((f, i) => (
        <div className="hero-gallery-item" style={{ animationDelay: `${i * SLIDE_SECONDS - FADE_SECONDS}s` }} key={f.file}>
          <Image
            src={`/assets/img/gallery/13-savetovanje/${f.file}`}
            alt={locale === 'en' ? f.en : f.sr}
            fill
            sizes="100vw"
            quality={70}
            priority={i === 0}
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
}
