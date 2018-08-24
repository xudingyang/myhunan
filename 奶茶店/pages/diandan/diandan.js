Page({

  data: {
    localHasStore: true,
    teaList: [{
      category_tx1: '韩式原',
      category_tx2: '',
      categoryImage: '/images/tea/putao.jpg',
      selected: true,
      teaList: [{
        name: '广东好喝的原味奶茶',
        icon: '/images/tea/tea.jpg',
        introduction: '广东的奶茶，原味的哦，很好喝的奶茶，哈哈哈哈是范德萨的法撒旦发送到范德萨发送到阿斯蒂芬阿诗丹顿发大水发地方',
        price: '20',
        discount_price: '15'
      }]
    }, {
        category_tx1: '韩式原味',
        category_tx2: '奶茶苦',
        categoryImage: '/images/tea/putao.jpg',
        selected: false,
        teaList: [{
          name: '广东好喝的原味奶茶',
          icon: '/images/tea/tea.jpg',
          introduction: '广东的奶茶，原味的哦，很好喝的奶茶，哈哈哈哈是范德萨的法撒旦发送到范德萨发送到阿斯蒂芬阿诗丹顿发大水发地方',
          price: '20',
          discount_price: '15'
        }]
      }, {
        category_tx1: '韩式奶茶',
        category_tx2: '',
        categoryImage: '/images/tea/putao.jpg',
        selected: false,
        teaList: [{
          name: '广东好喝的原味奶茶',
          icon: '/images/tea/tea.jpg',
          introduction: '广东的奶茶，原味的哦，很好喝的奶茶，哈哈哈哈是范德萨的法撒旦发送到范德萨发送到阿斯蒂芬阿诗丹顿发大水发地方',
          price: '20',
          discount_price: '15'
        }]
      }]
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


  },
  selectCatogary: function(e) {
    let index = e.currentTarget.dataset.index;
    let tmpTeaList = this.data.teaList.slice();
    for (let i = 0, iLength = tmpTeaList.length; i < iLength; i++) {
      if (i === index) {
        tmpTeaList[i].selected = true
      } else {
        tmpTeaList[i].selected = false
      }
    }
    this.setData({
      teaList: tmpTeaList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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