/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], // Ensure Tailwind scans all your HTML files
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        ysabeau: ['Ysabeau SC', 'serif'],
      },
    },
  },
  plugins: [],
};
