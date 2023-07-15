<template>
    <div class="card-group mt-4">
        <div class="card bg-warning">
            <div class="card-body">
                <h5 class="card-title">% de finalización del juego</h5>
                <hr>
                <p class="card-text">{{avance}}% <i class="fa-regular fa-star-half"></i></p>
            </div>
        </div>
        <div class="card bg-success text-white">
            <div class="card-body">
                <h5 class="card-title">Logros en el juego</h5>
                <hr>
                <p class="card-text">{{trofeos}} <i class="fa-solid fa-trophy"></i></p>
            </div>
        </div>
        <div class="card bg-info">
            <div class="card-body">
                <h5 class="card-title">Recompensas</h5>
                <hr>
                <p class="card-text">{{recompensas}} <i class="fa-solid fa-award"></i></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-group-record-comp',
    props: {
        avance: {
            type: Number,
            required: true,
        },
        trofeos: {
            type: Number,
            required: true,
        },
        recompensas: {
            type: Number,
            required: true,
        }
    },
    data: function(){
        return {
            // avance: 17,
            // trofeos: 166,
            // recompensas: 200,
        }
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
    
</style>