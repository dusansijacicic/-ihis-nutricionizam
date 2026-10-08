import { notFound } from 'next/navigation';

// Nepoznate adrese pod /rs prikazuju app/rs/not-found.js u izgledu sajta.
export default function NepostojecaStranica() {
  notFound();
}
