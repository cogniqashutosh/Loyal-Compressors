"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  once?: boolean
}

const offsetByDirection = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: -70 },
  right: { x: 70 },
  none: {},
}

export function FadeIn({ children, className, delay = 0, direction = "up", once = true }: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offsetByDirection[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
