"use client";

import { motion } from "framer-motion";
import { Bell, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaDiscord } from "react-icons/fa";

// Developer data
const developerInfo = {
  name: "Ahmad Rizki Pratama",
  title: "Full-Stack Developer & Digital Solutions Expert",
  responseTime: "Biasanya merespon dalam 1 jam",
  availability: "Senin-Jumat: 09.00 - 17.00 WIB",
};

// Contact channels
const contactChannels = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="w-6 h-6" />,
    url: "https://chat.whatsapp.com/GxC5EAAZxqy5ynDYsIaPnb",
    description: "Respon tercepat (1-30 menit)",
    color: "bg-green-600 hover:bg-green-700",
    badge: "Fast Response",
  },
  {
    name: "Instagram DM",
    icon: <FaInstagram className="w-6 h-6" />,
    url: "https://www.instagram.com/jawastore.biz.id/",
    description: "Respon dalam 1-3 jam",
    color:
      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    badge: "Active Daily",
  },
  {
    name: "Discord",
    icon: <FaDiscord className="w-6 h-6" />,
    url: "https://discord.gg/X3Dxk82U",
    description: "Update & pengumuman proyek",
    color: "bg-indigo-600 hover:bg-indigo-700",
    badge: "Community",
  },
];

// Announcement data
const announcements = [
  {
    id: 1,
    title: "Instagram",
    date: "15 Juni 2025",
    content: "Customer service kami sudah aktif di Instagram!",
  },
  {
    id: 2,
    title: "Discord",
    date: "6 Mei 2025",
    content: "Customer service kami sudah aktif di Discord!",
  },
];

export default function KontakSection() {
  return (
    <section
      id="kontak"
      className="relative py-16 px-4 sm:px-6 bg-gray-950 text-white overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 mix-blend-soft-light"></div>

      {/* Logo watermark */}
      <div className="absolute right-8 top-8 opacity-10">
        <div className="relative w-24 h-24">
          <Image
            src="/logo/logo.png"
            alt="JAWA Store Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with logo */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-4">
            <div className="relative w-16 h-16">
              <Image
                src="/logo/logo.png"
                alt="JAWA Store Logo"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Hubungi Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pilih saluran komunikasi yang paling nyaman untuk Anda
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Channels */}
          <div className="space-y-8">
            {/* Response Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-400/10 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Waktu Respon
                  </h3>
                  <p className="text-gray-300">{developerInfo.responseTime}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    {developerInfo.availability}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Channels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-4">
              {contactChannels.map((channel, index) => (
                <motion.a
                  key={index}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`block ${channel.color} rounded-xl p-5 shadow-lg transition-all duration-300 transform hover:shadow-xl`}>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {channel.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-lg">{channel.name}</h4>
                        <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                          {channel.badge}
                        </span>
                      </div>
                      <p className="text-white/90 text-sm">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Announcements */}
          <div className="space-y-8">
            {/* Announcements Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">
                Pengumuman Terbaru
              </h3>
            </motion.div>

            {/* Announcements List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-gray-900 hover:bg-gray-850 border border-gray-800 rounded-xl p-5 transition-all duration-300 cursor-pointer hover:shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-yellow-400">
                      {announcement.title}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {announcement.date}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {announcement.content}
                  </p>
                </div>
              ))}

              {/* Discord CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 border border-indigo-500/30 rounded-xl p-5 mt-6 text-center">
                <div className="flex justify-center mb-3">
                  <FaDiscord className="w-10 h-10 text-indigo-400" />
                </div>
                <h4 className="font-bold text-white mb-2">
                  Join Komunitas Discord
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Dapatkan update real-time dan diskusi langsung dengan
                  developer
                </p>
                <a
                  href="https://discord.gg/X3Dxk82U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Gabung Sekarang
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-yellow-400/10 rounded-full">
              <CheckCircle className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Garansi Respon Cepat
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kami menjamin respon dalam waktu 24 jam untuk semua pesan. Untuk
            respon tercepat, gunakan WhatsApp selama jam kerja.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
