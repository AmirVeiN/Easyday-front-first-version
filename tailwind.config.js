/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'phone': { 'min': '280px', 'max': '450px' },
      // => @media (min-width: 28px and max-width: 450px) { ... }

      'tablet': { 'min': '451px', 'max': '767px' },
      // => @media (min-width: 451px and max-width: 767px) { ... }

      'laptop': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'desktop': { 'min': '1024px', 'max': '153600px' },
      // => @media (min-width: 1024px and max-width: 1536px) { ... }



    },
    extend: {
      colors: {
        transparent: "transparent",
        blueAi: "#3fbbfe",
        purpleAi: "#a541ff",
        left: "#440f85",
        right: "#2d0659",
        twitter: " #00acee",

      },
    },
  },
  plugins: [],
}

