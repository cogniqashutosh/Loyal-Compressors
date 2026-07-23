import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { StaggerItem } from "@/components/motion/stagger-container"

interface FeaturedIndustryCardProps {
  slug: string
  name: string
  description: string
  image: string
  icon: LucideIcon
}

export function FeaturedIndustryCard({
  slug,
  name,
  description,
  image,
  icon: Icon,
}: FeaturedIndustryCardProps) {
  return (
    <StaggerItem className="col-span-2">
      <Link
        href={`/industries/${slug}`}
        className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl"
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-primary/5" />
        <div className="relative flex flex-col gap-2 p-6">
          <span className="flex size-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
            <Icon className="size-5" strokeWidth={1.75} />
          </span>
          <h3 className="font-heading text-xl font-bold text-white">{name}</h3>
          <p className="max-w-md text-sm leading-relaxed text-white/80">{description}</p>
        </div>
      </Link>
    </StaggerItem>
  )
}
