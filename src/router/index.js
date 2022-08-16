import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  },
  {
    path: "/register-list",
    name: "register-list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Home/RegisteredView.vue"
      ),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/subscribers",
    name: "subscribers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Home/SubscribersView.vue"
      ),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/unsubscribers",
    name: "unsubscribers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Home/UnsubscribersView.vue"
      ),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/manage-blog",
    name: "manage-blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/blogs/ManageBlog.vue"),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/create-blog",
    name: "create-blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/blogs/CreateBlog.vue"),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/manage-podcast",
    name: "manage-podcast",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/podcast/managePodcast.vue"
      ),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/create-podcast",
    name: "create-podcast",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/podcast/createPodcast.vue"
      ),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/manage-referral",
    name: "manage-referral",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/referral/ReferralView.vue"
      ),
    beforeEnter: (to, from, next) => {
      // ...
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "login",
        });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
