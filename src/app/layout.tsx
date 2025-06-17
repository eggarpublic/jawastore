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
  title: "JAWA Store - Jasa Account Premium & Website Modern",
  description:
    "JAWA Store menyediakan jasa pembuatan website modern dan layanan akun premium berkualitas dengan tema gaming GTA.",
  icons: {
    icon: "/logo/logo.ico",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo/logo.png",
    },
  },
  openGraph: {
    title: "JAWA Store - Jasa Account Premium & Website Modern",
    description:
      "JAWA Store hadir untuk kebutuhan digital Anda: akun premium dan website modern dengan desain menarik dan responsif.",
    url: "https://jawastore.biz.id",
    siteName: "JAWA Store",
    images: [
      {
        url: "/logo/logo.png",
        width: 800,
        height: 600,
        alt: "JAWA Store Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAWA Store - Jasa Digital Premium",
    description: "Layanan akun premium dan website modern bertema GTA.",
    images: ["/logo/logo.png"],
  },
  metadataBase: new URL("https://jawastore.biz.id"),
  robots: "index, follow",
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
