Page({

  data: {
    keywords: ['阿迪达斯', '三只松鼠'],
    name: '尽快交水电费离开绝对是开了房间施蒂利克福建省大路口附近ADSL开房记录卡萨丁积分卡三等奖法撒旦胜多负少大范德萨范德萨发生大',
    activities: ['买一送一', '满300减200'],
    price: 65.50,
    sizeSpread: true,
    goodsCount: 1,
    isCollected: true,
    hadSelectedTxt: '',
    isSoldOut: false,
    goodsSize: [],
    goodsInfo: []
  },

  onLoad: function (options) {
    // 获取商品规格尺寸
    let goodsSize = [{
      sizeName: '段位',
      sizeContent: [
        {
          itemname: '1段听装',
          selected: true
        },
        {
          itemname: '2段听装',
          selected: false
        },
        {
          itemname: '3段听装的是否水电费水电费水电费水电费水电费水电费水电费水电费水电费',
          selected: false
        },
        {
          itemname: '4段听装',
          selected: false
        },
        {
          itemname: '5段听装',
          selected: false
        }
      ]
    },
    {
      sizeName: '年龄段',
      sizeContent: [
        {
          itemname: '1岁以下',
          selected: true
        },
        {
          itemname: '1到2岁',
          selected: false
        },
        {
          itemname: '3岁',
          selected: false
        },
        {
          itemname: '4岁以上',
          selected: false
        }
      ]
    }]
    this.setData({
      goodsSize: goodsSize
    })
    this.selectedSting()    

    // 获取商品参数
    let goodsInfo = [
      {
        name: '商品编号',
        content: '234567878'
      },
      {
        name: '大类',
        content: '奶粉'
      },
      {
        name: '品牌',
        content: '雅士利'
      },
      {
        name: '段位',
        content: '1段'
      },
      {
        name: '年龄',
        content: '3岁'
      },
      {
        name: '保质期',
        content: '24个月'
      },
      {
        name: '包装',
        content: '桶装'
      },
      {
        name: '净含量',
        content: '900g'
      }
    ]
    this.setData({
      goodsInfo: goodsInfo
    })
  },
  // 展开/闭合规格区域
  spreadSizeBox: function () {
    var tmp = !this.data.sizeSpread
    this.setData({
      sizeSpread: tmp
    })
  },
  // 点击规格
  selectSizeItem: function (e) {
    var itemIndex = e.currentTarget.dataset.itemIndex
    var itemTextIndex = e.target.dataset.textIndex
    var goodsSizeTmp = this.data.goodsSize.slice()
    if (parseInt(itemTextIndex) >= 0) {
      goodsSizeTmp.forEach(function (val, indx) {
        if (indx === itemIndex) {
          val.sizeContent.forEach(function (va, ind) {
            console.log(va)
            if (ind === itemTextIndex) {
              va.selected = true
            } else {
              va.selected = false
            }
          })
        }
      })
      this.setData({
        goodsSize: goodsSizeTmp
      })
      this.selectedSting()
    }
  },
  // 设置选择规格的字符串
  selectedSting: function () {
    var str = ''
    this.data.goodsSize.forEach(function(val,indx){
      val.sizeContent.forEach(function(va,ind){
        if (va.selected) {
          str = str + va.itemname + ','
        }
      })
    })
    str = str + this.data.goodsCount + '个'
    this.setData({
      hadSelectedTxt: str
    })
  },
  // 点击加号
  clickAdd: function () {
    var tmp = this.data.goodsCount
    tmp++
    this.setData({
      goodsCount: tmp
    })
    this.selectedSting()    
  },
  // 点击减号
  clickSubtraction: function () {
    var tmp = this.data.goodsCount
    if (tmp > 1) {
      tmp--
      this.setData({
        goodsCount: tmp
      })
    }
    this.selectedSting()    
  },
  // 返回首页
  goHomePage: function () {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },
  // 点击收藏
  collectGoods: function () {
    if (this.data.isCollected) {
      this.setData({
        isCollected: false
      })
      wx.showToast({
        title: '取消收藏成功',
        icon: 'success',
        duration: 800,
        mask: true
      })
    } else {
      this.setData({
        isCollected: true
      })
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 800,
        mask: true
      })
    }
  },
  // 点击购物车，去购物车页面
  goCartPage: function () {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  // 加入购物车
  addCart: function () {
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 800,
      mask: true
    })
  },
  // 直接购买
  buy: function () {

  }
})