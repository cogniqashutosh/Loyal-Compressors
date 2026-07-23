import { Sparkles } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { ProductCard } from "@/components/shared/product-card"
import { Carousel } from "@/components/shared/carousel"
import { featuredProductCategories } from "@/data/products"

export function FeaturedProducts() {
  return (
    <SectionWrapper background="muted">
      <SectionHeading
        eyebrow="Featured Products"
        title="Popular Solutions Among Our Global Customers"
      />

      <div className="mt-14">
        <Carousel>
          {featuredProductCategories.map((product) => (
            <div key={product.slug} className="relative h-full">
              <span className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-brand-accent px-3 py-1.5 text-xs font-semibold text-brand-accent-foreground shadow-sm">
                <Sparkles className="size-3.5" />
                Popular Choice
              </span>
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </div>
    </SectionWrapper>
  )
}
