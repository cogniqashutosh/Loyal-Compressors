import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { SpecsTable } from "@/components/shared/specs-table"
import { ProductCard } from "@/components/shared/product-card"
import { CtaBanner } from "@/components/shared/cta-banner"
import { DownloadCard } from "@/components/shared/download-card"
import { ProductModels } from "@/components/sections/product-models"
import { JsonLd } from "@/components/shared/json-ld"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { buttonVariants } from "@/components/ui/button"
import { productCategories, getProductCategory } from "@/data/products"
import { getModelsByCategory } from "@/data/product-models"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema, productSchema } from "@/lib/seo"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return productCategories.map((product) => ({ category: product.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const product = getProductCategory(category)
  if (!product) return {}

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `${siteConfig.url}/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const product = getProductCategory(category)

  if (!product) notFound()

  const relatedProducts = productCategories.filter((p) => p.slug !== product.slug).slice(0, 3)
  const models = getModelsByCategory(product.slug)

  const breadcrumbItems = [{ label: "Products", href: "/products" }, { label: product.name }]

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={productSchema({
          name: product.name,
          description: product.shortDescription,
          image: product.image,
          category: product.name,
        })}
      />
      <PageHero
        breadcrumbs={breadcrumbItems}
        eyebrow="Product Category"
        title={product.name}
        description={product.shortDescription}
        actions={
          <>
            <Link href="/contact" className={buttonVariants({ variant: "cta", className: "h-11 gap-2 px-6" })}>
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/products"
              className={buttonVariants({ variant: "outline", className: "h-11 px-6" })}
            >
              View All Products
            </Link>
          </>
        }
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{product.overview}</p>

            <ul className="mt-6 flex flex-col gap-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">Specifications</h2>
            <div className="mt-6">
              <SpecsTable specs={product.specs} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-foreground">Applications</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.applications.map((application) => (
                <span
                  key={application}
                  className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  {application}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <DownloadCard
                label={`${product.name} Catalog`}
                fileSize="Placeholder PDF"
                href="/downloads/loyal-product-catalog.pdf"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {models.length > 0 && (
        <SectionWrapper>
          <SectionHeading
            eyebrow="Available Models"
            title={`${product.name} Models`}
            description="Compare specifications across models or view full details for a datasheet and quote."
            align="left"
          />
          <div className="mt-10">
            <ProductModels models={models} />
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper background="muted">
        <SectionHeading eyebrow="Explore More" title="Related Products" align="left" />
        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((related) => (
            <StaggerItem key={related.slug}>
              <ProductCard product={related} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <CtaBanner
          title={`Ready to spec ${product.name} for your application?`}
          description="Send us your requirements and our team will follow up with a tailored quote within one business day."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="Download Catalog"
          secondaryHref="/downloads/loyal-product-catalog.pdf"
        />
      </SectionWrapper>
    </>
  )
}
