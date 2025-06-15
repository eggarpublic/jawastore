import type { Metadata } from "next";
import JasaAkun from "../components/JasaAkun";
import CTASectiom from "../components/CTASection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Jasa Akun Premium - JAWA Store",
  description:
    "Temukan berbagai akun premium berkualitas untuk kebutuhan digital Anda di JAWA Store.",
  openGraph: {
    title: "Jasa Akun Premium - JAWA Store",
    description:
      "Temukan berbagai akun premium berkualitas untuk kebutuhan digital Anda di JAWA Store.",
    url: "https://jawastore.biz.id/jasaakun",
  },
};

export default function JasaAkunPage() {
  return (
    <main>
      <Navbar />
      <JasaAkun />
      <CTASectiom />
      <Footer />
    </main>
  );
}
