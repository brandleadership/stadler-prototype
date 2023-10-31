/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      primaryDarkBlue: "#0b3f75",
      primaryBgcGray: "#F2F7FA",
      primaryLightBlue: "#007bc0",
      primaryBlue: "#1e5a9a",
      primaryBlack: "#000000",
      secondaryOliveDark: "#76881d",
      secondaryOlive: "#949300",
      secondaryOliveLight: "#bfb800",
      secondaryGreenDark: "#005e5d",
      secondaryGreen: "#008675",
      secondaryRedDark: "#6f263d",
      secondaryRed: "#ba0c2f",
      secondaryOrange: "#fe5000",
      secondaryBlueDark: "#7a99ac",
      secondaryBlue: "#009cbd",
      secondaryBlueLight: "#8dc8e8",
      secondaryWarmGrayDark: "#968c83",
      secondaryWarmGray: "#b6ada5",
      secondaryWarmGrayLight: "#cbc4bc",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-career": "url('/career1.jpg')",
      },
      fontFamily: {
        customBlack: ["Montserrat-Black", "sans-serif"],
        customBlackItalic: ["Montserrat-BlackItalic", "sans-serif"],
        customBold: ["Montserrat-Bold"],
        customBoldItalic: ["Montserrat-BoldItalic"],
        customExtraBold: ["Montserrat-ExtraBold"],
        customExtraBoldItalic: ["Montserrat-ExtraBoldItalic"],
        customExtraLight: ["Montserrat-ExtraLight"],
        customExtraLightItalic: ["Montserrat-ExtraLightItalic"],
        customLightItalic: ["Montserrat-LightItalic"],
        customRegular: ["Montserrat-Regular"],
        customItalic: ["Montserrat-Italic"],
        customLight: ["Montserrat-Light"],
        customMedium: ["Montserrat-Medium"],
        customSemiBold: ["Montserrat-SemiBold"],
        customThin: ["Montserrat-Thin"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
