'use client'

import { Github, Figma, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export function SocialSidebar() {
  return (
    <div className="hidden md:flex fixed left-4 top-0 h-screen flex-col items-center justify-start z-50 pt-8">
      {/* Top Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '25vh' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-px bg-secondary mb-4"
      />

      {/* Social Icons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <a 
          href="https://github.com/Manar-Mobarke" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-secondary hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com/in/manar-mubarak" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-secondary hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://figma.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Figma"
          className="text-secondary hover:text-primary transition-colors"
        >
          <Figma size={20} />
        </a>
      </motion.div>
    </div>
  )
}
