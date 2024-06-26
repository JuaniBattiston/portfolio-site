/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      "inconsolata-var": ['"Inconsolata Variable"', "monospace"],
      onest: ["Onest Variable", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
