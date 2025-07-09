// tailwind.config.mjs
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e0bbff', // light purple
          DEFAULT: '#a259f7', // main purple
          dark: '#6c2eb7', // dark purple
        },
        secondary: {
          light: '#ffb3de', // light pink
          DEFAULT: '#ff5ecf', // main pink
          dark: '#c41e8e', // dark pink
        },
        accent: '#f472b6', // a nice pink accent
        background: '#f8f5fc', // very light purple background
        foreground: '#2d133b', // deep purple for text
      },
      fontFamily: {
        sans: [
          'Inter',
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
} 