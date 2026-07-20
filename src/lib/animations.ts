import type { Variants } from 'framer-motion'

/** Fade up from below with optional delay */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/** Fade in (no movement) */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
}

/** Blur reveal — starts blurry and fades in sharp */
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/** Stagger parent — children animate in sequence */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

/** Stagger child — used with staggerContainer parent */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Slide in from left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/** Slide in from right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/** Scale up from center */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/** Hover lift effect for cards */
export const hoverLift = {
  rest: { y: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.4)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.2)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

/** Continuous float animation for hero elements */
export const floatAnimation = {
  y: [0, -18, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

/** Viewport options for scroll-triggered animations */
export const viewportOnce = { once: true, margin: '-80px' }
