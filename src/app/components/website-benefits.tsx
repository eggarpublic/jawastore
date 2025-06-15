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
  Award,
  Search,
  BookOpen,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
} from "lucide-react";
import { cn } from "../lib/utils";

// Website benefits data
const benefits = [
  {
    icon: <Award className="w-6 h-6" />,
    emoji: "🚀",
    title: "Tingkatkan Kepercayaan",
    description:
      "Website membuat bisnis kamu terlihat lebih profesional. Pelanggan lebih percaya pada bisnis dengan kehadiran online yang kuat.",
    color: "from-orange-500/20 to-orange-600/10",
    hoverColor: "group-hover:text-orange-500",
    stats: "87% konsumen cek website sebelum beli",
  },
  {
    icon: <Search className="w-6 h-6" />,
    emoji: "🔍",
    title: "Muncul di Google",
    description:
      "Optimasi SEO bikin calon pembeli gampang cari kamu. Dapatkan traffic organik dan kurangi biaya iklan jangka panjang.",
    color: "from-blue-500/20 to-blue-600/10",
    hoverColor: "group-hover:text-blue-500",
    stats: "93% pengalaman online dimulai dari search engine",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    emoji: "🧠",
    title: "Jadi Katalog Digital",
    description:
      "Tampilkan produk, harga, dan informasi lengkap. Pelanggan bisa browse kapan saja, dimana saja, tanpa batas waktu.",
    color: "from-green-500/20 to-green-600/10",
    hoverColor: "group-hover:text-green-500",
    stats: "64% konsumen lebih suka self-service info",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    emoji: "💼",
    title: "Naikkan Nilai Jual",
    description:
      "Cocok buat freelancer, UMKM, hingga komunitas. Website adalah investasi yang meningkatkan kredibilitas dan jangkauan bisnis.",
    color: "from-purple-500/20 to-purple-600/10",
    hoverColor: "group-hover:text-purple-500",
    stats: "75% konsumen nilai kredibilitas dari website",
  },
];

export default function WebsiteBenefits() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">(
    "desktop"
  );
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Animation variants for benefits
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="relative z-20 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/circuit-pattern.png')] opacity-5 z-0"></div>

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C8D7] via-[#D9A154] to-transparent"></div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side: Website mockups */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative">
            {/* Device toggle */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="bg-[#2A2A2A] p-1 rounded-lg flex gap-1">
                <button
                  onClick={() => setActiveDevice("desktop")}
                  className={cn(
                    "flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded transition-all duration-300 text-sm md:text-base",
                    activeDevice === "desktop"
                      ? "bg-[#D9A154] text-[#1A1A1A] font-medium"
                      : "text-[#FFF8E7]/70 hover:text-[#FFF8E7]"
                  )}>
                  <Globe className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setActiveDevice("mobile")}
                  className={cn(
                    "flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded transition-all duration-300 text-sm md:text-base",
                    activeDevice === "mobile"
                      ? "bg-[#D9A154] text-[#1A1A1A] font-medium"
                      : "text-[#FFF8E7]/70 hover:text-[#FFF8E7]"
                  )}>
                  <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            {/* Mockup showcase */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D9A154]/10 to-[#00C8D7]/10 rounded-xl opacity-30"></div>

              <AnimatePresence mode="wait">
                {activeDevice === "desktop" ? (
                  <motion.div
                    key="desktop"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative">
                    {/* Desktop mockup */}
                    <div className="relative w-[280px] sm:w-[400px] md:w-[500px] h-[180px] sm:h-[240px] md:h-[300px] rounded-xl overflow-hidden border-4 sm:border-6 md:border-8 border-[#2A2A2A] shadow-2xl">
                      <Image
                        src="/gambar/responsive1.png"
                        alt="Website Desktop View"
                        fill
                        className="object-cover"
                      />

                      {/* Interactive elements */}
                      <motion.div
                        animate={{
                          y: [0, -300, 0],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C8D7]/10 to-transparent opacity-50"></motion.div>

                      {/* Cursor animation */}
                      <motion.div
                        animate={{
                          x: [50, 250, 400, 200, 50],
                          y: [50, 150, 100, 200, 50],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute w-3 h-3 md:w-4 md:h-4 bg-white rounded-full opacity-70 shadow-lg shadow-white/30"></motion.div>
                    </div>

                    {/* Desktop label */}
                    <div className="absolute -bottom-8 md:-bottom-10 left-1/2 transform -translate-x-1/2 bg-[#2A2A2A] px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                      <span className="text-[#D9A154] text-xs md:text-sm font-medium">
                        Responsive Desktop View
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative">
                    {/* Mobile mockup */}
                    <div className="relative w-[140px] sm:w-[180px] md:w-[200px] h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden border-4 sm:border-6 md:border-8 border-[#2A2A2A] shadow-2xl">
                      <Image
                        src="/gambar/responsive2.png"
                        alt="Website Mobile View"
                        fill
                        className="object-cover"
                      />

                      {/* Interactive elements */}
                      <motion.div
                        animate={{
                          y: [0, -400, 0],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D9A154]/10 to-transparent opacity-50"></motion.div>

                      {/* Touch animation */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 0.3, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full opacity-30"></motion.div>
                    </div>

                    {/* Mobile label */}
                    <div className="absolute -bottom-8 md:-bottom-10 left-1/2 transform -translate-x-1/2 bg-[#2A2A2A] px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                      <span className="text-[#00C8D7] text-xs md:text-sm font-medium">
                        Mobile Optimized
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative elements - adjusted sizes for mobile */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -z-10 w-40 h-40 md:w-64 md:h-64 border border-[#D9A154]/20 rounded-full"
                style={{
                  top: "37.4%",
                  left: "79.2%",
                }}></motion.div>
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -z-10 w-48 h-48 md:w-80 md:h-80 border border-[#00C8D7]/20 rounded-full"
                style={{
                  top: "54.4%",
                  left: "54.4%",
                }}></motion.div>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -z-10 w-36 h-36 md:w-72 md:h-72 border border-[#D9A154]/20 rounded-full"
                style={{
                  top: "66.7%",
                  left: "42.7%",
                }}></motion.div>
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 35,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -z-10 w-32 h-32 md:w-60 md:h-60 border border-[#00C8D7]/20 rounded-full"
                style={{
                  top: "19.7%",
                  left: "52.8%",
                }}></motion.div>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 28,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -z-10 w-28 h-28 md:w-56 md:h-56 border border-[#D9A154]/20 rounded-full"
                style={{
                  top: "57.3%",
                  left: "45.9%",
                }}></motion.div>
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 32,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -z-10 w-24 h-24 md:w-48 md:h-48 border border-[#00C8D7]/20 rounded-full"
                style={{
                  top: "47.1%",
                  left: "21.1%",
                }}></motion.div>
            </div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 md:mt-16">
              <div className="bg-[#2A2A2A]/80 px-2 md:px-3 py-1 rounded text-[10px] md:text-xs text-[#FFF8E7]/70">
                React.js
              </div>
              <div className="bg-[#2A2A2A]/80 px-2 md:px-3 py-1 rounded text-[10px] md:text-xs text-[#FFF8E7]/70">
                Next.js
              </div>
              <div className="bg-[#2A2A2A]/80 px-2 md:px-3 py-1 rounded text-[10px] md:text-xs text-[#FFF8E7]/70">
                Tailwind CSS
              </div>
              <div className="bg-[#2A2A2A]/80 px-2 md:px-3 py-1 rounded text-[10px] md:text-xs text-[#FFF8E7]/70">
                SEO Optimized
              </div>
              <div className="bg-[#2A2A2A]/80 px-2 md:px-3 py-1 rounded text-[10px] md:text-xs text-[#FFF8E7]/70">
                Mobile Responsive
              </div>
            </motion.div>
          </motion.div>

          {/* Right side: Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6">
            {/* Heading */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFF8E7] mb-3 md:mb-4">
                Bangun Identitas Digital Kamu dengan{" "}
                <span className="text-[#D9A154] relative">
                  Website!
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
                className="text-base md:text-lg text-[#FFF8E7]/80 mb-6 md:mb-8">
                Di era digital, siapa yang tidak online—akan kalah. Website kamu
                bisa jadi aset jangka panjang yang bekerja 24/7 menarik
                pelanggan baru dan membangun kredibilitas.
              </motion.p>
            </div>

            {/* Benefits list */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              className="space-y-3 md:space-y-4">
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
                    "group relative bg-[#2A2A2A] rounded-xl p-4 md:p-5 border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300",
                    hoveredBenefit === index
                      ? "shadow-lg shadow-[#D9A154]/10"
                      : ""
                  )}>
                  {/* Background gradient */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10",
                      benefit.color
                    )}></div>

                  {/* Emoji background */}
                  <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 text-4xl md:text-6xl opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    {benefit.emoji}
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    {/* Icon */}
                    <div
                      className={cn(
                        "p-2 md:p-3 bg-[#1A1A1A] rounded-lg w-fit h-fit text-[#D9A154] transition-colors duration-300 flex-shrink-0",
                        benefit.hoverColor
                      )}>
                      {benefit.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#FFF8E7] mb-1 md:mb-2 group-hover:text-[#D9A154] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#FFF8E7]/70 mb-2 md:mb-3">
                        {benefit.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00C8D7] animate-pulse"></div>
                        <span className="text-xs md:text-sm text-[#00C8D7] font-medium">
                          {benefit.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive elements on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredBenefit === index ? 1 : 0,
                      scale: hoveredBenefit === index ? 1 : 0.8,
                    }}
                    className="absolute -top-1.5 md:-top-2 -right-1.5 md:-right-2 bg-[#00C8D7] text-[#1A1A1A] text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                    PENTING
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4 md:pt-6">
              <a
                href="/jasawebsite"
                className="group inline-flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] font-bold py-2.5 md:py-3 px-4 md:px-6 rounded-lg hover:shadow-lg hover:shadow-[#D9A154]/30 transition-all duration-300 relative overflow-hidden text-sm md:text-base">
                <span className="relative z-10">Lihat Paket Website</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 bg-[#00C8D7]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>

              {/* Trust indicator */}
              <p className="mt-3 md:mt-4 text-[#FFF8E7]/60 text-xs md:text-sm flex items-center gap-1.5 md:gap-2">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#00C8D7]" />
                <span>Termasuk domain, hosting, dan maintenance 1 tahun</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
