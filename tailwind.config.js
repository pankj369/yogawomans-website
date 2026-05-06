/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1A6BAF",
        primaryOrange: "#E8651A",
        primaryGreen: "#2E7D32",
        lightSage: "#F0F7E6",
        lightSky: "#E8F4FD",
        darkText: "#2C2C2C",
        grayText: "#555555"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Lato", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 40px rgba(26, 107, 175, 0.16)",
        soft: "0 8px 28px rgba(44, 44, 44, 0.1)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(120deg, rgba(26, 107, 175, 0.3), rgba(232, 101, 26, 0.2), rgba(46, 125, 50, 0.2))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
