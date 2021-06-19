module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        image: "url('/images/xl-hero-desktop_2021.webp')",
      }),
      height: {
        200: "700px",
      },
      backgroundPosition: {
        "1/2": "50%",
      },
      backgroundSize: {
        "auto-100%": "auto 100%",
      },
      colors: {
        gold: "#CBA258",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
