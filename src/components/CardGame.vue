<template>
    <div class="container">
        <h1 class="mt-5">Lista de juegos disponibles</h1>
        <div class="cards-game mt-3">
            <div v-for="(juego, index) in listadoJuegos" :key="index">
                <div class="card" style="">
                    <img :src="juego.background_image" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{juego.name}}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Rating: {{juego.rating}}</li>
                        <li class="list-group-item">Released: {{juego.released}}</li>
                        <li class="list-group-item">Update: {{juego.updated}}</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-primary">Opinar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-game-comp',
    props: {
        listadoJuegos: {
            type: Array,
            required: true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    // methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .cards-game {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        gap: 15px 30px;
        /* margin: 30px auto 0; */
    }

    @media (max-width: 576px) { 
        .cards-game {
            grid-template-columns: 1fr;
            width: 90%;
            margin: 0 auto;
            gap: 15px;
        }
    }
</style>