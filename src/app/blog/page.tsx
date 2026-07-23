import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { BlogCard } from "@/components/shared/blog-card"
import { JsonLd } from "@/components/shared/json-ld"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { blogPosts } from "@/data/blog"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Buyer guides, maintenance schedules, and technical education on industrial air compressors and compressed air systems.",
  alternates: { canonical: `${siteConfig.url}/blog` },
}

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Blog" }])} />
      <PageHero
        breadcrumbs={[{ label: "Blog" }]}
        eyebrow="Resources"
        title="Buyer Guides & Technical Education"
        description="Practical guidance on sizing, maintaining, and specifying industrial compressed air equipment."
        image="/images/blog-hero.jpg"
        imageAlt="Digital control panel monitoring compressed air system sensors"
      />

      <SectionWrapper>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>
    </>
  )
}
