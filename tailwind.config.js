/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        principal:"#333333",
        headers:"#1A237E",
      },
    },
  },
  plugins: [],
};