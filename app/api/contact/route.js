import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { name, email, company, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Ime, email i poruka su obavezni.' }, { status: 400 });
  }

  const { error } = await supabase
    .from('messages')
    .insert([{ name, email, company: company || null, message }]);

  if (error) {
    return NextResponse.json({ error: 'Greška pri čuvanju poruke.' }, { status: 500 });
  }

  let emailDebug = null; // ajd sadfixfi

  if (process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFY_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const result = await resend.emails.send({
        from: 'IHIS Nutricionizam <onboarding@resend.dev>',
        to: process.env.CONTACT_NOTIFY_EMAIL,
        replyTo: email,
        subject: `Nova poruka sa sajta — ${name}`,
        text: `Ime: ${name}\nEmail: ${email}\nKompanija: ${company || '-'}\n\nPoruka:\n${message}`,
      });
      emailDebug = { sent: true, result };
    } catch (emailError) {
      console.error('Resend notification failed:', emailError);
      emailDebug = { sent: false, error: emailError?.message || String(emailError) };
    }
  } else {
    emailDebug = { sent: false, error: 'RESEND_API_KEY or CONTACT_NOTIFY_EMAIL missing' };
  }

  return NextResponse.json({ ok: true, emailDebug });
}
