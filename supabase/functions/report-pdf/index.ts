import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { PDFDocument, StandardFonts, rgb } from "https://esm.sh/pdf-lib@1.17.1";

serve(async (req) => {
  try {
    const payload = await req.json();
    const title = payload?.title ?? "Meeting Cost Report";
    const summary = payload?.summary ?? "";
    const stats = Array.isArray(payload?.stats) ? payload.stats : [];

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText(title, { x: 50, y: 740, size: 22, font, color: rgb(0.1, 0.1, 0.2) });
    page.drawText(summary, { x: 50, y: 700, size: 12, font, color: rgb(0.2, 0.2, 0.3) });

    let y = 660;
    for (const item of stats) {
      const label = String(item?.label ?? "Metric");
      const value = String(item?.value ?? "");
      page.drawText(`${label}: ${value}`, { x: 50, y, size: 12, font, color: rgb(0.1, 0.2, 0.2) });
      y -= 20;
    }

    const pdfBytes = await pdfDoc.save();
    return new Response(pdfBytes, {
      headers: {
        "content-type": "application/pdf",
        "content-disposition": "inline; filename=meeting-report.pdf",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to generate PDF" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
});
