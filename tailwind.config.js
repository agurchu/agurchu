/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          1: "#242024",
          2: "#bf0000"

        },
        secondary:{
          1: "#e30220",
          2: "#dddddd"
        }
        ,accent: "#f3f4f5"
      }
    },
  },
  plugins: [],
}

