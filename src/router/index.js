import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Start from '../views/Start.vue'
//import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/home',
    name: 'home',
    // 按需引入
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
