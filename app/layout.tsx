import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ColorCraft — Premium Color Tools for Designers",
  description:
    "Generate beautiful color palettes, gradients, and check contrast ratios. Free premium color tools built for modern designers and developers.",
  keywords: [
    "color palette generator",
    "gradient generator",
    "color contrast checker",
    "design tools",
    "web design",
    "color picker",
  ],
  openGraph: {
    title: "ColorCraft — Premium Color Tools",
    description: "Generate beautiful color palettes, gradients, and check contrast ratios.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColorCraft — Premium Color Tools",
    description: "Generate beautiful color palettes, gradients, and check contrast ratios.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-placeholder"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
