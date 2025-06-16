"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Shield,
  Clock,
  CreditCard,
  Smartphone,
  Globe,
  Users,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { cn } from "../lib/utils";

const faqCategories = [
  { id: "all", name: "Semua", icon: <HelpCircle className="w-4 h-4" /> },
  { id: "akun", name: "Akun Premium", icon: <Shield className="w-4 h-4" /> },
  { id: "website", name: "Website", icon: <Globe className="w-4 h-4" /> },
  {
    id: "pembayaran",
    name: "Pembayaran",
    icon: <CreditCard className="w-4 h-4" />,
  },
  {
    id: "support",
    name: "Support",
    icon: <MessageCircle className="w-4 h-4" />,
  },
];

const faqs = [
  {
    id: 1,
    category: "akun",
    question: "Apakah akun yang dijual legal dan aman?",
    answer:
      "Ya! Semua akun kami 100% legal dan aman digunakan. Kami bekerja sama dengan penyedia resmi dan memastikan setiap akun aktif serta dapat langsung digunakan setelah pembelian. Semua akun dilengkapi dengan garansi penuh.",
    icon: <Shield className="w-5 h-5 text-[#00C8D7]" />,
    popular: true,
  },
  {
    id: 2,
    category: "website",
    question: "Apakah bisa request website custom sesuai keinginan?",
    answer:
      "Tentu saja! Kami menerima pembuatan website custom sesuai kebutuhan seperti toko online, portofolio, company profile, landing page, dan sistem web kompleks lainnya. Tim developer kami berpengalaman dalam berbagai teknologi modern.",
    icon: <Globe className="w-5 h-5 text-[#D9A154]" />,
    popular: true,
  },
  {
    id: 3,
    category: "website",
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Waktu pengerjaan bervariasi tergantung kompleksitas:\n• Landing Page: 2-3 hari\n• Company Profile: 3-5 hari\n• E-commerce: 7-14 hari\n• Custom System: 14-30 hari\n\nKami akan memberikan update progress secara berkala dan timeline yang jelas.",
    icon: <Clock className="w-5 h-5 text-[#A8743D]" />,
    popular: false,
  },
  {
    id: 4,
    category: "akun",
    question: "Apakah akun memiliki garansi jika bermasalah?",
    answer:
      "Ya! Kami menyediakan garansi komprehensif:\n• Garansi 7 hari untuk semua akun premium\n• Garansi 30 hari untuk akun VIP\n• Replacement gratis jika akun bermasalah\n• Refund 100% jika tidak dapat diperbaiki\n• Support 24/7 untuk troubleshooting",
    icon: <CheckCircle className="w-5 h-5 text-[#00C8D7]" />,
    popular: true,
  },
  {
    id: 5,
    category: "pembayaran",
    question: "Apa saja metode pembayaran yang tersedia?",
    answer:
      "Kami menerima berbagai metode pembayaran:\n• Transfer Bank (BCA, Mandiri, BRI, BNI)\n• E-Wallet (OVO, GoPay, DANA, ShopeePay)\n• QRIS (Semua aplikasi pembayaran)\n• Cryptocurrency (Bitcoin, Ethereum)\n• Pulsa (Telkomsel, XL, Indosat)\n• Kartu Kredit/Debit",
    icon: <CreditCard className="w-5 h-5 text-[#D9A154]" />,
    popular: false,
  },
  {
    id: 6,
    category: "support",
    question: "Bagaimana cara memesan jasa dan mendapat support?",
    answer:
      "Sangat mudah! Berikut langkah-langkahnya:\n1. Klik tombol WhatsApp atau form pemesanan\n2. Konsultasi gratis dengan admin\n3. Pilih paket yang sesuai kebutuhan\n4. Lakukan pembayaran\n5. Terima layanan berkualitas\n\nAdmin kami siap membantu 24/7 dengan response time < 5 menit!",
    icon: <Smartphone className="w-5 h-5 text-[#00C8D7]" />,
    popular: true,
  },
  {
    id: 7,
    category: "website",
    question: "Apakah website yang dibuat SEO-friendly dan mobile responsive?",
    answer:
      "Semua website yang kami buat sudah:\n• SEO-optimized dengan meta tags lengkap\n• Mobile responsive untuk semua device\n• Loading speed optimal (< 3 detik)\n• SSL certificate gratis\n• Google Analytics integration\n• Schema markup untuk better ranking",
    icon: <Globe className="w-5 h-5 text-[#D9A154]" />,
    popular: false,
  },
  {
    id: 8,
    category: "akun",
    question: "Berapa lama akun premium bisa digunakan?",
    answer:
      "Durasi akun bervariasi sesuai paket:\n• Akun Shared: 1-3 bulan\n• Akun Private: 6-12 bulan\n• Akun Lifetime: Selamanya (dengan syarat)\n\nSemua akun dilengkapi panduan penggunaan dan tips agar awet. Kami juga menyediakan renewal service dengan harga khusus.",
    icon: <Clock className="w-5 h-5 text-[#A8743D]" />,
    popular: false,
  },
  {
    id: 9,
    category: "pembayaran",
    question: "Apakah ada sistem cicilan atau diskon khusus?",
    answer:
      "Ya! Kami menyediakan berbagai penawaran menarik:\n• Diskon 10% untuk pembelian pertama\n• Cicilan 0% untuk website > 5 juta\n• Bundle discount untuk paket kombinasi\n• Loyalty program untuk customer setia\n• Promo spesial di hari-hari tertentu\n• Referral bonus hingga 20%",
    icon: <CreditCard className="w-5 h-5 text-[#D9A154]" />,
    popular: false,
  },
  {
    id: 10,
    category: "support",
    question: "Bagaimana jika ada masalah setelah pembelian?",
    answer:
      "Jangan khawatir! Kami memiliki sistem support terbaik:\n• Live chat 24/7 via WhatsApp\n• Ticket system untuk tracking issue\n• Remote assistance jika diperlukan\n• Video tutorial lengkap\n• Community support group\n• Dedicated account manager untuk VIP customer",
    icon: <Users className="w-5 h-5 text-[#00C8D7]" />,
    popular: false,
  },
];

// Partners data
const partners = [
  {
    id: 1,
    name: "Netflix",
    logo: "/assets/partners/netflix-logo.png",
    category: "Streaming",
  },
  {
    id: 2,
    name: "Disney+",
    logo: "/assets/partners/disney-logo.png",
    category: "Streaming",
  },
  {
    id: 3,
    name: "Canva",
    logo: "/assets/partners/canva-logo.png",
    category: "Design",
  },
  {
    id: 4,
    name: "Adobe",
    logo: "/assets/partners/adobe-logo.png",
    category: "Creative",
  },
  {
    id: 5,
    name: "Spotify",
    logo: "/assets/partners/spotify-logo.png",
    category: "Music",
  },
  {
    id: 6,
    name: "ExpressVPN",
    logo: "/assets/partners/expressvpn-logo.png",
    category: "VPN",
  },
  {
    id: 7,
    name: "ChatGPT",
    logo: "/assets/partners/chatgpt-logo.png",
    category: "AI",
  },
  {
    id: 8,
    name: "Figma",
    logo: "/assets/partners/figma-logo.png",
    category: "Design",
  },
  {
    id: 9,
    name: "Notion",
    logo: "/assets/partners/notion-logo.png",
    category: "Productivity",
  },
  {
    id: 10,
    name: "Grammarly",
    logo: "/assets/partners/grammarly-logo.png",
    category: "Writing",
  },
];

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  // Auto-scroll partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerSlide(
        (prev) => (prev + 1) % Math.ceil(partners.length / 5)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Filter FAQs based on category
  const filteredFAQs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] text-white overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/background/kotak.gif"
          alt="faq-background"
          fill
          className="object-cover"
        />
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/patterns/circuit-pattern.png')] opacity-5"></div>

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9A154] via-[#00C8D7] to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-[#D9A154] flex items-center justify-center mb-4">
            <HelpCircle className="mr-3 text-[#00C8D7]" />
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[#FFF8E7]/80 text-lg max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang
            layanan premium kami
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border",
                selectedCategory === category.id
                  ? "bg-[#D9A154] text-[#1A1A1A] border-[#D9A154] font-medium"
                  : "bg-[#2A2A2A] text-[#FFF8E7]/80 border-[#D9A154]/30 hover:bg-[#D9A154]/20 hover:border-[#D9A154]/50"
              )}>
              {category.icon}
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                "group relative bg-[#2A2A2A] rounded-xl border transition-all duration-300 overflow-hidden",
                openFAQ === faq.id
                  ? "border-[#D9A154] shadow-lg shadow-[#D9A154]/20"
                  : "border-[#D9A154]/20 hover:border-[#D9A154]/40"
              )}>
              {/* Popular badge */}
              {faq.popular && (
                <div className="absolute top-4 right-4 bg-[#00C8D7] text-[#1A1A1A] text-xs font-bold px-2 py-1 rounded z-10">
                  POPULER
                </div>
              )}

              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex items-start justify-between w-full text-left p-6 hover:bg-[#2A2A2A]/50 transition-colors duration-300">
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1">{faq.icon}</div>
                  <div>
                    <h3 className="font-medium text-[#FFF8E7] text-lg leading-relaxed pr-8">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4">
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-colors duration-300",
                      openFAQ === faq.id
                        ? "text-[#D9A154]"
                        : "text-[#FFF8E7]/60"
                    )}
                  />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="pl-9">
                        <div className="bg-[#1A1A1A]/50 rounded-lg p-4 border-l-4 border-[#D9A154]">
                          <p className="text-[#FFF8E7]/90 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D9A154]/5 to-[#00C8D7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="border-t border-[#D9A154]/20 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#D9A154] flex items-center justify-center mb-4">
              <Users className="mr-3 text-[#00C8D7]" />
              TRUSTED PARTNERS
            </h3>
            <p className="text-[#FFF8E7]/70 max-w-2xl mx-auto">
              Kami bekerja sama dengan platform terpercaya untuk memberikan
              layanan terbaik
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPartnerSlide * 100}%)`,
              }}>
              {Array.from({ length: Math.ceil(partners.length / 5) }).map(
                (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-5 gap-8">
                      {partners
                        .slice(slideIndex * 5, (slideIndex + 1) * 5)
                        .map((partner) => (
                          <motion.div
                            key={partner.id}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="group relative bg-[#2A2A2A] rounded-lg p-6 border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300">
                            <div className="relative h-16 w-full mb-3">
                              <Image
                                src={partner.logo || "/placeholder.svg"}
                                alt={partner.name}
                                fill
                                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                            </div>
                            <div className="text-center">
                              <h4 className="font-medium text-[#FFF8E7] text-sm mb-1">
                                {partner.name}
                              </h4>
                              <p className="text-[#FFF8E7]/60 text-xs">
                                {partner.category}
                              </p>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D9A154]/10 to-[#00C8D7]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </motion.div>

            {/* Partners indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(partners.length / 5) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPartnerSlide(index)}
                    className={cn(
                      "transition-all duration-300",
                      currentPartnerSlide === index
                        ? "w-8 h-3 bg-[#D9A154] rounded-full"
                        : "w-3 h-3 bg-[#FFF8E7]/30 rounded-full hover:bg-[#FFF8E7]/50"
                    )}
                    aria-label={`Go to partner slide ${index + 1}`}
                    title={`Go to partner slide ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-16">
          <p className="text-[#FFF8E7]/70 mb-6">
            Masih ada pertanyaan? Jangan ragu untuk menghubungi kami!
          </p>
          <a
            href="https://chat.whatsapp.com/GxC5EAAZxqy5ynDYsIaPnb?text=Halo%20min%2C%20saya%20ada%20pertanyaan%20tentang%20layanan%20JAWA%20Store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] font-bold rounded-lg hover:shadow-lg hover:shadow-[#D9A154]/30 transition-all duration-300 group">
            <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
            <span>Tanya Admin Sekarang</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
    </section>
  );
}
