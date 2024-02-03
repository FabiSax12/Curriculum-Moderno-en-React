/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1ea9e5",
        third: "#808080af",
        secondary: "#F2F4FF",
        back: "#212227",
        error: "#e03030",
      },
      width: {
        casilla: "2rem",
        casillaMobile: "1.25rem",
        gap: "1.25rem"
      },
      keyframes: {
        "home-intro": {
          "0%": {
            opacity: "0",
            "margin-top": "25rem",
          },
          "100%": {
            opacity: "1"
          }
        },
        "page-intro": {
          "0%": {
            opacity: "0",
            "margin-top": "25rem"
          },
          "100%": {
            opacity: 1
          }
        },
        "skills-show-delay": {
          "0%": {
            opacity: "0"
          },
          "50%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "slide": {
          '0%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)',
          },
          '100%': {
            '-webkit-transform': 'translateX(calcularWidth() * -1)',
            transform: 'translateX(calcularWidth() * -1)',
          },
        },
        "slide-mobile": {
          '0%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)',
          },
          '100%': {
            '-webkit-transform': 'translateX(calcularWidth("true") * -1)',
            transform: 'translateX(calcularWidth("true") * -1)',
          },
        }
      },
      animation: {
        "page-intro": "page-intro 0.4s ease forwards",
        "home-intro": "home-intro 1.4s ease forwards"
      }
    }
  },
  plugins: [],
}

