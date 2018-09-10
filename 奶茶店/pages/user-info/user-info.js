// pages/user-info/user-info.js
Page({

  data: {
    hadRegister: false,
    items: [{
        name: 'male',
        value: '男'
      },
      {
        name: 'female',
        value: '女',
        checked: 'true'
      }
    ],
    date: '',
    endDate: ''
  },

  onLoad: function(options) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    this.setData({
      endDate: year + '-' + month + '-' + day
    })
  },
  changePhone: function () {
    wx.navigateTo({
      url: '/pages/user-telphone-change/user-telphone-change'
    })
  },
  bindPhone: function () {
    wx.navigateTo({
      url: '/pages/user-register/user-register'
    })
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.switchTab({
      url: '/pages/user/user'
    })
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