import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface IndustryCardProps {
  icon: LucideIcon
  name: string
  description: string
  href?: string
}

export function IndustryCard({ icon: Icon, name, description, href }: IndustryCardProps) {
  const content = (
    <div className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-border/70 bg-card px-5 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_20px_40px_-16px_rgba(15,23,42,0.2)]">
      <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <h3 className="font-heading text-base font-bold text-foreground">{name}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
