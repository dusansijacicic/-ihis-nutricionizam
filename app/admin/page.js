import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '../../lib/adminAuth';
import AdminLogoutButton from '../../components/AdminLogoutButton';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    redirect('/admin/login');
  }

  let messages = [];
  let registrations = [];
  let loadError = false;

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const [messagesRes, registrationsRes] = await Promise.all([
      supabase.from('messages').select('*').order('created_at', { ascending: false }),
      supabase.from('registrations').select('*').order('created_at', { ascending: false }),
    ]);
    messages = messagesRes.data || [];
    registrations = registrationsRes.data || [];
    loadError = Boolean(messagesRes.error || registrationsRes.error);
  } else {
    loadError = true;
  }

  return (
    <div className="admin-wrap">
      <div className="admin-header">
        <h1>Admin panel — IHIS Nutricionizam</h1>
        <AdminLogoutButton />
      </div>

      {loadError && (
        <p className="reg-msg reg-msg--err">
          Greška pri učitavanju podataka. Proveri da li su SUPABASE_URL i SUPABASE_SERVICE_ROLE_KEY podešeni i da li tabele (messages, registrations) postoje.
        </p>
      )}

      <section className="admin-section">
        <h2>Poruke sa kontakt forme ({messages.length})</h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Ime</th>
                <th>Email</th>
                <th>Kompanija</th>
                <th>Poruka</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((m) => (
                <tr key={m.id}>
                  <td>{new Date(m.created_at).toLocaleString('sr-RS')}</td>
                  <td>{m.name}</td>
                  <td><a href={`mailto:${m.email}`}>{m.email}</a></td>
                  <td>{m.company || '—'}</td>
                  <td>{m.message}</td>
                </tr>
              ))}
              {messages.length === 0 && (
                <tr><td colSpan={5}>Još uvek nema poruka.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="admin-section">
        <h2>Prijave za savetovanje ({registrations.length})</h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Ime i prezime</th>
                <th>Kompanija</th>
                <th>PIB</th>
                <th>Adresa</th>
                <th>Telefon</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r) => (
                <tr key={r.id}>
                  <td>{new Date(r.created_at).toLocaleString('sr-RS')}</td>
                  <td>{r.name}</td>
                  <td>{r.company || '—'}</td>
                  <td>{r.pib || '—'}</td>
                  <td>{r.address || '—'}</td>
                  <td>{r.phone || '—'}</td>
                  <td><a href={`mailto:${r.email}`}>{r.email}</a></td>
                </tr>
              ))}
              {registrations.length === 0 && (
                <tr><td colSpan={7}>Još uvek nema prijava.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
