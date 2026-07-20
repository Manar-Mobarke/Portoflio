'use client'

import { forwardRef, useState, useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  glow?: boolean
  glowColor?: 'blue' | 'purple' | 'cyan'
}

/** Glassmorphism card with optional hover lift, spotlight effect, and glow */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hover = true, glow = false, glowColor = 'blue', ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    // Forward ref handling
    const setRefs = (element: HTMLDivElement) => {
      internalRef.current = element
      if (typeof ref === 'function') {
        ref(element)
      } else if (ref) {
        ref.current = element
      }
    }

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!internalRef.current) return
      const rect = internalRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const glowClasses = {
      blue: 'hover:shadow-glow-blue',
      purple: 'hover:shadow-glow-purple',
      cyan: 'hover:shadow-glow-cyan',
    }

    return (
      <div
        ref={setRefs}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={cn(
          'relative rounded-2xl border border-white/8 bg-surface/60 backdrop-blur-sm',
          'shadow-card transition-all duration-300 overflow-hidden group',
          hover && 'hover:-translate-y-1 hover:border-white/20 hover:shadow-card-hover cursor-pointer',
          glow && glowClasses[glowColor],
          className,
        )}
        {...props}
      >
        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
          animate={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />

        {/* Subtle inner gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 h-full">{children}</div>
      </div>
    )
  },
)

GlassCard.displayName = 'GlassCard'

/** Animated version of GlassCard using Framer Motion */
export const AnimatedGlassCard = motion(GlassCard)
