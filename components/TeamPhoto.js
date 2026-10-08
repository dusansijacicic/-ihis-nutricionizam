import Image from 'next/image';
import { isPreview } from '../lib/preview';

// Fotografija člana tima (O nama). U admin pregledu ide kroz next/image (mala WebP verzija
// umesto originala) i dobija opis; javno je CSS pozadina kao ranije.
export default function TeamPhoto({ src, alt }) {
  if (!isPreview()) {
    return <div className="team-photo" style={{ backgroundImage: `url('${src}')` }}></div>;
  }
  return (
    <div className="team-photo">
      <Image src={src} alt={alt} width={160} height={160} sizes="160px" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    </div>
  );
}
