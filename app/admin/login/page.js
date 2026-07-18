'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.error || 'Greška pri prijavi.');
        setLoading(false);
        return;
      }
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Greška pri prijavi.');
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-wrap">
      <form onSubmit={onSubmit} className="admin-login-form">
        <h1>Admin prijava</h1>
        <input
          type="text"
          className="cf-input cf-input--light"
          placeholder="Korisničko ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
        <input
          type="password"
          className="cf-input cf-input--light"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        <button type="submit" className="btn-ihis btn-ihis-color" disabled={loading}>
          {loading ? 'Prijava...' : 'Prijavi se'}
        </button>
        {error && <p className="reg-msg reg-msg--err">{error}</p>}
      </form>
    </div>
  );
}
