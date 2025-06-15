"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "../lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "default" | "card" | "text" | "circle" | "button"
  animate?: boolean
}

export function Skeleton({ className, variant = "default", animate = true }: SkeletonProps) {
  const baseClasses = "bg-gradient-to-r from-[#2A2A2A] via-[#3A3A3A] to-[#2A2A2A] rounded"

  const variants = {
    default: "h-4 w-full",
    card: "h-48 w-full",
    text: "h-3 w-3/4",
    circle: "h-12 w-12 rounded-full",
    button: "h-10 w-24",
  }

  const skeletonClasses = cn(baseClasses, variants[variant], className)

  if (animate) {
    return (
      <motion.div
        className={skeletonClasses}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />
    )
  }

  return <div className={skeletonClasses} />
}

// Website Service Card Skeleton
export function WebsiteServiceSkeleton() {
  return (
    <div className="bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#D9A154]/20 p-0">
      {/* Image skeleton */}
      <Skeleton variant="card" className="rounded-none" />

      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton variant="text" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-3 w-16" />
          <div className="flex items-center space-x-1">
            <Skeleton variant="circle" className="h-4 w-4" />
            <Skeleton className="h-3 w-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Account Card Skeleton
export function AccountCardSkeleton() {
  return (
    <div className="bg-[#2A2A2A] rounded-md overflow-hidden border border-[#D9A154]/20">
      {/* Stock indicator skeleton */}
      <div className="relative">
        <Skeleton className="absolute top-0 left-0 h-6 w-16 rounded-none" />
        <Skeleton className="absolute top-0 right-0 h-6 w-12 rounded-none" />

        {/* Image skeleton */}
        <div className="relative w-full pt-[100%] bg-[#1A1A1A]">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Skeleton variant="circle" className="h-12 w-12" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-3 space-y-2">
        <Skeleton className="h-4 w-full" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-16" />
          <div className="flex items-center space-x-1">
            <Skeleton variant="circle" className="h-3 w-3" />
            <Skeleton className="h-3 w-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Carousel Reference Skeleton
export function CarouselReferenceSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Skeleton variant="card" className="h-full rounded-lg" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-1/2" />
        <Skeleton variant="button" className="w-32 h-10" />
      </div>
    </div>
  )
}

// Domain Price Card Skeleton
export function DomainPriceSkeleton() {
  return (
    <div className="relative p-4 rounded-lg border border-[#D9A154]/20 bg-[#2A2A2A]">
      <div className="text-center space-y-2">
        <Skeleton className="h-8 w-12 mx-auto" />
        <Skeleton className="h-5 w-20 mx-auto" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  )
}

// Filter Skeleton
export function FilterSkeleton() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-20 rounded-full flex-shrink-0" />
      ))}
    </div>
  )
}

// Search Bar Skeleton
export function SearchBarSkeleton() {
  return (
    <div className="relative flex-grow max-w-md">
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  )
}

// Grid Skeleton Wrapper
export function GridSkeleton({
  children,
  count = 6,
  className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6",
}: {
  children: React.ReactNode
  count?: number
  className?: string
}) {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  )
}

// Loading State Component
export function LoadingState({
  message = "Memuat data...",
  showSpinner = true,
}: {
  message?: string
  showSpinner?: boolean
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      {showSpinner && (
        <motion.div
          className="w-8 h-8 border-2 border-[#D9A154] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      )}
      <p className="text-[#FFF8E7]/70 text-sm">{message}</p>
    </div>
  )
}

// Shimmer effect for enhanced loading
export function ShimmerEffect({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
