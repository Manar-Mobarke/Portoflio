import type { ExperienceItem } from '@/types'

export const experiences: ExperienceItem[] = [
  {
    id: 'iti',
    type: 'education',
    title: 'Full-Stack Web & Generative AI Development (MEA|RN Stack)',
    organization: 'Information Technology Institute (ITI)',
    period: '2025 – 2026',
    description:
      'Intensive Code Camp covering Angular, React.js, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, GraphQL, MUI, Testing, and Generative AI.',
    highlights: [
      'Deepening expertise in MongoDB, GraphQL, and AI-powered app development',
      'Advanced front-end and back-end integration',
      'Generative AI concepts and applications',
    ],
    current: true,
  },
  {
    id: 'creativa',
    type: 'work',
    title: 'Back-End Web Development: Node.js & Express.js',
    organization: 'Creativa Innovation Hub — Qena',
    period: '2023',
    description:
      'Focused training on back-end web development fundamentals using Node.js ecosystem.',
    highlights: [
      'Node.js & Express.js development',
      'Designing and implementing RESTful APIs',
      'Back-end development fundamentals and best practices',
    ],
    current: false,
  },
  {
    id: 'cce-degree',
    type: 'education',
    title: 'B.Eng. in Communications & Electronics Engineering',
    organization: 'South Valley University — Qena, Egypt',
    period: 'June 2025',
    description:
      'Bachelor\'s degree with a Distinction-grade graduation project.',
    highlights: [
      'Graduation Project: Embedded Patient Monitoring System (Distinction Grade)',
      'Embedded systems, C++, and hardware programming',
    ],
    current: false,
  },
]
