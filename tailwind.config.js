module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "gold-yellow": "#FFDF00",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "hero-palais": "url('~/assets/img/palaisj.jpg')",
        "hero-cabinet": "url('/img/cabinet.JPG')",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "font-sans"],
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
