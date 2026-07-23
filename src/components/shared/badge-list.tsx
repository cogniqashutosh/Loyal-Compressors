import { ShieldCheck, BadgeCheck } from "lucide-react"
import type { Certification } from "@/data/certifications"

interface BadgeListProps {
  certifications: Certification[]
  variant?: "compact" | "detailed"
}

export function BadgeList({ certifications, variant = "compact" }: BadgeListProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3">
        {certifications.map((cert) => (
          <div
            key={cert.code}
            className="flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground/80"
          >
            <ShieldCheck className="size-4 text-primary" strokeWidth={2} />
            {cert.code}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {certifications.map((cert) => (
        <div
          key={cert.code}
          className="group relative flex flex-col items-start gap-3 rounded-2xl border border-border/70 bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.2)]"
        >
          <span className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <BadgeCheck className="size-3.5" strokeWidth={2} />
            Verified
          </span>
          <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <ShieldCheck className="size-5" strokeWidth={1.75} />
          </div>
          <div>
            <p className="font-heading text-base font-bold text-foreground">{cert.code}</p>
            <p className="text-sm font-medium text-muted-foreground">{cert.name}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
        </div>
      ))}
    </div>
  )
}
