import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { IndustrySelector } from "@/components/shared/industry-selector"
import { CtaBanner } from "@/components/shared/cta-banner"
import { JsonLd } from "@/components/shared/json-ld"
import { FadeIn } from "@/components/motion/fade-in"
import { industries } from "@/data/industries"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Industrial air compressor solutions engineered for manufacturing, mining, food & beverage, automotive, textile, medical, and electronics industries.",
  alternates: { canonical: `${siteConfig.url}/industries` },
}

export default function IndustriesPage() {
  const selectorIndustries = industries.map((industry) => ({
    slug: industry.slug,
    name: industry.name,
    description: industry.description,
    image: industry.image,
    icon: <industry.icon className="size-4.5" strokeWidth={1.75} />,
  }))

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Industries" }])} />
      <PageHero
        breadcrumbs={[{ label: "Industries" }]}
        eyebrow="Industries We Serve"
        title="Compressed Air Solutions Across Every Sector"
        description="Every industry has different air quality, pressure, and reliability demands — our systems are configured to match yours."
        image="/images/industries-hero.jpg"
        imageAlt="Automated warehouse and logistics facility representing the industries LOYAL serves"
      />

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Explore by Sector"
          title="Select an Industry"
          description="Click through to see how our systems are configured for each sector's specific demands."
          align="left"
        />
        <FadeIn className="mt-10">
          <IndustrySelector industries={selectorIndustries} />
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <CtaBanner
          title="Don't see your industry listed?"
          description="Our engineering team has configured compressed air systems for dozens of specialized applications — tell us about yours."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="View Products"
          secondaryHref="/products"
        />
      </SectionWrapper>
    </>
  )
}
