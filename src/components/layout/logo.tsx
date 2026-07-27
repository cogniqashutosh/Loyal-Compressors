import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const sizeClasses = {
  default: "h-14",
  lg: "h-[70px]",
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
      quality={100}
      sizes="(max-width: 768px) 140px, 200px"
      className={cn(sizeClasses[size], "w-auto object-contain")}
    />
  )

  return (
    <Link
      href="/"
      className={cn("flex items-center transition-transform duration-200 hover:scale-[1.03]", className)}
    >
      {invert ? (
        <span className="rounded-lg bg-white px-3 py-1.5">{mark}</span>
      ) : (
        mark
      )}
    </Link>
  )
}
