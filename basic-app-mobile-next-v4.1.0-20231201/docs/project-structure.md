# 项目结构

## 目录说明

### docs

文档目录，包含项目中与代码无关的说明文档

### mock

接口 mock 目录

### packs

子包目录，可通过 `mpm.config.ts` 进行配置修改

### public

静态资源目录

### scripts

构建脚本、**mpm** 使用的模板文件目录

### src

公共模块目录

### tests

E2E 测试用例目录

### tests-examples

E2E 测试示例目录

## 目录树

*因项目开发更新问题，该目录树仅供参考，请以实际项目目录结构为准*

```sh
<root>
├── .husky  # husky 配置目录
├── dist    # 构建产物输出目录
├── docs    # 文档
├── mock    # 接口 mock 数据
│   ├── .mock-entry.ts  # 由 @csii/vite-plugin-vx-mock 自动生成
│   └── ..  # 其他 mock 数据文件
├── node_modules    # 依赖
├── packs   # 子包源码目录
├── playwright-report   # playwright 自动生成目录
├── public  # 静态资源目录 会打包到公共包中
├── scripts
│   ├── template    # 模板目录
│   └── api-inject.ts   # API 注入 vite 插件
├── src     # 公共包源码目录
│   ├── assets  # 公共资源
│   ├── components  # 公共组件
│   ├── configs     # 公共配置
│   ├── formats     # 公共数据格式化(原过滤器)
│   ├── hooks       # 公共 Hook
│   ├── lang        # 国际化
│   ├── startup     # 启动项
│   └── utils       # 公共工具方法
├── test-results    # playwright 测试结果
├── tests   # playwright 测试用例
├── tests-examples  # playwright 测试用例示例
├── .commitlintrc.cjs   # commitlint 配置文件
├── .editorconfig   # 编辑器配置
├── .env    # vite 环境变量
├── .env.development    # vite 开发环境环境变量
├── .env.production     # vite 生产环境环境变量
├── .eslintignore   # eslint 忽略配置文件
├── .eslintrc.cjs   # eslint 配置文件
├── .gitignore      # git 忽略配置文件
├── .npmrc      # npm 配置文件
├── .prettierrc # prettier 配置文件
├── components.d.ts # 组件自动导入类型描述文件
├── env.d.ts    # 项目类型描述文件
├── mpm.config.ts   # mpm 配置文件
├── package.json    # 包管理配置文件
├── playwright.config.ts    # playwright 配置文件
├── postcss.config.js   # postcss 配置文件
├── README.md
├── tsconfig.app.json       # typescript 配置文件
├── tsconfig.json           # typescript 配置文件
├── tsconfig.node.json      # typescript 配置文件
├── tsconfig.vitest.json    # typescript 配置文件
├── vite.config.common.ts   # 公共模块 vite 配置文件
└── vite.config.ts  # 子包 vite 配置文件
```
