// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cancelTxt: '取消',  // 搜索/取消按钮的文字 
    hasRes: false,     // 搜索是否有结果 
    inputTxt: '',       // 输入框初始文字
    inputCurrTxt: '',  // 输入框当前文字
    inputEmpty: true,   // 输入框是否为空
    hotWords: ['雀巢', '娃哈哈', '雅士利', '雀巢', '娃哈哈', '雅士利', '雀巢', '娃哈哈', '雅士利', '雀巢', '娃哈哈', '雅士利'],
    searchHistoty: ['雀巢', '娃哈哈', '雅士利'],
    historyShow: true,    // 控制搜索历史是否显示 
    hotWordShow: false,    // 控制热词列表是否显示
    searchResShow: false,  // 控制搜索返回词汇列表显示
    GoodsListShow: true,  // 控制搜索商品显示,
    priceSort: 0,   // 价格排序方式，0默认，1升序，2降序
    zongheActive: true,          // 点击综合
    xiaoliangActive: false,      // 点击销量
    priceActive: false,          // 点击价格
    priceAscendActive: false,    // 点击价格上升
    priceDescendActive: false,    // 点击价格下降
    shaiXuan: false,             // 控制筛选按钮
    shaiXuanModalShow: false,    // 控制筛选层是否出现
    goodsList: [1, 2, 3, 4, 5, 6],
    loadComplete: false,
    shaiXuanResult: [],
    shaiXuanCategory: [
      { name: '奶粉', checked: false },
      { name: '奶粉', checked: false },
      { name: '奶粉奶粉', checked: false },
      { name: '奶粉奶瓶', checked: false },
      { name: '奶粉', checked: false },
      { name: '奶粉', checked: false }
    ],
    shaiXuanPinPai: [
      { name: '雅士利', checked: false },
      { name: '雅士利', checked: false },
      { name: '雅士利', checked: false },
      { name: '雅士利', checked: false },
      { name: '雅士利', checked: false },
      { name: '雅士利', checked: false }
    ],
    priceRange: [
      { name: '100以内', checked: false },
      { name: '100到500', checked: false },
      { name: '500到1000', checked: false },
      { name: '1000以上', checked: false }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var queryTxt = options.searchWord
    if (queryTxt) {
      this.setData({
        inputTxt: queryTxt
      })
    }
  },
  // 点击搜索/取消按钮
  clickCancel: function () {
    if (this.data.cancelTxt === '搜索') {
      this.postSearchWord(this.data.inputCurrTxt)
    } else {
      wx.navigateBack({})
    }
  },
  // 监听输入框文本
  listenSearchInput: function (e) {
    var txt = e.detail.value;
    this.setData({
      inputCurrTxt: txt
    })
    if (txt.length > 0) {
      this.setData({
        inputEmpty: false,
        cancelTxt: '搜索',
        inputCurrTxt: txt
      });
      this.showResWordsPanel();
    } else {
      this.setData({
        inputEmpty: true,
        cancelTxt: '取消'
      });
      this.showHotWordsPanel();
    }
  },
  // 点击清空输入框按钮
  clearSearchInput: function (e) {
    this.setData({
      inputTxt: '',
      inputEmpty: true,
      cancelTxt: '取消'
    });
    this.showHotWordsPanel();
  },
  // 点击热门词汇，直接发送搜索请求
  clickHotWords: function (e) {
    var tx = e.currentTarget.dataset.tx;
    this.setData({
      inputTxt: tx,
      inputCurrTxt: tx,
      inputEmpty: false,
      cancelTxt: '搜索'
    });
    this.postSearchWord(tx);
  },
  // 点击键盘的搜索按钮
  clickSearchkey: function (e) {
    var searchWord = e.detail.value;
    this.postSearchWord(searchWord);
  },
  // 发送搜索词
  postSearchWord: function (searchWord) {
    this.showGoodListPanel();
    console.log(searchWord)
  },
  // 点击综合
  clickZongHe: function () {
    this.setData({
      zongheActive: true,
      xiaoliangActive: false,
      priceActive: false,
      priceAscendActive: false,
      priceDescendActive: false,
      priceSort: 0
    })
  },
  // 点击销量
  clickXiaoLiang: function () {
    this.setData({
      zongheActive: false,
      xiaoliangActive: true,
      priceActive: false,
      priceAscendActive: false,
      priceDescendActive: false,
      priceSort: 0
    })
  },
  // 点击价格
  clickAscend: function () {
    // 如果是默认
    var priceSort = this.data.priceSort;
    if (priceSort === 0) {
      this.setData({
        zongheActive: false,
        xiaoliangActive: false,
        priceActive: true,
        priceAscendActive: true,
        priceDescendActive: false,
        priceSort: 1
      })
    }
    // 如果是升序
    if (priceSort === 1) {
      this.setData({
        zongheActive: false,
        xiaoliangActive: false,
        priceActive: true,
        priceAscendActive: false,
        priceDescendActive: true,
        priceSort: 2
      })
    }
    // 如果是降序
    if (priceSort === 2) {
      this.setData({
        zongheActive: false,
        xiaoliangActive: false,
        priceActive: true,
        priceAscendActive: true,
        priceDescendActive: false,
        priceSort: 1
      })
    }
  },
  // 点击筛选
  clickShaiXuan: function () {
    console.log('筛选')
    this.setData({
      zongheActive: true,
      xiaoliangActive: false,
      priceActive: false,
      priceAscendActive: false,
      priceDescendActive: false,
      shaiXuan: false,
      shaiXuanModalShow: true,
      priceSort: 0
    })
  },
  // 点击筛选弹出层
  clickModal: function () {
    console.log(11)
  },
  // 点击分类选项
  clickCategoryItem: function (e) {
    var index = e.currentTarget.dataset['index'];
    var tmpArr = this.data.shaiXuanCategory.slice();
    tmpArr.forEach(function (val, ind, arr) {
      if (index === ind) {
        if (tmpArr[ind]['checked'] === true) {
          tmpArr[ind]['checked'] = false;
        } else {
          tmpArr[ind]['checked'] = true;
        }
      } else {
        tmpArr[ind]['checked'] = false
      }
    })
    this.setData({
      shaiXuanCategory: tmpArr
    })
  },
  // 点击品牌选项
  clickBrandItem: function (e) {
    var index = e.currentTarget.dataset['index'];
    var tmpArr = this.data.shaiXuanPinPai.slice();
    tmpArr.forEach(function (val, ind) {
      if (index === ind) {
        if (tmpArr[ind]['checked'] === true) {
          tmpArr[ind]['checked'] = false;
        } else {
          tmpArr[ind]['checked'] = true;
        }
      } else {
        tmpArr[ind]['checked'] = false;
      }
    })
    this.setData({
      shaiXuanPinPai: tmpArr
    })
  },
  huanyipi: function (e) {
    console.log(e)
  },
  // 点击价格区间选项
  clickPriceItem: function (e) {
    var index = e.currentTarget.dataset['index'];
    var tmpArr = this.data.priceRange.slice();
    tmpArr.forEach(function (val, ind) {
      if (index === ind) {
        if (tmpArr[ind]['checked'] === true) {
          tmpArr[ind]['checked'] = false;
        } else {
          tmpArr[ind]['checked'] = true;
        }
      } else {
        tmpArr[ind]['checked'] = false
      }
    })
    this.setData({
      priceRange: tmpArr
    })
  },
  // 点击筛选取消按钮
  clickShaiXuanCancel: function () {
    this.setData({
      shaiXuanModalShow: false,
      shaiXuan: false
    })
  },
  // 点击筛选确定按钮
  clickShaiXuanYes: function () {
    var categoryRes = '';
    var brandRes = '';
    var priceRes = '';
    this.data.shaiXuanCategory.forEach(function (val, ind) {
      if (val['checked'] === true) {
        categoryRes = val['name']
      }
    });
    this.data.shaiXuanPinPai.forEach(function (val, ind) {
      if (val['checked'] === true) {
        brandRes = val['name']
      }
    });
    this.data.priceRange.forEach(function (val, ind) {
      if (val['checked'] === true) {
        priceRes = val['name']
      }
    });
    var tmpArr = []
    tmpArr.push([categoryRes,brandRes,priceRes])
    if ((categoryRes+brandRes+priceRes).length > 0) {
      this.setData({
        shaiXuanResult: tmpArr,
        shaiXuan: true,
        shaiXuanModalShow: false
      })
      // 根据筛选条件，做余下操作
      // ...
    }
  },
  // 点击商品
  goGoodsDetail: function () {
    wx.navigateTo({
      url: '/pages/goods-detail/goods-detail'
    })
  },
  //  ##################   商品列表事件  #################
  addCart: function (e) {
    wx.showToast({
      title: '添加购物车成功',
      icon: 'success',
      duration: 1000,
      mask: true
    })
  },
  // 列表滚到底部，加载更多
  loadMoreGoods: function () {
    console.log(111)
    var tmp = this.data.goodsList.slice()
    tmp.push([3, 4, 5, 6, 7, 8])
    this.setData({
      goodsList: tmp
    })
  },


  // ##########   杂项方法  ###########

  // 显示推荐热词
  showHotWordsPanel: function () {
    this.setData({
      hotWordShow: true,
      searchResShow: false,
      GoodsListShow: false
    })
  },
  // 显示搜索返回词汇列表
  showResWordsPanel: function () {
    this.setData({
      hotWordShow: false,
      searchResShow: true,
      GoodsListShow: false
    })
  },
  // 显示搜索商品结果列表
  showGoodListPanel: function () {
    this.setData({
      hotWordShow: false,
      searchResShow: false,
      GoodsListShow: true
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