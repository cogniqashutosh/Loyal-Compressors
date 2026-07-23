import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, User } from "lucide-react"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { BlogCard } from "@/components/shared/blog-card"
import { CtaBanner } from "@/components/shared/cta-banner"
import { JsonLd } from "@/components/shared/json-ld"
import { FadeIn } from "@/components/motion/fade-in"
import { blogPosts, getBlogPost } from "@/data/blog"
import { siteConfig } from "@/data/site-config"
import { breadcrumbSchema, articleSchema } from "@/lib/seo"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const breadcrumbItems = [{ label: "Blog", href: "/blog" }, { label: post.title }]

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: post.author,
          slug: post.slug,
        })}
      />
      <section className="border-b border-border/70 bg-muted/40">
        <div className="mx-auto max-w-[900px] px-6 py-14 md:px-10 md:py-20">
          <Breadcrumbs items={breadcrumbItems} />
          <FadeIn className="mt-6">
            <span className="text-sm font-semibold tracking-wide text-brand-accent uppercase">
              {post.category}
            </span>
            <h1 className="font-heading mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="size-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper className="pt-10 md:pt-12">
        <div className="mx-auto max-w-[900px]">
          <FadeIn className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/70 bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </FadeIn>

          <FadeIn delay={0.1} className="prose-content mt-10 flex flex-col gap-5">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </div>
      </SectionWrapper>

      {relatedPosts.length > 0 && (
        <SectionWrapper background="muted">
          <SectionHeading eyebrow="Keep Reading" title="More Articles" align="left" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper className="pt-0">
        <CtaBanner
          title="Have a compressed air question we didn't cover?"
          description="Talk to our engineering team about your specific application."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="Browse Products"
          secondaryHref="/products"
        />
      </SectionWrapper>
    </>
  )
}
