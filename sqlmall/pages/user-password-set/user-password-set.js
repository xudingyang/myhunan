
Page({

  data: {
    sending: false,
    restTime: 60,
    telphoneNumber: ''
  },

  onLoad: function (options) {

  },
  // 发送验证码
  sendVerificationCode: function () {
    if (this.data.telphoneNumber.length !== 11) {
      wx.showToast({
        title: '手机号填写错误',
        icon: 'none',
        duration: 800,
        mask: true
      })
    } else {
      var timer, that = this, rest = this.data.restTime;
      if (!this.data.sending) { // 未发送状态
        this.setData({
          sending: true
        })
        timer = setInterval(function () {
          that.setData({
            restTime: rest
          })
          if (rest < 1) {
            clearInterval(timer);
            that.setData({
              sending: false,
              restTime: 60
            })
          }
          rest--;
        }, 1000)
      }
    }
  },
  // 提交验证按钮
  submitTelphone: function (e) {
    var val = e.detail.value;
    var tel = val.telphone;   // 手机号
    var verification = val.verificationcode;   // 验证码
    if (tel.length !== 11) {
      wx.showToast({
        title: '手机号填写错误',
        icon: 'none',
        duration: 800,
        mask: true
      })
    } else if (verification.length !== 6) {
      wx.showToast({
        title: '验证码为6位',
        icon: 'none',
        duration: 800,
        mask: true
      })
    } else {
      // 提交手机号和验证码
      // ...
      wx.showToast({
        title: '验证成功',
        icon: 'success',
        duration: 800,
        mask: true,
        success: function (res) {
          setTimeout(function () {
            wx.navigateTo({
              url: '/pages/user-pwd-set-next/user-pwd-set-next'
            })
          }, 800)
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  // 监听手机号输入
  listenTelphoneInput: function (e) {
    var tel = e.detail.value;
    this.setData({
      telphoneNumber: tel
    })
  }
})