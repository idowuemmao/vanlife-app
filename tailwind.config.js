/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rugged: "#008000",
        simple: "#FF00FF",
        luxury: "#C20C27",
        head: "#7a4811",
        head2: "#d8a209",
        neutral: "#FFFFFF",
        primary: "#0f172a",
      },
      backgroundColor: {
        rugged: "#008000",
        simple: "#FF00FF",
        luxury: "#C20C27",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
