import { useI18n, type Composer } from "vue-i18n";
import type { NamedValue } from "vue-i18n";
import { i18n } from "@/lang";

/**
 * 国际化 Hook
 * @param {string} namespace 命名空间
 * @param {boolean} global 当在 setup 外部使用时报错，可以将改参数设为 true
 * @returns
 * - t vue-i18n 转换函数 transform
 * - d vue-i18n 日期格式化 函数
 * - nsT 带命名空间的转换函数
 * - ns 添加命名空间函数
 * @example
 *
 * ## 公共模块导入
 *
 * ```ts
 * import { useI18nHook } from "@/hooks";
 * ```
 *
 * ## 子模块导入
 *
 * ```ts
 * import { hooks } from "@common";
 * const { useI18nHook } = hooks;
 * ```
 *
 * ## 基础使用
 *
 * ```ts
 * const { t } = useI18nHook();
 * console.log(t("page.startAmountRangePlaceHolder"));
 * ```
 * ## 命名空间使用
 *
 * - setup 中使用
 *
 *    ```ts
 *    const { nsT } = useI18nHook("page");
 *    console.log(nsT("title")); -> console.log(nsT("page.title"));
 *    ```
 * - template 中使用
 *
 *    ```vue
 *    <template>
 *    <div>{{ $t(ns("title")) }}</div><!-- {{ $t("page.title") }} -->
 *    </template>
 *    <script setup lang="ts">
 *    import { hooks } from "@common";
 *    const { useI18nHook } = hooks;
 *    const { ns } = useI18nHook("page");
 *    </script>
 *    ```
 */
export const useI18nHook = (namespace = "", global?: boolean) => {
  const { t, d } = global ? i18n.global : useI18n();
  const ns = (key: string | number) => (namespace ? `${namespace}.${key}` : key);
  const nsT = (key: string | number, named?: NamedValue, options?: Any) => (t as Any)(ns(key), named, options);
  // TODO 其他需要扩展的方法

  return {
    t,
    d,
    ns,
    nsT,
  } as IUseI18nHook;
};

interface IUseI18nHook {
  /**
   * 转换函数
   *
   * @param key 待转换的key
   * @param named 命名插值的值
   * @param options 其他翻译选项
   */
  t: Composer["t"];
  /**
   * 日期转换函数
   *
   * @param key 待转换的key
   * @param named 命名插值的值
   * @param options 其他翻译选项
   */
  d: Composer["d"];
  /**
   * 添加命名空间
   * @param key 待转换的key
   */
  ns: (key: string | number) => void;
  /**
   * 带命名空间的转换函数
   *
   * @param key 待转换的key
   * @param named 命名插值的值
   * @param options 其他翻译选项
   */
  nsT: (key: string | number, named?: NamedValue, options?: Any) => string;
}
