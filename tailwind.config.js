/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        dark: "#191A23",
        light: "#F3F3F3",
      },
      fontFamily: {
        sans: ["Positivus", "sans-serif"],
      },
    },
  },
  plugins: [],
};

