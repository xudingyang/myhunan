
Page({

  data: {
    isRegister: true,
    loadComplete: false,
    topicArray: [1,2,3]
  },

  onLoad: function (options) {
  
  }, 
  // 查看热销商品
  goHotGoods: function() {
    wx.navigateTo({
      url: '/pages/home-hot-goods/home-hot-goods'
    })
  },
  // 查看推荐商品
  goRecommendPage: function() {
    wx.navigateTo({
      url: '/pages/home-recommend-goods/home-recommend-goods'
    })
  },
  // 查看活动中心
  goActivityCenter: function () {
    wx.navigateTo({
      url: '/pages/activity-center/activity-center'
    })
  },
  // 去优惠券页面
  goCouponPage: function () {
    if (this.data.isRegister) {
      wx.navigateTo({
        url: '/pages/coupon/coupon'
      })
    } else {
      this.goRegisterPage()
    }
  },
  // 去订单中心
  goOrderCenter: function () {
    if (this.data.isRegister) {
      wx.navigateTo({
        url: '/pages/order-center/order-center'
      })
    } else {
      this.goRegisterPage()
    }
  },
  // 去个人中心
  goUserCenter: function () {
    wx.switchTab({
      url: '/pages/user/user'
    })
  },
  // 去注册
  goRegisterPage: function () {
    wx.navigateTo({
      url: '/pages/user-register/user-register'
    })
  },
  onPullDownRefresh: function () {
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 200)
  },
  goSearchPage: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  // 点击商品
  goGoodsDetail: function () {
    wx.navigateTo({
      url: '/pages/goods-detail/goods-detail'
    })
  },
  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    var tmp = this.data.topicArray.slice()
    tmp.push([1,2,3])
    this.setData({
      topicArray: tmp
    })
  },
})