
Page({

  data: {
    sending: false,
    restTime: 60,
    telphoneNumber: ''
  },

  onLoad: function (options) {

  },

  // 提交按钮
  submitTelphone: function (e) {
    var pwd1 = e.detail.value.pwd1;
    var pwd2 = e.detail.value.pwd2;
    if (pwd1.length < 6) {
      wx.showToast({
        title: '密码不能少于6位',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    } else if (pwd1 !== pwd2) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    } else {
      wx.showToast({
        title: '密码设置成功',
        icon: 'success',
        duration: 900,
        mask: true,
        success: function(res) {
          setTimeout(function(){
            wx.navigateBack({
              delta: 2
            })
          },900)
        }
      })
    }
  }
})