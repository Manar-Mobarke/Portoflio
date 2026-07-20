'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

/** Top scroll progress bar — linear indicator that fills as user scrolls */
export function ScrollProgress() {
  const progress = useScrollProgress()
  const springProgress = useSpring(progress, { stiffness: 300, damping: 40 })
  const width = useTransform(springProgress, [0, 100], ['0%', '100%'])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ width }}
      />
    </div>
  )
}
