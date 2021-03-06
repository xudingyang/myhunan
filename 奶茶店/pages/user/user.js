const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    hadBindPhone: false,
  },
  checkCoupon: function () {
    wx.navigateTo({
      url: '/pages/coupon/coupon'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 点击  历史订单
  checkOrderList: function () {
    wx.navigateTo({
      url: '/pages/order/order'
    })
  },
  // 点击收货地址
  checkAddress: function () {
    wx.navigateTo({
      url: '/pages/user-address/user-address?pagename=user'
    })
  },
  // 点击  绑定手机
  bindPhone: function () {
    wx.navigateTo({
      url: '/pages/user-register/user-register'
    })
  },
  // 点击  我的信息
  checkUserInfo: function () {
    wx.navigateTo({
      url: '/pages/user-member/user-member'
    })
  },
  // 点击   余额
  checkRestMoney: function () {
    wx.navigateTo({
      url: '/pages/user-chongzhi/user-chongzhi'
    })
  },
  // 点击   积分
  checkJifen: function () {
    wx.navigateTo({
      url: '/pages/user-jifen-record/user-jifen-record'
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
