<template>
    <nav class="navbar-menu">
        <!-- <router-link to="/">Home</router-link> -->
        <h3><i class="bi bi-controller"></i>Games Opinion</h3>
        <router-link to="/" class="navbar-link"><i class="bi bi-house"></i>Home</router-link>
    </nav>
    <!-- <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Games Opinion</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->
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
    }
    .navbar-link {
        color: white;
        text-decoration: none;
    }
</style>