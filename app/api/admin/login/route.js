import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';
import { createSessionToken, ADMIN_COOKIE_NAME, ADMIN_COOKIE_MAX_AGE } from '../../../../lib/adminAuth';

// Dodatni admin nalozi sa istom lozinkom (ADMIN_PASS). Korisničko ime nije tajna
// (deo je javne mejl adrese), tajna je samo lozinka.
const EXTRA_ADMIN_USERS = ['danica.zaric'];

const normalize = (name) => (typeof name === 'string' ? name.trim().toLowerCase() : '');

export async function POST(request) {
  const { username, password } = await request.json();

  const validPass = process.env.ADMIN_PASS;
  const validUsers = [process.env.ADMIN_USER, ...EXTRA_ADMIN_USERS].filter(Boolean).map(normalize);
  const user = normalize(username);

  if (!process.env.ADMIN_USER || !validPass || !validUsers.includes(user) || password !== validPass) {
    return NextResponse.json({ error: 'Pogrešno korisničko ime ili lozinka.' }, { status: 401 });
  }

  // Admin odmah vidi i nove izmene koje još nisu javne (vidi lib/preview.js).
  draftMode().enable();

  const token = createSessionToken(user);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });
  return res;
}
