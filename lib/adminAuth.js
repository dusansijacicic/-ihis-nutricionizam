import crypto from 'crypto';

export const ADMIN_COOKIE_NAME = 'admin_session';
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 dana

function sign(payload) {
  const secret = process.env.ADMIN_SESSION_SECRET || '';
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

export function createSessionToken(username) {
  const payload = JSON.stringify({ u: username, exp: Date.now() + ADMIN_COOKIE_MAX_AGE * 1000 });
  const encoded = Buffer.from(payload).toString('base64url');
  return `${encoded}.${sign(encoded)}`;
}

export function verifySessionToken(token) {
  if (!token || !process.env.ADMIN_SESSION_SECRET) return false;
  const [encoded, sig] = token.split('.');
  if (!encoded || !sig) return false;

  const expected = sign(encoded);
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
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
