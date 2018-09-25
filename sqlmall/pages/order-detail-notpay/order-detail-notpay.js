Page({

  data: {
    payModalShow: false,          // 选择支付方式，弹出界面
    memberPwdPanelShow: false,    // 会员卡支付，弹出界面
    restMoneyEnough: true,        // 会员卡余额是否足够
  },

  onLoad: function (options) {
  
  },

  // 点击“去支付”按钮
  payOrder: function () {
    this.setData({
      payModalShow: true
    })
  },
  // 关闭支付界面
  closePayModal: function () {
    this.setData({
      payModalShow: false
    })
  },
  // 微信支付
  wxPay: function () {
    console.log(11)
  },
  // 会员卡支付
  memberPay: function () {
    if (this.data.restMoneyEnough) {
      this.setData({
        memberPwdPanelShow: true
      })
    } else {
      wx.showModal({
        title: '余额不足',
        content: '您的会员卡余额不足，您可以去充值或者使用微信支付',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#f23030',
        confirmText: '充值',
        confirmColor: '',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/user-chongzhi/user-chongzhi'
            })
          }
        }
      })
    }
  },
  // 输入会员卡密码
  confirmmemberPwd: function (e) {
    var that = this
    wx.showLoading({
      title: '请稍等...',
      mask: true,
      success: function (res) {
        // 发送请求，验证密码 ...

        setTimeout(function () {

          wx.hideLoading()


          var inputPwd = e.detail.value.userpwd
          var userPwd = '123456'
          // 密码正确
          if (inputPwd === userPwd) {
            wx.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 900,
              mask: true
            })
            that.setData({
              memberPwdPanelShow: false
            })
            wx.navigateTo({
              url: '/pages/order-xiadan-success/order-xiadan-success'
            })
          } else {
            wx.showToast({
              title: '密码错误',
              icon: 'none',
              duration: 900,
              mask: true
            })
          }
        }, 2000)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 关闭会员卡密码界面
  closeMemberPwdPanel: function () {
    this.setData({
      memberPwdPanelShow: false
    })
  }
 
})