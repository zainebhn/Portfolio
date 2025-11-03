/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {colors: {
        brand: {
          bg: "#110e1b",
          surface: "rgba(75,29,103,.25)",
          purple: "#9333ea",
          purpleLight: "#c084fc",
        },
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #9333ea, 0 0 10px #9333ea" },
          "100%": { boxShadow: "0 0 15px #c084fc, 0 0 30px #c084fc" },
        },
      },
    },},
  
  plugins: [],
}

