'use client'

import { motion } from 'framer-motion'
import { useMagneticButton } from '@/hooks/useMagneticButton'
import { cn } from '@/lib/utils'
import type { ReactNode, MouseEvent } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  id?: string
}

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-light hover:to-secondary-light shadow-glow-blue',
  secondary:
    'bg-surface border border-white/15 text-foreground hover:border-primary/50 hover:bg-primary/10',
  outline:
    'border border-primary/50 text-primary hover:bg-primary hover:text-white',
  ghost:
    'text-muted hover:text-foreground hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm font-medium',
  lg: 'px-8 py-4 text-base font-semibold',
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  disabled,
  type = 'button',
  id,
}: MagneticButtonProps) {
  const { ref, offset, handleMouseMove, handleMouseLeave } = useMagneticButton(0.3)

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
    'transition-all duration-200 select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    disabled && 'opacity-50 pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  )

  const motionProps = {
    animate: { x: offset.x, y: offset.y },
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        id={id}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      id={id}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
