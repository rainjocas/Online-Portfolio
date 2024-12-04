/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_skyBlue: "#8ED1FC",
        theme_logoBlue: "#369FCF",
        theme_blue: "#3E9DD7",
        theme_blueGrey: "#577588",
        theme_darkBlue: "#5242FF",
        theme_purple: "#4E598C",
        theme_lightGray: "#F5F5F5",
        theme_darkGray: "#0005",
        theme_red: "#E15554",
        theme_orange: "#F18F01",
        theme_darkRed: "#D62839",
        theme_lightPurple: "#B8B8F3", 
      },
    },
  },
  plugins: [],
};
