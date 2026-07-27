import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden border border-border/70 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.22)]">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-brand-accent to-primary" />
      <CardContent className="relative flex flex-col items-start gap-4 px-6 py-6">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_4px_12px_-4px_rgba(15,23,42,0.35)] transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-6" strokeWidth={1.75} />
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
