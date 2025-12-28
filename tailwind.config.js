/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#324FA6",
        secondary: "#04B2D9",
        secondaryYellow: "#F2CB05",
        paragraph: "#555555",
      },
    },
  },
  plugins: [],
};
