/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calsSans: ['"cals-sans"'],
        montsseratRegular: ['"Montserrat-Regular"'],
        montsseratMedium: ['"Montserrat-Medium"'],
        montsseratSemibold: ['"Montserrat-SemiBold"'],
        montsseratExtraBold: ['"Montserrat-ExtraBold"'],
      },
      colors: {
        primary: {
          default: "#0988D0",
          foreground: "#0988D0",
        },
        secondary: {
          DEFAULT: "#08031B",
        },
        secondary01: {
          DEFAULT: "rgba(8, 3, 27, 0.70)",
        },
      },
    },
  },
  plugins: [],
};
