import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#282C33',
        surface: '#282C33',
        primary: {
          DEFAULT: '#C778DD',
          light: '#D998EB',
          dark: '#B059C8',
        },
        secondary: {
          DEFAULT: '#ABB2BF',
          light: '#C1C7D0',
          dark: '#8A92A3',
        },
        foreground: '#FFFFFF',
        muted: '#ABB2BF',
        border: '#ABB2BF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
