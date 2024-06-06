/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006944",
        secondary: "#f2f7e3",
        brown: "#855245",
        orange: "#df6857",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      container: {
        center: true,
      },
      boxShadow: {
        customShadow:
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px inset;",
      },
    },
  },
  plugins: [],
};
