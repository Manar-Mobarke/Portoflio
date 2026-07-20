'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function ProjectsSection() {
  // Taking only the first 3 for complete-apps, rest for small-projects
  const completeApps = projects.slice(0, 3)
  const smallProjects = projects.slice(3)

  return (
    <section id="works" className="relative py-24">
      <div className="flex justify-between items-end mb-12">
        <SectionHeading title="projects" className="mb-0" />
        <a href="https://github.com/Manar-Mobarke" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground mb-1 text-sm">
          View all ~~&gt;
        </a>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {completeApps.map((project) => (
          <motion.div key={project.id} variants={staggerItem}>
            <div className="border border-secondary flex flex-col h-full bg-background transition-transform duration-200 hover:-translate-y-1 hover:border-primary">
              {/* Image Placeholder */}
              <div className="h-44 bg-surface border-b border-secondary flex items-center justify-center relative overflow-hidden">
                <div className="text-secondary opacity-20 text-6xl">
                  {project.icon}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="p-2 border-b border-secondary">
                <p className="text-secondary text-sm">
                  {project.techs.join(' ')}
                </p>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-6 flex-1">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 border border-primary text-foreground text-sm hover:bg-primary/10 transition-colors"
                    >
                      Live &lt;~&gt;
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 border border-secondary text-secondary text-sm hover:text-foreground hover:border-foreground transition-colors"
                    >
                      Github &lt;~&gt;
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Small Projects */}
      <div className="mt-24 mb-12">
        <SectionHeading title="small-projects" width="w-[150px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {smallProjects.map((project) => (
          <motion.div key={project.id} variants={staggerItem}>
            <div className="border border-secondary flex flex-col h-full bg-background transition-transform duration-200 hover:-translate-y-1 hover:border-primary">
              {/* Tech Stack */}
              <div className="p-2 border-b border-secondary">
                <p className="text-secondary text-sm">
                  {project.techs.join(' ')}
                </p>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-6 flex-1">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 border border-primary text-foreground text-sm hover:bg-primary/10 transition-colors"
                    >
                      Live &lt;~&gt;
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 border border-secondary text-secondary text-sm hover:text-foreground hover:border-foreground transition-colors"
                    >
                      Github &lt;~&gt;
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
