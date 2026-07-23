"use client"

import { useMemo, useState } from "react"
import { X } from "lucide-react"
import type { ProductModel } from "@/types/product-model"
import { ModelCard } from "@/components/shared/model-card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const MAX_COMPARE = 3

const powerFilters = [
  { id: "all", label: "All Models", test: () => true },
  { id: "under50", label: "Under 50 HP", test: (hp: number) => hp < 50 },
  { id: "50to150", label: "50 – 150 HP", test: (hp: number) => hp >= 50 && hp <= 150 },
  { id: "over150", label: "Over 150 HP", test: (hp: number) => hp > 150 },
] as const

export function ProductModels({ models }: { models: ProductModel[] }) {
  const [filter, setFilter] = useState<(typeof powerFilters)[number]["id"]>("all")
  const [selected, setSelected] = useState<string[]>([])
  const [comparing, setComparing] = useState(false)

  const hasPowerSpread = new Set(models.map((m) => m.powerHP)).size > 1

  const filteredModels = useMemo(() => {
    const activeFilter = powerFilters.find((f) => f.id === filter) ?? powerFilters[0]
    return models.filter((m) => activeFilter.test(m.powerHP))
  }, [models, filter])

  const selectedModels = useMemo(
    () => models.filter((m) => selected.includes(m.slug)),
    [models, selected]
  )

  const specLabels = useMemo(() => {
    const labels: string[] = []
    for (const model of selectedModels) {
      for (const spec of model.specs) {
        if (!labels.includes(spec.label)) labels.push(spec.label)
      }
    }
    return labels
  }, [selectedModels])

  function toggleCompare(slug: string, checked: boolean) {
    setSelected((prev) => {
      if (checked) {
        if (prev.length >= MAX_COMPARE) return prev
        return [...prev, slug]
      }
      return prev.filter((s) => s !== slug)
    })
  }

  return (
    <div>
      {hasPowerSpread && (
        <div className="flex flex-wrap gap-2">
          {powerFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/70 bg-card text-foreground/80 hover:bg-muted"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {selected.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-3">
          <span className="text-sm font-medium text-foreground">
            {selected.length} model{selected.length > 1 ? "s" : ""} selected
            {selected.length < 2 && " — pick at least 2 to compare"}
          </span>
          <div className="ml-auto flex gap-2">
            {selected.length >= 2 && (
              <Button size="sm" onClick={() => setComparing((prev) => !prev)}>
                {comparing ? "Hide Comparison" : "Compare Now"}
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setSelected([])
                setComparing(false)
              }}
            >
              Clear
            </Button>
          </div>
        </div>
      )}

      {comparing && selectedModels.length >= 2 && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border/70">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-40">Spec</TableHead>
                {selectedModels.map((model) => (
                  <TableHead key={model.slug}>
                    <div className="flex items-center justify-between gap-2">
                      {model.modelNumber}
                      <button
                        type="button"
                        onClick={() => toggleCompare(model.slug, false)}
                        aria-label={`Remove ${model.modelNumber} from comparison`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {specLabels.map((label) => (
                <TableRow key={label}>
                  <TableCell className="font-medium text-muted-foreground">{label}</TableCell>
                  {selectedModels.map((model) => (
                    <TableCell key={model.slug}>
                      {model.specs.find((s) => s.label === label)?.value ?? "—"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredModels.map((model) => (
          <ModelCard
            key={model.slug}
            model={model}
            selected={selected.includes(model.slug)}
            onToggleCompare={toggleCompare}
            compareDisabled={!selected.includes(model.slug) && selected.length >= MAX_COMPARE}
          />
        ))}
      </div>
    </div>
  )
}
