import type { LucideIcon } from "lucide-react"
import { CountUp } from "@/components/motion/count-up"
import { StaggerItem } from "@/components/motion/stagger-container"

interface WhyChooseHeroStatProps {
  icon: LucideIcon
  value: number
  suffix: string
  title: string
  description: string
}

export function WhyChooseHeroStat({
  icon: Icon,
  value,
  suffix,
  title,
  description,
}: WhyChooseHeroStatProps) {
  return (
    <StaggerItem className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground shadow-[0_4px_10px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.35)] sm:col-span-2">
      <Icon
        className="absolute -top-4 -right-4 size-32 text-primary-foreground/10"
        strokeWidth={1}
      />
      <div className="relative flex size-12 items-center justify-center rounded-2xl bg-white/10 text-primary-foreground">
        <Icon className="size-6" strokeWidth={1.75} />
      </div>
      <div className="relative mt-6 flex items-end gap-3">
        <span className="font-heading text-5xl font-bold tabular-nums">
          <CountUp value={value} suffix={suffix} />
        </span>
        <span className="pb-1.5 font-heading text-lg font-bold">{title}</span>
      </div>
      <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
        {description}
      </p>
    </StaggerItem>
  )
}
