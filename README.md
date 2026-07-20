# Manar Mubarak Portfolio

A premium, production-ready Full-Stack Developer portfolio built with:

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **next-themes** (dark/light mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm run start
```

## Folder Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout + metadata + fonts
│   ├── page.tsx      # Main single-page entry
│   └── globals.css   # Global CSS + design tokens
├── components/
│   ├── layout/       # Navbar, Footer, ScrollProgress
│   ├── sections/     # Hero, About, Skills, Projects, Experience, GitHub, Contact
│   └── ui/           # GlassCard, MagneticButton, SectionHeading, GradientBadge, HeroIllustration
├── data/             # Typed data: projects, skills, experience, navigation
├── hooks/            # useActiveSection, useScrollProgress, useMagneticButton
├── lib/              # utils.ts, animations.ts
└── types/            # Shared TypeScript interfaces
```

## Customization

- **Projects**: Edit `src/data/projects.ts`
- **Skills**: Edit `src/data/skills.ts`
- **Experience**: Edit `src/data/experience.ts`
- **Colors**: Edit `tailwind.config.ts` and `src/app/globals.css`
- **GitHub Stats**: Connect the GitHub REST API in `GitHubSection.tsx`
- **Contact Form**: Wire `ContactSection.tsx` to Resend, EmailJS, or Formspree

## Deployment

Ready for **Vercel** — just push to GitHub and connect your repository.
