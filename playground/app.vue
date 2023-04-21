<template>
  <div>
    <ul>
      <li>Pure icon: <nuxt-icon name="fire" /></li>
      <li class="colored">
        Icon with color from text: <nuxt-icon name="fire" />
      </li>
      <li>
        Icon with defs: <nuxt-icon name="css3" filled />
        <nuxt-icon name="javascript" filled />
      </li>
      <li>
        Subfolder icons: <nuxt-icon name="user/badge" /> User,
        <nuxt-icon name="admin/badge" /> Admin,
        <nuxt-icon name="admin/form/bug" />
      </li>
      <li>
        Reactive change:
        <nuxt-icon :name="icon ? 'user/badge' : 'admin/form/bug'" />
        <button @click="icon = !icon">
          Update
        </button>
      </li>
      <li class="colored">
        Inline icon (stroke) with color from text: <nuxt-icon name="foxcode-logo" />
      </li>
      <li class="colored">
        Icon with default fill: <nuxt-icon name="foxcode-logo" filled />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from '#imports'

const icon = ref(false)
</script>

<style>
.colored {
  color: orange;
}
</style>
