/// <reference types="vite/client" />
/// <reference types="@csii/vite-plugin-vx-mock" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Any = any;

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, Any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_DEV_HOST: string;
  readonly VITE_DEV_PORT: string;
  readonly VITE_DEV_PROXY_TARGET: string;

  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_ASSETS_URL: string;
  // 公共部分变量
  readonly VITE_COMMON_BASE_API: string;
  // readonly VITE_COMMON_ENCRYPT: string;
  readonly VITE_COMMON_LOADING: string;
  // readonly VITE_COMMON_PLATFORM: string;
  readonly VITE_COMMON_NAME: string;
}
