import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { ProductCategory } from "@/types/product"
import { buttonVariants } from "@/components/ui/button"

interface ProductCardProps {
  product: ProductCategory
  variant?: "default" | "compact"
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const Icon = product.icon
  const keySpec = product.specs[0]

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.22)]">
      <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {Icon && (
          <span className="absolute top-3 left-3 flex size-10 items-center justify-center rounded-xl bg-background/90 text-primary shadow-sm backdrop-blur-sm">
            <Icon className="size-5" strokeWidth={1.75} />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-lg font-bold text-foreground">{product.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.shortDescription}</p>
        {variant === "default" && (
          <ul className="mt-1 flex flex-col gap-2">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
          <Link
            href={`/products/${product.slug}`}
            className={buttonVariants({ variant: "outline", size: "sm", className: "h-9 gap-1.5 px-4" })}
          >
            View Details
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          {variant === "default" && keySpec && (
            <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">
              {keySpec.value}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
