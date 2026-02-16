import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Lee Bhaskaran | Voice Actor · Musician · Actor",
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
    title: "Ryan Lee Bhaskaran | Voice Actor · Musician · Actor",
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
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
