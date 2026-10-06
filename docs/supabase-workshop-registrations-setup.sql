create table if not exists workshop_registrations (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  program text not null,
  participants integer,
  location text,
  dates text,
  name text not null,
  company text,
  pib text,
  address text,
  phone text,
  email text not null
);

alter table workshop_registrations enable row level security;
