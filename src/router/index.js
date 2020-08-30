import Vue from 'vue'
import VueRouter from 'vue-router'
import Grilla from '../views/Grilla.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/grilla/:id',
    name: 'Grilla',
    component: Grilla
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: () => import('../views/Detalle.vue')
  },
  {
    path: '/grilla/legajo/:id',
    name: 'Grilla',
    component: () => import('../views/Grilla.vue')
  },
  {
    path: '/grilla/nombre/:id',
    name: 'Grilla',
    component: () => import('../views/Grilla.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
