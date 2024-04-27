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
      sm : ['20px','34px'],
      med: ['24px','44px'],
      lg : ['44px','54px'],
      xl: ['82px', '92px'],
    },
    extend: {},
  },
  plugins: [],
}

