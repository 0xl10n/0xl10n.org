/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";
import daisyui from "daisyui";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../common/src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "false",
  safelist: ["isToggled"],
  theme: {
    fontFamily: {
      sans: ["Geist", "Inter", ...defaultTheme.fontFamily.sans],
      mono: ["GeistMono", "fira-code", ...defaultTheme.fontFamily.mono],
    },
    keyframes: {
      loop: {
        to: {
          "offset-distance": "100%",
        },
      },
    },
  },
  plugins: [
    themer({
      palette: {
        extend: "nature",
      },
      radius: "smoothest",
      background: "light",
      border: "light",
      padding: "large",
      components: {
        button: {
          rounded: "2xl",
        },
      },
    }),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["bumblebee"],
    logs: false,
  },
};
