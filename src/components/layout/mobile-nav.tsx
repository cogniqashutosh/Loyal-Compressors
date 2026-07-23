"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button, buttonVariants } from "@/components/ui/button"
import { mainNav } from "@/data/nav"
import { productCategories } from "@/data/products"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [productsExpanded, setProductsExpanded] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] gap-0 p-0">
        <SheetHeader className="border-b border-border/70">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
          {mainNav.map((item) =>
            item.hasMegaMenu ? (
              <div key={item.href}>
                <button
                  type="button"
                  onClick={() => setProductsExpanded((prev) => !prev)}
                  aria-expanded={productsExpanded}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-bold tracking-wider text-foreground uppercase hover:bg-muted"
                >
                  {item.label}
                  <ChevronDown
                    className={cn("size-4 transition-transform", productsExpanded && "rotate-180")}
                  />
                </button>
                {productsExpanded && (
                  <div className="ml-3 flex flex-col gap-0.5 border-l border-border/70 pl-3">
                    {productCategories.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-bold tracking-wider text-foreground uppercase hover:bg-muted"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <SheetFooter className="border-t border-border/70">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={buttonVariants({ variant: "cta", className: "w-full gap-2" })}
          >
            Request a Quote
            <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
