import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 0 0 1px rgba(255,255,255,0.06)"
      },
      letterSpacing: {
        tighter: "-0.04em"
      }
    }
  },
  plugins: []
};

export default config;
