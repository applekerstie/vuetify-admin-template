import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashBoard from '@/views/DashBoard.vue'
import GridSystem from '@/views/GridSystem.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/dash-board',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;

