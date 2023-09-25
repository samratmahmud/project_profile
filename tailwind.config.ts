import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        gray: {
          "50": "#ffffff",
          "400": "#AEAEAE",
          "700": "#253655",
        },
        black: {"900": "#000", "300": "#d8d8d8"},
        slate: {"400": "#e6e6e6"},
        zinc: {"500": "#82859C"},
        neutral: {"400": "#A8A8A8"},
        cyan: {"800": "#394E79"},
        sky: {"500": "#00A2DD"},
        green: {"500": "#34A853"},
      },
      fontFamily: {
        roboto: ["'Roboto'", ...fontFamily.sans],
      },
    },
    fontSize: {
      xs: ["12px", {}],
      sm: ["14px", {}],
      base: ["15px", {}],
      lg: ["16px", {}],
      xl: ["18px", {}],
      "2xl": ["19px", {}],
      "3xl": ["21px", {}],
      "4xl": ["24px", {}],
      "5xl": ["27px", {}],
      "6xl": ["30px", {}],
      "7xl": ["38px", {}],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1170px",
    },
  },
  plugins: [],
};
export default config;
