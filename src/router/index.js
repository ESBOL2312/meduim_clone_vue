import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register'
import Login from '@/views/logIn'
import Feed from '@/views/Feed'
import Tag from '@/views/Tag'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/article/:slug',
    name: 'article',
    component:Feed
  },
  {
    path: '/tag/:slug',
    name: 'tag',
    component:Tag
  },
  //template
  {
    path: '/register',
    name: 'new-article',
    component: Register
  },
  {
    path: '/login',
    name: 'settings',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
