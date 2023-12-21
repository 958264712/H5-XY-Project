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
      component: () => import("../views/index.vue"),
      meta: {
        title: "示例入口",
      },
    },
    // {
    //   path: "/platform-api",
    //   name: "platform-api",
    //   component: () => import("../views/platform-api-example.vue"),
    //   meta: {
    //     title: "平台 API",
    //   },
    // },
    {
      path: "/format",
      name: "format",
      component: () => import("../views/format-example.vue"),
      meta: {
        title: "数据格式化",
      },
    },
    {
      path: "/hooks",
      name: "hooks-view",
      component: () => import("../views/hooks-example.vue"),
      meta: {
        title: "Hooks",
      },
      children: [
        {
          path: "index",
          name: "hooks",
          component: () => import("../views/hooks/index.vue"),
          meta: {
            title: "Hooks",
          },
        },
        {
          path: "remote",
          name: "hook-remote",
          component: () => import("../views/hooks/remote-hook.vue"),
          meta: {
            title: "Hook remote",
          },
        },
        {
          path: "i18n",
          name: "hook-i18n",
          component: () => import("../views/hooks/i18n-hook.vue"),
          meta: {
            title: "Hook I18n",
          },
        },
        {
          path: "verify-code",
          name: "hook-verify-code",
          component: () => import("../views/hooks/verify-code-hook.vue"),
          meta: {
            title: "Hook VerifyCode",
          },
        },
      ],
    },
    // {
    //   path: "/i18n",
    //   name: "i18n",
    //   component: () => import("../views/i18n-example.vue"),
    //   meta: {
    //     title: "国际化",
    //   },
    // },
    // {
    //   path: "/theme",
    //   name: "theme",
    //   component: () => import("../views/theme-example.vue"),
    //   meta: {
    //     title: "主题切换",
    //   },
    // },
  ] as RouteRecordRaw[],
});

export default router;
