Page({

  data: {
    hasCollection: true,
    // deleteInvalidBtnShow: false,
    invalidGoodsList: [
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉1'},
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉2' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉是的发送到发送到发送到发是否违反舒服撒地方撒地方3' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉4' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉发生大范德萨发三个地方华东师范5' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉6' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉7' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉8' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉9' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉飞洒发撒的发生大发送到发送到发送到范德萨10' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉谁发的所发生的发生发的是飞洒地方撒旦法撒旦法士大夫撒旦飞洒地方撒旦法师的11' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉是的范德萨范德萨范德萨发生的发的是范德萨发12' },
      { id: 1, deleteInvalidBtnShow: false, name: '奶粉13' }          
    ]
  },


  onLoad: function (options) {
  
  },
  //添加购物车
  addCart: function () {
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 800,
      mask: true
    })
  },
  // 一键清除所有失效是商品
  clearAllInvalidGoods: function() {

  },
  // 长按失效商品
  longtapInvalidItem: function (e) {
    var index = e.currentTarget.dataset['index'];
    var tmp = this.data.invalidGoodsList.slice();    
    tmp.forEach(function(val,ind){
      if(ind === index) {
        val['deleteInvalidBtnShow'] = true
      }
    })    
    this.setData({
      invalidGoodsList: tmp
    })
  },
  // 点击删除按钮，删除失效商品
  deleteInvalidItem: function (e) {
    var index = e.currentTarget.dataset['index'];
    var tmp = this.data.invalidGoodsList.slice();    
    var id = (tmp[index])['id'];
    tmp.splice(index,1);
    this.setData({
      invalidGoodsList: tmp
    })
  },
  // 点击阴影，隐藏删除按钮
  clickInvalidBg: function (e) {
    var index = e.currentTarget.dataset['index'];
    var tmp = this.data.invalidGoodsList.slice();
    tmp.forEach(function (val, ind) {
      if (ind === index) {
        val['deleteInvalidBtnShow'] = false
      }
    })
    this.setData({
      invalidGoodsList: tmp
    })
  },
 
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