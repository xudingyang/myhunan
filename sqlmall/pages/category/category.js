// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryTabs: [
      { tx: '热门推荐', isActive: true },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '儿童餐具', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '幼儿读物', isActive: false },
      { tx: '幼儿读物', isActive: false },
      { tx: '幼儿读物', isActive: false },
      { tx: '幼儿读物', isActive: false },
      { tx: '幼儿读物', isActive: false },
      { tx: '幼儿读物', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '奶粉', isActive: false },
      { tx: '幼儿读物', isActive: false },
      { tx: '幼儿读物', isActive: false },
      { tx: '幼儿读物', isActive: false }
    ],
    goods: [
      { name: '全部', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },    
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },      
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },      
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },      
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },              
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },      
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },      
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },      
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },      
      { name: '时尚上衣', pic: '/images/good/yifu.jpg' },            
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' },
      { name: '精品耳机', pic: '/images/good/erji.jpg' }      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickCategorytab: function (e) {
    var currTab = e.currentTarget;
    var currIndex = currTab.dataset.index;
    var tmpArr = this.data.categoryTabs.slice();
    tmpArr.forEach(function(value,index){
      if (index != currIndex) {
        tmpArr[index].isActive = false;
      } else {
        tmpArr[index].isActive = true;        
      }
    })
    this.setData({
      categoryTabs: tmpArr
    })
    console.log(e.target)
  },
  goSearchPage: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  // 点击一个分类图标
  clickCategoryItem: function () {
    wx.navigateTo({
      url: '/pages/search/search?searchWord=手机',
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