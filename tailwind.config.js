/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070e1b',
          900: '#0a1628',
          800: '#0f1f3d',
          700: '#1a2f4f',
        },
        ivory: {
          50: '#faf9f6',
          100: '#f5f3ed',
          200: '#ebe7dd',
        },
        gold: {
          400: '#d4a853',
          500: '#c49a3c',
          600: '#a67c2e',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6.5vw, 6.25rem)', { lineHeight: '1.08' }],
        'section': ['clamp(2rem, 4.5vw, 4.25rem)', { lineHeight: '1.15' }],
        'body-lg': ['clamp(1rem, 1.8vw, 1.25rem)', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}
