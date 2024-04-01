/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#e6a23c",
        "custom-orange-2": "rgb(255,116,0)",
        "custom-black": "#141414",
        "custom-slate": "rgb(31,37,47)"
      },
    },
  },
  plugins: [],
  darkMode: "false",
};
