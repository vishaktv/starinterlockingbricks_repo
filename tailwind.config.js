/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:["var(--font-montserrat)"],
        nuehassLight:["var(--font-nuehassLight)"],
        nuehassMedium:["var(--font-nuehassMedium)"]
      }
    },
  },
  plugins: [],
}