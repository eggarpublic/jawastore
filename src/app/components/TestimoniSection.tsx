"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Award,
} from "lucide-react";
import Image from "next/image";
import { cn } from "../lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Rizky Permana",
    role: "Content Creator",
    service: "Jasa Akun",
    text: "Top banget! Akun Netflix & Canva saya aktif langsung. Admin responsif dan ramah 🔥",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "2 hari lalu",
  },
  {
    id: 2,
    name: "Arif Developer",
    role: "Web Developer",
    service: "Jasa Website",
    text: "Website UMKM saya selesai dalam 3 hari. Desainnya modern, cocok buat brand lokal.",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "1 minggu lalu",
  },
  {
    id: 3,
    name: "Sarah Amelia",
    role: "Freelancer",
    service: "Akun & Website",
    text: "JAWA Store bantu semua kebutuhan digital saya. One stop solution banget! 💯",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "3 hari lalu",
  },
  {
    id: 4,
    name: "Dito Aulia",
    role: "Mahasiswa",
    service: "Jasa Akun",
    text: "Akun ChatGPT & Canva ready dalam hitungan menit! Mantap dan terpercaya.",
    image: "/logo/user.png",
    rating: 4,
    verified: true,
    date: "5 hari lalu",
  },
  {
    id: 5,
    name: "Lina Kurnia",
    role: "UMKM Owner",
    service: "Jasa Website",
    text: "Gak nyangka hasilnya sebagus ini! Tim JAWA bener-bener totalitas dari tampilan sampai fitur.",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "2 minggu lalu",
  },
  {
    id: 6,
    name: "Yusuf Hernawan",
    role: "Digital Marketer",
    service: "Paket Kombo",
    text: "Beli akun + web bundle hemat banget! Sekali bayar, semua langsung aktif. Worth it!",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "1 bulan lalu",
  },
  {
    id: 7,
    name: "Icha Mareta",
    role: "Ibu Rumah Tangga",
    service: "Jasa Akun",
    text: "Bisa nonton Disney bareng anak-anak tiap malam. Akunnya awet, murah, dan aman.",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "4 hari lalu",
  },
  {
    id: 8,
    name: "Bayu Rahmadani",
    role: "Pelajar",
    service: "Akun ChatGPT",
    text: "Belajar makin lancar pakai akun ChatGPT dari JAWA Store. Harganya pas di kantong pelajar.",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "2 minggu lalu",
  },
  {
    id: 9,
    name: "Fajar Aditya",
    role: "Owner Studio Musik",
    service: "Jasa Website",
    text: "Portofolio studio saya sekarang tampil keren dan interaktif. Pelayanan cepat dan sabar banget.",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "3 minggu lalu",
  },
  {
    id: 10,
    name: "Nadia Safira",
    role: "Desainer",
    service: "Canva Pro",
    text: "Akun Canva Pro-nya work 100%. Nggak perlu takut expired, langsung bisa kerja.",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "1 hari lalu",
  },
  {
    id: 11,
    name: "Reza Fitriansyah",
    role: "Affiliate Marketer",
    service: "Combo Website + Akun",
    text: "Kombinasi website affiliate + akun edit video dari CapCut & Canva sangat membantu kerjaan saya.",
    image: "/logo/user.png",
    rating: 5,
    verified: true,
    date: "6 hari lalu",
  },
  // ... rest of your testimonials array
];

export default function TestimoniSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 3;
    return window.innerWidth >= 768 ? 3 : 1;
  };

  // Update maxIndex calculation
  const visibleSlides = getVisibleSlides();
  const maxIndex = Math.max(0, testimonials.length - visibleSlides);
  const totalSlides = Math.max(1, testimonials.length - visibleSlides + 1);

  // Update auto scroll functionality
  useEffect(() => {
    if (isAutoPlaying && isClient) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + direction;

          if (nextIndex >= maxIndex) {
            setDirection(-1);
            return maxIndex;
          } else if (nextIndex <= 0) {
            setDirection(1);
            return 0;
          }

          return nextIndex;
        });
      }, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, direction, isClient, maxIndex]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(Math.min(index, maxIndex));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Update carousel container
  return (
    <section
      id="testimoni"
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] text-white overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-5 -z-10 opacity-10">
        <Image
          src="/background/10.jpg"
          alt="testimoni-background"
          fill
          className="object-cover"
        />
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/patterns/circuit-pattern.png')] opacity-5"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#D9A154]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#00C8D7]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C8D7] via-[#D9A154] to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-[#D9A154] flex items-center justify-center mb-4">
            <MessageSquare className="mr-3 text-[#00C8D7]" />
            APA KATA MEREKA?
          </motion.h2>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[#FFF8E7]/80 text-lg max-w-2xl mx-auto">
            Testimoni nyata dari customer yang puas dengan layanan premium kami
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main carousel container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="grid grid-flow-col transition-transform duration-500 ease-in-out"
              style={{
                gridAutoColumns: isClient ? `${100 / visibleSlides}%` : "100%",
                transform: `translateX(-${
                  (currentIndex * 100) / visibleSlides
                }%)`,
              }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: (testimonial.id % 3) * 0.1,
                      duration: 0.6,
                    }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px -10px rgba(217, 161, 84, 0.3)",
                    }}
                    className="group relative bg-[#2A2A2A] rounded-xl p-6 border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-500 h-full">
                    {/* Background pattern */}
                    <div className="absolute -top-10 -right-10 opacity-5 rotate-45 group-hover:opacity-10 transition-opacity duration-300">
                      <Image
                        src="/assets/bg-card-merah.png"
                        alt="bg-pattern"
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>

                    {/* Quote icon */}
                    <div className="absolute top-4 right-4">
                      <Quote className="w-8 h-8 text-[#D9A154]/30 group-hover:text-[#D9A154]/50 transition-colors duration-300" />
                    </div>

                    {/* User info */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="rounded-full border-2 border-[#D9A154] object-cover"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-[#00C8D7] rounded-full p-1">
                            <Award className="w-3 h-3 text-[#1A1A1A]" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-[#FFF8E7]">
                            {testimonial.name}
                          </h4>
                          {testimonial.verified && (
                            <span className="text-[#00C8D7] text-xs bg-[#00C8D7]/20 px-2 py-0.5 rounded">
                              VERIFIED
                            </span>
                          )}
                        </div>
                        <p className="text-[#FFF8E7]/70 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-[#D9A154] text-xs font-medium">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-[#FFF8E7]/90 text-sm leading-relaxed mb-6 relative z-10 italic">
                      &quot;{testimonial.text}&quot;
                    </blockquote>

                    {/* Rating and date */}
                    <div className="flex justify-between items-center relative z-10">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#D9A154] text-[#D9A154]"
                          />
                        ))}
                      </div>
                      <span className="text-[#FFF8E7]/50 text-xs">
                        {testimonial.date}
                      </span>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D9A154]/5 to-[#00C8D7]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#1A1A1A]/80 hover:bg-[#D9A154] text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#D9A154]/30 hover:border-[#D9A154] z-10"
            aria-label="Sebelumnya"
            title="Sebelumnya">
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#1A1A1A]/80 hover:bg-[#D9A154] text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#D9A154]/30 hover:border-[#D9A154] z-10"
            aria-label="Berikutnya"
            title="Berikutnya">
            <ChevronRight size={20} />
          </button>

          {/* Auto-play indicator */}
          <div className="absolute top-4 right-4 z-10">
            <div
              className={cn(
                "flex items-center gap-2 px-3 py-1 rounded-full text-xs backdrop-blur-sm border transition-all duration-300",
                isAutoPlaying
                  ? "bg-[#00C8D7]/20 border-[#00C8D7]/30 text-[#00C8D7]"
                  : "bg-[#2A2A2A]/80 border-[#D9A154]/30 text-[#FFF8E7]/70"
              )}>
              <div
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  isAutoPlaying
                    ? "bg-[#00C8D7] animate-pulse"
                    : "bg-[#FFF8E7]/50"
                )}
              />
              <span>{isAutoPlaying ? "AUTO" : "MANUAL"}</span>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              title={`Go to page ${index + 1}`}
              className={cn(
                "transition-all duration-300",
                currentIndex === index
                  ? "w-8 h-3 bg-[#D9A154] rounded-full"
                  : "w-3 h-3 bg-[#FFF8E7]/30 rounded-full hover:bg-[#FFF8E7]/50"
              )}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[#D9A154]/20">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D9A154] mb-1">
              4.9/5
            </div>
            <div className="text-[#FFF8E7]/70 text-sm">Rating Rata-rata</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#00C8D7] mb-1">
              1000+
            </div>
            <div className="text-[#FFF8E7]/70 text-sm">Customer Puas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D9A154] mb-1">
              24/7
            </div>
            <div className="text-[#FFF8E7]/70 text-sm">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#00C8D7] mb-1">
              100%
            </div>
            <div className="text-[#FFF8E7]/70 text-sm">Garansi</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
    </section>
  );
}
