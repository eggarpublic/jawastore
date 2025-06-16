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
  Search,
  ChevronDown,
  Star,
  TrendingUp,
  Filter,
  X,
  ChevronRight,
  Shield,
  Clock,
} from "lucide-react";
import { cn } from "../lib/utils";
import {
  WebsiteServiceSkeleton,
  FilterSkeleton,
  SearchBarSkeleton,
  GridSkeleton,
  LoadingState,
} from "./skeleton-loader";
import { useRouter } from "next/navigation";

const categories = [
  { id: "all", name: "Semua" },
  { id: "landing", name: "Landing Page" },
  { id: "company", name: "Company Profile" },
  { id: "ecommerce", name: "E-Commerce" },
  { id: "blog", name: "Blog" },
  { id: "portfolio", name: "Portfolio" },
];

// Add popularity and pricing data
const websiteList = [
{
    id: "landing-page",
    title: "Landing Page",
    image: "/gambar/fornitewebsite.gif",
    category: "landing",
    price: "Rp 1.500.000",
    popular: true,
    stock: "Tersedia",
  },
  {
    id: "aplikasi-web",
    title: "Aplikasi Web",
    image: "/gambar/compenyprofil.gif",
    category: "ecommerce",
    price: "Rp 2.500.000",
    popular: true,
    stock: "Tersedia",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    image: "/gambar/Ecommers.jpg",
    category: "ecommerce",
    price: "Rp 3.500.000",
    popular: true,
    stock: "Tersedia",
  },
  {
    id: "Undagan",
    title: "Blog",
    image: "/gambar/undangan.jpg",
    category: "blog",
    price: "Rp 999.000",
    popular: false,
    stock: "Tersedia",
  },
  {
    id: "Custom",
    title: "Portfolio",
    image: "/gambar/webgta6.jpg",
    category: "portfolio",
    price: "Rp 2.000.000",
    popular: false,
    stock: "Tersedia",
  },
  {
    id: "RemakeDesain",
    title: "Remake Desain Website",
    image: "/gambar/webgta6.jpg",
    category: "portfolio",
    price: "Rp 999.000",
    popular: false,
    stock: "Tersedia",
  },
];

interface WebsiteReference {
  id: number;
  title: string;
  image: string;
  url: string;
  category: string;
}

// Website portfolio/references
const websiteReferences: WebsiteReference[] = [
  {
    id: 1,
    title: "PT Indopride Pride GTA 5 Roleplay",
    image: "/gambar/indopride.png",
    url: "https://indopride.id/",
    category: "Business",
  },
  {
    id: 2,
    title: "PT Indopride Pride GTA 5 Roleplay",
    image: "/gambar/indopride.png",
    url: "https://indopride.id/",
    category: "Business",
  },
  {
    id: 3,
    title: "PT Indopride Pride GTA 5 Roleplay",
    image: "/gambar/indopride.png",
    url: "https://indopride.id/",
    category: "Business",
  },
  {
    id: 4,
    title: "PT Indopride Pride GTA 5 Roleplay",
    image: "/gambar/indopride.png",
    url: "https://indopride.id/",
    category: "Business",
  },
  // ... rest of the references ...
];

export default function JasaWebsite() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [isLoading, setIsLoading] = useState(true);
  const [filtersLoaded, setFiltersLoaded] = useState(false);
  const [websitesLoaded, setWebsitesLoaded] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Simulate loading states
  useEffect(() => {
    // Simulate initial loading
    const initialTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Simulate filters loading
    const filtersTimer = setTimeout(() => {
      setFiltersLoaded(true);
    }, 1200);

    // Simulate websites loading
    const websitesTimer = setTimeout(() => {
      setWebsitesLoaded(true);
    }, 1800);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(filtersTimer);
      clearTimeout(websitesTimer);
    };
  }, []);

  // Filter websites based on category and search term
  const filteredWebsites = websiteList.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort websites based on sortBy
  const sortedWebsites = [...filteredWebsites].sort((a, b) => {
    if (sortBy === "popular") {
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    } else if (sortBy === "price-low") {
      return (
        Number.parseInt(a.price.replace(/\D/g, "")) -
        Number.parseInt(b.price.replace(/\D/g, ""))
      );
    } else if (sortBy === "price-high") {
      return (
        Number.parseInt(b.price.replace(/\D/g, "")) -
        Number.parseInt(a.price.replace(/\D/g, ""))
      );
    }
    return 0;
  });

  if (isLoading) {
    return (
      <section className="relative z-10 py-24 px-6 bg-[#1A1A1A] text-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <LoadingState message="Memuat jasa website..." />
        </div>
      </section>
    );
  }

  return (
    <section
      id="jasa-website"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 bg-[#1A1A1A] text-white min-h-screen">
      {/* BACKGROUND IMAGE WITH NOISE OVERLAY */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/background/7.jpg"
          alt="bg-website"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[url('/patterns/noise.png')] opacity-5"></div>

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9A154] via-[#00C8D7] to-transparent"></div>

      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <motion.h2
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#D9A154] flex items-center">
              <TrendingUp className="mr-2 text-[#00C8D7]" />
              JASA WEBSITE
            </motion.h2>
            <p className="text-[#FFF8E7]/80 mt-2 max-w-2xl">
              Jasa pembuatan website profesional untuk berbagai kebutuhan bisnis
              Anda. Dikerjakan oleh tim developer berpengalaman dengan hasil
              terbaik.
            </p>
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-[#D9A154]/30 rounded-md mt-4">
            <Filter size={18} className="text-[#00C8D7]" />
            <span>Filter & Cari</span>
          </button>
        </div>

        {/* Desktop Search and Filter with Loading State */}
        <div className="hidden md:flex flex-col md:flex-row gap-4 mb-8">
          {!filtersLoaded ? (
            <>
              <SearchBarSkeleton />
              <FilterSkeleton />
            </>
          ) : (
            <>
              {/* Search bar */}
              <div className="relative flex-grow max-w-md">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D9A154]/70"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Cari jasa website..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] border border-[#D9A154]/30 rounded-md focus:outline-none focus:border-[#00C8D7] text-[#FFF8E7]"
                />
              </div>

              {/* Category filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "px-4 py-2 whitespace-nowrap transition-all duration-300",
                      selectedCategory === category.id
                        ? "bg-[#D9A154] text-[#1A1A1A] font-medium"
                        : "bg-[#2A2A2A] text-[#FFF8E7]/80 hover:bg-[#D9A154]/20 border border-[#D9A154]/30"
                    )}>
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] border border-[#D9A154]/30 rounded-md">
                  <span>Urutkan</span>
                  <ChevronDown size={16} className="text-[#D9A154]" />
                </button>
                <div className="absolute right-0 mt-1 w-48 bg-[#2A2A2A] border border-[#D9A154]/30 rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
                  <button
                    onClick={() => setSortBy("popular")}
                    className={cn(
                      "w-full text-left px-4 py-2 hover:bg-[#D9A154]/20",
                      sortBy === "popular" && "bg-[#D9A154]/20 text-[#D9A154]"
                    )}>
                    Paling Populer
                  </button>
                  <button
                    onClick={() => setSortBy("price-low")}
                    className={cn(
                      "w-full text-left px-4 py-2 hover:bg-[#D9A154]/20",
                      sortBy === "price-low" && "bg-[#D9A154]/20 text-[#D9A154]"
                    )}>
                    Harga Terendah
                  </button>
                  <button
                    onClick={() => setSortBy("price-high")}
                    className={cn(
                      "w-full text-left px-4 py-2 hover:bg-[#D9A154]/20",
                      sortBy === "price-high" &&
                        "bg-[#D9A154]/20 text-[#D9A154]"
                    )}>
                    Harga Tertinggi
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Mobile Search and Filter */}
        <AnimatePresence>
          {showMobileFilter && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mb-6 overflow-hidden">
              <div className="bg-[#2A2A2A] p-4 rounded-md border border-[#D9A154]/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-[#D9A154]">
                    Filter & Pencarian
                  </h3>
                  <button
                    onClick={() => setShowMobileFilter(false)}
                    title="Tutup filter">
                    <X size={18} className="text-[#FFF8E7]/70" />
                  </button>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D9A154]/70"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Cari jasa website..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-[#1A1A1A] border border-[#D9A154]/30 rounded-md focus:outline-none focus:border-[#00C8D7] text-[#FFF8E7]"
                  />
                </div>

                {/* Categories */}
                <div className="mb-4">
                  <label className="block text-sm text-[#FFF8E7]/70 mb-2">
                    Kategori
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "px-3 py-2 text-sm whitespace-nowrap transition-all duration-300",
                          selectedCategory === category.id
                            ? "bg-[#D9A154] text-[#1A1A1A] font-medium"
                            : "bg-[#1A1A1A] text-[#FFF8E7]/80 hover:bg-[#D9A154]/20 border border-[#D9A154]/30"
                        )}>
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <label className="block text-sm text-[#FFF8E7]/70 mb-2">
                    Urutkan
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => setSortBy("popular")}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm rounded",
                        sortBy === "popular"
                          ? "bg-[#D9A154] text-[#1A1A1A]"
                          : "bg-[#1A1A1A] border border-[#D9A154]/30"
                      )}>
                      Paling Populer
                    </button>
                    <button
                      onClick={() => setSortBy("price-low")}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm rounded",
                        sortBy === "price-low"
                          ? "bg-[#D9A154] text-[#1A1A1A]"
                          : "bg-[#1A1A1A] border border-[#D9A154]/30"
                      )}>
                      Harga Terendah
                    </button>
                    <button
                      onClick={() => setSortBy("price-high")}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm rounded",
                        sortBy === "price-high"
                          ? "bg-[#D9A154] text-[#1A1A1A]"
                          : "bg-[#1A1A1A] border border-[#D9A154]/30"
                      )}>
                      Harga Tertinggi
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-[#FFF8E7]/70 text-sm">
            Menampilkan {sortedWebsites.length} jasa{" "}
            {selectedCategory !== "all"
              ? `kategori ${
                  categories.find((c) => c.id === selectedCategory)?.name
                }`
              : ""}
            {searchTerm ? ` dengan kata kunci "${searchTerm}"` : ""}
          </p>
        </div>

        {/* GRID WEBSITE LIST with Loading State */}
        {!websitesLoaded ? (
          <GridSkeleton count={12}>
            <WebsiteServiceSkeleton />
          </GridSkeleton>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedWebsites.map((item, i) => (
              <motion.div
                key={i}
                onClick={() => router.push(`/website/${item.id}`)}
                className="group relative bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300 cursor-pointer">
                {/* Popular badge */}
                {item.popular && (
                  <div className="absolute top-0 right-0 bg-[#D9A154] text-[#1A1A1A] text-xs font-bold px-2 py-1 z-10">
                    HOT
                  </div>
                )}

                {/* Stock indicator */}
                <div
                  className={cn(
                    "absolute top-0 left-0 text-xs font-medium px-2 py-1 z-10",
                    item.stock === "Tersedia"
                      ? "bg-[#00C8D7]/80 text-[#1A1A1A]"
                      : "bg-[#A8743D]/80 text-[#1A1A1A]"
                  )}>
                  {item.stock}
                </div>

                {/* Image container */}
                <div className="relative w-full pt-[56.25%] bg-[#1A1A1A] overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#FFF8E7]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#D9A154] font-bold">{item.price}</p>
                    {item.popular && (
                      <div className="flex items-center">
                        <Star
                          size={14}
                          className="text-[#D9A154] fill-[#D9A154]"
                        />
                        <span className="text-sm text-[#FFF8E7]/70 ml-1">
                          4.9
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <button
                      onClick={() => router.push(`/website/${item.id}`)}
                      className="w-full bg-[#D9A154] text-[#1A1A1A] font-medium py-2 rounded-md hover:bg-[#A8743D] transition-colors">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {websitesLoaded && sortedWebsites.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#FFF8E7]/70">
              Tidak ada jasa website yang sesuai dengan filter yang dipilih.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
              }}
              className="mt-4 px-4 py-2 bg-[#D9A154] text-[#1A1A1A] font-medium rounded-md">
              Reset Filter
            </button>
          </div>
        )}

        {/* Load more button */}
        {websitesLoaded && sortedWebsites.length > 6 && (
          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-[#2A2A2A] border border-[#D9A154]/30 text-[#FFF8E7] hover:bg-[#D9A154]/20 transition-colors duration-300 flex items-center gap-2 mx-auto">
              <span>Lihat Lebih Banyak</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </motion.div>

      {/* References & Testimonials Section */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#D9A154] mb-4">
              Website yang Telah Kami Buat
            </h2>
            <p className="text-[#FFF8E7]/80 max-w-2xl mx-auto">
              Kami telah membantu berbagai perusahaan dalam membangun identitas
              digital mereka. Setiap website yang kami buat dirancang dengan
              fokus pada pengalaman pengguna dan performa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteReferences.map((ref, i) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-[#2A2A2A] rounded-xl overflow-hidden border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block text-xs font-medium text-[#00C8D7] bg-[#1A1A1A] px-3 py-1 rounded-full mb-3">
                        {ref.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                        {ref.title}
                      </h3>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D9A154] hover:text-[#00C8D7] transition-colors">
                        <span className="text-sm">Kunjungi Website</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#2A2A2A] p-6 rounded-xl border border-[#D9A154]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D9A154]/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#D9A154]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D9A154]">
                  100% Kepuasan
                </h3>
              </div>
              <p className="text-[#FFF8E7]/80">
                Kami berkomitmen memberikan hasil terbaik dan memastikan
                kepuasan klien.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#2A2A2A] p-6 rounded-xl border border-[#D9A154]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D9A154]/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#D9A154]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D9A154]">
                  Garansi 100%
                </h3>
              </div>
              <p className="text-[#FFF8E7]/80">
                Garansi uang kembali jika hasil tidak sesuai dengan kesepakatan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#2A2A2A] p-6 rounded-xl border border-[#D9A154]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D9A154]/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#D9A154]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D9A154]">
                  Tepat Waktu
                </h3>
              </div>
              <p className="text-[#FFF8E7]/80">
                Pengerjaan sesuai timeline yang telah disepakati bersama.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
