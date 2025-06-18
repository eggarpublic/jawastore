import type { Metadata } from "next";
import JasaWebsite from "../components/JasaWebsite";
import CTASectiom from "../components/CTASection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "#1 Jasa Account Premium Terpecaya & Pembuatan Website Modern GTA",
  description:
    "Dapatkan website modern dan responsif untuk bisnis Anda dengan layanan pembuatan website dari JAWA Store.",
  openGraph: {
    title: "Jasa Website Modern - JAWA Store",
    description:
      "Dapatkan website modern dan responsif untuk bisnis Anda dengan layanan pembuatan website dari JAWA Store.",
    url: "https://jawastore.biz.id/jasawebsite",
  },
};

export default function JasaWebsitePage() {
  return (
    <main>
      <Navbar />
      <JasaWebsite />
      <CTASectiom />
      <Footer />
    </main>
  );
}
