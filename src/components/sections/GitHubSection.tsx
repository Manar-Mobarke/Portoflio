'use client'

import { motion } from 'framer-motion'
import { Github, GitCommit, Star, BookOpen, BarChart3, Info } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const statCards = [
  { label: 'Public Repos',   icon: BookOpen,   placeholder: '—', color: '#2563EB' },
  { label: 'Total Stars',    icon: Star,       placeholder: '—', color: '#F59E0B' },
  { label: 'Commits (yr)',   icon: GitCommit,  placeholder: '—', color: '#7C3AED' },
  { label: 'Contributions',  icon: BarChart3,  placeholder: '—', color: '#06B6D4' },
]

/** Generates a contribution-graph visual from a dot-grid pattern */
function ContributionGraph() {
  const weeks = 26
  const days = 7
  const levels = [0, 0, 0, 1, 1, 2, 2, 3] // weighted random-like distribution

  return (
    <div className="flex gap-1 overflow-x-auto pb-2">
      {Array.from({ length: weeks }).map((_, wi) => (
        <div key={wi} className="flex flex-col gap-1">
          {Array.from({ length: days }).map((_, di) => {
            const level = levels[Math.floor(Math.random() * levels.length)]
            const opacity = level === 0 ? 0.1 : level === 1 ? 0.3 : level === 2 ? 0.6 : 0.9
            return (
              <div
                key={di}
                className="w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125"
                style={{ background: `rgba(37,99,235,${opacity})` }}
                title={`Week ${wi + 1}, Day ${di + 1}`}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

const languages = [
  { name: 'TypeScript', percent: 42, color: '#3178C6' },
  { name: 'JavaScript', percent: 25, color: '#F7DF1E' },
  { name: 'Python',     percent: 18, color: '#3776AB' },
  { name: 'CSS',        percent: 10, color: '#1572B6' },
  { name: 'Other',      percent: 5,  color: '#94A3B8' },
]

export function GitHubSection() {
  return (
    <section id="github" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="github"
          width="w-[150px]"
        />

        {/* Data notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="flex items-center gap-2 mb-10 p-4 rounded-xl bg-accent/10 border border-accent/20 text-sm text-accent max-w-xl mx-auto"
        >
          <Info size={16} className="shrink-0" />
          Replace placeholder values by connecting the GitHub REST or GraphQL API.
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {statCards.map((card) => (
            <motion.div key={card.label} variants={staggerItem}>
              <GlassCard hover={false} className="p-5 text-center">
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${card.color}20` }}
                >
                  <card.icon size={18} style={{ color: card.color }} />
                </div>
                <p className="text-3xl font-bold text-foreground">{card.placeholder}</p>
                <p className="text-xs text-muted mt-1">{card.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
        >
          <GlassCard hover={false} className="p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <GitCommit size={16} className="text-primary" />
                Contribution Graph
              </h3>
              <span className="text-xs text-muted">Last 6 months (placeholder)</span>
            </div>
            <ContributionGraph />
            <div className="flex items-center justify-end gap-1.5 mt-3">
              <span className="text-xs text-muted">Less</span>
              {[0.1, 0.3, 0.6, 0.9].map((o) => (
                <div key={o} className="w-3 h-3 rounded-sm" style={{ background: `rgba(37,99,235,${o})` }} />
              ))}
              <span className="text-xs text-muted">More</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Language breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3 }}
        >
          <GlassCard hover={false} className="p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 size={16} className="text-secondary" />
              Top Languages
            </h3>

            {/* Stacked bar */}
            <div className="flex h-3 rounded-full overflow-hidden mb-4">
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={viewportOnce}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ background: lang.color }}
                  title={`${lang.name}: ${lang.percent}%`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: lang.color }} />
                  <span className="text-xs text-muted">{lang.name}</span>
                  <span className="text-xs text-foreground font-medium ml-auto">{lang.percent}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <motion.a
            href="https://github.com/Manar-Mobarke"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15
                       text-sm font-medium text-muted hover:text-foreground hover:border-white/30
                       hover:bg-white/5 transition-all duration-200"
          >
            <Github size={18} />
            View GitHub Profile
          </motion.a>
        </div>
      </div>
    </section>
  )
}
