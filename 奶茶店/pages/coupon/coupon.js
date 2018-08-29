Page({

  data: {
    stateDaishiyong: true,    // 待使用 tab
    stateYishiyong: false,    // 已使用 tab
    stateGuoqi: false,         // 已过期 tab
    hasDaishiyong: true,     // 是否有待使用
    hasYishiyong: true,      // 是否有已使用
    hasGuoqi: true           // 是否有已过期
  },


  onLoad: function (options) {
  
  },

  // ####################  事件方法  ##################3
  // 点击待使用
  clickDaishiyong: function () {
    this.setData({
      stateDaishiyong: true,  
      stateYishiyong: false,  
      stateGuoqi: false   
    })
  },
  // 点击已使用
  clickYishiyong: function () {
    this.setData({
      stateDaishiyong: false,
      stateYishiyong: true,
      stateGuoqi: false
    })
  },
  // 点击已过期
  clickYiguoqi: function () {
    this.setData({
      stateDaishiyong: false,
      stateYishiyong: false,
      stateGuoqi: true
    })
  },
  // 点击优惠券
  lookCouponInfo: function () {
    wx.navigateTo({
      url: '/pages/coupon-detail/coupon-detail',
    })
  },
  // 点击领取更多优惠券
  getMoreCoupon: function () {
    console.log(111)
    wx.navigateTo({
      url: '/pages/coupon-get/coupon-get',
    })
  },
  // 点击去使用
  toUseCoupon: function () {
    wx.switchTab({
      url: '/pages/diandan/diandan'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})