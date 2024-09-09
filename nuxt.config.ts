import { resolve } from 'path'

import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'src/',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      openWeatherMapApiKey: process.env.OPENWEATHERMAP_API_KEY,
    },
  },
  css: [
    'flag-icons/css/flag-icons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    // Otros módulos...
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'], 
    },
    plugins: [vuetify()],
  },
})
