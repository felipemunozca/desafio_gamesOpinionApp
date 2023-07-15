<template>
    <div class="container">
        <div v-if="nombre == '' || apellido == '' || nombre == null || apellido == null">
            <h2 class="pt-3">Para ver la información ingresa tus datos</h2>
            <button @click="registrarUsuario" class="btn btn-success">Ingresar datos</button>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-3 pt-3 left-container">
                    <i class="fa-solid fa-circle-user"></i>
                    <h4>Bienvenid@</h4>
                    <p>{{nombreCompleto}}</p>
                </div>
                <div class="col-9 pt-3 ps-5">
                    <h2>Resumen de tu cuenta</h2>
                    <p>Le diste me gusta al juego <strong>{{name}}</strong></p>
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">¿Deseas comprar coins para este juego?</p>
                            <button @click="agregarMonedas" class="btn btn-warning">
                                <i class="fa-solid fa-coins"></i>Agregar coins
                            </button>
                            <hr>
                            <h5 class="card-title">Cantidad de coins comprados</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" :style="{'width': monedas * 2 +'%'}" :class="colorBarra">
                                    $ {{monedas}}
                                </div>
                            </div>
                            <div v-if="monedas == 50">
                                <p class="mt-2">Llegaste al máximo de tu crédito</p>
                            </div>
                        </div>
                    </div>

                    <card-group-record :avance="avance" :trofeos="trofeos" :recompensas="recompensas"></card-group-record>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardGroupRecord from '@/components/CardGroupRecord.vue';

export default {
    name: 'administracion-view',
    props: ['name'],
    data: function(){
        return {
            nombre: "",
            apellido: "",
            monedas: 0,
            avance: 0,
            trofeos: 0,
            recompensas: 0,
        }
    },
    computed: {
        nombreCompleto() {
            return `${this.nombre} ${this.apellido}`;
        },
        colorBarra() {
            return {
                'bg-success': this.monedas <= 20,
                'bg-warning': this.monedas > 20,
                'bg-danger': this.monedas >= 31,
            }
        },
    },
    methods: {
        registrarUsuario() {
            this.nombre = prompt('Ingrese su nombre:');
            this.apellido = prompt('Ingrese su apellido');
        },
        agregarMonedas() {
            let entrada = prompt('¿Cuantos coins desea agregar?');

            if (entrada == '' || entrada == null) {
                alert('No puede dejar la cantidad de coins en blanco');
                return
            }
            if (entrada > 50) {
                alert('No puede agregar mas de 50 coins.');
                return;
            }

            if ((this.monedas + parseInt(entrada)) > 50) {
                alert('No puede agregar mas de 50 coins.');
                return;
            } else {
                this.monedas = (this.monedas + parseInt(entrada));
            }
        },
        obtenerPuntajes() {
            this.avance = 17;
            this.trofeos = 166;
            this.recompensas = 200;
        }
    },
    // watch: {},
    components: {
        'card-group-record': CardGroupRecord,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        return this.obtenerPuntajes();
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .left-container {
        background-color: #2B2730;
        color: white;
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .fa-circle-user {
        font-size: 35px;
        color: deepskyblue;
    }
    .fa-coins {
        padding-right: 5px;
    }
</style>