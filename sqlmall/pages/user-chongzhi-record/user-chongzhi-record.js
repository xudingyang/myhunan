Page({
  data: {
    loadComplete: false,
    add: true,
    recordList: [
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: false,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: false,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      }
    ]
  },

  onLoad: function (options) {

  },
  
  // 如果是使用，就查看订单详情
  orderUserDetail: function (e) {
    var isAdd = e.currentTarget.dataset.add
    if (!isAdd) {
      wx.navigateTo({
        url: '/pages/order-detail/order-detail'
      })
    } 
  },

  /**
  * 页面上拉触底事件的处理函数
  */
  onReachBottom: function () {
    var tmp = this.data.recordList.slice()
    tmp = tmp.concat([
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      },
      {
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 300
      }
    ])
    this.setData({
      recordList: tmp
    })
  }
})