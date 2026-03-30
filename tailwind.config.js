/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[72rem] mx-auto px-4 sm:px-5 md:px-8 lg:px-12 xl:max-w-[80rem] xl:px-15":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2rem] leading-[2.5rem] sm:text-[2.25rem] sm:leading-[2.875rem] md:text-[2.5rem] md:leading-[3.25rem] lg:text-[2.875rem] lg:leading-[3.5rem] xl:text-[3.25rem] xl:leading-[3.875rem] 2xl:text-[3.5rem] 2xl:leading-[4.25rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.5rem] leading-[2rem] sm:text-[1.625rem] sm:leading-[2.25rem] md:text-[1.875rem] md:leading-[2.375rem] lg:text-[2.125rem] lg:leading-[3rem] xl:text-[2.5rem] xl:leading-[3.25rem] 2xl:text-[2.75rem] 2xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[1.625rem] leading-snug md:text-[1.875rem] md:leading-normal lg:text-[2.125rem] xl:text-[2.25rem]":
            {},
        },
        ".h4": {
          "@apply text-[1.25rem] leading-snug md:text-[1.5rem] lg:text-[1.625rem] xl:text-[1.75rem]":
            {},
        },
        ".h5": {
          "@apply text-lg leading-snug sm:text-xl md:text-xl lg:text-2xl lg:leading-normal":
            {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.8125rem] leading-[1.4rem] sm:text-[0.875rem] sm:leading-[1.5rem] md:text-[0.9375rem] md:leading-[1.625rem] lg:text-[1rem] lg:leading-[1.75rem] xl:text-[1.0625rem] xl:leading-7":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.8125rem] leading-[1.375rem] sm:text-[0.875rem] sm:leading-6 md:text-[0.9375rem] lg:text-base":
            {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
