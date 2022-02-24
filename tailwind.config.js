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
        "pink-cabinet": "#D99694",
        "gray-cabinet": "#947F7F",
      },
      backdropBlur: {
        xxs: "1px",
        xs: "2px",
      },
      backgroundImage: {
        "hero-palais": "url('~/assets/img/palaisj.jpg')",
        "hero-cabinet": "url('/img/cabinet.JPG')",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "font-sans"],
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down-delai": {
          "0%, 33%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down-delai-more": {
          "0%, 66%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.8s ease-out",
        "fade-in-down-delai": "fade-in-down-delai 1.6s ease-out",
        "fade-in-down-delai-more": "fade-in-down-delai-more 1.8s ease-out",
      },
    },
  },
  plugins: [],
};
