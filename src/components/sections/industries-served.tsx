import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { IndustryCard } from "@/components/shared/industry-card"
import { FeaturedIndustryCard } from "@/components/shared/featured-industry-card"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { industries } from "@/data/industries"

const featuredSlug = "manufacturing"

export function IndustriesServed() {
  const featured = industries.find((i) => i.slug === featuredSlug)
  const gridIndustries = industries.filter((i) => i.slug !== featuredSlug)

  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Compressed Air Solutions Across Every Sector"
        description="Every industry has different air quality, pressure, and reliability demands — our systems are configured to match."
      />

      <StaggerContainer className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {featured && (
          <FeaturedIndustryCard
            slug={featured.slug}
            name={featured.name}
            description={featured.description}
            icon={featured.icon}
            image="/images/factory/production-line.webp"
          />
        )}
        {gridIndustries.map((industry) => (
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
  )
}
