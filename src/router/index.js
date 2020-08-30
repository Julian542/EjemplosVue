import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/nuestros-autos/:id',
    name:'NuestrosAutos',
    component: () => import('../views/NuestrosAutos.vue')
  },
  {
    path:'/contacto',
    name:'Contacto',
    component: () => import('../views/Contacto.vue')
  },{
    path:'/detalle/:id',
    name:'Detalle',
    component: () => import('../views/Detalle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
