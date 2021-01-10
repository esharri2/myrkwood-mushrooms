const colors = {
  pistachio: "#93c47d",
  black: "#000000",
  languidLavender: "#DFD9E2",
  burntUmber: "#7C3626",
};

module.exports = {
  purge: {
    content: ["./_site/**/*.html"],
  },
  theme: {
    colors: {
      dark: colors.black,
      light: colors.languidLavender,
      "accent-1": colors.pistachio,
      "accent-2": colors.burntUmber,
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      logo: ["Pirata One", "serif"],
      display: ["Fraunces", "serif"],
      body: ["Lato", "Helvetica", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      0: "0",
      1: ".5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "4rem",
      6: "6rem",
      7: "8rem",
      8: "10rem",
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn .5s ease-out',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: 'translateY(30px)' },
          "100%": { opacity: 1, transform: 'translateY(0px)' },
        },
      },
    },
  },
};
