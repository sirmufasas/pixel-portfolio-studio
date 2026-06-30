
-- Roles
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "Users can view their own roles"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id or public.has_role(auth.uid(), 'admin'));

create policy "Admins can manage roles"
  on public.user_roles for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- Companies
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  tag text not null,
  url text not null,
  image_url text,
  blurb text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select on public.companies to anon;
grant select on public.companies to authenticated;
grant insert, update, delete on public.companies to authenticated;
grant all on public.companies to service_role;

alter table public.companies enable row level security;

create policy "Companies are viewable by everyone"
  on public.companies for select
  to anon, authenticated
  using (true);

create policy "Only admins can insert companies"
  on public.companies for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Only admins can update companies"
  on public.companies for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Only admins can delete companies"
  on public.companies for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger companies_set_updated_at
  before update on public.companies
  for each row execute function public.set_updated_at();

-- Seed two known companies
insert into public.companies (name, tag, url, image_url, blurb, sort_order) values
  ('Kim''s Glam Lab', 'Beauty & Cosmetics', 'https://kimsglamlab.netlify.app/', 'https://kimsglamlab.netlify.app/', 'A premium beauty studio dedicated to helping clients elevate their glow. From makeup artistry to lash and brow services.', 1),
  ('Safeguard Security Solutions', 'Security & Protection', 'https://safeguardsecuritysolutions.netlify.app/', 'https://safeguardsecuritysolutions.netlify.app/', 'Professional security services protecting people, premises, and assets. Trained personnel, modern systems, total peace of mind.', 2);
