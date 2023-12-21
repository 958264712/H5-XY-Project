/**
 * 格式化当前模块静态资源路径
 * @param uri 目标路径，相对于 `<moduleRoot>/<moduleName>/assets`
 * @returns 
 */
export const formatURL = (uri: string) => new URL(`../assets/${uri}`, import.meta.url).href;
