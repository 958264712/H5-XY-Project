import type { AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig } from "axios";
// import { accessJnlNo } from "../access-jnl-no";
// import { queryVariable } from "../query-variable";
// import { Session } from "../storage";
// import { encrytSM, decreptSM, info, warn } from "..";
import { info, warn } from "..";
import { BusinessError } from "./errors";
// import { showFailToast } from "vant";

export interface IExtendArgs {
  _channelId: string;
  _terminalType: string;
  _accessJnlNo?: unknown;
  _bankId?: unknown;
}

export const InterceptorRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const extendArgs: IExtendArgs = {
    // 公共参数
    _channelId: "PIBS", // 渠道编号
    _terminalType: "PC", // 渠道类型
    // 交易流水号
    // _accessJnlNo: accessJnlNo,
    _bankId: undefined,
  };

  if (config.method === "get") {
    config.params = Object.assign({}, config.params || {}, extendArgs);
  } else if ((config.headers as AxiosRequestHeaders)["Content-Type"] === "multipart/form-data") {
    config.data = config.data || new FormData();
    // config.data = config.data || new FormData();
    // config.data.append("_channelId", "PIBS");
    // config.data.append("_terminalType", "PC");
    // config.data.append("_accessJnlNo", accessJnlNo);
    // config.data.append("_bankId", queryVariable("_bankId"));
  } else {
    config.data = Object.assign({}, config.data || {}, extendArgs);
  }
  // scene类型接口，请求头单独处理
  // if (config.url?.endsWith(".scene") && Session.get("_scenecode")) {
  //   (config.headers as AxiosRequestHeaders)._scenecode = Session.get("_scenecode");
  // }
  // 启用演示版还是真实接口
  config.baseURL = import.meta.env.VITE_COMMON_BASE_API;

  // if (
  //   import.meta.env.VITE_COMMON_ENCRYPT === "true" &&
  //   config.method === "post" &&
  //   (config.headers as AxiosRequestHeaders)["Content-Type"] !== "multipart/form-data" &&
  //   (config as InternalAxiosRequestConfig & { encryptable: boolean }).encryptable
  // ) {
  //   info(config.url, config.data, "上送参数");
  //   return encrytSM(config) as unknown as InternalAxiosRequestConfig;
  // } else {
  //   info(config.url, config.data, "上送参数");
  //   return config;
  // }
  info(config.url, config.data, "上送参数");
  return config;
};

export const InterceptorResponse = (response: AxiosResponse): AxiosResponse => {
  // let respData: Any = response.data;
  // if (import.meta.env.VITE_COMMON_ENCRYPT === "true" && (response.config as InternalAxiosRequestConfig & { encryptable: boolean }).encryptable) {
  //   respData = decreptSM(response);
  // }
  const respData: Any = response.data;
  // TODO 该功能需要启用 mock 插件
  // 并开启保存 mock 数据，同时将 `customSaved` 设置为 `true`
  // 详见 https://npm.csii.com.cn/package/@csii/vite-plugin-vx-mock
  // 当在开发环境时启用后台响应数据保存功能
  // if (import.meta.hot) {
  //   window.$$mockSave &&
  //     response.config.url &&
  //     window.$$mockSave({
  //       url: response.config.url,
  //       method: response.config.method,
  //       respData,
  //       isMock: response.headers["vite-mock-service"] === "true",
  //     });
  // }
  info("响应数据", response.config.url, respData);
  if (!respData.respCode) {
    warn("丢失错误码...", response.config.url);
  }
  // 接口需要在页面接收状态码处理 (密码错误,帐号错误,帐号不存在)
  // console.log("respDataApis => handleError", response.config);
  if ((response.config as Any)?.handleError) {
    return response as AxiosResponse;
  }
  // 和后端约定的成功业务逻辑的状态码 或者 文件流直接返回
  if (respData.respCode === "000000" || response.config.responseType === "blob") {
    // if (response.headers._scenecode) {
    //   Session.set(response.headers._scenecode, "_scenecode");
    // }
    return response;
  } else {
    // 业务逻辑错误
    // showFailToast(respData.respMessage);
    throw new BusinessError(respData.respCode, respData.respMessage);
  }
};
