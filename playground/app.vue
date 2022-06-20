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
      <li class="card filled">
        <nuxt-icon name="beaker" fill />
        <span class="card__title">Outline</span>
      </li>
      <li class="card colored filled">
        <nuxt-icon name="beaker" fill />
        <span class="card__title">Outline</span>
      </li>
      <li class="card colored filled">
        <nuxt-icon name="chart-square-bar" fill style="stroke: currentColor; stroke-width: 2px" />
        <span class="card__title">Outline</span>
      </li>
      <li class="card">
        <nuxt-icon name="aspect-ratio" />
        <span class="card__title">Outline</span>
      </li>
      <li class="card colored">
        <nuxt-icon name="translate" fill style="stroke-width: 2px" />
        <span class="card__title">Outline</span>
      </li>
      <li class="card filled">
        <nuxt-icon name="javascript" fill />
        <span class="card__title">With defs</span>
      </li>
      <li class="card colored filled">
        <nuxt-icon name="javascript" fill />
        <span class="card__title">With defs</span>
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
  position: relative;
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid #eee;
  font-family: sans-serif;
  transition: background-color 0.3s;
}
.card:hover{
  transition: background-color 0.3s;
  background-color: #444;
}
.card .nuxt-icon{
  font-size: 2em;
}
.card .card__title{
  font-weight: bold;
}
.filled::after{
  content: "FILL";
  position: absolute;
  top: 5px;
  right: 5px;
  font-weight: bold;
  font-size: 0.5rem;
  padding: 0.3rem;
  background-color: #333;
  color: #fff;
  border-radius: 100vw;
}
</style>
