import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  /**
   * ! Users Components
   */

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/item/:id",
    name: "Item",
    component: () => import("../views/items/ItemView.vue"),
  },

  /************************
   * ! Posts Components
   ***********************/

  {
    path: "/posts", // Showing all the posts
    name: "Posts",
    component: () => import("../views/posts/PostsView.vue"),
  },
  {
    path: "/posts/add",
    name: "PostCreate",
    component: () => import("../views/posts/PostCreate.vue"),
  },
  {
    path: "/posts/:id",
    name: "PostView",
    component: () => import("../views/posts/PostView.vue"),
  },
  {
    path: "/posts/:id/edit",
    name: "PostEdit",
    component: () => import("../views/posts/PostEdit.vue"),
  },

  /**
   * ! API Components
   */

  {
    path: "/PlatformStats", // Platform Stats of facebook, ravmeser, youtube, etc
    name: "PlatformStats",
    component: () => import("../views/dashboard/PlatformStats.vue"),
  },
  {
    path: "/api-list",
    name: "APIList",
    component: () => import("../views/api/APIList.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
