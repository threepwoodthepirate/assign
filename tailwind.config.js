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
        fadeIn: "fadeIn 2.0s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "40%": { opacity: "0" },
          "60%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
