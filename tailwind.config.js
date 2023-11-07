/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rugged: "#008000",
        simple: "#ff8c00",
        luxury: "#C20C27",

        neutral: "#FFFFFF",
        primary: "#0f172a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
