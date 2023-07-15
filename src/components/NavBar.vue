<template>
    <nav class="navbar-menu">
        <h3><i class="fa-solid fa-headset"></i>Games Opinion</h3>
        <router-link to="/" class="navbar-link"><i class="fa-solid fa-house-chimney"></i>Home</router-link>
    </nav>
</template>

<script>
export default {
    name: 'nav-bar-comp',
    // props: {},
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
    .navbar-menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 8px 16px;
        color: white;
        background-color: black;
    }
    .navbar-menu h3 {
        font-size: 20px;
    }
    .navbar-menu i {
        margin-right: 5px;
        color: #ffffff;
    }
    .navbar-link {
        color: white;
        text-decoration: none;
    }
</style>