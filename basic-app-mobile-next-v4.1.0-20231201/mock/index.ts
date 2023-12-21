export default [
  {
    url: "/demo-get.do",
    method: "get",
    response() {
      return {
        respCode: "000000",
        respMessage: "交易成功"
      }
    }
  },
  {
    url: "/demo-post.do",
    method: "post",
    response() {
      return {
        respCode: "000000",
        respMessage: "交易成功"
      }
    }
  }
]
