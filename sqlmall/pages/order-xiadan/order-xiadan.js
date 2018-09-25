Page({

  data: {
    username: '李小林',
    usertel: '13044445555',
    defaulCounpon: '满300减200',   // 默认选中的优惠券
    hasCoupon: true,  // 是否有优惠券可用
    restMoneyEnough: true,
    memberPwdPanelShow: false,
    hadSetAddress: true
  },


  onLoad: function (options) {
    // 从购物车到本页面，不需要获取地址


    // 从地址列表返回，获取地址地址列表页面传过来的地址
    var addressId = options['addressId'];
    console.log(addressId)
    // 从优惠券列表页面返回，获取优惠券
    var couponId = options['couponId']
    console.log(couponId)
  },
  chooseAddress: function () {
    wx.navigateTo({
      url: '/pages/user-address/user-address?pagename=xiadan'
    })
  },
  // 选择优惠券
  chooseCoupon: function () {
    if (this.data.hasCoupon) {
      wx.navigateTo({
        url: '/pages/order-xiadan-coupon/order-xiadan-coupon'
      })
    }
  },
  // 微信支付
  wxPay: function () {
   
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
      title: '正在支付...',
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