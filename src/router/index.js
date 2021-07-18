import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/map/:id?',
    name: 'map',
    component: () => import('../views/Map.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
