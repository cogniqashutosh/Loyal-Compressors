import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { SpecsTable } from "@/components/shared/specs-table"
import { DownloadCard } from "@/components/shared/download-card"
import { ModelCard } from "@/components/shared/model-card"
import { InquiryForm } from "@/components/shared/inquiry-form"
import { JsonLd } from "@/components/shared/json-ld"
import { FadeIn } from "@/components/motion/fade-in"
import { getProductCategory } from "@/data/products"
import { productModels, getProductModel, getModelsByCategory } from "@/data/product-models"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema, productSchema } from "@/lib/seo"

interface ModelPageProps {
  params: Promise<{ category: string; slug: string }>
}

export function generateStaticParams() {
  return productModels.map((model) => ({ category: model.categorySlug, slug: model.slug }))
}

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { category, slug } = await params
  const model = getProductModel(category, slug)
  if (!model) return {}

  return {
    title: `${model.modelNumber} — ${model.name}`,
    description: model.shortDescription,
    alternates: { canonical: `${siteConfig.url}/products/${category}/${slug}` },
    openGraph: {
      title: model.name,
      description: model.shortDescription,
      images: [{ url: model.image }],
    },
  }
}

export default async function ModelDetailPage({ params }: ModelPageProps) {
  const { category, slug } = await params
  const model = getProductModel(category, slug)
  const categoryData = getProductCategory(category)

  if (!model || !categoryData) notFound()

  const relatedModels = getModelsByCategory(category)
    .filter((m) => m.slug !== model.slug)
    .slice(0, 3)

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: categoryData.name, href: `/products/${categoryData.slug}` },
    { label: model.modelNumber },
  ]

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={productSchema({
          name: model.name,
          description: model.shortDescription,
          image: model.image,
          sku: model.modelNumber,
          category: categoryData.name,
        })}
      />
      <section className="border-b border-border/70 bg-muted/40">
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      <SectionWrapper className="pt-10 md:pt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FadeIn>
              <span className="text-sm font-semibold tracking-wide text-brand-accent uppercase">
                {categoryData.name}
              </span>
              <h1 className="font-heading mt-2 text-3xl font-bold text-balance text-foreground sm:text-4xl">
                {model.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {model.shortDescription}
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-muted">
              <Image
                src={model.image}
                alt={model.name}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </FadeIn>

            <FadeIn delay={0.15} className="mt-10">
              <h2 className="font-heading text-xl font-bold text-foreground">Specifications</h2>
              <div className="mt-5">
                <SpecsTable specs={model.specs} />
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-10">
              <h2 className="font-heading text-xl font-bold text-foreground">Applications</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {model.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground/80"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25} className="mt-10 max-w-md">
              <DownloadCard
                label={model.datasheetLabel}
                fileSize="Placeholder PDF"
                href="/downloads/loyal-product-catalog.pdf"
              />
            </FadeIn>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border/70 bg-card p-6">
              <h2 className="font-heading text-lg font-bold text-foreground">
                Request a Quote for {model.modelNumber}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team will follow up within one business day with pricing and lead time.
              </p>
              <div className="mt-6">
                <InquiryForm
                  variant="compact"
                  defaultProductInterest={categoryData.name}
                  defaultMessage={`I'm interested in the ${model.name}.`}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {relatedModels.length > 0 && (
        <SectionWrapper background="muted">
          <SectionHeading eyebrow="Explore More" title={`More ${categoryData.name}`} align="left" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedModels.map((related) => (
              <ModelCard key={related.slug} model={related} />
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  )
}
