import { NextResponse } from 'next/server';
import { createSessionToken, ADMIN_COOKIE_NAME, ADMIN_COOKIE_MAX_AGE } from '../../../../lib/adminAuth';

export async function POST(request) {
  const { username, password } = await request.json();

  const validUser = process.env.ADMIN_USER;
  const validPass = process.env.ADMIN_PASS;

  if (!validUser || !validPass || username !== validUser || password !== validPass) {
    return NextResponse.json({ error: 'Pogrešno korisničko ime ili lozinka.' }, { status: 401 });
  }

  const token = createSessionToken(username);
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
