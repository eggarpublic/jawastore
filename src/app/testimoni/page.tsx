import type { Metadata } from "next";
import TestimoniSection from "../components/TestimoniSection";
import CTASectiom from "../components/CTASection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Testimoni - JAWA Store",
  description:
    "Lihat pengalaman dan testimoni dari pelanggan JAWA Store tentang layanan akun premium dan pembuatan website.",
  openGraph: {
    title: "Testimoni - JAWA Store",
    description:
      "Lihat pengalaman dan testimoni dari pelanggan JAWA Store tentang layanan akun premium dan pembuatan website.",
    url: "https://jawastore.biz.id/testimoni",
  },
};

export default function TestimoniPage() {
  return (
    <main>
      <Navbar />
      <TestimoniSection />
      <CTASectiom />
      <Footer />
    </main>
  );
}
