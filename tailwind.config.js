const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        4.5: "1.125rem",
        6.5: "1.625rem",
        5.5: "1.375rem",
        15: "3.75rem",
      },
      spacing: {
        5.5: "1.375rem",
      },
      borderRadius: {
        2: "0.5rem",
      },

      borderColor: {
        light: "#ABBDE0",
        "gray-200": "#D5D7DB",
        "gray-800": "#414752",
      },
      backgroundColor: {
        modalBg: "rgba(0,0,0,0.4)",
        gray: {
          100: "#F6F7F8",
        },
        black: {
          100: "#131314",
        },
        blue: {
          500: "#0F62FE",
        },
      },
      boxShadow: {
        drop: "0px 4px 16px -2px #00000029",
      },
      backgroundImage: {
        "light-gradient":
          "radial-gradient(circle at 50% 50%, #E5E0FE, #CBE5FE 59%, #B8F3FF 93%)",
        "dark-gradient":
          "radial-gradient(circle at 425.781px 523px, #2A1980, #004080 59%, #005580 93%)",
      },
      textColor: {
        "grays-300": "#70737A",
        "grays-500": "#4D4D4D",
        "grays-700": "#414752",
        "blue-500": "#0F62FE",
      },
      maxHeight: {
        78: "19.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
