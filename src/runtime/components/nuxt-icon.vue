<template>
  <span class="nuxt-icon" :class="{ 'nuxt-icon--fill': !fill }" v-html="icons[name]" />
</template>

<script setup>
import { ref } from 'vue'
import { NuxtIcons } from '#imports'

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

const icons = ref(NuxtIcons ?? {})

if (!icons.value?.[props.name]) {
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
