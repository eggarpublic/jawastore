"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightLeft, Zap, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface BarterOption {
  quantity: number;
  item: string;
  icon: string;
}

interface ItemData {
  id: number;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  barter: BarterOption[];
  category: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  isHot?: boolean;
  description: string;
  condition: string;
  stock: number;
}

const itemsData: ItemData[] = [
  {
    id: 1,
    name: "Rakun ",
    image: "/gambar/grow4.png?height=200&width=200",
    price: "70.000 ",
    originalPrice: "100.000 ",
    discount: "25%",
    barter: [{ quantity: 0, item: "744 T ", icon: "🍄" }],
    category: "Weapon",
    rarity: "legendary",
    isHot: true,
    description: "Katana legendaris dengan damage tinggi dan efek khusus",
    condition: "Perfect Condition",
    stock: 3,
  },
  {
    id: 2,
    name: "744 T ",
    image: "/gambar/744.png?height=200&width=200",
    price: "3.000 ",
    barter: [],
    category: "Buah",
    rarity: "epic",
    description: "Armor dengan defense tinggi dan durability maksimal",
    condition: "Good Condition",
    stock: 7,
  },
  {
    id: 3,
    name: "Broto",
    image: "/gambar/grow1.png?height=200&width=200",
    price: "40.000 ",
    barter: [{ quantity: 0, item: "744 T ", icon: "🍄" }],
    category: "Vehicle",
    rarity: "rare",
    isHot: true,
    description: "Motor trail dengan speed maksimal dan handling terbaik",
    condition: "Excellent Condition",
    stock: 2,
  },
  {
    id: 4,
    name: "Dragonfly",
    image: "/gambar/grow2.png?height=200&width=200",
    price: "50.000 ",
    barter: [{ quantity: 0, item: "744 T ", icon: "🍄" }],
    category: "Weapon",
    rarity: "rare",
    description: "Pistol dengan akurasi tinggi dan damage maksimal",
    condition: "Very Good",
    stock: 10,
  },
  {
    id: 5,
    name: "Disco Bee",
    image: "/gambar/grow3.png?height=200&width=200",
    price: "90.000 ",
    originalPrice: "100.000 ",
    discount: "17%",
    barter: [{ quantity: 0, item: "744 T ", icon: "🍄" }],
    category: "Property",
    rarity: "legendary",
    isHot: true,
    description: "Rumah mewah dengan fasilitas lengkap dan lokasi strategis",
    condition: "Brand New",
    stock: 1,
  },
  {
    id: 6,
    name: "T -REX",
    image: "/gambar/grow5.png?height=200&width=200",
    price: "70.000 ",
    barter: [{ quantity: 0, item: "744 T ", icon: "🍄" }],
    category: "Gadget",
    rarity: "epic",
    description: "Drone dengan kamera 4K dan jangkauan maksimal",
    condition: "Like New",
    stock: 5,
  },
  {
    id: 6,
    name: "Mimic Octopus",
    image: "/gambar/grow6.png?height=200&width=200",
    price: "50.000 ",
    barter: [{ quantity: 0, item: "744 T ", icon: "🍄" }],
    category: "Gadget",
    rarity: "epic",
    description: "Drone dengan kamera 4K dan jangkauan maksimal",
    condition: "Like New",
    stock: 5,
  },
];

const rarityColors = {
  common: "from-gray-400 to-gray-600",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-yellow-400 to-orange-600",
};

const rarityBorders = {
  common: "border-gray-400",
  rare: "border-blue-400",
  epic: "border-purple-400",
  legendary: "border-yellow-400",
};

export default function ItemGrow() {
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(itemsData.length / 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Removed unused handleItemClick function to fix the compile error

  const closeModal = () => {
    setSelectedItem(null);
    setIsAutoPlaying(true);
  };

  const getVisibleItems = () => {
    const itemsPerView = 3;
    const startIndex = currentIndex * itemsPerView;
    return itemsData.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with GTA theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">
              ITEM MARKETPLACE
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PREMIUM ITEMS
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Koleksi item premium dengan sistem barter yang fleksibel.
            <span className="text-cyan-400 font-semibold">
              {" "}
              Klik item untuk detail lengkap!
            </span>
          </p>
        </motion.div>

        {/* Items Grid with Auto-scroll */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}>
            {getVisibleItems().map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}>
                <div
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 ${
                    rarityBorders[item.rarity]
                  } rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer`}>
                  {/* Hot Badge */}
                  {item.isHot && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        🔥 HOT
                      </motion.div>
                    </div>
                  )}

                  {/* Discount Badge */}
                  {item.discount && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-2 py-1 rounded">
                        -{item.discount}
                      </span>
                    </div>
                  )}

                  {/* Rarity Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      rarityColors[item.rarity]
                    } opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>

                  {/* Item Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl bg-black flex items-center justify-center h-[200px]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 max-h-[200px]"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Item Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </h3>
                        <span className="border border-cyan-400 text-cyan-400 px-2 py-0.5 rounded text-xs">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-700/60 text-white px-2 py-0.5 rounded font-semibold">
                          Stock:{" "}
                          <span
                            className={
                              item.stock === 0
                                ? "text-red-400"
                                : item.stock < 3
                                ? "text-yellow-400"
                                : "text-green-400"
                            }>
                            {item.stock}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-cyan-400">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                      {item.discount && (
                        <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded font-bold">
                          -{item.discount}
                        </span>
                      )}
                    </div>

                    {/* Barter Options - moved up for visibility */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <ArrowRightLeft className="w-4 h-4" />
                        <span>Barter:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.barter.map((barter, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg px-3 py-1 text-xs flex items-center gap-1">
                            <span>{barter.icon}</span>
                            <span className="text-white">
                              {barter.quantity}x {barter.item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: Math.ceil(itemsData.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-cyan-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  title={`Go to slide ${index + 1}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 mx-auto">
            <div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? "bg-green-400" : "bg-red-400"
              }`}></div>
            {isAutoPlaying ? "Auto-scroll aktif" : "Auto-scroll paused"}
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedItem.name}
                  </h3>
                  <span
                    className={`bg-gradient-to-r ${
                      rarityColors[selectedItem.rarity]
                    } text-white px-2 py-1 rounded`}>
                    {selectedItem.rarity.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                  title="Tutup detail"
                  aria-label="Tutup detail">
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="w-full h-64 bg-black flex items-center justify-center rounded-xl mb-4 overflow-hidden">
                    <Image
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.name}
                      width={400}
                      height={256}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Kondisi:</span>
                      <span className="text-green-400">
                        {selectedItem.condition}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Kategori:</span>
                      <span className="text-white">
                        {selectedItem.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Deskripsi
                    </h4>
                    <p className="text-gray-300">{selectedItem.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Harga
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-cyan-400">
                        {selectedItem.price}
                      </span>
                      {selectedItem.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {selectedItem.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      Opsi Barter
                    </h4>
                    <div className="space-y-2">
                      {selectedItem.barter.map((barter, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-700/50 border border-gray-600 rounded-lg p-3 flex items-center gap-3">
                          <span className="text-2xl">{barter.icon}</span>
                          <div>
                            <span className="text-white font-semibold">
                              {barter.quantity}x {barter.item}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Beli Sekarang
                    </button>
                    <button className="flex-1 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent font-semibold py-3 rounded-xl flex items-center justify-center">
                      <ArrowRightLeft className="w-4 h-4 mr-2" />
                      Barter
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
