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

      <div className="flex flex-col gap-14 md:gap-16">
        {milestones.map((milestone, index) => {
          const Icon = iconMap[milestone.icon]
          const isRight = index % 2 === 1

          return (
            <div key={milestone.year} className="relative md:grid md:grid-cols-2 md:items-center md:gap-10">
              {/* icon node */}
              <span className="absolute top-0 left-0 z-10 flex size-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-[0_0_0_4px_var(--background)] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <Icon className="size-4" strokeWidth={2} />
              </span>

              {/* mobile: image + text combined */}
              <FadeIn delay={index * 0.06} once={false} className="pl-16 md:hidden">
                <MilestoneCard milestone={milestone} />
              </FadeIn>

              {/* desktop: image panel */}
              <FadeIn
                direction={isRight ? "right" : "left"}
                delay={index * 0.06}
                once={false}
                className={cn(
                  "hidden md:block md:row-start-1",
                  isRight ? "md:col-start-2" : "md:col-start-1"
                )}
              >
                <div className={isRight ? "pl-10" : "pr-10"}>
                  <ImagePanel milestone={milestone} />
                </div>
              </FadeIn>

              {/* desktop: text panel — opposite side */}
              <FadeIn
                direction={isRight ? "left" : "right"}
                delay={index * 0.06 + 0.05}
                once={false}
                className={cn(
                  "hidden md:block md:row-start-1",
                  isRight ? "md:col-start-1" : "md:col-start-2"
                )}
              >
                <div className={isRight ? "pr-10" : "pl-10"}>
                  <TextPanel milestone={milestone} align={isRight ? "right" : "left"} />
                </div>
              </FadeIn>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ImagePanel({ milestone }: { milestone: Milestone }) {
  const Icon = iconMap[milestone.icon]
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/70 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_20px_40px_-16px_rgba(15,23,42,0.2)]">
      <Image
        src={milestone.image}
        alt={milestone.title}
        fill
        sizes="(max-width: 768px) 100vw, 480px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
      <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-lg bg-background/90 text-primary shadow-sm backdrop-blur-sm">
        <Icon className="size-4" strokeWidth={1.75} />
      </span>
    </div>
  )
}

function TextPanel({ milestone, align }: { milestone: Milestone; align: "left" | "right" }) {
  return (
    <div className={cn("max-w-lg text-left", align === "right" && "ml-auto")}>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-brand-accent" />
        <p className="font-heading text-sm font-bold tracking-[0.15em] text-brand-accent uppercase">
          {milestone.year}
        </p>
      </div>
      <h3 className="font-heading mt-4 text-2xl font-bold text-balance text-foreground md:text-[1.75rem]">
        {milestone.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground text-justify">{milestone.description}</p>
      <MilestoneFacts facts={milestone.facts} />
    </div>
  )
}

function MilestoneFacts({ facts }: { facts: [string, string] }) {
  return (
    <ul className="mt-5 inline-block w-fit space-y-1.5 rounded-xl border border-border/70 bg-card px-4 py-3 text-left">
      {facts.map((fact) => (
        <li key={fact} className="flex items-center gap-2 text-sm font-medium whitespace-nowrap text-foreground">
          <span className="size-1.5 shrink-0 rounded-full bg-brand-accent" />
          {fact}
        </li>
      ))}
    </ul>
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
          sizes="100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-lg bg-background/90 text-primary shadow-sm backdrop-blur-sm">
          <Icon className="size-4" strokeWidth={1.75} />
        </span>
      </div>
      <div className="p-5 text-left">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-8 bg-brand-accent" />
          <p className="font-heading text-xs font-bold tracking-[0.15em] text-brand-accent uppercase">
            {milestone.year}
          </p>
        </div>
        <h3 className="font-heading mt-2 text-lg font-bold text-foreground">{milestone.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-justify">{milestone.description}</p>
        <ul className="mt-4 inline-block w-fit space-y-1.5 rounded-xl border border-border/70 bg-background px-3.5 py-2.5">
          {milestone.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2 text-[13px] font-medium whitespace-nowrap text-foreground">
              <span className="size-1.5 shrink-0 rounded-full bg-brand-accent" />
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
