/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9EF",
        brand: {
          yellow: "#FFD84D",
          pink: "#FF6B9D",
          blue: "#4DA6FF",
          mint: "#7BE495",
          orange: "#FF8A3D",
          purple: "#A78BFA",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      boxShadow: {
        "nb-sm": "2px 2px 0px 0px #000",
        nb: "4px 4px 0px 0px #000",
        "nb-md": "6px 6px 0px 0px #000",
        "nb-lg": "8px 8px 0px 0px #000",
        "nb-xl": "12px 12px 0px 0px #000",
        "nb-2xl": "16px 16px 0px 0px #000",
      },
    },
  },
  plugins: [],
};
