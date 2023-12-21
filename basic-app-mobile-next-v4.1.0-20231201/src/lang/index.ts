import { createI18n, type I18n } from "vue-i18n";
import { type App } from "vue";

import zh from "./zh";
import en from "./en";
import datetimeFormats from "./datetime";
import { deepMerge } from "./utils";

const messages = {
  zh,
  en,
};

export type ILangMessages = {
  [K in keyof typeof messages]: Record<string, Record<string | number, string>>;
};
export let i18n: I18n<ILangMessages, typeof datetimeFormats, Any, string, boolean>;

/**
 * 安装 i18n
 */
export const setupI18n = (lang?: ILangMessages) => {
  i18n = createI18n({
    globalInjection: true, // 如果设置true, $t() 函数将注册到全局
    legacy: false, // 如果想在composition api中使用需要设置为false
    locale: "zh",
    datetimeFormats,
    messages: deepMerge(messages, lang || {}),
  });
  return {
    install(app: App) {
      app.use(i18n);
    },
  };
};
