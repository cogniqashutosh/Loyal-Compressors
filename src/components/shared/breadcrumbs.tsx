import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface Crumb {
  label: string
  href?: string
}

export function Breadcrumbs({ items, invert = false }: { items: Crumb[]; invert?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <Link
        href="/"
        className={cn(
          "flex items-center hover:text-foreground",
          invert ? "text-white/70 hover:text-white" : "text-muted-foreground"
        )}
      >
        <Home className="size-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            <ChevronRight
              className={cn("size-3.5", invert ? "text-white/40" : "text-muted-foreground/50")}
            />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={cn(
                  "hover:text-foreground",
                  invert ? "text-white/70 hover:text-white" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={isLast ? "page" : undefined}
                className={cn("font-medium", invert ? "text-white" : "text-foreground")}
              >
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
