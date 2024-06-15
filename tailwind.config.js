/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors:{
      'black' : '#0A0909',
      'gray' : '#252525',
      'white' : '#FFFFFF',
      'transparent' : 'transparent',
    },
    fontSize:{
      sm : ['20px'],
      p: ['28px'],
      p2 : ['44px','64px'],
      h1: ['82px','120px'],
    },
    extend: {},
  },
  plugins: [],
}