import type { UserConfig } from "@csii/vx-mpm-cli";

export default {
  template: {
    root: "scripts/template",
    module: "modules",
    html: "index.html", //配置html模板
  },
  modules: "packs",
  vite: "vite.config.ts",
  base: "./",
  inject: {
    // 生产环境服务的注入文件的基础路径
    base: "./../common/",
    // 要注入的目标数组 src 要注入的静态资源路径 copy 是否要复制文件
    targets: [
      {
        src: "./vx-debugger.js",
        copy: false,
        isProd: true,
      },
      {
        url: [
          "./fastclick.min.js",
          "./vue.global.prod.js",
          "./vuex.global.prod.js",
          "./vue-router.global.prod.js",
          "./axios.min.js",
          "./vue-i18n.runtime.global.prod.js",
          "./vxbm.umd.js",
          "./vxbm.css",
        ],
        isProd: true,
      },
    ],
  },
} as UserConfig;
