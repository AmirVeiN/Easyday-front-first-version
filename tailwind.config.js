/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        blueAi: "#3fbbfe",
        purpleAi: "#a541ff",
        left: "#440f85",
        right: "#2d0659",
      },
    },
  },
  plugins: [],
}

