import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { StatCounter } from "@/components/shared/stat-counter"
import { StaggerContainer } from "@/components/motion/stagger-container"
import { FadeIn } from "@/components/motion/fade-in"
import { manufacturingStats } from "@/data/stats"

const images = [
  { src: "/images/factory/production-line.webp", alt: "Compressor assembly line" },
  { src: "/images/factory/quality-testing.webp", alt: "Compressor unit under inspection" },
  { src: "/images/factory/facility.webp", alt: "Finished units staged in the warehouse" },
]

export function ManufacturingExcellence() {
  return (
    <SectionWrapper background="primary" className="text-primary-foreground">
      <SectionHeading
        eyebrow="Manufacturing Excellence"
        title="Built on a Foundation of Precision Engineering"
        description="Every unit is assembled, tested, and quality-inspected in-house before it ships."
        invert
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {images.map((image, index) => (
          <FadeIn key={image.src} delay={index * 0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </FadeIn>
        ))}
      </div>

      <StaggerContainer className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
        {manufacturingStats.map((stat) => (
          <StatCounter key={stat.label} stat={stat} invert />
        ))}
      </StaggerContainer>
    </SectionWrapper>
  )
}
