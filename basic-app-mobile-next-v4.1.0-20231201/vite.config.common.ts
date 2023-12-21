import { ConfigEnv, UserConfig, loadEnv } from "vite";

import vue from "@vitejs/plugin-vue";
import { VitePluginVxApiInject } from "./scripts/api-inject";
import { fileURLToPath } from "node:url";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

// 组件自动导入
// import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

const builtDate = (() => {
  const now = new Date();
  return `${now.getFullYear().toString().padStart(4, "0")}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now
    .getDate()
    .toString()
    .padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
})();

/**
 * banner
 */
const banner = `/*
 * vxbm
 * VX4.x 移动端公共模块
 * Built At: ${builtDate}
 * @preserve
 */
`;

process.env.NODE_ENV = "production";

export default ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      "import.meta.vitest": JSON.stringify(mode !== "production"),
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    plugins: [
      vue(),
      //***********************************************
      // 组件自动导入
      // AutoImport({
      //   dts: "src/auto-import.d.ts",
      //   resolvers: [VantResolver()],
      // }),
      Components({
        resolvers: [VantResolver({ importStyle: false })],
      }),
      //***********************************************
      VitePluginVxApiInject(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      dedupe: ["vue"],
      preserveSymlinks: false,
    },
    base: "./",
    build: {
      lib: {
        entry: "src/main.ts",
        name: env.VITE_COMMON_NAME ?? "$vxbm",
        fileName: "vxbm",
        formats: ["umd"],
      },
      minify: true,
      outDir: "dist/common",
      assetsDir: ".",
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          entryFileNames: "vxbm.[format].js",
          assetFileNames(info) {
            if (info.name === "style.css") {
              return "vxbm.css";
            }
            return "[name]-[hash].[ext]";
          },
          // FIX: 修复打包后无法在 chrome < 87 中运行
          plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"], allowAllFormats: true })],
          globals: {
            vue: "Vue",
            "vue-router": "VueRouter",
            fastclick: "FastClick",
            axios: "axios",
            "vue-i18n": "VueI18n",
            vuex: "Vuex",
          },
          banner,
        },
        external: ["vue", "vue-router", "fastclick", "axios", "vue-i18n", "pinia"],
      },
    },
    test: {
      include: ["/src/**/*.{test,spec}.?(c|m)[jt]s?(x)", "/packs/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    },
  };
};
