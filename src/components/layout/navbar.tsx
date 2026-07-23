"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Logo } from "@/components/layout/logo"
import { MegaMenu } from "@/components/layout/mega-menu"
import { MobileNav } from "@/components/layout/mobile-nav"
import { buttonVariants } from "@/components/ui/button"
import { mainNav } from "@/data/nav"
import { cn } from "@/lib/utils"

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setProductsOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow duration-300 supports-backdrop-filter:bg-background/80",
        scrolled ? "border-border shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)]" : "border-border/70"
      )}
      onMouseLeave={() => setProductsOpen(false)}
    >
      <div
        className={cn(
          "relative mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[height] duration-300 md:px-10",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Logo size="lg" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = item.hasMegaMenu
              ? pathname.startsWith("/products")
              : isActivePath(pathname, item.href)

            const linkClasses = cn(
              "rounded-lg px-3.5 py-2 text-[13px] font-bold tracking-wider uppercase transition-colors",
              active ? "text-primary" : "text-foreground hover:text-primary"
            )

            return item.hasMegaMenu ? (
              <button
                key={item.href}
                type="button"
                onMouseEnter={() => setProductsOpen(true)}
                onClick={() => setProductsOpen((prev) => !prev)}
                aria-expanded={productsOpen}
                className={cn("flex items-center gap-1", linkClasses)}
              >
                {item.label}
                <ChevronDown
                  className={cn("size-3.5 transition-transform", productsOpen && "rotate-180")}
                />
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setProductsOpen(false)}
                className={linkClasses}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "cta" }),
              "hidden h-10 gap-2 px-5 md:inline-flex"
            )}
          >
            Request a Quote
            <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
          <MobileNav />
        </div>

        <MegaMenu open={productsOpen} onClose={() => setProductsOpen(false)} />
      </div>
    </header>
  )
}
