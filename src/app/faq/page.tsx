import type { Metadata } from "next";
import FAQSection from "../components/FAQSection";
import CTASectiom from "../components/CTASection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "FAQ - JAWA Store",
  description:
    "Temukan jawaban untuk pertanyaan umum tentang layanan akun premium dan pembuatan website di JAWA Store.",
  openGraph: {
    title: "FAQ - JAWA Store",
    description:
      "Temukan jawaban untuk pertanyaan umum tentang layanan akun premium dan pembuatan website di JAWA Store.",
    url: "https://jawastore.biz.id/faq",
  },
};

export default function FaqPage() {
  return (
    <main>
      <Navbar />
      <FAQSection />
      <CTASectiom />
      <Footer />
    </main>
  );
}
