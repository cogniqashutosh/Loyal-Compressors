import type { Metadata } from "next"
import Image from "next/image"
import { Target, Eye, FlaskConical, Factory, Users, PackageCheck, ShieldCheck, Award, Globe, Smile } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { Timeline } from "@/components/shared/timeline"
import { BadgeList } from "@/components/shared/badge-list"
import { CtaBanner } from "@/components/shared/cta-banner"
import { CountUp } from "@/components/motion/count-up"
import { JsonLd } from "@/components/shared/json-ld"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { mission, vision, coreValues, timeline, rdOverview } from "@/data/about"
import { certifications } from "@/data/certifications"
import { company } from "@/data/company"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "15+ years of industrial air compressor manufacturing — factory direct, ISO certified, exporting to 50+ countries worldwide.",
  alternates: { canonical: `${siteConfig.url}/about` },
}

const manufacturingHighlights = [
  {
    value: 5000,
    suffix: " m²",
    label: "Manufacturing Facility",
    image: "/images/factory/facility.webp",
    alt: "Finished units staged in the manufacturing facility warehouse",
    icon: Factory,
  },
  {
    value: 100,
    suffix: "+",
    label: "Skilled Employees",
    image: "/images/stat-employees.jpg",
    alt: "Skilled employees assembling equipment on the production line",
    icon: Users,
  },
  {
    value: 8000,
    suffix: "+",
    label: "Units Annual Capacity",
    image: "/images/factory/production-line.webp",
    alt: "Compressor assembly line representing annual production capacity",
    icon: PackageCheck,
  },
  {
    value: 3,
    suffix: "-stage",
    label: "Quality Testing Process",
    image: "/images/timeline-vsd.jpg",
    alt: "Compressor unit undergoing multi-stage quality testing with instrumentation panel",
    icon: ShieldCheck,
  },
]

const rdStats = [
  { value: 15, suffix: "+", label: "Years of Experience", icon: Award },
  { value: 50, suffix: "+", label: "Countries Served", icon: Globe },
  { value: 1000, suffix: "+", label: "Industrial Solutions Delivered", icon: PackageCheck },
  { value: 99, suffix: "%", label: "Customer Satisfaction", icon: Smile },
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
        <div className="mt-14">
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

        <StaggerContainer className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {manufacturingHighlights.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem
                key={item.label}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                </div>
                <div className="p-4">
                  <div className="font-heading text-2xl font-bold text-white tabular-nums md:text-3xl">
                    <CountUp value={item.value} suffix={item.suffix} />
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-primary-foreground/70 md:text-sm">
                    {item.label}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn className="rounded-2xl border border-border/70 bg-card p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.22)] md:p-10">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
              <FlaskConical className="size-6" strokeWidth={1.75} />
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold text-foreground">
              Research &amp; Development
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{rdOverview}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <StaggerContainer className="grid grid-cols-2 gap-5">
              {rdStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <StaggerItem
                    key={stat.label}
                    className="rounded-2xl border border-border/70 bg-card p-6 shadow-[0_4px_10px_rgba(15,23,42,0.08),0_20px_40px_-16px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <div className="font-heading mt-4 text-3xl font-bold text-primary tabular-nums">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </StaggerItem>
                )
              })}
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
