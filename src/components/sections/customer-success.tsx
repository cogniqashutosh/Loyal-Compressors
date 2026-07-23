import { TrendingUp } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { TestimonialCard } from "@/components/shared/testimonial-card"
import { Carousel } from "@/components/shared/carousel"
import { FadeIn } from "@/components/motion/fade-in"
import { testimonials, caseStudies } from "@/data/testimonials"

export function CustomerSuccess() {
  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Customer Success"
        title="Trusted by Manufacturers and Distributors Worldwide"
      />

      <div className="mt-14">
        <Carousel>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name + testimonial.company} {...testimonial} />
          ))}
        </Carousel>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {caseStudies.map((study, index) => (
          <FadeIn
            key={study.title}
            delay={index * 0.1}
            className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.2)]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs font-semibold tracking-wide text-brand-accent uppercase">
                {study.industry} &middot; {study.country}
              </span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <TrendingUp className="size-4" strokeWidth={1.75} />
              </span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">{study.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
            <div className="mt-auto flex items-center gap-2 rounded-xl bg-secondary px-4 py-3">
              <TrendingUp className="size-4 shrink-0 text-primary" strokeWidth={2} />
              <span className="font-heading text-base font-bold text-primary">{study.metric}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
