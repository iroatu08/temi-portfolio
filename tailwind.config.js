/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "temi-primary": "#4400A5",
      "temi-secondary": "#F38043",
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
