import type { Metadata } from "next";
import Live from "../components/live";


export const metadata: Metadata = {
  title: "#1 Jasa Account Premium Terpecaya & Pembuatan Website Modern GTA",
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
      <Live />

    </main>
  );
}
