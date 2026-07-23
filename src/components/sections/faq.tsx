import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { FadeIn } from "@/components/motion/fade-in"
import { buttonVariants } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"

export function Faq() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeIn className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-full lg:min-h-[520px]">
          <Image
            src="/images/factory/quality-testing.webp"
            alt="LOYAL compressor unit under inspection"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-brand-accent uppercase">
            FAQ
          </span>
          <h2 className="font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
            Questions Industrial Buyers Ask Us Most
          </h2>

          <Accordion className="mt-8" defaultValue={["faq-0"]}>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-5 text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Link
            href="/contact"
            className={buttonVariants({ variant: "cta", className: "mt-8 h-11 gap-2 px-6" })}
          >
            Ask Our Team
            <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
