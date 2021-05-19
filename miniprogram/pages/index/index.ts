// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    formRules: [{ type: "string", required: true }],
  },

  onLoad() {},

  handleSubmit(a) {
    console.log(a);
  },
});
