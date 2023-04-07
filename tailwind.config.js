/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        my_cream: "#EADDC5",
        my_bold_cream: "#733703",
        my_main: "#F1A208",
        my_hover_main: "#FFA900",
        my_main_contrast: "#824600",
        my_text_color: "#fffaff",
        my_white_contrast: "#001233",
        my_green: "#46C36C",
        my_soft_black: "#22181C",
        my_soft_cream: "#F6E8EA",
        my_pink: "#F45B69",
        my_blue: "#266DD3",
      },
      animation: {
        comeUp: "comeUp 0.1s ease-in",
        comeLeft: "comeLeft 0.1s ease-in",
        comeRight: "comeRight 0.1s ease-in",
        soft: "soft 10s infinite",
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        comeUp: {
          "0%": {
            transform: "translateY(100%)",
          },
          "20%": {
            transform: "translateY(80%)",
          },
          "40%": {
            transform: "translateY(60%)",
          },
          "60%": {
            transform: "translateY(40%)",
          },
          "80%": {
            transform: "translateY(20%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },

        soft: {
          "100%": {transform: "rotate(360deg)"},
        },

        comeLeft: {
          "0%": {
            transform: "translateX(100%)",
          },
          "20%": {
            transform: "translateX(80%)",
          },
          "40%": {
            transform: "translateX(60%)",
          },
          "60%": {
            transform: "translateX(40%)",
          },
          "80%": {
            transform: "translateX(20%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },

        comeRight: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "20%": {
            transform: "translateX(-80%)",
          },
          "40%": {
            transform: "translateX(-60%)",
          },
          "60%": {
            transform: "translateX(-40%)",
          },
          "80%": {
            transform: "translateX(-20%)",
          },
          "100%": {
            transform: "translateX(-0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
