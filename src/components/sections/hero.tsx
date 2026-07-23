import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/motion/fade-in"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-compressor-banner.webp"
          alt="Rows of screw air compressors in LOYAL's manufacturing facility"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 py-28 text-center md:px-10 md:py-36">
        <FadeIn>
          <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 uppercase">
            15+ Years of Manufacturing Excellence
          </span>
          <h1 className="font-heading max-w-5xl text-[26px] leading-tight font-bold text-white sm:text-[30px] md:text-[40px] lg:text-[52px]">
            Powering Industry with Reliable
            <br className="hidden sm:block" /> Air Compression Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Delivering high-performance, energy-efficient industrial air compressors and complete
            compressed air systems to customers worldwide.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "cta", className: "h-12 gap-2 px-7 text-base" })}
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/products"
              className={buttonVariants({
                variant: "outline",
                className:
                  "h-12 border-white/25 bg-white/5 px-7 text-base text-white hover:bg-white/15",
              })}
            >
              View Products
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
