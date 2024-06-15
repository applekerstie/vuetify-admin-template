import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '@/views/HomeView.vue'
import DashBoard from '@/views/DashBoard.vue'
import GridSystem from '@/views/GridSystem.vue'
import GridListPage from '@/views/GridListPage.vue'
import BreakPoints from '@/views/BreskPoints.vue'

Vue.use(VueRouter);

const routes = [
  /*
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  */
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  },
  {
    path: '/grid-list-page',
    name: 'GridListPage',
    component: GridListPage
  },
  {
    path: '/breakpoints',
    name: 'BreakPoints',
    component: BreakPoints
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;

