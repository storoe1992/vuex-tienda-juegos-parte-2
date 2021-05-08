<template>
    <div>
        <section class="code-filter-game">
            <h2>Filtro de juegos</h2>
            <input v-model="gameId" />
        </section>
        <section class="total-registered-games">
            <h3>Cantidad de juegos registrados: {{totalGames}}</h3>
        </section>
        <section class="list-games">
            <listadojuegos :gamelist = "gameById"></listadojuegos>
        </section>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';
import listadojuegos from './ListadoJuegos'

export default {
  data() {
      return {
          gameId: ''
      }
  },
 computed: {
     gameById(){
         let game = this.$store.getters.getGameById(this.gameId);
         return game;
     },
     ...mapGetters(['totalGames'])
 },
 components: {
     listadojuegos,
 },
}
</script>
