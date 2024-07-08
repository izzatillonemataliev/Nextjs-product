/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          "0%": { color: "#FF0000" }, // qizil
          "16.67%": { color: "#FF7F00" }, // to'q sariq
          "33.33%": { color: "#FFFF00" }, // sariq
          "50%": { color: "#00FF00" }, // yashil
          "66.67%": { color: "#0000FF" }, // ko'k
          "83.33%": { color: "#8B00FF" }, // binafsha
          "100%": { color: "#FF0000" }, // qaytib qizilga
        },
      },
      animation: {
        colorCycle: "colorCycle 6s linear infinite", // 6 soniya davomida takrorlanadi, to'xtamasdan
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
