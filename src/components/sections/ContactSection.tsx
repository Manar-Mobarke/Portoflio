'use client'

import { Mail, Linkedin, Github } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ContactSection() {
  return (
    <section id="contacts" className="relative py-24">
      <SectionHeading title="contacts" width="w-[150px]" />

      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        {/* LEFT: Text */}
        <div className="text-secondary text-base">
          <p>
            I&apos;m interested in freelance opportunities and full-time positions. However, if you have other requests or questions, don&apos;t hesitate to contact me.
          </p>
        </div>

        {/* RIGHT: Contact box */}
        <div className="flex justify-start lg:justify-end">
          <div className="border border-secondary p-4 bg-background w-fit h-fit">
            <h3 className="text-foreground font-semibold mb-4">Message me here</h3>
            <div className="flex flex-col gap-3 text-secondary text-sm">
              <a href="mailto:manarmobarke@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={16} /> manarmobarke@gmail.com
              </a>
              <a href="https://linkedin.com/in/manar-mubarak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Linkedin size={16} /> /in/manar-mubarak
              </a>
              <a href="https://github.com/Manar-Mobarke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Github size={16} /> github.com/Manar-Mobarke
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
