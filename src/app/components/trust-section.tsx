"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import {
  Shield,
  CheckCircle,
  Award,
  Users,
  Star,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// Brand logos
const brandLogos = [
  { name: "Netflix", logo: "/logo/netflix.jpg" },
  { name: "Disney+", logo: "/logo/disney.jpg" },
  { name: "Canva", logo: "/logo/canva.jpg" },
  { name: "Spotify", logo: "/logo/spotify.png" },
  { name: "ChatGPT", logo: "/logo/chagptai.webp" },
  { name: "Capcut", logo: "/logo/capcut.png" },
];

// Trust indicators
const trustIndicators = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "100% Garansi",
    description: "Uang kembali jika bermasalah",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Verified Business",
    description: "Terdaftar resmi di Indonesia",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Top Rated",
    description: "Rating 4.9/5 dari 1.200+ pelanggan",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Support 24/7",
    description: "Bantuan teknis kapan saja",
  },
];

// Customer testimonials with real photos
const customerPhotos = [
  {
    id: 1,
    name: "Seacrh",
    photo: "/gambar/search.png",
    service: "Google Analisis , Google Ads, dan SEO",
    quote: "Terdaftar Google Seacrh!",
    stars: 5,
  },
  {
    id: 2,
    name: "Performance",
    photo: "/gambar/peforma.png",
    service: "Website UMKM",
    quote: "Performa Super Cepat – Skor 94/100 di Mobile (Google PageSpeed) Website Anda dimuat dalam hitungan detik",
    stars: 5,
  },
  {
    id: 3,
    name: "Keamanan",
    photo: "/gambar/keamanan.png",
    service: "sertifikat SSL terbaik",
    quote: "standar keamanan SSL A+ tertinggi dari Qualys SSL Labs",
    stars: 4,
  },
];

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  service: string;
  quote: string;
  stars: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  onClick: () => void;
}

const TestimonialCard = ({
  testimonial,
  isActive,
  onClick,
}: TestimonialCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      whileTap={{ scale: isActive ? 1 : 0.98 }}
      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
        isActive ? "border-[#D9A154]" : "border-transparent"
      } transition-all duration-300`}
      style={{
        height: isActive ? "120px" : "80px",
        width: isActive ? "100%" : "90%",
        marginLeft: isActive ? "0" : "5%",
      }}>
      <Image
        src={testimonial.photo || "/placeholder.svg"}
        alt={testimonial.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(testimonial.stars)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-[#D9A154] fill-[#D9A154]" />
          ))}
        </div>
        <p className="text-xs font-medium text-white truncate">
          {testimonial.quote}
        </p>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs font-bold text-[#D9A154]">
            {testimonial.name}
          </span>
          <span className="text-[10px] text-[#00C8D7]">
            {testimonial.service}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function TrustSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Auto rotate customer photos with pause on hover
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % customerPhotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate, customerPhotos.length]);

  const handlePhotoClick = (index: number) => {
    setActivePhoto(index);
    setAutoRotate(false);

    // Resume auto rotation after 10 seconds
    setTimeout(() => {
      setAutoRotate(true);
    }, 10000);
  };

  const handleNextPhoto = () => {
    setActivePhoto((prev) => (prev + 1) % customerPhotos.length);
    setAutoRotate(false);

    // Resume auto rotation after 10 seconds
    setTimeout(() => {
      setAutoRotate(true);
    }, 10000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 py-16 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/circuit-pattern.png')] opacity-5 z-0"></div>

      {/* Floating Brand Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {brandLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{
              top: `${10 + index * 15}%`,
              left: `${10 + index * 20}%`,
              width: "80px",
              height: "80px",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <Image
              src={logo.logo || "/placeholder.svg"}
              alt={logo.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side: Visual trust elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
            onMouseEnter={() => setAutoRotate(false)}
            onMouseLeave={() => setAutoRotate(true)}>
            {/* Main visual: Customer using product */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden border-2 border-[#D9A154] shadow-2xl shadow-[#D9A154]/20 mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoto}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0">
                  <Image
                    src={
                      customerPhotos[activePhoto].photo || "/placeholder.svg"
                    }
                    alt="Customer using our service"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>

                  {/* Customer quote */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-[#1A1A1A]/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-[#D9A154]/30">
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        <div className="flex">
                          {[...Array(customerPhotos[activePhoto].stars)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 md:w-4 md:h-4 text-[#D9A154] fill-[#D9A154]"
                              />
                            )
                          )}
                        </div>
                        <span className="text-xs md:text-sm text-[#FFF8E7]/80">
                          {customerPhotos[activePhoto].stars}.0
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-[#FFF8E7] font-medium italic mb-2">
                        &ldquo;{customerPhotos[activePhoto].quote}&rdquo;
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base text-[#D9A154] font-bold">
                          {customerPhotos[activePhoto].name}
                        </span>
                        <span className="text-xs md:text-sm text-[#00C8D7]">
                          Pengguna {customerPhotos[activePhoto].service}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 z-10 hover:bg-[#D9A154]/80 transition-colors duration-300"
                aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Customer satisfaction badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                className="absolute -top-4 md:-top-5 -right-4 md:-right-5 bg-[#D9A154] text-[#1A1A1A] rounded-full h-20 w-20 md:h-28 md:w-28 flex flex-col items-center justify-center transform rotate-12 border-4 border-[#1A1A1A] shadow-lg">
                <span className="text-[10px] md:text-xs font-bold">
                  LEBIH DARI
                </span>
                <span className="text-base md:text-xl font-black">1.200+</span>
                <span className="text-[10px] md:text-xs font-bold">
                  CUSTOMER PUAS
                </span>
              </motion.div>
            </div>

            {/* Testimonial selector */}
            <div className="flex flex-col gap-2 h-[120px] overflow-y-auto pr-2 custom-scrollbar">
              {customerPhotos.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={index === activePhoto}
                  onClick={() => handlePhotoClick(index)}
                />
              ))}
            </div>

            {/* Brand logos strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 md:mt-8 bg-[#2A2A2A]/80 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-[#D9A154]/20">
              <p className="text-center text-[#FFF8E7]/60 text-xs md:text-sm mb-3 md:mb-4">
                Dipercaya untuk layanan premium dari:
              </p>
              <div className="flex justify-between items-center">
                {brandLogos.slice(0, 5).map((brand, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="relative h-8 w-12 md:h-10 md:w-16">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#00C8D7]/20 text-[#00C8D7] px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              <Shield className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">
                Terpercaya & Terjamin
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFF8E7] leading-tight">
              Semua kebutuhan digital kamu dalam{" "}
              <span className="text-[#D9A154] relative">
                1 tempat
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-[#D9A154]"
                />
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base md:text-xl text-[#FFF8E7]/80">
              Website UMKM & Akun Premium mulai 5RB-an!
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-2 md:gap-3 bg-[#2A2A2A]/50 p-3 rounded-lg border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300">
                  <div className="text-[#D9A154]">{indicator.icon}</div>
                  <div>
                    <h3 className="text-sm md:text-base font-medium text-[#FFF8E7]">
                      {indicator.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#FFF8E7]/60">
                      {indicator.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
              <motion.a
                href="/jasaakun"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg flex items-center justify-center gap-2 relative overflow-hidden text-sm md:text-base">
                <span className="relative z-10">Lihat Produk</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 bg-[#00C8D7]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="https://chat.whatsapp.com/GxC5EAAZxqy5ynDYsIaPnb?text=Halo%20min%2C%20saya%20tertarik%20dengan%20layanan%20JAWA%20Store"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-transparent border-2 border-[#D9A154] text-[#FFF8E7] font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#D9A154]/10 transition-colors duration-300 text-sm md:text-base">
                <span>Konsultasi Sekarang</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Additional trust text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs md:text-sm text-[#FFF8E7]/60 mt-3 md:mt-4 flex items-center gap-2">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#00C8D7]" />
              <span>Garansi uang kembali 100% jika tidak puas</span>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d9a154;
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
}
