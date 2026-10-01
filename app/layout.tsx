import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nest Realty — Boutique Residential Brokerage",
  description:
    "Discover your dream home with Nest Realty. Boutique residential real estate brokerage serving curated neighborhoods with expertise and care.",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://mkt-nest-realty.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-100 text-foreground">
        {children}
      </body>
    </html>
  );
}