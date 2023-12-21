import type { Plugin } from "vite";

export function VitePluginVxApiInject(): Plugin {
  // let platform = "web";
  let isProd = false;
  return {
    name: "vite-plugin-vx-api-inject",
    configResolved(config) {
      // platform = config.env.VITE_COMMON_PLATFORM;
      isProd = config.env.isProd;
    },
    resolveId(id) {
      // if ("@platform" === id) return "\0@platform";
      if ("@common" === id && !isProd) return "\0@common";
    },
    load(id) {
      // if (id === "\0@platform") return `\nexport * from "@/platform/${platform}";\n`;
      if (id === "\0@common" && !isProd) return '\nexport * from "@/index";';
    },
  };
}
