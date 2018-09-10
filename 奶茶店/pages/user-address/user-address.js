// pages/user-address/user-address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    referer: 0,    // 上一级是订单页面，用0表示。上一级是user、edit等其他页面，用1表示。
    refererPagename: '',
    addressList: [
      {
        id: '123456',
        name: '吴辩1',
        tel: '13877779999',
        addressTxt: '湖南省岳阳市岳阳楼区岳阳大道花板桥王家河大桥哈哈哈翠碧山庄六六六哈哈哈金晶科技可怜加快来三点发水电费即可将科技地方大幅度',
        isDefault: false,
        active: false   // 该字段只是辅助变量，不需要传到服务器
      }
    ]
  },


  onLoad: function (options) {

  },

  // 添加地址
  addAddress: function () {
    wx.navigateTo({
      url: '/pages/user-address-add/user-address-add'
    })
  },
  // 编辑地址
  editAddress: function (e) {
    wx.navigateTo({
      url: '/pages/user-address-edit/user-address-edit'
    })
  },
  // 删除地址
  deleteAddress: function (e) {

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