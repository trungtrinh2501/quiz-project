import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What's Your Coffee Personality? | Basecamp Coffee",
  description:
    "Take the Basecamp Coffee personality quiz and discover your perfect brew.",
  openGraph: {
    title: "What's Your Coffee Personality?",
    description:
      "Answer 5 quick questions and discover your perfect Basecamp brew. Are you a Night Owl, Zen Minimalist, or Artisan Snob?",
    siteName: "Basecamp Coffee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What's Your Coffee Personality?",
    description:
      "Answer 5 quick questions and discover your perfect Basecamp brew.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}
