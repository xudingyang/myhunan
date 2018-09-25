Page({

  data: {
    maxGiftCount: 2,           // 可以挑选礼物的个数
    currentSelectedCount: 0,   // 当前已经挑选礼物的个数 
    list: [
      {
        id: '1',
        name: '1雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
        size: '重量:900克 颜色:红色 分段:大段水电费第三方水电费第三方士大夫士大夫',
        imgUrl: '/images/good/naifen1.jpg',
        selected: false,
      },
      {
        id: '1',
        name: '1雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
        size: '重量:900克 颜色:红色 分段:大段司法所大法师打个地方官电饭锅电饭锅电饭锅',
        imgUrl: '/images/good/naifen1.jpg',
        selected: false,
      },
      {
        id: '1',
        name: '1雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
        size: '重量:900克 颜色:红色 分段:大段发士大夫撒旦法水电费水电费第三方第三方第三方',
        imgUrl: '/images/good/naifen1.jpg',
        selected: false,
      },
      {
        id: '1',
        name: '1雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
        size: '重量:900克 颜色:红色 分段:大段水电费水电费水电费水电费胜多负少的',
        imgUrl: '/images/good/naifen1.jpg',
        selected: false,
      },
      {
        id: '1',
        name: '1雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
        size: '重量:900克 颜色:红色 分段:大段',
        imgUrl: '/images/good/naifen1.jpg',
        selected: false,
      },
      {
        id: '1',
        name: '1雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
        size: '重量:900克 颜色:红色 分段:大段',
        imgUrl: '/images/good/naifen1.jpg',
        selected: false,
      },
      {
        id: '1',
        name: '1雅士利奶粉哈哈哈三岁十岁五岁婴幼儿哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或哈哈哈金黄色的飞机客户看韩剧',
        size: '重量:900克 颜色:红色 分段:大段',
        imgUrl: '/images/good/naifen1.jpg',
        selected: false,
      }
    ]
  },

  onLoad: function (options) {

  },
  selectGoods: function (e) {
    var that = this
    var currentCount = 0
    var index = e.currentTarget.dataset.goodsIndex
    var tmpList = this.data.list.slice()
    tmpList.forEach(function (val, indx) {
      if (indx === index) {
        if (val.selected) {
          val.selected = false
        } else {
          if (that.data.currentSelectedCount >= that.data.maxGiftCount) {
            var tip = '最多选' + that.data.maxGiftCount + '个赠品'
            wx.showToast({
              title: tip,
              icon: 'none',
              duration: 800,
              mask: true
            })
          } else {
            val.selected = true
          }
        }
      }
    })
    this.setData({
      list: tmpList
    })
    tmpList.forEach(function(val,indx){
      if (val.selected) {
        currentCount++
      }
    })
    this.setData({
      currentSelectedCount: currentCount
    })
  },
  backCart: function () {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  }
})