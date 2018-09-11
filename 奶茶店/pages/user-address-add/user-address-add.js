Page({

  data: {
    items: [{
        name: 'male',
        value: '先生',
        checked: 'true'
      },
      {
        name: 'female',
        value: '女士'
      }
    ]
  },

  getLocation: function() {
    console.log(12)
    // wx.getLocation({
    //   type: '',
    //   altitude: true,
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(res) {
    //     console.log(res)        
    //   },
    //   complete: function(res) {},
    // })

    wx.chooseLocation({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {},
    }) 

    // wx.openLocation({
    //   latitude: 23.099994,
    //   longitude: 113.328620,
    //   scale: '8',
    //   name: '汉林',
    //   address: '100号14栋',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  },


  onLoad: function(options) {

  },
  submitAddress: function(e) {
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})