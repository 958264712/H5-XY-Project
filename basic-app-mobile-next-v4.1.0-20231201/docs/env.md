# 环境变量说明

## 规则

1. 定义环境变量必须在 `env.d.ts` 中添加对应的描述；
2. 定义环境变量必须使用 `VITE_` 前缀；
3. 定义公共包使用的环境变量必须以 `VITE_COMMON_` 作为前缀；
4. 定义开发环境使用的环境变量必须以 `VITE_DEV_` 作为前缀；
5. 定义子包或全局使用的环境变量必须以 `VITE_APP_` 作为前缀。

## 当前环境变量描述

### VITE_DEV_HOST

开发环境监听的 IP 地址

### VITE_DEV_PORT

开发环境监听的端口

### VITE_DEV_PROXY_TARGET

开发环境代理的目标地址

### VITE_APP_TITLE

子包 HTML 标题

### VITE_APP_BASE_URL

子包公共基础路径

### VITE_COMMON_BASE_API

网络请求前缀，**请注意：修改该项需要重新公共包**

<!-- ### VITE_COMMON_ENCRYPT

上送数据加密标识，**请注意：修改该项需要重新公共包** -->

### VITE_COMMON_LOADING

全局 loadding 启用标识，**请注意：修改该项需要重新打包所有模块（公共包、所有子包）**

*子包可以不用重新打包*

### VITE_COMMON_PLATFORM

目标平台，**请注意：修改该项需要重新公共包，若子包中使用了局部导入的方式，则需要重新编译该子包**

### VITE_APP_ASSETS_URL

静态资源相对路径，**请注意：修改该项需要重新打包所有模块（公共包、所有子包）**

### VITE_COMMON_NAME

公共部分导出名，**请注意：修改该项需要重新打包所有模块（公共包、所有子包）**
