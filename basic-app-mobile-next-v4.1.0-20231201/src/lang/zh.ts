export default {
  // HTTP 状态码使用
  httpStatusCode: {
    505: "HTTP版本不受支持",
    504: "网关超时",
    502: "网关错误",
    501: "服务未实现",
    500: "服务器内部错误",
    404: "资源不存在",
    403: "请求被禁止",
    401: "请求未认证",
    400: "糟糕的请求",
  },
  // 客户端请求状态使用
  clientStatusCode: {
    timeout: "请求超时",
    aborted: "请求被取消！",
    network: "网络连接错误！",
    unknown: "未定义错误!!!",
  },
  handleError: {
    title: "温馨提示",
    cancel: "取消",
    addAccount: "去加挂",
    certification: "去实名",
  },
};
