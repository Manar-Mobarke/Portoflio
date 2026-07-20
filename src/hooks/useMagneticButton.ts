'use client'

import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'

interface MagneticOffset {
  x: number
  y: number
}

/**
 * Magnetic button effect — the element subtly follows the cursor.
 * Attach ref to the element and spread the event handlers.
 */
export function useMagneticButton(strength: number = 0.35) {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState<MagneticOffset>({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setOffset({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    })
  }

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  return { ref, offset, handleMouseMove, handleMouseLeave }
}
