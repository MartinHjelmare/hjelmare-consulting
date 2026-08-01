export default defineNuxtConfig({
  compatibilityDate: "2026-08-01",

  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Hjelmare Consulting",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],

  nitro: {
    prerender: {
      routes: ["/", "/about", "/contact"],
    },
  },
});
