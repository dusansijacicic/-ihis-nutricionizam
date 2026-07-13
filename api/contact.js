const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Ime, email i poruka su obavezni.' });
    return;
  }

  const { error } = await supabase
    .from('messages')
    .insert([{ name, email, company: company || null, message }]);

  if (error) {
    res.status(500).json({ error: 'Greška pri čuvanju poruke.' });
    return;
  }

  res.status(200).json({ ok: true });
};
