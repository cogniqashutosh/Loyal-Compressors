import type { ReactNode } from "react"
import Image from "next/image"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { FadeIn } from "@/components/motion/fade-in"

interface PageHeroProps {
  breadcrumbs: { label: string; href?: string }[]
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  image?: string
  imageAlt?: string
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  actions,
  image,
  imageAlt,
}: PageHeroProps) {
  if (image) {
    return (
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/35" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-28 md:px-10">
          <div className="absolute top-8 left-6 md:top-10 md:left-10">
            <Breadcrumbs items={breadcrumbs} invert />
          </div>
          <FadeIn className="max-w-3xl">
            {eyebrow && (
              <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-brand-accent uppercase">
                {eyebrow}
              </span>
            )}
            <h1 className="font-heading text-3xl font-bold text-balance text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                {description}
              </p>
            )}
            {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
          </FadeIn>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-border/70 bg-muted">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <FadeIn className="mt-6 max-w-3xl">
          {eyebrow && (
            <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-brand-accent uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
          {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
        </FadeIn>
      </div>
    </section>
  )
}
