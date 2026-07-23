import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AlertTriangle } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { ProductCard } from "@/components/shared/product-card"
import { CtaBanner } from "@/components/shared/cta-banner"
import { JsonLd } from "@/components/shared/json-ld"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { industries, getIndustry } from "@/data/industries"
import { productCategories } from "@/data/products"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema } from "@/lib/seo"

interface IndustryPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}

  return {
    title: `${industry.name} Air Compressors`,
    description: industry.description,
    alternates: { canonical: `${siteConfig.url}/industries/${industry.slug}` },
  }
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) notFound()

  const recommendedProducts = productCategories.filter((p) =>
    industry.recommendedProducts.includes(p.slug)
  )

  const breadcrumbItems = [{ label: "Industries", href: "/industries" }, { label: industry.name }]

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <PageHero
        breadcrumbs={breadcrumbItems}
        eyebrow="Industry"
        title={`Compressed Air Solutions for ${industry.name}`}
        description={industry.description}
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{industry.overview}</p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-foreground">Key Challenges</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3 text-sm text-foreground/85">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-brand-accent" strokeWidth={2} />
                  {challenge}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </SectionWrapper>

      {recommendedProducts.length > 0 && (
        <SectionWrapper background="muted">
          <SectionHeading
            eyebrow="Recommended"
            title="Products for This Industry"
            align="left"
          />
          <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedProducts.map((product) => (
              <StaggerItem key={product.slug}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>
      )}

      <SectionWrapper className="pt-0">
        <CtaBanner
          title={`Ready to spec a compressed air system for your ${industry.name.toLowerCase()} operation?`}
          description="Share your requirements and our engineering team will recommend the right configuration."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="View All Industries"
          secondaryHref="/industries"
        />
      </SectionWrapper>
    </>
  )
}
