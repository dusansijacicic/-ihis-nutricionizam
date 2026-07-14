create table if not exists messages (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  message text not null
);

alter table messages enable row level security;
