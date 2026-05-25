import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoFix Pro | Expert Auto Repair & Maintenance",
  description:
    "Expert auto repair in Madison. ASE-certified technicians, honest pricing, diagnostics. Brakes, engines, transmissions, and more.",
  openGraph: {
    title: "AutoFix Pro | Expert Auto Repair & Maintenance",
    description:
      "Professional auto repair in Madison. ASE-certified, transparent pricing, fast service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
