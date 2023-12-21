/// <reference types="vitest" />

import { fileURLToPath, URL } from "node:url";

import { loadEnv } from "vite";
import type { UserConfig, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vxMock from "@csii/vite-plugin-vx-mock";
import { VitePluginVxApiInject } from "./scripts/api-inject";
import legacy from "@vitejs/plugin-legacy";
import { viteExternalsPlugin } from "vite-plugin-externals";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// 组件自动导入
// // vant 不支持 ts 部分自动导入
// import AutoImport from "unplugin-auto-import/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import Components from "unplugin-vue-components/vite";

export default ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_APP_BASE_URL ?? "/",
    define: {
      "import.meta.vitest": JSON.stringify(mode !== "production"),
    },
    plugins: [
      vue(),
       createSvgIconsPlugin({
              iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
              symbolId: "icon-[dir]-[name]",
            }),
      //***********************************************
      // 组件自动导入
      // AutoImport({
      //   dts: "src/auto-import.d.ts",
      //   resolvers: [VantResolver()],
      // }),
      Components({
        // 禁用样式导入，样式已在公共包导入
        resolvers: [VantResolver({ importStyle: false })],
      }),
      //***********************************************
      viteExternalsPlugin(
        {
          vue: "Vue",
          vuex: "Vuex",
          "vue-router": "VueRouter",
          "@common": env.VITE_COMMON_NAME ?? "$vxbm",
        },
        {
          disableInServe: true,
        },
      ),
      vxMock({
        enabled: true,
        saved: true,
        useProd: true,
      }),
      VitePluginVxApiInject(),
      // FIX: 修复打包后无法在 chrome < 87 中运行
      legacy({
        targets: ["chrome < 60"],
        renderLegacyChunks: true,
        polyfills: ["esnext.global-this"],
        modernPolyfills: ["es.global-this"],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: env.VITE_DEV_HOST,
      port: Number(env.VITE_DEV_PORT),
      proxy: {
        [env.VITE_COMMON_BASE_API]: {
          target: env.VITE_DEV_PROXY_TARGET,
          changeOrigin: true,
          // rewrite: (path) => path.replace(new RegExp(`^${env.VITE_COMMON_BASE_API}`), env.VITE_COMMON_BASE_API),
        },
      },
    },
    build: {
      minify: true,
      cssCodeSplit: false,
    },
    test: {
      include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)", "packs/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
        "**/tests/**",
        "**/tests-examples/**",
        "**/tests-results/**",
        "**/scripts/**",
      ],
      includeSource: ["src/**/*.{js,ts}", "packs/**/*.{js,ts}"],
      server: {
        deps: {
          inline: ["@csii/vx-mobile"],
        },
      },
      deps: {
        optimizer: {
          web: {
            include: ["@csii/vx-mobile"],
          },
        },
      },
    },
  };
};
