import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { ProductCategory } from "@/types/product"
import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/motion/fade-in"

export function FeaturedProductBanner({ product }: { product: ProductCategory }) {
  const Icon = product.icon

  return (
    <FadeIn className="overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.35)]">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="relative aspect-[4/3] lg:col-span-2 lg:aspect-auto">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 lg:col-span-3 lg:p-12">
          <div className="flex items-center gap-2">
            {Icon && (
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-primary-foreground">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
            )}
            <span className="text-xs font-semibold tracking-wide text-brand-accent uppercase">
              Flagship Offering
            </span>
          </div>

          <h3 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            {product.name}
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-primary-foreground/80">
            {product.shortDescription}
          </p>

          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-primary-foreground/90">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-accent" strokeWidth={2} />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              href={`/products/${product.slug}`}
              className={buttonVariants({ variant: "cta", className: "h-11 gap-2 px-6" })}
            >
              Explore Systems
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "outline",
                className:
                  "h-11 border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10",
              })}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
