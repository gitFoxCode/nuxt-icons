<template>
  <div>
    <ul>
      <li>Pure icon: <nuxt-icon name="fire" /></li>
      <li class="colored">
        Icon with color from text: <nuxt-icon name="fire" />
      </li>
      <li>Icon with defs: <nuxt-icon name="css3" filled /> <nuxt-icon name="javascript" filled /></li>
      <li>Subfolder icons: <nuxt-icon name="user/badge" /> User, <nuxt-icon name="admin/badge" /> Admin, <nuxt-icon name="admin/form/bug" /></li>
    </ul>
  </div>
</template>

<style>
.colored{
  color: orange;
}
</style>
