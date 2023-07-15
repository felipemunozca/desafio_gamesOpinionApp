<template>
    <div class="container">
        <div class="row border rounded mt-5">
            <div class="col-7 not-found-image">
            </div>
            <div class="col-5 not-found-message">
                <h2>Ups! Lo sentimos</h2>
                <h5 class="mt-3">La pagina que buscas no se encuentra disponible, puedes volver a inicio presionando el siguiente botón.</h5>
                <button @click="volverInicio()" class="btn btn-primary mt-3">Volver a inicio</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'not-found-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        volverInicio() {
            this.$router.push("/");
        }
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
    .not-found-image {
        background-image: url('@/assets/404.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 400px;
    }
    .not-found-message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>