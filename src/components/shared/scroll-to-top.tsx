"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-label="Scroll to top"
          className="fixed right-24 bottom-6 z-40 flex size-14 items-center justify-center rounded-full bg-brand-accent text-brand-accent-foreground shadow-[0_8px_24px_-6px_rgba(26,92,230,0.5)] transition-all duration-200 hover:scale-110 hover:bg-brand-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:right-28"
        >
          <ArrowUp className="size-5" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
