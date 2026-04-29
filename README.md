# Meeting Cost Calculator & Time Analytics Dashboard

Full-stack SaaS to quantify meeting cost, reveal time waste, and generate ROI-focused analytics for teams.

## Tech Stack

- Frontend: Next.js (App Router) + Tailwind CSS + TypeScript
- Backend: Supabase (Auth, Postgres, Storage, Edge Functions)
- Deploy: Vercel (frontend) + Supabase (backend)
- Charts: Chart.js (client) or lightweight server aggregation

## Architecture Overview

- Web app reads aggregated metrics from Supabase via typed client helpers.
- Edge Functions handle server-side PDF export and scheduled rollups.
- Postgres stores meetings, attendees, orgs, roles, and computed analytics.
- Row Level Security enforces multi-tenant isolation.

## Folder Structure

```
src/
	app/
		(marketing)/
		(app)/
	components/
		marketing/
		dashboard/
	data/
	lib/
		supabase/
```

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
