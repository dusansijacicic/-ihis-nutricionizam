import crypto from 'crypto';

export const LECTURE_COOKIE_NAME = 'predavanja_session';
export const LECTURE_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 dana

export function getLectureKey() {
  const hex = process.env.PREDAVANJA_KEY || '';
  return /^[0-9a-f]{64}$/i.test(hex) ? Buffer.from(hex, 'hex') : null;
}

function isConfigured() {
  return Boolean(getLectureKey() && process.env.PREDAVANJA_PASSWORD);
}

// Šifra ulazi u potpis, pa promena PREDAVANJA_PASSWORD poništava sve izdate pristupe.
function sign(payload) {
  return crypto
    .createHmac('sha256', getLectureKey())
    .update(`predavanja|${process.env.PREDAVANJA_PASSWORD}|${payload}`)
    .digest('hex');
}

// Bez obzira na velika/mala slova i razmake oko šifre — učesnici je često kucaju na telefonu.
export function checkLecturePassword(input) {
  if (!isConfigured() || typeof input !== 'string') return false;
  const given = crypto.createHash('sha256').update(input.trim().toLowerCase()).digest();
  const expected = crypto.createHash('sha256').update(process.env.PREDAVANJA_PASSWORD.trim().toLowerCase()).digest();
  return crypto.timingSafeEqual(given, expected);
}

export function createLectureToken() {
  const payload = JSON.stringify({ exp: Date.now() + LECTURE_COOKIE_MAX_AGE * 1000 });
  const encoded = Buffer.from(payload).toString('base64url');
  return `${encoded}.${sign(encoded)}`;
}

export function verifyLectureToken(token) {
  if (!token || !isConfigured()) return false;
  const [encoded, sig] = token.split('.');
  if (!encoded || !sig) return false;

  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(sign(encoded));
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
    return false;
  }

  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString());
    return typeof payload.exp === 'number' && payload.exp > Date.now();
  } catch {
    return false;
  }
}
