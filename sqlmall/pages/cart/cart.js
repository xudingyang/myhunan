Page({

  data: {
    hasGoods: true,      // 购物车是否有商品
    selectedAll: false,  // 是否点击全选按钮
    totalMoney: 0,      // 实际要支付的合计金额
    fullMoney: 0,        // 优惠之前的金额
    discountMoney: 0,     // 减免金额
    totalSelectedCount: 0,  // 去结算按钮上的数字
    startX: 0,           // 触摸点起始方向位置
    startGoodsId: '',         // 触摸点开始处的商品id
    cartGoodsList: [
      {
        topic: '买3送1',
        mark: '满赠',
        text: '挑赠品',
        maxGiftGoodsCount: 1, // 赠品个数的最大值 
        list: [
          {
            id: '1',
            name: '1雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 2,
            imgUrl: '/images/good/naifen1.jpg',
            selected: false,
            soldOut: true,
            style: '',
            gift: false
          },
          {
            id: '2',
            name: '2雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 1,
            imgUrl: '/images/good/naifen1.jpg',
            selected: false,
            soldOut: false,
            style: '',
            gift: false
          },
          {
            id: '3',
            name: '3雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 1,
            imgUrl: '/images/good/naifen1.jpg',
            selected: false,
            soldOut: false,
            style: '',
            gift: false
          }
        ],
        giftList: [
          {
            id: '4',
            name: '4雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            count: 2,
            imgUrl: '/images/good/naifen1.jpg',
            style: '',
            gift: true
          }
        ]
      },
      {
        topic: '满200减100',
        mark: '满减',
        text: '去凑单',
        list: [
          {
            id: '5',
            name: '5雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 2,
            imgUrl: '/images/good/naifen1.jpg',
            selected: false,
            soldOut: false,
            style: '',
            gift: false
          },
          {
            id: '6',
            name: '6雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 1,
            imgUrl: '/images/good/naifen1.jpg',
            selected: false,
            soldOut: false,
            style: '',
            gift: false
          }
        ]
      },
      {
        topic: '买3赠1',
        mark: '满赠',
        text: '挑赠品',
        list: [
          {
            id: '7',
            name: '7雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 2,
            imgUrl: '/images/good/naifen1.jpg',
            selected: false,
            soldOut: false,
            style: '',
            gift: false
          },
          {
            id: '8',
            name: '8雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 1,
            imgUrl: '/images/good/naifen1.jpg',
            selected: false,
            soldOut: false,
            style: '',
            gift: false
          }
        ]
      },
      {
        topic: 'default',
        mark: 'default',
        list: [
          {
            id: '9',
            name: '9雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 2,
            imgUrl: '/images/good/naifen1.jpg',
            selected: false,
            soldOut: false,
            style: '',
            gift: false
          },
          {
            id: '10',
            name: '10雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
            size: '重量:900克 颜色:红色 分段:大段',
            price: 95,
            count: 1,
            imgUrl: '/images/good/naifen1.jpg',
            selected: true,
            soldOut: false,
            style: '',
            gift: false
          }
        ]
      }
    ]
  },

  onLoad: function (options) {

  },
  onShow: function () {
    // 计算原价总金额
    this.calculateFullMoney();
    // 计算“去结算按钮”上的数字
    this.calculateSelectedCount();
  },
  // 挑赠品、凑单
  chooseZengpin: function (e) {
    if (e.currentTarget.dataset.txt === '挑赠品') {
      wx.navigateTo({
        url: '/pages/cart-choose-gift/cart-choose-gift'
      })
    } else if (e.currentTarget.dataset.txt === '去凑单') {
      wx.navigateTo({
        url: '/pages/cart-add-goods/cart-add-goods'
      })
    }
  },
  // ########    在商品上的滑动，删除商品  ############
  touchStart: function (e) {
    var touch = e.changedTouches[0];
    var startX = touch.clientX;
    var goodsId = e.currentTarget.dataset.goodsId;
    this.setData({
      startX: startX,
      startGoodsId: goodsId
    })
  },
  touchEnd: function (e) {
    // 计算出  商品在活动数组和商品数组中的位置
    var activityGoodsIndex = this.findGoodsIndex(this.data.startGoodsId);
    var acIndex = activityGoodsIndex.acIndex;
    var goodsIndex = activityGoodsIndex.goodsIndex;
    var touch = e.changedTouches[0];
    var endX = touch.clientX;
    var delta = endX - this.data.startX;
    var tmpArr = this.data.cartGoodsList.slice();
    if (delta < -100) {   // 左滑100
      tmpArr[acIndex].list[goodsIndex].style = 'right:100rpx';
    } else if (delta > 50) {  // 右滑50
      tmpArr[acIndex].list[goodsIndex].style = 'right:0';
    }
    this.setData({
      cartGoodsList: tmpArr
    })
  },
  // #######   在赠品上的滑动，删除赠品  #################
  touchGiftStart: function (e) {
    var touch = e.changedTouches[0];
    var startX = touch.clientX;
    var goodsId = e.currentTarget.dataset.goodsId;
    this.setData({
      startX: startX,
      startGoodsId: goodsId
    })
  },
  touchGiftEnd: function (e) {
    // 计算出  商品在活动数组和商品数组中的位置
    var activityGoodsIndex = this.findGiftGoodsIndex(this.data.startGoodsId);
    var acIndex = activityGoodsIndex.acIndex;
    var goodsIndex = activityGoodsIndex.goodsIndex;
    var touch = e.changedTouches[0];
    var endX = touch.clientX;
    var delta = endX - this.data.startX;
    var tmpArr = this.data.cartGoodsList.slice();
    if (delta < -100) {   // 左滑100
      tmpArr[acIndex].giftList[goodsIndex].style = 'right:100rpx';
    } else if (delta > 50) {  // 右滑50
      tmpArr[acIndex].giftList[goodsIndex].style = 'right:0';
    }
    this.setData({
      cartGoodsList: tmpArr
    })
  },
  // 删除商品
  deleteGoods: function (e) {
    var activityGoodsIndex = this.findGoodsIndex(e.currentTarget.dataset.goodsId);
    var acIndex = activityGoodsIndex.acIndex;
    var goodsIndex = activityGoodsIndex.goodsIndex;
    var tmpArr = this.data.cartGoodsList.slice();
    tmpArr[acIndex].list.splice(goodsIndex, 1);
    this.setData({
      cartGoodsList: tmpArr
    })
    // 计算原价总金额
    this.calculateFullMoney();
    // 计算“去结算按钮”上的数字
    this.calculateSelectedCount();
  },
  // 删除赠品
  deleteGiftGoods: function (e) {
    var activityGoodsIndex = this.findGiftGoodsIndex(e.currentTarget.dataset.goodsId);
    var acIndex = activityGoodsIndex.acIndex;
    var goodsIndex = activityGoodsIndex.goodsIndex;
    var tmpArr = this.data.cartGoodsList.slice();
    tmpArr[acIndex].giftList.splice(goodsIndex, 1);
    this.setData({
      cartGoodsList: tmpArr
    })
  },
  // 监听勾选商品事件，监听加减号按钮事件。两个事件都由活动容器监听
  clickActivity: function (e) {
    var that = this;
    // 活动数组下标
    var activityIndex = e.currentTarget.dataset.acIndex;
    // 当前活动项下，商品数组的下标
    var goodsIndex = e.target.dataset.goodsIndex;
    // 当前被点击元素的id 
    var tagId = e.target.id;

    // 如果点击的是勾选圆圈按钮
    if (tagId === 'choose_btn') {
      var selected = ((this.data.cartGoodsList[activityIndex]).list[goodsIndex]).selected;
      var tmpCartGoodsList = this.data.cartGoodsList.slice();
      tmpCartGoodsList.forEach(function (val, ind) {
        if (ind === activityIndex) {
          val.list.forEach(function (va, indx) {
            if (indx === goodsIndex) {
              if (selected) {
                va.selected = false
                that.setData({
                  selectedAll: false
                })
              } else {
                va.selected = true
              }
            }
          })
        }
      })
      this.setData({
        cartGoodsList: tmpCartGoodsList
      })
      if (tmpCartGoodsList.every(function (val) {
        return val.list.every(function (va) {
          return va.selected
        })
      })) {
        this.setData({
          selectedAll: true
        })
      }
    }

    // 如果点击的是减号
    if (tagId === 'jian_btn') {
      var tmpCartGoodsList = this.data.cartGoodsList.slice();
      tmpCartGoodsList.forEach(function (val, indx) {
        if (indx === activityIndex) {
          val.list.forEach(function (va, ind) {
            if (ind === goodsIndex) {
              va.count--
            }
          })
        }
      })
      this.setData({
        cartGoodsList: tmpCartGoodsList
      })
    }
    // 如果点击的是加号
    if (tagId === 'jia_btn') {
      var tmpCartGoodsList = this.data.cartGoodsList.slice();
      tmpCartGoodsList.forEach(function (val, indx) {
        if (indx === activityIndex) {
          val.list.forEach(function (va, ind) {
            if (ind === goodsIndex) {
              va.count++
            }
          })
        }
      })
      this.setData({
        cartGoodsList: tmpCartGoodsList
      })
    }

    // 计算原价总金额
    this.calculateFullMoney();
    // 计算“去结算按钮”上的数字
    this.calculateSelectedCount();
  },

  // 点击全选
  selectAll: function () {
    var tmpCartGoodsList = this.data.cartGoodsList.slice();
    if (this.data.selectedAll) {
      tmpCartGoodsList.forEach(function (val, ind) {
        val.list.forEach(function (va) {
          va.selected = false
        })
      })
      this.setData({
        selectedAll: false,
        cartGoodsList: tmpCartGoodsList
      })
    } else {
      tmpCartGoodsList.forEach(function (val, ind) {
        val.list.forEach(function (va) {
          va.selected = true
        })
      })
      this.setData({
        selectedAll: true,
        cartGoodsList: tmpCartGoodsList
      })
    }
    // 计算原价的总金额
    this.calculateFullMoney();
    // 计算“去结算按钮”上的数字
    this.calculateSelectedCount();
  },
  // 购物车是空的，点击去购物
  clickBuy: function () {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },
  // 点击去结算
  clickPay: function () {

    //  判断是否选择了无货商品
    var hasSoldOutGoods = false;
    this.data.cartGoodsList.forEach(function (val) {
      val.list.forEach(function (va) {
        if (va.selected && va.soldOut) {
          hasSoldOutGoods = true
        }
      })
    })
    // 如果没有选择商品
    if (this.data.totalSelectedCount < 1) {
      wx.showToast({
        title: '请选择商品',
        icon: 'none',
        duration: 900,
        mask: true
      })
    }
    // 如果选中了无货商品，提示错误
    else if (hasSoldOutGoods) {
      wx.showToast({
        title: '不能购买无货商品',
        icon: 'none',
        duration: 900,
        mask: true
      })
    } else {
      // 获取到所有选中的商品和赠品
      var selectedArray = [];
      var giftArray = [];
      this.data.cartGoodsList.forEach(function (val, indx) {
        val.list.forEach(function (va, ind) {
          if (va.selected && !va.soldOut) {
            console.log(va)
          }
        })
        if (val.giftList) {
          val.giftList.forEach(function (va, ind) {

          })
        }
      })
      wx.navigateTo({
        url: '/pages/order-xiadan/order-xiadan'
      })
    }

  },
  // 点击商品，查看商品详情
  goGoodsDetail: function () {
    wx.navigateTo({
      url: '/pages/goods-detail/goods-detail'
    })
  },

  // ########################## 杂项方法   ######################
  // 根据商品id,获取到活动和数组的下标
  findGoodsIndex: function (goodsId) {
    var acIndex, goodsIndex;
    var tmpArr = this.data.cartGoodsList.slice();
    for (var i = 0, iLength = tmpArr.length; i < iLength; i++) {
      var listArr = tmpArr[i].list;
      for (var j = 0, jLenth = listArr.length; j < jLenth; j++) {
        if (listArr[j].id === goodsId) {
          goodsIndex = j;
          acIndex = i;
        }
      }
    }
    return {
      acIndex: acIndex,
      goodsIndex: goodsIndex
    }
  },
  // 根据商品id，获取赠品的index
  findGiftGoodsIndex: function (goodsId) {
    var acIndex, goodsIndex;
    var tmpArr = this.data.cartGoodsList.slice();
    for (var i = 0, iLength = tmpArr.length; i < iLength; i++) {
      var listArr = tmpArr[i].giftList;
      if (!!tmpArr[i].giftList) {
        for (var j = 0, jLenth = listArr.length; j < jLenth; j++) {
          if (listArr[j].id === goodsId) {
            goodsIndex = j;
            acIndex = i;
          }
        }
      }
    }
    return {
      acIndex: acIndex,
      goodsIndex: goodsIndex
    }
  },
  // 计算“去结算按钮”上的数字
  calculateSelectedCount: function () {
    var count = 0;
    this.data.cartGoodsList.forEach(function (val, indx) {
      val.list.forEach(function (va, ind) {
        if (va.selected) {
          count += va.count
        }
      })
    })
    this.setData({
      totalSelectedCount: count
    })
  },
  // 计算优惠前的总金额
  calculateFullMoney: function () {
    var money = 0;
    this.data.cartGoodsList.forEach(function (val, indx) {
      val.list.forEach(function (va, ind) {
        if (va.selected) {
          money += va.price * va.count
        }
      })
    })
    this.setData({
      fullMoney: money
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }

})