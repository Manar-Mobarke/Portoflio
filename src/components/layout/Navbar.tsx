'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection, cn } from '@/lib/utils'

const navLinks = [
  { id: 'home', label: 'home' },
  { id: 'works', label: 'works' },
  { id: 'about-me', label: 'about-me' },
  { id: 'contacts', label: 'contacts' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const sectionIds = navLinks.map((l) => l.id)
  const activeSection = useActiveSection(sectionIds)

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background pt-8 pb-4">
        <div className="pl-12 md:pl-16 pr-4">
          <div className="flex items-center justify-between h-8">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors"
              aria-label="Go to top"
            >
              <div className="w-4 h-4 bg-foreground" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              <span>Manar</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    'text-sm transition-colors duration-200',
                    activeSection === link.id
                      ? 'text-foreground'
                      : 'text-secondary hover:text-foreground'
                  )}
                >
                  <span className="text-primary">#</span>{link.label}
                </button>
              ))}

            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-secondary hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 bg-background border-b border-secondary/20 md:hidden pb-4"
          >
            <nav className="flex flex-col px-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    'text-left py-3 text-lg transition-colors duration-200',
                    activeSection === link.id
                      ? 'text-foreground'
                      : 'text-secondary hover:text-foreground'
                  )}
                >
                  <span className="text-primary">#</span>{link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
