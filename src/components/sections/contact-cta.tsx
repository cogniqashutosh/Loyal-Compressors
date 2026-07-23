import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { InquiryForm } from "@/components/shared/inquiry-form"
import { FadeIn } from "@/components/motion/fade-in"

export function ContactCta() {
  return (
    <SectionWrapper id="contact" background="muted">
      <SectionHeading
        eyebrow="Get Started"
        title="Request a Quote for Your Application"
        description="Share your air demand and requirements — our engineering team will follow up within one business day."
      />

      <FadeIn
        direction="up"
        className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border/70 bg-card p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.16)] md:p-10"
      >
        <InquiryForm />
      </FadeIn>
    </SectionWrapper>
  )
}
