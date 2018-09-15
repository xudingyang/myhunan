let list = require('../../utils/teaList.js')

Page({

  data: {
    localHasStore: true,
    toView: 'tea_item_0',
    toCategoryView: 'category_item_0',
    scrollTop: 0,
    percent: 2, // 当前设备1px对应的rpx值
    teaListHeightArray: [],
    teaList: list,
    categoryScrollTop: 0,
    showModalIntroduction: false,
    showModalSize: true,
    teaSizeList: [
      {
        title: '温度1',
        content: [
          { text: '常温哈哈', checked: false},
          { text: '加冰', checked: true },
          { text: '多冰', checked: false },
          { text: '少放点冰', checked: false },
          { text: '常温哈哈', checked: false },
          { text: '常温哈哈', checked: false }          
        ]
      },
      {
        title: '温度2',
        content: [
          { text: '常温哈哈', checked: false },
          { text: '加冰', checked: true },
          { text: '多冰', checked: false },
          { text: '少放点冰', checked: false },
          { text: '常温哈哈', checked: false },
          { text: '常温哈哈', checked: false }
        ]
      },
      {
        title: '温度3',
        content: [
          { text: '常温哈哈', checked: false },
          { text: '加冰', checked: true },
          { text: '多冰', checked: false },
          { text: '少放点冰', checked: false },
          { text: '常温哈哈', checked: false },
          { text: '常温哈哈', checked: false }
        ]
      },
      {
        title: '温度4',
        content: [
          { text: '常温哈哈', checked: false },
          { text: '加冰', checked: true },
          { text: '多冰', checked: false },
          { text: '少放点冰', checked: false },
          { text: '常温哈哈', checked: false },
          { text: '常温哈哈', checked: false }
        ]
      } 
    ],
    modalTeaId: '',
    modalTeaCount: ''
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
      success: function(res) {
        // percent 为当前设备1px对应的rpx值
        that.setData({
          percent: 750 / res.windowWidth
        })
      }
    })
  },
  clickSizeItem: function(e){
    var itemIndex = parseInt(e.currentTarget.dataset.itemIndex);
    var textIndex = parseInt(e.target.dataset.textIndex);
    if (itemIndex >= 0 && textIndex >= 0) {
      let tmpTeaSizeList = this.data.teaSizeList.slice();
      for (let i = 0, iLength = tmpTeaSizeList.length; i < iLength; i++) {
        if (i === itemIndex) {
          let textList = tmpTeaSizeList[i].content;
          for (let j = 0, jLength = textList.length; j < jLength; j++) {
            if (j === textIndex) {
              textList[j].checked = true
            } else {
              textList[j].checked = false              
            }
          }
        }
      }
      this.setData({
        teaSizeList: tmpTeaSizeList
      })
    }
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
      teaList: tmpCategoryTeaList,
      modalTeaCount: tmpCategoryTeaList[categoryIndex].teaList[teaIndex].count      
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
      teaList: tmpCategoryTeaList,
      modalTeaCount: tmpCategoryTeaList[categoryIndex].teaList[teaIndex].count
    })
  },
  // 滑动右边的商品列表
  teaListScroll: function(e) {
    let scrollTop = e.detail.scrollTop;
    let scrollTopRpx = scrollTop * this.data.percent;
    let tmpTeaList = this.data.teaList.slice();
    if (scrollTopRpx < 70) {
      return
    }
    let tmpArray = this.data.teaListHeightArray.slice();
    let tmpHeight = 0;
    let categoryIndex = 0;
    for (let i = 0, iLength = tmpArray.length; i < iLength; i++) {
      tmpHeight += tmpArray[i];
      console.log(scrollTopRpx) 
      console.log(tmpHeight)
      if (i < iLength - 1 && scrollTopRpx > tmpHeight && scrollTopRpx < tmpHeight + tmpArray[i + 1]) {
        categoryIndex = i;
        // console.log(tmpHeight)
        console.log('====================' + Date.now())
        continue;
      }
    }
    for (let j = 0, jLength = tmpTeaList.length; j < jLength; j++) {
      if (j === categoryIndex) {
        tmpTeaList[j].selected = true;
      } else {
        tmpTeaList[j].selected = false;
      }
    }
    console.log(categoryIndex)
    // console.log(categoryIndex * 96)    
    this.setData({
      teaList: tmpTeaList,
      categoryScrollTop: categoryIndex * 96,
      toCategoryView: 'category_item_' + categoryIndex
    })
  },
  teaListScrollTop: function() {
    let tmpTeaList = this.data.teaList.slice();
    let kLength = tmpTeaList.length;
    for (let k = kLength - 1; k > 0; k--) {
      tmpTeaList[k].selected = false;
    }
    tmpTeaList[0].selected = true;
    this.setData({
      teaList: tmpTeaList,
      toCategoryView: 'category_item_0',
      categoryScrollTop: 0
    })
  },
  teaListScrollBottom: function() {
    let tmpTeaList = this.data.teaList.slice();
    let kLength = tmpTeaList.length;
    for (let k = 0; k < kLength - 1; k++) {
      tmpTeaList[k].selected = false;
    }
    tmpTeaList[kLength - 1].selected = true;
    this.setData({
      teaList: tmpTeaList,
      toCategoryView: 'category_item_0',
      categoryScrollTop: 96 * kLength
    })
    console.log(232333)
  },
  // 点击商品图片
  clickGoodsIcon: function (e){
    var teaId = e.currentTarget.dataset.teaId;
    var obj = this.findTeaIndex(teaId);
    var teaCount = (this.data.teaList[obj.categoryIndex].teaList)[obj.teaIndex].count
    this.setData({
      showModalIntroduction: true,
      modalTeaId: teaId,
      modalTeaCount: teaCount
    })
  },
  // 关闭商品介绍界面
  closeModalIntroduction: function(){
    this.setData({
      showModalIntroduction: false,
      showModalSize: false
    })
  },
  // 关闭选择规则界面
  closeModalSize: function(){
    this.setData({
      showModalIntroduction: false,
      showModalSize: false
    })
  },
  // 点击选规格
  chooseSizeBtn: function(e){
    var teaId = e.currentTarget.dataset.teaId;    
    var obj = this.findTeaIndex(teaId);
    var teaCount = (this.data.teaList[obj.categoryIndex].teaList)[obj.teaIndex].count
    this.setData({
      showModalSize: true,
      modalTeaId: teaId,
      modalTeaCount: teaCount
    })
  },
  // 加入购物袋
  addCartBtn: function(e){
    let teaId = e.currentTarget.dataset.teaId;
    let categoryIndex = this.findTeaIndex(teaId).categoryIndex;
    let teaIndex = this.findTeaIndex(teaId).teaIndex;
    let tmpCategoryTeaList = this.data.teaList.slice();
    tmpCategoryTeaList[categoryIndex].teaList[teaIndex].count += 1;
    this.setData({
      teaList: tmpCategoryTeaList,
      modalTeaCount: tmpCategoryTeaList[categoryIndex].teaList[teaIndex].count
    })
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
  onReady: function () {

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