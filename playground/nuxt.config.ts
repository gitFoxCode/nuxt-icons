import { defineNuxtConfig } from 'nuxt'
import NuxtICons from '..'

export default defineNuxtConfig({
  modules: [
    NuxtICons
  ],
  NuxtICons: {
    addPlugin: true
  }
})
