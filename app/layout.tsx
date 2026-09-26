import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boys' Night Out — Cebu City",
  description: "Christmas party weekend, December 18–20, 2026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
