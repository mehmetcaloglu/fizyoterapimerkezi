import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        nav: "1526px", // Navbar tam genişlik için - 1525px altında kompakt mod
      },
      colors: {
        border: "rgba(12, 29, 79, 0.1)",
        primary: {
          orange: "#d63503",
          "orange-hover": "#e14709",
          "orange-light": "#e9926f",
        },
        secondary: {
          blue: "#0c1d4f",
          "blue-muted": "#434e75",
        },
        background: {
          light: "#fdfefe",
          dark: "#0c1d4f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(214, 53, 3, 0.5), 0 0 10px rgba(214, 53, 3, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(214, 53, 3, 0.8), 0 0 30px rgba(214, 53, 3, 0.5)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
