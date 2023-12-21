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
      path: "/trustServices",
      name: "trustServices",
      component: () => import("../views/index-views.vue"),
      meta: {
        title: "信托服务",
      },
    },
    {
      path: "/assistant",
      name: "assistant",
      component: () => import("../views/assistant-view.vue"),
      meta: {
        title: "助手",
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
