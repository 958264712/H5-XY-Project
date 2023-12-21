import App from "./App.vue";
// 导入公共模块启动函数
import { startup } from "@common";
// 导入路由表
import router from "./router";
// 导入国际化
import { lang } from "./lang";

import { store } from "./stores";

// 执行初始化操作
startup(App, {
  router,
  lang,
  store,
});
