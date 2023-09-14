/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-dark": "#373738",
        "bg-black": "#121212",
        "text-white": "#FAFAFA",
        "primary-golden": "#FFD16A",
        "primary-black": "#1E1E1F",
        "secondary-black": "#2B2B2C",
      },
    },
  },
  plugins: [],
};
