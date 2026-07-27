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
            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="LOYAL Air Compressor on Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-white bg-[#1877F2] text-white transition-all duration-200 hover:scale-[1.06] hover:bg-[#0f5fcc]"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                </svg>
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="LOYAL Air Compressor on Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-white bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-all duration-200 hover:scale-[1.06]"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.837c-3.155 0-3.526.012-4.77.069-2.759.126-4.035 1.424-4.161 4.161-.057 1.243-.068 1.614-.068 4.769 0 3.156.012 3.527.068 4.77.126 2.735 1.4 4.035 4.161 4.161 1.244.057 1.614.07 4.77.07 3.156 0 3.527-.013 4.77-.07 2.756-.126 4.036-1.421 4.161-4.161.057-1.243.069-1.614.069-4.77 0-3.155-.012-3.526-.069-4.769-.125-2.741-1.402-4.035-4.161-4.161-1.243-.057-1.614-.069-4.77-.069zm0 4.541c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={company.social.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="LOYAL Air Compressor on TikTok"
                className="flex size-9 items-center justify-center rounded-full border border-white bg-black transition-all duration-200 hover:scale-[1.06] hover:bg-black/80"
              >
                <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                  <path
                    className="fill-[#25F4EE]"
                    transform="translate(-0.9, -0.6)"
                    d="M16.6 5.82c-1.02-.9-1.6-2.19-1.6-3.55h-3.05v13.5c0 1.62-1.31 2.94-2.94 2.94a2.94 2.94 0 0 1-2.94-2.94 2.94 2.94 0 0 1 2.94-2.94c.27 0 .53.04.78.11v-3.1a6.1 6.1 0 0 0-.78-.05A6 6 0 0 0 3 15.77a6 6 0 0 0 6 6 6 6 0 0 0 6-6V9.01a7.4 7.4 0 0 0 4.32 1.38V7.34c-.97 0-1.92-.31-2.72-.9z"
                  />
                  <path
                    className="fill-[#FE2C55]"
                    transform="translate(0.9, 0.6)"
                    d="M16.6 5.82c-1.02-.9-1.6-2.19-1.6-3.55h-3.05v13.5c0 1.62-1.31 2.94-2.94 2.94a2.94 2.94 0 0 1-2.94-2.94 2.94 2.94 0 0 1 2.94-2.94c.27 0 .53.04.78.11v-3.1a6.1 6.1 0 0 0-.78-.05A6 6 0 0 0 3 15.77a6 6 0 0 0 6 6 6 6 0 0 0 6-6V9.01a7.4 7.4 0 0 0 4.32 1.38V7.34c-.97 0-1.92-.31-2.72-.9z"
                  />
                  <path
                    className="fill-white"
                    d="M16.6 5.82c-1.02-.9-1.6-2.19-1.6-3.55h-3.05v13.5c0 1.62-1.31 2.94-2.94 2.94a2.94 2.94 0 0 1-2.94-2.94 2.94 2.94 0 0 1 2.94-2.94c.27 0 .53.04.78.11v-3.1a6.1 6.1 0 0 0-.78-.05A6 6 0 0 0 3 15.77a6 6 0 0 0 6 6 6 6 0 0 0 6-6V9.01a7.4 7.4 0 0 0 4.32 1.38V7.34c-.97 0-1.92-.31-2.72-.9z"
                  />
                </svg>
              </a>
            </div>
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
