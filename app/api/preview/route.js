import { cookies, draftMode } from 'next/headers';
import { NextResponse } from 'next/server';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '../../../lib/adminAuth';
import { safeRedirect } from '../../../lib/preview';

// /api/preview?mode=on|off&redirect=/rs — uključuje admin pregled (samo uz admin prijavu)
// ili ga isključuje, pa vraća na zadatu stranicu.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const target = new URL(safeRedirect(searchParams.get('redirect')), request.url);

  if (searchParams.get('mode') === 'off') {
    draftMode().disable();
    return NextResponse.redirect(target);
  }

  if (!verifySessionToken(cookies().get(ADMIN_COOKIE_NAME)?.value)) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  draftMode().enable();
  return NextResponse.redirect(target);
}
