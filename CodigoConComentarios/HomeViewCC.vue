<template>
    <!--  
        Se utiliza un binding (:) para enviar el contenido del arreglo "listadoJuegos" de este archivo hacia el props 
            "listadoJuegos" que es el hijo que se encuentra en CardGameList.vue .
    -->
    <card-game :listadoJuegos="listadoJuegos"/>

</template>

<script>
/**
 * Se importa la librería Axios para hacer operaciones HTTP, por lo que podremos configurar y realizar solicitudes a un servidor 
 *      y recibir respuestas fáciles de procesar.
 * Para poder instalar Axios, en la consola, posicionarse en la carpeta del proyecto y luego escribir el comando:
 *      npm i axios
 * Luego se importa directamente dentro del <script> y ya se puede utilizar.
 */
import axios from 'axios';

import CardGameList from '@/components/CardGameList.vue';

export default {
    name: 'HomeView',
    // props: {},
    data: function(){
        return {
            /**
             * Al registrarse en la pagina https://rawg.io/apidocs generara una key o llave, con la cual el programador podrá
             *      conectarse a la API, en casos donde se trabaja con APIs privadas, este código nunca puede ir publico, sino 
             *      que se debe empaquetar en otro archivo.
             */
            apiKey: '3cd208d9e60b4d808294edcce030509f',
            listadoJuegos: [],
        }
    },
    // computed: {},
    methods: {
        async obtenerDatos() {
        try {
            /**
             * Se pueden hacer dos tipos de peticiones a la API.
             * La primera es conectarse directamente utilizando la url de la API y la key del usuario registrado.
             * La segunda es repitiendo la parte anterior y ademas agregando &dates para poder fijar fecha de inicio y de termino 
             *      específicos para buscar juegos.
             */
            // let conectar = await axios.get(`https://api.rawg.io/api/games?key=${this.apiKey}`);
            let conectar = await axios.get(`https://api.rawg.io/api/games?key=${this.apiKey}&dates=2023-01-01,2023-03-30&platforms=18,1,7`);
            let respuesta = conectar.data.results;

            respuesta.forEach(juego => {
            this.listadoJuegos.push(juego);
            });

            // console.log(this.listadoJuegos);

        } catch (error) {
            console.log(error);
        }
        }
    },
    // watch: {},
    components: {
        'card-game': CardGameList,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.obtenerDatos();
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>

</style>
