<template>
  <div class="nuxt-icon-container">
    <div
      class="nuxt-icon"
      :class="{ 'nuxt-icon--fill': fill, 'nuxt-icon--stroke': stroke }"
      :style="iconSize"
      v-html="icons[name]"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { NuxtIcons } from "#imports";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  fill: {
    type: Boolean,
    default: false,
    required: false,
  },
  stroke: {
    type: Boolean,
    default: false,
    required: false,
  },
  width: {
    type: String,
    required: false,
  },
  height: {
    type: String,
    required: false,
  },
});

const icons = ref(NuxtIcons ?? {});

const iconSize = computed(() => {
  if (!props.width && !props.height) {
    return "flex-basis: 1.5rem;";
  }
  return props.width
    ? `width: ${props.width};`
    : "" + props.height
    ? `height: ${props.height};`
    : "";
});

if (!icons.value?.[props.name]) {
  console.error(
    `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
  );
}
</script>

<style>
.nuxt-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.nuxt-icon {
  aspect-ratio: 1;
  max-height: 100%;
}
.nuxt-icon.nuxt-icon--fill,
.nuxt-icon.nuxt-icon--fill * {
  fill: currentColor !important;
}

.nuxt-icon.nuxt-icon--stroke,
.nuxt-icon.nuxt-icon--stroke * {
  stroke: currentColor !important;
}
</style>
