/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      'tablet': '750px',

      'laptop': '1024px',

      'desktop': '1280px',
    },      // => @media (min-width: 1280px) { ... }

    colors:{
      'black' : '#0A0909',
      'gray' : '#252525',
      'white' : '#FFFFFF',
      'whiteopacity' : 'rgba(200,200,200,0.2)',
      'transparent' : 'transparent',
    },
    fontSize:{
      sm : ['20px'],
      p: ['24px','32px'],
      p2 : ['38px','44px'],
      p2s : ['28px','34px'],
      h1: ['82px','120px'],
      h1s: ['68px','82px'],
    },
    extend: {},
  },
  plugins: [],
}