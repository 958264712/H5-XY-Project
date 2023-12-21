# 魔法方法

**该部分提到的方法、函数，没有特别说明，均需要手动按需导入**

## 静态资源路径格式化

| 方法 | 说明 | 类型 | 参数说明 | 导入 |
|-----|-----|-----|-----|------|
| `formatStaticURL` | 格式化静态资源路径 | `(uri: string)=>string` | uri 目标路径，相对于开发环境 `public/`，生产环境对应 common 包 | `import {formatStaticURL} from "@/utils/fortmat-paths"` |
| `formatAssetsURL` | 格式化全局静态资源路径 | `(uri: string)=>string` | 目标路径，相对于 `<root>/src/assets/` | `import {formatAssetsURL} from "@/utils/fortmat-paths"` |
| `formatURL` | 格式化当前模块静态资源路径 | `(uri: string)=>string` | uri 目标路径，相对于 `<moduleRoot>/<moduleName>/assets` | `import {formatURL} from "./utils"` |
