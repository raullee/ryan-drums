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
  title: "Ryan Lee Bhaskaran | Voice Actor · Musician · Actor · Educator",
  description:
    "Malaysian voice actor behind iconic characters — Gopal (BoBoiBoy), Robin (Teen Titans), Finn (Adventure Time), Ron Stoppable (Kim Possible). Drummer, actor, and educator.",
  keywords: [
    "voice actor",
    "Malaysian voice actor",
    "BoBoiBoy",
    "Gopal voice actor",
    "drummer",
    "session musician",
    "Malaysia",
    "Ryan Lee Bhaskaran",
  ],
  openGraph: {
    title: "Ryan Lee Bhaskaran | Voice Actor · Musician · Actor · Educator",
    description:
      "The voice behind Gopal, Robin, Finn the Human, Ron Stoppable & more. Musician, actor, educator, aspiring polymath.",
    type: "website",
    locale: "en_MY",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎙️</text></svg>",
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
