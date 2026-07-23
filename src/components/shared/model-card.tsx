import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ProductModel } from "@/types/product-model"
import { Checkbox } from "@/components/ui/checkbox"
import { buttonVariants } from "@/components/ui/button"

interface ModelCardProps {
  model: ProductModel
  selected?: boolean
  onToggleCompare?: (slug: string, checked: boolean) => void
  compareDisabled?: boolean
}

export function ModelCard({ model, selected, onToggleCompare, compareDisabled }: ModelCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card">
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={model.image}
          alt={model.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {onToggleCompare && (
          <label
            className="absolute top-3 right-3 flex items-center gap-2 rounded-full bg-background/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
            title={compareDisabled ? "You can compare up to 3 models" : undefined}
          >
            <Checkbox
              checked={selected ?? false}
              disabled={compareDisabled}
              onCheckedChange={(checked) => onToggleCompare(model.slug, checked === true)}
            />
            Compare
          </label>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="text-xs font-semibold tracking-wide text-brand-accent uppercase">
          {model.modelNumber}
        </span>
        <h3 className="font-heading text-lg font-bold text-foreground">{model.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{model.shortDescription}</p>
        <div className="mt-auto pt-4">
          <Link
            href={`/products/${model.categorySlug}/${model.slug}`}
            className={buttonVariants({ variant: "outline", size: "sm", className: "h-9 gap-1.5 px-4" })}
          >
            View Details
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
