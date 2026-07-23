import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { ProductCard } from "@/components/shared/product-card"
import { FeaturedProductBanner } from "@/components/shared/featured-product-banner"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { productCategories } from "@/data/products"

export function ProductCategories() {
  const featured = productCategories.find((p) => p.slug === "compressed-air-systems")
  const gridProducts = productCategories.filter((p) => p.slug !== "compressed-air-systems")

  return (
    <SectionWrapper id="products">
      <SectionHeading
        eyebrow="Our Product Range"
        title="A Comprehensive Range of Air Compression Solutions"
        description="From compressors to complete turnkey systems — engineered for continuous industrial duty."
      />

      <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gridProducts.map((product) => (
          <StaggerItem key={product.slug}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {featured && (
        <div className="mt-6">
          <FeaturedProductBanner product={featured} />
        </div>
      )}
    </SectionWrapper>
  )
}
