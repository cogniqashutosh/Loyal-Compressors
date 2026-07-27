import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface IndustryCardProps {
  icon: LucideIcon
  name: string
  description: string
  image: string
  href?: string
}

export function IndustryCard({ icon: Icon, name, description, image, href }: IndustryCardProps) {
  const content = (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_20px_40px_-16px_rgba(15,23,42,0.2)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
        <span className="absolute top-3 left-3 flex size-9 items-center justify-center rounded-lg bg-background/90 text-primary shadow-sm backdrop-blur-sm">
          <Icon className="size-4.5" strokeWidth={1.75} />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-base font-bold text-foreground">{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        {href && (
          <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
            Learn more
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        )}
      </div>
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
