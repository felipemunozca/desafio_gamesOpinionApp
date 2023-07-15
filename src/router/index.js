import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import OpinionesView from '@/views/OpinionesView.vue';

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
  {
    path: '/administracion/:name',
    name: 'administracion',
    props: true,
    component: () => import(/* webpackChunkName: "administracion" */ '../views/AdministracionView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
