/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#019863',
        'background-light': '#f5f8f7',
        'background-dark': '#0f231c'
      },
      fontFamily: {
        display: ['Spline Sans', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
