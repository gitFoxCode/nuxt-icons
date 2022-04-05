import { defineNuxtPlugin } from '#app'
import NuxtIcon from './components/nuxt-icon.vue'

export default defineNuxtPlugin(async (nuxtApp) => {
  const iconsImport = import.meta.globEager('assets/icons/**/**.svg', { as: 'raw' })
  const icons = new Map()
  for (const [key, value] of Object.entries(iconsImport)) {
    const name = key.match(/icons\/.+\.svg/)[0].replace('icons/', '').replace('.svg', '')
    const svg = value.replace(/width="(\d+\.?\d*)"/gmi, '')
      .replace(/height="(\d+\.?\d*)"/gmi, '')
    icons.set(name, svg)
  }
  nuxtApp.provide('icons', icons)
  nuxtApp.vueApp.component('nuxt-icon', NuxtIcon)
})