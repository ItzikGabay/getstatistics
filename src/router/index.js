/***************************
 *   
 * file: 
 * /router/index.js
 *
 * Summary: 
 * System router file.
 *
 *
***************************/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
   /************************
   * ! Default Views
   ***********************/
  {
    path: '/',
    name: 'Home',
    component: Home
  },

   /************************
   * ! User Views
   ***********************/
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/user/Auth.vue')
  },

   /************************
   * ! Posts Views
   ***********************/
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/posts/Posts.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
