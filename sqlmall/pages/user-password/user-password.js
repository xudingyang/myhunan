
Page({

  data: {
    telphone: '13244445555'
  },

  onLoad: function (options) {

  },
  changePwd: function () {
    wx.navigateTo({
      url: '/pages/user-password-set/user-password-set'
    })
  }
})