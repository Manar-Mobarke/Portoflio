'use client'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  className?: string
  width?: string
}

export function SectionHeading({
  title,
  className,
  width = "w-[200px]"
}: SectionHeadingProps) {
  return (
    <div className={cn('flex items-center gap-4 mb-12', className)}>
      <h2 className="text-3xl font-medium text-foreground">
        <span className="text-primary">#</span>{title}
      </h2>
      <div className={cn('h-px bg-primary flex-1 max-w-sm', width)} />
    </div>
  )
}
