'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'

const skills = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'C++', 'Python', 'PHP']
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Docker', 'VS Code', 'Postman']
  },
  {
    title: 'Other',
    items: ['REST API', 'GraphQL', 'JWT Auth', 'OpenAI', 'RAG']
  },
  {
    title: 'Frameworks',
    items: ['React.js', 'Next.js', 'Angular', 'Node.js', 'Express.js', 'NestJS', 'Tailwind CSS']
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <SectionHeading title="skills" />

      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        {/* LEFT: Geometric decorations */}
        <div className="relative hidden lg:block h-full min-h-[300px]">
           {/* Dots */}
           <div className="absolute top-0 left-8 flex gap-4 flex-wrap w-24">
             {[...Array(25)].map((_, i) => (
               <div key={`dot1-${i}`} className="w-1 h-1 rounded-full bg-secondary"></div>
             ))}
           </div>
           
           <div className="absolute bottom-24 left-32 flex gap-4 flex-wrap w-24">
             {[...Array(25)].map((_, i) => (
               <div key={`dot2-${i}`} className="w-1 h-1 rounded-full bg-secondary"></div>
             ))}
           </div>

           {/* Squares */}
           <div className="absolute top-4 right-12 w-20 h-20 border border-secondary"></div>
           <div className="absolute bottom-32 right-0 w-12 h-12 border border-secondary"></div>
           <div className="absolute top-1/2 left-8 w-20 h-20 border border-primary"></div>
           <div className="absolute top-1/2 mt-8 left-16 w-20 h-20 border border-primary"></div>
        </div>

        {/* RIGHT: Skills Grid */}
        <div className="flex flex-wrap gap-4 content-start">
          {skills.map((category) => (
            <div key={category.title} className="border border-secondary bg-background w-full sm:w-[calc(50%-0.5rem)] lg:w-48 h-fit">
              <h3 className="text-foreground font-semibold p-2 border-b border-secondary">
                {category.title}
              </h3>
              <div className="p-2 text-secondary flex flex-wrap gap-x-2 gap-y-1">
                {category.items.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
