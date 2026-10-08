import Image from 'next/image';
import { isPreview } from '../lib/preview';

// Naslovna traka unutrašnjih stranica. U admin pregledu slika ide kroz next/image (WebP,
// manja verzija za telefon, učitava se prioritetno); javno je CSS pozadina kao ranije.
export default function PageHero({ className = 'page-hero', image, children }) {
  if (!isPreview()) {
    return <div className={className} style={{ backgroundImage: `url('${image}')` }}>{children}</div>;
  }
  return (
    <div className={className}>
      <Image src={image} alt="" fill priority sizes="100vw" quality={70} className="page-hero-img" />
      {children}
    </div>
  );
}
