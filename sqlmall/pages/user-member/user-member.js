const app = getApp();

Page({

  data: {
    hadSetPassword: false,
    userInfo: {},
    telNum: '13333333333',
    levelPic: '/images/icon/level_diamond.png',
    levelName: '钻石会员'
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  onPullDownRefresh: function () {
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 200)
  },
  // 充值
  chognzhi: function () {
    if (this.data.hadSetPassword) {
      wx.navigateTo({
        url: '/pages/user-chongzhi/user-chongzhi',
      })
    } else {
      wx.navigateTo({
        url: '/pages/user-password-set/user-password-set'
      })
    }
  },
  // 充值记录
  chognzhiRecord: function () {
    wx.navigateTo({
      url: '/pages/user-chongzhi-record/user-chongzhi-record'
    })
  },
  // 积分及会员规则
  checkMemberRule: function () {
    wx.navigateTo({
      url: '/pages/user-member-rule/user-member-rule'
    })
  },
  // 积分记录
  jfienRecord: function () {
    wx.navigateTo({
      url: '/pages/user-jifen-record/user-jifen-record'
    })
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