import { createApp, type Component, type Plugin } from "vue";
import type { Router } from "vue-router";
import "@/assets/scss/index.scss";
import { useInitHooks } from "@/hooks";
import commponents from "@/components";
import { setupI18n, type ILangMessages } from "@/lang";
import { type Store } from "vuex";
import VueAxios from "vue-axios";
import { Axios } from "@/utils/remote";
//svg插件需要配置代码
import "virtual:svg-icons-register";

/**
 * 初始化函数配置项
 * @member el 挂载点
 * @member router 路由实例
 * @member store 状态管理实例
 * @member lang 子包国际化配置
 * @member plugins 子包 vue 插件
 */
export interface StartupOption<S = Any> {
  el?: string | Element;
  router?: Router;
  lang?: ILangMessages;
  plugins?: Plugin[];
  store?: Store<S>;
}

/**
 * 初始化函数
 * @param rootComponent 根组件
 * @param options 配置项
 * @param options.el 挂载点
 * @param options.router 路由实例
 * @param options.lang 子包国际化配置
 * @param options.plugins 子包 vue 插件
 *
 */
export const startup = async (rootComponent: Component, options?: StartupOption) => {
  const { el = "#app", router, lang, plugins = [], store } = options ?? {};
  const app = createApp(rootComponent);
  app.use(setupI18n(lang));
  app.use(VueAxios, Axios);
  app.provide("axios", app.config.globalProperties.axios);
  if (store) {
    app.use(store);
  }
  if (router) {
    app.use(router);
  }
  app.use(commponents);
  await useInitHooks(app);
  /**
   * ----------------------------------start
   * 记录进入模块的首个页面路由，在头部组件点击返回时，
   * 判断当前页面是否是首个页面，是则直接madp结束场景
   * 当前仅针对对接madp3.0平台
   */
  if (import.meta.env.VITE_COMMON_PLATFORM === "madp3") {
    let flag = false;
    router?.beforeEach((to: { path: Any }, from: Any, next: () => void) => {
      if (!flag) {
        flag = true;
        // TODO 可能存在问题
        app.config.globalProperties.entryPoint = from.path;
      }
      next();
    });
  }
  if (plugins?.length > 0) {
    for (const plugin of plugins) {
      app.use(plugin);
    }
  }
  app.mount(el);
};
