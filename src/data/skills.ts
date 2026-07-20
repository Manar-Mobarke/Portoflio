import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Front-End',
    skills: [
      { name: 'React.js',      icon: '⚛️',  level: 92, color: '#61DAFB' },
      { name: 'Next.js 14',    icon: '▲',   level: 88, color: '#FFFFFF' },
      { name: 'Angular',       icon: '🅰️',  level: 85, color: '#DD0031' },
      { name: 'TypeScript',    icon: '📘',  level: 88, color: '#3178C6' },
      { name: 'Tailwind CSS',  icon: '🌊',  level: 90, color: '#06B6D4' },
      { name: 'Bootstrap 5',   icon: '🅱️',  level: 80, color: '#7952B3' },
    ],
  },
  {
    id: 'backend',
    label: 'Back-End & DB',
    skills: [
      { name: 'Node.js',    icon: '🟢', level: 90, color: '#339933' },
      { name: 'Express.js', icon: '⚡', level: 88, color: '#FFFFFF' },
      { name: 'NestJS',     icon: '🐈', level: 82, color: '#E0234E' },
      { name: 'MongoDB',    icon: '🍃', level: 85, color: '#47A248' },
      { name: 'PostgreSQL', icon: '🐘', level: 80, color: '#336791' },
      { name: 'GraphQL',    icon: '🕸️', level: 75, color: '#E10098' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', icon: '🌿', level: 90, color: '#F05032' },
      { name: 'RESTful APIs', icon: '🔗', level: 92, color: '#6366F1' },
      { name: 'OpenAI / RAG', icon: '🧠', level: 80, color: '#10A37F' },
      { name: 'Docker',       icon: '🐳', level: 70, color: '#2496ED' },
      { name: 'Vercel',       icon: '▲',  level: 85, color: '#FFFFFF' },
      { name: 'Firebase',     icon: '🔥', level: 80, color: '#FFCA28' },
    ],
  },
]
