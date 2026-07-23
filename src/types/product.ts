import type { LucideIcon } from "lucide-react"

export type ProductCategorySlug =
  | "screw-air-compressors"
  | "oil-free-compressors"
  | "portable-compressors"
  | "air-dryers"
  | "air-tanks"
  | "accessories"
  | "compressed-air-systems"

export interface ProductCategory {
  slug: ProductCategorySlug
  name: string
  shortDescription: string
  overview: string
  features: string[]
  benefits: string[]
  image: string
  icon: LucideIcon
  featured?: boolean
  specs: {
    label: string
    value: string
  }[]
  applications: string[]
}
