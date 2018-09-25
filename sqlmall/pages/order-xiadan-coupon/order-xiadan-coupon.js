Page({

  data: {
  
  },

  onLoad: function (options) {
  
  },
  toUseCoupon: function(){
    wx.redirectTo({
      url: '/pages/order-xiadan/order-xiadan?couponId=tyuu'
    })
  }
})