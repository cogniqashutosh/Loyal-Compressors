import { company } from "@/data/company"
import { siteConfig } from "@/data/site-config"

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    legalName: company.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/loyal-logo.png`,
    foundingDate: String(company.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      email: company.email,
      contactType: "sales",
    },
    sameAs: [company.social.facebook],
  }
}

interface BreadcrumbItem {
  label: string
  href?: string
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items]

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  }
}

interface ProductSchemaInput {
  name: string
  description: string
  image: string
  sku?: string
  category?: string
}

export function productSchema(input: ProductSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    image: `${siteConfig.url}${input.image}`,
    sku: input.sku,
    category: input.category,
    brand: {
      "@type": "Brand",
      name: company.brandName,
    },
    manufacturer: {
      "@type": "Organization",
      name: company.legalName,
    },
  }
}

interface ArticleSchemaInput {
  title: string
  description: string
  image: string
  datePublished: string
  author: string
  slug: string
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image: `${siteConfig.url}${input.image}`,
    datePublished: input.datePublished,
    author: {
      "@type": "Organization",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: company.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/brand/loyal-logo.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${input.slug}`,
  }
}

interface FaqSchemaInput {
  question: string
  answer: string
}

export function faqSchema(faqs: FaqSchemaInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
