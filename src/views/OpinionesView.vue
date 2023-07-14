<template>
    <div class="container">
        <div class="opinion-form mt-5">
            <h2 class="text-center">Escribe tu opinion para el juego: {{name}}</h2>
            <form class="mt-3">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input v-model="inputNombre" type="text" class="form-control" id="nombre" placeholder="nombre">
                </div>
                <div class="mb-3">
                    <label for="opinion" class="form-label">Opinión:</label>
                    <textarea v-model="inputOpinion" class="form-control" id="opinion" placeholder="Tú opinión debe ir aquí..." style="height: 100px"></textarea>
                </div>
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
            contador: null,
            mostrarActualizar: false,
        }
    },
    computed: {
        name() {
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

        },

        editarOpinion(index) {
            //console.log(index)
            let obtener_nombre = this.listadoOpiniones[index].nombre;
            let obtener_opinion = this.listadoOpiniones[index].opinion;
            //this.contador = this.listadoOpiniones[index];
            this.contador = index;
            // console.log(obtener_nombre)
            // console.log(obtener_opinion)
            
            this.inputNombre = obtener_nombre;
            this.inputOpinion = obtener_opinion;
            this.mostrarActualizar = true;
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
            //console.log(this.contador.index)
            //let id = this.listadoOpiniones[index];
            //console.log(id);
            //alert('presiono el update')
            //console.log(index2)
            let publicacionEditada = {
                nombre: this.inputNombre,
                opinion: this.inputOpinion,
                //index: this.contador,
            };
            console.log(publicacionEditada)
            this.listadoOpiniones.splice(this.contador, 1, publicacionEditada);

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
    
</style>