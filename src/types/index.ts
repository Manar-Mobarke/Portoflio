// Shared TypeScript interfaces for the portfolio

export interface NavLink {
  label: string
  href: string
  id: string
}

export interface TechBadge {
  name: string
  color?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  features: string[]
  techs: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  accentColor: string
  gradientFrom: string
  gradientTo: string
  icon: string
}

export interface SkillCategory {
  id: string
  label: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon: string
  level: number // 0–100
  color: string
}

export interface ExperienceItem {
  id: string
  type: 'education' | 'work'
  title: string
  organization: string
  period: string
  description: string
  highlights: string[]
  current?: boolean
}

export interface GitHubStats {
  repos: number | string
  stars: number | string
  commits: number | string
  contributions: number | string
}
