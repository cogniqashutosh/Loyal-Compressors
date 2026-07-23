import { Quote, Star } from "lucide-react"
import type { Testimonial } from "@/types/testimonial"

export function TestimonialCard({ quote, name, title, company, country, placeholder }: Testimonial) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-border/70 bg-card p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_20px_40px_-16px_rgba(15,23,42,0.18)]">
      <div className="flex items-center justify-between">
        <Quote className="size-8 text-brand-accent/70" strokeWidth={1.5} />
        <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-brand-accent text-brand-accent" />
          ))}
        </div>
      </div>
      <p className="flex-1 text-base leading-relaxed text-foreground/90">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center justify-between border-t border-border/70 pt-4">
        <div>
          <p className="font-heading text-sm font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">
            {title}, {company}
          </p>
        </div>
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{country}</span>
      </div>
      {placeholder && (
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground/70 uppercase">
          Placeholder quote
        </span>
      )}
    </div>
  )
}
