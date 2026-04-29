import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  const payload = await req.json();

  const meeting = {
    org_id: payload?.org_id,
    team_id: payload?.team_id ?? null,
    title: payload?.title ?? null,
    meeting_type: payload?.meeting_type ?? null,
    source: payload?.source ?? null,
    organizer_id: payload?.organizer_id ?? null,
    start_at: payload?.start_at,
    end_at: payload?.end_at,
    duration_minutes: payload?.duration_minutes,
    attendee_count: payload?.attendee_count ?? 0,
  };

  const { data, error } = await supabaseAdmin
    .from("meetings")
    .insert(meeting)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ meeting: data });
}
