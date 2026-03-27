import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#191b23",
        secondary: "#30334a",
        action: "#f2b92f",
        inactive: "#535353",
        bottomSheet: "#e9e9e9",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
