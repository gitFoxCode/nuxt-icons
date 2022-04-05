<template>
  <div>
    <ul>
      <li>Pure icon: <nuxt-icon name="fire"/></li>
      <li class="colored">Icon with color from text: <nuxt-icon name="fire"/></li>
      <li>Icon with defs: <nuxt-icon name="css3" fill/> <nuxt-icon name="javascript" fill/></li>
    </ul>
  </div>
</template>

<style>
.colored{
  color: orange;
}
</style>
