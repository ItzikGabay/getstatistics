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
  * ! Posts Views
  ***********************/
  {
    path: '/accounts/:id/posts',
    name: 'Posts',
    component: () => import('../views/posts/Posts.vue')
  },
  {
    path: '/accounts/:id/posts/add',
    name: 'Create',
    component: () => import('../views/posts/Create.vue')
  },
  {
    path: '/accounts/:id/posts/:post_id',
    name: 'Viewer',
    component: () => import('../views/posts/View.vue')
  },
  {
    path: '/accounts/:id/posts/:post_id/edit',
    name: 'Edit',
    component: () => import('../views/posts/Create.vue')
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
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test/Test.vue')
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes
});

/**
 * Router Guard function - 
 * check's if the user is currently sign in or not.
 * if not -> redirect you back to login.
 * if connected -> give you access to site.
 */
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
