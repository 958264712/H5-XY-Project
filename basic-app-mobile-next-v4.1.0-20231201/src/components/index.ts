/**
 * 公共组件
 *
 * > 公共组件采用**渲染函数**的方式开发
 */
import type { App } from "vue";
import vxbmHeaderBar from "./header-bar/index.vue";

export const VxbmHeaderBar = vxbmHeaderBar;

export default {
  install(app: App<Element>) {
    // 仅注册需要全局使用的组件！！！
    // 仅注册需要全局使用的组件！！！
    // 仅注册需要全局使用的组件！！！
    app.component(vxbmHeaderBar.name, vxbmHeaderBar);
  },
};
