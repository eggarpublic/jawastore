"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronRight, Shield, Gamepad, Globe, MessageSquare, HelpCircle, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["hero", "jasa-akun", "jasa-website", "testimoni", "faq", "footer"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Beranda", href: "/", icon: <Shield size={16} /> },
    { label: "Jasa Akun", href: "/jasaakun", icon: <Gamepad size={16} /> },
    { label: "Jasa Website", href: "/jasawebsite", icon: <Globe size={16} /> },
    { label: "Testimoni", href: "/testimoni", icon: <MessageSquare size={16} /> },
    { label: "FAQ", href: "/faq", icon: <HelpCircle size={16} /> },
    { label: "Kontak", href: "/kontak", icon: <Phone size={16} /> },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "py-2 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-[#D9A154]/20 shadow-lg"
          : "py-4 bg-gradient-to-b from-[#1A1A1A] to-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn("relative overflow-hidden transition-all duration-300", scrolled ? "w-8 h-8" : "w-10 h-10")}
          >
            <Image
              src="/logo/logo.png"
              alt="JAWA Store"
              width={40}
              height={40}
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-[#00C8D7]/20 group-hover:bg-transparent transition-colors duration-300 rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-bold transition-all duration-300",
                scrolled ? "text-lg" : "text-xl",
                "text-[#D9A154]",
              )}
            >
              JAWA Store
            </span>
            <span className="text-[10px] text-[#00C8D7] -mt-1 opacity-80">PREMIUM SERVICES</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex gap-1 bg-[#1A1A1A]/50 backdrop-blur-sm p-1 rounded-md">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded transition-all duration-300 relative group",
                  activeSection === link.href.substring(1)
                    ? "text-[#1A1A1A] bg-[#D9A154]"
                    : "text-[#FFF8E7] hover:bg-[#D9A154]/20",
                )}
                onClick={() => setActiveSection(link.href.substring(1))}
              >
                <span
                  className={cn(
                    "transition-all duration-300",
                    activeSection === link.href.substring(1) ? "text-[#1A1A1A]" : "text-[#00C8D7]",
                  )}
                >
                  {link.icon}
                </span>
                <span className="text-sm font-medium">{link.label}</span>

                {/* Hover indicator */}
                {activeSection !== link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00C8D7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href=""
            className={cn(
              "ml-4 px-4 py-2 bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] font-bold rounded-sm transition-all duration-300 flex items-center gap-2 group relative overflow-hidden",
              scrolled ? "text-sm" : "text-base",
            )}
          >
            <span className="relative z-10">HUBUNGI KAMI</span>
            <ChevronRight
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              size={18}
            />
            <span className="absolute inset-0 bg-[#00C8D7] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-20 p-2 rounded-md bg-[#1A1A1A]/80 border border-[#D9A154]/30"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} className="text-[#D9A154]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} className="text-[#D9A154]" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A1A1A]/95 backdrop-blur-md border-t border-[#D9A154]/20 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between py-3 px-4 rounded-sm transition-all duration-200",
                      activeSection === link.href.substring(1)
                        ? "bg-[#D9A154]/20 border-l-2 border-[#D9A154]"
                        : "hover:bg-[#1A1A1A]/50",
                    )}
                    onClick={() => {
                      setActiveSection(link.href.substring(1))
                      setOpen(false)
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#00C8D7]">{link.icon}</span>
                      <span className="text-[#FFF8E7]">{link.label}</span>
                    </div>
                    <ChevronRight size={16} className="text-[#D9A154]/70" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="pt-2 mt-2 border-t border-[#D9A154]/20"
              >
                <Link
                  href="#kontak"
                  className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] font-bold rounded-sm"
                  onClick={() => setOpen(false)}
                >
                  <span>HUBUNGI KAMI</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicator for mobile */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        className="h-0.5 bg-gradient-to-r from-[#00C8D7] via-[#D9A154] to-[#A8743D] origin-left md:hidden"
      ></motion.div>
    </motion.nav>
  )
}
