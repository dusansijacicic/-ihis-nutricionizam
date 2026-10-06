import { NextResponse } from 'next/server';
import {
  checkLecturePassword,
  createLectureToken,
  LECTURE_COOKIE_NAME,
  LECTURE_COOKIE_MAX_AGE,
} from '../../../../lib/predavanja';

export async function POST(request) {
  const { password } = await request.json().catch(() => ({}));

  if (!checkLecturePassword(password)) {
    return NextResponse.json({ error: 'Pogrešna šifra.' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(LECTURE_COOKIE_NAME, createLectureToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: LECTURE_COOKIE_MAX_AGE,
  });
  return res;
}
