Page({

  data: {
    cancelTxt: '取消',  // 搜索/取消按钮的文字 
    inputTxt: '',       // 输入框初始文字
    inputCurrTxt: '',  // 输入框当前文字
    inputEmpty: true,   // 输入框是否为空
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
    } else {
      this.setData({
        inputEmpty: true,
        cancelTxt: '取消'
      });
    }
  },
  // 点击清空输入框按钮
  clearSearchInput: function (e) {
    this.setData({
      inputTxt: '',
      inputEmpty: true,
      cancelTxt: '取消'
    });
  },

  // 点击键盘的搜索按钮
  clickSearchkey: function (e) {
    var searchWord = e.detail.value;
    this.postSearchWord(searchWord);
  },
  // 发送搜索词
  postSearchWord: function (searchWord) {
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
    tmpArr.push([categoryRes, brandRes, priceRes])
    if ((categoryRes + brandRes + priceRes).length > 0) {
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
    var tmp = this.data.goodsList.slice()
    tmp.push([3, 4, 5, 6, 7, 8])
    this.setData({
      goodsList: tmp
    })
  }

})