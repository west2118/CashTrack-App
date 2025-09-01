/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}", // add this if you have screens folder
  ],
  presets: [require("nativewind/preset")], // ✅ add this
  theme: {
    extend: {
      colors: {
        brand: "#0666EB", // 👈 your brand color
      },
    },
  },
  plugins: [],
};
