"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { Search, ChevronDown, Star, TrendingUp, Filter, X } from "lucide-react";
import { cn } from "../lib/utils";
import {
  AccountCardSkeleton,
  FilterSkeleton,
  SearchBarSkeleton,
  GridSkeleton,
  LoadingState,
} from "./skeleton-loader";
import { useRouter } from "next/navigation";
import { Account, AccountsData } from "../data/accounts";

// Categories for filtering
const categories = [
  { id: "all", name: "Semua" },
  { id: "streaming", name: "Streaming" },
  { id: "vpn", name: "VPN" },
  { id: "editing", name: "Editing" },
  { id: "ai", name: "AI Tools" },
  { id: "social", name: "Social Media" },
];

export default function JasaAkun() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [isLoading, setIsLoading] = useState(true);
  const [filtersLoaded, setFiltersLoaded] = useState(false);
  const [accountsLoaded, setAccountsLoaded] = useState(false);
  const [akunList, setAkunList] = useState<Account[]>([]);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Load accounts data
  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const response = await fetch("/data/accounts.json");
        const data: AccountsData = await response.json();
        setAkunList(data.accounts);
      } catch (error) {
        console.error("Error loading accounts:", error);
      }
    };
    loadAccounts();
  }, []);

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

    // Simulate accounts loading
    const accountsTimer = setTimeout(() => {
      setAccountsLoaded(true);
    }, 1800);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(filtersTimer);
      clearTimeout(accountsTimer);
    };
  }, []);

  // Filter accounts based on category and search term
  const filteredAkun = akunList.filter((item: Account) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort accounts based on sortBy
  const sortedAkun = [...filteredAkun].sort((a, b) => {
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
          <LoadingState message="Memuat akun premium..." />
        </div>
      </section>
    );
  }

  return (
    <section
      id="jasa-akun"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 bg-[#1A1A1A] text-white min-h-screen">
      {/* BACKGROUND IMAGE WITH NOISE OVERLAY */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/background/6.jpg"
          alt="bg-akun"
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
              PREMIUM ACCOUNTS
            </motion.h2>
            <p className="text-[#FFF8E7]/80 mt-2 max-w-2xl">
              Akun premium & digital tools untuk berbagai kebutuhan. Semua akun
              dijamin aktif dengan garansi penuh.
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
                  placeholder="Cari akun premium..."
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
                    placeholder="Cari akun premium..."
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
            Menampilkan {sortedAkun.length} akun{" "}
            {selectedCategory !== "all"
              ? `kategori ${
                  categories.find((c) => c.id === selectedCategory)?.name
                }`
              : ""}
            {searchTerm ? ` dengan kata kunci "${searchTerm}"` : ""}
          </p>
        </div>

        {/* GRID ACCOUNT LIST with Loading State */}
        {!accountsLoaded ? (
          <GridSkeleton count={12}>
            <AccountCardSkeleton />
          </GridSkeleton>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {sortedAkun.map((item, i) => (
              <motion.div
                key={i}
                onClick={() =>
                  router.push(`/account/${item.title.toLowerCase()}`)
                }
                className="group relative bg-[#2A2A2A] rounded-md overflow-hidden border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-300 cursor-pointer">
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
                <div className="relative w-full pt-[100%] bg-[#1A1A1A] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-medium text-[#FFF8E7] line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#D9A154] font-bold text-sm">
                      {item.price}
                    </p>
                    {item.popular && (
                      <div className="flex items-center">
                        <Star
                          size={12}
                          className="text-[#D9A154] fill-[#D9A154]"
                        />
                        <span className="text-xs text-[#FFF8E7]/70 ml-1">
                          4.9
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {accountsLoaded && sortedAkun.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#FFF8E7]/70">
              Tidak ada akun yang sesuai dengan filter yang dipilih.
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
        {accountsLoaded && sortedAkun.length > 24 && (
          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-[#2A2A2A] border border-[#D9A154]/30 text-[#FFF8E7] hover:bg-[#D9A154]/20 transition-colors duration-300 flex items-center gap-2 mx-auto">
              <span>Lihat Lebih Banyak</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
