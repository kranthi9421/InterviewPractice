/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: ["cupcake", "dark", "cmyk"],
  plugins: [require("daisyui")],
  darkMode: "class",
}
