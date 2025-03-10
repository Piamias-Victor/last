/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B301E",
          100: "#E6F2EA",
          200: "#C3E6D3",
          300: "#99D9BD",
          400: "#66CCA6",
          500: "#33BF90",
        },
        secondary: {
          DEFAULT: "#2A7B3B",
          100: "#D1F5DF",
          200: "#A3EACF",
          300: "#75DFC0",
          400: "#47D3B0",
          500: "#19C6A0",
        },
        light: "#EEE1BC",
        background: "#F5FFF8",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};