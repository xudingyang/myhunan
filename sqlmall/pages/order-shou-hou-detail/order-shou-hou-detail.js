
Page({

  data: {
    tel: '13455556666',
    tuiHuo: true,     // 退货标记
    huanHuo: false,   // 换货标记
    weiXiu: false,    // 维修标记
    reasonLength: 0,
    address: {
      name: '吴辩',
      telphone: '13877667799',
      addressTxt: '湖南省岳阳市岳阳楼区世纪东方可视对讲离开房间爱的思考法律的撒娇弗兰克的数据库'
    }
  },

  onLoad: function (options) {

  },
  listenTextarea: function (e){
    var txtLen = (e.detail.value).length
    this.setData({
      reasonLength: txtLen
    })
  },
  callPhone: function (e) {
    var tel = e.currentTarget.dataset['tel']
    wx.makePhoneCall({
      phoneNumber: tel,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  clickTuiHuo: function () {
    this.setData({
      tuiHuo: true,
      huanHuo: false,
      weiXiu: false
    })
  },
  clickHuanHuo: function () {
    this.setData({
      tuiHuo: false,
      huanHuo: true,
      weiXiu: false
    })
  },
  clickWeiXiu: function () {
    this.setData({
      tuiHuo: false,
      huanHuo: false,
      weiXiu: true
    })
  },
  submitApply: function (e) {
    var username = e.detail.value.username;
    var telphone = e.detail.value.telphone;
    var address = e.detail.value.address;
    var detailreason = e.detail.value.detailreason;
    console.log(username + '==' + telphone + '==' + address + '==' + detailreason)
    wx.showLoading({
      title: '正在提交',
      mask: true,
      success: function (res) {
        setTimeout(function () {
          wx.hideLoading();
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 800,
            mask: true,
            success: function (res) {
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1
                })
              }, 1000)
            }
          })
        }, 1000)
      }
    })
  }
})