"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  Minimize2,
  Maximize2,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "../lib/utils";

// Chat messages data
const initialMessages = [
  {
    id: 1,
    type: "bot",
    message: "Halo! 👋 Selamat datang di JAWA Store!",
    timestamp: new Date(Date.now() - 5000),
    avatar: "/assets/bot-avatar.png",
  },
  {
    id: 2,
    type: "bot",
    message:
      "Saya Rizki, founder JAWA Store. Ada yang bisa saya bantu hari ini?",
    timestamp: new Date(Date.now() - 3000),
    avatar: "/assets/developer-avatar.png",
  },
];

// Quick reply options
const quickReplies = [
  { id: 1, text: "Info Harga Website", icon: "💻" },
  { id: 2, text: "Akun Premium", icon: "⭐" },
  { id: 3, text: "Konsultasi Gratis", icon: "💬" },
  { id: 4, text: "Portfolio", icon: "🎨" },
  { id: 5, text: "Garansi", icon: "🛡️" },
  { id: 6, text: "Cara Pemesanan", icon: "📋" },
];

// Auto responses
const autoResponses: { [key: string]: string } = {
  "info harga website":
    "Harga website mulai dari Rp 1.5jt untuk landing page. Mau konsultasi detail? 😊",
  "akun premium":
    "Kami punya Netflix, Disney+, Canva, ChatGPT dan 50+ akun lainnya. Mau lihat katalog lengkap?",
  "konsultasi gratis":
    "Siap! Konsultasi gratis via WhatsApp. Kapan waktu yang tepat untuk call?",
  portfolio:
    "Portfolio kami ada 500+ project! Mau lihat yang sesuai bidang Anda?",
  garansi:
    "Semua layanan kami bergaransi 100%! Website 30 hari, akun 7-30 hari tergantung paket.",
  "cara pemesanan":
    "Mudah banget! 1) Chat WA 2) Konsultasi 3) Deal harga 4) Bayar 5) Terima hasil berkualitas! ✨",
};

// Typing indicator component
const TypingIndicator = () => (
  <div className="flex items-center gap-1 p-2">
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-[#D9A154] rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
    <span className="text-[#FFF8E7]/70 text-xs ml-2">
      Rizki sedang mengetik...
    </span>
  </div>
);

// Online status indicator
const OnlineStatus = ({ isOnline }: { isOnline: boolean }) => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <div
        className={cn(
          "w-3 h-3 rounded-full",
          isOnline ? "bg-green-500" : "bg-red-500"
        )}
      />
      {isOnline && (
        <motion.div
          className="absolute inset-0 w-3 h-3 rounded-full bg-green-500"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      )}
    </div>
    <span className="text-xs text-[#FFF8E7]/80">
      {isOnline ? "Online sekarang" : "Akan balas segera"}
    </span>
  </div>
);

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate online/offline status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1); // 90% online
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Add welcome message after delay
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      if (messages.length === 2) {
        const welcomeMessage = {
          id: Date.now(),
          type: "bot" as const,
          message:
            "Btw, lagi ada promo spesial nih! Diskon 20% untuk pembuatan website. Mau tau detail? 🎉",
          timestamp: new Date(),
          avatar: "/assets/developer-avatar.png",
        };
        setMessages((prev) => [...prev, welcomeMessage]);
        if (!isOpen) setUnreadCount((prev) => prev + 1);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isOpen, messages.length]);

  // Handle send message
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user" as const,
      message: inputMessage,
      timestamp: new Date(),
      avatar: "/assets/user-avatar.png",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);

      // Auto response
      const lowerMessage = inputMessage.toLowerCase();
      let response =
        "Terima kasih pesannya! Saya akan segera merespon via WhatsApp untuk pembahasan lebih detail. 😊";

      for (const [key, value] of Object.entries(autoResponses)) {
        if (lowerMessage.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage = {
        id: Date.now() + 1,
        type: "bot" as const,
        message: response,
        timestamp: new Date(),
        avatar: "/assets/developer-avatar.png",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1500 + Math.random() * 1000);
  };

  // Handle quick reply
  const handleQuickReply = (reply: (typeof quickReplies)[0]) => {
    setInputMessage(reply.text);
    setTimeout(() => handleSendMessage(), 100);
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Toggle chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  // Floating chat button
  if (!isOpen) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-50" // Changed right-6 to left-6
      >
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative bg-gradient-to-r from-[#D9A154] to-[#A8743D] text-[#1A1A1A] p-4 rounded-full shadow-2xl shadow-[#D9A154]/30 border-2 border-[#00C8D7]/30">
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#D9A154]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />

          <MessageCircle className="w-6 h-6 relative z-10" />

          {/* Unread badge */}
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {unreadCount}
            </motion.div>
          )}

          {/* Online indicator */}
          <div className="absolute -top-1 -left-1">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white">
              <motion.div
                className="w-full h-full bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </div>
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Changed x: 20 to x: -20
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-[#2A2A2A] text-[#FFF8E7] px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-[#D9A154]/20">
          💬 Ada yang bisa dibantu?
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-r-4 border-r-[#2A2A2A] border-y-4 border-y-transparent" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-6 left-6 z-50" // Changed right-6 to left-6
    >
      <div
        className={cn(
          "bg-[#1A1A1A] border border-[#D9A154]/30 rounded-xl shadow-2xl overflow-hidden transition-all duration-300",
          isMinimized ? "w-80 h-16" : "w-80 h-96"
        )}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D9A154] to-[#A8743D] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/assets/developer-avatar.png"
                alt="Rizki"
                width={40}
                height={40}
                className="rounded-full border-2 border-[#00C8D7]"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A1A]">Rizki - JAWA Store</h4>
              <OnlineStatus isOnline={isOnline} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1 hover:bg-[#1A1A1A]/20 rounded transition-colors">
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#1A1A1A]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#1A1A1A]" />
              )}
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-[#1A1A1A]/20 rounded transition-colors">
              {isMinimized ? (
                <Maximize2 className="w-4 h-4 text-[#1A1A1A]" />
              ) : (
                <Minimize2 className="w-4 h-4 text-[#1A1A1A]" />
              )}
            </button>
            <button
              onClick={toggleChat}
              className="p-1 hover:bg-[#1A1A1A]/20 rounded transition-colors"
              title="Tutup chat"
              aria-label="Tutup chat">
              <X className="w-4 h-4 text-[#1A1A1A]" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-[#2A2A2A]/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-2",
                    message.type === "user" ? "justify-end" : "justify-start"
                  )}>
                  {message.type === "bot" && (
                    <Image
                      src={message.avatar || "/placeholder.svg"}
                      alt="Avatar"
                      width={32}
                      height={32}
                      className="rounded-full flex-shrink-0"
                    />
                  )}

                  <div
                    className={cn(
                      "max-w-[70%] p-3 rounded-lg text-sm",
                      message.type === "user"
                        ? "bg-[#D9A154] text-[#1A1A1A] rounded-br-none"
                        : "bg-[#2A2A2A] text-[#FFF8E7] border border-[#D9A154]/20 rounded-bl-none"
                    )}>
                    <p>{message.message}</p>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>

                  {message.type === "user" && (
                    <Image
                      src="/assets/user-avatar.png"
                      alt="You"
                      width={32}
                      height={32}
                      className="rounded-full flex-shrink-0"
                    />
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 justify-start">
                  <Image
                    src="/assets/developer-avatar.png"
                    alt="Rizki"
                    width={32}
                    height={32}
                    className="rounded-full flex-shrink-0"
                  />
                  <div className="bg-[#2A2A2A] border border-[#D9A154]/20 rounded-lg rounded-bl-none">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 border-t border-[#D9A154]/20">
              <div className="flex flex-wrap gap-1">
                {quickReplies.slice(0, 3).map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-[#2A2A2A] hover:bg-[#D9A154]/20 text-[#FFF8E7] px-2 py-1 rounded border border-[#D9A154]/20 hover:border-[#D9A154]/50 transition-all duration-200">
                    {reply.icon} {reply.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#D9A154]/20 bg-[#1A1A1A]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ketik pesan..."
                  className="flex-1 bg-[#2A2A2A] border border-[#D9A154]/30 rounded-lg px-3 py-2 text-[#FFF8E7] text-sm focus:outline-none focus:border-[#00C8D7] transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-[#D9A154] hover:bg-[#A8743D] disabled:opacity-50 disabled:cursor-not-allowed text-[#1A1A1A] p-2 rounded-lg transition-colors"
                  title="Kirim pesan"
                  aria-label="Kirim pesan">
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="flex justify-center gap-4 mt-3 pt-3 border-t border-[#D9A154]/10">
                <a
                  href="https://wa.me/628XXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-green-500 hover:text-green-400 text-xs transition-colors">
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </a>
                <a
                  href="tel:+628XXXXXXX"
                  className="flex items-center gap-1 text-[#00C8D7] hover:text-[#D9A154] text-xs transition-colors">
                  <Phone className="w-3 h-3" />
                  Call
                </a>
                <a
                  href="mailto:admin@jawastore.com"
                  className="flex items-center gap-1 text-[#D9A154] hover:text-[#A8743D] text-xs transition-colors">
                  <Mail className="w-3 h-3" />
                  Email
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
