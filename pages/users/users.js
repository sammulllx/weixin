
Page({
  data: {
    dataBar: [
      {
        imageUrl: "../images/history.png",
        text: "我的足迹",
        url: "../entrance/entrance"
      },
      {
        imageUrl: "../images/focus.png",
        text: "我的关注",
        url: "../entrance/entrance"
      },
      {
        imageUrl: "../images/help.png",
        text: "帮助",
        url: "../entrance/entrance"
      },
      {
        imageUrl: "../images/feedback.png",
        text: "反馈",
        url: "../entrance/entrance"
      }
    ]
  },
  f2: function() {
    var app = getApp();
    wx.login({
      success: function (res) {
        var code = res.code
        console.log(res.code)
        wx.request({
          method: 'post',
          url: 'http://10.8.0.2:8955/wxLogin?code=' + code,
          success: function (res) {
            console.log("成功了")
            console.log(res)
          },
          fail: function (res) {
            console.log("失败了"+res)
          }
        })
      }
    })
  }
})