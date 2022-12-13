/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          600: '#3c0d5a',
          700: '#24132e',
          800: '#0f0416'
        }
      },
    },
  },
  plugins: [],
}
