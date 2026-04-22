import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HNB BASE HOSPITAL — NABH Onsite Assessment Presentation | 24–26 April 2026",
  description: "HNB BASE HOSPITAL | NABH ONSITE ASSESSMENT PRESENTATION | 24-26 April 2026",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "HNB BASE HOSPITAL",
    description: "NABH ONSITE ASSESSMENT PRESENTATION\n24-26 April 2026",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HNB BASE HOSPITAL",
    description: "NABH ONSITE ASSESSMENT PRESENTATION | 24-26 April 2026",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
