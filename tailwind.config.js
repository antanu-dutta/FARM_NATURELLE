/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006944",
        secondary: "#f2f7e3",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
