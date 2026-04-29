import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Meeting Cost Calculator & Time Analytics Dashboard",
  description:
    "Quantify meeting spend, track ROI, and uncover time waste across teams.",
  openGraph: {
    title: "Meeting Cost Calculator",
    description:
      "Meeting ROI analytics and cost forecasting for modern teams.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeting Cost Calculator",
    description:
      "Meeting ROI analytics and cost forecasting for modern teams.",
  },
  keywords: [
    "meeting cost calculator",
    "time analytics",
    "meeting roi",
    "productivity analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
