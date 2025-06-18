import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "JAWA Store - Jasa Account Premium & Website Modern",
  description:
    "JAWA Store menyediakan jasa pembuatan website modern dan layanan akun premium berkualitas dengan tema gaming GTA.",
  keywords: [
    "JAWA Store",
    "jasa website GTA",
    "akun premium GTA",
    "jasa digital",
    "website modern",
    "layanan akun premium",
    "web GTA",
  ],
  icons: {
    icon: "/logo/logo.ico",
    shortcut: "/logo/logo.ico",
    apple: "/logo/logo.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo/logo.ico",
    },
  },
  openGraph: {
    title: "#1 Jasa Account Premium Terpecaya & Pembuatan Website Modern GTA",
    description:
      "JAWA Store hadir untuk kebutuhan digital Anda: akun premium dan website modern dengan desain menarik dan responsif.",
    url: "https://jawastore.biz.id",
    siteName: "JAWA Store",
    images: [
      {
        url: "/logo/logo.ico",
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
    images: ["/logo/logo.ico"],
  },
  metadataBase: new URL("https://jawastore.biz.id"),
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const timestamp = Date.now();
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JAWA Store",
    url: "https://jawastore.biz.id",
    logo: "https://jawastore.biz.id/logo/logo.ico",
    description:
      "JAWA Store menyediakan jasa pembuatan website modern dan akun premium dengan tema gaming GTA.",
    sameAs: [
      "https://instagram.com/jawastore.biz.id", // ganti dengan akun kamu
      "https://chat.whatsapp.com/GxC5EAAZxqy5ynDYsIaPnb",         // ganti juga dengan nomor WA JAWA Store
    ],
  };

  return (
    <html lang="id">
      <head>
        <link
          rel="icon"
          type="image/png"
          href={`/logo/logo.ico?v=${timestamp}`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/logo/logo.ico?v=${timestamp}`}
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href={`/logo/logo.ico?v=${timestamp}`}
        />
        <link rel="canonical" href="https://jawastore.biz.id" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content={`/logo/logo.ico?v=${timestamp}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Analytics />
        {/* <LiveChatWidget /> */}
      </body>
    </html>
  );
}
