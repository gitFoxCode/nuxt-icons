import { defineNuxtConfig } from 'nuxt3'
import NuxtICons from '..'

export default defineNuxtConfig({
  modules: [
    NuxtICons
  ],
  NuxtICons: {
    addPlugin: true
  }
})
