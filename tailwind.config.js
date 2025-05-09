/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9F1C',
        secondary: '#FFBF69',
        accent: '#CBF3F0',
        background: '#FFFFFF',
        text: '#2EC4B6',
      },
    },
  },
  plugins: [],
} 