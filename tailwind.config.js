/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js", //can be removed if not used
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#005893", //Stadlerblau
      primarySolid: {
        50: "#F2F7FA",
        100: "#E5EEF4",
        200: "#CCDEE9",
        300: "#B3CDDF",
        400: "#99BCD4",
        600: "#669BBE",
        800: "#3379A9",
      },
      primaryTrans: {
        0: "#0058930d",
        50: "#0058930d",
        100: "#0058931a",
        200: "#00589333",
        300: "#0058934d",
        400: "#00589366",
        600: "#00589399",
        800: "#005893cc",
      },
      black: "#000000",
      white: "#ffffff",
      blueDark: "#004170",
      blueMid: {
        400: "#c9d7dd",
        50: "#f8fafb",
        full: "#789aaa",
      },
      blueBright: {
        400: "#99e1f3",
        600: "#66d3ee",
        full: "#00b5e2",
      },
      greenDark: "#728427",
      greenMid: "#A8AD00",
      greenBright: "#D6E10A",
      greySolid: {
        30: "#F7F7F7",
        50: "#F2F2F2",
        100: "#E5E5E5",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        600: "#666666",
        800: "#333333",
      },
      greyBrighten: {
        0: "#ffffff00",
        50: "#ffffff0d",
        100: "#ffffff1a",
        200: "#ffffff33",
        300: "#ffffff4d",
        400: "#ffffff66",
        600: "#ffffff99",
        800: "#ffffffcc",
      },
      greyDarken: {
        0: "#00000000",
        30: "#00000008",
        50: "#0000000d",
        100: "#0000001a",
        200: "#00000033",
        300: "#0000004d",
        400: "#00000066",
        600: "#00000099",
        800: "#000000cc",
      },
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
        stadlergradient:
          "linear-gradient(135deg, #000407 0%, #005994 50.61%, #0181C2 100%);",
        "hero-career": "url('/career1.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      height: {
        700: "700px",
        810: "810px",
        450: "450px",
        350: "350px",
        690: "690px",
      },
      width: {
        80: "80%",
        40: "40%",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
