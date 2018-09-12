Page({

  data: {
    dateStr: '',
    endDate: '',
    storeArray: ['汉林1号店', '汉林2号店', '汉林2号店', '汉林2号店', '汉林2号店']
  },

  bindDateChange: function (e) {
    var value = e.detail.value;
    this.setData({
      dateStr: value + '年'
    })
  },
  onLoad: function (options) {
    var now = new Date();
    var year = now.getFullYear();
    var endDate = year;

    this.setData({
      endDate: endDate,
      dateStr: year + '年'
    })
  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})