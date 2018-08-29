// pages/choose_store/choose_store.js
Page({

  data: {
    inputHasText: false,
    array: ['长沙市', '岳阳市', '湘潭市', '株洲市'],
    searchReasultList: ['岳阳大学爱上大飒飒大师大师大师法水电费的说法是的第三方第三方的', '岳阳市政府', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳东站', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳', '岳阳'],
    searchReasultListShow: true,
    index: 0,
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: '极品哈士奇',
      iconPath: '/images/dog1.jpg',
      width: 40,
      height: 40,
      callout: {
        content: '哈士奇奶茶店',
        color: '#000',
        fontSize: 20,
        padding: 6,
        borderRadius: 4
      }
    }, {
      id: 2,
      latitude: 23.099994,
      longitude: 113.328620,
      name: '毛毛奶茶',
      iconPath: '/images/location.png',
      callout: {
        content: '首都奶茶',
        color: '#000',
        fontSize: 20,
        padding: 6,
        borderRadius: 4
      }
    }, {
      id: 3,
      latitude: 23.099994,
      longitude: 113.332620,
      name: '猫咪奶茶店',
      iconPath: '/images/cat_avatar.jpg',
      width: 40,
      height: 40,
      callout: {
        content: '猫咪奶茶店',
        color: '#000',
        fontSize: 20,
        padding: 6,
        borderRadius: 4
      }
    }],
    storeList: [{
      name: '汉林奶茶店',
      address: '湖南省岳阳市岳阳楼区岳阳大道翠碧山庄凯旋城市政府市政协黄鹤楼白沙广兴洲123号',
      distance: 6,
      canDelivery: true,
      openTime: '10:00~22:00',
      selected: true
    }, {
      name: '汉林奶茶店2',
      address: '湖南省岳阳市岳阳楼区岳',
      distance: 2,
      canDelivery: false,
      openTime: '10:00~22:00',
      selected: false
    }, {
      name: '汉林奶茶店33',
      address: '湖南省岳阳市岳阳楼区岳阳大道翠碧山庄凯旋城市政府市政协黄鹤楼白沙广兴洲123号',
      distance: 6,
      canDelivery: true,
      openTime: '10:00~22:00',
      selected: false
    }, {
      name: '汉林奶茶店44',
      address: '市政府市政协黄鹤楼白沙广兴洲123号',
      distance: 6,
      canDelivery: false,
      openTime: '10:00~22:00',
      selected: false
    }, {
      name: '汉林奶茶店55',
      address: '湖南省岳阳市岳阳楼区岳阳大道',
      distance: 6,
      canDelivery: true,
      openTime: '10:00~22:00',
      selected: false
    }, {
      name: '汉林奶茶店55',
      address: '湖南省岳阳市岳阳楼区岳阳大道',
      distance: 6,
      canDelivery: true,
      openTime: '10:00~22:00',
      selected: false
    }, {
      name: '汉林奶茶店55',
      address: '湖南省岳阳市岳阳楼区岳阳大道',
      distance: 6,
      canDelivery: true,
      openTime: '10:00~22:00',
      selected: false
    }]
  },
  // 点击门店
  selecteStore: function(e) {
    var selected = e.currentTarget.dataset.selected;
    var index = e.currentTarget.dataset.index;
    if (!selected) {
      var tmpStoreList = this.data.storeList.slice();
      for (let i = 0, iLength = tmpStoreList.length; i < iLength; i++) {
        if (index === i) {
          tmpStoreList[i].selected = true
        } else {
          tmpStoreList[i].selected = false
        }
      }
      this.setData({
        storeList: tmpStoreList
      })
    }
  },
  // 选中门店后去点单
  placeOrder: function() {
    let distance = 99;
    if (distance > 50) {
      wx.showModal({
        title: '',
        content: '您当前所在位置距离该门店较远，是否继续点单？',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#333333',
        confirmText: '确定',
        confirmColor: '#d79f62',
        success: function(res) {
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/diandan/diandan'
            })
          }
        }, 
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  bindPickerChange: function(e) {
    console.log(this.data.array[e.detail.value])
    this.setData({
      index: e.detail.value
    })
  },
  // 点击搜索按钮
  clickSearchBtn: function () {
    this.setData({
      searchReasultListShow: true
    })
  },
  // 点击取消按钮
  clickCancelBtn: function () {
    this.setData({
      searchReasultListShow: false
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