/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary50: "#000000", //black
        primary100: "#2e2526", //black for fade
        primary150: "#A8E05F ", //green
        primary250: "#C4ED83  ", //green hover
        primary200: "#f5f5f5", //grey
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
    },
  },
  plugins: [],
};
