/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // pages dans /app
    './pages/**/*.{js,ts,jsx,tsx}',    // si tu utilises encore /pages
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
