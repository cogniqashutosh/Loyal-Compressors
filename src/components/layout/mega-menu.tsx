"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Compass, LayoutGrid } from "lucide-react"
import { productCategories } from "@/data/products"
import type { ProductCategory, ProductCategorySlug } from "@/types/product"

interface MegaMenuProps {
  open: boolean
  onClose: () => void
}

const groups: { label: string; slugs: ProductCategorySlug[] }[] = [
  {
    label: "Compressors",
    slugs: ["screw-air-compressors", "oil-free-compressors", "portable-compressors"],
  },
  {
    label: "Air Treatment & Systems",
    slugs: ["air-dryers", "air-tanks", "accessories", "compressed-air-systems"],
  },
]

function getProducts(slugs: ProductCategorySlug[]): ProductCategory[] {
  return slugs
    .map((slug) => productCategories.find((p) => p.slug === slug))
    .filter((p): p is ProductCategory => Boolean(p))
}

const featured = productCategories.find((p) => p.slug === "compressed-air-systems")!

export function MegaMenu({ open, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute inset-x-0 top-full z-40 border-t border-border/70 bg-popover shadow-xl"
          onMouseLeave={onClose}
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-8 md:px-10 lg:grid-cols-[280px_1fr]">
            <Link
              href={`/products/${featured.slug}`}
              onClick={onClose}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border/70"
            >
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10" />
              </div>
              <span className="absolute top-4 left-4 rounded-full bg-brand-accent px-3 py-1 text-[11px] font-bold tracking-wide text-brand-accent-foreground uppercase shadow-sm">
                Featured
              </span>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
                <span className="font-heading text-lg font-bold text-white">
                  {featured.name}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  Explore Systems
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <div className="flex flex-col gap-7">
              {groups.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase">
                    <span className="h-px w-4 bg-primary/40" />
                    {group.label}
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {getProducts(group.slugs).map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={onClose}
                        className="group flex items-start gap-3 rounded-xl border border-border/70 bg-card p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all hover:border-primary/30 hover:bg-muted/50 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08)]"
                      >
                        <span className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-border/70 bg-muted">
                          <Image
                            src={product.image}
                            alt=""
                            fill
                            sizes="48px"
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </span>
                        <span className="flex flex-col gap-0.5 pt-0.5">
                          <span className="font-heading flex items-center gap-1.5 text-sm font-bold text-foreground">
                            {product.name}
                            <ArrowRight className="size-3.5 -translate-x-1 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </span>
                          <span className="line-clamp-1 text-xs leading-relaxed text-muted-foreground">
                            {product.shortDescription}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between border-t border-border/70 pt-5">
                <Link
                  href="/industries"
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary"
                >
                  <Compass className="size-4" />
                  Browse by Industry
                </Link>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="group flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <LayoutGrid className="size-4" />
                  View All Products
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
