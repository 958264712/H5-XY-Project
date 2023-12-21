# Q&A

## Insert `␍`eslint(prettier/prettier)

- 原因

    不同 OS 上的文本文件换行符不一致，同时 Windows OS 上安装 git 时，`autocrlf` 选项会默认设置为 `true`

- 解决方案

    执行如下命令

    ```sh
    git config --global core.autocrlf false
    ```

## "shallowRef" is not exported by...

```
"shallowRef" is not exported by "node_modules/.pnpm/registry.npmmirror.com+vue-demi@0.14.6_vue@3.3.7/node_modules/vue-demi/lib/index.mjs", imported by "node_modules/.pnpm/registry.npmmirror.com+@vueuse+shared@10.5.0_vue@3.3.7/node_modules/@vueuse/shared/index.mjs".
```

- 原因

    存在依赖未在 `viteExternalsPlugin` 添加。

- 解决方案

    根据报错将对应依赖添加到 `viteExternalsPlugin` 中。

## 非 madp3 环境报 `vxSDK.xxxx is not a function`

- 原因

    当前版本仅支持 madp3 环境

- 解决方案

    1. 请在 madp3 环境中测试
    2. 将 @csii/madp3 SDK 替换成其他环境的 SDK
    3. 使用环境变量进行环境判断加载对应的 SDK

## 替换组件库

- 解决方案

    1. 若当前组件库不使用，移除当前组件库依赖（可选）；
    2. 安装对应组件库依赖，**注意：必须是 vue3 组件库**；
    3. 根据组件文档在 `vite.config.ts` 中添加自动按需加载配置，**注意：若公共模块中使用了组件，需要在 `vite.common.ts` 中添加自动导入的配置，也可采用手动按需导入或者全量导入（全量导入将增加包大小）**；
    4. 修改 `scripts/template/modules` 中模板中的组件；
    5. 修改已有子包中使用的组件；
    6. 执行 `npm run dev` 命令，看是否报错，若有，根据报错信息修改。

## 修改 pxTorem 的 rootValue 值

- 解决方案

    1. 修改 `postcss.config.js` 中 `rootValue` 的值，或根据组件文档说明使用对应的 `postcss` 插件；
    2. 修改已有公共组件的尺寸值和字体大小；
    3. 修改`scripts/template/modules` 中模板中的尺寸值和字体大小；
    3. 修改子包中的组件的尺寸值和字体大小；
    4. 修改 `src/utils/px-to-rem.ts` 中的基数，
    5. 执行 `npm run dev` 命令，查看修改后的值是否符合 UI 设计。

## 组件样式中使用 `v-bind` 无法自动转 `rem`

- 解决方案

    ```vue
    <template>
        <div class="box" :style="{'--afsrf-fontSize': fontSize}"></div>
    </template>
    <script setup lang="ts">
    import { computed, ref } from "vue";
    import { utils } from "@common";
    const { px2Rem } = utils;
    const size = ref(100);
    const fontSize = computed(() => px2Rem(size.value));
    </script>
    <style lang="scss">
    .box {
        fontSize: var(--afsrf-fontSize);
    }
    </style>
    ```
