"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Shield,
  Star,
  MessageCircle,
  ChevronUp,
  Heart,
  Code,
  Globe,
  Award,
  Users,
} from "lucide-react";
import { cn } from "../lib/utils";

// Footer data
const footerData = {
  brand: {
    name: "JAWA Store",
    tagline: "Premium Digital Solutions",
    description:
      "Solusi digital terpercaya untuk website modern dan akun premium berkualitas tinggi dengan garansi penuh.",
    logo: "/logo/logo-footer.png", // Simple elegant logo
  },
  navigation: [
    { name: "Beranda", href: "#hero", icon: <Globe className="w-4 h-4" /> },
    {
      name: "Jasa Akun",
      href: "#jasa-akun",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      name: "Jasa Website",
      href: "#jasa-website",
      icon: <Code className="w-4 h-4" />,
    },
    {
      name: "Testimoni",
      href: "#testimoni",
      icon: <Star className="w-4 h-4" />,
    },
    { name: "FAQ", href: "#faq", icon: <MessageCircle className="w-4 h-4" /> },
    { name: "Kontak", href: "#kontak", icon: <Users className="w-4 h-4" /> },
  ],
  contact: {
    phone: "+62 812-XXXX-XXXX",
    email: "admin@jawastore.com",
    whatsapp: "https://chat.whatsapp.com/GxC5EAAZxqy5ynDYsIaPnb",
    address: "Jakarta, Indonesia",
    hours: "24/7 Available",
    response: "< 5 menit",
  },
  social: [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/jawastore.biz.id/",
      followers: "10K+",
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/jawastore",
      followers: "5K+",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/jawastore",
      followers: "8K+",
      color: "hover:text-blue-300",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://chat.whatsapp.com/GxC5EAAZxqy5ynDYsIaPnb",
      followers: "24/7",
      color: "hover:text-green-400",
    },
  ],
};

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0A0A0A] to-[#000000] text-white overflow-hidden">
      {/* BACKGROUND WITH PARALLAX */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 opacity-5">
        <Image
          src="/assets/bg-footer-cyber.png"
          alt="footer-background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/patterns/circuit-pattern.png')] opacity-10"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#D9A154]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#00C8D7]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#A8743D]/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9A154] via-[#00C8D7] to-[#A8743D]"></div>

      <motion.div style={{ opacity }} className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Brand Info Only */}
            <div className="space-y-8">
              {/* Brand Info */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1">
                {/* Logo Section */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-[#D9A154] to-[#A8743D] p-2">
                    <Image
                      src={footerData.brand.logo || "/logo/logo.ico"}
                      alt="JAWA Store Logo"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full filter brightness-0 invert"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D9A154]/20 to-[#00C8D7]/20 blur-sm"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#D9A154]">
                      {footerData.brand.name}
                    </h2>
                    <p className="text-[#00C8D7] text-sm font-medium">
                      {footerData.brand.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-[#FFF8E7]/80 text-sm leading-relaxed mt-6 max-w-lg">
                  {footerData.brand.description}
                </p>
              </motion.div>
            </div>

            {/* Right Column: Navigation & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Navigation */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-1">
                <h3 className="text-xl font-bold text-[#D9A154] mb-6 flex items-center">
                  <Globe className="mr-2 text-[#00C8D7]" />
                  Navigasi
                </h3>
                <ul className="space-y-3">
                  {footerData.navigation.map((item, index) => (
                    <li key={index}>
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}>
                        <a
                          href={item.href}
                          className="group flex items-center gap-3 text-[#FFF8E7]/80 hover:text-[#D9A154] transition-all duration-300 py-1">
                          <span className="text-[#00C8D7] group-hover:text-[#D9A154] transition-colors duration-300">
                            {item.icon}
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item.name}
                          </span>
                        </a>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact & Social Combined */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1">
                <h3 className="text-xl font-bold text-[#D9A154] mb-6 flex items-center">
                  <MessageCircle className="mr-2 text-[#00C8D7]" />
                  Kontak & Sosial
                </h3>

                {/* Contact Info - More Compact */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#00C8D7]" />
                    <span className="text-[#FFF8E7]/80 text-sm">
                      {footerData.contact.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#D9A154]" />
                    <span className="text-[#FFF8E7]/80 text-sm">
                      {footerData.contact.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#A8743D]" />
                    <span className="text-[#FFF8E7]/80 text-sm">
                      {footerData.contact.address}
                    </span>
                  </div>
                </div>

                {/* Social Media - Horizontal Layout */}
                <div className="flex gap-3">
                  {footerData.social.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onHoverStart={() => setHoveredSocial(social.name)}
                      onHoverEnd={() => setHoveredSocial(null)}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "group relative p-3 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-lg border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300",
                        social.color
                      )}>
                      {social.icon}

                      {/* Tooltip */}
                      {hoveredSocial === social.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#2A2A2A] text-[#FFF8E7] px-2 py-1 rounded text-xs whitespace-nowrap border border-[#D9A154]/20">
                          {social.followers} {social.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[#2A2A2A]" />
                        </motion.div>
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#D9A154]/20 bg-[#0A0A0A]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-[#FFF8E7]/60 text-sm">
                <span>
                  © {new Date().getFullYear()} JAWA Store. All rights reserved.
                </span>
                <span className="hidden md:block">•</span>
                <span className="flex items-center gap-1">
                  Made with{" "}
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" /> in
                  Indonesia
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[#FFF8E7]/60 text-sm">
                  <Shield className="w-4 h-4 text-[#00C8D7]" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF8E7]/60 text-sm">
                  <Award className="w-4 h-4 text-[#D9A154]" />
                  <span>Verified Business</span>
                </div>
                <button
                  onClick={scrollToTop}
                  title="Scroll to top"
                  className="group p-2 bg-[#D9A154]/20 hover:bg-[#D9A154] text-[#D9A154] hover:text-[#1A1A1A] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D9A154]/30">
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
    </footer>
  );
}
