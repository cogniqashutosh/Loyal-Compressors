import type { ProductCategorySlug } from "@/types/product"

export interface ProductModel {
  slug: string
  categorySlug: ProductCategorySlug
  modelNumber: string
  name: string
  shortDescription: string
  image: string
  powerHP: number
  specs: { label: string; value: string }[]
  applications: string[]
  datasheetLabel: string
  featured?: boolean
}
