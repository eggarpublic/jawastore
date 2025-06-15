"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Shield, Smartphone, Globe, DollarSign, Target, Info } from "lucide-react"
import { cn } from "../lib/utils"

// Reasons data
const reasons = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    emoji: "✅",
    title: "Langsung Aktif",
    description: "Akun premium & website langsung aktif tanpa ribet. Proses cepat, tanpa menunggu lama.",
    tag: "Aktivasi < 5 menit",
    color: "from-green-500/20 to-green-600/10",
    hoverColor: "group-hover:text-green-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    emoji: "🛡️",
    title: "Garansi & Refill 7 Hari",
    description: "Jika bermasalah, bisa langsung tukar. 100% Aman dengan jaminan pengembalian dana.",
    tag: "Verified by PayPal",
    color: "from-blue-500/20 to-blue-600/10",
    hoverColor: "group-hover:text-blue-500",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    emoji: "📱",
    title: "Fast CS 24/7",
    description: "Dibantu admin real-time lewat WhatsApp. Dukungan teknis kapanpun Anda butuhkan.",
    tag: "Response time < 5 menit",
    color: "from-purple-500/20 to-purple-600/10",
    hoverColor: "group-hover:text-purple-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    emoji: "🖥️",
    title: "Website Premium",
    description: "Desain kekinian, SEO Ready, cocok UMKM. Tingkatkan kredibilitas bisnis Anda secara online.",
    tag: "Terbukti oleh data Google Analytics",
    color: "from-cyan-500/20 to-cyan-600/10",
    hoverColor: "group-hover:text-cyan-500",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    emoji: "💰",
    title: "Harga Terjangkau",
    description: "Akun & website mulai dari Rp 5.000-an. Solusi premium dengan harga bersahabat.",
    tag: "Cicilan 0% tersedia",
    color: "from-amber-500/20 to-amber-600/10",
    hoverColor: "group-hover:text-amber-500",
  },
  {
    icon: <Target className="w-6 h-6" />,
    emoji: "🎯",
    title: "One Stop Digital",
    description: "Satu tempat untuk semua kebutuhan digital. Hemat waktu dan tenaga Anda.",
    tag: "Sudah diiklankan di Google Search & Display Ads",
    color: "from-red-500/20 to-red-600/10",
    hoverColor: "group-hover:text-red-500",
  },
]

export default function WhyChooseUs() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section
      ref={sectionRef}
      className="relative z-20 py-24 px-6 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/circuit-pattern.png')] opacity-5 z-0"></div>

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9A154] via-[#00C8D7] to-transparent"></div>

      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#D9A154]/20 text-[#D9A154] px-4 py-2 rounded-full mb-4"
          >
            <Info className="w-4 h-4" />
            <span className="text-sm font-medium">Kenapa Memilih Kami?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#FFF8E7] mb-4"
          >
            Alasan Tepat Memilih{" "}
            <span className="text-[#D9A154] relative">
              JAWA Store
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#D9A154]"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#FFF8E7]/80 max-w-2xl mx-auto"
          >
            Kami menyediakan layanan premium dengan standar kualitas tertinggi. Berikut alasan mengapa lebih dari 1.200+
            pelanggan memilih dan mempercayai kami.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
              className={cn(
                "group relative bg-[#2A2A2A] rounded-xl p-6 border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300",
                hoveredItem === index ? "shadow-lg shadow-[#D9A154]/10" : "",
              )}
            >
              {/* Background gradient */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10",
                  reason.color,
                )}
              ></div>

              {/* Emoji background */}
              <div className="absolute -bottom-6 -right-6 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                {reason.emoji}
              </div>

              {/* Icon */}
              <div
                className={cn(
                  "p-3 bg-[#1A1A1A] rounded-lg w-fit mb-4 text-[#D9A154] transition-colors duration-300",
                  reason.hoverColor,
                )}
              >
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#FFF8E7] mb-2 group-hover:text-[#D9A154] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-[#FFF8E7]/70 mb-4">{reason.description}</p>

              {/* Tag */}
              <div className="flex items-center gap-1 mt-auto">
                <div className="w-2 h-2 rounded-full bg-[#00C8D7] animate-pulse"></div>
                <span className="text-[#00C8D7] text-xs font-medium">{reason.tag}</span>
              </div>

              {/* Interactive elements on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: hoveredItem === index ? 1 : 0, scale: hoveredItem === index ? 1 : 0.8 }}
                className="absolute -top-2 -right-2 bg-[#D9A154] text-[#1A1A1A] text-xs font-bold px-2 py-1 rounded"
              >
                TERPERCAYA
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#00C8D7]/20 text-[#00C8D7] px-4 py-2 rounded-full">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Terpercaya oleh 1.200+ Pelanggan di Indonesia</span>
          </div>
        </motion.div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-[#D9A154]/20 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-[#00C8D7]/20 rounded-full opacity-20"></div>
      </motion.div>
    </section>
  )
}
