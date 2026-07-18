import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const EVENTS = {
  '12-savetovanje': 'LECTURE_CODE_12_SAVETOVANJE',
  '9-savetovanje': 'LECTURE_CODE_9_SAVETOVANJE',
};

function leadingNumber(filename) {
  const m = filename.match(/^(\d+)/);
  return m ? parseInt(m[1], 10) : 999;
}

export async function POST(request) {
  const { event, code } = await request.json();

  const envVar = EVENTS[event];
  if (!envVar) {
    return NextResponse.json({ error: 'Nepoznato savetovanje.' }, { status: 400 });
  }

  const expected = process.env[envVar];
  if (!expected || !code || code !== expected) {
    return NextResponse.json({ error: 'Netačna šifra.' }, { status: 401 });
  }

  const dir = path.join(process.cwd(), 'public', 'assets', 'docs', event);
  let filenames = [];
  try {
    filenames = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.pdf'));
  } catch {
    filenames = [];
  }
  filenames.sort((a, b) => leadingNumber(a) - leadingNumber(b));

  const files = filenames.map((f) => ({
    title: f.replace(/\.pdf$/i, ''),
    href: `/assets/docs/${event}/${encodeURIComponent(f)}`,
  }));

  return NextResponse.json({ files });
}
