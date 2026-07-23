import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/motion/fade-in"

interface CtaBannerProps {
  title: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <FadeIn className="rounded-3xl bg-primary px-8 py-14 text-center md:px-16 md:py-16">
      <h2 className="font-heading mx-auto max-w-2xl text-2xl font-bold text-balance text-primary-foreground md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">{description}</p>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href={primaryHref}
          className={buttonVariants({ variant: "cta", className: "h-11 gap-2 px-6 text-base" })}
        >
          {primaryLabel}
          <ArrowRight className="size-4" />
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className={buttonVariants({
              variant: "outline",
              className:
                "h-11 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10",
            })}
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </FadeIn>
  )
}
