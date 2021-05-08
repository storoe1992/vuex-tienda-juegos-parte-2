<template>
    <div class="listado-juegos">
        <h1>Listado de juegos</h1>
        <ul>
            <li :style="{backgroundColor:game.color}" v-for="(game,idx) in gamelist" :key="idx">{{game.code}} | {{game.name}} | {{game.stock}} | {{game.price}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        gamelist: {
            type: Array,
            default: () => []
        },
    },

}
</script>

<style scoped>
    ul li{
        width: 300px;
    }
</style>