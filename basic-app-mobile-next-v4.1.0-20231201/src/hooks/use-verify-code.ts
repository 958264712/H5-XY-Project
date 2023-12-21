import { ref, computed } from "vue";

type Handler = (() => void) | (() => Promise<void>);
/**
 * 验证码
 * @param handler 数据获取函数
 * @param options
 * @param options.time 倒计时读秒初始值 默认 `60`
 * @returns
 * - content 验证码按钮内容
 * - actived 是否激活倒计时（用于禁用验证码按钮）
 * - start 启动倒计时
 * - stop 停止倒计时
 * - reset 重置倒计时状态
 *
 * @example
 * ## 子模块导入
 *
 * ```ts
 * import { hooks } from "@common";
 * const { useVerifyCodeHook } = hooks;
 * ```
 *
 * ## 示例
 *
 * ```vue
 * <template>
 *   <p class="vx-verify-code" :class="{ 'is-disabled': actived }" v-on:click="start">{{ content }}</p>
 * </template>
 * <script setup lang="ts">
 * const verifyCodeHandler = async () => {
 *   // 获取验证码
 *   const { index } = await new Promise((resolve) => {
 *     resolve({
 *       index: "000000",
 *     });
 *   });
 * };
 * const { start, actived, content, stop, reset } = useVerifyCodeHook(verifyCodeHandler);
 * </script>
 * <script lang="ts">
 * import { hooks } from "@common";
 * const { useVerifyCodeHook } = hooks;
 * </script>
 * <style lang="scss">
 * .vx-verify-code {
 *  font-size: var(--ui-font-body-large);
 *  border: none;
 *  color: var(--ui-color-primary);
 *  text-align: right;
 *  &.is-disabled {
 *   color: var(--ui-color-text-placeholder);
 *  }
 * }
 * </style>
 * ```
 */
export const useVerifyCodeHook = (handler: Handler, options?: Partial<VerifyCodeOption>) => {
  const initText = options?.initText ?? "获取验证码";
  const activeText = options?.activeText ?? "{s}秒后重新获取";
  const endText = options?.endText ?? initText;
  const time = options?.time ?? 60;
  const t = ref(time);

  const actived = ref(false);
  const inited = ref(false);
  const content = computed(() => (inited.value ? (actived.value ? activeText.replace(/\{s\}/, `${t.value}`) : endText) : initText));

  const start = async () => {
    inited.value = true;
    if (actived.value) return;
    actived.value = true;

    if (typeof handler === "function") {
      await handler();
    }
    countDown();
  };

  let timer: NodeJS.Timeout;
  const countDown = () => {
    if (timer) {
      clearTimeout(timer);
    }

    if (t.value === 0) {
      t.value = time;
      actived.value = false;
      return;
    }

    timer = setTimeout(() => {
      t.value--;
      countDown();
    }, 1000);
  };

  const stop = () => {
    if (timer) {
      clearTimeout(timer);
    }
    actived.value = false;
  };

  const reset = () => {
    if (timer) {
      clearTimeout(timer);
    }
    actived.value = false;
    inited.value = false;
    t.value = time;
  };

  return {
    start,
    stop,
    reset,
    actived,
    content,
  };
};

export interface VerifyCodeOption {
  time: number;
  initText: string;
  activeText: string;
  endText: string;
}
