import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Manar Mubarak — Full-Stack Developer',
  description:
    'Full-Stack Developer specializing in React, Next.js, Node.js, and AI-powered platforms. Building scalable web applications and modern digital experiences.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Web Developer',
    'Software Engineer',
    'Manar Mubarak',
  ],
  authors: [{ name: 'Manar Mubarak' }],
  creator: 'Manar Mubarak',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Manar Mubarak — Full-Stack Developer',
    description:
      'Building scalable web applications, AI-powered platforms, and modern digital experiences.',
    siteName: 'Manar Mubarak Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manar Mubarak — Full-Stack Developer',
    description: 'Building scalable web applications, AI-powered platforms, and modern digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1120',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
