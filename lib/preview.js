import { draftMode } from 'next/headers';

// Admin pregled: nove izmene vidi samo ulogovani admin. Koristi Next.js draft mode, koji
// se uključuje pri admin prijavi (app/api/admin/login) i isključuje pri odjavi. Obični
// posetioci dobijaju postojeće statičke stranice.
//
// Kad se izmena pusti javno ("spoji"): ukloni njenu isPreview() granu, a njen CSS prebaci
// iz public/assets/css/preview.css u ihis.css.
export function isPreview() {
  return draftMode().isEnabled;
}

// Bezbedna povratna adresa posle uključivanja/isključivanja pregleda (samo putanje na sajtu).
export function safeRedirect(path) {
  return typeof path === 'string' && path.startsWith('/') && !path.startsWith('//') ? path : '/rs';
}
