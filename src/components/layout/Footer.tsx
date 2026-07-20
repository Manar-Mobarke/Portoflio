'use client'

import { Github, Figma, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-secondary mt-24">
      <div className="py-8 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-foreground font-bold">
              <div className="w-4 h-4 bg-foreground" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              <span>Manar</span>
            </div>
            <a href="mailto:manarmobarke@gmail.com" className="text-secondary hover:text-foreground transition-colors text-sm">
              manarmobarke@gmail.com
            </a>
          </div>
          <p className="text-foreground text-sm">Full-Stack Developer</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <h3 className="text-foreground font-bold text-xl">Media</h3>
          <div className="flex gap-4">
            <a href="https://github.com/Manar-Mobarke" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-secondary hover:text-foreground transition-colors">
              <Figma size={24} />
            </a>
            <a href="https://linkedin.com/in/manar-mubarak" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="pb-8 text-center md:text-left text-secondary text-sm">
        © Copyright {new Date().getFullYear()}. Made by Manar
      </div>
    </footer>
  )
}
