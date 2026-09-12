import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 mb-10",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-brand-blue)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-500 max-w-[700px]">
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-20 bg-[var(--color-brand-yellow)] rounded-full mt-2", centered && "mx-auto")} />
    </div>
  )
}
