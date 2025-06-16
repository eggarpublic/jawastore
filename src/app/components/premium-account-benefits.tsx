"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import {
  Lock,
  Ban,
  Brain,
  Shield,
  Zap,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  X,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { cn } from "../lib/utils";

// Premium account benefits data
const benefits = [
  {
    icon: <Lock className="w-6 h-6" />,
    emoji: "🔓",
    title: "Full Akses Tanpa Batas",
    description:
      "Bebas nikmati semua fitur premium tanpa blokir atau limit – tinggal pakai!",
    color: "from-blue-500/20 to-blue-600/10",
    hoverColor: "group-hover:text-blue-500",
  },
  {
    icon: <Ban className="w-6 h-6" />,
    emoji: "💻",
    title: "Tanpa Iklan Mengganggu",
    description:
      "Nonton, kerja, atau belajar tanpa gangguan iklan. Lebih fokus dan nyaman.",
    color: "from-red-500/20 to-red-600/10",
    hoverColor: "group-hover:text-red-500",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    emoji: "🧠",
    title: "AI & Tools Premium",
    description:
      "Akses Canva Pro, Grammarly, ChatGPT, dan lainnya – ideal untuk pelajar & kreator.",
    color: "from-purple-500/20 to-purple-600/10",
    hoverColor: "group-hover:text-purple-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    emoji: "🔐",
    title: "Privasi Aman & Legal",
    description:
      "Bukan akun sharing atau crack, kamu pakai sendiri. Data kamu aman!",
    color: "from-green-500/20 to-green-600/10",
    hoverColor: "group-hover:text-green-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    emoji: "⚡",
    title: "Langsung Pakai",
    description:
      "Akun langsung aktif setelah beli. Enggak perlu daftar atau setup ribet.",
    color: "from-amber-500/20 to-amber-600/10",
    hoverColor: "group-hover:text-amber-500",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    emoji: "💰",
    title: "Lebih Murah dari Top-Up",
    description:
      "Hemat hingga 80% dibanding beli langsung di aplikasi. Dapat fitur yang sama!",
    color: "from-emerald-500/20 to-emerald-600/10",
    hoverColor: "group-hover:text-emerald-500",
  },
];

// Premium account showcase data
const accountShowcase = [
  {
    name: "Netflix Premium",
    logo: "/logo/netflix.jpg",
    screenshot: "/background/netflixshowcase.jpeg",
    officialPrice: "Rp 65.000",
    ourPrice: "Rp 20.000",
    savings: "76%",
    features: [
      "4K (Ultra HD) + HDR",
      "1 Device",
      "Download Offline",
      "Semua Konten",
    ],
  },
  {
    name: "Canva Pro",
    logo: "/logo/canva.jpg",
    screenshot: "/background/canvashowcase.png",
    officialPrice: "Rp 769.000",
    ourPrice: "Rp 15.000",
    savings: "99%",
    features: [
      "100+ Juta Elemen Premium",
      "Background Remover",
      "Magic Resize",
      "Brand Kit",
    ],
  },
  {
    name: "ChatGPT Plus",
    logo: "/logo/chagptai.webp",
    screenshot: "/background/chatgptmodup.png",
    officialPrice: "Rp 325.800",
    ourPrice: "Rp 18.000",
    savings: "96%",
    features: ["GPT-4.5", "No Limit Prompt", "Browsing", "Plugins"],
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Andi",
    photo: "/logo/user.png",
    text: "Pakai Netflix Premium di sini lebih hemat & langsung aktif! Udah 6 bulan lancar jaya.",
    service: "Netflix Premium",
  },
  {
    name: "Dina",
    photo: "/logo/user.png",
    text: "Canva Pro-nya membantu banget buat bisnis online. Hemat 77% dari harga resmi!",
    service: "Canva Pro",
  },
  {
    name: "Budi",
    photo: "/logo/user.png",
    text: "ChatGPT Plus bikin produktivitas naik. Harganya cuma setengah dari official!",
    service: "ChatGPT Plus",
  },
];

export default function PremiumAccountBenefits() {
  const [currentShowcase, setCurrentShowcase] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Handle showcase navigation
  const nextShowcase = () => {
    setCurrentShowcase((prev) => (prev + 1) % accountShowcase.length);
  };

  const prevShowcase = () => {
    setCurrentShowcase(
      (prev) => (prev - 1 + accountShowcase.length) % accountShowcase.length
    );
  };

  // Auto rotate testimonials
  const rotateTestimonials = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Animation variants for benefits
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 py-24 px-6 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/circuit-pattern.png')] opacity-5 z-0"></div>

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9A154] via-[#00C8D7] to-transparent"></div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#D9A154]/20 text-[#D9A154] px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
            <Star className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">
              Akun Premium Terpercaya
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFF8E7] mb-3 md:mb-4">
            Kenapa Beli Akun Premium di{" "}
            <span className="text-[#D9A154] relative">
              JAWA Store?
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-[#D9A154]"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-[#FFF8E7]/80 max-w-3xl mx-auto px-4">
            Nikmati layanan premium dengan harga terjangkau. Hemat hingga 80%
            dari harga resmi dengan kualitas dan fitur yang sama persis!
          </motion.p>
        </div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredBenefit(index)}
              onHoverEnd={() => setHoveredBenefit(null)}
              className={cn(
                "group relative bg-[#2A2A2A] rounded-xl p-4 md:p-6 border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300",
                hoveredBenefit === index ? "shadow-lg shadow-[#D9A154]/10" : ""
              )}>
              {/* Background gradient */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10",
                  benefit.color
                )}></div>

              {/* Emoji background */}
              <div className="absolute -bottom-6 -right-6 text-6xl md:text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                {benefit.emoji}
              </div>

              {/* Icon */}
              <div
                className={cn(
                  "p-2 md:p-3 bg-[#1A1A1A] rounded-lg w-fit mb-3 md:mb-4 text-[#D9A154] transition-colors duration-300",
                  benefit.hoverColor
                )}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-[#FFF8E7] mb-2 group-hover:text-[#D9A154] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-[#FFF8E7]/70">
                {benefit.description}
              </p>

              {/* Special highlight for savings benefit */}
              {index === 5 && (
                <div className="mt-3 md:mt-4 bg-[#D9A154]/20 rounded-lg p-2 border border-[#D9A154]/30">
                  <p className="text-[#D9A154] text-xs md:text-sm font-medium">
                    🔥 Hemat hingga 80% dari harga resmi!
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Price comparison showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#D9A154] mb-2">
              Perbandingan Harga yang Menguntungkan
            </h3>
            <p className="text-sm md:text-base text-[#FFF8E7]/80 px-4">
              Lihat berapa banyak yang bisa kamu hemat dengan akun premium dari
              JAWA Store
            </p>
          </div>

          <div className="relative">
            {/* Showcase carousel */}
            <div className="overflow-hidden rounded-xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentShowcase * 100}%)` }}>
                {accountShowcase.map((account, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-[#2A2A2A] rounded-xl overflow-hidden border border-[#D9A154]/20">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left: Screenshot */}
                        <div className="relative h-48 sm:h-64 md:h-auto">
                          <Image
                            src={account.screenshot || "/placeholder.svg"}
                            alt={account.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 to-transparent"></div>

                          {/* Logo overlay */}
                          <div className="absolute top-4 left-4 bg-[#1A1A1A]/80 rounded-lg p-2 backdrop-blur-sm">
                            <div className="relative w-8 h-8 md:w-12 md:h-12">
                              <Image
                                src={account.logo || "/placeholder.svg"}
                                alt={account.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          {/* Savings badge */}
                          <div className="absolute top-4 right-4 bg-[#D9A154] text-[#1A1A1A] px-2 md:px-3 py-1 rounded-full font-bold text-xs md:text-sm">
                            Hemat {account.savings}
                          </div>
                        </div>

                        {/* Right: Price comparison */}
                        <div className="p-4 md:p-6">
                          <h4 className="text-xl md:text-2xl font-bold text-[#FFF8E7] mb-4">
                            {account.name}
                          </h4>

                          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                            {/* Official price */}
                            <div className="flex justify-between items-center">
                              <span className="text-sm md:text-base text-[#FFF8E7]/70">
                                Harga Resmi:
                              </span>
                              <div className="flex items-center">
                                <span className="text-sm md:text-base text-[#FFF8E7]/70 line-through">
                                  {account.officialPrice}
                                </span>
                                <span className="ml-2 bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded">
                                  Mahal!
                                </span>
                              </div>
                            </div>

                            {/* Our price */}
                            <div className="flex justify-between items-center">
                              <span className="text-sm md:text-base text-[#FFF8E7]/70">
                                Harga JAWA Store:
                              </span>
                              <div className="flex items-center">
                                <span className="text-lg md:text-xl text-[#D9A154] font-bold">
                                  {account.ourPrice}
                                </span>
                                <span className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded">
                                  Hemat!
                                </span>
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-[#D9A154]/20 my-3 md:my-4"></div>

                            {/* Features */}
                            <div>
                              <h5 className="text-[#00C8D7] text-sm md:text-base font-medium mb-2">
                                Fitur yang Sama:
                              </h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {account.features.map((feature, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-2">
                                    <Check className="w-3 h-3 md:w-4 md:h-4 text-[#00C8D7]" />
                                    <span className="text-xs md:text-sm text-[#FFF8E7]/80">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* CTA */}
                          <a
                            href="/jasaakun"
                            className="inline-flex items-center gap-2 bg-[#D9A154] hover:bg-[#A8743D] text-[#1A1A1A] font-bold py-2 px-4 rounded transition-colors duration-300 text-sm md:text-base">
                            <span>Lihat Detail</span>
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel controls */}
            <button
              onClick={prevShowcase}
              title="Showcase sebelumnya"
              aria-label="Showcase sebelumnya"
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#1A1A1A]/80 hover:bg-[#D9A154] text-white p-1.5 md:p-2 rounded-full transition-colors">
              <ChevronLeft size={16} className="md:w-5 md:h-5" />
            </button>
            <button
              onClick={nextShowcase}
              title="Showcase berikutnya"
              aria-label="Showcase berikutnya"
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#1A1A1A]/80 hover:bg-[#D9A154] text-white p-1.5 md:p-2 rounded-full transition-colors">
              <ChevronRight size={16} className="md:w-5 md:h-5" />
            </button>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-4 md:mt-6 space-x-2">
              {accountShowcase.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentShowcase(index)}
                  title={`Pilih showcase ${accountShowcase[index].name}`}
                  className={cn(
                    "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all",
                    currentShowcase === index
                      ? "bg-[#D9A154] w-4 md:w-6"
                      : "bg-[#FFF8E7]/30"
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials and Trust Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left: Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="bg-[#2A2A2A] rounded-xl p-4 md:p-6 border border-[#D9A154]/20 h-full">
              <h3 className="text-lg md:text-xl font-bold text-[#D9A154] mb-4 md:mb-6 flex items-center">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#00C8D7]" />
                Apa Kata Pelanggan Kami
              </h3>

              <div className="relative h-40 md:h-48">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                    onAnimationComplete={rotateTestimonials}>
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                        <Image
                          src={
                            testimonials[currentTestimonial].photo ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[currentTestimonial].name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium text-sm md:text-base text-[#FFF8E7]">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <span className="text-[#00C8D7] text-xs">
                            Pengguna {testimonials[currentTestimonial].service}
                          </span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 md:w-4 md:h-4 text-[#D9A154] fill-[#D9A154]"
                            />
                          ))}
                        </div>
                        <p className="text-xs md:text-sm text-[#FFF8E7]/80 italic">
                          &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center mt-3 md:mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    title={`Pilih testimonial ${testimonials[index].name}`}
                    className={cn(
                      "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all",
                      currentTestimonial === index
                        ? "bg-[#D9A154]"
                        : "bg-[#FFF8E7]/30"
                    )}
                  />
                ))}
              </div>

              {/* Trust badge */}
              <div className="mt-4 md:mt-6 flex justify-center">
                <div className="bg-[#1A1A1A] rounded-full px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2">
                  <div className="relative w-4 h-4 md:w-5 md:h-5">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute inset-0 bg-[#D9A154] rounded-full opacity-30"></motion.div>
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#D9A154]" />
                  </div>
                  <span className="text-xs md:text-sm text-[#FFF8E7]/80">
                    Dipercaya oleh 1.200+ pelanggan
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="bg-[#2A2A2A] rounded-xl p-4 md:p-6 border border-[#D9A154]/20 h-full">
              <h3 className="text-lg md:text-xl font-bold text-[#D9A154] mb-4 md:mb-6">
                JAWA Store vs Alternatif Lain
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#D9A154]/20">
                      <th className="text-left py-2 md:py-3 text-xs md:text-sm text-[#FFF8E7]/70">
                        Fitur
                      </th>
                      <th className="text-center py-2 md:py-3 text-xs md:text-sm text-[#00C8D7]">
                        JAWA Store
                      </th>
                      <th className="text-center py-2 md:py-3 text-xs md:text-sm text-[#FFF8E7]/70">
                        Top-Up Resmi
                      </th>
                      <th className="text-center py-2 md:py-3 text-xs md:text-sm text-[#FFF8E7]/70">
                        Akun Gratisan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#D9A154]/10">
                      <td className="py-2 md:py-3 text-xs md:text-sm text-[#FFF8E7]/80">
                        Harga
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <span className="text-xs md:text-sm text-[#D9A154] font-medium">
                          Hemat 80%
                        </span>
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <span className="text-xs md:text-sm text-red-400">
                          Mahal
                        </span>
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <span className="text-xs md:text-sm text-[#FFF8E7]/80">
                          Gratis
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#D9A154]/10">
                      <td className="py-2 md:py-3 text-xs md:text-sm text-[#FFF8E7]/80">
                        Fitur Premium
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <X className="w-4 h-4 md:w-5 md:h-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-[#D9A154]/10">
                      <td className="py-2 md:py-3 text-xs md:text-sm text-[#FFF8E7]/80">
                        Bebas Iklan
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <X className="w-4 h-4 md:w-5 md:h-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-[#D9A154]/10">
                      <td className="py-2 md:py-3 text-xs md:text-sm text-[#FFF8E7]/80">
                        Garansi
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <span className="text-xs md:text-sm text-[#00C8D7] font-medium">
                          7-30 Hari
                        </span>
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <span className="text-xs md:text-sm text-[#FFF8E7]/80">
                          Tidak Ada
                        </span>
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <span className="text-xs md:text-sm text-[#FFF8E7]/80">
                          Tidak Ada
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 md:py-3 text-xs md:text-sm text-[#FFF8E7]/80">
                        Support 24/7
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <X className="w-4 h-4 md:w-5 md:h-5 text-red-500 mx-auto" />
                      </td>
                      <td className="py-2 md:py-3 text-center">
                        <X className="w-4 h-4 md:w-5 md:h-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Legal note */}
              <div className="mt-4 md:mt-6 bg-[#1A1A1A] rounded-lg p-2 md:p-3 border border-[#00C8D7]/20">
                <p className="text-[#FFF8E7]/60 text-xs flex items-start gap-2">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#00C8D7] flex-shrink-0 mt-0.5" />
                  <span>
                    Semua akun legal & ready to use. Bukan akun bajakan. Kami
                    menjamin keamanan dan privasi data pengguna.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 md:mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#FFF8E7] mb-3 md:mb-4">
            Siap Nikmati Akun Premium dengan Harga{" "}
            <span className="text-[#D9A154]">Super Terjangkau?</span>
          </h3>
          <p className="text-sm md:text-base text-[#FFF8E7]/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Dapatkan akses ke layanan premium favorit dengan harga hemat.
            Aktivasi instan dan garansi penuh!
          </p>

          <a
            href="/jasaakun"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:shadow-lg hover:shadow-[#D9A154]/30 transition-all duration-300 text-sm md:text-base">
            <span>Lihat Katalog Akun Premium</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
