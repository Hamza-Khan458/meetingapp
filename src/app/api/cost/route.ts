import { NextResponse } from "next/server";
import { calculateMeetingCost } from "@/lib/cost";

export async function POST(req: Request) {
  const payload = await req.json();
  const input = {
    durationMinutes: Number(payload?.durationMinutes ?? 0),
    attendeeCount: Number(payload?.attendeeCount ?? 0),
    hourlyRate: Number(payload?.hourlyRate ?? 0),
    frequencyPerMonth: Number(payload?.frequencyPerMonth ?? 0),
  };

  const result = calculateMeetingCost(input);
  return NextResponse.json(result);
}
