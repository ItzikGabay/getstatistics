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
    beforeEnter: guardMyroute,
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
  {
    path: '/user/profile',
    name: 'Profile',
    beforeEnter: guardMyroute,
    component: () => import('../views/user/Profile.vue')
  },

  /************************
  * ! Accounts Views
  ***********************/
  {
    path: '/accounts',
    name: 'Accounts',
    beforeEnter: guardMyroute,
    component: () => import('../views/accounts/Accounts.vue')
  },
  {
    path: '/accounts/add',
    beforeEnter: guardMyroute,
    name: 'AddAccount',
    component: () => import('../views/accounts/Add.vue')
  },

  /************************
  * ! Posts Views
  ***********************/
  {
    path: '/accounts/:id/posts',
    beforeEnter: guardMyroute,
    name: 'Posts',
    component: () => import('../views/posts/Posts.vue')
  },
  {
    path: '/accounts/:id/posts/add',
    beforeEnter: guardMyroute,
    name: 'Create',
    component: () => import('../views/posts/Create.vue')
  },
  {
    path: '/accounts/:id/posts/:post_id',
    beforeEnter: guardMyroute,
    name: 'Viewer',
    component: () => import('../views/posts/View.vue')
  },
  {
    path: '/accounts/:id/posts/:post_id/edit',
    beforeEnter: guardMyroute,
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
    path: '/accounts/:id/dashboard/addAPI',
    name: 'Dashboard',
    beforeEnter: guardMyroute,
    component: () => import('../views/dashboard/CreateApi.vue')
  },
  {
    path: '/accounts/:id/dashboard/:api_id',
    name: 'Api',
    beforeEnter: guardMyroute,
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
  let storageTest = JSON.parse(localStorage.getItem('user'));
  if (storageTest)
  isAuthenticated = true;
  else
  isAuthenticated = false;
  
  // debugger;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/Auth'); // go to '/login';
  }
}

export default router;
