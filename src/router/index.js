import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import ('../views/pages') == lazy load

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;