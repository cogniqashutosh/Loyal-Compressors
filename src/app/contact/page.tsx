import type { Metadata } from "next"
import { Mail, Phone, MessageCircle, Clock, MapPin, Factory, Send } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { InquiryForm } from "@/components/shared/inquiry-form"
import { JsonLd } from "@/components/shared/json-ld"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { company } from "@/data/company"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact LOYAL Air Compressor Group for sales inquiries, technical support, and export documentation — factory direct in Jinan, Shandong, China.",
  alternates: { canonical: `${siteConfig.url}/contact` },
}

const quickContactMethods = [
  {
    icon: Phone,
    label: "Sales Phone",
    value: company.phone,
    href: `tel:${company.phone}`,
    tint: "bg-primary/8 text-primary",
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    tint: "bg-primary/8 text-primary",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: company.whatsapp,
    href: `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`,
    tint: "bg-[#25D366]/10 text-[#25D366]",
  },
]

const mapQuery = encodeURIComponent(
  `${company.address.city}, ${company.address.province}, ${company.address.country}`
)

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Contact" }])} />
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Get In Touch"
        title="Contact Our Sales & Engineering Team"
        description="Share your air demand, application, and timeline — our team will follow up with a tailored quote within one business day."
        image="/images/contact-hero.jpg"
        imageAlt="Global export logistics — container terminal cranes at port"
      />

      <SectionWrapper>
        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {quickContactMethods.map((method) => {
            const Icon = method.icon
            return (
              <StaggerItem key={method.label}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.22)]"
                >
                  <div
                    className={cn(
                      "flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
                      method.tint
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {method.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-foreground">{method.value}</p>
                  </div>
                </a>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <FadeIn className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] lg:col-span-3">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-brand-accent to-primary" />
            <div className="p-8 md:p-10">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <Send className="size-5" strokeWidth={1.75} />
              </div>
              <h2 className="font-heading mt-5 text-xl font-bold text-foreground">Send a Sales Inquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked required help our team route your inquiry to the right specialist.
              </p>
              <div className="mt-6">
                <InquiryForm />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-5 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Clock className="size-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Business Hours
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{company.businessHours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Factory className="size-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Factory Address
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  {company.address.line1}
                  <br />
                  {company.address.city}, {company.address.province} {company.address.postalCode}
                  <br />
                  {company.address.country}
                </p>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col justify-end overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]">
              <MapPin className="absolute -top-4 -right-4 size-28 text-white/10" strokeWidth={1} />
              <p className="relative text-sm font-semibold">Prefer to talk it through?</p>
              <p className="relative mt-1 text-sm text-primary-foreground/75">
                Our engineering team can help size the right system for your application over a call.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" className="pt-0">
        <SectionHeading
          eyebrow="Factory Location"
          title="Visit Our Production Facility"
          description="Schedule an in-person or virtual tour of our manufacturing floor in Jinan, Shandong."
          align="left"
        />
        <FadeIn className="mt-10 overflow-hidden rounded-2xl border border-border/70 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]">
          <iframe
            title="LOYAL Air Compressor Group factory location"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />
        </FadeIn>
      </SectionWrapper>
    </>
  )
}
