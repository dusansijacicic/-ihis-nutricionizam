import { notFound } from 'next/navigation';

// Unknown URLs under /en render app/en/not-found.js with the site layout.
export default function MissingPage() {
  notFound();
}
