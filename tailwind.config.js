/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        announcement: '#1f365c',
        primaryBlue: '#062d55',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        primay: ['PT Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}