/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'dark-navy': '#1A2A33',
        'semi-dark-navy' : '#1F3641',
        'semi-dark-navy-shadow' : '#10212A',
        'silver' : '#A8BFC9',
        'silver-hover': '#DBE8ED',
        'silver-shadow' : '#6B8997',
        'light-blue' : '#31C3BD',
        'light-blue-hover' : '#65E9E4',
        'light-blue-shadow' : '#118C87',
        'light-yellow' : '#F2B137',
        'light-yellow-hover' : '#FFC860',
        'light-yellow-shadow':'#CC8B13',
      },
      fontFamily:{
        'sans' : ['Outfit', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
