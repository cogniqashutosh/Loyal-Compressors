import type { LucideIcon } from "lucide-react"
import type { ProductCategorySlug } from "@/types/product"

export interface Industry {
  slug: string
  name: string
  icon: LucideIcon
  description: string
  overview: string
  challenges: string[]
  recommendedProducts: ProductCategorySlug[]
}
