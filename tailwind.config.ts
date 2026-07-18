import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1E6B47",
          dark: "#145034",
          darker: "#1A2420",
          mint: "#8FCBAB",
          soft: "#E7F1EA",
        },
        cream: "#FAFAF7",
        line: "#E5E9E3",
        muted: "#5C6B63",
        whatsapp: "#1DA851",
        accent: "#E9A13B",
      },
      fontFamily: {
        sans: ["Archivo", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
