import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const sizeClasses = {
  default: "h-11",
  lg: "h-16",
}

// Original brand logo, sourced from loyalaircompressor.com.
export function Logo({
  className,
  invert = false,
  size = "default",
}: {
  className?: string
  invert?: boolean
  size?: "default" | "lg"
}) {
  const mark = (
    <Image
      src="/images/brand/loyal-logo.png"
      alt="LOYAL Air Compressor Group"
      width={1336}
      height={578}
      priority
      className={cn(sizeClasses[size], "w-auto object-contain")}
    />
  )

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      {invert ? (
        <span className="rounded-lg bg-white px-3 py-1.5">{mark}</span>
      ) : (
        mark
      )}
    </Link>
  )
}
