import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/layout/logo"
import { productCategories } from "@/data/products"
import { company } from "@/data/company"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Request a Quote", href: "/contact" },
    { label: "Download Catalog", href: "/downloads/loyal-product-catalog.pdf" },
  ],
}

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="relative inline-block pb-3 text-sm font-semibold text-white">
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-6 bg-brand-accent" />
    </h3>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/70 bg-[#0a1120] text-white">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-brand-accent to-primary" />
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo invert />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {company.brandName} designs and manufactures industrial air compressors and complete
              compressed air systems, exporting to {"50+"} countries worldwide.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              <a href={`tel:${company.phone}`} className="group flex items-center gap-3 hover:text-white">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-brand-accent">
                  <Phone className="size-3.5" />
                </span>
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="group flex items-center gap-3 hover:text-white">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-brand-accent">
                  <Mail className="size-3.5" />
                </span>
                {company.email}
              </a>
              <span className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="size-3.5" />
                </span>
                {company.address.city}, {company.address.province}, {company.address.country}
              </span>
            </div>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="LOYAL Air Compressor on Facebook"
              className="mt-6 flex size-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-colors hover:bg-[#0f5fcc]"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
              </svg>
            </a>
          </div>

          <div>
            <FooterHeading>Products</FooterHeading>
            <ul className="mt-4 flex flex-col gap-2.5">
              {productCategories.slice(0, 6).map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Get Started</FooterHeading>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>Manufactured in {company.address.country} &middot; Exporting worldwide</p>
        </div>
      </div>
    </footer>
  )
}
