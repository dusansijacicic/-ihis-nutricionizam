'use client';

import { useRouter } from 'next/navigation';

export default function AdminLogoutButton() {
  const router = useRouter();

  async function onClick() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <button type="button" onClick={onClick} className="btn-ihis btn-ihis-dark">
      Odjavi se
    </button>
  );
}
