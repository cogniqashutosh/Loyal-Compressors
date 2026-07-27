import Image from "next/image"
import { MapPin, ShieldCheck, Award, Globe2, Package, Star } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { CountUp } from "@/components/motion/count-up"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { trustedWorldwideStats } from "@/data/stats"
import { certifications } from "@/data/certifications"
import { company } from "@/data/company"

const exportRegions = ["Southeast Asia", "Middle East", "Africa", "Latin America"]
const statIcons = [Award, Globe2, Package, Star]

export function TrustedWorldwide() {
  return (
    <SectionWrapper background="muted" className="overflow-hidden">
      <FadeIn className="relative overflow-hidden rounded-3xl bg-neutral-900">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Global export logistics — container terminal cranes at port"
            fill
            sizes="100vw"
            className="animate-kenburns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/75" />
        </div>

        <div className="relative px-6 py-14 sm:px-10 md:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-center lg:gap-12">
            <div className="lg:col-span-2">
              <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-white/70 uppercase">
                Trusted Worldwide
              </span>
              <h2 className="font-heading text-3xl font-bold text-balance text-white md:text-4xl">
                A Global Manufacturing Partner
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                Factory direct from {company.address.city}, {company.address.country} — exporting to
                every major industrial region with full documentation and freight support.
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-2 gap-8 border-t border-white/15 pt-8 lg:col-span-3 lg:grid-cols-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
              {trustedWorldwideStats.map((stat, index) => {
                const Icon = statIcons[index % statIcons.length]
                return (
                  <StaggerItem key={stat.label} className="flex flex-col items-center gap-3 lg:items-start">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white/80">
                      <Icon className="size-4.5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="font-heading text-4xl font-bold tabular-nums text-white md:text-5xl">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="mt-1 text-sm font-medium text-white/70">{stat.label}</div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-wide text-white/50 uppercase">
                Export Regions
              </p>
              <div className="flex flex-wrap gap-2">
                {exportRegions.map((region) => (
                  <span
                    key={region}
                    className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                  >
                    <MapPin className="size-3.5 text-white/70" strokeWidth={2} />
                    {region}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold tracking-wide text-white/50 uppercase sm:text-right">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {certifications.map((cert) => (
                  <span
                    key={cert.code}
                    className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                  >
                    <ShieldCheck className="size-3.5 text-white/70" strokeWidth={2} />
                    {cert.code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  )
}
