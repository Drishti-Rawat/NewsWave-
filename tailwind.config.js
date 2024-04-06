/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#007bff",
        bg: "#f8f9fa",
        secondary:"#f5f5f5",
        accent:"#ff6600",
        gray1 : "#adb5bd",
        gray2:" #6c757d"
      }
    },
  },
  plugins: [],
}

