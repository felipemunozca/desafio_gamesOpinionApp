<template>

  <card-game :listadoJuegos="listadoJuegos"/>

</template>

<script>
import axios from 'axios';
import CardGameList from '@/components/CardGameList.vue';

export default {
  name: 'HomeView',
  // props: {},
  data: function(){
    return {
      apiKey: '3cd208d9e60b4d808294edcce030509f',
      listadoJuegos: [],
    }
  },
  // computed: {},
  methods: {
    async obtenerDatos() {
      try {
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
