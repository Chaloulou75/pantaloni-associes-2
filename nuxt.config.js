export default defineNuxtConfig({
  head: {
    title: "Pantaloni Greiner Rachwan | Avocats à la Cour",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Cabinet d'avocats à Paris. Droit de la construction. Droit de la responsabilité. Droit des assurances. Pantaloni Greiner Rachwan. Avocats à la Cour",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image",
    "@vite-pwa/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-fonts",
    "nuxt-gtag",
  ],

  plugins: ["~/plugins/preline.client.ts"],

  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },

  googleFonts: {
    families: {
      "Cormorant+Garamond": true,
    },
  },

  sitemap: {
    hostname: "https://www.pantaloni-greiner-rachwan.com",
    gzip: true,
  },

  gtag: {
    id: "G-2X74E1GG0H",
  },

  pwa: {
    registerWebManifestInRouteRules: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: false,
        minifyCSS: false,
        processConditionalComments: true,
        removeEmptyAttributes: false,
        removeRedundantAttributes: false,
        trimCustomFragments: false,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: false,
      },
    },
  },
});
