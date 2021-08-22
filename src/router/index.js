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

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

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
  /************************
  * ! Accounts Views
  ***********************/
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import('../views/accounts/Accounts.vue')
  },
  {
    path: '/accounts/add',
    name: 'AddAccount',
    component: () => import('../views/accounts/Add.vue')
  },

  /************************
  * ! Dashboard Views
  ***********************/
  {
    path: '/accounts/:id/dashboard',
    name: 'Dashboard',
    beforeEnter : guardMyroute,
    component: () => import('../views/dashboard/Dashboard.vue')
  },
  {
    path: '/accounts/:id/dashboard/:api_id',
    name: 'Api',
    component: () => import('../views/dashboard/Api.vue')
  },
  
  /************************
  * ! Default Routes
  ***********************/
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes
});

// Router guard
function guardMyroute(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem('user'))
    isAuthenticated = true;
  else
    isAuthenticated = false;

  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/Auth'); // go to '/login';
  }
}

export default router;
