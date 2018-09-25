const app = getApp();

Page({

  data: {
    isRegister: true,
    hadSetPassword: true,
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
  // 查看待付款订单
  lookNotPayOrder: function(){
    wx.navigateTo({
      url: '/pages/order-center/order-center?state=notpay'
    })
  },
  //查看待收货订单
  loockSendingOrder: function () {
    wx.navigateTo({
      url: '/pages/order-center/order-center?state=sending'
    })
  },
  // 查看待发货订单
  lookWillSendOrder: function(){
    wx.navigateTo({
      url: '/pages/order-center/order-center?state=willsend'
    })
  },
  // 查看售后订单
  loockChangeOrder: function (){
    wx.navigateTo({
      url: '/pages/order-shou-hou/order-shou-hou'
    })
  },
  // 查看全部订单
  lookAllOrder: function () {
    wx.navigateTo({
      url: '/pages/order-center/order-center?state=all'
    })
  },

  // 查看优惠券
  checkMyCounpon: function () {
    if (this.data.isRegister) {
      wx.navigateTo({
        url: '/pages/coupon/coupon',
      })
    } else {
      this.goToRegisterPage();
    }
  },
  // 查看收藏商品
  checkMyCollection: function () {
    if (this.data.isRegister) {
      wx.navigateTo({
        url: '/pages/user-collection/user-collection'
      })
    } else {
      this.goToRegisterPage();
    }
  },
  // 查看会员信息
  checkMemberInfo: function () {
    if (this.data.isRegister) {
      wx.navigateTo({
        url: '/pages/user-member/user-member'
      })
    } else {
      this.goToRegisterPage();
    }
  },
  // 查看收货地址
  checkAddress: function () {
    if (this.data.isRegister) {
      wx.navigateTo({
        url: '/pages/user-address/user-address?pagename=user'
      })
    } else {
      this.goToRegisterPage();
    }
  },
  // 绑定手机
  bindTelphone: function () {
    wx.navigateTo({
      url: '/pages/user-register/user-register',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 修改手机
  changeTelphone: function () {
    wx.navigateTo({
      url: '/pages/user-telphone-change/user-telphone-change'
    })
  },
  // 密码管理
  managePassword: function () {
    if (this.data.isRegister) {
      if (this.data.hadSetPassword) {
        wx.navigateTo({
          url: '/pages/user-password/user-password'
        })
      } else {
        wx.navigateTo({
          url: '/pages/user-password-set/user-password-set'
        })
      }
    } else {
      this.goToRegisterPage();
    }
  },
  // 联系我们
  contactUs: function () {
    wx.navigateTo({
      url: '/pages/user-contact-us/contact-us',
    })
  },
  // 技术支持
  techSupport: function () {
    wx.navigateTo({
      url: '/pages/user-tech-support/tech-support',
    })
  },
  // ###########  杂项方法   #############
  goToRegisterPage: function () {
    wx.showModal({
      title: '温馨提示',
      content: '该操作需要绑定手机，确定绑定手机吗？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#f23030',
      confirmText: '确定',
      confirmColor: '',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/user-register/user-register',
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
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