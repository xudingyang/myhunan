Page({

  data: {
    // 是否支持外卖
    supportWaimai: true,
    // 订单类型 wm      zq
    orderType: 'wm',
    hadSelectedAddress: true
  },
  // 点击 门店自取
  chooseMenDianZiQu: function(){
    this.setData({
      orderType: 'zq'
    })
  },
  // 点击 外卖配送
  chooseWaiMai: function(){
    this.setData({
      orderType: 'wm'
    })
  },
  // 点击地址
  selecteAddress: function(){
    wx.navigateTo({
      url: '/pages/user-address/user-address'
    })
  },
  // 填写备注
  writeRemarks: function(){
    wx.navigateTo({
      url: '/pages/fill-in-remarks/fill-in-remarks'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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