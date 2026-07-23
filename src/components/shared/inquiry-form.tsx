"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, CheckCircle2 } from "lucide-react"
import { inquiryFormSchema, type InquiryFormValues } from "@/lib/schema"
import { productCategories } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

interface InquiryFormProps {
  variant?: "default" | "compact"
  defaultProductInterest?: string
  defaultMessage?: string
}

export function InquiryForm({
  variant = "default",
  defaultProductInterest = "",
  defaultMessage = "",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      productInterest: defaultProductInterest,
      message: defaultMessage,
    },
  })

  async function onSubmit(values: InquiryFormValues) {
    setStatus("submitting")
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-card p-10 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="font-heading text-lg font-bold text-foreground">Inquiry sent successfully</h3>
        <p className="text-sm text-muted-foreground">
          Thank you for reaching out. Our sales team will get back to you within one business day.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another inquiry
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone / WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="+1 555 000 0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {variant === "default" && (
          <FormField
            control={form.control}
            name="productInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product of Interest</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="flex h-9 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <option value="">Select a product category</option>
                    {productCategories.map((product) => (
                      <option key={product.slug} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your air demand (CFM), pressure requirements, or application..."
                  rows={variant === "compact" ? 3 : 5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {status === "error" && (
          <p className="text-sm font-medium text-destructive">
            Something went wrong sending your inquiry. Please try again or email us directly.
          </p>
        )}

        <Button type="submit" variant="cta" size="lg" className="h-11 gap-2 px-6 text-base" disabled={status === "submitting"}>
          {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
          {status === "submitting" ? "Sending..." : "Request a Quote"}
        </Button>
      </form>
    </Form>
  )
}
