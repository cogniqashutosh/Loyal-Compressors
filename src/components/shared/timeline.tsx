"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Rocket, Globe, Zap, ShieldCheck, TrendingUp, Award } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { cn } from "@/lib/utils"
import type { Milestone, MilestoneIconName } from "@/data/about"

const iconMap: Record<MilestoneIconName, typeof Rocket> = {
  Rocket,
  Globe,
  Zap,
  ShieldCheck,
  TrendingUp,
  Award,
}

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 55%"],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative">
      {/* center line — desktop, static track */}
      <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block" />
      {/* center line — desktop, animated draw */}
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute inset-y-0 left-1/2 hidden w-px origin-top -translate-x-1/2 bg-gradient-to-b from-brand-accent to-primary md:block"
      />
      {/* left line — mobile, static track */}
      <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border md:hidden" />
      {/* left line — mobile, animated draw */}
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute top-0 bottom-0 left-[19px] w-px origin-top bg-gradient-to-b from-brand-accent to-primary md:hidden"
      />

      <div className="flex flex-col gap-10 md:gap-10">
        {milestones.map((milestone, index) => {
          const Icon = iconMap[milestone.icon]
          const isRight = index % 2 === 1

          return (
            <div key={milestone.year} className="relative md:grid md:grid-cols-2 md:items-center md:gap-10">
              {/* icon node */}
              <span className="absolute top-0 left-0 z-10 flex size-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-[0_0_0_4px_var(--background)] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <Icon className="size-4" strokeWidth={2} />
              </span>

              {/* mobile card */}
              <FadeIn delay={index * 0.06} once={false} className="pl-16 md:hidden">
                <MilestoneCard milestone={milestone} />
              </FadeIn>

              {/* desktop alternating cards — left cards slide in from the left, right cards from the right */}
              <FadeIn
                direction={isRight ? "right" : "left"}
                delay={index * 0.06}
                once={false}
                className={cn("hidden md:block", isRight ? "col-start-2" : "col-start-1 row-start-1")}
              >
                <div className={isRight ? "pl-10" : "pr-10"}>
                  <MilestoneCard milestone={milestone} />
                </div>
              </FadeIn>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function MilestoneCard({ milestone }: { milestone: Milestone }) {
  const Icon = iconMap[milestone.icon]
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_20px_40px_-16px_rgba(15,23,42,0.2)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={milestone.image}
          alt={milestone.title}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-lg bg-background/90 text-primary shadow-sm backdrop-blur-sm">
          <Icon className="size-4" strokeWidth={1.75} />
        </span>
        <span className="absolute bottom-3 left-3 text-sm font-bold tracking-wide text-white uppercase">
          {milestone.year}
        </span>
      </div>
      <div className="p-5 text-left">
        <h3 className="font-heading text-lg font-bold text-foreground">{milestone.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
      </div>
    </div>
  )
}
