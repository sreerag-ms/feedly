module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "newstab-title-gray": "#49545C",
        "section-title-gray": "#2F3941",
        "subtitle-gray": "#87929D",
      },
      spacing: {
        263: "263px",
        526: "526px",
        84: "84px",
      },
      height: {
        263: "263px",
        526: "526px",
        543: "543px",
        304: "304px",
        84: "84px",
      },
      width: {
        543: "543px",
        304: "304px",
        263: "263px",
        526: "526px",
        84: "84px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
