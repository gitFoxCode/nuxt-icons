import { defineNuxtConfig } from 'nuxt/config'
import NuxtIcons from '..'

export default defineNuxtConfig({
  modules: [
    NuxtIcons
  ],
  nuxtIcons: {
    addPlugin: true
  }
})
