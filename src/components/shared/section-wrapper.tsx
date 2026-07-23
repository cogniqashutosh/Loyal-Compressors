import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  background?: "default" | "muted" | "primary"
  id?: string
}

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
}

export function SectionWrapper({
  children,
  className,
  background = "default",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgroundClasses[background], className)}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">{children}</div>
    </section>
  )
}
