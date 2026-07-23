"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
}

export function Carousel({ children, className, itemClassName }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  function scrollByAmount(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.85 * direction
    track.scrollBy({ left: amount, behavior: "smooth" })
  }

  function handleScroll() {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    setProgress(max > 0 ? track.scrollLeft / max : 0)
  }

  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16" />

      <div
        ref={trackRef}
        role="region"
        aria-label="carousel"
        tabIndex={0}
        onScroll={handleScroll}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 focus-visible:outline-none"
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={cn(
              "w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc(33.333%-1rem)]",
              itemClassName
            )}
          >
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        aria-label="Previous"
        className="absolute top-1/2 left-0 z-20 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-[0_4px_10px_rgba(15,23,42,0.1)] transition-all hover:scale-105 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        aria-label="Next"
        className="absolute top-1/2 right-0 z-20 hidden size-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-[0_4px_10px_rgba(15,23,42,0.1)] transition-all hover:scale-105 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:flex"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Previous"
          className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:hidden"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-border/70">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-150"
            style={{ width: `${Math.max(12, progress * 100)}%` }}
          />
        </div>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Next"
          className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:hidden"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
