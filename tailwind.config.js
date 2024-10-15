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
      backgroundImage: {
        "light-gradient":
          "radial-gradient(circle at 50% 50%, #E5E0FE, #CBE5FE 59%, #B8F3FF 93%)",
        "dark-gradient":
          "radial-gradient(circle at 425.781px 523px, #2A1980, #004080 59%, #005580 93%)",
      },
    },
  },
  plugins: [],
};
export default config;
