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
                        <button @click="redireccionar(juego.name)" class="btn btn-primary">Opinar</button>
                        <i @click="redireccionarAdmin(juego.name)" class="fa-solid fa-heart"></i>
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
        /**
         * Dentro de props se define un arreglo, que se llenara con la información que se esta recibiendo desde "HomeView" 
         * El nombre del arreglo puede ser igual al que se declara en HomeView o puede ser otro.
         * Ademas se debe declarar que "tipo" tiene sera el dato y si es requerido o no. 
         */
        listadoJuegos: {
            type: Array,
            required: true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        /**
         * Se crean dos métodos para redireccionar al usuario a diferentes vistas dependiendo del botón que se presione.
         * Se debe utilizar la propiedad $router (palabra reservada de Vue) junto al método push() y dentro estará la ruta a mostrar.
         * El primer método levanta la vista opiniones, ademas se envía el nombre como propiedad para ser utilizado dentro de
         *      OpinionesView.vue
         * El segundo método levanta la vista administración, funciona de la misma forma que la primera ruta, pero en esta se definen
         *      atributos, como el name de la ruta y el parámetro name que sera el nombre del juego que se envía a la vista 
         *      AdministracionView.vue
         */
        redireccionar(name) {
            this.$router.push(`/opiniones/${name}`);
        },
        redireccionarAdmin(name) {
            this.$router.push({name: 'administracion', params: {name}})
            //this.$router.push(`/administracion/${name}`);
        },
    },
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

    .fa-heart {
        color: #ff0000;
        font-size: 18px;
        margin-left: 12px;
        cursor: pointer;
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