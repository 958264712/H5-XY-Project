# basic-app-mobile

基于 Vue3.x + pinia + Vue-Router + @csii/vx-mobile4.x 开发移动端原型。

## 开发前置条件

1. 熟悉[前端开发规范](http://vx.csii.com.cn/norm/vx-dev-specification/#/)
2. 熟悉 [TypeScript](https://www.typescriptlang.org/)开发 【强制】
3. 熟悉 [Vue3.x](https://v3.cn.vuejs.org/) 【强制】
4. 了解 [pinia](https://pinia.vuejs.org/) 【必选】
5. 了解 [vue-router](https://router.vuejs.org/) 【必选】
6. 了解 [vite](https://vitejs.dev/) 【可选】
7. 了解 [Vitest](https://vitest.dev/) 【可选】

**确保已经完全满足前置条件后再进行开发。**

## 推荐 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (禁用 Vetur) + [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [EditorConfig for VS Code
](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) + [Vitest](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)。

## 为 TS 导入 `.vue` 提供类型支持

TypeScript 默认不支持 `.vue` 文件的类型导入信息，因此我们将 `tsc` CLI 替换为 `vue-tsc` 以提供类型检查。在编辑器中，[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 插件来让 TypeScript 语言服务知道 `.vue` 类型。

如果您觉得独立的 TypeScript 插件不够快，Volar 还提供性能更高的[接管模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)。可以通过如下步骤启用它：

1. 禁用内建的 TypeScript 扩展

   1. 从 VSCode 的命令面板中执行 `扩展：显示内置的扩展`
   2. 找到 `JavaScript 和 TypeScript 的语言功能` 扩展，右键选择 `禁用[工作区]`

2. 重启 VSCode

## 自定义配置

见 [mpm 配置参考](https://vx.csii.com.cn/tool/mpm/#/chapters/config/README)。
见 [Vite 配置参考](https://vitejs.dev/config/)。

## 项目设置

```bash
npm i
```

### 开发环境编译和热更新

```bash
npm run dev
```

### 生产环境类型检查、编译和代码压缩

```bash
npm run build
```

### 使用 [ESLint](https://eslint.org/) 进行代码风格检查

```bash
npm run lint
```

### git commit

```sh
npm run cz
```

## 开发指南

<!-- - [目录结构](./docs/project.md)
- [兼容性](./docs/compatibility.md)
- [uni-api](./docs/uni-api.md)
- [开发计划](./docs/todo.md) -->
- [目录结构](./docs/project-structure.md)
- [兼容性](./docs/compatibility.md)
- [命令说明](./docs/command.md)
- [环境变量说明](./docs/env.md)
- [魔法方法](./docs/function.md)
- [Q&A](./docs/q-a.md)
