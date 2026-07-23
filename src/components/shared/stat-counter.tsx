import { CountUp } from "@/components/motion/count-up"
import { StaggerItem } from "@/components/motion/stagger-container"
import type { Stat } from "@/data/stats"
import { cn } from "@/lib/utils"

interface StatCounterProps {
  stat: Stat
  invert?: boolean
}

export function StatCounter({ stat, invert = false }: StatCounterProps) {
  return (
    <StaggerItem className="flex flex-col items-center gap-1 text-center">
      <div
        className={cn(
          "font-heading text-4xl font-bold tabular-nums md:text-5xl",
          invert ? "text-primary-foreground" : "text-primary"
        )}
      >
        <CountUp value={stat.value} suffix={stat.suffix} />
      </div>
      <div
        className={cn(
          "text-sm font-medium",
          invert ? "text-primary-foreground/75" : "text-muted-foreground"
        )}
      >
        {stat.label}
      </div>
    </StaggerItem>
  )
}
