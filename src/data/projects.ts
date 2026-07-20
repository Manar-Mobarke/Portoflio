import { Project } from "@/types"

export const projects: Project[] = [
  // =======================
  // Full-Stack Projects
  // =======================

  {
    id: 'starthub',
    title: 'StarHub — AI Operating System for Startups',
    description: 'An AI-powered SaaS platform for startup operations, recruitment, investment, and business intelligence.',
    longDescription:
      'A comprehensive graduation project that leverages AI for startup ecosystem management. Features responsive front-end applications, scalable back-end services, secure authentication, role-based authorization, and multi-role dashboards.',
    features: [
      'Responsive front-end using Angular, React, Next.js',
      'Scalable back-end with NestJS, Prisma ORM, PostgreSQL',
      'Secure authentication & role-based authorization',
      'Multi-role business intelligence dashboards',
    ],
    techs: ['Angular', 'React', 'Next.js', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS', 'REST APIs'],
    githubUrl: 'https://github.com/Manar-Mobarke',
    liveUrl: undefined,
    featured: true,
    accentColor: '#2563EB',
    gradientFrom: '#1e3a5f',
    gradientTo: '#0b1120',
    icon: '🚀',
  },

  {
    id: 'ai-mock-interview',
    title: 'AI Mock Interview Platform',
    description: 'An AI-powered mock interview platform that analyzes CVs and generates personalized interview questions.',
    longDescription:
      'A platform that utilizes Retrieval-Augmented Generation (RAG) using semantic search over uploaded CVs to provide intelligent mock interviews. Supports PDF, DOCX, and image parsing through OCR for intelligent document processing and offers adaptive multi-turn conversations with feedback.',
    features: [
      'Retrieval-Augmented Generation (RAG) with vector search',
      'Document parsing via OCR (PDF, DOCX, Images)',
      'Adaptive multi-turn interview conversations',
      'Performance scoring and feedback reports',
    ],
    techs: ['Node.js', 'Express.js', 'OpenAI', 'RAG', 'Vector Search', 'OCR', 'JavaScript'],
    githubUrl: 'https://github.com/Manar-Mobarke/ai-mock-interview',
    liveUrl: undefined,
    featured: true,
    accentColor: '#7C3AED',
    gradientFrom: '#2d1b5e',
    gradientTo: '#0b1120',
    icon: '🤖',
  },

  {
    id: 'bookstore-management',
    title: 'BookStore Management System',
    description: 'A secure backend system for an online bookstore using RESTful APIs.',
    longDescription: 'Developed a scalable MongoDB-backed API architecture using Mongoose and the MVC pattern. Incorporates JWT authentication, role-based authorization, and robust middleware-based validation and centralized error handling.',
    features: [
      'RESTful API development',
      'JWT authentication & role-based authorization',
      'Scalable MongoDB schemas (Mongoose & MVC)',
      'Middleware validation & centralized error handling',
    ],
    techs: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/Manar-Mobarke',
    liveUrl: undefined,
    featured: true,
    accentColor: '#10B981',
    gradientFrom: '#0a3a2a',
    gradientTo: '#0b1120',
    icon: '📚',
  },

  // =======================
  // Front-End & Other Projects
  // =======================

  {
    id: 'shopping-store',
    title: 'Shopping Store',
    description:
      'A responsive e-commerce web application built with Angular.',
    longDescription:
      'Developed with Angular using reusable components, modular architecture, routing, and responsive layouts for a modern shopping experience.',
    features: [
      'Angular routing',
      'Reusable components',
      'Responsive UI',
      'Modular architecture',
    ],
    techs: [
      'Angular',
      'TypeScript',
      'Bootstrap',
      'Responsive Design',
    ],
    githubUrl:
      'https://github.com/Manar-Mobarke/Shopping-store-angular-project',
    liveUrl:
      'https://shopping-store-angular-project.vercel.app/home',
    featured: false,
    accentColor: '#F59E0B',
    gradientFrom: '#3a2a0a',
    gradientTo: '#0b1120',
    icon: '🛒',
  },

  {
    id: 'movie-app',
    title: 'Movie App',
    description:
      'A responsive movie discovery application with dynamic TMDB API integration.',
    longDescription:
      'Built with React.js using reusable components, client-side routing, and API integration. Focused on responsive UI, state management, and performance optimization.',
    features: [
      'TMDB API integration',
      'Responsive design',
      'Reusable React components',
      'Dynamic search and movie details',
    ],
    techs: [
      'React.js',
      'JavaScript',
      'REST API',
    ],
    githubUrl: 'https://github.com/Manar-Mobarke/movie-app-react-js',
    liveUrl: 'https://movie-app-react-js-flame.vercel.app/',
    featured: false,
    accentColor: '#EF4444',
    gradientFrom: '#3b0f0f',
    gradientTo: '#0b1120',
    icon: '🎬',
  },

  {
    id: 'watches-store',
    title: 'Watches Store',
    description:
      'A modern e-commerce landing page built with Next.js and Tailwind CSS.',
    longDescription:
      'Designed and developed a responsive shopping interface using Next.js and Tailwind CSS with reusable components, optimized layouts, and clean UI architecture.',
    features: [
      'Next.js App Router',
      'Tailwind CSS',
      'Responsive layouts',
      'Reusable UI components',
    ],
    techs: [
      'Next.js',
      'Tailwind CSS',
      'React.js',
    ],
    githubUrl:
      'https://github.com/Manar-Mobarke/watches-store-by-next-js',
    liveUrl:
      'https://watches-store-by-next-js.vercel.app/',
    featured: false,
    accentColor: '#6366F1',
    gradientFrom: '#1d2757',
    gradientTo: '#0b1120',
    icon: '⌚',
  },

  {
    id: 'embedded-patient-monitor',
    title: 'Embedded Patient Monitoring System',
    description:
      'An IoT-based healthcare monitoring system for measuring temperature, heart rate, and SpO2.',
    longDescription:
      'Graduation Project with Distinction. Developed an IoT-based healthcare monitoring system for measuring temperature, heart rate, and SpO2. Integrated ESP8266 for real-time wireless transmission of patient health data.',
    features: [
      'IoT health data transmission',
      'Sensor data acquisition',
      'Real-time wireless monitoring',
      'Embedded software development',
    ],
    techs: [
      'Arduino',
      'ESP8266',
      'MAX30205',
      'MAX30100',
    ],
    featured: false,
    accentColor: '#14B8A6',
    gradientFrom: '#0f3834',
    gradientTo: '#0b1120',
    icon: '❤️',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)