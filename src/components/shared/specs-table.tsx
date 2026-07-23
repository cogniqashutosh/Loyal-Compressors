interface Spec {
  label: string
  value: string
}

export function SpecsTable({ specs }: { specs: Spec[] }) {
  return (
    <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2">
      {specs.map((spec) => (
        <div key={spec.label} className="flex items-center justify-between gap-4 bg-card px-5 py-4">
          <dt className="text-sm text-muted-foreground">{spec.label}</dt>
          <dd className="text-sm font-semibold text-foreground">{spec.value}</dd>
        </div>
      ))}
    </dl>
  )
}
