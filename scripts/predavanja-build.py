"""Pretvara PDF prezentacije u šifrovane slajdove za zaštićenu stranicu predavanja.

Svaka strana PDF-a se renderuje u WebP (širina 1600px) i šifruje AES-256-GCM
ključem PREDAVANJA_KEY (64 hex znaka, isti kao na Vercelu). Originalni PDF
nikad ne ide na sajt; server dešifruje slajd tek kad posetilac unese šifru
(vidi app/api/predavanja/[conf]/[deck]/[page]/route.js).

Format fajla: 12 bajtova nonce + šifrat + 16 bajtova GCM tag.
AAD: "<savetovanje>/<prezentacija>/<strana>", da slajd ne može da se podmetne
pod drugu putanju.

Upotreba (ključ se čita iz okruženja ili iz .env.local):
    pip install pypdfium2 pillow cryptography
    python scripts/predavanja-build.py "<folder sa PDF-ovima>" 13

PDF-ovi se ređaju po broju na početku imena ("1. ...", "2. ...") i dobijaju
id 1, 2, 3... Skripta ispisuje broj strana po prezentaciji za
lib/content/predavanja.js.
"""

import io
import os
import re
import shutil
import sys

import pypdfium2 as pdfium
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIDTH = 1600
QUALITY = 80


def load_key():
    key = os.environ.get('PREDAVANJA_KEY')
    env_file = os.path.join(ROOT, '.env.local')
    if not key and os.path.exists(env_file):
        with open(env_file, encoding='utf-8') as f:
            for line in f:
                if line.startswith('PREDAVANJA_KEY='):
                    key = line.split('=', 1)[1].strip()
    if not key or not re.fullmatch(r'[0-9a-fA-F]{64}', key):
        sys.exit('PREDAVANJA_KEY nije podešen (64 hex znaka).')
    return bytes.fromhex(key)


def leading_number(name):
    m = re.match(r'\s*(\d+)', name)
    return int(m.group(1)) if m else 10**6


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    sys.stdout.reconfigure(encoding='utf-8')
    src, conf = sys.argv[1], sys.argv[2]
    aes = AESGCM(load_key())

    pdfs = sorted((f for f in os.listdir(src) if f.lower().endswith('.pdf')), key=leading_number)
    out_root = os.path.join(ROOT, 'private', 'predavanja', conf)
    if os.path.exists(out_root):
        shutil.rmtree(out_root)

    for deck, name in enumerate(pdfs, start=1):
        pdf = pdfium.PdfDocument(os.path.join(src, name))
        out_dir = os.path.join(out_root, str(deck))
        os.makedirs(out_dir)
        for i, page in enumerate(pdf, start=1):
            img = page.render(scale=WIDTH / page.get_width()).to_pil().convert('RGB')
            buf = io.BytesIO()
            img.save(buf, 'WEBP', quality=QUALITY, method=6)
            nonce = os.urandom(12)
            aad = f'{conf}/{deck}/{i}'.encode()
            with open(os.path.join(out_dir, f'{i}.enc'), 'wb') as f:
                f.write(nonce + aes.encrypt(nonce, buf.getvalue(), aad))
        print(f'{deck}: {len(pdf)} strana  ({name})')


if __name__ == '__main__':
    main()
