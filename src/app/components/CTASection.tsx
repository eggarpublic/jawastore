"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MessageSquareText,
  Zap,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Phone,
} from "lucide-react";

// Stats data for credibility
const stats = [
  {
    number: "500+",
    label: "Website Dibuat",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    number: "1000+",
    label: "Akun Terjual",
    icon: <Shield className="w-5 h-5" />,
  },
  { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> },
  {
    number: "4.9",
    label: "Rating",
    icon: <Star className="w-5 h-5 fill-current" />,
  },
];

// Testimonial quotes for rotating display
const testimonialQuotes = [
  "Website yang dibuat sangat profesional dan sesuai ekspektasi!",
  "Akun premium yang dibeli berkualitas tinggi dan terpercaya.",
  "Pelayanan cepat dan harga sangat terjangkau.",
  "Tim JAWA Store sangat responsif dan membantu.",
];

export default function CTASection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Rotate testimonial quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % testimonialQuotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="cta"
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] text-white overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <Image
          src="/background/black.gif"
          alt="cta-background"
          fill
          className="object-cover"
        />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/patterns/noise.png')] opacity-10"></div>

      {/* Diagonal accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9A154] via-[#00C8D7] to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#D9A154] via-[#00C8D7] to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-4 bg-[#2A2A2A]/50 backdrop-blur-sm rounded-lg border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300">
              <div className="flex justify-center mb-2 text-[#00C8D7]">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#D9A154] mb-1">
                {stat.number}
              </div>
              <div className="text-[#FFF8E7]/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Content */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF8E7] mb-6 leading-tight">
            Siap Bangun{" "}
            <span className="text-[#D9A154] relative">
              Website Premium
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D9A154] to-[#00C8D7]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>{" "}
            atau Butuh{" "}
            <span className="text-[#00C8D7] relative">
              Akun Digital
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00C8D7] to-[#A8743D]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
            ?
          </motion.h2>

          {/* Rotating testimonial quote */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-[#FFF8E7]/80 text-lg md:text-xl italic max-w-2xl">
                &quot;{testimonialQuotes[currentQuote]}&quot;
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#FFF8E7]/70 text-lg mb-10 max-w-2xl mx-auto">
            Hubungi kami sekarang dan dapatkan{" "}
            <span className="text-[#D9A154] font-bold">konsultasi gratis</span>{" "}
            + harga terbaik untuk kebutuhan digital Anda ✨
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA - WhatsApp */}
          <motion.a
            href="https://chat.whatsapp.com/GxC5EAAZxqy5ynDYsIaPnb?text=Halo%20min%2C%20saya%20tertarik%20dengan%20JASA%20di%20JAWA%20Store"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px -5px rgba(217, 161, 84, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] font-bold rounded-lg shadow-lg overflow-hidden transition-all duration-300">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-[#00C8D7]"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <MessageSquareText className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10 text-lg">Hubungi via WhatsApp</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D9A154]/50 to-[#A8743D]/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </motion.a>

          {/* Secondary CTA - Phone */}
          <motion.a
            href="tel:+628XXXXXXX"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#D9A154]/50 text-[#FFF8E7] font-medium rounded-lg hover:bg-[#D9A154]/10 hover:border-[#D9A154] transition-all duration-300">
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            <span>Telepon Langsung</span>
          </motion.a>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-8">
          <p className="text-[#FFF8E7]/50 text-sm">
            💬 Respon cepat dalam 5 menit • 🔒 Garansi 100% • ⚡ Pengerjaan
            express tersedia
          </p>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-16 h-16 bg-[#D9A154]/20 rounded-lg backdrop-blur-sm border border-[#D9A154]/30 hidden md:block"
        />

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-10 w-12 h-12 bg-[#00C8D7]/20 rounded-full backdrop-blur-sm border border-[#00C8D7]/30 hidden md:block"
        />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
    </section>
  );
}
