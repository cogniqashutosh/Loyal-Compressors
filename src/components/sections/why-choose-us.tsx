import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { FeatureCard } from "@/components/shared/feature-card"
import { WhyChooseHeroStat } from "@/components/shared/why-choose-hero-stat"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { buttonVariants } from "@/components/ui/button"
import { whyChooseUs } from "@/data/why-choose-us"
import { company } from "@/data/company"

export function WhyChooseUs() {
  return (
    <SectionWrapper background="muted">
      <SectionHeading eyebrow="Why Choose LOYAL" title="Engineered for Reliability, Backed by Experience" />

      <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <WhyChooseHeroStat
          icon={Award}
          value={Number.parseInt(company.yearsExperience, 10)}
          suffix="+"
          title="Years Experience"
          description="Over a decade and a half engineering compressed air solutions for demanding industries."
        />
        {whyChooseUs.map((item) => (
          <StaggerItem key={item.title}>
            <FeatureCard icon={item.icon} title={item.title} description={item.description} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-12 flex justify-center">
        <Link href="/contact" className={buttonVariants({ variant: "default", className: "h-11 gap-2 px-6" })}>
          Get in Touch
          <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" />
        </Link>
      </div>
    </SectionWrapper>
  )
}
