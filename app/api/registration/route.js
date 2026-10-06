import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { RADIONICA, RADIONICA_MESTA } from '../../../lib/content/radionica';

function clip(value, max = 300) {
  return typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : null;
}

// Prijava za radionicu o deklarisanju (forma na /rs/registration i /en/registration).
export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  const program = RADIONICA.sr.programs.find((p) => p.id === body.program);
  const name = clip(body.name);
  const email = clip(body.email);
  if (!program || !name || !email) {
    return NextResponse.json({ error: 'Radionica, ime i email su obavezni.' }, { status: 400 });
  }

  const participants = Number.parseInt(body.participants, 10);
  const registration = {
    program: program.name,
    participants: participants > 0 && participants < 1000 ? participants : null,
    location: Object.hasOwn(RADIONICA_MESTA, body.location) ? RADIONICA_MESTA[body.location].sr : null,
    dates: clip(body.dates, 1000),
    name,
    company: clip(body.company),
    pib: clip(body.pib),
    address: clip(body.address),
    phone: clip(body.phone),
    email,
  };

  let saved = false;
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const { error } = await supabase.from('workshop_registrations').insert([registration]);
    if (error) console.error('Saving workshop registration failed:', error);
    saved = !error;
  }

  let notified = false;
  if (process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFY_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: 'IHIS Nutricionizam <noreply@ihis-nutricionizam.rs>',
        to: process.env.CONTACT_NOTIFY_EMAIL,
        replyTo: email,
        subject: `Nova prijava za radionicu — ${name}`,
        text: [
          `Radionica: ${program.name} (${program.price})`,
          `Broj polaznika: ${registration.participants ?? '-'}`,
          `Mesto održavanja: ${registration.location || '-'}`,
          `Predlog termina: ${registration.dates || '-'}`,
          '',
          `Ime i prezime: ${name}`,
          `Firma: ${registration.company || '-'}`,
          `PIB: ${registration.pib || '-'}`,
          `Adresa: ${registration.address || '-'}`,
          `Telefon: ${registration.phone || '-'}`,
          `Email: ${email}`,
        ].join('\n'),
      });
      if (error) console.error('Resend workshop registration notification failed:', error);
      notified = !error;
    } catch (emailError) {
      console.error('Resend workshop registration notification failed:', emailError);
    }
  }

  // Prijava ne sme da se izgubi: dovoljno je da je sačuvana u bazi ili stigla mejlom.
  if (!saved && !notified) {
    return NextResponse.json({ error: 'Greška pri slanju prijave.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
