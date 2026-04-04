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
