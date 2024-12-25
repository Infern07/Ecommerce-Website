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
    boxShadow: {
      'custom': '0 1.2px 1.2px rgba(0, 0, 0, 0.8)',
    },
  },
  plugins: [],
};
