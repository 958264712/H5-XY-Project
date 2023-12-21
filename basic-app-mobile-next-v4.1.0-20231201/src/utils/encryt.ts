/**
 * 需要安装 @csii/smcrypto
 */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
/*
//国密加密方法
import { packageEncrypt, packageDecrypt } from "./csii.encrypt";

const Key = "0427F17AD41208C5641B2FD0156E87D6AC87C2F7A19020E1BAD6691981DD3BFE0E4E87CADFAB5E231EDB203A26F5E67C36068FE82BF2B2F82997AD93C679763F01";

export const encrytSM = (option: AxiosRequestConfig) => {
  const originData = option.data || {};
  const encryptData = packageEncrypt(JSON.stringify(originData), Key);
  option.data = encryptData;
};

export const decreptSM = (resoponse: AxiosResponse<Any, Any>) => {
  return typeof resoponse.data === "string" && resoponse.config.responseType !== "blob"
    // ? JSON.parse(packageDecrypt(resoponse.data, Key) as string) // TODO 参数 Key 没有意义
    ? JSON.parse(packageDecrypt(resoponse.data) as string)
    : resoponse.data;
};*/
export function encrytSM(option: AxiosRequestConfig) {
  // eslint-disable-next-line no-console
  console.warn("未加密处理,请自行处理");
  return option;
}
export function decreptSM(resoponse: AxiosResponse<Any, Any>) {
  // eslint-disable-next-line no-console
  console.warn("未加密处理,请自行处理");
  return resoponse;
}

export default {
  encrytSM,
  decreptSM,
};
