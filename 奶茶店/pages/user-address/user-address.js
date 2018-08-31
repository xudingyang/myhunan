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
      },
      {
        id: '123456',
        name: '吴辩2',
        tel: '13877779999',
        addressTxt: '湖南省岳阳市岳阳楼区岳阳大道花板桥王家河大桥哈哈哈翠碧山庄六六六哈哈哈金晶科技可怜加快来三点发水电费即可将科技地方大幅度',
        isDefault: true,
        active: false   // 该字段只是辅助变量，不需要传到服务器
      },
      {
        id: '123456',
        name: '吴辩3',
        tel: '13877779999',
        addressTxt: '湖南省岳阳市岳阳楼区岳阳大道花板桥王家河大桥哈哈哈翠碧山庄六六六哈哈哈金晶科技可怜加快来三点发水电费即可将科技地方大幅度',
        isDefault: false,
        active: false   // 该字段只是辅助变量，不需要传到服务器
      },
      {
        id: '123456',
        name: '吴辩4',
        tel: '13877779999',
        addressTxt: '湖南省岳阳市岳阳楼区岳阳大道花板桥王家河大桥哈哈哈翠碧山庄六六六哈哈哈金晶科技可怜加快来三点发水电费即可将科技地方大幅度',
        isDefault: false,
        active: false   // 该字段只是辅助变量，不需要传到服务器
      },
      {
        id: '123456',
        name: '吴辩5',
        tel: '13877779999',
        addressTxt: '湖南省岳阳市岳阳楼区岳阳大道花板桥王家河大桥哈哈哈翠碧山庄六六六哈哈哈金晶科技可怜加快来三点发水电费即可将科技地方大幅度',
        isDefault: false,
        active: false   // 该字段只是辅助变量，不需要传到服务器
      }
    ]
  },


  onLoad: function (options) {
    var query = options['pagename'];
    console.log(query + '========')
    if ('xiadan' === query) {
      this.setData({
        referer: 0,
        refererPagename: 'xiadan'
      })
    } else {
      this.setData({
        referer: 1,
        refererPagename: ''
      })
    }
  },
  // 去编辑页面，编辑新地址
  goEditAddressPage: function () {
    var that = this;
    wx.navigateTo({
      url: '/pages/user-address-edit/user-address-edit?pagename=' + that.data.refererPagename
    })
  },
  chooseAddress: function (e) {
    var tmp = this.data.addressList.slice();
    console.log(e)
    var index = e.currentTarget.dataset['index'];
    tmp.forEach(function (val, ind) {
      if (index === ind) {
        val['active'] = true
      } else {
        val['active'] = false
      }
    })
    this.setData({
      addressList: tmp
    })
    // 返回下单页面，把参数带过去
    wx.redirectTo({
      url: '/pages/order-xiadan/order-xiadan?addressId=' + (this.data.addressList[index])['id']
    })
  },
  setDefaultAddress: function (e) {
    var tmp = this.data.addressList.slice();
    var index = e.currentTarget.dataset['index'];
    tmp.forEach(function (val, ind) {
      if (index === ind) {
        val['isDefault'] = true
      } else {
        val['isDefault'] = false
      }
    })
    // 发送请求，设置默认地址
    // ......

    this.setData({
      addressList: tmp
    })
  },
  // 编辑地址。注意：上边的goEditAddressPage()方法是去编辑新地址，这里是修改旧地址。
  editAddress: function (e) {
    var index = e.currentTarget.dataset['index'];
    var id = (this.data.addressList[index])['id'];
    var url = '/pages/user-address-edit/user-address-edit?addressId=' + id + '&pagename=' + this.data.refererPagename;
    wx.navigateTo({
      url: url
    })
  },
  deleteAddress: function (e) {
    var that = this;
    var index = e.currentTarget.dataset['index'];
    var id = (this.data.addressList[index])['id'];
    wx.showLoading({
      title: '正在删除',
      mask: true,
      success: function (res) {
        // 发送请求
        // .....

        setTimeout(function() {
          wx.hideLoading();
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 800,
            mask: true,
            success: function (res) {
              var tmp = that.data.addressList.slice();
              tmp.splice(index,1);
              that.setData({
                addressList: tmp
              })
             },
            fail: function (res) { },
            complete: function (res) { },
          })
        },2000)
        
      },
      fail: function (res) {
        console.log(222)
      },
      complete: function (res) { },
    })

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