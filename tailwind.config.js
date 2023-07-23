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
      button: "200px",
    },
    animation: {
      gradient: "gradientAnimation 3s ease infinite",
      bounce: "bounce 1s infinite",
      infinite: "infinite",
    },
    keyframes: {
      gradientAnimation: {
        "0%": {
          "background-size": "400%",
          backgroundPosition: "0% 50%",
        },
        "50%": { backgroundPosition: "100% 50%", "background-size": "400%" },
        "100%": {
          "background-size": "400%",
          backgroundPosition: "0% 50%",
        },
      },
    },
    transitionProperty: {
      dropdown: "transform, opacity",
    },
    transitionDuration: { dropdown: "300ms" },
    boxShadow: {
      "neon-purple":
        "0 0 10px rgba(189, 147, 249, 0.8), 0 0 20px rgba(189, 147, 249, 0.6), 0 0 30px rgba(189, 147, 249, 0.4), 0 0 40px rgba(189, 147, 249, 0.2), 0 0 50px rgba(189, 147, 249, 0.1)",
    },
    height: {
      projectCard: "700px",
      skillList: "800px",
    },
    minHeight: {
      skillCard: "30px",
    },
    minWidth: {
      skillCard: "30px",
    },
    extend: {},
  },
  plugins: [],
};
