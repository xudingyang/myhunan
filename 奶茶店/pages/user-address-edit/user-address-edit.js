Page({

  data: {
    name: '',
    tel: '',
    region: ['湖南省', '岳阳市', '岳阳楼区'],    
    detailAddress: '',
    refererPagename: ''    // 记录地址列表是从哪个页面进来的
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  onLoad: function (options) {
    // 把
    var query = options['pagename'];
    this.setData({
      refererPagename: query
    })

    // 如果是新增地址，不做任何操作。

    // 如果是修改地址
    // 根据传来的addressId，获取到地址，依次填充name,tel,address
    this.setData({
      name: '汪涵',
      tel: '13000993333',
      region: ['湖南省', '长沙市', '岳麓区'],
      detailAddress: '岳阳大道78号湖南广播电视台34号15楼'
    })
  },
  submitAddress: function (e) {
    const that = this;
    wx.showLoading({
      title: '正在更新地址',
      mask: true,
      success: function(res) {
        // 在这里发送更新地址请求
        // ....

        wx.hideLoading();
        wx.showToast({
          title: '刷新成功',
          icon: 'success',
          duration: 800,
          mask: true,
          success: function(res) {
            wx.redirectTo({
              url: '/pages/user-address/user-address?pagename=' + that.data.refererPagename,
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    var value = e.detail.value;
    var name = value.name;
    var tel = value.tel;
    var regionStr = value.region.join('');
    var detailAddress = value.detailAddress;
    console.log(name + '  ' + tel + '  ' + regionStr + '  ' + detailAddress)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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