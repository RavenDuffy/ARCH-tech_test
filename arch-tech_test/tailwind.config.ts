import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nav-text": "#005288",
        "nav-bg": "#A7A9AC",
      },
    },
  },
  safelist: ["size-sm", "size-md", "size-lg"],
  plugins: [],
} satisfies Config
