Page({

  data: {
    state: '已完成'
  },

  onLoad: function (options) {
 
  },
  buyAgain: function () {
    wx.navigateTo({
      url: '/pages/order-xiadan/order-xiadan'
    })
  }
})