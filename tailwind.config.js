/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{

    },
    colors:{
      'black' : '#0A0909',
      'gray' : '#252525',

    },
    fontSize:{
      sm : ['20px'],
      p: ['28px'],
      h2 : ['44px'],
      h1: ['82px'],
    },
    extend: {},
  },
  plugins: [],
}

