let list = require('../../utils/teaList.js')

Page({

  data: {
    localHasStore: true,
    toView: 'tea_item_0',
    toCategoryView: 'category_item_0',
    scrollTop: 0,
    percent: 2, // 当前设备1px对应的rpx值
    teaListHeightArray: [],
    teaTotalHeigthArray: [],
    teaList: list,
    categoryScrollTop: 0,
    showModalIntroduction: false,
    showModalSize: false,
    teaSizeList: [
      {
        title: '温度1',
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
    modalTeaCount: '',
    showCartList: false,
    cartList: [
      {
        id: 1,
        name: '珍珠奶茶的设计费德生科技发大水口富家大室李开复就丢失了看风景的史111',
        remark: '水电费水电费水电费水电费胜多负少的发第三方',
        totalMoney: 566,
        count: 8
      }, {
        id: 2,
        name: '珍珠奶茶的设计费德生科技发大水口富家大室李开复就丢失了看风景的史222',
        remark: '水电费水电费水电费水电费胜多负少的发第三方',
        totalMoney: 56,
        count: 8
      }, {
        id: 3,
        name: '珍珠奶茶的设计费德生科技发大水口富家大室李开复就丢失了看风景的史333',
        remark: '水电费水电费水电费水电费胜多负少的发第三方',
        totalMoney: 56,
        count: 8
      }, {
        id: 4,
        name: '珍珠奶茶的设计费德生科技发大水口富家大室李开复就丢失了看风景的史莱444',
        remark: '水电费水电费水电费水电费胜多负少的发第三方',
        totalMoney: 56,
        count: 8
      }, {
        id: 5,
        name: '珍珠奶茶的设计费德生科技发大水口富家大室李开复就丢失了看风景的史555',
        remark: '水电费水电费水电费水电费胜多负少的发第三方',
        totalMoney: 56,
        count: 8
      }
    ]
  },
  onLoad: function (options) {
    if (!this.data.localHasStore) {
      wx.showModal({
        title: '提示',
        content: '当前城市还没有门店！敬请期待。',
        showCancel: false,
        cancelText: '',
        cancelColor: '',
        confirmText: '确定',
        confirmColor: '#d79f62',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/choose_store/choose_store'
            })
          }
        },
        fail: function (res) { },
        complete: function (res) { },
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
  clickSizeItem: function (e) {
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
  changeStore: function () {
    wx.navigateTo({
      url: '/pages/choose_store/choose_store'
    })
  },
  // 点减号
  jianClick: function (e) {
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
  jiaClick: function (e) {
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
  // 点击左边的类别
  selectCatogary: function (e) {
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
  // 滑动右边的商品列表
  teaListScroll: function (e) {
    let scrollTop = e.detail.scrollTop;
    let scrollTopRpx = scrollTop * this.data.percent;
    let tmpTeaList = this.data.teaList.slice();
    let tmpArray = this.data.teaListHeightArray.slice();
    let teaTotalHeigthArray = this.data.teaTotalHeigthArray.slice();
    if (scrollTopRpx < 70) {
      return
    }
    let tmpHeight = 0;
    let categoryIndex = 0;
    for (let i = 0, iLength = tmpArray.length; i < iLength; i++) {
      if (scrollTopRpx > teaTotalHeigthArray[i]) {
        categoryIndex = i + 1;
      }
    }

    for (let j = 0, jLength = tmpTeaList.length; j < jLength; j++) {
      if (j === categoryIndex) {
        tmpTeaList[j].selected = true;
      } else {
        tmpTeaList[j].selected = false;
      }
    }
    this.setData({
      teaList: tmpTeaList,
      categoryScrollTop: (categoryIndex - 1) * 96
    })
  },
  teaListScrollTop: function () {
    let tmpTeaList = this.data.teaList.slice();
    let kLength = tmpTeaList.length;
    for (let k = kLength - 1; k > 0; k--) {
      tmpTeaList[k].selected = false;
    }
    tmpTeaList[0].selected = true;
    this.setData({
      teaList: tmpTeaList,
      // toCategoryView: 'category_item_0',
      categoryScrollTop: 0
    })
  },
  teaListScrollBottom: function () {

  },
  // 点击商品图片
  clickGoodsIcon: function (e) {
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
  closeModalIntroduction: function () {
    this.setData({
      showModalIntroduction: false,
      showModalSize: false
    })
  },
  // 关闭选择规则界面
  closeModalSize: function () {
    this.setData({
      showModalIntroduction: false,
      showModalSize: false
    })
  },
  // 点击选规格
  chooseSizeBtn: function (e) {
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
  addCartBtn: function (e) {
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
  // 点击底下的购物袋按钮
  clickCartListBtn: function () {
    if (this.data.showCartList) {
      this.setData({
        showCartList: false
      })
    } else {
      this.setData({
        showCartList: true
      })
    }
  },
  // 点击购物袋商品列表弹出层
  clickCartListModal: function () {
    this.setData({
      showCartList: false
    })
  },
  // 点击  清空购物袋  按钮
  clearCartList: function () {
    this.setData({
      cartList: []
    })
  },
  cartJianClick: function (e) {
    var index = e.currentTarget.dataset.index;
    var tmpCartList = this.data.cartList.slice();
    for (let i = 0, iLength = tmpCartList.length; i < iLength; i++) {
      if (i === index) {
        tmpCartList[i].count > 0 ? tmpCartList[i].count-- : tmpCartList[i].count
        if (tmpCartList[i].count === 0) {
          tmpCartList.splice(index, 1)
        }
      }
    }
    this.setData({
      cartList: tmpCartList
    })
  },
  cartJiaClick: function (e) {
    var index = e.currentTarget.dataset.index;
    var tmpCartList = this.data.cartList.slice();
    for (let i = 0, iLength = tmpCartList.length; i < iLength; i++) {
      if (i === index) {
        tmpCartList[i].count++
      }
    }
    this.setData({
      cartList: tmpCartList
    })
  },
  /****************************************
   *    工具函数
   * *************************************/
  // 根据id找到商品
  findTeaIndex: function (teaId) {
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
  onShow: function () {
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
    let teaTotalHeigthArray = [];
    for (let k = 0, kLength = tmpArray.length; k < kLength; k++) {
      let tmpTotalHeight = 0;
      for (let m = 0; m <= k; m++) {
        tmpTotalHeight += tmpArray[m]
      }
      teaTotalHeigthArray[k] = tmpTotalHeight
    }
    this.setData({
      teaTotalHeigthArray: teaTotalHeigthArray,
      teaListHeightArray: tmpArray
    })
  },
  onReady: function () {

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