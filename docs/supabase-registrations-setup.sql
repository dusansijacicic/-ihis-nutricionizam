create table if not exists registrations (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  pib text,
  address text,
  phone text,
  email text not null
);

alter table registrations enable row level security;
