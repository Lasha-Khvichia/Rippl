import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional, for CSS var usage
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rippl — Where Every Moment Creates a Ripple",
    template: "%s | Rippl",
  },
  description:
    "Rippl — the social platform where every moment creates a ripple. Share posts, videos, reels, go live, connect with friends, and watch your world spread further.",
  metadataBase: new URL("https://rippl.app"),
  openGraph: {
    title: "Rippl — Where Every Moment Creates a Ripple",
    description:
      "Share posts, videos, reels, go live, and connect with people who matter. Your moment starts here.",
    url: "https://rippl.app",
    siteName: "Rippl",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rippl — Social Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rippl — Where Every Moment Creates a Ripple",
    description:
      "Share posts, videos, reels, go live, and connect with people who matter. Your moment starts here.",
    images: ["/twitter-image.jpg"],
  },
  keywords: ["social media", "reels", "live streaming", "connect", "rippl"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
