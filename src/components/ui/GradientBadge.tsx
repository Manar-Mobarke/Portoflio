'use client'

import { cn } from '@/lib/utils'

interface GradientBadgeProps {
  children: React.ReactNode
  className?: string
  color?: string
}

/** Small badge with a glowing gradient border — used for tech tags */
export function GradientBadge({ children, className, color }: GradientBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full',
        'border border-white/10 bg-white/5 text-muted hover:text-foreground',
        'hover:border-primary/40 hover:bg-primary/10 transition-all duration-200',
        className,
      )}
      style={color ? { borderColor: `${color}40`, color } : undefined}
    >
      {children}
    </span>
  )
}
