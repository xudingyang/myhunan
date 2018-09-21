Page({
  data: {
    loadComplete: false,
     recordList: [
      {
        name: '汉林奶茶店',
        money: 30,
        time: '2018-02-23 23:56:34',
        add: true,
        orderNumber: '12334567321',
        count: 3
      },
       {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: false,
         orderNumber: '12334567321',
         count: 3
       },
       {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: false,
         orderNumber: '12334567321',
         count: 3
       }, {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: true,
         orderNumber: '12334567321',
         count: 3
       }, {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: true,
         orderNumber: '12334567321',
         count: 3
       }, {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: true,
         orderNumber: '12334567321',
         count: 3
       }, {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: true,
         orderNumber: '12334567321',
         count: 3
       }, {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: true,
         orderNumber: '12334567321',
         count: 3
       }, {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: true,
         orderNumber: '12334567321',
         count: 3
       }, {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: true,
         orderNumber: '12334567321',
         count: 3
       }, {
         name: '汉林奶茶店',
         money: 30,
         time: '2018-02-23 23:56:34',
         add: true,
         orderNumber: '12334567321',
         count: 3
       }
    ]
  },

  onLoad: function (options) {

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