import { FileDown } from "lucide-react"

interface DownloadCardProps {
  label: string
  fileSize?: string
  href: string
}

export function DownloadCard({ label, fileSize, href }: DownloadCardProps) {
  return (
    <a
      href={href}
      download
      className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card px-5 py-4 transition-colors hover:border-primary/30 hover:bg-primary/[0.03]"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <FileDown className="size-5" strokeWidth={1.75} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        {fileSize && <span className="text-xs text-muted-foreground">PDF &middot; {fileSize}</span>}
      </div>
    </a>
  )
}
