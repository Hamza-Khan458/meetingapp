-- Core orgs and users
create extension if not exists "uuid-ossp";

create type membership_role as enum ('owner', 'admin', 'analyst', 'viewer');

create table organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  created_at timestamptz not null default now()
);

create table profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  email text,
  created_at timestamptz not null default now()
);

create table org_memberships (
  id uuid primary key default uuid_generate_v4(),
  org_id uuid not null references organizations on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  role membership_role not null default 'viewer',
  created_at timestamptz not null default now(),
  unique (org_id, user_id)
);

create table teams (
  id uuid primary key default uuid_generate_v4(),
  org_id uuid not null references organizations on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create table team_memberships (
  id uuid primary key default uuid_generate_v4(),
  team_id uuid not null references teams on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  created_at timestamptz not null default now(),
  unique (team_id, user_id)
);

create table meetings (
  id uuid primary key default uuid_generate_v4(),
  org_id uuid not null references organizations on delete cascade,
  team_id uuid references teams on delete set null,
  title text,
  meeting_type text,
  source text,
  organizer_id uuid references auth.users on delete set null,
  start_at timestamptz not null,
  end_at timestamptz not null,
  duration_minutes integer not null,
  attendee_count integer not null,
  created_at timestamptz not null default now()
);

create table meeting_attendees (
  id uuid primary key default uuid_generate_v4(),
  meeting_id uuid not null references meetings on delete cascade,
  user_id uuid references auth.users on delete set null,
  role_title text,
  hourly_rate numeric,
  cost numeric,
  created_at timestamptz not null default now()
);

create table meeting_metrics (
  id uuid primary key default uuid_generate_v4(),
  org_id uuid not null references organizations on delete cascade,
  period_start date not null,
  period_end date not null,
  meeting_count integer not null,
  total_minutes integer not null,
  total_cost numeric not null,
  created_at timestamptz not null default now(),
  unique (org_id, period_start, period_end)
);

create table calculation_scenarios (
  id uuid primary key default uuid_generate_v4(),
  org_id uuid not null references organizations on delete cascade,
  name text not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create or replace function has_org_access(target_org uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from org_memberships m
    where m.org_id = target_org and m.user_id = auth.uid()
  );
$$;

alter table organizations enable row level security;
alter table profiles enable row level security;
alter table org_memberships enable row level security;
alter table teams enable row level security;
alter table team_memberships enable row level security;
alter table meetings enable row level security;
alter table meeting_attendees enable row level security;
alter table meeting_metrics enable row level security;
alter table calculation_scenarios enable row level security;

create policy "org read" on organizations
  for select using (has_org_access(id));

create policy "org write" on organizations
  for insert with check (true);

create policy "profile read" on profiles
  for select using (id = auth.uid());

create policy "membership read" on org_memberships
  for select using (user_id = auth.uid());

create policy "membership write" on org_memberships
  for insert with check (user_id = auth.uid());

create policy "team access" on teams
  for all using (has_org_access(org_id)) with check (has_org_access(org_id));

create policy "team member access" on team_memberships
  for all using (
    exists (
      select 1
      from teams t
      where t.id = team_id and has_org_access(t.org_id)
    )
  ) with check (
    exists (
      select 1
      from teams t
      where t.id = team_id and has_org_access(t.org_id)
    )
  );

create policy "meeting access" on meetings
  for all using (has_org_access(org_id)) with check (has_org_access(org_id));

create policy "attendee access" on meeting_attendees
  for all using (
    exists (
      select 1
      from meetings m
      where m.id = meeting_id and has_org_access(m.org_id)
    )
  ) with check (
    exists (
      select 1
      from meetings m
      where m.id = meeting_id and has_org_access(m.org_id)
    )
  );

create policy "metrics access" on meeting_metrics
  for all using (has_org_access(org_id)) with check (has_org_access(org_id));

create policy "scenario access" on calculation_scenarios
  for all using (has_org_access(org_id)) with check (has_org_access(org_id));
