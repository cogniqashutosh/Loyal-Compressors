"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "none"
}

const distanceByDirection = {
  up: 24,
  down: -24,
  none: 0,
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: distanceByDirection[direction] },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
