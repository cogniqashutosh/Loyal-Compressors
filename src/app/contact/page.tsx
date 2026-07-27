import type { Metadata } from "next"
import { Mail, Phone, MessageCircle, Clock, MapPin, Factory, Send, Navigation } from "lucide-react"
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
    tint: "bg-secondary text-primary",
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    tint: "bg-secondary text-primary",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: company.whatsapp,
    href: `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`,
    tint: "bg-secondary text-primary",
  },
]

// Approximate coordinates for the factory's industrial district in Jinan — used directly
// (instead of a text address search) so the map drops a precise pin rather than trying to
// resolve a place lookup, which fails for a facility with no public Google Maps listing.
const factoryCoords = { lat: 36.6512, lng: 117.1201 }
const mapQuery = `${factoryCoords.lat},${factoryCoords.lng}`
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`

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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
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

          <FadeIn delay={0.1} className="flex h-full flex-col justify-between gap-5 lg:col-span-2">
            <div className="relative flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#0a1f3d] p-6 text-primary-foreground shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]">
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                }}
              />
              <div className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-accent">
                <Clock className="size-5" strokeWidth={1.75} />
              </div>
              <div className="relative">
                <p className="text-xs font-medium tracking-wide text-primary-foreground/60 uppercase">
                  Response Time
                </p>
                <p className="font-heading mt-0.5 text-xl font-bold">&lt; 24 hours</p>
              </div>
            </div>

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

            <StaggerContainer className="flex flex-1 flex-col justify-between gap-4">
              {quickContactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <StaggerItem key={method.label} className="flex-1">
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex h-full items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_20px_40px_-16px_rgba(15,23,42,0.2)]"
                    >
                      <div
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
                          method.tint
                        )}
                      >
                        <Icon className="size-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                          {method.label}
                        </p>
                        <p className="mt-0.5 text-base font-semibold text-foreground">{method.value}</p>
                      </div>
                    </a>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
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
        <FadeIn className="mt-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-border/70 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] lg:grid-cols-5">
          <div className="relative flex flex-col justify-between gap-8 bg-primary p-8 text-primary-foreground lg:col-span-2 md:p-10">
            <MapPin className="absolute -top-6 -right-6 size-32 text-white/10" strokeWidth={1} />
            <div className="relative">
              <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Factory className="size-5" strokeWidth={1.75} />
              </div>
              <p className="mt-5 text-xs font-medium tracking-wide text-primary-foreground/60 uppercase">
                Factory Address
              </p>
              <p className="mt-1 text-base leading-relaxed font-semibold">
                {company.address.line1}
                <br />
                {company.address.city}, {company.address.province} {company.address.postalCode}
                <br />
                {company.address.country}
              </p>
            </div>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 self-start rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
            >
              <Navigation className="size-4" strokeWidth={2} />
              Get Directions
            </a>
          </div>
          <div className="lg:col-span-3">
            <iframe
              title="LOYAL Air Compressor Group factory location"
              src={`https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block min-h-[320px]"
            />
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  )
}
