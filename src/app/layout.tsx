import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
// import LiveChatWidget from "./components/live-chat-widget";
// import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "JAWA Store - Jasa Account Premium & Website Modern Terbaik",
  description:
    "JAWA Store penyedia jasa pembuatan website modern & akun premium gaming (GTA, Spotify, Netflix) terpercaya. Desain responsif, harga terjangkau, pelayanan 24 jam.",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan website modern",
    "jasa pembuatan website modern gta",
    "akun premium murah",
    "akun premium netflix",
    "akun GTA premium",
    "website modern",
    "jasa website profesional"
  ].join(", "),
  icons: {
    icon: "/logo/logo.ico",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  openGraph: {
    title: "JAWA Store - Solusi Digital Premium Anda",
    description: "Jasa buat Website modern Gta & akun premium gaming dengan garansi resmi.",
    url: "https://jawastore.biz.id",
    siteName: "JAWA Store",
    images: [
      {
        url: "https://jawastore.biz.id/gambar/gambarleading.png",
        width: 1200,
        height: 630,
        alt: "JAWA Store - Layanan Digital Premium",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAWA Store - Akun Premium & Jasa Website",
    description: "Garansi resmi 100% untuk semua layanan digital kami.",
    images: ["https://jawastore.biz.id/logo/twitter-banner.jpg"],
    creator: "@jawastore_id",
  },
  metadataBase: new URL("https://jawastore.biz.id"),
  alternates: {
    canonical: "https://jawastore.biz.id",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Force favicon refresh by adding timestamp
  const timestamp = Date.now();
  return (
    <html lang="id">
      <head>
        <link
          rel="icon"
          type="image/png"
          href={`/logo/logo.png?v=${timestamp}`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/logo/logo.png?v=${timestamp}`}
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href={`/logo/logo.png?v=${timestamp}`}
        />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content={`/logo/logo.png?v=${timestamp}`}
        />
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Analytics />
        {/* <LiveChatWidget />
         */}
      </body>
    </html>
  );
}
