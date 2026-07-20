'use client'

import { motion } from 'framer-motion'
import { scrollToSection } from '@/lib/utils'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text content */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Manar is a <span className="text-primary font-bold">Full-Stack Developer</span>
            </h1>
            <p className="text-secondary text-lg max-w-md">
              He crafts responsive websites and robust backend systems where technologies meet creativity
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => scrollToSection('contacts')}
              className="inline-flex items-center justify-center px-6 py-2 border border-primary text-foreground hover:bg-primary/10 transition-colors"
            >
              Contact me!!
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Image/Illustration Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex flex-col items-center"
        >
          {/* Logo / Geometric Graphic placeholder */}
          <div className="w-64 h-64 border-b border-primary relative flex items-end justify-center">
             <div className="absolute top-4 left-4 w-16 h-16 border border-primary"></div>
             <div className="absolute top-12 left-12 w-16 h-16 border border-primary"></div>
             <div className="absolute top-1/4 right-8 flex gap-2 flex-wrap w-16">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className="w-1 h-1 rounded-full bg-secondary"></div>
               ))}
             </div>
             {/* Text placeholder for image */}
             <div className="text-secondary opacity-50 pb-8 text-center text-sm">
                [Hoodie Image Placeholder]
             </div>
          </div>
          
          {/* Working on box */}
          <div className="mt-4 border border-secondary p-2 flex items-center gap-2 bg-background w-full max-w-sm">
            <div className="w-4 h-4 bg-primary"></div>
            <p className="text-secondary text-sm">Currently working on <span className="text-foreground font-bold">Portfolio</span></p>
          </div>
        </motion.div>
      </div>

      {/* Quote Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-32 max-w-2xl mx-auto flex flex-col relative"
      >
        <div className="border border-secondary p-6 text-center text-xl relative bg-background z-10">
          <div className="absolute -top-3 left-4 bg-background px-2 text-3xl font-serif leading-none">&quot;</div>
          With great power comes great electricity bill
          <div className="absolute -bottom-4 right-4 bg-background px-2 text-3xl font-serif leading-none">&quot;</div>
        </div>
        <div className="border border-secondary border-t-0 p-3 self-end text-sm w-48 text-center relative z-0">
          - Dr. Who
        </div>
      </motion.div>
    </section>
  )
}
