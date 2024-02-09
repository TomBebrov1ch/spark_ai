import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF5722",
          TRANSPARENT: "rgba(255, 87, 34, 0.25)",
          ALMOST_WHITE: "#FAFAFA",
          dark: "#E65100",
        },
        functional: {
          DEFAULT: "#F93A00",
          LIGHT: "#FFF3EF", // Light theme color
          dark: "#008BA3", // Dark theme variant
        },
        secondary: {
          DEFAULT: "#1A1A1A", // Light theme color
          dark: "#008BA3", // Dark theme variant
        },
      },
    },
  },
  plugins: [],
};
export default config;
