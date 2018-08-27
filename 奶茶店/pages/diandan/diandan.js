let list = require('../../utils/teaList.js')

Page({

  data: {
    localHasStore: true,
    toView: 'tea_item_0',
    toCategoryView: 'category_item_0',
    scrollTop: 0,
    percent: 2,   // 当前设备1px对应的rpx值
    teaListHeightArray: [],
    teaList: list
  },
  onLoad: function(options) {
    if (!this.data.localHasStore) {
      wx.showModal({
        title: '提示',
        content: '当前城市还没有门店！敬请期待。',
        showCancel: false,
        cancelText: '',
        cancelColor: '',
        confirmText: '确定',
        confirmColor: '#d79f62',
        success: function(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/choose_store/choose_store'
            })
          }
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        // percent 为当前设备1px对应的rpx值
        that.setData({
            percent: 750 / res.windowWidth
        })
      }
    })
  },
  // 点击顶部的换门店
  changeStore: function() {
    wx.navigateTo({
      url: '/pages/choose_store/choose_store'
    })
  },
  // 点击左边的类别
  selectCatogary: function(e) {
    let index = e.currentTarget.dataset.index;
    let tmpTeaList = this.data.teaList.slice();
    let scrollTop = 0;
    for (let i = 0, iLength = tmpTeaList.length; i < iLength; i++) {
      if (i === index) {
        tmpTeaList[i].selected = true
      } else {
        tmpTeaList[i].selected = false
      }
    }
    this.setData({
      teaList: tmpTeaList,
      toView: 'tea_item_' + index
    })
  },
  // 点减号
  jianClick: function(e) {
    let teaId = e.currentTarget.dataset.teaId;
    let categoryIndex = this.findTeaIndex(teaId).categoryIndex;
    let teaIndex = this.findTeaIndex(teaId).teaIndex;
    let tmpCategoryTeaList = this.data.teaList.slice();
    if (tmpCategoryTeaList[categoryIndex].teaList[teaIndex].count > 0) {
      tmpCategoryTeaList[categoryIndex].teaList[teaIndex].count -= 1;
    }
    this.setData({
      teaList: tmpCategoryTeaList
    })
  },
  // 点加号
  jiaClick: function(e) {
    let teaId = e.currentTarget.dataset.teaId;
    let categoryIndex = this.findTeaIndex(teaId).categoryIndex;
    let teaIndex = this.findTeaIndex(teaId).teaIndex;
    let tmpCategoryTeaList = this.data.teaList.slice();
    tmpCategoryTeaList[categoryIndex].teaList[teaIndex].count += 1;
    this.setData({
      teaList: tmpCategoryTeaList
    })
  },
  // 滑动右边的商品列表
  teaListScroll: function(e) {
    let scrollTop = e.detail.scrollTop;
    let scrollTopRpx = scrollTop * this.data.percent;
    let tmpArray = this.data.teaListHeightArray.slice();
    let tmpHeight = 0;
    let categoryIndex = 0;
    for (let i = 0, iLength = tmpArray.length; i < iLength; i++) {
      tmpHeight += tmpArray[i];
      console.log(tmpHeight)
      if (scrollTopRpx > tmpHeight) {
        categoryIndex = i;
        break;
      }
    }
    console.log(categoryIndex)
  },

  /****************************************
   *    工具函数
   * *************************************/
  // 根据id找到商品
  findTeaIndex: function(teaId) {
    let categoryIndex = 0;
    let teaIndex = 0;
    let categoryTeaList = this.data.teaList.slice();
    for (let i = 0, iLength = categoryTeaList.length; i < iLength; i++) {
      let teaList = categoryTeaList[i].teaList;
      for (let j = 0, jLength = teaList.length; j < jLength; j++) {
        if (teaList[j].id === teaId) {
          return {
            categoryIndex: i,
            teaIndex: j
          }
        }
      }
    }
  },



  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let teaCategoryList = this.data.teaList.slice();
    let teaListHeight = 0;
    let tmpArray = [];
    let titleHeight = 66;
    for (let i = 0, iLength = teaCategoryList.length; i < iLength; i++) {
      let teaArray = teaCategoryList[i].teaList;
      let teaHeigth = 0;
      for (let j = 0, jLength = teaArray.length; j < jLength; j++) {
        teaHeigth += 182;
      }
      tmpArray[i] = teaHeigth + titleHeight;
    }
    this.setData({
      teaListHeightArray: tmpArray
    })
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