import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/index-view.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/about-view.vue"),
      meta: {
        title: "关于",
      },
    },
  ] as RouteRecordRaw[],
});

export default router;
