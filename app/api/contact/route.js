import { createClient } from '@supabase/supabase-js';
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

  return NextResponse.json({ ok: true });
}
