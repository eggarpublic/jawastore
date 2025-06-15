"use client";

import { useState, useEffect } from "react";
import { use } from "react";
import Image from "next/image";
import {
  Check,
  Star,
  Clock,
  Shield,
  MessageCircle,
  ChevronRight,
  ShoppingCart,
  Info,
  AlertCircle,
  ArrowLeft,
  Share2,
  Heart,
  Globe,
  Code,
  Palette,
  Server,
  Smartphone as MobileIcon,
} from "lucide-react";
import { getWebsiteById } from "../../data/websiteDetails";
import { Website } from "../../types/website";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WebsiteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [website, setWebsite] = useState<Website | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadWebsite = async () => {
      try {
        const data = await getWebsiteById(id);
        setWebsite(data);
      } catch (error) {
        console.error("Error loading website:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadWebsite();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#D9A154] mb-4">Memuat...</h1>
        </div>
      </div>
    );
  }

  if (!website) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#D9A154] mb-4">
            Layanan Tidak Ditemukan
          </h1>
          <Link href="/jasawebsite" className="text-[#00C8D7] hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  // Get selected variant
  const currentVariant = website.variants[selectedVariant];

  // Handle purchase click
  const handlePurchase = () => {
    window.open(
      `https://wa.me/628XXXXXXX?text=Halo%20min%2C%20saya%20tertarik%20dengan%20${website.title}%20paket%20${currentVariant.name}%20(${currentVariant.price})`,
      "_blank"
    );
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: website.title,
          text: `Cek ${website.title} di Jawa Store!`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      setShowShareMenu(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#D9A154]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/jasawebsite"
            className="flex items-center gap-2 text-[#D9A154] hover:text-[#00C8D7] transition-colors bg-[#2A2A2A] hover:bg-[#D9A154]/10 px-4 py-2 rounded-lg border border-[#D9A154]/30 hover:border-[#D9A154]">
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Beranda</span>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                isFavorite ? "text-red-500" : "text-white/70 hover:text-red-500"
              )}>
              <Heart
                className="w-5 h-5"
                fill={isFavorite ? "currentColor" : "none"}
              />
            </button>
            <button
              onClick={handleShare}
              className="p-2 text-white/70 hover:text-[#00C8D7] transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Info */}
          <div className="space-y-6">
            <div className="relative aspect-video bg-[#2A2A2A] rounded-lg overflow-hidden">
              <Image
                src={website.image || "/placeholder.svg"}
                alt={website.title}
                fill
                className="object-cover"
                priority
                placeholder="blur"
                width={800}
                height={450}
                blurDataURL="/placeholder.svg"
              />
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#D9A154]/20">
                <h4 className="text-[#00C8D7] text-sm font-medium mb-2">
                  Durasi Pengerjaan
                </h4>
                <p className="text-white/80">
                  {website.duration || "7-14 hari"}
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#D9A154]/20">
                <h4 className="text-[#00C8D7] text-sm font-medium mb-2">
                  Revisi
                </h4>
                <p className="text-white/80">
                  {website.revision || "3x"} revisi
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#D9A154]/20">
              <h4 className="text-[#00C8D7] text-sm font-medium mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {website.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1A1A1A] rounded-full text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#D9A154] mb-2">
                {website.title}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < (website.rating || 5)
                        ? "text-[#D9A154] fill-[#D9A154]"
                        : "text-gray-400"
                    }
                  />
                ))}
                <span className="text-white/70 text-sm ml-1">
                  {website.rating || 5}/5
                </span>
              </div>
              <p className="text-white/80">{website.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-[#00C8D7] font-medium mb-3 flex items-center">
                <Info className="w-4 h-4 mr-2" />
                Fitur yang Didapat:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {website.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/80">
                    <Check size={16} className="text-[#00C8D7]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Variants */}
            <div>
              <h3 className="text-[#00C8D7] font-medium mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Pilih Paket:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {website.variants.map((variant, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    className={cn(
                      "p-4 transition-all duration-300 rounded-lg border relative",
                      selectedVariant === i
                        ? "bg-[#D9A154] text-[#1A1A1A] border-[#D9A154] shadow-lg shadow-[#D9A154]/20"
                        : "bg-[#2A2A2A] text-white border-[#D9A154]/30 hover:border-[#D9A154]/70"
                    )}>
                    <div className="font-medium">{variant.name}</div>
                    <div
                      className={cn(
                        "text-sm",
                        selectedVariant === i
                          ? "text-[#1A1A1A]/80"
                          : "text-white/70"
                      )}>
                      {variant.price}
                    </div>
                    {variant.discount && (
                      <div className="absolute -top-2 -right-2 bg-[#00C8D7] text-[#1A1A1A] text-xs font-bold px-2 py-0.5 rounded-full">
                        {variant.discount}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[#2A2A2A] rounded-lg p-4 border border-[#D9A154]/20">
              <h3 className="text-[#00C8D7] font-medium mb-3 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                Informasi Penting:
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-[#D9A154] mt-0.5 flex-shrink-0" />
                  <span>Domain dan hosting tidak termasuk dalam paket</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-4 h-4 text-[#D9A154] mt-0.5 flex-shrink-0" />
                  <span>
                    Source code akan diberikan setelah pembayaran penuh
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Palette className="w-4 h-4 text-[#D9A154] mt-0.5 flex-shrink-0" />
                  <span>Desain sesuai dengan kebutuhan dan brand Anda</span>
                </li>
                <li className="flex items-start gap-2">
                  <Server className="w-4 h-4 text-[#D9A154] mt-0.5 flex-shrink-0" />
                  <span>Gratis maintenance selama 1 bulan</span>
                </li>
                <li className="flex items-start gap-2">
                  <MobileIcon className="w-4 h-4 text-[#D9A154] mt-0.5 flex-shrink-0" />
                  <span>
                    Responsive di semua perangkat (Desktop, Tablet, Mobile)
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePurchase}
                className="flex-1 bg-gradient-to-r from-[#D9A154] to-[#A8743D] hover:from-[#A8743D] hover:to-[#D9A154] text-[#1A1A1A] font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Pesan Sekarang</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/628XXXXXXX?text=Halo%20min%2C%20saya%20mau%20tanya%20tentang%20${website.title}`,
                    "_blank"
                  )
                }
                className="bg-[#2A2A2A] hover:bg-[#3A3A3A] border border-[#D9A154]/30 hover:border-[#D9A154]/70 text-white py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Tanya via WhatsApp</span>
              </button>
            </div>

            {/* Guarantee */}
            <div className="text-center">
              <p className="text-white/60 text-sm flex items-center justify-center gap-1">
                <Shield className="w-4 h-4 text-[#00C8D7]" />
                100% Secure Payment & Money Back Guarantee
              </p>
            </div>

            {/* References Section */}
            <div className="mt-12">
              <h3 className="text-[#00C8D7] font-medium mb-6 flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Referensi Website:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {website.references.map((ref, i) => (
                  <motion.a
                    key={ref.id}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={ref.image}
                        alt={ref.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        placeholder="blur"
                        width={400}
                        height={225}
                        blurDataURL="/placeholder.svg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                          <span className="text-xs font-medium text-[#00C8D7] bg-[#1A1A1A] px-2 py-1 rounded-full">
                            {ref.category}
                          </span>
                          <h4 className="text-white font-medium mt-2 line-clamp-2">
                            {ref.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Menu */}
      {showShareMenu && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-[#2A2A2A] rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-[#D9A154] font-medium mb-4">Bagikan ke:</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/?text=Cek ${website.title} di Jawa Store! ${window.location.href}`,
                    "_blank"
                  );
                  setShowShareMenu(false);
                }}
                className="flex items-center gap-2 p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#D9A154]/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-[#00C8D7]" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  window.open(
                    `https://t.me/share/url?url=${window.location.href}&text=Cek ${website.title} di Jawa Store!`,
                    "_blank"
                  );
                  setShowShareMenu(false);
                }}
                className="flex items-center gap-2 p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#D9A154]/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-[#00C8D7]" />
                <span>Telegram</span>
              </button>
            </div>
            <button
              onClick={() => setShowShareMenu(false)}
              className="w-full mt-4 p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#D9A154]/20 transition-colors">
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Floating Back Button for Mobile */}
      <Link
        href="/jasawebsite"
        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 md:hidden flex items-center gap-2 bg-[#D9A154] text-[#1A1A1A] px-6 py-3 rounded-full shadow-lg hover:bg-[#A8743D] transition-colors">
        <ArrowLeft className="w-5 h-5" />
        <span>Kembali</span>
      </Link>
    </div>
  );
}
