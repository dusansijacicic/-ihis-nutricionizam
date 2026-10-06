import crypto from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import { PREDAVANJA } from '../../../../../../lib/content/predavanja';
import { getLectureKey, verifyLectureToken, LECTURE_COOKIE_NAME } from '../../../../../../lib/predavanja';

export const dynamic = 'force-dynamic';

// Vraća dešifrovan WebP slajd, ili null ako tražena strana ne postoji.
// Format fajla opisan je u scripts/predavanja-build.py. Čitanje stoji ovde, a ne u lib/,
// da bi samo ova funkcija na Vercelu nosila šifrovane slajdove.
async function readSlide(conf, deckId, page) {
  if (!Object.hasOwn(PREDAVANJA, conf)) return null;
  const deck = PREDAVANJA[conf].decks.find((d) => d.id === deckId);
  const n = Number(page);
  if (!deck || !Number.isInteger(n) || String(n) !== page || n < 1 || n > deck.pages) return null;

  const data = await fs.readFile(path.join(process.cwd(), 'private', 'predavanja', conf, deck.id, `${n}.enc`));
  const decipher = crypto.createDecipheriv('aes-256-gcm', getLectureKey(), data.subarray(0, 12));
  decipher.setAAD(Buffer.from(`${conf}/${deck.id}/${n}`));
  decipher.setAuthTag(data.subarray(data.length - 16));
  return Buffer.concat([decipher.update(data.subarray(12, data.length - 16)), decipher.final()]);
}

export async function GET(request, { params }) {
  if (!verifyLectureToken(cookies().get(LECTURE_COOKIE_NAME)?.value)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const image = await readSlide(params.conf, params.deck, params.page);
  if (!image) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(image, {
    headers: {
      'Content-Type': 'image/webp',
      'Content-Disposition': 'inline',
      'Cache-Control': 'private, max-age=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}
