<template>
  <div id="app">
    <ul>
      <li><router-link :to="{name: 'inicio'}">Inicio</router-link></li>
      <li><router-link :to="{name: 'busqueda'}">Búsquedas</router-link></li>
      <li><router-link :to="{name: 'ventas'}">Ventas</router-link></li>
      <li><router-link :to="{name: 'total'}">Total</router-link></li>
    </ul>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>



ul {
  list-style: none;
  display: flex;
  background-color: gray;
  height: 40px;
  align-items: center;
  padding-left: 20px;
}

ul li a{
  color : white;
  font-weight: bold;
  text-decoration: none;
}

ul li:not(:first-child){
    margin-left: 30px;
}

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
