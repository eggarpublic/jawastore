"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { cn } from "../lib/utils";
import { domainPricing } from "../data/domainPricing";

export default function DomainPricing() {
  return (
    <div className="mb-16">
      <motion.h3
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-[#D9A154] mb-8 flex items-center">
        <Globe className="mr-2 text-[#00C8D7]" />
        HARGA DOMAIN
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {domainPricing.map((domain, index) => (
          <motion.div
            key={domain.extension}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className={cn(
              "relative p-4 rounded-lg border transition-all duration-300 hover:scale-105",
              domain.popular
                ? "bg-[#D9A154]/10 border-[#D9A154] hover:bg-[#D9A154]/20"
                : "bg-[#2A2A2A] border-[#D9A154]/20 hover:border-[#D9A154]/50"
            )}>
            {domain.popular && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#D9A154] text-[#1A1A1A] text-xs font-bold px-2 py-1 rounded">
                POPULER
              </div>
            )}
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FFF8E7] mb-1">
                {domain.extension}
              </div>
              <div className="text-[#D9A154] font-bold mb-2">
                {domain.price}
              </div>
              <div className="text-[#FFF8E7]/60 text-xs">
                {domain.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
