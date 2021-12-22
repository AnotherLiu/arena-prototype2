import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mygames from '../views/Mygames.vue'
import Topgames from '../views/Topgames.vue'
import Rewards from '../views/Rewards.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/mygames',
    name:'Mygames',
    component: Mygames
  },
  {
    path: '/topgames',
    name: 'Topgames',
    component: Topgames
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: Rewards
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
