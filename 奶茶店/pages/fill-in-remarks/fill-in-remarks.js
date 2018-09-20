Page({

  data: {
    wordsList: ['打包', '不打包', '不打包', '不打包', '不打包', '不打包', '不打包', '不打包', '不打包'],
    remarksTxt: '',
    wordCount: 0
  },
  listenTextarea: function (e){
    var txt = e.detail.value;
    this.setData({
      remarksTxt: txt,
      wordCount: txt.length
    })
  },
  formSubmit: function(e) {
    console.log(e.detail.value.remarksTxt)
    wx.navigateBack({
      delta: 1,
    })
  },
  clickWordItem: function(e){
    var remarksTxt = this.data.remarksTxt;
    var txt = e.currentTarget.dataset.txt;
    if ((remarksTxt + txt).length > 50) {
      this.setData({
        wordCount: remarksTxt.length
      })
      return
    }
    remarksTxt = remarksTxt + txt;    
    this.setData({
      remarksTxt: remarksTxt,
      wordCount: remarksTxt.length
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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