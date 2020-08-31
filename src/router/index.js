import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: () => import('../views/Detalle.vue')
  },
  {
    path: '/agrupados',
    name: 'Agrupados',
    component: () => import('../views/Agrupados.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
