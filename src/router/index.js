import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue"
import Blogs from "../views/Blogs.vue"
import News from "../views/News.vue"

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
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/news",
    name: "News",
    component: News,
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