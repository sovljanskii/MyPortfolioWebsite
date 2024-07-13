/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "750px",

      laptop: "1024px",

      desktop: "1280px",
    }, // => @media (min-width: 1280px) { ... }

    colors: {
      black: "#0A0909",
      gray: "#252525",
      white: "#FFFFFF",
      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF",
      buttoncol: "#644cad",
      whiteopacity: "rgba(200,200,200,0.2)",
      blackopacity: "rgba(0,0,0,0.5)",
      transparent: "transparent",
    },
    fontSize: {
      sm: ["20px"],
      p: ["22px", "32px"],
      p2: ["38px", "44px"],
      p2s: ["20px", "34px"],
      h1: ["82px", "120px"],
      h1s: ["48px"],
    },
    extend: {},
  },
  plugins: [],
};
