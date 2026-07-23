"use client"

import { MotionConfig } from "framer-motion"
import type { ReactNode } from "react"

// Ensures every Framer Motion animation site-wide respects the user's
// prefers-reduced-motion OS setting automatically.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
