/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        adoBlack: "#131313",
      },
      fontFamily: {
        dmsans: ["var(--font-dmsans)"],
        clashDisplay: ["var(--font-ClashDisplay)"],
      },
    },
  },
  plugins: [],
};
