<template>
    <div class="container">
        <div class="opinion-form mt-5">
            <h2 class="text-center">Escribe tu opinion para el juego: {{nombreJuego}}</h2>
            <form class="mt-3">
                <!--  
                    Se utiliza la directiva v-model para capturar la información que se registre en el input (pueden ser textos
                        números, email, etc) y vincularlo con el nombre de una variable declarada en data().
                    Este tipo de directivas se como "enlace en dos direcciones".
                -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input v-model="inputNombre" type="text" class="form-control" id="nombre" placeholder="nombre">
                </div>
                <div class="mb-3">
                    <label for="opinion" class="form-label">Opinión:</label>
                    <textarea v-model="inputOpinion" class="form-control" id="opinion" placeholder="Tú opinión debe ir aquí..."></textarea>
                </div>
                <!--  
                    Para evitar que un formulario se recargue al presionar un botón de tipo submit, se puede utilizar un 
                        "modificador de eventos". Se declara una directiva v-on:click o @click junto a la palabra reservada prevent.
                    Ademas se utilizan las directivas v-if y v-else para activar diferentes botones dependiendo de una condición.
                -->
                <button v-if="mostrarActualizar==false" @click.prevent="agregarOpinion" type="submit" class="btn btn-info">Agregar</button>
                <button v-else @click.prevent="actualizarOpinion" type="submit" class="btn btn-info">Actualizar</button>
            </form>
        </div>
        
        <div class="opinion-list mt-5">
            <h2 class="text-center">A continuación podrás ver tu opinión</h2>
            <div v-if="listadoOpiniones.length == 0">
                <div class="alert alert-danger mt-3" role="alert">
                    No existen opiniones para mostrar.
                </div>
            </div>
            <div v-else>
                <!--  
                    Se utiliza la directiva v-for para recorrer un arreglo y luego imprimir su contenido dentro del html.
                    Se debe utilizar un valor para la iteración, debe ser un valor único, como lo seria un "id" pero en el caso
                        que el arreglo no lo tenga, se puede utilizar el valor de "index" que es la posición dentro del arreglo.
                -->
                <div v-for="(opinion, index) in listadoOpiniones" :key="index">
                    <div class="accordion mb-3" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                                aria-expanded="true" aria-controls="collapseOne">
                                    Opinión creada por: {{opinion.nombre}}
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Opinión:</strong> {{opinion.opinion}}
                                </div>
                                <div class="container mb-2">
                                    <button @click="eliminarOpinion(index)" type="button" class="btn btn-danger">Eliminar</button>
                                    <button @click="editarOpinion(index)" type="button" class="btn btn-warning ms-5">Editar</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'opiniones-view',
    // props: {},
    data: function(){
        return {
            listadoOpiniones: [],
            inputNombre: '',
            inputOpinion: '',
            contadorIndex: null,
            mostrarActualizar: false,
        }
    },
    computed: {
        /**
         * Se utiliza una propiedad computada para recibir el nombre del juego que se esta enviando en el evento redireccionar
         *      junto a la ruta desde el archivo HomeView.vue
         * Se retorna el valor de name utilizando la propiedad $route (palabra reservada de Vue diferente a $router), se debe
         *      utilizar junto a params y a la propiedad que se quiere retornar.
         */
        nombreJuego() {
            return this.$route.params.name;
        }
    },
    methods: {
        agregarOpinion() {
            if (this.inputNombre == '' ) {
                alert('Por favor, escriba su nombre antes de presionar el botón Agregar.');
                return;
            }
            if (this.inputOpinion == '') {
                alert('Por favor, escriba una opinión antes de presionar el botón Agregar.');
                return;
            }

            const publicacion = {
                nombre: this.inputNombre,
                opinion: this.inputOpinion,
            };

            this.listadoOpiniones.push(publicacion);
            // console.log(this.listadoOpiniones);
            this.inputNombre = '';
            this.inputOpinion = '';

            //this.listadoOpiniones.push(nuevaOpinion);
            //console.log(this.listadoOpiniones);
        },

        editarOpinion(index) {
            let obtener_nombre = this.listadoOpiniones[index].nombre;
            let obtener_opinion = this.listadoOpiniones[index].opinion;
            //this.contadorIndex = this.listadoOpiniones[index];
            this.contadorIndex = index;
            // console.log(obtener_nombre)
            // console.log(obtener_opinion)
            
            this.inputNombre = obtener_nombre;
            this.inputOpinion = obtener_opinion;
            this.mostrarActualizar = true;

            console.log(index)
        },

        actualizarOpinion() {
            if (this.inputNombre == '' ) {
                alert('Escriba un nombre antes de presionar el botón Actualizar.');
                return;
            }
            if (this.inputOpinion == '') {
                alert('Escriba una opinión antes de presionar el botón Actualizar.');
                return;
            }

            let publicacionEditada = {
                nombre: this.inputNombre,
                opinion: this.inputOpinion,
                //index: this.contadorIndex,
            };
            // console.log(publicacionEditada)
            this.listadoOpiniones.splice(this.contadorIndex, 1, publicacionEditada);

            this.inputNombre = '';
            this.inputOpinion = '';
            this.mostrarActualizar = false;
        },

        eliminarOpinion(index) {
            this.listadoOpiniones.splice(index, 1);
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
    textarea {
        height: 100px;
    }
</style>