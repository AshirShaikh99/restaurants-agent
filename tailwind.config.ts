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
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"],
        sans: [
          "var(--font-body)",
          "var(--font-fallback)",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        dark: {
          100: "#d5d5d5",
          200: "#a6a6a6",
          300: "#7a7a7a",
          400: "#4d4d4d",
          500: "#1f1f1f",
          600: "#191919",
          700: "#121212",
          800: "#0c0c0c",
          900: "#060606",
        },
        primary: {
          100: "#ffe8cc",
          200: "#ffd199",
          300: "#ffba66",
          400: "#ffa333",
          500: "#ff8c00", // Pakistani orange
          600: "#cc7000",
          700: "#995400",
          800: "#663800",
          900: "#331c00",
        },
        accent: {
          100: "#ccf5e7",
          200: "#99ebcf",
          300: "#66e0b7",
          400: "#33d69f",
          500: "#00cc87", // Pakistani green
          600: "#00a36c",
          700: "#007a51",
          800: "#005236",
          900: "#00291b",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
