"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ShieldAlert, Globe, ArrowRight } from "lucide-react"

export default function Hero() {
  const [selected, setSelected] = useState<"akun" | "website">("akun")
  const [glitchEffect, setGlitchEffect] = useState(false)
  const [isHoveringCTA, setIsHoveringCTA] = useState(false)
  const constraintsRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  // Fungsi untuk handle perubahan tab dan background
  const handleTabChange = (tab: "akun" | "website") => {
    setGlitchEffect(true)
    setSelected(tab)
  }

  // Reset glitch effect setelah animasi
  useEffect(() => {
    const timer = setTimeout(() => setGlitchEffect(false), 1000)
    return () => clearTimeout(timer)
  }, [selected])

  const heroData = {
    akun: {
      title: "PREMIUM ACCOUNTS",
      desc: "Akun GTA V, MLBB, FF dan game lainnya. Terverifikasi dan siap pakai.",
      image: "/background/2.webp",
      cta: "BROWSE ACCOUNTS",
      productImage: "/logo/logo.png",
      icon: <ShieldAlert className="mr-2" />,
      bgColor: "from-[#D9A154]/10 to-[#1A1A1A]"
    },
    website: {
      title: "CUSTOM WEBSITES",
      desc: "Website GTA RP server, forum gaming & marketplace dengan desain premium.",
      image: "/background/1.webp",
      cta: "VIEW SERVICES",
      productImage: "/gambar/web2.jpg",
      icon: <Globe className="mr-2" />,
      bgColor: "from-[#00C8D7]/10 to-[#1A1A1A]"
    },
  }

  const current = heroData[selected]

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1A1A1A]">
      {/* Background gradient yang berubah berdasarkan tab */}
      <motion.div
        key={`bg-${selected}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 bg-gradient-to-b ${current.bgColor} z-0`}
      />

      {/* Pola background */}
      <div className="absolute inset-0 bg-[url('/background/3.jpg')] opacity-10 z-10"></div>

      {/* Diagonal accent */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#00C8D7] to-transparent rotate-12 opacity-20 blur-xl"></div>

      {/* BACKGROUND GAMBAR with filter */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 0.6,
            scale: glitchEffect ? 1.02 : 1,
            filter: glitchEffect ? "hue-rotate(30deg)" : "none",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/80 z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-[#1A1A1A] opacity-70 z-10"></div>
          <Image src={current.image || "/background/2.webp"} alt="background" fill className="object-cover" priority />
        </motion.div>
      </AnimatePresence>

      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('/background/2.webp')] opacity-5 z-10 pointer-events-none"></div>

      {/* KONTEN UTAMA */}
      <div className="relative z-20 flex flex-col h-full px-6">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#1A1A1A] to-transparent"></div>

        <div className="flex flex-col md:flex-row justify-between h-full w-full">
          {/* Left content */}
          <div className="flex flex-col justify-center h-full max-w-3xl ml-8 md:ml-16 lg:ml-24">
            {/* Header */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-2"
            >
              <h2 className="text-[#00C8D7] font-bold text-lg md:text-xl tracking-widest">JAWA STORE EXCLUSIVE</h2>
            </motion.div>

            {/* Title */}
            <motion.h1
              key={current.title + "-title"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={`text-5xl md:text-7xl font-black text-[#FFF8E7] tracking-tight leading-none
                ${glitchEffect ? "animate-pulse" : ""}
                drop-shadow-[0_0_10px_rgba(217,161,84,0.5)]`}
            >
              {current.title}
            </motion.h1>

            {/* Separator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-[#D9A154] to-[#A8743D] my-4"
            ></motion.div>

            {/* Description */}
            <motion.p
              key={current.desc + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 text-lg md:text-xl text-[#FFF8E7]/90 max-w-xl"
            >
              {current.desc}
            </motion.p>

            {/* Tab Selector Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: selected === "akun" ? "0 0 15px rgba(217,161,84,0.8)" : "0 0 15px rgba(0,200,215,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={`px-6 py-3 font-bold rounded-none border-b-4 flex items-center justify-center transition-all
                  ${selected === "akun" 
                    ? "bg-[#D9A154] text-[#1A1A1A] border-[#00C8D7]" 
                    : "bg-[#1A1A1A]/90 text-[#D9A154] border-[#D9A154] hover:bg-[#1A1A1A]/70"}`}
                onClick={() => handleTabChange("akun")}
              >
                <ShieldAlert className="mr-2" />
                <span>ACCOUNTS</span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: selected === "website" ? "0 0 15px rgba(217,161,84,0.8)" : "0 0 15px rgba(0,200,215,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`px-6 py-3 font-bold rounded-none border-b-4 flex items-center justify-center transition-all
                  ${selected === "website" 
                    ? "bg-[#D9A154] text-[#1A1A1A] border-[#00C8D7]" 
                    : "bg-[#1A1A1A]/90 text-[#D9A154] border-[#D9A154] hover:bg-[#1A1A1A]/70"}`}
                onClick={() => handleTabChange("website")}
              >
                <Globe className="mr-2" />
                <span>WEBSITES</span>
              </motion.button>
            </div>

            {/* Main CTA Button */}
            <motion.a
              href="/jasaakun"
              onHoverStart={() => setIsHoveringCTA(true)}
              onHoverEnd={() => setIsHoveringCTA(false)}
              whileHover={{
                scale: 1.05,
                boxShadow: selected === "akun" 
                  ? "0 0 20px rgba(217,161,84,0.8)" 
                  : "0 0 20px rgba(0,200,215,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className={`mt-8 px-8 py-4 font-bold rounded-none w-fit tracking-wider border-b-4 uppercase relative overflow-hidden group
                ${selected === "akun" 
                  ? "bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] border-[#00C8D7]"
                  : "bg-gradient-to-r from-[#00C8D7] to-[#008E9B] text-[#FFF8E7] border-[#D9A154]"}`}
            >
              <span className="relative z-10 flex items-center">
                {current.cta}
                <motion.span
                  animate={{ x: isHoveringCTA ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="ml-2"
                >
                  <ArrowRight />
                </motion.span>
              </span>
              <span className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300
                ${selected === "akun" ? "bg-[#00C8D7]" : "bg-[#D9A154]"}`}></span>
            </motion.a>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex items-center justify-center w-full max-w-xl h-full pr-16">
            <div ref={constraintsRef} className="relative w-full h-[60%]">
              <motion.div
                drag
                dragConstraints={constraintsRef}
                style={{ x, y, rotateX, rotateY }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-full relative cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={current.productImage} 
                    alt={selected === "akun" ? "Premium Account" : "Custom Website"} 
                    fill 
                    className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
                
                {/* Glow effect */}
                <motion.div 
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className={`absolute inset-0 rounded-full blur-2xl -z-10
                    ${selected === "akun" ? "bg-[#D9A154]" : "bg-[#00C8D7]"}`}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            delay: 1,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[#D9A154] text-sm mb-2">SCROLL DOWN</span>
          <ChevronDown className="w-6 h-6 text-[#D9A154]" />
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#00C8D7] animate-pulse mr-2"></div>
          <div className="text-[#00C8D7] text-xs font-mono">SECURE CONNECTION</div>
        </div>

        {/* Corner element */}
        <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 border-l-2 border-t-2 border-[#D9A154]/30 -rotate-45 transform origin-bottom-right"></div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C8D7] via-[#D9A154] to-transparent"></div>
    </section>
  )
}