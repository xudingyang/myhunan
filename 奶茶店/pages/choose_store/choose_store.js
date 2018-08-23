// pages/choose_store/choose_store.js
Page({

  data: {
    inputHasText: false,
    array: ['长沙市', '岳阳市', '湘潭市', '株洲市'],
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
        selected: true        
      }, {
        name: '汉林奶茶店55',
        address: '湖南省岳阳市岳阳楼区岳阳大道',
        distance: 6,
        canDelivery: true,
        openTime: '10:00~22:00',
        selected: true        
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
  selecteStore: function (e) {
    var selected = e.currentTarget.dataset.selected;
    var index = e.currentTarget.dataset.index;
    if (!selected) {
      var tmpStoreList = this.data.storeList.slice();
      tmpStoreList[index].selected = true
      this.setData({
        storeList: tmpStoreList
      })
    } else {
      var tmpStoreList = this.data.storeList.slice();
      tmpStoreList[index].selected = false
      this.setData({
        storeList: tmpStoreList
      })
    }
  },
  bindPickerChange: function(e) {
    console.log(this.data.array[e.detail.value])
    this.setData({
      index: e.detail.value
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