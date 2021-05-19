"use strict";
var app = getApp();
Page({
    data: {
        rules: {
            name: [{ type: "string", required: true, message: '姓名必填' }],
            age: [{ type: "number", message: '兴趣是数字类型' }]
        },
    },
    onLoad: function () {
    },
    handleSubmit: function (e) {
        console.log(e.detail);
    }
});