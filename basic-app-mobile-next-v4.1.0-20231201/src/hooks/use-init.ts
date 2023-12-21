import { useFastClickHook } from "./use-fastclick";
import { useFlexibleHook } from "./use-flexible";
import { useLoadThemeHook } from "./use-theme";
import type { App } from "vue";

/**
 * 初始化 Hook
 * @param app vue 实例
 */
export const useInitHooks = async (app: App<Element>) => {
  const theme = await useLoadThemeHook();
  useFastClickHook();
  useFlexibleHook();
  app.provide("$theme", theme);
};
