import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { name, company, pib, address, phone, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Ime i email su obavezni.' }, { status: 400 });
  }

  const { error } = await supabase
    .from('registrations')
    .insert([{ name, company: company || null, pib: pib || null, address: address || null, phone: phone || null, email }]);

  if (error) {
    return NextResponse.json({ error: 'Greška pri čuvanju prijave.' }, { status: 500 });
  }

  if (process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFY_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'IHIS Nutricionizam <onboarding@resend.dev>',
        to: process.env.CONTACT_NOTIFY_EMAIL,
        replyTo: email,
        subject: `Nova prijava za savetovanje — ${name}`,
        text: `Ime i prezime: ${name}\nKompanija: ${company || '-'}\nPIB: ${pib || '-'}\nAdresa: ${address || '-'}\nTelefon: ${phone || '-'}\nEmail: ${email}`,
      });
    } catch (emailError) {
      console.error('Resend registration notification failed:', emailError);
    }
  }

  return NextResponse.json({ ok: true });
}
