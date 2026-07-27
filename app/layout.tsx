import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Caustic — The Toxic Trapper | Apex Legends";
const description =
  "An unofficial fan-made dossier on Alexander Nox — Caustic, Apex Legends' sadistic atmospheric chemist who turns the battlefield into a death trap of Nox gas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["Caustic", "Apex Legends", "Alexander Nox", "Nox Gas", "Legend guide"],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ja_JP",
    siteName: "Caustic — The Toxic Trapper",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
