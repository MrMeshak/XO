/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'dark-navy': '#1A2A33',
        'semi-dark-navy' : '#1F3641',
        'sliver' : '#A8BFC9',
        'sliver-hover': '#DBE8ED',
        'light-blue' : '##31C3BD',
        'light-blue-hover' : '#65E9E4',
        'light-yellow' : '#F2B137',
        'light-yellow-hover' : '#FFC860'
      },
      fontFamily:{
        'sans' : ['Outfit', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
