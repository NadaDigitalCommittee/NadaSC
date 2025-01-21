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
        { rel: 'apple-touch-icon', href: '/nada-white.png' },
      ],
    },
  },

  css: [
    '@/assets/css/ress.min.css',
    '@/assets/css/style.scss',
  ],

  plugins: [],

  components: true,

  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxt/icon'],

  image: {
    provider: 'ipx',
    dir: 'assets/img',
    ipx: {
      modifiers: {
        // https://stackoverflow.com/a/77632807
        // ExifのOrientationを考慮する
        rotate: null!,
      },
    },
  },

  icon: {
    customCollections: [
      {
        prefix: 'nada-icons',
        dir: './assets/icons'
      },
    ],
  },

  build: {},

  compatibilityDate: '2025-01-18',

  typescript: {
    typeCheck: true,
  },
})
