import type { MetadataRoute } from "next"
import { siteConfig } from "@/data/site-config"
import { productCategories } from "@/data/products"
import { productModels } from "@/data/product-models"
import { industries } from "@/data/industries"
import { blogPosts } from "@/data/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ]

  const productRoutes: MetadataRoute.Sitemap = productCategories.map((product) => ({
    url: `${siteConfig.url}/products/${product.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  const modelRoutes: MetadataRoute.Sitemap = productModels.map((model) => ({
    url: `${siteConfig.url}/products/${model.categorySlug}/${model.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${siteConfig.url}/industries/${industry.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "yearly",
    priority: 0.5,
  }))

  return [...staticRoutes, ...productRoutes, ...modelRoutes, ...industryRoutes, ...blogRoutes]
}
