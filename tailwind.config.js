/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./features/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5651e5",
        secondary: "#709dff",
        light: "#ecf0f3",
        dark: "#1f2937",
      },
      screens: {
        "2md": "860px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
