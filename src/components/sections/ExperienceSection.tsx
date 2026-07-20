'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, CalendarDays } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { experiences } from '@/data/experience'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="experience"
          width="w-[200px]"
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px
                          bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent hidden md:block" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8"
          >
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  className={`relative flex items-start gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Card — half width on desktop */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <GlassCard hover={false} className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-foreground">{exp.title}</h3>
                          <p className="text-sm text-primary font-medium mt-0.5">{exp.organization}</p>
                        </div>
                        <div
                          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center
                            ${exp.type === 'education'
                              ? 'bg-primary/20 text-primary'
                              : 'bg-secondary/20 text-secondary'}`}
                        >
                          {exp.type === 'education'
                            ? <GraduationCap size={16} />
                            : <Briefcase size={16} />
                          }
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-1.5 text-xs text-muted mb-3 font-mono">
                        <CalendarDays size={12} />
                        {exp.period}
                        {exp.current && (
                          <span className="ml-1 px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted leading-relaxed mb-3">{exp.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-muted">
                            <span className="text-primary mt-0.5 shrink-0">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>

                  {/* Center dot — desktop only */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center
                                  w-10 h-10 rounded-full bg-surface border-2 border-primary/50
                                  shadow-[0_0_16px_rgba(37,99,235,0.4)] z-10">
                    {exp.type === 'education'
                      ? <GraduationCap size={16} className="text-primary" />
                      : <Briefcase size={16} className="text-secondary" />
                    }
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
