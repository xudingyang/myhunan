Page({
  data: {
    loadComplete: false,
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
  orderDetail: function() {
    wx.navigateTo({
      url: '/pages/order-detail/order-detail'
    })
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