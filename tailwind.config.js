/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px", xl: "1440px" },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    maxWidth: {
      bunny: "150px",
    },

    extend: {},
  },
  plugins: [],
};
