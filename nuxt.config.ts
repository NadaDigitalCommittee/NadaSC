import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      titleTemplate: '%s | 灘校生徒会HP',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: '灘校生徒会公式ホームページ',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nada.ico' },
        { rel: 'apple-touch-icon', href: '@/assets/img/nada-white.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp|Material+Icons+Two+Tone',
        },
      ],
    },
  },

  css: [
    '@/assets/css/ress.min.css',
    '@/assets/css/style.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  plugins: [],

  components: true,

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/image',
  ],

  image: {
    provider: "ipx",
    dir: 'assets/img',
    ipx: {
      modifiers: {
        // https://stackoverflow.com/a/77632807
        // ExifのOrientationを考慮する
        rotate: null!
      }
    }
  },

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  compatibilityDate: '2025-01-18',

  typescript: {
    typeCheck: true,
  },
})
