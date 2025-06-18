import type { Metadata } from "next";
import KontakSection from "../components/kontak-section";
import CTASectiom from "../components/CTASection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "#1 Jasa Account Premium Terpecaya & Pembuatan Website Modern GTA",
  description:
    "Hubungi tim JAWA Store untuk informasi lebih lanjut tentang layanan akun premium dan pembuatan website.",
  openGraph: {
    title: "Kontak Kami - JAWA Store",
    description:
      "Hubungi tim JAWA Store untuk informasi lebih lanjut tentang layanan akun premium dan pembuatan website.",
    url: "https://jawastore.biz.id/kontak",
  },
};

export default function KontakPage() {
  return (
    <main>
      <Navbar />
      <KontakSection />
      <CTASectiom />
      <Footer />
    </main>
  );
}
