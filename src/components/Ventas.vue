<template>
    <div>
    <section>
        <h1>Cantidad de juegos con stock: {{getTotalGamesWithStock}}</h1>
    </section>
        <h1>Listado de juegos</h1>
        <ul>
            <li v-for="(game,idx) in getGamesWithStock" :key="idx">{{game.code}} | {{game.name}} | {{game.stock}} | {{game.price}} | <button @click="sell(game.code)">Vender</button></li>
        </ul>
    </div>
</template>

<script>

import { mapGetters, mapActions} from "vuex";
import listadojuegos from "./ListadoJuegos";

export default {
    methods: {
        ...mapActions(['sell'])
    },
    computed: {
        ...mapGetters(['getTotalGamesWithStock','getGamesWithStock'])
    },
    components: {
        listadojuegos,
    },
}

</script>
