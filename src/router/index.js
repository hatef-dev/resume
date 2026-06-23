import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("../views/EditView.vue"),
    },
    {
      path: "/AboutUs",
      name: "aboutus",
      component: () => import("../views/AboutUsView.vue"),
    },
    {
      path: "/CreateCV",
      name: "createcv",
      component: () => import("../views/EditView.vue"),
    },
    {
      path: "/Templates",
      name: "templates",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/FAQ",
      name: "faq",
      component: () => import("../views/FAQView.vue"),
    },
  ],
});

export default router;
