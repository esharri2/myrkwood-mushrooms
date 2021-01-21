const colors = {
  pistachio: "#93c47d",
  black: "#000000",
  goldenbrown: "#99621E",
  magnolia: "#FEF9FF",
  rawumber: "#7E6551",
  coffee: "#774936",

  cafe: "#A57548",
  windsortan: "#99582A",

  burntumber: "#7C3626",
  catawba: "#773344",
  dimgray: "#66666E",
  umber: "#776258",
  blackcoral: "#696D7D",
};

module.exports = {
  purge: {
    content: ["./_site/**/*.html"],
  },
  theme: {
    boxShadow: {
      sm:
        "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
      DEFAULT:
        "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)",
      md:
        "0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)",
      lg:
        "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)",
    },
    colors: {
      dark: colors.black,
      light: colors.magnolia,
      "accent-1": colors.pistachio,
      "accent-2": colors.coffee,
      warning: "#F59E0B",
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
      xl: "1500px",
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
      "half-window": "50vh",
      "custom-228": "228px",
      "custom-360": "360px",
      "custom-564": "564px",
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-down": "slideDown .3s ease-out",
        spring: "spring 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        spring: {
          "0%": { transform: "translateY(4%)" },
          "50%": { transform: "translateY(-4%)" },
          "100%": { transform: "translateY(4%)" },
        },
      },
    },
  },
  variants: {
    extend: {
      padding: ["first", "last"],
    },
  },
};
