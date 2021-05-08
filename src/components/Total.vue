<template>
    <div>
        <h2>Listado de ventas</h2>
        <h3 v-if="ventas.length == 0">No hay ventas registradas</h3>
        <ul v-else>
            <li  v-for="(game,idx) in ventas" :key="idx">{{game.code}} | {{game.name}} | {{game.price}}</li>
        </ul>
        <h3>Monto total de ventas: {{getTotalVentasPrice}}</h3>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ventas(){
            return this.$store.state.selledGames;
        },
        ...mapGetters(['getTotalVentas','getTotalVentasPrice'])
    },
}
</script>
