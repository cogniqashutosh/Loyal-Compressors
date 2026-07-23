import type { LucideIcon } from "lucide-react"
import { CountUp } from "@/components/motion/count-up"
import { StaggerItem } from "@/components/motion/stagger-container"
import type { Stat } from "@/data/stats"

interface StatCardProps {
  stat: Stat
  icon: LucideIcon
}

export function StatCard({ stat, icon: Icon }: StatCardProps) {
  return (
    <StaggerItem className="flex flex-col items-center gap-4 rounded-2xl border border-border/70 bg-card px-6 py-8 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] transition-shadow hover:shadow-[0_2px_4px_rgba(15,23,42,0.06),0_16px_32px_-16px_rgba(15,23,42,0.18)]">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
        <Icon className="size-6" strokeWidth={1.75} />
      </div>
      <div className="font-heading text-4xl font-bold tabular-nums text-primary md:text-5xl">
        <CountUp value={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
    </StaggerItem>
  )
}
