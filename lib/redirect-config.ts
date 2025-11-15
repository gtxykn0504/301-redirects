export const redirectRules = {
  "my.spircape.com": {
    type: "full",
    target: "https://myapps.microsoft.com/?whr=spircape.com",
  },
  "box.ofhe.cn": {
    type: "full",
    target: "https://box.zhhi.cn",
  },
  "go.ofhe.cn": {
    type: "path",
    routes: {
      "/410photo": "https://box.ofhe.cn/s/dGHb",
      "/159-20250930": "https://box.ofhe.cn/s/yvib",
    },
  },
}
