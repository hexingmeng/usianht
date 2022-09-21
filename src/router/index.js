import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/Login',
  //   name: 'login',
  //   component: () => import('../page/Login.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
