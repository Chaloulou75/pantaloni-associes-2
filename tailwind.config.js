module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
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
        letterDown: "letterDown 2s linear 1s",
      },
      keyframes: {
        letterDown: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
