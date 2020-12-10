import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../components/Todo'
import NewTodo from '../components/newTodo'
import Utilisateurs from '../modules/utilisateurs/utilisateurs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/newTodo',
    name: 'newTodo',
    component: NewTodo
    }, 
    {
    path: '/Users',
    name: 'Users',
    component: Utilisateurs
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
