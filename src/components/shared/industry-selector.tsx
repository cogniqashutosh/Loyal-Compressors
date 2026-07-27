"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export interface SelectorIndustry {
  slug: string
  name: string
  description: string
  image: string
  icon: ReactNode
}

export function IndustrySelector({ industries }: { industries: SelectorIndustry[] }) {
  const [activeSlug, setActiveSlug] = useState(industries[0]?.slug)
  const active = industries.find((i) => i.slug === activeSlug) ?? industries[0]

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-8">
      {/* industry list */}
      <div className="relative lg:col-span-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-muted to-transparent lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-muted to-transparent lg:hidden" />
        <div className="scrollbar-hide -mx-6 flex snap-x gap-2 overflow-x-auto px-6 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0">
          {industries.map((industry) => {
            const isActive = industry.slug === active?.slug
            return (
              <button
                key={industry.slug}
                type="button"
                onClick={() => setActiveSlug(industry.slug)}
                className={cn(
                  "group relative flex shrink-0 snap-start items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300 lg:shrink",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-8px_rgba(15,23,42,0.35)]"
                    : "bg-card text-foreground hover:-translate-y-0.5 hover:bg-muted"
                )}
              >
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300",
                    isActive ? "scale-110 bg-white/15 text-white" : "bg-primary/8 text-primary"
                  )}
                >
                  {industry.icon}
                </span>
                <span className="font-heading text-sm font-bold whitespace-nowrap lg:text-base">
                  {industry.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* active panel */}
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] lg:col-span-3">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted sm:aspect-[16/8]">
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
                  <span className="mb-2 inline-flex size-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                    {active.icon}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                    {active.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {active.description}
                </p>
                <Link
                  href={`/industries/${active.slug}`}
                  className={cn(buttonVariants({ variant: "outline" }), "mt-5 gap-2")}
                >
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
