import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/types/blog"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.22)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold tracking-wide text-brand-accent uppercase">
          {post.category}
        </span>
        <h3 className="font-heading text-lg font-bold text-foreground">{post.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
          <span>{post.readTime}</span>
          <span className="flex items-center gap-1 font-medium text-primary">
            Read More
            <ArrowRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
