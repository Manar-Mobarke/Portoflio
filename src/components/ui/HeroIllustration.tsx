'use client'

import { motion } from 'framer-motion'

/** Animated abstract hero illustration — no photos, pure CSS/SVG */
export function HeroIllustration() {
  const codeSymbols = [
    { symbol: '</>', x: '20%', y: '15%', delay: 0, size: 'text-2xl' },
    { symbol: '{ }', x: '75%', y: '25%', delay: 0.5, size: 'text-xl' },
    { symbol: '=>',  x: '85%', y: '65%', delay: 1.0, size: 'text-2xl' },
    { symbol: '()',  x: '10%', y: '70%', delay: 1.5, size: 'text-xl' },
    { symbol: '[]',  x: '60%', y: '85%', delay: 0.8, size: 'text-lg' },
    { symbol: 'fn',  x: '40%', y: '10%', delay: 0.3, size: 'text-lg' },
    { symbol: '&&',  x: '15%', y: '45%', delay: 1.2, size: 'text-sm' },
    { symbol: '??',  x: '90%', y: '40%', delay: 0.6, size: 'text-sm' },
  ]

  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial fade over grid */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      {/* Gradient blob 1 — blue */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          width: 320,
          height: 320,
          top: '5%',
          left: '15%',
          background: 'radial-gradient(circle, #2563EB, transparent 70%)',
        }}
        animate={{
          x: [0, 30, 0, -20, 0],
          y: [0, -25, 10, 20, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient blob 2 — purple */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-25"
        style={{
          width: 280,
          height: 280,
          bottom: '10%',
          right: '10%',
          background: 'radial-gradient(circle, #7C3AED, transparent 70%)',
        }}
        animate={{
          x: [0, -25, 15, 30, 0],
          y: [0, 20, -15, -30, 0],
          scale: [1, 0.9, 1.15, 1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Gradient blob 3 — cyan */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-20"
        style={{
          width: 200,
          height: 200,
          top: '40%',
          left: '45%',
          background: 'radial-gradient(circle, #06B6D4, transparent 70%)',
        }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Central geometric ring */}
      <motion.div
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 240,
          height: 240,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
          <circle cx="120" cy="120" r="110" stroke="url(#ring-gradient)" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.6" />
          <circle cx="120" cy="120" r="85" stroke="url(#ring-gradient-2)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
          <defs>
            <linearGradient id="ring-gradient" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="0.5" stopColor="#7C3AED" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="ring-gradient-2" x1="0" y1="240" x2="240" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Central glow orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 100,
          height: 100,
          background: 'radial-gradient(circle, rgba(37,99,235,0.8) 0%, rgba(124,58,237,0.4) 50%, transparent 80%)',
          boxShadow: '0 0 60px rgba(37,99,235,0.5)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Inner core */}
      <div
        className="absolute rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 48,
          height: 48,
          background: 'radial-gradient(circle, #ffffff 0%, #2563EB 60%, transparent 100%)',
          boxShadow: '0 0 24px rgba(255,255,255,0.3)',
        }}
      />

      {/* Floating geometric shapes */}
      {[
        { size: 14, top: '20%', left: '30%', delay: 0, color: '#2563EB' },
        { size: 10, top: '65%', left: '20%', delay: 1, color: '#7C3AED' },
        { size: 16, top: '25%', left: '70%', delay: 0.5, color: '#06B6D4' },
        { size: 8,  top: '75%', left: '75%', delay: 1.5, color: '#2563EB' },
        { size: 12, top: '45%', left: '85%', delay: 0.8, color: '#7C3AED' },
      ].map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm rotate-45"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            background: shape.color,
            opacity: 0.6,
            boxShadow: `0 0 12px ${shape.color}80`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [45, 90, 45],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating code symbols */}
      {codeSymbols.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute font-mono font-bold text-primary/50 select-none pointer-events-none ${item.size}`}
          style={{ top: item.y, left: item.x }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3.5 + i * 0.3,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Particle dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
