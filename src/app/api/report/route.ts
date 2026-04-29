import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Missing Supabase configuration" },
      { status: 500 }
    );
  }

  const response = await fetch(`${supabaseUrl}/functions/v1/report-pdf`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${serviceRoleKey}`,
      apikey: serviceRoleKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text();
    return NextResponse.json(
      { error: "Report generation failed", details },
      { status: response.status }
    );
  }

  const pdfBuffer = await response.arrayBuffer();
  return new Response(pdfBuffer, {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": "inline; filename=meeting-report.pdf",
    },
  });
}
