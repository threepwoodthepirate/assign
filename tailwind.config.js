/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      animation: {
        fadeInSlow: "fadeIn 2.0s ease-in-out",
        fadeIn: "fadeIn 500ms ease-in-out",
      },
      keyframes: {
        fadeInSlow: {
          "0%": { opacity: "0" },
          "40%": { opacity: "0" },
          "60%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
