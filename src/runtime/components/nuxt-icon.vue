<template>
  <span class="nuxt-icon" :class="{ 'nuxt-icon--fill': !filled }" v-html="icon" />
</template>

<script setup lang="ts">
import type { Ref } from 'vue' // https://vuejs.org/guide/typescript/composition-api.html#typing-ref
import { ref } from '#imports'

const props = defineProps({
  name: String,
  filled: {
    type: Boolean,
    default: false,
    required: false
  }
})
const icon:Ref<Record<string, any> | string> = ref('')

try {
  const iconsImport = import.meta.glob('assets/icons/**/**.svg', { as: 'raw', eager: false })
  icon.value = await iconsImport[`/assets/icons/${props.name}.svg`]()
} catch {
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
