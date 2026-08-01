import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2026-08-01",

  app: {
    head: {
      title: "Hjelmare Consulting",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

  colorMode: {
    classSuffix: "",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@pinia/nuxt"],

  experimental: {
    appManifest: false,
  },

  nitro: {
    prerender: {
      routes: ["/", "/about", "/contact"],
    },
  },
});
