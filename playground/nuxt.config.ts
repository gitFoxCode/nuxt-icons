import { defineNuxtConfig } from 'nuxt/config'
import NuxtIcons from '..'

export default defineNuxtConfig({
  modules: [
    NuxtIcons
  ],
  NuxtIcons: {
    addPlugin: true
  }
})
