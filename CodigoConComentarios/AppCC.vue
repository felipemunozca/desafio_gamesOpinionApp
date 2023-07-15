<template>
  <div id="app">
    <NavBar/>
    <!--  
      Para poder cargar las transiciones dentro de la etiqueta <router-view> primero se debe envolver dentro de una etiqueta 
        <template> a la que se le debe agregar un mode, en este caso out-in que se interpreta como: "primero saca el contenido de 
        la vista y luego agrega el nuevo contenido" 
        (existe el mode in-out pero para este ejercicio no es compatible) y 
      Luego se utilizan las palabras reservadas de Vue, "enter-active" y "leave-active" para agregar una animación para la entada
        y salida de un componente en la vista.
    -->
    <transition mode="out-in" enter-active-class="fade-in-top" leave-active-class="fade-out">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* nav {
  padding: 30px;
} */

/* nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* nav a.router-link-exact-active {
  color: #42b983;
} */

/**
  * Se agregan dos transiciones al cambiar de pagina para hacerlo mas agradable a la vista.
  * Se utilizo la librería https://animista.net/ para copiar estilos CSS y los keyframes de entrada y salida.
  */
.fade-in-top {
	animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.fade-out {
	animation: fade-out 1s ease-out both;
}

@keyframes fade-in-top {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
