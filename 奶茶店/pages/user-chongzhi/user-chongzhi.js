Page({

  data: {
    step1: true,
    step2: false,
    step3: false,
    inputMoney: '',
    currentMoney: 0
  },

  onLoad: function (options) {
  
  },
  goNext: function (e) {
    var currMoney = e.detail.value.currentmoney
    if (currMoney > 0) {
      this.setData({
        step1: false,
        step2: true,
        step3: false,        
        currentMoney: currMoney
      })
    } else {
      wx.showToast({
        title: '请输入金额',
        icon: 'none',
        duration: 800,
        mask: true
      })
    }
  },
  pay: function(){
    this.setData({
      step1: false,
      step2: false,
      step3: true  
    })
  },
  backStep1: function() {
    var that = this;
    this.setData({
      step1: true,
      step2: false,
      step3: false,      
      inputMoney: that.data.currentMoney
    })
  },
  goBack: function() {
    wx.navigateBack({
      delta: 2
    })
    // wx.switchTab({
    //   url: '/pages/user/user'
    // })
  }
})