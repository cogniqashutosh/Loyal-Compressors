import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { IndustryCard } from "@/components/shared/industry-card"
import { CtaBanner } from "@/components/shared/cta-banner"
import { JsonLd } from "@/components/shared/json-ld"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
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
        <StaggerContainer className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <IndustryCard
                icon={industry.icon}
                name={industry.name}
                description={industry.description}
                href={`/industries/${industry.slug}`}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
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
