import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Pizza from './pages/Pizza.vue'

export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: Home
    },
    {
      path: '/pizza', // localhost:8080/pizza
      component: Pizza
    }
  ],
  mode: 'history'
})