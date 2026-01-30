import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import TrackingHandler from "@/components/TrackingHandler";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Tax | AssureRates",
  description: "Tax solutions and resources for the USA market. Compare tax rates, get expert guidance, and save on your taxes with AssureRates.",
  keywords: "tax, USA tax, tax rates, tax solutions, tax comparison, federal tax, state tax, AssureRates USA",
  authors: [{ name: "AssureRates" }],
  robots: "index, follow",
  openGraph: {
    title: "Tax Solutions for USA | AssureRates",
    description: "Tax solutions and resources for the USA market. Compare tax rates, get expert guidance, and save on your taxes with AssureRates.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//quote.assurerates.com" />
        <link rel="dns-prefetch" href="//vercel-analytics.com" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />
        <link rel="preload" href="/landing-illustration.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/Logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body
        className={`${mulish.variable} antialiased h-full`}
        suppressHydrationWarning={true}
      >
        <TrackingHandler />
        {children}
        <Analytics />
        <SpeedInsights 
          sampleRate={1}
        />
      </body>
    </html>
  );
}
