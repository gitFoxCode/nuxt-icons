<template>
  <span class="nuxt-icon" :class="{ 'nuxt-icon--fill': !fill }" v-html="icons.get(name)" />
</template>

<script setup>
import { useNuxtApp } from '#app'
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  fill: {
    type: Boolean,
    default: false,
    required: false
  }
})
const nuxtApp = useNuxtApp()
const icons = ref(nuxtApp.$icons)

if (!icons.value.get(props.name)) {
  console.error(`[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`)
}
</script>

<style>
.nuxt-icon svg{
  width: 1em;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
}
.nuxt-icon.nuxt-icon--fill, .nuxt-icon.nuxt-icon--fill * {
  fill: currentColor !important;
}
</style>
