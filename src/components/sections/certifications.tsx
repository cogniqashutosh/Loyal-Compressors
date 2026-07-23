import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { BadgeList } from "@/components/shared/badge-list"
import { certifications } from "@/data/certifications"

export function Certifications() {
  return (
    <SectionWrapper background="muted">
      <SectionHeading
        eyebrow="Certifications & Quality"
        title="Manufactured to International Standards"
        description="Independently tested and certified so you can specify LOYAL equipment with confidence."
      />

      <div className="mt-14">
        <BadgeList certifications={certifications} variant="detailed" />
      </div>
    </SectionWrapper>
  )
}
