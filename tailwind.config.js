/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      'black' : '#0A0909',
      'gray' : '#252525',

    },
    fontSize:{
      sm : ['20px'],
      med: ['34px'],
      lg : ['44px'],
      xl: ['82px'],
    },
    extend: {},
  },
  plugins: [],
}

