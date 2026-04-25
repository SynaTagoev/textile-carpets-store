/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#C47B5D',
        dustyrose: '#E8D5D0',
        sage: '#9AA98A',
        cream: '#FCFAF7',
        warmgray: '#5E5A58',
        dark: '#2C2C2C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}