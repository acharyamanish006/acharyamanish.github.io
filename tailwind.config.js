/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-dark": "#373738",
        "bg-black": "#121212",
        "nav-black": "rgba(18, 18, 18, 0.747)",
        "text-white": "#FAFAFA",
        "primary-golden": "#FFD16A",
        "shadow-golden": "#ffd06a21",
        "primary-black": "#1E1E1F",
        "secondary-black": "#2B2B2C",
      },
      screens: {
        mobile: "700px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
