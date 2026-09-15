/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "rgb(var(--bg-rgb) / <alpha-value>)",
          surface: "rgb(var(--surface-rgb) / <alpha-value>)",
          ink: "rgb(var(--ink-rgb) / <alpha-value>)",
          inkSoft: "rgb(var(--ink-soft-rgb) / <alpha-value>)",
          purple: "rgb(var(--accent-rgb) / <alpha-value>)",
          purpleLight: "rgb(var(--accent-strong-rgb) / <alpha-value>)",
          line: "rgb(var(--line-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "SF Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
}
