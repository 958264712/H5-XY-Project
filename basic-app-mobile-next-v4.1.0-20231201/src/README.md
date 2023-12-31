# 公共模块

## 使用方式

1. 全局

```ts
import { startup } from "@common";
```

2. 局部

```ts
import { useInitHooks } from "@/hooks";
```

### 方式区别

| 全局 | 局部 |
|------|------|
| 代码不会打到子包中 | 代码打到子包中 |
| 代码仅存在一份 | 代码在不同子包中多份存在 |
| 修改（仅修改内部代码，不影响已有功能）后仅需构建公共包 | 修改后需要构建所有包 |

**推荐使用全局方式，仅对个别子包使用可以使用局部引入**
