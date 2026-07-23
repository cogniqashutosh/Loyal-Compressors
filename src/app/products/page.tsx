import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { ProductCard } from "@/components/shared/product-card"
import { CtaBanner } from "@/components/shared/cta-banner"
import { JsonLd } from "@/components/shared/json-ld"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { buttonVariants } from "@/components/ui/button"
import { productCategories } from "@/data/products"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Industrial Air Compressor Products",
  description:
    "Browse LOYAL's full range of industrial air compressors, dryers, tanks, accessories, and complete compressed air systems — engineered for continuous industrial duty and global export.",
  alternates: { canonical: `${siteConfig.url}/products` },
}

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Products" }])} />
      <PageHero
        breadcrumbs={[{ label: "Products" }]}
        eyebrow="Product Range"
        title="Industrial Air Compressors & Compressed Air Systems"
        description="From single compressors to fully engineered turnkey systems — every product is built for continuous industrial duty and backed by our engineering and export support teams."
        actions={
          <>
            <Link href="/contact" className={buttonVariants({ variant: "cta", className: "h-11 gap-2 px-6" })}>
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/downloads/loyal-product-catalog.pdf"
              className={buttonVariants({ variant: "outline", className: "h-11 px-6" })}
            >
              Download Catalog
            </Link>
          </>
        }
      />

      <SectionWrapper>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product) => (
            <StaggerItem key={product.slug}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <SectionWrapper background="muted" className="pt-0">
        <CtaBanner
          title="Not sure which system fits your application?"
          description="Share your air demand, pressure, and application details — our engineering team will recommend the right configuration."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="View Industries We Serve"
          secondaryHref="/industries"
        />
      </SectionWrapper>
    </>
  )
}
