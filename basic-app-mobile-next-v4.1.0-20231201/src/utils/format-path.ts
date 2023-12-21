/**!
 * @module
 * 用于格式化静态资源路径
 */

/**
 * 格式化静态资源路径
 * @param uri 目标路径，相对于开发环境 `public/`，生产环境对应 common 包
 * @returns 处理后路径
 */
export const formatStaticURL = (uri: string) => `${import.meta.env.VITE_APP_ASSETS_URL}${uri}`;

/**
 * 格式化全局静态资源路径
 * @param uri 目标路径，相对于 `<root>/src/assets/`
 * @returns 处理后路径
 */
export const formatAssetsURL = (uri: string) => new URL(`../assets/${uri}`, import.meta.url).href;
