import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * Se importan las vistas creadas para poder agregarlas a cada ruta que pide el desafió.
 * Se comentan las rutas de /administración y /notFound ya que declararan utilizando lazy loading.
 */
import OpinionesView from '@/views/OpinionesView.vue';
//import AdministracionView from '@/views/AdministracionView.vue';
//import NotFoundView from '@/views/NotFoundView.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/opiniones/:name',
        name: 'opiniones',
        component: OpinionesView,
    },
    /**
     * Para poder utilizar lazy loading en las rutas del proyecto, se debe utilizar la propiedad "component" como una función
     *      flecha anónima, y dentro del método import() se debe utilizar como comentario, la palabra reservada webpackChunkName
     *      junto al nombre que se le ha dado a la ruta, y luego, la ruta hacia el archivo correspondiente. 
     * IMPORTANTE: al archivo se le debe agregar la extension .vue .
     * IMPORTANTE: para poder enviar datos dentro de una ruta como un "id" o "name", se debe habilitar el uso de props en la ruta.
     *      Para ello solo se necesita escribir "props" y darle un valor de "true". De esta forma se habilitan los datos dinámicos
     *      y en este caso, id o name, pasarían a ser una propiedad, que se puede recibir y utilizar dentro de la vista de la ruta.
     */
    {
        path: '/administracion/:name',
        name: 'administracion',
        //component: AdministracionView,
        //IMPORTANTE
        props: true,
        component: () => import(/* webpackChunkName: "administracion" */ '../views/AdministracionView.vue'),
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '*',
        name: 'notFound',
        //component: NotFoundView,
        component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
