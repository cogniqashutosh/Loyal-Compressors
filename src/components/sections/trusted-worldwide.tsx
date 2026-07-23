import { Globe2, Award, Package, Star } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { StatCard } from "@/components/shared/stat-card"
import { BadgeList } from "@/components/shared/badge-list"
import { StaggerContainer } from "@/components/motion/stagger-container"
import { trustedWorldwideStats } from "@/data/stats"
import { certifications } from "@/data/certifications"

const statIcons = [Award, Globe2, Package, Star]

export function TrustedWorldwide() {
  return (
    <SectionWrapper background="muted">
      <SectionHeading eyebrow="Trusted Worldwide" title="A Global Manufacturing Partner" />

      <StaggerContainer className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {trustedWorldwideStats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} icon={statIcons[index % statIcons.length]} />
        ))}
      </StaggerContainer>

      <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border/70 bg-card px-8 py-10 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_-16px_rgba(15,23,42,0.16)]">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
          <Globe2 className="size-7" strokeWidth={1.75} />
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          From Southeast Asia to Latin America, Africa, and the Middle East — LOYAL air compressors
          run in factories, mines, and processing plants across 50+ export markets, backed by full
          export documentation and freight support.
        </p>
        <BadgeList certifications={certifications} />
      </div>
    </SectionWrapper>
  )
}
