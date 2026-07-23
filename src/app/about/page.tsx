import type { Metadata } from "next"
import Image from "next/image"
import { Target, Eye, FlaskConical } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { Timeline } from "@/components/shared/timeline"
import { BadgeList } from "@/components/shared/badge-list"
import { CtaBanner } from "@/components/shared/cta-banner"
import { StatCounter } from "@/components/shared/stat-counter"
import { JsonLd } from "@/components/shared/json-ld"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { mission, vision, coreValues, timeline, rdOverview } from "@/data/about"
import { certifications } from "@/data/certifications"
import { manufacturingStats, trustedWorldwideStats } from "@/data/stats"
import { company } from "@/data/company"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "15+ years of industrial air compressor manufacturing — factory direct, ISO certified, exporting to 50+ countries worldwide.",
  alternates: { canonical: `${siteConfig.url}/about` },
}

const factoryImages = [
  { src: "/images/factory/production-line.webp", alt: "Compressor assembly line" },
  { src: "/images/factory/quality-testing.webp", alt: "Compressor unit under inspection" },
  { src: "/images/factory/facility.webp", alt: "Finished units staged in the warehouse" },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "About" }])} />
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow="About Us"
        title={`${company.yearsExperience} Years of Manufacturing Excellence`}
        description={`${company.legalName} designs and manufactures industrial air compressors and complete compressed air systems, exporting to 50+ countries worldwide.`}
        image="/images/about-hero.jpg"
        imageAlt="Precision CNC machining of a compressor component"
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FadeIn className="rounded-2xl border border-border/70 bg-card p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.22)]">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
              <Target className="size-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-heading mt-5 text-xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{mission}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-2xl border border-border/70 bg-card p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.22)]">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
              <Eye className="size-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-heading mt-5 text-xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{vision}</p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <StaggerItem
              key={value.title}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.22)]"
            >
              <h3 className="font-heading text-base font-bold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeading eyebrow="Our Journey" title="Company Timeline" align="left" />
        <div className="mt-12 max-w-3xl">
          <Timeline milestones={timeline} />
        </div>
      </SectionWrapper>

      <SectionWrapper background="primary">
        <SectionHeading
          eyebrow="Manufacturing Capability"
          title="Inside Our Production Facility"
          description="Every compressor is assembled, tested, and quality-inspected in-house before it ships."
          invert
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {factoryImages.map((image, index) => (
            <FadeIn
              key={image.src}
              delay={index * 0.1}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </FadeIn>
          ))}
        </div>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          {manufacturingStats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} invert />
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
              <FlaskConical className="size-6" strokeWidth={1.75} />
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold text-foreground">
              Research &amp; Development
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{rdOverview}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <StaggerContainer className="grid grid-cols-2 gap-8">
              {trustedWorldwideStats.map((stat) => (
                <StatCounter key={stat.label} stat={stat} />
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Certified to International Standards"
          description="Independently tested and certified so you can specify our equipment with confidence."
        />
        <div className="mt-14">
          <BadgeList certifications={certifications} variant="detailed" />
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <CtaBanner
          title="Want to see our facility for yourself?"
          description="Schedule a virtual factory tour or request a quote — our team will walk you through our production capability."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="View Products"
          secondaryHref="/products"
        />
      </SectionWrapper>
    </>
  )
}
