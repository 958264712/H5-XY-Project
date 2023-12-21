export default {
  // HTTP 状态码使用
  httpStatusCode: {
    505: "The HTTP version is not supported",
    504: "The gateway timed out",
    502: "Gateway error",
    501: "The service is not implemented",
    500: "Server internal error",
    404: "The resource does not exist",
    403: "The request is prohibited",
    401: "The request is not authenticated",
    400: "Bad request",
  },
  // 客户端请求状态使用
  clientStatusCode: {
    timeout: "The request timed out",
    aborted: "The request was canceled!",
    network: "Network connection error!",
    unknown: "The error is not defined!!!",
  },
  handleError: {
    title: "Tips",
    cancel: "Cancel",
    addAccount: "Add Account",
    certification: "Authentication",
  },
};
