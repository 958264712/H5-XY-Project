import vxsdk from "@csii/madp3";
import { error } from "../utils/logger";

export interface IThemeServiceOption {
  theme?: string;
}

export interface IThemeService {
  fetchTheme(): string;
  saveTheme(theme: string): void;
  applyTheme(): void;
}

class ThemeService implements IThemeService {
  private theme: string;

  constructor(options: IThemeServiceOption) {
    this.theme = options.theme || "vx-default";
  }
  fetchTheme() {
    return this.theme;
  }
  saveTheme(theme: string) {
    vxsdk?.sessionSetAsync?.("theme", theme)?.then(() => {
      this.theme = theme;
    });
  }
  applyTheme() {
    setTheme(this.theme);
  }
}
const setTheme = (name: string) => {
  const root = document.querySelector("html");
  if (root) {
    root.className = name;
  }
};

/**
 * 主题切换 hook
 * 通过原生切换主题时只需要原生在安全持久存储中设置 theme 字段的值即可，
 * 通过 h5 切换主题时，需要如下操作
 * ```vue
 * <script setup lang="ts">
 * import { inject } from "vue";
 * import type { IThemeService } from "@/hooks/use-theme";
 * const $theme = inject<IThemeService>("$theme");
 *
 * const toggleHandle = (theme) => {
 *  $theme?.saveTheme(theme); // 保存当前主题
 *  $theme?.applyTheme(); // 应用当前主题
 * }
 * </script>
 * ```
 * @returns
 */
export const useLoadThemeHook = async () => {
  const theme = await vxsdk?.sessionGetAsync?.("theme");
  // const themeTemp = theme ? theme.replace("./imgs/", "") : "default";
  const themeService = new ThemeService({ theme });
  try {
    themeService.applyTheme();
  } catch (e) {
    error("load theme error:", e);
  }
  return themeService;
};
