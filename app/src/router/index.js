import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Deleter from '../views/Deleter'
import Blocker from '../views/Blocker'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/deleter',
    name: 'Deleter',
    component: Deleter,
  },
  {
    path: '/blocker',
    name: 'Blocker',
    component: Blocker,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
