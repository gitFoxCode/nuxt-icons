<template>
  <div>
    <ul>
      <li>Pure icon: <nuxt-icon name="fire" /></li>
      <li class="colored">
        Icon with color from text: <nuxt-icon name="fire" />
      </li>
      <li>Icon with defs: <nuxt-icon name="css3" fill /> <nuxt-icon name="javascript" fill /></li>
      <li>Subfolder icons: <nuxt-icon name="UserBadge" /> User, <nuxt-icon name="AdminBadge" /> Admin, <nuxt-icon name="AdminFormBug" /></li>
    </ul>
    <ul class="panel">
      <li class="card">
        <nuxt-icon name="fire" />
        <span class="card__title">Solid</span>
      </li>
      <li class="card colored">
        <nuxt-icon name="fire" />
        <span class="card__title">Solid</span>
      </li>
      <li class="card">
        <nuxt-icon name="beaker" />
        <span class="card__title" fill>Outline</span>
      </li>
      <li class="card colored">
        <nuxt-icon name="beaker" fill />
        <span class="card__title">Outline</span>
      </li>
    </ul>
  </div>
</template>

<style>
.colored{
  color: orange;
}

.panel{
  display: flex;
  gap: 0.5rem;
}
.card{
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid #eee;
  font-family: sans-serif;
}
.card .nuxt-icon{
  font-size: 2em;
}
.card .card__title{
  font-weight: bold;
}
</style>
