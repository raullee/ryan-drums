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
  title: "Ryan Lee Bhaskaran | Drummer · Teacher · Performer",
  description:
    "Professional drum teacher and session drummer based in Malaysia. Available for lessons, studio sessions, live performances, and event bookings.",
  keywords: [
    "drummer",
    "drum teacher",
    "Malaysia",
    "Malaysia",
    "session drummer",
    "drum lessons",
    "live performance",
  ],
  openGraph: {
    title: "Ryan Lee Bhaskaran | Drummer · Teacher · Performer",
    description:
      "Professional drum teacher and session drummer based in Malaysia.",
    type: "website",
    locale: "en_MY",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥁</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
