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
      backgroundImage: {
        "hero-palais": "url('~assets/img/compress/palaisj.jpg')",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "font-sans"],
      },
    },
  },
  plugins: [],
};
