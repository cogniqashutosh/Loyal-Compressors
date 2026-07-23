import { FadeIn } from "@/components/motion/fade-in"
import type { Milestone } from "@/data/about"

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-[9px]" />
      <div className="flex flex-col gap-10">
        {milestones.map((milestone, index) => (
          <FadeIn key={milestone.year} delay={index * 0.05} className="relative pl-8 md:pl-10">
            <span className="absolute top-1 left-0 flex size-[15px] items-center justify-center rounded-full border-2 border-primary bg-background md:size-[19px]">
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-brand-accent uppercase">
              {milestone.year}
            </span>
            <h3 className="font-heading mt-1 text-lg font-bold text-foreground">
              {milestone.title}
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {milestone.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
